---
id: 2026-08-17_arxiv-scaling-5g-tsn-bridges-industrial
date_published: 2026-08-14
date_found: 2026-08-17
type: academic-paper
technology: cellular
title_en: "Scaling 5G-TSN Bridges: Operating Regimes, Scheduling, and Time Synchronisation Under Heterogeneous Industrial Traffic"
title_zh: "5G-TSN 网桥的规模化：异构工业流量下的运行域、调度与时间同步"
url: "https://arxiv.org/abs/2608.14386"
source_quality: full
topics: [5G-TSN, industrial-IoT, TSN-bridge, MAC-scheduling, gPTP, time-synchronization, QoS, Simu5G, IEEE-802.1AS]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Seliem, Roedig, Sreenan and Pesch (University College Cork; arXiv 14 Aug 2026, accepted at MSWiM'26) ask the capacity-planning question 3GPP Release 16's 5G-TSN bridge architecture leaves open: **how many TSN endpoints can share one gNB before per-flow QoS collapses, and which MAC scheduler decides where that cliff sits?** They simulate a full Rel-16 bridge (NW-TT mapping 802.1Q PCP → DSCP → QFI → DRB; DS-TT implementing IEEE 802.1AS transparent-clock residence-time correction) in OMNeT++/Simu5G at 3.5 GHz (n78, μ=1, 30 kHz SCS), sweeping 1–40 endpoints, 10 vs 20 MHz, four schedulers (MaxCI, PF, DRR, QoS-aware PF), static vs Jakes fading, over a heterogeneous industrial mix from 3GPP TR 22.804 (closed-loop control 2 ms deadline, machine-vision high-priority 10 ms, best-effort vision, bulk telemetry) with a **dedicated gPTP bearer** at top priority.

Three regimes emerge. Below saturation (N≤10 at 10 MHz) scheduler choice barely matters (CLC P99 3.3–6.3 ms, ~100 % delivery — except DRR, which starves bursty flows even under light load: 2.2 % MV-HP delivery). At saturation onset (N=15 at 10 MHz, +23 % over capacity) QoS-aware scheduling is worth **one to two orders of magnitude** on critical-flow tail latency: QoS-PF holds CLC at 99.9 % delivery / 96 ms P99 vs 1 552 ms (MaxCI) and 2 889 ms (PF). In overload (N=20, +69 %) QoS-PF keeps 99.8 % CLC delivery at 412 ms P99 while MaxCI/PF collapse to 6.8–11.5 s. Doubling bandwidth roughly doubles the saturation threshold (heuristic: ~12 endpoints per 10 MHz for this mix). Two sobering findings: the configuration has a **~2.25 ms radio latency floor** even at N=1 — so the 2 ms TSN control deadline is unmeetable at sub-6 GHz/30 kHz SCS without configured grants or higher numerology; and the dedicated gPTP bearer prevents clock-servo divergence (no more SettableClock terminations) but cannot stop **inter-UE scheduling coupling** — UEs carrying only low-priority data get fewer scheduling turns, so their gPTP residence times blow out to 394–4 439 ms under saturation versus 15–135 ms for control-carrying UEs.

## Summary (ZH)
Seliem、Roedig、Sreenan 与 Pesch（科克大学学院；2026 年 8 月 14 日 arXiv，MSWiM'26 录用）回答了 3GPP Release 16 5G-TSN 网桥架构悬而未决的容量规划问题：**一个 gNB 能承载多少 TSN 端点而不让每流 QoS 崩塌，哪种 MAC 调度器决定这道悬崖的位置？** 他们在 OMNeT++/Simu5G 中仿真完整的 Rel-16 网桥（NW-TT 完成 802.1Q PCP → DSCP → QFI → DRB 映射；DS-TT 实现 IEEE 802.1AS 透明时钟驻留时间修正），载频 3.5 GHz（n78，μ=1，30 kHz 子载波间隔），扫描 1–40 端点、10 与 20 MHz 带宽、四种调度器（MaxCI、PF、DRR、QoS 感知 PF）、静态与 Jakes 衰落信道，流量取自 3GPP TR 22.804 的异构工业组合（闭环控制 2 ms 时限、高优先机器视觉 10 ms、尽力而为视觉、批量遥测），并为 gPTP 设**最高优先级专用承载**。

结果呈三个运行域。饱和以下（10 MHz、N≤10）调度器几乎无差别（CLC P99 3.3–6.3 ms、约 100 % 送达——DRR 例外，轻载下即饿死突发流：MV-HP 送达仅 2.2 %）。饱和临界（10 MHz、N=15，超容量 23 %）QoS 感知调度对关键流尾时延价值**一到两个数量级**：QoS-PF 保持 CLC 99.9 % 送达 / P99 96 ms，对比 MaxCI 1 552 ms、PF 2 889 ms。过载（N=20，超 69 %）下 QoS-PF 仍保 99.8 % 送达、P99 412 ms，而 MaxCI/PF 崩至 6.8–11.5 秒。带宽翻倍使饱和阈值大致翻倍（经验公式：此流量组合下每 10 MHz 约 12 个端点）。两个清醒的发现：该配置存在 **约 2.25 ms 的无线时延下限**（N=1 也如此）——sub-6 GHz/30 kHz SCS 下不借助配置授权或更高 numerology 无法满足 2 ms TSN 控制时限；gPTP 专用承载可防止时钟伺服发散（不再出现 SettableClock 终止错误），但挡不住**UE 间调度耦合**——只承载低优先级数据的 UE 获得的调度机会更少，饱和时其 gPTP 驻留时间膨胀到 394–4 439 ms，而承载控制流的 UE 仅 15–135 ms。

## Key technical points (EN)
- Bridge model: four-bearer SDAP config — DRB0 best-effort (50 ms budget), DRB1 MV-HP (GBR, 10 ms), DRB2 closed-loop control (GBR, 2 ms), DRB3 gPTP (GBR, 1 ms, priority 0, dedicated).
- QoS-PF weighting: w_d = (GBR?2:1) × 10/(p_d+1) × b(D_d) → gPTP weight 100, control 50, MV-HP 33.3, best-effort 7.5; the only evaluated scheduler that can explicitly prioritise DRBs.
- Regime map (10 MHz): below saturation N≤10; onset N=15 (+23 % load); overload N=20 (+69 %). At 20 MHz the same regimes appear at N=30/N=40 — saturation threshold ≈ doubles with bandwidth.
- Overload table (N=20, 10 MHz): CLC PDR/P99 — QoS-PF 99.8 %/412 ms; DRR 100 %/324 ms but starves MV-HP (2.1 %) and bulk (7.6 %); MaxCI 77.5 %/6 790 ms; PF 59.1 %/11 472 ms. Spatial fairness std: 54 packets (QoS-PF/DRR) vs 5 756–6 961 (MaxCI/PF).
- Latency floor: mean = P99 = 2.25 ms, max 3.0 ms at N=1 for all schedulers (slot 0.5 ms + SR/grant + PDCP/RLC) — strict 2 ms CLC deadline unmet even with zero contention.
- Fading (Jakes 6-path): lowers saturated-regime P99 (multi-user diversity, −20 to −33 %), <15 % effect below saturation; scheduler ranking unchanged.
- gPTP: residence time 2 772 ± 249 µs at N=1; QoS-PF gives 2–5× lower variance than MaxCI at N=10; without the dedicated bearer 4 of 15 saturated cells terminated on oscillator-compensation errors; with it, none — but inter-UE coupling still un-bounds residence times of data-light UEs.
- Setup: OMNeT++ 6.3 / INET 4.6.0 / Simu5G v1.4.1, 30 s runs, 3 seeds; limits: single cell, no mobility, no 802.1Qbv time-aware shaping, one fading model.

## Key technical points (ZH)
- 网桥模型：四承载 SDAP 配置——DRB0 尽力而为（50 ms 预算）、DRB1 高优机器视觉（GBR，10 ms）、DRB2 闭环控制（GBR，2 ms）、DRB3 gPTP（GBR，1 ms，优先级 0，专用）。
- QoS-PF 加权：w_d = (GBR?2:1) × 10/(p_d+1) × b(D_d) → gPTP 权重 100、控制 50、MV-HP 33.3、尽力而为 7.5；是唯一能显式区分 DRB 优先级的被测调度器。
- 运行域（10 MHz）：饱和以下 N≤10；临界 N=15（超载 23 %）；过载 N=20（超载 69 %）。20 MHz 下相同域出现在 N=30/N=40——饱和阈值随带宽约翻倍。
- 过载对照（N=20、10 MHz）：CLC 送达率/P99——QoS-PF 99.8 %/412 ms；DRR 100 %/324 ms 但饿死 MV-HP（2.1 %）与批量流（7.6 %）；MaxCI 77.5 %/6 790 ms；PF 59.1 %/11 472 ms。空间公平性标准差：54 包（QoS-PF/DRR）对 5 756–6 961（MaxCI/PF）。
- 时延下限：N=1 时各调度器均值 = P99 = 2.25 ms、最大 3.0 ms（0.5 ms 时隙 + SR/授权 + PDCP/RLC）——零竞争下也满足不了 2 ms 严格 CLC 时限。
- 衰落（Jakes 六径）：降低饱和域 P99（多用户分集，−20 至 −33 %），饱和以下影响 <15 %；调度器排名不变。
- gPTP：N=1 驻留时间 2 772 ± 249 µs；N=10 时 QoS-PF 方差比 MaxCI 低 2–5 倍；无专用承载时 15 个饱和小区中 4 个因振荡器补偿错误终止；有专用承载则零终止——但 UE 间耦合仍使轻数据 UE 的驻留时间无界。
- 配置：OMNeT++ 6.3 / INET 4.6.0 / Simu5G v1.4.1，30 秒仿真、3 个种子；局限：单小区、无移动性、未评估 802.1Qbv 时间感知整形、单一衰落模型。

## Why it matters / what's new (EN)
The KB's 5G-TSN coverage so far is mechanism-level (Lyapunov queue-aware traffic shaping, 2026-06-26; the 5G-TSN reactive shaper noted the same week) — this is the first **capacity-characterization** entry: a regime map with a planning heuristic (~12 endpoints per 10 MHz for a TR 22.804-style mix) that factory-network designers can actually use. Two findings travel beyond the paper: the 2.25 ms sub-6 GHz latency floor quantifies why strict 2 ms TSN control loops need configured grants/higher numerology rather than better scheduling; and the inter-UE gPTP coupling result shows that intra-UE bearer priority is structurally insufficient for sync guarantees — the timing budget of a UE depends on the priority of the *other* traffic it carries, an effect invisible in single-UE evaluations. Simulation-only (Simu5G scheduler implementations, 3 seeds, single cell), so treat absolute numbers as indicative; the regime structure and the two coupling arguments are the durable content.

## Why it matters / what's new (ZH)
知识库既有的 5G-TSN 覆盖停留在机制层（Lyapunov 队列感知流量整形，2026-06-26；同周的 5G-TSN 反应式整形器）——本条是第一条**容量刻画**条目：一张带规划经验公式（TR 22.804 型流量组合下每 10 MHz 约 12 个端点）的运行域地图，工厂网络设计者可以直接使用。两个发现的价值超出论文本身：2.25 ms 的 sub-6 GHz 时延下限量化说明了严格 2 ms TSN 控制环为何需要配置授权/更高 numerology 而非更好的调度；UE 间 gPTP 耦合结果表明 UE 内承载优先级在结构上不足以保证同步——一个 UE 的时序预算取决于它承载的*其他*流量的优先级，这一效应在单 UE 评估中不可见。仅为仿真（Simu5G 调度器实现、3 个种子、单小区），绝对数字仅供参考；运行域结构与两个耦合论断才是可长期沿用的内容。
