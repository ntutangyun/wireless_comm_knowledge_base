---
id: 2026-11-23_arxiv-diffusion-language-models-mobile-edge-agentic-ai-survey
date_published: 2026-09-04
date_found: 2026-11-23
technology: edge-ai
type: academic-paper
title_en: "Diffusion Language Models for Mobile Edge Agentic AI: Foundations, Applications, and Challenges (survey, communication-aware serving)"
title_zh: "面向移动边缘智能体 AI 的扩散语言模型：基础、应用与挑战（综述，含通信感知服务）"
url: "https://arxiv.org/abs/2609.04778"
source_quality: full
topics: [diffusion-language-model, edge-agent, split-inference, communication-aware-serving, survey]
topic_primary: edge-ai-networking
topics_secondary: [compute-offloading]
novelty_score: 2
---

## Summary (EN)

This survey examines diffusion language models (DLMs), which generate text by iterative parallel denoising rather than left-to-right decoding, as a model family for mobile edge agents. It reviews DLM foundations (generation pipeline, comparison with autoregressive LLMs, multimodal DLMs), resource-efficient architectures, training (including federated diffusion training) and inference (parallel decoding, few-step diffusion, speculative decoding directions), compression, and deployment of DLM agents in device-only, edge-assisted and distributed or pipelined forms.

The part that bears on communication is Section 5, "Adaptive DLM agent serving under communication constraints". It treats communication as one deployment condition rather than the survey's objective, and covers model partitioning that follows heterogeneous mobile hardware and fluctuating wireless states (subgraph partitioning, bandwidth-aware width scaling, multi-exit truncation of denoising under congestion), collaborative generation across a mobile-edge-cloud hierarchy (for example cloud-side semantic planning with edge-side refinement, on-device previews with cloud refinement only after a prompt is final), and agent-aware computation-communication co-optimization.

Link: none measured; this is a literature survey. The wireless setting is a generic device-edge-cloud hierarchy with fluctuating wireless channels; no specific radio technology is assumed, and examples are drawn from cited work.

## Summary (ZH)

本综述考察扩散语言模型（DLM）作为移动边缘智能体的模型家族：DLM 通过迭代并行去噪而非从左到右解码来生成文本。综述涵盖 DLM 基础（生成流程、与自回归 LLM 的对比、多模态 DLM）、资源高效的架构、训练（含联邦扩散训练）与推理（并行解码、少步扩散、投机解码方向）、模型压缩，以及 DLM 智能体在纯端侧、边缘辅助和分布式/流水线形态下的部署。

与通信相关的是第 5 节"通信约束下的自适应 DLM 智能体服务"。它把通信视为部署条件之一，而非综述的核心目标，内容包括：随异构移动硬件与波动无线状态调整的模型划分（子图划分、带宽感知的宽度缩放、拥塞时对去噪过程的多出口截断），移动-边缘-云层级间的协同生成（例如云端语义规划加边缘侧细化，端侧预览、提示词确定后才调用云端细化），以及面向智能体的计算-通信联合优化。

所经链路：无实测；这是文献综述。无线场景为通用的端-边-云层级，信道状态波动，未指定具体无线技术；示例取自所引文献。

## Key technical points (EN)

- Partitioning for DLMs should consider token blocks, denoising rounds, reasoning state and tool or action boundaries, not only layers.
- Iterative DLM generation is described (citing prior work) as memory-bound rather than purely compute-bound, which the survey says creates a combined latency-memory constraint on edge devices, with diminishing returns from parallel decoding when scaled.
- Proposed practical split: keep private prompt encoding and final action decoding on the device, offload heavy intermediate refinement or sparse experts to nearby edge nodes according to bandwidth, channel quality, latency and privacy.
- Open issues listed: long-context state management, hardware-efficient inference, distributed collaboration, safety and trustworthy execution, multimodal grounding, and benchmarks that report denoising steps, communication overhead and time-to-first-action together.

## Key technical points (ZH)

- 面向 DLM 的划分应考虑 token 块、去噪轮次、推理状态以及工具或动作边界，而不只是网络层。
- 文中（引用既有工作）指出，DLM 的迭代生成受内存限制而非单纯受算力限制，综述据此指出边缘设备面临时延与内存的双重约束，规模放大后并行解码收益递减。
- 提出的实用切分：私有提示词编码与最终动作解码留在端侧，重的中间细化或稀疏专家按带宽、信道质量、时延与隐私要求卸载到邻近边缘节点。
- 列出的开放问题：长上下文状态管理、硬件高效推理、分布式协同、安全与可信执行、多模态落地，以及同时报告去噪步数、通信开销与首次动作时间的基准。

## Why it matters / what's new (EN)

The KB's agent-over-wireless entries so far cover measured or simulated split inference for specific models (for example 2026-09-09_arxiv-comvla-channel-adaptive-split-inference-robotics). This survey adds a map of where a non-autoregressive model family changes the split-point question, and it treats communication as one deployment condition rather than its core objective. It reports no new measurements, so it is best read as a reading list for the communication-aware serving literature.

## Why it matters / what's new (ZH)

KB 中已有的"无线网络上的智能体"条目覆盖了针对具体模型的实测或仿真拆分推理（例如 2026-09-09_arxiv-comvla-channel-adaptive-split-inference-robotics）。本综述补充了一张图，说明非自回归模型家族如何改变切分点问题，且它把通信视为部署条件之一而非核心目标。它没有新增测量，更适合作为通信感知服务文献的阅读清单。

## Images

![Agent-aware adaptive DLM serving loop under communication constraints | 通信约束下面向智能体的自适应 DLM 服务闭环](https://arxiv.org/html/2609.04778v1/Fig4.png)
