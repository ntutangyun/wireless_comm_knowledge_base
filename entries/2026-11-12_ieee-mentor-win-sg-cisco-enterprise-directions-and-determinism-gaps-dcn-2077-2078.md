---
id: 2026-11-12_ieee-mentor-win-sg-cisco-enterprise-directions-and-determinism-gaps-dcn-2077-2078
date_published: 2026-11-11
date_found: 2026-11-12
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG: An Enterprise Perspective on WIN Directions and Determinism Challenges, Features and Gaps (DCN 11-26-2077r1 and 2078r1, Cisco Systems)"
title_zh: "IEEE 802.11 WIN SG：WIN 方向的企业视角，以及确定性的挑战、特性与缺口（DCN 11-26-2077r1 与 2078r1，思科）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2077&is_year=2026"
source_quality: full
topics: [WIN, Wi-Fi 9, PAR, determinism, bounded latency, MAPC, enterprise, AI traffic]
topic_primary: wifi8-uhr
topics_secondary: [rtwt-latency, mapc-cosr, agentic-wifi]
novelty_score: 3
---

## Summary (EN)

Two companion decks from Cisco Systems (Brian Hart et al.) were uploaded to the WIN SG on 11 November 2026 (r1 of each; title slides dated "Nov 2026"). DCN 11-26-2077r1, "An Enterprise Perspective on WIN Directions" (15 slides), opens with the enterprise deployment trends it observes: enterprises need a network that "just works" and is secure; an issue caused by even some unpatched client implementations of a feature tends to lead to that feature being disabled for all clients; client counts and AP density are rising; and AI use cases are already supported by 802.11be networks. It then lists nine proposed directions: highlight the value of future features, support and utilize continued AP densification, enable improved troubleshooting tools, provide adaptivity for different device classes, better support evolving AI requirements, continue to allow for three (US) channels minimum, provide a genuine path to determinism, meet new coexistence challenges, and develop more secure, scalable onboarding.

Selected content per direction. On feature value, the deck states it is harder to measure a tail-latency reduction than a speed increase, and asks for per-feature KPIs, or alternatively per-client disablement of a feature by the AP. On densification, it states that 11bn MAPC has not defined real-time buffer information ("BSR+") in the ICR, and proposes relaxing the aligned-P20 requirement and using Non-HT duplicate modes instead. On AI, it cites a Cisco/Omdia report figure that agentic AI increases traffic by 450% relative to a human, and expects physical-AI offload to increase the need for bounded latency. On channels, it does not recommend PPDU bandwidths wider than about one third of the band, and otherwise suggests a "480/640 MHz Intolerant" field modeled on the 11n Forty MHz Intolerant field. On coexistence, it names frequency hoppers arriving in 5 and 6 GHz (BLE Higher Band, 802.15.4ab Narrowband Assist) and points to SCS(QC) and TXS mode 2 in 11be as mechanisms that can be revisited. On onboarding, it argues against PSK and PEAP use, recommends EAP/TEAP and PQC security profiles (not mandatory to use), and asks for authorization to be separable from authentication, including a "try again in xx sec" indication. Slide 13 proposes edits to PAR 5.2.b (scope) and 5.5 (relative to 26/1834r1) on latency predictability, segmentation of under-capable devices, and AI-driven troubleshooting enabled by low-complexity measurement reporting.

DCN 11-26-2078r1, "Determinism Challenges, Features and Gaps" (9 slides), defines determinism as bounded latency and states that the authors have not seen wireless use cases requiring under 5 ms latency (under 20 ms addresses almost all) or 8 to 12 nines of reliability. It argues against a centrally scheduled approach in unlicensed spectrum, preferring that STAs communicate needs and priorities to peers. It then tabulates "seven layers of outsiders" (incumbents/DFS/AFC, non-802.11 systems with and without LBT/CBP, APs in other administrative domains, co-channel APs in the same domain, legacy/low-capability STAs, and determinism allies) and two classes of insiders (APs and non-AP STAs carrying deterministic traffic), each with existing 802.11 features (for example CSA/ECSA, EMLSR/STR MLO, EDCA, SCS(QC), triggered access with R-TWT, MAPC Co-TDMA and Co-RTWT, SMD roaming). A gaps table lists, among others: CSA/ECSA designed for regulatory compliance rather than service continuity; EMLSR/STR MLO not mandated; Co-TDMA in 11bn D2.0 cannot report time allocation, priority or urgency in the ICR; BTM Request typically a multi-second procedure. The deck introduces the term "determinism ally" (a STA that does not interfere with others carrying deterministic traffic), proposes a determinism (or industrial) profile conditioned on MIB variables, and suggests project-name alternatives that include "determini*" or "predictable latency" wording.

