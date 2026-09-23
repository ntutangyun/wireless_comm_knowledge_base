---
id: 2026-09-23_arxiv-arid-maintenance-work-orders-jetson
date_published: 2026-09-20
date_found: 2026-09-23
technology: edge-ai
type: academic-paper
title_en: "ARID: A Deployable Edge AI System for Structured Information Extraction from Industrial Maintenance Work Orders"
title_zh: "ARID：面向工业维护工单结构化信息抽取的可部署边缘 AI 系统"
url: "https://arxiv.org/abs/2609.23582"
source_quality: full
topics: [edge-deployment, Jetson-Orin-NX, 4-bit-inference, grammar-constrained-decoding, industrial-NLP]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

Kuanlin Chen (Independent Researcher, Taoyuan, Taiwan) and Chen-Wei Kuo (National Tsing Hua University, Hsinchu, Taiwan) submitted this paper to arXiv on 20 September 2026; it has been accepted for publication at IEEE IECON 2026. ARID ("Aviation-inspired Routing for Industrial Deployment") targets a specific offline-deployment problem: technician-written maintenance work orders must be converted into fixed-schema JSON (component, failure mode, symptom, maintenance action) on embedded hardware, often air-gapped from the network, so that downstream CMMS (computerized maintenance management system) software can validate records deterministically. The paper frames ARID as a hardware-aware pipeline rather than a new foundation model, combining five pieces: offline, two independent teacher models propose structured labels, and a conservative agreement filter plus a targeted Noise-Aware Synthetic Distillation (NASD) step build the fine-tuning set; online, a semantic gate makes one routing decision per work order about whether to apply a domain adapter, a 4-bit-quantized model performs the extraction, and Grammar-Constrained Decoding (GCD) enforces valid JSON syntax at generation time.

From 2,326 unlabeled records in the OMIn dataset, the pipeline retains 716 training pairs plus 99 topology-constrained NASD records targeting the action field specifically. On 300 human-labeled OMIn records, ARID reaches 84.8% token-F1 on its RTX reference stack (bitsandbytes 4-bit + outlines) and 82.9% after conversion to the deployed stack (llama.cpp Q4_K_M) on an 8GB NVIDIA Jetson Orin NX — a 1.9 percentage-point cost from the reference-to-deployment conversion. Measured on the physical Jetson (N=300, batch size 1, 20W mode): resident serving (adapter already loaded via llama-server) achieves 5,310ms/5,656ms P50/P99 latency at 12.5W; a cold-swap path that reloads the adapter from disk via llama-cli adds roughly 1,495ms of disk-load cost, reaching 6,805ms/11,481ms P50/P99. A low-resource ablation (N=100 pseudo-labeled subset) found NASD's overall token-F1 effect not statistically significant (+0.4pp, Wilcoxon p=0.086) but its action-field-specific effect significant (+1.56pp, McNemar p<0.001) — i.e., NASD is a targeted intervention for one field under data scarcity, not the source of ARID's overall accuracy. On a zero-shot transfer test to the different MaintNet dataset, JSON parser success stays at ≥99.8% while semantic token-F1 falls to 46.4%, which the authors read as evidence that the grammar-enforced output *format* transfers across domains but the *field-level vocabulary/semantics* do not. As a deployment-context reference point (not a matched-supervision comparison), a cloud API zero-shot call to OpenAI's GPT-5-Nano (gpt-5-nano-2025-08-07, evaluated 21 March 2026) scored 67.3% F1 on the same task — below ARID's fine-tuned, 4-bit, on-device 82.9%.

## Summary (ZH)

