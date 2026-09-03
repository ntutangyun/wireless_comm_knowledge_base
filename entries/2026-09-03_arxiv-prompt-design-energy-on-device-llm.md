---
id: 2026-09-03_arxiv-prompt-design-energy-on-device-llm
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: edge-ai
title_en: "How prompt design shapes energy consumption in on-device LLM inference"
title_zh: "提示词设计如何影响端侧 LLM 推理的能耗"
url: "https://arxiv.org/abs/2609.01798"
source_quality: full
topics: [energy-profiling, prompt-engineering, prefill-decode-phase-energy, mobile-LLM, cognitive-load, phrasing-pattern]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Energy efficiency is a deployment constraint for on-device LLMs, but the energy impact of the prompt itself — as opposed to the model or hardware — has been little studied. This paper (Georgia State University and Toyota Motor North America; paper title: "How Do Prompt Variations Affect Energy Consumption in On-Device LLMs?") runs a broad empirical study of two prompt properties, cognitive load and phrasing pattern, across multiple datasets, models, and devices, with phase-level profiling that separates prefill energy from decode energy.

The devices under test were a Pixel 8 Pro (CPU 1.32/1.57/2.04 GHz) and a Pixel 7 (CPU 1.32/1.49/1.58 GHz), both with the GPU at 810 MHz. Models covered Llama-3.2-1B, Qwen-2.5-0.5B, Qwen-2.5-1.5B, Gemma-2-2B, and SmolLM2-360M, run against SVAMP (arithmetic), BoolQ (yes/no), and AI2-ARC (multiple-choice science) prompts. Reported per-inference energy figures include Gemma-2-2B at 23.71 J prefill / 381.19 J decode, and Llama-3.2-1B at 125.08 J prefill / 155.94 J decode; under an added extraneous-load condition, Qwen-2.5-1.5B decode reached 173.18 J (AI2-ARC), with per-token energy under that load rising to 1.29× the baseline.

The paper's headline finding is a split: cognitive load (how hard the prompted task is) primarily changes the energy cost per generated token, while phrasing pattern (how the same request is worded) primarily changes energy through the number of tokens it induces the model to produce. An energy-quality analysis further shows that the same prompt-design choice reshapes the achievable energy/quality frontier differently model to model, which the authors read as an argument for model-aware prompt design rather than a single fixed prompting strategy.

## Summary (ZH)

端侧 LLM 部署中能效是一项硬约束，但提示词本身（而非模型或硬件）对能耗的影响此前研究较少。这篇论文（佐治亚州立大学与丰田北美研究团队合作）围绕两个提示词属性——认知负荷与措辞模式——在多个数据集、模型与设备上做了较大规模的实证研究，并采用分阶段能耗剖析，将 prefill（预填充）能耗与 decode（解码）能耗分开测量。

测试设备为 Pixel 8 Pro（CPU 主频 1.32/1.57/2.04 GHz）与 Pixel 7（CPU 主频 1.32/1.49/1.58 GHz），两者 GPU 主频均为 810 MHz。测试模型包括 Llama-3.2-1B、Qwen-2.5-0.5B、Qwen-2.5-1.5B、Gemma-2-2B 与 SmolLM2-360M，测试数据集为 SVAMP（算术题）、BoolQ（是非题）与 AI2-ARC（多项选择科学题）。报告的单次推理能耗数据包括：Gemma-2-2B prefill 23.71 J / decode 381.19 J，Llama-3.2-1B prefill 125.08 J / decode 155.94 J；在额外负载条件下，Qwen-2.5-1.5B 的 decode 能耗达到 173.18 J（AI2-ARC），该条件下单 token 能耗升至基线的 1.29 倍。

论文的核心发现是一种"分工"：认知负荷（任务本身的难度）主要改变每个生成 token 的能耗成本，而措辞模式（同一请求的不同表达方式）主要通过改变模型生成的 token 数量来影响总能耗。能耗-质量分析进一步表明，同样的提示词设计选择在不同模型上会以不同方式重塑可达到的能耗/质量前沿，作者据此认为，在追求端侧 LLM 能效时应采用"模型感知"的提示词设计，而非单一固定的提示策略。

