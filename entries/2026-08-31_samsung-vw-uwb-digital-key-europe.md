---
id: 2026-08-31_samsung-vw-uwb-digital-key-europe
date_published: 2026-08-18
date_found: 2026-08-31
type: industry-news
technology: uwb
title_en: "Samsung Wallet ships UWB Digital Key on Volkswagen ID. EVs across 37 European markets — gated on a factory-fitted hardware option"
title_zh: "三星钱包在 37 个欧洲市场为大众 ID. 系列纯电动车上线 UWB 数字钥匙——但需出厂预装硬件选装包"
url: "https://www.samsungmobilepress.com/articles/samsung-wallet-partners-volkswagen-ev-digital-key-integration"
source_quality: full
topics: [CCC Digital Key, UWB, NFC, car access, Samsung Wallet, Volkswagen ID, Knox, EAL6+, hands-free entry]
topic_primary: uwb-fi-ra
topics_secondary: [uwb-ranging, uwb-security]
novelty_score: 2
---

## Summary (EN)

Samsung announced on 2026-08-18 (confirmed on two regional newsroom releases carrying the same datestamp — Samsung Mobile Press global and Samsung Newsroom UK) that Samsung Wallet's Digital Key now works with Volkswagen's ID. battery-electric range. The supported models are **ID.Polo, ID.Cross, ID.3neo, ID.4, ID.5, ID.7 and ID.Buzz**, and the rollout covers **37 European markets** in one step — the full list runs Albania, Austria, Belgium, Bosnia and Herzegovina, Bulgaria, Canary Islands, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Great Britain, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Montenegro, Netherlands, North Macedonia, Norway, Poland, Portugal, Romania, Serbia, Slovakia, Slovenia, Spain, Sweden and Switzerland.

The radio split is stated explicitly in Samsung's own wording: Digital Keys "support multiple access methods, including ultra-wideband (UWB) technology for hands-free entry and Near Field Communication (NFC) technology for tap-based unlocking and starting the engine." UWB therefore carries the *ranging-dependent* half of the feature — the car senses the phone's presence and distance as the owner approaches, and the phone can stay pocketed — while NFC carries the tap-based fallback for handsets without a UWB radio. The release adds **remote trunk access** via Remote Key Entry to the lock / unlock / start set. Credential security follows the same posture as Samsung's earlier Digital Key deployments: keys sit behind Samsung Knox with an **EAL6+** certification claim, every interaction is gated on biometric or PIN verification, keys can be shared to trusted individuals with settable permissions and withdrawn at any time, and a lost or stolen handset's key can be removed remotely through Samsung Find.

The operationally interesting part of this release is the **vehicle-side precondition**, which is unusually explicit for a wallet-feature announcement. Digital Key works only on ID. vehicles **produced on or after 2026-04-27**, running **ID. software 6.0.1 or later**, and ordered with the **"Preparation for Digital Key" option package**. In other words the UWB anchors and secure element live in an option-code-gated wiring harness that must be fitted on the line: this is not a software-only over-the-air upgrade, and cars already in customers' hands are excluded regardless of their software version. Quotes come from Woncheol Chai (EVP, Digital Wallet Team, Samsung) and Dr. Axel Heinrich (Senior VP System Architecture, Volkswagen).

## Summary (ZH)

三星于 2026-08-18 宣布（同一日期在两个区域新闻室发布得到确认——Samsung Mobile Press 全球版与英国 Samsung Newsroom）：三星钱包（Samsung Wallet）的数字钥匙（Digital Key）开始支持大众 ID. 系列纯电动车。支持车型为 **ID.Polo、ID.Cross、ID.3neo、ID.4、ID.5、ID.7 与 ID.Buzz**，并一次性覆盖 **37 个欧洲市场**——完整名单包括阿尔巴尼亚、奥地利、比利时、波黑、保加利亚、加那利群岛、克罗地亚、塞浦路斯、捷克、丹麦、爱沙尼亚、芬兰、法国、德国、英国、希腊、匈牙利、冰岛、爱尔兰、意大利、拉脱维亚、立陶宛、卢森堡、马耳他、黑山、荷兰、北马其顿、挪威、波兰、葡萄牙、罗马尼亚、塞尔维亚、斯洛伐克、斯洛文尼亚、西班牙、瑞典与瑞士。

射频分工在三星通稿中被明确写出：数字钥匙"支持多种访问方式，包括用于免手动进入的超宽带（UWB）技术，以及用于触碰解锁与启动引擎的近场通信（NFC）技术"。也就是说，UWB 承担该功能中**依赖测距**的那一半——车辆在车主走近时感知手机的存在与距离，手机可留在口袋中；NFC 则为不带 UWB 射频的机型承担触碰式回退路径。本次通稿还在"上锁／解锁／启动"之外增加了通过 Remote Key Entry 实现的**远程后备厢开启**。凭据安全沿用三星此前数字钥匙部署的一贯姿态：密钥置于 Samsung Knox 之下并声称满足 **EAL6+** 认证，每次交互均需生物识别或 PIN 验证；密钥可分享给可信个人并设定权限、可随时撤回；手机丢失或被盗时可通过 Samsung Find 远程移除密钥。

