---
id: 2026-08-17_viavi-vertex6-channel-emulator-wifi78
date_published: 2026-08-12
date_found: 2026-08-17
type: product
technology: wifi
title_en: "VIAVI Vertex 6.0: first channel emulator built for 6G and Wi-Fi 7/8 validation"
title_zh: "VIAVI Vertex 6.0：首个面向 6G 与 Wi-Fi 7/8 验证的信道仿真平台"
url: "https://www.prnewswire.com/news-releases/viavi-introduces-industrys-first-channel-emulator-for-6g-and-wi-fi-78-302846140.html"
source_quality: full
topics: [Wi-Fi-8, 802.11bn, 802.11be, test-equipment, channel-emulation]
topic_primary: wifi8-uhr
topics_secondary: [wifi7-deployment]
novelty_score: 1
---

## Summary (EN)
On August 12, 2026, VIAVI Solutions introduced Vertex 6.0, which it bills as the industry's first channel emulation platform designed specifically for next-generation 6G and Wi-Fi 7/8 testing. A channel emulator sits between the device under test and the tester, reproducing real-world RF propagation — multipath, Doppler, fading, delay spread — in the laboratory so radios can be validated under controlled but realistic channel conditions long before field trials.

The headline specifications are 400 MHz of instantaneous bandwidth per channel, carrier frequencies up to 23.6 GHz (covering the FR3 "upper mid-band" that 6G work is converging on, with up to 1 GHz of bandwidth in FR3 bands), 36 RF ports per 6U chassis, 256 digital links, and up to 1.6 GHz of total bandwidth. On the Wi-Fi side, the platform natively supports 320 MHz channels, 4096-QAM, and MIMO configurations from 2x2 to 8x8 — the full envelope of Wi-Fi 7 (802.11be) and the draft Wi-Fi 8 (802.11bn) PHY. Use cases named include 6G FR3 research, AI-RAN, integrated sensing and communication (ISAC), aerospace/military links (land-to-air, air-to-air), and LEO/MEO/GEO satellite, mesh, and drone networks alongside Wi-Fi development and validation.

For the Wi-Fi ecosystem, the significance is infrastructure maturation: with 802.11bn still at D2.00 and silicon sampling from every major vendor, channel-emulation capacity sized for 320 MHz / 4096-QAM / 8x8 lets chipset and AP makers regression-test draft-Wi-Fi 8 features under repeatable impaired-channel conditions — a capability that until now had to be assembled from general-purpose emulators not natively matched to the 802.11be/bn PHY envelope.

## Summary (ZH)
2026 年 8 月 12 日，VIAVI Solutions 发布 Vertex 6.0，宣称是业界首个专为下一代 6G 与 Wi-Fi 7/8 测试设计的信道仿真平台。信道仿真器位于被测设备与测试仪之间，在实验室中复现真实世界的射频传播特性——多径、多普勒、衰落、时延扩展——使无线设备能够在可控且逼真的信道条件下完成验证，远早于外场试验。

核心规格包括：单信道 400 MHz 瞬时带宽、载波频率最高 23.6 GHz（覆盖 6G 研究正在聚焦的 FR3"中高频段"，FR3 频段内支持最高 1 GHz 带宽）、每 6U 机箱 36 个射频端口、256 条数字链路、总带宽最高 1.6 GHz。在 Wi-Fi 侧，平台原生支持 320 MHz 信道、4096-QAM 以及 2x2 至 8x8 的 MIMO 配置——完整覆盖 Wi-Fi 7（802.11be）与 Wi-Fi 8（802.11bn）草案的 PHY 包络。官方列举的用例包括 6G FR3 研究、AI-RAN、通感一体化（ISAC）、航空航天/军用链路（地对空、空对空）以及 LEO/MEO/GEO 卫星、mesh 与无人机网络，另有 Wi-Fi 开发与验证。

