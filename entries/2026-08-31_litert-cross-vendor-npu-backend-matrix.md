---
id: 2026-08-31_litert-cross-vendor-npu-backend-matrix
date_published: 2026-08-26
date_found: 2026-08-31
type: product
technology: edge-ai
title_en: "LiteRT's NPU layer reaches production on five vendor NPUs — the first cross-vendor on-device accelerator matrix with published numbers"
title_zh: "LiteRT 的 NPU 层在五家厂商 NPU 上进入生产状态 —— 首个附带公开数字的跨厂商端侧加速器支持矩阵"
url: "https://developers.google.com/edge/litert/next/npu"
source_quality: full
topics: [LiteRT, LiteRT-LM, NPU, NeuroPilot, Qualcomm-AI-Engine-Direct, OpenVINO, Exynos-AI-LiteCore, AOT-compilation, Gemma-3n, on-device-LLM]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, ai-pc, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Google's LiteRT NPU documentation, last updated **26 August 2026**, now publishes a vendor support matrix that is worth recording as a platform fact in its own right. LiteRT — the runtime formerly known as TensorFlow Lite, and the layer beneath LiteRT-LM and the MediaPipe LLM Inference API — states that it offers "a unified interface to use Neural Processing Units (NPUs) without requesting you to navigate vendor-specific compilers, runtimes, or library dependencies", and lists **five NPU families** with per-vendor compilation-mode and maturity status:

| Vendor backend | Compilation | Status |
| --- | --- | --- |
| Qualcomm AI Engine Direct | AOT and JIT | Production |
| MediaTek NeuroPilot | AOT and JIT | Production |
| Intel OpenVINO | AOT and JIT | Production |
| Samsung Exynos AI LiteCore | AOT and JIT | Production |
| Google Tensor | AOT only | Beta (no JIT yet) |

The distinction between **ahead-of-time (AOT)** and **just-in-time (JIT)** compilation is the practical one for deployment. AOT compiles the model for a specific SoC before shipping, which removes the on-device compile cost but requires a per-SoC artifact and a delivery mechanism for it; JIT compiles on the device, which is portable but pays the compile cost at first run. The documentation's one published performance figure is about exactly that cost: with compilation caching, model initialisation for **ResNet152** on one device drops from **7465.22 ms to 198.34 ms**, and initialisation memory from **1525.24 MB to 355.07 MB**. Cross-vendor end-to-end inference comparisons are **not** published.

The strongest on-device numbers in the LiteRT stack come from a companion announcement rather than the documentation: the **LiteRT NeuroPilot Accelerator** post (Google Developers Blog, **8 December 2025**), a ground-up successor to the older TFLite NeuroPilot delegate. Benchmarked on a **MediaTek Dimensity 9500** in a Vivo X300 Pro, it reports **up to 12× speedup versus CPU and up to 10× versus GPU** for Gemma models, and for **Gemma 3n E2B** specifically, **over 1600 tokens/s prefill and 28 tokens/s decode at 4K context**. The deployment path is AOT compilation targeting a specific SoC, delivery via **Play for On-device AI (PODAI)** on Android, then inference through a C++ API with CPU/GPU fallback.

The runtime layer above this, **LiteRT-LM** (Google Developers Blog, 24 September 2025), is a C++ pipeline that already ships in Chrome, Chromebook Plus and Pixel Watch Smart Replies. Its architecture is a singleton **Engine** holding the shared base model and multimodal encoders, plus lightweight stateful **Sessions** that carry per-conversation state and LoRA adapters, with copy-on-write KV-cache session cloning reported at **under 10 ms**. That is how several features on one device share a single resident foundation model instead of each loading its own.

## Summary (ZH)

谷歌的 LiteRT NPU 文档在 **2026 年 8 月 26 日**最后更新，现已公布一份厂商支持矩阵，其本身就值得作为一项平台事实记录下来。LiteRT——即原 TensorFlow Lite，也是 LiteRT-LM 与 MediaPipe LLM Inference API 之下的那一层——声明它提供「统一接口以使用神经处理单元（NPU），无需开发者去周旋于各厂商各自的编译器、运行时或库依赖」，并列出了**五个 NPU 系列**及各自的编译模式与成熟度：

| 厂商后端 | 编译方式 | 状态 |
| --- | --- | --- |
| Qualcomm AI Engine Direct | AOT 与 JIT | 生产可用 |
| MediaTek NeuroPilot | AOT 与 JIT | 生产可用 |
| Intel OpenVINO | AOT 与 JIT | 生产可用 |
| Samsung Exynos AI LiteCore | AOT 与 JIT | 生产可用 |
| Google Tensor | 仅 AOT | Beta（尚不支持 JIT） |

**提前编译（AOT）**与**即时编译（JIT）**之分是部署层面真正关键的区别。AOT 在发布前针对特定 SoC 编译模型，省掉了端上编译开销，但需要为每种 SoC 准备产物并解决分发；JIT 在设备上编译，可移植性好，但首次运行要付出编译代价。文档中唯一一组公开性能数字恰恰关于这项代价：启用编译缓存后，某设备上 **ResNet152** 的模型初始化从 **7465.22 毫秒降至 198.34 毫秒**，初始化内存从 **1525.24 MB 降至 355.07 MB**。跨厂商的端到端推理对比**未**公布。

