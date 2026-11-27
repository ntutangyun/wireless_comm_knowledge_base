---
id: 2026-11-27_arxiv-sliceplanner-logic-guided-agentic-ai-network-slicing-open-ran
date_published: 2026-11-25
date_found: 2026-11-27
type: academic-paper
technology: cellular
title_en: "SlicePlanner: Logic-Guided Agentic AI for Online QoS-Aware Network Slicing in Open RAN"
title_zh: "SlicePlanner：面向 Open RAN 在线 QoS 感知网络切片的逻辑引导智能体 AI"
url: "https://arxiv.org/abs/2611.33664"
source_quality: full
topics: [network-slicing, Open-RAN, near-RT-RIC, FlexRIC, OpenAirInterface, SLA, closed-loop-control, agentic-AI]
topic_primary: network-slicing
topics_secondary: [open-ran, cellular-ai]
novelty_score: 4
---

## Summary (EN)

Adhwaa Al-Chaab, Ayman Younis and Dario Pompili present SlicePlanner, a closed-loop controller for adaptive network slicing in O-RAN, accepted at the IEEE International Conference on Mobile Ad-Hoc and Smart Systems (MASS), 21-23 October 2026, Hong Kong. The motivating argument is that purely data-driven slicing controllers (supervised or reinforcement learning) map KPIs directly to actions and leave SLA bounds, PRB budgets and feasible parameter ranges implicit, so a learned policy can recommend an unsafe action under an unseen traffic mix. SlicePlanner instead treats each RAN reconfiguration as a controlled hypothesis: it is proposed from live and historical KPI evidence, filtered through explicit SLA constraints and mined RAN control rules, and committed only when post-action measurements confirm improvement.

Two cooperating agents implement this. SliceSense monitors live KPIs, retrieves context-conditioned evidence from an online KPI memory, and ranks candidate RAN actions through a surrogate-guided admissibility filter (the surrogate produces a short pre-ranked list so the LLM role reduces to a classification-like selection). SliceGuard checks the post-action KPI response after a settling interval, rolls back harmful configurations, and refreshes the learned rules under distribution drift. An offline phase mines control rules from historical KPI records and operator-defined SLA conditions.

The evaluation has a simulation part and an over-the-air part. The over-the-air testbed uses an OpenAirInterface gNB with a USRP B210, an OAI 5G core, FlexRIC as near-RT RIC and two commercial Sierra Wireless 5G UEs mapped to two slices by S-NSSAI. The abstract reports up to 86% fewer SLA latency violations than static slicing and 50% fewer than DRL-based slicing, with comparable cell throughput and auditable decisions without online retraining.

## Summary (ZH)

Adhwaa Al-Chaab、Ayman Younis 与 Dario Pompili 提出 SlicePlanner，一种用于 O-RAN 自适应网络切片的闭环控制器，已被 IEEE 移动自组织与智能系统国际会议（MASS，2026 年 10 月 21-23 日，中国香港）接收。其出发点是：纯数据驱动的切片控制器（监督学习或强化学习）把 KPI 直接映射为动作，SLA 界限、PRB 预算与可行参数范围均被隐含处理，因此学习到的策略在未见过的业务组合下可能给出不安全的动作。SlicePlanner 则把每次 RAN 重配置视为受控假设：依据实时与历史 KPI 证据提出，经显式 SLA 约束与挖掘出的 RAN 控制规则过滤，仅当动作后的测量确认改善时才提交。

该框架由两个协作智能体实现。SliceSense 监控实时 KPI，从在线 KPI 记忆中检索与上下文相关的证据，并通过代理模型引导的可接纳性过滤对候选 RAN 动作排序（代理模型给出简短的预排序列表，使 LLM 的角色简化为类分类的选择）。SliceGuard 在稳定间隔后检查动作后的 KPI 响应，回滚有害配置，并在分布漂移时刷新所学规则。离线阶段则从历史 KPI 记录与运营商定义的 SLA 条件中挖掘控制规则。

评估包括仿真与空口两部分。空口试验台使用带 USRP B210 的 OpenAirInterface gNB、OAI 5G 核心网、作为 near-RT RIC 的 FlexRIC，以及两台通过 S-NSSAI 映射到两个切片的商用 Sierra Wireless 5G 终端。摘要报告：相对静态切片最多减少 86% 的 SLA 时延违约，相对基于 DRL 的切片减少 50%，同时小区吞吐相当，且无需在线重训练即可保持决策可审计。

## Key technical points (EN)

