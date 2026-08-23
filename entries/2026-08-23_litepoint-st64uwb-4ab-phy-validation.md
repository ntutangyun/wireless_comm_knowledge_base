---
id: 2026-08-23_litepoint-st64uwb-4ab-phy-validation
date_published: 2026-08-18
date_found: 2026-08-23
type: industry-news
technology: uwb
title_en: "LitePoint validates STMicroelectronics ST64UWB PHY against the IEEE 802.15.4ab draft with the IQgig-UWB+ test system"
title_zh: "LitePoint 使用 IQgig-UWB+ 测试系统对意法半导体 ST64UWB 物理层完成 IEEE 802.15.4ab 草案验证"
url: "https://www.stocktitan.net/news/TER/lite-point-collaborates-with-st-microelectronics-to-validate-next-hnb900q1ww8q.html"
source_quality: full
topics: [UWB, 802.15.4ab, PHY-validation, test-and-measurement, IQgig-UWB+, ST64UWB, MMS, narrowband-assist, LitePoint, STMicroelectronics]
topic_primary: uwb-ranging
topics_secondary: [uwb-fi-ra, uwb-radar]
novelty_score: 2
---

## Summary (EN)

On 18 August 2026, LitePoint (a wholly owned Teradyne subsidiary, San Jose) announced that it has validated the physical-layer (PHY) performance of STMicroelectronics' ST64UWB chip family against the IEEE 802.15.4ab draft specification using its next-generation UWB tester, the IQgig-UWB+. The joint effort verified ranging accuracy, signal integrity, and radio performance of ST's silicon — the family ST launched at Embedded World 2026 as the industry's first fully integrated 802.15.4ab SoC — covering the amendment's headline features: multi-millisecond ranging (MMS), narrowband assistance (NBA), and radar-based sensing (e.g. child-presence detection).

The announcement is notable less for the chip (already covered in this KB) than for what it says about the 802.15.4ab ecosystem's maturity: commercial test-equipment coverage for the draft amendment now exists and has been exercised on real first-generation silicon. LitePoint's VP of Marketing Adam Smith framed the collaboration as demonstrating "the depth of test coverage the market now requires"; ST General Manager Rias Al-Kadi said LitePoint's tooling let ST validate its PHY "quickly and thoroughly". Independent PHY validation is a prerequisite step between silicon launch and high-volume design wins in automotive digital key, consumer access, and industrial IoT — and it lands one month before the FiRa Plugfest #2 interoperability event (15–17 September 2026), which STMicroelectronics itself hosts.

## Summary (ZH)

2026 年 8 月 18 日，LitePoint（Teradyne 全资子公司，总部圣何塞）宣布：已使用其下一代 UWB 测试仪 IQgig-UWB+，按照 IEEE 802.15.4ab 草案规范完成对意法半导体（ST）ST64UWB 芯片系列物理层（PHY）性能的验证。双方联合验证了 ST 芯片的测距精度、信号完整性与射频性能——该系列即 ST 在 Embedded World 2026 上发布、号称业界首款全集成 802.15.4ab SoC 的产品——覆盖该修订版的核心特性：多毫秒测距（MMS）、窄带辅助（NBA）以及基于雷达的感知（如儿童在场检测）。

这则公告的看点不在芯片本身（本知识库已有收录），而在于它折射出 802.15.4ab 生态的成熟度：面向该草案修订版的商用测试仪器覆盖已经存在，并且已在真实的第一代硅片上完成实测。LitePoint 市场副总裁 Adam Smith 称此次合作展示了「市场当前所需的测试覆盖深度」；ST 总经理 Rias Al-Kadi 表示 LitePoint 的工具让 ST 得以「快速而彻底地」验证其物理层。独立的 PHY 验证是从芯片发布走向车载数字钥匙、消费级门禁与工业物联网大批量设计导入之间的必经环节——且这一消息恰好落在 FiRa Plugfest #2 互操作活动（2026 年 9 月 15–17 日，由意法半导体主办）前一个月。

## Key technical points (EN)

