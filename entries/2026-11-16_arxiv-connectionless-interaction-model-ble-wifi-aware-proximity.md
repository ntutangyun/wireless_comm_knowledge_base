---
id: 2026-11-16_arxiv-connectionless-interaction-model-ble-wifi-aware-proximity
date_published: 2026-11-12
date_found: 2026-11-16
type: academic-paper
technology: bluetooth
title_en: "A Connectionless Interaction Model for Network Spatial Proximity Services"
title_zh: "面向网络空间邻近服务的无连接交互模型"
url: "https://arxiv.org/abs/2611.16737"
source_quality: full
topics: [BLE, advertising, PAwR, Wi-Fi-Aware, connectionless, proximity, Android, iOS]
topic_primary: bt-le
topics_secondary: [bt-mesh, bt-location]
novelty_score: 2
---

## Summary (EN)

This arXiv preprint (Artem Makarov and Dmitry Namiot, Lomonosov Moscow State University; submitted Nov 12, 2026; manuscript dated Nov 10, 2026) proposes a technology-independent model for services in which the reception of a nearby node's identification or discovery frame both confirms proximity and delivers content. The paper notes that current Bluetooth and Wi-Fi specifications already extend one-way announcements with responses, addressed messages, scheduled group exchange and relaying, all without a connection: BLE 5.0 added extended and periodic advertising, BLE 5.4 added Periodic Advertising with Responses (PAwR) and Encrypted Advertising Data (EAD), and Wi-Fi Aware 4.0 adds unsynchronized service discovery (USD). The authors state they found no service-level model describing this kind of interaction.

The model has six roles (announcer, observer, responder, coordinator, relay node and bridge, e.g. a Mesh proxy), with the proximity message as the unit of interaction, twelve pattern properties grouped into four groups (structure, content, identity and proximity, execution conditions), and six interaction patterns: announcement, mutual announcement, query-response, addressed exchange, scheduled group exchange, and relay. An exit rule says when a service should leave the connectionless pattern and open a connection-based channel (payload no longer fits, losses cannot be covered by repetition, or a protected session is needed). The model refines the interaction primitives of the authors' earlier "proximity core" and keeps their earlier announcement-only model as the announcement pattern.

The paper then analyses implementation on Android 17 (API 37) and iOS 27 as of November 2026. It describes exposure layers (specification, controller, OS stack, public API, execution conditions) and notes that BLE 5.4 PAwR and EAD are used in embedded controllers such as electronic shelf labels but are not exposed to applications by Android or iOS; Android exposes transmission of periodic advertising but not reception. Five implementation strategies are defined (native, substitution, composition, bridge, step-up). First-order estimates give per-frame payloads from about 19 bytes (iOS local name) to 1024 bytes (USD-based Wi-Fi Direct discovery), and the frames needed to deliver 1 KB with a 2-byte fragment header: 41 for legacy advertising (27-byte payload), 61 for the iOS local name, 9 for iOS reception of extended advertising, 5 for extended advertising and Wi-Fi Aware, and 1 for USD. The authors report that between phones every pattern has an implementation strategy, and only addressed exchange between iOS devices in the background needs a step-up to a connection. Twelve existing services and systems (for example a classroom response system on PAwR, electronic shelf labels, Matter commissioning, exposure notifications, Bluetooth Mesh advertising bearer) are retrospectively described with the model; the paper's own scope statement says the validation is retrospective and based on documentation and published measurements, not new device measurements.

## Summary (ZH)

这篇 arXiv 预印本（Artem Makarov、Dmitry Namiot，莫斯科国立罗蒙诺索夫大学；2026 年 11 月 12 日提交，手稿日期为 11 月 10 日）提出一个与具体无线技术无关的模型，用于这样一类服务：接收附近节点的标识帧或发现帧，既能确认邻近关系，也同时送达内容。文中指出，现有蓝牙和 Wi-Fi 规范已在单向公告之外支持响应、定向消息、定时分组交换和中继，且都不需要建立连接：BLE 5.0 增加了扩展广播和周期广播，BLE 5.4 增加了带响应的周期广播（PAwR）和加密广播数据（EAD），Wi-Fi Aware 4.0 增加了非同步服务发现（USD）。作者表示未找到描述此类交互的服务级模型。

该模型包含六种角色（公告者、观察者、响应者、协调者、中继节点和网桥，例如 Mesh 代理），并以邻近消息作为交互单位、分为四组的十二项模式属性（结构、内容、身份与邻近、执行条件），以及六种交互模式：公告、相互公告、查询-响应、定向交换、定时分组交换和中继。退出规则规定何时离开无连接模式并转入面向连接的信道（载荷放不下、丢失无法靠重复发送弥补，或需要受保护的会话）。该模型细化了作者此前"邻近核心"的交互原语，并把此前仅含公告的模型作为其中的公告模式。

随后论文分析了在 Android 17（API 37）和 iOS 27（截至 2026 年 11 月）上的实现。文中划分了暴露层次（规范、控制器、操作系统协议栈、公开 API、执行条件），指出 BLE 5.4 PAwR 和 EAD 已用于电子货架标签等嵌入式控制器，但 Android 和 iOS 均未向应用开放；Android 开放周期广播的发送，但不开放接收。文中定义了五种实现策略（原生、替代、组合、桥接、升级为连接）。一阶估算给出单帧载荷从约 19 字节（iOS 本地名称）到 1024 字节（基于 USD 的 Wi-Fi Direct 发现）；在 2 字节分片头条件下，递送 1 KB 所需帧数为：传统广播（载荷 27 字节）41 帧，iOS 本地名称 61 帧，iOS 接收扩展广播 9 帧，扩展广播和 Wi-Fi Aware 5 帧，USD 1 帧。作者报告，在手机之间每种模式都有可行的实现策略，只有 iOS 设备之间在后台的定向交换需要升级为连接。论文还用该模型回溯性地描述了十二个既有服务和系统（如基于 PAwR 的课堂应答系统、电子货架标签、Matter 配网、暴露通知、蓝牙 Mesh 广播承载）；论文自己的范围说明指出，验证是回溯性的，依据文档和已发表的测量数据，而非新的设备实测。

