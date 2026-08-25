---
id: 2026-08-25_arxiv-pci-assignment-congruence-neural-solvers
date_published: 2026-08-21
date_found: 2026-08-25
type: academic-paper
technology: cellular
title_en: "Congruence Decomposition with Neural Block Solvers for Large-Scale PCI Assignment"
title_zh: "基于同余分解与神经块求解器的大规模 PCI 分配"
url: "https://arxiv.org/abs/2608.21485"
source_quality: full
topics: [PCI, physical-cell-identity, network-planning, interference-management, GNN, combinatorial-optimization, Chinese-remainder-theorem, TS-38.211, SON]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)
A CUHK-Shenzhen / Sun Yat-sen / Tongji / UCAS / Columbia team with Huawei industry collaboration tackles Physical Cell Identity (PCI) assignment — the network-planning problem of giving each 5G cell one of 1008 PCI values so that modular interference is minimized. PCI determines the placement of synchronization signals, DMRS and uplink channel patterns per 3GPP TS 38.211, so cells whose PCIs are congruent mod 3, mod 4, mod 6 or mod 30 interfere on those resources; on top sit hard collision (neighbors sharing a PCI) and confusion (two cells with the same PCI sharing a common neighbor) constraints. The result is a large-scale multi-objective combinatorial problem that exact and heuristic methods struggle to scale to.

Their MMD-GPO framework decomposes the problem by its arithmetic structure: using the Chinese Remainder Theorem plus a "su-adic" decomposition that also handles non-coprime moduli, the multi-modular objective splits into blockwise Min-k-Partition subproblems. Each block is solved by a graph neural network that parametrizes a relaxed (probabilistic) assignment optimized by gradient descent, then rounded deterministically via conditional expectation — with a proof that the discrete solution never exceeds the relaxed objective — and residual collisions/confusions are cleaned up by greedy graph coloring. The paper proves blockwise characterization of modular equality, finite-step termination of the block coordinate descent, and the rounding bound. On synthetic random geometric graphs (N = 500/1000/2000 cells) MMD-GPO attains the lowest modular interference and eliminates all collisions and confusions while the strongest decomposition baseline (MMD-PMD) times out at N = 2000; on about 2,000 cells of a Beijing commercial network it cuts interference a further 2.8% versus MMD-PMD at a 2.04x speedup, and beats modular-interference-aware baselines by 3.4-53%, keeping zero collisions/confusions.

## Summary (ZH)
香港中文大学（深圳）/中山大学/同济大学/中国科学院大学/哥伦比亚大学团队（与华为产业合作）研究物理小区标识（PCI）分配——为每个 5G 小区从 1008 个 PCI 值中选定一个、使模干扰最小化的网络规划问题。按 3GPP TS 38.211，PCI 决定同步信号、DMRS 与上行信道图样的资源位置，因此 PCI 在模 3、模 4、模 6、模 30 意义下同余的小区会在相应资源上互相干扰；其上还叠加硬约束：冲突（相邻小区同 PCI）与混淆（两个同 PCI 小区共享同一邻区）。这构成精确法与启发式方法都难以扩展的大规模多目标组合优化问题。

其 MMD-GPO 框架按算术结构分解问题：利用中国剩余定理加上可处理非互素模数的"su-adic"分解，把多模目标拆成分块的 Min-k-Partition 子问题。每个块由图神经网络参数化松弛（概率）分配、以梯度下降优化，再经条件期望确定性舍入——并证明离散解不超过松弛目标值——残余冲突/混淆由贪心图着色清理。论文证明了模相等的分块刻画、块坐标下降的有限步终止以及舍入界。在合成随机几何图（N = 500/1000/2000 小区）上，MMD-GPO 取得最低模干扰并消除全部冲突与混淆，而最强分解基线 MMD-PMD 在 N = 2000 时超时；在北京商用网络约 2000 个小区上，相比 MMD-PMD 干扰再降 2.8%、提速 2.04 倍，并以 3.4%-53% 优于各模干扰感知基线，同时保持零冲突/零混淆。

