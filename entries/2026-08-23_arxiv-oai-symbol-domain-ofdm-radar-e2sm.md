---
id: 2026-08-23_arxiv-oai-symbol-domain-ofdm-radar-e2sm
date_published: 2026-08-17
date_found: 2026-08-23
type: academic-paper
technology: cellular
title_en: "Real-Time Symbol-Domain OFDM Radar in an OpenAirInterface 5G Base Station With O-RAN Sensing Services"
title_zh: "在 OpenAirInterface 5G 基站中实现实时符号域 OFDM 雷达及 O-RAN 感知服务"
url: "https://arxiv.org/abs/2608.16705"
source_quality: full
topics: [ISAC, OFDM-radar, OpenAirInterface, O-RAN, E2-service-model, xApp, USRP, micro-Doppler, CFAR, monostatic-sensing]
topic_primary: 5g-nr
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Karim Saifullin, Sajid Ahmed and Mohamed-Slim Alouini (KAUST, Saudi Arabia) embed a fully real-time monostatic OFDM radar inside the OpenAirInterface (OAI) 5G gNB software itself — not as an external receiver or an uplink-SRS passive listener, but as a background worker thread that consumes the gNB's own downlink transmit and receive slot buffers. A real-time thread copies TX/RX slot data into a bounded ring buffer; the worker removes the communication symbols by regularized element-wise (conjugate) division, then performs range–Doppler processing (2048-point IFFT range compression, mean-removal clutter suppression, 2D ordered-statistic CFAR) over 160 ms coherent processing intervals. The standard 5G NR waveform is untouched. A custom E2 service model, E2SM-RADAR, exports detections plus a compact slow-time payload (263 kbit/s) to the near-real-time RIC, where controller-side xApps perform tracking and micro-Doppler classification.

On a USRP X300 at 3.348 GHz (band n78, 30 kHz SCS, 162 RBs, 58.29 MHz occupied) the system achieves 2.57 m nominal range resolution and 0.28 m/s velocity resolution, 57.62 dB measured processing gain (57.56 dB predicted), >90% detection at 25 dB post-integration SNR with a 6.9x10^-4 false-alarm rate, at 45.2% CPU utilization (58.4% conservative bound) — and a concurrently served UE loses only 0.1% throughput at MCS 27. A notable hardware finding: the X300 exhibits a carrier-dependent TX–RX phase rotation; choosing a tuning-grid-aligned carrier improved clutter suppression from −16.4 dB to 38.0 dB and cut coherent-integration loss from 19.81 dB to 0.27 dB. Demonstrations include separating two oppositely moving targets (6.5 m / 2.7 m/s apart) and 84.8% per-window micro-Doppler classification (walking person vs. wheeled chair). Stated limitation: range resolution follows the scheduler — idle periods shrink the usable bandwidth to 4.44 MHz (~33.8 m resolution), so sensing quality is traffic-dependent.

## Summary (ZH)
沙特阿卜杜拉国王科技大学（KAUST）的 Karim Saifullin、Sajid Ahmed 与 Mohamed-Slim Alouini 将一个完全实时的单站 OFDM 雷达直接嵌入 OpenAirInterface（OAI）5G 基站软件内部——既不是外置接收机，也不是被动监听上行 SRS，而是作为后台工作线程直接消费基站自身的下行发送与接收时隙缓冲区。实时线程将 TX/RX 时隙数据复制到有界环形缓冲区；工作线程通过正则化的逐元素（共轭）除法去除通信符号，再在 160 毫秒相干处理间隔上执行距离-多普勒处理（2048 点 IFFT 距离压缩、去均值杂波抑制、二维有序统计 CFAR）。标准 5G NR 波形完全不需修改。自定义的 E2 服务模型 E2SM-RADAR 将检测结果和紧凑的慢时间载荷（263 kbit/s）导出到近实时 RIC，由控制器侧的 xApp 完成跟踪与微多普勒分类。

在 USRP X300 上（3.348 GHz，n78 频段，30 kHz 子载波间隔，162 个资源块，占用 58.29 MHz），系统实现 2.57 米标称距离分辨率与 0.28 米/秒速度分辨率，实测处理增益 57.62 dB（理论预测 57.56 dB），在 25 dB 积分后信噪比下检测率超过 90%，虚警率 6.9x10^-4，CPU 占用 45.2%（保守上界 58.4%）——同时服务的 UE 在 MCS 27 下吞吐量仅下降 0.1%。一个重要的硬件发现：X300 存在与载频相关的收发相位旋转；选择与调谐栅格对齐的载频后，杂波抑制从 −16.4 dB 提升到 38.0 dB，相干积分损失从 19.81 dB 降到 0.27 dB。演示包括分离两个反向运动目标（相距 6.5 米/2.7 米每秒）以及 84.8% 的逐窗口微多普勒分类（行走的人 vs. 轮式座椅）。文中指出的局限：距离分辨率跟随调度器——空闲时段可用带宽缩至 4.44 MHz（分辨率约 33.8 米），感知质量依赖于业务负载。

