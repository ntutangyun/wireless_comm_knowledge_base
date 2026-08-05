---
id: 2026-08-05_nxp-trimension-ncj29d6-bmw-digital-key
date_published: 2026-08-04
date_found: 2026-08-05
type: industry-news
title_en: "NXP Trimension NCJ29D6 UWB powers BMW Group's Digital Key Plus and in-cabin presence detection"
title_zh: "NXP Trimension NCJ29D6 UWB 芯片进入宝马集团量产车型：数字钥匙 Plus 与舱内活体存在检测"
url: "https://www.globenewswire.com/news-release/2026/08/04/3338049/0/en/nxp-trimension-ultra-wideband-powers-bmw-group-s-digital-key-plus-and-presence-detection.html"
source_quality: full
technology: uwb
topics: [UWB, digital-key, UWB-radar, automotive, CCC]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar, uwb-fi-ra]
novelty_score: 2
---

## Summary (EN)

NXP Semiconductors announced on August 4, 2026 that its Trimension NCJ29D6 UWB family will be deployed across the BMW Group fleet, starting with selected 2026 vehicle programs. NXP describes the NCJ29D6 as the first monolithic automotive UWB solution that combines secure fine-ranging and robust short-range radar on a single chip — one UWB system serving both convenience and safety functions.

On the convenience side, the chip underpins BMW's UWB-based Digital Key Plus: a smartphone or smartwatch replaces the key fob, and the vehicle unlocks/locks automatically and hands-free as the owner approaches or departs, including personalized welcome sequences (lighting, cabin presets) triggered by the secure distance measurement. On the safety side, the same radios run short-range radar for in-cabin presence detection — identifying subtle motion patterns of living beings (e.g. a child or pet left behind in a parked car) and warning the user. NXP explicitly positions this against emerging child-presence-detection regulation and future Euro NCAP and China NCAP protocols.

Markus Staeblein (SVP & GM, Secure Car Access, NXP) framed the value proposition as amortizing a single UWB system over multiple current and future features, naming kick sensing (foot-gesture trunk opening) and intrusion alerts as candidates on the same hardware. This is a design-win/deployment story rather than a chip launch: it moves the ranging + radar single-chip combination from announcements into a major OEM's production fleet.

## Summary (ZH)

NXP（恩智浦）于 2026 年 8 月 4 日宣布，其 Trimension NCJ29D6 UWB 芯片家族将部署到宝马集团车队，从 2026 年部分车型项目开始。NXP 称 NCJ29D6 是首个在单芯片上同时集成安全精细测距（fine-ranging）与稳健短距雷达能力的单片式（monolithic）车规 UWB 方案——一套 UWB 系统同时服务便利性与安全性两类功能。

便利性方面，该芯片支撑宝马基于 UWB 的数字钥匙 Plus（Digital Key Plus）：智能手机或手表取代传统钥匙，车主接近/离开时车辆自动免手解锁/上锁，并基于安全测距触发个性化迎宾体验（灯光、座舱预设等）。安全性方面，同一套射频以短距雷达模式运行，实现舱内活体存在检测——识别停车后车内生物（如遗留的儿童或宠物）的细微运动模式并向用户告警。NXP 明确将其对标日益临近的儿童存在检测（CPD）法规以及未来欧洲与中国 NCAP 协议。

NXP 安全车辆进入业务高级副总裁 Markus Staeblein 强调单套 UWB 系统可摊销到多个现有与未来功能上，例如脚踢开启尾门（kick sensing）与入侵告警可复用同一硬件。这是一则设计定点/量产部署新闻而非芯片发布：它把"测距 + 雷达单芯片"组合从发布会推进到了大型主机厂的量产车队。

## Key technical points (EN)

