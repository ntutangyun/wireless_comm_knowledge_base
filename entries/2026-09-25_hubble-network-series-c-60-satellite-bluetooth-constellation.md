---
id: 2026-09-25_hubble-network-series-c-60-satellite-bluetooth-constellation
date_published: 2026-09-24
date_found: 2026-09-25
technology: satellite
type: satellite-news
title_en: "Hubble Network Raises $200M Series C at $1.6B Valuation to Fund a 60-Satellite Phased-Array Bluetooth LE Constellation"
title_zh: "Hubble Network 完成 2 亿美元 C 轮融资，估值 16 亿美元，用于建设 60 颗相控阵蓝牙 LE 卫星星座"
url: "https://satnews.com/2026/09/24/hubble-network-secures-200-million-series-c-round-at-1-6-billion-valuation-for-bluetooth-constellation/"
source_quality: full
topics: [Hubble-Network, Bluetooth-LE, satellite-IoT, phased-array, cubesat]
topic_primary: sat-iot
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

Hubble Network raised a $200 million Series C round (announced 23 September 2026), led by Smith Point Capital with participation from Seraphim, Carthona Capital, Earthshot Ventures, RPM Ventures, and Y Combinator, at a $1.6 billion private-market valuation and bringing the company's total venture funding to $300 million. Hubble's current constellation is six demonstration CubeSats built by Spire Global, operating over North America; the company states it manages over 500,000 active devices on its ground network, a tenfold year-over-year increase. The new funding is earmarked for designing, fabricating, and deploying up to 60 larger, custom-engineered satellites, targeted for full deployment by 2030, with the first two upgraded spacecraft scheduled to launch in 2027. Hubble states each next-generation satellite will be able to simultaneously track and process data transmissions from more than 10 million individual connected devices, and that the upgraded platforms will carry phased-array antenna systems with ten times the surface area of the current demonstration CubeSats, increasing signal sensitivity and link margins for low-power Bluetooth chips on the ground. Hubble frames the funding around global asset tracking, supply-chain monitoring, and industrial IoT use cases.

## Summary (ZH)

Hubble Network 于 2026 年 9 月 23 日宣布完成一轮 2 亿美元的 C 轮融资，由 Smith Point Capital 领投，Seraphim、Carthona Capital、Earthshot Ventures、RPM Ventures 及 Y Combinator 参投，公司私募市场估值达 16 亿美元，累计融资总额达到 3 亿美元。Hubble 目前的星座由 Spire Global 建造的六颗演示级立方星组成，覆盖北美地区；公司称其地面网络上管理的活跃设备已超过 50 万台，同比增长十倍。新一轮融资将用于设计、制造并部署最多 60 颗更大型、定制工程化的卫星，目标是到 2030 年完成全面部署，其中首批两颗升级版航天器计划于 2027 年发射。Hubble 表示，下一代卫星每颗都能同时追踪并处理超过 1000 万台独立联网设备发送的数据，升级平台将搭载相控阵天线系统，其表面积达到当前演示级立方星的十倍，从而提升对地面低功耗蓝牙芯片的信号灵敏度与链路余量。Hubble 将此轮融资的应用场景定位于全球资产追踪、供应链监控与工业物联网。

## Key technical points (EN)

