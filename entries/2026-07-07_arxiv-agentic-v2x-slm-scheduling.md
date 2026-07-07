---
id: 2026-07-07_arxiv-agentic-v2x-slm-scheduling
date_published: 2026-07-05
date_found: 2026-07-07
type: academic-paper
technology: cellular
title_en: "Agentic-V2X: Small-LLM rApp/xApp Policy Generation for Deadline-Aware V2X Scheduling — Valid, Safe, but Not Universally Better"
title_zh: "Agentic-V2X：小模型 rApp/xApp 策略生成用于截止期感知的 V2X 调度——有效、安全，但并非全面更优"
url: "https://arxiv.org/abs/2607.04290"
source_quality: full
topics: [V2X, 5G, 6G, LLM-agent, O-RAN, scheduling]
topic_primary: cellular-ai
topics_secondary: [open-ran]
novelty_score: 2
---

## Summary (EN)

Agentic-V2X (Papanikolaou-Ntais, Kaloxylos, Kanavos; arXiv 2607.04290, submitted 5 Jul 2026) tests whether a locally-deployed small language model can usefully sit in the RAN control loop for vehicle-to-everything traffic. The architecture is a two-tier rApp/xApp split borrowed from O-RAN: a 7B-parameter qwen2.5 model (via Ollama) acts as a non-real-time "policy creator" that every 10 seconds reads scenario summaries, service objectives, and telemetry, and emits a structured YAML policy (baseline scheduler weights, weight bounds, priorities, safety constraints); a deterministic xApp-like controller then enforces the validated policy every 100 ms via per-UE scheduler-weight adaptation. A three-layer validator (schema check, deterministic repair, runtime monitoring) keeps the 8.4 s mean LLM inference latency out of the critical scheduling path.

The evaluation covers four V2X services with distinct deadlines — teleoperated driving (critical, 20 ms), cooperative awareness (critical, 100 ms), HD-map distribution (background, 1000 ms), sensor sharing (background, 500 ms) — in ns-3/5G-LENA with SUMO mobility on a Manhattan grid, at 20/25/30-vehicle densities, 7 seeds, 126 runs, against five baselines (proportional fair, two hand-tuned expert policies, an LLM-free heuristic xApp, and a static one-shot LLM policy).

