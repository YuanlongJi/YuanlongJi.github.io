---
layout: single
title: "Research"
permalink: /projects/
lang: en
author_profile: true
---

<div class="research-intro" markdown="1">

As a core research member, I contribute to an NSFC General Program project (2025–2028; total funding RMB 480,000) and a Beijing Natural Science Foundation–Haidian Joint Fund project (2023–2026; RMB 200,000), focusing on exoskeleton-based musculoskeletal protection and orthopedic rehabilitation. Earlier, I led or participated in two National Undergraduate Innovation Training projects (RMB 10,000 and 20,000) and led a BJUT Xinghuo Key Project (RMB 3,000). These experiences connect mechanical design, prototyping, sensing, control and system validation toward bringing exoskeletons from the laboratory into everyday life.

</div>

<nav class="research-index" aria-label="Research lines"><a href="#research-1"><span>01</span> Switchable actuation</a><a href="#research-2"><span>02</span> Sensing to deployment</a><a href="#research-3"><span>03</span> Safe and compliant interaction</a><a href="#research-4"><span>04</span> Trajectory-planning methods</a></nav>

<section class="research-module" id="research-1" markdown="1">

<div class="research-number">RESEARCH LINE / 01</div>

## Switchable Braking: From Rehabilitation Mechanisms to Dual-Mode Actuation

This research line develops switchable braking and cable-transmission mechanisms, progressing from the coupled movable pulley rehabilitation mechanism in WRRC to the torque/tension dual-mode actuator in RA-L. The work connects mechanism design, mode switching and actuation control for multiple assistance tasks.

<div class="research-gallery research-gallery--2"><figure><a href="/assets/images/wrrc-system.png" target="_blank" rel="noopener"><img src="/assets/images/wrrc-system.png" alt="Foundation: WRRC rehabilitation mechanism" loading="lazy"></a><figcaption>Foundation: WRRC rehabilitation mechanism</figcaption></figure><figure><a href="/assets/images/dual-mode-actuator.png" target="_blank" rel="noopener"><img src="/assets/images/dual-mode-actuator.png" alt="Follow-on: RA-L torque/tension dual-mode actuator" loading="lazy"></a><figcaption>Follow-on: RA-L torque/tension dual-mode actuator</figcaption></figure></div>

- **Mechanism foundation | WRRC 2024:** Conceptual design and preliminary experiments with a coupled movable pulley mechanism; Best Paper Award.
- **Follow-on work | RA-L 2026:** Develop the switching mechanism into a cable-driven actuator with torque and tension output modes for different assistance requirements.

<div class="research-publications" markdown="1">

### Selected publications

