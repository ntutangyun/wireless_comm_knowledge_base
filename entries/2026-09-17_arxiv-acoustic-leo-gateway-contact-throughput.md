---
id: 2026-09-17_arxiv-acoustic-leo-gateway-contact-throughput
date_published: 2026-09-14
date_found: 2026-09-17
technology: satellite
type: academic-paper
title_en: "Contact-Limited Throughput of a Buoyless Acoustic-to-LEO Gateway With Anticipatory Preparation"
title_zh: "无浮标声学-LEO 网关在预备提前量下的接触受限吞吐量分析"
url: "https://arxiv.org/abs/2609.15508"
source_quality: full
topics: [underwater-acoustic, sat-iot, contact-plan-queueing, HAUV]
topic_primary: sat-iot
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Khalil (School of Engineering, RMIT University, Melbourne) submitted this paper on 2026-09-14. The system under study is a hybrid aerial-underwater vehicle (HAUV) that collects data from underwater acoustic (UWA) sensor sources, then periodically surfaces and forwards that data during a predictable, scheduled contact window with a LEO (or NTN) satellite — a "buoyless" gateway, meaning it is the mobile vehicle itself, rather than a fixed surface buoy, that bridges the two media. The paper frames this against related prior work on BeiDou-acoustic experiments, mobile sea-air gateways, and Argos pop-up floats that use orbital ephemerides to time their surfacing to predicted satellite passes.

The core design question the paper addresses is how to split a nominal contact cycle — a pre-contact acoustic-collection interval, an allocated satellite-visibility window, and a recovery/re-entry period — when only *part* of the vehicle's pre-transmission readiness process (e.g., exiting the water, positioning the antenna) can be completed in advance ("advanceable preparation"), while a residual amount of RF acquisition/access time must still be spent after the satellite contact opens and cannot be advanced. The authors derive an exact "service-bias identity" showing that a design which incorrectly treats this residual RF-acquisition time as if it too were advanceable will select an insufficient preparation lead, degrading throughput. They further derive the fluid-optimal fixed preparation lead, an exact whole-packet service law, a tandem-queue stability condition, and one-contact reliability, and characterize — for lognormally-distributed preparation time — the conditions under which more variability in preparation time actually improves mean service rate while simultaneously hurting reliability.

In a diagnostic numerical case (acquisition time ranging up to 40 s, satellite-link capacity 40 kbit/s), accounting correctly for the residual RF-acquisition time (an "acquisition-aware" design) raised the actual sustainable throughput from 8.776 kbit/s to 9.079 kbit/s compared to the naive "all-advanceable" design — a 3.45% gain. (All numerical examples in the paper use synthetic parameters.) In a separate example, introducing the fluid-optimal preparation lead raised the sustainable fluid rate from 6.100 to 12.531 kbit/s while cutting the zero-service probability p0 from 15.165% to 2.601%, with a 5x10^5-sample Monte Carlo check at that lead; separately, raising the non-advanceable residual acquisition time from 0 s to 10 s to 20 s lowered the fluid-optimal rate from 12.724 to 12.531 to 12.339 kbit/s. A queue-stability validation under a sustained 11 kbit/s source load and a 100 kbit/s satellite capacity predicted an HAUV-side backlog drift of 0.68920 kbit/s, which matched a Monte Carlo-measured drift of 0.69054 +/- 0.00406 kbit/s (95% confidence) across 20 independent 200,000-cycle runs.

## Summary (ZH)

Khalil（澳大利亚墨尔本 RMIT 大学工程学院）于 2026 年 9 月 14 日提交本文。研究对象是一种空中-水下混合航行器（HAUV）：它从水下声学（UWA）传感器数据源采集数据，随后周期性地浮出水面，在与 LEO（或 NTN）卫星之间一个可预测、可预先规划的接触窗口内转发数据——之所以称为"无浮标"网关，是因为在两种介质之间架起桥梁的是这一可移动航行器本身，而非固定的水面浮标。论文将其研究置于相关前序工作的背景之下，包括北斗-声学实验、移动海-空网关，以及利用轨道星历来将浮出水面时间与预测卫星过顶时刻对齐的 Argos 弹出式浮标。

论文所解决的核心设计问题是：在名义接触周期——预接触声学采集区间、分配的卫星可见窗口、以及恢复/重新入水区间——中，当航行器传输前准备过程中只有*一部分*（例如出水、天线就位）可以提前完成（"可提前的准备工作"），而剩余的一部分射频（RF）捕获/接入时间仍必须在卫星接触开启之后花费、无法提前进行时，应如何分配预备提前量。作者推导出一个精确的"服务偏差恒等式"，证明如果错误地将这部分剩余 RF 捕获时间也当作可提前处理，会导致所选的预备提前量不足，从而损害吞吐量。作者进一步推导出流体最优的固定预备提前量、精确的整包服务定律、串联队列稳定性条件，以及单次接触可靠性；并针对对数正态分布的准备时间，刻画了准备时间波动性增大反而能提升平均服务速率、但同时会降低可靠性的具体条件。

