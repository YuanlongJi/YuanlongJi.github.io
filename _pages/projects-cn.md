---
layout: single
title: "研究方向与项目"
permalink: /cn/projects/
lang: zh-CN
author_profile: true
---

<div class="research-intro" markdown="1">

我以技术骨干身份参与国家自然科学基金面上项目（2025–2028，项目经费48万元）及北京市自然科学基金—海淀联合基金项目（2023–2026，20万元），围绕外骨骼肌骨防护与骨科康复开展研究；曾主持、参与两项国家级大学生创新训练项目（经费分别为1万元、2万元），并主持北京工业大学星火基金重点项目（3000元）。这些经历贯穿机械设计、原型研制、感知控制与系统验证，研究主线是让外骨骼从实验室走向生活。

</div>

<section class="research-module" id="research-1" markdown="1">

## 1. 让同一套驱动适应不同辅助任务

康复训练与日常助行对外骨骼的输出方式提出了不同要求。我的研究首先从机构入手：能否通过制动与传动路径的切换，让一套驱动承担不同任务？WRRC 的耦合动滑轮康复机构是这一思路的起点，完成了概念设计与初步实验。沿着这条路线，RA-L 进一步将模式切换落实到执行器设计与控制，实现力矩／张力两类输出，为多用途外骨骼提供驱动基础。

<div class="research-gallery research-gallery--2"><figure><a href="/assets/images/wrrc-system.png" target="_blank" rel="noopener"><img src="/assets/images/wrrc-system.png" alt="前期：WRRC 耦合动滑轮康复机构" loading="lazy"></a><figcaption>前期：WRRC 耦合动滑轮康复机构</figcaption></figure><figure><video class="research-video" controls playsinline preload="none" poster="/assets/images/dual-mode-actuator.png" aria-label="延续：RA-L 力矩／张力双模式执行器"><source src="/assets/videos/ral-supplementary.mp4" type="video/mp4"><a href="/assets/videos/ral-supplementary.mp4">Video</a></video><figcaption>延续：RA-L 力矩／张力双模式执行器</figcaption></figure></div>

- **从机构原理出发：**WRRC 工作探索耦合动滑轮康复机构，获得最佳论文奖。
- **向执行器与控制推进：**RA-L 工作发展力矩／张力双模式绳驱动执行器，将可切换机制用于不同辅助需求。

<div class="research-publications" markdown="1">

### 相关论文

