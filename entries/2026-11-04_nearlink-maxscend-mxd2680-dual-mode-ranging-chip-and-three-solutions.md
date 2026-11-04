---
id: 2026-11-04_nearlink-maxscend-mxd2680-dual-mode-ranging-chip-and-three-solutions
date_published: 2026-10-31
date_found: 2026-11-04
type: industry-news
technology: nearlink
title_en: "Maxscend (卓胜微) details its MXD2680 SLE 2.0 / BLE 6.x dual-mode ranging chip and three solutions: digital car key, find-my-device and HID"
title_zh: "卓胜微介绍MXD2680 SLE 2.0/BLE 6.x双模测距芯片及三大方案：数字车钥匙、设备查找与HID"
url: "https://admin.sparklink.org.cn/api/new/dynamics/detail?id=990"
source_quality: "full (alliance news feed article released 2026-10-31, read as text; the content is a vendor's own account, so all figures are the vendor's stated values)"
topics: [NearLink, SparkLink, SLE2.0, ranging, PBR, RTT, digital-car-key, HID, dual-mode, Bluetooth, chips]
topic_primary: nearlink-sle
topics_secondary: [nearlink-automotive]
novelty_score: 2
---

## Summary (EN)

An article published on the SparkLink Alliance news feed on 2026-10-31 presents the SparkLink-related products of Maxscend Microelectronics (江苏卓胜微电子, listed on the Shenzhen ChiNext board), an RF front-end company that describes itself as an IDM with its own 6-inch and 12-inch fabs and an advanced-packaging platform. The article centres on one chip, MXD2680, described as a dual-mode SLE 2.0 and BLE 6.x high-precision short-range chip aimed at automotive-grade and high-end consumer products, and on three solutions built on it.

According to the article, MXD2680 has already passed SLE 2.0 RF conformance and protocol conformance certification. Earlier knowledge-base entries from the CEIC2026 summit mention the chip and its conformance result in passing; this article is the vendor's own, more detailed description of the chip's stated specifications and the solutions around it.

## Summary (ZH)

国际星闪联盟新闻栏目于2026年10月31日刊发文章，介绍卓胜微电子（深交所创业板上市的射频前端企业，自称为IDM模式，拥有6英寸与12英寸晶圆产线及先进封装平台）的星闪相关产品。文章围绕一颗芯片 MXD2680 及基于它的三个方案展开：该芯片被描述为面向车规及高端消费类产品的 SLE 2.0 与 BLE 6.x 高精度短距双模芯片。

文章称 MXD2680 已完成 SLE 2.0 射频一致性和协议一致性认证。此前知识库中有关 CEIC2026 峰会的条目仅顺带提及该芯片及其一致性结果；本文是厂商自述的更详细指标与方案说明。

## Key technical points (EN)

- **Chip architecture (stated)**: dual ARM core (2x Star-M33, up to 96 MHz); supports PBR and RTT dual-mode high-precision ranging and multiple antennas.
- **Ranging (stated)**: decimetre-level ranging; CP90 line-of-sight error under 0.3 m, non-line-of-sight under 1 m.
- **RF and power (stated)**: transmit power +10 dBm, receive sensitivity -100 dBm, sleep current 2.4 uA.
- **Link features (stated)**: Polar coding, wireless frame types 1/2, SM2/SM3/SM4 hardware encryption; SLE standard 4K report rate and a vendor-defined enhanced 8K report rate.
- **Digital car key solution**: built on MXD2680; the article cites decimetre-level ranging and whole-body continuous positioning, PBR&RTT, multi-antenna, multi-anchor handover and Passive Listening, with SparkLink/Bluetooth dual-mode support for digital key and welcome-unlock use.
- **Find solution**: lifts consumer-device finding from metre-level to decimetre-level; devices that are powered off or offline can still be located through anonymous reports from surrounding devices; stated accuracy under 0.3 m in open line-of-sight and under 1 m in dense occlusion.
- **HID solution**: SLE 2.0 standard 4K report rate and enhanced 8K; Polar code plus PSK modulation for interference resistance; with Bluetooth SCI, a 375 us connection interval and a standard Bluetooth 2K report rate, aimed at gamepads, keyboards/mice and styluses.
- **Roadmap (stated)**: continued investment in high-precision ranging, dual-mode connectivity and automotive-grade reliability; moving from devices to modules and system-level solutions; deeper participation in standard drafting and certification.

## Key technical points (ZH)

- **芯片架构（自述）**：双 ARM 核（2×Star-M33，最高96MHz）；支持 PBR/RTT 双模高精度测距及多天线。
- **测距（自述）**：分米级测距；CP90 视距误差小于0.3米，非视距小于1米。
- **射频与功耗（自述）**：发射功率+10dBm，接收灵敏度-100dBm，休眠电流2.4uA。
- **链路特性（自述）**：Polar 编码、无线帧1/2、SM2/SM3/SM4 硬件加密；SLE 标准4K回报率，自定义增强8K回报率。
- **数字车钥匙方案**：基于 MXD2680；文中提到分米级测距与全车身连续定位，支持 PBR&RTT、多天线、多锚点 Handover、Passive Listening，并支持星闪/蓝牙双模，用于数字钥匙和迎宾解锁。
- **查找方案**：将消费类设备查找由米级提升至分米级；设备关机或离线后仍可通过周围设备匿名上报位置；自述视距空旷场景精度小于0.3米，密集遮挡场景小于1米。
- **HID 方案**：SLE 2.0 标准4K回报率与增强8K；Polar 码加 PSK 调制提升抗干扰；配合蓝牙 SCI，实现375us连接间隔和标准蓝牙2K回报率，面向游戏手柄、键鼠、手写笔。
- **路线（自述）**：继续投入高精度测距、双模连接与车规级可靠性；由器件向模组、系统级方案发展；深化参与标准编制与测试认证。

## Why it matters / what's new (EN)

The entry records a vendor's stated specifications for a SLE 2.0 dual-mode chip that earlier CEIC2026 coverage only named. The figures (ranging error, report rates, sleep current) come from the vendor and are not independently measured; the article does not give the test conditions behind them. It also shows how one chip vendor positions SLE 2.0 ranging for three product categories at once: car keys, device finding and gaming/office peripherals.

## Why it matters / what's new (ZH)

本条目记录了一家厂商对 SLE 2.0 双模芯片的自述指标，此前 CEIC2026 相关报道仅点名了该芯片。测距误差、回报率、休眠电流等数据均出自厂商，并非独立实测，文章也未给出对应的测试条件。同时可见该芯片厂商如何以 SLE 2.0 测距同时面向车钥匙、设备查找及电竞/办公外设三类产品。

## Images

![Maxscend SparkLink article cover | 卓胜微星闪文章封面](https://cdn.sparklink.org.cn/storage/images/20261103/78189c4a77bbed464219e3e5473b65d0.png)
