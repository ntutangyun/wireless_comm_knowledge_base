---
id: 2026-10-23_arxiv-benchmarking-model-compression-nine-edge-platforms-predictive-maintenance
date_published: 2026-10-21
date_found: 2026-10-23
technology: edge-ai
type: academic-paper
title_en: "Benchmarking four model compression techniques across nine heterogeneous platforms for rotating-machinery predictive maintenance"
title_zh: "在九种异构平台上对旋转机械预测性维护的四种模型压缩技术进行基准测试"
url: "https://arxiv.org/abs/2610.30228"
source_quality: full
topics: [model-compression, knowledge-distillation, edge-inference, benchmarking, predictive-maintenance, microcontrollers, Jetson, Raspberry-Pi]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 2
---

## Summary (EN)

The paper compares four model compression techniques applied to a high-performance convolutional neural network for predictive maintenance, using a real-world rotating-machinery dataset (1,810 test samples). The motivation is that industrial edge environments are hardware-fragmented, compression degrades performance, and there is little guidance on which techniques are practical for this application.

The compressed models are evaluated on nine computing platforms spanning constrained to high-performance hardware: a desktop (Intel Core i5-10400F), a laptop (Core i5-11300H), an HPC node (Xeon Gold 6148), microcontrollers (Arduino Nano 33 BLE Sense and STM32H7A3), and edge devices (Jetson Nano, Jetson Orin Nano, Raspberry Pi 4B and STM32MP157F-DK2), with some multi-core CPU runs. Most platforms ran Python code; the STM32H7A3 used STM32CubeIDE and the Arduino used the model converted to a C header array. TensorFlow Lite lacks native CUDA support, which the authors note affected how Jetson GPUs were handled. Models are compared jointly on classification performance, inference speed and compression ratio.

The authors report that knowledge distillation was the most effective of the four techniques: more than 90% speedup across all devices, a 91.22% balanced F-score with a small drop relative to the uncompressed model, and a 98.9% size reduction.

## Summary (ZH)

论文比较了四种模型压缩技术在一个用于预测性维护的高性能卷积神经网络上的效果，使用真实的旋转机械数据集（测试集 1,810 个样本）。动机在于：工业边缘环境硬件碎片化，压缩会降低性能，并且缺少关于哪些技术适用于该应用的清晰指引。

压缩后的模型在九种计算平台上评估，覆盖从受限到高性能的硬件：台式机（Intel Core i5-10400F）、笔记本（Core i5-11300H）、HPC 节点（Xeon Gold 6148）、微控制器（Arduino Nano 33 BLE Sense 与 STM32H7A3），以及边缘设备（Jetson Nano、Jetson Orin Nano、树莓派 4B 和 STM32MP157F-DK2），部分平台还做了多核 CPU 运行。多数平台运行 Python 代码；STM32H7A3 使用 STM32CubeIDE，Arduino 则把模型转换为 C 头文件数组。作者指出 TensorFlow Lite 不原生支持 CUDA，这影响了 Jetson GPU 的处理方式。模型在分类性能、推理速度和压缩比三方面联合比较。

作者报告，知识蒸馏是四种技术中最有效的：所有设备上加速超过 90%，平衡 F 分数 91.22%，相对未压缩模型下降很小，模型体积减小 98.9%。

## Key technical points (EN)

- Workload: a single CNN for rotating-machinery predictive maintenance; 1,810 test samples run on every platform.
- Platform spread: three x86 hosts, two microcontrollers (Cortex-M4 at 64 MHz with 256 KB, Cortex-M7 at 280 MHz with 1.4 MB), and edge boards including Jetson Nano and Orin Nano and Raspberry Pi 4B.
- Toolchain differences per platform (Python, STM32CubeIDE, Arduino C array, TFLite versus CUDA) are part of the finding on how hard cross-platform adaptation is.
- Result: distillation gave more than 90% speedup on all devices, 91.22% balanced F-score and a 98.9% size reduction; the other three are post-training quantisation variants (full int8 QI8, dynamic-range int8 QDRI8, float16 QF16); the authors report KD as the only technique that reduced inference time on every device, while QF16 was slower than the uncompressed baseline on almost all platforms.
- Scope: one model and one dataset; the ranking may not carry to other tasks.

## Key technical points (ZH)

- 工作负载：一个用于旋转机械预测性维护的 CNN；每个平台都运行 1,810 个测试样本。
- 平台跨度：三台 x86 主机、两种微控制器（64 MHz、256 KB 的 Cortex-M4，以及 280 MHz、1.4 MB 的 Cortex-M7），以及包括 Jetson Nano、Orin Nano 和树莓派 4B 在内的边缘板卡。
- 各平台工具链差异（Python、STM32CubeIDE、Arduino C 数组、TFLite 与 CUDA）本身也说明跨平台适配的难度。
- 结果：蒸馏在所有设备上加速超过 90%，平衡 F 分数 91.22%，体积减小 98.9%；另外三种为训练后量化变体（全整型 int8 QI8、动态范围 int8 QDRI8、float16 QF16）；作者报告 KD 是唯一在所有设备上都降低推理时间的技术，而 QF16 在几乎所有平台上都比未压缩基线更慢。
- 范围：仅一个模型和一个数据集；排序未必适用于其他任务。

## Why it matters / what's new (EN)

The authors' comparison with related work (their Table 4) reports that this study uses more devices and a broader diversity of edge hardware, including microcontrollers, than the works they compare against. The finding is specific to one industrial CNN, so it is a data point on cross-platform compression rather than a general ranking.

## Why it matters / what's new (ZH)

作者在与相关工作的对比（表 4）中称，本研究使用的设备数量更多、边缘硬件（含微控制器）更多样。该结论针对一个工业 CNN，因此是跨平台压缩的一个数据点，而非通用排名。

## Images

*(No redistributable images for this entry.)*
