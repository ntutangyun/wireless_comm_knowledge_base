---
id: 2026-10-12_arxiv-haps-interference-aware-power-control
date_published: 2026-10-08
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "Interference-Aware Downlink Power Control for High-Altitude Platform Stations with QoS and Max-Min Fairness"
title_zh: "面向高空平台站的干扰感知下行功率控制：QoS 约束与最大最小公平性"
url: "https://arxiv.org/abs/2610.12380"
source_quality: full
topics: [HAPS, NTN, massive-MIMO, power-control, 3GPP-NTN-path-loss, Rician-fading, max-min-fairness, QoS]
topic_primary: ntn
topics_secondary: [cellular-massive-mimo]
novelty_score: 3
---

## Summary (EN)
Rajan Shrestha and Hayder Al-Hraishawi (University of South Florida) address downlink power allocation for high-altitude platform stations (HAPS) — stratospheric platforms at 17-22 km altitude that provide a complementary non-terrestrial-network (NTN) layer between terrestrial infrastructure and satellites. The paper's starting observation is that HAPS massive-MIMO research has mainly addressed capacity, user grouping, beamforming, and precoding, while the specific effect of HAPS's strong line-of-sight propagation on downlink power allocation — particularly QoS feasibility, minimum required power, and user fairness — has received limited attention, because strong LoS creates pronounced geometry-dependent inter-user interference governed by user locations, angular separation, and array response.

The authors derive a closed-form SINR expression for HAPS massive MIMO under statistical channel state information, 3GPP NTN path loss models (3GPP TR 38.811: basic path loss — free-space loss, shadow fading and clutter loss — plus atmospheric gas attenuation and tropospheric scintillation), and Rician fading, using mean-channel maximal-ratio transmission (MRT) precoding that explicitly captures geometry-dependent inter-user interference coupling rather than relying only on large-scale channel gains. Based on this expression, they formulate and solve two power-control problems: a QoS-constrained power-minimization problem (solved in closed form via a matrix inversion, or alternatively via a low-complexity fixed-point iteration when that inversion is impractical for large systems or real-time use, with a derived feasibility condition), and a max-min SINR fairness problem (solved via bisection). Numerical results show the proposed schemes achieve up to 6 dB reduction in required transmit power at moderate-to-high target rates, and improved worst-user SINR, compared against uniform-power, inverse-path-loss, and geometry-aware heuristic allocation baselines. The QoS-optimal scheme reaches a QoS feasibility probability of approximately 0.95 at a target rate of 2.5 bits/s/Hz and maximum transmit power of 35 dBm, while the three heuristic baselines achieve less than 0.4 feasibility probability under the same conditions. The proposed schemes also match the performance of linear-programming (LP)-based benchmarks while cutting average computation time by approximately 99.97% at K=20 users, which the authors say supports power control on computationally constrained HAPS platforms.

## Summary (ZH)
Rajan Shrestha 与 Hayder Al-Hraishawi（南佛罗里达大学）研究高空平台站（HAPS）的下行功率分配问题——HAPS 是运行于 17–22 公里高空的平流层平台，在地面基础设施与卫星系统之间提供一层补充性的非地面网络（NTN）连接。论文的出发点在于：现有 HAPS 大规模 MIMO 研究主要聚焦于容量、用户分组、波束成形与预编码，而 HAPS 强视距（LoS）传播特性对下行功率分配——尤其是 QoS 可行性、最小所需功率与用户公平性——的具体影响尚未得到充分关注，原因是强视距传播会产生显著的、与几何位置相关的用户间干扰，该干扰受用户位置、角度间隔与天线阵列响应共同支配。

