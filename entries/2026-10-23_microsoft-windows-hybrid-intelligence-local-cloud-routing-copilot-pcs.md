---
id: 2026-10-23_microsoft-windows-hybrid-intelligence-local-cloud-routing-copilot-pcs
date_published: 2026-10-07
date_found: 2026-10-23
technology: edge-ai
type: industry-news
title_en: "Microsoft 'Building Windows for hybrid intelligence': local models, local/cloud routing, MXC containment and llama.cpp in Windows ML"
title_zh: "微软《为混合智能构建 Windows》：本地模型、本地/云端路由、MXC 容器隔离与 Windows ML 的 llama.cpp 支持"
url: "https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/"
source_quality: full
topics: [hybrid-intelligence, Copilot+PC, Windows-ML, llama.cpp, MXC, local-models, model-routing, RTX-Spark, Windows]
topic_primary: ai-pc
topics_secondary: [on-device-inference, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

On 7 October 2026 the head of Windows + Devices published a platform post describing Windows as "the home for hybrid intelligence": agents that "run locally when it makes sense, reach the cloud when they need to." The post is organised around four pieces. First, agent containment: Microsoft Execution Containers (MXC) become generally available on Windows 11, letting organisations define which files and networks an agent may reach, with policy enforced at runtime and ties to Agent 365 and Intune. Second, local models and routing: the post says Microsoft's 137B-total / 6.8B-active-parameter MAI Code 1.1 Flash (introduced at Build) is being brought to devices at 3-bit precision, which it says cuts model size by nearly 80% and supports a 256K-token context locally; it also names an upcoming NVIDIA Nemotron model of over 70B parameters quantised to 2-bit to use "just over 20GB" of memory, and DeepSeek V4 Flash (284B parameters), for NVIDIA RTX Spark machines. GitHub's HydraFusion model router, which previously chose among cloud models, is being extended to route to models running locally, with an experimental preview in the GitHub Copilot app, Copilot CLI and VS Code stated for later in October. Third, runtime: llama.cpp support is announced for Windows ML, which deploys models across GPU, NPU and CPU. Fourth, Copilot on Copilot+ PCs gains three capabilities, "local context", "local actions" and "local models", described as rolling out "over the coming months".

On hardware, the post cites more than 2 trillion locally run inferences per month across Copilot+ PCs and says over 40% of laptops built for business are Copilot+ PCs. It announces pre-orders for RTX Spark Windows PCs from ASUS, Dell, HP, Lenovo, MSI and Surface (Surface Laptop Ultra with up to 128 GB unified memory, stated as able to run models above 120B parameters locally), a native Windows gateway plus MXC integration for OpenClaw on mini desktop PCs, and DGX Station for Windows, described as running models of over a trillion parameters locally later this year. The RTX Spark speedups over a 64 GB MacBook Pro 16-inch with M5 Pro (up to 2.1x time-to-first-token, 4.3x image generation, 6.2x video generation) come from Microsoft-commissioned (TTFT) and NVIDIA (image/video) tests on preproduction 64 GB machines in September 2026, with configurations given in footnotes (e.g., llama.cpp, Qwen3.5 27B Q4K-M, 8,192-token prompt); for DGX Station the body says models of more than a trillion parameters while the footnote says up to 1 trillion. The routing criteria used to decide local versus cloud are not specified.

## Summary (ZH)

2026 年 10 月 7 日，微软 Windows + Devices 负责人发布平台文章，把 Windows 描述为“混合智能的家”：智能体可以“在合适时本地运行，需要时访问云端”。文章围绕四部分展开。其一，智能体隔离：Microsoft Execution Containers（MXC）在 Windows 11 上正式可用，组织可定义智能体可访问的文件和网络，策略在运行时强制执行，并与 Agent 365 和 Intune 衔接。其二，本地模型与路由：文章称 Build 上发布的 MAI Code 1.1 Flash（总参数 1370 亿、激活 68 亿）将以 3 位精度带到设备端，称模型体积缩小近 80% 并在本地支持 256K 上下文；还提到面向 NVIDIA RTX Spark 机器的、即将推出的 NVIDIA Nemotron 模型（超过 700 亿参数，2 位量化后“略超 20GB”内存）以及 DeepSeek V4 Flash（2840 亿参数）。此前在云端为每个任务选择模型的 GitHub HydraFusion 路由器将扩展到可调用本地运行的模型，GitHub Copilot 应用、Copilot CLI 和 VS Code 的实验预览预计在 10 月下旬。其三，运行时：宣布 Windows ML（跨 GPU、NPU、CPU 部署模型）支持 llama.cpp。其四，Copilot+ PC 上的 Copilot 获得三项能力——“本地上下文”“本地操作”和“本地模型”，称将在“未来几个月”陆续推出。

硬件方面，文章称 Copilot+ PC 每月在本地运行的推理超过 2 万亿次，面向企业的笔记本中超过 40% 为 Copilot+ PC。文章宣布 ASUS、Dell、HP、Lenovo、MSI 和 Surface 的 RTX Spark Windows PC 开始预订（Surface Laptop Ultra 最高 128 GB 统一内存，称可在本地运行超过 1200 亿参数的模型）；在迷你台式机上为 OpenClaw 提供原生 Windows 网关并集成 MXC；并称 DGX Station for Windows 将于今年晚些时候推出，可在本地运行超过万亿参数的模型。RTX Spark 相对 64 GB 16 英寸 MacBook Pro（M5 Pro）的加速（首 token 时间最高 2.1 倍、图像生成 4.3 倍、视频生成 6.2 倍）来自 2026 年 9 月微软委托（首 token）和 NVIDIA（图像/视频）在 64 GB 预量产机上的测试，配置见脚注（如 llama.cpp、Qwen3.5 27B Q4K-M、8,192 token 提示）；DGX Station 正文称可运行超过万亿参数的模型，脚注则写“最高 1 万亿参数”。本地与云端之间如何决策的路由标准文中没有说明。

## Key technical points (EN)

- Routing is the new platform element: HydraFusion (already a cloud model router) is extended to include on-device models; Copilot "local models" combine local compute with cloud "when needed". Criteria for the split are not published in the post.
- Quantisation as the enabler: 3-bit MAI Code 1.1 Flash (stated roughly 80% smaller, 256K context) and a 2-bit Nemotron-class model (over 70B parameters in just over 20GB) are the stated memory-fit mechanisms; accuracy retention is asserted ("preserving coding quality") rather than measured in the post.
- Runtime: Windows ML (a runtime that deploys models across GPU, NPU and CPU) adds llama.cpp support, which the post says gives developers more open-source model choices and quicker experimentation with emerging models.
- Containment: MXC enforces per-agent file and network policy at runtime, with options from process isolation through VMs and "Windows 365 for Agents"; listed agent integrations include Codex, GitHub Copilot, OpenClaw, LM Studio and others.
- Device tiers: Copilot+ PCs (NPU-based, "hybrid intelligence" features rolling out in coming months), RTX Spark builder PCs (up to 128 GB unified memory) and DGX Station for Windows (GB300 Grace Blackwell Ultra); the last tier is data-centre-class hardware placed on a desk.
- Evidence status: all performance figures are Microsoft-commissioned or NVIDIA tests on preproduction hardware, described in footnotes; no third-party measurement is cited.

## Key technical points (ZH)

- 路由是新的平台要素：HydraFusion（原为云端模型路由器）扩展到纳入端侧模型；Copilot 的“本地模型”在“需要时”把本地算力与云端结合。文章未公布分流标准。
- 量化是关键支撑：3 位的 MAI Code 1.1 Flash（称体积缩小约 80%、256K 上下文）和 2 位的 Nemotron 级模型（超过 700 亿参数仅占略超 20GB）是文中所述的内存适配手段；精度保持为文中的断言（“保持编码质量”），并非文中实测。
- 运行时：Windows ML（可跨 GPU、NPU、CPU 部署模型的运行时）新增 llama.cpp 支持，文章称这为开发者提供更多开源模型选择，并能更快试用新模型。
- 隔离：MXC 在运行时按智能体强制文件与网络策略，隔离层级涵盖进程隔离到虚拟机以及“Windows 365 for Agents”；列出的集成智能体包括 Codex、GitHub Copilot、OpenClaw、LM Studio 等。
- 设备分层：Copilot+ PC（基于 NPU，“混合智能”功能未来几个月推出）、RTX Spark 构建者 PC（最高 128 GB 统一内存）以及 DGX Station for Windows（GB300 Grace Blackwell Ultra）；最后一层是置于桌面的数据中心级硬件。
- 证据状态：所有性能数字均为微软委托或 NVIDIA 在预量产硬件上的测试，配置见脚注；文中未引用第三方测量。

## Why it matters / what's new (EN)

The post frames Windows as a hybrid platform where agents "run locally when it makes sense, reach the cloud when they need to", motivated in its words by customers' cloud token budgets. The pieces are a local/cloud routing layer (HydraFusion), llama.cpp in Windows ML, and low-bit quantised large models (3-bit MAI Code 1.1 Flash on devices; 2-bit Nemotron and DeepSeek V4 Flash on RTX Spark PCs). It is a platform announcement, not a measurement; the quantised-model quality and the local-versus-cloud decision policy are the claims worth checking once the preview ships. A related earlier KB entry, [2026-08-29_microsoft-aion-windows-on-device-slm-family](2026-08-29_microsoft-aion-windows-on-device-slm-family.md), covers Microsoft's Aion model family and the dropped NPU requirement for Windows AI APIs.

## Why it matters / what's new (ZH)

文章把 Windows 定位为混合平台：智能体“在合适时本地运行，需要时访问云端”，其动机按文章所述是客户的云端 token 预算。组成部分包括本地/云端路由层（HydraFusion）、Windows ML 中的 llama.cpp，以及低比特量化的大模型（设备端 3 位 MAI Code 1.1 Flash；RTX Spark PC 上的 2 位 Nemotron 与 DeepSeek V4 Flash）。这是平台公告而非测量结果；预览版发布后，量化模型的质量与本地/云端决策策略是值得核验的说法。KB 中此前有一条相关条目 [2026-08-29_microsoft-aion-windows-on-device-slm-family](2026-08-29_microsoft-aion-windows-on-device-slm-family.md)，涉及微软 Aion 模型家族以及 Windows AI API 取消 NPU 要求。

## Images

*(No redistributable images for this entry.)*
