---
id: 2026-11-24_nearlink-sparklink-indoor-vehicle-sensing-ieee-tnse
date_published: 2025-11-26
date_found: 2026-11-24
type: academic-paper
technology: nearlink
title_en: "SparkLink-based indoor vehicle sensing (IEEE TNSE): channel-spliced estimation and a single-RF-chain four-element array"
title_zh: "基于星闪的室内车辆感知（IEEE TNSE）：信道拼接估计与单射频链四阵元紧凑架构"
url: "https://doi.org/10.1109/TNSE.2025.3637289"
source_quality: "abstract_only (IEEE Xplore full text gated; abstract read via the OpenAlex record, venue, volume and pages via Crossref)"
topics: [NearLink, SparkLink, wireless-sensing, localization, time-of-flight, direction-of-arrival, frequency-hopping]
topic_primary: nearlink-sle
topics_secondary: [nearlink-slb]
novelty_score: 3
---

## Summary (EN)

"A Lightweight SparkLink-Based Framework for Indoor Vehicle Sensing via Channel-Spliced Estimation and Compact RF Architecture" (Kaikai Liu, Chenglin Huang, Shuliang Gui, Zengshan Tian, Ze Li; Chongqing University of Posts and Telecommunications) appears in IEEE Transactions on Network Science and Engineering, vol. 13, pp. 4207-4225 (2026). OpenAlex dates the record 2025-11-26. The abstract motivates the work with the need for high-precision, low-latency indoor location-awareness in fields such as autonomous navigation and smart manufacturing, and with the bandwidth and latency limits of existing RF-based technologies. The paper investigates the SparkLink protocol and presents a wireless sensing framework.

The abstract describes four steps: frequency hopping and multi-channel splicing to build a wideband channel for channel-parameter estimation; a bidirectional communication approach to calibrate and remove inter-channel phase offsets caused by synchronisation; atomic norm minimisation on the spliced channel for time-of-flight estimation; and a receiver with a single RF chain and a four-element uniform planar array, using a time-switching strategy to acquire spatial measurements in sequence, with the iterative adaptive approach for two-dimensional direction-of-arrival estimation. In an underground parking facility the authors report a median localisation accuracy of 1.13 m for stationary targets and 1.32 m for dynamic tracking, which they describe as on par with state-of-the-art wireless sensing solutions.

## Summary (ZH)

《A Lightweight SparkLink-Based Framework for Indoor Vehicle Sensing via Channel-Spliced Estimation and Compact RF Architecture》（Kaikai Liu、Chenglin Huang、Shuliang Gui、Zengshan Tian、Ze Li；重庆邮电大学）发表于 IEEE Transactions on Network Science and Engineering 第13卷，第4207-4225页（2026年）。OpenAlex 记录的日期为2025年11月26日。摘要指出，自主导航、智能制造等领域需要高精度、低时延的室内位置感知，而现有射频技术在带宽和时延上存在局限；论文研究星闪协议并提出一种无线感知框架。

摘要描述了四个环节：利用跳频和多信道拼接构造宽带信道以改进信道参数估计；采用双向通信方式校准并消除同步引起的信道间相位偏移；在拼接后的多信道上应用原子范数最小化进行飞行时间估计；以及采用单射频链加四阵元均匀平面阵的接收机，通过定制的时间切换策略依次获取空间测量，并结合迭代自适应方法实现二维到达角估计。在地下停车场的实测中，作者报告静止目标的定位精度中位数为1.13米，动态跟踪为1.32米，并称其性能与最先进的无线感知方案相当。

## Key technical points (EN)

- **Wideband channel from hopping**: frequency hopping plus multi-channel splicing builds a wideband channel for parameter estimation.
- **Phase calibration**: a bidirectional communication approach removes inter-channel phase offsets caused by synchronisation.
- **Time of flight**: atomic norm minimisation on the spliced multi-channel.
- **Compact receiver**: one RF chain, a four-element uniform planar array and a time-switching strategy for sequential spatial measurements; iterative adaptive approach for 2-D direction of arrival.
- **Reported results** (authors' own): median accuracy 1.13 m (stationary) and 1.32 m (dynamic tracking) in an underground parking facility.
- **Limits of this record**: only the abstract was available; test-set size, hardware platform and which SparkLink access mode was used are not covered here.

## Key technical points (ZH)

- **跳频构造宽带信道**：跳频加多信道拼接，用于信道参数估计。
- **相位校准**：双向通信方式消除同步引起的信道间相位偏移。
- **飞行时间**：在拼接后的多信道上进行原子范数最小化。
- **紧凑接收机**：单射频链、四阵元均匀平面阵与时间切换策略依次获取空间测量；采用迭代自适应方法做二维到达角估计。
- **报告结果**（作者自述）：地下停车场中静止目标定位精度中位数1.13米，动态跟踪1.32米。
- **本记录局限**：仅获取到摘要，测试规模、硬件平台及所用星闪接入模式均未涵盖。

## Why it matters / what's new (EN)

The KB already holds two other peer-reviewed NearLink sensing or localisation papers (NearSense on respiration detection, and a public RSSI localisation dataset). This one addresses vehicle localisation in a parking facility with time-of-flight and angle estimation built on SparkLink signals, and it is a different group (Chongqing University of Posts and Telecommunications). Results are the authors' own and come from the abstract only.

## Why it matters / what's new (ZH)

知识库已收录另外两篇同行评议的星闪感知/定位论文（NearSense 呼吸检测，以及公开 RSSI 定位数据集）。本文面向停车场内车辆定位，基于星闪信号构建飞行时间与角度估计，作者团队来自重庆邮电大学，与前两篇不同。结果为作者自述，且仅来自摘要。

## Images

_No images._