作者在统计信道状态信息、3GPP NTN 路径损耗模型（3GPP TR 38.811：基本路径损耗——自由空间损耗、阴影衰落与杂波损耗——加上大气气体衰减与对流层闪烁）以及莱斯（Rician）衰落条件下，推导出 HAPS 大规模 MIMO 系统的闭式 SINR（信号与干扰加噪声比）表达式，采用均值信道最大比传输（MRT）预编码，明确刻画了与几何位置相关的用户间干扰耦合，而非仅依赖大尺度信道增益。基于该表达式，作者提出并求解两类功率控制问题：QoS 约束下的功率最小化问题（可通过矩阵求逆得到闭式解；当矩阵求逆对大规模系统或实时实现不现实时，也可改用低复杂度定点迭代求解，并给出可行性判定条件），以及最大最小 SINR 公平性问题（通过二分法求解）。数值结果表明，与均匀功率分配、逆路径损耗分配及几何感知启发式分配等基线方案相比，所提方案在中高目标速率下可将所需发射功率降低最多 6 dB，并改善最差用户的 SINR。在目标速率为 2.5 bits/s/Hz、最大发射功率为 35 dBm 的条件下，QoS 最优方案实现约 0.95 的 QoS 可行概率，而三种启发式基线方案在相同条件下的可行概率均低于 0.4。所提方案的性能还能与基于线性规划（LP）的基准方法相当，但在用户数 K=20 时，平均计算时间可降低约 99.97%，作者指出这有助于在算力受限的 HAPS 平台上实施功率控制。

## Key technical points (EN)
- Derives a closed-form SINR expression for HAPS massive-MIMO downlink under statistical CSI, 3GPP NTN path-loss models, and Rician fading with mean-channel MRT precoding, explicitly capturing geometry-dependent inter-user interference.
- Proposes two power-control schemes: QoS-constrained power minimization (closed-form or low-complexity fixed-point iteration) and max-min SINR fairness (bisection).
- Up to 6 dB reduction in required transmit power at moderate-to-high target rates versus uniform-power, inverse-path-loss, and geometry-aware heuristic baselines.
- QoS-optimal scheme reaches ~0.95 QoS feasibility probability at R_req=2.5 bits/s/Hz, P_max=35 dBm, versus <0.4 for all three heuristic baselines under the same conditions.
- Matches linear-programming benchmark performance while cutting average computation time by ~99.97% at K=20 users.

## Key technical points (ZH)
- 在统计信道状态信息、3GPP NTN 路径损耗模型及莱斯衰落条件下，采用均值信道 MRT 预编码，推导出 HAPS 大规模 MIMO 下行链路的闭式 SINR 表达式，明确刻画了与几何位置相关的用户间干扰。
- 提出两类功率控制方案：QoS 约束下的功率最小化（闭式解或低复杂度定点迭代）与最大最小 SINR 公平性（二分法）。
- 相较均匀功率分配、逆路径损耗分配及几何感知启发式分配基线，在中高目标速率下所需发射功率最多降低 6 dB。
- 在目标速率 2.5 bits/s/Hz、最大发射功率 35 dBm 条件下，QoS 最优方案实现约 0.95 的 QoS 可行概率，而三种启发式基线在相同条件下均低于 0.4。
- 性能可与基于线性规划的基准方法相当，但在用户数 K=20 时平均计算时间可降低约 99.97%。

## Why it matters / what's new (EN)
Earlier HAPS entries in this KB's ntn bin focus mainly on capacity, beamforming or joint multi-tier resource management; this paper isolates per-user downlink power control, deriving a closed-form SINR model under 3GPP TR 38.811 NTN path-loss models and reporting a QoS-feasibility gap of about 0.95 vs. under 0.4 against common heuristic baselines, which the authors say highlights the potential for efficient and reliable HAPS deployment.

## Why it matters / what's new (ZH)
本知识库 ntn 栏目此前的 HAPS 条目主要关注容量、波束成形或多层联合资源管理；本文单独聚焦逐用户下行功率控制，基于 3GPP TR 38.811 NTN 路径损耗模型推导闭式 SINR，并报告相较常见启发式基线约 0.95 对低于 0.4 的 QoS 可行性差距，作者认为这体现了其在高效、可靠 HAPS 部署方面的潜力。

## Images

None.
