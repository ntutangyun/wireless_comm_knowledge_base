---
id: 2026-08-31_apple-afm3-flash-resident-sparse-on-device-model
date_published: 2026-06-08
date_found: 2026-08-31
type: industry-news
technology: edge-ai
title_en: "Apple's third-generation foundation models: a 20B on-device model that lives in flash, not DRAM"
title_zh: "苹果第三代基础模型：一个常驻闪存而非内存的 200 亿参数端侧模型"
url: "https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models"
source_quality: full
topics: [Apple-Intelligence, AFM-3, sparse-activation, mixture-of-experts, NAND, DRAM, quantization-aware-training, Private-Cloud-Compute, on-device-LLM]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference, compute-offloading]
novelty_score: 4
---

## Summary (EN)

Apple's third-generation foundation-model announcement (Apple Machine Learning Research, 8 June 2026) describes a five-model lineup split across the device and Private Cloud Compute (PCC). Two tiers run on the device itself: **AFM 3 Core**, a 3-billion-parameter dense model, and **AFM 3 Core Advanced**, a **20-billion-parameter** model that Apple says activates **only 1 to 4 billion parameters at a time** depending on the request. Three tiers run on servers: AFM 3 Cloud (the PCC workhorse), ADM 3 Cloud for image generation and editing, and AFM 3 Cloud Pro for agentic tool use and complex reasoning — the last of these optimised for **NVIDIA GPUs in Google Cloud** rather than Apple silicon.

The interesting part of the announcement for this knowledge base is not the model count but **where the 20B model's weights physically sit**. Apple states that the full AFM 3 Core Advanced model is stored in **flash memory (NAND)**, not in DRAM. A set of shared static weights stays resident and active; the routed experts are **swapped into DRAM only when needed**. The stated motivation is the constraint that defines this whole domain: a conventional model requires every weight to sit in active memory, "creating a massive footprint that limits scalability on consumer hardware".

The design consequence Apple calls out is a departure from how mixture-of-experts models normally work. Standard MoE routing selects experts **per token**, which on a phone would mean a NAND-to-DRAM fetch on nearly every decode step — and Apple states plainly that **NAND-to-DRAM bandwidth is too slow** for that. So AFM 3 Core Advanced makes its routing decision **per prompt** instead: a lightweight dense block selects a subset of experts during initial processing, and the subset is periodically reselected during generation. The model's activated size therefore becomes elastic at inference time, scaling with request difficulty rather than being fixed by the DRAM budget.

Compression is described only as **Quantization Aware Training** — Apple says the models were "compressed substantially while maintaining high accuracy" and then each optimised for its target hardware, but discloses no bit-widths, no KV-cache quantisation scheme, no memory footprint, and no latency or tokens-per-second figure on any named Apple silicon. The published evidence is entirely human-preference and MOS evaluation: AFM 3 Core is preferred on **45.6%** of text prompts against **23.3%** for the 2025 on-device baseline; image understanding is preferred over the previous generation **more than 61%** of the time; text-to-speech from AFM 3 Core Advanced scores **4.15 MOS versus 3.87** for the production system on general voice and **4.24 versus 3.82** on conversational voice; and dictation at the **1-billion-parameter activation level** is preferred **44.7% to 17.6%**. On the server side AFM 3 Cloud is preferred **64.7%** against **8.7%** for the 2025 server model.

## Summary (ZH)

苹果第三代基础模型发布（Apple Machine Learning Research，2026 年 6 月 8 日）描述了一个横跨设备端与 Private Cloud Compute（PCC）的五模型阵容。两档跑在设备本身：**AFM 3 Core**，30 亿参数稠密模型；以及 **AFM 3 Core Advanced**，一个 **200 亿参数**的模型，苹果称它依请求难度**每次只激活 10 亿到 40 亿参数**。三档跑在服务器：AFM 3 Cloud（PCC 主力）、负责图像生成与编辑的 ADM 3 Cloud，以及面向智能体工具调用与复杂推理的 AFM 3 Cloud Pro —— 最后这一档是针对 **Google Cloud 中的 NVIDIA GPU** 而非苹果自研芯片做的优化。

对本知识库而言，这次发布真正值得记录的不是模型数量，而是**那个 200 亿参数模型的权重在物理上放在哪里**。苹果明确表示，AFM 3 Core Advanced 的完整模型存放在**闪存（NAND）**中，而不是 DRAM。一组共享静态权重常驻并始终参与计算；被路由到的专家则**仅在需要时才换入 DRAM**。其动机正是定义整个端侧领域的那条约束：常规模型要求全部权重驻留在活动内存中，「形成庞大的内存占用，限制了消费级硬件上的可扩展性」。

苹果点明的设计后果，是对混合专家（MoE）常规做法的一次偏离。标准 MoE 按 **token** 选择专家，在手机上这意味着几乎每一个解码步都要触发一次 NAND 到 DRAM 的取数——而苹果直言 **NAND 到 DRAM 的带宽不够快**。因此 AFM 3 Core Advanced 改为**按 prompt** 做路由决策：一个轻量稠密模块在初始处理阶段选出专家子集，并在生成过程中周期性地重新选择。模型的激活规模由此在推理时变得有弹性，随请求难度伸缩，而不再被 DRAM 预算钉死。

