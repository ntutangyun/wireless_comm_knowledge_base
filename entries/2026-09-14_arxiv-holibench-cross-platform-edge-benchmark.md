---
id: 2026-09-14_arxiv-holibench-cross-platform-edge-benchmark
date_published: 2026-09-11
date_found: 2026-09-14
type: academic-paper
technology: edge-ai
title_en: "HoliBench: A Cross-Platform Benchmarking and Deployment Toolkit for Foundation Models in CPS-IoT Applications"
title_zh: "HoliBench：面向 CPS-IoT 应用基础模型的跨平台基准测试与部署工具包"
url: "https://arxiv.org/abs/2609.12412"
source_quality: full
topics: [benchmarking, deployment-decision, multi-model-pipeline, latency-power-prediction, cyber-physical-systems]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

UCLA researchers (Inesh Chakrabarti, Zejun Xiong, Pragya Sharma, Mani Srivastava) present HoliBench, a modular benchmarking and deployment-decision toolkit that jointly characterizes accuracy, latency, and energy for foundation models (LLMs, VLMs, and time-series foundation models) across heterogeneous hardware tiers — from a Raspberry Pi 5 (device tier) through Jetson Orin AGX and RTX 3070 (edge tier) to RTX 5070/A5000 (cloud tier) and Apple Silicon Mac Mini M2/M4 (workstation tier). The paper targets a real gap this KB has repeatedly flagged: existing benchmarking tools report accuracy assuming sufficient compute, while hardware-profiling tools are platform-specific and mutually incompatible, leaving practitioners without a unified way to decide where to deploy a multi-model pipeline.

## Summary (ZH)

加州大学洛杉矶分校（UCLA）研究团队（Inesh Chakrabarti、Zejun Xiong、Pragya Sharma、Mani Srivastava）提出 HoliBench，一个模块化的基准测试与部署决策工具包，可在异构硬件层级上联合刻画基础模型（LLM、VLM 与时间序列基础模型）的准确率、延迟与能耗——覆盖从树莓派 5（设备层）、Jetson Orin AGX 与 RTX 3070（边缘层），到 RTX 5070/A5000（云端层）与 Apple Silicon Mac Mini M2/M4（工作站层）的全谱系硬件。论文瞄准了本知识库此前多次指出的一个真实缺口：现有基准测试工具在假设算力充足的前提下报告准确率，而硬件画像工具则各自局限于特定平台、互不兼容，导致实践者缺乏统一手段来决定多模型流水线该部署在何处。

## Key technical points (EN)

- **Hardware tiers (7 devices)**: Raspberry Pi 5 (device); Jetson Orin AGX, RTX 3070 (edge); RTX 5070 Blackwell, RTX A5000 Ampere (cloud); Mac Mini M2, Mac Mini M4 (workstation).
- **Model coverage (20 models)**: LLMs — SmolLM, Llama-3.2, Qwen2.5, Qwen3, Gemma, DeepSeek families (135M-8B); VLMs — SmolVLM, Qwen2.5-VL, PaLIGemma, Moondream (256M-3B); time-series foundation models — Chronos (8M-46M), MOMENT (385M), Granite-TS (2M) (overall 2M-385M).
- **Backends (8)**: vLLM, SGLang, HuggingFace, MLX, OpenVINO, TensorRT, Ollama, ONNX — spanning most of the runtime landscape this domain's local-inference-runtimes source has separately tracked.
- **Composability method**: latency is extrapolated from a linear relationship between output token count and per-token autoregressive decode time (so a standalone profile predicts unprofiled-length outputs); power is estimated as a time-weighted average of each model's standalone power, weighted by the fraction of pipeline cycle time each model occupies — avoiding the need to physically profile every model combination.
- **Validation result**: in a 10-minute CARLA-simulated autonomous-driving multi-model case study, HoliBench's constrained solver selected Qwen2.5-VL-3B + SmolLM2-1.7B over the accuracy-greedy pairing (PaLIGemma-3B + SmolLM2-1.7B) to jointly satisfy a <1.6s latency and ≤30W power budget; the selected configuration tracked its predicted latency within 1.2% and predicted power within 2.5%, with 88.8% of cycles compliant with both constraints and all cycles completing within 1.8s (the tail violations attributable entirely to VLM input variance), while the accuracy-greedy pairing exceeded the 1.6s latency deadline on every cycle (mean 1896ms, worst-case 2849ms) and drew a sustained 32.0W, above the 30W budget.

