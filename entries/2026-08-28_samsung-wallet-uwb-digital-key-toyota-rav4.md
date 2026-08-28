---
id: 2026-08-28_samsung-wallet-uwb-digital-key-toyota-rav4
date_published: 2026-01-13
date_found: 2026-08-28
type: industry-news
technology: uwb
title_en: "Samsung Wallet brings CCC UWB Digital Key to the 2026 Toyota RAV4 — the handset-wallet end of the UWB car-access chain"
title_zh: "三星钱包将 CCC UWB 数字钥匙引入 2026 款丰田 RAV4——UWB 车辆门禁链条的手机钱包一端"
url: "https://www.samsungmobilepress.com/articles/samsung-wallet-digital-key-toyota-rav4-2026"
source_quality: full
topics: [CCC Digital Key, UWB, car access, Samsung Wallet, Toyota, Knox, EAL6+]
topic_primary: uwb-fi-ra
topics_secondary: [uwb-ranging, uwb-security]
novelty_score: 2
---

## Summary (EN)

Samsung announced (2026-01-13, in parallel global/US and UK newsroom releases) that Samsung Wallet's Digital Key now supports select Toyota vehicles, starting with the 2026 Toyota RAV4. The feature combines two radios with distinct roles: **UWB for hands-free approach unlock** — the vehicle senses the phone's presence and distance as the driver walks up, with no need to take the handset out of a pocket — and **NFC for tap-to-unlock and ignition**. Samsung explicitly frames the UWB layer as "a standardised communication protocol set by the Car Connectivity Consortium (CCC)" and credits it with *security* value, not just convenience: precise, physically-bounded ranging reduces the risk of unauthorised access (i.e. the relay-attack class that plain BLE proximity keys are exposed to).

The credential itself sits in the Galaxy secure element: keys are protected by Samsung Knox and the release claims **EAL6+ certification**, with biometric or PIN authentication gating use. Operationally the release covers the lifecycle features fleet and family users care about — keys can be shared with trusted contacts, shared access updated or revoked at any time, and a lost or stolen device's key remotely locked or deleted through Samsung Find. Rollout began January 2026 in the United States, Canada and Mexico (the UK release announces the same January start for the UK), with more vehicles and further European markets promised but undated.

**This is a deliberate January backfill.** The UWB bins of this KB carry the *silicon* side of automotive digital key in depth — NXP's Trimension NCJ29D6 in the BMW fleet (`2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key`), ST's ST64UWB 802.15.4ab family (`2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist`), Infineon's ASIL-B AIROC TSL100 (`2026-06-27_infineon-airoc-tsl100-uwb-asilb`) — plus the *specification and interop* side (`2026-08-20_ccc-digital-key-v4-plugfest-18`, `2026-08-04_fira-plugfests-uwb-interop-program`). What it had no coverage of at all is the **handset-wallet end of the same chain**: the phone-side credential store and OS integration that actually puts CCC UWB Digital Key in a consumer's hand. This entry fills that gap with the most recent primary-source instance; the earlier Samsung Volvo/Polestar expansion (Feb 2025) is outside the 12-month news-freshness window and is not ingested.

## Summary (ZH)

三星于 2026-01-13 通过全球/美国与英国两地新闻室同步发布：三星钱包（Samsung Wallet）的数字钥匙（Digital Key）开始支持部分丰田车型，首发为 2026 款丰田 RAV4。该功能由两种射频承担不同角色：**UWB 负责免手动的靠近解锁**——车辆在驾驶者走近时感知手机的存在与距离，手机无需从口袋中取出；**NFC 负责触碰解锁与启动**。三星明确将 UWB 层描述为"车联网联盟（CCC）制定的标准化通信协议"，并强调其**安全**价值而非仅仅便利：精确且受物理边界约束的测距降低了未授权访问的风险（即纯 BLE 近场钥匙所暴露的中继攻击一类）。

