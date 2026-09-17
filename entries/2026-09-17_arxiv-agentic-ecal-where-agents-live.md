---
id: 2026-09-17_arxiv-agentic-ecal-where-agents-live
date_published: 2026-09-16
date_found: 2026-09-17
technology: edge-ai
type: academic-paper
title_en: "Where Should Agents Live? Energy-Memory Characterization of Agentic AI for the Edge-Cloud Continuum"
title_zh: "智能体应部署在何处？面向边缘-云连续体的智能体式 AI 能耗-内存表征"
url: "https://arxiv.org/abs/2609.18283"
source_quality: full
topics: [agentic-AI, multi-agent-orchestration, energy-modeling, LLM-serving]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading]
novelty_score: 4
---

## Summary (EN)

The paper (Carolina Fortuna, Vid Hanžel, Tim Strnad, Blaž Bertalanič) opens from a question the authors say network operators currently lack the foundational models to answer: for agentic AI systems — LLMs performing multi-step reasoning and coordinating across teams of agents — where across the edge-cloud continuum should the agents physically run, and does moving them around actually cost meaningful energy? The authors extend an existing "Energy Cost of AI Lifecycle" (eCAL) metric, originally defined for single-model inference, into "agentic-eCAL" for multi-agent workflows: agentic-eCAL = (E_W + γ_e·(E_emb + E_emb,ret)) / B_useful, where the operational energy term E_W sums LLM inference calls, tool executions, vector retrievals, and inter-agent transmission energy. A key building block is a two-rate energy model for a single LLM call, E_call(p_in, p_out; b) ≈ c_pre·p_in + c_dec(b)·p_out, separating the compute-bound, batch-independent prefill phase from the memory-bandwidth-bound decode phase that scales roughly as 1/b with serving batch size; the paper reports this model validated to R² > 0.99 with ~10% mean absolute percentage error.

The empirical characterization spans NVIDIA A100 and H100 GPUs, 16 open-weight models from 3B to 72B parameters (including Qwen2.5-7B, Llama-3.1-8B, Llama-3-70B and Qwen3.5-9B), a two-rate-model validation sweep of 270 configurations per model on Qwen2.5-7B and Llama-3.1-8B (A100, team sizes from 2 to 30 agents, serving batches b in [2, 256]), and 8 orchestration topologies (star, chain, tournament, tree, diamond, etc.), plus an ETSI ZSM-aligned telco-edge infrastructure-incident benchmark of 24 Kubernetes troubleshooting incidents across difficulty tiers. The central finding is that inter-agent text transport itself is energetically almost free: transmission of a 2,700-token hand-off over 5G RAN, metro or optical links costs under 0.25% of workflow energy (E_tx/E_prefill ≈ 1/496 in the 5G case) — the paper's stated conclusion is that the dominant energy cost of distributing agents is often not the network transport but the additional inference and context-processing that each hand-off triggers downstream. Workflows with history-carrying loops show super-linear (quadratic-leaning) prompt growth, inflating energy by 32.8% (Qwen2.5-7B) and 21.7% (Llama-3.1-8B) at a loop depth of K=6 versus history-free execution. On the Kubernetes incident benchmark, multi-agent topologies increased energy up to 4.0x for Qwen3.5-9B and up to 23.9x for Qwen2.5-7B without a consistent gain in task success — for Qwen3.5-9B, energy per solved task rose from 17.4 kJ (single agent) to 29.0-79.2 kJ (multi-agent). Batching amortizes energy less as agent count grows (38.1% reduction at team size 2 vs. 15.4% at team size 30). The paper also finds that KV-cache width, not the model's parameter class, determines how many concurrent sessions a device can hold — within the 8-16GB model-weight class, capacity varies 16x depending on attention key-value width — and that moving a KV-cache across network links is effectively impractical: the bearer energy intensity at which cache transport would merely break even with the local compute it replaces falls to 5.1x10^-8 J/bit by loop depth K=6, leaving only a 5x margin over an optical backbone and falling below mobile bearers, over which the paper reports cache transport costing about twenty times the local compute.

## Summary (ZH)

