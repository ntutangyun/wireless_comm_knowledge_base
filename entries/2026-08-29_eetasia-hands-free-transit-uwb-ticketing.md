---
id: 2026-08-29_eetasia-hands-free-transit-uwb-ticketing
date_published: 2026-07-22
date_found: 2026-08-29
type: industry-news
technology: uwb
title_en: "Hands-free transit ticketing: UWB gates in Amsterdam and Milan, and JR East/Sony's BLE-wake-then-UWB Suica architecture"
title_zh: "免持交通票务：阿姆斯特丹与米兰的 UWB 闸机，以及 JR East／索尼「BLE 唤醒 + UWB 测距」的新一代 Suica 架构"
url: "https://www.eetasia.com/hands-free-transit-ticketing-the-emerging-role-of-wireless-technologies/"
source_quality: full
topics: [UWB, FiRa, transit ticketing, fare collection, BLE, Channel Sounding, AoA, FeliCa, Suica, hands-free access]
topic_primary: uwb-fi-ra
topics_secondary: [uwb-ranging, uwb-security]
novelty_score: 2
---

## Summary (EN)

An EE Times Asia analysis by Giorgio Zanella (Technotrend Market Research, 2026-07-22) surveys the state of **hands-free transit fare collection** — systems that recognise and charge a passenger as they walk through a gate, with no tap, scan, or handset interaction at all. The piece is the first KB item to lay out the *deployment map* for UWB in mass transit rather than a single operator announcement, and it is notable for treating UWB, Bluetooth Channel Sounding, Bluetooth Angle-of-Arrival, and directional BLE beacon arrays as a set of competing answers to the same engineering problem.

The framing problem is not raw ranging accuracy but **gate throughput under ambiguity**. Citing a FiRa Consortium 2023 report, the article puts the requirement for high-capacity stations at roughly **one passenger per second per gate** — which means a hands-free system must resolve not just *who* is near the gate but *which* of several nearby passengers is actually passing through it, and in *which direction*, fast enough not to stall the queue. That is the constraint that pushes designs toward UWB: proximity alone (RSSI-class BLE) cannot separate the passenger at the gate from the one waiting a metre behind it, and a mis-charge is worse operationally than a decline.

The deployment picture the article assembles spans three regions. In **Europe**, Hitachi Rail and municipal operator GVB piloted UWB hands-free gates at **Amsterdam Central Station** through the first half of 2026; **Nordcom**, working with **Truesense**, has positioned **Milan** as an early UWB rollout with deployments planned at selected station gates in **autumn 2026**. A useful contrast case is **Genoa**, which since 2022 has run a large *Bluetooth-only* beacon system — more than **7,000 beacons** across buses, metro, funiculars, lifts and stops — i.e. the scale-first, precision-second architecture that the UWB pilots are implicitly arguing against. In **Japan**, the article describes the most active testbed: Tokyo Metro stations evaluating BLE walk-through fare concepts with Sinumy and Toshiba, Osaka Metro testing facial-recognition gates, and — the technically most interesting item — **JR East and Sony exploring a next-generation Suica experience built on UWB-enabled FeliCa**.

The JR East/Sony architecture is the article's key technical disclosure: a **three-stage, BLE-then-UWB hybrid**. A BLE beacon placed near the station entrance is what first *wakes* the UWB function on the passenger's device, specifically so that the UWB radio is not left running and draining the handset battery; UWB then performs the precise, direction-aware ranging that authorises the fare at the gate. Bluetooth provides low-power discovery; UWB provides the precision and the security boundary. The stated timeline is deliberately long: field trials with compatible devices potentially starting **as early as 2027**, pilots expanding through 2026–2027, and broader commercial deployment targeted at **2028**. The article closes by noting a second-order incentive — the same wireless infrastructure yields passenger-flow analytics and crowd monitoring — alongside the privacy and security questions that continuous passive identification raises.

## Summary (ZH)

EE Times Asia 于 2026-07-22 发表 Giorgio Zanella（Technotrend Market Research）的分析文章，系统梳理了**免持式交通票务**的现状——即乘客走过闸机时被自动识别并扣费，全程无需刷卡、扫码或掏出手机。这是本知识库中第一篇给出 UWB 在公共交通领域**部署全景图**（而非单一运营商公告）的条目，其价值在于把 UWB、蓝牙 Channel Sounding、蓝牙 AoA 以及定向 BLE 信标阵列并列为同一工程问题的若干竞争解法。

问题的核心并非测距精度本身，而是**模糊场景下的闸机通行率**。文章引用 FiRa Consortium 2023 年报告，将大客流车站的要求量化为**每闸机每秒约一名乘客**。这意味着系统不仅要判断"谁在闸机附近"，还要在不阻塞队列的前提下判断"附近若干乘客中究竟是哪一位正在通过"以及"朝哪个方向通过"。正是这一约束把设计推向 UWB：仅靠 RSSI 级别的 BLE 邻近判断无法区分闸机口的乘客和身后一米处等待的乘客，而误扣费在运营上比拒绝通行更糟糕。

