---
id: 2026-10-16_arxiv-ghostline-six-node-esp32-csi-motion-tracker
date_published: 2026-10-13
date_found: 2026-10-16
technology: wifi
type: academic-paper
title_en: "Ghostline: a six-node Wi-Fi CSI motion tracker with node-to-node Links. System description and a pilot evaluation"
title_zh: "Ghostline：带节点间链路的六节点 Wi-Fi CSI 运动跟踪器——系统描述与试点评估"
url: "https://arxiv.org/abs/2610.18764"
source_quality: full
topics: [WiFi-sensing, CSI, ESP32, radio tomographic imaging, device-free tracking]
topic_primary: sensing-csi
topics_secondary: [amp-iot]
novelty_score: 2
---

## Summary (EN)

Ghostline (Cochinescu, Moldovanu, Constantin; arXiv 2610.18764, submitted 13 October 2026; 18 pages, data and scripts archived on Zenodo) is a device-free motion tracker built from six ESP32-S3 boards and one consumer router on 2.4 GHz channel 1. The ESP32 Wi-Fi driver reports CSI for every received frame together with the sender's MAC address, and a modified open-source firmware (RuView 0.8.12 with the authors' changes) forwards both, so each board carries a CSI stream for the router and for each other board. Seven radios therefore give up to 36 directed Links over 21 Spans, instead of a star of six links from the router. Each Link is compared with a self-forming quiet Baseline, disturbed Links vote on a floor grid in a metric map of the room, and the grid becomes anonymous Tracks. Processing runs on one laptop with signal processing only and no trained model.

The system was built during a three-day hackathon (9-11 October 2026) and evaluated on its last afternoon with one walker in a 48 m2 room, using spoken cues at seven marked positions, a two-minute free walk and five minutes of empty room, synchronised to video within a median 0.18 s. Between marks the Track lay a median 0.85 m from the straight path and 1.56 m (95% CI 1.29 to 2.83) from a cue-based reference trajectory; 46% of walk updates were within 2 m of it, and the free walk was tracked in 94% of updates. The authors report the limits: a standing person is lost within seconds, false Tracks appeared in 15.9% and 2.9% of updates in two empty-room periods, and informal runs did not separate two walkers.

Two offline replays of the same recording are reported. With the node-to-node Links removed and settings unchanged, the tracked share of walk updates falls from 90% to 19% and the free walk from 96% to 60%. A plain radio tomographic image built on the same per-Span evidence, at the same false-Track rate, matches the grid and tracker at 2 m (48% against 47%) and is ahead at 1 m (36% against 21%); the authors conclude that on this recording the Tracks depend on the Link set and that the imaging stage adds no measurable accuracy. The paper states it is one session in one room and says what the pilot does and does not establish.

## Summary (ZH)

Ghostline（Cochinescu、Moldovanu、Constantin；arXiv 2610.18764，2026 年 10 月 13 日提交；18 页，数据与脚本存档于 Zenodo）是一个免设备运动跟踪器，由 6 块 ESP32-S3 开发板和 1 台消费级路由器在 2.4 GHz 信道 1 上构成。ESP32 的 Wi-Fi 驱动会为每个接收帧上报 CSI 及发送方 MAC 地址，经修改的开源固件（RuView 0.8.12 加作者改动）把两者一并转发，因此每块板既有来自路由器的 CSI 流，也有来自其他各板的 CSI 流。7 个无线电由此提供最多 36 条有向链路（Link）、覆盖 21 个跨度（Span），而不是仅由路由器发出的 6 条星形链路。每条链路与自形成的静默基线比较，被扰动的链路在房间度量地图的地面网格上投票，网格再转换为匿名轨迹。处理在一台笔记本上完成，仅用信号处理，不使用训练模型。