1. **Y. Ji** et al. Conceptual Design and Preliminary Experiment of an Orthopedic Rehabilitation Exoskeleton Based on the Coupled Movable Pulley Mechanism (CMPM). *WRRC, 2024, pp. 1–6* (Best Paper Award). [DOI](https://doi.org/10.1109/WRRC62201.2024.10696897)

2. **Y. Ji** et al. Design and Control of a Cable-Driven Switchable Actuator with Torque/Tension Dual Modes for Exoskeletons. *IEEE RA-L, 2026* (accepted). [Video](/assets/videos/ral-supplementary.mp4)

</div>

</section>

<section class="research-module" id="research-2" markdown="1">

<div class="research-number">RESEARCH LINE / 02</div>

## From Gait-Phase Estimation to Reconfigurable Exoskeleton Deployment

The real-time gait-phase estimator developed in TNSRE provides the sensing foundation for subsequent deployment on a reconfigurable hip exoskeleton. This line connects human-motion estimation with a bench/backpack platform, moving from laboratory algorithm evaluation toward wearable use across indoor and outdoor settings.

<div class="research-gallery research-gallery--2"><figure><a href="/assets/images/gait-experiment.png" target="_blank" rel="noopener"><img src="/assets/images/gait-experiment.png" alt="Foundation: TNSRE real-time gait-phase estimation" loading="lazy"></a><figcaption>Foundation: TNSRE real-time gait-phase estimation</figcaption></figure><figure><a href="/assets/images/reconfigurable-preprint.png" target="_blank" rel="noopener"><img src="/assets/images/reconfigurable-preprint.png" alt="Follow-on: reconfigurable hip exoskeleton deployment" loading="lazy"></a><figcaption>Follow-on: reconfigurable hip exoskeleton deployment</figcaption></figure></div>

- **Sensing foundation | TNSRE 2025:** Estimate continuous gait phase through implicit modeling of human locomotion; reported steady-state phase RMSE is 2.729%, with an open dataset.
- **Follow-on system | Reconfigurable exoskeleton preprint:** Deploy the earlier gait-estimation work on a hip exoskeleton with interchangeable bench and backpack configurations, linking sensing algorithms to a wearable system.
- **Platform evaluation:** Configuration switching averaged 30.1 ± 16.3 s across 30 trials with three healthy participants; this measures configuration-switching efficiency.

<div class="research-publications" markdown="1">

### Selected publications

1. **Y. Ji** et al. Human Locomotion Implicit Modeling-Based Real-Time Gait Phase Estimation. *IEEE TNSRE, 2025, 33: 4124–4136*. [DOI](https://doi.org/10.1109/TNSRE.2025.3621076) · [Dataset](https://huggingface.co/datasets/YuanlongJi/GPE-MM)

2. **Y. Ji** et al. A Reconfigurable Bidirectional Cable-Driven Hip Exoskeleton with Swappable Bench/Backpack Dual-configuration Actuation. *arXiv:2609.25639, 2026* (preprint). [arXiv](https://arxiv.org/abs/2609.25639) · <a href="/assets/videos/reconfigurable-exoskeleton-supplementary.mp4" target="_blank" rel="noopener">Video</a>

</div>

</section>

<section class="research-module" id="research-3" markdown="1">

<div class="research-number">RESEARCH LINE / 03</div>

## From Safety Boundaries to Compliant Control and Variable Stiffness

This line addresses safe and comfortable physical interaction through admittance boundaries, transitions between assistance directions and adjustable mechanical stiffness. Control and mechanism design offer complementary support for exoskeleton interaction.

<div class="research-gallery research-gallery--3"><figure><a href="/assets/images/safe-admittance.png" target="_blank" rel="noopener"><img src="/assets/images/safe-admittance.png" alt="Safe admittance boundaries and interaction experiments" loading="lazy"></a><figcaption>Safe admittance boundaries and interaction experiments</figcaption></figure><figure><a href="/assets/images/ankle-system.png" target="_blank" rel="noopener"><img src="/assets/images/ankle-system.png" alt="Compliant transitions in ankle assistance" loading="lazy"></a><figcaption>Compliant transitions in ankle assistance</figcaption></figure><figure><a href="/assets/images/variable-stiffness.png" target="_blank" rel="noopener"><img src="/assets/images/variable-stiffness.png" alt="Crossed four-bar variable-stiffness mechanism" loading="lazy"></a><figcaption>Crossed four-bar variable-stiffness mechanism</figcaption></figure></div>

- **Safety boundaries:** Define safe admittance regions for rehabilitation robots using a space-classification model.
- **Compliant transitions:** Investigate continuous switching between plantarflexion and dorsiflexion assistance in a bidirectional cable-driven ankle exoskeleton.
- **Mechanism extension:** Optimize and simulate a crossed four-bar variable-stiffness actuator to explore compliance regulation through mechanical design.

<div class="research-publications" markdown="1">

### Selected publications

1. Y. Tao, **Y. Ji**, et al. A Safe Admittance Boundary Algorithm for Rehabilitation Robot Based on Space Classification Model. *Applied Sciences, 2023, 13(9): 5816*. [DOI](https://doi.org/10.3390/app13095816)

2. W. Liu, **Y. Ji**, et al. A Compliant Transition Control Strategy for Plantarflexion-Dorsiflexion Switch in a Bidirectional Cable-Driven Ankle Exoskeleton. *IFAC-PapersOnLine, 2025, 59(35): 362–367*. [DOI](https://doi.org/10.1016/j.ifacol.2025.12.503)

3. **Y. Ji** et al. Optimization Design and Simulation Validation of a Variable Stiffness Actuator Based on a Crossed Four-Bar Mechanism. *ACIRS, 2026* (accepted).

</div>

</section>

<section class="research-module" id="research-4" markdown="1">

<div class="research-number">RESEARCH LINE / 04</div>

## Assistive Trajectory Planning and Environmental Adaptation

This review connects assistive trajectory planning with multimodal parameter awareness, providing a broader methodological perspective for sensing, control and system design toward everyday exoskeleton use.

<div class="research-gallery research-gallery--1"><figure><a href="/assets/images/trajectory-review.png" target="_blank" rel="noopener"><img src="/assets/images/trajectory-review.png" alt="From laboratory-optimized gait to adaptive locomotion" loading="lazy"></a><figcaption>From laboratory-optimized gait to adaptive locomotion</figcaption></figure></div>

- **Methodological synthesis | RBME:** Review lower-limb exoskeleton trajectory-planning strategies and how human-state and environmental information inform assistive motion generation.

<div class="research-publications" markdown="1">

### Selected publications

1. Q. Ye, X. Yang, R. Zhao, **Y. Ji**, et al. Assistive Trajectory Planning for Lower Limb Exoskeletons: Strategies From Laboratory-Optimized Gait to Environmentally-Adaptive Locomotion Through Multimodal Parameter Awareness. *IEEE RBME, 2026, 19: 41–64*. [DOI](https://doi.org/10.1109/RBME.2025.3646165)

</div>

</section>

[All publications and full author lists](/publications/)
