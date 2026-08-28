---
id: 2026-08-28_bluetooth-nlc-hvac-integration-mesh-energy-savings
date_published: 2026-08-27
date_found: 2026-08-28
type: industry-news
technology: bluetooth
title_en: "Bluetooth SIG puts deployment numbers on the NLC-to-HVAC mesh stack: 69% and 74% additional lighting-energy reductions on top of LED retrofits, via occupancy data backhauled over Bluetooth mesh through the HVAC Integration NLC Profile"
title_zh: "蓝牙技术联盟为 NLC 到 HVAC 的 mesh 栈给出了落地数字：在 LED 改造已有节能之上再降 69% 与 74% 的照明能耗，其机制是通过 HVAC Integration NLC Profile 把占用数据经蓝牙 mesh 回传"
url: "https://www.bluetooth.com/blog/bluetooth-networked-lighting-control-and-hvac-integration-are-advancing-sustainability-in-commercial-spaces/"
source_quality: full
topics: [Bluetooth-mesh, NLC, networked-lighting-control, HVAC, DALI-gateway, occupancy-sensing, commercial-buildings, interoperability]
topic_primary: bt-mesh
topics_secondary: [bt-le]
novelty_score: 2
---

## Summary (EN)

The Bluetooth SIG published a first-party article (Jason Marcel, August 27, 2026) that is, in substance, the first deployment-measured account in this knowledge base of what Bluetooth mesh is actually being used for at commercial scale: Networked Lighting Control (NLC), and the extension of that mesh from lighting into HVAC.

The technical frame is a layered one. **Bluetooth mesh networking** is the transport. **Bluetooth NLC** sits on top as what the SIG calls the industry's first standardised full-stack wireless lighting-control technology — a defined profile set covering luminaires, occupancy and daylight sensors, wall switches, controls, and gateways, such that devices from different manufacturers interoperate without a vendor-specific commissioning layer. The **HVAC Integration NLC Profile** then lets a wall thermostat subscribe to the same occupancy sensors that the lighting network already carries, so heating and cooling react to the same real-time occupancy state the lights do rather than running on an independent schedule or its own duplicate sensor plane. A **Bluetooth NLC to DALI Gateway** covers the legacy path for existing wired DALI lighting installations.

Two deployment case studies carry the numbers, and both are structured the same way — a controls layer measured *on top of* an already-completed LED retrofit, which is the comparison that matters because it isolates the contribution of the network rather than the contribution of the lamps. In a Sylvania Group case study, adding Bluetooth wireless controls produced a further **69 percent** reduction in lighting energy consumption beyond what the LED retrofit alone had already delivered, for **84 percent** total lighting energy reduction and roughly **four metric tons** of annual carbon-emission reduction. At the **Woluwe Shopping Centre** in Brussels, also a Sylvania Group project, the smart control layer produced a further **74 percent** reduction for **83 percent** total energy reduction against the original installation. Silvair's NLC controls platform is named as the controls stack.

Two dating caveats belong on this entry. The HVAC Integration NLC Profile is not new — the SIG adopted it and launched its qualification programme around **mid-2025**, and Silvair qualified the first HVAC-application NLC solution in July 2025. What is new here is the fresh first-party framing plus the quantified deployment outcomes. And the evidence class is industry case study, not peer-reviewed measurement: no baseline methodology, occupancy profile, measurement window, or uncertainty is published for either building.

## Summary (ZH)

蓝牙技术联盟（Bluetooth SIG）发布了一篇第一方文章（作者 Jason Marcel，2026 年 8 月 27 日）。就内容实质而言，这是本知识库中第一份带落地实测数字、说明蓝牙 mesh 在商业规模上究竟被用来做什么的材料：网络化照明控制（NLC），以及这张 mesh 从照明向暖通空调（HVAC）的延伸。

