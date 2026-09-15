---
id: 2026-09-15_arxiv-npu-hardware-evaluation-v1-edge-accelerators
date_published: 2026-07-22
date_found: 2026-09-15
type: academic-paper
technology: edge-ai
title_en: "NPU Hardware Evaluation v1.0"
title_zh: "NPU 硬件评测 v1.0"
url: "https://arxiv.org/abs/2609.13166"
source_quality: full
topics: [edge-ai-silicon, NPU, benchmark, quantization, TOPS]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

This white paper, from Davide Baltieri and Tobia Peruzzi of Covision Lab (Bressanone, Italy), is a company benchmark and adoption-guidance report — not an independent or vendor-neutral third-party measurement; it pairs its benchmark data with explicit per-platform adoption recommendations (a "decision criteria for NPU adoption" table and platform-strengths/weaknesses calls). It covers eleven edge AI inference accelerators, plus an NVIDIA RTX A5000 GPU with TensorRT as the reference baseline, spanning three hardware categories: ASIC NPUs (Hailo-8, Hailo-10H, Axelera Metis, Axelera Europa, EdgeCortix Sakura II), SoC DSPs (SiMa MLSoC, Qualcomm QCS6490, QCS8550, Dragonwing IQ-9075), and integrated NPUs (Intel Lunar Lake / Core Ultra Series 2, AMD XDNA2 / Ryzen AI 300 series). Of these eleven, only six had actually been benchmarked as of this v1.0 release: Hailo-8, Axelera Metis, EdgeCortix Sakura II, and the three Qualcomm Dragonwing/QCS SoCs. Hailo-10H, Intel Lunar Lake, and AMD XDNA2 evaluation was still in progress, Axelera Europa hardware was not yet available, and the SiMa MLSoC was not benchmarked because its SDK only exposed a GStreamer-pipeline interface incompatible with the paper's tensor-level (raw blob in/out) benchmarking harness. The twelve reference vision models used, from the PyTorch Image Models (timm) library — the ResNet family (18/34/50/101), ResNeXt-101, EfficientNet-B0, MobileNetV3-Small, MobileNetV4-Conv-S, MNASNet-0.75, ConvNeXt-Tiny, ViT-Tiny, and Tiny-ViT-5M — are run through each benchmarked platform's own SDK and quantization/optimization pipeline, then measured for throughput, single-stream latency, model-compatibility rate, and SDK/toolchain maturity; the power figures reported are vendor datasheet "Typical Power" specifications rather than draw independently measured by the authors.

The paper's own framing is explicit that peak advertised throughput is rarely the binding constraint in practice: what actually determines real-world performance on a given platform is how well its SDK's quantization, sparsification and pruning pipeline handles a given model architecture — which is why the paper devotes a full section to quantization, sparsification, and pruning techniques before presenting any benchmark results, rather than treating model optimization as a post-hoc footnote to a throughput leaderboard.

## Summary (ZH)

本白皮书作者为意大利布雷萨诺内 Covision Lab 的 Davide Baltieri 与 Tobia Peruzzi，性质是一份企业评测与选型建议报告——并非独立、不偏向厂商的第三方实测；报告将实测数据与明确的分平台采购建议并列呈现（一张「NPU 采购决策准则」表以及逐平台的优劣势结论）。评测覆盖十一款边缘 AI 推理加速器（另以搭载 TensorRT 的 NVIDIA RTX A5000 GPU 作为参考基线），涵盖三类硬件：ASIC NPU（Hailo-8、Hailo-10H、Axelera Metis、Axelera Europa、EdgeCortix Sakura II）、SoC DSP（SiMa MLSoC、高通 QCS6490、QCS8550、Dragonwing IQ-9075），以及集成 NPU（Intel Lunar Lake / Core Ultra 第二代、AMD XDNA2 / Ryzen AI 300 系列）。在这十一款中，截至本 v1.0 版本实际完成实测的仅有六款：Hailo-8、Axelera Metis、EdgeCortix Sakura II，以及三款高通 Dragonwing/QCS SoC。Hailo-10H、Intel Lunar Lake 与 AMD XDNA2 的评测仍在进行中，Axelera Europa 硬件尚未到位，而 SiMa MLSoC 因其 SDK 仅提供基于 GStreamer 的管线接口、与论文所用的张量级（raw blob in/out）测试框架不兼容，故未纳入实测。评测所用的十二个参考视觉模型，均来自 PyTorch Image Models（timm）库——ResNet 系列（18/34/50/101）、ResNeXt-101、EfficientNet-B0、MobileNetV3-Small、MobileNetV4-Conv-S、MNASNet-0.75、ConvNeXt-Tiny、ViT-Tiny 与 Tiny-ViT-5M——分别经由各受测平台自有 SDK 的量化/优化流程运行，测量吞吐量、单流延迟、模型兼容率以及 SDK/工具链成熟度；文中给出的功耗数字为厂商数据手册标注的「典型功耗」规格值，而非作者独立实测所得。

