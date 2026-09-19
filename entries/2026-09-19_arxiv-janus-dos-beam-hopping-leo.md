---
id: 2026-09-19_arxiv-janus-dos-beam-hopping-leo
date_published: 2026-09-17
date_found: 2026-09-19
type: academic-paper
title_en: "JANUS: Denial-of-Service Attack Against Beam Hopping in LEO Satellite Networks"
title_zh: "JANUS：针对 LEO 卫星网络跳波束调度的拒绝服务攻击"
url: "https://arxiv.org/abs/2609.19977"
source_quality: full
technology: satellite
topics: [beam-hopping, LEO, DoS, scheduler-security]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Researchers from Ben-Gurion University of the Negev (Yuval Aviv, Roee Idan, Roy Peled, Asaf Shabtai, Yuval Elovici) describe JANUS, a denial-of-service attack against beam-hopping (BH) schedulers in LEO satellite networks. Beam hopping lets a satellite illuminate only a subset of its candidate ground cells per decision window, dynamically choosing which cells to serve based on observed traffic demand rather than lighting every cell continuously. JANUS exploits this demand-driven allocation directly: a small botnet of compromised user terminals injects legitimate-looking traffic into carefully selected non-victim cells, inflating those cells' apparent demand so the scheduler reallocates beams away from a targeted victim cell.

The paper models a Starlink G1-like constellation footprint with N=19 candidate cells per satellite, K=5 illuminated per 20 ms decision window, and evaluates the attack against two scheduler families: KMAX (a rank-based demand scheduler) and a deep reinforcement learning (DRL) policy. The attacker either replans each window independently (iterative planning) or coordinates injected traffic across a multi-window horizon (horizon planning).

Single-window results: JANUS excludes the victim in 98.73% of eligible cases against KMAX, with a median injection budget of just 0.44 Gbps; against DRL, attack success rises from 67.43% at a 0.2 Gbps budget to 92.09% at 5 Gbps. Over a 15-window horizon, KMAX-targeted attacks reach 98.64% mean success, with 94.8% of victims excluded in every decision of the attack horizon, cutting victim throughput by 99.7%; DRL-targeted attacks range 72.62-91.88% success with 77.61-81.07% throughput degradation. The authors evaluate five mitigation mechanisms — tiered starvation-aware reservation, randomized reservation, exponential-moving-average demand smoothing, consecutive-service limits, and hard reservation — finding tiered starvation-aware reservation the strongest (cutting KMAX attack success by 76.2 percentage points, DRL by 42.3 points) but none of the evaluated defenses fully neutralizes the attack.

## Summary (ZH)

以色列本古里安大学的研究团队（Yuval Aviv、Roee Idan、Roy Peled、Asaf Shabtai、Yuval Elovici）提出了 JANUS，一种针对 LEO 卫星网络跳波束（beam hopping）调度器的拒绝服务攻击。跳波束技术让卫星在每个决策窗口只照亮部分候选地面小区，根据观测到的流量需求动态选择服务哪些小区，而非持续照亮所有小区。JANUS 直接利用了这种"按需分配"机制：一个由少量被攻陷终端组成的僵尸网络向精心选择的"非受害"小区注入貌似合法的用户流量，人为抬高这些小区的表观需求，从而促使调度器将波束从目标受害小区调走。

论文以类似 Starlink 第一代星座的覆盖模型为背景，每颗卫星有 N=19 个候选小区，每个 20 毫秒决策窗口内照亮 K=5 个，并针对两类调度器进行评估：KMAX（基于排序规则的需求调度器）和深度强化学习（DRL）策略。攻击者可以逐窗口独立重新规划（迭代规划），也可以在多个窗口的时间跨度上协调注入流量（时域规划）。

单窗口结果显示：针对 KMAX，JANUS 在 98.73% 的可攻击情形下成功排除受害小区，所需的中位注入带宽仅为 0.44 Gbps；针对 DRL，攻击成功率在 0.2 Gbps 预算下为 67.43%，在 5 Gbps 预算下升至 92.09%。在 15 个窗口的多窗口攻击中，针对 KMAX 的攻击平均成功率达 98.64%，94.8% 的受害小区在整个攻击时段的每一次决策中都被排除，受害小区吞吐量下降 99.7%；针对 DRL 的攻击成功率在 72.62%-91.88% 之间，吞吐量下降 77.61%-81.07%。作者评估了五种缓解机制——分级饥饿感知预留、随机预留、指数滑动平均需求平滑、连续服务次数限制和硬预留——其中分级饥饿感知预留效果最好（KMAX 攻击成功率降低 76.2 个百分点，DRL 降低 42.3 个百分点），但没有一种评估过的防御手段能完全消除该攻击。

