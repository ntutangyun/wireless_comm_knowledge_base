---
id: 2026-11-24_arxiv-aa-hmarl-fr3-band-agility-sagin-v2x
date_published: 2026-11-20
date_found: 2026-11-24
type: academic-paper
technology: satellite
title_en: "Hierarchical Agentic Mid-Band Agility for Reliable Low-Latency Space-Air-Ground Integrated V2X Networks"
title_zh: "面向可靠低时延空天地一体化 V2X 网络的分层智能体式中频段灵活切换"
url: "https://arxiv.org/abs/2611.27659"
source_quality: full
topics: [LEO, SAGIN, V2X, FR3, multipath, MARL, age-of-information, UAV-relay]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Cao, Gong, Zhang, Ren, He and Cui (City University of Hong Kong (Dongguan) and City University of Hong Kong, Chongqing University, The Chinese University of Hong Kong (Shenzhen), Great Bay University) study 6G vehicle-to-everything networks in which ground vehicles reach LEO satellites either directly or through UAV relays, using the upper mid-band (FR3, 7.125-24.25 GHz) for the sky links. Because propagation and rain attenuation vary with frequency, they propose choosing the band according to the environment, combined with end-to-end multipath traffic splitting and transmit power control. Each packet is divided into non-overlapping subflows sent over direct and UAV-assisted paths, and failed satellite-link subflows are retransmitted selectively within limits on retransmissions and data freshness.

The authors formulate latency and reliability problems and combine them into a sequential optimisation with band-switching costs and average QoS-violation budgets. To handle decisions at different timescales they develop an agentic-AI-assisted hierarchical multi-agent reinforcement learning framework (AA-HMARL): a high-level supervisor with recurrent memory, analytical evaluation of candidate bands and event-triggered replanning handles slow environmental changes, while distributed vehicle and UAV agents use constrained MAPPO for data splitting and power.

## Summary (ZH)

Cao、Gong、Zhang、Ren、He 与 Cui（香港城市大学（东莞）及香港城市大学、重庆大学、香港中文大学（深圳）、大湾区大学）研究 6G 车联网场景：地面车辆直接或经 UAV 中继接入 LEO 卫星，天空链路使用上中频段（FR3，7.125-24.25 GHz）。由于传播与降雨衰减随频率变化，他们提出按环境选择频段，并结合端到端多路径流量拆分与发射功率控制。每个数据包被分成互不重叠的子流，分别经直连路径和 UAV 辅助路径发送；卫星链路上失败的子流在重传次数与数据新鲜度限制内被选择性重传。

作者建立时延与可靠性问题，并将其合并为含频段切换代价和平均 QoS 违约预算的序贯优化。为处理不同时间尺度的决策，他们提出由智能体式 AI 辅助的分层多智能体强化学习框架（AA-HMARL）：高层监督器利用循环记忆、候选频段的解析评估和事件触发的重规划处理缓慢的环境变化，分布式的车辆与 UAV 智能体则用带约束的 MAPPO 优化数据拆分与功率。

## Key technical points (EN)

- Architecture: K ground vehicles (sources), U relay UAVs and S LEO satellites (destinations); the vehicle-to-UAV sidelink uses a fixed band, while vehicle-to-satellite and UAV-to-satellite links use an adaptively selected FR3 band held for a number of fast blocks unless terminated early. Failed subflows are retransmitted selectively and keep their path assignments.
- Models: environment state from rain intensity and ionospheric stress (via VTEC); attenuation from rain, gas, ionospheric and margin terms; UAV buffering and queueing under a fluid approximation, with a stated lower bound on initial completion latency; a reliability lower bound across correlated paths with retransmission limits and age-of-information (AoI) deadlines.
- Setup (Table I): 4 vehicles, 2 UAVs, 3 LEO satellites at 600 km; vehicle-to-UAV link at 5.9 GHz, 10 MHz; FR3 candidates 7.125, 8.5, 10.2, 13, 15.7, 18, 21 and 24.25 GHz with 20-80 MHz bandwidths; rain 0, 10 and 25 mm/h; two traffic types; at most 4 retransmission rounds; 60 s evaluation horizon with 50 Monte Carlo runs. Baselines are single-path, path selection and fixed-band MAPPO.
- Results: under the QoS-violation-budget formulation (Problem 3), relative to fixed-band MAPPO, AA-HMARL lowers mean end-to-end completion latency by 25.5% and 17.8% (traffic types 1 and 2), mean retransmission rounds for successful updates by 61.5% and 57.6%, and mean AoI by 14.6% and 12.7%. Varying the preference factor from 0 to 1 traces an adjustable reliability-latency trade-off.
- All results are simulation-based; the version read here did not expose a dedicated limitations discussion.

## Key technical points (ZH)

- 架构：K 辆地面车辆（信源）、U 个中继 UAV 和 S 颗 LEO 卫星（信宿）；车到 UAV 的侧行链路使用固定频段，车到卫星与 UAV 到卫星链路使用自适应选定的 FR3 频段，该频段保持若干快速块，除非提前终止。失败的子流被选择性重传，并保持原有路径分配。
- 模型：环境状态由降雨强度和电离层压力（经 VTEC）刻画；衰减包含降雨、气体、电离层和裕量项；UAV 缓冲与排队采用流体近似，并给出初始完成时延的下界；在重传次数限制和信息年龄（AoI）截止期限下，给出跨相关路径的可靠性下界。
- 设置（表 I）：4 辆车、2 个 UAV、3 颗位于 600 km 的 LEO 卫星；车到 UAV 链路 5.9 GHz、10 MHz；FR3 候选频段为 7.125、8.5、10.2、13、15.7、18、21 和 24.25 GHz，带宽 20-80 MHz；降雨 0、10 和 25 mm/h；两类业务；最多 4 轮重传；评估时长 60 s，50 次蒙特卡洛。基线为单路径、路径选择和固定频段 MAPPO。
- 结果：在含 QoS 违约预算的问题（问题 3）下，相对固定频段 MAPPO，AA-HMARL 将平均端到端完成时延降低 25.5% 和 17.8%（业务类型 1 和 2），将成功更新的平均重传轮数降低 61.5% 和 57.6%，将平均 AoI 降低 14.6% 和 12.7%。将偏好因子从 0 调到 1 可得到可调的可靠性-时延折中。
- 所有结果均基于仿真；此处所读版本未呈现专门的局限性讨论。

## Why it matters / what's new (EN)

The authors state that multipath splitting and AoI-aware retransmission have been studied separately, but not together with band adaptation, and list three contributions: the multipath architecture, the two optimisation problems with a unified objective, and the hierarchical MARL framework. The comparison is limited to simulated scenarios with three LEO satellites and fixed-band or path-only baselines.

## Why it matters / what's new (ZH)

作者指出，多路径拆分与感知 AoI 的重传此前已被分别研究，但未与频段自适应结合，并列出三项贡献：多路径架构、含统一目标的两个优化问题，以及分层 MARL 框架。比较仅限于含 3 颗 LEO 卫星的仿真场景，基线为固定频段或仅路径选择的方案。

## Images

None.
