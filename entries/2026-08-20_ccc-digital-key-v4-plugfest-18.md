---
id: 2026-08-20_ccc-digital-key-v4-plugfest-18
date_published: 2026-06-08
date_found: 2026-08-20
type: industry-news
technology: uwb
title_en: "Car Connectivity Consortium advances Digital Key Version 4 testing at Plugfest #18 (DEKRA Lausitzring; v3/v4 cross-version interop, IDL certification-readiness, Apple/Google/BMW/Hyundai among 15 companies)"
title_zh: "车联网联盟（CCC）Plugfest #18 推进数字钥匙 Version 4 测试——DEKRA Lausitzring 汽车测试场，v3/v4 跨版本互操作与 IDL 认证就绪筛选，Apple/Google/宝马/现代等 15 家成员参与"
url: "https://carconnectivity.org/car-connectivity-consortium-advances-digital-key-version-4-testing-at-plugfest-18/"
source_quality: full
topics: [UWB, CCC, Digital-Key, digital-key, BLE, NFC, secure-ranging, interoperability, certification, automotive]
topic_primary: uwb-fi-ra
topics_secondary: [uwb-ranging]
novelty_score: 2
---

## Summary (EN)

The Car Connectivity Consortium (CCC) announced on June 8, 2026 that its 18th end-to-end interoperability Plugfest — held the week of June 8 at the DEKRA Lausitzring automotive test center in Germany — expanded testing to **CCC Digital Key Version 4 (v4)**, the next generation of the automotive digital-key specification whose passive-entry ranging layer runs on UWB secure distance bounding (cryptographically secured time-of-flight) combined with Bluetooth LE for connectivity and NFC as tap fallback. Fifteen member companies took part, spanning the full ecosystem: phone platforms (Apple, Google), automakers (BMW Group, Hyundai Motor Company, JLR), tier-1s and access-system suppliers (Robert Bosch, AUMOVIO, Huf Hülsbeck & Fürst, Marquardt, InGeek, IAV), and test-equipment/lab providers (COMPRION, DEKRA, Ellisys, Keysight); industry coverage puts attendance at 52 participants.

Three v4-specific workstreams are named: (1) new test cases enabling deeper validation of next-generation implementations; (2) **cross-version interoperability and backward-compatibility testing between Version 3 and Version 4 devices** — the practical question for a car fleet whose vehicles and phones will straddle spec generations for years; and (3) identification of candidate **Interoperability Device List (IDL)** devices for v4 certification readiness, i.e. the reference devices against which future certifications will be run. The event also introduced updated NFC test cases for the first time at a Plugfest, exercised Bluetooth LE sniffing techniques, and covered remote-keyless-entry and passive-entry test scenarios, with BLE and UWB test-equipment providers participating directly. CCC President Alysia Johnson framed the event as "an important step forward for CCC Digital Key v4, as we expand testing across devices, vehicles, and supporting technologies."

