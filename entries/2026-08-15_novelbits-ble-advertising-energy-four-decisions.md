---
id: 2026-08-15_novelbits-ble-advertising-energy-four-decisions
date_published: 2026-08-06
date_found: 2026-08-15
type: tutorial
technology: bluetooth
title_en: "Four BLE advertising decisions priced in joules: PPK2 measurements on nRF54L15 show TX-power asymmetry (~4:1), 0.33 µJ/byte payload cost, 42–60% scannable overhead, and interval as the only multiplier"
title_zh: "用焦耳给四个 BLE 广播决策定价：nRF54L15 + PPK2 实测显示发射功率不对称（约 4:1）、负载 0.33 µJ/字节、可扫描广播开销 42–60%、广播间隔是唯一的乘数项"
url: "https://novelbits.io/bluetooth-le-advertising-energy-four-decisions/"
source_quality: full
topics: [BLE, advertising, power-measurement, nRF54L15, PPK2, coin-cell, energy-budget]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Novel Bits (Mohammad Afaneh) published a bench study on August 6, 2026 that assigns a measured energy price to the four advertising-configuration decisions every BLE peripheral developer makes: transmit power, payload length, scannable vs non-scannable, and advertising interval. The rig is an nRF54L15-DK (PCA10156 v1.0.0) at 1.8 V, running nRF Connect SDK v3.3.0, measured with a Nordic Power Profiler Kit II in 30-second captures — legacy advertising, LE 1M PHY, all three primary channels (37/38/39). Per-event energy is derived by dividing captured charge by counted events; the resolvable difference floor is ±5.8%.

Headline numbers: energy per advertising event scales from **9.32 µJ at −40 dBm through 15.80 µJ at 0 dBm to 31.65 µJ at +8 dBm** — so raising TX power by 8 dB costs about 4× more energy than lowering it by 8 dB refunds (measured 3.97:1; Nordic's datasheet-derived prediction is 3.6:1 and the Online Power Profiler predicts 3.2:1). Growing the payload from 17 to 27 bytes moves the event from 15.49 to 18.79 µJ (**≈0.33 µJ per byte**). Turning on scannability lifts the event to 23.33 µJ, an overhead that ranged **42–60%** depending on how many nearby scanners actually issued SCAN_REQs (i.e., it is environment-dependent, not a fixed tax). Sweeping the interval from 100 ms to 2 s leaves per-event energy flat at ~15.5 µJ (±3%) while average current drops **86.8 µA → 10.6 µA (8×)** and daily charge falls from 2.1 mAh to 0.26 mAh; the interval-sweep intercept exposes a ~6 µA baseline between events. A subtle detail: a nominal 100 ms interval yields ~286 events per 30 s rather than 300 because of the specification's mandated 0–10 ms random advDelay (mean ~5 ms).

The author's resulting priority order for battery-life reviews is: interval first (it is the only multiplicative lever and usually sits at a default), scannability second (audit whether scan responses are needed at all, or move data into extended advertising), guard TX-power increases (expensive and rarely revisited), and watch payload growth (a small per-byte cost that compounds silently over a product's life). Stated limits: single board and session, legacy 1M PHY only (extended advertising and 2M/Coded PHY are follow-ups), uncontrolled temperature and ambient scan traffic, and TX power not verified with a spectrum analyzer.

## Summary (ZH)

Novel Bits（Mohammad Afaneh）于 2026 年 8 月 6 日发布一项台架实测，为每个 BLE 外设开发者都会做的四个广播配置决策——发射功率、负载长度、可扫描/不可扫描、广播间隔——标出实测的能量价格。测试平台是 nRF54L15-DK（PCA10156 v1.0.0），1.8 V 供电，运行 nRF Connect SDK v3.3.0，用 Nordic Power Profiler Kit II 做 30 秒抓取——传统（legacy）广播、LE 1M PHY、37/38/39 三个主广播信道。单次广播事件能量 = 抓取电荷量 ÷ 事件计数；可分辨差异下限为 ±5.8%。

核心数据：单次广播事件能量从 **−40 dBm 的 9.32 µJ、0 dBm 的 15.80 µJ 升至 +8 dBm 的 31.65 µJ**——发射功率上调 8 dB 多耗的能量约为下调 8 dB 省下能量的 4 倍（实测 3.97:1；Nordic 数据手册推算 3.6:1，在线功耗分析器预测 3.2:1）。负载从 17 字节增到 27 字节，单事件从 15.49 µJ 升到 18.79 µJ（**约 0.33 µJ/字节**）。打开可扫描后单事件升到 23.33 µJ，开销在 **42–60%** 之间浮动，取决于周边有多少扫描器真的发出 SCAN_REQ（即它是环境相关的，不是固定税）。间隔从 100 ms 扫到 2 s，单事件能量保持 ~15.5 µJ 不变（±3%），而平均电流从 **86.8 µA 降到 10.6 µA（8 倍）**，日耗电从 2.1 mAh 降到 0.26 mAh；间隔扫描的截距还暴露出事件之间约 6 µA 的底噪电流。一个细节：标称 100 ms 间隔在 30 秒内只产生约 286 次事件而非 300 次，原因是规范强制的 0–10 ms 随机 advDelay（均值约 5 ms）。

