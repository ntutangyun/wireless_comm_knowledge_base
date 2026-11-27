---
id: 2026-11-27_arxiv-from-telemetry-to-intelligence-data-centric-survey-o-ran
date_published: 2026-11-25
date_found: 2026-11-27
type: academic-paper
technology: cellular
title_en: "From Telemetry to Intelligence: A Data-Centric Survey of O-RAN"
title_zh: "从遥测到智能：O-RAN 的数据视角综述"
url: "https://arxiv.org/abs/2611.34262"
source_quality: full
topics: [O-RAN, survey, RAN-data, telemetry, xApp, rApp, dApp, agentic-AI, E2, O1, A1]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Samara Mayhoub, Zhengjia Xu, Tareq M. Shami, Mohammad Asif Habibi, Hamed Alimohammadi, Ayhan Akbas, Chuan Heng Foh and Jose Maria Alcaraz Calero (Aston University, University of York, DFKI, University of Surrey and Ankara Bilim University) survey O-RAN from the viewpoint of the data that its AI/ML and agentic-AI applications depend on. The paper argues that existing O-RAN literature concentrates on algorithms rather than on the data generated, exposed and accessible across architectural components, and that agentic control additionally needs heterogeneous inputs such as intent, logs, policies, standards, tool descriptions, historical decisions and feedback. It is a preprint submitted to IEEE.

The survey organises O-RAN data into a five-view framework: source, accessibility, abstraction level, application usage and challenges. The source view runs from radio-level data (samples, spectrograms, reference signals) through fine-grained per-layer telemetry, aggregated data at UE, node, cell and slice level, management-plane and historical data (performance, fault and configuration management), control-plane and signalling data, cross-domain data (enrichment information, policies, model management, core-network and traffic data), intelligence-derived data (xApp, rApp and dApp outputs) and user-intent data. The accessibility view covers O-RAN interfaces (E2, A1, O1, O2, E3, R1), 3GPP interfaces (E1, F1, NG, Uu, Xn/X2) and agentic interoperability interfaces.

The application view maps these data to statistical, AI/ML-based and agentic-AI applications deployed as rApps, xApps, dApps and hierarchical control frameworks, including single-agent, multi-agent and hierarchical multi-agent agentic applications across control loops. The challenge view lists data security, privacy, scarcity, heterogeneity, quality (noise, timeliness, consistency) and preprocessing. The abstract describes the work as the first comprehensive review of the data-centric perspective on intelligent applications in O-RAN (the authors' own claim).

## Summary (ZH)

Samara Mayhoub、Zhengjia Xu、Tareq M. Shami、Mohammad Asif Habibi、Hamed Alimohammadi、Ayhan Akbas、Chuan Heng Foh 与 Jose Maria Alcaraz Calero（阿斯顿大学、约克大学、DFKI、萨里大学与安卡拉比利姆大学（Ankara Bilim University））从 AI/ML 与智能体 AI 应用所依赖的数据角度综述 O-RAN。论文认为，现有 O-RAN 文献侧重算法，而较少考察跨架构组件产生、暴露与可访问的数据；智能体控制还需要意图、日志、策略、标准、工具描述、历史决策与反馈等异构输入。该文为投稿 IEEE 的预印本。

综述将 O-RAN 数据组织为五视角框架：来源、可访问性、抽象层级、应用用途与挑战。来源视角从无线电层数据（样点、频谱图、参考信号）出发，经细粒度的分层遥测、UE/节点/小区/切片级聚合数据、管理面与历史数据（性能、故障与配置管理）、控制面与信令数据、跨域数据（增强信息、策略、模型管理、核心网与流量数据）、智能衍生数据（xApp、rApp、dApp 输出），直至用户意图数据。可访问性视角涵盖 O-RAN 接口（E2、A1、O1、O2、E3、R1）、3GPP 接口（E1、F1、NG、Uu、Xn/X2）以及智能体互操作接口。

应用视角将这些数据映射到以 rApp、xApp、dApp 及分层控制框架部署的统计类、AI/ML 类与智能体 AI 应用，包括跨控制环路的单智能体、多智能体与分层多智能体应用。挑战视角列出数据安全、隐私、稀缺、异构、质量（噪声、时效性、一致性）与预处理。摘要称该工作是对 O-RAN 智能应用数据视角的首个全面综述（作者自己的表述）。

## Key technical points (EN)

- Five views: source, accessibility, abstraction level (raw; aggregated and statistical; derived and enriched; intelligence-derived), application, challenge.
- Application mapping separates statistical, AI/ML-based and agentic-AI applications for each of rApp, xApp, dApp and hierarchical deployments; agentic applications are split into single-agent in one control loop, multi-agent in one loop, and hierarchical multi-agent across multiple loops.
- Data challenges treated: security, privacy, scarcity, heterogeneity, quality (noisy data, timeliness, consistency) and preprocessing.
- Future directions named in the conclusion: standardised and semantically aligned data models (with provenance and timestamps) across O-RAN, 3GPP and agentic interfaces; representative datasets combining radio measurements, RAN telemetry, management data, logs and operator intents (synthetic data, digital twins and testbeds to address scarcity); automated low-latency preprocessing and quality assessment; control loops resilient to poisoned or manipulated data, with human supervision and post-action monitoring for high-impact operations.
- Funding acknowledged includes the German BMBF Open6GHub+ and KIOps6G projects, the European Commission Agentic-6G project and the EUREKA CELTIC-NEXT 6G-SMART project.

## Key technical points (ZH)

- 五视角：来源、可访问性、抽象层级（原始；聚合与统计；衍生与增强；智能衍生）、应用、挑战。
- 应用映射针对 rApp、xApp、dApp 与分层部署，分别区分统计类、AI/ML 类与智能体 AI 应用；智能体应用又分为单控制环路内的单智能体、单环路内的多智能体，以及跨多个环路的分层多智能体。
- 讨论的数据挑战：安全、隐私、稀缺、异构、质量（噪声数据、时效性、一致性）与预处理。
- 结论中提出的未来方向：跨 O-RAN、3GPP 与智能体接口的标准化、语义对齐的数据模型（含来源与时间戳）；结合无线电测量、RAN 遥测、管理数据、日志与运营商意图的代表性数据集（以合成数据、数字孪生与试验台缓解稀缺）；自动化低时延预处理与质量评估；对被投毒或操纵数据具有韧性的控制环路，并对高影响操作引入人工监督与动作后监控。
- 致谢中列出的资助包括德国 BMBF 的 Open6GHub+ 与 KIOps6G 项目、欧盟委员会 Agentic-6G 项目以及 EUREKA CELTIC-NEXT 6G-SMART 项目。

## Why it matters / what's new (EN)

The KB holds many O-RAN application entries (xApps, rApps, jamming and security) but no reference that catalogues the underlying data types and the interfaces that expose them; this survey can serve as an index for those entries. It is a taxonomy and literature review without new measurements; the paper's comparison table positions it against earlier O-RAN surveys on architecture, security, applications, agentic AI and data.

## Why it matters / what's new (ZH)

KB 已有大量 O-RAN 应用条目（xApp、rApp、干扰与安全），但缺少梳理底层数据类型及其暴露接口的参考；该综述可作为这些条目的索引。它是分类与文献综述，不含新的测量；论文的对比表在架构、安全、应用、智能体 AI 与数据几个维度上将其与此前的 O-RAN 综述作了区分。

## Images

None.
