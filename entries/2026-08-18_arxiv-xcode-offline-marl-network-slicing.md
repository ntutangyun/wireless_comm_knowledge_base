---
id: 2026-08-18_arxiv-xcode-offline-marl-network-slicing
date_published: 2026-08-14
date_found: 2026-08-18
type: academic-paper
technology: cellular
title_en: "X-CODE: XAI-Guided Conservative Decentralized Execution for Offline Multi-Agent Network Slicing"
title_zh: "X-CODE：面向离线多智能体网络切片的可解释 AI 引导保守分散执行"
url: "https://arxiv.org/abs/2608.13982"
source_quality: full
topics: [network-slicing, offline-RL, multi-agent-RL, conservative-Q-learning, explainable-AI, SHAP, CTDE, edge-computing, resource-allocation]
topic_primary: network-slicing
topics_secondary: [cellular-ai, mec]
novelty_score: 3
---

## Summary (EN)
Eldeeb (University of Oulu, 6G Flagship), Chergui (i2CAT) and Debbah (Khalifa University) — arXiv 14 Aug 2026, code and datasets at github.com/Eslam211/xcode-ran-slicing — attack a deployment problem that online multi-agent reinforcement learning (MARL) for slicing keeps running into: operators will not let agents explore on a live network, and they do not want per-decision signalling between slice agents at run time. Their setting is an edge-enabled RAN slicing system with **K = 3 slices (eMBB, mMTC, URLLC)** competing for one edge server's CPU budget (40 Gcycles/s) in discrete steps τ = 0.1 s, each slice choosing a CPU allocation from {1, 5, 10, 15, 20, 25, 30} Gcycles/s to minimise its own Little's-law latency; a **resource conflict** is any step where the requested sum exceeds the budget (the simulator then falls back to a default split and penalises the agents). It is a "resource-coupled cooperative game with competing demands": over-ask and you conflict, under-ask and latency rises.

**X-CODE** trains entirely offline from a static dataset — deliberately a low-quality **random-walk** dataset of 10 000 transitions — using centralised training / decentralised execution: a **CQL-VDN** critic (value-decomposition network summing per-agent Q-functions, with a conservative Q-learning regulariser α = 1 that penalises out-of-distribution actions). The novelty is an **explainability-aware reward relabelling** step: the dataset is split into M folds, preliminary CQL-VDN critics are fitted on M−1 folds, **SHAP** attributions of the held-out transitions are computed, mapped to a per-agent attribution distribution, and its normalised entropy is turned into an *attribution-concentration bonus* b(o,a) = mean_k(1 − H_k / log d_o); the team reward is relabelled r_XAI = r_team + μ·(b − b̄) (μ = 1, mean-centred so the reward scale is preserved). Transitions whose centralised critic "explains itself" via a few dominant features are up-weighted; the authors are explicit that this is not potential-based shaping and does not guarantee policy invariance — μ is a tuning knob. At run time each agent uses only its local Q-function and observation; no messages are exchanged.

Against online DQN with emergent communication + information bottleneck (the strong online baseline), online independent DQN, random walk, and offline baselines (independent XAI-CQL, CFCQL, QMIX, plain VDN), X-CODE matches the online-communicating baseline's median latency and is the **only method with zero observed resource-conflict events** in the test episodes; offline CFCQL/QMIX avoid conflicts by under-utilising CPU (heavier latency tails), which the XAI relabelling specifically fixes (μ = 0 collapses to conservative VDN, large μ lets the bonus swamp the task reward; α = 0 shows OOD over-estimation tails, α = 10 over-constrains). Signalling drops from K·⌈log₂3⌉ bits/step to zero, and effective inference latency falls **88 % on average** versus the communicating online baseline under the assumed link-delay model. SHAP analysis shows the CPU-gap and traffic features of the eMBB and URLLC agents dominate the centralised value; queue features contribute little.