- **Funding**: $200M Series C, $1.6B private-market valuation, $300M total VC raised to date; led by Smith Point Capital with Seraphim, Carthona Capital, Earthshot Ventures, RPM Ventures, and Y Combinator participating.
- **Current constellation**: six Spire Global-built demonstration CubeSats over North America; over 500,000 active devices on the ground network, a 10x year-over-year increase.
- **Planned constellation**: up to 60 larger, custom-engineered satellites, full deployment targeted by 2030; first two upgraded spacecraft launching in 2027.
- **Per-satellite capacity claim**: each next-generation satellite will simultaneously track and process transmissions from more than 10 million individual connected devices.
- **Antenna upgrade**: phased-array antenna systems with 10x the surface area of the current demonstration CubeSats, increasing signal sensitivity and link margins for low-power Bluetooth chips on the ground (no proprietary satellite waveform is mentioned in this disclosure, unlike the CC2755P10 tutorial's separate narrowband satellite-uplink path).
- **Use cases stated**: global asset tracking, supply-chain monitoring, industrial IoT.

## Key technical points (ZH)

- **融资情况**：2 亿美元 C 轮融资，私募市场估值 16 亿美元，累计融资总额 3 亿美元；由 Smith Point Capital 领投，Seraphim、Carthona Capital、Earthshot Ventures、RPM Ventures 及 Y Combinator 参投。
- **现有星座**：由 Spire Global 建造的六颗演示级立方星，覆盖北美；地面网络活跃设备超过 50 万台，同比增长十倍。
- **规划星座**：最多 60 颗更大型、定制工程化卫星，目标 2030 年前完成全面部署；首批两颗升级版航天器将于 2027 年发射。
- **单星容量声明**：下一代卫星每颗可同时追踪并处理超过 1000 万台独立联网设备的数据传输。
- **天线升级**：相控阵天线系统，表面积为当前演示级立方星的十倍，从而提升对地面低功耗蓝牙芯片的信号灵敏度与链路余量（本次披露未提及独立的专有卫星波形，与 CC2755P10 教程中记录的另一条窄带卫星上行链路不同）。
- **应用场景**：全球资产追踪、供应链监控、工业物联网。

## Why it matters / what's new (EN)

This KB's only prior Hubble Network coverage (2026-09-17, technology:bluetooth) was a device-side tutorial on TI's CC2755P10 dual-stack chip, describing the terrestrial BLE-advertising path and a separate proprietary narrowband satellite waveform, plus per-transmission power/energy measurements — but said nothing about the constellation's own scale or roadmap beyond "US/Canada/Mexico coverage today, worldwide on the roadmap." This entry supplies the constellation-side numbers that entry lacked: current fleet size (6 demonstration CubeSats), a funded expansion plan (up to 60 larger satellites by 2030, first two in 2027), a stated per-satellite device-tracking capacity (10 million+ devices), and a 10x antenna-area upgrade aimed specifically at standard BLE signal sensitivity — filling in the network-scale side of the same underlying "Bluetooth-from-space" system this KB has now covered from both the device and constellation angles. Note that the two sources describe the satellite uplink differently: SatNews says the satellites receive standard BLE transmissions from unmodified hardware, while the 2026-09-17 tutorial states the satellite path uses a separate proprietary waveform that is not a BLE advertisement.

## Why it matters / what's new (ZH)

知识库此前唯一一条关于 Hubble Network 的条目（2026-09-17，technology:bluetooth）是一篇面向设备端的教程，介绍 TI CC2755P10 双栈芯片、地面蓝牙 LE 广播路径与一条独立的专有窄带卫星波形，并给出了单次发送的功耗/能耗数据——但对星座本身的规模或发展路线图未作说明，仅提及"目前覆盖美国/加拿大/墨西哥，全球覆盖在路线图上"。本条目补充了此前条目所缺失的星座侧数据：当前机队规模（6 颗演示级立方星）、已获资金支持的扩展计划（到 2030 年部署最多 60 颗更大型卫星，首批两颗 2027 年发射）、单星设备追踪容量声明（超过 1000 万台设备），以及专门针对标准蓝牙 LE 信号灵敏度的十倍天线面积升级——从设备与星座两个角度，为知识库已收录的同一套"太空蓝牙"系统补齐了网络规模层面的信息。需注意两份来源对卫星上行链路的描述不同：SatNews 称卫星直接接收未经改动硬件发出的标准 BLE 信号，而 2026-09-17 教程则明确指出卫星链路是一条独立的专有波形、并非 BLE 广播。

## Images

None.
