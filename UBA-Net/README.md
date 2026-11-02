# UBA-Net: core model

This directory contains the causal inertial-channel completion model used in UBA-Net, including sensor encoders, causal temporal convolutional blocks, prototype-based reconstruction, and residual correction.

The implementation was extracted from the supplied Jetson deployment reproducibility code. This release contains the model architecture only; trained weights, normalization statistics, training scripts, and experimental data are not included. Reproducing reported trained-model results requires the matching checkpoint and preprocessing.

## Interface

`UBA(channels=18)` accepts a tensor with shape `(batch, time, 36)`: the first 18 channels contain normalized observations and the remaining 18 are 0/1 observation masks. The forward method returns the completed 18 channels at the last time step; `sequence` returns a completed sequence. Observed channels are preserved.

The model requires PyTorch.
