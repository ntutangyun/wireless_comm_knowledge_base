---
id: 2026-08-17_arxiv-neuromorphic-isac-uwb-ris
date_published: 2026-08-14
date_found: 2026-08-17
type: academic-paper
technology: uwb
title_en: "Standard-Compliant Neuromorphic Integrated Sensing and Communications Aided by an Intelligent Reflecting Surface"
title_zh: "基于智能反射面辅助的标准兼容神经形态 UWB 通感一体化接收机"
url: "https://arxiv.org/abs/2608.13985"
source_quality: full
topics: [802.15.4z, IR-UWB, ISAC, RIS, SNN]
topic_primary: uwb-radar
topics_secondary: [uwb-ranging]
novelty_score: 3
---

## Summary (EN)

A KAIST / King's College London / Northeastern University London team (Jiho Park, Jiechen Chen, Joonhyuk Kang, Osvaldo Simeone; submitted 14 Aug 2026, eess.SP) presents the first standard-compliant neuromorphic integrated sensing and communications (ISAC) receiver for IEEE 802.15.4z HRP impulse-radio UWB, operating through a reconfigurable intelligent surface (RIS). A single spiking neural network (SNN) receiver simultaneously demodulates the BPM-BPSK payload of a standardized 802.15.4z frame and performs passive radar target detection from the same waveform — no separate sensing waveform, no explicit channel estimation, and no payload equalization stage.

The core mechanism is a hypernetwork-adaptive SNN (HNet SNN): the standardized SYNC preamble of each frame is fed to a hypernetwork that generates per-frame, neuron-wise scaling coefficients for the leaky integrate-and-fire layers, so the receiver adapts to the current channel using only fields that already exist in the 802.15.4z frame (no extra pilots). Chip-domain magnitude-based sparsification keeps only high-power samples, preserving the event-driven energy advantage of spiking hardware. The RIS is modeled with a frequency-selective Lorentzian metamaterial response — a key realism step, since RIS dispersion smears the sparse IR-UWB pulses and couples the communication and sensing objectives.

Evaluated on a Sionna ray-traced urban deployment (2500-element RIS, SNR grid −10…+10 dB, 60k training / 10k test frames per point), the HNet SNN reaches ~10⁻² BLER at −5 dB and <0.1 target-detection error at high SNR where an LS/LMMSE-estimation + MMSE-equalization + SNN baseline stays near random on sensing. Computation energy is ~89 μJ/frame (51 μJ at 50% sparsification) versus >4.2 mJ for the dense baseline — a 46–98× reduction under a 45-nm CMOS operation-count model, with firing-rate regularization cutting hidden-layer activity a further 74%. A clean design trade-off emerges: low-Q (flat) RIS responses favor communication BLER, while high-Q (selective) responses suppress clutter and favor target detection.

## Summary (ZH)

KAIST／伦敦国王学院／伦敦东北大学团队（Jiho Park、Jiechen Chen、Joonhyuk Kang、Osvaldo Simeone；2026 年 8 月 14 日提交，eess.SP）提出首个标准兼容的神经形态 UWB 通感一体化（ISAC）接收机：在 IEEE 802.15.4z HRP 脉冲无线电 UWB 帧上，用单一脉冲神经网络（SNN）同时完成 BPM-BPSK 载荷解调与无源雷达目标检测，且经由可重构智能反射面（RIS）辅助传播——无需独立感知波形、无需显式信道估计、也无需载荷均衡。

核心机制为超网络自适应 SNN（HNet SNN）：每帧的标准 SYNC 前导码输入一个超网络，生成逐神经元的缩放系数，使泄漏积分发放（LIF）层按帧适配当前信道——仅复用 802.15.4z 帧内既有字段，不增加导频。码片域按幅度稀疏化只保留高功率样本，保持脉冲硬件的事件驱动能耗优势。RIS 采用频率选择性洛伦兹超材料响应建模，这是关键的真实性改进：RIS 色散会展宽稀疏的 IR-UWB 脉冲，使通信与感知目标相互耦合。

在 Sionna 射线追踪城市场景（2500 单元 RIS，SNR −10…+10 dB，每点 6 万训练／1 万测试帧）中，HNet SNN 在 −5 dB 达到约 10⁻² 的 BLER，高 SNR 下目标检测误差 <0.1，而 LS/LMMSE 估计 + MMSE 均衡 + SNN 基线在感知任务上接近随机。计算能耗约 89 μJ/帧（50% 稀疏化时 51 μJ），对比稠密基线 >4.2 mJ，按 45nm CMOS 运算计数模型为 46–98 倍降低；发放率正则化可再削减隐藏层活动 74%。并给出清晰设计权衡：低 Q（平坦）RIS 响应利于通信 BLER，高 Q（选择性）响应抑制杂波、利于目标检测。

## Key technical points (EN)

