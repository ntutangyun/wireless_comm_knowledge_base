---
id: 2026-09-03_arxiv-satellite-swarms-direct-to-cell-tradeoff
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: satellite
title_en: "Satellite Swarms for Direct-to-Cell Networks: A Distribution-Performance Trade-off Analysis"
title_zh: "面向直连蜂窝网络的卫星集群：分布度与性能的权衡分析"
url: "https://arxiv.org/abs/2609.01380"
source_quality: full
topics: [direct-to-cell, satellite-swarm, distributed-antenna, sum-rate, beamforming, MRT, MMSE, OFDM, positioning-error, synchronization-error, scheduling]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Artiga, Caus, Pérez-Neira and Akhmetkaziyev (CTTC/CERCA, Barcelona) with Schellmann (Huawei Technologies Munich and UPC) analyze what happens to direct-to-cell (D2C) system performance when the same total number of transmit antenna elements — and the same total EIRP — is spread across a growing number of separate small satellites (a "swarm") instead of concentrated on one monolithic satellite. Their stated question is a **distribution-performance trade-off**: distributing N=1600 fixed-power elements across Ns satellites (Ns ∈ {1, 4, 25, 100, 400, 1600}) enlarges the effective aperture diameter and narrows the beam (half-power beamwidth falls from 2.12° at Ns=1 to 0.12° at Ns=1600 in their reference configuration), which should sharpen spatial separation between co-scheduled users, but a larger aperture also raises grating-lobe levels unless satellite positions are randomized, increases differential propagation delay across elements (motivating an OFDM rather than true-time-delay design, with the paper deriving the minimum subcarrier count needed to keep inter-symbol interference negligible), and tightens the satellite-to-satellite synchronization and positioning tolerances needed to keep the array coherent.

The system model is a 600 km LEO constellation transmitting S-band (2.2 GHz, 20 MHz bandwidth, 40 OFDM subcarriers) D2C links using either Maximum Ratio Transmission (LoS-only phase steering) or MMSE beamforming built from location-based (not reciprocal-channel) CSI, evaluated under three ground-user distributions — uniform, a single hotspot, and clustered hotspots — with a novel minimum-distance scheduling algorithm that forms overlapping user groups by angular separation rather than a hard partition. For the uniform distribution, monolithic and fully-distributed swarms perform similarly because the system stays noise- rather than interference-limited; the trade-off shows up specifically in **dense hotspot scenarios**, where at the optimal operating user count the paper reports a 1600-satellite swarm achieving up to a 413% sum-rate gain over the monolithic (Ns=1) configuration under MMSE beamforming, with a 400-satellite swarm still delivering a 271% gain — while a 4-satellite "formation of arrays" performs no better than the monolithic baseline, confirming that modest distribution alone does not help. The paper's own error analysis identifies satellite-to-satellite tracking/positioning error, not terrestrial cell-footprint geometry as in prior work, as the fundamental factor that ultimately limits how large an effective aperture (and hence how many satellites) a swarm can usefully employ, since narrower beamwidth from a larger aperture tolerates progressively less phase misalignment.

## Summary (ZH)
巴塞罗那 CTTC/CERCA 的 Artiga、Caus、Pérez-Neira、Akhmetkaziyev，与华为技术慕尼黑及 UPC 的 Schellmann 合作，分析当相同总数的发射天线单元——以及相同的总 EIRP——从集中于一颗整体式卫星，改为分散到数量不断增加的多颗小卫星组成的"集群"上时，直连蜂窝（D2C）系统性能会如何变化。他们提出的问题是**分布度与性能的权衡**：将 N=1600 个固定功率单元分散到 Ns 颗卫星（Ns ∈ {1, 4, 25, 100, 400, 1600}）会扩大有效孔径直径、收窄波束（在其参考配置中，半功率波束宽度从 Ns=1 时的 2.12° 降至 Ns=1600 时的 0.12°），理应增强对同时调度用户的空间分离能力，但更大的孔径若不对卫星位置做随机化也会抬高栅瓣电平，同时增大各单元间的差分传播时延（因此需要采用 OFDM 而非真延时设计，论文推导了将码间干扰控制在可忽略水平所需的最小子载波数），并收紧维持阵列相干所需的卫星间同步与定位公差。

系统模型为一颗 600 公里 LEO 星座，在 S 频段（2.2 GHz，20 MHz 带宽，40 个 OFDM 子载波）以最大比传输（仅利用视距相位转向）或基于位置信息（而非互易信道）CSI 构建的 MMSE 波束成形提供 D2C 链路，在三种地面用户分布下评估——均匀分布、单一热点、以及聚簇热点——并配合一种新颖的最小间距调度算法，按角度间隔形成重叠用户组而非硬性分区。在均匀分布下，整体式与完全分布式集群表现相近，因为系统仍以噪声而非干扰为主导瓶颈；权衡效应具体体现在**密集热点场景**中：在最优运行用户数下，论文报告 1600 颗卫星组成的集群在 MMSE 波束成形下相对整体式（Ns=1）配置最高可获得 413% 的和速率增益，400 颗卫星集群仍可获得 271% 的增益——而由 4 颗卫星组成的"阵列编队"表现并不优于整体式基线，证实适度分散本身并无助益。论文自身的误差分析指出，与以往研究关注地面小区覆盖几何不同，卫星间跟踪/定位误差才是最终限制集群可有效利用的孔径大小（进而限制卫星数量）的根本因素，因为孔径越大、波束越窄，对相位失配的容忍度就越低。