本次通稿在运营层面最值得注意的是**车端前置条件**，其表述之明确在钱包类功能公告中并不常见。数字钥匙仅适用于 **2026-04-27 及之后生产**、运行 **ID. software 6.0.1 或更高版本**、且在订车时选装了 **"Preparation for Digital Key"（数字钥匙预备）选装包**的 ID. 车型。换言之，UWB 锚点与安全单元位于一套由选装代码控制、必须在产线装配的线束之中：这不是纯软件的 OTA 升级，已交付到用户手中的车辆无论软件版本如何都被排除在外。通稿引语来自三星数字钱包团队执行副总裁 Woncheol Chai 与大众系统架构高级副总裁 Dr. Axel Heinrich。

## Key technical points (EN)

- **Radio role split, stated by the vendor.** UWB = hands-free approach entry (presence + distance sensing, phone stays pocketed); NFC = tap-to-unlock and engine start. Handsets without UWB fall back to NFC only.
- **Feature set.** Lock, unlock, start, plus **remote trunk access** through Remote Key Entry.
- **Vehicle models.** Volkswagen ID.Polo, ID.Cross, ID.3neo, ID.4, ID.5, ID.7, ID.Buzz — the ID. BEV range rather than a single halo nameplate.
- **Geography.** 37 European markets from day one, including all of Western Europe, the Nordics, most of Central/Eastern Europe and the Western Balkans.
- **Hard vehicle-side gate.** Production date **on or after 2026-04-27**, **ID. software 6.0.1+**, *and* the **"Preparation for Digital Key" option package**. Cars built before that date are excluded — the UWB anchor hardware is a factory-fit option, not a retrofit or an OTA unlock.
- **Credential security.** Samsung Knox with an EAL6+ certification claim; biometric or PIN verification per interaction; remote key removal via Samsung Find.
- **Sharing lifecycle.** Keys shareable to trusted individuals with settable permissions and revocable at any time.
- **Named principals.** Woncheol Chai (EVP, Digital Wallet Team, Samsung); Dr. Axel Heinrich (Senior VP System Architecture, Volkswagen).
- **Dating note.** Two Samsung newsroom releases (global/Mobile Press and UK) both carry 2026-08-18; trade-press echoes appear 18–20 August. This is a distinct event from the 2026-01-13 Samsung/Toyota RAV4 release and from the February 2025 Volvo/Polestar expansion.

## Key technical points (ZH)

- **厂商自述的射频分工。** UWB = 免手动的靠近进入（存在性 + 距离感知，手机留在口袋中）；NFC = 触碰解锁与启动引擎。不带 UWB 的机型仅能回退到 NFC。
- **功能集合。** 上锁、解锁、启动，外加通过 Remote Key Entry 的**远程后备厢开启**。
- **车型。** 大众 ID.Polo、ID.Cross、ID.3neo、ID.4、ID.5、ID.7、ID.Buzz——覆盖的是 ID. 纯电系列而非单一旗舰车型。
- **地域。** 首日即覆盖 37 个欧洲市场，含全部西欧、北欧、多数中东欧国家与西巴尔干地区。
- **车端硬门槛。** 生产日期须在 **2026-04-27 及之后**、**ID. software 6.0.1 及以上**，**并且**选装了 **"Preparation for Digital Key"** 选装包。此前生产的车辆被排除——UWB 锚点硬件是产线选装项，既不能后装也无法通过 OTA 解锁。
- **凭据安全。** Samsung Knox 加 EAL6+ 认证声明；每次交互需生物识别或 PIN；可通过 Samsung Find 远程移除密钥。
- **共享生命周期。** 可分享给可信个人、可设定权限、可随时撤回。
- **具名负责人。** 三星数字钱包团队执行副总裁 Woncheol Chai；大众系统架构高级副总裁 Dr. Axel Heinrich。
- **日期说明。** 三星全球版（Mobile Press）与英国版两则通稿均标注 2026-08-18；行业媒体转载出现在 8 月 18–20 日。本事件与 2026-01-13 的三星／丰田 RAV4 通稿、以及 2025 年 2 月的沃尔沃／极星扩展均为不同事件。

## Why it matters / what's new (EN)