在一个诊断性数值算例中（捕获时间最高至 40 秒，卫星链路容量为 40 kbit/s），与朴素的"全部视为可提前"设计相比，正确考虑剩余 RF 捕获时间的"捕获感知型"设计将实际可持续吞吐量从 8.776 kbit/s 提升至 9.079 kbit/s，提升幅度为 3.45%（论文所有数值算例均采用合成参数）。在另一个算例中，引入流体最优预备提前量后，可持续流体速率从 6.100 kbit/s 提升至 12.531 kbit/s，同时零服务概率 p0 从 15.165% 降至 2.601%，并在该提前量处用 5×10⁵ 样本的蒙特卡洛进行了核对；另外，将无法提前完成的剩余 RF 捕获时间从 0 秒增至 10 秒、再增至 20 秒，会使流体最优速率从 12.724 降至 12.531、再降至 12.339 kbit/s。在持续 11 kbit/s 源负载、100 kbit/s 卫星容量条件下的队列稳定性验证中，理论预测的 HAUV 侧积压漂移为 0.68920 kbit/s，与 20 次独立、每次 20 万周期的蒙特卡洛实测漂移 0.69054 ± 0.00406 kbit/s（95% 置信区间）相符。

## Key technical points (EN)

- **System**: a buoyless HAUV (hybrid aerial-underwater vehicle) that collects underwater acoustic sensor data and forwards it via a scheduled LEO/NTN satellite contact, using a supplied contact plan and readiness statistics (trajectory and dynamic surfacing control are explicitly out of scope).
- **Core mechanism**: a fixed pre-contact preparation lead tau separates "advanceable" pre-RF preparation from a residual RF acquisition/access time that can only occur after contact opens; an exact service-bias identity shows treating the latter as advanceable causes an insufficient lead to be chosen.
- **Analytical results derived**: fluid-optimal fixed lead, exact whole-packet service law, tandem-queue stability condition, one-contact reliability, and lognormal-preparation conditions where higher variability raises mean service but lowers reliability.
- **Headline throughput result**: acquisition-aware design raises actual sustainable rate from 8.776 to 9.079 kbit/s (3.45% gain) vs. an all-advanceable design, at a 40 kbit/s satellite link capacity.
- **Lead-selection example**: adding the fluid-optimal preparation lead raises the sustainable fluid rate from 6.100 to 12.531 kbit/s and cuts the zero-service probability p0 from 15.165% to 2.601%; separately, raising the non-advanceable acquisition time from 0 to 10 to 20 s lowers the fluid-optimal rate from 12.724 to 12.531 to 12.339 kbit/s.
- **Queue validation**: predicted HAUV backlog drift of 0.68920 kbit/s under 11 kbit/s load / 100 kbit/s capacity matched Monte Carlo-measured 0.69054 +/- 0.00406 kbit/s (95% CI, 20 x 200,000-cycle runs).

## Key technical points (ZH)

- **系统**：一种无浮标的 HAUV（空中-水下混合航行器），采集水下声学传感器数据，并通过按计划安排的 LEO/NTN 卫星接触窗口进行转发，使用给定的接触计划与准备时间统计信息（航迹规划与动态浮出水面控制明确不在本文研究范围内）。
- **核心机制**：固定的预接触预备提前量 τ，将"可提前"的预 RF 准备工作与只能在接触开启后进行的剩余 RF 捕获/接入时间区分开；一个精确的服务偏差恒等式证明，若将后者也当作可提前处理，会导致所选的提前量不足。
- **推导出的解析结果**：流体最优的固定提前量、精确的整包服务定律、串联队列稳定性条件、单次接触可靠性，以及在对数正态分布准备时间下、波动性增大反而提升平均服务速率但降低可靠性的具体条件。
- **主要吞吐量结果**：在 40 kbit/s 卫星链路容量下，捕获感知型设计相比全部视为可提前的设计，将实际可持续速率从 8.776 kbit/s 提升到 9.079 kbit/s，提升 3.45%。
- **提前量选择算例**：引入流体最优预备提前量后，可持续流体速率从 6.100 kbit/s 提升至 12.531 kbit/s，零服务概率 p0 从 15.165% 降至 2.601%；另外，将无法提前完成的捕获时间从 0 秒增至 10 秒、再增至 20 秒，流体最优速率从 12.724 降至 12.531、再降至 12.339 kbit/s。
- **队列验证**：在 11 kbit/s 负载、100 kbit/s 容量条件下，理论预测的 HAUV 积压漂移为 0.68920 kbit/s，与 20 次、每次 20 万周期的蒙特卡洛实测漂移 0.69054 ± 0.00406 kbit/s（95% 置信区间）相符。

## Why it matters / what's new (EN)

The KB's `sat-iot` bin has so far covered terrestrial/aerial IoT devices connecting via satellite NTN (e.g. the `2026-09-09` NB-IoT NTN GEO measurement entry, the `2026-09-11` Iridium/Toyota NB-IoT voice-over-satellite entry). This is the KB's first entry addressing an *underwater* source connecting to LEO/NTN via a surfacing gateway vehicle, and its contribution is a queueing/scheduling theory result rather than a field measurement: an explicit accounting for RF acquisition time that cannot be advanced, which the paper shows changes the optimal preparation-lead decision and materially affects sustainable throughput and reliability.

## Why it matters / what's new (ZH)

知识库中 `sat-iot` 主题此前主要涵盖通过卫星 NTN 连接的陆地/空中物联网设备（例如 2026-09-09 的 NB-IoT NTN GEO 实测条目、2026-09-11 的 Iridium/Toyota NB-IoT 卫星语音条目）。本文是知识库中首篇涉及*水下*数据源通过浮出水面的网关航行器接入 LEO/NTN 的条目，其贡献是一项排队/调度理论结果，而非现场实测：论文明确考虑了无法提前完成的 RF 捕获时间，并证明这一因素会改变最优预备提前量的选择，并对可持续吞吐量与可靠性产生实质性影响。

## Images

None.
