---
id: 2026-08-20_arxiv-wireless-foundation-models-6g-survey
date_published: 2026-08-09
date_found: 2026-08-20
type: academic-paper
technology: cellular
title_en: "A Comprehensive Survey of Wireless Foundation Models for AI-Native 6G Networks"
title_zh: "面向 AI 原生 6G 网络的无线基础模型综合综述"
url: "https://arxiv.org/abs/2608.14694"
source_quality: full
topics: [foundation-models, WFM, self-supervised-learning, masked-modeling, contrastive-learning, LoRA, LWM, WirelessGPT, WavesFM, CSI, Sim2Real, AI-native-6G]
topic_primary: cellular-ai
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)
Naveed Khan, Besan Al Sbeihi, Maryam Alshehhi and Nasir Saeed (arXiv 9 Aug 2026; 28 pp., submitted to IEEE Communications Surveys & Tutorials) deliver the first survey the KB has seen that treats **wireless foundation models (WFMs)** — models pre-trained self-supervised on large heterogeneous radio data and adapted to many downstream tasks — as a unified paradigm rather than a scattering of one-off large models. The taxonomy is three-dimensional: by **architecture** (Transformer-based, CNN-based, physics-informed, graph-based), by **learning paradigm** (self-supervised, contrastive, masked modeling, multimodal pre-training), and by **deployment layer** (PHY, MAC, network, cross-layer). Representative systems covered include WirelessGPT, the Large Wireless Model (LWM), WavesFM, and emerging multimodal WFMs. Pre-training is organized around masked signal modeling (reconstructing hidden CSI, IQ samples, or OFDM resource elements), contrastive embeddings over augmented signal views, and hybrid corpora mixing stochastic channel models (Rayleigh, 3GPP), ray-tracing, and real measurements to bridge the Sim2Real gap. Adaptation is laid out as a cost ladder — full fine-tuning → parameter-efficient tuning (LoRA, adapters) → prompt/in-context adaptation — mirroring the NLP playbook but with wireless-specific constraints.

The challenge chapter is the operationally useful part: data scarcity and domain shift (real RF measurement is expensive, simulators are biased), interpretability and physical consistency (a WFM can emit channel predictions that violate physics), robustness/security, energy efficiency for edge deployment, and the absence of standardized benchmarks — the survey notes benchmark and dataset coverage remains thin across the field, which it flags as the main brake on claims of generality. Target venue is IEEE COMST; the authors position the survey as the reference frame for the AI-native 6G discussion that 3GPP/O-RAN AI-RAN work keeps invoking.

## Summary (ZH)
Naveed Khan、Besan Al Sbeihi、Maryam Alshehhi 与 Nasir Saeed（arXiv 2026 年 8 月 9 日；28 页，投稿 IEEE Communications Surveys & Tutorials）给出了 KB 收录的首个将**无线基础模型（WFM）**——在大规模异构无线数据上自监督预训练、再适配众多下游任务的模型——作为统一范式而非零散大模型集合来处理的综述。分类体系为三维：按**架构**（Transformer 类、CNN 类、物理信息类、图模型类）、按**学习范式**（自监督、对比学习、掩码建模、多模态预训练）、按**部署层级**（物理层、MAC 层、网络层、跨层）。代表性系统包括 WirelessGPT、Large Wireless Model（LWM）、WavesFM 及新兴多模态 WFM。预训练围绕掩码信号建模（重建被遮蔽的 CSI、IQ 样本或 OFDM 资源元素）、增广信号视图上的对比嵌入，以及混合语料——随机信道模型（瑞利、3GPP）、射线追踪与真实测量共同弥合 Sim2Real 鸿沟。适配方法按成本阶梯展开——全量微调 → 参数高效微调（LoRA、adapter）→ 提示/上下文内适配——沿袭 NLP 打法但受无线特有约束。

挑战章节最具实操价值：数据稀缺与域偏移（真实射频测量昂贵、仿真器有偏）、可解释性与物理一致性（WFM 可能输出违背物理的信道预测）、鲁棒性/安全、边缘部署能效，以及标准化基准缺位——综述指出全领域的基准与数据集覆盖仍然薄弱，并将其标记为泛化性主张的最大制约。目标期刊为 IEEE COMST；作者将本综述定位为 3GPP/O-RAN AI-RAN 工作反复援引的"AI 原生 6G"讨论的参考框架。