对 Wi-Fi 生态而言，其意义在于测试基础设施的成熟：802.11bn 仍处于 D2.00 草案阶段、各大厂商芯片已开始送样，按 320 MHz / 4096-QAM / 8x8 规格设计的信道仿真能力，使芯片与 AP 厂商能够在可重复的受损信道条件下回归测试 Wi-Fi 8 草案特性——此前这类能力只能用并非原生匹配 802.11be/bn PHY 包络的通用仿真器拼装实现。

## Key technical points (EN)
- Vertex 6.0 channel emulation platform, announced 2026-08-12; positioned as the first channel emulator purpose-built for 6G and Wi-Fi 7/8.
- 400 MHz instantaneous bandwidth; carrier frequencies to 23.6 GHz; up to 1 GHz bandwidth in FR3 bands; 1.6 GHz total bandwidth.
- 36 RF ports per 6U chassis, 256 digital links; TDD and FDD modes.
- Wi-Fi 7/8 envelope: native 320 MHz channels, 4096-QAM, 2x2 through 8x8 MIMO.
- Target domains beyond Wi-Fi: 6G FR3, AI-RAN, ISAC, aerospace/military, LEO/MEO/GEO satellite, mesh, and drone networks.
- Role in the toolchain: laboratory reproduction of real-world propagation for pre-field validation and repeatable regression of draft-standard features.

## Key technical points (ZH)
- Vertex 6.0 信道仿真平台，2026-08-12 发布；定位为首个专为 6G 与 Wi-Fi 7/8 打造的信道仿真器。
- 400 MHz 瞬时带宽；载波频率最高 23.6 GHz；FR3 频段内最高 1 GHz 带宽；总带宽 1.6 GHz。
- 每 6U 机箱 36 个射频端口、256 条数字链路；支持 TDD 与 FDD 模式。
- Wi-Fi 7/8 包络：原生 320 MHz 信道、4096-QAM、2x2 至 8x8 MIMO。
- Wi-Fi 之外的目标领域：6G FR3、AI-RAN、通感一体化（ISAC）、航空航天/军用、LEO/MEO/GEO 卫星、mesh 与无人机网络。
- 工具链角色：在实验室复现真实传播环境，用于外场前验证与草案标准特性的可重复回归测试。

## Why it matters / what's new (EN)
Second test-and-measurement datapoint in the wifi8-uhr bin, complementing 2026-08-03_rs-cmp180-wifi8-5x5-validation: Rohde & Schwarz's CMP180 covered the signaling/callbox side of draft-Wi-Fi 8 validation (5x5 MIMO, finer MCS, DRU with Qualcomm), while Vertex 6.0 covers the propagation side — impaired-channel emulation sized to the full 802.11be/bn PHY envelope. Together they indicate the Wi-Fi 8 test-equipment ecosystem is forming a full validation chain roughly two years ahead of expected certification (2028), consistent with the silicon timeline tracked in the KB (Filogic 8000, BCM4918/67xx, FastConnect 8800, ROG NeoCore). The 23.6 GHz / FR3 reach also makes this a cross-technology instrument relevant to the cellular and satellite domains.

## Why it matters / what's new (ZH)
这是 wifi8-uhr 分区的第二个测试测量类数据点，与 2026-08-03_rs-cmp180-wifi8-5x5-validation 互补：罗德与施瓦茨的 CMP180 覆盖 Wi-Fi 8 草案验证的信令/综测侧（与高通合作的 5x5 MIMO、更细粒度 MCS、DRU），而 Vertex 6.0 覆盖传播侧——按 802.11be/bn 完整 PHY 包络设计的受损信道仿真。两者共同表明，Wi-Fi 8 测试设备生态正在比预期认证时间（2028 年）提前约两年形成完整验证链，与 KB 追踪的芯片时间线（Filogic 8000、BCM4918/67xx、FastConnect 8800、ROG NeoCore）相互印证。23.6 GHz / FR3 的频率覆盖也使其成为与蜂窝、卫星领域相关的跨技术仪器。
