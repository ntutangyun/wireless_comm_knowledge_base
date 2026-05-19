---
id: 2026-05-19_arxiv-composable-agentic-nextg
date_published: 2026-05-15
date_found: 2026-05-19
type: academic-paper
title_en: "Against the Monolithic Wireless World Model: Why NextG Needs Composable and Agentic Intelligence"
title_zh: "反对单体无线世界模型：为何下一代网络需要可组合与智能体驱动的智能"
url: https://arxiv.org/abs/2605.16689
source_quality: full
topics: [agentic-AI, LLM-agent, 6G, AI-native]
topic_primary: agentic-wifi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

This position paper from IBM Research, Apple, and the Technical University of Munich pushes back against the rising tide of "wireless foundation model" proposals — large pretrained models that aim to provide universal intelligence across all layers of the wireless protocol stack. The authors argue that the analogy between large language models (LLMs) and wireless foundation models is structurally broken, and that monolithic wireless world models face four data bottlenecks that scaling alone cannot resolve.

The four bottlenecks are: (1) **Configuration dependence** — a CSI tensor labeled "good" under one antenna geometry or scheduler is meaningless under another, so there is no stable tokenization substrate comparable to text; (2) **Simulator conditioning** — most wireless ML training data comes from simulators with baked-in assumptions, creating a gap between train-time and deploy-time distributions; (3) **Task disaggregation** — wireless tasks are inherently modular (PHY vs. MAC vs. RAN vs. core), and a single model lacks the inductive biases to serve all of them; (4) **Weak operational grounding** — wireless models rarely receive closed-loop feedback from live networks, so errors compound silently without the RL-style reward signals that ground language models in human preference.

Instead, the authors advocate for **composable and agentic architectures**: reasoning agents (LLMs) that orchestrate specialized signal-processing models, classical algorithms, digital twins, standards-aware retrieval systems, and safety monitors through explicit programmable interfaces. This architecture aligns with the existing modularity of the wireless protocol stack and with O-RAN's near-real-time / non-real-time control loops and xApp/rApp interfaces. Notably, the paper explicitly cites Wi-Fi optimization work — including LLM-powered Wi-Fi sensing and multi-agent MAC coordination — as evidence that agentic composition is already producing results where monolithic pretraining has not.

## Summary (ZH)

这篇来自 IBM Research、Apple 和慕尼黑工业大学的立场论文，对日益兴起的"无线基础模型"提案——旨在为无线协议栈所有层提供通用智能的大规模预训练模型——提出了反驳。作者论证了大语言模型（LLM）与无线基础模型之间的类比在结构上存在根本缺陷，单体无线世界模型面临规模扩展无法解决的四大数据瓶颈。

四大瓶颈为：（1）**配置依赖性**——在某一根天线几何或调度器下被标记为"良好"的 CSI 张量，在另一配置下毫无意义，因此不存在可与文本类比稳定的分词基底；（2）**仿真器条件化**——大多数无线 ML 训练数据来自带有预设假设的仿真器，造成训练时与部署时分布之间的鸿沟；（3）**任务解耦**——无线任务本质上是模块化的（PHY vs. MAC vs. RAN vs. 核心网），单一模型缺乏为所有任务服务的归纳偏置；（4）**弱的操作性闭环**——无线模型很少从现网获得闭环反馈，因此错误会无声累积，缺乏像 RL 风格奖励信号那样将语言模型锚定在人类偏好中的机制。

替代方案是**可组合的智能体驱动架构**：推理智能体（LLM）通过显式可编程接口编排专用信号处理模型、经典算法、数字孪生、标准感知检索系统和安全监控器。该架构与无线协议栈现有的模块化以及 O-RAN 的近实时/非实时控制环路及 xApp/rApp 接口高度一致。值得注意的是，本文明确引用了 Wi-Fi 优化工作——包括 LLM 驱动的 Wi-Fi 感知和多智能体 MAC 协调——作为证据，表明智能体组合已经在单体预训练尚未奏效的地方产生了成果。

## Key technical points (EN)

- **Four structural data bottlenecks**: Configuration dependence (no stable tokenization substrate), simulator conditioning (train/deploy distribution gap), task disaggregation (no single model serves PHY-through-core), and weak operational grounding (no live-network closed-loop feedback) — each argued to resist resolution by scale alone.
- **Composable agentic architecture**: A reasoning LLM agent sits in a runtime harness, invoking specialized wireless models, classical solvers, digital twins, standards retrieval (RAG over 3GPP/IEEE specs), and safety monitors through typed interfaces — rather than absorbing the protocol stack into a single model.
- **Alignment with O-RAN and 802.11 modularity**: The agent harness maps naturally onto O-RAN's near-RT/non-RT RIC loops, xApps/rApps, and telemetry streams. For Wi-Fi, the 802.11 MLME SAP and emerging AI Offload SG interfaces provide analogous connection points.
- **Explicit Wi-Fi citations**: The paper references LLM-powered Wi-Fi sensing (Zhang et al. 2025), multi-agent MAC coordination frameworks, and CSI foundation models for 802.11 — situating Wi-Fi as a key domain within the composable-agentic thesis.
- **JEPA and world-model critique**: The authors specifically critique Joint Embedding Predictive Architecture (JEPA)-style wireless world models, arguing they inherit the same data bottlenecks and are compelling only when the "world" is explicitly scoped to a single control problem.