## Summary (ZH)
Eldeeb（奥卢大学，6G Flagship）、Chergui（i2CAT）与 Debbah（哈利法大学）——2026 年 8 月 14 日 arXiv，代码与数据集见 github.com/Eslam211/xcode-ran-slicing——针对切片在线多智能体强化学习（MARL）反复撞上的部署难题：运营商不允许智能体在现网上探索，也不希望切片智能体运行时逐决策交换信令。场景为边缘 RAN 切片系统：**K = 3 个切片（eMBB、mMTC、URLLC）**竞争同一边缘服务器的 CPU 预算（40 G cycles/s），决策周期 τ = 0.1 s，每个切片从 {1, 5, 10, 15, 20, 25, 30} G cycles/s 中选择 CPU 分配以最小化自身基于 Little 定律的时延；请求之和超出预算的时隙记为一次**资源冲突**（仿真器回退到默认分配并施加惩罚）。这是“需求相互竞争的资源耦合合作博弈”：多要则冲突，少要则时延上升。

**X-CODE** 完全离线训练于静态数据集——刻意选用低质量的**随机游走**数据集（10 000 条转移）——采用集中训练/分散执行：**CQL-VDN** 评价器（值分解网络对各智能体 Q 函数求和，配以 α = 1 的保守 Q 学习正则项惩罚分布外动作）。创新点在于**可解释性感知的奖励重标注**：数据集分为 M 折，在 M−1 折上拟合初步 CQL-VDN 评价器，对留出折计算 **SHAP** 归因，映射为每个智能体的归因分布，再将其归一化熵转为*归因集中度奖励* b(o,a) = mean_k(1 − H_k / log d_o)；团队奖励重标为 r_XAI = r_team + μ·(b − b̄)（μ = 1，均值中心化以保持奖励尺度）。集中评价器可由少数主导特征“解释自身”的转移被上调权重；作者明确这不是基于势函数的整形、不保证策略不变性——μ 是一个调节旋钮。运行时每个智能体只用本地 Q 函数与本地观测，不交换任何消息。

对比在线 DQN + 涌现通信 + 信息瓶颈（强在线基线）、在线独立 DQN、随机游走以及离线基线（独立 XAI-CQL、CFCQL、QMIX、朴素 VDN），X-CODE 的中位时延与带通信的在线基线持平，且是测试回合中**唯一零资源冲突事件**的方法；离线 CFCQL/QMIX 通过 CPU 欠利用来规避冲突（时延尾部更重），XAI 重标注恰恰修正了这一点（μ = 0 退化为保守 VDN，μ 过大则奖励项淹没任务奖励；α = 0 出现分布外高估的尾部，α = 10 则约束过强）。信令从每步 K·⌈log₂3⌉ 比特降至零，在假定链路时延模型下有效推理时延相对带通信在线基线**平均下降 88 %**。SHAP 分析显示 eMBB 与 URLLC 智能体的 CPU 缺口与流量特征主导集中价值估计，队列特征贡献很小。

## Key technical points (EN)
- Setup: 3 slice agents sharing a 40 Gcycles/s edge CPU; discrete action set of 7 CPU levels; per-slice computation + transmission queues; reward r_k = −λ_l·L_k + λ_a·ã_k − λ_c·χ_t (λ_l = 150, λ_a = 0.05, λ_c = 30); team reward = mean of slice rewards; episode T = 40 steps.
- Learner: CQL-VDN — Bellman loss on the summed VDN value plus α·R_CQL (log-sum-exp over actions minus dataset-action Q, averaged over agents); decentralised greedy policy per agent; 3×128 MLPs, Adam, LR 1e-4, batch 256, 1 500 offline gradient steps.
- XAI relabelling: M-fold split → preliminary critics → SHAP on held-out folds → softmax of |SHAP| → entropy H_k → concentration bonus b_VDN(o,a) → r_XAI = r_team + μ(b − b̄); not potential-based, policy invariance not guaranteed.
- Results: zero conflict events (only method); latency CDF matches online DQN(Comm+IB) and beats DQN(No Comm), random walk, X-CQL, CFCQL, QMIX, VDN; CPU utilisation converges to the high-utilisation region without exceeding budget.
- Ablations: α = 1 best (α = 0 → OOD tails, α = 10 → over-conservative); μ = 1 best (μ = 0 → under-utilising VDN policy, large μ → bonus dominates).
- Overhead: 0 signalling bits/step vs K⌈log₂M⌉ for the communicating baseline; effective inference latency −88 % averaged over the considered link delays; extra cost (SHAP, conservative learning) is training-time only.
- Limitations: single edge server, CPU as the only controlled resource, simulated traffic profiles, 3 agents; open code and datasets released.

