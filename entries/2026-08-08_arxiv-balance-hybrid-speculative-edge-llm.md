---
id: 2026-08-08_arxiv-balance-hybrid-speculative-edge-llm
date_published: 2026-08-06
date_found: 2026-08-08
type: academic-paper
technology: cellular
title_en: "BALANCE: Hybrid Autoregressive-Speculative LLM Inference in Wireless Edge"
title_zh: "BALANCE：无线边缘的自回归—推测混合 LLM 推理"
url: "https://arxiv.org/abs/2608.05926"
source_quality: abstract_only
topics: [MEC, edge-AI, LLM-inference, speculative-decoding, resource-allocation]
topic_primary: mec
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

Qu, Chen, Chen, Leung, and Chen (submitted 6 Aug 2026) tackle a scheduling problem specific to serving large language models from a wireless edge server. Two decoding modes trade off differently: **autoregressive decoding (AD)** emits one token at a time — low memory, high latency — while **speculative decoding (SD)** uses a small draft model to propose several tokens for the large model to verify in one pass — faster, but it consumes extra memory for the draft model and the verification batch. Most systems pick one mode for the whole server.

BALANCE runs **both modes simultaneously on the same edge server** and dynamically assigns each user to AD or SD according to their latency needs and the server's current memory/compute budget. The authors formulate a task-throughput-maximization problem that jointly decides user scheduling and compute-resource allocation, show it is NP-hard, and give a polynomial-time algorithm with a constant-factor approximation guarantee. Across their evaluation BALANCE consistently beats either mode used alone, improving aggregate task throughput.

The paper frames the setting as a generic "wireless edge network" and does not pin the access leg to 5G/6G specifically, but the mechanism — joint user scheduling plus compute allocation on a shared edge inference server — sits squarely in the multi-access edge computing (MEC) / cellular-AI space the KB tracks under those bins.

## Summary (ZH)

Qu、Chen、Chen、Leung 与 Chen（2026 年 8 月 6 日提交）针对"在无线边缘服务器上服务大语言模型"这一特定调度问题展开研究。两种解码模式各有取舍：**自回归解码（AD）**逐个生成 token——内存占用低但时延高；**推测解码（SD）**用一个小型草稿模型一次性提出多个 token 供大模型验证——更快，但草稿模型与验证批次会占用额外内存。多数系统会为整台服务器只选其一。

BALANCE 在**同一台边缘服务器上同时运行两种模式**，并依据每个用户的时延需求与服务器当前的内存/算力预算，动态地把用户分配给 AD 或 SD。作者建立了任务吞吐最大化问题，联合决定用户调度与算力资源分配，证明其为 NP-难，并给出具有常数近似保证的多项式时间算法。在评测中，BALANCE 始终优于单独使用任一模式，提升了总体任务吞吐。

论文将场景设定为通用的"无线边缘网络"，未把接入侧明确绑定到 5G/6G，但其机制——共享边缘推理服务器上的联合用户调度加算力分配——正落在 KB 以 MEC / cellular-AI 分箱跟踪的多接入边缘计算空间内。

## Key technical points (EN)

- **Two decoding modes as schedulable resources** — AD (low memory, high latency) vs SD (fast, extra memory for the draft model + verification batch).
- **Simultaneous dual-mode serving** — one edge server runs AD and SD at once and routes each user to the mode that fits their latency budget and the current resource state.
- **Joint optimization** — task-throughput maximization over user scheduling + compute allocation; proven NP-hard, solved by a polynomial-time constant-approximation algorithm.
- **Result** — consistently outperforms AD-only and SD-only on aggregate task throughput.

## Key technical points (ZH)

- **两种解码模式作为可调度资源** —— AD（低内存、高时延）对比 SD（快、但草稿模型与验证批次占额外内存）。
- **同时双模服务** —— 单台边缘服务器同时运行 AD 与 SD，并把每个用户路由到契合其时延预算与当前资源状态的模式。
- **联合优化** —— 在用户调度 + 算力分配上做任务吞吐最大化；证明 NP-难，用多项式时间常数近似算法求解。
- **结果** —— 在总体任务吞吐上始终优于纯 AD 与纯 SD。

## Why it matters / what's new (EN)

Edge LLM serving is a fast-growing cellular-AI/MEC topic, and most prior work either optimizes the model (quantization, KV-cache) or the radio (offload scheduling) in isolation. BALANCE's angle is that the *decoding strategy itself* is a schedulable degree of freedom: by treating AD and SD as coexisting service classes on one server and matching users to them, it turns a fixed engineering choice into an online allocation problem with provable guarantees. That's a distinct lever from the KB's existing edge-inference entries, which mostly vary batching or placement rather than the decode mode. The open question for a cellular reader is how the AD/SD assignment couples to the access-link scheduler when the offload leg is a real 5G/6G bearer — the paper leaves the radio side abstract.

## Why it matters / what's new (ZH)

边缘 LLM 服务是快速增长的 cellular-AI/MEC 主题，多数既往工作要么孤立地优化模型（量化、KV 缓存），要么孤立地优化无线侧（卸载调度）。BALANCE 的切入点在于：*解码策略本身*就是一个可调度的自由度——把 AD 与 SD 视为同一服务器上共存的服务类别并为用户匹配，从而把一个固定的工程选择变成有可证明保证的在线分配问题。这与 KB 现有边缘推理条目（多改变批处理或放置，而非解码模式）是不同的杠杆。对蜂窝读者而言，遗留的问题是：当卸载腿是真实的 5G/6G 承载时，AD/SD 分配如何与接入链路调度器耦合——论文对无线侧保持抽象。