LiteRT 栈中最有力的端侧数字来自一篇配套公告而非文档：**LiteRT NeuroPilot Accelerator**（谷歌开发者博客，**2025 年 12 月 8 日**），是旧版 TFLite NeuroPilot delegate 的彻底重写版。在 Vivo X300 Pro 上的 **MediaTek Dimensity 9500** 实测中，Gemma 系列模型**相对 CPU 最高 12 倍、相对 GPU 最高 10 倍**加速；具体到 **Gemma 3n E2B**，**预填充超过 1600 tokens/s，4K 上下文下解码 28 tokens/s**。部署路径为针对特定 SoC 的 AOT 编译、经安卓 **Play for On-device AI（PODAI）** 分发，再通过带 CPU/GPU 回退的 C++ API 推理。

其上一层运行时 **LiteRT-LM**（谷歌开发者博客，2025 年 9 月 24 日）是一个 C++ 流水线层，已随 Chrome、Chromebook Plus 与 Pixel Watch 的 Smart Replies 出货。其架构是一个单例 **Engine** 持有共享基座模型与多模态编码器，加上若干轻量有状态 **Session** 承载各自会话状态与 LoRA 适配器，配合写时复制的 KV cache 会话克隆，报称**低于 10 毫秒**。这正是同一台设备上多个功能共用一份常驻基础模型、而非各自加载一份的实现方式。

## Key technical points (EN)

- **Five NPU backends behind one API.** Qualcomm AI Engine Direct, MediaTek NeuroPilot, Intel OpenVINO and Samsung Exynos AI LiteCore are all listed **Production** with both AOT and JIT; Google's own Tensor is **Beta, AOT only**. The vendor with the least mature LiteRT NPU path is Google's own silicon.
- **AOT vs JIT is the deployment decision.** AOT removes on-device compile cost but needs per-SoC artifacts and a delivery channel (PODAI on Android); JIT is portable but pays compile cost at first run.
- **Compilation caching is the documented win.** ResNet152 initialisation **7465.22 ms → 198.34 ms**; initialisation memory **1525.24 MB → 355.07 MB** on the device measured. This is a cold-start figure, not an inference-throughput figure.
- **No cross-vendor inference comparison is published.** The matrix says which backends work, not which is fastest. Anyone wanting to rank NPUs still has to go to an independent benchmark.
- **Concrete LLM numbers exist, but on one SoC.** Gemma 3n E2B on Dimensity 9500 (Vivo X300 Pro): **>1600 tokens/s prefill, 28 tokens/s decode at 4K context**; Gemma up to **12× vs CPU, 10× vs GPU**.
- **LiteRT-LM's Engine/Session model** shares one resident base model across features: singleton Engine (base model + multimodal encoders), stateful Sessions with LoRA adapters, copy-on-write KV-cache cloning **<10 ms**, plus context switching and prompt caching.
- **Shipping surface.** LiteRT-LM is already in Chrome, Chromebook Plus and Pixel Watch Smart Replies, and is the framework behind Gemini Nano and Gemma deployment in Google products. The LiteRT-LM CLI/Python API is reported to cover NPU alongside CPU and GPU on Linux, macOS and Windows.

## Key technical points (ZH)

- **一套 API 之下五个 NPU 后端。** Qualcomm AI Engine Direct、MediaTek NeuroPilot、Intel OpenVINO 与 Samsung Exynos AI LiteCore 均标注为**生产可用**且同时支持 AOT 与 JIT；谷歌自家的 Tensor 则是 **Beta、仅 AOT**。LiteRT NPU 路径最不成熟的那家厂商，恰是谷歌自己的芯片。
- **AOT 与 JIT 之选就是部署之选。** AOT 免去端上编译开销，但需要按 SoC 准备产物并配套分发通道（安卓上的 PODAI）；JIT 可移植，但首次运行要付编译代价。
- **文档给出的收益是编译缓存。** 所测设备上 ResNet152 初始化 **7465.22 毫秒 → 198.34 毫秒**，初始化内存 **1525.24 MB → 355.07 MB**。这是冷启动数字，不是推理吞吐数字。
- **未公布跨厂商推理对比。** 该矩阵说明哪些后端可用，而非哪个更快。想给 NPU 排序，仍必须依赖独立基准测试。
- **有具体的大模型数字，但只在一颗 SoC 上。** Dimensity 9500（Vivo X300 Pro）上的 Gemma 3n E2B：**预填充 >1600 tokens/s，4K 上下文解码 28 tokens/s**；Gemma 系列相对 CPU 最高 **12 倍**、相对 GPU **10 倍**。
- **LiteRT-LM 的 Engine/Session 模型**让多个功能共用一份常驻基座模型：单例 Engine（基座模型 + 多模态编码器）、带 LoRA 适配器的有状态 Session、写时复制的 KV cache 克隆 **<10 毫秒**，另有上下文切换与 prompt 缓存。
- **出货面。** LiteRT-LM 已用于 Chrome、Chromebook Plus 与 Pixel Watch 的 Smart Replies，也是谷歌产品中 Gemini Nano 与 Gemma 部署的底层框架。据称 LiteRT-LM 的 CLI/Python API 在 Linux、macOS 与 Windows 上已覆盖 NPU 及 CPU、GPU。

