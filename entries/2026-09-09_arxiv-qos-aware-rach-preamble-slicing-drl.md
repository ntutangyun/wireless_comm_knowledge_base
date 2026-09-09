---
id: 2026-09-09_arxiv-qos-aware-rach-preamble-slicing-drl
date_published: 2026-09-08
date_found: 2026-09-09
type: academic-paper
technology: cellular
title_en: "QoS-Aware RACH Preamble Slicing via Quota-Projected Branching Deep Reinforcement Learning"
title_zh: "基于配额投影分支深度强化学习的 QoS 感知 RACH 前导码切片"
url: "https://arxiv.org/abs/2609.08199"
source_quality: full
topics: [RACH, random-access, preamble-allocation, contention-based-random-access, 2-step-RA, 4-step-RA, branching-DQN, deep-reinforcement-learning, M2M]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Jiulin Guo, Jiahan Xu, Jiashuo Zhang, Heng Yang, Yizhen Sun, Yutong Xie, Shanshan Li, Zhenyu Liu and Lei Zhang (arXiv v1, 8 Sep 2026) tackle a scheduling problem specific to 5G/6G random access: a base station must partition a fixed pool of contention-based random access channel (RACH) preambles across two access procedures — fast but preamble-scarce two-step (2RA) and more robust but higher-overhead four-step (4RA) — while separately serving delay-sensitive (DS) and delay-tolerant (DT) traffic, under mixed human-to-human (H2H) and machine-to-machine (M2M) arrival patterns. A UE that repeatedly collides on 2RA falls back to 4RA after a threshold of 6 failures, and is blocked entirely after 11 failures on 4RA, so static preamble partitioning is either wasteful under light load or collapses under heavy load. The paper's proposed controller, QP-BD3QN-RACH, re-partitions the 54-preamble pool across four pools (DS2, DT2, DS4, DT4) once per decision interval using a quota-projected branching dueling Double DQN.

