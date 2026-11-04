---
id: 2026-11-04_arxiv-tinyml-memory-wall-benchmark-ten-sub-watt-edge-devices
date_published: 2026-11-02
date_found: 2026-11-04
technology: edge-ai
type: academic-paper
title_en: "TinyML Hits the Memory Wall: A Benchmark of Ten Sub-Watt Edge Devices"
title_zh: "TinyML 撞上内存墙：十款亚瓦级边缘设备的基准测试"
url: "https://arxiv.org/abs/2611.03392"
source_quality: full
topics: [TinyML, microcontroller-NPU, energy-benchmark, memory-bound, Alif-Ensemble, STM32N6, GAP9, IMX500]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency, on-device-inference]
novelty_score: 3
---

## Summary (EN)

The paper benchmarks neural-network inference on ten commercial sub-watt devices from five architecture classes: an in-sensor DSP (Sony IMX500), four microcontrollers with an NPU (STM32N6, Alif Ensemble E7 and E8, GreenWaves GAP9) and five microcontrollers without one (STM32U5, Apollo510B, ESP32-S3 Xtensa LX7, RA8M2, STM32V8). Four of the devices (Alif E8, Apollo510B, RA8M2, STM32V8) are described as newly measured. Workloads are four CNNs (MobileNetV3, MCUNetV1, EfficientNet, SqueezeNet, 64x64 EuroSAT inputs) and two tiny transformers (DeiT-tiny, MobileViT-XXS, run only on the Alif E8 and IMX500), all INT8-quantised with each vendor's own toolchain, with unsupported models reported as missing rather than modified.

Energy is reported as energy above idle (mean power minus idle power, times inference time), measured on-device with a Nordic PPK2, a Keysight N6705C or a Raspberry Pi 5 power monitor depending on the board. The IMX500 uses 0.13-0.35 mJ per inference and the STM32N6 0.31-1.05 mJ; the four accelerators use 6-34x less energy than the STM32V8 (1.85-3.98 mJ). The Alif E7 and IMX500 form the power-performance Pareto front. Per-device power-law fits of latency against MACs and against bytes of weights and activations find that latency on all four accelerators tracks memory traffic (r >= 0.98) and not MAC count, while the microcontrollers without an NPU are not memory-bound in the same sense.

## Summary (ZH)

论文在十款商用亚瓦级设备上对神经网络推理做基准测试，涵盖五类架构：传感器内 DSP（索尼 IMX500）、四款带 NPU 的微控制器（STM32N6、Alif Ensemble E7 与 E8、GreenWaves GAP9）和五款不带 NPU 的微控制器（STM32U5、Apollo510B、ESP32-S3 Xtensa LX7、RA8M2、STM32V8）。其中四款（Alif E8、Apollo510B、RA8M2、STM32V8）被论文描述为新测量的设备。负载为四个 CNN（MobileNetV3、MCUNetV1、EfficientNet、SqueezeNet，64x64 的 EuroSAT 输入）和两个小型 Transformer（DeiT-tiny、MobileViT-XXS，仅在 Alif E8 与 IMX500 上运行），均使用各厂商自身工具链做 INT8 量化；不受支持的模型按"缺失"报告，而不是被修改。

能耗以"高于空闲的能量"（平均功率减空闲功率再乘以推理时间）报告，依板卡不同用 Nordic PPK2、Keysight N6705C 或树莓派 5 电源监测器在设备上实测。IMX500 每次推理 0.13-0.35 mJ，STM32N6 为 0.31-1.05 mJ；四款加速器的能耗比 STM32V8（1.85-3.98 mJ）低 6-34 倍。Alif E7 与 IMX500 构成功耗-性能帕累托前沿。对每台设备做的延迟对 MAC 数、以及对权重与激活字节数的幂律拟合表明，四款加速器的延迟跟随内存流量（r >= 0.98）而非 MAC 数；不带 NPU 的微控制器则不属于同样意义上的内存受限。

## Key technical points (EN)

