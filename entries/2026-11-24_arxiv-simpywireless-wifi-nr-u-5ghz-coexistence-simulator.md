---
id: 2026-11-24_arxiv-simpywireless-wifi-nr-u-5ghz-coexistence-simulator
date_published: 2026-11-19
date_found: 2026-11-24
technology: wifi
type: academic-paper
title_en: "SimPyWireless: A PHY-Aware Discrete-Event Simulation Framework for Wi-Fi and 5G NR-U Coexistence in the 5 GHz Band"
title_zh: "SimPyWireless：面向 5 GHz 频段 Wi-Fi 与 5G NR-U 共存的 PHY 感知离散事件仿真框架"
url: "https://arxiv.org/abs/2611.25350"
source_quality: full
topics: [Wi-Fi, 5G NR-U, coexistence, 5 GHz, simulator, CSMA/CA, EDCA, LBT]
topic_primary: spectrum-policy
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Md Rashedur Rahman and Paulo Costa (George Mason University; arXiv 2611.25350, cs.NI, 4 pages, submitted 19 November 2026) present SimPyWireless, an open-source discrete-event simulation framework for Wi-Fi and 5G NR-U coexistence in the 5 GHz unlicensed band. The paper says reproducible coexistence studies are limited by the lack of lightweight, open-source, PHY-aware simulation platforms, and lists ns-3/5G-LENA, SimPy-based models and OpenAirInterface/srsRAN implementations as the existing options. The framework is released under the MIT licence (GitHub link in the paper's references).

The architecture is a modular Python/SimPy framework with configuration, topology, radio-access, PHY, shared-channel and performance-analysis components, driven from a command-line interface. On the Wi-Fi side it implements DCF and EDCA with channel sensing, inter-frame spacing, random backoff, contention-window adaptation and preamble/energy-based detection; on the NR-U side it implements Cat. 3 and Cat. 4 LBT with energy-based CCA, prioritisation, random backoff and configurable MCOT, and supports both reservation-signal and self-deferral handling of the gap to the next slot boundary (the evaluations use gap-based self-deferral). All active transmissions share one channel model (default 5.18 GHz, 20 MHz) with a configurable log-distance path loss with optional log-normal shadowing, SINR-based reception, saturated, Poisson and CBR traffic, 802.11e/WMM-inspired voice, video, best-effort and background classes, and random-waypoint, deterministic linear and relative mobility.

The paper validates the simulator against a DTMC-based analytical model of Wi-Fi/NR-U coexistence: as the number of Wi-Fi APs sharing range with one NR-U gNB grows from one to six, the simulated normalised channel occupancy follows the analytical predictions. In the case study, aggregate Wi-Fi occupancy and throughput rise (throughput saturating) while NR-U occupancy and throughput fall, delay increases for both technologies with a larger degradation for NR-U, and Jain's fairness index decreases. In a mobility scenario in which a Wi-Fi AP and an NR-U node move into mutual sensing range, NR-U shows a larger airtime reduction than Wi-Fi once they sense each other. An optional hook lets an externally trained model replace the most recent SINR in rate adaptation: a gradient-boosting SINR predictor is compared with a persistence baseline, with lower RMSE but slightly higher MAE than persistence; for packet delivery ratio, results are similar when static, NR-U is nearly unchanged under mobility and Wi-Fi improves.

## Summary (ZH)
Md Rashedur Rahman 与 Paulo Costa（乔治梅森大学；arXiv 2611.25350，cs.NI，4 页，2026 年 11 月 19 日提交）提出 SimPyWireless，一个面向 5 GHz 免许可频段 Wi-Fi 与 5G NR-U 共存的开源离散事件仿真框架。论文指出，缺少轻量、开源、PHY 感知的仿真平台，限制了可复现的共存研究，并列出 ns-3/5G-LENA、基于 SimPy 的模型以及 OpenAirInterface/srsRAN 实现作为现有方案。该框架以 MIT 许可发布（论文参考文献中给出 GitHub 链接）。

其架构是模块化的 Python/SimPy 框架，包含配置、拓扑、无线接入、PHY、共享信道与性能分析组件，通过命令行界面驱动。Wi-Fi 侧实现了 DCF 与 EDCA，包括信道感知、帧间间隔、随机退避、竞争窗口自适应和前导码/能量检测；NR-U 侧实现了带能量 CCA 的 Cat. 3 与 Cat. 4 LBT、优先级、随机退避和可配置的 MCOT，并支持用预留信号或自推迟处理到下一个时隙边界之间的空隙（评估采用基于空隙的自推迟）。所有活动传输共享同一信道模型（默认 5.18 GHz、20 MHz），含可配置的对数距离路径损耗与可选对数正态阴影、基于 SINR 的接收、饱和/泊松/CBR 业务、受 802.11e/WMM 启发的语音、视频、尽力而为和背景类别，以及随机路点、确定性线性和相对移动模型。

论文将仿真器与基于 DTMC 的 Wi-Fi/NR-U 共存解析模型对照验证：当与一个 NR-U gNB 处于同一感知范围的 Wi-Fi AP 数量从一个增加到六个时，仿真得到的归一化信道占用与解析预测一致。在案例研究中，Wi-Fi 的总占用与吞吐上升（吞吐趋于饱和），NR-U 的占用与吞吐下降，两种技术的时延均增加且 NR-U 劣化更大，Jain 公平性指数下降。在 Wi-Fi AP 与 NR-U 节点相向移动并进入相互感知范围的场景中，二者互相感知后 NR-U 的空口时间减少幅度大于 Wi-Fi。一个可选接口允许外部训练的模型替换速率自适应中最近一次的 SINR：论文将梯度提升 SINR 预测器与持续性基线比较，RMSE 更低而 MAE 略高于持续性基线；在分组投递率上，静态时结果相近，移动时 NR-U 几乎不变而 Wi-Fi 有所改善。

## Key technical points (EN)
- Validation target: a DTMC analytical formulation adopted from prior work on Wi-Fi and NR-U/LAA coexistence, compared on normalised Wi-Fi and NR-U channel occupancy for one to six Wi-Fi APs.
- Case study setup: simulations with a single NR-U gNB and one to six Wi-Fi APs, all within mutual sensing range.
- The AI/ML interface is inactive by default; SINR measurements from successful and failed attempts are retained for offline training and evaluation. Rate adaptation defaults are ARF for Wi-Fi and CQI-based adaptation for NR-U.
- The paper states that it does not propose a new AI/ML algorithm and uses the SINR predictor only as an example of integrating an external model without changing the MAC, PHY or channel-access logic.
- Automated parameter sweeps, multiple random seeds, packet-level logging, visualisation and regression testing are listed for reproducibility.

## Key technical points (ZH)
- 验证对象：采用既有 Wi-Fi 与 NR-U/LAA 共存研究中的 DTMC 解析模型，在一到六个 Wi-Fi AP 的条件下比较归一化的 Wi-Fi 与 NR-U 信道占用。
- 案例设置：单个 NR-U gNB 与一到六个 Wi-Fi AP 的仿真，所有节点处于相互感知范围内。
- AI/ML 接口默认关闭；成功与失败发送尝试的 SINR 测量均被保留以供离线训练与评估。速率自适应默认为 Wi-Fi 的 ARF 与 NR-U 基于 CQI 的自适应。
- 论文说明并未提出新的 AI/ML 算法，仅以 SINR 预测器为例，说明无需改动 MAC、PHY 或信道接入逻辑即可集成外部模型。
- 论文列出自动化参数扫描、多随机种子、分组级日志、可视化与回归测试，以支持可复现性。

## Why it matters / what's new (EN)
This entry adds an open-source simulation tool for the Wi-Fi/NR-U contention case, which the paper positions as a reproducible and extensible middle ground between analytical modelling and hardware-based experimentation. It is a four-page paper. Its text reports, for 200-s runs with one to six Wi-Fi APs, Wi-Fi occupancy rising from about 0.72 to 0.87 and NR-U occupancy falling from about 0.26 to 0.07, aggregate Wi-Fi throughput saturating near 47 Mb/s and Jain's index falling from about 0.82 to 0.58; the SINR predictor lowers RMSE from 9.23 to 8.28 dB (all test samples) and from 9.68 to 8.68 dB (variable-link subset); under mobility PDR is 69.0% versus 68.5% for NR-U and rises from 72.6% to 76.0% for Wi-Fi.

## Why it matters / what's new (ZH)
本条目补充了面向 Wi-Fi/NR-U 竞争场景的开源仿真工具，论文将其定位为解析建模与硬件实验之间可复现、可扩展的折中方案。这是一篇四页的短文。正文给出：在 200 秒、一到六个 Wi-Fi AP 的仿真中，Wi-Fi 占用约从 0.72 升至 0.87，NR-U 占用约从 0.26 降至 0.07，Wi-Fi 总吞吐在约 47 Mb/s 处饱和，Jain 指数约从 0.82 降至 0.58；SINR 预测器使 RMSE 从 9.23 dB 降至 8.28 dB（全部测试样本）、从 9.68 dB 降至 8.68 dB（可变链路子集）；移动场景下 NR-U 的 PDR 为 69.0% 对 68.5%，Wi-Fi 从 72.6% 升至 76.0%。
