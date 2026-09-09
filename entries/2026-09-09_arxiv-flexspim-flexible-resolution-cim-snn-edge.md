---
id: 2026-09-09_arxiv-flexspim-flexible-resolution-cim-snn-edge
date_published: 2026-09-08
date_found: 2026-09-09
type: academic-paper
technology: edge-ai
title_en: "FlexSpIM: An Event-Based Digital Compute-In-Memory Accelerator with Flexible Operand Resolution and Layer-Wise Hybrid Stationarity"
title_zh: "FlexSpIM：支持灵活操作数精度与逐层混合数据流的事件驱动数字存内计算加速器"
url: "https://arxiv.org/abs/2609.08446"
source_quality: full
topics: [compute-in-memory, spiking-neural-network, edge-vision, fabricated-chip, 40nm-CMOS, DVS-gesture]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

FlexSpIM is a fabricated compute-in-memory (CIM) accelerator, built in 40-nm CMOS by researchers at Delft University of Technology and KU Leuven, targeting spiking neural network (SNN) inference for edge vision applications that need microsecond-level latency at ultra-low energy. The chip's stated distinction from prior fixed-precision digital CIM-based SNN accelerators (the paper names IMPULSE and SpiDR as reference points) is threefold: arbitrary bitwise operand-resolution reconfiguration rather than a small set of fixed presets, flexible operand reshaping that supports non-proportional weight/membrane-potential bit-widths, and a hybrid dataflow that lets each layer independently choose weight-stationary or output-stationary execution.

Evaluated on the IBM DVS128 event-based gesture-recognition dataset (10 classes) using a spiking CNN with six convolutional layers and three fully-connected layers (8-bit weights, 16-bit membrane potentials), the chip reaches 95.8% classification accuracy. At the macro level it delivers 1.2–2.5 giga-synaptic-operations-per-second (GSOPS) peak throughput at 5.7–7.2 pJ per synaptic operation, and up to 44.5–56.3 fJ per operation when normalised to 1 bit — which the paper frames as 5x higher throughput with a 1-bit-normalized energy efficiency no more than about 2x lower than the best digital CIM architectures. The paper's system-level headline is that the hybrid dataflow — choosing stationarity per layer rather than optimising the CIM macro further — is what actually moves the needle: off-macro data transfers consume 4.3x the CIM macro's own energy at a single macro and still 4x at 39 macros, and the hybrid dataflow cuts system-level energy by up to 45% and latency by up to 52% versus a fixed weight-stationary baseline, while also reducing model size by 30% compared to state-of-the-art CIM approaches.

## Summary (ZH)

FlexSpIM 是由代尔夫特理工大学（TU Delft）与鲁汶大学（KU Leuven）研究者以 40 纳米 CMOS 工艺流片实现的存内计算（CIM）加速器，面向需要微秒级时延和超低能耗的边缘视觉应用中的脉冲神经网络（SNN）推理。论文指出该芯片相对于以往固定精度的数字 CIM SNN 加速器（文中以 IMPULSE 与 SpiDR 作为参照）有三点区别：支持任意位宽的操作数精度重配置，而非仅有少数几档固定预设；支持权重/膜电位非成比例位宽的灵活操作数重塑；以及允许每一层独立选择权重驻留（weight-stationary）或输出驻留（output-stationary）的混合数据流。

在 IBM DVS128 事件驱动手势识别数据集（10 类）上，采用 6 层卷积 + 3 层全连接的脉冲 CNN（8-bit 权重、16-bit 膜电位）评测，该芯片达到 95.8% 的分类准确率。在宏（macro）级别，其峰值吞吐为 1.2–2.5 GSOPS（每秒十亿次突触运算），每次突触运算能耗 5.7–7.2 pJ，归一化至 1-bit 后低至 44.5–56.3 fJ——论文将其概括为：吞吐提高 5 倍，而归一化至 1-bit 的能效相较最优数字 CIM 架构至多低约 2 倍。论文在系统层面的核心结论是：真正带来性能提升的是混合数据流（按层选择数据驻留方式），而非进一步优化 CIM 宏本身——在单宏配置下片间数据传输能耗为 CIM 宏自身的 4.3 倍，即便在 39 个宏时仍为约 4 倍；相较固定权重驻留基线，混合数据流将系统级能耗降低最多 45%、时延降低最多 52%，同时相较当前最先进的 CIM 方案将模型体积降低 30%。

## Key technical points (EN)