## Key technical points (EN)

- **Devices**: Pixel 8 Pro (CPU 1.32/1.57/2.04 GHz) and Pixel 7 (CPU 1.32/1.49/1.58 GHz), GPU 810 MHz on both — real commercial smartphone hardware, not a server proxy.
- **Models**: Llama-3.2-1B, Qwen-2.5-0.5B, Qwen-2.5-1.5B, Gemma-2-2B, SmolLM2-360M.
- **Method**: phase-level energy profiling separating prefill from decode, across prompt variants that hold task content constant while varying cognitive load and phrasing pattern.
- **Finding 1**: cognitive load → changes energy cost per token.
- **Finding 2**: phrasing pattern → changes energy mainly via induced token count, not per-token cost.
- **Reported energy figures**: Gemma-2-2B 23.71 J prefill / 381.19 J decode; Llama-3.2-1B 125.08 J prefill / 155.94 J decode; Qwen-2.5-1.5B decode under extraneous load 173.18 J on AI2-ARC (1.29× baseline per-token energy).
- **Implication drawn by the authors**: energy-efficient on-device prompting should be model-aware, since the energy/quality frontier moves differently per model under the same prompt-design change.

## Key technical points (ZH)

- **测试设备**：Pixel 8 Pro（CPU 主频 1.32/1.57/2.04 GHz）、Pixel 7（CPU 主频 1.32/1.49/1.58 GHz），GPU 主频均为 810 MHz——真实商用手机硬件，而非服务器代理测试环境。
- **测试模型**：Llama-3.2-1B、Qwen-2.5-0.5B、Qwen-2.5-1.5B、Gemma-2-2B、SmolLM2-360M。
- **方法**：分阶段能耗剖析，将 prefill 与 decode 能耗分离测量，在保持任务内容不变的前提下改变认知负荷与措辞模式。
- **发现一**：认知负荷 → 改变每 token 的能耗成本。
- **发现二**：措辞模式 → 主要通过改变模型被诱导生成的 token 数量来影响能耗，而非改变单 token 成本。
- **报告的能耗数据**：Gemma-2-2B prefill 23.71 J / decode 381.19 J；Llama-3.2-1B prefill 125.08 J / decode 155.94 J；Qwen-2.5-1.5B 在额外负载下于 AI2-ARC 上的 decode 能耗为 173.18 J（单 token 能耗为基线的 1.29 倍）。
- **作者给出的启示**：由于同一提示词设计变化在不同模型上会以不同方式移动能耗/质量前沿，端侧提示词设计应当"模型感知"，而非采用单一固定策略。

## Why it matters / what's new (EN)

Most on-device-LLM energy work varies the model or the hardware and holds the prompt fixed; this paper holds the model and hardware fixed and varies the prompt, isolating a variable the deployment literature has mostly treated as free. The phase-level split (prefill vs. decode) and the real-phone measurement setup (Pixel 7/8 Pro, not a simulator) make this a measurement contribution to on-device inference rather than a new mechanism. The practical takeaway for anyone building an on-device chat or agent app is concrete: prompt templates and system-prompt phrasing are themselves an energy-tuning lever, and the wording that is most energy-efficient for one model is not necessarily the most efficient for another.

## Why it matters / what's new (ZH)

多数端侧 LLM 能耗研究会改变模型或硬件、而固定提示词；这篇论文则反过来固定模型与硬件、改变提示词，从而单独考察了一个此前部署类文献大多视为"免费"的变量。其分阶段（prefill/decode）测量方式，以及基于真实手机（Pixel 7/8 Pro，而非模拟器）的测试环境，使其属于端侧推理领域的"测量类"贡献，而非新机制提案。对于构建端侧对话或 Agent 应用的开发者而言，其结论具有实操意义：提示词模板与系统提示词的措辞本身就是一个可调节能耗的"旋钮"，且对某一模型能耗效率最优的写法，未必对另一模型同样高效。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
