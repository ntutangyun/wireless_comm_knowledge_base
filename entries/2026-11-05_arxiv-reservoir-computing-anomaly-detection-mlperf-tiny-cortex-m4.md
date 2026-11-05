---
id: 2026-11-05_arxiv-reservoir-computing-anomaly-detection-mlperf-tiny-cortex-m4
date_published: 2026-11-03
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "Anomaly Detection on Resource-Constrained Devices with Reservoir Computing: a 24 KB model at 0.32 ms on a Cortex-M4F"
title_zh: "基于储备池计算的资源受限设备异常检测：Cortex-M4F 上 24 KB 模型、0.32 ms 延迟"
url: "https://arxiv.org/abs/2611.04835"
source_quality: full
topics: [TinyML, reservoir-computing, anomaly-detection, MLPerf-Tiny, microcontroller, NUCLEO-F401RE]
topic_primary: edge-model-efficiency
topics_secondary: [edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

The paper studies the Mahalanobis Distance of Reservoir States (MDRS), an unsupervised time-series anomaly detector, for microcontroller deployment and proposes two optimisations. First, random reservoir connectivity (MDRS-Rand) is replaced by a circular shift (MDRS-Circ). Second, the anomaly score for an entire series is computed from the final reservoir state alone ("end-only" score), and the reservoir's temporal memory is used to make input preprocessing cheaper. Evaluation is on the MLPerf Tiny anomaly-detection benchmark against the reference autoencoder and other detectors; the inference kernels are then deployed on an STM32 NUCLEO-F401RE (Cortex-M4F) to measure latency, estimated energy and flash footprint.

Of the evaluated methods, only MDRS and the autoencoder meet the benchmark's performance target, and MDRS needs fewer operations and smaller models. With optimised preprocessing MDRS reaches ROC AUC 0.869, a 24 KB model, an estimated 24 uJ per inference and 0.32 ms latency, which the authors state is a 75.9x speedup over the autoencoder with standard preprocessing.

## Summary (ZH)

论文研究将无监督时间序列异常检测器"储备池状态的马氏距离"（MDRS）部署到微控制器上，并提出两项优化：其一，用循环移位（MDRS-Circ）取代随机储备池连接（MDRS-Rand）；其二，仅用最终储备池状态计算整条序列的异常得分（"仅末端"得分），并利用储备池的时间记忆让输入预处理更省算力。评测在 MLPerf Tiny 异常检测基准上与参考自编码器及其他检测器对比；推理内核随后部署到 STM32 NUCLEO-F401RE（Cortex-M4F）上，测量延迟、估算能耗与闪存占用。

在被评估的方法中，只有 MDRS 与自编码器达到基准的性能目标，而 MDRS 所需运算更少、模型更小。经预处理优化后，MDRS 的 ROC AUC 为 0.869，模型 24 KB，估算每次推理能耗 24 uJ，延迟 0.32 ms；作者称相对采用标准预处理的自编码器加速 75.9 倍。

## Key technical points (EN)

- **On-board table (NUCLEO-F401RE, median of 21 runs)**: MDRS-Rand per-step 1.10 ms, 82 uJ, 40 KB, AUC 0.843; MDRS-Rand end-only 0.70 ms, 53 uJ, AUC 0.868; MDRS-Circ per-step 0.72 ms, 54 uJ, 24 KB, AUC 0.843; MDRS-Circ end-only 0.32 ms, 24 uJ, 24 KB, AUC 0.869.
- **Where the savings come from**: the circular shift removes a matrix-vector product (cycles down 34.6%, flash 40 to 24 KB); the end-only score removes a per-window quadratic form (cycles down 36.1%); together cycles fall 70.7%.
- **Measurement basis**: following MLPerf Tiny, only inference kernels run on the board; energy is execution time times datasheet run-mode power (22.6 mA at 3.3 V), so it is an estimate, not a rail measurement.
- **Iso-hardware comparison**: because published MLPerf Tiny submissions use different MCUs and clocks, the authors ported the INT8 autoencoder to the same board for the comparison.

## Key technical points (ZH)

- **板载结果（NUCLEO-F401RE，21 次运行取中位数）**：MDRS-Rand 逐步聚合 1.10 ms、82 uJ、40 KB、AUC 0.843；MDRS-Rand 仅末端 0.70 ms、53 uJ、AUC 0.868；MDRS-Circ 逐步聚合 0.72 ms、54 uJ、24 KB、AUC 0.843；MDRS-Circ 仅末端 0.32 ms、24 uJ、24 KB、AUC 0.869。
- **节省来源**：循环移位省去一次矩阵向量乘（周期降 34.6%，闪存 40 降至 24 KB）；仅末端得分省去逐窗口的二次型（周期降 36.1%）；两者合计周期降低 70.7%。
- **测量口径**：遵循 MLPerf Tiny，仅推理内核在板上运行；能耗为执行时间乘以数据手册运行模式功率（3.3 V 下 22.6 mA），属估算而非电源轨实测。
- **同硬件对比**：由于已发布的 MLPerf Tiny 提交使用不同的 MCU 与时钟，作者把 INT8 自编码器移植到同一块板上做对比。

## Why it matters / what's new (EN)

The contribution is an algorithmic route to very small anomaly detectors on a Cortex-M4F-class part, backed by on-board latency and memory numbers and an iso-hardware baseline rather than cross-board comparisons. Caveats from the paper's setup: energy is estimated from datasheet current, the task is one MLPerf Tiny benchmark, and feature extraction runs off-board. It is a v1 preprint.

## Why it matters / what's new (ZH)

贡献在于为 Cortex-M4F 级器件提供一条算法路径，得到极小的异常检测器，并以板载延迟与内存数据及同硬件基线支撑，而非跨板比较。论文设置带来的局限：能耗按数据手册电流估算，任务仅为一个 MLPerf Tiny 基准，特征提取在板外进行。这是 v1 预印本。

## Images

None.
