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

<nav class="research-index" aria-label="研究主线"><a href="#research-1"><span>01</span> 可切换制动与双模式驱动</a><a href="#research-2"><span>02</span> 步态感知与系统部署</a><a href="#research-3"><span>03</span> 安全与柔顺交互</a><a href="#research-4"><span>04</span> 轨迹规划方法</a></nav>

<section class="research-module" id="research-1" markdown="1">

<div class="research-number">研究主线 / 01</div>

## 可切换制动器：从康复机构到双模式执行器

围绕可切换制动器与绳驱动传动机制，先在 WRRC 工作中探索耦合动滑轮康复机构，再在 RA-L 工作中发展力矩／张力双模式执行器。两项工作沿着“机构原理—模式切换—驱动与控制”的路径推进，面向多用途外骨骼辅助。

<div class="research-gallery research-gallery--2"><figure><a href="/assets/images/wrrc-system.png" target="_blank" rel="noopener"><img src="/assets/images/wrrc-system.png" alt="前期：WRRC 耦合动滑轮康复机构" loading="lazy"></a><figcaption>前期：WRRC 耦合动滑轮康复机构</figcaption></figure><figure><a href="/assets/images/dual-mode-actuator.png" target="_blank" rel="noopener"><img src="/assets/images/dual-mode-actuator.png" alt="延续：RA-L 力矩／张力双模式执行器" loading="lazy"></a><figcaption>延续：RA-L 力矩／张力双模式执行器</figcaption></figure></div>

- **前期机构探索｜WRRC 2024：**开展耦合动滑轮机构的概念设计与初步实验，获得最佳论文奖。
- **延续工作｜RA-L 2026：**将可切换机制发展为力矩／张力双模式绳驱动执行器，连接不同辅助任务的输出需求。

<div class="research-publications" markdown="1">

### 相关论文

