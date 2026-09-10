---
id: 2026-09-10_arxiv-crosslink-cross-protocol-identifier-linking
date_published: 2026-09-09
date_found: 2026-09-10
technology: wifi
type: academic-paper
title_en: "CrossLink: Breaking Location Privacy by Linking Device Identifiers Across Protocols"
title_zh: "CrossLink：跨协议关联设备标识符从而破解位置隐私"
url: "https://arxiv.org/abs/2609.09963"
source_quality: full
topics: [security, MAC-randomization, BLE, LTE, privacy]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Smartphones rotate temporary identifiers independently on LTE (IMSI to TMSI to C-RNTI), Wi-Fi (MAC randomization), and BLE (MAC randomization), and existing privacy defenses are evaluated per protocol in isolation. This paper shows that per-protocol rotation guarantees do not compose: because the three protocols rotate on independent, unsynchronized schedules, a passive adversary who observes all three can use a stable identifier in one protocol to bridge a rotation event in another, reconstructing a device's trace far beyond what any single protocol's rotation window would allow. The authors present CrossLink, an uncertainty-aware tracing algorithm that links identifiers across time, space, and protocol under noisy localization (RSSI for Wi-Fi/BLE, timing-advance for LTE) and pedestrian mobility. Rather than requiring exact co-location matches, CrossLink builds permissive candidate link sets bounded by a distance-plus-mobility constraint, then iteratively refines them: a candidate link in one protocol is discarded unless it is corroborated by consistent evidence in at least one other protocol, and only links that survive to a unique ("singleton") match are used to build trace-reconstruction graphs.

The paper backs the algorithm with a mixing-time theory (Theorems 1 and 2) that bounds the probability of two devices achieving "perfect mixing" — the state in which rotation truly defeats a passive tracker — as a function of rotation rate and transmission rate. It shows that because perfect mixing must hold simultaneously across every observed protocol, the joint mixing probability is the product of the per-protocol probabilities, so it is dominated by whichever protocol mixes worst. The authors term this a composition failure: the union of Wi-Fi, BLE, and LTE randomization is a weaker guarantee than any single protocol's own analysis suggests.

CrossLink is validated in two stages. In a real-device testbed (12 commodity smartphones, two eNodeBs forcing LTE handovers, and a 40-minute mix zone during which the devices are location-indistinguishable), adding BLE evidence raised LTE resolution accuracy from 25.0% to 75.0%, and adding LTE evidence raised BLE resolution accuracy from 61.9% to 71.4%. In a large-scale mobility simulation (a 3.87 km² dense-urban SuMO scenario, 512 pedestrian users, two hours, sniffer parameters drawn from the real-device measurements), full-coverage multi-protocol tracking (LTE+BLE+Wi-Fi) recovered a complete device trace for 83.4% of users, versus 21.9% for the best single-protocol (BLE-only) baseline and 4.1% for LTE-only; Wi-Fi alone reconstructed 0% of full traces because its disconnected-state probe rotation is too fast relative to its own transmission rate to resolve on its own. The paper also evaluates partial-coverage deployments: strategically placed sniffers (clustered near LTE handover regions, or a smaller number of mobile sniffers riding compromised devices) substantially outperform the same sniffer budget deployed randomly, and a 30-sniffer mobile deployment beat a 198-sniffer random fixed deployment.

## Summary (ZH)

智能手机在 LTE（IMSI→TMSI→C-RNTI）、Wi-Fi（MAC 随机化）和 BLE（MAC 随机化）上各自独立地轮换临时标识符，而现有的隐私防护评估通常只针对单一协议。本文指出，各协议的轮换保证并不能相互叠加组合：由于三种协议按各自独立、不同步的时间表轮换标识符，一个能同时观测三者的被动攻击者可以利用某一协议中保持稳定的标识符，去"桥接"另一协议中发生的一次轮换事件，从而重建出远超任何单一协议轮换窗口所能提供的设备轨迹。作者提出 CrossLink，一种考虑不确定性的关联追踪算法，能在存在定位噪声（Wi-Fi/BLE 用 RSSI，LTE 用时间提前量）与行人移动的情况下，跨时间、跨空间、跨协议关联标识符。CrossLink 不要求精确的共同定位匹配，而是先根据"距离+移动性"约束构建宽松的候选关联集合，再迭代精炼：某一协议中的候选关联，除非能在至少一个其他协议中获得一致证据的印证，否则会被剔除；只有精炼到唯一匹配（单例）的关联才会被用于构建轨迹重建图。

