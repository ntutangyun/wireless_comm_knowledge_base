---
id: 2026-11-05_arxiv-analog-rf-computing-integrated-data-and-ai-flows-mu-mimo
date_published: 2026-10-14
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "Analog RF Computing for Integrated Data and AI Flows Over Wireless Networks"
title_zh: "面向无线网络中数据流与 AI 流融合的模拟射频计算"
url: "https://arxiv.org/abs/2610.20841"
source_quality: full
topics: [analog-RF-computing, mixer-based-MVM, MU-MIMO, WMMSE, AI-flow, multicast, edge-inference]
topic_primary: over-the-air-computation
topics_secondary: [edge-ai-networking, compute-offloading]
novelty_score: 4
---

## Summary (EN)

Many edge devices want AI inference but cannot store or run a neural network. Analog RF computing, as described in this paper (a follow-up to the authors' earlier framework, arXiv 2605.14331), handles this by letting a base station multicast a waveform that encodes the network weights. Each client generates its own input-encoded waveform and multiplies the two in a passive mixer in its RF front end; the mixer output realises the matrix-vector multiplications that dominate inference, with very low power and memory demand at the client.

The new question is what this "AI flow" costs the ordinary traffic. The multicast AI waveform shares spectrum, transmit power and spatial resources with unicast data flows. Wentao Yu and Vincent Wong study an MU-MIMO downlink and formulate a joint beamforming problem for the data and AI flows: maximise aggregate data rate subject to computing-accuracy, client-energy, total-power and mixer-hardware constraints. They solve it with a weighted-MMSE (WMMSE) algorithm.

Results are numerical, using 3GPP channel models, and no hardware validation is reported (the authors list hardware validation as future work). The relative aggregate data-rate reduction from adding the AI flow is below 5% compared with a data-only reference, for a single representative LeNet convolutional layer under the 3GPP TR 38.901 InF-SH indoor-factory channel, with accuracy calibrated on MNIST. The paper notes the result depends on the accuracy target, the number of spatial degrees of freedom, the number of AI clients and the client energy limit. The authors frame the conclusion as telecom operators being able to offer edge AI inference alongside data service. The paper was accepted for presentation at IEEE Globecom 2026.

## Summary (ZH)

许多边缘设备需要 AI 推理，却无法存储或运行神经网络。本文所述的模拟射频计算（是作者此前框架 arXiv 2605.14331 的后续工作）让基站组播一个编码了网络权重的波形；每个客户端生成自己的输入编码波形，并在射频前端用无源混频器将二者相乘，混频输出即实现了推理中占主导的矩阵-向量乘法，客户端的功耗与存储需求都很低。

新问题是：这条「AI 流」会给普通业务带来多大代价。组播的 AI 波形与单播数据流共享频谱、发射功率和空间资源。Wentao Yu 与 Vincent Wong 研究 MU-MIMO 下行，针对数据流与 AI 流建立联合波束赋形问题：在计算精度、客户端能耗、总功率及混频器硬件约束下最大化总数据速率，并用加权 MMSE（WMMSE）算法求解。

结果为数值仿真，采用 3GPP 信道模型，未报告硬件验证（作者将硬件验证列为后续工作）。加入 AI 流后相对仅数据业务基线的总速率相对下降低于 5%，针对的是单个代表性 LeNet 卷积层、3GPP TR 38.901 InF-SH 室内工厂信道，精度以 MNIST 标定。论文指出该结果取决于精度目标、空间自由度、AI 客户端数量和客户端能耗上限。作者据此认为电信运营商可以在提供数据服务的同时提供边缘 AI 推理服务。论文将在 IEEE Globecom 2026 上宣读。

## Key technical points (EN)

- Mixer-based matrix-vector multiplication: base station multicasts a weight-encoded waveform; the client mixes it with an input-encoded waveform in a passive RF mixer; tone assignment aligns each output row at a different difference frequency, and filtering removes unwanted products.
- Nonlinear activation is applied after readout; the linear layers carry most of the computation.
- Integrated MU-MIMO downlink: one multicast AI stream plus several unicast data streams share bandwidth and BS power.
- Joint beamforming for data and AI flows, maximising aggregate data rate under computing-accuracy, client-energy, BS-power and mixer-hardware constraints; solved with WMMSE.
- Evaluation: numerical; relative aggregate-rate reduction below 5% for a single representative LeNet conv layer under the 3GPP TR 38.901 InF-SH channel, accuracy calibrated on MNIST. No hardware validation.
- Venue: IEEE Globecom 2026 (stated in the arXiv comments).

## Key technical points (ZH)

- 基于混频器的矩阵-向量乘法：基站组播权重编码波形；客户端在无源射频混频器中与输入编码波形相乘；通过音调分配使每个输出行对齐到不同差频，再滤除无用乘积。
- 非线性激活在读出之后施加；线性层承担主要计算量。
- 融合 MU-MIMO 下行：一路组播 AI 流与多路单播数据流共享带宽与基站功率。
- 数据流与 AI 流联合波束赋形，在计算精度、客户端能耗、基站功率与混频器硬件约束下最大化总数据速率；采用 WMMSE 求解。
- 评估：数值仿真；针对单个代表性 LeNet 卷积层、3GPP TR 38.901 InF-SH 信道，总速率相对下降低于 5%，精度以 MNIST 标定。无硬件验证。
- 发表：IEEE Globecom 2026（见 arXiv 备注）。

## Why it matters / what's new (EN)

The paper studies how much downlink data rate is given up when the AI flow shares MIMO resources with data flows. The authors conclude that telecom operators "can provide AI inference services while largely preserving" data communication service.

See also: `2026-09-18_arxiv-rf-cnn-radio-hardware-repurposed-inference` and `2026-10-21_arxiv-air-llm-broadcast-llm-weights-over-radio-rf-domain-gemv`.

The limits are explicit in the paper: simulation with 3GPP channels, a single multicast model, and no hardware validation, so the 5% figure is a modelled result under the authors' assumptions.

## Why it matters / what's new (ZH)

本文研究 AI 流与数据流共享 MIMO 资源时，会让出多少下行数据速率。作者的结论是：电信运营商「可以在基本保持」数据通信服务的同时提供 AI 推理服务。

另见：`2026-09-18_arxiv-rf-cnn-radio-hardware-repurposed-inference` 与 `2026-10-21_arxiv-air-llm-broadcast-llm-weights-over-radio-rf-domain-gemv`。

论文自身的局限很明确：基于 3GPP 信道的仿真、单一组播模型、无硬件验证，因此 5% 是作者假设下的建模结果。

## Images

*(No redistributable images for this entry.)*
