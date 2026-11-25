---
id: 2026-11-25_arxiv-ble-wearable-sample-age-wifi-coexistence
date_published: 2026-11-23
date_found: 2026-11-25
type: academic-paper
technology: bluetooth
title_en: "Connected but Late: Sample Age of Commercial BLE Wearables under Wi-Fi Coexistence for Real-Time Clinical Applications"
title_zh: "连接在线却数据迟到：Wi-Fi 共存下商用 BLE 可穿戴设备的采样数据时龄（面向实时临床应用）"
url: "https://arxiv.org/abs/2611.30774"
source_quality: full
topics: [BLE, Wi-Fi-coexistence, adaptive-frequency-hopping, sample-age, wearables, latency]
topic_primary: bt-le
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
The paper (ETH Zurich and collaborators; submitted to IEEE for possible publication) asks when, rather than whether, data from Bluetooth Low Energy wearables arrive when the 2.4 GHz band is shared with Wi-Fi. The authors say previous coexistence studies focused on whether data arrive. They measure "sample age" for two commercial devices on their native GATT links: a Polar H10 ECG strap (pushed data, 45 ms connection interval, 2M PHY) and a Corsano CardioWatch wrist device (pulled data, 60 ms interval). The central is a laptop with an Intel AX211 controller running BlueZ, and an nRF52840 sniffer plus a Wi-Fi monitor adapter record the environment.

Tests were run in an RF-shielded anechoic chamber, with iperf3 UDP load on Wi-Fi channel 6 at 25-100% of saturation throughput, and in a hospital rehabilitation gym during regular therapy hours (13 and 16 October 2026) with no artificial load. Besides letting adaptive frequency hopping (AFH) run freely, the authors forced the hop set onto data channels 12-19 inside the loaded Wi-Fi channel, optionally adding k clean channels (k = 2, 4, 8), as a stress test inspired by ANSI C63.27.

Reported results: without load, the strap's own framing (73 ECG samples per packet, about 0.56 s) is the largest source of delay; 81% of samples were older than 100 ms before any radio delay. With AFH free, Wi-Fi load had no measurable effect over 18 runs per device at 0-100% load. When forced onto the loaded channel with k = 0, the Polar H10 never lost its link but in four of ten 75%-load runs a backlog grew to 9-11 s, leaving 83-98% of samples older than 1 s; the median share older than 1 s was 29.3%. With at least two clean channels no run ran away. The Corsano disconnected in all 15 loaded runs without a clean channel (every first loss a supervision timeout) and, with k at least 2, received only 51-87% of its data at 75% load. In the gym, 67 of 72 runs stayed close to the quiet-chamber reference; the five exceptions were during or after one traffic episode with 28-70% airtime in 15 s windows.

The paper also presents MEDWEAR, an open platform that carries sensor timestamps end to end (a live ROS 2 path and a durable HTTPS ingestion path) and implements the profiling procedure. Its conclusion is that sensors for real-time clinical use should be profiled in situ and monitored by sample age rather than connection status alone.

## Summary (ZH)
本文（苏黎世联邦理工学院等；已提交 IEEE 待发表）关注 2.4 GHz 频段与 Wi-Fi 共用时，低功耗蓝牙（BLE）可穿戴设备的数据"何时"到达，而非"是否"到达；作者指出此前的共存研究多关注数据是否送达。作者在两款商用设备的原生 GATT 链路上测量"采样数据时龄"：Polar H10 心电胸带（主动推送，连接间隔 45 ms，2M PHY）和 Corsano CardioWatch 腕式设备（被动拉取，连接间隔 60 ms）。中心设备为搭载 Intel AX211 控制器、运行 BlueZ 的笔记本，并用 nRF52840 嗅探器和 Wi-Fi 监测网卡记录环境。

实验在射频屏蔽的电波暗室中进行，在 Wi-Fi 信道 6 上以 iperf3 UDP 施加饱和吞吐量 25%-100% 的负载；另在医院康复训练馆的正常治疗时段（2026 年 10 月 13 日和 16 日）进行，不施加人工负载。除自由运行的自适应跳频（AFH）外，作者还将跳频集合强制限制在受载 Wi-Fi 信道内的数据信道 12-19，并可额外加入 k 个干净信道（k = 2、4、8），作为受 ANSI C63.27 启发的压力测试。

报告结果：无负载时，胸带自身的组帧（每包 73 个心电采样点，约 0.56 s）是最大的延迟来源，在任何无线延迟之前就有 81% 的采样点时龄超过 100 ms。AFH 自由运行时，Wi-Fi 负载无可测影响（每台设备在 0-100% 负载下各 18 次运行）。当 k = 0 被强制限制在受载信道时，Polar H10 虽从未断链，但在 75% 负载的十次运行中有四次积压增长到 9-11 s，使 83%-98% 的采样点时龄超过 1 s；时龄超过 1 s 的比例中位数为 29.3%。当至少有两个干净信道时，没有出现失控积压。Corsano 在无干净信道的全部 15 次受载运行中均断链（首次断链均为监督超时）；k 不小于 2 时仍保持连接，但在 75% 负载下仅收到 51%-87% 的数据。在训练馆中，72 次运行里有 67 次接近安静暗室的基准；其余五次例外发生在一次流量高峰期间或之后（15 s 窗口内空口占用 28%-70%）。