系统在为期三天的黑客松（2026 年 10 月 9-11 日）中搭建，并在最后一个下午用一名行走者在 48 m2 房间内评估：7 个标记位置的语音提示、2 分钟自由行走和 5 分钟空房间，与视频同步中位误差 0.18 s。标记点之间，轨迹中位距直线路径 0.85 m，距基于提示的参考轨迹 1.56 m（95% CI 1.29 至 2.83）；46% 的行走更新落在其 2 m 内，自由行走有 94% 的更新被跟踪。作者报告了局限：静止站立的人数秒内丢失；两个空房间时段中分别有 15.9% 和 2.9% 的更新出现虚假轨迹；非正式测试未能区分两名行走者。

论文还报告了对同一录制数据的两项离线回放。去掉节点间链路而设置不变时，行走更新的被跟踪比例从 90% 降至 19%，自由行走从 96% 降至 60%。在相同每跨度证据和相同虚假轨迹率下，普通无线电层析成像在 2 m 尺度上与网格加跟踪器相当（48% 对 47%），在 1 m 尺度上更优（36% 对 21%）；作者的结论是：在该录制数据上轨迹依赖于链路集合，成像阶段没有带来可测的精度提升。论文声明这只是一个房间的一次会话，并说明了该试点能证明与不能证明的内容。

## Key technical points (EN)

- Hardware and firmware: six ESP32-S3 boards plus one consumer router on 2.4 GHz channel 1; per-frame CSI with sender MAC forwarded from a modified open-source firmware, with a per-transmitter rate cap of 8 frames per second; about 312 datagrams per second observed with all 36 Links live in the session.
- Pipeline: per-Link disturbance against a continuously formed quiet Baseline, voting on a floor grid, anonymous Tracks; no camera, wearable, identity or trained model.
- Pilot results (one walker, 48 m2): median 0.85 m from the walked path, 1.56 m from the cue-based reference, 94% of free-walk updates tracked.
- Ablation: removing node-to-node Links drops tracked walk updates from 90% to 19%; an RTI image on the same evidence is level at 2 m and ahead at 1 m.
- Stated limits: a standing person is lost within seconds; false Tracks in 15.9% and 2.9% of empty-room updates; two walkers not separated.

## Key technical points (ZH)

- 硬件与固件：6 块 ESP32-S3 加 1 台消费级路由器，2.4 GHz 信道 1；经修改的开源固件转发逐帧 CSI 及发送方 MAC，每发送方限速每秒 8 帧；会话中 36 条链路全部在线，约每秒 312 个数据报。
- 流程：每条链路相对持续形成的静默基线计算扰动，在地面网格上投票，生成匿名轨迹；不使用摄像头、可穿戴设备、身份信息或训练模型。
- 试点结果（一名行走者，48 m2）：距行走路径中位 0.85 m，距基于提示的参考 1.56 m，自由行走 94% 的更新被跟踪。
- 消融：去掉节点间链路，被跟踪的行走更新由 90% 降至 19%；同样证据上的 RTI 图像在 2 m 持平、1 m 更优。
- 论文自述局限：静止站立的人数秒内丢失；空房间更新中虚假轨迹 15.9% 与 2.9%；无法区分两名行走者。

## Why it matters / what's new (EN)

The paper itself says an all-pairs CSI mesh on commodity ESP32 boards is not new, citing a nine-node ESP32-C3 mesh and OpenCSI, and positions its contribution as using the Links for localisation and tracking on a floor grid rather than detection or occupancy. Its own ablation reports that the imaging stage adds no measurable accuracy over a plain RTI image on this recording, and it labels the result a one-room pilot. In this KB it complements the cross-room tracking and CSI-encoder entries under sensing-csi (see 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder) with a low-cost multi-radio topology.

## Why it matters / what's new (ZH)

论文自己指出，在商用 ESP32 板上构建全节点对 CSI 网格并不新（引用了九节点 ESP32-C3 网格和 OpenCSI），其贡献定位为把这些链路用于地面网格上的定位与跟踪，而非检测或占用判断。其消融结果表明，在该录制数据上成像阶段相对普通 RTI 图像没有可测的精度增益，并将结果标注为单房间试点。在本知识库中，它以低成本多无线电拓扑补充了 sensing-csi 下的跨房间跟踪和 CSI 编码器条目（见 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder）。
