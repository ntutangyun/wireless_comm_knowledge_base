---
id: 2026-08-18_csa-aliro-1-0-uwb-hands-free-smart-lock
date_published: 2026-02-26
date_found: 2026-08-18
type: uwb-spec
technology: uwb
title_en: "CSA Aliro 1.0 released: unified NFC / BLE / UWB digital-key standard for smart locks, with Samsung Wallet Digital Home Key as first shipping implementation"
title_zh: "CSA 发布 Aliro 1.0：面向智能门锁的 NFC／BLE／UWB 统一数字钥匙标准，三星钱包 Digital Home Key 率先商用"
url: "https://csa-iot.org/newsroom/introducing-aliro-1-0-a-unified-standard-to-transform-the-access-control-ecosystem/"
source_quality: full
topics: [Aliro, CSA, digital-key, smart-lock, hands-free, NFC, BLE, Samsung-Wallet]
topic_primary: uwb-fi-ra
topics_secondary: [uwb-security]
novelty_score: 2
---

## Summary (EN)

On 26 February 2026 the Connectivity Standards Alliance (CSA, the body behind Matter and Zigbee) published **Aliro 1.0**, a communication protocol and credential standard that lets a smartphone, smartwatch or wearable act as a digital key for any Aliro-certified lock or reader. Aliro defines three radio paths and one credential format: **NFC** for tap-to-access, **Bluetooth LE** for user-initiated access at longer range, and **Bluetooth LE + Ultra-Wideband** for seamless, secured *hands-free* authentication — BLE handles discovery and session setup, UWB supplies the secure distance measurement that lets the lock open only when the phone is genuinely at the door and resists relay attacks. Credentials use asymmetric cryptography, are held in the mobile wallets of Apple, Google and Samsung, and are exchanged point-to-point between device and lock without a hub, Wi-Fi or cloud dependency (Matter remains the administration/control layer; Aliro is the "doorman" that checks authorisation at the door). Over 220 member companies contributed; a certification programme via Authorized Test Labs ships with the spec, and Apple, Allegion, Aqara, Google, HID, Kastle, Kwikset, Last Lock, Nordic Semiconductor, Nuki, NXP, Qorvo, Samsung and STMicroelectronics are named as expected first certifiers.

The first shipping implementation followed within days: on 2 March 2026 Samsung launched **Samsung Wallet Digital Home Key**, built on Aliro, rolling out in select regions from March 2026 with lock partners Aqara, Nuki, Schlage and Xthings (Ultraloq). It supports tap-to-unlock over NFC, hands-free unlock via UWB proximity detection on select Galaxy devices from April 2026, and remote unlock through the app; keys are protected by Samsung Knox (EAL6+-grade certified hardware) with biometric or PIN confirmation inside Wallet. Together the two announcements mark the point at which UWB hands-free access moved from the car-key world (CCC Digital Key) into a cross-platform residential-lock standard with silicon (NXP, Qorvo, ST, Nordic), lock and phone vendors aligned.

## Summary (ZH)

2026 年 2 月 26 日，连接标准联盟（CSA，即 Matter 与 Zigbee 的主管机构）发布 **Aliro 1.0**——一套通信协议与凭证标准，使智能手机、智能手表或可穿戴设备可作为任何 Aliro 认证门锁／读卡器的数字钥匙。Aliro 定义三条无线路径与一种凭证格式：**NFC** 用于触碰开锁，**蓝牙 LE** 用于更远距离的用户主动开锁，**蓝牙 LE + 超宽带（UWB）** 用于无感、安全的*免提*认证——BLE 负责发现与会话建立，UWB 提供安全测距，确保只有手机真正位于门前时门锁才开启，并抵御中继攻击。凭证采用非对称加密，存放于 Apple、Google、Samsung 的移动钱包中，设备与门锁点对点交换，不依赖网关、Wi-Fi 或云（Matter 仍是管理／控制层；Aliro 是门口核验权限的“门卫”）。逾 220 家成员公司参与制定；规范随附经授权测试实验室执行的认证计划，Apple、Allegion、Aqara、Google、HID、Kastle、Kwikset、Last Lock、Nordic Semiconductor、Nuki、NXP、Qorvo、Samsung 与 STMicroelectronics 被列为预期首批认证厂商。

首个商用实现数日后落地：2026 年 3 月 2 日三星发布基于 Aliro 的 **Samsung Wallet Digital Home Key**，自 3 月起在部分地区上线，合作门锁品牌包括 Aqara、Nuki、Schlage 与 Xthings（Ultraloq）。支持 NFC 触碰开锁、自 2026 年 4 月起在部分 Galaxy 设备上通过 UWB 近距离检测实现免提开锁，以及 App 远程开锁；钥匙由 Samsung Knox（EAL6+ 级认证硬件）保护，并在钱包内以生物识别或 PIN 确认。两项发布共同标志着 UWB 免提门禁从车钥匙领域（CCC 数字钥匙）扩展为跨平台的住宅门锁标准，芯片（NXP、Qorvo、ST、Nordic）、门锁与手机厂商完成对齐。