## Key technical points (EN)
- First fully in-gNB real-time OFDM radar in OpenAirInterface: background worker thread + bounded ring buffer off the gNB's own TX/RX slot data; standard NR waveform unmodified.
- Symbol removal by regularized conjugate division, 2048-point IFFT range compression, mean-removal clutter suppression, 2D OS-CFAR, 160 ms CPIs.
- Custom E2SM-RADAR service model streams detections + slow-time payload (263 kbit/s) to the near-RT RIC: 2,591 CPIs delivered over 416 s with zero losses; xApps do tracking and classification controller-side.
- Setup: USRP X300, 3.348 GHz (n78), 30 kHz SCS, 162 RBs / 58.29 MHz -> 2.57 m range and 0.28 m/s velocity resolution.
- Measured: 57.62 dB processing gain (57.56 predicted), >90% detection at 25 dB post-integration SNR, false-alarm rate 6.9x10^-4, CPU 45.2% (bound 58.4%), concurrent-UE throughput impact only -0.1% at MCS 27.
- Hardware lesson: carrier-dependent TX-RX phase rotation on the X300; a tuning-grid-aligned carrier lifts clutter suppression from -16.4 dB to 38.0 dB and cuts coherent-integration loss 19.81 dB -> 0.27 dB.
- Micro-Doppler classification 84.8% per-window (walking vs. wheeled chair); two-target separation demonstrated at 6.5 m / 2.7 m/s spacing.
- Limitation: sensing resolution is scheduler-coupled — idle traffic shrinks occupied bandwidth to 4.44 MHz (~33.8 m resolution); indoor operation is isolation/clutter-limited, not power-limited.

## Key technical points (ZH)
- 首个完全在 OpenAirInterface 基站内部运行的实时 OFDM 雷达：后台工作线程 + 有界环形缓冲区直接使用基站自身 TX/RX 时隙数据；标准 NR 波形零修改。
- 通过正则化共轭除法去除通信符号，2048 点 IFFT 距离压缩，去均值杂波抑制，二维有序统计 CFAR，160 毫秒相干处理间隔。
- 自定义 E2SM-RADAR 服务模型将检测结果与慢时间载荷（263 kbit/s）流式传输至近实时 RIC：416 秒内交付 2,591 个 CPI、零丢失；跟踪与分类由控制器侧 xApp 完成。
- 平台：USRP X300，3.348 GHz（n78），30 kHz 子载波间隔，162 资源块/58.29 MHz -> 距离分辨率 2.57 米、速度分辨率 0.28 米/秒。
- 实测：处理增益 57.62 dB（预测 57.56），25 dB 积分后信噪比下检测率 >90%，虚警率 6.9x10^-4，CPU 45.2%（上界 58.4%），并发 UE 在 MCS 27 下吞吐量仅降 0.1%。
- 硬件经验：X300 存在载频相关的收发相位旋转；选用与调谐栅格对齐的载频使杂波抑制从 -16.4 dB 提升至 38.0 dB，相干积分损失从 19.81 dB 降至 0.27 dB。
- 微多普勒分类逐窗口准确率 84.8%（行走 vs. 轮式座椅）；演示了相距 6.5 米/2.7 米每秒的双目标分离。
- 局限：感知分辨率与调度器耦合——空闲业务下占用带宽缩至 4.44 MHz（约 33.8 米分辨率）；室内场景受隔离度与杂波限制，而非发射功率限制。

## Why it matters / what's new (EN)
The KB's ISAC-testbed thread so far runs on uplink SRS repurposed as passive radar with detection logic in xApps (2026-08-08_arxiv-5g-isac-uav-oran-sensing; the 08-13 multi-UAV tracking testbed). This KAUST system is the complementary architecture: monostatic, downlink-waveform, symbol-domain radar living inside the gNB's real-time software with a dedicated E2SM-RADAR interface — the first KB entry demonstrating in-gNB radar processing with quantified compute headroom (45% CPU) and near-zero impact on a served UE. The tuning-grid phase-rotation finding is a genuinely useful commodity-SDR lesson for anyone reproducing ISAC on USRPs, and the scheduler-coupled-resolution limitation names a concrete cross-layer problem (sensing quality depends on traffic load) that 3GPP Rel-20 ISAC work will have to face.

## Why it matters / what's new (ZH)
知识库中现有的 ISAC 测试床条目均基于把上行 SRS 改用作被动雷达、检测逻辑放在 xApp 中（2026-08-08 的 5G ISAC 无人机感知条目；08-13 的多无人机跟踪测试床）。KAUST 的这个系统是互补的另一种架构：单站、基于下行波形的符号域雷达，直接驻留在基站实时软件内部，并配有专用的 E2SM-RADAR 接口——这是知识库中首个展示基站内雷达处理、且量化了计算余量（CPU 45%）和对在服 UE 几乎零影响的条目。调谐栅格相位旋转的发现对任何在 USRP 上复现 ISAC 的团队都是实用的商用 SDR 经验；而"分辨率与调度器耦合"的局限指出了一个具体的跨层问题（感知质量依赖业务负载），这是 3GPP Rel-20 ISAC 工作必须面对的。

## Images
