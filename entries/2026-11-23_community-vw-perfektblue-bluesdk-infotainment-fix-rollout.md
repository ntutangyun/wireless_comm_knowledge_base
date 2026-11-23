---
id: 2026-11-23_community-vw-perfektblue-bluesdk-infotainment-fix-rollout
date_published: 2026-11-19
date_found: 2026-11-23
type: community-signal
technology: bluetooth
title_en: "VW rolls out the fix for the PerfektBlue BlueSDK flaws in older ID-series infotainment, about 16 months after public disclosure"
title_zh: "大众为旧款 ID 系列车机推送 PerfektBlue（BlueSDK 蓝牙协议栈漏洞）修复，距漏洞公开披露约 16 个月"
url: "https://www.heise.de/en/news/VW-cars-could-be-eavesdropped-on-and-tracked-via-Bluetooth-for-16-months-11531075.html"
source_quality: full
topics: [Bluetooth stack, BlueSDK, OpenSynergy, PerfektBlue, automotive infotainment, remote code execution, OTA update, Volkswagen]
topic_primary: bt-security
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

heise online reported on 2026-11-19 (linked on Hacker News the same day) that Volkswagen has begun distributing a fix for "PerfektBlue", a set of flaws in the BlueSDK Bluetooth stack that Hungarian firm PCA Cyber Security reported to automakers in 2024 and published in an advisory on 7 July 2025. VW told heise the update had been available for about three weeks, and heise's headline puts the exposure window at 16 months. According to heise, the affected cars are an older generation of VW infotainment (the demonstration used an ID.4); researchers, as reported by The Times and relayed by heise, estimate several hundred thousand vehicles are affected.

VW's statements, as quoted by heise: cars on software older than 4.0 receive update 3.9.1 over the air while parked; cars on software newer than 4.0 must visit a workshop; cars on 5.6 or later are not affected. heise reports that after an accepted Bluetooth pairing an attacker could run code on the head unit, tap the hands-free microphone, track GPS location and operate heater, wipers and sunroof from a laptop outside the car; VW says steering, brakes and accelerator are not reachable.

## Summary (ZH)

heise online 于 2026-11-19 报道（同日被转到 Hacker News）：大众已开始推送 "PerfektBlue" 的修复。PerfektBlue 是 BlueSDK 蓝牙协议栈中的一组漏洞，由匈牙利公司 PCA Cyber Security 于 2024 年报告给车企，并于 2025 年 7 月 7 日发布公告。大众向 heise 表示该更新约三周前开始提供，heise 标题给出的暴露时长为 16 个月。据 heise，受影响的是大众较早一代的车机系统（演示车型为 ID.4）；据 heise 转述《泰晤士报》报道，研究人员估计受影响车辆达数十万辆。

heise 援引的大众说法：软件版本低于 4.0 的车辆可在停车时通过 OTA（空中下载）安装 3.9.1 更新；高于 4.0 版本的车辆需到维修站处理；5.6 及以上版本不受影响。heise 报道称，在用户接受蓝牙配对之后，攻击者可在车机上执行代码，窃听免提麦克风、追踪 GPS 位置，并在车外用笔记本电脑操控暖风、雨刮和天窗；大众表示转向、刹车和油门无法被触及。

## Key technical points (EN)

- Stack: OpenSynergy BlueSDK. PCA's advisory lists four CVEs: CVE-2024-45434 (use-after-free in AVRCP, CVSS 8.0), CVE-2024-45431 (L2CAP remote CID validation, 3.5), CVE-2024-45433 and CVE-2024-45432 (RFCOMM, 5.7 each), chained into "1-click" remote code execution.
- Prerequisite on the tested units: reachable after pairing. The advisory adds that other devices could be reachable before pairing depending on the profile security level or use of "Just Works" SSP.
- Vendors named in the advisory: Mercedes-Benz (NTG6), Volkswagen (MEB ICAS3), Škoda (MIB3); BMW listed as affected, but only the information-leak step was demonstrated and RCE was not verified (advisory update of 11 November 2025).
- Per the advisory, OpenSynergy says patches shipped in September 2024; the VW vehicle-side rollout reported by heise came in late October to November 2026.

## Key technical points (ZH)

- 协议栈：OpenSynergy BlueSDK。PCA 公告列出四个 CVE：CVE-2024-45434（AVRCP 中的释放后使用，CVSS 8.0）、CVE-2024-45431（L2CAP 远端 CID 校验不当，3.5）、CVE-2024-45433 与 CVE-2024-45432（RFCOMM，均为 5.7），串联后实现"一次点击"远程代码执行。
- 已测试车机上的前提：配对后可触达。公告补充，其他设备若取决于配置文件的安全等级或使用 "Just Works" SSP（安全简易配对），可能在配对前即可触达。
- 公告点名的厂商：梅赛德斯-奔驰（NTG6）、大众（MEB ICAS3）、斯柯达（MIB3）；宝马列为受影响，但仅演示了信息泄露环节，远程代码执行未验证（2025 年 11 月 11 日公告更新）。
- 据公告，OpenSynergy 称补丁于 2024 年 9 月发布；heise 报道的大众车端推送则在 2026 年 10 月下旬至 11 月。

## Why it matters / what's new (EN)

The vulnerabilities themselves were public in July 2025; what is new is the vehicle-side rollout, reported by heise in November 2026. The timeline in the two sources shows the gap between a stack vendor's patch (September 2024, per OpenSynergy) and a fix reaching cars, with part of the fleet still needing a workshop visit.

## Why it matters / what's new (ZH)

漏洞本身已于 2025 年 7 月公开；新的是 heise 在 2026 年 11 月报道的车端修复推送。两份来源中的时间线显示了协议栈厂商发布补丁（据 OpenSynergy 为 2024 年 9 月）与修复真正到达车辆之间的间隔，且部分车辆仍需到店处理。

## Images

None.