- **What was validated**: PHY compliance and performance of the **ST64UWB** family against the **IEEE 802.15.4ab draft** specification (the amendment is still pre-ratification; latest public draft D03, Sept 2025).
- **Test system**: LitePoint **IQgig-UWB+** — next-generation UWB tester verifying **ranging accuracy, signal integrity, and radio performance**.
- **4ab feature coverage**: multi-millisecond ranging (**MMS**), narrowband assistance (**NBA**), and **radar-based sensing** modes (child-presence detection cited).
- **Quotes**: Adam Smith (VP Marketing, LitePoint) — "the depth of test coverage the market now requires"; Rias Al-Kadi (GM, STMicroelectronics) — validation done "quickly and thoroughly".
- **Target application classes**: hands-free digital car keys, automotive safety, consumer devices, industrial IoT.
- **Announced 18 August 2026** (Businesswire; LitePoint is a Teradyne subsidiary, NASDAQ: TER). No quantitative test results were disclosed in the PR.

## Key technical points (ZH)

- **验证对象**：**ST64UWB** 系列相对 **IEEE 802.15.4ab 草案** 规范的物理层合规性与性能（该修订版尚未正式批准；最新公开草案为 2025 年 9 月的 D03）。
- **测试系统**：LitePoint **IQgig-UWB+**——下一代 UWB 测试仪，验证 **测距精度、信号完整性与射频性能**。
- **4ab 特性覆盖**：多毫秒测距（**MMS**）、窄带辅助（**NBA**）与 **基于雷达的感知** 模式（PR 中举例儿童在场检测）。
- **引述**：LitePoint 市场副总裁 Adam Smith——「市场当前所需的测试覆盖深度」；ST 总经理 Rias Al-Kadi——验证「快速而彻底」。
- **目标应用类别**：免提数字车钥匙、汽车安全、消费设备、工业物联网。
- **2026 年 8 月 18 日发布**（Businesswire；LitePoint 为 Teradyne 子公司，NASDAQ: TER）。PR 中未披露量化测试数据。

## Why it matters / what's new (EN)

This is the KB's first UWB test-and-measurement entry, and it marks a distinct ecosystem stage the silicon-launch entries (ST64UWB, Calterah Dubhe, CEVA IP, imec NBA receiver) do not: draft-stage 802.15.4ab now has commercial tester support that has been exercised end-to-end on shipping first-generation silicon. That matters for the whole 4ab wave — NXP's and Qorvo's still-unannounced 4ab parts will need the same PHY validation path, and interoperability events depend on exactly this class of equipment (the Calterah Dubhe entry already showed Rohde & Schwarz playing the same role at CES 2026; LitePoint/Teradyne joining confirms a competitive 4ab test market rather than a one-off). The timing — one month before the ST-hosted FiRa Plugfest #2 (15–17 Sep) — positions ST64UWB to arrive at the interop table with third-party-verified PHY behavior. No numbers were published, so this entry records the ecosystem milestone, not a performance claim; quantitative 4ab conformance data would be the follow-up event worth capturing.

## Why it matters / what's new (ZH)

这是本知识库 UWB 桶的第一条测试测量类条目，它标记了硅片发布类条目（ST64UWB、Calterah Dubhe、CEVA IP、imec NBA 接收机）未覆盖的一个独立生态阶段：处于草案阶段的 802.15.4ab 如今已有商用测试仪支持，且已在量产出货的第一代硅片上端到端实测过。这对整个 4ab 浪潮都重要——NXP 与 Qorvo 尚未发布的 4ab 器件将需要同样的 PHY 验证路径，而互操作活动正依赖这类设备（Calterah Dubhe 条目已显示罗德与施瓦茨在 CES 2026 扮演同一角色；LitePoint／Teradyne 的加入表明 4ab 测试市场已呈竞争格局，而非孤例）。时间点恰在 ST 主办的 FiRa Plugfest #2（9 月 15–17 日）前一个月，使 ST64UWB 得以带着第三方验证过的物理层表现进入互操作测试。PR 未公布任何数据，因此本条目记录的是生态里程碑而非性能主张；量化的 4ab 一致性数据将是值得后续捕捉的事件。
