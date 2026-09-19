---
id: 2026-09-19_mlcommons-mlperf-client-v2-agentic-image-gen
date_published: 2026-08-18
date_found: 2026-09-19
technology: edge-ai
type: product
title_en: "MLPerf Client v2.0 adds Agentic AI and Image Generation categories to AI PC benchmarking"
title_zh: "MLPerf Client v2.0 为 AI PC 基准测试新增智能体 AI 与图像生成测试类别"
url: "https://mlcommons.org/2026/08/mlperf-client-v2-0/"
source_quality: full
topics: [MLPerf-Client, benchmark, AI-PC, agentic-AI, image-generation]
topic_primary: ai-pc
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

MLCommons released MLPerf Client v2.0 on 18 August 2026, the next version of its industry-collaborative client benchmark. MLCommons describes MLPerf as "the de facto standard for evaluating AI performance." v2.0's headline additions are two new benchmark categories beyond the v1.x LLM-focused scope: an Agentic AI category measuring "Software Engineering (SWE) Agent" and "Data Analyst Agent" scenarios, reporting end-to-end performance with an explicit breakdown of LLM-inference time versus tool-execution time; and an Image Generation category, which the announcement describes as using Flux.2 klein 4B as an "experimental" test model. The LLM side is also updated: Phi 4 Mini Instruct upgrades Phi 3.5 mini instruct in the required workloads, Qwen 3 8B is added as an experimental model, and a new "Intermediate Summarization" task with an input prompt of roughly 4K tokens is introduced. The benchmark continues to report both responsiveness and throughput metrics, and remains a collaboration among AMD, Intel, Microsoft, NVIDIA, Qualcomm Technologies and unnamed PC OEM partners.

The important caveat, read directly from the release announcement: this is a methodology release, not a results round. MLPerf Client v2.0 is "freely available for download," but the announcement itself contains no benchmark numbers for any named hardware configuration — vendors and OEMs now have the tooling to submit v2.0 scores, but no v2.0 results have been published as of this entry.

## Summary (ZH)

MLCommons 于 2026 年 8 月 18 日发布了 MLPerf Client v2.0，这是其行业协作客户端基准测试的新版本。MLCommons 将 MLPerf 称为"评估 AI 性能事实上的标准"。v2.0 版本的核心新增内容是在此前 v1.x 版本仅覆盖 LLM 的基础上新增两个测试类别：智能体 AI（Agentic AI）类别，测量"软件工程（SWE）智能体"与"数据分析智能体"场景，报告端到端性能并明确拆分 LLM 推理时间与工具执行时间；以及图像生成（Image Generation）类别，公告称其采用 Flux.2 klein 4B 作为"实验性"测试模型。LLM 测试侧也有更新：Phi 4 Mini Instruct 在必测工作负载中取代了 Phi 3.5 mini instruct，新增 Qwen 3 8B 作为实验性模型，并引入一项输入约为 4K token 的新"中等长度摘要"任务。该基准测试继续同时报告响应性与吞吐量指标，仍由 AMD、Intel、Microsoft、NVIDIA、Qualcomm Technologies 及未具名 PC OEM 伙伴共同协作完成。

需要明确指出的重要限定（直接读自发布公告本身）：这是一次方法论发布，而非结果轮次。MLPerf Client v2.0"可免费下载"，但公告本身未包含任何具名硬件配置的评测数字——厂商与 OEM 目前具备了提交 v2.0 成绩的工具，但截至本条目撰写时尚无任何 v2.0 结果发布。

## Key technical points (EN)

- **Release**: MLPerf Client v2.0, published 18 August 2026 by MLCommons; a collaboration among AMD, Intel, Microsoft, NVIDIA, Qualcomm Technologies and unnamed PC OEMs.
- **New: Agentic AI category**: Software Engineering (SWE) Agent and Data Analyst Agent scenarios; reports end-to-end performance with an explicit LLM-inference vs. tool-execution time breakdown.
- **New: Image Generation category**: Flux.2 klein 4B as an experimental test model.
- **LLM updates**: Phi 4 Mini Instruct upgrades Phi 3.5 mini instruct in the required workloads; Qwen 3 8B added as experimental; new ~4K-token "Intermediate Summarization" task.
- **Metrics**: continues reporting both responsiveness and throughput, consistent with the prior v1.5 release.
- **What this release is NOT**: a results round. No benchmark numbers for any named hardware are published in the announcement itself — the tooling exists, submissions have not yet landed.

## Key technical points (ZH)

- **发布**：MLPerf Client v2.0，由 MLCommons 于 2026 年 8 月 18 日发布；由 AMD、Intel、Microsoft、NVIDIA、Qualcomm Technologies 及未具名 PC OEM 厂商协作完成。
- **新增：智能体 AI 类别**：软件工程（SWE）智能体与数据分析智能体场景；报告端到端性能，并明确拆分 LLM 推理时间与工具执行时间。
- **新增：图像生成类别**：以 Flux.2 klein 4B 作为实验性测试模型。
- **LLM 更新**：Phi 4 Mini Instruct 在必测工作负载中取代了 Phi 3.5 mini instruct；新增 Qwen 3 8B 作为实验性模型；新增约 4K token 的"中等长度摘要"任务。
- **指标**：延续此前 v1.5 版本的模式，同时报告响应性与吞吐量。
- **本次发布并不包含的内容**：结果轮次。公告本身未公布任何具名硬件的评测数字——工具已就绪，但尚无提交结果落地。

## Why it matters / what's new (EN)

The two new categories are directly relevant to two open threads in this KB: Agentic AI benchmarking connects to this same run's Agent-X entry (on-device agent latency) and prior compute-offloading/edge-orchestration entries about agent workflows, while Image Generation benchmarking is the first image-generation benchmark in this KB's edge-AI coverage. The entry is filed as a tool/methodology release rather than a results entry — the actual vendor-hardware numbers that would close the domain's disclosure gap have not yet been published.

## Why it matters / what's new (ZH)

两个新增类别与本知识库内两条已有线索直接相关：智能体 AI 基准测试与本次运行收录的 Agent-X 条目（端侧智能体时延）以及此前关于智能体工作流的 compute-offloading/edge-orchestration 条目相呼应；图像生成基准测试则是本知识库 Edge AI 板块内首次收录的图像生成类基准测试。本条目以工具/方法论发布的形式收录，而非结果条目——真正能够弥合本领域披露缺口的具名厂商硬件数字，目前尚未发布。

## Images

*(No redistributable images for this entry — methodology-release announcement, no benchmark result charts exist yet.)*