技术框架是分层的。**蓝牙 mesh 组网**是传输层。**Bluetooth NLC** 位于其上，被 SIG 称为业界第一个标准化的全栈无线照明控制技术——一套涵盖灯具、占用传感器与日光传感器、墙面开关、控制器和网关的既定 profile 集合，使不同厂商的设备无需专有调试层即可互操作。**HVAC Integration NLC Profile** 进一步允许墙面温控器订阅照明网络上本就在传的那批占用传感器，于是制热制冷依据与照明相同的实时占用状态动作，而不再各跑各的时间表、各建各的一套重复传感平面。**Bluetooth NLC to DALI 网关**则覆盖既有有线 DALI 照明装置的遗留路径。

两个落地案例提供了数字，且二者结构相同——控制层的节能是在**已经完成的 LED 改造之上**再度量的，这个对比之所以关键，是因为它把网络的贡献与灯具的贡献分离开来。在 Sylvania Group 的一个案例中，加入蓝牙无线控制后，在 LED 改造已实现的节能基础上再降低照明能耗 **69%**，照明总能耗降幅达 **84%**，年碳排放减少约 **四公吨**。在布鲁塞尔的 **Woluwe 购物中心**（同为 Sylvania Group 项目），智能控制层带来了额外 **74%** 的降幅，相对原始装置总能耗降低 **83%**。文中点名的控制栈是 Silvair 的 NLC 平台。

这条记录需要标注两点时间口径。HVAC Integration NLC Profile 并不新——SIG 大约在 **2025 年年中**完成采纳并启动其认证项目，Silvair 于 2025 年 7 月完成首个面向 HVAC 应用的 NLC 方案认证。此处新的是这份新鲜的第一方表述，以及被量化的落地结果。另外，其证据等级是行业案例而非同行评议实测：两栋建筑都没有公开基线方法、占用画像、测量窗口或不确定度。

## Key technical points (EN)

