---
id: 2026-08-20_arxiv-lawful-isac-cellular-gdpr
date_published: 2026-08-19
date_found: 2026-08-20
type: academic-paper
technology: cellular
title_en: "Towards Lawful ISAC in Cellular Networks: GDPR Mapping, the Signal Controller Concept, and Per-Stakeholder Mitigations for 6G Sensing"
title_zh: "迈向合法的蜂窝网络 ISAC：GDPR 映射、“信号控制者”概念与 6G 感知的分角色缓解措施"
url: "https://arxiv.org/abs/2608.18902"
source_quality: full
topics: [ISAC, GDPR, privacy, ePrivacy-Directive, signal-controller, ETSI-ISG-ISAC, SSP, SIDP, 6GS, lawful-interception, data-minimization, sensing-targets, 802.11bf, tech-policy]
topic_primary: cellular-security
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)
Stefano Tomasin, Annalisa Volpato and Marco Centenaro (University of Padova — notably a pairing of the Information Engineering department with the department of Public, International and EU Law; arXiv 19 Aug 2026, eess.SP, 16 pp.) deliver the first systematic legal-compliance analysis of **cellular ISAC**: what happens, under the GDPR and the ePrivacy Directive, when sensing scales from localized, uncoordinated 802.11bf Wi-Fi deployments to a nationwide, MNO-operated 6G sensing service. Building on the ETSI ISG ISAC reference model (Sensing Service Producer / Sensing Input Data Provider / third-party SIDP / Sensing Service Consumer / 3-SSC) and 3GPP's 32 sensing use cases with their KPIs (<10 m positioning, <1.5 m/s velocity, <5% missed detection/false alarm; six mono/bistatic TRP-UE mode variants; measurement Levels A–D from raw per-OFDM-symbol IQ to per-BS target level), the authors map every actor in the 6G sensing ecosystem onto GDPR roles (data subject / controller / processor / recipient) across six sensing-target types — crucially including **Type B: people carrying no device at all**, who can be tracked yet have no contractual relationship with anyone in the chain. Their headline conceptual contribution is the **signal controller**: a GDPR-style responsibility figure for the physical layer, upstream of data collection — whoever manages transmission/reception of sensing-capable signals is a preventive first line of defense, since air-interface signals cannot be protected by cryptography alone.

The threat assessment identifies five privacy threats (unauthorized collection, unauthorized processing, data misuse/repurposing, unawareness of involvement, unintended disclosure) and assigns them per stakeholder in a full table (MNO, end users, RAN-as-a-service providers — now data processors rather than mere equipment vendors — SSP/AI-cloud vendors, 3-SIDP feeds such as Wi-Fi networks, 3-SSC platforms, and standardization bodies themselves). Mitigations follow the same per-stakeholder structure: MNO-side area-restricted sensing and tunable/immediate data retention discard; RAN-vendor-side **sensing-resilient vs sensing-capable waveforms**, beamforming that prevents unauthorized extraction, CSI-based location anonymization, and sensing-resolution SLAs tuned to the minimum each use case needs (data minimization at the PHY); SSP-side local pre-processing with differential privacy before any third-party disclosure. Three open directions close the paper: a public trust model for ISAC networks, aligning ISAC with lawful-interception frameworks, and the interaction with AI regulation.

## Summary (ZH)
Stefano Tomasin、Annalisa Volpato 与 Marco Centenaro（帕多瓦大学——值得注意的是信息工程系与公共、国际及欧盟法学系的跨系组合；arXiv 2026 年 8 月 19 日，eess.SP，16 页）给出了对**蜂窝 ISAC** 的首个系统性法律合规分析：当感知从局部、无协调的 802.11bf Wi-Fi 部署扩展为全国性、由移动运营商运营的 6G 感知服务时，在 GDPR 与 ePrivacy 指令下会发生什么。基于 ETSI ISG ISAC 参考模型（感知服务生产者 SSP / 感知输入数据提供者 SIDP / 第三方 SIDP / 感知服务消费者 SSC / 3-SSC）与 3GPP 的 32 个感知用例及其 KPI（定位 <10 m、速度 <1.5 m/s、漏检/虚警 <5%；TRP-UE 六种单/双站模式变体；从原始逐 OFDM 符号 IQ 到逐基站目标级的 A–D 四级测量），作者将 6G 感知生态中每个角色映射到 GDPR 角色（数据主体/控制者/处理者/接收者），覆盖六类感知目标——关键包括 **B 类：完全不携带设备的人**——可被追踪却与链条中任何一方无合同关系。核心概念贡献是**信号控制者（signal controller）**：为物理层、数据采集上游设立的 GDPR 式责任角色——管理感知信号收发者即为预防性第一道防线，因为空口信号无法仅靠密码学保护。

威胁评估识别五类隐私威胁（未授权采集、未授权处理、数据挪用/改目的、参与不知情、意外泄露），并逐利益相关方成表分配（MNO、终端用户、RAN 即服务提供商——如今是数据处理者而非单纯设备商——SSP/AI 云厂商、如 Wi-Fi 网络的 3-SIDP 数据源、3-SSC 平台，乃至标准化组织自身）。缓解措施同样按角色展开：MNO 侧的区域限定感知与可调/即用即弃数据留存；RAN 厂商侧的**感知韧性波形与感知使能波形之分**、防未授权提取的波束赋形、基于 CSI 的位置匿名化、以及按用例最小必要调节感知分辨率的 SLA（物理层的数据最小化）；SSP 侧在任何第三方披露前的本地预处理与差分隐私。论文以三个开放方向收尾：ISAC 网络的公共信任模型、ISAC 与合法监听框架的对齐、以及与 AI 监管的互动。

