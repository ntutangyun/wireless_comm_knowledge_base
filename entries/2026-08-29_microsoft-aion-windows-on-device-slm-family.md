---
id: 2026-08-29_microsoft-aion-windows-on-device-slm-family
date_published: 2026-06-02
date_found: 2026-08-29
type: industry-news
technology: edge-ai
title_en: "Microsoft Aion 1.0: Windows replaces Phi Silica with an in-box on-device model family, and drops the NPU requirement"
title_zh: "微软 Aion 1.0：Windows 以随系统内置的端侧模型家族取代 Phi Silica，并取消 NPU 硬性要求"
url: "https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development/"
source_quality: full
topics: [Aion, Phi-Silica, Windows-ML, small-language-model, Copilot+PC, tool-calling, CPU-inference, Build-2026]
topic_primary: ai-pc
topics_secondary: [on-device-inference, home-ai-assistant]
novelty_score: 3
---

## Summary (EN)

At Build 2026 (2 June) Microsoft announced **Aion 1.0**, a family of small language models built specifically for local execution on Windows, and positioned it as the successor to Phi Silica — the model that has defined what a Copilot+ PC could do locally since 2024.

There are two members. **Aion 1.0 Instruct** targets "everyday text intelligence (summarization, rewrite, intents, accessibility)" and is described as smaller, faster and more efficient than the current Windows OS SLM (Phi-4-mini). Its notable property is not quality but reach: it "expands support to significantly more devices — including those with less capable GPUs and, through CPU-inference, devices without a GPU." **Aion 1.0 Plan** is a **14-billion-parameter reasoning and tool-calling model with a 32K context window**, which "ships in-box on capable Windows devices" and is meant to let applications "reason over user intent, invoke tools, manage files and orchestrate sub-agents."

Alongside the models, the platform boundary moved. Windows AI APIs, which previously required an NPU, expanded to **GPUs and CPUs in public preview**, with Windows ML positioned as the layer that runs models "across all silicon." Aion 1.0 Instruct is available as a developer preview in Edge Canary and Dev channels, reachable from the web through the Prompt API and Writing Assistance APIs, with an open-weights Hugging Face release stated as planned for July 2026.

Two items in the reporting around this announcement are **not confirmed by the primary Microsoft blogs** and are recorded here as watch items rather than facts: a rollout of Aion Instruct to Windows Insider Preview in October 2026 and retail in November 2026, at which point Phi Silica would be removed; and the actual landing of the Hugging Face open-weights drop, for which no model card was locatable as of 29 August 2026 (a Foundry-Local GitHub discussion asking about Aion 1.0 availability was still open).

This entry is a deliberate backfill: the `ai-pc` bin had no coverage of the platform event that now defines it, and the announcement is well inside the 12-month freshness window even though it is not this week's news.

## Summary (ZH)

在 2026 年 Build 大会（6 月 2 日）上，微软发布了 **Aion 1.0**——一个专为 Windows 本地执行而构建的小语言模型家族，并将其定位为 Phi Silica 的继任者；自 2024 年以来，正是 Phi Silica 定义了一台 Copilot+ PC 在本地能做什么。

家族有两名成员。**Aion 1.0 Instruct** 面向「日常文本智能（摘要、改写、意图识别、无障碍）」，官方描述为比当前的 Windows 系统级 SLM（Phi-4-mini）更小、更快、更高效。它值得注意的性质不在质量而在覆盖面：它「把支持范围扩展到多得多的设备——包括 GPU 能力较弱的设备，以及通过 **CPU 推理**支持没有 GPU 的设备」。**Aion 1.0 Plan** 则是一个 **140 亿参数、32K 上下文的推理与工具调用模型**，「在有能力的 Windows 设备上随系统内置出厂」，用于让应用「就用户意图进行推理、调用工具、管理文件并编排子智能体」。

与模型同时移动的还有平台边界。此前要求必须有 NPU 的 Windows AI API，扩展到了 **GPU 与 CPU（公开预览）**，而 Windows ML 被定位为「跨全部芯片」运行模型的那一层。Aion 1.0 Instruct 以开发者预览形式在 Edge Canary 与 Dev 通道提供，网页侧可经 Prompt API 与 Writing Assistance API 访问；开放权重的 Hugging Face 发布被声明为计划于 2026 年 7 月。

