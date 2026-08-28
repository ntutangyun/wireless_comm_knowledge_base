---
id: 2026-08-28_oneconnect-smart-home-unified-interconnect-nearlink
date_published: 2026-03-13
date_found: 2026-08-28
type: industry-news
technology: nearlink
title_en: "OneConnect《智家统一互联标准》: China's cross-brand smart-home interconnect standard names NearLink as its hardware bus (GIIC + Haier / Midea / Hisense / TCL / Huawei / HiSilicon, AWE 2026)"
title_zh: "《智家统一互联标准》（OneConnect）：中国跨品牌智能家居统一互联标准把星闪定位为硬件总线（GIIC 联合海尔/美的/海信/TCL/华为/上海海思，AWE 2026 发布）"
url: "https://www.ithome.com/0/928/800.htm"
source_quality: full
topics: [NearLink, SLE, SLE-Mesh, smart-home, OpenHarmony, interoperability, Matter, soft-bus, WS63E]
topic_primary: nearlink-sle
topics_secondary: [nearlink-coexistence]
novelty_score: 3
---

## Summary (EN)

On 13 March 2026, at AWE 2026 (the China Home Appliance & Consumer Electronics Expo in Shanghai), the Smart Home Working Committee of the GIIC Global Smart IoT Alliance (全球智慧物联网联盟) and the China Household Electrical Appliance Research Institute (中国家用电器研究院) released 《智家统一互联标准》 — the Smart Home Unified Interconnection Standard, branded **OneConnect** — jointly with Haier, Midea, Hisense, TCL, Opple and Bull on the appliance side and Huawei, Shanghai HiSilicon and China Mobile on the technology side. The Chinese trade press frames it as a "Chinese Matter" (中国版 Matter): a cross-brand specification for unified device discovery, network provisioning, access authentication and control interfaces, so that appliances from rival ecosystems can be enrolled and driven from one app or hub. It is presented as building on the 2025 《鸿蒙生态设备统一互联标准 2.0》 rather than replacing it.

