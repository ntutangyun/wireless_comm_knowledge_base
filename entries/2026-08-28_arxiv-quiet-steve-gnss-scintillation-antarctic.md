---
id: 2026-08-28_arxiv-quiet-steve-gnss-scintillation-antarctic
date_published: 2026-08-26
date_found: 2026-08-28
type: academic-paper
title_en: "A Quiet STEVE Disturbs Navigation Satellites' Signals in the Antarctic"
title_zh: "宁静期 STEVE 扰动南极导航卫星信号——静地磁条件下的首次 GNSS 闪烁观测"
url: "https://arxiv.org/abs/2608.25764"
technology: satellite
source_quality: full
topics: [GNSS, scintillation, ionosphere, space-weather, STEVE, GPS, Galileo, GLONASS, PNT-integrity]
topic_primary: ngso-regulation
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

STEVE — Strong Thermal Emission Velocity Enhancement — is the thin violet-white arc that appears just equatorward of the auroral oval, the optical signature of intense subauroral ion drift (SAID) with ion velocities above 3 km/s and, in some events, up to 20 km/s. It sits at 130–270 km altitude, is only 20–50 km wide but ~2000 km long, and unlike aurora it involves no particle precipitation. Previous work had linked STEVE-driven irregularities to GNSS disruption, but only during geomagnetically *active* periods. Kotova, Spogli, Jin and Miloch (University of Oslo and INGV Rome) report the first observation of STEVE-induced GNSS scintillation under **quiet** geomagnetic conditions.

The event was captured on **9 May 2019** at Norway's Troll station in Dronning Maud Land, Antarctica (72.0016°S, 2.5254°E; 62.75°S magnetic latitude, 22:33 MLT), using a Keo Sentry3 all-sky imager at 557.7 / 630.0 / 427.8 nm with 1-minute per-wavelength resolution. Space weather was unambiguously calm: **Kp = 2−**, SYM-H around **−7 nT**, AE peaking at 400 nT earlier in the day and only 250 nT during the STEVE, mean IMF magnitude 4.46 nT with Bx positive and By/Bz negative. Ground magnetometers at SANAE IV and Neumayer III showed no significant bursts. Crucially, the authors note that had the analysis started from 1 Hz scintillation and magnetometer data — which show nothing — the day would have been discarded entirely; only the all-sky imagery flagged it.

Scintillation was measured at 50 Hz from two receivers 186 km apart: a NovAtel GPStation-6 at Troll (GPS L1CA/L5, GLONASS L1CA/L2P, Galileo E1/E5a/E5b) and a Septentrio PolaRx5S at SANAE IV (GPS L1CA/L2C/L5, Galileo E1/E5a/E5b), with 1-second phase (σ_φ) and amplitude (S4) indices computed from detrended carrier phase via a 6th-order Butterworth high-pass filter at 0.1 Hz cutoff, plus an ionosphere-free linear combination to isolate diffractive effects. About **19 satellites** crossed or passed near the arc during its 23:18–00:18 UT lifetime; five (SNA E26, SNA E18, SNA G08, TRL E31, TRL R13) showed σ_φ variations on all frequencies between 23:17 and 23:52 UT, reaching **two or more times the ~0.03 receiver noise floor**. Only high-elevation observations were used, to exclude terrestrial multipath.

The geometry of the crossings turns out to be diagnostic. Galileo E18, entering the STEVE front nearly perpendicularly, produced a clean σ_φ peak at 23:31 UT on both E1 and E5a; the neighbouring E26, crossing tangentially, instead showed elevated σ_φ from 23:18 UT with two peaks at 23:31 and 23:37 UT. Because the imager and the Troll receiver are co-located, projection altitude does not shift their relative geometry — but at SANAE IV, matching scintillation peaks against imagery projected to different heights lets the authors infer the arc's vertical structure: best agreement at **230 km for E26 and G08, 250 km for E18**, while G08's exit peak at 23:47 UT aligned better with a **170 km** projection, suggesting the leading edge sits at 230–250 km while the trailing edge descends to 170–200 km. Frequency behaviour was not uniform either: GPS G08 showed S4 effects only at the *higher* L1CA frequency, contrary to the usual expectation that L2C/L5 are more affected, while Galileo E31 behaved as theory predicts, with weak S4 on E5a/E5b and none on E1.