## Key technical points (ZH)
- 设置：3 个切片智能体共享 40 G cycles/s 边缘 CPU；7 档离散 CPU 动作；每切片计算队列 + 传输队列；奖励 r_k = −λ_l·L_k + λ_a·ã_k − λ_c·χ_t（λ_l = 150、λ_a = 0.05、λ_c = 30）；团队奖励为切片奖励均值；回合 T = 40 步。
- 学习器：CQL-VDN——对 VDN 求和价值的 Bellman 损失加 α·R_CQL（动作 log-sum-exp 减数据集动作 Q，按智能体平均）；每智能体分散贪心策略；3×128 MLP，Adam，LR 1e-4，批 256，1 500 步离线梯度更新。
- XAI 重标注：M 折划分 → 初步评价器 → 留出折 SHAP → |SHAP| softmax → 熵 H_k → 集中度奖励 b_VDN(o,a) → r_XAI = r_team + μ(b − b̄)；非势函数整形，不保证策略不变性。
- 结果：零冲突事件（唯一）；时延 CDF 与在线 DQN(Comm+IB) 持平，优于 DQN(No Comm)、随机游走、X-CQL、CFCQL、QMIX、VDN；CPU 利用率收敛到高利用区且不超预算。
- 消融：α = 1 最佳（α = 0 → 分布外尾部，α = 10 → 过度保守）；μ = 1 最佳（μ = 0 → 欠利用的 VDN 策略，μ 过大 → 奖励项主导）。
- 开销：每步 0 比特信令 vs 带通信基线的 K⌈log₂M⌉；在所考虑链路时延下有效推理时延平均 −88 %；额外成本（SHAP、保守学习）仅在训练期。
- 局限：单边缘服务器、CPU 为唯一受控资源、仿真流量、3 个智能体；已开源代码与数据集。

## Why it matters / what's new (EN)
The KB's slicing bin (23 entries) contains online DRL/LLM orchestrators (2026-08-04_arxiv-metis-declarative-slice-orchestrator, 2026-08-05_arxiv-opa-online-slice-admission-pricing, 2026-08-05_arxiv-leo-drl-meta-scheduler-ntn-slicing) but nothing on *offline* multi-agent learning — the regime operators actually accept, because it needs no live exploration and no inter-agent signalling. X-CODE is also, per the authors, the first offline MARL scheme that uses explainability as a *training signal* rather than a post-hoc report: SHAP concentration relabels the offline reward to steer decentralised policies away from the resource-hoarding/under-utilisation equilibria that plain CQL/VDN/QMIX fall into. The honest caveats matter: the shaping is not potential-based (μ must be tuned per problem), the evaluation is a 3-slice, single-server CPU simulator, and "zero conflicts" is an empirical result on the evaluated episodes, not a guarantee. The released code and dataset make it a usable baseline for anyone building near-RT-RIC slice controllers that must be trained from logs.

## Why it matters / what's new (ZH)
知识库切片主题（23 条）已有在线 DRL/LLM 编排器（2026-08-04_arxiv-metis-declarative-slice-orchestrator、2026-08-05_arxiv-opa-online-slice-admission-pricing、2026-08-05_arxiv-leo-drl-meta-scheduler-ntn-slicing），但没有*离线*多智能体学习——而这才是运营商真正接受的模式，因为它既不需要在现网探索，也不需要智能体间信令。据作者称，X-CODE 还是第一个把可解释性当作*训练信号*而非事后报告的离线 MARL 方案：SHAP 集中度重标注离线奖励，引导分散策略避开朴素 CQL/VDN/QMIX 会陷入的资源囤积/欠利用均衡。诚实的限定同样重要：整形并非基于势函数（μ 需逐问题调参）、评估是 3 切片单服务器 CPU 仿真、“零冲突”是评估回合上的经验结果而非保证。开源代码与数据集使其成为任何需要从日志训练近实时 RIC 切片控制器的人可用的基线。
