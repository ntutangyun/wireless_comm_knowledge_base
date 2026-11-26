---
id: 2026-11-26_arxiv-uxnb-flying-5g-picocell-energy-testbed-open-ran
date_published: 2026-11-24
date_found: 2026-11-26
type: academic-paper
technology: cellular
title_en: "Energy and Performance Characterization of UxNBs: Toward AI-Driven Non-Terrestrial Open RAN Control"
title_zh: "UxNB 的能耗与性能表征：迈向 AI 驱动的非地面 Open RAN 控制"
url: "https://arxiv.org/abs/2611.32258"
source_quality: full
topics: [UxNB, UAV-base-station, 5G, Open-RAN, vRAN, OCUDU, Open5GS, energy-efficiency, testbed, xApp, rApp]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Ali Srour, Farzad Veisi, Sami Taktak and Vania Conan (CEDRIC Lab, CNAM, Paris) describe a demo-paper testbed in which a UAV carries a complete 5G picocell, called a UxNB (UAV-mounted base station). The gNB uses a USRP B210 software-defined radio as the radio unit and a single-board computer running the OCUDU vRAN stack and the Open5GS core, so the aircraft operates as a network-in-a-box without backhaul to an external core. The cell runs a 20 MHz carrier in band n77 and delivers up to 100 Mbps to two commercial UEs.

The point of the testbed is data: the authors say that AI-driven Open RAN controllers (xApps and rApps) are trained almost entirely on analytical models and simulations, and that they found no public dataset of the real energy behavior of a flying 5G base station. The testbed records power consumption, CPU load and temperature of the base station together with UAV flight telemetry and per-layer vRAN processing metrics on a shared time reference. The paper presents recorded videos of two stationary-drone scenarios, replayed on a synchronized dashboard, and states that the measurement campaign will be extended and released as an open dataset.

## Summary (ZH)

Ali Srour、Farzad Veisi、Sami Taktak 与 Vania Conan（巴黎国立工艺学院 CNAM，CEDRIC 实验室）介绍了一个演示型试验台：无人机携带完整的 5G 微微小区，称为 UxNB（无人机载基站）。gNB 以 USRP B210 软件无线电作射频单元，一块单板计算机运行 OCUDU vRAN 协议栈与 Open5GS 核心网，因此飞行器是无需回传到外部核心网的“网络盒子”。小区工作在 n77 频段 20 MHz 载波，向两台商用 UE 提供最高 100 Mbps。

试验台的意义在于数据：作者指出，AI 驱动的 Open RAN 控制器（xApp 与 rApp）几乎完全基于解析模型和仿真训练，而他们未找到公开的飞行 5G 基站真实能耗数据集。试验台在共同时间基准下记录基站的功耗、CPU 负载与温度，以及无人机飞行遥测与分层 vRAN 处理指标。论文展示两个悬停场景的录像，并在同步仪表盘上回放记录的指标；作者表示将扩展测量并以开放数据集发布。

## Key technical points (EN)

- Platform: Aurelia X6 hexacopter with ArduPilot on a Cube Orange+ flight controller, two 10,000 mAh 6S Li-Po batteries (22.2 V); up to 5 kg payload, with flight time of about 30 min without payload and 13 min at full payload. The gNB hardware weighs less than 1 kg.
- Three single-board computers are compared as baseband hosts: Raspberry Pi 5 and Radxa ROCK 5B (ARM) and Odroid H4 (x86). Achievable data rate depends on the board's CPU and interface capability.
- Monitored metrics (Table I of the paper) cover battery voltage/current/power for BBU, RU and propulsion; flight position, speed and attitude; CPU frequency, utilization, context switches, cycles and cache misses; temperature and throttling; fronthaul and backhaul rates; per-channel PHY processing time per slot; RLC/MAC/HARQ buffers; and CQI, MCS, BLER, PRBs and end-to-end throughput. The authors note that monitoring overhead competes with the vRAN for CPU time, so the collector is kept lightweight.
- First reported result: at 50 Mbps the BBU power reaches 18 W on the Odroid, 8 W on the Pi 5 and 7.6 W on the Radxa, stated as 12.5%, 31.2% and 27% above idle respectively.
- The authors cite roughly 28 W for an aerial 5G DU under traffic from earlier work and say propulsion usually dominates energy, but the RAN-controllable payload share is non-negligible. The authors call this, to their knowledge, the first demonstration jointly exposing energy and RAN behavior of a flying 5G base station (their claim). Metric list and collection scripts are linked from the paper (gitlab.roc.cnam.fr/srour/uxnb-testbed).

## Key technical points (ZH)

- 平台：Aurelia X6 六旋翼，ArduPilot 运行于 Cube Orange+ 飞控，两块 10,000 mAh 6S 锂电池（22.2 V）；最大载荷 5 kg，空载续航约 30 分钟、满载约 13 分钟；gNB 硬件重量不足 1 kg。
- 比较三种单板计算机作为基带宿主：Raspberry Pi 5 与 Radxa ROCK 5B（ARM）以及 Odroid H4（x86）。可达数据速率取决于各板的 CPU 与接口能力。
- 监测指标（论文表 I）包括：BBU、RU 与推进系统的电池电压/电流/功率；飞行位置、速度与姿态；CPU 频率、利用率、上下文切换、周期与缓存未命中；温度与降频状态；前传与回传速率；各信道每时隙 PHY 处理时间；RLC/MAC/HARQ 缓冲；以及 CQI、MCS、BLER、PRB 与端到端吞吐。作者指出监测开销会与 vRAN 争用 CPU，因此采集器保持轻量。
- 首个结果：在 50 Mbps 时，BBU 功耗在 Odroid 上达 18 W，Pi 5 上 8 W，Radxa 上 7.6 W，分别比空闲高 12.5%、31.2% 与 27%。
- 作者引用先前工作称空中 5G DU 在业务下约耗 28 W，并指出推进通常占能耗主导，但可由 RAN 控制的载荷能耗并不可忽略。作者称据其所知这是首次联合展示飞行 5G 基站能耗与 RAN 行为（其自身表述）。指标清单与采集脚本见论文给出的 gitlab.roc.cnam.fr/srour/uxnb-testbed。

## Why it matters / what's new (EN)

The KB has UAV-in-cellular analyses (for example the multilayer UAV corridor capacity study of 2026-11-10) but no entry on a measured UAV-borne 5G base-station testbed. The paper is a short demo summary: it gives a first power comparison across three boards at one load point and no flight-energy or dataset results yet, so its value is as a pointer to a forthcoming open dataset for energy-aware xApps/rApps.

## Why it matters / what's new (ZH)

KB 已有蜂窝网中无人机的分析（如 2026-11-10 的多层无人机走廊容量研究），但尚无关于实测机载 5G 基站试验台的条目。该论文是一篇简短的演示摘要：只给出三块板在单一负载点上的首次功耗对比，尚无飞行能耗或数据集结果，其价值在于预告面向节能型 xApp/rApp 的开放数据集。

## Images

None.