## Summary (ZH)

STEVE——Strong Thermal Emission Velocity Enhancement——是出现在极光卵赤道侧的一条细窄紫白色弧，是强亚极光离子漂移（SAID）的光学表征，离子速度超过 3 km/s，个别事件可达 20 km/s。它位于 130–270 km 高度，宽度仅 20–50 km 但纵向长约 2000 km，且与极光不同，不伴随粒子沉降。此前研究已把 STEVE 引发的不规则体与 GNSS 中断联系起来，但仅限于地磁*活跃*期。Kotova、Spogli、Jin 与 Miloch（奥斯陆大学与罗马国家地球物理与火山学研究所）首次报告了**静**地磁条件下 STEVE 诱发的 GNSS 闪烁。

事件记录于 **2019 年 5 月 9 日**，地点为挪威在南极毛德皇后地的 Troll 站（72.0016°S, 2.5254°E；地磁纬度 62.75°S，22:33 磁地方时），使用 Keo Sentry3 全天空成像仪在 557.7 / 630.0 / 427.8 nm 观测，各波长时间分辨率 1 分钟。空间天气明确平静：**Kp = 2−**、SYM-H 约 **−7 nT**、AE 当日早些时候峰值 400 nT 而 STEVE 期间仅 250 nT、行星际磁场平均强度 4.46 nT 且 Bx 为正、By/Bz 为负。SANAE IV 与 Neumayer III 的地磁台站未观测到显著扰动。关键的是，作者指出：若分析从 1 Hz 闪烁与磁力计数据出发——这些数据毫无异常——该日会被整体剔除；只有全天空成像把它标记了出来。

闪烁由相距 186 km 的两台接收机以 50 Hz 采样：Troll 站的 NovAtel GPStation-6（GPS L1CA/L5、GLONASS L1CA/L2P、Galileo E1/E5a/E5b）与 SANAE IV 站的 Septentrio PolaRx5S（GPS L1CA/L2C/L5、Galileo E1/E5a/E5b）。1 秒相位（σ_φ）与幅度（S4）指数由 6 阶 Butterworth 高通滤波（截止 0.1 Hz）去趋势后的载波相位计算，并辅以无电离层线性组合以分离衍射效应。在 23:18–00:18 UT 的 STEVE 生命期内约有 **19 颗卫星**穿越或接近该弧；其中 5 颗（SNA E26、SNA E18、SNA G08、TRL E31、TRL R13）在 23:17–23:52 UT 间于所有频点出现 σ_φ 变化，达到接收机噪声本底（约 0.03）的 **两倍以上**。为排除地物多径，仅采用高仰角观测。

穿越几何本身具有诊断价值。Galileo E18 近乎垂直地进入 STEVE 前沿，在 23:31 UT 于 E1 与 E5a 上产生清晰的 σ_φ 峰；相邻的 E26 以切向穿越，则自 23:18 UT 起 σ_φ 即高于噪声，并在 23:31 与 23:37 UT 出现两个峰。由于成像仪与 Troll 接收机同址，投影高度不改变二者相对几何；但在 SANAE IV，将闪烁峰与投影到不同高度的图像做匹配，可反演该弧的垂直结构：**E26 与 G08 在 230 km 处吻合最佳，E18 在 250 km**，而 G08 于 23:47 UT 的出弧峰与 **170 km** 投影更吻合，说明前沿位于 230–250 km 而尾沿下降至 170–200 km。频率行为亦不一致：GPS G08 的 S4 效应仅出现在*较高*的 L1CA 频点，与"L2C/L5 受影响更大"的常规预期相反；而 Galileo E31 符合理论预期，E5a/E5b 上有弱 S4、E1 上没有。

## Key technical points (EN)

