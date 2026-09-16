---
id: 2026-09-16_arxiv-hydra-leo-link-flooding-botnet-thresholds
date_published: 2026-09-14
date_found: 2026-09-16
type: academic-paper
technology: satellite
title_en: "HYDRA: Quantifying Botnet Resource Thresholds for Efficient Link-Flooding Attacks on LEO Satellite Networks"
title_zh: "HYDRA：量化针对低轨卫星网络高效链路洪泛攻击所需的僵尸网络资源门槛"
url: "https://arxiv.org/abs/2609.15693"
source_quality: full
topics: [LEO, link-flooding-attack, botnet, DDoS, inter-satellite-links, network-resilience]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Idan, Puzis, Shabtai, and Elovici submitted "HYDRA: Quantifying Botnet Resource Thresholds for Efficient Link-Flooding Attacks on LEO Satellite Networks" (cs.CR) on 2026-09-14. The paper models a Low Earth Orbit satellite constellation (such as Starlink) as a time-varying graph, with inter-satellite links (ISLs, modeled at 20 Gbps capacity) and ground-satellite links (GSLs, modeled at 4 Gbps capacity), where satellite positions and topology changes are predictable from publicly available Two-Line Element (TLE) data (to within 1-2 km). A link is treated as congested once its residual capacity falls below a fraction (1-α) of its maximum capacity - evaluated at α=0.9, i.e. 90% utilisation with 10% headroom.

HYDRA frames a link-flooding attack (LFA) as a two-phase optimization problem. In the "weaponization" phase, the attacker solves mixed-integer linear programs to minimize the number of compromised bots needed to congest every path between a source and destination zone, under a per-bot upload cap (β, evaluated at 25 Mbps) and stealth constraints on GSL traffic injection. Four attack variants are formulated: a single-snapshot attack (SS-BMP), a continuous attack sustained across multiple topology snapshots (C-BMP), a flexible configuration usable against multiple zone pairs (F-BMP), and simultaneous attacks against multiple zone pairs at once (SIMU-BMP). In the "execution" phase, bots inject attack traffic under those same per-bot and stealth constraints.

Compared against a prior method (ICARUS) under matched stealth constraints, HYDRA reduces the required botnet size by a mean of 33.9% (median 35.6%) and the aggregate attack traffic by a mean of 23.0% (median 20.3%), with feasibility ranging from 85.8% to 99.6% depending on constellation configuration. Continuous attacks were optimized over a 90-minute interval with snapshots every 30 seconds (success approaching 99% when 90 snapshots are used in the optimization, versus markedly lower rates with only 2-5), and the resulting botnet sustained over 97% success when re-evaluated across the paper's 90-hour evaluation window, the average success rate varying by only about 2%. Botnet-size requirements scale with the square root of the number of targeted zone pairs (e.g., an empirical fit of y = 978√x − 12, R²=0.99 for the flexible variant; y = 2,385√x − 2,335, R²=0.992 for simultaneous attacks); the paper's example states that simultaneously attacking 15 zone pairs required an average botnet of 6,994 bots. The paper also evaluated five mitigation strategies — routing diversification, link-triggered source throttling, ingress capacity policing, distance-based traffic constraints, and botnet attrition — assessed against 3,500 GDP-weighted randomly sampled zone pairs, finding that no single mechanism fully neutralizes the attack and that layered defenses are needed.

## Summary (ZH)

Idan、Puzis、Shabtai 与 Elovici 于 2026 年 9 月 14 日提交了论文《HYDRA: Quantifying Botnet Resource Thresholds for Efficient Link-Flooding Attacks on LEO Satellite Networks》（cs.CR）。论文将低轨卫星星座（如 Starlink）建模为随时间变化的图，其中星间链路（ISL，容量 20 Gbps）与星地链路（GSL，容量 4 Gbps），卫星位置与拓扑变化可通过公开的两行根数（TLE）数据以 1-2 公里的精度预测。当某条链路的剩余容量低于其最大容量的 (1-α) 比例时即视为拥塞——评估取 α=0.9，即 90% 利用率、10% 余量。

HYDRA 将链路洪泛攻击（LFA）建模为两阶段优化问题。在"武器化"阶段，攻击者求解混合整数线性规划，在每个僵尸节点上传上限（β，评估取 25 Mbps）及针对 GSL 流量注入的隐蔽性约束下，最小化拥塞源区域与目标区域之间所有路径所需的受控节点数量。论文提出四种攻击变体：单时刻快照攻击（SS-BMP）、跨多个拓扑快照持续进行的攻击（C-BMP）、可用于多个区域对的灵活配置（F-BMP），以及同时针对多个区域对的攻击（SIMU-BMP）。在"执行"阶段，僵尸节点在同样的每节点上限与隐蔽性约束下注入攻击流量。

在相同隐蔽性约束下与既有方法 ICARUS 相比，HYDRA 将所需僵尸网络规模平均降低 33.9%（中位数 35.6%），聚合攻击流量平均降低 23.0%（中位数 20.3%），可行性在不同星座配置下介于 85.8% 至 99.6% 之间。持续攻击的优化在 90 分钟区间内进行（每 30 秒一个快照；优化中使用 90 个快照时成功率接近 99%，仅用 2-5 个快照时明显更低），所得僵尸网络在论文 90 小时的评估窗口中重新评估时成功率仍保持在 97% 以上，平均成功率波动仅约 2%。所需僵尸网络规模随目标区域对数量的平方根增长（例如灵活变体的经验拟合为 y = 978√x − 12，R²=0.99；同时攻击变体为 y = 2,385√x − 2,335，R²=0.992）；论文举例称，同时攻击 15 个区域对平均需要 6,994 个僵尸节点。论文还在 3,500 个按 GDP 加权随机采样的区域对上评估了五种缓解策略——路由多样化、链路触发的源端限流、入口容量管控、基于距离的流量约束以及僵尸网络清除——发现没有任何单一机制能完全消除该攻击，需要多层防御手段。

