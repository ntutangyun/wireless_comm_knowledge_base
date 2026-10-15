---
id: 2026-10-15_arxiv-autosec-ran-spec-grounded-llm-oran-security-triage
date_published: 2026-10-11
date_found: 2026-10-15
type: academic-paper
technology: cellular
title_en: "AutoSec-RAN: Specification-Grounded LLM Fine-Tuning for Automated Security Analysis of O-RAN"
title_zh: "AutoSec-RAN：面向 O-RAN 自动化安全分析的规范驱动大模型微调"
url: "https://arxiv.org/abs/2610.15995"
source_quality: full
topics: [O-RAN, security, LLM, LoRA, RAG, eCPRI, fronthaul, DDoS, TS-33.501, WG11]
topic_primary: cellular-security
topics_secondary: [open-ran, cellular-ai]
novelty_score: 3
---

## Summary (EN)
Anoop Mishra, Joshua Moore, Aly Sabri Abdalla and Vuk Marojevic present AutoSec-RAN, a framework for automated security triage of Open RAN (O-RAN) testing, accepted at IEEE CNS 2026. The paper starts from the observation that the O-RAN open fronthaul can be attacked with spoofed control-plane traffic, fronthaul denial of service, or timing-synchronization disruption, any of which may not trigger conventional alarm thresholds, and that judging such events means combining O-RAN WG11 threat-modelling documents, 3GPP TS 33.501 cryptographic requirements and eCPRI framing conventions. AutoSec-RAN is designed to produce triage judgments without privileged access to RAN internals or real-time packet captures at inference time.

The pipeline fine-tunes Mistral-7B-Instruct-v0.3 in two Low-Rank Adaptation (LoRA) stages (rank 16, alpha 32) over a corpus of 69 security-relevant O-RAN, 3GPP and adjacent standards documents, selected from 85 candidate paths. Stage 1.1 trains on 3,163 analyst question-answer pairs that Gemma-4-31B generates from the specification chunks; Stage 1.2 warm-starts from that checkpoint and adds 1,200 observation-driven pairs derived from a 5G O-RAN intrusion-detection flow dataset. For one of the six question classes, specification grounding, inference is augmented with retrieval-augmented generation (RAG) over a FAISS index of the same documents (top 20 candidates re-ranked by a cross-encoder). At inference the model receives only an investigator-style question and a seven-field scenario metadata block.

Evaluation uses a purpose-built 5G/O-RAN testbed (SDR-based gNB split into CU, DU and RU over an eCPRI open fronthaul) with labelled fronthaul DDoS replay scenarios, giving 313 evaluation items. A Gemma-4-31B judge scores each answer for faithfulness, correctness and actionability against a reference written from full packet capture and logs; a BGE cosine similarity is a secondary signal. The mean judge overall score is 0.713 (pass threshold 0.70), or 0.755 over the five supervised classes; the blended score is 0.778 (0.808 supervised-only). Mitigation (0.849) and threat-model reasoning (0.848) score highest; the attack-direction class, deliberately withheld from training, scores 0.515 with a 0.200 pass rate.

The authors note limits: judge LLM bias is constrained but not eliminated, and the evaluation covers 313 fronthaul DDoS replay scenarios on a single testbed.

## Summary (ZH)
Anoop Mishra、Joshua Moore、Aly Sabri Abdalla 与 Vuk Marojevic 提出 AutoSec-RAN，一个面向开放无线接入网（O-RAN）测试的自动化安全分诊框架，论文已被 IEEE CNS 2026 接收。论文的出发点是：O-RAN 开放前传可能遭受伪造控制面流量、前传拒绝服务，或同步定时破坏，且这些攻击可能不会触发常规告警阈值，而判断此类事件需要综合 O-RAN WG11 威胁建模文档、3GPP TS 33.501 的密码学要求以及 eCPRI 帧约定。AutoSec-RAN 的设计目标是在推理阶段无需访问 RAN 内部特权信息或实时抓包即可给出分诊判断。

其流水线分两阶段对 Mistral-7B-Instruct-v0.3 进行低秩适配（LoRA，秩 16，alpha 32），语料为从 85 个候选路径中筛选出的 69 份与安全相关的 O-RAN、3GPP 及相关标准文档。阶段 1.1 使用由 Gemma-4-31B 基于规范片段生成的 3,163 条分析师问答对；阶段 1.2 以该检查点热启动，并加入由 5G O-RAN 入侵检测流数据集派生的 1,200 条基于观测的问答对。对六个问题类别之一（规范依据类），推理时在同一批文档的 FAISS 索引上增加检索增强生成（RAG，前 20 个候选经交叉编码器重排）。推理时模型只接收一个调查员式问题和一个七字段的场景元数据块。

