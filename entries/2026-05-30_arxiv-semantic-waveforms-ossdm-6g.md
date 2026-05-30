---
id: 2026-05-30_arxiv-semantic-waveforms-ossdm-6g
date_published: 2026-02-10
date_found: 2026-05-30
type: academic-paper
title_en: "Semantic Waveforms for AI-Native 6G Networks (OSSDM)"
title_zh: "面向 AI 原生 6G 网络的语义波形（OSSDM）"
url: "https://arxiv.org/abs/2602.13316"
source_quality: full
topics: [6G, semantic-communication, waveform, OSSDM, AI-native, OFDM, RF-chain]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
technology: cellular
novelty_score: 3
---

## Summary (EN)
Hello, Hamoura, Rivet, and Calvanese Strinati (CEA-Leti / Bordeaux) propose a waveform that builds semantic meaning into the physical signal itself, rather than treating PHY transmission and semantic communication as separate layers. Their design, Orthogonal Semantic Sequency Division Multiplexing (OSSDM), is a parametrizable orthogonal-base waveform that allows controlled, graceful degradation of the transmitted signal so that semantically significant content is preserved while overall resource consumption is minimized — and crucially, it does so while respecting the hardware constraints of real RF chains.

The core idea is "meaning-aware physical signal construction": instead of maximizing bit-fidelity uniformly, OSSDM allocates signal energy and sequency components so that the information that matters most semantically is the most robust to channel impairment and resource cuts. This makes degradation under poor channels or tight resource budgets degrade *meaning* slowly even as raw bit-accuracy drops — the property semantic-communication systems want but that conventional OFDM, which is semantics-agnostic, does not provide.

Numerical evaluation shows OSSDM outperforming conventional OFDM on both spectral efficiency and semantic fidelity while remaining robust to channel impairments. For 6G's "AI-native" agenda — where the network carries AI task payloads, not just bits — a waveform whose degradation is aligned with semantic importance is a concrete PHY-layer enabler.

## Summary (ZH)
Hello、Hamoura、Rivet 与 Calvanese Strinati（CEA-Leti / 波尔多）提出一种将语义含义直接构建进物理信号本身的波形，而非把物理层传输与语义通信当作彼此独立的层。其设计称为正交语义序率分复用（OSSDM），是一种可参数化的正交基波形，允许对发射信号进行受控、平滑的降级，使语义重要内容得以保留、同时最小化整体资源消耗——关键是，它在尊重真实射频链硬件约束的前提下做到这点。

核心思想是"含义感知的物理信号构造"：OSSDM 不是均匀地最大化比特保真度，而是分配信号能量与序率分量，使语义上最重要的信息对信道损伤与资源削减最稳健。这样在信道恶劣或资源预算紧张时，即便原始比特准确度下降，*含义*也只缓慢退化——这正是语义通信系统所追求、而语义无关的传统 OFDM 无法提供的特性。

数值评估显示 OSSDM 在频谱效率与语义保真度上均优于传统 OFDM，且对信道损伤保持稳健。对于 6G 的"AI 原生"议程——网络承载的是 AI 任务负载而非仅仅是比特——一种降级方式与语义重要性对齐的波形，是具体的物理层使能技术。

## Key technical points (EN)
- OSSDM: parametrizable orthogonal-base waveform encoding semantic importance into physical signal construction.
- Controlled graceful degradation preserves semantically significant content under tight resource / poor channel conditions.
- Explicitly accounts for RF-chain hardware constraints (not just an abstract information-theory result).
- Outperforms conventional OFDM on spectral efficiency and semantic fidelity in numerical evaluation.
- Targets the AI-native 6G case where the link carries AI/semantic task payloads rather than generic bits.

## Key technical points (ZH)
- OSSDM：将语义重要性编码进物理信号构造的可参数化正交基波形。
- 受控平滑降级，在资源紧张/信道恶劣下保留语义重要内容。
- 明确考虑射频链硬件约束（非纯抽象信息论结果）。
- 数值评估中在频谱效率与语义保真度上优于传统 OFDM。
- 面向 AI 原生 6G：链路承载 AI/语义任务负载而非通用比特。

## Why it matters / what's new (EN)
Adds a PHY-layer dimension to the KB's 6G coverage, which has skewed toward RAN control / agentic orchestration. Semantic communication is widely discussed at the application layer; OSSDM pushes it down into the waveform with explicit RF-chain realism, which is the harder and more deployable contribution. Complements the AI-native-air-interface thread the cellular bin tracks.

## Why it matters / what's new (ZH)
为 KB 偏向 RAN 控制/智能体编排的 6G 覆盖增加了物理层维度。语义通信多在应用层讨论；OSSDM 将其下沉到波形并显式考虑射频链现实，这是更难也更可部署的贡献。与蜂窝分箱所追踪的 AI 原生空口线索互补。
