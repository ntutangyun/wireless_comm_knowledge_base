---
id: 2026-08-17_arxiv-radiorange-ranging-simulator
date_published: 2026-06-14
date_found: 2026-08-17
type: academic-paper
technology: uwb
title_en: "RadioRange: An Open-Source Digital Twin-based Ranging Simulator for UWB, Wi-Fi, and 5G"
title_zh: "RadioRange：面向 UWB／Wi-Fi／5G 的开源数字孪生测距仿真平台"
url: "https://arxiv.org/abs/2606.23708"
source_quality: full
topics: [UWB, ranging, digital-twin, 802.11mc, simulation]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

RadioRange (Zhen Lyu, Yidi Chen, Li-Ta Hsu, Guohao Zhang; submitted 14 Jun 2026, eess.SP, 6 pages) is an open-source, positioning-focused simulation platform that models UWB, Wi-Fi FTM (802.11mc), and 5G NR ranging over identical ray-traced physical channels — filling a tooling gap: existing wireless simulators benchmark communication metrics (BER, throughput) while real-world ranging accuracy is dominated by hardware non-idealities and multipath bias that pure mathematical channel models omit.

The five-layer architecture starts from ray-traced channels (NVIDIA Sionna's shooting-and-bouncing-rays engine, or a reflection-only image method), then injects **eleven independently toggleable hardware impairments across three stages**: channel-level antenna offsets (pre-DSP), circuit-level non-idealities (ADC quantization, I/Q mismatch, AGC), and post-DSP CSI residuals (residual OFDM estimation errors). On top sit five first-path detectors (MaxPeak, Threshold, LeadingEdge, SearchBack, ChipLDE) and three multipath identification algorithms (PeakFinder, CA-CFAR, CLEAN), with Monte Carlo benchmarking and ablation support so estimator designers can attribute error to specific impairments.

Validation against real hardware — a Qorvo QM33120WDK1 UWB kit and Google Nest Wi-Fi (802.11mc FTM) along a 25 m corridor and an L-junction trajectory — shows the simulated channels capture 85–90% of the true ranging-error variance for both protocols, with UWB at 0.19 m RMSE versus Wi-Fi's 0.53 m in controlled conditions. Code is released under CC BY-NC-SA 4.0 at github.com/Togure/RadioRange (repository confirmed live at ingest time).

## Summary (ZH)

RadioRange（Zhen Lyu、Yidi Chen、Li-Ta Hsu、Guohao Zhang；2026 年 6 月 14 日提交，eess.SP，6 页）是一个开源、以定位为核心的仿真平台，在同一射线追踪物理信道上统一建模 UWB、Wi-Fi FTM（802.11mc）与 5G NR 测距——填补了一个工具链空白：现有无线仿真器面向通信指标（BER、吞吐），而真实测距精度实际由纯数学信道模型所忽略的硬件非理想性与多径偏差主导。

平台采用五层架构：底层为射线追踪信道（NVIDIA Sionna 的 SBR 引擎，或仅反射的镜像法），其上在**三个注入阶段引入 11 项可独立开关的硬件损伤**：信道级天线偏移（DSP 前）、电路级非理想性（ADC 量化、I/Q 失配、AGC）、DSP 后 CSI 残差（OFDM 估计残余误差）。再上层提供五种首径检测器（MaxPeak、Threshold、LeadingEdge、SearchBack、ChipLDE）与三种多径识别算法（PeakFinder、CA-CFAR、CLEAN），支持蒙特卡洛基准测试与消融实验，使估计器设计者能把误差归因到具体损伤。

对真实硬件的验证——Qorvo QM33120WDK1 UWB 套件与 Google Nest Wi-Fi（802.11mc FTM），沿 25 米走廊与 L 形拐角两条室内轨迹——表明仿真信道可捕获两种协议 85–90% 的真实测距误差方差；受控条件下 UWB 的 RMSE 为 0.19 米，Wi-Fi 为 0.53 米。代码以 CC BY-NC-SA 4.0 许可发布于 github.com/Togure/RadioRange（入库时已确认仓库在线）。

## Key technical points (EN)

- **Unified cross-technology ranging twin** — UWB, Wi-Fi FTM (802.11mc), and 5G NR evaluated over the *same* ray-traced environment, enabling apples-to-apples protocol comparisons for positioning.
- **Eleven toggleable impairments, three injection stages** — antenna-level offsets (pre-DSP), RF-circuit non-idealities (ADC quantization, I/Q mismatch, AGC), and post-compensation CSI residuals; each can be isolated for ablation.
- **Algorithm library** — first-path detectors: MaxPeak, Threshold, LeadingEdge, SearchBack, ChipLDE; multipath identification: PeakFinder, CA-CFAR, CLEAN; Monte Carlo benchmarking harness included.
- **Hardware-grounded validation** — Qorvo QM33120WDK1 (UWB) and Google Nest Wi-Fi (802.11mc) on 25 m corridor + L-junction trajectories; simulation reproduces 85–90% of true ranging-error variance.
- **Headline accuracy** — 0.19 m RMSE (UWB) vs 0.53 m (Wi-Fi FTM) under controlled conditions on the same trajectories.
- **Open source** — CC BY-NC-SA 4.0, github.com/Togure/RadioRange; ray tracing via NVIDIA Sionna SBR or image method.

## Key technical points (ZH)

- **统一的跨技术测距孪生** —— UWB、Wi-Fi FTM（802.11mc）与 5G NR 在*同一*射线追踪环境中评估，实现定位场景下协议间的同基准对比。
- **11 项可开关损伤、三个注入阶段** —— 天线级偏移（DSP 前）、射频电路非理想性（ADC 量化、I/Q 失配、AGC）、补偿后 CSI 残差；每项均可单独隔离做消融。
- **算法库** —— 首径检测器：MaxPeak、Threshold、LeadingEdge、SearchBack、ChipLDE；多径识别：PeakFinder、CA-CFAR、CLEAN；内置蒙特卡洛基准测试框架。
- **硬件锚定的验证** —— Qorvo QM33120WDK1（UWB）与 Google Nest Wi-Fi（802.11mc），25 米走廊 + L 形拐角轨迹；仿真复现 85–90% 的真实测距误差方差。
- **精度数据** —— 受控条件同轨迹下 UWB 的 RMSE 0.19 米，Wi-Fi FTM 0.53 米。
- **开源** —— CC BY-NC-SA 4.0，github.com/Togure/RadioRange；射线追踪基于 NVIDIA Sionna SBR 或镜像法。

## Why it matters / what's new (EN)

Deliberate catch-up ingest (submitted 14 Jun 2026, ingested 17 Aug 2026, within the 12-month freshness window): the KB's uwb-ranging bin has estimator papers (2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync, 2026-08-13_ssrn-delay-compensated-uwb-localization, 2026-08-15_arxiv-uwb-amr-auto-anchor-calibration) and hardware/product entries, but **zero simulation/tooling coverage** — and RadioRange is exactly the kind of shared research infrastructure those estimator papers would be benchmarked on. Its impairment taxonomy (antenna vs circuit vs CSI-residual injection stages) gives the community a common vocabulary for attributing UWB ranging error, and the validated 85–90% variance capture against a Qorvo QM33120WDK1 makes it a credible stand-in for hardware experiments during algorithm design. The cross-technology framing (same environment for UWB / Wi-Fi FTM / 5G NR) also quantifies UWB's accuracy edge (0.19 m vs 0.53 m for Wi-Fi FTM) under identical propagation — a number vendors usually assert but rarely derive on equal footing. Tool paper rather than new mechanism, hence novelty 2.

## Why it matters / what's new (ZH)

刻意的补录入库（2026 年 6 月 14 日提交，2026 年 8 月 17 日入库，处于 12 个月新鲜度窗口内）：本知识库 uwb-ranging 板块已有估计器论文（2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync、2026-08-13_ssrn-delay-compensated-uwb-localization、2026-08-15_arxiv-uwb-amr-auto-anchor-calibration）与硬件／产品条目，但**尚无任何仿真／工具链覆盖**——而 RadioRange 正是上述估计器工作应当在其上做基准测试的共享科研基础设施。其损伤分类法（天线／电路／CSI 残差三个注入阶段）为社区提供了归因 UWB 测距误差的统一语汇；对 Qorvo QM33120WDK1 验证达到 85–90% 方差复现，使其在算法设计阶段可作为硬件实验的可信替身。跨技术框架（UWB／Wi-Fi FTM／5G NR 同环境）还在完全相同的传播条件下量化了 UWB 的精度优势（0.19 米对 Wi-Fi FTM 的 0.53 米）——这是厂商常宣称却少有同基准推导的数字。属工具类论文而非新机制，故新颖度评为 2。

## Images

![RadioRange layered architecture with impairment injection stages | RadioRange 分层架构与损伤注入阶段](https://arxiv.org/html/2606.23708v1/Figure2.png)
![Simulated vs measured ranging error along the indoor trajectories | 室内轨迹上仿真与实测测距误差对比](https://arxiv.org/html/2606.23708v1/Figure3.png)
![Cross-technology ranging accuracy comparison (UWB / Wi-Fi / 5G) | 跨技术测距精度对比（UWB／Wi-Fi／5G）](https://arxiv.org/html/2606.23708v1/Figure4.png)
