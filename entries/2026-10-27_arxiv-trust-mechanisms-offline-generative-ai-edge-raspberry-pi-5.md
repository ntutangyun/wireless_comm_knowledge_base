---
id: 2026-10-27_arxiv-trust-mechanisms-offline-generative-ai-edge-raspberry-pi-5
date_published: 2026-10-24
date_found: 2026-10-27
technology: edge-ai
type: academic-paper
title_en: "Trust mechanisms for offline generative AI at the edge: a connectivity-regime framework and a Raspberry Pi 5 study"
title_zh: "边缘离线生成式 AI 的可信机制：连接状态分级框架与树莓派 5 实测研究"
url: "https://arxiv.org/abs/2610.33732"
source_quality: full
topics: [offline-RAG, raspberry-pi-5, llama.cpp, Qwen2.5, abstention, signed-knowledge-packs, air-gapped, IoT]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

This paper, from securagen.ai (two authors), asks how a locally running generative assistant can be made trustworthy when the device is disconnected, and what the trust mechanisms cost on edge hardware. It first proposes a connectivity-regime framework (C0 to C4) that treats disconnection as a design dimension, a taxonomy of inference-time trust mechanisms, and signed, versioned knowledge packs as the update channel for disconnected regimes. It then evaluates these on a Raspberry Pi 5 (Broadcom BCM2712, four Cortex-A76 cores, 16 GB RAM, active cooling) running fully local retrieval-augmented generation inside a network namespace that has only a loopback interface.

The pipeline uses Qwen2.5-Instruct models of 1.5B, 3B and 7B parameters, quantised to 4 bits (Q4_K_M) and served by llama.cpp at temperature 0 with at most 64 output tokens, with BGE-M3 embeddings and an HNSW index. The test set is 300 SQuAD 2.0 questions that are answerable, unanswerable, or outside the corpus, giving 1,500 generations across five configurations and three context sizes, plus 30 generations on a poisoned pack. Results follow five research questions. RQ1: a retrieval-score gate separates knowledge-gap queries almost perfectly (AUROC 0.97) but in-topic unanswerable questions poorly (0.68). RQ2: a deterministic output validator lowers risk among answered queries from 0.81 to 0.46 for the smallest model with no observed loss of correct answers, while the NLI entailment verifier adds little. RQ3: the 3B model matches the 7B model on gold-answer containment (75%) at under half the latency and estimated energy, though the 7B model more often exceeds a token-F1 of 0.5 (74% versus 31%); five retrieved passages lower correctness from 75% to 52% compared with three. RQ4: verifying a signed knowledge pack takes about 4.5 ms against about 29 minutes to embed its passages on the device, and signature-and-hash checks alone accept six of nine tested update attacks that a layered verifier rejects. RQ5: a validly signed poisoned pack passes every pack check; on 30 previously correct questions, correct answers fall to zero and 14 return the injected answer.

## Summary (ZH)

本文来自 securagen.ai（两位作者），研究在设备断网时如何让本地运行的生成式助手变得可信，以及这些可信机制在边缘硬件上的代价。作者先提出连接状态分级框架（C0 至 C4），把断连视为一个设计维度；给出推理时可信机制的分类法；并提出带签名、带版本的知识包，作为断连状态下的更新通道。随后在树莓派 5（博通 BCM2712，四核 Cortex-A76，16 GB 内存，主动散热）上评估，系统完全本地运行检索增强生成，并置于仅有回环接口的网络命名空间内。

流水线使用 1.5B、3B、7B 三种规模的 Qwen2.5-Instruct 模型，量化为 4 比特（Q4_K_M），由 llama.cpp 以温度 0、最多 64 个输出 token 提供服务，嵌入采用 BGE-M3，索引为 HNSW。测试集为 300 道 SQuAD 2.0 问题（可回答、不可回答或超出语料），在五种配置和三种上下文规模下共 1,500 次生成，另有被投毒知识包上的 30 次生成。结果按五个研究问题展开。RQ1：检索分数门限几乎完美地区分知识缺口类查询（AUROC 0.97），但对主题内不可回答的问题区分较差（0.68）。RQ2：确定性输出校验器把最小模型已作答查询的风险从 0.81 降到 0.46，且未观察到正确答案损失；NLI 蕴含验证器增益很小。RQ3：3B 模型在标准答案包含率上与 7B 持平（75%），延迟和估算能耗不到 7B 的一半，但 7B 模型更常达到 token-F1 超过 0.5（74% 对 31%）；检索 5 段比检索 3 段使正确率从 75% 降到 52%。RQ4：验证一个签名知识包约需 4.5 ms，而在设备上对其段落做嵌入约需 29 分钟；仅做签名和哈希检查会接受九种更新攻击中的六种，分层验证器则全部拒绝。RQ5：合法签名的被投毒知识包能通过所有知识包检查；在 30 道原本答对的问题上，正确答案降为零，其中 14 道返回了注入的答案。

## Key technical points (EN)

- End-to-end latency is query embedding and retrieval plus generation, the latter measured as the wall-clock time of the request to the model server (prompt processing and decoding); energy per query is mean board power during generation times end-to-end latency, sampled every 0.5 s from the Pi 5 power-management IC without idle subtraction. The authors state these are estimates, not external measurements.
- Each question was asked once per configuration, with no warm-up queries and cache effects not isolated; no configuration recorded thermal throttling.
- The authors describe the study as an illustration on one device and one dataset, not a benchmark. Code, data and model-file digests are released.
- The paper is listed under cs.CR; the edge-relevant content is the on-device cost and quality trade-off of CPU-only local RAG.
- Stated conclusion: none of the evaluated mechanisms establishes the truth of the retrieved evidence.

## Key technical points (ZH)

- 端到端延迟为查询嵌入与检索时间加上生成时间，后者为向模型服务器发出请求的墙钟时间（含提示处理与解码）；每次查询能耗为生成期间平均板级功耗乘以端到端延迟，功耗每 0.5 秒从 Pi 5 电源管理芯片采样，未扣除空闲功耗。作者明确说明这些是估算值，而非外部实测。
- 每个问题在每种配置下只问一次，无预热查询，缓存影响未被隔离；所有配置均未记录热降频。
- 作者将该研究定位为单设备、单数据集上的演示，而非基准测试。代码、数据和模型文件摘要均已公开。
- 论文归类于 cs.CR；与边缘相关的内容是仅 CPU 本地 RAG 在设备上的成本与质量权衡。
- 论文结论：所评估的机制都无法确立被检索证据本身的真实性。

## Why it matters / what's new (EN)

It puts measured numbers on what a trust layer costs when a local assistant runs on a single-board computer with no network, including the observation that a 3B model can match a 7B model on containment at lower latency and energy on this device. The evidence is one board, one corpus and single runs with estimated energy, so the figures illustrate the trade-offs rather than set general limits.

## Why it matters / what's new (ZH)

它为本地助手在无网络的单板计算机上运行时可信层的代价给出了实测数字，其中包括在该设备上 3B 模型能以更低延迟和能耗达到与 7B 相当的包含率。证据来自一块开发板、一个语料库和单次运行，能耗为估算值，因此这些数字用于说明权衡，而非给出普适上限。

## Images

*(No redistributable images for this entry.)*