1. **Y. Ji** et al. Conceptual Design and Preliminary Experiment of an Orthopedic Rehabilitation Exoskeleton Based on the Coupled Movable Pulley Mechanism (CMPM). *WRRC, 2024, pp. 1–6* (Best Paper Award). [DOI](https://doi.org/10.1109/WRRC62201.2024.10696897)

2. **Y. Ji** et al. Design and Control of a Cable-Driven Switchable Actuator with Torque/Tension Dual Modes for Exoskeletons. *IEEE RA-L, 2026* (accepted). [Video](/assets/videos/ral-supplementary.mp4)

</div>

</section>

<section class="research-module" id="research-2" markdown="1">

## 2. 让外骨骼跟上人的步伐，并走出台架

驱动机构决定如何出力，人体状态感知则决定何时出力。为让外骨骼跟上连续变化的步伐，我在 TNSRE 工作中研究实时步态相位估计，为辅助控制提供连续的运动状态输入。接下来的问题是如何把这一方法带到实际穿戴系统中：在可重构髋关节外骨骼工作中，将前期识别方法部署到共用穿戴接口的台架／背包双构型平台，衔接实验室验证与室内外应用。

<div class="research-gallery research-gallery--2"><figure><a href="/assets/images/gait-experiment.png" target="_blank" rel="noopener"><img src="/assets/images/gait-experiment.png" alt="前期：TNSRE 实时步态相位识别" loading="lazy"></a><figcaption>前期：TNSRE 实时步态相位识别</figcaption></figure><figure><video class="research-video" controls playsinline preload="none" poster="/assets/images/reconfigurable-preprint.png" aria-label="接续：可重构髋关节外骨骼系统部署"><source src="/assets/videos/reconfigurable-exoskeleton-supplementary.mp4" type="video/mp4"><a href="/assets/videos/reconfigurable-exoskeleton-supplementary.mp4">Video</a></video><figcaption>接续：可重构髋关节外骨骼系统部署</figcaption></figure></div>

- **先建立感知方法：**TNSRE 基于人体运动隐式建模估计步态相位，稳态相位均方根误差为2.729%，并开放配套数据集。
- **再连接穿戴平台：**可重构外骨骼承接前期步态识别工作，通过台架与背包配置切换，支持不同场景下的系统研究。
- **验证平台切换效率：**3名健康受试者完成30次构型切换试验，平均用时30.1 ± 16.3秒。

<div class="research-publications" markdown="1">

### 相关论文

1. **Y. Ji** et al. Human Locomotion Implicit Modeling-Based Real-Time Gait Phase Estimation. *IEEE TNSRE, 2025, 33: 4124–4136*. [DOI](https://doi.org/10.1109/TNSRE.2025.3621076) · [Dataset](https://huggingface.co/datasets/YuanlongJi/GPE-MM)

2. **Y. Ji** et al. A Reconfigurable Bidirectional Cable-Driven Hip Exoskeleton with Swappable Bench/Backpack Dual-configuration Actuation. *arXiv:2609.25639, 2026* (preprint). [arXiv](https://arxiv.org/abs/2609.25639) · <a href="/assets/videos/reconfigurable-exoskeleton-supplementary.mp4" target="_blank" rel="noopener">Video</a>

</div>

</section>

<section class="research-module" id="research-3" markdown="1">

## 3. 让辅助过程更安全、更柔顺

当感知与驱动进入穿戴系统，研究还需要回答：机器人怎样与人接触，辅助方向改变时又怎样平顺过渡？围绕这一问题，我从控制与机构两个层面开展工作：安全导纳边界约束交互范围，柔顺切换控制处理跖屈／背屈转换，变刚度机构则提供机械柔顺性调节的另一条路径。这些工作共同支撑外骨骼从“能够运动”走向更适合人机协同的辅助。

<div class="research-gallery research-gallery--3"><figure><a href="/assets/images/safe-admittance.png" target="_blank" rel="noopener"><img src="/assets/images/safe-admittance.png" alt="安全导纳边界与交互实验" loading="lazy"></a><figcaption>安全导纳边界与交互实验</figcaption></figure><figure><a href="/assets/images/ankle-system.png" target="_blank" rel="noopener"><img src="/assets/images/ankle-system.png" alt="踝关节辅助方向的柔顺切换" loading="lazy"></a><figcaption>踝关节辅助方向的柔顺切换</figcaption></figure><figure><a href="/assets/images/variable-stiffness-architecture.png" target="_blank" rel="noopener"><img src="/assets/images/variable-stiffness-architecture.png" alt="交叉四杆变刚度机构" loading="lazy"></a><figcaption>交叉四杆变刚度机构</figcaption></figure></div>

- **限定安全交互范围：**利用空间分类模型定义康复机器人的安全导纳边界。
- **处理辅助切换过程：**在双向绳驱动踝关节外骨骼中研究跖屈／背屈辅助的柔顺过渡。
- **拓展机械柔顺性：**开展交叉四杆变刚度执行器优化设计及仿真验证，探索结构层面的刚度调节。

<div class="research-publications" markdown="1">

### 相关论文

1. Y. Tao, **Y. Ji**, et al. A Safe Admittance Boundary Algorithm for Rehabilitation Robot Based on Space Classification Model. *Applied Sciences, 2023, 13(9): 5816*. [DOI](https://doi.org/10.3390/app13095816)

2. W. Liu, **Y. Ji**, et al. A Compliant Transition Control Strategy for Plantarflexion-Dorsiflexion Switch in a Bidirectional Cable-Driven Ankle Exoskeleton. *IFAC-PapersOnLine, 2025, 59(35): 362–367*. [DOI](https://doi.org/10.1016/j.ifacol.2025.12.503)

3. **Y. Ji** et al. Optimization Design and Simulation Validation of a Variable Stiffness Actuator Based on a Crossed Four-Bar Mechanism. *ACIRS, 2026* (accepted).

</div>

</section>

<section class="research-module" id="research-4" markdown="1">

## 4. 把感知、驱动与交互连接到环境适应

驱动方式、步态状态和人机交互最终都服务于同一个问题：面对不同的人体状态与使用环境，外骨骼应当提供怎样的辅助运动？在参与的 RBME 综述工作中，我们梳理辅助轨迹规划与多模态参数感知的联系，将上述具体研究放到“从实验室优化步态到环境自适应运动”的整体框架中。这也贯穿了我的研究目标：让外骨骼从实验室走向生活。

<div class="research-gallery research-gallery--1"><figure><a href="/assets/images/trajectory-review.png" target="_blank" rel="noopener"><img src="/assets/images/trajectory-review.png" alt="从实验室优化步态到环境自适应运动" loading="lazy"></a><figcaption>从实验室优化步态到环境自适应运动</figcaption></figure></div>

- **从具体方法回到系统问题：**总结下肢外骨骼辅助轨迹规划策略，分析人体状态与环境信息如何参与辅助运动生成。

<div class="research-publications" markdown="1">

### 相关论文

1. Q. Ye, X. Yang, R. Zhao, **Y. Ji**, et al. Assistive Trajectory Planning for Lower Limb Exoskeletons: Strategies From Laboratory-Optimized Gait to Environmentally-Adaptive Locomotion Through Multimodal Parameter Awareness. *IEEE RBME, 2026, 19: 41–64*. [DOI](https://doi.org/10.1109/RBME.2025.3646165)

</div>

</section>

[查看全部论文及完整作者信息](/cn/publications/)
