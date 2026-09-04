---
id: 2026-09-04_arxiv-ppo-beam-hopping-power-control-ota-fl-leo
date_published: 2026-09-02
date_found: 2026-09-04
type: academic-paper
technology: satellite
title_en: "Adaptive Beam Hopping and Power Control for Dual-Layer Over-the-Air Online Federated Learning in LEO Satellite Networks"
title_zh: "面向低轨卫星双层空中在线联邦学习的自适应波束跳变与功率控制"
url: "https://arxiv.org/abs/2609.03202"
source_quality: full
topics: [federated-learning, over-the-air-computation, beam-hopping, power-control, LEO, PPO, deep-reinforcement-learning, MINLP, MSE-constraint, online-learning]
topic_primary: sat-ai
topics_secondary: [sat-iot, leo-constellations]
novelty_score: 4
---

## Summary (EN)
Li, Wang, Zhang and Peng (Xi'an Jiaotong University) with Su (Xi'an Jiaotong University), Cheng (Xidian University), Wang (Beijing University of Posts and Telecommunications) and Chen (Shanghai Jiao Tong University) study over-the-air (OTA) computation-enabled online federated learning (FL) in a low-Earth-orbit (LEO) satellite network built as a dual-layer aggregation architecture: K ground devices upload analog model updates to serving satellites via a first uplink OTA aggregation, and the satellites forward the aggregated signals to a ground data-processing center (DPC) through a second OTA aggregation. Because untrained samples continuously lose freshness as new data arrives at the devices, the authors formulate a long-term data-utilization maximization problem, subject to a per-satellite beam budget (at most V beams active simultaneously), a transmit-power limit on both devices and satellites, and a global mean-squared-error (MSE) constraint bounding end-to-end aggregation distortion. This yields a mixed-integer nonlinear programming (MINLP) problem — discrete beam-hopping decisions tightly coupled with continuous power control — that the paper characterizes as NP-hard, and which becomes a sequential decision problem once the time-varying satellite topology and ongoing data generation are taken into account.

The authors cast the problem as a Markov decision process and build a proximal policy optimization (PPO) deep reinforcement learning framework that jointly decides, at each time step, which beams each satellite activates, and the power coefficients for both devices and satellites, using a reward that trades off normalized data utilization against a clipped penalty for MSE-constraint violation. In simulation (N=6 satellites at 550 km altitude, up to V=4 beams per satellite, 70 ground cells with 3 devices each, 500 MHz bandwidth, MSE threshold ρ=-5 dB), the PPO policy is compared against SAC, TD3, DDPG and a greedy baseline on two FL tasks — MNIST with an MLP (60 global rounds) and CIFAR-10 with a CNN (180 global rounds). PPO achieves the highest average per-round data utilization across all tested beam budgets (V=3 to 7), reaches 70% MNIST test accuracy by round 25 and exceeds 84% final accuracy after 60 rounds, and sustains its lead on the harder CIFAR-10 task through all 180 rounds. All learning-based policies satisfy the -5 dB global MSE constraint, but the paper reports that PPO learns to use more of the available MSE margin to collect additional data than the greedy baseline, which stays well below the threshold and leaves margin unused. The authors state two simplifying assumptions in their own limitations discussion: independent and identically distributed (IID) local data across devices (real deployments would be statistically heterogeneous), and perfect channel state information at the scheduler.

## Summary (ZH)
西安交通大学的 Li、Wang、Zhang、Peng 与 Su，联合西安电子科技大学的 Cheng、北京邮电大学的 Wang、上海交通大学的 Chen，研究在低轨（LEO）卫星网络中由空中（OTA）计算支持的在线联邦学习（FL），其架构为双层聚合：K 个地面设备通过第一次上行 OTA 聚合，把模拟模型更新上传给服务卫星；卫星再通过第二次 OTA 聚合，把聚合后的信号转发给地面数据处理中心（DPC）。由于未训练样本会随着设备端新数据的持续到来而不断失去新鲜度，作者提出一个长期数据利用率最大化问题，约束条件包括：单星波束预算（每颗卫星至多同时激活 V 个波束）、设备与卫星各自的发射功率上限，以及约束端到端聚合失真的全局均方误差（MSE）约束。这构成一个混合整数非线性规划（MINLP）问题——离散的波束跳变决策与连续的功率控制紧密耦合——论文将其刻画为 NP 难问题；一旦考虑时变的卫星拓扑与持续的数据生成过程，该问题进一步变为一个序贯决策问题。

