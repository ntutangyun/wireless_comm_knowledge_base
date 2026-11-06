---
id: 2026-11-06_arxiv-ri-inflation-prb-starvation-pf-scheduler-5g-nr
date_published: 2026-11-04
date_found: 2026-11-06
type: academic-paper
technology: cellular
title_en: "PRB Starvation at Slot Time via Rank Indicator Inflation: Attacking Proportional Fair Memory in the Scheduler"
title_zh: "借助秩指示（RI）虚报在时隙级造成 PRB 饥饿：攻击调度器中的比例公平记忆"
url: "https://arxiv.org/abs/2611.07225"
source_quality: full
topics: [proportional-fair-scheduling, rank-indicator, PRB-starvation, denial-of-service, CSI-feedback, Sionna, O-DU, dApp]
topic_primary: cellular-security
topics_secondary: [5g-nr, open-ran]
novelty_score: 3
---

## Summary (EN)

Ryan Barker and co-authors (Clemson University, Savannah River National Laboratory, NVIDIA) examine the proportional fair (PF) scheduler of 5G NR, which ranks each UE by its instantaneous spectral efficiency divided by an exponentially weighted moving average (EWMA) of the service actually delivered to it. They describe a served-but-undelivered denial of service: a UE that over-reports its rank indicator (RI) is granted spatial layers its channel cannot support, so first-attempt delivery fails, its delivered-service EWMA stays near zero, and the PF allocator keeps handing it the full PRB pool. The attack needs no payload traffic and works through channel-state feedback rather than through the idle-then-bursty traffic shaping used in earlier PF-starvation studies.

The authors formalise the recurrence, derive a closed-form starvation horizon, and evaluate it in a paired simulation harness built on Sionna physical-layer and ray-tracing models. They explicitly state that this is modelled slot progression, not an over-the-air attack implementation, and that the claim concerns scheduler behaviour under the stated PF recurrence rather than deployed cell capacity.

## Summary (ZH)

Ryan Barker 等（克莱姆森大学、萨凡纳河国家实验室、NVIDIA）研究 5G NR 的比例公平（PF）调度器：它按每个 UE 的瞬时频谱效率除以其实际已送达服务量的指数加权滑动平均（EWMA）来排序。他们描述了一种“已调度但未送达”的拒绝服务：UE 虚报秩指示（RI）后，被授予其信道无法支持的空间层，首次传输必然失败，其已送达服务量的 EWMA 保持接近零，PF 分配器便持续把整个 PRB 池分配给它。该攻击不需要有效载荷流量，经由信道状态反馈生效，而不是早期 PF 饥饿研究所用的“空闲后突发”流量整形。

作者将该递推形式化，推导出闭式的饥饿时间范围，并在基于 Sionna 物理层与射线追踪模型的成对仿真平台上评估。他们明确说明这是建模的时隙推进，而不是空口攻击的实现，结论针对所述 PF 递推下的调度器行为，而非实际部署的小区容量。

## Key technical points (EN)

- Mechanism: the PF numerator uses channel-grounded SINR, so the falsified RI cannot raise it directly; the effect enters only through the delivered-service denominator. Exact schedule replay reproduces 100.0% of recorded PF winners, and a Monte Carlo recurrence predicts target capture of 0.943-0.995 against 0.940-0.953 measured.
- Setup: four UEs in one cell on a virtual 273-PRB, 100 MHz, 30 kHz-subcarrier carrier (0.5 ms slot); 3,300 paired 200-slot shards over rank-1 and rank-2 Sionna ray-tracing geometries, three link-adaptation controllers (OLLA, SALAD, SALAD-CQI), PF versus round robin (RR), four target identities and five seeds.
- Result on the rank-2 geometry: an inflation of one layer is enough; the attacker wins 94-95% of downlink slots, PRB Jain fairness (200-slot window) falls from 0.997 to about 0.28, and honest UEs see mean zero-grant runs of 41-56 ms against a 10 ms PF time constant. RR keeps equal allocation. On the rank-1 control, where there is no spatial headroom, RI inflation is inert.
- Closed-form horizon: between about 150 and 219 modelled updates before an honest UE can outrank the pinned attacker, which explains why recovery depends on rare target decode outcomes.
- Specificity checks: HARQ flipping and PMI randomisation do not reproduce the collapse; CQI/SINR over-reporting gives a weaker, controller-dependent effect (OLLA up to about 0.96 target share, SALAD-CQI about 0.33-0.35, SALAD unaffected).
- Defence discussion: activity-gated EWMA fixes designed for bursty attackers do not engage because the attacker is continuously backlogged. The authors point to RI-consistency checks before feedback gains scheduling authority, plus a slot-time PRB ledger inside the O-RAN Distributed Unit (O-DU), because one-second KPIs can average over many 50 ms deprivation episodes.

