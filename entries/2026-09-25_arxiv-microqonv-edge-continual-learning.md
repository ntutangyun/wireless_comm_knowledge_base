---
id: 2026-09-25_arxiv-microqonv-edge-continual-learning
date_published: 2026-09-23
date_found: 2026-09-25
type: academic-paper
technology: edge-ai
title_en: "MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling in Training and Inference"
title_zh: "MicroQonv：为高效微缩放（microscaling）重塑卷积张量的训练与推理方案"
url: "https://arxiv.org/abs/2609.28358"
source_quality: full
topics: [microscaling, FP4, quantization, continual-learning, im2col, convolution]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

Researchers at Univ Rennes / Inria / CNRS / IRISA (France) tackle a specific inefficiency in applying microscaling quantization formats (e.g. NVFP4 — FP4 elements with FP8 block scales) to convolutional layers. Because a convolution's weight, activation, and gradient tensors each participate in matrix multiplications along different computational directions during the forward and backward passes, standard microscaling implementations end up quantizing the same tensor twice — once per direction — since microscaling's quantization blocks must align with the dot-product direction. Worse, the im2col transformation that convolutional layers typically use to convert convolutions into matrix multiplications expands activation tensors by a factor of Kh x Kw (kernel height x width), forcing systems to either keep full-precision copies around for the backward pass or store the already-expanded quantized version — both of which move far more data than necessary.

MicroQonv's fix is a "channel-batch-first im2col" tensor layout that keeps channel and batch dimensions contiguous at each spatial location, so both the forward pass (which reads along channels) and the backward pass (which reads along the batch dimension) can access the same underlying quantized layout without transposition, and so the tensor needs to be quantized only once, before the im2col expansion, rather than twice. Validated with DRAMsim3 memory-system simulation (LPDDR4/DDR5/DDR6/HBM), this cuts activation memory movement by up to 7.53x versus a full-precision-storing baseline (Dacapo) and by 3.5x/2.2x on YOLOv8nano/YOLO26nano versus a prior double-quantization approach (Cuyckens et al.), while keeping accuracy within roughly ~0.5 points of full precision on ImageNet-100/CIFAR-100 classification and staying within ~0.2 mAP50 of FP32 on PASCAL VOC and slightly above it on KITTI (fine-tuning) object detection at FP8. The most striking result is in continual learning at the edge: using MicroQonv's memory savings to store a larger 4-bit "latent replay" buffer of past examples (rather than a smaller 8-bit quantized one) lifts accuracy by +5.7% to +11% on CIFAR-100, +4.8% to +9.4% on CORE50, and +9.6% to +16.7% on CUB-200 versus a standard quantized-latent-replay baseline — because the buffer can now hold roughly 2.5x more replay samples per byte.

## Summary (ZH)

法国雷恩大学 / Inria / CNRS / IRISA 的研究者解决了将微缩放（microscaling）量化格式（例如 NVFP4——FP4 元素配合 FP8 区块缩放因子）应用于卷积层时的一个具体低效问题。由于卷积层的权重、激活值和梯度张量在前向和反向传播中分别沿不同的计算方向参与矩阵乘法，标准的微缩放实现最终会对同一个张量量化两次——每个方向各一次——因为微缩放的量化区块必须与点积方向对齐。更糟的是，卷积层通常用来把卷积转换为矩阵乘法的 im2col 变换，会将激活张量按 Kh×Kw（卷积核高×宽）的倍数展开，迫使系统要么为反向传播保留全精度副本，要么存储已经展开过的量化版本——这两种做法都会搬运远超必要的数据量。

MicroQonv 的解决方案是一种"通道-批次优先的 im2col"张量布局，让通道维度和批次维度在每个空间位置上保持连续存放，使前向传播（沿通道读取）与反向传播（沿批次维度读取）都能在不做转置的情况下访问同一份底层量化布局，因此张量只需要在 im2col 展开之前量化一次，而不是两次。通过 DRAMsim3 内存系统仿真（LPDDR4/DDR5/DDR6/HBM）验证，相较于保留全精度存储的基线方法（Dacapo），该方案将激活值内存搬运量最多降低 7.53 倍；相较于此前的双重量化方法（Cuyckens 等人），在 YOLOv8nano/YOLO26nano 上分别降低 3.5 倍/2.2 倍，同时在 ImageNet-100/CIFAR-100 分类任务上精度仅与全精度相差约 0.5 个百分点以内，FP8下PASCAL VOC上mAP50与全精度相差约0.2，KITTI（微调）上略高于全精度。最引人注目的结果出现在边缘持续学习场景：利用 MicroQonv 节省下来的内存去存储更大规模的 4 比特"潜在回放（latent replay）"历史样本缓冲区（而非较小的8比特量化缓冲区），相较标准的量化潜在回放基线，在 CIFAR-100 上精度提升 5.7%～11%，在 CORE50 上提升 4.8%～9.4%，在 CUB-200 上提升 9.6%～16.7%——原因是该缓冲区现在每字节可存放约 2.5 倍的回放样本。

