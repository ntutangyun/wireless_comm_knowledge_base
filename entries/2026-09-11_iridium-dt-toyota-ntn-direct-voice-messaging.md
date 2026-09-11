---
id: 2026-09-11_iridium-dt-toyota-ntn-direct-voice-messaging
date_published: 2026-09-10
date_found: 2026-09-11
type: satellite-news
technology: satellite
title_en: "Iridium, Deutsche Telekom IoT, and Toyota Demonstrate NB-IoT Voice Messaging over Satellite via Iridium NTN Direct"
title_zh: "Iridium、Deutsche Telekom IoT 与丰田通过 Iridium NTN Direct 演示基于 NB-IoT 的卫星语音消息传输"
url: "https://www.prnewswire.com/news-releases/iridium-deutsche-telekom-iot-and-toyota-demonstrate-voice-messaging-over-satellite-via-iridium-ntn-direct-302874891.html"
source_quality: full
topics: [Iridium-NTN-Direct, NB-IoT, 3GPP-Release-19, D2D, automotive-IoT, voice-codec]
topic_primary: sat-iot
topics_secondary: [sat-direct-device]
novelty_score: 3
---

## Summary (EN)
Iridium Communications and Deutsche Telekom IoT announced on 2026-09-10, in a demonstration with Toyota (at Telekom Satellite Day 2026) the successful transmission of a voice message from a Toyota vehicle over Iridium's fully operational LEO constellation using Iridium NTN Direct, its standards-based direct-to-device service, which Iridium's own product page places in 3GPP Release 19. The test vehicle carried a Nordic Semiconductor nRF9151 development board with a Deutsche Telekom IoT SIM; the message ("testing, testing, one, two, freeway") was encoded and transmitted as standards-based NB-IoT voice traffic, using an AI-based voice codec (Fraunhofer IIS's NESC) to compress speech to fit within NB-IoT's narrowband, satellite-relayed data channel. Manfred Lutzky of Fraunhofer IIS states that NESC "enables reliable, natural sounding and highly intelligible satellite voice services at scale by operating at bitrates of 1 kb/s or less". Iridium NTN Direct is designed to extend coverage using Iridium's existing global L-band LEO constellation, so that eligible DT IoT customers using compatible standards-based NB-IoT devices will be able to roam between terrestrial networks and Iridium satellites, for automotive, logistics, remote-utility, agriculture, and emergency-response use cases. The demonstration follows the completion of technical integration and a global roaming agreement between the two companies; Iridium NTN Direct is slated for commercial availability in Q4 2026, with selected European customers already testing.

## Summary (ZH)
2026 年 9 月 10 日（Telekom Satellite Day 2026 期间），Iridium Communications 与 Deutsche Telekom IoT 联合丰田宣布，成功通过 Iridium 已全面运行的低轨星座，利用其标准化直连设备服务 Iridium NTN Direct（铱星官方产品页将其归入 3GPP Release 19），从一辆丰田测试车辆发送了一条语音消息。测试车辆搭载了配备 Deutsche Telekom IoT SIM 卡的 Nordic Semiconductor nRF9151 开发板；消息内容（"testing, testing, one, two, freeway"）以基于标准的 NB-IoT 语音流量形式编码并传输，使用 Fraunhofer IIS 研发的基于 AI 的语音编解码器（NESC）将语音压缩至可容纳于 NB-IoT 窄带、经卫星中继的数据信道。Fraunhofer IIS 的 Manfred Lutzky 表示，NESC「以 1 kb/s 或更低的比特率运行」，从而可规模化提供可靠、自然且高度可懂的卫星语音服务。Iridium NTN Direct 旨在利用铱星现有的全球 L 波段低轨星座扩展覆盖，使符合条件的 DT IoT 客户在使用兼容的标准化 NB-IoT 设备时，能够在地面网络与铱星卫星之间漫游，面向汽车、物流、偏远地区公用事业、农业及应急响应等场景。此次演示是在双方完成技术集成与全球漫游协议之后进行的；Iridium NTN Direct 计划于 2026 年第四季度商用，部分欧洲客户已在测试。

## Key technical points (EN)
- **Test setup:** Toyota vehicle fitted with a Nordic Semiconductor nRF9151 development board and a Deutsche Telekom IoT SIM; message transmitted entirely via the Iridium satellite network.
- **Standards basis:** Iridium NTN Direct is a standards-based NB-IoT service; Iridium's product page (https://www.iridium.com/ntn-direct/) describes it as "included as part of 3GPP Release-19". The press release itself names no release number.
- **Voice-over-NB-IoT mechanism:** speech compressed via Fraunhofer IIS's AI-based NESC voice codec to fit NB-IoT's narrowband data channel, operating at bitrates of 1 kb/s or less.
- **Roaming model:** eligible DT IoT customers using compatible standards-based NB-IoT devices will be able to roam between terrestrial networks and Iridium satellites.
- **Target applications:** automotive, logistics, remote utilities, smart agriculture, emergency response.

## Key technical points (ZH)
- **测试配置：** 丰田测试车辆搭载 Nordic Semiconductor nRF9151 开发板及 Deutsche Telekom IoT SIM 卡；消息完全通过铱星卫星网络传输。
- **标准基础：** Iridium NTN Direct 是一项标准化 NB-IoT 服务；铱星产品页（https://www.iridium.com/ntn-direct/）称其「作为 3GPP Release-19 的一部分」。新闻稿本身未给出版本号。
- **NB-IoT 语音传输机制：** 语音经 Fraunhofer IIS 研发的基于 AI 的 NESC 语音编解码器压缩后，装入 NB-IoT 窄带数据信道传输，运行比特率为 1 kb/s 或更低。
- **漫游模式：** 符合条件的 DT IoT 客户，在使用兼容的标准化 NB-IoT 设备时，将能够在地面网络与铱星卫星之间漫游。
- **目标应用：** 汽车、物流、偏远地区公用事业、智慧农业、应急响应。

## Why it matters / what's new (EN)
This is the KB's first demonstration entry pairing a named automotive OEM (Toyota) with a live, over-the-air satellite voice transmission, and the first entry to describe an AI-based voice codec (Fraunhofer NESC) purpose-built to fit voice traffic into an NB-IoT NTN data channel — a different technical problem from the throughput/latency measurement work in 2026-09-09_arxiv-nbiot-ntn-geo-measurement (which characterized commercial NB-IoT NTN energy/retransmission behavior over GEO, not voice-over-IoT encoding). It also adds a concrete standards-compliance data point (a standards-based NB-IoT service with devices roaming between terrestrial networks and satellite) to the sat-direct-device thread that already covers Starlink Direct-to-Cell, AST SpaceMobile, and Apple/Globalstar, but from the NB-IoT/industrial-IoT angle rather than the consumer-smartphone angle those entries cover.

## Why it matters / what's new (ZH)
本条目是知识库首条将具名汽车厂商（丰田）与真实空口卫星语音传输相结合的演示类条目，也是首条描述专为将语音流量装入 NB-IoT NTN 数据信道而设计的基于 AI 的语音编解码器（Fraunhofer NESC）的条目——这与 2026-09-09_arxiv-nbiot-ntn-geo-measurement 条目（表征 GEO 场景下商用 NB-IoT NTN 的能耗/重传行为，而非语音编码问题）所涉及的技术问题不同。本条目还为已涵盖 Starlink Direct-to-Cell、AST SpaceMobile 与 Apple/Globalstar 的卫星直连设备（sat-direct-device）脉络，补充了一个具体的标准合规性数据点（标准化 NB-IoT、设备在地面网络与卫星之间漫游）——但视角是 NB-IoT／工业物联网，而非上述条目所覆盖的消费级智能手机场景。

## Images

None.
