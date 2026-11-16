---
id: 2026-11-16_arxiv-open-source-oai-5g-uav-csi-testbed-sim-to-real-channel-prediction
date_published: 2026-11-12
date_found: 2026-11-16
type: academic-paper
technology: cellular
title_en: "Empowering AI towards 6G: Realistic UAV Channel Data Acquisition using Open-Source Solutions"
title_zh: "面向 6G 的 AI 赋能：基于开源方案的真实无人机信道数据采集"
url: "https://arxiv.org/abs/2611.16644"
source_quality: full
topics: [OpenAirInterface, UAV, CSI, SRS, channel-prediction, sim-to-real, 5G-NR, SDR, link-adaptation]
topic_primary: 6g-vision
topics_secondary: [cellular-ai, ntn]
novelty_score: 3
---

## Summary (EN)

Zhou, Melnyk, Schotten (DFKI and RPTU Kaiserslautern-Landau), Vilter and Stuckert (TH Wildau) present an open-source UAV-to-ground measurement testbed. A standalone 5G network built on OpenAirInterface (OAI) and a USRP X410 broadcasts NR at 3619.2 MHz, and the OAI uplink SRS channel estimator is instrumented to log raw complex CSI with flight telemetry from a Holybro X500 multicopter. The accepted version was presented at IEEE VTC2026-Spring.

Flights at Airport Schönhagen, Germany, gave about 100 minutes of data and more than 600,000 wideband channel snapshots over seven mission profiles. The authors report that hardware phase noise in the commodity SDR chain, not kinematic Doppler, dominates the raw spectral ridge, and that deep-learning channel predictors behave differently on this data than on idealised channels. The dataset is released.

## Summary (ZH)

Zhou、Melnyk、Schotten（DFKI 与 RPTU 凯泽斯劳滕-兰道）以及 Vilter、Stuckert（维尔道应用技术大学）提出了一个开源的无人机对地测量测试床。基于 OpenAirInterface（OAI）和 USRP X410 搭建的独立 5G 网络在 3619.2 MHz 发射 NR 信号，并对 OAI 上行 SRS 信道估计器进行插桩，将原始复数 CSI 与 Holybro X500 多旋翼的飞行遥测一同记录。该录用版本已在 IEEE VTC2026-Spring 上宣读。

在德国 Schönhagen 机场的飞行共采集约 100 分钟数据，覆盖七种任务剖面，含 60 万个以上宽带信道快照。作者报告称，原始频谱脊线由通用 SDR 链路中的硬件相位噪声而非运动学多普勒主导，且深度学习信道预测器在这类数据上的表现与理想化信道下不同。数据集已公开。

## Key technical points (EN)

- Testbed: OAI 5GC and RAN on a PC with a USRP X410 over 10 GbE; stable coverage to about 300 m line-of-sight; with pre-programmed SIM cards the setup supports up to 16 UAVs and 130 Mbit/s aggregate uplink. CSI is tapped right after SRS-based channel estimation, before higher-layer reporting or compression.
- Dataset: seven missions at 40 to 60 m altitude and 5 to 15 m/s, sampled every 5 or 10 ms, synchronised to GNSS UTC time.
- Measurements: channel power correlates at -0.54 with 3D distance to the gNB, -0.51 with groundspeed and -0.48 with absolute radial velocity.
- Doppler finding: in a 60 s excerpt at 15 m/s (theoretical maximum Doppler about 181 Hz, aliased by the 100 Hz sampling), the unguided ridge has 29.47 Hz mean absolute error against the theoretical curve versus 3.13 Hz for guided tracking.
- Benchmark on the 15 m/s subset: at a horizon of 10, the paper reports the Transformer at -27.5 dB MSE and the GRU at -30.8 dB, describing the GRU's degradation as "even below the Naive baseline" (as stated; numerically the GRU figure is the lower of the two, and the paper does not define the metric's sign convention further), with a roughly 3 dB gap in favour of the Transformer's robustness. In a retrospective link-adaptation simulation driven by recorded SNR, the Transformer reaches 7.00% BLER and 4.45 Mbps against the GRU's 10.80% and 4.29 Mbps, with an oracle bound of 4.77 Mbps.

## Key technical points (ZH)

- 测试床：PC 上运行 OAI 5GC 与 RAN，通过 10 GbE 连接 USRP X410；视距条件下稳定覆盖约 300 m；使用预置 SIM 卡时最多支持 16 架无人机，聚合上行 130 Mbit/s。CSI 在基于 SRS 的信道估计之后、高层上报或压缩之前获取。
- 数据集：七次任务，高度 40 至 60 m，速度 5 至 15 m/s，采样间隔 5 或 10 ms，与 GNSS UTC 时间同步。
- 测量结果：信道功率与到 gNB 的三维距离相关系数为 -0.54，与地速为 -0.51，与绝对径向速度为 -0.48。
- 多普勒发现：在 15 m/s 的一段 60 s 数据中（理论最大多普勒约 181 Hz，在 100 Hz 采样下发生混叠），无引导脊线相对理论曲线的平均绝对误差为 29.47 Hz，引导跟踪为 3.13 Hz。
- 15 m/s 子集上的基准测试：预测步长为 10 时，论文报告 Transformer 的 MSE 为 -27.5 dB、GRU 为 -30.8 dB，并称 GRU 的退化“甚至低于朴素基线”（此为论文原述；从数值看 GRU 的数值更低，文中未进一步说明该指标的符号约定），并据此强调 Transformer 约 3 dB 的鲁棒性优势。在由实测 SNR 驱动的回溯链路自适应仿真中，Transformer 的 BLER 为 7.00%、吞吐 4.45 Mbps，GRU 为 10.80% 与 4.29 Mbps，理想（Oracle）上界为 4.77 Mbps。

## Why it matters / what's new (EN)

The paper offers an openly released, instrumented 5G NR measurement chain whose CSI includes real SDR impairments, and uses it to compare predictors against idealised-channel expectations. It covers one site, one carrier frequency (sub-6 GHz) and a chronological split of one mission subset, so the predictor comparison is a case study rather than a general ranking.

## Why it matters / what's new (ZH)

该论文提供了一条公开发布、带插桩的 5G NR 测量链路，其 CSI 包含真实的 SDR 损伤，并用它对比预测器与理想化信道下预期的差异。研究仅涉及一个地点、一个 sub-6 GHz 载频和单个任务子集的时间顺序划分，因此预测器比较属于案例研究，而非普适排名。

## Images

![Open-source UAV-5G measurement system: OAI 5GC/RAN on the ground and the UAV user equipment | 开源无人机 5G 测量系统：地面 OAI 5GC/RAN 与无人机用户设备](https://arxiv.org/html/2611.16644v1/figures/UAV_5g_communication_system.png)
![Spectrogram of a 15 m/s mission with theoretical Doppler, guided and unguided ridges | 15 m/s 任务的频谱图，叠加理论多普勒、引导与无引导脊线](https://arxiv.org/html/2611.16644v1/Spectrogram_15mps_Guided_Unguided.png)
