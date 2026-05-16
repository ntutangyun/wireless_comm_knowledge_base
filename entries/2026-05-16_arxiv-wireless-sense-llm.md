---
id: 2026-05-16_arxiv-wireless-sense-llm
date_published: 2026-05-13
date_found: 2026-05-16
type: academic-paper
title_en: "WirelessSenseLLM: Zero-Shot Human Activity Understanding by Bridging Wireless Signals and Human Language"
title_zh: "WirelessSenseLLM：通过桥接无线信号与人类语言实现零样本人体活动理解"
url: "https://arxiv.org/abs/2605.14070"
source_quality: full
topics: [802.11bf, WiFi-sensing, CSI, LLM]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi, wifi-for-ai]
novelty_score: 4
---

## Summary (EN)

WirelessSenseLLM is a language-driven framework that enables zero-shot human motion understanding from unsegmented Wi-Fi Channel State Information (CSI). The core problem it solves is that existing CSI-based activity recognition systems require three things that are expensive in practice: accurate signal segmentation (isolating each action in the CSI stream), predefined action labels, and per-task supervised training. WirelessSenseLLM removes all three requirements by bridging CSI directly to a pretrained large language model (Vicuna-7B).

The architecture has three components. First, a wireless encoder processes complex-valued CSI into sequential embeddings, preserving temporal structure. Second, a CSI-to-Language Adapter resolves the fundamental modality mismatch — CSI is continuous-valued time-series data spanning subcarriers and packet indices, while language is discrete symbolic tokens. The adapter learns a cross-modal projection that maps CSI features into a language-aligned semantic space. Third, the LLM receives these projected embeddings interleaved with text tokens and generates natural-language descriptions of human motions. Because the LLM already understands human actions from its language-domain pretraining, it can reason about CSI-described motions in a zero-shot manner — recognizing actions it has never seen in training data.

The system achieves 92% accuracy and 91% F1-score on zero-shot action understanding, with 30% factual and 15% reasoning quality improvements over prior methods. For multi-person scenarios, it shows a 12.33% average improvement. The key technical contribution is demonstrating that the modality gap between PHY-layer CSI and semantic-level language can be bridged with a learnable adapter, after which the LLM's cross-domain reasoning capabilities become directly applicable to wireless sensing. The paper also introduces a new multi-person wireless sensing dataset with natural language annotations.

This work was accepted at IEEE SECON 2026.

## Summary (ZH)

WirelessSenseLLM 是一个语言驱动的框架，能够从非分段的 Wi-Fi 信道状态信息（CSI）中实现零样本人体运动理解。它解决的核心问题是：现有的基于 CSI 的活动识别系统依赖三个在实际中代价高昂的条件——精确的信号分段（在 CSI 流中隔离每个动作）、预定义动作标签，以及逐任务的监督训练。WirelessSenseLLM 通过将 CSI 直接桥接到预训练大语言模型（Vicuna-7B），同时移除了这三项要求。

架构包含三个组件。其一，无线编码器将复值 CSI 处理为保留时序结构的序列嵌入。其二，CSI-语言适配器解决根本性的模态不匹配——CSI 是覆盖子载波和包索引的连续值时间序列数据，而语言是离散的符号令牌。适配器学习一个跨模态投影，将 CSI 特征映射到与语言对齐的语义空间。其三，LLM 接收这些与文本令牌交织的投影嵌入，生成人类运动的自然语言描述。由于 LLM 已在语言域预训练中理解了人类动作，它能以零样本方式推理 CSI 描述的运动——识别训练数据中从未见过的动作。

系统在零样本动作理解上达到 92% 准确率和 91% F1 分数，相较先前方法有 30% 的事实性和 15% 的推理质量提升。多人场景下平均提升 12.33%。关键学术贡献是证明了 PHY 层 CSI 与语义层语言之间的模态鸿沟可以通过可学习适配器桥接，之后 LLM 的跨域推理能力就能直接应用于无线感知。论文还引入了一个新的多人无线感知数据集，带有自然语言标注。

该工作已被 IEEE SECON 2026 接收。

## Key technical points (EN)

- **Segmentation-Free CSI Understanding**: Unlike prior systems that require CSI streams to be pre-segmented into single-action windows, WirelessSenseLLM processes continuous unsegmented CSI and uses the LLM's self-attention to establish temporal relationships across arbitrary spans.
- **CSI-to-Language Adapter**: A learnable projection module that maps CSI encoder embeddings into the LLM's token embedding space. Trained with a cross-modal alignment objective, this adapter is the key enabler for zero-shot generalization — once CSI "looks like" language tokens, the LLM's pretrained knowledge of human actions becomes directly applicable.
- **Cross-Modal Projection Mechanism**: Aligns wireless representations into language tokens through a structured projection that preserves temporal ordering while translating the continuous-valued signal space to the discrete symbolic space.
- **Vicuna-7B Fine-tuning**: The pretrained LLM is fine-tuned on CSI-language pairs to learn temporal reasoning over unsegmented CSI streams, using LoRA for parameter efficiency.
- **Multi-Person Dataset**: A new dataset with CSI recordings of multi-person activities paired with natural language descriptions, addressing a gap in existing CSI datasets that typically cover only single-person, single-action scenarios.
- **Zero-Shot Results**: 92% accuracy, 91% F1 on unseen actions. 30% improvement in factual correctness and 15% in reasoning depth over prior LLM-based CSI methods.

