---
id: 2026-05-30_arxiv-bluetooth-phased-array-inertial-nav
date_published: 2026-02-19
date_found: 2026-05-30
type: academic-paper
title_en: "Bluetooth Phased-Array Aided Inertial Navigation Using Factor Graphs: Experimental Verification"
title_zh: "基于因子图的蓝牙相控阵辅助惯性导航：实验验证"
url: "https://arxiv.org/abs/2602.17407"
source_quality: full
topics: [Bluetooth, AoA, phased-array, inertial-navigation, factor-graph, GNSS-denied]
topic_primary: bt-location
topics_secondary: [bt-le]
technology: bluetooth
novelty_score: 3
---

## Summary (EN)
Sørensen, Bryne, Gryte, and Johansen (NTNU) demonstrate that commercial phased-array Bluetooth angle measurements can aid inertial navigation when GNSS is unavailable — for warehouse logistics, drone landing, and autonomous docking. The challenge is that low-cost phased-array Bluetooth produces noisy angular observations with limited range, so naïve fusion degrades quickly.

The authors fuse inertial measurement unit (IMU) data with Bluetooth angle-of-arrival observations using factor graph optimization, and systematically compare robust estimation strategies (different robust cost functions / outlier handling) to keep the noisy Bluetooth angles from corrupting the state estimate. They additionally test aiding configurations that add either a range measurement or barometric-pressure altitude alongside the Bluetooth angles.

Verification used real multirotor drone flight data with simulated GNSS loss. The paper's contribution is empirical: it shows which robust factor-graph strategies survive realistic phased-array Bluetooth noise, and how range or barometric aiding complements the angular observations during GNSS outages. It positions commodity Bluetooth AoA as a viable, low-cost aiding sensor for short-range GNSS-denied navigation rather than a standalone positioning system.

## Summary (ZH)
Sørensen、Bryne、Gryte 与 Johansen（NTNU）证明：在 GNSS 不可用时，商用相控阵蓝牙的角度测量可用于辅助惯性导航——适用于仓储物流、无人机降落与自主对接等场景。难点在于低成本相控阵蓝牙的角度观测噪声大、作用距离有限，朴素融合会迅速退化。

作者用因子图优化将惯性测量单元（IMU）数据与蓝牙到达角观测融合，并系统比较多种稳健估计策略（不同的稳健代价函数/离群点处理），以防噪声较大的蓝牙角度污染状态估计。此外还测试了在蓝牙角度之外再加入测距或气压高度的辅助配置。

验证使用真实多旋翼无人机飞行数据并模拟 GNSS 失锁。论文贡献是实证性的：展示了哪些稳健因子图策略能在真实相控阵蓝牙噪声下存活，以及在 GNSS 中断期间测距或气压辅助如何与角度观测互补。它将商用蓝牙 AoA 定位为短距 GNSS 拒止导航中可行、低成本的辅助传感器，而非独立定位系统。

## Key technical points (EN)
- Factor-graph fusion of IMU + commercial phased-array Bluetooth AoA observations.
- Systematic comparison of robust estimation strategies to tolerate noisy, short-range Bluetooth angles.
- Aiding variants: Bluetooth angle + range, or Bluetooth angle + barometric altitude.
- Experimental verification on real multirotor drone flights with simulated GNSS loss.
- Framing: commodity Bluetooth AoA as a low-cost GNSS-denied aiding sensor, not standalone positioning.

## Key technical points (ZH)
- 用因子图融合 IMU 与商用相控阵蓝牙 AoA 观测。
- 系统比较多种稳健估计策略，以容忍噪声大、距离短的蓝牙角度。
- 辅助变体：蓝牙角度 + 测距，或蓝牙角度 + 气压高度。
- 在真实多旋翼无人机飞行数据上做实验验证并模拟 GNSS 失锁。
- 定位：将商用蓝牙 AoA 作为低成本 GNSS 拒止辅助传感器，而非独立定位。

## Why it matters / what's new (EN)
Extends the KB's Bluetooth direction-finding coverage from pure-RF DOA/channel work into sensor-fusion / robotics applications. Where `2026-05-30_arxiv-lmoment-ble-cte-los-nlos` characterises the AoA channel statistically, this paper shows what to do with noisy AoA downstream — robustly fusing it with inertial data for GNSS-denied navigation. The robust factor-graph recipe is the transferable contribution.

## Why it matters / what's new (ZH)
将 KB 的蓝牙测向覆盖从纯射频 DOA/信道工作扩展到传感器融合/机器人应用。`2026-05-30_arxiv-lmoment-ble-cte-los-nlos` 在统计上刻画 AoA 信道，本文则展示噪声 AoA 在下游如何使用——与惯性数据稳健融合以实现 GNSS 拒止导航。稳健因子图方法是可迁移的核心贡献。
