---
id: 2026-09-16_arxiv-decentralized-intelligence-trustworthy-6g
date_published: 2026-09-12
date_found: 2026-09-16
type: academic-paper
technology: cellular
title_en: "Trustworthy, Explainable, and Sustainable Decentralized Intelligence for 6G Networks"
title_zh: "面向 6G 网络的可信、可解释、可持续的去中心化智能"
url: "https://arxiv.org/abs/2609.13872"
source_quality: full
topics: [federated-learning, decentralized-FL, XAI, neuromorphic-computing, spiking-neural-network, edge-AI]
topic_primary: 6g-vision
topics_secondary: [cellular-security, cellular-ai]
novelty_score: 3
---

## Summary (EN)

Giovanni Perin, Michele Rossi, Enrique Tomás Martínez Beltrán, Fernando Torres-Vega, José María Jorquera Valero, Manuel Gil Pérez, Eunjeong Jeong, Nikolaos Pappas, Farah Abed Zadeh, Chamara Sandeepa, Bartlomiej Siniarski, Madhusanka Liyanage, Betül Güvenç Paltun, Leyli Karaçay, Ioannis Pitsiorlas, and Marios Kountouris — in a paper submitted to IEEE Signal Processing Magazine — argue that decentralization, trustworthiness, explainability, and sustainability in AI-native 6G networks "must be designed jointly rather than treated as independent requirements." The paper first contrasts centralized AI (which incurs communication overhead, latency unsuited to real-time security control, multi-stakeholder governance conflicts, and single-point-of-failure risk) with Federated Learning (FL, star-topology, central parameter-server aggregation) and Decentralized FL (DFL, peer-to-peer neighborhood aggregation over a time-varying graph). It formalizes DFL's objective as local loss minimization plus a graph-regularized consensus term with coupling weights that can be reweighted by a neighborhood-aggregation operator RobAgg(·) according to peer reliability, anomaly indicators, explanation consistency, and each node's current energy/compute budget — making the aggregation itself trust- and resource-aware rather than purely topology-driven.

The trustworthiness section separates training-time poisoning attacks (data/label/gradient corruption, backdoors) from inference-time adversarial perturbations, and surveys mitigations across data-centric anomaly detection, federated reputation/trust scoring and robust (median/trimmed-mean) aggregation, and model-level adversarial training. On explainability, the paper's central argument is that attribution vectors (from SHAP/LIME-style model-agnostic methods or layer-wise relevance propagation) should function as machine-readable operational signals feeding intrusion-detection self-optimization (feature pruning, concept-drift detection via attribution-distribution shift, uncertainty estimation), control-plane evidence for automated xApp/rApp responses, and cross-domain assurance — while noting that the explainer itself needs the same robustness/privacy/fidelity guarantees as the detector, since attribution-manipulation and "fairwashing" attacks can leave predictions unchanged while reporting innocuous rationales. The sustainability section moves from post-training compression (pruning, quantization) toward natively energy-efficient architectures — reservoir computing and spiking neural networks built on the leaky integrate-and-fire neuron model, citing neuromorphic hardware (IBM TrueNorth, Intel Loihi, the academic SpiNNaker architecture, and startups Innatera/Neuronova/SynSense), and reporting that studies conducted on an Intel Loihi processor show SNNs on dedicated hardware can improve the energy-delay product "by up to three orders of magnitude" — and proposes joint energy- and information-aware FL scheduling (using Age-of-Information-style staleness measures rather than battery level alone) so that edge devices skip training updates that would add little value to the global model, deferring computation until closer to a transmission opportunity.

## Summary (ZH)

Giovanni Perin、Michele Rossi、Enrique Tomás Martínez Beltrán、Fernando Torres-Vega、José María Jorquera Valero、Manuel Gil Pérez、Eunjeong Jeong、Nikolaos Pappas、Farah Abed Zadeh、Chamara Sandeepa、Bartlomiej Siniarski、Madhusanka Liyanage、Betül Güvenç Paltun、Leyli Karaçay、Ioannis Pitsiorlas 与 Marios Kountouris 在一篇投给《IEEE 信号处理杂志》（IEEE Signal Processing Magazine）的论文中提出，AI 原生 6G 网络中的去中心化、可信性、可解释性与可持续性"必须联合设计，而非作为彼此独立的需求分别处理"。论文首先将集中式 AI（存在通信开销大、时延不适合实时安全控制、多利益相关方治理冲突、单点故障风险等问题）与联邦学习（FL，星型拓扑、中心参数服务器聚合）以及去中心化联邦学习（DFL，基于随时间变化的图结构进行点对点邻域聚合）进行对比。论文将 DFL 的目标函数形式化为本地损失最小化加上一个图正则化的一致性项，其耦合权重可由邻域聚合算子 RobAgg(·) 根据对端可靠性、异常指标、解释一致性以及各节点当前的能量/算力预算进行重新加权——这使得聚合过程本身具备信任感知与资源感知能力，而不仅仅由网络拓扑决定。

