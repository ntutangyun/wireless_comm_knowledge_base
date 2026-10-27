---
id: 2026-10-27_arxiv-heuristic-vs-ddqn-oran-mobility-robustness-xapp
date_published: 2026-10-23
date_found: 2026-10-27
type: academic-paper
technology: cellular
title_en: "When Simple Is Enough: Resource-Aware Heuristic versus DDQN for O-RAN Mobility Robustness"
title_zh: "简单即足够：O-RAN 移动性鲁棒性中资源感知启发式与 DDQN 的对比"
url: "https://arxiv.org/abs/2610.32257"
source_quality: full
topics: [O-RAN, handover, mobility-robustness, xApp, Event-A3, DDQN, NSGA-II, CRITIC-TOPSIS, ray-tracing]
topic_primary: open-ran
topics_secondary: [cellular-ai, 5g-nr]
novelty_score: 3
---

## Summary (EN)
Ali Deylamy and Nima Afraz (University College Dublin; accepted for the 2026 IEEE Globecom Workshops, Edge Intelligence meets AI-Native RAN) compare three handover decision engines behind a common xApp-oriented interface: standard Event A3, a resource- and mobility-aware heuristic whose five score weights were tuned offline with NSGA-II, and a Double Deep Q-Network (DDQN-Multi) with a 256-dimensional stacked temporal state. All three use the same admission and handover procedure and are run in paired simulation on identical UE trajectories, traffic and ray-traced radio inputs.

The simulated network is six NR gNBs on the UCD Belfield campus (3.5 GHz, 100 MHz, 30 kHz subcarrier spacing, 273 PRBs) with OpenStreetMap-based ray tracing. Three 60 s scenarios are used: Base (100 UEs at 0.5-2 m/s), High-Mobility (8-12 m/s) and High-UE (150 UEs). Fourteen KPIs cover goodput, outage, handover success, ping-pong, PRB satisfaction, energy per delivered Mbit and fairness, summarised with CRITIC-weighted and equal-weight TOPSIS.

The heuristic has the lowest outage in all three scenarios (for example 8.93% against 10.34% for A3 and 11.77% for DDQN-Multi in Base; 26.49% in High-UE, where A3 loses 77.59% of handover requests to target-admission failure) and ranks first in the multi-KPI comparison in Base and High-UE. In High-Mobility A3 has the highest mean goodput (3.005 Mbps) and the heuristic is nearly identical (2.980 Mbps); the ranking depends on the weighting method. DDQN-Multi issues many more handover attempts and the most ping-pong events without a goodput gain.

## Summary (ZH)
Ali Deylamy 与 Nima Afraz（都柏林大学学院；已被 2026 IEEE Globecom Workshops“边缘智能与 AI 原生 RAN”专题接收）在统一的 xApp 接口下比较三种切换决策引擎：标准 Event A3、其五个打分权重经 NSGA-II 离线整定的资源与移动性感知启发式，以及使用 256 维堆叠时序状态的双深度 Q 网络（DDQN-Multi）。三者采用相同的接入准入与切换流程，并在相同的 UE 轨迹、业务和射线追踪无线输入下做成对仿真。

仿真网络为 UCD Belfield 校园的六个 NR gNB（3.5 GHz、100 MHz、30 kHz 子载波间隔、273 个 PRB），基于 OpenStreetMap 做射线追踪。使用三个 60 s 场景：基础（100 个 UE，0.5-2 m/s）、高移动性（8-12 m/s）和高 UE 数（150 个 UE）。14 项 KPI 涵盖吞吐量、中断、切换成功率、乒乓、PRB 满足率、每传输 Mbit 能耗和公平性，并用 CRITIC 加权与等权 TOPSIS 汇总。

启发式在三个场景中中断率均最低（例如基础场景 8.93%，对比 A3 的 10.34% 和 DDQN-Multi 的 11.77%；高 UE 数场景 26.49%，其中 A3 有 77.59% 的切换请求因目标侧准入失败而失败），并在基础与高 UE 数场景的多 KPI 排名中居首。在高移动性场景中，A3 的平均吞吐量最高（3.005 Mbps），启发式几乎相同（2.980 Mbps），排名取决于加权方法。DDQN-Multi 发起的切换尝试多得多，乒乓事件最多，却没有带来吞吐量增益。