凭据本身存放于 Galaxy 的安全单元中：密钥由 Samsung Knox 保护，通稿声称满足 **EAL6+ 认证**，使用时需生物识别或 PIN 认证。运营层面，通稿覆盖了车队与家庭用户关心的全生命周期能力——密钥可分享给可信联系人，共享权限可随时更新或撤销，手机丢失或被盗时可通过 Samsung Find 远程锁定或删除密钥。2026 年 1 月起在美国、加拿大、墨西哥推出（英国版通稿宣布英国同为 1 月起），更多车型与更多欧洲市场"随后跟进"，但未给出时间表。

**这是一次有意的 1 月回填。** 本 KB 的 UWB 分区对汽车数字钥匙的**芯片侧**覆盖已相当充分——NXP Trimension NCJ29D6 进入宝马车队（`2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key`）、ST 的 ST64UWB 802.15.4ab 系列（`2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist`）、英飞凌 ASIL-B 级 AIROC TSL100（`2026-06-27_infineon-airoc-tsl100-uwb-asilb`），加上**规范与互操作**侧（`2026-08-20_ccc-digital-key-v4-plugfest-18`、`2026-08-04_fira-plugfests-uwb-interop-program`）。完全没有覆盖的是同一条链路的**手机钱包一端**：真正把 CCC UWB 数字钥匙交到消费者手中的手机侧凭据存储与操作系统集成。本条目以最近一则一手来源实例填补该空白；更早的三星沃尔沃/极星扩展（2025 年 2 月）已超出 12 个月新闻新鲜度窗口，不予收录。

## Key technical points (EN)

- **Two-radio role split.** UWB = hands-free approach unlock (presence + distance sensing while the phone stays pocketed); NFC = tap-to-unlock and ignition. The two are presented as complementary rather than alternatives.
- **CCC as the named standard.** Samsung attributes the UWB protocol to the Car Connectivity Consortium, aligning this deployment with the CCC Digital Key line whose v4 / Plugfest #18 activity this KB already tracks.
- **UWB framed as a security control.** The release's own wording ties UWB to "reducing the risk of unauthorised vehicle access" via precise ranging — the vendor-marketing form of the distance-bounding argument that motivates 802.15.4z STS.
- **Credential security claims.** Samsung Knox protection, EAL6+ certification of the key store, biometric-or-PIN gating on use.
- **Lifecycle management.** Share to trusted contacts; update or revoke shared access at any time; remote lock/delete of the key via Samsung Find on a lost or stolen device.
- **Rollout scope.** 2026 Toyota RAV4 first; US / Canada / Mexico and the UK from January 2026; "more vehicles will follow" with no published timeline.
- **Dating note.** Both the global/US and UK newsroom versions carry the same 2026-01-13 datestamp; the later trade-press "this week" phrasing that resurfaces in search refers to that January week, not to August.

## Key technical points (ZH)

- **双射频角色分工。** UWB = 免手动靠近解锁（手机留在口袋中即可完成存在性与距离感知）；NFC = 触碰解锁与启动。二者为互补关系而非替代关系。
- **明确点名 CCC 标准。** 三星将该 UWB 协议归属于车联网联盟（CCC），使本次落地与本 KB 已跟踪的 CCC 数字钥匙 v4 / Plugfest #18 线索对齐。
- **UWB 被定位为安全控制手段。** 通稿原文将 UWB 与"降低未授权车辆访问风险"通过精确测距相联系——这正是 802.15.4z STS 背后距离边界（distance bounding）论证的厂商营销版表述。
- **凭据安全声明。** Samsung Knox 保护、密钥存储的 EAL6+ 认证、使用时的生物识别或 PIN 门控。
- **生命周期管理。** 分享给可信联系人；共享权限可随时更新或撤销；手机丢失或被盗时可通过 Samsung Find 远程锁定/删除密钥。
- **推出范围。** 首发 2026 款丰田 RAV4；2026 年 1 月起覆盖美国/加拿大/墨西哥及英国；"更多车型随后跟进"，未公布时间表。
- **日期说明。** 全球/美国版与英国版新闻室通稿均标注 2026-01-13；搜索中反复出现的行业媒体"本周"措辞指的是当年 1 月的那一周，而非 8 月。

## Why it matters / what's new (EN)

