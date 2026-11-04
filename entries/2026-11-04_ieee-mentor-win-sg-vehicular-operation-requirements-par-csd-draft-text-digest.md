---
id: 2026-11-04_ieee-mentor-win-sg-vehicular-operation-requirements-par-csd-draft-text-digest
date_published: 2026-11-03
date_found: 2026-11-04
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG Mentor digest — 2026-11-04 (\"Considerations on WIN Requirements from Vehicular Operation\": throughput at range, tail latency, window-bounded bulk traffic and moving P2P, with draft PAR/CSD wording, DCN 2183r0)"
title_zh: "IEEE 802.11 WIN SG Mentor 当日摘要 — 2026-11-04（《WIN 对车载运行场景的需求考量》：远距吞吐、尾部时延、窗口受限的批量流量与移动 P2P，并附 PAR/CSD 建议文字，DCN 2183r0）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2183"
source_quality: full
topics: [WIN-SG, Wi-Fi 9, PAR, CSD, vehicular, mobility, tail latency, P2P]
topic_primary: wifi8-uhr
topics_secondary: [roaming-mobility, wifi-for-ai]
novelty_score: 2
---

## Summary (EN)

The WIN (WLAN Intelligent Networking) Study Group has one new document in the latest Mentor listing: DCN 11-26-2183r0, "Considerations on WIN Requirements from Vehicular Operation" (Jing Ma, Toyota; listed 3 November 2026; 11 slides). The deck takes the candidate WIN targets already under discussion (throughput at range with interference, predictable latency, adaptation) and, for each, lists what vehicles "additionally" bring. It states that the PAR covers "fixed, portable, and moving stations" (PAR 5.4) and that a vehicle spans three Wi-Fi domains at once: an in-cabin BSS / P2P hotspot, an external AP (home, charging, roadside) and a peer vehicle. Four operating conditions are named as not yet explicit in the group's discussion: mobility of both STA and AP, outdoor range, intermittent connectivity windows, and multiple management domains. The slides say the same conditions apply to mobile robots, AGVs and drones.

Slides 3 to 6 take the four topics in turn and each ends with a question to the group. Throughput at range: bulk sensor-data upload at refueling or charging sites needs sustained uplink (hundreds of Mbps per vehicle, several vehicles per AP) at outdoor range, with limited channel width, so gains would have to come from spectral efficiency and robustness; supporting data cited from an AECC field trial are 77-121 Mbps (20 MHz) and 261-318 Mbps (40 MHz) stationary uplink, but at least 10 Mbps only within about 100 m while approaching, and a stated need of 21.8 GB/day in about 5 minutes per day of Wi-Fi. Latency: the large tail source is link (re)establishment (handover, cold start); the trial shows link setup of 1.68-3.30 s (mean 2.51 s) and 4-42 MB transferred per 30 km/h drive-by, and the slide argues that about 200 ms gaps show only at P99 while multi-second gaps dominate P95. Adaptation: a "window-bounded bulk" class (training-data upload, OTA download before departure) with completion deadlines, positioned as not yet discussed in WIN, with minimal context limited to deadline and expected dwell. P2P: in-cabin P2P alongside an infrastructure link, and V2V between cars of different owners with no shared management; trial V2V throughput of 30-100+ Mbps within about 50 m.

Slides 7 and 8 map each point to a place in the PAR/CSD (evaluation scenarios, PAR 5.5, CSD 1.2.1) and give draft insertions into 11-26/1834r0 (WIN proposed PAR) and 11-26/1806r0 (WIN CSD proposal), for example adding "including for moving stations" to the worst-case latency and jitter wording, "bulk with completion deadlines" to the traffic description, and "robust operation under mobility and rapidly changing environments" to the CSD text. Slide 9 holds two straw polls (whether the PAR need statement and CSD should reflect moving-device operating conditions; whether to pass the slide-8 text to the PAR/CSD editors); no results are filled in. Backup slides list the automotive use cases behind the contribution (HD-map download, sensor-data sharing, streaming through AP handovers, in-vehicle connectivity, AD/ADAS training-data collection and OTA).

## Summary (ZH)

WIN（WLAN Intelligent Networking）研究组在最新 Mentor 列表中有一份新文档：DCN 11-26-2183r0《Considerations on WIN Requirements from Vehicular Operation》（Jing Ma，Toyota；列出日期 2026 年 11 月 3 日；共 11 页）。该材料沿用群组已在讨论的候选 WIN 目标（有干扰下的远距吞吐、可预测时延、自适应），并对每一项列出车辆"额外"带来的条件。材料指出 PAR 覆盖"固定、便携和移动站点"（PAR 5.4），并称一辆车同时处于三个 Wi-Fi 域：车内 BSS / P2P 热点、外部 AP（家庭、充电、路侧）和对端车辆。其中四个运行条件被称为尚未在群组讨论中明确：STA 与 AP 均可移动、室外距离、间歇性连接窗口、多个管理域；幻灯片还称这些条件同样适用于移动机器人、AGV 与无人机。

第 3 至 6 页依次展开四个主题，每页末尾向群组提出一个问题。远距吞吐：在加油或充电站点批量上传传感器数据需要持续上行（每车数百 Mbps，每个 AP 多辆车）及室外距离，且信道宽度受限，增益只能来自频谱效率与鲁棒性；所引用的 AECC 现场试验数据为静止上行 77-121 Mbps（20 MHz）、261-318 Mbps（40 MHz），接近过程中仅在约 100 m 内达到至少 10 Mbps，并给出"21.8 GB/天需在约 5 分钟/天的 Wi-Fi 时间内传完"的需求。时延：尾部时延的主要来源是链路（重新）建立（切换、冷启动）；试验显示链路建立 1.68-3.30 s（均值 2.51 s），30 km/h 驶过一次传输 4-42 MB，幻灯片认为约 200 ms 的间隙仅在 P99 可见，而数秒级间隙主导 P95。自适应：提出"窗口受限的批量流量"类别（训练数据上传、出发前 OTA 下载），带有完成期限，并标注为 WIN 尚未讨论，所需上下文仅限期限与预计停留时间。P2P：车内 P2P 与基础设施链路并存，以及不同所有者、无共同管理的车辆之间的 V2V；试验 V2V 吞吐为约 50 m 内 30-100+ Mbps。

第 7、8 页把各点对应到 PAR/CSD 的位置（评估场景、PAR 5.5、CSD 1.2.1），并给出对 11-26/1834r0（WIN PAR 提案）和 11-26/1806r0（WIN CSD 提案）的建议插入文字，例如在最坏情况时延与抖动表述中加入"包括移动站点"，在流量描述中加入"带完成期限的批量流量"，在 CSD 中加入"在移动与快速变化环境下的稳健运行"。第 9 页有两个 Straw Poll（PAR 需求陈述和 CSD 是否应反映移动设备运行条件；是否把第 8 页文字提交给 PAR/CSD 编辑作进一步完善），投票结果未填写。备份页列出了支撑本贡献的汽车用例（高精地图下载、传感器数据共享、跨 AP 切换的流媒体、车内连接、AD/ADAS 训练数据采集与 OTA）。

## Key technical points (EN)

- **DCN 11-26-2183r0 · WIN SG** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2183&is_year=2026) Considerations on WIN Requirements from Vehicular Operation. Jing Ma (Toyota). 11 slides.
- Framing on the slides: a vehicle is AP and STA concurrently across in-cabin BSS/P2P, external AP and peer vehicle; four conditions not yet explicit in WIN discussion: mobility (STA and AP), outdoor range, intermittent windows, multiple management domains.
- Throughput at range: sustained, uplink-heavy, outdoor links; cited trial figures 77-121 Mbps (20 MHz) and 261-318 Mbps (40 MHz) stationary uplink, 10 Mbps or more only within about 100 m when approaching; 21.8 GB/day needed in about 5 minutes/day. Question: should throughput-at-range evaluation include outdoor links and sustained uplink?
- Latency predictability: link (re)establishment as the large tail source; link setup 1.68-3.30 s (mean 2.51 s); 4-42 MB per 30 km/h drive-by. Question: include moving STAs in WIN latency evaluation, and does P95 capture (re)establishment gaps?
- Adaptation: "window-bounded bulk" traffic (completion deadline, delay-tolerant per packet) shown as a class not yet discussed in WIN; minimal context is deadline and expected dwell, not location or route.
- P2P between moving devices across management domains: car as AP and STA at once; V2V 30-100+ Mbps within about 50 m in the trial; co-channel short-lived neighbours.
- Draft text (slide 8) for PAR 5.5 and CSD 1.2.1 / 1.2.3 as redline suggestions to 11-26/1834r0 and 11-26/1806r0, "to be refined with the PAR/CSD editors"; two straw polls (SP 1 and SP 2) with results blank.