围绕该发布的报道中有两项内容**未被微软官方博客证实**，此处记为观察项而非事实：Aion Instruct 于 2026 年 10 月推送至 Windows Insider Preview、11 月推送至零售设备，届时移除 Phi Silica；以及 Hugging Face 开放权重的实际落地——截至 2026 年 8 月 29 日未能检索到模型卡（Foundry-Local 的 GitHub 讨论中询问 Aion 1.0 可用性的帖子仍处于开放状态）。

本条目是一次刻意的回填：`ai-pc` 主题此前对这一如今定义了该主题的平台事件毫无覆盖，而该发布距今远在 12 个月的时效窗口之内，尽管它并非本周新闻。

## Key technical points (EN)

- Aion 1.0 is a Windows-specific on-device SLM family announced at Build 2026, 2 June 2026; successor to Phi Silica as the Windows OS small language model.
- Aion 1.0 Instruct: everyday text intelligence (summarisation, rewrite, intent extraction, accessibility). Smaller/faster/more efficient than Phi-4-mini per Microsoft. Parameter count, context length, quantisation and memory footprint were NOT disclosed in the announcement.
- Aion 1.0 Instruct runs on devices with weak GPUs and, via CPU inference, on devices with no GPU at all — the AI-PC hardware floor is explicitly lowered.
- Aion 1.0 Plan: 14B parameters, 32K context, reasoning + tool-calling, ships in-box on "capable" Windows devices (capability threshold unstated); intended for agentic workflows including sub-agent orchestration and file management.
- Windows AI APIs expanded from NPU-only to GPU and CPU in public preview; Windows ML framed as the cross-silicon execution layer.
- Web reach: Aion 1.0 Instruct exposed to web content in Edge Canary/Dev via the Prompt API and Writing Assistance APIs.
- Stated plan (not yet confirmed landed): open weights on Hugging Face in July 2026. No model card found as of 2026-08-29.
- Unconfirmed by primary sources: Insider rollout October 2026, retail November 2026, Phi Silica removal at that point.
- Adjacent Build 2026 local-compute hardware, for context only: Surface RTX Spark dev box (NVIDIA RTX Spark, "1 petaflop of AI compute", 128 GB unified memory, US-only, later in 2026) and a DGX Station for Windows (GB300 Grace Blackwell class, trillion-parameter local models, Q4 2026). Both are workstation-class, not the AI-PC mainstream.

## Key technical points (ZH)

- Aion 1.0 是 2026 年 6 月 2 日 Build 大会发布的、面向 Windows 的端侧小语言模型家族；作为 Windows 系统级 SLM，接替 Phi Silica。
- Aion 1.0 Instruct：日常文本智能（摘要、改写、意图抽取、无障碍）。微软称其比 Phi-4-mini 更小/更快/更高效。参数量、上下文长度、量化方案与内存占用在发布中**均未披露**。
- Aion 1.0 Instruct 可运行在 GPU 能力较弱的设备上，并通过 CPU 推理运行在完全没有 GPU 的设备上——AI PC 的硬件门槛被明确下调。
- Aion 1.0 Plan：140 亿参数、32K 上下文，具备推理与工具调用能力，在「有能力的」Windows 设备上随系统内置（能力阈值未说明）；面向包含子智能体编排与文件管理的智能体工作流。
- Windows AI API 从「仅 NPU」扩展至 GPU 与 CPU（公开预览）；Windows ML 被定位为跨芯片的执行层。
- Web 侧触达：Aion 1.0 Instruct 在 Edge Canary/Dev 中经 Prompt API 与 Writing Assistance API 向网页内容开放。
- 已声明但尚未确认落地的计划：2026 年 7 月在 Hugging Face 发布开放权重。截至 2026-08-29 未找到模型卡。
- 官方来源未证实的部分：2026 年 10 月推送 Insider、11 月推送零售设备，并在彼时移除 Phi Silica。
- 同场 Build 2026 的本地算力硬件，仅作背景：Surface RTX Spark 开发机（NVIDIA RTX Spark，「1 petaflop AI 算力」，128 GB 统一内存，仅限美国，2026 年晚些时候）与面向 Windows 的 DGX Station（GB300 Grace Blackwell 级，可本地运行万亿参数模型，2026 年第四季度）。两者均为工作站级，并非 AI PC 主流。