## Key technical points (EN)

- Identifies and fixes a specific double-quantization inefficiency in applying microscaling formats (NVFP4/NVFP6/NVFP8) to convolutional layers, caused by weight/activation/gradient tensors needing different computational directions in forward vs. backward passes.
- "Channel-batch-first im2col" layout enables single-pass quantization before im2col expansion, contiguous in both forward and backward read directions.
- Up to 7.53x activation memory-movement reduction vs. full-precision-storing baseline (Dacapo), 3.5x/2.2x vs. prior double-quantization work on YOLOv8nano/YOLO26nano, measured via DRAMsim3 across LPDDR4/DDR5/DDR6/HBM memory models.
- Near-lossless accuracy at 4-bit (FP4) on image classification (ResNet-32/CIFAR-100, ResNet-18/ImageNet-100); at FP8 on object detection, within ~0.2 mAP50 of FP32 on YOLOv8nano/PASCAL VOC and slightly above it on YOLO26nano/KITTI (fine-tuning).
- Headline continual-learning result: a larger 4-bit latent-replay buffer (enabled by the memory savings) lifts accuracy 4.8-16.7 percentage points across CIFAR-100/CORE50/CUB-200 versus a standard quantized-replay baseline, at ~2.5x more replay samples per byte.

## Key technical points (ZH)

- 识别并修复了将微缩放格式（NVFP4/NVFP6/NVFP8）应用于卷积层时的一种特定"双重量化"低效问题，其根源在于权重/激活值/梯度张量在前向与反向传播中需要沿不同计算方向读取。
- "通道-批次优先的 im2col"布局使张量能够在 im2col 展开之前一次性完成量化，且在前向与反向读取方向上均保持内存连续。
- 相较保留全精度存储的基线方法（Dacapo），激活值内存搬运量最多降低 7.53 倍；相较此前的双重量化方法，在 YOLOv8nano/YOLO26nano 上分别降低 3.5 倍/2.2 倍，通过 DRAMsim3 在 LPDDR4/DDR5/DDR6/HBM 多种内存模型上测得。
- 在图像分类（ResNet-32/CIFAR-100、ResNet-18/ImageNet-100）上实现 4 比特（FP4）几乎无损精度；FP8下目标检测中，YOLOv8nano/PASCAL VOC上mAP50与全精度相差约0.2，YOLO26nano/KITTI（微调）上略高于全精度。
- 最突出的结果来自持续学习场景：借助内存节省实现的更大规模 4 比特潜在回放缓冲区，相较标准量化回放基线，在 CIFAR-100/CORE50/CUB-200 上分别带来 4.8～16.7 个百分点的精度提升，每字节可存储约 2.5 倍的回放样本。

## Why it matters / what's new (EN)

Most quantization entries in this KB's edge-model-efficiency bin target inference-time deployment of already-trained models; MicroQonv is unusual in targeting training-time and continual-learning efficiency at the edge — the scenario where a cloud-trained model keeps adapting on the device to its own environment. Its continual-learning result is the most concrete edge-relevant number: a memory-layout and quantization-order change with negligible accuracy cost translates directly into a double-digit percentage-point accuracy gain simply by letting the device remember more of its own history, which is a distinct mechanism from the accuracy-vs-speed trade-offs (e.g. today's RAMP entry) that dominate this bin.

## Why it matters / what's new (ZH)

知识库 edge-model-efficiency 分类下的量化类条目大多针对已训练模型的推理期部署；MicroQonv 的特别之处在于聚焦训练期与边缘持续学习的效率——即云端训练的模型在设备上持续适应其所处环境的场景。其持续学习结果是最具边缘现实意义的一个数字：一项精度损失可忽略的内存布局与量化顺序改动，仅仅通过让设备"记住"更多自身历史数据，就直接转化为两位数百分点的精度提升——这与本分类中占主导地位的精度-速度权衡类工作（例如本次同批的 RAMP 条目）是截然不同的机制。