文章拼出的部署版图横跨三个区域。**欧洲**方面，Hitachi Rail 与市政运营商 GVB 在 2026 年上半年于**阿姆斯特丹中央车站**试点 UWB 免持闸机；**Nordcom** 联合 **Truesense** 把**米兰**定位为早期 UWB 落地城市，计划于 **2026 年秋季**在选定车站闸机部署。一个有用的对照是**热那亚**：该市自 2022 年起运行纯蓝牙信标系统，在公交、地铁、缆车、电梯与站点上部署了**逾 7,000 个信标**——正是"先规模、后精度"的架构，也正是 UWB 试点在隐含地反驳的对象。**日本**则是最活跃的试验场：东京地铁与 Sinumy、东芝评估 BLE 步行通过式票务；大阪地铁测试人脸识别闸机；而技术上最值得注意的是 **JR East 与索尼正在探索基于 UWB 增强 FeliCa 的新一代 Suica 体验**。

JR East／索尼的架构是全文最关键的技术披露：一套**三阶段的 BLE-then-UWB 混合方案**。设在车站入口附近的 BLE 信标首先**唤醒**乘客设备上的 UWB 功能——这样设计的明确目的是避免 UWB 射频常开而耗尽手机电量；随后由 UWB 完成带方向判别的精确测距，在闸机处完成扣费授权。蓝牙负责低功耗发现，UWB 负责精度与安全边界。时间表刻意保守：兼容设备的现场试验最早可能在 **2027 年**启动，试点在 2026–2027 年间扩大，更大范围的商用部署目标定在 **2028 年**。文章最后指出一个二阶动机——同一套无线基础设施可顺带产出客流分析与人群监测能力——同时也点出持续被动识别所引发的隐私与安全问题。

## Key technical points (EN)

- **Throughput, not accuracy, is the binding constraint.** FiRa's 2023 figure of ~**1 passenger/second/gate** for high-capacity stations is what disqualifies proximity-only BLE: the system must disambiguate *which* nearby passenger is transiting and in *which direction*, within the gate's dwell time.
- **Candidate radio approaches surveyed:** UWB (precision + direction in gated environments), Bluetooth Channel Sounding (ranging better than RSSI, on installed smartphone base), Bluetooth AoA, and directional BLE beacon architectures.
- **Amsterdam** — Hitachi Rail + GVB piloted UWB hands-free gates at Amsterdam Central Station during H1 2026.
- **Milan** — Nordcom with Truesense, deployments planned at selected station gates in autumn 2026.
- **Genoa (contrast case)** — >7,000 Bluetooth beacons since 2022 across buses, metro, funiculars, lifts and stops; the scale-first BLE architecture UWB pilots are competing against.
- **Japan testbeds** — Tokyo Metro + Sinumy + Toshiba (BLE walk-through fare concepts); Osaka Metro (facial-recognition gates); JR East + Sony (UWB-enabled FeliCa / next-generation Suica).
- **JR East / Sony three-stage architecture:** a BLE beacon near the station entrance **wakes the handset's UWB function** (explicitly to avoid battery drain from always-on UWB), then UWB performs the precise ranging that authorises the fare — BLE for low-power discovery, UWB for precision and the security boundary.
- **Timeline:** field trials with compatible devices potentially from **2027**; pilots expanding through 2026–2027; broader commercial deployment targeted **2028**.
- **Second-order value and risk:** the same infrastructure enables passenger-flow analysis and crowd monitoring, which is simultaneously the operational upside and the privacy/security exposure.

## Key technical points (ZH)

- **约束条件是通行率而非精度。** FiRa 2023 年给出的大客流车站 **每闸机每秒约 1 名乘客** 指标，正是仅靠邻近判断的 BLE 被淘汰的原因：系统必须在闸机停留时间内判别"是哪位乘客通过"以及"朝哪个方向"。
- **文中并列的候选无线方案：** UWB（闸机场景下的精度与方向判别）、蓝牙 Channel Sounding（优于 RSSI 的测距，且可复用既有手机存量）、蓝牙 AoA，以及定向 BLE 信标阵列。
- **阿姆斯特丹** —— Hitachi Rail 与 GVB 于 2026 年上半年在阿姆斯特丹中央车站试点 UWB 免持闸机。
- **米兰** —— Nordcom 与 Truesense 合作，计划 2026 年秋季在选定车站闸机部署。
- **热那亚（对照案例）** —— 自 2022 年起在公交、地铁、缆车、电梯与站点部署逾 7,000 个蓝牙信标；这是 UWB 试点所对标的"先规模后精度"架构。
- **日本试验场** —— 东京地铁 + Sinumy + 东芝（BLE 步行通过式票务）；大阪地铁（人脸识别闸机）；JR East + 索尼（UWB 增强 FeliCa／新一代 Suica）。
- **JR East／索尼三阶段架构：** 车站入口附近的 BLE 信标先**唤醒手机的 UWB 功能**（明确目的是避免 UWB 常开耗电），再由 UWB 完成授权扣费所需的精确测距——BLE 负责低功耗发现，UWB 负责精度与安全边界。
- **时间表：** 兼容设备现场试验最早 **2027 年**；试点在 2026–2027 年扩大；更大范围商用目标 **2028 年**。
- **二阶价值与风险：** 同一套基础设施可提供客流分析与人群监测，这既是运营收益，也是隐私与安全暴露面。

