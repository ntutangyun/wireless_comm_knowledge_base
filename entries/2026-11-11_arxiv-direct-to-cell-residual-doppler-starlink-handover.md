---
id: 2026-11-11_arxiv-direct-to-cell-residual-doppler-starlink-handover
date_published: 2026-11-08
date_found: 2026-11-11
technology: satellite
type: academic-paper
title_en: "Doppler Residuals in Direct-to-Cell: Starlink Measurements and UE-Side Pre-Compensation for Handover"
title_zh: "直连手机卫星中的残余多普勒：Starlink 实测与面向切换的终端侧预补偿"
url: "https://arxiv.org/abs/2611.11065"
source_quality: full
topics: [direct-to-cell, Doppler, handover, LTE, Starlink, radio-link-failure]
topic_primary: sat-direct-device
topics_secondary: [starlink]
novelty_score: 4
---

## Summary (EN)

Chen, Rochman, McCormack, Kotz and Ghosh (arXiv, submitted 8 Nov 2026) examine why phones on a direct-to-cell (DtC) LEO service change cell mostly through radio-link failure rather than handover. The satellite pre-compensates Doppler for one Earth-fixed reference point per beam (each beam is one LTE cell); a phone elsewhere in the beam keeps a residual offset. Prior field studies report residuals up to 10 kHz, beyond the +/-7.5 kHz that a cyclic-prefix estimator can resolve with 15 kHz subcarrier spacing, so a 10 kHz residual is read as -5 kHz and the correction leaves a 15 kHz offset.

The paper reports its own measurements of Starlink DtC transmissions (LTE band 25, one 5 MHz carrier, EARFCN 8665): cell changes are mostly late radio-link failures, with serving RSRP falling 13 dB below its own level beforehand versus 4 dB before a terrestrial handover, and downlink MCS dropping from about 11 to 4. Link-level simulations show that as the serving cell's residual grows, a neighbor measured at the serving cell's carrier is first read low, then lost, and the handover report is never sent. The authors propose per-beam UE pre-compensation based on the UE position relative to each cell's reference point and the known satellite location, which restores the neighbor's RSRP and report.

## Summary (ZH)

Chen、Rochman、McCormack、Kotz 与 Ghosh（arXiv，2026 年 11 月 8 日提交）研究为何使用直连手机（DtC）LEO 服务的手机主要通过无线链路失败而非切换来更换小区。卫星仅对每个波束的一个地球固定参考点预补偿多普勒（每个波束对应一个 LTE 小区）；波束内其他位置的手机仍有残余频偏。既有现场研究报告残余最高达 10 kHz，超出 15 kHz 子载波间隔下循环前缀估计器可分辨的 +/-7.5 kHz，因此 10 kHz 残余被估计为 -5 kHz，校正后仍留有 15 kHz 偏移。

论文给出自己对 Starlink DtC 传输的实测（LTE 频段 25、单个 5 MHz 载波、EARFCN 8665）：小区变更主要是迟到的无线链路失败，失败前服务小区 RSRP 比其自身水平低 13 dB，而地面切换前为 4 dB，下行 MCS 由约 11 降至 4。链路级仿真表明，随着服务小区残余增大，以服务小区载波测量的邻区先被读低、继而丢失，切换报告始终无法发出。作者提出基于终端相对各小区参考点的位置以及已知卫星位置的逐波束终端侧预补偿，以恢复邻区 RSRP 与报告。

## Key technical points (EN)

- Mechanism: satellite pre-compensates Doppler at one Earth-fixed reference point per beam (one LTE cell per beam); other positions keep a residual.
- Cause hypothesized: UE measures each neighbor at the serving cell's carrier, so the neighbor's own residual makes it read low or unidentified; CP-based estimation resolves only +/-7.5 kHz at 15 kHz SCS.
- Field data (Starlink DtC, LTE band 25, EARFCN 8665): RSRP falls 13 dB before RLF vs 4 dB before terrestrial handover; MCS about 11 to 4.
- Doppler spans about +/-40 kHz over a pass at the 525 km and 530 km filed orbits.
- Proposal: UE pre-compensation per beam; needs each cell's reference point and satellite location, which no current signaling delivers.

## Key technical points (ZH)

- 机制：卫星对每个波束的一个地球固定参考点预补偿多普勒（一个波束对应一个 LTE 小区），其他位置保留残余。
- 假设成因：终端以服务小区载波测量各邻区，邻区自身残余使其读数偏低或无法识别；15 kHz 子载波间隔下基于 CP 的估计仅能分辨 +/-7.5 kHz。
- 现场数据（Starlink DtC，LTE 频段 25，EARFCN 8665）：RLF 前 RSRP 下降 13 dB，地面切换前为 4 dB；MCS 约由 11 降至 4。
- 在 525 km 与 530 km 申报轨道上，一次过境的多普勒约为 +/-40 kHz。
- 方案：逐波束终端侧预补偿；需要各小区参考点与卫星位置，而现有信令并未提供。

## Why it matters / what's new (EN)

The KB's direct-to-device entries cover spectrum, licensing and Doppler-aware beam management; this one ties measured Starlink DtC handover failures to a specific physical-layer mechanism (residual Doppler beyond the CP estimator's reach during neighbor measurement) and quantifies the RSRP and MCS signature. The proposed fix is evaluated in simulation and needs signaling the phone does not receive today.

## Why it matters / what's new (ZH)

KB 现有直连设备条目涉及频谱、许可与感知多普勒的波束管理；本条目将实测的 Starlink DtC 切换失败与具体物理层机制（邻区测量时残余多普勒超出 CP 估计器范围）联系起来，并量化了 RSRP 与 MCS 特征。所提修复方案经仿真评估，且需要手机目前尚未收到的信令。

## Images

None.