## Key technical points (EN)
- First GDPR/ePrivacy compliance mapping of the ETSI ISG ISAC 6GS reference model (SSP/SIDP/3-SIDP/SSC/3-SSC service-based req/res interactions).
- Six sensing-target types (A: person with ISAC device, B: person with no device, C: comms-only device, D–F: objects); Types A–C fall under GDPR — location/movement = PII, biometric/behavioral = Art. 9 sensitive data.
- New concept: **signal controller** — PHY-layer counterpart of the GDPR data controller, responsible for who can use sensing-capable transmissions; preventive, upstream of data collection.
- Five threats assigned per stakeholder (unauthorized collection/processing, misuse, unawareness of involvement, unintended disclosure); RAN-as-managed-service providers become data processors + signal controllers.
- PHY/architecture mitigations: sensing-resilient vs sensing-capable waveform split; beamforming against unauthorized extraction; CSI location anonymization; sensing-resolution SLAs as data minimization; SSP local pre-processing + differential privacy; MNO area-restricted sensing and immediate-discard retention.
- 3GPP context absorbed: 32 use cases, KPIs (<10 m, <1.5 m/s, <5%), 6 mono/bistatic TRP/UE mode variants, measurement Levels A–D; contrast with 802.11bf (local processing, MAC randomization, owner-side responsibility).
- Open directions: public trust model, lawful-interception alignment (sensing data to authorities only on authorized request), ISAC × AI-regulation interplay.

## Key technical points (ZH)
- 首个将 ETSI ISG ISAC 6GS 参考模型（SSP/SIDP/3-SIDP/SSC/3-SSC 服务化请求/响应交互）映射到 GDPR/ePrivacy 的合规分析。
- 六类感知目标（A：携 ISAC 设备者，B：无设备者，C：仅通信设备者，D–F：物体）；A–C 类落入 GDPR——位置/移动 = 个人数据，生物特征/行为 = 第 9 条敏感数据。
- 新概念：**信号控制者**——GDPR 数据控制者在物理层的对应角色，负责管控谁能利用感知使能信号；预防性、位于数据采集上游。
- 五类威胁逐角色分配（未授权采集/处理、挪用、参与不知情、意外泄露）；托管式 RAN 提供商成为数据处理者 + 信号控制者。
- 物理层/架构缓解：感知韧性与感知使能波形之分；防未授权提取的波束赋形；CSI 位置匿名化；感知分辨率 SLA 即数据最小化；SSP 本地预处理 + 差分隐私；MNO 区域限定感知与即用即弃留存。
- 吸收的 3GPP 背景：32 个用例、KPI（<10 m、<1.5 m/s、<5%）、TRP/UE 六种单/双站模式、A–D 四级测量；并与 802.11bf 对照（本地处理、MAC 随机化、责任在网络所有者）。
- 开放方向：公共信任模型、合法监听对齐（感知数据仅凭授权请求提供给执法方）、ISAC 与 AI 监管的互动。

## Why it matters / what's new (EN)
The KB's ISAC cluster has grown fast on the capability side — the 3GPP release-ladder maps (Lin 08-13, Varshney family 08-18), O-RAN UAV tracking testbeds (08-13), SRS-as-passive-radar (08-08), rainfall sensing over 11 live LTE carriers (08-19) — and the security bin has ISAC *attack* coverage (AmbSentry eavesdrop defense, beam-feedback attacks). What no entry addressed is the question every one of those capabilities eventually collides with: **is any of this legal to run on a public network?** This paper opens that cell (ISAC × law) with more than hand-waving: a per-stakeholder GDPR role/threat/mitigation table over the actual ETSI 6GS sensing architecture, and the "signal controller" concept, which gives PHY engineers a legally meaningful design target — waveform and beamforming choices become compliance controls, not just performance knobs. The Type-B problem (people with no device, no SIM, no contract being sensed nationwide) is the sharpest articulation yet of why cellular ISAC is not just big Wi-Fi sensing, and the sensing-resilient-waveform + resolution-SLA proposals hand 3GPP SA3/ETSI concrete standardization work. The engineering+law co-authorship is itself the signal: 6G ISAC papers are starting to be written the way the deployments will have to be.

## Why it matters / what's new (ZH)
KB 的 ISAC 集群在能力侧增长迅速——3GPP 版本阶梯图谱（Lin 08-13、Varshney 系 08-18）、O-RAN 无人机跟踪测试床（08-13）、SRS 被动雷达（08-08）、11 个在网 LTE 载波的降雨感知（08-19）——安全库亦有 ISAC *攻击*侧覆盖（AmbSentry 窃听防御、波束反馈攻击）。但此前没有条目回答所有这些能力终将撞上的问题：**这些在公网上运行合法吗？**本文以远超泛泛而谈的方式打开了这个格子（ISAC × 法律）：在真实 ETSI 6GS 感知架构上给出逐角色的 GDPR 角色/威胁/缓解对照表，并提出"信号控制者"概念——让物理层工程师获得有法律意义的设计目标：波形与波束赋形选择成为合规控制项，而不只是性能旋钮。B 类问题（无设备、无 SIM、无合同者被全国性感知）是"蜂窝 ISAC 不是放大版 Wi-Fi 感知"迄今最锐利的表述；感知韧性波形与分辨率 SLA 的提议则给 3GPP SA3/ETSI 递上了具体的标准化工作。工程+法学的合著本身就是信号：6G ISAC 论文开始以未来部署不得不采取的方式来写作。

## Images