## Why it matters / what's new (EN)

This is a **deliberate in-window backfill** (published 2026-07-22, well inside the 12-month freshness window) with a clear gap rationale: the KB's only transit-payments coverage was `2026-05-21_jcb-uwb-payments-japan` — a single Japanese card-scheme commercialisation agreement — and the follow-on JCB/Resona/ODAWARA bus MOU was previously judged too thin to ingest because it was another pre-deployment agreement with no architecture. This article supplies what those items lacked: named European gate pilots (Amsterdam, Milan), a named contrast architecture (Genoa's 7,000-beacon BLE estate), and an actual mechanism.

The JR East/Sony **BLE-wake-then-UWB** staging is the substantive addition. It is the transit-gate instance of the same power-management pattern the KB has now seen from three other directions: the narrowband-assist radio in `2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist` and the imec 802.15.4ab NBA receiver, both of which exist so a cheap narrowband link can arbitrate when the expensive UWB radio turns on; and the layered NFC/BLE/UWB profile in `2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock`. Seeing the *same* wake-gating pattern arrived at independently by a fare-collection integrator — as an application-layer choice rather than a PHY feature — is evidence that "UWB always-on is a battery non-starter" is now a settled premise across the ecosystem, not a vendor talking point.

It also gives the bin its first quantitative *application* requirement. Every prior UWB ranging entry in the KB is graded on centimetres of error; this one grades on **passengers per second per gate**, which is a throughput-and-disambiguation metric that centimetre accuracy alone does not deliver. That reframing is directly relevant to `2026-08-20_ccc-digital-key-v4-plugfest-18` and the FiRa interop programme (`2026-08-04_fira-plugfests-uwb-interop-program`): interop testing that certifies ranging accuracy does not yet certify gate throughput under crowding, and the Amsterdam/Milan pilots are where that gap gets measured. Watch items: Milan's autumn-2026 gate deployment (the nearest verifiable landing event) and any published Amsterdam pilot results.

## Why it matters / what's new (ZH)

这是一次**有明确理由的窗口内回补**（发表于 2026-07-22，处于 12 个月新鲜度窗口内）：此前本库关于交通支付的覆盖仅有 `2026-05-21_jcb-uwb-payments-japan` 一条——一份日本卡组织的商用化合作协议——而后续的 JCB／Resona／ODAWARA 公交备忘录曾因"又一份没有架构的部署前协议"而被判定过薄、未予收录。本文恰好补上了这些条目缺失的部分：具名的欧洲闸机试点（阿姆斯特丹、米兰）、具名的对照架构（热那亚 7,000 个信标的 BLE 存量），以及一套真实机制。

JR East／索尼的 **BLE 唤醒 + UWB 测距**分级是实质性增量。它是同一套功耗管理范式在闸机场景下的实例——本库此前已从三个方向见过该范式：`2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist` 中的窄带辅助电台、imec 的 802.15.4ab NBA 接收机（二者存在的意义都是让廉价窄带链路来裁决昂贵的 UWB 射频何时开启），以及 `2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock` 中 NFC/BLE/UWB 的分层配置。一家票务集成商在应用层独立得出了**相同的**唤醒门控设计（而非把它作为 PHY 特性），说明"UWB 常开在电池上不可行"已是整个生态的既定前提，而非厂商话术。

本条目还为该主题贡献了第一个量化的**应用侧**指标。此前库内所有 UWB 测距条目都以厘米级误差评判；本条目则以**每闸机每秒乘客数**评判——这是一个仅靠厘米级精度无法满足的吞吐与消歧指标。这一重构与 `2026-08-20_ccc-digital-key-v4-plugfest-18` 及 FiRa 互操作计划（`2026-08-04_fira-plugfests-uwb-interop-program`）直接相关：认证测距精度的互操作测试，尚未认证拥挤条件下的闸机通行率，而阿姆斯特丹／米兰试点正是量化这一缺口的地方。观察项：米兰 2026 年秋季闸机部署（最近的可验证落地事件），以及阿姆斯特丹试点是否公布结果。
