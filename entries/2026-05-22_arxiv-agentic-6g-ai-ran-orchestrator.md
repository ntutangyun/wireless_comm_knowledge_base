---
id: 2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator
date_published: 2026-05-12
date_found: 2026-05-22
type: academic-paper
title_en: "Agents Should Replace Narrow Predictive AI as the Orchestrator in 6G AI-RAN"
title_zh: "智能体应取代窄带预测AI成为6G AI-RAN的编排核心"
url: "https://arxiv.org/abs/2605.11516"
source_quality: full
topics: [6G, AI-RAN, LLM, RIC, agentic-AI]
topic_primary: cellular-ai
topics_secondary: [6g-vision, open-ran]
novelty_score: 4
---

## Summary (EN)
This position paper argues that achieving Level 5 autonomous 6G networks requires a fundamental architectural shift: replacing fragmented narrow predictive AI models with multimodal Large Language Models (LLMs) — or domain-adapted Large Telecom Models (LTMs) — as central reasoning agents in the RAN Intelligent Controller (RIC). Current AI-RAN architectures rely on disjointed DNN and DRL agents operating in isolated domains, suffering from siloed knowledge, brittleness to out-of-distribution dynamics, and inability to bridge the semantic gap between high-level operator intents and rigid numerical network configurations.

The authors propose that LLMs should serve as the "cognitive operating system" of the RIC, orchestrating narrow models as executable subroutines rather than replacing them. In this architecture, LLMs dynamically translate human intent into concrete policies and use Retrieval-Augmented Generation (RAG) for autonomous diagnosis of complex multi-vendor network anomalies. The paper identifies four critical research pillars for making this feasible in telecom: continuous alignment via network-driven feedback (RLNF), extreme sub-8-bit edge quantization, neuro-symbolic verification to curb hallucinations, and securing orchestration frameworks against adversarial prompt injection.

## Summary (ZH)
本立场论文主张实现5级自主6G网络需要根本性的架构转变：用多模态大语言模型（LLM）或领域适配的大型电信模型（LTM）取代碎片化的窄带预测AI模型，作为RAN智能控制器（RIC）中的核心推理智能体。当前AI-RAN架构依赖在孤立域中运行的相互脱节的DNN和DRL智能体，存在知识孤岛、对分布外动态的脆弱性，以及无法弥合高层运营商意图与刚性数值网络配置之间的语义鸿沟等根本性问题。

作者提出LLM应作为RIC的"认知操作系统"，将窄带模型编排为可执行子程序而非替代它们。在该架构中，LLM动态将人类意图转化为具体策略，并利用检索增强生成（RAG）自主诊断复杂的多厂商网络异常。论文确定了实现这一愿景的四个关键研究支柱：通过网络驱动反馈进行持续对齐（RLNF）、极限sub-8-bit边缘量化、神经符号验证以抑制幻觉，以及保护编排框架免受对抗性提示注入攻击。

## Key technical points (EN)
- **Architectural position**: LLMs/LTMs as the "cognitive OS" in RIC, orchestrating narrow models as subroutines — not replacing them but directing them
- **Intent gap problem**: Current narrow AI cannot bridge semantic disconnect between high-level operator directives ("improve cell-edge throughput") and numerical configurations (PRB allocation, MCS selection)
- **RAG-based diagnosis**: LLMs leverage Retrieval-Augmented Generation for autonomous multi-vendor network anomaly diagnosis
- **Four research pillars identified**: (1) RLNF — reinforcement learning from network feedback for continuous alignment; (2) sub-8-bit quantization for edge deployment; (3) neuro-symbolic verification to prevent hallucination-induced misconfigurations; (4) security framework against adversarial prompt injection
- **Non-replacement architecture**: LLMs do NOT make real-time scheduling decisions — they set policies; narrow models still handle per-TTI decisions

## Key technical points (ZH)
- **架构定位**：LLM/LTM作为RIC中的"认知操作系统"，将窄带模型编排为子程序——非替代而是指导
- **意图鸿沟问题**：当前窄带AI无法弥合高层运营商指令（"改善小区边缘吞吐量"）与数值配置（PRB分配、MCS选择）之间的语义脱节
- **基于RAG的诊断**：LLM利用检索增强生成进行自主多厂商网络异常诊断
- **四个研究支柱**：(1) RLNF——通过网络反馈进行强化学习的持续对齐；(2) 极限sub-8-bit量化用于边缘部署；(3) 神经符号验证防止幻觉导致的错误配置；(4) 对抗提示注入的安全框架
- **非替代架构**：LLM不做实时调度决策——它们设定策略；窄带模型仍处理每TTI决策

## Why it matters / what's new (EN)
This is the first paper to explicitly position LLMs as the orchestrator layer in 6G AI-RAN with a concrete implementation pathway (RIC-hosted, RAG-augmented, RLNF-aligned) rather than as a vague "AI-native" aspiration. The four-pillar research agenda is telecom-specific (sub-8-bit quantization, neuro-symbolic verification for safety-critical RAN operations) and goes beyond generic LLM-in-telecom surveys. The non-replacement framing — LLMs orchestrate, narrow models execute — is architecturally sound and avoids the latency pitfall of putting an LLM in the real-time control loop. This complements the 2026-05-18 MAxLM entry (LLM agents for WLAN scheduling) and the 2026-05-19 composable agentic NextG position paper already in the KB, collectively building the case for agentic-AI as the dominant paradigm for next-generation RAN.

## Why it matters / what's new (ZH)
这是首篇明确将LLM定位为6G AI-RAN编排层并提出具体实现路径（RIC托管、RAG增强、RLNF对齐）的论文，而非模糊的"AI原生"愿景。四个支柱研究议程是电信特定的（极限sub-8-bit量化、用于安全关键RAN操作的神经符号验证），超越了通用的LLM-in-telecom综述。非替代框架——LLM编排、窄带模型执行——在架构上合理且避免了将LLM置于实时控制环路的时延陷阱。该文与KB中已有的2026-05-18 MAxLM条目（LLM智能体用于WLAN调度）和2026-05-19可组合智能体NextG立场论文形成互补，共同构建了智能体AI作为下一代RAN主导范式的论证。
