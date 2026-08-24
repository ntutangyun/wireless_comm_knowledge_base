---
id: 2026-08-24_arxiv-temporal-risk-satellites-spacesec
date_published: 2026-08-20
date_found: 2026-08-24
type: academic-paper
technology: satellite
title_en: "Temporal Risk on Satellites (SpaceSec 2026) — making time an explicit axis in satellite cyber-risk: a five-dimensional temporal capability model and time-indexed likelihood-impact matrices, demonstrated on the STARMELT eclipse battery-drain attack"
title_zh: "卫星时变风险（SpaceSec 2026）——将时间作为卫星网络安全分析的显式维度：五维时间能力模型与按时间索引的可能性-影响矩阵，以 STARMELT 地影期电池耗尽攻击为例演示"
url: "https://arxiv.org/abs/2608.20575"
source_quality: full
topics: [satellite-cybersecurity, risk-assessment, temporal-risk, SPARTA, eclipse, battery-drain-attack, STARMELT, adversary-capability-model, mission-operations, space-weather]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)
Liu and Sun (arxiv cs.CR, 20 Aug 2026; accepted at the Workshop on Security of Space and Satellite Systems, SpaceSec 2026, San Diego, Feb 2026) argue that satellite cybersecurity risk frameworks inherited from terrestrial IT are structurally wrong for spacecraft because they treat threats as **static**, while satellite vulnerability is intrinsically **time-varying**: orbits shift, eclipse and visibility windows recur, geomagnetic storms and South Atlantic Anomaly (SAA) transits come and go, and "the same exploit can be far more damaging during a critical maneuver than during routine operations." Their canonical example is the STARMELT energy-drain attack: protocol-conformant traffic pushed through victim satellites causes minor degradation in sunlight (solar arrays recharge) but threatens mission loss in eclipse (batteries discharge) — a distinction a single static risk score cannot express.

The paper's framework makes time explicit in two places. First, an extension of existing adversary-behavior taxonomies (SPARTA-style tiers) with a **five-dimensional temporal capability model ⟨A, F, S, Y, H⟩**: Actuation (causing effects within an access window), Forecasting (time-localized prediction via SGP4/SDP4 orbital propagation plus space-weather modeling), Sensing (near-real-time system-state awareness from telemetry/spectrum/optical observation or compromised ground stations), Synchronization (phase-locking actions to windows via GPS/NTP time bases and delay modeling), and Hiding (keeping effects statistically indistinguishable from natural failures such as single-event upsets). Each attacker tier requires a minimum temporal-capability subset. Second, missions are **discretized into operationally meaningful time windows** — orbit phases (LEOP vs decommissioning), recurring orbital events (sunlight/eclipse), environmental episodes further banded by intensity (storm level, particle flux) — and the framework outputs a **family of time-indexed likelihood-impact matrices** instead of one score, with likelihood driven by a "temporal exploitation difficulty" (window duration/frequency/predictability plus scenario-specific alignment constraints) and impact re-scored per operational context.

In the STARMELT case study (an attack shown elsewhere to cut effective satellite lifetime by up to ~76% over 1.5 years), the static SPARTA-style baseline scores 5×5 = 25 (High) always; the temporal framework splits this into sunlight 5×2 = 16 (Medium) vs eclipse 4×5 = 24 (High) — telling an operator exactly when stricter controls pay off without throttling throughput the rest of the orbit.

## Summary (ZH)
Liu 与 Sun（arxiv cs.CR，2026 年 8 月 20 日；已被空间与卫星系统安全研讨会 SpaceSec 2026（圣迭戈，2026 年 2 月）接收）指出，从地面 IT 继承的卫星网络安全风险框架在结构上不适用于航天器，因为它们将威胁视为**静态**的，而卫星脆弱性本质上是**时变**的：轨道漂移、地影与可见性窗口周期性出现、地磁暴与南大西洋异常区（SAA）过境时有时无，"同一漏洞在关键机动期间造成的破坏可能远大于常规运行期间"。其典型例子是 STARMELT 能量耗尽攻击：向受害卫星灌注协议合规的流量，在日照期仅造成轻微退化（太阳翼在充电），在地影期却威胁任务失败（电池在放电）——单一静态风险评分无法表达这种差异。

