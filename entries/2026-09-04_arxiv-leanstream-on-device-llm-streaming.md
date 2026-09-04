---
id: 2026-09-04_arxiv-leanstream-on-device-llm-streaming
date_published: 2026-09-02
date_found: 2026-09-04
type: academic-paper
technology: edge-ai
title_en: "LeanStream: A Speculate-and-Refine Streaming Framework for Efficient on-Device LLM Inference"
title_zh: "LeanStream：面向高效端侧 LLM 推理的\"推测-精化\"流式框架"
url: "https://arxiv.org/abs/2609.03079"
source_quality: full
topics: [on-device-LLM, weight-streaming, GPU-IO-overlap, activation-sparsity, MobiCom, mobile-embedded]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

On-device LLM inference has to work around a hard constraint: model weights routinely exceed a phone or embedded board's available DRAM, so weights are streamed in from SSD/flash as needed. Prior systems try to hide this by predicting which neurons will be active next and prefetching their weights while the GPU computes, exploiting activation sparsity. LeanStream (George Mason University, with JPMorgan Chase Global Technology Applied Research and the University of Kansas) identifies a structural trade-off in that approach: accurate sparse-execution decisions need the *latest* GPU context, but efficient computation-I/O overlap needs an *early* prediction, before that context exists. Existing designs resolve this by either serializing execution (correct but slow) or predicting early and eating the cost of wrong predictions — redundant weight fetches, extra computation, and cache overhead the paper reports can reach 3 GB for predictive models targeting 7B-parameter LLMs.

LeanStream's fix is to stop treating prediction as a single up-front decision. It progressively refines computation, loading, and cache-retention priorities as partial GPU results become available, using a thread-block-level, non-blocking coordination scheme over unified SoC memory so that weight blocks are consumed as they arrive rather than waiting for a full layer. Because standard GPU synchronization primitives are too expensive to call at this frequency, LeanStream replaces the usual neural-network sparsity predictor with a much cheaper structure — stacked layers of learned hash functions and binary lookup tables, trained end-to-end via straight-through estimators — and formulates the GPU/I/O coordination frequency itself as a runtime-tunable control problem, solved offline and applied as a lookup table.

Implemented on Jetson AGX Orin, Jetson AGX Xavier, and a OnePlus 13, and evaluated against DejaVu, PowerInfer-2, and a DejaVu+LRU-cache variant on Mistral-7B, Llama2-7B, and Qwen2.5-7B, LeanStream reduces memory usage by 4.8–7.5x at the best throughput prior systems achieve, while separately improving token-generation throughput by 1.6–2.1x. Its lightweight predictor is reported at roughly 23–24 MB and 87–92 microseconds latency, versus 1.1–1.8 GB and 1.18–1.49 ms for a full neural predictor. The paper is accepted to appear at MobiCom '26 (Austin, October 2026).

## Summary (ZH)

端侧 LLM 推理必须绕开一个硬约束：模型权重的体量常常超过手机或嵌入式板卡的可用 DRAM，因此需要按需从 SSD/闪存中流式加载权重。已有系统的做法是利用激活稀疏性，预测下一步哪些神经元会被激活，并在 GPU 计算的同时预取其权重。LeanStream（乔治梅森大学，与摩根大通全球技术应用研究部及堪萨斯大学合作）指出该思路中存在的一个结构性矛盾：准确的稀疏执行决策需要*最新*的 GPU 上下文，而高效的"计算-I/O"重叠又需要在该上下文尚不存在时就做出*早期*预测。现有方案要么串行执行（正确但慢），要么提前预测并承担预测错误的代价——冗余的权重读取、额外计算，以及论文指出在面向 70 亿参数级 LLM 的预测模型上可能高达 3 GB 的缓存开销。

LeanStream 的解法是不再将预测视为一次性的前置决策。它随着 GPU 部分计算结果的逐步产生，持续精化计算、加载与缓存保留的优先级，并采用线程块级别、非阻塞的协调机制，基于统一的 SoC 内存，使权重块一到达就可被消费，而无需等待整层加载完成。由于标准 GPU 同步原语在如此高频率下调用代价过高，LeanStream 用一种更廉价的结构替代了常规的神经网络稀疏性预测器——由多层可学习哈希函数与二值查找表堆叠而成，通过直通估计器进行端到端训练——并将 GPU/I/O 协调频率本身建模为一个可在运行时调节的控制问题，离线求解后以查找表形式在运行时应用。

该系统在 Jetson AGX Orin、Jetson AGX Xavier 与一加 13 上实现，并在 Mistral-7B、Llama2-7B 与 Qwen2.5-7B 上与 DejaVu、PowerInfer-2 及"DejaVu+LRU 缓存"变体对比评测：在达到已有系统的最佳吞吐量水平时，LeanStream 将内存占用降低 4.8–7.5 倍；在此基础上，其 token 生成吞吐量另可提升 1.6–2.1 倍。其轻量级预测器约为 23–24 MB、延迟 87–92 微秒，而完整神经网络预测器约为 1.1–1.8 GB、延迟 1.18–1.49 毫秒。该论文已被 MobiCom '26（2026 年 10 月，奥斯汀）录用。

## Key technical points (EN)