## Key technical points (EN)
- Three-axis taxonomy: architecture (Transformer/CNN/physics-informed/graph) × learning paradigm (SSL/contrastive/masked/multimodal) × deployment layer (PHY/MAC/network/cross-layer).
- Named model families surveyed: WirelessGPT, LWM, WavesFM, multimodal WFMs.
- Pre-training recipes: masked signal modeling over CSI/IQ/OFDM grids; contrastive learning on augmented views; hybrid synthetic-plus-measured corpora (Rayleigh/3GPP stochastic + ray-tracing + field data) against Sim2Real drift.
- Adaptation ladder: full fine-tune → LoRA/adapters → prompt & in-context adaptation (lightest).
- Challenges ranked: data availability/domain shift, physical consistency & interpretability, robustness/security, edge energy budgets, missing standard benchmarks.
- 28 pages, submitted IEEE COMST; primary category cs.AI, cross-listed cs.NI + eess.SP.

## Key technical points (ZH)
- 三轴分类：架构（Transformer/CNN/物理信息/图）× 学习范式（自监督/对比/掩码/多模态）× 部署层级（PHY/MAC/网络/跨层）。
- 覆盖的具名模型族：WirelessGPT、LWM、WavesFM、多模态 WFM。
- 预训练配方：CSI/IQ/OFDM 网格上的掩码信号建模；增广视图对比学习；合成+实测混合语料（瑞利/3GPP 随机模型 + 射线追踪 + 现场数据）对抗 Sim2Real 漂移。
- 适配阶梯：全量微调 → LoRA/adapter → 提示与上下文内适配（最轻量）。
- 挑战排序：数据可得性/域偏移、物理一致性与可解释性、鲁棒性/安全、边缘能耗预算、标准基准缺失。
- 28 页，投稿 IEEE COMST；主分类 cs.AI，交叉 cs.NI + eess.SP。

## Why it matters / what's new (EN)
The cellular-ai bin has been accumulating the *pieces* of this story for months — JEPA for AI-native 6G (07-14), the OTel telecom-LLM foundations corpus (08-19), the DRL-for-AI-RAN survey (08-18), Ericsson's world-model network control (07-22) — but had no map of the foundation-model layer itself: what a *wireless* (signal-level, not language-level) foundation model is, which architectures and pre-training objectives exist, and how they get adapted. This survey supplies that map and, usefully, draws the line between telecom LLMs (language in, language out — OTel's territory) and WFMs proper (CSI/IQ in, radio representations out). Its blunt assessment that datasets and benchmarks are the field's weakest link corroborates what the KB's entry-level evidence shows: nearly every WFM paper evaluates on its own synthetic corpus. Watch for the COMST-accepted revision and for benchmark suites that answer the standardization gap it calls out.

## Why it matters / what's new (ZH)
cellular-ai 主题库数月来一直在积累这个故事的*碎片*——面向 AI 原生 6G 的 JEPA（07-14）、OTel 电信 LLM 基础语料（08-19）、DRL-for-AI-RAN 综述（08-18）、爱立信世界模型网络控制（07-22）——却始终缺一张基础模型层本身的地图：*无线*（信号级而非语言级）基础模型是什么、有哪些架构与预训练目标、如何适配。本综述补上了这张地图，并有益地划清了电信 LLM（语言进语言出——OTel 的领地）与真正 WFM（CSI/IQ 进、无线表征出）的边界。其对"数据集与基准是全领域最薄弱环节"的直白判断与 KB 逐条证据相符：几乎每篇 WFM 论文都在自造合成语料上自评。后续关注 COMST 录用修订版，以及回应其标准化缺口的基准套件。

## Images
![Conceptual wireless foundation model workflow | 无线基础模型概念工作流](https://arxiv.org/html/2608.14694v1/figS1a.png)
![Three-dimensional WFM taxonomy | WFM 三维分类体系](https://arxiv.org/html/2608.14694v1/Figures/figS1b.png)