## Key technical points (EN)

- Threat model: a distributed botnet of compromised legitimate user terminals, no need for RF spoofing or protocol violations — the attack traffic looks like ordinary demand.
- Two scheduler families evaluated: KMAX (rank-based) and a deep-RL allocation policy, across single-window and 15-window multi-window attack horizons.
- Against KMAX: 98.73% single-window exclusion rate at a median 0.44 Gbps injected budget; 99.7% victim throughput reduction under the 15-window horizon attack.
- Against DRL: 67.43%-92.09% attack success rate depending on injection budget (0.2-5 Gbps); 77.61%-81.07% throughput degradation under the multi-window attack.
- Sustained multi-window attacks against KMAX require injected rates growing from roughly 1 Gbps to roughly 7.5 Gbps across the 15-window horizon.
- Best evaluated defense (tiered starvation-aware reservation, which reserves beams for cells that have gone unserved for a while) cuts KMAX attack success by 76.2 points and DRL by 42.3 points — a significant reduction, but not full neutralization.
- Unevaluated mitigation directions proposed: per-grid ingress traffic limits, detection via persistent coordinated demand-change signatures, multi-satellite coordination to reduce single-scheduler dependence, dynamic beamforming to make cell structure less predictable, and adversarially-robust scheduler training.

## Key technical points (ZH)

- 威胁模型：由被攻陷的合法用户终端组成的分布式僵尸网络，无需射频欺骗或协议违规——攻击流量看起来就是普通的用户需求。
- 评估了两类调度器：基于排序的 KMAX 和深度强化学习分配策略，涵盖单窗口和 15 窗口的多窗口攻击时域。
- 针对 KMAX：单窗口排除成功率 98.73%，中位注入预算仅 0.44 Gbps；在 15 窗口攻击下受害小区吞吐量下降 99.7%。
- 针对 DRL：攻击成功率在 67.43%-92.09% 之间（取决于 0.2-5 Gbps 的注入预算）；多窗口攻击下吞吐量下降 77.61%-81.07%。
- 针对 KMAX 的持续多窗口攻击所需注入速率在 15 个窗口内从约 1 Gbps 增长到约 7.5 Gbps。
- 表现最好的防御方案（分级饥饿感知预留，为长期未获服务的小区预留波束）将 KMAX 攻击成功率降低 76.2 个百分点、DRL 降低 42.3 个百分点——显著缓解，但未能完全消除攻击。
- 论文提出但未详细评估的其他缓解方向：按网格入口限流、基于持续性协同需求变化特征的检测机制、多卫星协同以降低对单一调度器的依赖、动态波束赋形以降低小区结构的可预测性，以及对抗鲁棒的调度器训练。

## Why it matters / what's new (EN)

This is a new attack surface distinct from the LEO link-flooding botnet work already in this KB (2026-09-16_arxiv-hydra-leo-link-flooding-botnet-thresholds, also from the Ben-Gurion University group, Idan/Puzis/Shabtai/Elovici): HYDRA floods inter-satellite/ground links to exhaust capacity, while JANUS manipulates the *scheduler's own demand signal* to redirect beam allocation away from a target, without needing to saturate any link. It extends the same research lineage's LEO-network-security thread into the beam-hopping resource-allocation mechanism itself, and extends the adversarial angle beyond BRIDGE's (2026-07-07) input-perturbation audit to real-traffic demand manipulation by a botnet of compromised terminals.

## Why it matters / what's new (ZH)

这是一个与本知识库已收录的 LEO 链路泛洪僵尸网络工作（2026-09-16_arxiv-hydra-leo-link-flooding-botnet-thresholds，同样来自本古里安大学 Idan/Puzis/Shabtai/Elovici 团队）不同的新攻击面：HYDRA 通过泛洪星间/星地链路来耗尽容量，而 JANUS 则直接操纵*调度器自身的需求信号*，在不需要使链路饱和的情况下将波束分配从目标小区引开。这将同一研究团队的 LEO 网络安全研究线延伸到了跳波束资源分配机制本身，并将对抗角度从 BRIDGE（2026-07-07）对 DRL 调度器状态输入的扰动审计，进一步延伸到了由被攻陷终端组成的僵尸网络对真实流量需求的操纵。
