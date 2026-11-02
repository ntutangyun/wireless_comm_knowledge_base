---
id: 2026-11-02_arxiv-gpu-resident-speculative-decoding-in-browser-webgpu-llm
date_published: 2026-10-29
date_found: 2026-11-02
technology: edge-ai
type: academic-paper
title_en: "GPU-resident speculative decoding for in-browser LLM inference with WebGPU"
title_zh: "基于 WebGPU 的浏览器内 LLM 推理：GPU 常驻推测解码"
url: "https://arxiv.org/abs/2610.39761"
source_quality: full
topics: [WebGPU, speculative-decoding, in-browser-LLM, WebLLM, integer-kernels, client-GPU]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

WebGPU lets a web page download a model of a few gigabytes once and run it on the visitor's GPU, so that the page, forms and conversation stay on the device and offline use is possible. The paper identifies browser-specific costs that slow decoding: every WebGPU dispatch is validated in the renderer and forwarded to a separate GPU process, every token read back by JavaScript stalls the pipeline, and existing kernels are compiled for one token per step. It adds that conventional speculative decoding works against the platform: on one example, a fixed 8-node tree that speeds up a workstation GPU by half makes decoding 2.7 times slower on a laptop's integrated GPU.

The proposed runtime has four parts. Deterministic small-batch integer kernels (4-bit weights with 8-bit activations) make verifying 8 tokens cost 19% to 77% more than one token on discrete GPUs, instead of 2.7 times in WebLLM's prefill path, with a fixed reduction order so verification is bit-identical to single-token steps. A GPU-resident loop does drafting, verification, acceptance and KV-cache maintenance in kernels that read control state from a GPU buffer, so the CPU reads only a few bytes between windows of steps. A draft-free context-mixing drafter predicts continuations from page content, conversation history and session memory, with no second model. A device-aware controller measures cost per tree width on the visitor's device and picks the width that maximises expected tokens per millisecond.

Evaluated in Chrome across seven models (0.5B to 8B parameters), 11 tasks and three client GPUs, it decodes 3.5 to 5.4 times faster than WebLLM on a laptop GPU, 4.8 to 6.2 times on an integrated GPU and 4.8 to 8.6 times on a workstation GPU. Outputs match the runtime's quantised greedy decoding exactly, and mean GSM8K accuracy matches WebLLM. Optional draft heads raise the peak speedup to 10.2 times. The authors state that, to their knowledge, it is the first WebGPU runtime to move tree-based speculative decoding wholly into a GPU-resident loop.

## Summary (ZH)

WebGPU 使网页能够一次性下载数 GB 的模型并在访问者的 GPU 上运行，页面、表单和对话都保留在本地，并可离线使用。论文指出了拖慢解码的浏览器特有开销：每次 WebGPU 调度都要在渲染进程中校验并转发给独立的 GPU 进程；JavaScript 每读回一个 token 都会使流水线停顿；现有内核按每步一个 token 编译。论文还指出，常规推测解码与该平台相冲突：例如一棵固定 8 节点的树在工作站 GPU 上可提速一半，却使笔记本集成 GPU 上的解码变慢到 2.7 倍。

论文提出的运行时包含四部分。确定性的小批量整数内核（4 比特权重配 8 比特激活）使在独立 GPU 上验证 8 个 token 的代价仅比 1 个 token 高 19% 至 77%，而 WebLLM 的预填充路径为 2.7 倍；归约顺序固定，使验证结果与单 token 步骤逐比特一致。GPU 常驻循环在从 GPU 缓冲区读取控制状态的内核中完成草拟、验证、接受和 KV 缓存维护，CPU 在各窗口之间只读取少量字节。免草稿模型的上下文混合草拟器根据页面内容、对话历史和会话记忆预测后续内容，无需第二个模型。设备感知控制器在访问者设备上测量每种树宽的代价，选取使每毫秒期望 token 数最大的树宽。

在 Chrome 中对七个模型（0.5B 至 8B 参数）、11 项任务和三种客户端 GPU 的评测显示：解码速度在笔记本独显上比 WebLLM 快 3.5 至 5.4 倍，在集成 GPU 上快 4.8 至 6.2 倍，在工作站 GPU 上快 4.8 至 8.6 倍。输出与该运行时的量化贪心解码完全一致，GSM8K 平均精度与 WebLLM 相当。可选的草稿头将峰值加速提高到 10.2 倍。作者称据其所知，这是首个把树形推测解码完全移入 GPU 常驻循环的 WebGPU 运行时。

## Key technical points (EN)

- **Cost model**: dispatch validation, inter-process forwarding, synchronous readback and single-token kernels are the browser costs targeted.
- **Kernels**: 4-bit weight, 8-bit activation integer dot products; fixed reduction order gives bit-identical verification, so output equals greedy decoding of the same quantised runtime.
- **Loop**: drafting, verification, acceptance and KV maintenance run on the GPU; several steps are encoded per command buffer.
- **Drafter and controller**: draft-free context mixing over page, history and session memory; speculation width and submission window chosen from costs measured on the device.
- **Result**: 3.5-5.4x (laptop GPU), 4.8-6.2x (integrated GPU), 4.8-8.6x (workstation GPU) over WebLLM; the GPU-resident loop and speculation add 1.8-3.2x over the optimised kernels on the workstation.
- **Scope**: three client GPUs in Chrome; no phone or mobile-browser results are reported in the abstract or introduction.

## Key technical points (ZH)

- **开销模型**：针对的浏览器开销包括调度校验、跨进程转发、同步读回和单 token 内核。
- **内核**：4 比特权重、8 比特激活的整数点积；固定归约顺序使验证逐比特一致，因此输出等同于同一量化运行时的贪心解码。
- **循环**：草拟、验证、接受和 KV 维护均在 GPU 上运行；每个命令缓冲区编码多个步骤。
- **草拟器与控制器**：基于页面、历史和会话记忆的免草稿模型上下文混合；投机宽度和提交窗口依据设备上测得的代价选取。
- **结果**：相对 WebLLM，笔记本 GPU 3.5-5.4 倍，集成 GPU 4.8-6.2 倍，工作站 GPU 4.8-8.6 倍；在工作站上，GPU 常驻循环与推测解码在优化内核之上再带来 1.8-3.2 倍。
- **范围**：在 Chrome 中使用三种客户端 GPU；摘要与引言未报告手机或移动浏览器的结果。

## Why it matters / what's new (EN)

The paper's argument is that a browser runtime must design the whole decoding loop around browser costs rather than port server-side speculative decoding, and it shows that the usual recipe can reverse on weak GPUs. The client-side placement it targets (model downloaded once, inference on the visitor's GPU, no per-token cost to the site) is the same compute-placement question as native on-device inference, in a different runtime. Speedups are relative to WebLLM, one baseline, on three machines.

## Why it matters / what's new (ZH)

论文的论点是：浏览器运行时必须围绕浏览器自身的开销来设计整个解码循环，而不是照搬服务器端推测解码，并表明在较弱的 GPU 上常规做法可能适得其反。它针对的客户端部署方式（模型一次下载、在访问者 GPU 上推理、站点无需按 token 付费）与原生端侧推理面临同样的算力放置问题，只是运行时不同。加速比均以 WebLLM 为唯一基线，并在三台机器上测得。

## Images

*(No redistributable images for this entry.)*
