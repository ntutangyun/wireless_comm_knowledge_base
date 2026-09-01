---
id: 2026-09-01_novelbits-ble-testing-without-phone
date_published: 2026-08-31
date_found: 2026-09-01
type: tutorial
technology: bluetooth
title_en: "Testing BLE firmware without a phone: an AT-command USB dongle exposes the raw advertising/GATT split and DLE numbers that OS-level caching hides"
title_zh: "不靠手机测试 BLE 固件：AT 命令 USB 加密狗暴露出被操作系统缓存掩盖的广播/GATT 名称分离与 DLE 数值"
url: "https://novelbits.io/testing-bluetooth-le-without-a-phone/"
source_quality: full
topics: [BLE, testing, AT-commands, BleuIO, GATT, advertising-data, data-length-extension, CI]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Novel Bits (Mohammad Afaneh) published a tooling tutorial on August 31, 2026 arguing that smartphones are the wrong instrument for BLE firmware regression testing, even though they remain the right instrument for user-facing validation. A phone's BLE stack applies OS-level connection caching, background-scan throttling, and automatic reconnection management, which means a test failure can originate in the phone's stack rather than the device under test — and none of it is scriptable into a build pipeline or produces parseable pass/fail output.

The proposed alternative is a pair of BleuIO USB dongles (Renesas DA14683-based), one acting as the BLE central/scanner and one as the peripheral/advertiser, both driven over USB serial at 115200 baud using an AT-command interface — the same command/response style familiar from cellular modems. The article walks through a concrete session: `AT+GAPSCAN=5` to scan, `AT+ADVSTART` plus raw `AT+ADVDATA` payload construction to advertise, `AT+GAPCONNECT=[0]<address>` to connect, and `AT+GETCONN` to verify a live bidirectional link — each step producing a parseable text response instead of a phone-app screen.

Working the dongles at the raw-packet level surfaces a distinction developers often get wrong even after shipping: the name a phone's scan UI shows is not necessarily the GATT Device Name characteristic. In the demo capture, the advertising packet's AD type `0x09` (Complete/Shortened Local Name) carried "SENSOR" while the scan-response payload and the GATT Device Name characteristic both carried "BleuIO" — two different, legitimately independent name fields that a phone's UI typically collapses into one displayed string. The session also reads out concrete negotiated link parameters that a phone UI never surfaces directly: a connection interval of 24 units (24 × 1.25 ms = 30 ms) and a post-Data-Length-Extension negotiation of tx/rx octets = 251 on both sides.

The article explicitly frames dongle-based testing as a complement to, not a replacement for, phone-based validation — phones remain necessary for real-world user-experience testing, OS-interoperability checks, and anything touching the platform's actual BLE stack behavior. Disclosure carried in the source: Novel Bits is a listed US distributor of the BleuIO dongles it recommends, a commercial relationship the article states but does not quantify.

## Summary (ZH)

Novel Bits（Mohammad Afaneh）于 2026 年 8 月 31 日发布了一篇工具类教程，主张智能手机并不适合用作 BLE 固件回归测试的仪器——尽管手机仍然是面向用户端验证的正确工具。手机的 BLE 协议栈会施加操作系统级的连接缓存、后台扫描限流和自动重连管理，这意味着测试失败可能源自手机协议栈本身而非被测设备；而且这整套流程无法脚本化接入构建流水线，也不会产生可解析的成功/失败结果。

文章提出的替代方案是一对 BleuIO USB 加密狗（基于瑞萨 DA14683），一个充当 BLE 中心端/扫描端，另一个充当外围端/广播端，两者都通过 USB 串口（115200 波特率）以 AT 命令接口驱动——与蜂窝调制解调器常见的命令/响应风格相同。文章给出了一次具体的操作过程：用 `AT+GAPSCAN=5` 扫描，用 `AT+ADVSTART` 加原始载荷构造命令 `AT+ADVDATA` 发起广播，用 `AT+GAPCONNECT=[0]<地址>` 建立连接，再用 `AT+GETCONN` 验证双向链路是否存活——每一步都产生可解析的文本响应，而不是手机 App 里的一屏画面。

在原始数据包层面操作这对加密狗，暴露出一个即便产品已经出货、开发者也常常搞错的区别：手机扫描界面显示的名称，未必就是 GATT Device Name 特征值。在演示抓包中，广播包的 AD 类型 `0x09`（完整/缩短本地名称）携带的是 "SENSOR"，而扫描响应载荷与 GATT Device Name 特征值携带的都是 "BleuIO"——这是两个合法独立、却常被手机界面折叠成同一个显示字符串的名称字段。这次会话还读出了手机界面通常不会直接展示的具体协商链路参数：连接间隔为 24 个单位（24 × 1.25 ms = 30 ms），以及数据长度扩展（DLE）协商后双方的 tx/rx 字节数均为 251。

文章明确将基于加密狗的测试定位为对手机测试的补充而非替代——手机在真实用户体验测试、操作系统互操作性检查，以及任何涉及平台自身 BLE 协议栈行为的场合仍然不可或缺。来源自述的关联披露：Novel Bits 是其推荐的 BleuIO 加密狗的美国经销商之一，文章说明了这层商业关系，但未量化其影响。

## Key technical points (EN)

