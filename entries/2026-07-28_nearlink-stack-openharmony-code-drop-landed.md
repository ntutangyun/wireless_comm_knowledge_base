---
id: 2026-07-28_nearlink-stack-openharmony-code-drop-landed
date_published: 2026-07-15
date_found: 2026-07-28
type: industry-news
technology: nearlink
title_en: "NearLink protocol stack open-sourcing LANDED: 100k+ lines live in the OpenHarmony community repo on schedule (July 15)"
title_zh: "星闪协议栈开源落地：10 万余行代码如期（7 月 15 日）上线开源鸿蒙社区仓库"
url: "https://www.163.com/dy/article/L2F91EGD0511B8LM.html"
source_quality: full
topics: [NearLink, SparkLink, OpenHarmony, open-source, SSAP]
topic_primary: nearlink-sle
topics_secondary: [nearlink-slb]
novelty_score: 2
---

## Summary (EN)

The NearLink code drop promised at Huawei Developer Conference 2026 has landed on schedule. Per a July 22 report (NetEase tech), the NearLink (星闪) protocol stack was formally and fully open-sourced to the OpenHarmony community on July 15, 2026, under the Open Atom Open Source Foundation, with the first batch comprising over 100,000 lines of core protocol-stack code. The repository is live at atomgit.com/openharmony/communication_nearlink_service.

The released stack spans two layers. The Foundational Service Layer provides standardized connectivity with dual-channel transmission — SSAP control signalling alongside Port data transfer. The Foundational Application Layer ships industry-standard profile configurations including HID (human-interface devices), BAS (battery service), DIS (device information), MC and VCC — the profile set that lets wireless mice, keyboards and speakers interoperate over NearLink out of the box. The article does not enumerate SLB-versus-SLE coverage or name downstream device partners.

## Summary (ZH)

华为开发者大会 2026 上承诺的星闪代码开源如期落地。据网易科技 7 月 22 日报道，星闪（NearLink）协议栈已于 2026 年 7 月 15 日在开放原子开源基金会下正式向开源鸿蒙（OpenHarmony）社区全量开源，首批开源核心协议栈代码等十余万行高质量代码。代码仓库已上线：atomgit.com/openharmony/communication_nearlink_service。

开源协议栈覆盖两层：基础服务层提供标准化连接能力与双通道传输——SSAP 控制信令与 Port 数据传输并行；基础应用层提供行业标准配置，包括 HID（人机接口设备）、BAS（电池服务）、DIS（设备信息）、MC 与 VCC——正是让无线鼠标、键盘、音箱开箱即用地通过星闪互联的配置集合。文章未列明 SLB 与 SLE 的覆盖范围，也未点名下游设备伙伴。

## Key technical points (EN)

- Landed July 15, 2026, on the schedule announced at HDC 2026 (June 12); first batch 100k+ lines of core stack code.
- Live repo: https://atomgit.com/openharmony/communication_nearlink_service (OpenHarmony community, Open Atom Foundation governance).
- Foundational Service Layer: standardized connectivity, dual-channel SSAP control + Port data transmission.
- Foundational Application Layer: HID, BAS, DIS, MC, VCC profiles — peripherals-first interoperability set.
- HDC 2026 had promised 150k lines; the first batch is 100k+ — remaining components presumably follow in later batches.

## Key technical points (ZH)

- 2026 年 7 月 15 日按 HDC 2026（6 月 12 日）宣布的时间表落地；首批 10 万余行核心协议栈代码。
- 仓库已上线：https://atomgit.com/openharmony/communication_nearlink_service（开源鸿蒙社区，开放原子基金会治理）。
- 基础服务层：标准化连接能力，SSAP 控制 + Port 数据双通道传输。
- 基础应用层：HID、BAS、DIS、MC、VCC 配置——外设优先的互操作集合。
- HDC 2026 曾承诺 15 万行；首批为 10 万余行——其余组件预计后续分批开源。

## Why it matters / what's new (EN)

This closes the loop opened by 2026-06-23's HDC announcement entry (Huawei open-sources full NearLink stack): the 2026-07-19 scan found only re-treads of the promise and logged a watch item; this entry records the verified landing — dated post-event report plus a live repo URL. For the ecosystem, a genuinely open stack under foundation governance is NearLink's answer to the BlueZ role in Bluetooth's history: third-party silicon and device vendors can now implement against public code rather than Huawei SDKs, which is the precondition for the technology spreading beyond the Huawei/HarmonyOS device family.

## Why it matters / what's new (ZH)

本条目闭合了 2026-06-23 HDC 宣布条目（华为全量开源星闪协议栈）打开的环：2026-07-19 的扫描只发现承诺的重复报道并记录了观察项；本条目记录经验证的落地——事件后发布的报道加上已上线的仓库 URL。对生态而言，基金会治理下真正开放的协议栈是星闪对蓝牙历史上 BlueZ 角色的回应：第三方芯片与设备厂商现在可以对照公开代码而非华为 SDK 进行实现——这是星闪走出华为/鸿蒙设备家族的前提条件。