## Key technical points (EN)

- **System model:** time-varying graph of a LEO constellation; ISLs 20 Gbps, GSLs 4 Gbps; topology predictable from public TLE data to within 1-2 km; congestion threshold: residual capacity below (1-α) of link capacity, α=0.9 (90% utilisation, 10% headroom).
- **Attack formulation:** mixed-integer linear programs minimizing botnet size subject to a per-bot upload cap (β=25 Mbps) and GSL-injection stealth constraints; four variants — SS-BMP (snapshot), C-BMP (continuous), F-BMP (flexible multi-zone-pair), SIMU-BMP (simultaneous multi-zone-pair).
- **Efficiency vs. ICARUS baseline:** 33.9% mean / 35.6% median botnet-size reduction; 23.0% mean / 20.3% median attack-traffic reduction; 85.8%-99.6% feasibility across constellation configurations.
- **Persistence:** continuous attack optimized over a 90-minute interval (30 s snapshots; ~99% when 90 snapshots are used in the optimization), sustaining >97% success across the 90-hour evaluation window (average success varying by ~2%).
- **Scaling:** botnet size scales as the square root of targeted zone-pair count (empirical fits with R²=0.99 and R²=0.992); 15 simultaneous zone pairs required an average of 6,994 bots.
- **Sensitivity:** reducing per-bot upload cap β from 25 to 10 Mbps increases required bots by roughly 2.5×; feasibility varies from 89.7% (α=0.85) to 87.7% (α=0.95).
- **Mitigations evaluated (3,500 GDP-weighted sampled zone pairs):** routing diversification, link-triggered source throttling, ingress capacity policing, distance-based traffic constraints, and botnet attrition (attrition rates of 15%, 25%, 35% and 45% evaluated) — each reduces but does not eliminate attack success; the paper concludes layered defenses are required.

## Key technical points (ZH)

- **系统模型：** 将低轨星座建模为随时间变化的图；ISL 20 Gbps，GSL 4 Gbps；拓扑变化可通过公开 TLE 数据以 1-2 公里精度预测；拥塞阈值：剩余容量低于链路容量的 (1-α)，取 α=0.9（90% 利用率、10% 余量）。
- **攻击建模：** 在每节点上传上限（β=25 Mbps）及 GSL 注入隐蔽性约束下，求解最小化僵尸网络规模的混合整数线性规划；四种变体——SS-BMP（单快照）、C-BMP（持续）、F-BMP（灵活多区域对）、SIMU-BMP（同时多区域对）。
- **相对 ICARUS 基线的效率提升：** 僵尸网络规模平均降低 33.9%／中位数降低 35.6%；攻击流量平均降低 23.0%／中位数降低 20.3%；不同星座配置下可行性介于 85.8%–99.6%。
- **持续性：** 持续攻击在 90 分钟区间内优化（30 秒一个快照；优化使用 90 个快照时约 99%），在 90 小时评估窗口中成功率保持 97% 以上（平均成功率波动约 2%）。
- **规模扩展：** 所需僵尸网络规模随目标区域对数量的平方根增长（经验拟合 R²=0.99 与 R²=0.992）；同时攻击 15 个区域对平均需要 6,994 个僵尸节点。
- **敏感性：** 将每节点上传上限 β 从 25 Mbps 降至 10 Mbps，所需僵尸节点数增加约 2.5 倍；可行性在 α=0.85 时为 89.7%，α=0.95 时为 87.7%。
- **缓解措施评估（3,500 个按 GDP 加权采样的区域对）：** 路由多样化、链路触发的源端限流、入口容量管控、基于距离的流量约束，以及僵尸网络清除（评估了 15%、25%、35%、45% 四档清除率）——各自能降低但无法完全消除攻击成功率；论文得出结论认为需要多层防御手段。

## Why it matters / what's new (EN)

The paper's own framing is that adversaries can achieve zone-level disruption of a LEO constellation with substantially fewer compromised resources than a prior method (ICARUS) required, and that the resource requirement scales sub-linearly (as a square root) with the number of simultaneously targeted zone pairs — meaning, per the paper, that adversarial efficiency improves as attack scope expands. The paper concludes that no single mitigation mechanism it tested fully neutralizes the threat, and that satellite constellation resilience depends on limiting compromised terminal density and per-terminal upload capacity, which it describes as a different attack surface from terrestrial networks.

## Why it matters / what's new (ZH)

论文自身的表述是，攻击者能够以远少于既有方法（ICARUS）所需的受控资源，实现对低轨星座区域级的干扰，且所需资源随同时打击的区域对数量呈次线性（平方根）增长——论文认为这意味着攻击范围扩大时，攻击效率反而提升。论文得出结论：其测试的缓解机制中，没有任何单一机制能完全消除该威胁，卫星星座的韧性取决于限制受控终端的密度及单终端上传容量，论文将其描述为区别于地面网络的一种不同攻击面。

## Images

None.
