---
id: 2026-10-14_arxiv-peam-on-device-llm-network-configuration-agent
date_published: 2026-10-10
date_found: 2026-10-14
technology: edge-ai
type: academic-paper
title_en: "PEAM: an on-device LLM agent that distils user history into network-configuration rules executed in milliseconds"
title_zh: "PEAM：把用户历史提炼为毫秒级可执行网络配置规则的端侧 LLM 智能体"
url: "https://arxiv.org/abs/2610.14855"
source_quality: full
topics: [on-device-LLM, mobile-agent, network-configuration, rule-distillation, LoRA, W4A16, smartphone]
topic_primary: on-device-inference
topics_secondary: [edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

PEAM (Zhejiang University and OPPO) is an on-device LLM agent for personalised mobile network configuration: choosing access networks, WiFi access points and SIM cards when the user switches apps or connectivity changes. The authors' premise is that such decisions sit on a latency-critical path, so calling an LLM at decision time is too slow, and existing LLM approaches for Wi-Fi roaming or cellular handover act as reactive decision engines.

PEAM splits the work in two. In the rule-generation phase, run when the device is idle (for example overnight), a fine-tuned compact model (Qwen3-4B with LoRA by default) analyses historical configuration records in batches, reflects across batches to consolidate consistent evidence, and builds a user profile from high-confidence rules that is fed into the next cycle. In the rule-execution phase, triggered by a context change, PEAM retrieves a matching rule from the rule library instead of running the LLM. Rule confidence is updated by whether the user accepts or rejects the proposal.

Data came from a month of records from 51 real users (used to seed 300 simulated users) and about two months of records from 82 held-out real users. On the simulated-user dataset, the fine-tuned 4B model reaches 99.13% rule-execution accuracy and a 92.50% triggered-rule ratio, 4.41 and 84.50 points above the expert-rule method. On the real-user dataset all methods degrade: PEAM reaches 72.34% (Qwen3.5-Flash 74.99%), with the highest rule coverage (25.86%). A W4A16-quantised AndesVL-4B variant deployed on an OPPO Find X9 Pro (MediaTek Dimensity 9500) completes rule retrieval in 0.5730 ms, while the offline reasoning tasks take about 9 to 59 s per inference on the phone.

## Summary (ZH)

PEAM（浙江大学与 OPPO）是一个用于个性化移动网络配置的端侧 LLM 智能体：当用户切换应用或连接状态变化时，选择接入网络、WiFi 接入点和 SIM 卡。作者的前提是此类决策位于延迟敏感路径，在决策时刻调用 LLM 太慢，而现有用于 Wi-Fi 漫游或蜂窝切换的 LLM 方法只是被动的决策引擎。

PEAM 把工作分成两段。规则生成阶段在设备空闲时（例如夜间）运行：经微调的紧凑模型（默认 Qwen3-4B 加 LoRA）分批分析历史配置记录，跨批反思以整合一致证据，并由高置信规则构建用户画像，供下一轮使用。规则执行阶段由上下文变化触发，PEAM 从规则库检索匹配规则，而不运行 LLM。规则置信度依据用户是否接受建议来更新。

数据来自 51 名真实用户一个月的记录（用于生成 300 个模拟用户）以及 82 名留出真实用户约两个月的记录。在模拟用户数据集上，微调的 4B 模型规则执行准确率达 99.13%、触发规则占比 92.50%，分别比专家规则方法高 4.41 和 84.50 个百分点。在真实用户数据集上所有方法的表现均下降：PEAM 为 72.34%（Qwen3.5-Flash 为 74.99%），规则覆盖率最高（25.86%）。部署在 OPPO Find X9 Pro（联发科天玑 9500）上的 W4A16 量化 AndesVL-4B 变体完成规则检索仅需 0.5730 ms，而离线推理任务在手机上每次约需 9 至 59 s。

## Key technical points (EN)

- Two phases: offline LLM rule generation when idle (batch analysis, cross-batch reflection, user profile) and online rule retrieval on context change.
- Backbone Qwen3-4B with LoRA (A100 training); AndesVL-4B W4A16 variant on OPPO Find X9 Pro / Dimensity 9500.
- Data: 51 real users for a month (seeding 300 simulated users); 82 held-out real users for about two months.
- Simulated-user set: 99.13% rule-execution accuracy, 92.50% triggered-rule ratio; +4.41 and +84.50 points over an expert-rule baseline. Real-user set: all methods degrade; PEAM 72.34% vs Qwen3.5-Flash 74.99%, with the highest rule coverage (25.86%).
- On-phone rule retrieval 0.5730 ms; offline reasoning tasks about 9 to 59 s each on the phone, off the critical path.
- Rule confidence updated from user accept/reject; low-confidence rules discarded.

## Key technical points (ZH)

- 两阶段：设备空闲时离线用 LLM 生成规则（分批分析、跨批反思、用户画像），上下文变化时在线检索规则。
- 骨干 Qwen3-4B 加 LoRA（A100 训练）；AndesVL-4B 的 W4A16 变体部署于 OPPO Find X9 Pro / 天玑 9500。
- 数据：51 名真实用户一个月（用于生成 300 个模拟用户）；82 名留出真实用户约两个月。
- 模拟用户数据集：规则执行准确率 99.13%，触发规则占比 92.50%；相对专家规则基线分别高 4.41 与 84.50 个百分点。真实用户数据集：所有方法均下降；PEAM 为 72.34%，Qwen3.5-Flash 为 74.99%，PEAM 规则覆盖率最高（25.86%）。
- 手机端规则检索 0.5730 ms；离线推理任务在手机上每次约 9 至 59 s，不在关键路径上。
- 规则置信度依据用户接受/拒绝更新，低置信规则被丢弃。

## Why it matters / what's new (EN)

The paper's key idea is to decouple LLM deliberation from latency-critical execution: reasoning runs when the phone is idle and is distilled into condition–action rules; on the phone, rule retrieval takes 0.573 ms and applying the switch 94–614 ms. The application domain is access-network selection (Wi-Fi AP, cellular SIM); the contribution here is the agent architecture and its on-device cost, not a change to any radio mechanism. The 99.13% and 92.50% figures are from the simulated-user dataset; on the real-user dataset PEAM reaches 72.34%, below Qwen3.5-Flash (74.99%).

## Why it matters / what's new (ZH)

论文的核心思路是把 LLM 推演与延迟敏感的执行解耦：推理在手机空闲时进行，并提炼为条件-动作规则；在手机上，规则检索耗时 0.573 ms，执行切换耗时 94–614 ms。应用领域是接入网络选择（Wi-Fi AP、蜂窝 SIM）；本文贡献在于智能体架构及其端侧开销，而不是对任何无线机制的改动。99.13% 与 92.50% 来自模拟用户数据集；在真实用户数据集上 PEAM 为 72.34%，低于 Qwen3.5-Flash（74.99%）。

## Images

*(No redistributable images for this entry.)*