## Summary (ZH)

思科（Brian Hart 等）于 2026 年 11 月 11 日向 WIN SG 上传了两份配套文稿（均为 r1，标题页日期为“Nov 2026”）。DCN 11-26-2077r1《An Enterprise Perspective on WIN Directions》（15 页）首先陈述其观察到的企业部署趋势：企业需要“开箱即用”且安全的网络；即便只是部分未打补丁的客户端实现引发问题，也往往导致该特性对所有客户端被关闭；客户端数量与 AP 密度持续上升；AI 用例目前已由 802.11be 网络支持。随后列出九个建议方向：突出未来特性的价值、支持并利用持续的 AP 密集化部署、提供更好的故障排查工具、为不同设备类别提供适配、更好地支持不断演进的 AI 需求、继续允许（美国）至少三个信道、提供通向确定性的真实路径、应对新的共存挑战、发展更安全且可扩展的接入（onboarding）。

各方向的部分内容。关于特性价值，文稿称尾部时延的降低比速率提升更难度量，并要求为每个特性给出 KPI，或由 AP 对每个客户端单独关闭某特性。关于密集化部署，文稿称 11bn MAPC 尚未在 ICR 中定义实时缓存信息（“BSR+”），并建议放宽对齐 P20 的要求、改用 Non-HT 复制模式。关于 AI，文稿引用思科/Omdia 报告中“智能体 AI 使流量相对人类增加 450%”的数字，并预期物理 AI 的卸载会增加对有界时延的需求。关于信道，文稿不建议定义宽于频段约三分之一的 PPDU 带宽，否则建议仿照 11n 的 Forty MHz Intolerant 字段增加“480/640 MHz Intolerant”字段。关于共存，文稿指出跳频系统将进入 5 GHz 与 6 GHz（BLE Higher Band、802.15.4ab Narrowband Assist），并指出 11be 中的 SCS(QC) 与 TXS mode 2 可被重新审视。关于接入，文稿反对继续使用 PSK 与 PEAP，建议使用 EAP/TEAP 以及 PQC 安全档（不强制使用），并要求授权与认证可分离，包括“xx 秒后重试”的指示。第 13 页提出对 PAR 5.2.b（范围）与 5.5 的修改（相对 26/1834r1），涉及时延可预测性、对能力不足设备的分隔，以及由低复杂度测量上报支撑的 AI 驱动故障排查。

DCN 11-26-2078r1《Determinism Challenges, Features and Gaps》（9 页）将确定性定义为有界时延，并称作者尚未见到需要低于 5 ms 时延（低于 20 ms 可覆盖几乎所有用例）或 8 至 12 个 9 可靠性的无线用例。文稿反对在非授权频谱中采用集中调度的方式，主张由 STA 向对等方传达需求与优先级。随后以表格列出“七层外部因素”（在位用户/DFS/AFC、有或无 LBT/CBP 的非 802.11 系统、其他管理域的 AP、同一管理域内的同信道 AP、遗留/低能力 STA，以及“确定性盟友”）和两类内部角色（承载确定性流量的 AP 与非 AP STA），并对应列出现有 802.11 特性（如 CSA/ECSA、EMLSR/STR MLO、EDCA、SCS(QC)、触发接入配合 R-TWT、MAPC 的 Co-TDMA 与 Co-RTWT、SMD 漫游）。缺口表中包括：CSA/ECSA 为合规而非业务连续性而设计；EMLSR/STR MLO 非强制；11bn D2.0 中 Co-TDMA 无法在 ICR 中上报时间分配、优先级或紧急度；BTM Request 通常是耗时数秒的流程。文稿提出“确定性盟友”（不干扰其他承载确定性流量者的 STA）这一概念，建议定义以 MIB 变量为条件的确定性（或工业）档，并提出含“determini*”或“predictable latency”字样的项目名称备选。

## Key technical points (EN)