## Key technical points (ZH)

- 机理：PF 分子使用基于信道的 SINR，虚报的 RI 无法直接抬高分子；影响只经由已送达服务量的分母进入。精确的调度重放复现了 100.0% 的 PF 获胜记录，蒙特卡洛递推预测的目标占用率为 0.943-0.995，实测为 0.940-0.953。
- 设置：单小区四个 UE，虚拟 273 PRB、100 MHz、30 kHz 子载波间隔（时隙 0.5 ms）；在秩 1 与秩 2 的 Sionna 射线追踪几何下共 3,300 个成对的 200 时隙分片，涵盖三种链路自适应控制器（OLLA、SALAD、SALAD-CQI）、PF 与轮询（RR）、四个目标 UE 身份和五个随机种子。
- 秩 2 几何下的结果：多报一层即足够；攻击者赢得 94-95% 的下行时隙，PRB Jain 公平性（200 时隙窗口）由 0.997 降至约 0.28，诚实 UE 的平均零授权连续时长为 41-56 ms，而 PF 时间常数为 10 ms。RR 保持均分。在没有空间余量的秩 1 对照组中，RI 虚报无效。
- 闭式时间范围：诚实 UE 要超过被钉住的攻击者，约需 150 至 219 个建模更新，这解释了恢复为何取决于目标罕见的译码成功。
- 特异性检查：HARQ 翻转与 PMI 随机化无法复现崩溃；CQI/SINR 虚报的效果较弱且依赖控制器（OLLA 下目标份额最高约 0.96，SALAD-CQI 约 0.33-0.35，SALAD 不受影响）。
- 防御讨论：针对突发攻击者设计的活动门控 EWMA 方案不会触发，因为攻击者持续有积压数据。作者建议在反馈获得调度权限之前做 RI 一致性检查，并在 O-RAN 分布式单元（O-DU）内部设置时隙级 PRB 账本，因为秒级 KPI 可能把许多 50 ms 的被剥夺片段平均掉。

## Why it matters / what's new (EN)

The paper moves scheduler-starvation analysis from traffic-pattern manipulation to channel-feedback manipulation, and it separates allocation fairness from throughput fairness: delivered throughput alone cannot tell self-inflicted failure from scheduler-amplified starvation. Its evidence is simulation with modelled timing and a single-cell, four-UE, frequency-flat PRB accounting without inter-user interference, so it does not establish over-the-air feasibility or the effect on a production scheduler, which 3GPP leaves unspecified. It is a concrete argument for placing slot-time evidence in the O-DU rather than relying on near-real-time RIC loops.

## Why it matters / what's new (ZH)

该论文把调度器饥饿分析从流量模式操纵推进到信道反馈操纵，并把分配公平性与吞吐公平性区分开：仅凭已送达吞吐无法区分自身失败与调度器放大的饥饿。证据来自带建模时序的仿真，且为单小区、四 UE、频率平坦的 PRB 记账、不含用户间干扰，因此并未证明空口可行性，也未说明对 3GPP 未作规定的实际调度器的影响。它为把时隙级证据放在 O-DU 内而不是依赖近实时 RIC 回路提供了具体论据。

## Images

None.