- **Fabricated silicon**: 40-nm CMOS (TSMC), single 16 kB digital CIM-SRAM macro (512x256 6T bitcell array), 4.25 kB spike input buffer, 16 banks of 2 kB weight/potential buffers, operating at 75.5–157 MHz / 0.9–1.1 V.
- **Three architectural contributions vs. prior fixed-precision digital CIM SNN chips (IMPULSE, SpiDR)**: arbitrary operand-resolution reconfiguration, non-proportional weight/potential bit-width reshaping, and per-layer hybrid weight-/output-stationary dataflow.
- **Benchmark**: IBM DVS128 gesture dataset, 10 classes, spiking CNN (6 conv + 3 FC layers, conv layers evaluated), 8-bit weight / 16-bit potential configuration.
- **Accuracy**: 95.8%.
- **Throughput / efficiency**: 1.2–2.5 GSOPS peak; 5.7–7.2 pJ/SOP at macro level; 44.5–56.3 fJ/SOP 1-bit-normalised — framed by the paper as 5x higher throughput with a 1-bit-normalized energy efficiency no more than about 2x lower than the best digital CIM architectures.
- **Per-timestep, 32-macro configuration**: 105 microsecond latency, 6.4 microjoule energy.
- **System-level gains from hybrid dataflow vs. fixed weight-stationary baseline**: up to 45% energy reduction, up to 52% latency reduction, 30% smaller model size compared to state-of-the-art CIM approaches.
- **Key architectural insight**: off-macro transfers cost 4.3x the CIM macro's own energy at a single macro and still ~4x at 39 macros — the paper argues system-level dataflow choice matters more than further macro-level optimisation.

## Key technical points (ZH)

- **流片硬件**：40 纳米 CMOS（台积电），单个 16 kB 数字 CIM-SRAM 宏（512×256 六管位元阵列），4.25 kB 脉冲输入缓冲区，16 组 2 kB 权重/膜电位缓冲区，工作频率 75.5–157 MHz，供电电压 0.9–1.1 V。
- **相对以往固定精度数字 CIM SNN 芯片（IMPULSE、SpiDR）的三项架构贡献**：任意位宽操作数精度重配置；权重/膜电位非成比例位宽重塑；逐层独立选择权重驻留或输出驻留的混合数据流。
- **评测基准**：IBM DVS128 手势数据集，10 类，脉冲 CNN（6 层卷积 + 3 层全连接，仅评测卷积层），8-bit 权重 / 16-bit 膜电位配置。
- **准确率**：95.8%。
- **吞吐/能效**：宏级峰值吞吐 1.2–2.5 GSOPS；每次突触运算 5.7–7.2 pJ；归一化至 1-bit 后为 44.5–56.3 fJ/次——论文将其概括为吞吐提高 5 倍，而归一化至 1-bit 的能效相较最优数字 CIM 架构至多低约 2 倍。
- **32 宏配置下单时间步表现**：时延 105 微秒，能耗 6.4 微焦。
- **混合数据流相较固定权重驻留基线的系统级增益**：能耗最多降低 45%，时延最多降低 52%，相较当前最先进的 CIM 方案模型体积降低 30%。
- **关键架构洞察**：单宏配置下片间数据传输能耗为 CIM 宏自身的 4.3 倍，即便在 39 个宏时仍为约 4 倍——论文认为系统级数据流选择比进一步优化宏本身更重要。

## Why it matters / what's new (EN)

This KB's edge-ai-silicon bin already covers several accelerator mechanisms — analog in-memory computing (`2026-09-04_arxiv-race-aimc-certified-analog-inmemory`), spiking-neuromorphic FPGA (`2026-09-04_arxiv-neuromorphic-fpga-hypoxia-edge`), MTJ in-memory fault tolerance (`2026-09-02_arxiv-falcon-mtj-fault-tolerant-in-memory-edge-ai`), and heterogeneous-SoC operator scheduling (`2026-09-07_para-pipe-heterogeneous-soc-operator-scheduling`) — but none has been a *digital* CIM accelerator with variable operand resolution as the reconfigurability axis, and this is fabricated silicon rather than a simulated or modelled design. The paper's finding that dataflow choice, not CIM-macro tuning, is the larger lever is a useful counterpoint to accelerator work that focuses narrowly on the memory array itself.

## Why it matters / what's new (ZH)

本知识库的 edge-ai-silicon 分类此前已收录多种加速器机制——模拟存内计算（`2026-09-04_arxiv-race-aimc-certified-analog-inmemory`）、脉冲神经形态 FPGA（`2026-09-04_arxiv-neuromorphic-fpga-hypoxia-edge`）、MTJ 存内容错（`2026-09-02_arxiv-falcon-mtj-fault-tolerant-in-memory-edge-ai`）、异构 SoC 算子调度（`2026-09-07_para-pipe-heterogeneous-soc-operator-scheduling`）——但此前尚无以「操作数精度可变」作为可重配置维度的*数字*存内计算加速器，且这是真实流片而非仿真或建模设计。论文关于「数据流选择而非 CIM 宏本身的调优才是更大杠杆」的发现，为那些仅聚焦于存储阵列本身的加速器研究提供了有价值的反例参考。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