论文还给出一套混合时间理论（定理 1 和定理 2），以轮换速率与发送速率为参数，界定两台设备达到"完美混合"（即轮换真正能挫败被动追踪者的状态）的概率。该理论表明，由于完美混合必须在所观测到的每一种协议上同时成立，联合混合概率等于各协议概率之积，因而由混合效果最差的那个协议主导——作者称之为"组合失效"：Wi-Fi、BLE、LTE 三者随机化保证的并集，其强度反而弱于任何单一协议自身分析所暗示的水平。

CrossLink 通过两个阶段验证。在真实设备测试床中（12 台商用智能手机、两个强制触发 LTE 切换的 eNodeB、一个持续 40 分钟、设备在其中位置不可区分的混合区），加入 BLE 证据使 LTE 关联准确率从 25.0% 提升到 75.0%，加入 LTE 证据使 BLE 关联准确率从 61.9% 提升到 71.4%。在大规模移动性仿真中（3.87 平方公里的密集城区 SuMO 场景，512 名行人用户，持续两小时，嗅探器参数取自真实设备测量），全覆盖多协议追踪（LTE+BLE+Wi-Fi）为 83.4% 的用户重建出完整轨迹，而表现最好的单协议基线（仅 BLE）为 21.9%，仅 LTE 为 4.1%；仅 Wi-Fi 未能重建出任何完整轨迹（0%），因为其断连状态下的探测帧随机化速度相对其自身发送速率而言过快，单靠自身无法解析。论文还评估了部分覆盖部署：将嗅探器有策略地部署（集中在 LTE 切换重叠区域，或使用少量搭载在被攻陷设备上的移动嗅探器）比同等数量的随机部署效果明显更好，且 30 个移动嗅探器的效果超过了 198 个随机固定嗅探器。

## Key technical points (EN)

- **Threat model**: fully passive adversary (no injection, jamming, relay, or active manipulation) controlling geographically distributed fixed or mobile sniffers that estimate device distance via RSSI (Wi-Fi/BLE) or LTE timing-advance, each with protocol-specific error bounds.
- **Mobility-bounded linking constraint (Eq. 1)**: two observations from different protocols are treated as candidates for the same device only if the distance between the two sniffers is within the sum of their distance-estimation errors plus the maximum plausible pedestrian travel distance (1.6 m/s) in the elapsed time between observations.
- **Iterative refinement (Algorithms 4-5)**: a candidate intra-protocol link (same protocol, before/after rotation) is kept only if it is corroborated by inter-protocol evidence shared with at least one other protocol; a candidate inter-protocol link is kept only if it is also connected to that evidence via an intra-protocol chain. Only links that reduce to a single ("singleton") remaining candidate feed the trace-reconstruction graph.
- **Mixing-time theory**: perfect mixing probability for a protocol with rotation rate λ_r and transmission rate λ_t is bounded by p_mix ≤ λ_r(1/B + λ_t/B²) where B = λ_r + λ_t (Theorem 1); joint mixing across all observed protocols is the product of the per-protocol bounds (Eq. 2), so privacy guarantees do not compose across protocols.
- **Real-device result**: 12-phone testbed with a 40-minute LTE+BLE mix zone — cross-protocol evidence raised LTE resolution from 25.0% to 75.0% and BLE resolution from 61.9% to 71.4%.
- **Large-scale simulation result** (512 users, 3.87 km² urban area, 2 hours): full-trace recovery 83.4% (multi-protocol, full coverage) vs. 21.9% (BLE-only), 4.1% (LTE-only), 0% (Wi-Fi-only). Cross-protocol singleton-link identifier accuracy: 95.0% (BLE), 91.6% (LTE), 17.6% (Wi-Fi) vs. 63.9% / 43.6% / 0.7% single-protocol.
- **Partial-coverage placement**: strategic sniffer placement near LTE handover regions or a small mobile-sniffer deployment (N=30) outperforms a much larger random fixed deployment (N=198).
- **Wi-Fi role explicitly noted as protocol-asymmetric**: the authors excluded Wi-Fi from the 12-device real-device validation "because its MAC rotation rate approaches its transmission rate [...], leaving too few stable intervals for controlled validation", while still including it in the large-scale simulation, where it contributes evidence but resolves 0% of full traces on its own.

## Key technical points (ZH)

