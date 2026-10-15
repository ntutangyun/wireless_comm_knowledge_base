---
id: 2026-10-15_arxiv-leo-los-mimo-hardware-friendly-baseband
date_published: 2026-10-14
date_found: 2026-10-15
technology: satellite
type: academic-paper
title_en: "Hardware-friendly Baseband Design and Performance Analysis for LEO Broadband LoS-MIMO Systems"
title_zh: "面向低轨宽带 LoS-MIMO 系统的硬件友好基带设计与性能分析"
url: "https://arxiv.org/abs/2610.19639"
source_quality: full
topics: [LoS-MIMO, OFDM, effective-channel-throughput, LDPC, space-to-Earth-downlink]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Zhang, Gong, Li and Quek (Xidian University, China Academy of Space Technology, Singapore University of Technology and Design) treat high-frequency, broadband line-of-sight MIMO for space-to-Earth data downlinks. In LEO scenarios the paper identifies two problems: spatial rank deficiency from time-frequency coupling correlation, and clock deviations from distributed oscillators.

The paper first establishes a dynamic effective channel throughput (ECT) framework. The ECT metric combines pilot/cyclic-prefix overhead with the block-error-rate characteristic obtained from CCSDS (8160,7136) LDPC decoding. Closed-form derivations then connect orbital geometry and residual sampling-frequency deviation to demodulation error and useful throughput, and quantify the equivalent SINR under joint errors. Second, it proposes a hardware-friendly OFDM transceiver with subband-adaptive truncation and dynamic timing recovery. A finite-grid scheduler jointly selects the truncation threshold and square-QAM order and switches to a one-stream mode when spatial multiplexing becomes inefficient.

Link-level simulations are reported to agree with the analytical bounds and to avoid outages caused by spatial notches at low complexity. The abstract states a potential average throughput of over 100 Gbps for a single dual-polarized beam; the body reports an average single-polarization ECT of 55.98 Gbps over the evaluated angular interval. The conclusion names dual-polarization and hardware implementation studies as subsequent work.

## Summary (ZH)

Zhang、Gong、Li 和 Quek（西安电子科技大学、中国空间技术研究院、新加坡科技设计大学）研究用于星地数据下行的高频宽带视距（LoS）MIMO。论文指出低轨场景中存在两个问题：时频耦合相关性导致的空间秩亏缺，以及分布式振荡器带来的时钟偏差。

论文首先建立动态有效信道吞吐量（ECT）框架。ECT 指标将导频/循环前缀开销与 CCSDS (8160,7136) LDPC 译码得到的误块率特性相结合。随后的闭式推导把轨道几何和残余采样频率偏差与解调误差及有效吞吐量联系起来，并量化了联合误差下的等效 SINR。其次，提出带有子带自适应截断和动态定时恢复的硬件友好 OFDM 收发架构。有限网格调度器联合选择截断门限和方形 QAM 阶数，并在空间复用效率低下时切换到单流模式。

链路级仿真与解析界一致，并以低复杂度避免了空间零陷引起的中断。摘要给出单个双极化波束潜在平均吞吐量超过 100 Gbps；正文报告在所评估角度区间内平均单极化 ECT 为 55.98 Gbps。结论将双极化和硬件实现研究列为后续工作。

## Key technical points (EN)

- **ECT metric**: combines pilot/CP overhead with the CCSDS (8160,7136) LDPC block-error-rate characteristic.
- **Subband-adaptive truncation** with dynamic timing recovery to achieve spatial decoupling.
- **Joint VCM/truncation scheduler** on a finite grid, with a one-stream fallback mode.
- **Reported figures**: over 100 Gbps potential average throughput per dual-polarized beam (abstract); 55.98 Gbps average single-polarization ECT over the evaluated interval (body).
- **Implementation angle**: the paper states that precoding approaches based on graph neural networks or Chebyshev-accelerated iterations demand high computational complexity that makes FPGA implementation difficult.

## Key technical points (ZH)

- **ECT 指标**：将导频/CP 开销与 CCSDS (8160,7136) LDPC 误块率特性结合。
- **子带自适应截断**配合动态定时恢复，实现空间解耦。
- **有限网格上的 VCM/截断联合调度器**，带单流回退模式。
- **报告的数值**：每个双极化波束潜在平均吞吐量超过 100 Gbps（摘要）；评估区间内平均单极化 ECT 为 55.98 Gbps（正文）。
- **实现角度**：论文指出，基于图神经网络或切比雪夫加速迭代的预编码方法计算复杂度很高，难以在 FPGA 上实现。

## Why it matters / what's new (EN)

Combines an effective-throughput metric tied to a specific LDPC code with a baseband design aimed at hardware implementation for LEO LoS-MIMO downlinks.

## Why it matters / what's new (ZH)

将与特定 LDPC 码绑定的有效吞吐量指标，与面向硬件实现的低轨 LoS-MIMO 下行基带设计结合起来。

## Images

None.