论文明确指出，实际场景中宣传的峰值吞吐往往并非真正的瓶颈；真正决定某一平台实际表现的，是其 SDK 的量化、稀疏化与剪枝流程对特定模型结构的适配能力——这也是论文在给出评测结果之前，先用完整一节系统介绍量化、稀疏化与剪枝技术的原因，而非将模型优化当作评测结果之后的附带说明。

## Key technical points (EN)

- **Multi-stream / multi-chip throughput** (where pipelining or multi-chip cards apply): Hailo-8 reaches near-6x scaling on a single chip across six concurrent jobs (35,684 FPS on MobileNetV4-Conv-S at 6 streams, vs. 5,299 FPS single-stream for the A5000 baseline on the same model). Axelera Metis's figure is multi-chip, not multi-stream: a quad-chip PCIe card scales near-linearly to 4,622 FPS on MNASNet-0.75, vs. 1,156 FPS on a single chip.
- **Single-stream latency**: the A5000 baseline still wins outright at small-batch latency — 0.20 ms on ResNet-18 vs. 1.20 ms (Hailo-8) and 1.8 ms (Axelera Metis); the Qualcomm Dragonwing IQ-9075 sits in the middle at 0.50 ms.
- **Power efficiency**: the paper's "35-70% lower power at comparable throughput" headline is cited from an external study (Kim et al., MDPI Systems, 2025), not independently measured in this paper. The wattages given for the evaluated NPUs/DSPs are vendor datasheet "Typical Power" specs, not measured draw — e.g. Hailo-8 is spec'd at 2.5 W and Axelera Metis at 8-15 W, against the A5000's 230 W TDP, a gap far larger than the cited 35-70% range.
- **Model compatibility**: the A5000/TensorRT baseline compiles and runs all 12 reference models; the Qualcomm DSP tier manages 11-12 of 12 (MobileNetV3 fails on QCS8550). Compatibility varies by specific ASIC NPU rather than as one "ASIC tier" figure: Hailo-8 fails on 4 of 12 (ConvNeXt-Tiny, EfficientNet-B0, MobileNetV3-Small, Tiny-ViT-5M) but succeeds on the other 8, including ViT-Tiny (94 FPS); Axelera Metis fails on 6 of 12 (the Hailo-8 set plus ResNeXt-101 and ViT-Tiny), succeeding on only 6; EdgeCortix Sakura II fails on 4 of 12 (ConvNeXt-Tiny, EfficientNet-B0, ViT-Tiny, Tiny-ViT-5M) but succeeds on MobileNetV3-Small, where both Hailo-8 and Metis fail. The paper's own text claims "all three ASIC NPUs" consistently fail on transformer models, but its own data contradicts this — Hailo-8 runs ViT-Tiny successfully.
- **Overall picture**: Axelera Metis has the highest peak rated throughput among the three ASIC NPUs actually benchmarked (214 INT8 TOPS) with near-linear multi-chip scaling — though Axelera's own Europa chip, not yet benchmarked, is spec'd higher at 629 TOPS. Among the three benchmarked ASIC NPUs, only Sakura II lists BF16 support (a datasheet spec), and it is the one that succeeds on MobileNetV3-Small where Hailo-8 and Metis both fail. Hailo-10H, Intel Lunar Lake, and AMD XDNA2 integrated-NPU benchmarks are reported as still pending in this v1.0 release, as is Axelera Europa (hardware unavailable) and SiMa MLSoC (SDK incompatible with the paper's benchmarking harness). The GPU baseline retains full model coverage, the lowest single-stream latency, and the most mature toolchain, at the cost of an order of magnitude more (datasheet) power draw.

## Key technical points (ZH)

- **多流/多芯片吞吐**（适用于可流水线化或多芯片卡场景）：Hailo-8 在单芯片上、六路并发任务下实现近 6 倍扩展（MobileNetV4-Conv-S 六流下达 35,684 FPS，对比同一模型下 A5000 基线的单流 5,299 FPS）。Axelera Metis 的数字是多芯片而非多流：四芯片 PCIe 卡在 MNASNet-0.75 上近线性扩展至 4,622 FPS（单芯片为 1,156 FPS）。
- **单流延迟**：小批量延迟场景下 A5000 基线仍全面领先——ResNet-18 上为 0.20 ms，对比 Hailo-8 的 1.20 ms 与 Axelera Metis 的 1.8 ms；高通 Dragonwing IQ-9075 居中，为 0.50 ms。
- **功耗效率**：论文「相近吞吐下功耗低 35%-70%」这一标题性数字引用自一项外部研究（Kim 等，MDPI Systems，2025），并非本文独立实测所得。文中给出的 NPU/DSP 功耗数字均为厂商数据手册「典型功耗」规格值，而非实测功耗——例如 Hailo-8 规格值为 2.5 W，Axelera Metis 为 8-15 W，而 A5000 的 TDP 为 230 W，差距远超所引用的 35%-70% 区间。
- **模型兼容性**：A5000/TensorRT 基线可成功编译运行全部 12 个参考模型；高通 DSP 一档可运行 11-12 个（MobileNetV3 在 QCS8550 上失败）。兼容性因具体 ASIC NPU 型号而异，并非可以用单一「ASIC 一档」数字概括：Hailo-8 在 12 个模型中有 4 个失败（ConvNeXt-Tiny、EfficientNet-B0、MobileNetV3-Small、Tiny-ViT-5M），其余 8 个均成功，包括 ViT-Tiny（94 FPS）；Axelera Metis 有 6 个失败（Hailo-8 的失败集合再加上 ResNeXt-101 与 ViT-Tiny），仅 6 个成功；EdgeCortix Sakura II 有 4 个失败（ConvNeXt-Tiny、EfficientNet-B0、ViT-Tiny、Tiny-ViT-5M），但成功运行了 MobileNetV3-Small——这正是 Hailo-8 与 Metis 都失败的模型。论文正文自称「三款 ASIC NPU 均一致在 Transformer 模型上失败」，但这与论文自身数据相矛盾——Hailo-8 实际成功运行了 ViT-Tiny。
- **总体格局**：在三款实际完成实测的 ASIC NPU 中，Axelera Metis 报告的标称峰值吞吐最高（214 INT8 TOPS），并具备近线性的多芯片扩展——不过 Axelera 自家尚未完成实测的 Europa 芯片，其规格值更高，达 629 TOPS。在三款完成实测的 ASIC NPU 中，仅 Sakura II 在数据手册中列出 BF16 支持，且正是它在 Hailo-8 与 Metis 均失败的 MobileNetV3-Small 上运行成功。Hailo-10H、Intel Lunar Lake 与 AMD XDNA2 集成 NPU 的测试结果在本 v1.0 版本中标注为「尚待补充」，Axelera Europa（硬件尚未到位）与 SiMa MLSoC（SDK 与本文测试框架不兼容）同样如此。GPU 基线仍保有最完整的模型覆盖、最低的单流延迟与最成熟的工具链，但代价是高出一个数量级的（规格值）功耗。

## Why it matters / what's new (EN)

This scout's `mlcommons-edge-benchmarks` watch item has flagged, across many runs, that flagship on-device AI announcements routinely ship without any independently verifiable TOPS, latency, or power figure, and that MLPerf Client's own results rounds have been too infrequent to fill the gap. This paper is not the independent, vendor-neutral measurement that would fully close that gap, though — it's a company (Covision Lab) white paper that pairs its benchmark numbers with explicit vendor-adoption recommendations. It is still a useful, methodologically detailed data point: a fixed GPU baseline and a fixed 12-model set, with each platform run through its own vendor SDK. That last point is also the biggest caveat for cross-platform comparison, since a shared toolchain (as opposed to per-vendor SDKs) is what would make the numbers strictly apples-to-apples — a limitation the paper's own authors surface when they flag a discrepancy between their PyTorch/torchvision-sourced model weights and the TensorFlow-derived weights behind Hailo's own published benchmark figures. Of the eleven non-baseline platforms it describes, only six have actually been benchmarked to date; the rest — including Axelera Europa, whose datasheet TOPS figure exceeds every benchmarked ASIC NPU — are pending in a future revision. The entry is also a useful corrective to the paper's own "fixed-function silicon fails on transformers" framing: Hailo-8's own data shows it running ViT-Tiny successfully, so the real per-device compatibility gaps are more selective than the paper's summary language suggests.

## Why it matters / what's new (ZH)

本侦察的 `mlcommons-edge-benchmarks` 观察项已在多次运行中记录：旗舰级端侧 AI 发布普遍未附带任何可独立验证的 TOPS、延迟或功耗数字，而 MLPerf Client 自身的结果轮次又过于稀疏，难以填补这一空白。不过本文并非能够完全填补该空白的独立、不偏向厂商的实测——它是一份企业（Covision Lab）白皮书，将实测数字与明确的厂商采购建议并列呈现。它仍是一个有价值、方法细节详尽的数据点：采用固定的 GPU 基线与固定的 12 模型集合，各平台经由自有厂商 SDK 运行。但这一点也正是跨平台比较的最大局限——只有共享统一工具链（而非各厂商各自的 SDK）才能真正做到严格意义上的「同台竞技」；论文作者自己也指出了这一局限，他们发现自己所用的 PyTorch/torchvision 权重来源与 Hailo 官方公布评测所用的 TensorFlow 衍生权重之间存在差异。论文所述的十一款非基线平台中，截至目前仅六款实际完成了实测；其余——包括数据手册标称 TOPS 高于所有已实测 ASIC NPU 的 Axelera Europa——均待后续版本补充。本条目也是对论文自身「固定功能芯片在 Transformer 上失败」这一表述的一个有益纠正：Hailo-8 自己的数据显示其成功运行了 ViT-Tiny，因此各设备实际的兼容性缺口比论文总结性表述所暗示的要更具选择性，而非「一刀切」。

## Images

*(No redistributable images for this entry — the paper's figures are ASCII/styled data tables rather than standalone graphics; no chart images to reproduce.)*