## Key technical points (EN)

- **Three access modes, one credential** — NFC tap; BLE user-initiated; BLE + UWB hands-free with UWB secure ranging as the anti-relay distance check. The credential and message formats are common across all three, so a lock can implement any subset.
- **Point-to-point, hub-less** — device ↔ lock/reader directly, no Wi-Fi/cloud dependency; NFC path works even with a depleted phone battery on properly implemented devices.
- **Security model** — asymmetric cryptography, keys generated and stored on the device (wallet secure element), one-time signed tokens per unlock event; Samsung's implementation adds Knox EAL6+-grade protection with biometric/PIN gating.
- **Positioning vs Matter** — Matter administers and controls the lock over IP; Aliro authenticates the person at the door, so the two are complementary rather than overlapping.
- **Ecosystem** — 220+ members; expected first certifiers span phone platforms (Apple, Google, Samsung), silicon (NXP, Qorvo, STMicroelectronics, Nordic, Infineon), locks/access (ASSA ABLOY, Allegion, Aqara, HID, Kwikset, Nuki, Kastle, Last Lock).
- **First product** — Samsung Wallet Digital Home Key (2 Mar 2026): NFC from March, UWB hands-free on select Galaxy devices from April 2026, partners Aqara/Nuki/Schlage/Xthings.

## Key technical points (ZH)

- **三种开锁模式、一套凭证** —— NFC 触碰；BLE 用户主动；BLE + UWB 免提，以 UWB 安全测距作为防中继的距离校验。三条路径共用凭证与报文格式，门锁可实现任意子集。
- **点对点、无网关** —— 设备与门锁／读卡器直连，不依赖 Wi-Fi／云；正确实现的设备在手机电量耗尽时 NFC 路径仍可用。
- **安全模型** —— 非对称加密，密钥在设备（钱包安全元件）内生成与存储，每次开锁使用一次性签名令牌；三星实现叠加 Knox EAL6+ 级保护及生物识别／PIN 校验。
- **与 Matter 的关系** —— Matter 通过 IP 管理与控制门锁；Aliro 在门口认证人员身份，二者互补而非重叠。
- **生态** —— 220+ 成员；预期首批认证方涵盖手机平台（Apple、Google、Samsung）、芯片（NXP、Qorvo、STMicroelectronics、Nordic、Infineon）、门锁／门禁（ASSA ABLOY、Allegion、Aqara、HID、Kwikset、Nuki、Kastle、Last Lock）。
- **首款产品** —— Samsung Wallet Digital Home Key（2026 年 3 月 2 日）：NFC 自 3 月起、UWB 免提自 2026 年 4 月起在部分 Galaxy 设备上线，合作方 Aqara／Nuki／Schlage／Xthings。

## Why it matters / what's new (EN)

The KB's UWB application-layer coverage has been car-centric — CCC Digital Key deployments (2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key), FiRa interop (2026-08-04_fira-plugfests-uwb-interop-program) and payments (2026-05-21_jcb-uwb-payments-japan, which mentions Aliro only in passing as a "home access" use case). There was no entry on Aliro itself, even though it is the residential counterpart of CCC Digital Key and the second cross-industry standard to make UWB secure ranging a defined access mode. This entry is a deliberate catch-up (spec Feb-2026, first product Mar/Apr-2026 — inside the 12-month window) because the bin had zero coverage of the smart-lock/hands-free-access track, and because the "expected first certifiers" list doubles as a map of which UWB silicon (NXP Trimension, Qorvo, ST64UWB, Nordic/Novelda) is being pulled into door hardware. Novelty 2: standards/industry news rather than a new technique; watch item is the first Aliro-certified UWB lock and whether Apple/Google Wallet enable the UWB hands-free path.

## Why it matters / what's new (ZH)

知识库 UWB 应用层的覆盖此前以汽车为中心——CCC 数字钥匙部署（2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key）、FiRa 互操作（2026-08-04_fira-plugfests-uwb-interop-program）与支付（2026-05-21_jcb-uwb-payments-japan，其中仅顺带提及 Aliro 为“家庭门禁”用例）。此前没有关于 Aliro 本身的条目，而它正是 CCC 数字钥匙在住宅场景的对应物，也是第二个把 UWB 安全测距定义为正式门禁模式的跨行业标准。本条为有意的补录（规范 2026 年 2 月、首款产品 2026 年 3／4 月——均在 12 个月窗口内），原因是该板块此前对智能门锁／免提门禁赛道零覆盖，且“预期首批认证方”名单同时勾勒出哪些 UWB 芯片（NXP Trimension、Qorvo、ST64UWB、Nordic/Novelda）正被引入门锁硬件。新颖度 2：属标准／产业动态而非新技术；后续观察点为首款 Aliro 认证 UWB 门锁，以及 Apple／Google 钱包是否开启 UWB 免提路径。

## Images

![Aliro 1.0 release graphic from the Connectivity Standards Alliance | 连接标准联盟 Aliro 1.0 发布图](https://csa-iot.org/wp-content/uploads/2026/02/Aliro-1.0-Release-Graphic-03-1024x342.png)