本文（Carolina Fortuna、Vid Hanžel、Tim Strnad、Blaž Bertalanič）从作者所称网络运营商目前尚缺乏基础模型来回答的一个问题出发：对于执行多步推理并在多个智能体之间协作的"智能体式 AI"系统，这些智能体究竟应该部署在边缘-云连续体的哪个位置，将其在不同层级间迁移是否真的会带来可观的能耗？作者将原本针对单模型推理定义的"AI 生命周期能耗"（eCAL）指标扩展为面向多智能体工作流的 "agentic-eCAL"：agentic-eCAL = (E_W + γ_e·(E_emb + E_emb,ret)) / B_useful，其中运行能耗项 E_W 汇总了 LLM 推理调用、工具执行、向量检索以及智能体间传输的能耗。其中一个关键构件是针对单次 LLM 调用的双速率能耗模型，E_call(p_in, p_out; b) ≈ c_pre·p_in + c_dec(b)·p_out，将计算受限、与批大小无关的预填充阶段，与随服务批大小近似按 1/b 缩放的、受限于内存带宽的解码阶段区分开来；论文报告该模型的拟合优度 R² 大于 0.99，平均绝对百分比误差约 10%。

实证表征覆盖 NVIDIA A100 与 H100 GPU、16 个参数量从 30 亿到 720 亿的开放权重模型（包括 Qwen2.5-7B、Llama-3.1-8B、Llama-3-70B 与 Qwen3.5-9B）、针对 Qwen2.5-7B 与 Llama-3.1-8B 的双速率模型验证扫描（A100，每模型 270 种配置、智能体团队规模 2 至 30、服务批大小 b 取值 [2, 256]），以及 8 种编排拓扑（星型、链式、锦标赛式、树形、菱形等），并辅以一个对齐 ETSI ZSM 的电信边缘基础设施基准测试，涵盖 24 起不同难度的 Kubernetes 故障排查事件。核心发现是：智能体间的文本传输本身在能耗上几乎可以忽略——通过 5G 无线接入网、城域网或光纤链路传输一次 2,700 个 token 的交接信息，其能耗低于工作流总能耗的 0.25%（5G 情形下 E_tx/E_prefill ≈ 1/496）——论文得出的结论是，分布式部署智能体的主要能耗代价往往并非网络传输本身，而是每次交接在下游触发的额外推理与上下文处理。带有历史累积循环的工作流呈现出超线性（趋近二次）的提示词增长，在循环深度 K=6 时相对无历史执行分别使能耗增加 32.8%（Qwen2.5-7B）和 21.7%（Llama-3.1-8B）。在 Kubernetes 事件基准测试中，多智能体拓扑使 Qwen3.5-9B 的能耗最多增加 4.0 倍、使 Qwen2.5-7B 的能耗最多增加 23.9 倍，但任务成功率并未因此获得一致提升——就 Qwen3.5-9B 而言，每完成一项任务的能耗从单智能体的 17.4 千焦升至多智能体的 29.0-79.2 千焦。随智能体数量增加，批处理带来的能耗摊销效果减弱（团队规模为 2 时降低 38.1%，规模为 30 时仅降低 15.4%）。论文还发现，决定设备可承载并发会话数量的是 KV 缓存宽度而非模型参数规模——在 8-16GB 权重规模等级内，容量因注意力键值宽度不同可相差 16 倍；此外，跨网络链路搬运 KV 缓存实际上不可行：在循环深度 K=6 时，缓存传输能耗与其所替代的本地计算能耗持平的承载能量强度降至 5.1×10⁻⁸ 焦耳/比特，相对光纤骨干网仅剩 5 倍余量，而已低于移动承载网络——论文报告在移动承载上缓存传输能耗约为本地计算的二十倍。

## Key technical points (EN)