The vehicle-side precondition is the finding here, and it is the kind of detail that usually never makes it into a consumer wallet announcement. `2026-08-28_samsung-wallet-uwb-digital-key-toyota-rav4` established the handset-wallet end of the UWB car-access chain in this KB; what that January release did not say is *what the car has to be*. This one does: an ID. vehicle needs to have rolled off the line **on or after 27 April 2026** with an explicitly ordered **"Preparation for Digital Key"** option package. That single sentence quantifies the deployment lag that separates a UWB feature announcement from UWB in a driveway. The silicon this KB has tracked — NXP's Trimension NCJ29D6 into BMW (`2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key`), ST's ST64UWB 802.15.4ab family (`2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist`), Infineon's ASIL-B AIROC TSL100 (`2026-06-27_infineon-airoc-tsl100-uwb-asilb`) — only reaches a user through an option code checked at order time, and the installed base of cars that can *never* get the feature grows every day the option goes unticked. It also implies that the anchor count and placement are frozen at build, which is why the interop work tracked in `2026-08-20_ccc-digital-key-v4-plugfest-18` and `2026-08-04_fira-plugfests-uwb-interop-program` has to happen before the harness is designed, not after.

The scale is the second point. 37 markets in a single announcement, on a mass-market BEV range rather than a flagship, is a step change from the earlier Samsung Digital Key deployments this KB has looked at (Toyota RAV4 across US/Canada/Mexico/UK in January; Volvo/Polestar in February 2025). Volkswagen's ID. line is a volume platform, so this is the first entry in the bin describing UWB car access at a genuinely continental scale. That matters for the ranging side: hands-free approach detection now has to work across the full European weather, parking-garage and RF-density range at once, which is exactly the regime where the interop and integrity questions get sharp.

Finally, the entry keeps the technology comparison in the KB legible. `2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock` covers the CSA Aliro home-lock equivalent of the same NFC-tap / BLE-proximity / UWB-spatial-validation layering, and `2026-08-05_sparklink-car-key-forum-china-auto-2026` covers NearLink's competing Chinese car-key stack. The contrast is now sharper: the CCC/UWB path reaches consumers as a phone-OS wallet feature layered on a global consortium spec and gated on factory hardware, while the NearLink path is being pushed as an OEM-and-national-standard vertical. Both hit the same wall — the radio has to be in the car when it is built.

## Why it matters / what's new (ZH)

本条目的核心发现是**车端前置条件**，而这类细节通常根本不会出现在面向消费者的钱包功能公告中。`2026-08-28_samsung-wallet-uwb-digital-key-toyota-rav4` 已在本 KB 中确立了 UWB 车辆门禁链条的手机钱包一端；那则 1 月通稿没有说明的是*车必须是什么样的车*。本次通稿说明了：ID. 车型必须在 **2026 年 4 月 27 日及之后**下线，并且订车时明确勾选了 **"Preparation for Digital Key"** 选装包。这一句话把"UWB 功能公告"与"UWB 真正停在自家车位上"之间的部署时滞量化了出来。本 KB 跟踪的那些芯片——进入宝马的 NXP Trimension NCJ29D6（`2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key`）、ST 的 ST64UWB 802.15.4ab 系列（`2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist`）、英飞凌 ASIL-B 级 AIROC TSL100（`2026-06-27_infineon-airoc-tsl100-uwb-asilb`）——最终要靠一个下单时勾选的选装代码才能到达用户手中；每过一天，那些永远无法获得该功能的存量车就多一批。这也意味着锚点数量与布置在整车下线时即已冻结，因此 `2026-08-20_ccc-digital-key-v4-plugfest-18` 与 `2026-08-04_fira-plugfests-uwb-interop-program` 所记录的互操作工作，必须发生在线束设计之前而不是之后。

第二点是规模。单次公告覆盖 37 个市场、且落在量产纯电系列而非旗舰车型上，相较本 KB 此前记录的三星数字钥匙部署（1 月的丰田 RAV4，覆盖美／加／墨／英；2025 年 2 月的沃尔沃／极星）是一次量级跃迁。大众 ID. 是走量平台，因此这是该分区中第一条描述"洲际规模 UWB 车辆门禁"的条目。这对测距侧有实际含义：免手动靠近检测此刻必须同时应对全欧洲的气候、地下车库与射频密度分布，而这正是互操作与完整性问题变得尖锐的工况。

最后，本条目让 KB 中的技术路线对比保持清晰。`2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock` 记录了 CSA Aliro 在家庭门锁侧对同一套"NFC 触碰／BLE 近场／UWB 空间校验"分层的实现，`2026-08-05_sparklink-car-key-forum-china-auto-2026` 记录了星闪在中国市场竞争性的车钥匙栈。对比因此更加鲜明：CCC/UWB 路线以"叠加在全球联盟规范之上、并受出厂硬件门槛限制的手机操作系统钱包功能"形态触达消费者，而星闪路线被作为"整车厂＋国家标准的垂直体系"推进。两条路线撞上的是同一堵墙——射频必须在整车制造时就装进车里。