## Why it matters / what's new (EN)

The gap this closes is a real one. NPUs have shipped in phones and PCs for years and vendors quote TOPS figures constantly, yet the runtimes most people actually use to run a local model still execute on CPU or GPU: as of mid-2026 Ollama has no NPU backend at all, and llama.cpp reaches an Intel NPU only through a preview OpenVINO backend. The obvious question — *does anything actually drive these NPUs in production?* — now has a first-party answer, and it is yes, but through one specific stack. LiteRT is the runtime that has done the per-vendor integration work, and its support matrix is currently the closest thing to a map of which on-device accelerators are genuinely programmable through a portable API.

The matrix's most informative row is the one that fails. Google Tensor is **Beta and AOT-only** while four third-party NPUs are Production with both compilation modes — a useful reminder that "has an NPU" and "has a working general-purpose path to that NPU" are different claims, and that even a vertically integrated vendor does not automatically clear the second bar.

The published numbers are also worth reading for what they are and are not. The documentation's headline result is a **cold-start** measurement: caching compilation takes ResNet152 initialisation from 7.5 seconds to 0.2 seconds and cuts 1.2 GB of initialisation memory. That is a deployment-shaped number — it is about whether a feature can open instantly and whether it can coexist with other apps — not a throughput number, and it says nothing about which NPU is faster. For actual LLM throughput there is exactly one benchmarked configuration, Gemma 3n E2B on a Dimensity 9500, and it is a Google-and-MediaTek co-published result on hardware chosen by the parties making the claim.

That configuration is still valuable, because it is the first concrete tokens-per-second figure for a flagship Android NPU in this knowledge base, and it lands directly on a gap recorded here two days ago: the MediaTek source has repeatedly returned Dimensity 9500 NPU claims in pure marketing framing with no benchmarked numbers behind them. 1600 tokens/s prefill and 28 tokens/s decode at 4K context is at least a checkable statement about a named model on named silicon. The corresponding independent check — an MLPerf Client round covering these parts — remains the missing piece, and the same one that would settle the undisclosed figures in the Aion and AFM 3 announcements recorded elsewhere in this knowledge base.

## Why it matters / what's new (ZH)

这条条目填补的是一个真实的空缺。NPU 在手机和 PC 上已出货多年，厂商不断报出 TOPS 数字，但大多数人实际用来跑本地模型的运行时仍然跑在 CPU 或 GPU 上：截至 2026 年年中，Ollama 完全没有 NPU 后端，llama.cpp 也只能通过一个预览版 OpenVINO 后端够到 Intel NPU。那个显而易见的问题——**到底有没有东西在生产环境里真正驱动这些 NPU？**——现在有了第一方回答：有，但走的是一条特定的技术栈。LiteRT 是完成了逐厂商适配工作的那个运行时，其支持矩阵目前是「哪些端侧加速器真能通过可移植 API 编程」这张地图最接近的版本。

矩阵中信息量最大的，恰是那一行不合格的。谷歌 Tensor 是 **Beta 且仅支持 AOT**，而四家第三方 NPU 均为生产可用且两种编译模式齐备——这是一个有用的提醒：「有 NPU」和「有一条通往该 NPU 的可用通用路径」是两个不同的主张，而即便是垂直整合的厂商也不会自动跨过第二道门槛。

公开的数字也值得看清它是什么、不是什么。文档的头条结果是一个**冷启动**测量：启用编译缓存后，ResNet152 的初始化从 7.5 秒降到 0.2 秒，并省下 1.2 GB 初始化内存。这是一个部署形态的数字——关乎功能能否秒开、能否与其他应用共存——而不是吞吐数字，且完全没有说明哪家 NPU 更快。真正的大模型吞吐只有一组基准配置：Dimensity 9500 上的 Gemma 3n E2B，且是谷歌与联发科联合发布、硬件由主张方自己选定的结果。

即便如此，这组配置仍有价值，因为它是本知识库中第一个针对旗舰安卓 NPU 的具体 tokens/s 数字，并且正好落在两天前记录的一处空缺上：联发科来源反复给出的 Dimensity 9500 NPU 说法全是营销口径，背后没有任何实测数字。「4K 上下文下预填充 1600 tokens/s、解码 28 tokens/s」至少是一个针对具名模型与具名芯片、可被核查的陈述。相应的独立核验——一轮覆盖这些芯片的 MLPerf Client 测试——仍是缺失的一环，也正是能为本知识库中 Aion 与 AFM 3 两条发布里那些未披露数字定案的同一件事。

## Images

*(No redistributable images for this entry — the support matrix and benchmark charts are hosted on developers.google.com and developers.googleblog.com.)*