可信性部分区分了训练时的投毒攻击（数据/标签/梯度污染、后门）与推理时的对抗性扰动，并综述了相应的缓解手段，包括以数据为中心的异常检测、联邦场景下的信誉/信任评分与鲁棒（中值/截尾均值）聚合，以及模型层面的对抗训练。在可解释性方面，论文的核心主张是：来自 SHAP/LIME 类模型无关方法或逐层相关性传播（LRP）的归因向量，应作为机器可读的运行信号，服务于入侵检测系统的自优化（特征剪枝、通过归因分布偏移检测概念漂移、不确定性估计）、面向自动化 xApp/rApp 响应的控制面证据，以及跨域保障；同时指出解释器本身也需要与检测器相同的鲁棒性/隐私/保真度保证，因为归因操纵与"洗白"（fairwashing）攻击可以在预测结果不变的情况下，报告看似无害的解释理由。可持续性部分则从训练后压缩（剪枝、量化）转向天然节能的架构——储备池计算与基于泄漏积分-发放（LIF）神经元模型的脉冲神经网络，并引用神经形态硬件（IBM TrueNorth、Intel Loihi、学术界的 SpiNNaker 架构，以及初创公司 Innatera/Neuronova/SynSense）；论文称，在 Intel Loihi 处理器上开展的研究表明，运行于专用硬件上的 SNN 可将能量-延迟积改善"多达三个数量级"；论文还提出联合能量与信息感知的联邦学习调度方案（采用类似信息年龄的陈旧度度量，而非仅依据电池电量），使边缘设备跳过那些对全局模型贡献甚微的训练更新，将计算推迟到接近传输机会的时刻再进行。

## Key technical points (EN)

- Four centralized-AI limitations for 6G: scalability (communication overhead), latency (incompatible with real-time security control), governance (multi-stakeholder data-sharing conflicts), resilience (concentrated single points of failure).
- DFL formalized over a weighted time-varying graph G^t=(V,E^t,A^t): objective combines per-node local loss minimization with a graph-regularized consensus term (lambda/2) * sum a_kj^t ||w_k - w_j||^2; neighborhood-aggregation operator RobAgg(.) reweights by peer reliability, anomaly/uncertainty indicators, explanation consistency, and energy/compute budget.
- Trustworthiness mitigations mapped by attack timing: poisoning (training-time) countered by data-centric anomaly detection + federated reputation/trust scoring + robust (median/trimmed-mean) aggregation; adversarial perturbation (inference-time) countered by adversarial training, uncertainty estimation, ensembling.
- Privacy toolchain: federated learning, secure aggregation, homomorphic encryption, secure multi-party computation, trusted execution environments, differential privacy — each with accuracy/latency/scalability trade-offs.
- Three-role XAI framework for 6G intrusion detection: self-optimization (attribution-based feature pruning, concept-drift detection via attribution-distribution shift, uncertainty estimation), control-plane evidence (attribution records driving differentiated automated responses), assurance (explainer itself must be robust, private, and faithful — vulnerable to attribution-manipulation and fairwashing attacks that preserve predictions while reporting innocuous rationales).
- Sustainability mechanisms: reservoir computing (fixed recurrent reservoir, shallow trained output layer) and spiking neural networks on the LIF model (tau_m du/dt = -[u(t)-u_rest] + R*i(t)); neuromorphic hardware named (IBM TrueNorth, Intel Loihi, SpiNNaker, Innatera, Neuronova, SynSense), with the "up to three orders of magnitude" energy-delay-product improvement attributed specifically to studies on an Intel Loihi processor; photonic reservoir computing also cited.
- Energy-and-information-aware FL scheduling: combines energy-harvesting-aware scheduling (defer training until near a transmission opportunity) with Age-of-Information-style version-based staleness (only counts updates carrying materially new information) to avoid spending harvested energy on low-value training rounds.

## Key technical points (ZH)

