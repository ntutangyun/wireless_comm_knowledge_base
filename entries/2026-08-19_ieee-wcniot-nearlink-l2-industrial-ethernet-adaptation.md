---
id: 2026-08-19_ieee-wcniot-nearlink-l2-industrial-ethernet-adaptation
date_published: 2026-02-13
date_found: 2026-08-19
type: academic-paper
technology: nearlink
title_en: "NearLink as a Layer-2 bridge for industrial Ethernet: software-defined topology virtualisation + address mapping, tested in automotive welding workshops at 20-120 m with jitter held under 650 us and near-zero loss (IEEE WCNIoT 2025)"
title_zh: "星闪作为工业以太网的二层桥接：软件定义的拓扑虚拟化 + 地址映射，在汽车焊装车间 20-120 m 范围实测周期抖动稳定在 650 us 内、丢包近零（IEEE WCNIoT 2025）"
url: "https://ieeexplore.ieee.org/document/11381322"
source_quality: abstract_only
topics: [NearLink, industrial-wireless, industrial-Ethernet, Layer-2, protocol-adaptation, deterministic, jitter, automotive-manufacturing, WCNIoT]
topic_primary: nearlink-slb
topics_secondary: [nearlink-sle]
novelty_score: 3
---

## Summary (EN)

"NearLink Layer 2 Protocol Adaptation Solution for Industrial Wireless Control" (Junfei Gu, Zhenyu Ju, Bin Wu, Rui Wang, Zhangqi Zhu; 2025 5th International Conference on Wireless Communication, Networking and Internet of Things, WCNIoT, Sydney, 5-7 November 2025; added to IEEE Xplore 13 February 2026; DOI 10.1109/WCNIoT67424.2025.11381322) addresses a practical blocker to using NearLink on the factory floor: industrial controllers, drives and I/O speak industrial-Ethernet protocols at Layer 2, and a wireless hop that requires changing those protocols is a non-starter for brownfield lines. The authors propose a software-defined adaptation layer that performs Layer-2 protocol conversion between the industrial-Ethernet segment and the NearLink link without modifying the native protocols on either side. Two modules do the work: a topology-virtualisation module that presents the wireless segment to the wired network as if it were part of the same Layer-2 topology, and an address-mapping module that translates between Ethernet MAC addressing and NearLink link addressing so that frames cross the boundary transparently.

The evaluation is field-based rather than lab-only: tests were run in automotive-manufacturing welding workshops — an environment the introduction singles out (with smelting facilities) for cabling difficulty, cable wear and high maintenance cost, and one that is also electromagnetically harsh. Over link distances of 20 to 120 m and data-frame lengths of 32 to 128 bytes, the solution is reported to sustain deterministic, highly reliable communication: period jitter is stably held within 650 us, 99.9% of tail delays fall below the communication cycle, and packet loss is zero in the vast majority of test scenarios. The paper's sections are Introduction, Related Work, Method, Experiments and Results Analysis, and Conclusion/Future Work; the full text (including which NearLink mode and chipset were used, the exact cycle times, and the industrial-Ethernet protocol under test) is behind the IEEE Xplore paywall and was not retrievable — this entry rests on the abstract, the visible introduction and the Xplore metadata.

## Summary (ZH)

《NearLink Layer 2 Protocol Adaptation Solution for Industrial Wireless Control》（Junfei Gu、Zhenyu Ju、Bin Wu、Rui Wang、Zhangqi Zhu；2025 年第五届无线通信、网络与物联网国际会议 WCNIoT，悉尼，2025 年 11 月 5-7 日；2026 年 2 月 13 日收录进 IEEE Xplore；DOI 10.1109/WCNIoT67424.2025.11381322）针对星闪进入工厂车间的一个现实障碍：工业控制器、驱动器和 I/O 在二层运行工业以太网协议，任何要求改动这些协议的无线跳数在存量产线上都行不通。作者提出一个软件定义的适配层，在工业以太网网段与星闪链路之间做二层协议转换，且不修改两侧的原生协议。两个模块承担工作：拓扑虚拟化模块把无线段对有线网络呈现为同一二层拓扑的一部分；地址映射模块在以太网 MAC 寻址与星闪链路寻址之间做转换，使帧透明跨越边界。

评估基于现场而非仅实验室：测试在汽车制造焊装车间进行——引言将其（连同冶炼场所）列为布线困难、线缆磨损、维护成本高的典型环境，同时也是电磁环境恶劣的场景。在 20 至 120 m 链路距离、32 至 128 字节数据帧长范围内，方案被报告能持续保证确定性、高可靠通信：周期抖动稳定控制在 650 us 内，99.9% 的尾时延低于通信周期，绝大多数测试场景丢包率为零。论文章节为引言、相关工作、方法、实验与结果分析、结论与未来工作；全文（包括所用星闪模式与芯片、具体周期时长、被测的工业以太网协议）位于 IEEE Xplore 付费墙后未能获取——本条目依据摘要、可见的引言部分与 Xplore 元数据。

## Key technical points (EN)

