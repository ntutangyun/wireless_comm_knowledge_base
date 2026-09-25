---
id: 2026-09-25_arxiv-6g-inbody-subnetworks-xr-power-allocation
date_published: 2026-09-07
date_found: 2026-09-25
type: academic-paper
technology: cellular
title_en: "Perception-Aware Joint Power and Sub-Band Allocation for 6G In-Body Subnetworks"
title_zh: "面向 6G 体内子网络的感知感知型联合功率与子带分配"
url: "https://arxiv.org/abs/2609.07519"
source_quality: full
topics: [in-body-subnetworks, 6G, XR, Lyapunov-optimization, Gaussian-mixture-model, JND, power-allocation]
topic_primary: 6g-vision
topics_secondary: [redcap-iot]
novelty_score: 3
---

## Summary (EN)

6G "in-body subnetworks" (IBSs) are proposed as ultra-short-range, low-latency radio links operating in and around the human body to support immersive eXtended Reality (XR) services. This paper (Aswan University, Egypt, and Aalborg University, Denmark) tackles a resource-allocation problem specific to XR: conventional subnetwork scheduling allocates power/sub-bands against a fixed, conservative latency target for every user, but human perception of delay is not uniform — a user's Just-Noticeable Difference (JND) for latency varies, and spending radio resources to push delay below what a given user can actually perceive is wasted power.

The authors build a perception-aware framework with two parts: (1) a learning-based perception model that combines Gaussian Mixture Modeling (GMM), trained via Expectation-Maximization, with a supervised model to predict each user's individual JND threshold from observed conditions, so the system learns "how much delay this specific user can tolerate before it becomes noticeable" rather than assuming a single conservative bound for everyone; and (2) a stochastic joint power and sub-band allocation problem, reformulated via a Lyapunov drift-plus-penalty method, that allocates resources to satisfy each user's own learned, probabilistic QoE (delay-perceptibility) constraint instead of a fixed worst-case delay target. Each IBS is modeled as a cylindrical volume containing one access point and one XR device; many IBSs share the sub-bands under a macro 6G base station. The sub-band allocation and power control are solved jointly rather than independently.

## Summary (ZH)

6G "体内子网络"（In-Body Subnetworks, IBS）被提出作为在人体内部及周围运行的超短距离、低时延无线链路，用以支持沉浸式扩展现实（XR）业务。本文（埃及阿斯旺大学与丹麦奥尔堡大学合作）针对 XR 场景特有的资源分配问题展开研究：传统子网络调度按照对所有用户统一、保守的固定时延目标分配功率/子带资源，但人类对时延的感知并非一致——用户对时延的"最小可觉差"（Just-Noticeable Difference，JND）门限因人而异，若为了将时延压低到某个用户实际根本感知不到的程度而消耗无线资源，就是一种浪费。

作者构建了一个感知感知型（perception-aware）框架，包含两部分：（1）一个基于学习的感知模型，将高斯混合模型（GMM，通过期望最大化算法训练）与一个监督学习模型结合，从观测条件中预测每个用户各自的 JND 门限，使系统能够学习"该特定用户在多大时延之下才会开始察觉"，而非对所有用户假设同一个保守的统一界限；（2）一个随机联合功率与子带分配问题，通过 Lyapunov drift-plus-penalty 方法重新表述，按照每个用户自身学习到的、概率化的 QoE（时延可感知性）约束来分配资源，而非按固定的最坏情况时延目标分配。每个IBS被建模为一个包含一个接入点与一个XR设备的圆柱形空间；多个IBS在一个宏6G基站覆盖下共享子带。子带分配与功率控制被联合而非独立求解。

## Key technical points (EN)

- Perception model: GMM (trained via Expectation-Maximization) + supervised learning predicts each user's individual delay-JND threshold, replacing a single conservative delay bound applied to every user.
- Resource allocation: joint power and sub-band allocation reformulated as a Lyapunov drift-plus-penalty stochastic optimization, satisfying each user's own learned probabilistic QoE constraint.
- At a maximum tolerable delay of 10 ms, the proposed scheme reduces average transmit power from 9.75 dBm to 8.44 dBm vs. the baseline — approximately 26% less power.
- Power savings scale with network load: ~1 dBm gap at N=2 IBSs, widening to ~4 dBm (approximately 60% power saving) at N=30 IBSs, because per-user JND-aware allocation avoids over-provisioning as spectral contention grows.
- Convergence trace (Fig. 4) shows two example users learning distinct JND thresholds (30.2 ms and 156.56 ms) and being allocated correspondingly different power levels — the user with the higher (more tolerant) JND receives less power.

## Key technical points (ZH)

- 感知模型：GMM（通过期望最大化算法训练）结合监督学习，预测每个用户各自的时延 JND 门限，取代对所有用户施加统一保守时延界限的做法。
- 资源分配：将联合功率与子带分配问题重新表述为 Lyapunov drift-plus-penalty 随机优化问题，按每个用户自身学习到的概率化 QoE 约束分配资源。
- 在最大可容忍时延为 10 ms 时，所提方案将平均发射功率从 9.75 dBm 降至 8.44 dBm——相比基线方案降低约 26%。
- 功率节省随网络负载扩大：在 N=2 个 IBS 时差距约为 1 dBm，在 N=30 个 IBS 时扩大到约 4 dBm（相当于约 60% 的功率节省），原因在于频谱竞争加剧时，基于用户 JND 的分配方式能够避免过度预留资源。
- 收敛曲线（论文图 4）显示两个示例用户学习到不同的 JND 门限（分别为 30.2 ms 与 156.56 ms），并被分配到相应不同的功率水平——JND 更宽松（更能容忍时延）的用户获得的功率更低。

## Why it matters / what's new (EN)

The KB already carries a companion entry on 6G in-X subnetworks (2026-09-23_arxiv-in-x-subnetworks-gnn-energy-efficiency, a GNN-based energy-efficiency approach); this paper attacks the same broad 6G in-X subnetwork research area with a different mechanism — human-perception-aware resource allocation rather than a graph-learning scheduler — and is specific to the XR/in-body use case rather than general in-X subnetworks.

## Why it matters / what's new (ZH)

本知识库已有一篇 6G in-X 子网络的相关条目（2026-09-23_arxiv-in-x-subnetworks-gnn-energy-efficiency，采用基于图神经网络的能效优化方法）；本文则以不同的机制——基于人类感知的资源分配，而非图学习调度器——攻克同一大类 6G in-X 子网络研究问题，并且专门针对 XR/体内应用场景，而非泛化的 in-X 子网络问题。

## Images

![Example of an indoor 6G in-body subnetwork serving multiple XR users (paper Fig. 1) | 服务多个 XR 用户的室内 6G 体内子网络示意图（论文图 1）](https://arxiv.org/html/2609.07519v1/Network.png)