作者将该问题建模为马尔可夫决策过程，并构建了一个基于近端策略优化（PPO）的深度强化学习框架，在每个时隙联合决定每颗卫星激活哪些波束，以及设备与卫星各自的功率系数，奖励函数在归一化的数据利用率与 MSE 约束违反的截断惩罚之间进行权衡。仿真设置为：N=6 颗卫星、轨道高度 550 公里，每星最多 V=4 个波束，70 个地面小区、每区 3 台设备，带宽 500 MHz，MSE 门限 ρ=-5 dB；在 MNIST+MLP（60 轮全局训练）与 CIFAR-10+CNN（180 轮全局训练）两个 FL 任务上，将 PPO 与 SAC、TD3、DDPG 及贪心基线对比。结果显示，PPO 在所测试的全部波束预算（V=3 至 7）下均取得最高的单轮平均数据利用量；在 MNIST 任务上第 25 轮即达到 70% 测试准确率，60 轮后最终准确率超过 84%；在更困难的 CIFAR-10 任务上，PPO 在全部 180 轮训练中始终保持领先。所有基于学习的策略均满足 -5 dB 的全局 MSE 约束，但论文报告 PPO 学会比贪心基线更充分地利用可用的 MSE 余量以采集更多数据，而贪心基线的运行水平远低于门限，留下了未被利用的余量。作者在自身的局限性讨论中明确指出两条简化假设：各设备本地数据独立同分布（IID）（真实部署中数据存在统计异质性），以及调度器掌握完美的信道状态信息。

