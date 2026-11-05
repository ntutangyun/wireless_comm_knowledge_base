---
id: 2026-11-05_arxiv-wi2sar-drone-wifi-wilderness-search-rescue-luneburg-lens
date_published: 2026-04-10
date_found: 2026-11-05
technology: wifi
type: academic-paper
title_en: "\"Take Me Home, Wi-Fi Drone\": A Drone-based Wireless System for Wilderness Search and Rescue"
title_zh: "“带我回家，Wi-Fi 无人机”：面向野外搜救的无人机无线系统（Wi2SAR）"
url: "https://arxiv.org/abs/2604.09115"
source_quality: full
topics: [Wi-Fi, 802.11, localization, direction finding, Luneburg lens, drone, RSS, MobiCom 2026]
topic_primary: ftm-ranging
topics_secondary: [sensing-csi, security-privacy]
novelty_score: 3
---

## Summary (EN)

Weiying Hou, Luca Jiang-Tao Yu and Chenshu Wu (The University of Hong Kong) present Wi2SAR, an autonomous drone-based system for long-range, through-occlusion wilderness search and rescue that needs no existing infrastructure (arXiv 2604.09115, posted 10 April 2026; the paper is listed as MobiCom '26, Austin, 26-30 October 2026). Backfill note: the arXiv posting is about seven months old; ingested as a backfill; the paper appears at MobiCom '26 (Austin, 26-30 Oct 2026).

The mechanism: the drone mimics a Wi-Fi network the victim's phone already knows (SSID and PSK supplied by an emergency contact), so the phone auto-reconnects and emits identifiable packets. The paper claims three innovations: fast, energy-efficient device discovery; an RSS-only 3D direction finder built on a 15 cm 3D-printed Luneburg lens; and an adaptive navigation scheme. Discovery broadcasts beacons for the known SSID every 100 ms and relies on the standard WPA2-PSK handshake to confirm the device holds the credentials. Direction finding matches RSS samples from receivers on the lens surface against a once-measured reference beam template with a de-meaned least-squares estimator, giving azimuth and elevation without phase calibration. The search runs a zigzag grid with spacing of twice the reliable range, then a guided phase toward the estimated bearing, stopping when elevation nears 90 degrees.

The prototype uses a DJI Matrice 350 RTK with a Raspberry Pi CM4 and five Intel AX200 NICs (ten antennas). Evaluation covers four outdoor scenes and smartphones, a tablet and a smartwatch.

## Summary (ZH)

香港大学的 Weiying Hou、Luca Jiang-Tao Yu 与 Chenshu Wu 提出 Wi2SAR，一种无需现有基础设施、面向长距离穿透遮挡野外搜救的自主无人机系统（arXiv 2604.09115，2026 年 4 月 10 日发布；论文标注为 MobiCom '26，2026 年 10 月 26-30 日，奥斯汀）。补录说明：该 arXiv 论文已发布约七个月；作为补录收录；该论文出现在 MobiCom '26（奥斯汀，2026 年 10 月 26-30 日）。

机制：无人机模仿受害者手机已知的 Wi-Fi 网络（SSID 与 PSK 由紧急联系人提供），使手机自动重连并发出可识别的数据包。论文声称有三项创新：快速且节能的设备发现；基于 15 cm 3D 打印伦伯透镜的仅 RSS 三维测向；自适应导航。发现阶段每 100 ms 广播已知 SSID 的 beacon，并依靠标准 WPA2-PSK 握手确认设备持有凭据。测向阶段把透镜表面接收机的 RSS 样本与一次性测得的参考波束模板用去均值最小二乘估计器匹配，无需相位校准即可得到方位角与俯仰角。搜索先按两倍可靠距离间隔做之字形网格，再朝估计方位引导，俯仰角接近 90 度时停止。

原型采用 DJI Matrice 350 RTK、树莓派 CM4 和五块 Intel AX200 网卡（十根天线）。评估涵盖四个户外场景及智能手机、平板与智能手表。

## Key technical points (EN)

- **Lens gain and range:** about 10 dB RSS gain in ground tests; reception at 384 m where the bare antenna fails; discovery range extended by up to 104% (2.4 GHz LoS) and 80% (5 GHz LoS) (the abstract attributes 104% to 5 GHz; the body text to 2.4 GHz), with NLoS extensions of 73% (2.4 GHz) and 91% (5 GHz).
- **Direction finding:** median angular error 18.4 degrees (80th percentile 34.6 degrees), median projection rate 0.95, fewer than 4% ambiguous over 13,671 samples; MedPR at or above 0.96 out to 430 m; smartphones reached 429 m, tablet 152 m, smartwatch 197 m in LoS. In a 2D six-antenna comparison the paper reports ArrayTrack at 3.8 degrees with continuous recalibration, 46.0 degrees with one-time calibration, and Wi2SAR at 6.0 degrees over 360 degrees without recalibration.
- **Search performance:** 160,000 m2 searched in 13.5 minutes with 5 of 5 phones found; average discovery latency 39.8 s, mainly set by device Wi-Fi scan intervals (median 9 s active, 36 s idle, 165 s power-saving). A single-blind forest trial of 40,000 m2 acquired the signal at 115 s and finished localization at 224 s with 5 m horizontal error.
- **Compute:** 48 ms per RSS snapshot, 7.8 Hz update rate with seven targets, 48-52% CPU, about 6% extra battery drain over a 13.5-minute flight.
- **Stated limitations:** needs the victim's SSID/PSK and a powered Wi-Fi device kept near the victim; discovery tied to the device's scan interval; 15 cm lens undersized for 2.4 GHz; template measured once in a chamber; test area limited to 400 m x 400 m; a successful WPA2-PSK handshake shows the device holds the credentials, not a unique identity. Ethics section: use limited to authorized organizations, credentials and traffic discarded after each mission. Entry's own observation (not stated by the authors): the end-to-end forest trial is a single run.

## Key technical points (ZH)

- **透镜增益与距离：** 地面测试约 10 dB RSS 增益；在裸天线无法接收的 384 m 处仍可接收；发现距离最多延长 104%（2.4 GHz LoS）与 80%（5 GHz LoS）（摘要将 104% 归于 5 GHz，正文则归于 2.4 GHz），NLoS 分别延长 73%（2.4 GHz）与 91%（5 GHz）。
- **测向：** 中位角误差 18.4 度（第 80 百分位 34.6 度），中位投影率 0.95，13,671 个样本中歧义低于 4%；430 m 内 MedPR 不低于 0.96；LoS 下智能手机到达 429 m、平板 152 m、智能手表 197 m。在二维六天线对比中，论文报告 ArrayTrack 持续重校准时为 3.8 度、一次性校准时为 46.0 度，Wi2SAR 在 360 度范围内无需重校准为 6.0 度。
- **搜索性能：** 在 13.5 分钟内搜索 160,000 m2，5 部手机全部找到；平均发现时延 39.8 s，主要由设备 Wi-Fi 扫描间隔决定（中位数：活跃 9 s、空闲 36 s、省电 165 s）。40,000 m2 森林单盲试验中 115 s 获得信号，224 s 完成定位，水平误差 5 m。
- **计算开销：** 每次 RSS 快照 48 ms，七个目标时更新率 7.8 Hz，CPU 占用 48-52%，13.5 分钟飞行额外耗电约 6%。
- **论文自述局限：** 需要受害者的 SSID/PSK 以及随身携带且开启的 Wi-Fi 设备；发现受设备扫描间隔限制；15 cm 透镜对 2.4 GHz 偏小；模板仅在暗室测一次；测试区域限于 400 m x 400 m；WPA2-PSK 握手成功只说明设备持有凭据，并非唯一身份。伦理部分：仅限授权机构使用，任务结束后丢弃凭据与流量。本条目自身的观察（并非作者所述）：端到端森林试验仅进行了一次。

## Why it matters / what's new (EN)

The paper uses ordinary Wi-Fi client behaviour (reconnection to a known SSID) and RSS measurements rather than CSI or ranging frames, which places it at the edge of this KB's localization coverage: the direction-finding is RSS-template based, not 802.11az/bk ranging. It is filed under ftm-ranging as the nearest positioning bin, with sensing-csi and security-privacy as secondary.

The paper itself mentions possible IEEE 802.11 support for emergency beacon SSIDs as future work, and notes the WPA2-PSK reliance. The code is stated to be open-sourced.

## Why it matters / what's new (ZH)

该论文利用普通 Wi-Fi 客户端行为（对已知 SSID 自动重连）和 RSS 测量，而非 CSI 或测距帧，处于本知识库定位类内容的边缘：其测向基于 RSS 模板，并非 802.11az/bk 测距。因此归入最接近的定位类 ftm-ranging，次要类为 sensing-csi 与 security-privacy。

论文在后续工作中提到可能让 IEEE 802.11 支持应急 beacon SSID，并指出对 WPA2-PSK 的依赖。论文称代码已开源。

## Images

![Wi2SAR system overview | Wi2SAR 系统总览](https://arxiv.org/html/2604.09115v1/system_overview.png)
![Prototype drone with Luneburg lens | 搭载伦伯透镜的原型无人机](https://arxiv.org/html/2604.09115v1/prototype.png)
![Lens gain and range | 透镜增益与距离](https://arxiv.org/html/2604.09115v1/ll_eff.png)
![Example search trajectories | 搜索轨迹示例](https://arxiv.org/html/2604.09115v1/search_trajectory.png)