## Key technical points (EN)
- **Setup:** 600 km LEO, S-band 2.2 GHz / 20 MHz BW / 40 OFDM subcarriers; N=1600 transmit elements at −4.6 dBW each, against a stated 64.6 dBW EIRP target; Rician channel (K=10 dB); Ns ∈ {1, 4, 25, 100, 400, 1600}; minimum inter-satellite spacing 1 m.
- **Distribution-performance trade-off (stated by the authors):** larger aperture → narrower beamwidth and better spatial user separation, but higher grating-lobe/sidelobe risk (mitigated via randomized satellite placement / hard-core point-process spacing), larger differential delay (requiring the derived minimum OFDM subcarrier count rather than true-time-delay compensation), and tighter synchronization/positioning tolerance.
- **Beamforming:** MRT (LoS phase steering only, no interference nulling) and MMSE (location-based CSI, no reciprocal uplink training, since FDD is incompatible with massive-MIMO uplink CSI acquisition).
- **Scheduling:** a minimum-distance algorithm builds overlapping scheduling groups from pairwise angular (u–v plane) separation rather than a hard partition, letting sparse users appear in multiple groups.
- **Headline results (single-hotspot scenario, MMSE, optimal user count):** Ns=1600 swarm delivers up to +413% sum-rate vs. the monolithic Ns=1 baseline; Ns=400 delivers +271%; Ns=4 "formation of arrays" performs no better than monolithic. Uniform-distribution scenarios show minimal Ns-dependent difference (noise-limited, not interference-limited).
- **Fundamental limiter (the paper's own error analysis):** satellite-to-satellite tracking/positioning error — not terrestrial cell-footprint size as assumed in prior work — is what ultimately caps useful aperture size, since phase-error tolerance shrinks faster than beamwidth narrows as the swarm grows.

## Key technical points (ZH)
- **设置：** 600 公里 LEO，S 频段 2.2 GHz / 20 MHz 带宽 / 40 个 OFDM 子载波；N=1600 个发射单元，每个 −4.6 dBW，对应文中给出的 64.6 dBW EIRP 目标；莱斯信道（K=10 dB）；Ns ∈ {1, 4, 25, 100, 400, 1600}；最小星间间距 1 米。
- **分布度与性能权衡（论文所述）：** 孔径越大 → 波束越窄、用户空间分离越好，但栅瓣/旁瓣风险上升（通过卫星位置随机化/硬核点过程间距缓解）、差分时延增大（需要论文推导的最小 OFDM 子载波数，而非真延时补偿），以及同步/定位公差更紧。
- **波束成形：** MRT（仅利用视距相位转向，不进行干扰置零）与 MMSE（基于位置信息的 CSI，无互易上行训练，因为 FDD 与大规模 MIMO 上行 CSI 获取不兼容）。
- **调度：** 一种最小间距算法基于用户两两在 u–v 平面上的角度间隔构建重叠调度组，而非硬性分区，使稀疏用户可出现在多个组中。
- **主要结果（单一热点场景，MMSE，最优用户数）：** 1600 颗卫星集群相对整体式 Ns=1 基线最高可获得 +413% 和速率增益；400 颗卫星集群获得 +271%；由 4 颗卫星组成的"阵列编队"表现并不优于整体式。均匀分布场景下不同 Ns 差异极小（系统受噪声限制而非干扰限制）。
- **根本限制因素（论文自身误差分析）：** 卫星间跟踪/定位误差——而非以往研究所假设的地面小区覆盖几何——才是最终限制可有效利用孔径大小的因素，因为随着集群规模增长，相位误差容忍度收窄的速度快于波束宽度收窄的速度。

## Why it matters / what's new (EN)
This knowledge base's satellite direct-to-device coverage has tracked D2D/D2C mainly as single-satellite service/spectrum/business news (Starlink, AST SpaceMobile, Amazon Leo, Equatys, Elveo entries) and separately as single-terminal PHY research (2026-08-15 SSB positioning, 2026-08-17 PRACH-preamble design, 2026-08-19 D2S uplink receiver design). This is the first entry to model the *transmit side as a distributed swarm* rather than a single satellite for D2C, framing satellite count itself — not just single-satellite antenna/power design — as a system design variable with a quantified sum-rate payoff (up to +413%) and a quantified limiting factor (tracking/positioning error rather than terrestrial-cell geometry). It is a first data point on what multi-satellite formation flying could add to D2C beyond the constellation-scale but single-satellite-per-beam architectures the other entries here assume.

## Why it matters / what's new (ZH)
知识库的 sat-direct-device 板块此前主要以单卫星服务/频谱/商业新闻（星链、AST SpaceMobile、Amazon Leo、Equatys、Elveo 相关条目）以及单终端物理层研究（2026-08-15 SSB 定位、2026-08-17 PRACH 前导设计、2026-08-19 D2S 上行接收机设计）的形式追踪 D2D/D2C。本条目是首个将*发射端建模为分布式集群*而非单颗卫星来做 D2C 研究的条目，把卫星数量本身——而不仅是单星天线/功率设计——作为一个系统设计变量，给出量化的和速率收益（最高 +413%）与量化的限制因素（跟踪/定位误差而非地面小区几何）。这为该板块补上了一个数据点：在该板块此前假设的"星座规模但每波束单星"架构之外，多星编队飞行还能为 D2C 带来什么。
