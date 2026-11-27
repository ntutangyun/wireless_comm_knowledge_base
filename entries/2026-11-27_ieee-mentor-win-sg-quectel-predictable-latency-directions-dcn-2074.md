---
id: 2026-11-27_ieee-mentor-win-sg-quectel-predictable-latency-directions-dcn-2074
date_published: 2026-11-25
date_found: 2026-11-27
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG: Quectel on supporting predictable latency in WIN - two use cases, requirements and three evolution directions (DCN 11-26-2074r1)"
title_zh: "IEEE 802.11 WIN SG：Quectel 谈 WIN 中的可预测时延——两个用例、需求与三条演进方向（DCN 11-26-2074r1）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2074&is_year=2026"
source_quality: full
topics: [WIN, predictable latency, 802.11bn, R-TWT, Co-rTWT, MAPC, roaming]
topic_primary: rtwt-latency
topics_secondary: [wifi8-uhr, roaming-mobility, ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
DCN 11-26-2074r1, "Considerations on supporting predictable latency in WIN", is an 11-slide deck by Jerome Gu et al. (Quectel) for the WIN (WLAN Intelligent Networking) Study Group. Revision 1 was uploaded on 25 November 2026 (21:27 ET); the deck is dated 2026-11-07 and a revision 0 is also listed in the Mentor database (only r1 was read, in full). The background slide notes that the SG was approved, that the draft WIN PAR was discussed in the November session (citing DCN 11-26-1834r2), and lists a throughput requirement, a predictable-latency requirement and an additional requirement of information exchange between two associated STAs enabling AI-assisted decision-making. It states that standardization work on predictable latency is "more challenging and urgent" than on throughput, which motivates the contribution.

Two use cases carry the requirements. Use Case 1 is an in-vehicle multi-AP network: a vehicle already holds several 802.11 entities (cabin AP for infotainment, phone projection and OTA; rear-seat/camera AP and sensor nodes; passenger phones acting as hotspots; external APs at a home garage, charging station, depot or dealership), with closed loops such as camera/sensor to ECU to display or actuator and touch to head unit to rendered frame to display; the network moves at up to 120 km/h and periodically attaches to external infrastructure, so deterministic loops must survive while the vehicle's APs roam between external coordination domains. Use Case 2 is a warehouse robotics fleet: hundreds of mobile robots under dense AP grids (tens to more than 100 APs per site), each running a sense, controller, actuate loop at a 10-50 ms control period and crossing AP boundaries many times per hour; the deck says today's deployments pay for the lack of determinism with over-provisioned APs, proprietary roaming logic and conservative speeds.

The proposed requirements on predictable latency cover latency between a non-AP STA and its AP, between neighbouring APs, and between two non-AP STAs (P2P); end-to-end latency/QoS across one or two APs; insensitivity to roaming; scalability across multiple traffic flows; and isolation between low-latency flows and bulk/background traffic. For the evolution path, the deck cites internal evolution (TWT to R-TWT to Co-rTWT, 802.11k/v/r roaming to 802.11bn seamless roaming) and external adoption (OFDMA and trigger-based UL scheduling from cellular concepts, MAPC with Coordinated Multi-Point), and lists prior art for low latency in 802.11bn/UHR (LL indication, NPCA, P-EDCA, SMD transition, MAPC) and in 3GPP (preemption, configured grant, one-shot HARQ in NR-U, AI for air interface such as CSI prediction).

Three potential directions are proposed. Direction 1, internal enhancement: stricter priority contention rules and bounded backoff in CSMA/CA, TXOP reservation ahead of time, a more flexible low-latency indication with more informative STA reports, MAPC enhancement including Co-OFDMA, and new QoS/AC treatment for latency-critical traffic "regarding the characteristics of AI traffic". Direction 2, external adoption from cellular: preemption of an opportunity already given to lower-priority traffic, and centralized control with a coordinator that brings determinism (for example a central scheduler allocating time slots to low-latency flows), noting 802.11ax already has coordinating schemes such as trigger-based UL MU-MIMO access and sounding. Direction 3, AI-based PHY/MAC enhancement, referring to 3GPP AI for the air interface and to the AIML SC and AI Offload SG. The conclusion recommends the group consider these directions when defining the WIN PAR.

## Summary (ZH)
DCN 11-26-2074r1《Considerations on supporting predictable latency in WIN》是 Jerome Gu 等（Quectel）为 WIN（WLAN 智能网络）研究组提交的 11 页文稿。第 1 版于 2026 年 11 月 25 日（美东 21:27）上传；文稿日期为 2026-11-07，Mentor 数据库中另列有第 0 版（仅通读了第 1 版）。背景页指出研究组已获批成立，WIN PAR 草案在 11 月会议上继续讨论（引用 DCN 11-26-1834r2），并列出吞吐需求、可预测时延需求，以及两个已关联 STA 之间信息交换以支持 AI 辅助决策这一额外需求。文稿称，可预测时延的标准化工作比吞吐方面“更具挑战性且更紧迫”，这是提交该文稿的动因。

需求由两个用例承载。用例 1 为车内多 AP 网络：车辆本身已含多个 802.11 实体（承载信息娱乐、手机投屏与 OTA 的座舱 AP；后排/摄像头 AP 与传感器节点；充当热点的乘客手机；家庭车库、充电站、车场或经销商处的外部 AP），含“摄像头/传感器到 ECU 再到显示或执行器”“触控到车机到渲染帧再到显示”等闭环；车内网络最高以 120 km/h 移动并周期性接入外部基础设施，因此车辆自身 AP 在外部协调域之间漫游时，确定性闭环必须保持。用例 2 为仓储机器人车队：数百台移动机器人处于密集 AP 网格（每站点数十至超过 100 个 AP），每台运行“感知、控制器、执行”闭环，控制周期 10-50 ms，每小时多次跨越 AP 边界；文稿称，目前部署以过度配置 AP、专有漫游逻辑和保守速度来承担缺乏确定性的代价。

提出的可预测时延需求涵盖：非 AP STA 与其 AP 之间、相邻 AP 之间、两个非 AP STA 之间（P2P）的时延；经一个或两个 AP 的端到端时延/QoS；对漫游不敏感；多业务流下的可扩展性；以及低时延流与大流量/后台流之间的隔离。关于演进路径，文稿列举内部演进（TWT 到 R-TWT 再到 Co-rTWT，802.11k/v/r 漫游到 802.11bn 无缝漫游）与外部引入（来自蜂窝概念的 OFDMA 与基于触发的上行调度、含协作多点的 MAPC），并列出 802.11bn/UHR 内（LL 指示、NPCA、P-EDCA、SMD 转换、MAPC）及 3GPP 内（抢占、配置授权、NR-U 单次 HARQ、CSI 预测等空口 AI）的低时延现有机制。

文稿提出三条潜在方向。方向 1，内部增强：CSMA/CA 中更严格的优先级竞争规则与有界退避、提前预留 TXOP、更灵活的低时延指示与信息量更大的 STA 报告、含 Co-OFDMA 的 MAPC 增强，以及针对“AI 业务特征”为时延关键业务引入新的 QoS/AC 处理。方向 2，引入蜂窝机制：对已分配给低优先级业务的机会进行抢占，以及由协调者带来确定性的集中控制（例如由中央调度器为低时延流分配时隙），并指出 802.11ax 已有基于触发的上行 MU-MIMO 接入与探测等协调机制。方向 3，基于 AI 的 PHY/MAC 增强，参考 3GPP 空口 AI 以及 AIML SC 和 AI Offload SG。结论建议研究组在制定 WIN PAR 时考虑这些方向。

## Key technical points (EN)
- **DCN 11-26-2074r1 · WIN SG** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2074&is_year=2026) Considerations on supporting predictable latency in WIN. Jerome Gu et al. (Quectel); deck dated 2026-11-07.
- Use cases: in-vehicle multi-AP network (up to 120 km/h, APs roam between external coordination domains) and warehouse robotics fleet (100s of robots, 10s to 100+ APs, 10-50 ms control period).
- Requirement scopes: STA-to-AP, AP-to-AP, STA-to-STA (P2P), end-to-end via one or two APs; insensitive to roaming; multi-flow scalability; isolation from bulk traffic.
- Direction 1 internal (channel access, TXOP reservation, low-latency indication, MAPC/Co-OFDMA, new QoS/AC); Direction 2 external cellular adoption (preemption, centralized control); Direction 3 AI-based PHY/MAC.
- Cited 802.11bn/UHR low-latency items: LL indication, NPCA, P-EDCA, SMD transition, MAPC (Co-rTWT, Co-TDMA); cited 3GPP items: preemption, configured grant, one-shot HARQ (NR-U), CSI prediction.

