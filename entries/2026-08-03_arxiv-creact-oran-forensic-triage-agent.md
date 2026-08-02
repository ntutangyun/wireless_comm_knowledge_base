---
id: 2026-08-03_arxiv-creact-oran-forensic-triage-agent
date_published: 2026-07-28
date_found: 2026-08-03
type: academic-paper
technology: cellular
title_en: "C-RE-ACT: a causal LLM agent for O-RAN forensic triage — attack or fault? 89% top-3 root-cause accuracy on a physical testbed"
title_zh: "C-RE-ACT：面向 O-RAN 取证分诊的因果 LLM 智能体——攻击还是故障？物理测试台上 89% 的 top-3 根因准确率"
url: "https://arxiv.org/abs/2607.25828"
source_quality: full
topics: [O-RAN, LLM-agent, causal-inference, security, RIC]
topic_primary: cellular-ai
topics_secondary: [open-ran, cellular-security]
novelty_score: 3
---

## Summary (EN)

C-RE-ACT (i2CAT Barcelona, NEC Laboratories Europe, UAB, ICREA — Costa-Pérez group; submitted 28 July 2026) attacks the incident-triage bottleneck in O-RAN operations: when a degradation alert fires, support engineers must quickly decide whether the ticket goes to network maintenance (a fault) or gets escalated to security operations (an attack). The paper builds the first agentic triage system for this decision, combining causal discovery over O-RAN telemetry with an LLM agent that reasons over the causal structure itself.

The pipeline has two tools. Tool 1 builds a causal ranked list: a Structural Agnostic Model (SAM) learns a weighted DAG over O-RAN metrics, then a confounder-penalized scoring rule downweights metrics whose variation is explained by routine UE dynamics — an adaptation aimed at the non-stationarity that plagues causal discovery on cellular data. Tool 2 is graph soft-prompting: the causal graph is encoded by a Graph Isomorphism Network into a continuous soft token aligned with a frozen Llama-3.1 embedding space, letting the LLM reason over graph structure without lossy text serialization. A ReAct-style loop (Identify → Verify → Synthesize) then produces a structured triage report naming suspect components and interfaces.

On a physical O-RAN testbed with 140 experiments injecting packet-loss and delay impairments at four severity levels across the A1, E2, F1-C and F1-U interfaces, the system places the true root cause in its top-3 candidates 89% of the time, classifies delay and packet-loss anomalies at 83–84% accuracy, and completes triage with a median end-to-end latency of 67.8 s. Graph soft-prompting more than triples accuracy over feeding the LLM a text-serialized graph (0.72 vs 0.22). The authors also release O-CIQA, an 840-triplet graph–question–answer dataset for fine-tuning graph encoders.

## Summary (ZH)

C-RE-ACT（巴塞罗那 i2CAT、NEC 欧洲实验室、UAB、ICREA——Costa-Pérez 团队；2026 年 7 月 28 日提交）针对 O-RAN 运维中的事件分诊瓶颈：告警触发后，支撑工程师必须快速决定工单走网络维护（故障）还是升级到安全运营（攻击）。论文构建了首个用于该决策的智能体分诊系统，将 O-RAN 遥测上的因果发现与在因果结构上推理的 LLM 智能体相结合。

流水线包含两个工具。工具 1 构建因果排序列表：结构不可知模型（SAM）在 O-RAN 指标上学习加权有向无环图，再用「混杂因子惩罚」评分规则对可由常规 UE 动态解释的指标降权——专门应对蜂窝数据非平稳性对因果发现的干扰。工具 2 是图软提示：因果图经图同构网络（GIN）编码为与冻结的 Llama-3.1 嵌入空间对齐的连续软 token，使 LLM 无需有损的文本序列化即可对图结构推理。随后 ReAct 式循环（识别 → 验证 → 综合）产出指认可疑组件与接口的结构化分诊报告。

在物理 O-RAN 测试台上进行的 140 组实验（在 A1、E2、F1-C、F1-U 接口注入四个严重级别的丢包与时延损伤）中，系统 89% 的情况下将真实根因排入 top-3 候选，时延/丢包异常分类准确率 83–84%，端到端分诊中位时延 67.8 秒。图软提示的准确率是文本序列化基线的三倍以上（0.72 对 0.22）。作者同时发布 O-CIQA 数据集（840 个图-问-答三元组）用于微调图编码器。

## Key technical points (EN)

- Two-tool agentic pipeline: SAM-learned causal DAG with confounder-penalized ranking + GIN-encoded graph soft token aligned to a frozen Llama-3.1 — no LLM fine-tuning of the base model.
- Graph soft-prompting beats text-serialized graphs 0.72 vs 0.22 — structure-preserving encoding is the load-bearing design choice.
- 89% top-3 root-cause hit rate, 83–84% anomaly classification, 67.8 s median triage latency across 140 physical-testbed experiments on A1/E2/F1-C/F1-U.
- ReAct loop (Identify → Verify → Synthesize) outputs structured reports naming suspect components/interfaces — designed to slot into existing ticket-routing workflows.
- O-CIQA dataset (840 graph–QA triplets) released for graph-encoder fine-tuning.

## Key technical points (ZH)

- 双工具智能体流水线：SAM 学习的因果 DAG + 混杂因子惩罚排序，GIN 编码的图软 token 对齐冻结的 Llama-3.1——基础模型无需微调。
- 图软提示以 0.72 对 0.22 大幅超越文本序列化基线——保结构编码是承重设计。
- 140 组物理测试台实验（A1/E2/F1-C/F1-U）：top-3 根因命中率 89%，异常分类 83–84%，分诊中位时延 67.8 秒。
- ReAct 循环（识别 → 验证 → 综合）输出指认组件/接口的结构化报告——可直接嵌入现有工单路由流程。
- 发布 O-CIQA 数据集（840 个图-问-答三元组）供图编码器微调。

## Why it matters / what's new (EN)

The KB's agentic-O-RAN thread has been converging on this shape from two directions: LLM agents for RAN operations (2026-06-23's LLM gNB configuration work, the agentic AI-RAN cluster) and causality for network diagnosis. C-RE-ACT is the first entry to fuse them — and the first to target the security-vs-fault *triage* decision specifically, which is operationally upstream of both root-cause analysis and intrusion response. The graph-soft-prompting result (3.2× over text serialization) is a transferable lesson for any agent that must reason over network topology or causal telemetry — including the Wi-Fi-side agentic work this KB tracks under agentic-wifi.

## Why it matters / what's new (ZH)

本库的智能体 O-RAN 主线一直从两个方向向此收敛：面向 RAN 运维的 LLM 智能体（2026-06-23 的 LLM gNB 配置工作、agentic AI-RAN 集群）与面向网络诊断的因果推断。C-RE-ACT 是首个融合两者的条目——也是首个专门针对「安全还是故障」分诊决策的条目，该决策在运维上位于根因分析与入侵响应的上游。图软提示的结果（较文本序列化高 3.2 倍）对任何需要在网络拓扑或因果遥测上推理的智能体都是可迁移的经验——包括本库在 agentic-wifi 下追踪的 Wi-Fi 侧智能体工作。