- **First reported** STEVE-induced GNSS scintillation under quiet geomagnetic conditions (Kp = 2−, SYM-H ≈ −7 nT, AE ≈ 250 nT during the event, |IMF| ≈ 4.46 nT).
- Event: 9 May 2019, 23:18–00:18 UT, Antarctica. Optical detection by Keo Sentry3 all-sky imager at Troll station (72.0016°S, 2.5254°E; 62.75°S MLAT, 22:33 MLT), 557.7 / 630.0 / 427.8 nm, 1-minute per-wavelength cadence.
- Two scintillation receivers 186 km apart: NovAtel GPStation-6 at Troll (GPS L1CA/L5, GLONASS L1CA/L2P, Galileo E1/E5a/E5b) and Septentrio PolaRx5S at SANAE IV (GPS L1CA/L2C/L5, Galileo E1/E5a/E5b), both at **50 Hz**.
- Processing: 6th-order Butterworth high-pass at 0.1 Hz for detrending; 1-second σ_φ and S4 (vs conventional 1-minute indices); ionosphere-free linear combination to isolate diffractive effects. 20° elevation mask for IPP display; only high-elevation passes analysed.
- Receiver noise floors: S4 = 0.015 and σ_φ = 0.015 rad for PolaRx5S (calibrated at Ushuaia); 0.03 used as the practical excess threshold for both receivers.
- ~19 satellites crossed or passed near the arc; **5 showed σ_φ excursions on all frequencies** (23:17–23:52 UT) at ≥2× the noise floor.
- **Crossing geometry matters:** perpendicular entry (Galileo E18) → single clean σ_φ peak at 23:31 UT on E1 and E5a; tangential pass (E26) → elevated σ_φ from 23:18 UT with peaks at 23:31 and 23:37 UT.
- **Altitude inferred from projection matching:** 230 km (E26, G08), 250 km (E18); G08's 23:47 UT exit peak matches a 170 km projection → leading edge 230–250 km, trailing edge descending to 170–200 km.
- **Frequency anomaly:** GPS G08 showed S4 only on L1CA, not on L2C/L5 — contrary to the usual lower-frequency expectation. Galileo E31 behaved as expected (weak S4 on E5a/E5b, none on E1).
- **Methodological warning:** 1 Hz scintillation and magnetometer data showed nothing; without the all-sky imagery the event would have been filtered out of the dataset entirely.

## Key technical points (ZH)

- **首次报告**静地磁条件下 STEVE 诱发的 GNSS 闪烁（事件期间 Kp = 2−、SYM-H ≈ −7 nT、AE ≈ 250 nT、|IMF| ≈ 4.46 nT）。
- 事件：2019 年 5 月 9 日 23:18–00:18 UT，南极。由 Troll 站（72.0016°S, 2.5254°E；地磁纬度 62.75°S，22:33 MLT）的 Keo Sentry3 全天空成像仪在 557.7 / 630.0 / 427.8 nm 检出，各波长 1 分钟节拍。
- 两台相距 186 km 的闪烁接收机：Troll 站 NovAtel GPStation-6（GPS L1CA/L5、GLONASS L1CA/L2P、Galileo E1/E5a/E5b）与 SANAE IV 站 Septentrio PolaRx5S（GPS L1CA/L2C/L5、Galileo E1/E5a/E5b），均为 **50 Hz**。
- 处理：6 阶 Butterworth 高通（0.1 Hz）去趋势；计算 1 秒 σ_φ 与 S4（相对传统 1 分钟指数）；用无电离层线性组合分离衍射效应。电离层穿刺点显示采用 20° 仰角掩码；仅分析高仰角通过。
- 接收机噪声本底：PolaRx5S 的 S4 = 0.015、σ_φ = 0.015 rad（于乌斯怀亚标定）；两台接收机实际超限门限均取 0.03。
- 约 19 颗卫星穿越或接近该弧；**5 颗在所有频点出现 σ_φ 起伏**（23:17–23:52 UT），达噪声本底 2 倍以上。
- **穿越几何有影响：** 垂直进入（Galileo E18）→ 23:31 UT 在 E1 与 E5a 上出现单一清晰 σ_φ 峰；切向通过（E26）→ 自 23:18 UT 起 σ_φ 抬升，并在 23:31 与 23:37 UT 出现双峰。
- **由投影匹配反演高度：** 230 km（E26、G08）、250 km（E18）；G08 在 23:47 UT 的出弧峰与 170 km 投影吻合 → 前沿 230–250 km，尾沿下降至 170–200 km。
- **频率反常：** GPS G08 的 S4 仅出现在 L1CA，而非 L2C/L5——与"低频受影响更大"的常规预期相反。Galileo E31 则符合预期（E5a/E5b 上弱 S4、E1 上无）。
- **方法学警示：** 1 Hz 闪烁与磁力计数据毫无显示；若无全天空成像，该事件会被完全过滤出数据集。