作者由此给出的电池寿命评审优先级：先看间隔（唯一的乘数杠杆，且通常停留在默认值）；再审可扫描性（是否真的需要扫描响应，或把数据搬进扩展广播）；把关发射功率上调（贵且很少被回头审视）；盯住负载增长（单字节成本小，但在产品生命周期内悄悄累积）。声明的局限：单板单次会话、仅 legacy 1M PHY（扩展广播与 2M/Coded PHY 待后续）、温度与环境扫描流量未受控、发射功率未经频谱仪核验。

## Key technical points (EN)

- Rig: nRF54L15-DK + PPK2 at 1.8 V, NCS v3.3.0, legacy advertising on LE 1M PHY over channels 37/38/39; 30 s captures; ±5.8% resolvable-difference floor.
- TX power vs energy/event: −40 dBm 9.32 µJ, −20 dBm 10.98 µJ, −8 dBm 11.80 µJ, 0 dBm 15.80 µJ, +4 dBm 20.73 µJ, +8 dBm 31.65 µJ — asymmetric (+8 dB costs ~4× what −8 dB saves).
- Payload: 17 B → 27 B raises event energy 15.49 → 18.79 µJ, ≈0.33 µJ/byte (single size pair; treat as indicative).
- Scannable advertising: 15.49 → 23.33 µJ, 42–60% overhead depending on ambient scanner population.
- Interval 100 ms → 2 s: per-event energy flat (~15.5 µJ), average current 86.8 → 10.6 µA, daily charge 2.1 → 0.26 mAh; ~6 µA inter-event baseline; effective event rate is below nominal due to the spec's random advDelay.
- Recommended review order: interval → scannability → TX power → payload.

## Key technical points (ZH)

- 平台：nRF54L15-DK + PPK2，1.8 V，NCS v3.3.0，LE 1M PHY 上的 legacy 广播（37/38/39 信道）；30 s 抓取；可分辨差异下限 ±5.8%。
- 发射功率 vs 单事件能量：−40 dBm 9.32 µJ、−20 dBm 10.98 µJ、−8 dBm 11.80 µJ、0 dBm 15.80 µJ、+4 dBm 20.73 µJ、+8 dBm 31.65 µJ——不对称（+8 dB 的代价约为 −8 dB 收益的 4 倍）。
- 负载：17 B → 27 B，单事件 15.49 → 18.79 µJ，约 0.33 µJ/字节（仅一对尺寸，视为指示性）。
- 可扫描广播：15.49 → 23.33 µJ，开销 42–60%，取决于环境中扫描器数量。
- 间隔 100 ms → 2 s：单事件能量不变（~15.5 µJ），平均电流 86.8 → 10.6 µA，日耗电 2.1 → 0.26 mAh；事件间底噪约 6 µA；受规范随机 advDelay 影响，实际事件率低于标称。
- 建议评审顺序：间隔 → 可扫描性 → 发射功率 → 负载。

## Why it matters / what's new (EN)

The KB's BLE bin so far holds silicon launches (nRF54L15 Tag 2026-07-06, nRF54LM20B 2026-05-30, Silicon Labs BG2B 2026-08-14), protocol work (Enhanced-BLE hybrid 2026-05-21, LightCal crystal-free 2026-08-04) and specification items — but no measured, reproducible energy-per-decision data for the most common BLE workload of all, connectionless advertising. This post supplies exactly that on the current-generation nRF54L15 with a documented method and uncertainty floor, and two of its findings are non-obvious enough to change design reviews: TX-power energy cost is strongly asymmetric around 0 dBm (so "add 8 dB for margin" is far pricier than "drop 8 dB" is cheap), and scannable-advertising overhead is a function of the RF environment rather than a fixed constant. It also grounds the coin-cell claims of the recent SoC entries in field-usable numbers (e.g., a 2 s beacon at 0 dBm on this part averages ~10.6 µA including a ~6 µA baseline). Caveats carried over from the source: single board/session, legacy 1M PHY only, payload conclusion from one size pair.

## Why it matters / what's new (ZH)

KB 的 BLE 分箱迄今收录的是芯片发布（nRF54L15 Tag 2026-07-06、nRF54LM20B 2026-05-30、Silicon Labs BG2B 2026-08-14）、协议工作（Enhanced-BLE 混合 2026-05-21、LightCal 无晶振 2026-08-04）与规范条目——但还没有针对最常见的 BLE 负载即无连接广播的、可复现的"每个决策耗多少能量"实测数据。本文恰好在现役 nRF54L15 上给出了这类数据，并附方法与不确定度下限，其中两点足以改变设计评审的直觉：发射功率的能耗代价在 0 dBm 附近强烈不对称（"加 8 dB 留余量"远比"降 8 dB 省电"更贵），而可扫描广播的开销取决于射频环境而非固定常数。它也把近期 SoC 条目的纽扣电池宣称落到可用的数字上（例如该器件 0 dBm、2 s 信标平均约 10.6 µA，其中约 6 µA 是底噪）。沿用来源的注意事项：单板单次会话、仅 legacy 1M PHY、负载结论仅基于一对尺寸。

## Images

![Range of per-event energy for each of the four advertising decisions on nRF54L15 | nRF54L15 上四个广播决策各自的单事件能量范围](https://storage.ghost.io/c/86/70/8670d5a8-12b7-448c-b3db-a85bc1fcdea7/content/images/2026/08/fig-four-decisions-range-1.png)
![Energy per event stays flat vs advertising interval while average current falls 8× | 单事件能量随广播间隔保持不变，平均电流下降 8 倍](https://storage.ghost.io/c/86/70/8670d5a8-12b7-448c-b3db-a85bc1fcdea7/content/images/2026/08/fig-interval-current-draw.png)