- Problem: NearLink-to-industrial-Ethernet interoperability at Layer 2 without touching native protocols on either side (brownfield-friendly).
- Mechanism: software-defined adaptation with two modules — topology virtualisation (wireless segment appears inside the wired L2 topology) and address mapping (Ethernet MAC to NearLink link addressing).
- Field test site: automotive-manufacturing welding workshops (harsh EMI, difficult cabling).
- Test envelope: 20-120 m link distance; 32-128 byte frames.
- Results: period jitter within 650 us; 99.9% of tail delays below the communication cycle; zero packet loss in the vast majority of scenarios.
- Venue/dates: WCNIoT 2025, Sydney, 5-7 Nov 2025; Xplore 13 Feb 2026 (within the 12-month freshness window).
- Not disclosed in the abstract: NearLink mode (SLB vs SLE), chipset, cycle time, and which industrial-Ethernet protocol (e.g. PROFINET/EtherCAT/EtherNet-IP) was bridged; source_quality abstract_only.

## Key technical points (ZH)

- 问题：星闪与工业以太网在二层互通，且不改动两侧原生协议（适合存量产线）。
- 机制：软件定义适配，含两个模块——拓扑虚拟化（无线段呈现在有线二层拓扑内）与地址映射（以太网 MAC 到星闪链路寻址）。
- 现场测试地点：汽车制造焊装车间（强电磁干扰、布线困难）。
- 测试范围：链路距离 20-120 m；帧长 32-128 字节。
- 结果：周期抖动 650 us 内；99.9% 尾时延低于通信周期；绝大多数场景零丢包。
- 会议/日期：WCNIoT 2025，悉尼，2025-11-05..07；Xplore 2026-02-13（在 12 个月新鲜度窗口内）。
- 摘要未披露：星闪模式（SLB 或 SLE）、芯片、周期时长、被桥接的工业以太网协议（如 PROFINET/EtherCAT/EtherNet-IP）；source_quality 为 abstract_only。

## Why it matters / what's new (EN)

This is the first industrial-control NearLink item in this KB. Existing coverage runs consumer audio/peripherals (2026-05-30_huawei-starlink-e2-audio-lossless, 2026-07-10_nearlink-matepad-matebook-e2-audio-matrix, 2026-08-18_edifier-comfo-clip-q2-first-third-party-nearlink-audio), automotive keyless/V2G (2026-05-24_sparklink-car-key-device-rollout-2-0, 2026-08-18_nearlink-isac-v2g-vehicle-grid-pilot), access-network fusion (2026-08-18_all-optical-nearlink-pon-fusion-ccsa-tc6) and standards; NearLink's marketed 20 us air-interface latency and 99.999% reliability have so far been asserted for factory automation but never demonstrated in a published field trial. Two things are new here. First, the architectural choice: rather than a NearLink-native industrial profile, the authors keep industrial Ethernet untouched and insert a transparent L2 bridge (topology virtualisation + address mapping) — the same integration pattern that Wi-Fi/5G-URLLC "wireless PROFINET/EtherCAT" bridges use, which makes NearLink directly comparable with those alternatives and easy to drop into existing PLC networks. Second, the numbers come from a real automotive welding shop at up to 120 m — well beyond NearLink's usual 10-20 m consumer range — with jitter bounded at 650 us and 99.9% of tail delay inside the cycle, i.e. a cyclic-control-grade result, though far from the microsecond-class jitter that the SLB PHY is nominally capable of (the bridge and the wired side likely dominate). Caveats: a five-author conference paper with no stated affiliations in the visible metadata, no disclosure of the NearLink mode or the Ethernet protocol bridged, and no comparison against a Wi-Fi 6/7 or 5G-URLLC bridge in the same shop; treat as an existence proof, not a benchmark. Watch items: full text (mode/chipset/protocol/cycle time), a journal extension with a wireless-competitor baseline, and whether the SparkLink Alliance's industrial working group cites it in an industrial NearLink profile.

## Why it matters / what's new (ZH)

这是本知识库中首个工业控制方向的星闪条目。既有覆盖集中在消费音频/外设（2026-05-30_huawei-starlink-e2-audio-lossless、2026-07-10_nearlink-matepad-matebook-e2-audio-matrix、2026-08-18_edifier-comfo-clip-q2-first-third-party-nearlink-audio）、汽车无钥匙/V2G（2026-05-24_sparklink-car-key-device-rollout-2-0、2026-08-18_nearlink-isac-v2g-vehicle-grid-pilot）、接入网融合（2026-08-18_all-optical-nearlink-pon-fusion-ccsa-tc6）与标准；星闪宣传的 20 us 空口时延与 99.999% 可靠性此前只是被"宣称"适用于工厂自动化，从未在公开发表的现场试验中得到展示。两点新意。其一，架构选择：作者不做星闪原生工业规范，而是保持工业以太网不动、插入透明二层桥（拓扑虚拟化 + 地址映射）——与 Wi-Fi/5G-URLLC 的"无线 PROFINET/EtherCAT"网桥同一集成范式，使星闪可与这些替代方案直接对比，也便于接入现有 PLC 网络。其二，数据来自真实的汽车焊装车间、距离达 120 m——远超星闪通常 10-20 m 的消费级范围——抖动上界 650 us、99.9% 尾时延在周期内，属于周期控制级别的结果，但距 SLB 物理层名义上的微秒级抖动仍远（网桥与有线侧很可能占主导）。注意事项：五作者会议论文，可见元数据未列出单位，未披露星闪模式与被桥接的以太网协议，也未在同一车间对比 Wi-Fi 6/7 或 5G-URLLC 网桥；应视为存在性证明而非基准。关注点：全文（模式/芯片/协议/周期时长）；含无线竞品基线的期刊扩展版；星闪联盟工业工作组是否在工业星闪规范中引用本文。

## Images

*(No redistributable images for this entry — figures are behind IEEE Xplore.)*
