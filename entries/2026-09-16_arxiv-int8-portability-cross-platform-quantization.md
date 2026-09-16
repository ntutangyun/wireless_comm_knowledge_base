---
id: 2026-09-16_arxiv-int8-portability-cross-platform-quantization
date_published: 2026-09-14
date_found: 2026-09-16
type: academic-paper
technology: edge-ai
title_en: "Is INT8 Portable? A Cross-Platform Measurement Study of Quantized Inference on Embedded and Automotive Accelerators"
title_zh: "INT8 是否可移植？嵌入式与车规加速器上量化推理的跨平台实测研究"
url: "https://arxiv.org/abs/2609.16085"
source_quality: full
topics: [edge-model-efficiency, quantization, INT8, measurement-study, automotive]
topic_primary: edge-model-efficiency
topics_secondary: [edge-ai-silicon]
novelty_score: 4
---

## Summary (EN)

Yuyeong Shin (Korea Automotive Technology Institute, KATECH) presents a cross-platform measurement study asking whether an INT8-quantized model, exported once to a fixed ONNX artifact with embedded quantization scales, behaves the same way when that identical artifact is run on different hardware. The methodology holds the ONNX graph and its quantization scales constant and varies only the execution target, across seven hardware classes / eight targets: ARM CPUs with dot-product ISA support (Raspberry Pi 5 / Cortex-A76, Jetson AGX Orin / Cortex-A78AE), an ARM CPU without it (i.MX8M-Nano / Cortex-A53), an x86 CPU without AVX-512 VNNI (Core i9-10900K), a discrete GPU (RTX 3080), the Jetson AGX Orin's integrated GPU with NVDLA v2 cores, and two vendor NPUs (Qualcomm Hexagon HTP, DEEPX DX-M1). Workloads span ResNet-18/50 and DETR-ResNet-50 (ImageNet/COCO), YOLOv5s and YOLO26n (COCO detection), plus characterization runs on BEVFormer/BEVDet 3D detection models.

The paper reports three findings framed as a warning against assuming "quantize once, deploy anywhere" for embedded and automotive deployment: the direction of the INT8 speedup itself flips depending on whether the core has a dot-product instruction; the same quantized model's top-1 predictions are not guaranteed to match across targets even when both are correctness-conformant; and for output-heavy models, the dominant cost shifts from compute to device-to-host data transfer, changing which model "wins" on which hardware.

## Summary (ZH)

来自韩国汽车技术研究院（KATECH）的 Yuyeong Shin 开展了一项跨平台实测研究，探讨同一个 INT8 量化模型——导出为固定的、内嵌量化尺度的 ONNX 制品后——在不同硬件上运行时是否表现一致。该方法保持 ONNX 计算图与其量化尺度不变，仅改变执行目标，覆盖七类硬件、八个测试目标：具备点积（dot-product）指令集的 ARM CPU（Raspberry Pi 5 / Cortex-A76、Jetson AGX Orin / Cortex-A78AE）、不具备该指令集的 ARM CPU（i.MX8M-Nano / Cortex-A53）、不支持 AVX-512 VNNI 的 x86 CPU（Core i9-10900K）、独立 GPU（RTX 3080）、Jetson AGX Orin 集成 GPU 及其 NVDLA v2 核心，以及两款厂商 NPU（高通 Hexagon HTP、DEEPX DX-M1）。测试负载涵盖 ResNet-18/50 与 DETR-ResNet-50（ImageNet/COCO）、YOLOv5s 与 YOLO26n（COCO 检测），以及在 BEVFormer/BEVDet 三维检测模型上的特性刻画。

论文提出三项发现，对嵌入式与车规部署中「量化一次、随处部署」的假设提出警示：INT8 加速的方向本身会因内核是否具备点积指令而发生反转；即便两个目标都属于「符合规范」的实现，同一量化模型的 Top-1 预测结果也不保证跨平台一致；对于输出体量大的模型，主导开销会从计算转移到「设备到主机」（D2H）的数据传输，从而改变不同硬件上「谁更快」的结论。

## Key technical points (EN)

- **C1 — speedup sign is an ISA property, not a hardware-tier property**: on cores with a dot-product instruction (ARM dotprod/SDOT, x86 AVX-512 VNNI), the identical INT8 model runs 1.83-2.11x faster than FP32; on cores lacking it (an x86 Core i9-10900K without AVX-512 VNNI and a Cortex-A53), the same INT8 model runs 1.65-1.76x SLOWER than FP32, on the identical ONNX Runtime/MLAS CPU runtime.
- **C2 — INT8 agreement is bimodal**: FP32 outputs are bit-identical (1000/1000 top-1 agreement) across every target pair tested. INT8 outputs are also 1000/1000 when two targets share the same integer kernel implementation, but drop to 958-965/1000 when they use different integer kernels — i.e. roughly 3.5-4.2% of inputs produce a different top-1 prediction purely because of which hardware executed the identical quantized artifact, with no change to the model or its scales. The paper stresses top-1 *accuracy* is preserved (the flips are net-neutral), so the divergence is invisible to a standard accuracy report; a CPU-to-vendor-NPU pair diverges further (939/1000) but is reported outside the invariance claim because its scales cannot be held fixed.
- **C4 — output size can dominate over compute**: on the DEEPX DX-M1 NPU, the scaling knob is core count. ResNet-50 (4KB output, compute 2.77ms >> D2H 0.11ms) is compute-bound and scales 2.19x near-linearly on 3 cores; YOLO26n (2.82MB raw head, D2H 21.81ms >> compute 9.0ms) is D2H-bound and scales 1.00x; YOLOv5s (5.48MB output) is worse still at 1.02x despite having the *lightest* compute of the three (2.59ms), and runs 26.3x slower than ResNet-50 (41.01 fps vs 1078.93 fps on three cores). A synthetic fixed-compute sweep (output swept 1020x) traces the transition and puts the single-inference crossover at ~1.05MB of output.
- **Vendor NPU failure modes differ by vendor**: given the same externally-supplied QDQ (quantize-dequantize) graph rather than the vendor's own quantization toolchain, Qualcomm's Hexagon HTP silently collapses accuracy from 0.75 to 0.005 with no error raised, while the DEEPX DX-M1 loudly rejects the same graph with a compiler error.
- The paper's own stated conclusion: per-input determinism and cross-target output agreement cannot be assumed for INT8 embedded/automotive deployment; both the performance direction and the correctness of predictions are target-dependent even when the deployed artifact is byte-identical.

