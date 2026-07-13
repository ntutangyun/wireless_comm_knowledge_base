---
id: 2026-07-13_rohde-realtek-first-ble-hdt-test-solution
date_published: 2026-03-03
date_found: 2026-07-13
type: industry-news
technology: bluetooth
title_en: "Rohde & Schwarz and Realtek demonstrate first test solution for Bluetooth LE High Data Throughput (HDT)"
title_zh: "罗德与施瓦茨联合瑞昱演示首个蓝牙 LE 高数据吞吐（HDT）测试方案"
url: "https://www.rohde-schwarz.com/us/about-us/news-press/all-news/rohde-schwarz-and-realtek-demonstrate-first-test-solution-for-bluetooth-le-high-data-throughput-hdt_229356-1611918.html"
source_quality: full
topics: [BLE, HDT, LE-Audio, channel-sounding, test-equipment]
topic_primary: bt-le
topics_secondary: [bt-le-audio, bt-channel-sounding]
novelty_score: 2
---

## Summary (EN)
Rohde & Schwarz and Realtek announced (March 3, 2026) the industry's first validated test solution for Bluetooth LE High Data Throughput (HDT) — the upcoming SIG feature that raises the LE maximum data rate from 2 Mbps to 7.5 Mbps. The demonstration ran on the R&S CMP180 radio communication tester (two analyzers, two generators, 2×8 RF ports; also covers Wi-Fi 8 and 5G NR FR1 to 8 GHz at up to 500 MHz bandwidth) against two Realtek devices: the RTL8922D, a Wi-Fi/Bluetooth combo chip integrating HDT, Channel Sounding, and IEEE 802.15.4 (simultaneous Wi-Fi, dual Bluetooth, and Zigbee/Thread), and the RTL8773J, a dedicated Bluetooth audio SoC supporting BT Classic, LE, LE Audio, and HDT.

HDT's PHY defines five data rates from 2 to 7.5 Mbps, combining three new modulation schemes with multiple forward-error-correction levels; the SIG positions it as delivering roughly 4× capacity, better energy and spectrum efficiency, and higher reliability. Target use cases are low-latency/high-quality audio streaming, fast media sharing, and accelerated OTA firmware updates. This is a backfill entry: the announcement predates the KB's HDT coverage, and it is the first public evidence of both HDT silicon and HDT test tooling — the two ecosystem prerequisites for the feature's commercial rollout expected around Core 6.x/2026.

## Summary (ZH)
罗德与施瓦茨（Rohde & Schwarz）与瑞昱（Realtek）于 2026 年 3 月 3 日宣布验证了业界首个蓝牙 LE 高数据吞吐（HDT）测试方案——HDT 是蓝牙 SIG 即将推出的特性，将 LE 最大数据速率从 2 Mbps 提升到 7.5 Mbps。演示基于 R&S CMP180 无线电综测仪（双分析仪、双信号发生器、2×8 射频端口；同时覆盖 Wi-Fi 8 与 5G NR FR1 至 8 GHz、带宽最高 500 MHz），被测器件为两款瑞昱芯片：RTL8922D——集成 HDT、信道探测（Channel Sounding）与 IEEE 802.15.4 的 Wi-Fi/蓝牙组合芯片（可同时运行 Wi-Fi、双蓝牙与 Zigbee/Thread）；RTL8773J——支持经典蓝牙、LE、LE Audio 与 HDT 的专用蓝牙音频 SoC。

HDT 的 PHY 定义了 2 至 7.5 Mbps 的五档速率，组合三种新调制方案与多级前向纠错；SIG 称其带来约 4 倍容量、更优的能效与频谱效率以及更高可靠性。目标场景为低时延/高音质音频流、快速媒体分享与加速 OTA 固件升级。本条目为回填：该公告早于 KB 现有 HDT 报道，是 HDT 芯片与 HDT 测试工具链的首个公开证据——这两者是该特性商用落地（预计随 Core 6.x / 2026 年）的生态前提。

## Key technical points (EN)
- HDT raises BLE max rate 2 → 7.5 Mbps; five PHY rates via three new modulation schemes + multiple FEC levels; ~4× capacity claim.
- First validated HDT test solution: R&S CMP180 (2 analyzers / 2 generators / 2×8 RF ports; Wi-Fi 8 + 5G NR FR1 ≤8 GHz, ≤500 MHz BW).
- RTL8922D: combo Wi-Fi + dual BT + 802.15.4 with HDT and Channel Sounding — HDT and CS landing in the same mainstream silicon.
- RTL8773J: dedicated audio SoC with Classic + LE + LE Audio + HDT — the low-latency audio-streaming target made concrete.
- Use cases: low-latency audio, fast media sharing, accelerated OTA updates.

## Key technical points (ZH)
- HDT 将 BLE 最大速率从 2 提升至 7.5 Mbps；通过三种新调制 + 多级 FEC 定义五档 PHY 速率；宣称约 4 倍容量。
- 首个验证的 HDT 测试方案：R&S CMP180（双分析仪/双发生器/2×8 射频端口；兼测 Wi-Fi 8 与 5G NR FR1 ≤8 GHz、带宽 ≤500 MHz）。
- RTL8922D：Wi-Fi + 双蓝牙 + 802.15.4 组合芯片，同时集成 HDT 与信道探测——HDT 与 CS 落入同一主流硅片。
- RTL8773J：专用音频 SoC，支持经典蓝牙 + LE + LE Audio + HDT——低时延音频流场景落地。
- 用例：低时延音频、快速媒体分享、加速 OTA 升级。

## Why it matters / what's new (EN)
The KB's Bluetooth thread has tracked HDT as a spec-side promise (Core 6.3 refinements, HDT confirmed for 2026 — see 2026-07-11's Core 6.3 entry); this backfill adds the missing ecosystem half: named commercial silicon (RTL8922D/RTL8773J) and calibrated test equipment are what turn a spec feature into shippable products. The RTL8922D is also a notable convergence data point — HDT, Channel Sounding, and 802.15.4 in one combo chip alongside Wi-Fi — suggesting vendors will ship ranging and high-throughput LE as a bundle rather than as separate feature waves.

## Why it matters / what's new (ZH)
KB 的蓝牙线索此前从规范侧跟踪 HDT（Core 6.3 的改进、HDT 确认 2026 年落地——见 2026-07-11 的 Core 6.3 条目）；本回填补上了缺失的生态另一半：有名有姓的商用硅片（RTL8922D/RTL8773J）与校准测试设备，是规范特性变成可出货产品的前提。RTL8922D 也是一个值得注意的融合数据点——HDT、信道探测与 802.15.4 集成于同一颗与 Wi-Fi 共存的组合芯片，预示厂商将把测距与高吞吐 LE 作为捆绑能力一起出货，而非分波次推出。
