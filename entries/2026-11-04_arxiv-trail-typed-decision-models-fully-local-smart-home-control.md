---
id: 2026-11-04_arxiv-trail-typed-decision-models-fully-local-smart-home-control
date_published: 2026-10-31
date_found: 2026-11-04
technology: edge-ai
type: academic-paper
title_en: "Trail: Accurate Local Smart Home Control Using Decision Models"
title_zh: "Trail：基于决策模型的精确本地智能家居控制"
url: "https://arxiv.org/abs/2611.00610"
source_quality: full
topics: [smart-home, small-language-model, typed-decisions, device-registry, abstention, conversational-memory, HomeBench]
topic_primary: home-ai-assistant
topics_secondary: [home-edge-ai, on-device-inference]
novelty_score: 3
---

## Summary (EN)

The paper addresses natural-language smart home control where cloud-hosted LLMs raise privacy concerns and local small language models can emit invalid actions or misread requests. Trail replaces open-ended command generation with hierarchical typed decisions: a decision model scores candidate rooms, then devices, then operations, with candidates taken from the home's runtime device registry, and each level includes a "none" option. This restricts outputs to valid actions and allows the system to abstain when path confidence (the product of the selected probabilities) falls below a threshold of 0.27. A memory module keeps per-user preferences and device references in a local SQLite database and is routed through the same typed decisions.

The decision model is a Qwen3.5-4B-based model fine-tuned with rank-16 LoRA on about 100,000 sampled decisions. The authors extend HomeBench into three test sets: Trek-Base (about 14,166 requests over 100 homes), Trek-Robust (about 2,000 stress cases) and Trek-Memory (100 multi-turn conversations). Trail reaches 85.3% accuracy on Trek-Robust against 69.8% for a fine-tuned Qwen3.5-4B baseline, 86.2% on Trek-Base against 89.7% for that baseline, and 75.6% on memory-dependent turns against 42.5%.

## Summary (ZH)

论文针对自然语言智能家居控制：云端 LLM 带来隐私担忧，而本地小语言模型可能生成无效动作或误解请求。Trail 用分层的类型化决策取代开放式命令生成：决策模型依次为候选房间、设备、操作打分，候选来自家庭运行时设备注册表，每一层都含"无"选项。这把输出限制在有效动作内，并使系统在路径置信度（所选概率之积）低于 0.27 的阈值时可以弃权。记忆模块在本地 SQLite 数据库中保存每位用户的偏好与设备指代，并经由同样的类型化决策路由。

决策模型是基于 Qwen3.5-4B 的模型，用秩 16 的 LoRA 在约 100,000 个采样决策上微调。作者把 HomeBench 扩展为三个测试集：Trek-Base（100 个家庭约 14,166 条请求）、Trek-Robust（约 2,000 条压力用例）和 Trek-Memory（100 段多轮对话）。Trail 在 Trek-Robust 上准确率为 85.3%，微调的 Qwen3.5-4B 基线为 69.8%；在 Trek-Base 上为 86.2%，该基线为 89.7%；在依赖记忆的轮次上为 75.6%，基线为 42.5%。

## Key technical points (EN)

- **Search-space reduction**: choosing room, device and operation separately turns an R x D x O choice space into R + D + O.
- **Abstention**: calibrated with temperature scaling (T = 1.0); refusal threshold 0.27 and memory gate 0.74 set on validation data.
- **Memory**: preferences (values, optionally situation-bound) and references (user names for devices, recent devices); a routing decision sends statements to a write path, and memory is read before and after resolution.
- **Generalisation**: training on 80 homes gives nearly the same accuracy on 20 held-out homes (0.860 versus 0.859); weakest categories are new homes and unseen capabilities.
- **Latency**: median about 0.166 s on Trek-Base and 0.215 s with memory, measured on a single RTX A4500 with Hugging Face Transformers (baselines on vLLM). No embedded-hardware or memory-footprint numbers are reported.
- **Training data**: request rewordings were generated with GPT-5; baselines include prompted and fine-tuned Qwen3.5-4B, VCU-LLM, Domux, Sasha and AdaHome. The paper cites only the base model's repository and does not state a release of its own code or datasets.

## Key technical points (ZH)

- **缩小搜索空间**：分别选择房间、设备与操作，把 R x D x O 的选择空间变为 R + D + O。
- **弃权**：用温度缩放（T = 1.0）校准；拒绝阈值 0.27、记忆门限 0.74，在验证集上设定。
- **记忆**：偏好（取值，可绑定情境）与指代（用户对设备的称呼、最近使用的设备）；路由决策把语句送入写入路径，解析前后均读取记忆。
- **泛化**：用 80 个家庭训练，在 20 个留出家庭上准确率几乎相同（0.860 对 0.859）；最弱类别为新家庭与未见能力。
- **延迟**：Trek-Base 上中位数约 0.166 s，带记忆时 0.215 s，在单张 RTX A4500 上用 Hugging Face Transformers 测得（基线使用 vLLM）。论文未给出嵌入式硬件或内存占用数据。
- **训练数据**：请求改写由 GPT-5 生成；基线包括提示与微调的 Qwen3.5-4B、VCU-LLM、Domux、Sasha 和 AdaHome。论文仅引用基座模型的仓库，未说明自身代码或数据集是否发布。

## Why it matters / what's new (EN)

The paper's framing is that a local model for home control should be constrained by the home's own device registry instead of generating free text, trading 3.5 points on Trek-Base (86.2% vs 89.7%) for robustness to changes in the home. It speaks to where home-assistant intelligence runs and what it can actuate, but "local" here is demonstrated on a workstation-class GPU rather than on a hub or gateway; latency was measured on a single RTX A4500 GPU; no embedded or hub hardware is evaluated. v1 preprint from University of Illinois Urbana-Champaign authors.

## Why it matters / what's new (ZH)

论文的思路是：家居控制的本地模型应受家庭自身设备注册表约束，而不是生成自由文本，以在 Trek-Base 上让出 3.5 个百分点（86.2% 对 89.7%）来换取对家庭变化的鲁棒性。它涉及家庭助手的智能运行在哪里、能操控什么，但此处的"本地"是在工作站级 GPU 上演示的，而非在中枢或网关上；延迟在单张 RTX A4500 GPU 上测得，未评测任何嵌入式或中枢硬件。这是 v1 预印本，作者来自伊利诺伊大学厄巴纳-香槟分校。

## Images

None.
