---
id: 2026-08-09_bluetooth-sig-ip-link-ipv6-over-ble
date_published: 2026-08-09
date_found: 2026-08-09
type: bluetooth-spec
technology: bluetooth
title_en: "Bluetooth SIG 'IP Link' project: IPv6 over Bluetooth LE via 6LoWPAN, targeting fall 2026 adoption"
title_zh: "蓝牙技术联盟 IP Link 项目：基于 6LoWPAN 的 IPv6 over BLE，目标 2026 年秋季通过"
url: "https://www.bluetooth.com/specifications/specifications-in-development/"
source_quality: snippet_only
topics: [BLE, IPv6, 6LoWPAN, IP-Link, IoT]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

The Bluetooth SIG's specifications-in-development page now lists **IP Link**, a specification project defining native transport of IPv6 packets over Bluetooth LE. The protocol provides a 6LoWPAN adaptation-layer interface (the IETF's compression scheme that squeezes IPv6 headers down to fit constrained radio links, originally built for 802.15.4) and supports both unicast and multicast traffic, carried over either connection-oriented or connectionless BLE bearers. The goal is direct IP-based communication between Bluetooth devices and internet servers — no proprietary gateway translation layer in between.

According to the SIG page, the project has recently completed interoperability testing, a draft specification is publicly available, and adoption is targeted for **fall 2026**. That places IP Link alongside High Data Throughput (~8 Mbps LE) and the Higher Frequency Bands project (BLE in 5/6 GHz) as the third major pillar of the current BLE roadmap — this one aimed squarely at IoT integration rather than raw speed or spectrum.

An earlier IPv6-over-BLE attempt exists: RFC 7668 (IPv6 over BLE using 6LoWPAN, 2015) and its mesh extension RFC 9159 saw limited adoption, partly because they predated modern BLE features like Extended Advertising and Periodic Advertising with Responses. A SIG-native specification with connectionless bearer support and formal interoperability testing is a materially different proposition: it makes IP reachability a certifiable Bluetooth feature rather than an IETF overlay few stacks shipped.

## Summary (ZH)

蓝牙技术联盟（Bluetooth SIG）的"开发中规范"页面现已列出 **IP Link** 项目——定义在 Bluetooth LE 上原生传输 IPv6 数据包的规范。该协议提供 6LoWPAN 适配层接口（6LoWPAN 是 IETF 的头部压缩方案，可将 IPv6 头压缩到受限无线链路能承载的尺寸，最初为 802.15.4 设计），支持单播与多播流量，可承载于面向连接或无连接的 BLE 承载之上。目标是让蓝牙设备与互联网服务器直接进行 IP 通信——中间不再需要私有网关做协议翻译。

据 SIG 页面，该项目近期已完成互操作性测试，规范草案已公开，目标 **2026 年秋季**通过（adoption）。这使 IP Link 与高数据吞吐（HDT，约 8 Mbps LE）和更高频段项目（BLE 进入 5/6 GHz）并列为当前 BLE 路线图的第三大支柱——这一项瞄准的是 IoT 集成，而非速率或频谱。

更早的 IPv6 over BLE 尝试已有先例：RFC 7668（2015 年，基于 6LoWPAN 的 IPv6 over BLE）及其网状网扩展 RFC 9159 采用有限，部分原因是它们早于扩展广播（Extended Advertising）、带响应周期广播（PAwR）等现代 BLE 特性。由 SIG 原生制定、带无连接承载支持并经正式互操作测试的规范则完全不同：它把 IP 可达性变成可认证的蓝牙特性，而非少有协议栈实现的 IETF 叠加层。

## Key technical points (EN)

- IPv6 packet transport over BLE with a 6LoWPAN adaptation-layer interface (header compression for constrained links).
- Supports unicast AND multicast traffic — multicast over BLE implies use of broadcast/connectionless bearers, a capability RFC 7668 lacked.
- Both connection-oriented and connectionless bearers are in scope.
- Interoperability testing recently completed; draft specification publicly available for review.
- Target adoption: fall 2026 — the nearest concrete milestone on the SIG's current spec-development roadmap.
- Sits alongside HDT (8 Mbps LE) and Higher Frequency Bands (5/6 GHz BLE) in the SIG's active project portfolio.

## Key technical points (ZH)

- 通过 6LoWPAN 适配层接口（面向受限链路的头部压缩）在 BLE 上传输 IPv6 数据包。
- 同时支持单播与多播流量——BLE 上的多播意味着使用广播/无连接承载，这是 RFC 7668 所不具备的能力。
- 面向连接与无连接承载均在范围内。
- 互操作性测试近期已完成；规范草案已公开供审阅。
- 目标通过时间：2026 年秋季——SIG 当前规范开发路线图上最近的具体里程碑。
- 与 HDT（8 Mbps LE）和更高频段项目（5/6 GHz BLE）并列于 SIG 的活跃项目组合。

## Why it matters / what's new (EN)

The KB's Bluetooth thread has tracked the SIG's three-front expansion — speed (2026-08-05_bluetooth-sig-hdt-draft-spec-public-review), spectrum (2026-07-10_wfa-bluetooth-sig-6ghz-coexistence), and ranging (2026-07-11_bluetooth-core-63-release) — but this is the first entry on the *networking* front: making BLE devices first-class IP endpoints. If adopted on schedule this fall, IP Link would let sensor-class BLE devices speak directly to cloud services through any IP-capable border router, colliding head-on with Thread's core value proposition (Thread is 6LoWPAN over 802.15.4; IP Link is 6LoWPAN over BLE). For the Matter ecosystem — which today uses BLE only for commissioning and hands off to Thread/Wi-Fi for operation — a native BLE IP bearer could reshape the transport calculus for low-bandwidth accessories.

## Why it matters / what's new (ZH)

本 KB 的蓝牙主线此前跟踪了 SIG 的三线扩张——速率（2026-08-05_bluetooth-sig-hdt-draft-spec-public-review）、频谱（2026-07-10_wfa-bluetooth-sig-6ghz-coexistence）、测距（2026-07-11_bluetooth-core-63-release）——而本条目是*组网*战线的第一条：让 BLE 设备成为一等 IP 端点。若如期于今秋通过，IP Link 将使传感器级 BLE 设备可经任何具备 IP 能力的边界路由器直接与云服务通信，与 Thread 的核心价值主张正面相撞（Thread 是 802.15.4 上的 6LoWPAN；IP Link 是 BLE 上的 6LoWPAN）。对 Matter 生态而言——目前 BLE 仅用于配网，运行期交给 Thread/Wi-Fi——原生 BLE IP 承载可能改变低带宽配件的传输选型。
