---
id: 2026-07-24_nearlink-stack-opensource-landing
date_published: 2026-07-22
date_found: 2026-07-24
type: industry-news
technology: nearlink
title_en: "NearLink stack open-source drop confirmed landed: 100k+ lines in OpenHarmony via AtomGit, OpenAtom Foundation announcement"
title_zh: "星闪协议栈开源正式落地：10 万余行代码经 AtomGit 并入 OpenHarmony，开放原子基金会官宣"
url: "https://dt.zol.com.cn/1219/12198835.html"
source_quality: full
topics: [NearLink, SparkLink, OpenHarmony, open-source, SLB, SLE]
topic_primary: nearlink-slb
topics_secondary: [nearlink-sle]
novelty_score: 2
---

## Summary (EN)

The NearLink open-source promise made at HDC 2026 (KB entry 2026-06-23_nearlink-open-source-openharmony-hdc2026, which committed to a July 15 code drop) has now verifiably landed. On July 22, 2026, the OpenAtom Open Source Foundation announced that the NearLink (星闪) protocol stack — over 100,000 lines of core protocol-stack code (some coverage cites 150,000+ including tooling) — has been fully open-sourced and formally incorporated into the OpenHarmony community, hosted on the AtomGit platform. The drop occurred on July 15 as scheduled, per Huawei's Gong Ti.

The release is structured as modular protocol-stack components with unified APIs explicitly aimed at cross-chip interoperability — applications reach NearLink functionality through standard interfaces without vendor lock-in, so non-Huawei silicon vendors can implement compatible chips against the same stack. Coverage frames the strategic shift: a short-range technology previously confined to Huawei's device ecosystem is now available to any manufacturer, developer, or researcher, with the stated integration axis spanning industry standards, chip R&D, and the open-source system ecosystem. Analyst pieces (Leiphone's "last meter of IoT" essay) read the move as NearLink's bid to escape the single-vendor trap that limits its challenge to Bluetooth.

## Summary (ZH)

HDC 2026 上做出的星闪开源承诺（KB 条目 2026-06-23_nearlink-open-source-openharmony-hdc2026，承诺 7 月 15 日代码落地）现已得到可验证的兑现。2026 年 7 月 22 日，开放原子开源基金会宣布星闪协议栈 —— 超过 10 万行核心协议栈代码（部分报道计入工具链后称 15 万行以上）—— 已全面开源并正式并入 OpenHarmony 社区，托管于 AtomGit 平台。按华为龚体的说法，代码于 7 月 15 日如期落地。

本次发布以模块化协议栈组件 + 统一 API 的形式组织，明确面向跨芯片互操作 —— 应用通过标准接口调用星闪能力、无厂商锁定，非华为芯片厂商可以基于同一协议栈实现兼容芯片。报道普遍将其解读为战略转向：此前局限于华为设备生态的短距技术，现向任何厂商、开发者与研究者开放，整合轴线覆盖行业标准、芯片研发与开源系统生态三个层面。分析文章（雷峰网"万物互联最后一米"）认为此举是星闪摆脱单一厂商困境、正面挑战蓝牙的关键一步。

## Key technical points (EN)

- 100,000+ lines of core protocol-stack code (150k+ in some counts) open-sourced July 15, 2026; OpenAtom Foundation formal announcement July 22.
- Hosted on AtomGit; incorporated into the OpenHarmony community — the landing the 2026-06-23 announcement promised. Live repo: https://atomgit.com/openharmony/communication_nearlink_service.
- Two-layer structure: a Foundational Service Layer (standardized connectivity, dual-channel SSAP control signalling + Port data transfer) and a Foundational Application Layer shipping HID, BAS, DIS, MC and VCC profiles — the peripherals-first interoperability set (wireless mice, keyboards, speakers out of the box).
- Modular stack with unified APIs for cross-chip interoperability; explicit no-vendor-lock-in framing.
- Integration spans standards development, chip R&D, and the open-source OS ecosystem; HarmonyOS and OpenHarmony applications share the API surface.

## Key technical points (ZH)

- 10 万余行核心协议栈代码（部分口径 15 万行以上）于 2026-07-15 开源；开放原子基金会 7 月 22 日正式官宣。
- 托管于 AtomGit；并入 OpenHarmony 社区 —— 兑现 2026-06-23 条目所记录的承诺。代码仓库：https://atomgit.com/openharmony/communication_nearlink_service。
- 两层结构：基础服务层（标准化连接能力，SSAP 控制信令 + Port 数据传输双通道）与基础应用层（HID、BAS、DIS、MC、VCC 配置——外设优先的互操作集合，无线鼠标、键盘、音箱开箱即用）。
- 模块化协议栈 + 统一 API 实现跨芯片互操作；明确"无厂商锁定"。
- 整合覆盖标准制定、芯片研发与开源操作系统生态；HarmonyOS 与 OpenHarmony 应用共享同一 API 面。

## Why it matters / what's new (EN)

This closes the loop opened by 2026-06-23_nearlink-open-source-openharmony-hdc2026: the 2026-07-19 scan explicitly declined to write a landing entry because no verifiable artifact existed — that verification now exists (OpenAtom announcement + AtomGit hosting + dated post-landing coverage). For the nearlink-slb/sle bins the substantive change is third-party implementability: the unified-API stack is the first path for non-Huawei chips (beyond licensees) to target NearLink compatibility, which is the precondition for the technology competing with Bluetooth outside Huawei's ecosystem. Next signals: first non-Huawei chip vendor announcing stack adoption, and whether the SparkLink Alliance aligns its certification program to the open stack.

## Why it matters / what's new (ZH)

本条目闭合了 2026-06-23_nearlink-open-source-openharmony-hdc2026 打开的环：2026-07-19 的扫描因缺乏可验证的落地证据而明确不写条目 —— 如今验证已具备（开放原子基金会官宣 + AtomGit 托管 + 落地后带日期的报道）。对 nearlink-slb/sle 主题而言，实质变化在于第三方可实现性：统一 API 协议栈是非华为芯片（授权厂商之外）实现星闪兼容的首条路径，也是该技术走出华为生态、与蓝牙竞争的前提条件。后续信号：首个宣布采用该协议栈的非华为芯片厂商，以及星闪联盟是否将认证体系对齐开源协议栈。