## Key technical points (EN)

- **Reception as proximity plus content**: a received identification or discovery frame (BLE advertising packet, Wi-Fi Aware service discovery frame, Wi-Fi Direct service record, SSID) carries a short message and, by being received, shows the sender is within radio range.
- **Six patterns, each changing one property of announcement**: mutual announcement (N:N), query-response (on-request feedback), addressed exchange (1:1 with optional acknowledgment), scheduled group exchange (synchronised subevents with reply slots, the PAwR/ESL case), relay (TTL and duplicate check, the Bluetooth Mesh advertising-bearer case).
- **Payload classes**: identifier up to about 32 bytes, short message up to about 255 bytes, small content up to about 2 KB (needs fragmentation).
- **Cited BLE figures**: legacy advertising 31 bytes per packet; extended advertising up to 1650 bytes chained; PAwR up to 128 subevents per interval and up to 255 response slots (as stated in the paper).
- **Platform gap**: PAwR and EAD are not exposed to apps on Android or iOS; Android limits an app to five scan starts in 30 seconds by default; an iOS app in the background does not announce its local name.
- **Fragmentation arithmetic**: n = S / (p - h) frames; collision survival q = exp(-2N·λ·d_p) from a cited collision model, with 376 us for a 47-byte legacy frame.
- **Exit rule** marks the boundary of the model rather than a failure of a pattern.
- **Stated scope**: model and analysis; platform analysis from documentation and platform sources; future work includes a capability exposure model, identifier/message security, and reference drivers with on-device measurements.

## Key technical points (ZH)

- **接收即邻近加内容**：接收到标识帧或发现帧（BLE 广播包、Wi-Fi Aware 服务发现帧、Wi-Fi Direct 服务记录、SSID）即可获得短消息，同时说明发送方处于无线电范围内。
- **六种模式，各自改变公告模式的一项属性**：相互公告（N:N）、查询-响应（按需反馈）、定向交换（1:1，可选确认）、定时分组交换（同步子事件加回复时隙，即 PAwR/ESL 场景）、中继（TTL 加重复检查，即蓝牙 Mesh 广播承载场景）。
- **载荷等级**：标识符约 32 字节以内，短消息约 255 字节以内，小内容约 2 KB 以内（需要分片）。
- **文中引用的 BLE 数据**：传统广播每包 31 字节；扩展广播链式最多 1650 字节；PAwR 每个间隔最多 128 个子事件、最多 255 个响应时隙（按论文所述）。
- **平台缺口**：Android 和 iOS 均未向应用开放 PAwR 和 EAD；Android 默认限制应用 30 秒内最多启动五次扫描；iOS 应用在后台不会广播本地名称。
- **分片计算**：n = S / (p - h) 帧；碰撞存活概率 q = exp(-2N·λ·d_p)，来自所引用的碰撞模型，47 字节传统帧为 376 微秒。
- **退出规则**标示的是模型的边界，而不是某个模式的失败。
- **作者声明的范围**：模型与分析；平台分析依据文档和平台源码；后续工作包括能力暴露模型、标识符与消息安全，以及参考驱动和设备实测。

## Why it matters / what's new (EN)

The KB's Bluetooth entries mostly cover individual features (advertising energy, Channel Sounding, security attacks). This paper is a vocabulary for what a developer can do with BLE and Wi-Fi Aware discovery frames without a connection, and a table of which of those mechanisms the two big phone platforms let an app reach. The practical reading is the exposure-layer finding: features such as PAwR and EAD exist in the specification and in embedded controllers, but app-level use on phones depends on public API exposure and background limits. The payload and frame-count figures are first-order estimates from documented limits, not new measurements, and the validation is retrospective. The paper also covers Wi-Fi Aware, Wi-Fi Direct and SSID-based mechanisms, so it is a cross-technology item filed under Bluetooth because BLE advertising, PAwR and the Mesh advertising bearer carry most of the examples.

## Why it matters / what's new (ZH)

知识库中的蓝牙条目大多讲单项特性（广播能耗、信道探测、安全攻击）。本文提供了一套词汇，用来描述开发者不建立连接、仅靠 BLE 和 Wi-Fi Aware 发现帧能做什么，并列出两大手机平台允许应用触达其中哪些机制。其实用结论是"暴露层次"：PAwR、EAD 等特性存在于规范和嵌入式控制器中，但在手机上能否被应用使用，取决于公开 API 是否开放以及后台限制。载荷和帧数数据是基于文档限制的一阶估算，并非新的实测，验证方式也是回溯性的。论文同时涉及 Wi-Fi Aware、Wi-Fi Direct 和基于 SSID 的机制，因此属于跨技术条目；因 BLE 广播、PAwR 和 Mesh 广播承载占据了大部分示例，归入蓝牙。

## Images

No figures are embedded; see the paper at https://arxiv.org/abs/2611.16737 for its figures.
