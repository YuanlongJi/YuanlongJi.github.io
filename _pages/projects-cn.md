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

<nav class="research-index" aria-label="研究方向"><a href="#research-1"><span>01</span> 机电设计</a><a href="#research-2"><span>02</span> 感知与规划</a><a href="#research-3"><span>03</span> 交互控制</a></nav>

<section class="research-module" id="research-1" markdown="1">

<div class="research-number">研究方向 / 01</div>

## 绳驱动外骨骼机电一体化设计

面向外骨骼从实验室走向日常应用的需求，研究驱动机构、传动形式与穿戴接口的协同设计。通过可切换驱动模式、可重构系统和变刚度机构，使同一平台能够适应不同辅助任务与使用场景。

<div class="research-gallery"><figure><a href="/assets/images/dual-mode-actuator.png" target="_blank" rel="noopener"><img src="/assets/images/dual-mode-actuator.png" alt="力矩／张力双模式执行器" loading="lazy"></a><figcaption>力矩／张力双模式执行器</figcaption></figure><figure><a href="/assets/images/reconfigurable-preprint.png" target="_blank" rel="noopener"><img src="/assets/images/reconfigurable-preprint.png" alt="台架／背包可重构髋关节外骨骼" loading="lazy"></a><figcaption>台架／背包可重构髋关节外骨骼</figcaption></figure></div>

- 设计力矩／张力双模式绳驱动执行器，将两类输出集成于同一机构。
- 研制台架与背包双构型髋关节外骨骼；3名受试者的30次试验中，平均配置切换用时30.1 ± 16.3秒。
- 开展耦合动滑轮康复外骨骼及交叉四杆变刚度机构的设计与验证。


<div class="research-publications" markdown="1">

### 相关论文

1. **Y. Ji** et al. Design and Control of a Cable-Driven Switchable Actuator with Torque/Tension Dual Modes for Exoskeletons. *IEEE RA-L, 2026* (accepted). [Video](/assets/videos/ral-supplementary.mp4)

2. **Y. Ji** et al. A Reconfigurable Bidirectional Cable-Driven Hip Exoskeleton with Swappable Bench/Backpack Dual-configuration Actuation. *arXiv:2609.25639, 2026* (preprint). [arXiv](https://arxiv.org/abs/2609.25639) · <a href="/assets/videos/reconfigurable-exoskeleton-supplementary.mp4" target="_blank" rel="noopener">Video</a>

3. **Y. Ji** et al. Conceptual Design and Preliminary Experiment of an Orthopedic Rehabilitation Exoskeleton Based on the Coupled Movable Pulley Mechanism (CMPM). *WRRC, 2024, pp. 1–6* (Best Paper Award). [DOI](https://doi.org/10.1109/WRRC62201.2024.10696897)

4. **Y. Ji** et al. Optimization Design and Simulation Validation of a Variable Stiffness Actuator Based on a Crossed Four-Bar Mechanism. *ACIRS, 2026* (accepted).

</div>

</section>

<section class="research-module" id="research-2" markdown="1">

<div class="research-number">研究方向 / 02</div>

## 外骨骼智能感知与运动规划

外骨骼要在真实环境中提供合适的辅助，需要理解使用者“走到哪一步”以及运动需求如何变化。围绕连续步态状态估计、多模态参数感知与辅助轨迹规划，连接人体运动信息和机器人辅助策略。

<div class="research-gallery"><figure><a href="/assets/images/gait-experiment.png" target="_blank" rel="noopener"><img src="/assets/images/gait-experiment.png" alt="人体运动感知与穿戴实验" loading="lazy"></a><figcaption>人体运动感知与穿戴实验</figcaption></figure><figure><a href="/assets/images/trajectory-review.png" target="_blank" rel="noopener"><img src="/assets/images/trajectory-review.png" alt="辅助轨迹规划与环境适应框架" loading="lazy"></a><figcaption>辅助轨迹规划与环境适应框架</figcaption></figure></div>

- 基于人体运动隐式建模进行实时步态相位估计，论文报告的稳态相位均方根误差为2.729%。
- 系统梳理下肢外骨骼辅助轨迹规划方法，分析从实验室优化步态到环境自适应运动的技术路径。


<div class="research-publications" markdown="1">

### 相关论文

1. **Y. Ji** et al. Human Locomotion Implicit Modeling-Based Real-Time Gait Phase Estimation. *IEEE TNSRE, 2025, 33: 4124–4136*. [DOI](https://doi.org/10.1109/TNSRE.2025.3621076) · [Dataset](https://huggingface.co/datasets/YuanlongJi/GPE-MM)

2. Q. Ye, X. Yang, R. Zhao, **Y. Ji**, et al. Assistive Trajectory Planning for Lower Limb Exoskeletons: Strategies From Laboratory-Optimized Gait to Environmentally-Adaptive Locomotion Through Multimodal Parameter Awareness. *IEEE RBME, 2026, 19: 41–64*. [DOI](https://doi.org/10.1109/RBME.2025.3646165)

</div>

</section>

<section class="research-module" id="research-3" markdown="1">

<div class="research-number">研究方向 / 03</div>

## 安全柔顺人机交互控制

针对机器人与人体直接接触时的安全性和辅助连续性，研究导纳边界与模式切换控制，使机器人能够在限定交互空间内响应人体运动，并在不同辅助方向之间柔顺过渡。

<div class="research-gallery"><figure><a href="/assets/images/ankle-system.png" target="_blank" rel="noopener"><img src="/assets/images/ankle-system.png" alt="双向绳驱动踝关节外骨骼" loading="lazy"></a><figcaption>双向绳驱动踝关节外骨骼</figcaption></figure><figure><a href="/assets/images/safe-admittance.png" target="_blank" rel="noopener"><img src="/assets/images/safe-admittance.png" alt="康复机器人安全交互实验" loading="lazy"></a><figcaption>康复机器人安全交互实验</figcaption></figure></div>

- 利用空间分类模型定义康复机器人的安全导纳边界。
- 研究踝关节跖屈／背屈辅助切换中的柔顺过渡，结合绳驱动系统进行验证。


<div class="research-publications" markdown="1">

### 相关论文

1. W. Liu, **Y. Ji**, et al. A Compliant Transition Control Strategy for Plantarflexion-Dorsiflexion Switch in a Bidirectional Cable-Driven Ankle Exoskeleton. *IFAC-PapersOnLine, 2025, 59(35): 362–367*. [DOI](https://doi.org/10.1016/j.ifacol.2025.12.503)

2. Y. Tao, **Y. Ji**, et al. A Safe Admittance Boundary Algorithm for Rehabilitation Robot Based on Space Classification Model. *Applied Sciences, 2023, 13(9): 5816*. [DOI](https://doi.org/10.3390/app13095816)

</div>

</section>

[查看全部论文及完整作者信息](/cn/publications/)