## Key technical points (ZH)

- **C1 —— 加速方向是 ISA 属性，而非硬件档位属性**：在具备点积指令的内核上（ARM dotprod/SDOT、x86 AVX-512 VNNI），同一 INT8 模型相较 FP32 提速 1.83-2.11 倍；而在不具备该指令的内核上（无 AVX-512 VNNI 的 x86 Core i9-10900K 与 Cortex-A53），在同一 ONNX Runtime/MLAS CPU 运行时下，同一 INT8 模型相较 FP32 反而变慢 1.65-1.76 倍。
- **C2 —— INT8 一致性呈双峰分布**：在所有被测目标对中，FP32 输出逐位相同（Top-1 一致率 1000/1000）。当两个目标共享同一整数内核实现时，INT8 输出同样保持 1000/1000 的一致率；但当两者使用不同的整数内核时，一致率降至 958-965/1000——即约有 3.5%-4.2% 的输入，仅因执行硬件不同（模型与量化尺度完全未变）就会得到不同的 Top-1 预测结果。论文强调 Top-1 *准确率* 本身保持不变（翻转在净值上相互抵消），因此该差异在常规精度报告中完全不可见；CPU 与厂商 NPU 之间的差异更大（939/1000），但因其量化尺度无法保持一致，论文将其列在该不变性结论之外。
- **C4 —— 输出体量可能主导开销、压过计算量**：在 DEEPX DX-M1 NPU 上，伸缩的自变量是「核数」。ResNet-50（输出 4KB，计算 2.77ms >> D2H 0.11ms）为计算受限，三核近线性伸缩 2.19 倍；YOLO26n（原始检测头输出 2.82MB，D2H 21.81ms >> 计算 9.0ms）为 D2H 受限，伸缩 1.00 倍；YOLOv5s（输出 5.48MB）更差，仅 1.02 倍，而其计算量恰是三者中*最轻*的（2.59ms），三核下运行速度比 ResNet-50 慢 26.3 倍（41.01 fps 对 1078.93 fps）。论文另以固定计算量、输出扫描 1020 倍的合成实验刻画该转变曲线，单次推理的临界点约在 1.05MB 输出处。
- **不同厂商 NPU 的失效模式各异**：当输入的是外部提供的 QDQ（量化-反量化）计算图，而非厂商自有量化工具链产出的图时，高通 Hexagon HTP 会在不报错的情况下将精度从 0.75 悄然崩塌至 0.005；而 DEEPX DX-M1 面对同样的外部 QDQ 图，则会以编译错误的形式明确拒绝。
- 论文自述的结论：对于 INT8 的嵌入式/车规部署，不能假定「逐输入的确定性」与「跨目标的输出一致性」——即便所部署的制品逐字节相同，性能方向与预测正确性仍取决于具体的执行目标。

## Why it matters / what's new (EN)

Most of this KB's quantization coverage to date measures a single deployment target's speed/memory/energy numbers. This paper instead holds the deployed artifact fixed and varies only the hardware, which converts "does quantization help" into "does the SAME quantized model behave the same way everywhere" — and answers no, on three independent axes (speed direction, prediction agreement, and which resource actually bottlenecks). The bimodal INT8 agreement finding is the most load-bearing one for the KB's edge-model-efficiency bin: it shows a quantized model can silently produce a different classification on different hardware even when nothing about the model or its exported scales has changed, which is a correctness concern distinct from the usual accuracy-vs-compression trade-off this bin otherwise tracks. The vendor-NPU section is a concrete, source-stated illustration of the "vendor NPUs require proprietary quantization paths" problem this domain has been circling since the intel-amd-client-ai and local-inference-runtimes sources first surfaced it.

## Why it matters / what's new (ZH)

本知识库此前收录的量化相关条目大多测量单一部署目标上的速度/内存/能耗数据。而本文保持部署制品不变、只改变硬件，把「量化是否有帮助」这一问题，转变为「同一个量化模型是否在所有平台上表现一致」——答案是否定的，且体现在三个相互独立的维度上（加速方向、预测一致性，以及真正的瓶颈资源）。其中「INT8 一致性呈双峰分布」这一发现，对知识库的「模型压缩与量化」分类而言最具分量：它表明，即便模型本身与其导出的量化尺度完全未变，同一量化模型仍可能在不同硬件上悄然给出不同的分类结果——这是一个区别于该分类通常关注的「精度-压缩率权衡」的、更根本的正确性问题。文中关于厂商 NPU 的部分，则为「厂商 NPU 需要专属量化路径」这一问题提供了一个具体的、源自论文本身陈述的例证——这一问题此前已由 intel-amd-client-ai 与 local-inference-runtimes 等信源多次触及。

## Images

*(No redistributable images for this entry — the paper's figures are inline vector/SVG bar and scatter plots rendered directly in the arXiv HTML, not standalone raster images with a stable file path.)*
