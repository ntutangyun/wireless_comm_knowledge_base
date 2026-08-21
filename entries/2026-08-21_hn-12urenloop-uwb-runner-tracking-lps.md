---
id: 2026-08-21_hn-12urenloop-uwb-runner-tracking-lps
date_published: 2026-08-01
date_found: 2026-08-21
type: community-signal
technology: uwb
title_en: "Hacker News: Ghent student society builds an open UWB local positioning system to track relay runners — DWM3000 + ESP32, ~2 cm ranging, and a gap in open-source multi-tag tooling"
title_zh: "Hacker News：根特学生社团用开放 UWB 本地定位系统追踪接力跑者——DWM3000 + ESP32、约 2 厘米测距精度，并暴露开源多标签工具链的空白"
url: "https://news.ycombinator.com/item?id=49133850"
source_quality: full
topics: [UWB, DWM3000, ESP32, TWR, local-positioning, lap-counting, open-source, MQTT]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar]
novelty_score: 2
---

## Summary (EN)

A 104-point Hacker News thread picked up a build log from Zeus WPI (Ghent University's computer-science student society): a self-built ultra-wideband (UWB) local positioning system to track runners at 12urenloop, the annual 12-hour relay race in Ghent, replacing the event's previous Bluetooth-based lap counter. The hardware is deliberately cheap and reproducible — five Qorvo DWM3000 UWB modules (~€19–25 each) driven by ESP32-WROOM microcontrollers (~€4 each), arranged as 3 fixed anchors + 2 tags, with distances aggregated over MQTT to Raspberry Pi stations for triangulation. The team used two-way ranging (TWR) with a synchronized time-slot schedule (anchors assigned ~10 ms transmission slots inside 1-second frames, i.e. up to 100 measurements/s shared across the network) to avoid channel contention. Measured performance: ~2 cm distance accuracy within 5 m after per-module calibration, ~50 m line-of-sight range, and 10 position fixes/s with the 3-anchor/2-tag setup (scaling headroom estimated at ~20 tags at 1 Hz). The write-up is candid about the pain points: practically no open-source software exists for multi-tag UWB positioning beyond Qorvo's limited microcontroller examples, per-module antenna-delay calibration is unavoidable, and metal structures / non-line-of-sight cause the usual reflection degradation.

## Summary (ZH)

一条获得 104 分的 Hacker News 帖子转发了根特大学计算机科学学生社团 Zeus WPI 的构建记录：他们自制了一套超宽带（UWB）本地定位系统，用于在根特一年一度的 12 小时接力赛 12urenloop 中追踪跑者，取代此前基于蓝牙的计圈系统。硬件刻意选择廉价且可复现的方案——五个 Qorvo DWM3000 UWB 模块（每个约 19–25 欧元）由 ESP32-WROOM 微控制器（每个约 4 欧元）驱动，布置为 3 个固定锚点 + 2 个标签，测距数据经 MQTT 汇聚到树莓派进行三角定位。团队采用双向测距（TWR）配合同步时隙调度（锚点在 1 秒帧内被分配约 10 毫秒的发送时隙，即全网最高每秒 100 次测量）以避免信道冲突。实测性能：逐模块校准后 5 米内约 2 厘米的测距精度、约 50 米视距范围、3 锚 2 标配置下每秒 10 次定位（估算可扩展至约 20 个标签、每标签 1 Hz）。文章坦率记录了痛点：除 Qorvo 有限的微控制器示例外，几乎不存在支持多标签 UWB 定位的开源软件；逐模块天线延迟校准不可避免；金属结构与非视距导致常见的反射性能劣化。

## Key technical points (EN)

- Hardware: 5× Qorvo DWM3000 (~€19–25 each) + ESP32-WROOM (~€4 each); 3 anchors, 2 tags; Arduino-framework firmware for portability; MQTT to Raspberry Pi for triangulation.
- Ranging: two-way ranging (TWR) with synchronized time-slot coordination — ~10 ms anchor slots inside 1-second frames (up to 100 measurements/s network-wide).
- Performance: ~2 cm accuracy within 5 m (after per-module calibration), ~50 m line-of-sight range, 10 position fixes/s; estimated capacity ~20 tags at 1 Hz update.
- Use case: exact start-line lap detection, runner speed analytics, immunity to spectator Bluetooth noise — position granularity RFID lap systems lack.
- Pain point the thread surfaced: near-total absence of open-source multi-tag UWB positioning stacks outside vendor microcontroller examples; per-module calibration burden; NLOS/metal reflection degradation.

## Key technical points (ZH)

- 硬件：5 个 Qorvo DWM3000（每个约 19–25 欧元）+ ESP32-WROOM（每个约 4 欧元）；3 锚 2 标；为可移植性采用 Arduino 框架固件；经 MQTT 汇聚到树莓派做三角定位。
- 测距：双向测距（TWR）配合同步时隙协调——1 秒帧内约 10 毫秒的锚点时隙（全网最高每秒 100 次测量）。
- 性能：逐模块校准后 5 米内约 2 厘米精度、视距约 50 米、每秒 10 次定位；估算容量约 20 个标签、每标签 1 Hz 更新。
- 用例：起点线精确计圈、跑者速度分析、免受观众蓝牙信号干扰——这是 RFID 计圈系统不具备的位置粒度。
- 帖子暴露的痛点：除厂商微控制器示例外几乎没有开源多标签 UWB 定位软件栈；逐模块校准负担；非视距/金属反射劣化。

## Why it matters / what's new (EN)

The KB's UWB coverage is dominated by chipset-vendor announcements, FiRa standardization, and academic radar/sensing papers; this is a rare end-to-end community build log showing what UWB positioning costs and yields today for a hobbyist-budget deployment (~€120 of radios for a working 2 cm-class LPS). The most transferable observation is the tooling gap the builders hit: multi-tag TWR coordination had to be hand-rolled because no open-source stack covers it — the same slot-scheduling problem FiRa's standardized ranging blocks solve inside consortium-certified devices, still unsolved in the open ecosystem. Threads like this are a leading indicator of where open UWB tooling demand is heading as DWM3000-class modules reach commodity pricing.

## Why it matters / what's new (ZH)

本知识库的 UWB 内容此前以芯片厂商公告、FiRa 标准化和学术雷达/感知论文为主；这是一篇少见的端到端社区构建记录，展示了当下业余预算部署 UWB 定位的真实成本与产出（约 120 欧元的射频模块即可搭建 2 厘米级本地定位系统）。最具迁移价值的观察是构建者遇到的工具链空白：多标签 TWR 协调只能手写实现，因为没有任何开源软件栈覆盖它——这正是 FiRa 标准化测距块在联盟认证设备内部解决、而开放生态中仍未解决的同一时隙调度问题。随着 DWM3000 级模块进入大宗价格区间，这类帖子是开放 UWB 工具链需求走向的先行指标。