## Key technical points (EN)
- Problem: assign PCI in {0,...,1007} per cell minimizing mod-3/4/6/30 congruence interference (SSS, DMRS, SRS resource mappings per TS 38.211) under zero-collision/zero-confusion constraints.
- Congruence decomposition: CRT + su-adic decomposition splits the multi-modular objective into blockwise Min-k-Partition subproblems, covering non-coprime moduli that plain CRT cannot separate.
- Neural block solver: GNN-parametrized relaxed assignment per block, gradient-descent optimized; conditional-expectation rounding provably never worse than the relaxation (Theorem IV.1); greedy coloring for residual collisions/confusions.
- Theory: blockwise characterization of modular equality (Thm III.1) and finite-step termination of block coordinate descent (Thm III.2).
- Synthetic scale test (RGG, N = 500/1000/2000): lowest modular interference of all baselines, all collisions/confusions eliminated; MMD-PMD baseline times out at N = 2000.
- Real network (~2,000 cells, Beijing commercial deployment): -2.8% interference vs MMD-PMD at 2.04x speedup; 3.4-53% better than modular-interference-aware methods; zero collisions/confusions maintained.
- Team: CUHK-Shenzhen, Sun Yat-sen, Tongji, UCAS, Columbia + Huawei collaboration; National Key R&D / NSFC funded. Fresh v1 submitted 2026-08-21.

## Key technical points (ZH)
- 问题：为每小区从 {0,...,1007} 分配 PCI，在零冲突/零混淆约束下最小化模 3/4/6/30 同余干扰（对应 TS 38.211 的 SSS、DMRS、SRS 资源映射）。
- 同余分解：CRT + su-adic 分解将多模目标拆为分块 Min-k-Partition 子问题，并覆盖普通 CRT 无法分离的非互素模数。
- 神经块求解器：每块用 GNN 参数化松弛分配、梯度下降优化；条件期望舍入被证明不劣于松弛解（定理 IV.1）；贪心着色清理残余冲突/混淆。
- 理论：模相等的分块刻画（定理 III.1）与块坐标下降有限步终止（定理 III.2）。
- 合成规模测试（RGG，N = 500/1000/2000）：全基线中模干扰最低、冲突/混淆全消除；MMD-PMD 基线在 N = 2000 超时。
- 真实网络（北京商用网约 2000 小区）：较 MMD-PMD 干扰再降 2.8%、提速 2.04 倍；优于各模干扰感知方法 3.4%-53%；保持零冲突/零混淆。
- 团队：港中深、中山、同济、国科大、哥大 + 华为合作；国家重点研发/自然科学基金资助。2026-08-21 提交的新 v1。

## Why it matters / what's new (EN)
This is the KB's first network-planning/SON-layer entry: the cellular bins cover RAN control (xApps, schedulers), core procedures and spectrum, but nothing on the configuration-optimization problems operators actually run at deployment time, of which PCI assignment is the canonical example. Two things stand out. First, the arithmetic-first decomposition: rather than treating PCI as a generic graph-coloring instance, the method exploits the congruence structure that TS 38.211 itself induces (mod-3 SSS, mod-30 SRS interference), including the non-coprime moduli case — a genuinely standards-shaped formulation. Second, the validation is on a real ~2,000-cell Beijing commercial network with Huawei collaboration, not just synthetic graphs, and the practical win is scalability (2.04x, where the strongest baseline times out at 2,000 cells) with guaranteed zero collision/confusion. The per-objective interference gains are modest (2.8% over the best decomposition baseline), which is why this is a solid rather than spectacular result — but as dense 5G-Advanced/6G deployments push cell counts up, learning-assisted exact-structure solvers of this kind are a plausible SON trajectory to watch.

## Why it matters / what's new (ZH)
这是知识库首个网络规划/SON 层条目：蜂窝各栏目已覆盖 RAN 控制（xApp、调度器）、核心网流程与频谱，但从未涉及运营商在部署时实际求解的配置优化问题，而 PCI 分配正是其中的典型代表。两点突出。其一，算术优先的分解：方法不把 PCI 当作一般图着色实例，而是利用 TS 38.211 本身诱导的同余结构（模 3 SSS、模 30 SRS 干扰），并覆盖非互素模数情形——是真正按标准形状建模的表述。其二，验证在华为合作的北京商用网约 2000 小区真实数据上完成，而非仅合成图；实际收益在可扩展性（2.04 倍提速，最强基线在 2000 小区即超时）并保证零冲突/零混淆。单项干扰增益不大（较最优分解基线 2.8%），因此这是扎实而非惊艳的结果——但随着密集 5G-A/6G 部署推高小区数，这类"学习辅助 + 精确结构"求解器是值得关注的 SON 走向。

## Images
