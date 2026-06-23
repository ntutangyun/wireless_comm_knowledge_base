---
id: 2026-06-23_nearlink-open-source-openharmony-hdc2026
date_published: 2026-06-22
date_found: 2026-06-23
technology: nearlink
type: industry-news
title_en: "Huawei to Open-Source the Full NearLink Stack to OpenHarmony (HDC 2026, live July 15)"
title_zh: "华为将向OpenHarmony开源完整星闪协议栈（HDC 2026宣布，7月15日上线）"
url: "https://pbxscience.com/huawei-goes-open-source-with-nearlink-can-it-dethrone-bluetooth/"
source_quality: full
topics: [NearLink, SparkLink, 星闪, OpenHarmony, open-source, SLE, SLB, iSLA]
topic_primary: nearlink-slb
topics_secondary: [nearlink-sle, nearlink-automotive]
novelty_score: 3
---

## Summary (EN)

At the **Huawei Developer Conference 2026 (HDC 2026)**, Huawei's terminal-software president **Gong Ti** announced that the **full NearLink (SparkLink / 星闪) protocol stack will be open-sourced to the OpenHarmony community on July 15, 2026**. The released code is described as **over 150,000 lines** and will be hosted on the OpenHarmony platform. This is the first time the short-range wireless technology — until now locked inside Huawei's own device ecosystem — becomes freely available to any manufacturer, developer, or researcher.

NearLink is a next-generation short-range wireless standard developed under the **International SparkLink Alliance (iSLA)**, an industry body founded in September 2020 under Huawei's leadership. It spans two profiles: **SparkLink Basic (SLB)** for high-performance/low-latency links and **SparkLink Low Energy (SLE)** for power-constrained peripherals — positioned as a single stack intended to supersede both Bluetooth and parts of Wi-Fi for Chinese-ecosystem devices. The technology already ships in **50+ wireless HID devices** (keyboards, mice — including a Rapoo NearLink gaming mouse shipped March 2026) and **NearLink car keys deployed across 70+ vehicle manufacturers**.

Open-sourcing to OpenHarmony reframes NearLink from a vertically-integrated Huawei feature into an ecosystem play: third parties can implement, audit, and extend the stack without a Huawei licensing dependency, lowering the barrier for non-Huawei silicon and OEMs to adopt it. It follows the recent national-standard milestones already in the KB (GB/T 46803 SLE national standard, the SparkLink ecosystem/E2.0 rollout, car-key 2.0), and is the clearest signal yet that NearLink is pursuing a broad, openly-implementable footprint rather than a single-vendor one — though, as commentators note, the ecosystem remains **China-centric** for now.

## Summary (ZH)

在 **华为开发者大会 2026（HDC 2026）**上，华为终端软件总裁**龚体**宣布：**完整的星闪（NearLink / SparkLink）协议栈将于 2026 年 7 月 15 日向 OpenHarmony 社区开源**。所发布代码据称**超过 15 万行**，将托管于 OpenHarmony 平台。这是这项短距无线技术——此前仅封闭于华为自有设备生态——首次向任何厂商、开发者或研究者免费开放。

星闪是在 **国际星闪联盟（iSLA）**（2020 年 9 月由华为牵头成立的行业组织）下制定的新一代短距无线标准。它包含两类：面向高性能/低时延链路的 **星闪基础（SLB）**与面向功耗受限外设的 **星闪低功耗（SLE）**——被定位为意图在中国生态设备上同时取代蓝牙及部分 Wi-Fi 的统一协议栈。该技术已用于 **50+ 款无线 HID 设备**（键盘、鼠标——含 2026 年 3 月出货的雷柏星闪游戏鼠标）以及**部署于 70+ 家车企的星闪车钥匙**。

向 OpenHarmony 开源把星闪从华为垂直整合的特性，重塑为生态打法：第三方可在不依赖华为授权的情况下实现、审计并扩展该协议栈，降低非华为芯片与 OEM 的采用门槛。它延续了 KB 中已有的国家标准里程碑（GB/T 46803 SLE 国标、星闪生态/E2.0 推进、车钥匙 2.0），是迄今为止星闪追求广泛、可公开实现的版图（而非单一厂商）的最清晰信号——尽管评论指出，其生态目前仍以**中国为中心**。

## Key technical points (EN)

- **Announcement**: HDC 2026, by terminal-software president Gong Ti; full NearLink stack open-sourced to OpenHarmony, **live July 15, 2026**, **150,000+ lines**.
- **Scope**: the complete protocol stack (covers both SLB high-performance and SLE low-energy profiles).
- **Governance**: developed under iSLA (founded Sept 2020, Huawei-led).
- **Adoption today**: 50+ HID devices (incl. Rapoo gaming mouse, Mar 2026); car keys across 70+ manufacturers.
- **Caveat**: ecosystem remains China-centric per industry commentary.

## Key technical points (ZH)

- **宣布**：HDC 2026，终端软件总裁龚体宣布；完整星闪协议栈向 OpenHarmony 开源，**7 月 15 日上线**，**超 15 万行代码**。
- **范围**：完整协议栈（涵盖 SLB 高性能与 SLE 低功耗两类）。
- **治理**：在 iSLA 下制定（2020 年 9 月成立，华为牵头）。
- **现有采用**：50+ 款 HID 设备（含雷柏游戏鼠标，2026 年 3 月）；70+ 家车企车钥匙。
- **限制**：据业界评论，生态目前仍以中国为中心。

## Why it matters / what's new (EN)

The KB's NearLink coverage so far has tracked standards (GB/T 46803) and product/ecosystem rollout. Open-sourcing the **entire stack** to OpenHarmony is a category change in distribution strategy: it removes the Huawei-licensing gate, invites independent implementations and security audits, and is the strongest move yet toward making NearLink an openly adoptable Bluetooth/Wi-Fi alternative beyond Huawei's own hardware. Whether non-China silicon vendors pick it up is the open question this sets up.

## Why it matters / what's new (ZH)

KB 此前的星闪覆盖多聚焦标准（GB/T 46803）与产品/生态推进。将**整个协议栈**向 OpenHarmony 开源是分发策略上的范式转变：去除华为授权门槛，引入独立实现与安全审计，是迄今为止把星闪打造为可公开采用的蓝牙/Wi-Fi 替代品（超越华为自有硬件）的最强动作。非中国芯片厂商是否会采用，是这一动作留下的悬念。
