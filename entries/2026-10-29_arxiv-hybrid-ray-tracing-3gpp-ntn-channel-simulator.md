---
id: 2026-10-29_arxiv-hybrid-ray-tracing-3gpp-ntn-channel-simulator
date_published: 2026-10-27
date_found: 2026-10-29
technology: satellite
type: academic-paper
title_en: "An Open-Source Hybrid Ray-Tracing and 3GPP Channel Simulator for Non-Terrestrial Networks"
title_zh: "面向非地面网络的开源射线追踪与 3GPP 混合信道仿真器"
url: "https://arxiv.org/abs/2610.37536"
source_quality: full
topics: [NTN, channel-model, ray-tracing, Sionna-RT, TR-38.811, OpenNTN, spatial-consistency, Doppler, open-source]
topic_primary: leo-constellations
topics_secondary: [sat-direct-device]
novelty_score: 2
---

## Summary (EN)

Lin, Chang, Lai, Lee and Lee (arXiv 2610.37536, eess.SY, submitted 27 October 2026) address a gap in NTN link simulation: statistical models such as 3GPP TR 38.811 (and its OpenNTN implementation) are not site-specific, while pure ray tracing with Sionna RT can yield too few multipath components over the long satellite-to-ground distance. The paper proposes a hybrid simulator in which ray tracing supplies the dominant paths and 3GPP-style statistical clusters and subpaths add the weaker multipath, packaged as one open-source workflow with Sionna-RT-only, 3GPP-only and hybrid modes.

The simulator takes a Sionna-compatible scene (default: Manhattan), satellite positions from TLE data via Skyfield, and the TX/RX configuration; azimuth, elevation, slant range and Doppler come from the ephemeris at each time step. Validation is statistical: delay spread, K-factor and angle spreads are compared with a 3GPP dense-urban reference at 28 GHz, 600 km satellite distance, 40 and 70 degree elevation, over 50 receiver positions and a 0.2 s trajectory. Code is at github.com/Ollie-92/HybridChannel.

## Summary (ZH)

Lin、Chang、Lai、Lee 与 Lee（arXiv 2610.37536，eess.SY，2026 年 10 月 27 日提交）针对 NTN 链路仿真的空白：3GPP TR 38.811（及其 OpenNTN 实现）等统计模型不具备场景特异性，而纯 Sionna RT 射线追踪在星地长距离下可能只产生很少的多径分量。论文提出混合仿真器：射线追踪提供主导路径，3GPP 风格的统计簇与子径补充较弱的多径，并封装为包含纯 Sionna RT、纯 3GPP 与混合三种模式的开源流程。

仿真器输入为兼容 Sionna 的场景（默认曼哈顿）、通过 Skyfield 由 TLE 数据得到的卫星位置以及收发配置；方位角、仰角、斜距与多普勒由星历按时间步计算。验证为统计性的：在 28 GHz、卫星距离 600 km、仰角 40° 与 70°、50 个接收位置、0.2 s 轨迹条件下，将时延扩展、K 因子与角度扩展与 3GPP 密集城区参考对比。代码位于 github.com/Ollie-92/HybridChannel。

## Key technical points (EN)

- **Dominant paths**: ray tracing at each satellite position; earliest path is LoS (paths within 1 ns also LoS); paths more than 25 dB below the strongest are dropped.
- **Statistical part**: six large-scale parameters (K, DS, ASD, ASA, ZSD, ZSA) drawn as correlated Gaussians from TR 38.811 values; exponential cluster delays with rejection of candidates too close to ray-traced clusters; powers normalised to the K-factor and rescaled to the ray-traced level.
- **Spatial consistency**: statistical clusters are frozen as fixed scatterers inferred at the first step and re-projected as the satellite moves; Doppler from the time derivative of cluster delay; subpaths regenerated each step.
- **Results (40 deg)**: mean K-factor 13.4 dB (RT), 10.4 dB (hybrid), 10.3 dB (3GPP); path loss from RT 176.95 dB vs 176.96 dB free space. Hybrid PDP sits between sparse RT and rich 3GPP.
- **Limits**: downlink LoS only detailed; one scene, one distance, short trajectory; no measurement validation; some angle spreads differ slightly from 3GPP; scatterers need periodic regeneration.

## Key technical points (ZH)

- **主导路径**：对每个卫星位置做射线追踪；最早到达路径视为 LoS（1 ns 内的路径同为 LoS）；比最强路径低 25 dB 以上的路径被舍弃。
- **统计部分**：六个大尺度参数（K、DS、ASD、ASA、ZSD、ZSA）按 TR 38.811 取值以相关高斯采样；簇时延服从指数分布，并剔除过于接近射线追踪簇的候选；功率按 K 因子归一后缩放到射线追踪水平。
- **空间一致性**：统计簇作为固定散射体在首个时间步推断并随卫星运动重新投影；多普勒由簇时延的时间导数得到；子径每步重新生成。
- **结果（40°）**：平均 K 因子 13.4 dB（RT）、10.4 dB（混合）、10.3 dB（3GPP）；RT 路径损耗 176.95 dB，自由空间 176.96 dB。混合 PDP 介于稀疏的 RT 与丰富的 3GPP 之间。
- **局限**：仅详述下行 LoS；单一场景、单一距离、轨迹很短；无实测验证；部分角度扩展与 3GPP 略有差异；散射体需周期性重新生成。

## Why it matters / what's new (EN)

The paper positions the hybrid as addressing the limits of existing statistical (TR 38.811/OpenNTN) and ray-tracing-only NTN simulators; it is runnable from public TLEs and a standard Sionna scene format. It is a simulation-tool contribution validated only against statistics, so its fidelity for real LEO links remains unproven.

## Why it matters / what's new (ZH)

论文将该混合方案定位为弥补现有统计类（TR 38.811/OpenNTN）与纯射线追踪 NTN 仿真器的不足；可由公开 TLE 与标准 Sionna 场景格式直接运行。这是一项仿真工具贡献，仅与统计量对比验证，对真实 LEO 链路的保真度尚未证实。

## Images

None.