The controller observes a 28-dimensional state vector (pending UE counts per QoS/access-mode group, prior quota shares, and the previous interval's success/collision/fallback/blocking/delay statistics) and produces four independent branch decisions — one multiplier per pool, chosen from {0.50, 0.75, 1.00, 1.25, 1.50} — via a shared two-layer (128-unit) encoder feeding a dueling value/advantage head per branch (625 possible branch-action combinations before projection). A deterministic quota-projection operator then converts the four multipliers into an integer allocation that exactly sums to the fixed 54-preamble budget: it computes normalized quota scores per branch, floors them to initial integer allocations, and distributes any residual preambles greedily by quota-to-score ratio. Training uses a ten-term weighted reward (success terms for both access modes, penalties for collision/fallback/blocking/delay, with extra weight on DS-sensitive outcomes) under a Double DQN update with a 2,000-step warmup, batch size 64, discount 0.90, and a 500-step target-network refresh.

Evaluated in a discrete-event RACH simulator across five arrival loads (10-200 new UEs per interval, 80% M2M / 20% H2H mix) against four baselines — static access-class-barring, a flat (non-branching) Double DQN over the full 108-action joint space, a flat dueling D3QN, and an eight-pool finer-grained branching variant (B-D3QN-RACH-8) — QP-BD3QN-RACH improved the mean success-vs-collision rate by 5.74-8.21 percentage points depending on the comparator (largest margin against the eight-branch variant), cut fallback rate by 1.23-1.92pp, cut blocking by 0.35-0.68pp, and reduced access delay by 0.128-0.456 decision intervals, averaged across all five load levels. Cross-method comparison used a single nominal seed (42); a separate six-seed sensitivity study of QP-BD3QN-RACH alone showed tight confidence intervals at low and high loads, with the widest variance at the mid-range load of 50 UEs/interval. At the heaviest tested load (200 UEs/interval) the comparison inverted for two of four metrics: static access-class-barring achieved higher success and lower blocking, though QP-BD3QN-RACH retained better fallback handling and delay. Ablations varying the multiplier grid spacing, reward-penalty weights, warmup length, target-update frequency, and network width found the default configuration close to optimal, with grid-spacing choice (mild vs. narrow multiplier ranges) producing the largest, load-dependent trade-offs.

## Summary (ZH)
Jiulin Guo、Jiahan Xu、Jiashuo Zhang、Heng Yang、Yizhen Sun、Yutong Xie、Shanshan Li、Zhenyu Liu 与 Lei Zhang（arXiv v1，2026 年 9 月 8 日）研究了 5G/6G 随机接入中一个特定的调度问题：基站需要将一个固定数量的基于竞争的随机接入信道（RACH）前导码资源池，在两种接入流程之间进行划分——速度较快但前导码稀缺的两步接入（2RA），以及更为鲁棒但开销更高的四步接入（4RA）——同时还要分别服务延迟敏感（DS）与延迟容忍（DT）流量，且流量到达模式为人对人（H2H）与机器对机器（M2M）的混合。在 2RA 上反复发生碰撞的 UE，达到 6 次失败阈值后会回退至 4RA，在 4RA 上再累积 11 次失败后将被完全阻塞；因此静态的前导码划分方案在轻负载下会造成浪费，在重负载下又会失效崩溃。论文提出的控制器 QP-BD3QN-RACH，采用配额投影分支对决双 DQN，在每个决策周期内对 54 个前导码组成的资源池，重新划分到四个池（DS2、DT2、DS4、DT4）中。

该控制器观测一个 28 维状态向量（各 QoS/接入模式组的待接入 UE 数量、此前的配额份额，以及上一周期的成功/碰撞/回退/阻塞/时延统计），并通过一个共享的两层（128 单元）编码器，为每个分支输出对决式价值/优势估计，产生四个相互独立的分支决策——每个池对应一个乘数，取值范围为 {0.50, 0.75, 1.00, 1.25, 1.50}（投影前共有 625 种分支动作组合）。随后一个确定性的配额投影算子将四个乘数转换为一个整数分配方案，使其精确等于固定的 54 个前导码预算：先计算各分支的归一化配额分数，取整得到初始整数分配，再按配额与分数之比贪心分配剩余前导码。训练过程采用一个由十项加权组成的奖励函数（两种接入模式各自的成功奖励项，以及碰撞/回退/阻塞/时延惩罚项，其中对 DS 敏感结果赋予额外权重），并在双 DQN 更新框架下进行，预热步数为 2,000，批大小为 64，折扣因子为 0.90，目标网络每 500 步刷新一次。

在一个离散事件 RACH 仿真器中，针对五种到达负载（每周期 10–200 个新 UE，M2M/H2H 比例为 80%/20%），与四种基线方法——静态接入等级限制（ACB）、覆盖完整 108 维联合动作空间的扁平（非分支）双 DQN、扁平对决 D3QN，以及更细粒度的八池分支变体（B-D3QN-RACH-8）——进行比较，QP-BD3QN-RACH 在五个负载水平上取平均后，将成功对碰撞率平均提升了 5.74–8.21 个百分点（相对八分支变体的优势最大），将回退率降低 1.23–1.92 个百分点，将阻塞率降低 0.35–0.68 个百分点，并将接入时延减少 0.128–0.456 个决策周期。跨方法比较仅使用单一标称种子（42）；另对 QP-BD3QN-RACH 自身做了六种子敏感性分析，在低、高负载下置信区间较窄，在 50 UE/间隔的中等负载下方差最大。在测试的最高负载（每周期 200 个 UE）下，四项指标中有两项出现反转：静态 ACB 取得了更高的成功率与更低的阻塞率，但 QP-BD3QN-RACH 在回退处理与时延方面仍保持优势。针对乘数网格间距、奖励惩罚权重、预热长度、目标网络更新频率与网络宽度的消融实验表明，默认配置已接近最优，其中乘数网格间距（温和 vs. 收窄的乘数取值范围）带来的、随负载变化的权衡最为显著。

## Key technical points (EN)
- Problem: dynamically re-partition a fixed 54-preamble RACH pool across four pools (delay-sensitive/delay-tolerant x 2-step/4-step random access) per decision interval, under mixed H2H/M2M traffic; 2RA->4RA fallback after 6 collisions, 4RA blocking after 11 failures.
- Method: quota-projected branching dueling Double DQN (QP-BD3QN-RACH) - 28-D state, 4 independent branch heads (one multiplier per pool from a 5-value grid), deterministic quota-projection operator guarantees the integer allocation exactly sums to the fixed preamble budget.
- Ten-term weighted reward covering success/collision/fallback/blocking/delay for both access modes, with extra weight on delay-sensitive-traffic outcomes.
- Baselines: static access-class-barring, flat 108-action Double DQN, flat dueling D3QN, an 8-pool finer-grained branching variant (B-D3QN-RACH-8).
- Results (mean across 5 loads, 10-200 UEs/interval): +5.74 to +8.21pp success/collision rate, +1.23 to +1.92pp fallback reduction, +0.35 to +0.68pp blocking reduction, 0.128-0.456 decision-interval delay reduction vs. the four baselines; largest margin vs. the 8-branch variant.
- Cross-method comparison used a single nominal seed (42); a separate six-seed sensitivity study of QP-BD3QN-RACH alone showed tight confidence intervals at low and high loads, with the widest variance at the mid-range load of 50 UEs/interval; at the heaviest load (200 UEs/interval) static ACB wins on success rate and blocking, QP-BD3QN-RACH still wins on fallback and delay.
- Ablations (multiplier grid spacing, reward weights, warmup length, target-update interval, network width) show the default configuration near-optimal; grid spacing is the most load-sensitive choice.

## Key technical points (ZH)
- 问题：在混合 H2H/M2M 流量下，每个决策周期内动态地将一个固定的 54 个前导码组成的 RACH 资源池，重新划分到四个池（延迟敏感/延迟容忍 x 两步/四步随机接入）；2RA 在 6 次碰撞后回退至 4RA，4RA 在 11 次失败后阻塞。
- 方法：配额投影分支对决双 DQN（QP-BD3QN-RACH）——28 维状态，四个相互独立的分支头（每个池对应一个从 5 值网格中选取的乘数），确定性配额投影算子保证整数分配结果精确等于固定的前导码预算。
- 十项加权奖励函数，涵盖两种接入模式各自的成功/碰撞/回退/阻塞/时延，并对延迟敏感流量的结果赋予额外权重。
- 基线方法：静态接入等级限制、覆盖 108 维动作空间的扁平双 DQN、扁平对决 D3QN，以及更细粒度的八池分支变体（B-D3QN-RACH-8）。
- 结果（五种负载即每周期 10–200 个 UE 的平均值）：成功对碰撞率提升 5.74–8.21 个百分点，回退率降低 1.23–1.92 个百分点，阻塞率降低 0.35–0.68 个百分点，接入时延减少 0.128–0.456 个决策周期（相对四种基线）；相对八分支变体的优势最大。
- 跨方法比较仅使用单一标称种子（42）；另对 QP-BD3QN-RACH 自身做了六种子敏感性分析，在低、高负载下置信区间较窄，在 50 UE/间隔的中等负载下方差最大；在最高负载（每周期 200 个 UE）下，静态 ACB 在成功率与阻塞率上占优，但 QP-BD3QN-RACH 在回退处理与时延方面仍保持优势。
- 消融实验（乘数网格间距、奖励权重、预热长度、目标网络更新间隔、网络宽度）表明默认配置已接近最优，其中网格间距是对负载最敏感的设计选择。

## Why it matters / what's new (EN)
The KB's cellular-ai and 5g-nr bins have covered AI-driven scheduling and resource allocation at the PRB/beam/slicing level, but this is the first entry addressing the RACH preamble pool itself as a learned, jointly QoS- and access-mode-aware allocation problem. The quota-projection mechanism — mapping continuous branch decisions to an integer allocation that exactly respects the fixed preamble budget — is a mechanism not seen elsewhere in the KB's branching-DQN applications, and the explicit two-step/four-step procedure coupling (fallback and blocking thresholds baked into the state and reward) makes this the first entry to model 5G random-access congestion control end-to-end rather than treating RACH as a fixed-parameter background assumption.

## Why it matters / what's new (ZH)
知识库中 cellular-ai 与 5g-nr 栏目此前已覆盖 PRB/波束/网络切片层面的 AI 驱动调度与资源分配，但本条目是首个将 RACH 前导码资源池本身作为一个需要同时兼顾 QoS 与接入模式的学习型分配问题来处理的条目。其中的配额投影机制——将连续的分支决策映射为一个精确满足固定前导码预算的整数分配方案——是知识库现有分支 DQN 应用中此前未曾出现的机制，而对两步/四步接入流程的显式耦合建模（将回退与阻塞阈值直接纳入状态与奖励设计）使本条目成为首个端到端建模 5G 随机接入拥塞控制、而非将 RACH 视为固定参数背景假设的条目。

## Images
![Control and learning architecture of QP-BD3QN-RACH | QP-BD3QN-RACH 的控制与学习架构](https://arxiv.org/html/2609.08199v1/fig2_method_diagram.png)