## Key technical points (ZH)

- **硬件层级（7 种设备）**：树莓派 5（设备层）；Jetson Orin AGX、RTX 3070（边缘层）；RTX 5070 Blackwell、RTX A5000 Ampere（云端层）；Mac Mini M2、Mac Mini M4（工作站层）。
- **模型覆盖（20 个模型）**：LLM——SmolLM、Llama-3.2、Qwen2.5、Qwen3、Gemma、DeepSeek 系列（135M-8B）；VLM——SmolVLM、Qwen2.5-VL、PaLIGemma、Moondream（256M-3B）；时间序列基础模型——Chronos（8M-46M）、MOMENT（385M）、Granite-TS（2M）（整体范围 2M-385M）。
- **后端（8 个）**：vLLM、SGLang、HuggingFace、MLX、OpenVINO、TensorRT、Ollama、ONNX——覆盖了本领域 local-inference-runtimes 信息源此前分别跟踪的大部分运行时生态。
- **可组合性方法**：利用输出 token 数与逐 token 自回归解码时间之间的线性关系外推延迟（使单模型画像可预测未实测长度的输出）；功耗则按各模型在流水线周期中所占时间比例，对其各自的独立功耗取时间加权平均——从而无需对每种模型组合逐一实测。
- **验证结果**：在一个基于 CARLA 仿真、时长 10 分钟的自动驾驶多模型案例研究中，HoliBench 的约束求解器在 <1.6 秒延迟与 ≤30W 功耗预算的联合约束下，选择了 Qwen2.5-VL-3B + SmolLM2-1.7B 组合，而非「准确率优先」的 PaLIGemma-3B + SmolLM2-1.7B 组合；所选配置的延迟预测误差在 1.2% 以内，功耗预测误差在 2.5% 以内，88.8% 的周期同时满足两项约束，且所有周期均在 1.8 秒内完成（尾部超时完全归因于 VLM 输入方差）；而「准确率优先」组合的时延在每个周期都超过了 1.6 秒的截止时间（平均 1896ms，最差 2849ms），且功耗持续维持在 32.0W，超出 30W 的功耗预算。

## Why it matters / what's new (EN)

This is a tool/benchmark paper rather than a new inference mechanism, but it directly answers a gap this scout has been tracking since the domain's earliest runs: MLCommons' MLPerf Client is one of this KB's standing watch items precisely because vendor TOPS/tokens-per-second claims are otherwise unverifiable and mutually incomparable across platforms. HoliBench is an independent, open, cross-vendor (not vendor-authored) attempt at exactly that normalization problem, extended to full multi-model pipelines rather than single-model numbers, and it is validated against physical measurement rather than left as a simulation. It does not replace MLPerf Client as an industry-standard benchmark; rather than being the first entry to address this disclosure gap, it extends the 2026-09-09 cross-platform measurement work ("A Measurement Study of LLM Inference Trade-offs Across Edge Continuum Hardware") from single-model numbers to multi-model pipelines.

## Why it matters / what's new (ZH)

这是一篇工具/基准测试论文，而非新的推理机制，但它直接回应了本侦察自该领域最早几次运行以来一直在跟踪的一个缺口：MLCommons 的 MLPerf Client 是本知识库长期关注的观察项之一，正是因为厂商宣称的 TOPS/每秒 token 数在缺乏第三方验证的情况下无法跨平台比较。HoliBench 是一次独立、开放、跨厂商（而非厂商自撰）的尝试，直指同一个规范化难题，并将其从单模型数字扩展到完整的多模型流水线，且经过物理实测验证而非停留在仿真层面。它并不能取代 MLPerf Client 成为行业标准基准；与其说它是首个针对该披露缺口的学术贡献，不如说它是将 2026-09-09 收录的跨平台测量研究（「A Measurement Study of LLM Inference Trade-offs Across Edge Continuum Hardware」）从单模型数字扩展到了完整的多模型流水线。

## Images

*(No redistributable images for this entry — text-only extraction from the arXiv HTML rendering, no figures reproduced.)*