- **Full 802.15.4z HRP PHY compliance** — SHR preamble + BPM-BPSK payload are processed as standardized, replacing the simplified PPM assumed by prior neuromorphic-receiver work; the same frame carries data and illuminates the passive radar target.
- **Hypernetwork preamble adaptation** — the SYNC field drives per-frame neuron-wise scaling of LIF layers; channel adaptation without explicit estimation, equalization, or added pilots.
- **Frequency-selective RIS model** — Lorentzian metamaterial response (quality factor Q as the dispersion knob) inside a Sionna ray-traced 3GPP-aligned channel; exposes the comm-vs-sensing trade-off that flat-RIS models hide.
- **Energy numbers** — ~89 μJ/frame (ρ=1) and 51 μJ/frame (ρ=0.5) vs >4.2 mJ for the LS/LMMSE + dense pipeline: 46–98× reduction (45-nm CMOS, εMAC=4.6 pJ, εAC=0.9 pJ); firing-rate regularization (λr=10⁻³) cuts hidden-layer firing 0.21→0.05.
- **Joint readouts** — one SNN emits both coded-bit soft information for FEC decoding and a target-presence probability; BLER ~10⁻² at γc=−5 dB, target error <0.1 at high SNR (baseline ~0.5).
- **Design rule** — RIS Q selects the operating point: flat response → better BLER; selective response → clutter suppression and better detection but degraded data recovery.

## Key technical points (ZH)

- **完整 802.15.4z HRP PHY 兼容** —— 按标准处理 SHR 前导码 + BPM-BPSK 载荷，替代此前神经形态接收机工作假设的简化 PPM；同一帧既承载数据又照射无源雷达目标。
- **超网络前导码自适应** —— SYNC 字段驱动 LIF 层逐神经元的按帧缩放；无需显式信道估计、均衡或额外导频即可完成信道适配。
- **频率选择性 RIS 建模** —— 洛伦兹超材料响应（品质因数 Q 为色散旋钮），嵌入 Sionna 射线追踪、3GPP 对齐的信道；揭示平坦 RIS 模型掩盖的通信-感知权衡。
- **能耗数据** —— 约 89 μJ/帧（ρ=1）、51 μJ/帧（ρ=0.5），对比 LS/LMMSE + 稠密流水线 >4.2 mJ：降低 46–98 倍（45nm CMOS，εMAC=4.6 pJ，εAC=0.9 pJ）；发放率正则化（λr=10⁻³）使隐藏层发放率 0.21→0.05。
- **联合读出** —— 单一 SNN 同时输出供 FEC 译码的编码比特软信息与目标存在概率；γc=−5 dB 时 BLER 约 10⁻²，高 SNR 下目标误差 <0.1（基线约 0.5）。
- **设计法则** —— RIS 的 Q 值选择工作点：平坦响应利于 BLER；选择性响应抑制杂波、利于检测但损失数据恢复。

## Why it matters / what's new (EN)

This is the KB's first ISAC entry in the UWB bin and its first neuromorphic-receiver or RIS-assisted UWB work — the existing academic entries cover localization estimators (2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync, 2026-08-15_arxiv-uwb-amr-auto-anchor-calibration, 2026-08-15_arxiv-gaia-uwb-workzone-denoiser) and passive radar (2026-07-08_arxiv-uwb-radar-phase-multichannel), but nothing on using the standardized 802.15.4z waveform itself as a joint communication-and-sensing carrier, and nothing on spiking-hardware receivers. The standard-compliance angle matters: by working within unmodified 802.15.4z HRP frames and reusing the SYNC preamble for adaptation, the approach is deployable on the existing certified-frame format rather than requiring a new PHY — a direction the IEEE 802.15.4ab "native sensing" feature set is heading toward, making this a useful academic preview of sensing-capable next-generation UWB. The 46–98× computation-energy reduction also speaks directly to the tag/wearable power budgets that dominate UWB product design. Simulation-only (Sionna ray tracing, no hardware testbed), hence novelty 3 rather than higher.

## Why it matters / what's new (ZH)

这是本知识库 UWB 板块的首个通感一体化（ISAC）条目，也是首个神经形态接收机／RIS 辅助 UWB 工作——现有学术条目集中于定位估计器（2026-06-29_arxiv-ab-sync-uwb-tdoa-clock-sync、2026-08-15_arxiv-uwb-amr-auto-anchor-calibration、2026-08-15_arxiv-gaia-uwb-workzone-denoiser）与无源雷达（2026-07-08_arxiv-uwb-radar-phase-multichannel），但尚无以标准化 802.15.4z 波形本身作为通信+感知联合载体的工作，也无脉冲硬件接收机方向。标准兼容角度尤为重要：方案在未修改的 802.15.4z HRP 帧内工作、复用 SYNC 前导码做自适应，可直接部署于现有认证帧格式而无需新 PHY——这正是 IEEE 802.15.4ab“原生感知”特性集的演进方向，可视为下一代感知型 UWB 的学术预览。46–98 倍的计算能耗降低也直接切中主导 UWB 产品设计的标签／可穿戴功耗预算。该工作仅有仿真验证（Sionna 射线追踪，无硬件测试台），故新颖度评为 3。

## Images

![System model: RIS-aided IR-UWB ISAC with a passive radar target | 系统模型：RIS 辅助的 IR-UWB 通感一体化与无源雷达目标](https://arxiv.org/html/2608.13985v1/system_model.png)
![Standard 802.15.4z transmitter block diagram | 标准 802.15.4z 发射机框图](https://arxiv.org/html/2608.13985v1/standard_tx_block.png)
![HRP UWB frame and BPM-BPSK symbol structure | HRP UWB 帧与 BPM-BPSK 符号结构](https://arxiv.org/html/2608.13985v1/frame_structure.png)
![Sionna ray-traced path-gain maps of the urban deployment | 城市场景的 Sionna 射线追踪路径增益图](https://arxiv.org/html/2608.13985v1/sionna_figure.png)