- **Metric**: agentic-eCAL extends single-model eCAL to multi-agent workflows, summing LLM inference, tool execution, vector retrieval and inter-agent transmission energy, normalized per useful output bit.
- **Two-rate energy model**: separates a compute-bound, batch-independent prefill cost from a memory-bandwidth-bound decode cost scaling ~1/b with serving batch; validated to R² > 0.99, ~10% MAPE.
- **Scale of measurement**: A100/H100 GPUs, 16 open-weight models (3B-72B), 270 configurations per model, team sizes 2-30, batches b in [2,256], 8 orchestration topologies, plus a 24-incident Kubernetes troubleshooting benchmark.
- **Headline finding**: inter-agent text transport costs <0.25% of workflow energy across 5G RAN/metro/optical links (E_tx/E_prefill ~= 1/496 for a 2,700-token hand-off over 5G) — the paper's conclusion is that the dominant cost of distribution is often not the network hop itself but the extra inference/context-processing each hand-off triggers.
- **Other findings**: history-carrying loops inflate energy 21.7-32.8% at loop depth K=6; multi-agent topologies increased Kubernetes-incident energy up to 23.9x with no consistent success gain; batching's energy-amortization benefit shrinks from 38.1% (2 agents) to 15.4% (30 agents); KV-cache width (not parameter count) sets concurrent-session capacity, varying 16x within the 8-16GB model-weight class; KV-cache transport only breaks even with local compute at a bearer intensity of 5.1x10^-8 J/bit (K=6) — within 5x of an optical backbone and already below mobile bearers — so attention state is effectively non-transportable across network links.

## Key technical points (ZH)

- **指标**：agentic-eCAL 将单模型 eCAL 扩展至多智能体工作流，汇总 LLM 推理、工具执行、向量检索与智能体间传输能耗，并按有效输出比特归一化。
- **双速率能耗模型**：将计算受限、与批大小无关的预填充成本，与随服务批大小近似按 1/b 缩放、受内存带宽限制的解码成本区分开来；拟合优度 R² 大于 0.99，平均绝对百分比误差约 10%。
- **测量规模**：A100/H100 GPU、16 个开放权重模型（30 亿至 720 亿参数）、每模型 270 种配置、团队规模 2-30、批大小 b 取值 [2,256]、8 种编排拓扑，外加涵盖 24 起事件的 Kubernetes 故障排查基准。
- **核心发现**：智能体间文本传输能耗占工作流总能耗不到 0.25%（5G 情形下 2,700 token 交接的 E_tx/E_prefill ≈ 1/496）——论文的结论是，分布式部署的主要代价往往不在网络跳转本身，而在每次交接触发的额外推理与上下文处理。
- **其他发现**：带历史累积循环的工作流在循环深度 K=6 时能耗增加 21.7%-32.8%；多智能体拓扑使 Kubernetes 事件基准的能耗最多增加 23.9 倍，但任务成功率并未一致提升；批处理的能耗摊销效果随智能体数量增加而减弱，从 2 个智能体时的 38.1% 降至 30 个智能体时的 15.4%；决定并发会话容量的是 KV 缓存宽度而非参数规模，在 8-16GB 权重规模等级内相差可达 16 倍；KV 缓存传输仅在承载能量强度达 5.1×10⁻⁸ 焦耳/比特（K=6）时才与本地计算持平——该阈值距光纤骨干网仅 5 倍余量，且已低于移动承载网——因此注意力状态实际上无法跨网络链路搬运。

## Why it matters / what's new (EN)

The KB's existing compute-offloading and edge-orchestration entries (e.g. Multi-SPIN, DRLM, A-MADiff, Robion) each optimize a specific placement or scheduling policy; this paper instead supplies a measured energy accounting framework that applies across all of them, and its headline result reframes where the "cost of distribution" actually sits — not in moving text between agents (negligible), but in the inference and context growth that distribution triggers. That reframing is directly relevant to any future edge-orchestration or compute-offloading entry that assumes network transport is the dominant cost of splitting an agentic workflow across the edge-cloud continuum.

## Why it matters / what's new (ZH)

知识库中现有的算力卸载与边缘编排类条目（如 Multi-SPIN、DRLM、A-MADiff、Robion）各自针对特定的部署或调度策略进行优化；本文则提供了一个可套用于所有这些场景的实测能耗核算框架，其核心结论重新界定了"分布式部署的代价"究竟出在哪里——并非智能体间的文本传输（可忽略不计），而是分布式部署所触发的额外推理与上下文增长。这一再定位，对于任何默认"网络传输是跨边缘-云连续体拆分智能体工作流的主要成本"的未来边缘编排或算力卸载条目而言，都具有直接的参考意义。

## Images

![Accelerator capacity boundaries across agentic workloads | 智能体工作负载下的加速器容量边界](https://arxiv.org/html/2609.18283v1/fig_capacity.png)
