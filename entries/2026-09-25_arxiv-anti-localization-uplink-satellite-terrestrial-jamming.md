---
id: 2026-09-25_arxiv-anti-localization-uplink-satellite-terrestrial-jamming
date_published: 2026-09-23
date_found: 2026-09-25
technology: satellite
type: academic-paper
title_en: "Anti-Localization Uplink Communications in Satellite-Terrestrial Systems"
title_zh: "卫星-地面系统中的抗定位上行通信"
url: "https://arxiv.org/abs/2609.27258"
source_quality: full
topics: [uplink, cooperative-jamming, TDOA, physical-layer-security, satellite-terrestrial]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Sun (Hangzhou Institute of Technology / Xidian University), Yang (Chuzhou University), Shen and Zhang (Xidian University), and Jiang (Future University Hakodate) submitted this paper on 2026-09-23. It studies a satellite-terrestrial uplink scenario in which a ground transmitter "Alice" (modeled with 6 antennas) sends information to a legitimate satellite receiver "Bob" (4 antennas) while multiple cooperative adversarial satellites, "Willies" (N satellites of 4 antennas each — one primary plus N-1 auxiliary), attempt to localize Alice inside a 50 km-radius suspicious region using time-difference-of-arrival (TDOA). The primary Willie continuously monitors the region via energy detection; once it declares a signal present, it triggers the auxiliary Willies to perform independent detection, after which the participating satellites correlate their received signals to form TDOA measurements that are fed into the Chan algorithm to estimate Alice's position.

The authors propose a cooperative jamming-based countermeasure: Alice uses superposition coding with power allocation to transmit an information signal (via a normalized beamforming vector) and a jamming signal (via a precoding matrix with a randomized power drawn from a uniform distribution) simultaneously from the same antennas, subject to a total transmit-power budget. The jamming signal is designed to confuse the Willies' signal detection and TDOA measurement while Bob, the legitimate receiver, applies a combining-vector technique to enhance the desired information signal and suppress the jamming component. The paper defines a localization error probability (LEP) metric that jointly captures two failure modes for the adversary — missing Alice's transmission entirely, or detecting it but producing a position estimate whose error exceeds a threshold — and derives a theoretical LEP model under the proposed scheme. It then formulates a joint optimization of the jamming power ceiling and the jamming covariance matrix to maximize LEP subject to Alice-Bob communication-reliability and Alice transmit-power constraints, solving the resulting non-convex problem via a sample average approximation (drawing independent samples of channel realizations and jamming power, then applying alternating optimization — line search for the jamming power ceiling and projected gradient ascent for the jamming covariance). Numerical results show the average SINR at Bob decreasing as jamming power ceiling increases (confirming the fundamental communication-vs-anti-localization tradeoff); LEP decreasing as the number of adversarial satellites grows but remaining consistently higher with jamming than without across the tested range; LEP rising sharply with jamming power while staying flat without it; a wider LEP gap between the jamming and no-jamming cases at larger localization-error thresholds; and an optimal jamming-power ceiling that falls sharply from ~22 W (the P_A,max − P_s limit) as Bob's required SINR rises, while staying essentially insensitive to the localization-error threshold itself.

## Summary (ZH)

Sun（西安电子科技大学杭州研究院）、Yang（滁州学院）、Shen 与 Zhang（西安电子科技大学）以及 Jiang（公立函馆未来大学）于 2026 年 9 月 23 日提交本文，研究一种卫星-地面上行场景：地面发射方"Alice"（建模为 6 天线）向合法卫星接收方"Bob"（4 天线）发送信息，而多颗协作的敌对卫星"Willies"（共 N 颗，各 4 天线，一颗主星加 N-1 颗辅星）试图利用到达时间差（TDOA）在一个半径 50 公里的可疑区域内对 Alice 进行定位。主 Willie 通过能量检测持续监测该区域；一旦判定存在信号，即触发各辅 Willie 进行独立检测，随后参与的卫星相互关联各自接收到的信号，形成 TDOA 测量值，并输入 Chan 算法以估计 Alice 的位置。

作者提出了一种基于协作干扰的对抗方案：Alice 利用叠加编码与功率分配，从同一组天线同时发送信息信号（经归一化波束成形向量）与干扰信号（经预编码矩阵，其功率服从某均匀分布的随机取值），二者共享总发射功率预算。干扰信号旨在扰乱各 Willie 的信号检测与 TDOA 测量，而合法接收方 Bob 则采用合并向量技术增强期望信息信号并抑制干扰分量。论文定义了一个定位错误概率（LEP）指标，联合刻画对手的两种失败模式——完全未检测到 Alice 的发射，或检测到但定位误差超过阈值——并推导了该方案下的理论 LEP 模型。随后，论文将干扰功率上限与干扰协方差矩阵的联合优化问题表述为在 Alice-Bob 通信可靠性与 Alice 发射功率约束下最大化 LEP，并通过样本平均近似（对信道实现与干扰功率进行独立抽样，再采用交替优化——干扰功率上限用线搜索，干扰协方差矩阵用投影梯度上升）求解该非凸问题。数值结果表明：Bob 处的平均信噪干扰比随干扰功率上限增大而下降（印证了通信性能与抗定位能力之间的根本权衡）；LEP 随敌对卫星数量增加而下降，但在所测范围内有干扰时始终高于无干扰情形；LEP 随干扰功率显著上升，而无干扰时保持平坦；定位误差阈值越大，有干扰与无干扰情形之间的 LEP 差距越明显；随Bob所需信噪干扰比升高，最优干扰功率上限从约22瓦（P_A,max − P_s上限）急剧下降，而该最优值对定位误差阈值本身基本不敏感。

