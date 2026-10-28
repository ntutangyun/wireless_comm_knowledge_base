---
id: 2026-10-28_arxiv-dos-attacks-beam-allocation-large-leo-constellations
date_published: 2026-10-25
date_found: 2026-10-28
technology: satellite
type: academic-paper
title_en: "Denial of Service Attacks on Beam Allocation in Large LEO Constellations"
title_zh: "大型 LEO 星座波束分配的拒绝服务攻击"
url: "https://arxiv.org/abs/2610.34631"
source_quality: full
topics: [LEO, beam-allocation, denial-of-service, demand-inflation, max-min-fairness, CosmoSim, security]
topic_primary: leo-constellations
topics_secondary: [starlink, security-privacy]
novelty_score: 3
---

## Summary (EN)

Abbasi, Barahimi, Paolieri and Golubchik (arXiv 2610.34631, cs.NI with cs.CR cross-list, v1 25 October 2026) study how vulnerable the beam allocation stage of a large LEO constellation is to adversarial demand inflation. The threat model is deliberately modest: the attacker neither alters the constellation nor the allocator, but buys and activates extra terminals in chosen cells, each requesting the maximum rate of 200 Mbps. The attacker has two budgets, up to 5% of the population (1,000 to 5,000 terminals) and up to 300 targeted cells. A white-box attacker knows legitimate demands, satellite visibility and the allocation and sharing rules; a black-box attacker knows only each cell's population.

Injected demand raises a cell's aggregate demand, which can move the cell earlier in the allocation order and raise its beam target. The paper attacks four combinations of allocator (Greedy, which gives a cell as many beams as possible in one pass, or Max-Min Fair, which adds at most one beam per cell per pass) and intra-cell sharing (Equal or Proportional). Six attack strategies combine target selection (Top, Bottom, Random, scored by demand or population) with spreading (Uniform or Water-filling).

Evaluation uses the CosmoSim simulator with 6,364 satellites (32 beams and 8 channels each, 1,280 Mbps per beam), 943 H3 cells covering Great Britain, 100,000 legitimate users with log-normal demand (mean 30 Mbps, 80% utilisation; 60% and 100% also tested), 95 one-minute snapshots across roughly one orbit, and 20 demand realisations with 95% confidence intervals. At a 5% budget the share of users receiving at least 70% of requested capacity falls by 34 points under Greedy/Proportional and 30 under Max-Min/Proportional, versus 13 and 9 points under Equal sharing. Greedy/Proportional has the best no-attack coverage (73.6%) and is the most vulnerable; Max-Min/Equal has the lowest no-attack coverage (56.8%) but the smallest worst-case loss (7.6 points versus 11.9 to 13.8). Max-Min needs about 1.4x (proportional) to 2x (equal) as many targeted cells as Greedy to do comparable damage (286 versus 139 cells at 5% under equal sharing). Bottom targeting is strongest under equal sharing (29 of 30 comparisons) and Top targeting under proportional sharing (28 of 30).

The authors suggest attack-aware beam scheduling with robust intra-cell sharing, demand caps and monitoring of sudden terminal activations, but do not evaluate these. Stated limits: no admission control or detection simulated, static injected terminals, Great Britain and downlink only, heuristics derived from a single snapshot.

## Summary (ZH)

Abbasi、Barahimi、Paolieri 和 Golubchik（arXiv 2610.34631，cs.NI 交叉 cs.CR，v1 于 2026 年 10 月 25 日发布）研究大型 LEO 星座的波束分配环节对对抗性需求膨胀的脆弱程度。威胁模型较为克制：攻击者既不修改星座也不修改分配器，只是在选定小区购买并激活额外终端，每个终端请求 200 Mbps 的最大速率。攻击者有两项预算：最多占总人口 5%（1,000 至 5,000 个终端）以及最多 300 个目标小区。白盒攻击者知道合法用户需求、卫星可见性以及分配与共享规则；黑盒攻击者只知道各小区人口。