- **威胁模型**：完全被动的攻击者（不进行注入、干扰、中继或任何主动操纵），控制分布在地理上的固定或移动嗅探器，通过 RSSI（Wi-Fi/BLE）或 LTE 时间提前量估计设备距离，各协议有各自的误差范围。
- **受移动性约束的关联条件（式 1）**：仅当两个嗅探器之间的距离不超过两者距离估计误差之和，再加上两次观测之间时间内行人可能的最大移动距离（1.6 m/s）时，才将来自不同协议的两次观测视为同一设备的候选关联。
- **迭代精炼（算法 4、5）**：某一协议内部的候选关联（同协议、轮换前后），只有在与至少一个其他协议共享的跨协议证据能够印证时才被保留；某一跨协议候选关联，只有当它还能通过协议内链条与该证据相连时才被保留。只有精炼为唯一（"单例"）候选的关联才会被用于构建轨迹重建图。
- **混合时间理论**：对于轮换速率为 λ_r、发送速率为 λ_t 的协议，完美混合概率上界为 p_mix ≤ λ_r(1/B + λ_t/B²)，其中 B = λ_r + λ_t（定理 1）；跨所有被观测协议的联合混合概率等于各协议概率上界之积（式 2），因此隐私保证在协议之间并不能相互叠加。
- **真实设备结果**：12 部手机测试床，含一个 40 分钟的 LTE+BLE 混合区——跨协议证据使 LTE 关联准确率从 25.0% 提升到 75.0%，BLE 关联准确率从 61.9% 提升到 71.4%。
- **大规模仿真结果**（512 名用户，3.87 平方公里城区，持续两小时）：完整轨迹重建率——多协议全覆盖 83.4%，仅 BLE 为 21.9%，仅 LTE 为 4.1%，仅 Wi-Fi 为 0%。跨协议单例关联标识符准确率：BLE 95.0%、LTE 91.6%、Wi-Fi 17.6%，而单协议分别为 63.9%、43.6%、0.7%。
- **部分覆盖部署**：将嗅探器有策略地部署在 LTE 切换重叠区域，或使用少量（N=30）移动嗅探器，其效果优于数量大得多（N=198）的随机固定部署。
- **明确指出 Wi-Fi 在协议间的不对称角色**：作者在 12 设备真实测试中排除了 Wi-Fi，原因是"其 MAC 轮换速率接近其发送速率……使可用于受控验证的稳定区间过少"；但在大规模仿真中仍纳入 Wi-Fi，此时它能提供辅助证据，但单独并不能重建出任何完整轨迹（0%）。

## Why it matters / what's new (EN)

This KB's existing security-privacy entries on Wi-Fi MAC randomization (e.g. the machine-learning-based randomization-defeating work covered under `ai-for-wifi`/`security-privacy`) have analyzed Wi-Fi's own randomization scheme in isolation. CrossLink's contribution is specifically that isolated per-protocol analysis is the wrong frame: a device's overall location-privacy exposure is set by the protocol that mixes worst, and a passive multi-protocol adversary can use Wi-Fi's own probe-request rotation as a bridge to re-identify devices even when Wi-Fi's own randomization scheme is working as specified. The authors show that a fully passive adversary can perform large-scale physical tracking by linking observations across time, space and protocols — exploiting no fingerprinting side-channel, no static identifier and no protocol implementation flaw, only the mismatch in rotation timing between protocols that a device already runs simultaneously.

## Why it matters / what's new (ZH)

本知识库现有的 Wi-Fi MAC 随机化相关安全隐私条目（例如归入 `ai-for-wifi`/`security-privacy` 的基于机器学习破解随机化的工作）都是孤立地分析 Wi-Fi 自身的随机化方案。CrossLink 的贡献在于指出：孤立的单协议分析本身就是错误的分析框架——设备整体的位置隐私暴露程度，取决于混合效果最差的那个协议，而一个被动的多协议攻击者可以利用 Wi-Fi 自身的探测帧轮换作为"桥梁"，即使 Wi-Fi 自身的随机化方案完全按规范运行，依然能重新识别出设备。作者证明，一个完全被动的攻击者可以通过在时间、空间与协议三个维度上关联观测，实现大规模物理位置追踪——不依赖任何指纹旁路、静态标识符或协议实现缺陷，仅仅利用了设备同时运行的多个协议之间轮换时机不同步这一点。

## Images

![Figure 2: sources of uncertainty (localization error, asynchronous transmissions, mobility) that CrossLink's linking algorithm must handle | 图 2：CrossLink 关联算法需要处理的不确定性来源（定位误差、异步发送、移动性）](https://arxiv.org/html/2609.09963v1/images/Challenges.png)
![Figure 4: CrossLink's overall linking-and-refinement approach across protocols | 图 4：CrossLink 跨协议关联与精炼的总体方法](https://arxiv.org/html/2609.09963v1/images/approach.png)