## Key technical points (ZH)

- **免分段 CSI 理解**：不同于需要将 CSI 流预分段为单动作窗口的先前系统，WirelessSenseLLM 处理连续的非分段 CSI，利用 LLM 的自注意力机制在任意时间跨度间建立时序关系。
- **CSI-语言适配器**：一个可学习的投影模块，将 CSI 编码器嵌入映射到 LLM 的令牌嵌入空间。通过跨模态对齐目标训练，该适配器是实现零样本泛化的关键——一旦 CSI "看起来像"语言令牌，LLM 预训练的人类动作知识就可直接应用。
- **跨模态投影机制**：通过保持时序顺序的结构化投影，将连续值信号空间转换到离散符号空间，实现无线表示与语言令牌的对齐。
- **Vicuna-7B 微调**：预训练 LLM 在 CSI-语言对上微调，学习对非分段 CSI 流的时序推理，使用 LoRA 实现参数高效。
- **多人数据集**：一个包含多人活动 CSI 记录并配以自然语言描述的新数据集，填补了现有 CSI 数据集通常仅覆盖单人、单动作场景的空白。
- **零样本结果**：未见动作上 92% 准确率，91% F1。相较先前基于 LLM 的 CSI 方法，事实正确性提升 30%，推理深度提升 15%。

## Why it matters / what's new (EN)

WirelessSenseLLM represents a conceptual shift in Wi-Fi sensing: from "classify this CSI segment into one of K known labels" to "describe what is happening in this CSI stream in natural language, then reason about it." This matters for two reasons.

First, it addresses the brittleness that has kept CSI sensing in the lab. Real-world deployments face continuous, overlapping activities — people walking while talking on the phone, multiple people in the same room. Segmentation-based systems fail when actions can't be cleanly isolated. By using the LLM's attention mechanism to handle unsegmented streams and its language-domain knowledge to interpret compositional actions, WirelessSenseLLM points toward sensing systems that work in unconstrained environments.

Second, the CSI-to-language bridge opens a new design space for 802.11bf sensing services. Standardized sensing measurement procedures (as envisioned in 802.11bf) produce CSI — but turning that CSI into useful information currently requires task-specific models. If a reusable CSI-to-language projection layer can be learned, then any downstream sensing service becomes a language understanding problem, which LLMs already solve well. This paper is the first to demonstrate that such a projection is viable, with strong zero-shot results.

## Why it matters / what's new (ZH)

WirelessSenseLLM 代表了 Wi-Fi 感知的概念转变：从"将这段 CSI 分类为 K 个已知标签之一"到"用自然语言描述这段 CSI 流中正在发生的事情，然后进行推理"。这有两方面重要意义。

其一，它解决了将 CSI 感知困在实验室中的脆弱性问题。真实部署面临连续、重叠的活动——人们边走边打电话、多人同处一室。当动作无法被干净隔离时，基于分段的系统就会失效。通过利用 LLM 的注意力机制处理非分段流，以及其语言域知识解释组合动作，WirelessSenseLLM 指向了可在无约束环境中工作的感知系统。

其二，CSI-语言桥接为 802.11bf 感知服务打开了新的设计空间。标准化的感知测量流程（如 802.11bf 所设想）产生 CSI——但将 CSI 转化为有用信息目前需要任务特定模型。如果可以学习一个可复用的 CSI-语言投影层，那么任何下游感知服务都变成了语言理解问题，而 LLM 已经很好地解决了这一问题。本文首次证明了这种投影的可行性，并给出了强有力的零样本结果。

## Images
![WirelessSenseLLM architecture: CSI stream → Wireless Encoder → CSI-to-Language Adapter → Cross-Modal Projection → LLM → Natural Language Description & Reasoning | WirelessSenseLLM 架构：CSI流 → 无线编码器 → CSI-语言适配器 → 跨模态投影 → LLM → 自然语言描述与推理](https://arxiv.org/html/2605.14070v1/x1.png)
![CSI-to-Language Adapter design: bridging continuous-valued CSI embeddings to discrete language token space | CSI-语言适配器设计：桥接连续值CSI嵌入与离散语言令牌空间](https://arxiv.org/html/2605.14070v1/x2.png)
![Zero-shot action understanding results: 92% accuracy and 91% F1 on unseen actions | 零样本动作理解结果：未见动作上92%准确率和91% F1](https://arxiv.org/html/2605.14070v1/x3.png)
![Multi-person motion explanation: performance comparison across interaction densities | 多人运动解释：不同交互密度下的性能对比](https://arxiv.org/html/2605.14070v1/x4.png)
![Language-based reasoning quality: factual correctness and reasoning depth improvements over baselines | 基于语言的推理质量：事实正确性和推理深度相较基线的提升](https://arxiv.org/html/2605.14070v1/x5.png)