Kuanlin Chen（独立研究者，台湾桃园）与 Chen-Wei Kuo（台湾新竹清华大学）于 2026 年 9 月 20 日向 arXiv 提交本文，论文已被 IEEE IECON 2026 接收。ARID（"Aviation-inspired Routing for Industrial Deployment"，受航空业启发的工业部署路由方案）针对的是一个具体的离线部署问题：技术人员撰写的维护工单必须在嵌入式硬件上（往往与网络物理隔离）转换为固定 schema 的 JSON（部件、故障模式、症状、维护动作），以便下游 CMMS（计算机化维护管理系统）软件对记录做确定性校验。论文将 ARID 定位为一条硬件感知的流水线，而非一个新的基础模型，由五个环节组成：离线阶段，两个独立的教师模型分别给出结构化标签，随后通过保守的一致性过滤器与一个针对性的噪声感知合成蒸馏（NASD）步骤构建微调数据集；在线阶段，一个语义门控针对每份工单做一次路由决策——是否启用领域适配器，随后由一个 4-bit 量化模型完成抽取，并由语法约束解码（GCD）在生成时强制保证 JSON 语法合法。

从 OMIn 数据集的 2,326 条未标注记录中，该流水线保留了 716 对训练数据，外加 99 条专门针对"维护动作"字段的拓扑约束 NASD 记录。在 300 条人工标注的 OMIn 记录上，ARID 在其 RTX 参考技术栈（bitsandbytes 4-bit + outlines）上达到 84.8% 的 token-F1，转换为部署技术栈（llama.cpp Q4_K_M）、运行在 8GB 显存的 NVIDIA Jetson Orin NX 上后降为 82.9%——参考栈到部署栈的转换代价为 1.9 个百分点。在真实 Jetson 硬件上实测（N=300，batch size 为 1，20W 模式）：常驻服务模式（适配器已通过 llama-server 加载）的 P50/P99 时延为 5,310ms/5,656ms，功耗 12.5W；通过 llama-cli 从磁盘重新加载适配器的冷启动路径则额外增加约 1,495ms 的磁盘加载开销，P50/P99 达到 6,805ms/11,481ms。一项低资源消融实验（N=100 伪标注子集）发现，NASD 对整体 token-F1 的提升在统计上不显著（+0.4 个百分点，Wilcoxon 检验 p=0.086），但对"维护动作"字段的提升显著（+1.56 个百分点，McNemar 检验 p<0.001）——即 NASD 是在数据稀缺场景下针对某一字段的定向干预手段，而非 ARID 整体准确率的主要来源。在向另一个不同数据集 MaintNet 做零样本迁移测试时，JSON 解析成功率仍保持在 ≥99.8%，但语义 token-F1 降至 46.4%，作者据此认为：由语法强制保证的输出*格式*可以跨领域迁移，但*字段级词汇/语义*无法迁移。作为部署场景下的参照对象（而非同等监督条件下的对比），调用 OpenAI GPT-5-Nano 云端 API 做零样本推理（gpt-5-nano-2025-08-07，2026 年 3 月 21 日测得）在同一任务上得分为 67.3% F1——低于 ARID 经微调、4-bit 量化、端侧部署后的 82.9%。

## Key technical points (EN)