- 集中式 AI 在 6G 中的四项局限：可扩展性（通信开销大）、时延（不适合实时安全控制）、治理（多利益相关方数据共享冲突）、韧性（单点故障风险集中）。
- 将 DFL 形式化定义在带权、随时间变化的图 G^t=(V,E^t,A^t) 上：目标函数将各节点本地损失最小化与图正则化一致性项 (lambda/2) * sum a_kj^t ||w_k - w_j||^2 相结合；邻域聚合算子 RobAgg(.) 根据对端可靠性、异常/不确定性指标、解释一致性以及能量/算力预算进行重新加权。
- 按攻击发生时机划分可信性缓解手段：投毒攻击（训练时）通过以数据为中心的异常检测 + 联邦信誉/信任评分 + 鲁棒（中值/截尾均值）聚合应对；对抗性扰动（推理时）通过对抗训练、不确定性估计、集成学习应对。
- 隐私保护工具链：联邦学习、安全聚合、同态加密、安全多方计算、可信执行环境、差分隐私——各自存在准确率/时延/可扩展性方面的权衡。
- 面向 6G 入侵检测的三重角色 XAI 框架：自优化（基于归因的特征剪枝、通过归因分布偏移检测概念漂移、不确定性估计）、控制面证据（归因记录驱动差异化的自动化响应）、保障（解释器本身也须具备鲁棒性、隐私性与保真度——易受归因操纵与"洗白"攻击影响，此类攻击可在预测结果不变的情况下报告看似无害的解释理由）。
- 可持续性机制：储备池计算（固定的循环储备池、仅训练浅层输出层）与基于 LIF 模型（τ_m du/dt = -[u(t)-u_rest] + R*i(t)）的脉冲神经网络；论文点名的神经形态硬件包括 IBM TrueNorth、Intel Loihi、SpiNNaker、Innatera、Neuronova、SynSense，而"多达三个数量级"的能量-延迟积改善是专门归因于在 Intel Loihi 处理器上开展的研究；论文还提及光子储备池计算。
- 能量与信息双感知的联邦学习调度：将能量收集感知调度（推迟训练至接近传输机会时）与类似信息年龄的基于版本的陈旧度度量（仅计入携带实质性新信息的更新）相结合，避免将收集到的能量消耗在价值较低的训练轮次上。

## Why it matters / what's new (EN)

This KB already carries numerous individual decentralized/federated-learning-for-6G papers (e.g. 2026-09-08 DART-FL, 2026-08-31 QEF-GT-AdamW decentralized wireless FL, 2026-08-29 OrbitalIF spiking FL for LEO). This entry's distinct contribution is not a new algorithm but an explicit joint-design argument spanning four dimensions at once — tying explainability into the control loop as an operational signal (not just a post-hoc audit artifact) and tying sustainability into FL scheduling via information-value rather than energy-availability alone. It is the first entry in this bin to formalize the RobAgg(.) trust/resource-aware aggregation operator and to connect spiking-neural-network hardware energy-delay-product gains directly to a 6G distributed-intelligence sustainability argument.

## Why it matters / what's new (ZH)

本知识库此前已收录多篇面向 6G 的去中心化/联邦学习相关论文（如 2026-09-08 的 DART-FL、2026-08-31 的 QEF-GT-AdamW 去中心化无线联邦学习、2026-08-29 面向 LEO 的脉冲联邦学习 OrbitalIF）。本条目的独特贡献并非一种新算法，而是明确提出四个维度需联合设计的论证——将可解释性作为控制环内的运行信号（而不仅是事后审计产物）纳入体系，并通过信息价值而非仅凭能量可用性来指导联邦学习调度，从而将可持续性纳入体系。这是本分类下首个将 RobAgg(.) 信任/资源感知聚合算子加以形式化、并将脉冲神经网络硬件的能量-延迟积增益直接与 6G 分布式智能可持续性论证相关联的条目。

## Images

![Interdependent design dimensions of intelligence in AI-native 6G networks: decentralization enables scalability, privacy/security and explainability provide complementary reliability, sustainability ensures operational feasibility | AI 原生 6G 网络智能的相互关联设计维度：去中心化提供可扩展性，隐私/安全与可解释性提供互补的可靠性，可持续性保障运行可行性](https://arxiv.org/html/2609.13872v1/diagram-magazine-wp3.png)
![Evolution of AI paradigms from centralized ML to federated learning to fully decentralized federated learning | AI 范式从集中式机器学习到联邦学习再到完全去中心化联邦学习的演进](https://arxiv.org/html/2609.13872v1/centralized-fl-dfl-v2.png)