## Key technical points (EN)
- Event A3 baseline: 3 dB hysteresis and 640 ms time-to-trigger, no pre-request PRB filtering.
- Heuristic score: weighted RSRP, SINR, RSRQ, available PRBs and (negatively) cell load; nominal weights (0.356, 0.374, 0.058, 0.127, 0.087), adapted by UE context (speed, service class), a 480 ms time-to-trigger (200 ms for high-speed UEs), radio-improvement gates and a target-resource feasibility check. NSGA-II used a population of 16 over six generations.
- DDQN-Multi: serving cell plus three strongest candidates, 64 features per frame, four stacked frames, a 256-128-64-4 network (41,412 parameters, 41,216 multiply-accumulates per decision), action-validity masks, prioritised replay, eight 60 s training episodes; held-out seed 9001 for checkpoint choice and seed 1001 for the final paired run.
- Key per-scenario numbers: High-Mobility outage 13.43% (A3), 13.38% (heuristic), 16.94% (DDQN-Multi); High-UE handover completion 22.41% for A3 and 93.01% for the heuristic, with 272 versus 566 attempts for the heuristic and DDQN-Multi.
- Goodput is model-derived expected NR goodput (3GPP TS 38.214 MCS table mapped from SINR at 10% target BLER), not measured application throughput.
- The authors state that the scores are descriptive summaries of one paired evaluation and not confidence intervals or significance tests; multi-seed bootstrap analysis is reserved for an extended evaluation.
- Online complexity: A3 and the heuristic are O(C) in the number of candidate cells; DDQN-Multi needs a trained checkpoint and a neural-network forward pass and is less interpretable.

## Key technical points (ZH)
- Event A3 基线：3 dB 迟滞、640 ms 触发时间，不做请求前 PRB 过滤。
- 启发式打分：对 RSRP、SINR、RSRQ、可用 PRB 加权并（以负号）计入小区负载；名义权重为 (0.356, 0.374, 0.058, 0.127, 0.087)，依据 UE 上下文（速度、业务类别）调整，触发时间 480 ms（高速 UE 为 200 ms），并设有无线改善门限和目标资源可行性检查。NSGA-II 种群 16、进化六代。
- DDQN-Multi：服务小区加三个最强候选小区，每帧 64 个特征，堆叠四帧，网络结构 256-128-64-4（41,412 个参数，每次决策 41,216 次乘加），带动作有效性掩码、优先经验回放、八个 60 s 训练回合；留出种子 9001 用于选择检查点，种子 1001 用于最终成对运行。
- 各场景关键数字：高移动性场景中断率 A3 为 13.43%、启发式 13.38%、DDQN-Multi 16.94%；高 UE 数场景切换完成率 A3 为 22.41%、启发式 93.01%，启发式与 DDQN-Multi 的尝试次数分别为 272 与 566。
- 吞吐量为模型推导的期望 NR 吞吐量（按 10% 目标 BLER 把 SINR 映射到 3GPP TS 38.214 MCS 表），并非实测应用吞吐量。
- 作者说明这些得分只是一次成对评估的描述性汇总，不是置信区间或显著性检验；多种子自举分析留待扩展评估。
- 在线复杂度：A3 与启发式关于候选小区数为 O(C)；DDQN-Multi 需要训练好的检查点和神经网络前向计算，可解释性较低。

## Why it matters / what's new (EN)
The comparison asks whether the extra complexity of a learned handover xApp is justified when a simple, interpretable, offline-tuned heuristic uses the same interface and inputs, and it reports where the answer differs by scenario and by KPI weighting. The evidence is one paired simulation run per scenario on a campus ray-traced model, so the authors present the rankings as descriptive rather than statistically established.

## Why it matters / what's new (ZH)
该对比探讨：当简单、可解释、离线整定的启发式使用相同接口与输入时，学习型切换 xApp 的额外复杂度是否值得，并报告了结论随场景和 KPI 加权方式而异之处。证据为校园射线追踪模型上每个场景一次成对仿真，因此作者把排名视为描述性结果，而非统计意义上成立的结论。

## Images

None.