## Key technical points (EN)
- **Architecture:** K ground devices, N=6 LEO satellites (Xi'an Jiaotong/Xidian/BUPT/SJTU authors), one ground DPC; two-stage OTA aggregation (device→satellite uplink, satellite→DPC downlink).
- **Constraints:** per-satellite beam budget ∑c xn,c(t) ≤ V; device power ≤ Pk (strictly zero if unscheduled) and satellite power ≤ Pn; global MSE(ẑ(t),z(t)) ≤ ρ at every time step.
- **Objective:** maximize long-term total training data exploited, with a discount factor η modeling data-freshness decay — formulated as an MINLP (discrete beam-hopping × continuous power control), stated NP-hard, recast as an MDP for online scheduling.
- **PPO-DRL design:** state = per-device data amounts + satellite-to-cell channel gain matrix + satellite-to-DPC channel gains; action = beam-activation vectors {X^t_n}, device power coefficients {b^t_k}, satellite power coefficients {b^t_n}; reward r_t = |D_t|/|D_t|_max − clip(μ(MSE_t − ρ), 0, 1).
- **Simulation setup:** 550 km altitude, N=6 satellites, V up to 4 beams/satellite, S=70 cells × 3 devices/cell, device Tx power 8.4 dBW, satellite Tx power 30 dBW, bandwidth 500 MHz, ρ=-5 dB; MNIST+MLP (60 global rounds, 2 local epochs) and CIFAR-10+CNN (180 global rounds, 3 local epochs); baselines SAC, TD3, DDPG, greedy.
- **Headline results:** PPO gives the highest average data utilization per round across V=3–7; MNIST reaches 70% test accuracy by round 25 and >84% final accuracy at round 60; CIFAR-10 advantage sustained across all 180 rounds; all learning policies meet the -5 dB MSE constraint, with PPO exploiting more of the available margin than the greedy baseline.
- **Author-stated limitations:** IID local data assumed across devices; perfect CSI assumed at the scheduler — both flagged by the authors as simplifications relative to real deployments.

## Key technical points (ZH)
- **架构：** K 个地面设备、N=6 颗 LEO 卫星（作者分属西安交大/西安电子科大/北邮/上海交大）、一个地面 DPC；两级 OTA 聚合（设备→卫星上行、卫星→DPC 下行）。
- **约束：** 单星波束预算 ∑c xn,c(t) ≤ V；设备功率 ≤ Pk（未被调度时严格为零）与卫星功率 ≤ Pn；每个时隙的全局 MSE(ẑ(t),z(t)) ≤ ρ。
- **目标：** 在数据新鲜度衰减折扣因子 η 下，最大化长期训练数据利用总量——建模为 MINLP（离散波束跳变 × 连续功率控制），论文称其为 NP 难问题，并重新构建为 MDP 以支持在线调度。
- **PPO-DRL 设计：** 状态 = 各设备数据量 + 卫星到小区的信道增益矩阵 + 卫星到 DPC 的信道增益；动作 = 波束激活向量 {X^t_n}、设备功率系数 {b^t_k}、卫星功率系数 {b^t_n}；奖励 r_t = |D_t|/|D_t|_max − clip(μ(MSE_t − ρ), 0, 1)。
- **仿真设置：** 轨道高度 550 公里，N=6 颗卫星，每星最多 V=4 个波束，S=70 个小区 × 每区 3 台设备，设备发射功率 8.4 dBW，卫星发射功率 30 dBW，带宽 500 MHz，ρ=-5 dB；MNIST+MLP（60 轮全局训练，2 轮本地训练）与 CIFAR-10+CNN（180 轮全局训练，3 轮本地训练）；对比基线为 SAC、TD3、DDPG 与贪心策略。
- **主要结果：** 在 V=3 至 7 的所有波束预算下，PPO 的单轮平均数据利用量均最高；MNIST 任务第 25 轮达到 70% 测试准确率，第 60 轮最终准确率超过 84%；CIFAR-10 任务的领先优势在全部 180 轮中保持；所有学习型策略均满足 -5 dB 的 MSE 约束，其中 PPO 比贪心基线更充分地利用了可用余量。
- **作者自述的局限性：** 假设各设备本地数据独立同分布；假设调度器掌握完美信道状态信息——作者明确将二者列为相对真实部署的简化假设。

## Why it matters / what's new (EN)
This knowledge base logged the same author cluster's earlier contribution on 2026-08-17 (`2026-08-17_arxiv-dual-layer-ota-fl-leo`, arxiv 2608.13885) as an article/tutorial-style piece that laid out the dual-layer OTA-FL + beam-hopping concept only qualitatively, was ingested abstract-only, and was explicitly flagged in that entry's own assessment as warranting "a fuller theory/eval paper on joint OTA-FL + BH scheduling" as a higher-novelty follow-up. This paper is that follow-up: it turns the earlier concept into a concrete constrained optimization (MINLP under beam-budget, power, and MSE constraints), a full MDP/PPO algorithm design, and a multi-baseline numerical evaluation with reported convergence and data-utilization figures on two standard FL benchmarks. It is the first entry in this knowledge base to jointly treat beam-hopping scheduling (previously tracked here as a LEO capacity-allocation primitive, e.g. 2026-07-07 BRIDGE, 2026-08-15 DVB beam-hopping) and power control as one coupled decision problem for the specific workload of over-the-air federated learning, with an explicit MSE-based aggregation-quality constraint rather than treating FL accuracy and radio resource allocation as separate concerns.

## Why it matters / what's new (ZH)
本知识库此前于 2026-08-17 收录了同一作者群体的早期成果（`2026-08-17_arxiv-dual-layer-ota-fl-leo`，arxiv 2608.13885），当时是一篇仅定性阐述双层 OTA-FL + 波束跳变概念的文章/综述型贡献，仅摘要摄入，且该条目自身的评估明确指出，"一篇关于联合 OTA-FL + BH 调度的更完整理论/评估论文将值得作更高新颖度的后续条目"。本篇正是这样的后续工作：它把此前的概念转化为具体的约束优化问题（波束预算、功率与 MSE 约束下的 MINLP）、完整的 MDP/PPO 算法设计，以及在两个标准 FL 基准上对多种基线做的数值评估，并给出收敛性与数据利用率的具体结果。这是本知识库首次将波束跳变调度（此前作为 LEO 容量分配原语被追踪，如 2026-07-07 BRIDGE、2026-08-15 DVB 波束跳变）与功率控制作为一个耦合决策问题，针对"空中联邦学习"这一具体工作负载联合处理，并以明确的基于 MSE 的聚合质量约束，取代了将 FL 精度与无线资源分配分开处理的做法。

## Images

None.
