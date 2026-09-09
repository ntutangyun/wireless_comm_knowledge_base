---
id: 2026-09-09_arxiv-edge-continuum-llm-inference-measurement
date_published: 2026-09-08
date_found: 2026-09-09
type: academic-paper
technology: edge-ai
title_en: "A Measurement Study of LLM Inference Trade-offs Across Edge Continuum Hardware"
title_zh: "跨边缘连续体硬件的大模型推理权衡实测研究"
url: "https://arxiv.org/abs/2609.08307"
source_quality: full
topics: [self-hosted-LLM, edge-continuum, Jetson-AGX-Orin, near-edge-server, hardware-trade-offs, quantization]
topic_primary: on-device-inference
topics_secondary: [compute-offloading, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

A measurement study benchmarks self-hosted LLM inference across two self-hosted platforms of the "edge continuum" — an NVIDIA Jetson AGX Orin edge device and a near-edge server run CPU-only and with an NVIDIA T4 GPU — plus a cloud reference (GPT-4o via the OpenAI API), to characterize how deployment platform, not just model choice, determines the accuracy/latency/energy trade-off for services built on LLM backends. The evaluation runs five self-hosted models in GGUF format — Llama 3.2 1B/3B in F16, Q5_K_M and Q4_K_M; Mistral 7B, TinyLlama 1.1B and Phi v2.0 in Q5_K_M and Q4_K_M only — against 1,531 multiple-choice prompts drawn from the MMLU validation split, measuring per-token decoding latency, prefill latency, and end-to-end energy consumption alongside accuracy.

The paper's headline finding is that the deployment platform — not parameter count or downloaded weight-file size — is the dominant factor in observed latency: server CPU-only inference has the highest per-token decoding latency (tens of milliseconds) and the highest prefill latency (roughly 17–22 ms per input token for 7B-class models), while server GPU achieves near-negligible prefill latency and the lowest per-token latency of the three self-hosted tiers. The Jetson Orin lands in between on raw decoding speed but reports the lowest measured energy per trial among all self-hosted configurations, and its prefill latency (around or below 1 ms per token) is close to the GPU server's. The paper further finds no universally best model: CPU-only configurations are Pareto-dominated in the accuracy-latency space, while a sensitivity analysis that adds two fixed per-token streaming-delivery overheads (30 ms and 60 ms) to server-side latency — controlled parameters, not measured network delay — shifts the balance toward local GPU-enabled devices for latency-sensitive workloads, with the server GPU remaining Pareto-efficient for higher-accuracy configurations. The paper is accepted for publication at WIMS 2026.

## Summary (ZH)

一项实测研究对「边缘连续体」中两类自托管平台上的大模型推理进行了基准测试——NVIDIA Jetson AGX Orin 边缘设备，以及分别以纯 CPU 与 NVIDIA T4 GPU 运行的近边缘服务器——并以 GPT-4o（通过 OpenAI API）作为云端参照，以刻画部署平台（而不仅是模型选择）如何决定基于大模型后端服务的精度/时延/能耗权衡。评测在五个自托管模型上以 GGUF 格式运行：Llama 3.2 的 1B 与 3B 提供 F16、Q5_K_M、Q4_K_M 三档；Mistral 7B、TinyLlama 1.1B 与 Phi v2.0 仅有 Q5_K_M 与 Q4_K_M 两档，测试集为取自 MMLU 验证集的 1,531 道多选题，测量逐 token 解码时延、预填充（prefill）时延、端到端能耗以及精度。

本文的核心发现是：部署平台——而非参数量或下载权重文件大小——是决定观测时延的主导因素。纯 CPU 服务器的逐 token 解码时延最高（达数十毫秒量级），预填充时延也最高（7B 级模型约每输入 token 17–22 毫秒）；GPU 服务器的预填充时延几乎可忽略不计，逐 token 时延在三种自托管配置中最低。Jetson Orin 在原始解码速度上介于两者之间，但在所有自托管配置中实测每次试验能耗最低，其预填充时延（每 token 约 1 毫秒或以下）已接近 GPU 服务器水平。论文进一步发现不存在「普遍最优」的模型：纯 CPU 配置在精度-时延空间中被帕累托支配；而在敏感性分析中为服务器侧逐 token 时延叠加两档固定的流式传输开销（30 毫秒与 60 毫秒；论文明确说明这是受控参数而非实测网络时延）后，天平向本地 GPU 设备倾斜，对时延敏感的负载更有利，GPU 服务器则在追求更高精度的配置上仍保持帕累托最优。论文已被 WIMS 2026 录用。

## Key technical points (EN)

- **Edge-continuum platforms**: Jetson AGX Orin (12-core Arm Cortex-A78AE, Ampere GPU 2048 CUDA cores, 64GB LPDDR5) vs. near-edge server (Intel Xeon Gold 6230, 96GB RAM) in CPU-only and NVIDIA T4-GPU modes, vs. cloud GPT-4o baseline.
- **Model set** (GGUF): Llama 3.2 1B/3B in F16, Q5_K_M and Q4_K_M; Mistral 7B, TinyLlama 1.1B and Phi v2.0 in Q5_K_M and Q4_K_M only.
- **Workload**: 1,531 MMLU-validation multiple-choice prompts, controlled QA evaluation.
- **Latency**: server CPU highest per-token (tens of ms) and highest prefill (~17–22 ms/token for 7B); server GPU lowest per-token, near-negligible prefill; Jetson Orin intermediate on decoding, prefill near or below 1 ms/token.
- **Energy**: Jetson Orin lowest measured energy per trial among self-hosted setups; the CPU-only server shows the highest measured energy, driven by longer execution especially at prefill.
- **Accuracy**: GPT-4o ~80% correct; Mistral 7B highest among self-hosted models; parameter count and weight-file size do not reliably predict accuracy or latency.
- **Delivery-overhead sensitivity**: a sensitivity analysis that adds two fixed per-token streaming-delivery overheads (30 ms and 60 ms) to server-side latency — controlled parameters, not measured network delay — shifts the balance toward local GPU-enabled devices for latency-sensitive workloads; server GPU stays Pareto-efficient where accuracy is prioritized.
- **Venue**: accepted at WIMS 2026 (Web Intelligence, Mining and Semantics).

## Key technical points (ZH)

- **边缘连续体平台**：Jetson AGX Orin（12 核 Arm Cortex-A78AE、Ampere GPU 2048 CUDA 核心、64GB LPDDR5）；近边缘服务器（Intel Xeon Gold 6230、96GB 内存）分别以纯 CPU 与 NVIDIA T4 GPU 两种模式运行；云端 GPT-4o 作为基准。
- **模型集合**（GGUF）：Llama 3.2 的 1B 与 3B 提供 F16、Q5_K_M、Q4_K_M 三档；Mistral 7B、TinyLlama 1.1B 与 Phi v2.0 仅有 Q5_K_M 与 Q4_K_M 两档。
- **评测负载**：取自 MMLU 验证集的 1,531 道多选题，属受控问答评测。
- **时延**：纯 CPU 服务器逐 token 时延最高（数十毫秒级），预填充时延也最高（7B 级约每 token 17–22 毫秒）；GPU 服务器逐 token 时延最低，预填充几乎可忽略；Jetson Orin 解码速度居中，预填充时延约每 token 1 毫秒或以下。
- **能耗**：在所有自托管配置中，Jetson Orin 单次试验实测能耗最低；纯 CPU 服务器实测能耗最高，主要源于（尤其预填充阶段）更长的执行时间。
- **精度**：GPT-4o 正确率约 80%；Mistral 7B 在自托管模型中精度最高；参数量与权重文件大小均不能可靠预测精度或时延。
- **传输开销敏感性**：在敏感性分析中为服务器侧逐 token 时延叠加两档固定的流式传输开销（30 毫秒与 60 毫秒；论文明确说明这是受控参数而非实测网络时延）后，天平向本地 GPU 设备倾斜，对时延敏感型负载更有利；而在追求高精度的配置下 GPU 服务器仍保持帕累托最优。
- **会议**：已被 WIMS 2026（Web 智能、数据挖掘与语义学会议）录用。

## Why it matters / what's new (EN)

This KB already holds several device-specific measurement entries (e.g. the 2026-08-29 Jetson-generation characterisation, the 2026-09-03 Cisco AP-forecasting resource-contention study), but this is the first entry to run the *same* model set and workload across two self-hosted platforms (a Jetson AGX Orin, and a near-edge server run CPU-only and with a T4 GPU) plus a cloud reference (GPT-4o) in one controlled study. Its central claim, that deployment platform dominates model choice as a predictor of latency and energy, is a directly actionable data point for any system deciding *where* to place LLM inference rather than *which* model to run, complementing this KB's growing body of compute-offloading and orchestration entries (e.g. `2026-09-02_arxiv-drlm-llm-query-orchestration-edge`, `2026-09-01_arxiv-multi-spin-wireless-speculative-inference`) that address the same placement question from a scheduling or communication angle rather than a raw hardware-characterisation one.

## Why it matters / what's new (ZH)

本知识库此前已收录若干针对具体设备的实测条目（例如 2026-08-29 的 Jetson 各代际特性刻画、2026-09-03 的 Cisco AP 资源争用预测研究），但本条目是首个在同一项受控研究中，让*相同*的模型集合与负载跑遍两类自托管平台（Jetson AGX Orin，以及分别以纯 CPU 与 T4 GPU 运行的近边缘服务器）并对照云端参照（GPT-4o）的实测条目。其核心结论——部署平台在预测时延与能耗方面比模型选择本身更具决定性——为任何需要决定大模型推理「部署在何处」（而非「运行哪个模型」）的系统提供了可直接参考的数据点，与本知识库中日益增多的计算卸载与编排类条目（如 `2026-09-02_arxiv-drlm-llm-query-orchestration-edge`、`2026-09-01_arxiv-multi-spin-wireless-speculative-inference`）形成互补——后两者从调度或通信角度处理同一个「部署位置」问题，而本条目则是从原始硬件特性刻画的角度切入。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