- **Problem**: sparse-execution prediction needs the latest GPU context for accuracy, but efficient GPU/storage-I/O overlap needs an early prediction before that context exists — existing systems either serialize or eat mispredicted-weight-fetch costs (up to ~3 GB cache overhead for 7B-model predictors).
- **Mechanism 1**: progressive priority refinement — computation, loading, and cache-retention priorities are updated as partial GPU results (per MLP sub-stage) become available, rather than committed once per layer.
- **Mechanism 2**: fine-grained, thread-block-level, non-blocking GPU/storage-I/O coordination over unified SoC memory, replacing expensive standard synchronization primitives; the GPU/I/O signal ratio need not be 1:1.
- **Mechanism 3**: stacked learnable hashing replaces a neural-network sparsity predictor — bitwise operations and binary lookup tables, trained with straight-through estimators, at ~23–24 MB / 87–92 microseconds vs. ~1.1–1.8 GB / 1.18–1.49 ms for a full neural predictor.
- **Mechanism 4**: the GPU/I/O coordination frequency is formulated as a finite-horizon stochastic control policy, profiled offline per (state, frequency) configuration and applied at runtime as a lookup table.
- **Devices**: Jetson AGX Orin, Jetson AGX Xavier (embedded), OnePlus 13 (mobile).
- **Models / baselines**: Mistral-7B, Llama2-7B, Qwen2.5-7B vs. DejaVu, PowerInfer-2, DejaVu+LRU on Scrolls-Qasper, TruthfulQA, CoQA.
- **Headline numbers**: 4.8–7.5x memory reduction at prior work's best throughput; 1.6–2.1x throughput improvement; e.g. 5.9x memory reduction while matching PowerInfer-2's peak throughput on Qasper; energy of 3.9 J/token with peak GPU temperature 76°C (below the 99°C throttling threshold). Accepted to MobiCom '26.

## Key technical points (ZH)

- **问题**：稀疏执行预测要保证准确性需要最新的 GPU 上下文，而高效的 GPU/存储 I/O 重叠又需要在该上下文出现之前就做出预测——现有系统要么串行执行，要么承担预测错误带来的权重读取代价（面向 70 亿参数模型的预测器缓存开销可达约 3 GB）。
- **机制一**：渐进式优先级精化——计算、加载与缓存保留的优先级随 MLP 子阶段的部分 GPU 结果逐步更新，而非按层一次性确定。
- **机制二**：基于统一 SoC 内存的细粒度、线程块级、非阻塞 GPU/存储 I/O 协调机制，取代昂贵的标准同步原语；GPU 与 I/O 信号的比例无需保持 1:1。
- **机制三**：以堆叠可学习哈希取代神经网络稀疏性预测器——基于按位运算与二值查找表，通过直通估计器训练，规模约 23–24 MB、延迟 87–92 微秒，相较完整神经网络预测器的约 1.1–1.8 GB、延迟 1.18–1.49 毫秒大幅降低。
- **机制四**：将 GPU/I/O 协调频率建模为有限时域随机控制策略，按（状态，频率）组合离线画像，运行时以查找表形式应用。
- **测试设备**：Jetson AGX Orin、Jetson AGX Xavier（嵌入式）与一加 13（移动端）。
- **模型/基线**：Mistral-7B、Llama2-7B、Qwen2.5-7B，对比 DejaVu、PowerInfer-2、DejaVu+LRU，测试集为 Scrolls-Qasper、TruthfulQA、CoQA。
- **核心数据**：在达到已有系统最佳吞吐量时内存降低 4.8–7.5 倍；吞吐量另提升 1.6–2.1 倍；例如在 Qasper 上匹配 PowerInfer-2 峰值吞吐量时内存降低 5.9 倍；能耗 3.9 J/token，GPU 峰值温度 76°C（低于 99°C 降频阈值）。论文已被 MobiCom '26 录用。

## Why it matters / what's new (EN)

This KB already has several storage-backed on-device-LLM systems (`2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm`, `2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory`), but LeanStream's contribution sits one level up from either: rather than a new eviction/restoration policy or a new prefetch heuristic, it reframes the coordination between prediction confidence and I/O timing as a runtime control problem, and replaces the predictor itself with a much cheaper hashing-based structure specifically because neural predictors are shown to be too slow to run at the frequency the coordination scheme demands. Measured against three real prior systems (DejaVu, PowerInfer-2, DejaVu+LRU) rather than an ablation-only baseline, and accepted at MobiCom '26, this is a credible addition to the growing on-device-inference measurement record this KB has been tracking.

## Why it matters / what's new (ZH)

本 KB 已收录多项存储支持的端侧 LLM 系统（`2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm`、`2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory`），但 LeanStream 的贡献处于更高一层：它并未提出新的换出/恢复策略或新的预取启发式规则，而是将"预测置信度"与"I/O 时机"之间的协调本身重新表述为一个运行时控制问题，并用一种代价低得多的哈希结构取代了预测器本身——原因正是论文证明神经网络预测器的速度不足以支撑该协调机制所需的调用频率。该工作以三个真实的既有系统（DejaVu、PowerInfer-2、DejaVu+LRU）作为对比基线而非仅做消融实验，并已被 MobiCom '26 录用，是本 KB 持续跟踪的端侧推理实测记录中可信的新增条目。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
