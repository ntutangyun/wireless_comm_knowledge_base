---
id: 2026-09-07_nearlink-hongtu-plan-2026-testing-incentive
date_published: 2026-09-03
date_found: 2026-09-07
type: industry-news
technology: nearlink
title_en: "SparkLink Alliance launches the 'HongTu Plan 2026' testing-cost incentive to accelerate chip/module/development-board/terminal certification listings"
title_zh: "星闪联盟推出《鸿图计划2026》：以测试费用补贴激励芯片/模组/开发板/终端加速完成星闪认证列名"
url: "https://www.isla.org.cn/dynamics/details?id=936&navigationIndex=0&url=/dynamics&type=0"
source_quality: full
topics: [NearLink, SparkLink, iSLA, certification, conformance-testing, OpenHarmony, ecosystem-incentive]
topic_primary: nearlink-sle
topics_secondary: [nearlink-slb]
novelty_score: 2
---

## Summary (EN)

On September 3, 2026 the International SparkLink Alliance (iSLA) published a member notice for "HongTu Plan 2026" (《鸿图计划2026》), described as a program to "accelerate the enrichment and scaled deployment of SparkLink ecosystem products." Unlike the alliance's existing certification machinery (rules issued 2025-10-15; first certificates and public conformance database live by early 2026, per this KB's 2026-08-17 consolidated entry), HongTu Plan 2026 is a financial-incentive layer sitting on top of that machinery: it reimburses part of a member's SparkLink-testing costs for chips, modules, development boards and terminal devices, up to 20,000 RMB per certified product listing (actual reimbursement capped at the lower of the incentive amount or actual testing cost).

Eligibility requires iSLA membership and — notably — that the product first pass an "OpenHarmony compatibility assessment," which the notice frames as a distinct, system-layer certification separate from SparkLink's own wireless-communication-layer conformance testing. Only certifications completed on or after January 1, 2026 qualify, acceptance-application submissions close December 15, 2026, and funding is distributed first-come-first-served until exhausted; each member organisation may claim for at most 5 products per year, one claim per product.

## Summary (ZH)

2026 年 9 月 3 日，国际星闪无线短距通信联盟（iSLA）发布《鸿图计划2026》会员通知，称该计划旨在"加速星闪生态产品的丰富和规模化部署"。与联盟既有的认证体系（规则于 2025-10-15 发布实施；首批证书及公开一致性数据库已于 2026 年初上线，见本库 2026-08-17 整合条目）不同，《鸿图计划2026》是叠加在该体系之上的一层财政激励机制：面向会员企业为芯片、模组、开发板及终端设备完成星闪测试所产生的费用给予部分报销，每个通过认证列名的产品最高补贴 2 万元人民币（实际报销金额取补贴额度与实际测试费用两者中的较低值）。

参与资格要求企业为 iSLA 会员，且——值得注意的是——产品须首先通过"OpenHarmony 兼容性测评"，通知将其定义为独立于星闪无线通信层一致性测试之外的、系统层认证。仅 2026 年 1 月 1 日及以后完成的认证方可申报，提交验收申请的最晚时间为 2026 年 12 月 15 日，名额按先到先得原则发放至用完为止；每家会员单位每年最多可申报 5 款产品，每款产品每年限报一次。

## Key technical points (EN)

- Incentive: up to 20,000 RMB per SparkLink-certified product listing, capped at actual testing cost if lower.
- Eligibility gate: product must first pass an "OpenHarmony compatibility assessment" — a system-layer certification the notice explicitly distinguishes from SparkLink's own wireless-communication-layer (RF/protocol/interop) conformance testing.
- Qualifying window: certification completed 2026-01-01 or later; acceptance-application submissions accepted through 2026-12-15; first-come-first-served until the fund is exhausted.
- Per-member cap: maximum 5 products per calendar year, each product claimable only once per year.
- Targets four product classes explicitly: chips, modules, development boards, and terminal devices.

## Key technical points (ZH)

- 补贴额度：每个通过星闪认证列名的产品最高补贴 2 万元人民币，若实际测试费用更低则按实际费用报销。
- 参与门槛：产品须先通过"OpenHarmony 兼容性测评"——通知明确将其界定为独立于星闪自身无线通信层（射频/协议/互联互通）一致性测试之外的系统层认证。
- 申报窗口：认证须在 2026 年 1 月 1 日及以后完成；提交验收申请的最晚时间为 2026 年 12 月 15 日；名额按先到先得原则发放至用完为止。
- 单会员限额：每个会员单位每年最多申报 5 款产品，每款产品每年仅可申报一次。
- 明确覆盖四类产品：芯片、模组、开发板、终端设备。

## Why it matters / what's new (EN)

This KB's existing certification-scheme entry (2026-08-17) documented the rules, numbering scheme and public database that make SparkLink conformance testing operational, but flagged no mechanism for driving member adoption of that testing beyond the OpenLab interoperability-testing infrastructure (44 vendors / 57 products passed as of that entry). HongTu Plan 2026 is a documented instance of the alliance using a direct financial subsidy — rather than only technical infrastructure — to lower the cost barrier to certification, explicitly aimed at "enrichment and scaled deployment" of the ecosystem. The requirement that a product first pass OpenHarmony compatibility assessment before SparkLink certification costs are reimbursable is also a new structural detail: it formally couples SparkLink hardware certification to the OpenHarmony software ecosystem at the incentive-policy level, reinforcing the pairing already visible in this KB's device-level entries (e.g. the 2026-08-17 xiaohong-AI OpenHarmony/NearLink device entry) but this time as an explicit alliance policy rather than a single vendor's implementation choice.

## Why it matters / what's new (ZH)

本库既有的认证体系条目（2026-08-17）记录了使星闪一致性测试得以运行的规则、编号方案与公开数据库，但除 OpenLab 互联互通测试基础设施（截至该条目已有 44 家厂商 57 款产品通过）外，未见任何推动会员主动完成测试的机制。《鸿图计划2026》是联盟有文献记录地采用直接财政补贴——而非仅提供技术基础设施——来降低认证成本门槛的举措，明确以"生态产品的丰富和规模化部署"为目标。要求产品须先通过 OpenHarmony 兼容性测评方可申领星闪认证测试费补贴，也是一个新的结构性细节：这在激励政策层面正式将星闪硬件认证与 OpenHarmony 软件生态绑定，呼应了本库设备层条目中已可见的搭配关系（如 2026-08-17 的小红 AI 鸿蒙/星闪设备条目），但这一次是以明确的联盟政策形式出现，而非单一厂商的实现选择。

## Images

*(No redistributable images for this entry — the source notice's body content is text-only, delivered via the alliance's member-notice feed.)*