注入的需求提高小区总需求，可使该小区在分配顺序中靠前并提高其波束目标。论文攻击了四种组合：分配器（Greedy，一次尽可能多地给小区分配波束；Max-Min Fair，每轮每小区最多增加一个波束）与小区内共享方式（等分或按需求比例）。六种攻击策略由目标选择（Top、Bottom、Random，按需求或人口打分）与分散方式（均匀或注水）组合而成。

评估使用 CosmoSim 仿真器：6,364 颗卫星（每颗 32 个波束、8 个信道，每波束 1,280 Mbps），覆盖英国的 943 个 H3 小区，100,000 名合法用户，需求服从对数正态分布（均值 30 Mbps，利用率 80%，另测 60% 与 100%），约一个轨道周期内 95 个间隔 1 分钟的快照，20 次需求实现并给出 95% 置信区间。在 5% 预算下，获得至少 70% 所请求容量的用户比例，在 Greedy/比例共享下下降 34 个百分点，在 Max-Min/比例共享下下降 30 个百分点；等分共享下分别为 13 和 9 个百分点。Greedy/比例共享的无攻击覆盖率最高（73.6%）也最脆弱；Max-Min/等分的无攻击覆盖率最低（56.8%），但最坏情形损失最小（7.6 个百分点，其余为 11.9 至 13.8）。Max-Min 需要的目标小区数约为 Greedy 的 1.4 倍（比例共享）至 2 倍（等分共享）才能造成相当损害（5% 预算、等分共享下为 286 对 139 个小区）。等分共享下 Bottom 目标选择最强（30 次比较中 29 次），比例共享下 Top 最强（30 次中 28 次）。

作者建议采用感知攻击的波束调度、稳健的小区内共享、需求上限以及对终端激活突增的监测，但论文未对其评估。论文列出的局限：未仿真准入控制或检测，注入终端静止，仅研究英国和下行链路，启发式规则基于单个快照。

## Key technical points (EN)

- **Threat model**: extra terminals requesting 200 Mbps each; budgets of 5% of population and 300 cells; white-box or black-box knowledge.
- **Targets**: Greedy and Max-Min Fair beam allocation, each with Equal or Proportional intra-cell sharing.
- **Setup**: CosmoSim, 6,364 satellites, 943 cells over Great Britain, 100,000 users, 95 snapshots.
- **Result**: proportional sharing raises under-served users by up to 34 points versus 13 for equal sharing; Max-Min needs 1.4x to 2x more cells.
- **Trade-off**: the allocation with best baseline coverage (Greedy/Proportional, 73.6%) is the most vulnerable.
- **Caveat**: simulation only, no detection or admission control modelled.

## Key technical points (ZH)

- **威胁模型**：额外终端各请求 200 Mbps；预算为人口 5% 与 300 个小区；白盒或黑盒知识。
- **攻击对象**：Greedy 与 Max-Min Fair 波束分配，各搭配等分或按比例的小区内共享。
- **设置**：CosmoSim，6,364 颗卫星，英国 943 个小区，100,000 用户，95 个快照。
- **结果**：比例共享使欠服务用户增加最多 34 个百分点，等分为 13；Max-Min 需多 1.4 至 2 倍小区。
- **权衡**：基线覆盖最好的分配（Greedy/比例，73.6%）最脆弱。
- **注意**：仅为仿真，未建模检测或准入控制。

## Why it matters / what's new (EN)

The paper positions itself against prior LEO security work on physical-layer jamming/spoofing and network-layer link flooding; it targets the resource-allocation layer instead, and shows that the choice of beam allocator and intra-cell sharing rule changes both baseline coverage and how much damage a demand-inflation attacker can do. The results come from a single-region simulation with an abstract allocator, not from a deployed network.

## Why it matters / what's new (ZH)

论文将自身与既有的物理层干扰/欺骗及网络层链路泛洪类 LEO 安全研究相区分，转而关注资源分配层，并表明波束分配器与小区内共享规则的选择既影响基线覆盖，也影响需求膨胀攻击者能造成的损害。结果来自单一区域的仿真和抽象分配器，而非实际部署网络。

## Images

None.