Context: CCC Digital Key Release 3 is the spec generation that brought BLE+UWB hands-free passive entry into production cars (BMW, Hyundai, and others in the KB's existing entries); the UWB MAC/PHY layer is jointly maintained with the FiRa Consortium through the Joint UWB MAC PHY Working Group (JUMPWG, formed November 2023), and the CCC certification program has covered BLE and UWB since March 2025. Version 4 entering structured interop testing and IDL candidate selection is the concrete signal that the next automotive digital-key generation is moving from spec work toward certification. Ingested as an in-window catch-up (June 8 press release): the KB previously had no entry on the CCC Digital Key ecosystem itself, despite it being the automotive counterpart of the smart-home Aliro protocol and the volume driver for automotive UWB silicon.

## Summary (ZH)

车联网联盟（Car Connectivity Consortium, CCC）2026 年 6 月 8 日宣布，其第 18 届端到端互操作 Plugfest 于 6 月 8 日当周在德国 DEKRA Lausitzring 汽车测试场举行，测试范围扩展至 **CCC 数字钥匙 Version 4（v4）**——下一代汽车数字钥匙规范，其免操作被动进入的测距层基于 UWB 安全距离约束（密码学保护的飞行时间测量），配合蓝牙 LE 做连接、NFC 做贴卡兜底。15 家成员公司参与，覆盖完整生态：手机平台（Apple、Google）、整车厂（宝马集团、现代汽车、捷豹路虎 JLR）、一级供应商与门禁系统厂商（博世、AUMOVIO、Huf、Marquardt、InGeek、IAV）、以及测试设备/实验室（COMPRION、DEKRA、Ellisys、是德科技 Keysight）；行业报道称共 52 名参与者到场。

公告点名了三条 v4 专项工作线：（1）新增测试用例，对下一代实现做更深入的验证；（2）**Version 3 与 Version 4 设备之间的跨版本互操作与后向兼容测试**——对于未来多年车辆与手机将横跨两代规范的车队而言，这是最现实的问题；（3）筛选 v4 **互操作设备清单（IDL）**候选设备，为 v4 认证就绪做准备，即确定未来认证所依据的参考设备。本届活动还首次引入了更新的 NFC 测试用例，演练了蓝牙 LE 抓包（sniffing）技术，覆盖远程无钥匙进入与被动进入测试场景，BLE 与 UWB 测试设备供应商直接参与。CCC 总裁 Alysia Johnson 表示，本届 Plugfest "是 CCC 数字钥匙 v4 向前迈出的重要一步——我们正把测试扩展到设备、车辆与配套技术全链条"。

背景：CCC 数字钥匙 Release 3 是把 BLE+UWB 免操作被动进入带入量产车的一代规范（宝马、现代等已见于本 KB 既有条目）；其 UWB MAC/PHY 层由 CCC 与 FiRa 联盟通过联合 UWB MAC PHY 工作组（JUMPWG，2023 年 11 月成立）共同维护，CCC 认证项目自 2025 年 3 月起覆盖 BLE 与 UWB。Version 4 进入结构化互操作测试与 IDL 候选筛选，是下一代汽车数字钥匙从规范制定走向认证落地的具体信号。本条目为窗口内补录（6 月 8 日新闻稿）：此前 KB 没有任何关于 CCC 数字钥匙生态本身的条目，而它正是智能家居 Aliro 协议在汽车侧的对应物，也是汽车 UWB 芯片出货量的主要驱动力。

## Key technical points (EN)

- **Event:** CCC Plugfest #18, week of June 8, 2026, DEKRA Lausitzring automotive test center (Germany) — an automotive proving ground, so tests run against real vehicles, not just bench setups.
- **Participants (15 companies):** Apple, AUMOVIO, BMW Group, COMPRION, DEKRA, Ellisys, Google, Huf Hülsbeck & Fürst, Hyundai Motor Company, IAV, InGeek, JLR, Keysight Technologies, Marquardt, Robert Bosch; ~52 individual participants per industry coverage.
- **Digital Key v4 focus:** new test cases for next-generation implementations; cross-version interoperability and backward compatibility between v3 and v4 devices; selection of candidate Interoperability Device List (IDL) devices for v4 certification readiness.
- **Test-methodology additions:** updated NFC test cases introduced for the first time at a Plugfest; Bluetooth LE sniffing techniques; remote-keyless-entry and passive-entry scenarios; direct participation of BLE and UWB test-equipment providers (Ellisys, Keysight, COMPRION).
- **Technology stack:** CCC Digital Key combines NFC (tap), Bluetooth LE (connection/session), and UWB secure distance bounding with cryptographically secured ToF for relay-attack-resistant passive entry; UWB MAC/PHY jointly maintained with FiRa via JUMPWG (since Nov 2023).
- **Certification pipeline:** CCC's certification program has covered BLE + UWB since March 2025; IDL candidate identification at Plugfest #18 is the stage that precedes formal v4 certification.
- **No spec-release date given:** the press release names no v4 publication or certification launch date — the next landing events to watch are the v4 spec/certification-program announcements and Plugfest #19.

## Key technical points (ZH)

- **活动：** CCC 第 18 届 Plugfest，2026 年 6 月 8 日当周，德国 DEKRA Lausitzring 汽车测试场——真实车辆环境下的测试，而非仅台架环境。
- **参与方（15 家公司）：** Apple、AUMOVIO、宝马集团、COMPRION、DEKRA、Ellisys、Google、Huf、现代汽车、IAV、InGeek、捷豹路虎、是德科技、Marquardt、博世；据行业报道约 52 名个人参与者。
- **数字钥匙 v4 重点：** 面向下一代实现的新测试用例；v3 与 v4 设备的跨版本互操作与后向兼容测试；筛选 v4 互操作设备清单（IDL）候选设备，为认证就绪做准备。
- **测试方法新增项：** 首次在 Plugfest 引入更新的 NFC 测试用例；蓝牙 LE 抓包技术；远程无钥匙进入与被动进入场景；BLE 与 UWB 测试设备供应商（Ellisys、是德、COMPRION）直接参与。
- **技术栈：** CCC 数字钥匙组合 NFC（贴卡）、蓝牙 LE（连接/会话）与 UWB 安全距离约束（密码学保护的 ToF），实现抗中继攻击的被动进入；UWB MAC/PHY 由 CCC 与 FiRa 经 JUMPWG 共同维护（2023 年 11 月起）。
- **认证管线：** CCC 认证项目自 2025 年 3 月起覆盖 BLE + UWB；Plugfest #18 的 IDL 候选筛选是正式 v4 认证之前的一环。
- **未给出规范发布日期：** 新闻稿未提 v4 规范发布或认证启动时间——后续值得关注的落地事件是 v4 规范/认证项目公告与 Plugfest #19。

## Why it matters / what's new (EN)

This is the KB's first entry on the CCC Digital Key ecosystem itself — the automotive application standard that, alongside FiRa (ranging interop) and Aliro (smart-home locks), forms the third leg of UWB's application-layer standards landscape. Existing KB entries repeatedly touch CCC implementations without covering the consortium's own pipeline: 2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key (BMW Digital Key Plus silicon), 2026-08-18_hyundai-kia-vision-pulse-uwb-v2x-safety (Hyundai reusing Digital Key 2 UWB modules — Hyundai is at this Plugfest), and 2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock (the home-side analogue whose entry explicitly contrasts CCC's car-side role). What's new here is the generation shift: Digital Key **Version 4** is now in structured cross-version interop testing with IDL certification-readiness screening, meaning the next automotive digital-key wave is queued up just as the IEEE 802.15.4ab silicon wave (ST64UWB 2026-05-25, imec NBA receiver 2026-06-12, Calterah Dubhe 2026-06-04) reaches the market — the two tracks that will eventually intersect in 4ab-based car keys. The v3/v4 backward-compatibility test cases are also the first public acknowledgment of the mixed-generation fleet problem for UWB-keyed vehicles. Ingested as an in-window catch-up (June 8 PR) with the stated rationale that the bin had zero CCC/JUMPWG coverage; the FiRa-side parallel is 2026-08-04's FiRa Plugfests entry (FiRa Plugfest #2 runs Sep 15-17, also interop-focused).

## Why it matters / what's new (ZH)

这是本 KB 第一条关于 CCC 数字钥匙生态本身的条目——它与 FiRa（测距互操作）、Aliro（智能家居门锁）并列，构成 UWB 应用层标准版图的第三条腿。KB 既有条目多次触及 CCC 的具体实现，却从未覆盖联盟自身的推进管线：2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key（宝马 Digital Key Plus 芯片）、2026-08-18_hyundai-kia-vision-pulse-uwb-v2x-safety（现代复用数字钥匙 2 的 UWB 模块——现代正是本届 Plugfest 参与者）、2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock（家庭侧对应物，该条目明确对比了 CCC 在汽车侧的角色）。本条的新意在于代际切换：数字钥匙 **Version 4** 已进入结构化的跨版本互操作测试与 IDL 认证就绪筛选，意味着下一代汽车数字钥匙已经排队就绪——恰逢 IEEE 802.15.4ab 芯片浪潮（ST64UWB 2026-05-25、imec NBA 接收机 2026-06-12、Calterah Dubhe 2026-06-04）进入市场，两条轨道最终将在基于 4ab 的车钥匙上交汇。v3/v4 后向兼容测试用例也是业界首次公开正视 UWB 钥匙车辆的"混代车队"问题。本条为窗口内补录（6 月 8 日新闻稿），补录理由：该类目此前对 CCC/JUMPWG 零覆盖；FiRa 侧的平行条目是 2026-08-04 的 FiRa Plugfests（FiRa Plugfest #2 将于 9 月 15-17 日举行，同样以互操作为主题）。