评估使用专门搭建的 5G/O-RAN 测试床（基于 SDR 的 gNB，拆分为 CU、DU 和 RU，通过 eCPRI 开放前传连接），采集带标签的前传 DDoS 重放场景，共 313 个评估条目。Gemma-4-31B 评判模型从忠实性、正确性和可操作性三个维度，对照由完整抓包和日志撰写的参考答案打分；BGE 余弦相似度作为辅助信号。平均评判总分为 0.713（通过阈值 0.70），仅计五个受监督类别时为 0.755；综合得分为 0.778（仅受监督类别为 0.808）。缓解措施（0.849）和威胁模型推理（0.848）得分最高；刻意不参与训练的攻击方向类别得分为 0.515，通过率为 0.200。

作者指出了局限：评判模型的偏差得到约束但未被消除，且评估仅覆盖单一测试床上的 313 个前传 DDoS 重放场景。

## Key technical points (EN)
- Corpus: 69 security-relevant documents (O-RAN WG11 threat modelling, 3GPP TS 33.501, open-fronthaul security reports, plus NIST/ETSI/IETF/GSMA material) giving 2,832 fronthaul and 1,343 5G-core parent chunks.
- Training data: 5,448 valid question-answer pairs in total; Stage 1.1 uses 3,163 specification pairs, Stage 1.2 uses 4,363 (the same plus 1,200 flow-observation pairs); 815 validation and 270 test pairs.
- Six question classes: mitigation, threat model, spec grounding, detection signals, scenario severity expectation, and attack-direction reasoning (the last excluded from training as a held-out class).
- Judge weights: faithfulness 0.3, correctness 0.5, actionability 0.2; coverage is reported as a diagnostic only. Re-scoring with Qwen2.5-32B and Qwen2.5-72B judges gives mean overall scores of 0.728 and 0.776.
- Per-class pass rates at the primary judge: mitigation 0.875, threat model 0.756, spec grounding 0.525, detection signals 0.534, severity expectation 0.341, attack direction 0.200.
- The model runs as a 4-bit NF4-quantized Mistral-7B backbone with the Stage 1.2 LoRA adapter.

## Key technical points (ZH)
- 语料：69 份与安全相关的文档（O-RAN WG11 威胁建模、3GPP TS 33.501、开放前传安全报告，以及 NIST/ETSI/IETF/GSMA 资料），共 2,832 个前传父块和 1,343 个 5G 核心网父块。
- 训练数据：共 5,448 条有效问答对；阶段 1.1 使用 3,163 条规范问答对，阶段 1.2 使用 4,363 条（在前者基础上加入 1,200 条流观测问答对）；验证集 815 条、测试集 270 条。
- 六个问题类别：缓解措施、威胁模型、规范依据、检测信号、场景严重程度预期、攻击方向推理（最后一类作为留出类别，不参与训练）。
- 评判权重：忠实性 0.3、正确性 0.5、可操作性 0.2；覆盖度仅作诊断指标。用 Qwen2.5-32B 与 Qwen2.5-72B 作评判重新打分，平均总分分别为 0.728 和 0.776。
- 主评判下各类别通过率：缓解 0.875、威胁模型 0.756、规范依据 0.525、检测信号 0.534、严重程度预期 0.341、攻击方向 0.200。
- 模型以 4 位 NF4 量化的 Mistral-7B 为主干，加载阶段 1.2 的 LoRA 适配器运行。

## Why it matters / what's new (EN)
The KB already holds O-RAN security entries on the detection and analysis side (for example the O-RAN security graph entry of 2026-09-09); this paper adds a specification-driven LLM triage setup evaluated on an eCPRI fronthaul DDoS testbed. The per-class results show where the approach works (mitigation and threat-model answers, which have strong normative text to learn from) and where it does not (attack direction, severity expectation), with the held-out class giving a measured gap rather than an assumed one. Scores come from an LLM judge and a single testbed, so they should be read as relative measures.

## Why it matters / what's new (ZH)
知识库中已有 O-RAN 安全方面的检测与分析类条目（例如 2026-09-09 的 O-RAN 安全图条目）；本文增加了一种基于规范的大模型分诊方案，并在 eCPRI 前传 DDoS 测试床上完成评估。分类别结果显示该方法在哪些方面有效（有明确规范文本可学的缓解与威胁模型回答）、哪些方面不足（攻击方向、严重程度预期），留出类别给出的是实测差距而非假设。得分来自大模型评判和单一测试床，应作为相对指标看待。