The KB's automotive-UWB coverage was, until now, entirely supply-side. Every existing entry describes a chip, a spec, or an interop event: `2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key` (silicon into a fleet), `2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist` and `2026-06-04_calterah-dubhe-uwb-soc-802154ab` (4ab silicon), `2026-06-27_infineon-airoc-tsl100-uwb-asilb` (ASIL-rated part), `2026-08-20_ccc-digital-key-v4-plugfest-18` and `2026-08-04_fira-plugfests-uwb-interop-program` (spec + interop). None of them answers the question a reader of this bin will eventually ask: *what does the phone side look like, and who ships it?* This entry supplies that missing link — the OS-integrated wallet credential, its secure-element claims, and its sharing/revocation model — and does so on a mainstream, high-volume nameplate rather than a low-volume flagship.

It also sharpens a comparison the KB can now make across technologies. `2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock` covers the *home* equivalent (CSA Aliro 1.0, UWB hands-free unlock for door locks) and `2026-08-05_sparklink-car-key-forum-china-auto-2026` / `2026-08-27_nearlink-car-key-first-joint-venture-oem-gac-toyota-bz7` cover NearLink's competing Chinese car-key stack. Placing the Samsung/CCC handset-wallet deployment alongside them makes the structural contrast legible: CCC + UWB is being rolled out as a *phone-OS wallet feature layered on a global consortium spec*, while NearLink's car key is being rolled out as an *OEM-and-national-standard vertical*. Note that Toyota appears on both sides — as a CCC UWB Digital Key target here and, via the GAC-Toyota bZ7, as the first joint-venture-brand NearLink car key — which is a data point about OEMs hedging across regional radio ecosystems rather than picking one.

Finally, the security framing is worth logging. Samsung selling UWB to consumers on *anti-unauthorised-access* grounds, not just convenience, is the market-facing echo of the research the KB tracks in the uwb-security bin (`2026-08-19_tches-fast-hrp-uwb-security-testing` on HRP UWB security testing). When a vendor makes a ranging-integrity claim in a press release, the claim becomes testable — and the FAST/HRP line of work is what would test it.

## Why it matters / what's new (ZH)

在此之前，本 KB 的汽车 UWB 覆盖完全集中于供给侧。现有条目无一例外描述芯片、规范或互操作活动：`2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key`（芯片进入车队）、`2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist` 与 `2026-06-04_calterah-dubhe-uwb-soc-802154ab`（4ab 芯片）、`2026-06-27_infineon-airoc-tsl100-uwb-asilb`（ASIL 等级器件）、`2026-08-20_ccc-digital-key-v4-plugfest-18` 与 `2026-08-04_fira-plugfests-uwb-interop-program`（规范与互操作）。它们都没有回答该分区读者迟早会问的问题：*手机侧长什么样，由谁交付？* 本条目补上这一缺失环节——操作系统集成的钱包凭据、其安全单元声明、以及分享/撤销模型——而且落在主流走量车型而非小众旗舰上。

它同时让 KB 得以做一组跨技术对照。`2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock` 覆盖了*家庭*侧的对应物（CSA Aliro 1.0，门锁的 UWB 免手动解锁），而 `2026-08-05_sparklink-car-key-forum-china-auto-2026` 与 `2026-08-27_nearlink-car-key-first-joint-venture-oem-gac-toyota-bz7` 覆盖了星闪在中国市场的竞争性车钥匙栈。把三星/CCC 的手机钱包落地放在它们旁边，结构性差异就清晰了：CCC + UWB 是以*叠加在全球联盟规范之上的手机操作系统钱包功能*的方式推开，而星闪车钥匙是以*车厂与国家标准的垂直路径*推开。值得注意的是丰田同时出现在两侧——此处是 CCC UWB 数字钥匙的目标车型，而通过广汽丰田 bZ7 又成为首个合资品牌星闪车钥匙——这说明车厂在跨区域无线生态之间做对冲，而非二选一。

最后，其安全叙事值得记录。三星以*防未授权访问*而非单纯便利性向消费者推销 UWB，正是本 KB 在 uwb-security 分区所跟踪研究（`2026-08-19_tches-fast-hrp-uwb-security-testing`，HRP UWB 安全测试）的市场端回响。当厂商在新闻稿中作出测距完整性声明时，该声明便成为可被检验的对象——而 FAST/HRP 这条研究线正是检验它的工具。