## Why it matters / what's new (EN)

The KB's GNSS-integrity thread has been built almost entirely around *adversarial* threats: Jammertest Norway 2025 multi-source interference characterisation (2026-08-18), statewide CORS networks as distributed integrity sensors (2026-08-12), the IRISig spoofed-satellite RF-fingerprint benchmark (2026-08-20), and LLM-generated spoofing narratives (2026-08-20). This paper adds the natural-cause side of the same reliability question, and it does so with a result that is uncomfortable for how availability is currently assessed: a scintillation event large enough to double the phase-scintillation index on five satellites occurred on a day that every standard space-weather trigger (Kp, SYM-H, AE, ground magnetometers) would have marked as benign, and that 1 Hz scintillation monitoring would have missed entirely. Space-weather-driven GNSS availability models keyed to geomagnetic indices therefore have a blind spot in the subauroral region.

Two details generalize beyond the polar case. First, **1-second indices caught what 1-minute indices could not** — the same "sampling rate hides the mechanism" lesson the KB has recorded elsewhere in high-rate wireless measurement, now applied to ionospheric monitoring. Second, the geometry-dependent response (perpendicular vs tangential crossing of a 20–50 km-wide arc) means the disturbance is not a scalar "space-weather level" but a path-specific event, which is precisely the structure a per-satellite integrity monitor could exploit — and precisely what a receiver applying a uniform elevation-based weighting model cannot. That connects directly to the LEO-PNT thread: Xona's Pulsar (2026-08-28) claims 100× link margin against *jamming*, but ionospheric phase scintillation is a propagation effect that extra transmit power does not remove, and the anomalous L1CA-only S4 behaviour observed here is a reminder that multi-frequency mitigation assumptions do not always hold. Caveats: this is a single event from 2019 analysed in depth, no in-situ LEO plasma data were available over Dronning Maud Land at the time, and the amplitude effects were weak — the phase index, not S4, carries most of the signal.

## Why it matters / what's new (ZH)

知识库的 GNSS 完好性脉络此前几乎完全围绕*对抗性*威胁构建：挪威 Jammertest 2025 多源干扰特征刻画（2026-08-18）、把全州 CORS 网当作分布式完好性传感器（2026-08-12）、IRISig 欺骗卫星射频指纹基准（2026-08-20）、以及大模型生成的欺骗叙事（2026-08-20）。本文补上了同一可靠性问题的自然成因侧，且给出的结果对当前可用性评估方式颇为不利：一次足以让 5 颗卫星相位闪烁指数翻倍的事件，发生在所有标准空间天气触发量（Kp、SYM-H、AE、地面磁力计）都判定为平静的日子，而 1 Hz 闪烁监测会完全错过它。因此，以地磁指数为键的空间天气驱动型 GNSS 可用性模型，在亚极光区存在盲区。

有两个细节可超出极区场景推广。其一，**1 秒指数捕捉到了 1 分钟指数无法捕捉的现象**——正是知识库在高速率无线测量中反复记录的"采样率掩盖机理"教训，如今落在电离层监测上。其二，响应依赖几何（垂直穿越与切向穿越一条 20–50 km 宽的弧），说明扰动不是一个标量的"空间天气等级"，而是与路径相关的事件；这恰恰是逐星完好性监测器可以利用的结构，也恰恰是采用统一仰角加权模型的接收机无法处理的。这与低轨 PNT 脉络直接相连：Xona 的 Pulsar（2026-08-28）宣称对**干扰**有 100 倍链路余量，但电离层相位闪烁是发射功率无法消除的传播效应；而本文观测到的"仅 L1CA 出现 S4"这一反常，也提醒多频缓解假设并非总能成立。局限：这是对 2019 年单一事件的深入分析，当时毛德皇后地上空没有可用的原位低轨等离子体数据，且幅度效应较弱——承载大部分信息的是相位指数而非 S4。