## Why it matters / what's new (EN)

The AI-PC category was defined in 2024 by a hardware gate: a Copilot+ PC needed an NPU above a TOPS floor, and the local model was the thing that gate bought you. Aion 1.0 inverts that. The Instruct model is explicitly aimed at machines with weak GPUs or none at all, running on the CPU, and the Windows AI APIs that previously demanded an NPU now cover GPU and CPU as well. The platform's answer to "where does the model run" has shifted from "on the NPU, on qualifying hardware" to "on whatever silicon this machine has."

That is a meaningful change in compute placement, and it cuts two ways. It makes on-device inference the default assumption for a Windows developer instead of a hardware-conditional feature, which is the precondition for local models actually being used. It also blunts the NPU as a purchasing argument — if the OS SLM runs on a CPU, the NPU's role narrows to power and thermals rather than capability, and those are precisely the axes vendor TOPS numbers do not describe.

The 14B in-box reasoning model is the more aggressive move. Shipping a 14-billion-parameter tool-calling model as part of the operating system, on devices that also have to do everything else, is a real memory and residency commitment — and Microsoft did not publish the "capable device" threshold that decides which machines get it. Combined with the undisclosed footprint of Instruct, the announcement is unusually light on the numbers that determine whether any of this fits: no parameter count, no quantisation scheme, no memory budget, no tokens/s on named hardware.

That gap is the reason this entry is filed with the landing explicitly unconfirmed. The open-weights Hugging Face drop was the event that would have made Aion independently measurable, and it was stated for July; nearly two months later no model card is locatable. Until it lands, Aion's specifications are vendor description rather than checkable fact, and the October/November rollout dates circulating in secondary coverage should be treated as unverified.

## Why it matters / what's new (ZH)

AI PC 这个品类在 2024 年是由一道**硬件门槛**定义的：Copilot+ PC 需要一颗 TOPS 达标的 NPU，而本地模型正是这道门槛换来的东西。Aion 1.0 把它反转了过来。Instruct 明确面向 GPU 弱甚至没有 GPU 的机器，跑在 CPU 上；此前必须有 NPU 的 Windows AI API 如今也覆盖 GPU 与 CPU。平台对「模型在哪里跑」这个问题的答案，已从「在合规硬件的 NPU 上」变成了「在这台机器有的任何芯片上」。

这是算力放置上的一次实质变化，且是双刃的。它让端侧推理从一项依赖硬件条件的功能，变成 Windows 开发者的默认假设——这正是本地模型真正被使用的前提。但它也钝化了 NPU 作为购买理由的说服力：如果系统级 SLM 在 CPU 上就能跑，NPU 的角色便从「能不能做」收窄到「功耗与散热」，而这恰恰是厂商 TOPS 数字所无法描述的两个维度。

那个随系统内置的 14B 推理模型是更激进的一步。把一个 140 亿参数的工具调用模型作为操作系统的一部分出厂，而这台设备还要做其他一切事情，这是一笔真实的内存与常驻承诺——而微软并未公布决定哪些机器能拿到它的「有能力设备」阈值。加上 Instruct 未披露的占用，这次发布在「这些东西究竟装不装得下」的关键数字上异常吝啬：没有参数量、没有量化方案、没有内存预算、也没有在指定硬件上的 tokens/s。

这一缺口正是本条目把落地状态**明确标记为未确认**的原因。开放权重的 Hugging Face 发布本应是让 Aion 可被独立测量的那个事件，且被声明为 7 月；将近两个月后仍检索不到模型卡。在它落地之前，Aion 的规格只是厂商描述而非可核查事实；二手报道中流传的 10 月/11 月推送日期也应视为未经证实。
