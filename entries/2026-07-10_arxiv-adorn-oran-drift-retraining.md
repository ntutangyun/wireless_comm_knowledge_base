---
id: 2026-07-10_arxiv-adorn-oran-drift-retraining
date_published: 2026-07-09
date_found: 2026-07-10
type: academic-paper
technology: cellular
title_en: "ADORN: Adaptive Drift Handling for Open RAN using Reinforcement Learning"
title_zh: "ADORN：用强化学习为 Open RAN 自适应决策'何时重训'漂移中的 AI/ML 模型"
url: "https://arxiv.org/abs/2607.08443"
source_quality: full
topics: [O-RAN, concept-drift, Q-learning, LSTM, AI-ML, traffic-forecasting]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

ADORN (arxiv 2607.08443, submitted July 9, 2026; Subudhi, Chirumamilla, Vaishnav, Hlophe, Donta, Fumagalli, Gudepu, Kondepu — a UT Dallas / IIT collaboration) addresses the operational Achilles' heel of AI/ML models embedded in O-RAN: **concept drift**. Traffic pattern shifts degrade deployed forecasting models, but the standard fixes are both bad — threshold-triggered retraining is hard to tune and fires too often, while periodic retraining burns compute and can itself violate SLAs.

ADORN reframes "when to retrain" as a **Markov Decision Process solved with Q-learning**. The state is a discretized (mean, variance) signature of the incoming traffic window (eight states); the action is binary (retrain / idle); the reward is piecewise and **magnitude-aware** — scaled by how far the forecasting error exceeds the drift threshold — rewarding retraining during genuine drift and idling during stability, penalizing both false alarms and missed drift. To keep retraining from destroying previously-learned regimes, the system maintains a **multi-expert ensemble of eight LSTM forecasters**, one per traffic state, so each expert adapts independently and catastrophic forgetting is contained.

Evaluated on the Colosseum traffic dataset (eight synthetic scenarios; DL throughput as prediction target), ADORN converges to ~1–3 retraining actions per episode versus the greedy baseline's constant 8, while holding nMAE at ~0.17–0.18 against greedy's 0.15–0.16 — i.e. **~60–75% less retraining for a 1–2 pp accuracy cost**, with stable positive cumulative reward where greedy stays negative and random stays volatile.

## Summary (ZH)

ADORN（arxiv 2607.08443，2026 年 7 月 9 日提交；Subudhi、Chirumamilla、Vaishnav、Hlophe、Donta、Fumagalli、Gudepu、Kondepu——UT Dallas / IIT 合作）针对嵌入 O-RAN 的 AI/ML 模型的运维软肋：**概念漂移**。流量模式变化会使已部署的预测模型退化，而两种标准对策都不理想——阈值触发重训难以调参且过于频繁，周期性重训消耗算力且本身可能违反 SLA。

ADORN 将"何时重训"重构为**用 Q-learning 求解的马尔可夫决策过程**。状态是入流量窗口的离散化（均值, 方差）签名（八个状态）；动作为二元（重训/空闲）；奖励为分段且**幅度感知**——按预测误差超出漂移阈值的幅度缩放——真实漂移时重训得正奖励、平稳期空闲得正奖励，误报与漏报均受罚。为避免重训摧毁已学习的流量形态，系统维护**八个 LSTM 预测器的多专家集成**（每个流量状态一个专家），各专家独立适应，从而抑制灾难性遗忘。

在 Colosseum 流量数据集（八个合成场景；以下行吞吐为预测目标）上，ADORN 收敛到每回合约 1–3 次重训（贪心基线恒为 8 次），nMAE 保持在约 0.17–0.18（贪心为 0.15–0.16）——即**以 1–2 个百分点的精度代价换取约 60–75% 的重训削减**，累计奖励稳定为正（贪心恒为负、随机高度波动）。

## Key technical points (EN)

- MDP: 8 discretized (mean, variance) traffic states; binary retrain/idle action; magnitude-aware piecewise reward scaled by error-above-threshold |Δ| = e_t − θ (θ = 0.25 nMAE).
- **Multi-expert LSTM ensemble** (one per traffic state) to contain catastrophic forgetting — retraining touches only the active expert.
- Q-learning: α=0.1, γ=0.9, ε-greedy (1.0, decay 0.95/episode), 300 episodes; simulation on Colosseum traces (no live O-RAN testbed).
- Results: retraining actions ~1–3/episode vs 8 (greedy) and ~4.1 (random); nMAE ~0.17–0.18 vs 0.15–0.16 (greedy); cumulative reward stabilizes at 80–184 post-episode-150.
- Positions against DDM/EDDM-style static drift thresholds and blind periodic retraining.

## Key technical points (ZH)

- MDP：8 个离散化（均值, 方差）流量状态；二元重训/空闲动作；幅度感知分段奖励，按超阈误差 |Δ| = e_t − θ 缩放（θ = 0.25 nMAE）。
- **多专家 LSTM 集成**（每流量状态一个）抑制灾难性遗忘——重训只触及当前活跃专家。
- Q-learning：α=0.1、γ=0.9、ε-贪心（初始 1.0、每回合衰减 0.95）、300 回合；基于 Colosseum 轨迹仿真（无实体 O-RAN 测试台）。
- 结果：每回合重训约 1–3 次，对比贪心 8 次、随机约 4.1 次；nMAE 约 0.17–0.18 对贪心 0.15–0.16；第 150 回合后累计奖励稳定于 80–184。
- 对标 DDM/EDDM 式静态漂移阈值与盲目周期重训。

## Why it matters / what's new (EN)

The KB's open-ran bin already tracks drift from the detection side — RANPilot (2026-07-07_arxiv-ranpilot-proactive-oran-ai-adaptation) makes xApp AI robust to O-RAN *reconfigurations*, and the BeGREEN cluster targets energy. ADORN adds the missing *economics* layer: treating retraining itself as a scarce, SLA-relevant resource and learning a policy for spending it. The magnitude-aware reward and per-state expert ensemble are simple, reusable patterns for any RIC-hosted forecasting xApp. Limitation worth noting: evaluation is trace-driven simulation, and ADORN concedes 1–2 pp accuracy to always-retrain — the claim is cost-efficiency, not accuracy dominance.

## Why it matters / what's new (ZH)

KB 的 open-ran 板块此前从检测侧跟踪漂移——RANPilot（2026-07-07_arxiv-ranpilot-proactive-oran-ai-adaptation）让 xApp AI 对 O-RAN *重配置*保持稳健，BeGREEN 集群聚焦能耗。ADORN 补上了缺失的*经济学*层：把重训本身当作稀缺且 SLA 相关的资源，学习其花费策略。幅度感知奖励与按状态分专家的集成是任何 RIC 托管预测 xApp 都可复用的简单模式。需注意的局限：评估为轨迹驱动仿真，且 ADORN 相对"始终重训"让出 1–2 个百分点精度——其主张是成本效率而非精度优势。

## Images

![ADORN system model | ADORN 系统模型](https://arxiv.org/html/2607.08443v1/x1.png)
![Q-learning based ADORN workflow | 基于 Q-learning 的 ADORN 工作流](https://arxiv.org/html/2607.08443v1/x2.png)
![Cumulative retraining actions vs episodes | 累计重训次数随回合变化](https://arxiv.org/html/2607.08443v1/x3.png)