- **Instrument**: two BleuIO USB dongles (Renesas DA14683-based), one central/scanner, one peripheral/advertiser, driven via AT commands at 115200 baud over USB serial.
- **Why not a phone**: OS-level connection caching, background-scan throttling, and automatic reconnection management can make a phone's own stack the source of a test failure; phone testing also does not integrate into a CI pipeline or emit parseable results.
- **Demonstrated command flow**: `AT+GAPSCAN=5` (scan), `AT+ADVSTART` / `AT+ADVDATA` (advertise with raw payload), `AT+GAPCONNECT=[0]<address>` (connect), `AT+GETCONN` (verify live bidirectional link).
- **Advertising name vs GATT name**: AD type `0x09` in the advertising packet showed "SENSOR"; the scan-response payload and GATT Device Name characteristic both showed "BleuIO" — two independently settable name fields a phone UI typically merges into one label.
- **Observed link parameters**: connection interval negotiated at 24 units = 30 ms (1.25 ms/unit); Data Length Extension negotiated tx/rx = 251 octets on both peripheral and central.
- **Positioning**: framed as complementary to phone-based testing, not a replacement — phones remain required for user-facing UX and platform-stack interoperability testing.
- **Disclosed conflict of interest**: Novel Bits states it is a US distributor of the BleuIO dongles recommended in the article.

## Key technical points (ZH)

- **测试仪器**：两个基于瑞萨 DA14683 的 BleuIO USB 加密狗，一个作中心/扫描端，一个作外围/广播端，通过 USB 串口（115200 波特率）用 AT 命令驱动。
- **为何不用手机**：操作系统级的连接缓存、后台扫描限流与自动重连管理，可能让手机自身协议栈成为测试失败的根源；手机测试也无法接入 CI 流水线，也不产生可解析结果。
- **演示的命令流程**：`AT+GAPSCAN=5`（扫描）、`AT+ADVSTART` / `AT+ADVDATA`（用原始载荷发起广播）、`AT+GAPCONNECT=[0]<地址>`（建立连接）、`AT+GETCONN`（验证双向链路存活）。
- **广播名称与 GATT 名称的区别**：广播包中的 AD 类型 `0x09` 显示为 "SENSOR"；扫描响应载荷与 GATT Device Name 特征值均显示为 "BleuIO"——这是两个可独立设置、却常被手机界面合并显示的名称字段。
- **观测到的链路参数**：协商连接间隔为 24 个单位 = 30 ms（每单位 1.25 ms）；数据长度扩展（DLE）协商后外围端与中心端的 tx/rx 均为 251 字节。
- **定位**：明确定位为对手机测试的补充而非替代——面向用户的体验测试与平台协议栈互操作性测试仍需依赖手机。
- **披露的利益关联**：Novel Bits 自述是文中推荐的 BleuIO 加密狗的美国经销商。

## Why it matters / what's new (EN)

The bt-le bin already holds two novelbits bench-measurement entries (`2026-08-15_novelbits-ble-advertising-energy-four-decisions`, `2026-08-27_novelbits-uart-console-rtt-logging-power`) that quantify what a device *costs*; this piece is a different, complementary genre — a testing-methodology explainer about how to *verify* a device is behaving correctly at all, independent of a phone's opaque BLE stack. The reusable insight is the advertising-name-vs-GATT-name distinction: it is a real, packet-level fact (AD type `0x09` vs the GATT Device Name characteristic, `0x2A00`) that a phone's scan UI collapses into a single displayed string, and a developer relying only on phone-based testing can ship a device with two silently divergent names without ever noticing. The same applies to reading connection interval and Data Length Extension outcomes directly off the wire rather than trusting whatever a phone app infers or fails to surface.

The evidence class here is weaker than the bin's bench-measurement entries — this is a single demo walkthrough with no repeated trials, no comparison against alternative test rigs (e.g., a sniffer or a second reference dongle brand), and a disclosed commercial relationship between the publisher and the recommended product, which the entry records rather than omits. Treat the specific AT-command syntax and numeric readouts as illustrative of the dongle-based testing approach rather than as a benchmark of BleuIO specifically against competing test hardware.

## Why it matters / what's new (ZH)

bt-le 主题箱里已经有两篇 novelbits 的台架实测条目（`2026-08-15_novelbits-ble-advertising-energy-four-decisions`、`2026-08-27_novelbits-uart-console-rtt-logging-power`），量化的是设备"耗费什么"；这篇文章是不同但互补的类型——一篇测试方法论说明，讲的是如何在不依赖手机不透明 BLE 协议栈的前提下，验证设备本身的行为是否正确。其中可迁移的洞见在于广播名称与 GATT 名称的区分：这是一个真实的、包层面的事实（AD 类型 `0x09` 对 GATT Device Name 特征值 `0x2A00`），手机扫描界面会把二者折叠成同一个显示字符串，仅依赖手机测试的开发者可能在完全没有察觉的情况下，出货一台带有两个悄悄不一致名称的设备。直接从链路上读取连接间隔与数据长度扩展协商结果，而不是依赖手机 App 推断或干脆不展示的信息，道理相同。

这篇文章的证据等级弱于本箱的台架实测条目——它是单次演示走查，没有重复试验，也没有与其他测试装置（例如嗅探器或第二款参考加密狗）做对比，并且发布方与其推荐产品之间存在已披露的商业关系，本条目如实记录而非略去这一点。文中具体的 AT 命令语法与读数应被视为对"加密狗式测试思路"的示例说明，而不是 BleuIO 相对其他测试硬件的基准测评。
