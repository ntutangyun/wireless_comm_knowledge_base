---
id: 2026-09-25_openmanet-802-11ah-halow-mesh-emergency-comms
date_published: 2026-09-16
date_found: 2026-09-25
technology: wifi
type: product
title_en: "OpenMANET: an open-source 802.11s mesh built on Wi-Fi HaLow (802.11ah) for off-grid search-and-rescue and disaster-response comms"
title_zh: "OpenMANET：基于 Wi-Fi HaLow（802.11ah）的开源 802.11s 网状网络，面向离网搜救与灾难响应通信"
url: "https://www.cnx-software.com/2026/09/16/openmanet-a-higher-bandwidth-meshtastic-alternative-leveraging-802-11ah-wifi-halow/"
source_quality: full
topics: [802.11ah, HaLow, IoT, sub-GHz, mesh, 802.11s, open-source]
topic_primary: amp-iot
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

CNX Software reported on 16 September 2026 on OpenMANET, an open-source project for building long-range wireless mesh (mobile ad-hoc) networks over Wi-Fi HaLow (IEEE 802.11ah) rather than the sub-GHz LoRa-class radios used by Meshtastic (and MeshCore), which CNX Software compares it against. The stated use cases are search-and-rescue, disaster response, airsoft/wargaming events, and other off-grid or infrastructure-failed situations where conventional cellular or Wi-Fi coverage is unavailable.

The mesh layer runs the standard 802.11s Wi-Fi mesh protocol with batman-adv routing on top of OpenWrt firmware; a management daemon called OpenMANETd, written in Go, handles node configuration and mesh state, exposing both a web interface and a gRPC/HTTP API. Because the underlying link is 802.11ah rather than a narrowband LPWAN radio, the article reports usable bandwidth of roughly 1-15 Mbps (the exact figure depends on regional sub-GHz regulatory limits), which the article presents as its main advantage over Meshtastic: full IP networking, push-to-talk voice, GPS position sharing, and RTSP camera/video streaming over the mesh, plus integration with ATAK (Android Team Awareness Kit), a tactical situational-awareness app used in military, public-safety and search-and-rescue contexts. A single mesh node can act as a gateway to the wider Internet via Starlink or a cellular uplink, extending connectivity from the field mesh outward.

Supported hardware spans purpose-built long-range gateways (Gateworks Venice, HaLowLink 2) and commodity single-board computers: Raspberry Pi Zero 2 W, 3 Model B and 4, with the Pi 4 (paired with a Seeed Studio Wio-WM6108 Wi-Fi HaLow mini-PCIe module and an 18650 battery UPS) recommended for the best experience — the only listed platform supporting all features, including camera and BLOS linking of two MANETs over the Internet. The project is open source, with a GitHub repository and documentation site; the article does not specify a license. The explicit tradeoff the article states is that OpenMANET's hardware is more powerful, more power-hungry and more expensive than a typical Meshtastic node, in exchange for the added bandwidth and IP-native feature set.

## Summary (ZH)

CNX Software 于 2026 年 9 月 16 日报道了 OpenMANET——一个基于 Wi-Fi HaLow（IEEE 802.11ah）而非 Meshtastic（及 MeshCore）所用亚 GHz LoRa 类射频的开源长距离无线网状（移动自组织）网络项目，文章将其与 Meshtastic 直接对比。其目标应用场景包括搜索与救援、灾难响应、野战运动（airsoft）等活动，以及其他常规蜂窝或 Wi-Fi 覆盖缺失的离网或基础设施失效场景。

其网状层运行标准的 802.11s Wi-Fi 网状协议，并在 OpenWrt 固件之上采用 batman-adv 路由；一个用 Go 编写、名为 OpenMANETd 的管理守护进程负责节点配置与网状状态管理，并提供 Web 界面与 gRPC/HTTP API。由于底层链路是 802.11ah 而非窄带 LPWAN 射频，文章报告的可用带宽约为 1–15 Mbps（具体数值取决于各地区的亚 GHz 频谱监管限制），文章将此列为相对 Meshtastic 的主要优势：网状网络之上可实现完整的 IP 组网、一键通（push-to-talk）语音、GPS 位置共享，以及基于 RTSP 的摄像头/视频流传输，并可与战术态势感知应用 ATAK（Android Team Awareness Kit，广泛用于军事、公共安全与搜救场景）集成。单个网状节点即可通过 Starlink 或蜂窝上行链路充当网关，将现场网状网络接入更广域的互联网。

支持的硬件涵盖专用长距离网关（Gateworks Venice、HaLowLink 2）以及常见的单板计算机：树莓派 Zero 2 W、3 Model B 与 4，其中树莓派 4（搭配 Seeed Studio Wio-WM6108 Wi-Fi HaLow mini-PCIe 模块及 18650 电池 UPS）被推荐以获得最佳体验——是唯一支持全部功能（包括摄像头以及通过互联网连接两个 MANET 的 BLOS）的平台。该项目为开源项目，提供 GitHub 代码仓库与文档站点；文章未说明具体许可协议。文章明确指出的取舍是：相较典型 Meshtastic 节点，OpenMANET 所需硬件性能更强、更耗电、成本也更高，以换取更高带宽与原生 IP 组网能力。

## Key technical points (EN)