- Simulation setting: one cell, 26 UEs in three slices (eMBB 10 UEs, 100 ms; URLLC 10 UEs, 10 ms; mMTC 6 UEs, 100 ms; 2 Mbps minimum rate each), managed parameters are nominal uplink transmit power and downlink / uplink carrier bandwidth with five levels each, 500 control intervals per epoch with a 2.5x demand spike over intervals 200-250, five random seeds.
- Latency SLA violation rate in simulation: static slicing 38.2% (eMBB) / 41.5% (URLLC); threshold-based 22.4% / 28.7%; data-driven without feasibility check 16.8% / 19.3%; DRL slicing 10.5% / 13.4%; full SlicePlanner 5.2% / 6.8% and 0.3% on mMTC. Average cell throughput: 47.1 Mbps (static) to 52.7 Mbps (DRL) against 53.6 Mbps for SlicePlanner.
- Ablations without SliceGuard or without the learned control rules fall between DRL slicing and the full system (violations 8.9% / 11.2% and 9.3% / 12.0%).
- Testbed: slice reconfiguration is issued over E2 RAN Control messages through FlexRIC with a measured control round-trip of 390-896 microseconds; SliceSense runs a 1 s decision period over a 10 s telemetry window stored in Kinetica; a degradation event triggers at maximum packet loss above 1.5%; SliceGuard waits 10 s before validating.
- Testbed baselines are historical nearest-neighbour, KPI-only XGBoost and an LLM-only (Llama-3.1-based) planner; the paper reports the lowest p95 packet loss and jitter across load levels and decision latency far below the LLM-only baseline.
- Stated limitations: one parameter adjusted at a time, dependence on coverage of the historical KPI memory, learned rules limited to observed testbed variables. The system model is single-cell, and the authors name multi-cell deployments as future work.

## Key technical points (ZH)

- 仿真设置：单小区，26 个终端分属三个切片（eMBB 10 个、100 ms；URLLC 10 个、10 ms；mMTC 6 个、100 ms；每片最低速率 2 Mbps），受控参数为标称上行发射功率与下行/上行载波带宽（各五档），每个周期 500 个控制间隔，在第 200-250 个间隔注入 2.5 倍需求突增，五个随机种子。
- 仿真中的时延 SLA 违约率：静态切片 38.2%（eMBB）/ 41.5%（URLLC）；基于阈值 22.4% / 28.7%；无可行性检查的数据驱动 16.8% / 19.3%；DRL 切片 10.5% / 13.4%；完整 SlicePlanner 5.2% / 6.8%，mMTC 为 0.3%。平均小区吞吐：静态 47.1 Mbps 至 DRL 52.7 Mbps，SlicePlanner 为 53.6 Mbps。
- 去掉 SliceGuard 或去掉学习规则的消融版本介于 DRL 切片与完整系统之间（违约率 8.9% / 11.2% 与 9.3% / 12.0%）。
- 试验台：切片重配置通过 FlexRIC 以 E2 RAN Control 消息下发，实测控制往返时延为 390-896 微秒；SliceSense 以 1 s 为决策周期，读取存于 Kinetica 的 10 s 遥测窗口；最大丢包率超过 1.5% 即触发劣化事件；SliceGuard 等待 10 s 后验证。
- 试验台基线为历史最近邻、仅 KPI 的 XGBoost 与仅 LLM（基于 Llama-3.1）的规划器；论文报告其在各负载水平下 p95 丢包与抖动最低，决策时延远低于仅 LLM 基线。
- 作者列出的局限：一次仅调整一个参数、依赖历史 KPI 记忆的覆盖、所学规则仅限于观测到的试验台变量。系统模型为单小区，作者将多小区部署列为未来工作。

## Why it matters / what's new (EN)

The KB has several RL- and LLM-based slicing and O-RAN control entries (for example 2026-11-18 SliceWise in the network-slicing bin); this paper's distinguishing feature is the explicit pre-action admissibility check and post-action rollback around a learned planner, validated on an OAI/FlexRIC over-the-air bench. The headline reduction percentages come from the abstract; per-baseline simulation numbers above are from the evaluation section, and the testbed comparison is shown in the paper's figures rather than tables.

## Why it matters / what's new (ZH)

KB 已有若干基于强化学习与 LLM 的切片及 O-RAN 控制条目（如 network-slicing 分类下 2026-11-18 的 SliceWise）；该论文的特点是在学习式规划器外加入显式的动作前可接纳性检查与动作后回滚，并在 OAI/FlexRIC 空口平台上验证。文中最突出的降幅百分比来自摘要；上文各基线的仿真数字取自评估章节，试验台对比以图而非表给出。

## Images

None.