- **Method**: identical models and inputs on all devices; INT8 via each vendor toolchain (Arm Vela, GAP SDK, ST Edge AI Core, Model Compression Toolkit, TFLite Micro and others); median latency from cycle counters, hardware timers or GPIO pulses.
- **Latency examples (ms)**: MobileNetV3 on IMX500 1.0, GAP9 3.3, Alif E7 4.4, STM32N6 4.8, STM32U5 140.7; SqueezeNet on IMX500 0.7, Alif E7 2.5, STM32N6 3.3, Xtensa LX7 130.0. DeiT-tiny runs in 174 ms on the Alif E8 and 15.7 ms on the IMX500.
- **Memory-bound classification**: IMX500, STM32N6, Alif E7 and GAP9 have latency-vs-bytes exponents near 1 with r from 0.98 to 1.00; STM32V8, RA8M2 and STM32U5 track MACs; Xtensa LX7 and Apollo510B are mixed.
- **Counter-intuitive example**: SqueezeNet has 8.5x the MACs of MobileNetV3 yet runs 1.8x faster on the Alif E7, because it moves less memory (1.22 vs 1.76 MB).
- **NPU advantage**: 1.4x over a 1 GHz Cortex-M85 (RA8M2) on MCUNetV1, growing to 8.2x on SqueezeNet.
- **Stated limits**: TinyML-scale CNNs at 64x64 only; traffic Q is a lower bound; fits use 3-4 points per device; supply domains differ across boards; no code or data repository is referenced. EfficientNet (3.97 MB weights) does not fit the STM32V8's 4 MB NVM.

## Key technical points (ZH)

- **方法**：所有设备使用相同模型与输入；各厂商工具链做 INT8（Arm Vela、GAP SDK、ST Edge AI Core、Model Compression Toolkit、TFLite Micro 等）；延迟取周期计数器、硬件定时器或 GPIO 脉冲的中位数。
- **延迟示例（ms）**：MobileNetV3 在 IMX500 为 1.0、GAP9 为 3.3、Alif E7 为 4.4、STM32N6 为 4.8、STM32U5 为 140.7；SqueezeNet 在 IMX500 为 0.7、Alif E7 为 2.5、STM32N6 为 3.3、Xtensa LX7 为 130.0。DeiT-tiny 在 Alif E8 上 174 ms，在 IMX500 上 15.7 ms。
- **内存受限分类**：IMX500、STM32N6、Alif E7 与 GAP9 的延迟对字节数指数接近 1，r 为 0.98 至 1.00；STM32V8、RA8M2 与 STM32U5 跟随 MAC 数；Xtensa LX7 与 Apollo510B 为混合。
- **反直觉示例**：SqueezeNet 的 MAC 数是 MobileNetV3 的 8.5 倍，在 Alif E7 上却快 1.8 倍，因为它搬运的内存更少（1.22 对 1.76 MB）。
- **NPU 优势**：在 MCUNetV1 上相对 1 GHz Cortex-M85（RA8M2）为 1.4 倍，在 SqueezeNet 上增至 8.2 倍。
- **论文所述局限**：仅限 TinyML 规模、64x64 的 CNN；流量 Q 为下界；每台设备拟合仅 3-4 个点；各板供电域不同；未提及代码或数据仓库。EfficientNet（3.97 MB 权重）装不进 STM32V8 的 4 MB NVM。

## Why it matters / what's new (EN)

The paper's conclusion is that MAC count is a misleading cost proxy for sub-watt accelerators on these workloads, and it argues that architecture search and compression for NPU targets should minimise memory traffic rather than MACs. The value to the knowledge base is a common-basis latency and energy table across ten named parts, including recent microcontroller NPUs that, according to the authors, earlier benchmarks omit. Caveats are the authors' own: small models, small input size, few points per fit, and measurement rails that differ across boards. It is a v1 preprint from ETH Zurich-led authors.

## Why it matters / what's new (ZH)

论文的结论是：对这些负载而言，MAC 数对亚瓦级加速器是具有误导性的成本代理，并主张面向 NPU 目标的架构搜索与压缩应最小化内存流量而非 MAC。对知识库的价值在于一张十款具名器件、统一口径的延迟与能耗表，其中包括作者称早期基准遗漏的近期微控制器 NPU。局限由作者自述：模型小、输入尺寸小、每次拟合点数少，且各板测量电源轨不同。这是 v1 预印本，作者以苏黎世联邦理工学院为主。

## Images

None.
