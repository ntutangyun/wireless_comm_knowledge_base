---
id: 2026-09-16_asuswrt-merlin-no-wifi8-support-announcement
date_published: 2026-09-14
date_found: 2026-09-16
type: community-signal
technology: wifi
title_en: "Asuswrt-Merlin maintainer announces the project will not support ASUS Wi-Fi 8 routers"
title_zh: "Asuswrt-Merlin 维护者宣布该项目将不支持华硕 Wi-Fi 8 路由器"
url: "https://www.snbforums.com/threads/announcement-asuswrt-merlin-will-not-be-supporting-wifi-8-models.97913/"
source_quality: full
topics: [WiFi-8, firmware, Asuswrt-Merlin, router, community-tools]
topic_primary: wifi8-uhr
topics_secondary: [wifi7-deployment]
novelty_score: 2
---

## Summary (EN)

On 14 September 2026 (post timestamped 16:50 ET), RMerlin — the maintainer of Asuswrt-Merlin, the long-running third-party firmware for ASUS consumer routers — posted an announcement on SNBForums stating that the project will not be supporting ASUS's Wi-Fi 8 (802.11bn-class) router models. The post lays out the reasons directly. Taking on the new generation would mean "commit to another ~6 years of development/support". The Asuswrt codebase has, in the maintainer's account, become harder to work with: the SDN feature set, a new network architecture and the move to a Bootstrap-based web framework are described as obstacles beyond the maintainer's areas of expertise, and "between the increase in complexity and the increased amount of closed source code, making significant changes have become much more difficult." Keeping five separate code branches alive means repeated GPL merges, each taking days. The post also contrasts hardware pricing across the project's lifetime — "When I started in 2012, the flagship was the RT-N66U, at $200 CAD. Today, the first Wifi 8 model is at $1300 CAD" — and closes on the personal cost: "Having done this for 14 years already, I no longer have the energy or the motivation to do this for another 6 years."

The announcement is explicit that the project is not ending and that currently supported models are not affected: "All of this does not mean that I am ending this project. One of the reasons behind the decision is to ensure that I can support the current models for as long as possible... nothing is currently changing after announcing this decision, everything is still going on as before." The post also states the decision "is mine alone and is unrelated to Asus, who even stepped forward asking if there was anything they could do to help change my mind." At the time of capture the thread had drawn 41 replies across three pages, largely expressing support for the decision and thanks for fourteen years of work.

## Summary (ZH)

2026 年 9 月 14 日（帖子时间戳为美东时间 16:50），长期为华硕消费级路由器提供第三方固件的 Asuswrt-Merlin 项目维护者 RMerlin 在 SNBForums 发布公告，表示该项目将不会支持华硕的 Wi-Fi 8（802.11bn 级）路由器机型。帖子直接列出了原因：接手新一代机型意味着"再承诺大约 6 年的开发与支持"（原文："commit to another ~6 years of development/support"）；按维护者的描述，Asuswrt 代码库已越来越难以处理——SDN 功能集、新的网络架构以及向 Bootstrap 网页框架的迁移，都被称为超出其专长范围的障碍，并且"随着复杂度上升和闭源代码比例增加，做出重大改动已变得困难得多"（原文："between the increase in complexity and the increased amount of closed source code, making significant changes have become much more difficult"）；同时维护五个独立代码分支意味着反复进行 GPL 合并，每次都要耗费数天。帖子还对比了项目生命周期内的硬件价格——"我 2012 年开始时，旗舰机 RT-N66U 售价 200 加元；如今第一款 Wi-Fi 8 机型售价 1300 加元"——并以个人代价作结："已经做了 14 年，我不再有精力和动力再做 6 年。"

公告明确指出该项目并未终止、当前受支持的机型也不受影响："这一切并不意味着我要结束这个项目。作出该决定的原因之一，正是为了确保我能尽可能长久地支持当前机型……宣布该决定后目前没有任何变化，一切照旧。"帖中还写明该决定"完全出于我个人，与华硕无关——华硕甚至主动询问是否有什么办法可以改变我的想法"。截至采集时，该帖已有 41 条回复（共 3 页），多数表达了对这一决定的支持，并感谢其十四年来的工作。

## Key technical points (EN)

- Scope of the decision: no Asuswrt-Merlin builds for ASUS Wi-Fi 8 (802.11bn-class) models; currently supported models keep receiving updates and the project is not ending. The maintainer states the decision is his alone and unrelated to ASUS.
- Codebase reasons given: SDN feature set, a new network architecture and a Bootstrap-based web UI framework, plus a growing share of closed-source components, all cited as making significant changes harder.
- Maintenance load cited: five concurrent code branches, each requiring its own multi-day GPL merge whenever ASUS publishes new GPL sources.
- Commitment horizon cited: a new router generation implies roughly six more years of support.
- Price contrast cited by the maintainer: RT-N66U at CAD 200 in 2012 versus the first Wi-Fi 8 model at CAD 1300.
- Community response at capture: 41 replies over three pages, predominantly supportive.

## Key technical points (ZH)

- 决定范围：不为华硕 Wi-Fi 8（802.11bn 级）机型提供 Asuswrt-Merlin 固件；当前受支持的机型继续获得更新，项目并未终止。维护者表示该决定完全出于个人，与华硕无关。
- 帖中给出的代码库原因：SDN 功能集、新网络架构、基于 Bootstrap 的网页界面框架，以及闭源组件比例上升，均被指为使重大改动更困难的因素。
- 帖中给出的维护负担：五个并行代码分支，华硕每次发布新 GPL 源码都要为每个分支做一次耗时数天的 GPL 合并。
- 帖中给出的承诺周期：新一代路由器意味着大约再支持六年。
- 维护者给出的价格对比：2012 年 RT-N66U 售 200 加元，如今首款 Wi-Fi 8 机型售 1300 加元。
- 采集时的社区反应：41 条回复、3 页，以支持为主。

## Why it matters / what's new (EN)

Asuswrt-Merlin has been the reference third-party firmware for ASUS routers since 2012, and the SNBForums community around it is one of the more active consumer Wi-Fi tuning communities. The announcement means the first generation of ASUS Wi-Fi 8 hardware will ship without the Merlin firmware option and its add-on ecosystem that enthusiasts have relied on (see this KB's 2026-08-13 Asuswrt-Merlin entry). The stated reasons are also a data point on vendor firmware itself: the maintainer attributes the decision in part to the stock firmware's growing complexity and closed-source share, not only to personal capacity.

## Why it matters / what's new (ZH)

自 2012 年以来，Asuswrt-Merlin 一直是华硕路由器事实上的参考级第三方固件，围绕它的 SNBForums 社区也是较活跃的消费级 Wi-Fi 调优社区之一。这一公告意味着华硕首批 Wi-Fi 8 硬件上市时将没有爱好者们习惯依赖的 Merlin 固件及其插件生态（参见本知识库 2026-08-13 的 Asuswrt-Merlin 条目）。帖中给出的原因本身也是关于厂商固件的一个信号：维护者将这一决定部分归因于原厂固件复杂度和闭源比例的上升，而不仅仅是个人精力。

## Images

None.