## Key technical points (ZH)

- **四大结构性数据瓶颈**：配置依赖性（无稳定分词基底）、仿真器条件化（训练/部署分布鸿沟）、任务解耦（无单一模型可服务 PHY 到核心网）、弱的操作性闭环（无现网闭环反馈）——每项都被论证为规模扩展无法单独解决的障碍。
- **可组合智能体架构**：推理 LLM 智能体位于运行时有线束中，通过类型化接口调用专用无线模型、经典求解器、数字孪生、标准检索（基于 3GPP/IEEE 规范的 RAG）和安全监控器——而非将协议栈吸收进单一模型。
- **与 O-RAN 和 802.11 模块化一致**：智能体线束自然映射到 O-RAN 的近 RT/非 RT RIC 环路、xApp/rApp 和遥测流。对 Wi-Fi 而言，802.11 MLME SAP 和新兴的 AI Offload SG 接口提供了类似的连接点。
- **明确的 Wi-Fi 引用**：本文引用了 LLM 驱动的 Wi-Fi 感知（Zhang et al. 2025）、多智能体 MAC 协调框架以及面向 802.11 的 CSI 基础模型——将 Wi-Fi 定位为可组合智能体论文的关键领域。
- **对 JEPA 和世界模型的批判**：作者特别批评了基于联合嵌入预测架构（JEPA）的无线世界模型，认为它们继承了相同的数据瓶颈，只有当"世界"被明确限定在单一控制问题时才具说服力。

## Why it matters / what's new (EN)

This is the first paper to systematically articulate *why* the "wireless ChatGPT" analogy fails, and to do so from authors at major industry players (IBM, Apple) who are themselves active in wireless AI standardization (3GPP, O-RAN, IEEE 802.11 AIML TIG). Prior KB entries in the agentic-wifi bin (`wirelessagent-plus-plus`, `comagent-multi-llm-wireless`, `iterate-ebpf-rate-control`) all assume agentic composition is the right path; this paper provides the architectural argument for *why*, and connects it to the specific modularity surfaces already available in 802.11 (MLME SAP, AI Offload SG) and O-RAN (xApps/rApps, RIC loops).

The paper's significance for the KB's agentic-wifi and ai-for-wifi topics is as a reference architecture: future entries proposing specific Wi-Fi agent mechanisms can cite this paper as the architectural framing, rather than re-arguing the case against monolithic models each time. The four bottleneck taxonomy also provides a checklist for evaluating new wireless AI proposals — if a proposal doesn't address configuration dependence, simulator grounding, task scope, and operational feedback, it inherits the vulnerabilities this paper catalogs.

## Why it matters / what's new (ZH)

这是首篇系统阐述"无线 ChatGPT"类比为何失败的论文，且作者来自自身活跃于无线 AI 标准化（3GPP、O-RAN、IEEE 802.11 AIML TIG）的主要行业玩家（IBM、Apple）。KB 中 agentic-wifi 分类下的先前条目（`wirelessagent-plus-plus`、`comagent-multi-llm-wireless`、`iterate-ebpf-rate-control`）均假定智能体组合是正确的路径；本文提供了*为何如此*的架构论证，并将其连接到 802.11（MLME SAP、AI Offload SG）和 O-RAN（xApp/rApp、RIC 环路）中已有的具体模块化接口面。

本文对 KB 的 agentic-wifi 和 ai-for-wifi 主题的意义在于作为参考架构：未来提出具体 Wi-Fi 智能体机制的条目可引用本文作为架构框架，而无需每次都重新论证反对单体模型的理由。四大瓶颈分类法还为评估新的无线 AI 提案提供了检查清单——如果一项提案不处理配置依赖性、仿真器锚定、任务范围及操作性反馈，则它继承了本文所编目的脆弱性。

## Images

![Composable agentic architecture: reasoning agent harness orchestrating specialized wireless models, classical algorithms, digital twins, retrieval, and safety monitors through explicit interfaces | 可组合智能体架构：推理智能体线束通过显式接口编排专用无线模型、经典算法、数字孪生、检索系统和安全监控器](https://arxiv.org/html/2605.16689v1/x1.png)