## Key technical points (ZH)

- **DCN 11-26-2183r0 · WIN SG** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2183&is_year=2026) Considerations on WIN Requirements from Vehicular Operation。Jing Ma（Toyota）。共 11 页。
- 幻灯片的框架：车辆同时是 AP 与 STA，跨越车内 BSS/P2P、外部 AP 和对端车辆；WIN 讨论中尚未明确的四个条件为：移动性（STA 与 AP）、室外距离、间歇窗口、多管理域。
- 远距吞吐：持续、上行为主的室外链路；所引试验数据为静止上行 77-121 Mbps（20 MHz）、261-318 Mbps（40 MHz），接近时仅约 100 m 内达到 10 Mbps 以上；21.8 GB/天需在约 5 分钟/天内完成。问题：远距吞吐评估是否应包含室外链路和持续上行？
- 时延可预测性：链路（重新）建立是尾部时延的主要来源；链路建立 1.68-3.30 s（均值 2.51 s）；30 km/h 驶过一次传输 4-42 MB。问题：WIN 时延评估是否应包含移动 STA，P95 能否覆盖（重新）建立间隙？
- 自适应："窗口受限的批量流量"（带完成期限、单包时延容忍）被标为 WIN 尚未讨论的类别；所需最小上下文是期限与预计停留时间，而非位置或路线。
- 跨管理域的移动设备间 P2P：车辆同时为 AP 与 STA；试验 V2V 为约 50 m 内 30-100+ Mbps；同信道、短暂存在的邻居。
- 第 8 页为 PAR 5.5 与 CSD 1.2.1 / 1.2.3 的建议文字，作为对 11-26/1834r0 与 11-26/1806r0 的修改建议，"将与 PAR/CSD 编辑进一步完善"；另有两个 Straw Poll（SP 1、SP 2），结果为空。

## Why it matters / what's new (EN)

This is a requirements-and-wording contribution to the WIN SG's PAR/CSD drafting, not a mechanism proposal: it argues for moving devices (vehicles, robots, AGVs) to be reflected in the PAR need statement, the CSD and the evaluation scenarios, and it supplies concrete insertion text. It connects to earlier WIN SG entries in this KB, such as [2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest](2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest.md) and [2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest](2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest.md). The field-trial numbers are the authors' cited figures from an AECC report marked "to be published", so they cannot be checked from the deck itself.

## Why it matters / what's new (ZH)

这是对 WIN SG 的 PAR/CSD 起草工作的需求与措辞类贡献，而非机制提案：它主张在 PAR 需求陈述、CSD 与评估场景中体现移动设备（车辆、机器人、AGV），并给出具体的插入文字。它与本知识库中此前的 WIN SG 条目相关，如 [2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest](2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest.md) 和 [2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest](2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest.md)。现场试验数据是作者引用的 AECC 报告（标注"待发布"）中的数字，无法仅凭该材料核实。