- **Stack**: Bluetooth mesh networking (transport) → Bluetooth NLC (standardised full-stack lighting-control profile set) → HVAC Integration NLC Profile (thermostat subscribes to the lighting network's occupancy sensors).
- **Interoperability claim**: luminaires, sensors, switches, controls, and gateways from different manufacturers operate together — the SIG's stated differentiator against proprietary wireless lighting-control stacks.
- **Legacy path**: Bluetooth NLC to DALI Gateway bridges existing wired DALI installations into the mesh.
- **Sensing plane**: occupancy, daylight, and environmental sensors embedded in the luminaires themselves; the lighting infrastructure doubles as the building's distributed sensing platform and backhauls the data over the NLC mesh.
- **Sylvania case study**: +**69%** lighting-energy reduction from the controls layer *beyond* the LED retrofit; **84%** total lighting-energy reduction; ≈**4 metric tons**/yr CO₂ reduction.
- **Woluwe Shopping Centre (Brussels, Sylvania Group)**: +**74%** reduction from the controls layer; **83%** total energy reduction vs the original installation.
- **Controls platform named**: Silvair.
- **Profile provenance**: HVAC Integration NLC Profile adopted with its qualification programme around mid-2025 (Silvair's first qualified HVAC NLC solution, July 2025) — the profile is not new; the deployment figures and framing are.
- **Evidence class**: vendor/industry case studies. No published baseline methodology, occupancy profile, measurement window, or uncertainty bounds; no peer-reviewed study cited.

## Key technical points (ZH)

- **栈结构**：蓝牙 mesh 组网（传输）→ Bluetooth NLC（标准化全栈照明控制 profile 集）→ HVAC Integration NLC Profile（温控器订阅照明网络的占用传感器）。
- **互操作性主张**：不同厂商的灯具、传感器、开关、控制器与网关协同工作——这是 SIG 相对专有无线照明控制栈所声明的差异点。
- **遗留路径**：Bluetooth NLC to DALI 网关把既有有线 DALI 装置接入 mesh。
- **传感平面**：占用、日光与环境传感器嵌入灯具本体；照明基础设施同时充当建筑的分布式传感平台，并经 NLC mesh 回传数据。
- **Sylvania 案例**：控制层在 LED 改造之外再降照明能耗 **69%**；照明总降幅 **84%**；年减碳约 **4 公吨**。
- **Woluwe 购物中心（布鲁塞尔，Sylvania Group）**：控制层再降 **74%**；相对原始装置总能耗降低 **83%**。
- **点名的控制平台**：Silvair。
- **Profile 来源时间**：HVAC Integration NLC Profile 及其认证项目大约在 2025 年年中采纳（Silvair 首个通过认证的 HVAC NLC 方案为 2025 年 7 月）——profile 本身不新，新的是落地数字与表述。
- **证据等级**：厂商/行业案例。未公开基线方法、占用画像、测量窗口或不确定度；未引用任何同行评议研究。

## Why it matters / what's new (EN)

The `bt-mesh` bin in this knowledge base has been nearly empty — before this entry its only occupant was an academic dual-radio BLE+LoRa hierarchical mesh paper. That absence has been quietly misleading, because it framed Bluetooth mesh as a research topic when the commercial reality is that mesh's volume application is commercial-building lighting control, and its growth edge is the profile-level extension of that lighting mesh into adjacent building systems. This entry fills that gap deliberately.

The architecturally interesting claim is not the energy percentages — it is *why* the HVAC integration is a profile rather than a product. Lighting is the one building system with a sensor at every ceiling grid point by construction, so once those luminaires carry occupancy and daylight sensors on a standardised mesh, the marginal cost of giving HVAC access to that occupancy state is a subscription, not a second sensor installation and a second network. The HVAC Integration NLC Profile encodes exactly that: a thermostat subscribing to lighting-network occupancy sensors. That is a reusable pattern — the lighting mesh as the building's default sensing substrate, with other subsystems joining as profile-level subscribers — and it predicts where the NLC profile suite will extend next.

The measurement framing deserves attention for a different reason. Both case studies report the controls contribution *conditioned on* an already-completed LED retrofit (69% and 74% additional), which is the honest comparison and also the harder one: it means the network is capturing savings the lamp efficiency upgrade could not, i.e. genuinely occupancy- and daylight-driven duty-cycle reduction rather than per-lumen efficiency. The caveat is that these remain vendor case studies with no published methodology, and the ~70% additional-reduction figures should be read as deployment claims, not as a measured range. The profile itself is a 2025 adoption; treat the fresh-dated article as the carrier, not the event.

## Why it matters / what's new (ZH)

本知识库的 `bt-mesh` 主题箱此前几乎是空的——在本条目之前，唯一的住户是一篇学术性的 BLE+LoRa 双射频分层 mesh 论文。这种缺位其实一直在悄悄误导：它把蓝牙 mesh 呈现为一个研究课题，而商业现实是，mesh 的走量应用就是商业建筑照明控制，其增长边缘则是把这张照明 mesh 在 profile 层面向相邻建筑系统延伸。本条目是对该缺口的有意补齐。

架构上真正有意思的主张不是那几个节能百分比，而是**为什么** HVAC 集成是一个 profile 而不是一个产品。照明是唯一一个按施工天然就在每个吊顶网格点都有安装位的建筑系统；因此一旦这些灯具在标准化 mesh 上携带了占用与日光传感器，让 HVAC 拿到这份占用状态的边际成本就只是一次订阅，而不是再装一套传感器加一张网。HVAC Integration NLC Profile 编码的正是这件事：温控器订阅照明网络的占用传感器。这是一个可复用的模式——照明 mesh 作为建筑默认的传感基底，其他子系统以 profile 层订阅者的身份接入——它也预示了 NLC profile 套件下一步会往哪里扩。

其度量口径值得从另一个角度留意。两个案例报告的都是**在已完成 LED 改造这一条件之下**的控制层贡献（额外 69% 与 74%），这既是诚实的对比，也是更难的对比：它意味着这张网络捕获的是灯具能效升级拿不到的那部分节能，即真正由占用与日光驱动的占空比削减，而非每流明能效。需要保留的是，这些终究是厂商案例、未公开方法学，约 70% 的"额外降幅"应当读作落地宣称而非实测区间。profile 本身属于 2025 年的采纳；这篇新日期的文章是载体，不是事件本身。
