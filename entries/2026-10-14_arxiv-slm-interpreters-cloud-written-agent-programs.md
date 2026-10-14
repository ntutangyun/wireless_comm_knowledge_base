---
id: 2026-10-14_arxiv-slm-interpreters-cloud-written-agent-programs
date_published: 2026-10-09
date_found: 2026-10-14
technology: edge-ai
type: academic-paper
title_en: "Should SLMs be in the driver's seat? Local small models as interpreters inside cloud-written agent programs"
title_zh: "小模型该坐驾驶位吗？本地小模型在云端编写的智能体程序中充当解释器"
url: "https://arxiv.org/abs/2610.14209"
source_quality: full
topics: [SLM, agents, AppWorld, privacy, cloud-device-split, NeurIPS-workshop]
topic_primary: compute-offloading
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Radovic, Canini and Pejovic (accepted at the SLM-Agents workshop, NeurIPS 2026) study how to split an LLM agent between a cloud model and a small language model (SLM) on the user's device. The two usual options each fail on one axis: a cloud-hosted ReAct agent is accurate but reads the user's private data, while a purely on-device small-model agent keeps data local but succeeds far less often (in their AppWorld runs, no model below five billion parameters exceeds 5.9% success on Test Normal or 3.8% on Test Challenge). A third option, where the cloud model writes a program that the device executes, keeps data local but fails whenever a step needs to interpret runtime content.

The authors propose a middle design. The cloud model writes the program, and where it needs interpretation it calls a function that sends a bounded question about user data to the local SLM. The SLM only answers atomic questions and is never asked to plan. Cloud models are Qwen3.6 27B, Qwen3.5 122B-A10B and Qwen3-coder-next; local SLMs are Qwen3.5 models up to 9B.

On AppWorld the method raises the success rate of the code-only (function-calling) agent in all six backbone-by-partition combinations, by 2.2 to 14.9 percentage points (Qwen-27B on Test Normal: 45.8% to 60.7%); gains on the harder Test Challenge partition are smaller. With the same 9B model on the client, the SLM agent reaches 52.4% versus 45.2% for a fully local ReAct agent (Qwen-122B planner, Test Normal), while the client processes between one and two orders of magnitude fewer input tokens and generates 1.8x fewer output tokens. The authors state that token counts are proxies and that latency and energy on real devices were not measured.

## Summary (ZH)

Radovic、Canini 与 Pejovic（已被 NeurIPS 2026 SLM-Agents 研讨会接收）研究如何在云端模型与用户设备上的小语言模型（SLM）之间拆分 LLM 智能体。常见两种方案各有短板：云端 ReAct 智能体准确，但要读取用户私有数据；纯端侧小模型智能体数据留在本地，但成功率低得多（在其 AppWorld 实验中，参数量低于 50 亿的模型在 Test Normal 上不超过 5.9%、在 Test Challenge 上不超过 3.8%）。第三种方案是由云端模型编写程序、设备执行，数据留在本地，但一旦某一步需要解读运行时内容就会失败。

作者提出折中设计：云端模型编写程序，需要解读时调用一个函数，把关于用户数据的有界问题交给本地 SLM。SLM 只回答原子问题，从不负责规划。云端模型为 Qwen3.6 27B、Qwen3.5 122B-A10B 和 Qwen3-coder-next；本地 SLM 为最大 9B 的 Qwen3.5 模型。

在 AppWorld 上，该方法使纯代码（函数调用）智能体的成功率在全部六种骨干模型与测试分区的组合中都有提升，幅度为 2.2 至 14.9 个百分点（Qwen-27B 在 Test Normal：45.8% 升至 60.7%）；在更难的 Test Challenge 分区上提升较小。在客户端使用同一个 9B 模型时，SLM 智能体成功率为 52.4%，全本地 ReAct 智能体为 45.2%（Qwen-122B 规划器，Test Normal），而客户端处理的输入 token 少一到两个数量级、输出 token 少 1.8 倍。作者说明 token 数只是代理指标，未在真实设备上测量延迟与能耗。

## Key technical points (EN)

- Cloud LLM writes a program; a local SLM is called through an ordinary function only for bounded questions about user data; the SLM never plans.
- Benchmark: AppWorld (Test Normal / Test Challenge); cloud Qwen3.6 27B, Qwen3.5 122B-A10B, Qwen3-coder-next; SLMs Qwen3.5 up to 9B.
- Gain over the code-only agent: +2.2 to +14.9 pp across all six combinations; Qwen-27B Test Normal 45.8% to 60.7%.
- Same 9B on the client: 52.4% (SLM agent) vs 45.2% (local ReAct) (Qwen-122B planner, Test Normal); 1 to 2 orders of magnitude fewer client input tokens, 1.8x fewer output tokens; peak context about 3x smaller (median 3.7k vs 12.0k tokens).
- Pure on-device agents below 5B parameters stay under 5.9% (Test Normal) and 3.8% (Test Challenge).
- Limitations stated: token counts used as proxy; device latency and energy not measured.

## Key technical points (ZH)

- 云端 LLM 编写程序；仅在需要回答关于用户数据的有界问题时，通过普通函数调用本地 SLM；SLM 从不做规划。
- 基准：AppWorld（Test Normal / Test Challenge）；云端 Qwen3.6 27B、Qwen3.5 122B-A10B、Qwen3-coder-next；SLM 为最大 9B 的 Qwen3.5。
- 相对纯代码智能体的提升：六种组合全部提升 2.2 至 14.9 个百分点；Qwen-27B 在 Test Normal 由 45.8% 升至 60.7%。
- 客户端同为 9B：SLM 智能体 52.4%，本地 ReAct 45.2%（Qwen-122B 规划器，Test Normal）；客户端输入 token 少 1 至 2 个数量级、输出 token 少 1.8 倍；峰值上下文约小 3 倍（中位数 3.7k 对 12.0k token）。
- 参数低于 5B 的纯端侧智能体仍不超过 5.9%（Test Normal）和 3.8%（Test Challenge）。
- 作者说明的局限：以 token 数作代理；未测量设备延迟与能耗。

## Why it matters / what's new (EN)

This is a compute-placement result for agents: it moves the local model from "run the whole agent" to "answer one bounded question", and quantifies what that buys in client tokens and success rate while keeping private data on the device. It complements the home-automation call-site study already in the KB (2026-10-12_arxiv-small-models-home-automation-call-sites) by addressing the cloud-planner / local-interpreter split rather than which calls can use a small model. Device-side latency and energy remain unmeasured.

## Why it matters / what's new (ZH)

这是面向智能体的计算放置结果：把本地模型的角色从"运行整个智能体"改为"回答一个有界问题"，并量化了这样做在客户端 token 与成功率上的收益，同时让私有数据留在设备上。它与 KB 中已有的家居自动化调用点研究（2026-10-12_arxiv-small-models-home-automation-call-sites）互补：本文讨论云端规划器与本地解释器的拆分，而非哪些调用可以改用小模型。设备端延迟与能耗仍未测量。

## Images

*(No redistributable images for this entry.)*