- **Task**: convert noisy technician-written maintenance work orders into fixed-schema JSON (component/failure mode/symptom/action) on embedded, often air-gapped hardware.
- **Pipeline**: offline dual-teacher labeling + conservative agreement filter + targeted NASD (Noise-Aware Synthetic Distillation) for data construction; online semantic-gated adapter routing + 4-bit inference + Grammar-Constrained Decoding (GCD).
- **Data**: 2,326 unlabeled OMIn records -> 716 retained training pairs + 99 NASD records targeting the action field.
- **Accuracy**: 84.8% token-F1 (RTX reference, bitsandbytes 4-bit + outlines) vs. 82.9% deployed (llama.cpp Q4_K_M on 8GB Jetson Orin NX) — 1.9pp reference-to-deployment cost.
- **Measured Jetson latency** (N=300, batch 1, 20W): resident serving 5,310/5,656ms P50/P99 at 12.5W; cold-swap adds ~1,495ms disk-load, reaching 6,805/11,481ms P50/P99.
- **NASD ablation**: overall +0.4pp (not significant, p=0.086) but action-field +1.56pp (significant, p<0.001) — a targeted, not general, effect.
- **Zero-shot transfer to MaintNet**: parser success ≥99.8% (format transfers) but semantic F1 falls to 46.4% (field semantics don't transfer).
- **Reference point**: cloud GPT-5-Nano zero-shot scores 67.3% F1 on the same task — below ARID's on-device 82.9% (not a matched-supervision comparison).
- Venue: accepted at IEEE IECON 2026.

## Key technical points (ZH)

- **任务**：在嵌入式（往往与网络隔离）硬件上，将嘈杂的技术人员维护工单转换为固定 schema 的 JSON（部件/故障模式/症状/维护动作）。
- **流水线**：离线阶段双教师标注 + 保守一致性过滤 + 针对性 NASD（噪声感知合成蒸馏）构建数据集；在线阶段语义门控的适配器路由 + 4-bit 推理 + 语法约束解码（GCD）。
- **数据**：2,326 条未标注 OMIn 记录 -> 保留 716 对训练数据 + 99 条针对"维护动作"字段的 NASD 记录。
- **准确率**：RTX 参考栈（bitsandbytes 4-bit + outlines）84.8% token-F1，对比部署栈（llama.cpp Q4_K_M，8GB Jetson Orin NX）82.9%——参考到部署的转换代价为 1.9 个百分点。
- **Jetson 实测时延**（N=300，batch size 1，20W 模式）：常驻服务 P50/P99 为 5,310ms/5,656ms，功耗 12.5W；冷启动额外增加约 1,495ms 磁盘加载开销，达到 6,805ms/11,481ms。
- **NASD 消融**：整体提升 +0.4 个百分点（不显著，p=0.086），但"维护动作"字段提升 +1.56 个百分点（显著，p<0.001）——是定向而非全局效果。
- **向 MaintNet 零样本迁移**：解析成功率 ≥99.8%（格式可迁移），但语义 F1 降至 46.4%（字段语义不可迁移）。
- **参照对比**：云端 GPT-5-Nano 零样本在同一任务上得分 67.3% F1——低于 ARID 端侧部署的 82.9%（非同等监督条件下的对比）。
- 发表会议：已被 IEEE IECON 2026 接收。

## Why it matters / what's new (EN)

This KB already covers several on-device LLM deployment systems measured on real Jetson hardware (e.g. PELM's DVFS + speculative decoding on Jetson AGX Orin/Orin Nano, 2026-09-10_arxiv-pelm-power-efficient-on-device-llm-dvfs). ARID adds a distinct angle: a complete, hardware-aware pipeline purpose-built for a narrow but concrete industrial task (structured extraction from maintenance work orders) under an air-gapped constraint, with an explicit reference-to-deployment accuracy cost measured (not merely a deployed-only number) and an honest zero-shot transfer result that separates output-format robustness from field-semantic robustness — a distinction papers in this bin rarely isolate as cleanly.

## Why it matters / what's new (ZH)

本知识库已覆盖多个在真实 Jetson 硬件上实测的端侧 LLM 部署系统（例如 PELM 在 Jetson AGX Orin/Orin Nano 上结合 DVFS 与推测解码，见 2026-09-10_arxiv-pelm-power-efficient-on-device-llm-dvfs）。ARID 带来了一个不同的角度：一条完整的、硬件感知的流水线，专为一个范围狭窄但具体的工业任务（维护工单结构化抽取）在网络隔离约束下打造，明确测量了参考栈到部署栈之间的准确率损耗（而非只给出部署后的单一数字），并给出了一个诚实的零样本迁移结果——将"输出格式的鲁棒性"与"字段语义的鲁棒性"清晰区分开来，这一区分在同类论文中很少被如此干净地隔离验证。

## Images

![ARID system overview: offline dual-teacher data construction and online routed 4-bit inference with grammar-constrained decoding | ARID 系统总览：离线双教师数据构建与在线路由式 4-bit 推理 + 语法约束解码](https://arxiv.org/html/2609.23582v1/fig1_arid_system_overview.png)
