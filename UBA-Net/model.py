"""UBA-Net causal inertial-channel completion model."""
import torch
from torch import nn
from torch.nn import functional as F

class CausalConv(nn.Conv1d):
    def __init__(self,channels,dilation):
        self.left=2*dilation
        super().__init__(channels,channels,3,padding=self.left,dilation=dilation)
    def forward(self,x):return super().forward(x)[...,:-self.left]

class Block(nn.Module):
    def __init__(self,channels,dilation,dropout):
        super().__init__();self.conv=CausalConv(channels,dilation)
        self.norm=nn.LayerNorm(channels);self.drop=nn.Dropout(dropout)
    def forward(self,x):
        return x+self.drop(F.gelu(self.norm(self.conv(x).transpose(1,2)))).transpose(1,2)

class UBA(nn.Module):
    def __init__(self,channels=21,hidden=64,K=8,dropout=.1,variant='full'):
        super().__init__();assert channels in (18,21)
        self.channels=channels;self.node=channels//3;self.variant=variant;self.method='uba'
        self.sensor_encoders=nn.ModuleList([nn.Sequential(nn.Linear(2*self.node,16),nn.GELU(),nn.LayerNorm(16)) for _ in range(3)])
        self.fusion=nn.Linear(48+channels,hidden)
        ds=[1,2,4,8,16,32]
        self.blocks=nn.ModuleList([Block(hidden,d,dropout) for d in ds])
        self.norm=nn.LayerNorm(hidden);self.prototypes=nn.Parameter(torch.randn(K,channels)*.1)
        self.selector=nn.Sequential(nn.Linear(hidden+channels,hidden),nn.GELU(),nn.Linear(hidden,K))
        self.residual=nn.Sequential(nn.Linear(hidden+2*channels,hidden),nn.GELU(),nn.Dropout(dropout),nn.Linear(hidden,channels))
        self.receptive_field=1+2*sum(ds)
    def encode(self,x):
        obs,mask=x[...,:self.channels],x[...,self.channels:]
        safe=torch.where(mask.bool(),obs,torch.zeros_like(obs))
        tokens=[enc(torch.cat((safe[...,i*self.node:(i+1)*self.node],mask[...,i*self.node:(i+1)*self.node]),-1)) for i,enc in enumerate(self.sensor_encoders)]
        h=self.fusion(torch.cat((*tokens,mask),-1)).transpose(1,2)
        for block in self.blocks:h=block(h)
        return self.norm(h.transpose(1,2))
    def sequence(self,x,parts=False):
        h=self.encode(x);mask=x[...,self.channels:]
        alpha=self.selector(torch.cat((h,mask),-1)).softmax(-1)
        proto=alpha@self.prototypes
        if self.variant=='no_prototype':proto=torch.zeros_like(proto)
        delta=self.residual(torch.cat((h,mask,proto),-1))
        if self.variant=='no_residual':delta=torch.zeros_like(delta)
        out=torch.where(mask.bool(),x[...,:self.channels],proto+delta)
        return (out,proto,delta,alpha) if parts else out
    def forward(self,x):return self.sequence(x)[:,-1]