论文还提出 MEDWEAR 开放平台，端到端携带传感器时间戳（实时 ROS 2 路径与持久化 HTTPS 摄取路径），并实现上述测量流程。结论是：面向实时临床应用的传感器应在现场进行测试，并以采样数据时龄而不仅是连接状态进行监测。

## Key technical points (EN)
- Metric: sample age on arrival = framing delay set by the sensor (up to 0.55 s for the 73-sample ECG frame) plus delay added by the link; added delay is measured from its smallest value in a run because the strap clock is not synchronized, so ages are a lower bound (paper's own statement).
- Profiling method for commercial wearables whose firmware cannot be modified: passive scan to find the busiest Wi-Fi channel, then alternating free and confined AFH runs (three runs of 300 s per condition, k in {0, 2, 8}) while logging HCI traffic and sensor timestamps.
- Chamber results: with AFH free, busy channels made up at most 15% of the Polar H10 hop set under load; forced onto busy channels at 75% load, the link sustained only 92-97% of the strap's notification rate in runaway runs, so a transmit-queue backlog built and did not clear.
- Clean channels help: with k at least 2 no run ran away and neither device lost its link (0/15 loaded runs each); at most 1.2% of Polar H10 samples were older than 1 s.
- Corsano (pulled model) was more fragile: its link was 29 dB weaker (-74 vs -45 dBm) and it lost its link in all 15 loaded runs without a clean channel; the authors note the weaker link or shorter supervision timeout, not polling alone, could explain this.
- Gym: median Wi-Fi airtime on the busiest channel was about 6.6-12.1% in normal sessions; at most 0.6% of Polar H10 samples were older than 1 s in those sessions, rising to 4.6% in the worst confined run during the traffic episode.
- End to end: the ROS 2 live path added a median 3 ms after the host; the durable path with a 0.1 s batching window added a median 0.14 s, which the authors say suits alarms but not control loops.
- Stated limitations and caveats in the paper: signals are not physiological and body shadowing is not modeled; deadlines of 100 ms to 10 s are illustrative budgets, not validated clinical requirements; k = 0 is described as a stress test beyond observed states.

## Key technical points (ZH)
- 指标：到达时的采样数据时龄 = 传感器组帧延迟（73 点心电帧最高 0.55 s）+ 链路新增延迟；由于胸带时钟未同步，新增延迟以单次运行中的最小值为基准，因此时龄为下界（论文自述）。
- 针对固件不可修改的商用可穿戴设备的测量方法：先被动扫描找出最繁忙的 Wi-Fi 信道，再交替进行自由与受限 AFH 运行（每种条件三次、每次 300 s，k 取 0、2、8），同时记录 HCI 流量与传感器时间戳。
- 暗室结果：AFH 自由运行时，负载下繁忙信道最多占 Polar H10 跳频集合的 15%；在 75% 负载下被强制限制到繁忙信道时，失控运行中链路只能维持胸带通知速率的 92%-97%，发送队列积压持续增长且不能清空。
- 干净信道的作用：k 不小于 2 时没有失控运行，两台设备也均未断链（各 15 次受载运行中 0 次）；Polar H10 时龄超过 1 s 的采样点最多 1.2%。
- Corsano（拉取模式）更脆弱：其链路弱 29 dB（-74 对 -45 dBm），在无干净信道的全部 15 次受载运行中断链；作者指出，链路更弱或监督超时更短（而非仅仅是轮询方式）都可能是原因。
- 训练馆：正常时段最繁忙信道的 Wi-Fi 空口占用中位数约 6.6%-12.1%；这些时段中 Polar H10 时龄超过 1 s 的采样点最多 0.6%，在流量高峰期间最差的受限运行中升至 4.6%。
- 端到端：ROS 2 实时路径在主机之后增加中位 3 ms；持久化路径（0.1 s 批处理窗口）增加中位 0.14 s，作者认为适合告警而不适合控制回路。
- 论文自述的局限：信号并非生理信号且未建模人体遮挡；100 ms 至 10 s 的截止时间仅为示意性预算，不是经验证的临床要求；k = 0 被描述为超出已观测状态的压力测试。

## Why it matters / what's new (EN)
Related KB material on Bluetooth/Wi-Fi coexistence includes Channel Sounding work (2026-11-23_arxiv-ble-cs-interference-aware-tone-selection) and a BLE/Wi-Fi aircraft-cabin coexistence simulation (2026-11-11_ieee-mentor-coex-sc-ericsson-ble-wifi-aircraft-cabin-simulation-nba-lbt-dcn-2340). This entry covers ordinary GATT streaming links of commercial wearables and measures data timeliness rather than packet delivery, with hospital-gym recordings alongside chamber tests. Evidence is limited to two devices and one central, per the paper's own description.

## Why it matters / what's new (ZH)
知识库中相关的蓝牙与 Wi-Fi 共存内容包括信道探测研究（2026-11-23_arxiv-ble-cs-interference-aware-tone-selection）以及机舱 BLE/Wi-Fi 共存仿真（2026-11-11_ieee-mentor-coex-sc-ericsson-ble-wifi-aircraft-cabin-simulation-nba-lbt-dcn-2340）。本条目涉及商用可穿戴设备的普通 GATT 数据流链路，测量的是数据及时性而非丢包，并同时包含暗室测试与医院训练馆的实地记录。据论文自述，证据仅限于两款设备和一台中心设备。

## Images
No figures are embedded; see the arXiv HTML rendering (https://arxiv.org/html/2611.30774v1) for the paper's figures.