- **Trimension NCJ29D6 family** — NXP's monolithic automotive UWB SoC: secure fine-ranging (digital key) + short-range radar (presence detection) on one chip; deployment starts with selected 2026 BMW Group vehicle programs.
- **Digital Key Plus** — hands-free lock/unlock via smartphone/smartwatch with UWB secure ranging (relay-attack-resistant distance bounding), plus approach-triggered personalization (lighting, welcome sequences).
- **In-cabin presence detection** — UWB radar detects subtle motion of living beings in a parked vehicle; targets child-presence-detection regulatory requirements and future Euro NCAP / China NCAP protocols.
- **Single-system economics** — one UWB installation is positioned to also cover kick sensing and intrusion alert in future, spreading the BOM across convenience + safety features.
- **Ecosystem context** — BMW's Digital Key Plus is the flagship CCC Digital Key 3.0-lineage UWB use case; NXP Trimension was already known to be in 2026-model-year vehicles, and this release names the OEM and adds the radar/presence-detection leg in production.

## Key technical points (ZH)

- **Trimension NCJ29D6 家族** — NXP 单片式车规 UWB SoC：安全精细测距（数字钥匙）+ 短距雷达（存在检测）集成于一颗芯片；从宝马集团 2026 年部分车型项目开始部署。
- **数字钥匙 Plus** — 手机/手表经 UWB 安全测距（抗中继攻击的距离约束）实现免手上锁/解锁，并支持接近触发的个性化迎宾（灯光、欢迎序列）。
- **舱内存在检测** — UWB 雷达检测停放车辆内生物的细微运动；对标儿童存在检测（CPD）法规要求及未来欧洲/中国 NCAP 协议。
- **单系统经济性** — 一套 UWB 装置未来还可覆盖脚踢感应开尾门与入侵告警，把物料成本摊销到便利 + 安全多项功能。
- **生态背景** — 宝马数字钥匙 Plus 是 CCC Digital Key 3.0 谱系中旗舰级 UWB 用例；此次发布点名主机厂并把雷达/存在检测一并带入量产。

## Why it matters / what's new (EN)

The KB's UWB automotive thread so far tracks silicon and standards: the first 802.15.4ab SoCs (2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist, 2026-06-04_calterah-dubhe-uwb-soc-802154ab), the safety-rated Infineon TSL100 (2026-06-27_infineon-airoc-tsl100-uwb-asilb), and the FiRa interop program (2026-08-04_fira-plugfests-uwb-interop-program). This entry is the missing demand-side milestone: a named premium OEM (BMW Group) committing a fleet deployment of the combined ranging + radar single-chip architecture — exactly the dual-use model that Infineon's TSL100 and ST's ST64UWB-A100 were built to compete for. It also confirms that in-cabin child-presence detection over UWB radar is landing in production ahead of the NCAP protocol timelines, which strengthens the regulatory-pull narrative around the uwb-radar bin. Note the deployed chip is a 802.15.4z-era part — the 4ab silicon wave (ST/Calterah) is still pre-deployment, so this sets the baseline the 4ab parts must displace.

## Why it matters / what's new (ZH)

本 KB 的 UWB 车载脉络此前集中在芯片与标准侧：首批 802.15.4ab SoC（ST64UWB、Calterah Dubhe）、安全等级认证的英飞凌 TSL100，以及 FiRa 互操作测试计划。本条目补上了需求侧的里程碑：一家点名的高端主机厂（宝马集团）承诺将"测距 + 雷达"单芯片架构部署到车队——这正是英飞凌 TSL100 与 ST ST64UWB-A100 所争夺的双用途模式。它也确认了基于 UWB 雷达的舱内儿童存在检测正赶在 NCAP 协议时间表之前进入量产，强化了 uwb-radar 方向的法规拉动叙事。注意本次部署的仍是 802.15.4z 世代芯片——4ab 芯片浪潮（ST/Calterah）尚未进入部署期，本条目因此也标定了 4ab 器件需要替代的现有基线。

## Images

![NXP Trimension UWB powers BMW Group Digital Key Plus and presence detection | NXP Trimension UWB 支撑宝马数字钥匙 Plus 与存在检测](https://ml.globenewswire.com/Resource/Download/7ee94f20-0d01-4aac-a08c-59086245d809/nxp-trimension-uwb-powers-bmw-group-digital-key-plus-and-presence-detection.jpg)