1. **Y. Ji** et al. Conceptual Design and Preliminary Experiment of an Orthopedic Rehabilitation Exoskeleton Based on the Coupled Movable Pulley Mechanism (CMPM). *WRRC, 2024, pp. 1–6* (Best Paper Award). [DOI](https://doi.org/10.1109/WRRC62201.2024.10696897)

2. **Y. Ji** et al. Design and Control of a Cable-Driven Switchable Actuator with Torque/Tension Dual Modes for Exoskeletons. *IEEE RA-L, 2026* (accepted). [Video](/assets/videos/ral-supplementary.mp4)

</div>

</section>

<section class="research-module" id="research-2" markdown="1">

<div class="research-number">研究主线 / 02</div>

## 从步态相位识别到可重构外骨骼部署

以 TNSRE 的实时步态相位识别为前期感知基础，接续开展可重构髋关节外骨骼的系统部署。将人体运动状态估计与台架／背包双构型平台结合，推动研究从实验室算法验证走向室内外穿戴应用。

<div class="research-gallery research-gallery--2"><figure><a href="/assets/images/gait-experiment.png" target="_blank" rel="noopener"><img src="/assets/images/gait-experiment.png" alt="前期：TNSRE 实时步态相位识别" loading="lazy"></a><figcaption>前期：TNSRE 实时步态相位识别</figcaption></figure><figure><a href="/assets/images/reconfigurable-preprint.png" target="_blank" rel="noopener"><img src="/assets/images/reconfigurable-preprint.png" alt="接续：可重构髋关节外骨骼系统部署" loading="lazy"></a><figcaption>接续：可重构髋关节外骨骼系统部署</figcaption></figure></div>

- **前期感知方法｜TNSRE 2025：**基于人体运动隐式建模估计连续步态相位，稳态相位均方根误差为2.729%；开放配套数据集。
- **接续系统工作｜可重构外骨骼预印本：**将前期步态识别工作部署到可切换台架／背包配置的髋关节外骨骼，衔接感知算法与穿戴系统。
- **平台验证：**3名健康受试者完成30次构型切换试验，平均切换用时30.1 ± 16.3秒；该指标用于说明构型切换效率。

<div class="research-publications" markdown="1">

### 相关论文

1. **Y. Ji** et al. Human Locomotion Implicit Modeling-Based Real-Time Gait Phase Estimation. *IEEE TNSRE, 2025, 33: 4124–4136*. [DOI](https://doi.org/10.1109/TNSRE.2025.3621076) · [Dataset](https://huggingface.co/datasets/YuanlongJi/GPE-MM)

2. **Y. Ji** et al. A Reconfigurable Bidirectional Cable-Driven Hip Exoskeleton with Swappable Bench/Backpack Dual-configuration Actuation. *arXiv:2609.25639, 2026* (preprint). [arXiv](https://arxiv.org/abs/2609.25639) · <a href="/assets/videos/reconfigurable-exoskeleton-supplementary.mp4" target="_blank" rel="noopener">Video</a>

</div>

</section>

<section class="research-module" id="research-3" markdown="1">

<div class="research-number">研究主线 / 03</div>

## 从安全边界到柔顺控制与变刚度机构

围绕人机接触中的安全性与舒适性，从安全导纳边界、辅助方向切换和机械刚度调节三个层面开展研究。将控制策略与机构设计结合，为外骨骼的稳定交互提供支撑。

<div class="research-gallery research-gallery--3"><figure><a href="/assets/images/safe-admittance.png" target="_blank" rel="noopener"><img src="/assets/images/safe-admittance.png" alt="安全导纳边界与交互实验" loading="lazy"></a><figcaption>安全导纳边界与交互实验</figcaption></figure><figure><a href="/assets/images/ankle-system.png" target="_blank" rel="noopener"><img src="/assets/images/ankle-system.png" alt="踝关节辅助方向的柔顺切换" loading="lazy"></a><figcaption>踝关节辅助方向的柔顺切换</figcaption></figure><figure><a href="/assets/images/variable-stiffness.png" target="_blank" rel="noopener"><img src="/assets/images/variable-stiffness.png" alt="交叉四杆变刚度机构" loading="lazy"></a><figcaption>交叉四杆变刚度机构</figcaption></figure></div>

- **安全边界：**利用空间分类模型定义康复机器人的安全导纳边界。
- **柔顺过渡：**研究双向绳驱动踝关节外骨骼在跖屈／背屈辅助切换中的连续过渡。
- **机构拓展：**开展交叉四杆变刚度执行器的优化设计及仿真验证，从机械结构层面探索柔顺性调节。

<div class="research-publications" markdown="1">

### 相关论文

1. Y. Tao, **Y. Ji**, et al. A Safe Admittance Boundary Algorithm for Rehabilitation Robot Based on Space Classification Model. *Applied Sciences, 2023, 13(9): 5816*. [DOI](https://doi.org/10.3390/app13095816)

2. W. Liu, **Y. Ji**, et al. A Compliant Transition Control Strategy for Plantarflexion-Dorsiflexion Switch in a Bidirectional Cable-Driven Ankle Exoskeleton. *IFAC-PapersOnLine, 2025, 59(35): 362–367*. [DOI](https://doi.org/10.1016/j.ifacol.2025.12.503)

3. **Y. Ji** et al. Optimization Design and Simulation Validation of a Variable Stiffness Actuator Based on a Crossed Four-Bar Mechanism. *ACIRS, 2026* (accepted).

</div>

</section>

<section class="research-module" id="research-4" markdown="1">

<div class="research-number">研究主线 / 04</div>

## 辅助轨迹规划与环境自适应方法梳理

围绕“让外骨骼从实验室走向生活”的共同目标，梳理辅助轨迹规划与多模态参数感知的方法联系，为感知、控制和系统设计提供整体研究视角。

<div class="research-gallery research-gallery--1"><figure><a href="/assets/images/trajectory-review.png" target="_blank" rel="noopener"><img src="/assets/images/trajectory-review.png" alt="从实验室优化步态到环境自适应运动" loading="lazy"></a><figcaption>从实验室优化步态到环境自适应运动</figcaption></figure></div>

- **方法总结｜RBME：**整理下肢外骨骼辅助轨迹规划策略，分析人体状态与环境信息如何参与辅助运动生成。

<div class="research-publications" markdown="1">

### 相关论文

1. Q. Ye, X. Yang, R. Zhao, **Y. Ji**, et al. Assistive Trajectory Planning for Lower Limb Exoskeletons: Strategies From Laboratory-Optimized Gait to Environmentally-Adaptive Locomotion Through Multimodal Parameter Awareness. *IEEE RBME, 2026, 19: 41–64*. [DOI](https://doi.org/10.1109/RBME.2025.3646165)

</div>

</section>

[查看全部论文及完整作者信息](/cn/publications/)
