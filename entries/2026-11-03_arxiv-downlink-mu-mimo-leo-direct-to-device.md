---
id: 2026-11-03_arxiv-downlink-mu-mimo-leo-direct-to-device
date_published: 2026-10-30
date_found: 2026-11-03
technology: satellite
type: academic-paper
title_en: "Downlink MU-MIMO for LEO Direct-to-Device: Feasibility, Architecture, and Implementation"
title_zh: "面向 LEO 直连终端的下行 MU-MIMO：可行性、架构与实现"
url: "https://arxiv.org/abs/2610.41248"
source_quality: abstract_only
topics: [LEO, direct-to-device, MU-MIMO, MMSE-precoding, spatial-degrees-of-freedom, hybrid-payload, functional-split, 3GPP-NTN-channel]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Gouda, Wang, Sajadieh and Agrawal (arXiv 2610.41248, eess.SP, submitted 30 October 2026) start from the observation that LEO direct-to-device service is commercially available but its throughput is limited by satellite antenna size and by payloads that separate users only by beams and frequency reuse. They argue that a single LEO satellite with a meter-scale array can instead serve hundreds of users on the same time-frequency resource through multi-user MIMO precoding.

The number of users separable with one stream each (the spatial degrees of freedom, DoF) is tied to the aperture in wavelengths, the orbit altitude and the minimum elevation angle. The abstract compares MMSE precoding, whose throughput grows with SNR, against maximum-ratio transmission, which becomes interference-limited, and describes how the precoder can be computed from user positions and satellite ephemeris and attitude.

## Summary (ZH)

Gouda、Wang、Sajadieh 与 Agrawal（arXiv 2610.41248，eess.SP，2026 年 10 月 30 日提交）指出，LEO 直连终端服务已商用，但吞吐量受限于卫星天线尺寸，以及仅靠波束与频率复用区分用户的载荷。他们提出，配备米级阵列的单颗 LEO 卫星可通过多用户 MIMO 预编码在相同时频资源上服务数百个用户。

单流可分离的用户数（空间自由度，DoF）取决于以波长计的口径、轨道高度和最小仰角。摘要比较了吞吐量随 SNR 增长的 MMSE 预编码与受干扰限制的最大比传输，并说明预编码器可由用户位置及卫星星历与姿态计算得到。

## Key technical points (EN)

- **Precoding from geometry**: under the 3GPP non-terrestrial channel models, the throughput loss versus perfect channel knowledge is under 0.5% at 20 dB SNR.
- **Update cadence**: the precoder can be refreshed from known geometry every radio frame (10 ms); the compute-heavy user pairing can be held for a few seconds with under 1% throughput loss.
- **Payload architecture**: the DoF set the number of digital chains of a hybrid payload; the functional split between satellites and ground trades inter-satellite-link and feeder-link load against on-board processing.
- **Cell-specific signals** stay on fixed beams while user data is precoded jointly across all cells of the satellite.
- **Reported example**: for a 50x50 array at 600 km and a 60 degree minimum elevation angle, one satellite serves 410 users at 6.1 bps/Hz on average, more than four times fixed beams with four-colour frequency reuse. Results are analytical and simulated (per the full text's figures); no over-the-air test is reported. Abstract-level summary only.
- **Authors and status**: the authors are with Skylo Technologies (paper footnote); the submission comment is "Submitted IEEE WCM".

## Key technical points (ZH)

- **基于几何的预编码**：在 3GPP 非地面信道模型下，20 dB SNR 时相对完美信道信息的吞吐量损失低于 0.5%。
- **更新节奏**：预编码器可每个无线帧（10 ms）依据已知几何更新；计算量大的用户配对可保持数秒，吞吐量损失低于 1%。
- **载荷架构**：DoF 决定混合载荷的数字链路数；星间与星地的功能划分在星间链路及馈电链路负载与星上处理之间折中。
- **小区专属信号**保持在固定波束上，用户数据则跨卫星所有小区联合预编码。
- **报告示例**：600 km 轨道、最小仰角 60 度、50x50 阵列时，单星平均以 6.1 bps/Hz 服务 410 个用户，为四色频率复用固定波束吞吐量的四倍以上。据全文图表，结果来自分析与仿真，未报告空口测试。仅为摘要级概述。
- **作者与状态**：作者来自 Skylo Technologies（论文脚注）；备注为已投稿 IEEE WCM。

## Why it matters / what's new (EN)

The paper asks whether a single LEO satellite can serve hundreds of users on the same time-frequency resource (frequency reuse 1) and what it takes, tying the DoF to array aperture, altitude and elevation mask. The figures are the authors' modelled results for one configuration.

## Why it matters / what's new (ZH)

论文探讨单颗 LEO 卫星能否在相同时频资源上（频率复用 1）服务数百用户及其所需条件，并将 DoF 与阵列口径、高度及仰角门限联系起来。数字为作者针对单一配置的建模结果。

## Images

None.