该框架在两处将时间显式化。其一，在现有对手行为分类体系（SPARTA 式分级）之上扩展出**五维时间能力模型 ⟨A, F, S, Y, H⟩**：作用能力 Actuation（在接入窗口内对目标产生效果）、预报能力 Forecasting（借助 SGP4/SDP4 轨道传播与空间天气建模做时间定位预测）、感知能力 Sensing（通过遥测/频谱/光学观测或被攻陷的地面站近实时掌握系统状态）、同步能力 Synchronization（借助 GPS/NTP 时基与时延建模将行动锁相到选定窗口）、隐藏能力 Hiding（使攻击效果在统计上与单粒子翻转等自然故障不可区分）。每个攻击者层级都要求一个最小时间能力子集。其二，将任务**离散化为运行上有意义的时间窗口**——轨道阶段（发射早期 LEOP 与退役期）、周期性轨道事件（日照/地影）、按强度分档的环境事件（磁暴等级、粒子通量）——并输出**按时间索引的可能性-影响矩阵族**而非单一评分：可能性由"时间利用难度"（窗口时长/频次/可预测性加场景对齐约束）驱动，影响按运行上下文重新评分。

在 STARMELT 案例研究中（该攻击在其他工作中被证明可在 1.5 年内使卫星有效寿命缩短约 76%），静态 SPARTA 式基线始终评为 5×5 = 25（高危）；时变框架将其拆分为日照期 5×2 = 16（中危）与地影期 4×5 = 24（高危）——准确告诉运营者何时收紧防护才有价值，而无需在轨道其余时段限制吞吐。

