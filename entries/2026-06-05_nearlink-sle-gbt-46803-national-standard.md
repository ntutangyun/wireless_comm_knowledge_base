---
id: 2026-06-05_nearlink-sle-gbt-46803-national-standard
date_published: 2025-12-02
date_found: 2026-06-05
type: nearlink-spec
technology: nearlink
title_en: "NearLink SLE elevated to Chinese national standard: GB/T 46803.1/.2-2025 (polar-code low-power short-range PHY + data-link layer)"
title_zh: "星闪 SLE 升级为国家标准：GB/T 46803.1/.2-2025（基于极化码的低功耗无线通信网络 物理层 + 数据链路层）"
url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=4507EFE13DACCB6AE06397BE0A0A601F"
source_quality: full
topics: [NearLink, SparkLink, SLE, GB/T, national-standard, polar-codes, PHY, data-link-layer]
topic_primary: nearlink-sle
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
On 2 December 2025 China's State Administration for Market Regulation (SAMR) released two recommended national standards that codify the NearLink (星闪 / SparkLink) low-energy mode — SLE — into the GB/T system: **GB/T 46803.1-2025 "Information technology — Low-power wireless communication network based on polar codes — Part 1: Physical layer"** and **GB/T 46803.2-2025 — Part 2: Data link layer**. Both are recommended (GB/T) national standards with an implementation date of 1 July 2026. Notably, the standard titles describe the technology generically as a "low-power wireless communication network based on polar codes" rather than naming the brand — the conventional framing for a Chinese national standard — but these are the national-standard realisation of NearLink's SLE access stack.

The two parts split the SLE radio stack along the usual layered boundary: Part 1 fixes the physical layer (modulation/coding built on polar codes, the channel structure, and the low-power PHY procedures that let SLE reach Bluetooth-class power while keeping NearLink's latency/reliability targets), and Part 2 fixes the data link layer (framing, channel access, and link control above the PHY). This is the SLE counterpart to the high-throughput SLB mode; SLE targets IoT sensors, wearables and other low-power endpoints, whereas SLB targets high-bandwidth automotive/projection use cases.

The national-standard step builds directly on the alliance-level NearLink 2.0 specification published by the International NearLink Alliance in March 2025 (which added audio transport and integrated sensing-and-communication to the end-to-end protocol system). Moving from an alliance specification to a SAMR GB/T standard is the institutional milestone: it gives the SLE PHY and data-link layer a citable national reference for procurement, certification and cross-vendor interoperability, which is what large-scale industrial and government adoption in China typically waits for.

## Summary (ZH)
2025 年 12 月 2 日，国家市场监督管理总局（SAMR）发布两项推荐性国家标准，将星闪（NearLink / SparkLink）的低功耗模式 SLE 纳入 GB/T 体系：**GB/T 46803.1-2025《信息技术 基于极化码的低功耗无线通信网络 第1部分：物理层》** 与 **GB/T 46803.2-2025 第2部分：数据链路层**。两者均为推荐性（GB/T）国家标准，实施日期为 2026 年 7 月 1 日。值得注意的是，标准名称以"基于极化码的低功耗无线通信网络"这一通用表述命名，而非直接使用品牌名——这是中国国家标准的惯常做法——但其实质即星闪 SLE 接入协议栈的国标化落地。

两部分按经典分层边界拆分 SLE 无线协议栈：第 1 部分规定物理层（基于极化码的调制/编码、信道结构，以及让 SLE 在保持星闪时延/可靠性目标的同时达到蓝牙级功耗的低功耗 PHY 流程）；第 2 部分规定数据链路层（帧结构、信道接入与链路控制）。这是与高吞吐 SLB 模式相对应的 SLE 一侧：SLE 面向 IoT 传感器、可穿戴等低功耗终端，而 SLB 面向高带宽的车载/投屏等场景。

国标化这一步直接建立在国际星闪联盟 2025 年 3 月发布的星闪 2.0 标准之上（该版本为端到端协议体系新增了音频传输与通感一体等核心规范）。从联盟标准上升为 SAMR 的 GB/T 国家标准是制度层面的里程碑：它为 SLE 物理层与数据链路层提供了可被采购、认证与跨厂商互操作引用的国家级依据——这通常正是中国大规模工业与政府采用所等待的前提。

## Key technical points (EN)
- Two recommended national standards, released 2025-12-02, in force 2026-07-01:
  - **GB/T 46803.1-2025** — 信息技术 基于极化码的低功耗无线通信网络 第1部分：物理层 (PHY: polar-code-based modulation/coding, channel structure, low-power procedures).
  - **GB/T 46803.2-2025** — 第2部分：数据链路层 (data link layer: framing, channel access, link control).
- These standardise the **SLE** (SparkLink Low Energy) side of NearLink — the Bluetooth-class-power, IoT/wearable mode — as opposed to the high-throughput SLB mode.
- Built on the alliance-level NearLink 2.0 spec (March 2025); this is the GB/T national-standard realisation, not a new technical version.
- GB/T = recommended (not mandatory) national standard; significance is institutional — a citable national reference for procurement/certification/interoperability.

## Key technical points (ZH)
- 两项推荐性国家标准，2025-12-02 发布，2026-07-01 实施：
  - **GB/T 46803.1-2025**——《信息技术 基于极化码的低功耗无线通信网络 第1部分：物理层》（PHY：基于极化码的调制/编码、信道结构、低功耗流程）。
  - **GB/T 46803.2-2025**——第2部分：数据链路层（帧结构、信道接入、链路控制）。
- 标准化的是星闪的 **SLE**（SparkLink Low Energy）一侧——蓝牙级功耗的 IoT/可穿戴模式，区别于高吞吐的 SLB 模式。
- 建立在联盟级星闪 2.0 标准（2025 年 3 月）之上；这是 GB/T 国标化落地，而非新的技术版本。
- GB/T 为推荐性（非强制）国家标准；其意义在制度层面——为采购/认证/互操作提供可引用的国家级依据。

## Why it matters / what's new (EN)
The KB has tracked NearLink mainly through alliance specs (NearLink 1.0/2.0), chip-shipment milestones, and consumer-product adoption (Huawei phones, the Enjoy 90, peripherals). This is the first entry on a **GB/T national standard** for NearLink, and it pins down a fact the prior coverage left implicit: the SLE radio is specified as a polar-code-based low-power PHY + data-link layer, now with a SAMR document number and a 2026-07-01 in-force date. It is the standards-track anchor for the SLE side of the ecosystem and the institutional precondition that typically precedes broad Chinese industrial/government deployment — worth watching for the parallel SLB national-standard parts and any conformance/certification scheme that references these GB/T numbers.

## Why it matters / what's new (ZH)
KB 此前主要通过联盟标准（星闪 1.0/2.0）、芯片出货里程碑与消费产品采用（华为手机、Enjoy 90、外设）来跟踪星闪。本条目是首个关于星闪 **GB/T 国家标准** 的条目，并明确了此前报道隐含的事实：SLE 无线被规定为基于极化码的低功耗物理层 + 数据链路层，如今有了 SAMR 文件编号与 2026-07-01 的实施日期。它是生态中 SLE 一侧的标准锚点，也是中国大规模工业/政府部署通常的制度前提——后续值得关注与之对应的 SLB 国标分册，以及引用这些 GB/T 编号的一致性/认证方案。