The architecture is described as three parts: a **software bus** (open-source HarmonyOS / OpenHarmony's distributed soft bus acting as the home hub and scheduler), a **hardware bus**, and a **unified data model** that lets heterogeneous device classes "speak one language". NearLink (星闪) is named in the hardware-bus layer as one of the self-developed Chinese protocols carried by the standard, cited for low latency, interference resistance and mesh networking; the connectivity set the standard admits is **Wi-Fi, SLE, SLE Mesh, BLE, BLE Mesh and Ethernet**. Design points reported include local-first operation (devices self-discover, self-organise and are controlled on the LAN without a cloud dependency), millisecond-level response, one-click password-free provisioning from a HarmonyOS phone / router gateway / small-screen hub, and tiered authentication using certificates or PSK. Shanghai HiSilicon said it would open IoT-device and central-gateway unified-interconnection components on its **HiSpark** developer community to accelerate adoption; an April 2026 follow-up piece reports first-generation OneConnect products under Haier's Tongpai (统帅) brand.

On the silicon side the same coverage points at HiSilicon's **WS63E** module — the NearLink part already known in this KB from the Xiaohong AI OpenHarmony/RISC-V board entry (2026-08-17) — as a combined communication **and radar-sensing** device, credited with detecting human presence, position and motion within roughly 6 m. That sensing role has a precedent this KB had not recorded: HiSilicon and Midea's COLMO announced the first NearLink radar-sensing refrigerator (TURING 2.0) in October 2024, using a fused short-range-comms + radar module for wake-on-approach and hands-free door control.

## Summary (ZH)

2026 年 3 月 13 日，在上海 AWE 2026（中国家电及消费电子博览会）上，GIIC 全球智慧物联网联盟智慧家庭工作委员会与中国家用电器研究院联合发布《智家统一互联标准》（品牌名 **OneConnect**），家电侧参与方包括海尔、美的、海信、TCL、欧普、公牛，技术侧包括华为、上海海思与中国移动。中文行业媒体将其定位为"中国版 Matter"：一套跨品牌的统一发现、配网、接入认证与控制接口规范，使不同生态的家电可以在同一 App 或中枢下纳管与控制。标准被表述为在 2025 年《鸿蒙生态设备统一互联标准 2.0》基础上的延续与扩展，而非取代。

架构分三层：**软总线**（开源鸿蒙分布式软总线作为智家中枢，统一调度管理设备）、**硬件总线**、以及让异构品类"说同一种语言"的**统一数据模型**。星闪被明确写入硬件总线层，作为标准承载的自主创新协议之一，理由是低时延、强抗干扰与 Mesh 组网能力；标准兼容的连接方式为 **Wi-Fi、SLE、SLE Mesh、BLE、BLE Mesh 与以太网**。已披露的设计要点包括：本地优先（设备在局域网内自发现、自组网、自控制，不依赖云端）、毫秒级响应、通过鸿蒙手机/路由网关/小屏中枢一键免密配网、以及基于证书或 PSK 的分级认证。上海海思表示将在 **HiSpark** 开发者社区开放物联网设备与中枢网关统一互联组件以加速产业落地；2026 年 4 月的后续报道称海尔统帅品牌已推出第一代 OneConnect 产品。

芯片侧，同批报道指向海思 **WS63E** 模组——本知识库在 2026-08-17 小红 AI 开源鸿蒙/RISC-V 板条目中已记录的星闪器件——兼具通信与**雷达感知**能力，可在约 6 米范围内感知人体存在、位置与运动状态。该感知用法有一段本库此前未收录的前史：2024 年 10 月，海思与美的旗下 COLMO 发布首款星闪雷达感知冰箱 TURING 2.0，采用短距通信 + 雷达感知融合模组实现靠近自动唤醒与免手开关门。

## Key technical points (EN)

- Release: 2026-03-13, AWE 2026 (Shanghai). Publishers: GIIC Global Smart IoT Alliance Smart Home Working Committee + China Household Electrical Appliance Research Institute. Brand name: OneConnect.
- Participants named: Haier, Midea, Hisense, TCL, Opple, Bull (appliances); Huawei, Shanghai HiSilicon, China Mobile (technology).
- Three-layer architecture: software bus (OpenHarmony distributed soft bus as hub/scheduler) + hardware bus + unified data model for cross-class semantics.
- Admitted link technologies: **Wi-Fi, SLE, SLE Mesh, BLE, BLE Mesh, Ethernet** — NearLink enters as one member of a multi-radio hardware bus, not as an exclusive PHY.
- **SLE Mesh** appears here for the first time in this KB as a deployment-facing NearLink mode (the KB's existing SLE material — GB/T 46803, the ACM TIoT SLE-vs-BLE measurement — covers point-to-point SLE only).
- Behavioural requirements reported: LAN-local self-discovery / self-networking / self-control without cloud; millisecond-level response; one-click password-free provisioning from HarmonyOS phone, router gateway or small-screen hub; certificate- or PSK-based tiered authentication; unified physical model for local scene automation; AI-agent hooks (voice / visual / multimodal).
- Silicon: HiSilicon WS63E named as a combined NearLink communication + radar-sensing module, ~6 m human presence / position / motion sensing. Unified-interconnect components for devices and central gateways to be opened on HiSpark.
- Lineage / landings: builds on 《鸿蒙生态设备统一互联标准 2.0》 (2025); first-gen OneConnect products reported under Haier's Tongpai (统帅) brand (Apr 2026 coverage).
- Background precedent (2024-10, not previously in this KB): COLMO (Midea) × HiSilicon TURING 2.0, first NearLink radar-sensing refrigerator — fused comms + radar module, wake-on-approach, auto door close after ~30 s with nobody present.

## Key technical points (ZH)

- 发布：2026-03-13，AWE 2026（上海）。发布方：GIIC 全球智慧物联网联盟智慧家庭工作委员会 + 中国家用电器研究院。品牌名：OneConnect。
- 参与方：海尔、美的、海信、TCL、欧普、公牛（家电）；华为、上海海思、中国移动（技术）。
- 三层架构：软总线（开源鸿蒙分布式软总线作中枢/调度）+ 硬件总线 + 跨品类语义的统一数据模型。
- 兼容链路技术：**Wi-Fi、SLE、SLE Mesh、BLE、BLE Mesh、以太网**——星闪是多制式硬件总线中的一员，而非独占 PHY。
- **SLE Mesh** 首次在本库中作为面向落地的星闪模式出现（本库既有 SLE 材料——GB/T 46803、ACM TIoT SLE-vs-BLE 实测——仅覆盖点对点 SLE）。
- 已报道的行为要求：局域网内自发现/自组网/自控制、不依赖云端；毫秒级响应；鸿蒙手机、路由网关或小屏中枢一键免密配网；证书或 PSK 分级认证；统一物模型支撑本地场景自动化；AI Agent 接口（语音/视觉/多模态）。
- 芯片：海思 WS63E 被点名为通信 + 雷达感知一体模组，约 6 米内感知人体存在、位置与运动。设备侧与中枢网关的统一互联组件将在 HiSpark 社区开放。
- 沿革与落地：基于 2025 年《鸿蒙生态设备统一互联标准 2.0》；2026 年 4 月报道称海尔统帅品牌已推出第一代 OneConnect 产品。
- 背景前史（2024-10，本库此前未收录）：美的 COLMO × 海思 TURING 2.0，首款星闪雷达感知冰箱——通信 + 雷达融合模组、靠近自动唤醒、无人超 30 秒自动关门。

## Why it matters / what's new (EN)

This is the first smart-home *interconnect standard* entry in this KB's NearLink track, and it changes how NearLink's home-appliance story should be read. Everything the KB holds on NearLink adoption so far is either device-side (FreeBuds / MatePad / stylus E2 audio, the Edifier Comfo Clip Q2, the Xiaohong AI board), automotive (car keys, the ISAC V2G pilot), or standards-track (GB/T 46803, the GB SLB family in approval, the iSLA certification scheme). OneConnect is a different kind of object: an industry-consortium interoperability layer *above* the radio, in which NearLink is admitted as one of six link technologies alongside Wi-Fi and BLE. That is simultaneously a validation (China's largest appliance makers wrote NearLink into a cross-brand standard) and a ceiling (the standard is protocol-plural, so a NearLink-capable appliance gains no exclusivity — it must interwork through the same unified data model as a BLE Mesh one). The interesting technical residue is **SLE Mesh**: the KB's SLE coverage has been point-to-point, and a mesh profile is exactly the piece that a whole-home deployment needs and that the open-sourced NearLink stack (2026-07 code drop, still "SLE low-power access only" per the AtomGit README) has not yet exposed.

Ingest rationale and caveats: this is a deliberate **backfill** — the release is 2026-03-13, about five and a half months before ingest, so inside the twelve-month freshness window but well outside the daily-news band. It was missed at the time and a grep of `entries/` for 统一互联 / OneConnect / GIIC / SLE Mesh / 海尔 / 美的 returns zero NearLink hits, so the bin genuinely has no coverage. All facts here come from Chinese trade press (ITHome, ifeng, Tencent News, iot101) — **the standard text itself is not public**, so layer names, the admitted-link list and the millisecond/6 m figures are reported claims, not specification readouts, and no certification programme, version number or conformance-test regime has been published. Watch items: publication or member-only release of the OneConnect specification document; the HiSpark unified-interconnect components actually appearing; any NearLink-specific profile (especially SLE Mesh) inside it; whether the iSLA certification scheme (2026-08-17 entry) and OneConnect conformance converge or fork; and shipped OneConnect appliances beyond the Haier Tongpai first generation.

## Why it matters / what's new (ZH)

这是本知识库星闪条线中第一条**智能家居互联标准**条目，并改变了星闪家电叙事的读法。本库现有的星闪落地材料要么是设备侧（FreeBuds/MatePad/手写笔 E2 音频、漫步者 Comfo Clip Q2、小红 AI 开发板），要么是车载（数字车钥匙、通感一体 V2G 试点），要么是标准轨（GB/T 46803、报批中的 GB SLB 标准族、iSLA 认证体系）。OneConnect 属于另一类对象：位于射频**之上**的产业联盟互操作层，星闪在其中是与 Wi-Fi、BLE 并列的六种链路技术之一。这既是背书（中国最大的家电厂商把星闪写进跨品牌标准），也是天花板（标准是多协议的，支持星闪的家电并不因此获得独占性——它仍需通过与 BLE Mesh 设备相同的统一数据模型互通）。真正值得留意的技术残留是 **SLE Mesh**：本库的 SLE 覆盖一直是点对点的，而 Mesh 规格恰恰是全屋部署所必需、且开源星闪协议栈（2026-07 代码放出，AtomGit README 至今仍写"仅支持 SLE 低功耗接入模式"）尚未开放的部分。

收录理由与注意事项：这是一次有意的**补录**——发布日期为 2026-03-13，距收录约五个半月，处于十二个月新鲜度窗口之内，但已远离日常新闻带。当时遗漏，且对 `entries/` 检索 统一互联 / OneConnect / GIIC / SLE Mesh / 海尔 / 美的 返回零个星闪命中，确认该分箱确无覆盖。本条全部事实来自中文行业媒体（IT之家、凤凰科技、腾讯新闻、iot101）——**标准文本本身未公开**，因此分层命名、兼容链路清单以及毫秒级/6 米等数据均为转述主张而非规范读数，亦未公布认证计划、版本号或一致性测试机制。关注点：OneConnect 规范文本的公开或会员发布；HiSpark 统一互联组件是否真正上线；其中是否包含星闪专属 profile（尤其 SLE Mesh）；iSLA 认证体系（2026-08-17 条目）与 OneConnect 一致性认证是收敛还是分叉；以及海尔统帅第一代之外的量产 OneConnect 家电。
