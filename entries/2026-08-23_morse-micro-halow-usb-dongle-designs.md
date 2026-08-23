---
id: 2026-08-23_morse-micro-halow-usb-dongle-designs
date_published: 2026-08-20
date_found: 2026-08-23
type: product
technology: wifi
title_en: "Morse Micro announces two Wi-Fi HaLow USB dongle reference designs — including a driverless CDC-NCM design for retrofit client connectivity"
title_zh: "Morse Micro 发布两款 Wi-Fi HaLow USB 加密狗参考设计——含免驱 CDC-NCM 设计，为存量设备加装长距连接"
url: https://www.businesswire.com/news/home/20260820191322/en/Morse-Micro-Announces-Two-Wi-Fi-HaLow-USB-Dongle-Reference-Designs-to-Enable-Long-Range-Edge-AI-Connectivity
source_quality: full
topics: [802.11ah, HaLow, IoT, sub-GHz, products, USB]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)
Morse Micro, the leading Wi-Fi HaLow (IEEE 802.11ah) chipset vendor, announced two USB dongle reference designs on 20 August 2026, both built on its MM8108 SoC, aimed at adding long-range sub-GHz Wi-Fi connectivity to existing devices without board-level integration. The first, MM8108-RD09, is a conventional USB dongle that adds native Wi-Fi HaLow to routers, access points, PCs and other hosts running Windows, Linux or macOS via installed drivers. The second, MM8108-RD17, is the more architecturally interesting one: a driverless dongle that enumerates as a standard CDC-NCM (USB Ethernet) interface, so the host device needs no HaLow-specific driver at all — any device that can talk to a USB Ethernet adapter (industrial computers, robotics, point-of-sale terminals, tablets, smartphones) gains HaLow connectivity, with the 802.11ah MAC/PHY fully contained in the dongle.

Morse Micro frames the designs as "long-range Edge AI connectivity" enablers — HaLow networks provide native IP connectivity at ranges up to one kilometre, which suits distributed camera, robot and sensor fleets that need more reach than 2.4 GHz Wi-Fi and more bandwidth than LoRa-class LPWAN.

The retrofit angle matters commercially: HaLow adoption has so far been gated on device makers designing in a HaLow radio from scratch. A driverless USB path collapses that barrier for the long tail of existing products — and the same week, Amazon's Blink division shipped proprietary 802.11ah cameras at retail (see 2026-08-23_blink-xr-halow-extended-range-cameras), giving the sub-GHz Wi-Fi ecosystem both an OEM-integration proof point and a retrofit path in a single news cycle.

## Summary (ZH)
领先的 Wi-Fi HaLow（IEEE 802.11ah）芯片厂商 Morse Micro 于 2026 年 8 月 20 日发布两款基于其 MM8108 SoC 的 USB 加密狗参考设计，旨在无需板级集成即可为存量设备加装长距亚 GHz Wi-Fi 连接。第一款 MM8108-RD09 是常规 USB 加密狗，通过安装驱动为运行 Windows、Linux 或 macOS 的路由器、接入点、PC 等主机加装原生 Wi-Fi HaLow。第二款 MM8108-RD17 在架构上更有意思：免驱设计，枚举为标准 CDC-NCM（USB 以太网）接口，主机完全不需要 HaLow 专用驱动——任何能与 USB 以太网适配器通信的设备（工业电脑、机器人、POS 终端、平板、智能手机）都能获得 HaLow 连接，802.11ah 的 MAC/PHY 全部封装在加密狗内。

Morse Micro 将这两款设计定位为"长距边缘 AI 连接"使能器——HaLow 网络在最远一公里距离上提供原生 IP 连接，适合需要比 2.4 GHz Wi-Fi 更远覆盖、又比 LoRa 类 LPWAN 更高带宽的分布式摄像头、机器人与传感器集群。

加装路径的商业意义重大：此前 HaLow 的普及一直受制于设备厂商必须从头设计集成 HaLow 射频。免驱 USB 路径为存量产品的长尾扫清了这一障碍——同一周，亚马逊 Blink 部门在零售渠道出货了私有 802.11ah 摄像头（见 2026-08-23_blink-xr-halow-extended-range-cameras），让亚 GHz Wi-Fi 生态在一个新闻周期内同时获得了 OEM 集成实证和加装路径。

## Key technical points (EN)
- Both reference designs are based on the Morse Micro MM8108 Wi-Fi HaLow SoC; HaLow provides native IP connectivity at ranges up to 1 km in the sub-GHz unlicensed band.
- MM8108-RD09: driver-based USB dongle for routers, APs, PCs and other hosts on Windows, Linux, macOS — the AP-side / infrastructure retrofit path.
- MM8108-RD17: driverless USB dongle that enumerates as a standard CDC-NCM Ethernet interface — no host driver required; targets industrial computers, robotics, POS terminals, tablets and smartphones. The 802.11ah stack lives entirely in the dongle.
- Positioning: "long-range Edge AI connectivity" — distributed camera/robot/sensor fleets needing reach beyond 2.4 GHz Wi-Fi with more throughput than LPWAN.
- Announced 20 August 2026 (Business Wire); follows Morse Micro's Design Partner Program launch at Embedded World 2026 (March).

## Key technical points (ZH)
- 两款参考设计均基于 Morse Micro MM8108 Wi-Fi HaLow SoC；HaLow 在亚 GHz 免许可频段提供最远 1 公里的原生 IP 连接。
- MM8108-RD09：带驱动的 USB 加密狗，面向 Windows、Linux、macOS 主机（路由器、AP、PC 等）——即基础设施侧/AP 侧加装路径。
- MM8108-RD17：免驱 USB 加密狗，枚举为标准 CDC-NCM 以太网接口——主机无需任何驱动；面向工业电脑、机器人、POS 终端、平板与智能手机。802.11ah 协议栈完全驻留在加密狗内。
- 定位："长距边缘 AI 连接"——覆盖需求超出 2.4 GHz Wi-Fi、吞吐需求高于 LPWAN 的分布式摄像头/机器人/传感器集群。
- 2026 年 8 月 20 日发布（Business Wire）；此前 Morse Micro 已于 2026 年 3 月 Embedded World 启动设计伙伴计划。

## Why it matters / what's new (EN)
The KB's HaLow thread (2026-05-22_arxiv-halow-field-characterization) has documented what 802.11ah links can do; this entry documents how the ecosystem is attacking its adoption bottleneck. The driverless CDC-NCM design is the notable mechanism: by presenting HaLow as generic USB Ethernet, the radio protocol becomes invisible to the host OS, which sidesteps the driver-certification and OS-support matrix that historically slows new Wi-Fi PHY adoption on the client side. Combined with the Amazon Blink shipment in the same week, the sub-GHz Wi-Fi story has shifted from research characterization to a two-front commercial push (OEM design-in at Amazon scale, plus USB retrofit for everything else).

## Why it matters / what's new (ZH)
本知识库的 HaLow 线索（2026-05-22_arxiv-halow-field-characterization）此前记录的是 802.11ah 链路能做什么；本条记录的是生态如何攻克其普及瓶颈。免驱 CDC-NCM 设计是值得注意的机制：把 HaLow 呈现为通用 USB 以太网后，射频协议对主机操作系统完全不可见，从而绕开了历史上拖慢新 Wi-Fi PHY 在客户端普及的驱动认证与操作系统适配矩阵。叠加同周亚马逊 Blink 的出货，亚 GHz Wi-Fi 的叙事已从研究实测转入双线商业推进（亚马逊量级的 OEM 集成 + 面向其余一切设备的 USB 加装）。
