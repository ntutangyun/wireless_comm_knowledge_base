---
id: 2026-10-21_arxiv-air-llm-broadcast-llm-weights-over-radio-rf-domain-gemv
date_published: 2026-09-30
date_found: 2026-10-21
technology: edge-ai
type: academic-paper
title_en: "AIR-LLM: broadcasting LLM weights over radio so an edge device computes the matrix-vector products in the RF domain without storing the weights"
title_zh: "AIR-LLM：通过无线电广播大模型权重，边缘设备在射频域完成矩阵向量乘而无需存储权重"
url: "https://arxiv.org/abs/2610.00465"
source_quality: full
topics: [over-the-air-weights, RF-computing, MIMO-broadcast, memory-free-inference, LLM]
topic_primary: edge-ai-networking
topics_secondary: [on-device-inference, edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

The paper starts from two limits of running an LLM on an edge device: the device may lack the memory to store the weights, or, even with enough memory, may spend unaffordable energy loading them. It asks whether a device can run an LLM without storing or loading weights, receiving them over the air and consuming them on the fly. AIR-LLM is the architecture the authors propose: a central radio (for example a 5G base station) broadcasts the LLM weights, and each edge user receives them and performs the general matrix-vector multiplication (GEMV) of inference directly in the radio-frequency (RF) domain using RF mixers. To shorten airtime it uses MIMO spatial multiplexing and an energy-efficient precoder-postcoder pair on the edge side that calibrates the device's own channel. Because the central radio does not address individual users, one broadcast serves all users in coverage.

The evaluation uses NVIDIA Sionna ray-traced channels for two urban scenes (Paris and Munich) with a 3.5 GHz, 100 MHz-bandwidth, 4-antenna central radio, plus the profile of a real RF mixer (ZEM-4300+ driven by USRP X310 radios) measured over a wired link. Nine LLMs from 1B to 70B parameters are tested. On LLaMA-3.1-8B, the authors report WikiText-2 perplexity degraded by 4.0%, energy 157.7x lower than remote FP16 and 40.4x lower than remote 4-bit weight-only quantisation, and, with 20 users, airtime 104.1x and 26.0x shorter respectively. Accuracy is scene-dependent: median effective bits of the RF GEMV are 3.97 (Paris) and 2.91 (Munich), and in the Munich scene 4-bit precision is out of reach below 16 antennas (A=16).

## Summary (ZH)

论文从边缘设备运行大模型的两个限制出发：设备可能没有足够内存存放权重，即使内存足够，加载权重的能耗也可能难以承受。作者提出的问题是：设备能否不存储、不加载权重，而是通过空口接收并即时使用。AIR-LLM 即为所提架构：中心无线电（例如 5G 基站）广播大模型权重，边缘用户接收后，用射频混频器在射频（RF）域直接完成推理中的通用矩阵向量乘（GEMV）。为缩短空口时间，它利用 MIMO 空间复用，并在边缘侧使用节能的预编码-后编码对来校准设备自身信道。由于中心无线电不针对单个用户，一次广播即可服务覆盖范围内的全部用户。

评估使用 NVIDIA Sionna 对两个城市场景（巴黎和慕尼黑）的射线追踪信道，中心无线电为 3.5 GHz、100 MHz 带宽、4 天线，并结合真实射频混频器（由 USRP X310 驱动的 ZEM-4300+，有线链路测量）的特性。测试了参数量 1B 到 70B 的 9 个大模型。在 LLaMA-3.1-8B 上，作者报告 WikiText-2 困惑度劣化 4.0%，能耗比远端 FP16 低 157.7 倍、比远端 4 比特仅权重量化低 40.4 倍；20 个用户时空口时间分别缩短 104.1 倍和 26.0 倍。精度与场景相关：射频 GEMV 的有效位数中位数在巴黎为 3.97，在慕尼黑为 2.91，慕尼黑场景在天线数低于 16（A=16）时无法达到 4 比特精度。

## Key technical points (EN)

- Architecture: user-unaware broadcast of weights from a central radio; the edge device multiplies in the RF domain with a mixer, so weights are never stored or loaded.
- Mechanism: a mixer's time-domain product becomes a convolution in frequency; one complex signal pair carries two real inner products, so a round handles 2A inner products across A spatial streams.
- Edge calibration: C calibration units, each with a per-subcarrier precoder and per-antenna postcoder, initialised by a closed-form SVD approximation and refined by alternating least squares; energy grows linearly with C.
- Setup: Sionna ray tracing (Paris, Munich), 3.5 GHz CBRS band, 100 MHz, 4 antennas, 100 m radius; 100 devices at 1.5 m; mixer profiled on a wired link.
- Reported results on LLaMA-3.1-8B (Paris): perplexity +4.0%; energy 157.7x / 40.4x lower than remote FP16 / W4A16 and 51.5x / 13.9x lower than local FP16 / W4A16; single-user airtime 5.11x / 1.28x shorter than remote FP16 / W4A16.
- User scalability: airtime stays constant as users grow; with 20 users, 104.1x / 26.0x shorter than remote FP16 / W4A16.
- Reported weak points: effective bits saturate with transmit power and calibration units (mixer nonlinearity sets a distortion floor); one Paris user hit perplexity 255.27 from a nearly singular channel; the selected Munich user at 28 GHz stays above perplexity 10^2.

## Key technical points (ZH)

- 架构：中心无线电对用户无感地广播权重；边缘设备用混频器在射频域做乘法，权重无需存储或加载。
- 机制：混频器的时域乘积在频域对应卷积；一对复信号承载两个实数内积，因此一轮在 A 个空间流上处理 2A 个内积。
- 边缘校准：C 个校准单元，各含逐子载波预编码器与逐天线后编码器，用闭式 SVD 近似初始化并经交替最小二乘细化；能耗随 C 线性增长。
- 设置：Sionna 射线追踪（巴黎、慕尼黑），3.5 GHz CBRS 频段，100 MHz，4 天线，覆盖半径 100 m；100 台高度 1.5 m 的设备；混频器在有线链路上测量。
- LLaMA-3.1-8B（巴黎）报告结果：困惑度 +4.0%；能耗比远端 FP16 / W4A16 低 157.7 倍 / 40.4 倍，比本地 FP16 / W4A16 低 51.5 倍 / 13.9 倍；单用户空口时间比远端 FP16 / W4A16 短 5.11 倍 / 1.28 倍。
- 用户可扩展性：空口时间不随用户数增加；20 个用户时比远端 FP16 / W4A16 短 104.1 倍 / 26.0 倍。
- 报告的薄弱处：有效位数随发射功率和校准单元数增加而饱和（混频器非线性形成失真底限）；巴黎有一名用户因信道近奇异出现困惑度 255.27；所选慕尼黑用户在 28 GHz 下的困惑度仍高于 10^2。

## Why it matters / what's new (EN)

The authors' stated motivation is that edge devices either lack memory for LLM weights or spend unaffordable energy loading them; AIR-LLM moves weight delivery onto a broadcast radio link and the multiplication into the receive chain. All figures come from simulated channels plus a wired profile of one mixer, not from an over-the-air prototype, and the energy ratios are the authors' own comparisons against remote and local baselines they defined. The RF arithmetic is low-precision (about 3 to 4 effective bits), so the result depends on the scene and on the weights tolerating that precision.

## Why it matters / what's new (ZH)

作者给出的动机是：边缘设备要么没有足够内存存放大模型权重，要么加载权重的能耗难以承受；AIR-LLM 把权重分发放到广播无线链路上，把乘法放到接收链路中。所有数据来自仿真信道和对单个混频器的有线测量，并非空口原型，能耗比值是作者对其自行定义的远端与本地基线的比较。射频运算精度较低（约 3 至 4 个有效位），因此结果取决于场景以及权重对该精度的容忍度。

## Images

*(No redistributable images for this entry.)*