## Key technical points (ZH)
- **DCN 11-26-2074r1 · WIN SG** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2074&is_year=2026) Considerations on supporting predictable latency in WIN。Jerome Gu 等（Quectel）；文稿日期 2026-11-07。
- 用例：车内多 AP 网络（最高 120 km/h，AP 在外部协调域之间漫游）与仓储机器人车队（数百台机器人，数十至 100+ 个 AP，控制周期 10-50 ms）。
- 需求范围：STA 到 AP、AP 到 AP、STA 到 STA（P2P）、经一个或两个 AP 的端到端；对漫游不敏感；多流可扩展性；与大流量业务隔离。
- 方向 1 内部（信道接入、TXOP 预留、低时延指示、MAPC/Co-OFDMA、新 QoS/AC）；方向 2 引入蜂窝机制（抢占、集中控制）；方向 3 基于 AI 的 PHY/MAC。
- 所引用的 802.11bn/UHR 低时延项：LL 指示、NPCA、P-EDCA、SMD 转换、MAPC（Co-rTWT、Co-TDMA）；所引用的 3GPP 项：抢占、配置授权、NR-U 单次 HARQ、CSI 预测。

## Why it matters / what's new (EN)
The deck is a requirements-and-directions input to the WIN SG's draft-PAR discussion, not a protocol proposal; it makes no measurements and defines no new frames or fields. In this KB it complements the SG's latency-related inputs already recorded, namely 2026-11-16_ieee-mentor-win-sg-draft-par-r2-scope-latency-ai-assisted-decision-dcn-1834 (the PAR draft it cites), 2026-11-12_ieee-mentor-win-sg-cisco-enterprise-directions-and-determinism-gaps-dcn-2077-2078 and 2026-11-04_ieee-mentor-win-sg-vehicular-operation-requirements-par-csd-draft-text-digest, and gives a worked warehouse-robot-fleet scenario (hundreds of robots, tens to 100+ APs, 10-50 ms control period) alongside the vehicular one.

## Why it matters / what's new (ZH)
该文稿是向 WIN 研究组 PAR 草案讨论提交的需求与方向性输入，而非协议提案；它没有测量数据，也未定义新的帧或字段。在本知识库中，它补充了研究组已记录的时延相关输入，即 2026-11-16_ieee-mentor-win-sg-draft-par-r2-scope-latency-ai-assisted-decision-dcn-1834（其引用的 PAR 草案）、2026-11-12_ieee-mentor-win-sg-cisco-enterprise-directions-and-determinism-gaps-dcn-2077-2078 与 2026-11-04_ieee-mentor-win-sg-vehicular-operation-requirements-par-csd-draft-text-digest，并在车载用例之外给出一个具体的仓储机器人车队场景（数百台机器人、数十至 100 多个 AP、10-50 ms 控制周期）。