The results are refreshingly honest. At the highest density the adaptive LLM method wins: 65.4% critical deadline-constrained packet-reception ratio vs 59.8% for PF. At medium density it delivers the best background throughput (14.5 Mbps) and much better critical p95 latency than PF (1329 vs 2038 ms). But at low density it *underperforms* (84.4% vs PF's 95.1%), and in aggregate across all densities it ranks below PF, the static LLM policy, and the static expert — with paired Wilcoxon tests confirming no statistically significant aggregate advantage. All 210 generated policies were valid and executable; none was rejected. The authors' conclusion: small LLMs work as *policy assistants inside a validated hierarchical control architecture*, not as replacements for well-calibrated deterministic control.

## Summary (ZH)

Agentic-V2X（arXiv 2607.04290，2026-07-05 提交）检验本地部署的小语言模型能否在 RAN 控制环中对车联网（V2X）流量发挥实际作用。架构借用 O-RAN 的 rApp/xApp 两层切分：7B 参数的 qwen2.5 模型（经 Ollama）作为非实时"策略生成器"，每 10 秒读取场景摘要、业务目标与遥测数据，输出结构化 YAML 策略（基线调度权重、权重上下界、优先级、安全约束）；确定性的 xApp 式控制器每 100 ms 通过逐 UE 调度权重调整来执行经过校验的策略。三层校验器（模式校验、确定性修复、运行时监控）把 LLM 平均 8.4 秒的推理时延隔离在关键调度路径之外。

评估覆盖四种截止期各异的 V2X 业务——远程驾驶（关键，20 ms）、协同感知（关键，100 ms）、高精地图分发（后台，1000 ms）、传感器共享（后台，500 ms）——在 ns-3/5G-LENA + SUMO 曼哈顿网格中，20/25/30 车辆密度、7 个随机种子、共 126 次运行，对比五个基线（比例公平、两个手工调优专家策略、无 LLM 的启发式 xApp、一次性静态 LLM 策略）。

结果相当诚实：最高密度下自适应 LLM 方法获胜（关键业务截止期约束包接收率 65.4% 对 PF 的 59.8%）；中等密度下后台吞吐最佳（14.5 Mbps）、关键业务 p95 时延显著优于 PF（1329 对 2038 ms）。但低密度下*反而落后*（84.4% 对 PF 的 95.1%），且跨密度聚合排名低于 PF、静态 LLM 策略与静态专家策略——配对 Wilcoxon 检验确认聚合上无统计显著优势。生成的 210 份策略全部有效可执行、无一被拒。作者结论：小 LLM 适合作为*经校验的分层控制架构内的策略助手*，而非精心校准的确定性控制的替代品。

## Key technical points (EN)

- Two-tier control: SLM rApp (qwen2.5:7b, 10 s cadence, YAML policy output) + deterministic xApp executor (100 ms cadence, per-UE scheduler weights); LLM latency (mean 8.36 s, max 16.8 s) never touches the fast loop.
- Three-layer policy validator: schema validation → deterministic repair → runtime performance monitoring; 210/210 policies accepted across the campaign.
- Four-service V2X mix with deadlines from 20 ms (teleoperated driving) to 1000 ms (HD map); metric is deadline-constrained packet reception ratio (DC-PRR).
- Wins at 30 vehicles (65.4% vs 59.8% PF critical DC-PRR) and on background throughput at 25 vehicles; loses at 20 vehicles (84.4% vs 95.1% PF) and on aggregate (70.6% vs 75.1% PF).
- Tail-latency cost: at 30 vehicles the adaptive method's critical p95 max latency (3825.8 ms) is the worst of all methods.
- Honest negative framing: paired Wilcoxon over 21 matched pairs shows no significant aggregate superiority (all p > 0.05).

## Key technical points (ZH)

- 两层控制：SLM rApp（qwen2.5:7b，10 秒周期，输出 YAML 策略）+ 确定性 xApp 执行器（100 ms 周期，逐 UE 调度权重）；LLM 时延（均值 8.36 秒，最大 16.8 秒）不进入快环。
- 三层策略校验器：模式校验 → 确定性修复 → 运行时性能监控；整个实验 210/210 份策略全部通过。
- 四业务 V2X 组合，截止期从 20 ms（远程驾驶）到 1000 ms（高精地图）；指标为截止期约束包接收率（DC-PRR）。
- 30 车时获胜（关键 DC-PRR 65.4% 对 PF 59.8%）、25 车时后台吞吐最佳；20 车时落后（84.4% 对 95.1%）、聚合排名靠后（70.6% 对 PF 75.1%）。
- 尾时延代价：30 车时自适应方法的关键业务 p95 最大时延（3825.8 ms）是所有方法中最差的。
- 诚实的否定性结论：21 组配对 Wilcoxon 检验显示聚合上无统计显著优势（所有 p > 0.05）。

## Why it matters / what's new (EN)

The cellular-ai bin has many LLM-in-the-loop entries — LLM gNB parameter configuration (2026-06-23_arxiv-llm-gnb-parameter-configuration), guard-rail validation for agent decisions (2026-07-04_arxiv-grv-guardrail-ai-agent-telecom), agentic 6G orchestrators (2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator) — but almost all report positive headline results. This paper is the bin's first rigorous *mixed* result: a statistically-honest demonstration that validated small-LLM policy generation is safe and expressive (zero invalid policies) yet not aggregate-superior to a well-tuned static policy. Together with the GRV guard-rail entry it sketches the emerging consensus architecture — LLM proposes, deterministic layer validates and executes — while adding the missing calibration: where in the load spectrum the LLM tier actually pays off (high density/congestion), and where it hurts (light load, tail latency).

## Why it matters / what's new (ZH)

cellular-ai 分类已有许多 LLM 进控制环的条目——LLM gNB 参数配置（2026-06-23_arxiv-llm-gnb-parameter-configuration）、智能体决策护栏校验（2026-07-04_arxiv-grv-guardrail-ai-agent-telecom）、6G 智能体编排器（2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator）——但几乎都报告正面结果。本文是该分类第一个严谨的*混合*结果：以统计上诚实的方式证明经校验的小 LLM 策略生成安全且表达力足够（零无效策略），但聚合性能并不优于调优良好的静态策略。它与 GRV 护栏条目共同勾勒出正在形成的共识架构——LLM 提议、确定性层校验并执行——并补上缺失的标定：LLM 层在负载谱的哪个区间真正有收益（高密度/拥塞），在哪个区间有害（轻负载、尾时延）。

## Images

![Manhattan-grid V2X simulation topology | 曼哈顿网格 V2X 仿真拓扑](https://arxiv.org/html/2607.04290v1/figures/manhattan.png)
![Critical DC-PRR trends by vehicle density | 关键业务 DC-PRR 随车辆密度的趋势](https://arxiv.org/html/2607.04290v1/figures/reliability_density_trends.png)