- DCN 2077r1 (Cisco, 15 slides): nine proposed WIN directions (feature value/KPIs, AP densification, troubleshooting tools, device-class adaptivity, AI requirements, three-channel minimum, determinism, coexistence, onboarding).
- Stated MAPC points: 11bn MAPC lacks real-time buffer information ("BSR+") in the ICR; relax aligned-P20, use Non-HT duplicate modes.
- AI traffic: cites a Cisco/Omdia report figure of +450% traffic for agentic AI versus a human; expects more east-west traffic and a need for bounded latency with physical AI.
- Channelization: no PPDU bandwidth wider than about 1/3 of the band recommended; otherwise a "480/640 MHz Intolerant" field akin to the 11n Forty MHz Intolerant field.
- Onboarding: PSK should be broadly disallowed, PEAP replaced by EAP/TEAP, PQC security profiles supported (not mandatory to use); authorization separated from authentication.
- DCN 2078r1 (Cisco, 9 slides): determinism = bounded latency; no wireless use case seen requiring under 5 ms; under 20 ms covers almost all; no 8-12 nines requirement seen.
- Challenge/feature table: seven outsider classes and two insider classes mapped to existing 802.11 features; gaps include CSA/ECSA purpose, non-mandatory EMLSR/STR MLO, Co-TDMA ICR reporting in 11bn D2.0, multi-second BTM Request.
- Proposals: "determinism ally" notion; determinism (or industrial) profile conditioned on MIB variables; alternative project names ("Adaptive and Deterministic Wireless", "Adaptive and Predictable Wireless", "Wireless Predictable Latency").
- 2077 proposes edits to PAR 5.2.b and 5.5; 2078 proposes edits to the project name and 5.5.

## Key technical points (ZH)

- DCN 2077r1（思科，15 页）：九个建议的 WIN 方向（特性价值/KPI、AP 密集化部署、故障排查工具、设备类别适配、AI 需求、至少三信道、确定性、共存、接入）。
- 所述 MAPC 要点：11bn MAPC 在 ICR 中缺少实时缓存信息（“BSR+”）；放宽对齐 P20，改用 Non-HT 复制模式。
- AI 流量：引用思科/Omdia 报告中智能体 AI 相对人类流量 +450% 的数字；预期东西向流量增多，物理 AI 将增加对有界时延的需求。
- 信道化：不建议定义宽于频段约 1/3 的 PPDU 带宽；否则建议增加类似 11n Forty MHz Intolerant 的“480/640 MHz Intolerant”字段。
- 接入：应广泛禁用 PSK，以 EAP/TEAP 取代 PEAP，支持 PQC 安全档（不强制使用）；授权与认证分离。
- DCN 2078r1（思科，9 页）：确定性 = 有界时延；未见需低于 5 ms 的无线用例，低于 20 ms 可覆盖几乎所有用例，未见 8-12 个 9 的可靠性需求。
- 挑战/特性表：七类外部因素与两类内部角色，对应现有 802.11 特性；缺口包括 CSA/ECSA 的设计目的、EMLSR/STR MLO 非强制、11bn D2.0 中 Co-TDMA 的 ICR 上报、耗时数秒的 BTM Request。
- 提议：“确定性盟友”概念；以 MIB 变量为条件的确定性（或工业）档；备选项目名称（“Adaptive and Deterministic Wireless”“Adaptive and Predictable Wireless”“Wireless Predictable Latency”）。
- 2077 提出对 PAR 5.2.b 与 5.5 的修改；2078 提出对项目名称与 5.5 的修改。

## Why it matters / what's new (EN)

These two decks add an enterprise-operator input to the WIN SG's PAR discussion, which the KB has so far followed through the Panasonic interference deck (see 2026-11-11_ieee-mentor-win-sg-panasonic-time-varying-interference-par-need-dcn-2282), the Charter coexistence deck (2026-11-11_ieee-mentor-win-sg-charter-lbt-on-off-nr-wifi-coexistence-robust-wifi9-dcn-1927) and the earlier WIN SG PAR/features digests. Their distinguishing content is the use of existing 802.11 feature names, including 11be (EMLSR/STR MLO, SCS(QC), R-TWT) and 11bn MAPC (Co-TDMA, Co-RTWT) and SMD roaming, as the inventory against which determinism gaps are listed, and the proposed PAR 5.5 wording. The decks are position papers; the figures quoted (for example the 450% traffic increase) are attributed to the cited report and are not verified here.

## Why it matters / what's new (ZH)

这两份文稿为 WIN SG 的 PAR 讨论增加了企业运营方的输入；此前 KB 通过松下干扰文稿（2026-11-11_ieee-mentor-win-sg-panasonic-time-varying-interference-par-need-dcn-2282）、Charter 共存文稿（2026-11-11_ieee-mentor-win-sg-charter-lbt-on-off-nr-wifi-coexistence-robust-wifi9-dcn-1927）以及此前的 WIN SG PAR/特性摘要跟踪该议题。其特点在于以现有 802.11 特性名称（包括 11be 的 EMLSR/STR MLO、SCS(QC)、R-TWT，以及 11bn MAPC 的 Co-TDMA、Co-RTWT 与 SMD 漫游）作为清单来列出确定性缺口，并给出 PAR 5.5 的拟议措辞。这两份均为立场性文稿；其中引用的数字（如流量增加 450%）归属于所引报告，本文未作核实。

## Images

None.
