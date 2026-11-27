---
id: 2026-11-27_arxiv-feasibility-aware-drl-o-cu-o-du-vnfc-vm-mapping-6g-o-ran
date_published: 2026-11-25
date_found: 2026-11-27
type: academic-paper
technology: cellular
title_en: "Feasibility-Aware Deep Reinforcement Learning for O-CU and O-DU Mapping in 6G O-RAN"
title_zh: "面向 6G O-RAN 的 O-CU 与 O-DU 映射的可行性感知深度强化学习"
url: "https://arxiv.org/abs/2611.34516"
source_quality: full
topics: [O-RAN, O-CU, O-DU, VNF-placement, DQN, Double-DQN, O-Cloud, MILP, 6G]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Mohammad Asif Habibi and Hans D. Schotten (DFKI, Kaiserslautern) and Xavier Costa-Pérez (NEC Laboratories Europe, i2CAT, ICREA) study how to map the virtual network function components (VNFCs) of the O-RAN central unit (O-CU) and distributed unit (O-DU) onto virtual machines (VMs) in O-Cloud sites. The problem is cast as a feasibility-aware sequential decision process whose primary goal is to maximise the number of placed VNFCs, with fewer active VMs and lower residual resource wastage as secondary goals. The system model follows the O-RAN split 7.2x decomposition into O-CU, O-DU and O-RU (F1 interface, open fronthaul, NG to the core), with management by the SMO and Non-RT RIC.

The paper extends the authors' earlier SliceMapper work (tabular and linear SARSA / Q-learning, arXiv 2603.15242) with a deep Q-network (DQN) and a Double DQN that share a 15-dimensional action-conditioned feature representation whose size does not depend on the number of candidate VMs, with feasible-action masking, multi-step targets, experience replay and target networks. They are compared with random feasible placement, first-fit, first-fit decreasing, best-fit, a resource-wastage-aware heuristic and a time-bounded MILP solver, over four problem sizes with 30 instances each, plus capacity-stress, zero-shot distribution-shift and reward-ablation experiments.

The paper reports a deliberately cautious outcome. At 16 VNFCs by 8 VMs, DQN and Double DQN reach mean placed-VNFC fractions of 0.990 ± 0.014 and 0.996 ± 0.008, but first-fit decreasing and the wastage-aware heuristic match or slightly exceed that placement quality at lower efficiency cost and lower decision time, and the MILP attains the lowest efficiency cost at a much higher runtime. The authors state that the results do not establish superiority of neural placement over conventional methods for this static problem.

## Summary (ZH)

Mohammad Asif Habibi 与 Hans D. Schotten（DFKI，凯泽斯劳滕）以及 Xavier Costa-Pérez（NEC 欧洲实验室、i2CAT、ICREA）研究如何将 O-RAN 中央单元（O-CU）与分布式单元（O-DU）的虚拟网络功能组件（VNFC）映射到 O-Cloud 站点的虚拟机（VM）上。问题被建模为可行性感知的序贯决策过程，首要目标是最大化已放置的 VNFC 数量，次要目标是减少活跃 VM 数量并降低剩余资源浪费。系统模型采用 O-RAN split 7.2x，将 gNB 分解为 O-CU、O-DU 与 O-RU（F1 接口、开放前传、NG 接口连接核心网），由 SMO 与 Non-RT RIC 负责管理。

论文在作者此前的 SliceMapper 工作（表格式与线性 SARSA / Q-learning，arXiv 2603.15242）基础上，引入深度 Q 网络（DQN）与 Double DQN，二者共用一个 15 维的动作条件特征表示，其规模与候选 VM 数无关，并采用可行动作掩码、多步目标、经验回放与目标网络。对比对象包括随机可行放置、first-fit、first-fit decreasing、best-fit、资源浪费感知启发式，以及限时的 MILP 求解器；实验覆盖四种问题规模、每种 30 个实例，另有容量压力、零样本分布偏移与奖励消融实验。

论文报告的结论相当克制：在 16 个 VNFC 对 8 个 VM 的场景中，DQN 与 Double DQN 的平均已放置 VNFC 比例分别为 0.990 ± 0.014 与 0.996 ± 0.008，但 first-fit decreasing 与浪费感知启发式以更低的效率成本和更短的决策时间达到或略超该放置质量，MILP 则以高得多的运行时间获得最低效率成本。作者明确表示，对于所考察的静态问题，结果并不能证明神经网络放置优于传统方法。

## Key technical points (EN)

- Formulation: sequential placement with feasibility masking under storage and compute capacity constraints; reward favours placing every VNFC first, then fewer active VMs and lower residual wastage. A normalised efficiency cost and a MILP formulation are defined in the paper.
- Both agents were trained and evaluated per instance (the main benchmark measures instance-specific optimisation, not generalisation); both satisfied the empirical stabilisation criterion in 28 of 30 runs at 16×8.
- Across sizes up to 64×32 the agents keep high placed fractions, but training time and memory grow substantially; with per-instance training the cost exceeds a single MILP solve at the larger sizes.
- Neither Double DQN over DQN nor a terminal efficiency bonus gave a consistent improvement, and the agents were comparable to the tabular and linear methods of the earlier work.
- Stated limitations: static ordered batches (no dynamic arrivals or live Non-RT RIC control), only storage and compute capacities modelled (no fronthaul or F1 latency budgets or affinities), synthetic instances, sizes only up to 64×32, hyperparameters tuned only at 16×8.

## Key technical points (ZH)

- 建模：在存储与计算容量约束下的序贯放置，带可行性掩码；奖励首先鼓励放置全部 VNFC，其次是减少活跃 VM 与降低剩余浪费。论文定义了归一化效率成本与 MILP 形式。
- 两种智能体均按实例训练与评估（主基准衡量的是针对实例的优化而非泛化）；在 16×8 场景下，两者均在 30 次运行中的 28 次满足经验稳定判据。
- 在最大 64×32 的规模下智能体仍保持较高放置比例，但训练时间与内存显著增长；在逐实例训练下，较大规模时其成本超过一次 MILP 求解。
- Double DQN 相对 DQN、终端效率奖励均未带来一致提升，智能体表现与前作的表格式、线性方法相当。
- 作者列出的局限：静态有序批次（无动态到达，也无在线 Non-RT RIC 控制）、仅建模存储与计算容量（无前传或 F1 时延预算与亲和性）、合成实例、规模仅到 64×32、超参数仅在 16×8 上调优。

## Why it matters / what's new (EN)

The KB's Open RAN entries cover xApp/rApp control, O-RAN security and testbeds, and one placement-of-baseband-functions study (2026-08-04_arxiv-oran-energy-latency-ai-placement, functional split and AI inference placement under energy and latency), but none that maps O-CU/O-DU VNFCs onto individual VMs under capacity constraints. The paper is notable for reporting a null-leaning result against strong heuristics and an exact solver, which makes it a useful reference point for claims about learned placement. It is a preprint under review at IEEE, simulation-only on synthetic instances.

## Why it matters / what's new (ZH)

KB 的 Open RAN 条目涵盖 xApp/rApp 控制、O-RAN 安全与试验台，以及一篇基带功能放置研究（2026-08-04_arxiv-oran-energy-latency-ai-placement，在能耗与时延约束下的功能拆分与 AI 推理放置），但尚无在容量约束下将 O-CU/O-DU 的 VNFC 映射到具体虚拟机的条目。该论文的特点是在强启发式与精确求解器面前报告了偏否定的结果，可作为评价“学习式放置”相关主张的参照。它是投稿 IEEE 审稿中的预印本，仅基于合成实例的仿真。

## Images

None.