压缩方面只提到了**量化感知训练（QAT）**——苹果称模型「在保持高精度的前提下被大幅压缩」，随后各自针对目标硬件优化，但未披露位宽、未披露 KV cache 量化方案、未披露内存占用，也没有在任何具名苹果芯片上的时延或 tokens/s 数字。公开的证据全部是人类偏好与 MOS 评测：AFM 3 Core 在文本任务上以 **45.6%** 的偏好率对比 2025 年端侧基线的 **23.3%**；图像理解相对上一代被偏好**超过 61%**；AFM 3 Core Advanced 的语音合成在通用语音上 **MOS 4.15 对 3.87**、对话语音上 **4.24 对 3.82**；在 **10 亿参数激活档**上的听写以 **44.7% 对 17.6%** 胜出。服务器侧 AFM 3 Cloud 的偏好率为 **64.7%**，对比 2025 年服务器模型的 **8.7%**。

## Key technical points (EN)

- **Lineup and placement.** Five models. On-device: AFM 3 Core (3B dense) and AFM 3 Core Advanced (20B sparse, 1–4B active). On Private Cloud Compute: AFM 3 Cloud, ADM 3 Cloud (image), AFM 3 Cloud Pro. The first four are optimised for Apple silicon; **AFM 3 Cloud Pro is optimised for NVIDIA GPUs in Google Cloud**.
- **Flash-resident weights.** The full 20B model lives in **NAND**; only shared static weights plus the currently-selected routed experts occupy **DRAM**. This is the specific mechanism that lets a 20B model target a phone-class memory budget.
- **Per-prompt routing, not per-token.** Apple's stated reason is that NAND-to-DRAM bandwidth cannot sustain token-granular expert swapping. A lightweight dense block picks the expert subset during initial processing, with periodic reselection during generation.
- **Inference-time elasticity.** Activated parameter count varies 1B–4B with request difficulty, so the model "scales beyond traditional DRAM limits while minimising latency" (Apple's framing).
- **Compression.** Quantization Aware Training only; **no bit-widths, no KV-cache scheme, no memory footprint disclosed**.
- **Training.** Pre-training scaled on cloud TPU accelerators from a common initial foundation, then architecture-specific specialisation; post-training combines supervised fine-tuning with multi-stage reinforcement learning. Apple states it does not train on users' private personal data or interactions.
- **Adapters.** Specialised adapters power specific downstream features (Apple's example: Spatial Reframing in Photos). Adapter sizes and the third-party developer surface are not described in this post.
- **What is measured and what is not.** Human-preference win rates and MOS scores are published; **no TTFT, no tokens/s, no memory or energy figure on named silicon**. There is no third-party benchmark of AFM 3 in this knowledge base to normalise against.

## Key technical points (ZH)

- **阵容与放置。** 共五个模型。端侧：AFM 3 Core（30 亿稠密）与 AFM 3 Core Advanced（200 亿稀疏，激活 10–40 亿）。Private Cloud Compute 侧：AFM 3 Cloud、ADM 3 Cloud（图像）、AFM 3 Cloud Pro。前四个针对苹果自研芯片优化；**AFM 3 Cloud Pro 针对 Google Cloud 中的 NVIDIA GPU 优化**。
- **权重常驻闪存。** 完整的 200 亿参数模型存放在 **NAND** 中；只有共享静态权重加上当前选中的路由专家占用 **DRAM**。这正是让一个 200 亿参数模型能对准手机级内存预算的具体机制。
- **按 prompt 路由，而非按 token。** 苹果给出的理由是 NAND 到 DRAM 的带宽支撑不了 token 粒度的专家换入换出。一个轻量稠密模块在初始处理阶段挑选专家子集，并在生成中周期性重选。
- **推理时的弹性。** 激活参数量随请求难度在 10 亿到 40 亿之间变化，因此模型（按苹果的说法）能「在最小化时延的同时突破传统 DRAM 限制」。
- **压缩。** 仅提到量化感知训练；**未披露位宽、未披露 KV cache 方案、未披露内存占用**。
- **训练。** 在云端 TPU 上扩大预训练规模，各模型自同一初始基座出发再按架构分化；后训练结合监督微调与多阶段强化学习。苹果声明不使用用户私人数据或交互记录训练基础模型。
- **适配器。** 专用适配器驱动具体下游功能（苹果举例：照片中的 Spatial Reframing）。本文未描述适配器大小与第三方开发者接口。
- **测了什么、没测什么。** 公布的是人类偏好胜率与 MOS 分数；**没有 TTFT、没有 tokens/s、没有具名芯片上的内存或能耗数字**。本知识库目前没有可用于校准的第三方 AFM 3 基准。

## Why it matters / what's new (EN)

The recurring wall in on-device inference is not arithmetic, it is memory. A phone NPU can do the multiplications; what it cannot do is hold tens of billions of weights in DRAM alongside the operating system and every other running app. Almost every technique this bin collects — quantisation, distillation, pruning, small purpose-built models — is a way of shrinking the model until it fits that budget. Apple's AFM 3 Core Advanced takes the opposite route: leave the model large, leave it in flash, and move only the slice you need into DRAM for the duration of a request.

That reframing is what makes the per-prompt routing decision the load-bearing detail rather than a footnote. It is an explicit admission that the storage hierarchy, not the compute unit, sets the rules at the edge — and it inverts a design assumption that MoE inherited from the datacentre, where per-token routing is free because all experts are already in HBM. On a device, per-token routing would turn NAND bandwidth into the bottleneck for every decode step, so Apple coarsens the routing granularity by three or four orders of magnitude to make the fetch amortise. Two entries already in this knowledge base point at the same constraint from different angles: the storage-backed edge-LLM prefetching work (`2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm`) attacks exactly this NAND-to-DRAM path, and the Apple Neural Engine measurement study (`2026-08-28_arxiv-apple-neural-engine-placement-measurement`) found that weight *encoding* — not arithmetic — decides whether a model runs on the ANE at all.

It also puts a concrete shape on the device–cloud split that the `compute-offloading` bin is about. Apple is not describing one boundary but a graded one: a 3B dense model for the cheap common case, an elastic 1–4B-active/20B-resident model for harder on-device requests, PCC for what exceeds the device, and — newly — third-party NVIDIA silicon in Google Cloud for the most demanding agentic and reasoning work. The placement question has stopped being "device or cloud" and become "which of five tiers", chosen per request.

The honest caveat is that none of this is independently checkable yet. Apple published parameter counts, an architecture and preference win rates, but not a single latency, footprint or energy number on named hardware — the same disclosure gap this knowledge base recorded for Microsoft's Aion family (`2026-08-29_microsoft-aion-windows-on-device-slm-family`). Two of the largest on-device model programmes in the industry have now each announced a system-level model without publishing the numbers that would let anyone verify it fits. This entry is deliberate first coverage of Apple Intelligence in this knowledge base — the announcement is roughly three months old and the `apple-on-device-ml` source had not previously produced an entry — and it records the architecture as Apple describes it, not as measured fact.

## Why it matters / what's new (ZH)

端侧推理反复撞上的墙不是算力，而是内存。手机 NPU 做得了乘法；做不到的是在操作系统和其他所有运行中的应用之外，还把数百亿权重塞进 DRAM。这个分类下收录的几乎所有技术——量化、蒸馏、剪枝、小型专用模型——本质上都是把模型缩到能装进那个预算里。苹果的 AFM 3 Core Advanced 走了反方向：让模型保持大，让它留在闪存里，只在一次请求期间把用得上的那一片搬进 DRAM。

正是这一重构，让「按 prompt 路由」从脚注变成了承重细节。它明确承认在端侧定规则的是存储层级而非计算单元；也颠覆了 MoE 从数据中心继承来的一条设计假设——在数据中心里按 token 路由几乎免费，因为所有专家早已在 HBM 中。在设备上，按 token 路由会让 NAND 带宽成为每一个解码步的瓶颈，于是苹果把路由粒度粗化三到四个数量级，使取数开销得以摊薄。本知识库中已有两条条目从不同角度指向同一约束：面向存储的边缘大模型预取工作（`2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm`）攻的正是这条 NAND 到 DRAM 的通路；而 Apple Neural Engine 实测研究（`2026-08-28_arxiv-apple-neural-engine-placement-measurement`）发现，决定模型能否跑在 ANE 上的是权重**编码**方式，而非算术运算。

它同时把 `compute-offloading` 关心的端云切分具象化了。苹果描述的不是一条边界，而是一条分级的边界：便宜的常见请求交给 30 亿稠密模型，较难的端侧请求交给激活 10–40 亿、常驻 200 亿的弹性模型，超出设备能力的交给 PCC，而最吃力的智能体与推理任务——这是新增的一档——交给 Google Cloud 中的第三方 NVIDIA 芯片。放置问题已经不再是「端还是云」，而是「五档中的哪一档」，且逐请求选择。

需要诚实指出的是，这一切目前都还无法被独立核查。苹果公布了参数量、架构与偏好胜率，却没有在任何具名硬件上给出哪怕一个时延、占用或能耗数字——这与本知识库为微软 Aion 系列记录的披露缺口（`2026-08-29_microsoft-aion-windows-on-device-slm-family`）如出一辙。业界规模最大的两个端侧模型计划，如今各自宣布了一个系统级模型，却都没有公布能让外界验证「它到底装不装得下」的那些数字。本条目是本知识库对 Apple Intelligence 的**有意首次收录**——该发布距今约三个月，且 `apple-on-device-ml` 这一来源此前从未产出过条目——它记录的是苹果所描述的架构，而非已被实测的事实。

## Images

*(No redistributable images for this entry — the figures are hosted on machinelearning.apple.com.)*