- **Radio layer**: Wi-Fi HaLow (IEEE 802.11ah), sub-GHz, in place of Meshtastic's LoRa-class radio.
- **Mesh layer**: standard 802.11s Wi-Fi mesh protocol with batman-adv routing, on OpenWrt.
- **Management**: OpenMANETd, a Go daemon, providing a web UI and gRPC/HTTP API for node configuration and mesh state.
- **Bandwidth**: ~1-15 Mbps, dependent on regional sub-GHz regulatory limits — higher than LoRa-based Meshtastic per the article.
- **Application features enabled by the extra bandwidth**: full IP networking, push-to-talk voice, GPS position sharing, RTSP camera/video streaming, ATAK integration, and single-node Internet gatewaying via Starlink or cellular.
- **Supported hardware**: Gateworks Venice, HaLowLink 2, Raspberry Pi Zero 2 W / 3B / 4 (Pi 4 + Seeed Wio-WM6108 HaLow mini-PCIe module + 18650 UPS recommended), Heltec HT-HD01 V2.
- **Licensing/openness**: open source with a GitHub repo and documentation site; specific license not stated in the source article.
- **Stated tradeoff vs. Meshtastic**: more capable and IP-native, but requires more powerful, more power-hungry and more expensive hardware.

## Key technical points (ZH)

- **射频层**：采用 Wi-Fi HaLow（IEEE 802.11ah）亚 GHz 频段，替代 Meshtastic 所用的 LoRa 类射频。
- **网状层**：基于 OpenWrt 固件，运行标准 802.11s Wi-Fi 网状协议并采用 batman-adv 路由。
- **管理层**：OpenMANETd（Go 语言守护进程），提供 Web 界面与 gRPC/HTTP API，用于节点配置与网状状态管理。
- **带宽**：约 1–15 Mbps，具体取决于各地区亚 GHz 频谱监管限制——据文章，高于基于 LoRa 的 Meshtastic。
- **额外带宽带来的应用能力**：完整 IP 组网、一键通语音、GPS 位置共享、基于 RTSP 的摄像头/视频流传输、ATAK 集成，以及单节点通过 Starlink 或蜂窝网络作为互联网网关。
- **支持硬件**：Gateworks Venice、HaLowLink 2、树莓派 Zero 2 W / 3B / 4（推荐树莓派 4 + Seeed Wio-WM6108 HaLow mini-PCIe 模块 + 18650 电池 UPS）、Heltec HT-HD01 V2。
- **开源与许可**：开源项目，提供 GitHub 代码仓库与文档站点；文章未说明具体许可协议。
- **相较 Meshtastic 的取舍**：功能更强、原生支持 IP 组网，但所需硬件性能更强、更耗电、成本也更高。

## Why it matters / what's new (EN)

The KB's amp-iot bin already holds several Wi-Fi HaLow entries — the KAUST field-characterization paper (2026-05-22_arxiv-halow-field-characterization), Amazon Blink's proprietary long-range camera hub (2026-08-23_blink-xr-halow-extended-range-cameras), and Morse Micro's USB dongle reference designs (2026-08-23_morse-micro-halow-usb-dongle-designs) — but those cover a measurement study (including a fixed-relay LoS mesh test), a proprietary camera hub, and USB dongle reference designs. OpenMANET is the first entry in this bin describing a complete open-source mobile ad-hoc mesh stack (802.11s + batman-adv) for HaLow, and the first aimed at search-and-rescue / disaster-response use. It also illustrates a different point in the HaLow ecosystem's maturity: an open-source software stack supporting several third-party boards (Gateworks Venice, Raspberry Pi, HaLowLink 2, Heltec), rather than a single vendor's proprietary hub-and-camera product or reference silicon design.

## Why it matters / what's new (ZH)

知识库 amp-iot 分类下已有多条 Wi-Fi HaLow 相关条目——沙特阿卜杜拉国王科技大学（KAUST）的现场表征论文（2026-05-22_arxiv-halow-field-characterization）、亚马逊 Blink 的专有长距摄像头集线器（2026-08-23_blink-xr-halow-extended-range-cameras），以及 Morse Micro 的 USB 加密狗参考设计（2026-08-23_morse-micro-halow-usb-dongle-designs）——但这些分别为现场测量研究（含固定中继 LoS mesh 测试）、专有摄像头集线器和 USB 加密狗参考设计。OpenMANET 是该分类下首个介绍面向 HaLow 的完整开源移动自组织网状协议栈（802.11s + batman-adv）的条目，也是首个面向搜救/灾难响应场景的条目。它同时展示了 HaLow 生态成熟度的另一个侧面：一套支持多款第三方板卡（Gateworks Venice、树莓派、HaLowLink 2、Heltec）的开源软件栈，而非单一厂商的专有集线器+摄像头产品或参考芯片设计。

## Images

![OpenMANET system overview | OpenMANET 系统概览](https://www.cnx-software.com/wp-content/uploads/2026/09/OpenMANET-720x614.jpg)
![A Raspberry Pi-based OpenMANET mesh node | 基于树莓派的 OpenMANET 网状节点](https://www.cnx-software.com/wp-content/uploads/2026/09/Raspberry-Pi-OpenMANET-Node.webp)
![OpenMANET web management interface | OpenMANET Web 管理界面](https://www.cnx-software.com/wp-content/uploads/2026/09/OpenMANET-Web-UI.webp)