## Key technical points (EN)

- **System model**: ground transmitter Alice (6 antennas) to legitimate satellite receiver Bob (4 antennas), with N cooperative adversarial satellites "Willies" (4 antennas each, one primary + N-1 auxiliary) performing TDOA localization of Alice within a 50 km-radius suspicious region.
- **Detection-then-localization pipeline**: primary Willie energy-detects the signal, triggers auxiliary Willies for independent detection, then correlates received signals across satellites to form TDOA measurements fed into the Chan algorithm.
- **Cooperative jamming via superposition coding**: Alice transmits information (normalized beamforming vector) and jamming (precoding matrix, power ~ U(0, P_j,max)) simultaneously under a shared power budget; Bob applies a combining vector to boost the information signal and suppress jamming.
- **LEP metric**: Pe = Pr(missed detection) + Pr(detected but localization error exceeds threshold d_th) — jointly models detection failure and localization-accuracy failure for the adversary.
- **Optimization**: joint design of jamming power ceiling and jamming covariance matrix to maximize LEP under Alice-Bob reliability and power constraints; solved via sample average approximation with alternating line search / projected gradient ascent.
- **Headline numbers**: optimal jamming-power ceiling falls sharply from ~22 W (the P_A,max − P_s limit) as Bob's required SINR rises; LEP with jamming stays consistently higher than without jamming as the number of adversarial satellites grows; LEP-vs-jamming-power gap widens at larger localization-error thresholds.

## Key technical points (ZH)

- **系统模型**：地面发射方 Alice（6 天线）向合法卫星接收方 Bob（4 天线）发送信号，N 颗协作敌对卫星"Willies"（各 4 天线，一主 N-1 辅）在半径 50 公里的可疑区域内对 Alice 进行 TDOA 定位。
- **先检测后定位流程**：主 Willie 通过能量检测发现信号，触发各辅 Willie 独立检测，随后各卫星相互关联接收信号形成 TDOA 测量值，输入 Chan 算法。
- **基于叠加编码的协作干扰**：Alice 在共享功率预算下同时发送信息信号（归一化波束成形向量）与干扰信号（预编码矩阵，功率服从 U(0, P_j,max)）；Bob 采用合并向量增强信息信号并抑制干扰。
- **LEP 指标**：Pe = Pr(漏检) + Pr(检测到但定位误差超过阈值 d_th)——联合刻画对手的检测失败与定位精度失败两种情形。
- **优化方法**：在 Alice-Bob 可靠性与功率约束下，联合设计干扰功率上限与干扰协方差矩阵以最大化 LEP；通过样本平均近似结合交替优化（线搜索/投影梯度上升）求解。
- **核心数据**：随 Bob 所需信噪干扰比升高，最优干扰功率上限从约 22 瓦（P_A,max − P_s 上限）急剧下降；随着敌对卫星数量增加，有干扰时 LEP 始终高于无干扰；定位误差阈值越大，有无干扰情形下的 LEP 差距越明显。

## Why it matters / what's new (EN)

Most of this KB's satellite-security entries address network-layer attacks, signal authentication or GNSS spoofing; this paper addresses a different threat model — physical-layer location privacy of a ground uplink transmitter against a cooperative constellation of adversarial satellites performing multilateration — and proposes an active countermeasure (jamming co-designed with the legitimate information signal via superposition coding) rather than a passive one. It is the first entry in this KB to model satellites as the localizing adversary (rather than the defender or the attacked asset) and to quantify a communication-reliability-vs-anti-localization tradeoff for a ground-to-satellite uplink under an explicit TDOA/multilateration threat model.

## Why it matters / what's new (ZH)

知识库此前的卫星安全条目多涉及网络层攻击、信号认证或GNSS欺骗；本文针对的是不同的威胁模型——地面上行发射方在面对一组执行多点定位的协作敌对卫星星座时的物理层位置隐私问题，并提出了一种主动对抗手段（通过叠加编码将干扰与合法信息信号联合设计），而非被动手段。这是知识库首次将卫星建模为定位攻击方（而非防御方或被攻击资产）的条目，并首次针对地面到卫星上行链路，在明确的 TDOA/多点定位威胁模型下量化了通信可靠性与抗定位能力之间的权衡关系。

## Images

None.