## Key technical points (EN)
- **Five temporal capability dimensions ⟨A, F, S, Y, H⟩:** Actuation (RF power shaping, directed jamming, malicious uplinks bounded by line-of-sight/antenna constraints); Forecasting (SGP4 near-Earth / SDP4 deep-space propagation + SAA/storm prediction); Sensing (passive telemetry, spectrum analysis, optical observation, compromised ground stations); Synchronization (GPS/NTP time bases, end-to-end delay modeling, phase-locking to onboard timing or handovers); Hiding (mimicking natural failure signatures, e.g. single-event upsets).
- **Tier mapping:** each adversary tier (script kiddie → state actor) needs a minimum temporal-capability subset — preserves existing tier hierarchies (SPARTA-compatible) while embedding timing sophistication.
- **Mission discretization:** orbit phases (LEOP, routine, decommissioning) × recurring orbital events (sunlight/eclipse) × environmental episodes banded by intensity (storm level / particle flux bands), each band a separate risk snapshot.
- **Temporal exploitation difficulty (TED):** intrinsic (window duration, frequency, predictability) + scenario-specific (alignment requirements, e.g. for command injection); drives time-indexed likelihood L(t). Impact I(t) re-scored per context — same jamming is I2 (data delay) in routine ops, I5 (mission termination via battery depletion) in eclipse.
- **STARMELT worked example:** requires Tier-4+ with A, F, S, Y (Hiding not needed); eclipse windows shorter than sunlight → fewer retries, higher TED; risk splits static-25 (High) into sunlight-16 (Medium) / eclipse-24 (High).
- **Output:** a time series of likelihood-impact matrices per mission window — supports scheduling sensitive operations outside high-risk windows and aligning defensive resources over time.
- **Limitations (authors' own):** semi-quantitative, expert-elicited levels; public space-cyber incident data rarely reveals timing dependencies; no standardized time-aware red-team benchmarks yet; open problems include temporal attack-defense games (attackers pick windows, defenders pick hardening times) and compositional scaling to constellations — where staggered orbital planes entering high-risk windows at different times could enable temporal risk-aware routing.

## Key technical points (ZH)
- **五维时间能力 ⟨A, F, S, Y, H⟩：** 作用（射频功率整形、定向干扰、受视距/天线约束的恶意上行）；预报（SGP4 近地/SDP4 深空轨道传播 + SAA/磁暴预测）；感知（被动遥测、频谱分析、光学观测、被攻陷地面站）；同步（GPS/NTP 时基、端到端时延建模、与星上时序或切换锁相）；隐藏（模仿单粒子翻转等自然故障特征）。
- **层级映射：** 每个对手层级（脚本小子 → 国家级行为体）对应一个最小时间能力子集——保留现有层级体系（兼容 SPARTA），同时嵌入时序能力刻画。
- **任务离散化：** 轨道阶段（LEOP、常规、退役）× 周期性轨道事件（日照/地影）× 按强度分档的环境事件（磁暴等级/粒子通量档），每档为独立风险快照。
- **时间利用难度（TED）：** 内在因素（窗口时长、频次、可预测性）+ 场景因素（对齐要求，如指令注入）；驱动时间索引的可能性 L(t)。影响 I(t) 按上下文重评——同一干扰在常规运行为 I2（数据延迟），在地影期为 I5（电池耗尽导致任务终止）。
- **STARMELT 算例：** 需要 Tier-4+ 的 A、F、S、Y 能力（无需隐藏）；地影窗口短于日照 → 重试机会少、TED 更高；风险从静态 25（高）拆分为日照 16（中）/地影 24（高）。
- **输出：** 按任务窗口索引的可能性-影响矩阵时间序列——支持将敏感操作排期避开高风险窗口、按时间配置防御资源。
- **局限（作者自述）：** 半定量、依赖专家评定；公开空间网络安全事件数据极少披露时序依赖；尚无标准化的时间感知红队基准；开放问题包括时域攻防博弈（攻击方选窗口、防御方选加固时机）以及向星座的组合扩展——不同轨道面错峰进入高风险窗口，可能支持时变风险感知路由。

## Why it matters / what's new (EN)
The KB's satellite-security thread (VLM/SLM GNSS-spoofing detection 07-28/08-20, UAV-swarm spoofing + CORS integrity 08-12, onboard flight-software trust boundaries 08-17, Jammertest dataset 08-18, exposed-Starlink-hosts posture 08-19, IriSig-Spoof and QuaSAR physical-layer authentication 08-20/08-21) has so far been about **detecting or preventing specific attacks**. This is the first entry at the **risk-assessment methodology** layer — how an operator should reason about all of those threats over a mission timeline. Its core observation is genuinely space-native: unlike terrestrial IT, satellite exposure is modulated by deterministic, publicly predictable physics (eclipse cycles from TLEs, storm forecasts, SAA geometry), which means both attackers and defenders can compute the high-risk windows in advance — so risk scoring that ignores time is leaving exactly the information that distinguishes space systems on the table. The framework is a workshop-stage, semi-quantitative contribution (hence novelty 2), but it complements the 08-17 flight-software trust-boundary entry the way threat modeling complements vulnerability analysis, and its closing idea — constellation-scale temporal risk-aware routing that exploits staggered orbital planes — connects satellite security directly to the routing/scheduling literature already in the leo-constellations bin.

## Why it matters / what's new (ZH)
知识库的卫星安全脉络（07-28/08-20 VLM/SLM GNSS 欺骗检测、08-12 无人机集群欺骗 + CORS 完好性、08-17 星上飞行软件信任边界、08-18 Jammertest 数据集、08-19 暴露的 Starlink 主机态势、08-20/08-21 IriSig-Spoof 与 QuaSAR 物理层认证）此前都聚焦于**检测或防御具体攻击**。本条目是首个位于**风险评估方法论**层面的条目——即运营者应如何在任务时间线上统筹考虑上述所有威胁。其核心观察具有真正的航天原生性：与地面 IT 不同，卫星的暴露程度受确定性、公开可预测的物理规律调制（由 TLE 可算出的地影周期、磁暴预报、SAA 几何），这意味着攻防双方都能提前算出高风险窗口——忽略时间的风险评分恰恰丢弃了区分空间系统的关键信息。该框架尚处研讨会阶段、半定量（故新颖度评 2），但它与 08-17 飞行软件信任边界条目的关系，正如威胁建模之于漏洞分析；其结尾提出的星座级时变风险感知路由（利用轨道面错峰进入高风险窗口）则将卫星安全直接联通到 leo-constellations 条目库中已有的路由/调度研究脉络。
