---
id: 2026-07-07_arxiv-bridge-beam-hopping-leo-drl
date_published: 2026-07-04
date_found: 2026-07-07
type: academic-paper
technology: satellite
title_en: "BRIDGE: Digital-Twin-Aided DRL Beam Hopping for LEO Satellites with Differentiated QoS — and a First Adversarial-Robustness Audit"
title_zh: "BRIDGE：数字孪生辅助的 LEO 卫星跳波束深度强化学习资源分配——差异化 QoS 与首个对抗鲁棒性审计"
url: "https://arxiv.org/abs/2607.03859"
source_quality: full
topics: [LEO, beam-hopping, DRL, digital-twin, QoS, adversarial-robustness]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 2
---

## Summary (EN)

BRIDGE (Zheng, Zhang, Sheng, Wang, Wang; arXiv 2607.03859, submitted 4 Jul 2026, 16 pp) tackles joint beam scheduling and power allocation for beam-hopping LEO satellites serving differentiated traffic — two real-time classes (video: 242 kbps / 300 ms budget; voice: 8.4 kbps / 100 ms budget) plus best-effort — across 60 ground users and 8 simultaneously active Ka-band beams. The framework's name comes from its exploration machinery: **Integrated Dirichlet and Gumbel-TopK Exploration** inside a reinforcement-learning agent. Gumbel-TopK sampling handles the exponentially large discrete choice of which K beam positions to activate; a Dirichlet-distribution head allocates the 250 W onboard power budget across active beams while satisfying non-negativity and budget constraints by construction. A QoS-driven priority metric then splits intra-beam subchannels between real-time and best-effort queues using queue depth, delay budget, and TTL loss thresholds.

The second ingredient is a digital twin built on NVIDIA Sionna ray tracing: instead of the usual elevation-angle visibility threshold, user–satellite visibility windows (updated every 2 s at 508 km altitude) are pre-computed with explicit obstruction modeling, feeding the agent high-fidelity state without real-time blockage computation. The actor network stays payload-friendly: 782k parameters, 1.56 MFLOPs per inference, 2.98 MB.

Against six baselines (queue-length heuristics, genetic algorithm, TopK-DQN, SAC, discrete PPO variants, periodic hopping), BRIDGE improves energy efficiency 16.6% over the strongest learned baseline and ~99% over periodic hopping, reaches ~1.8 Gbps real-time throughput at 4 Gbps offered load (vs ~1.5 Gbps for GA), ~2.4 Gbps total throughput, and tighter fairness (satisfaction std 0.18–0.25 vs 0.25–0.35). Unusually for this literature, the paper closes with an adversarial-robustness audit: FGSM, I-FGSM and PGD perturbations on the state input (ε 0.05–0.15) degrade energy efficiency 8–15% and RT throughput 10–20%, with PGD strongest (~25% gradient deviation) — the policy stays operational but undefended.

## Summary (ZH)

BRIDGE（arXiv 2607.03859，2026-07-04 提交，16 页）解决跳波束 LEO 卫星在差异化业务下的波束调度与功率分配联合问题——两类实时业务（视频：242 kbps / 300 ms 预算；语音：8.4 kbps / 100 ms 预算）加尽力而为业务，覆盖 60 个地面用户、8 个同时激活的 Ka 频段波束。框架名称来自其探索机制：强化学习智能体内的 **Dirichlet 与 Gumbel-TopK 集成探索**。Gumbel-TopK 采样处理"激活哪 K 个波束位置"这一指数级离散选择；Dirichlet 分布头在激活波束间分配 250 W 星上功率预算，天然满足非负与总量约束。QoS 驱动的优先级度量再按队列深度、时延预算与 TTL 丢包阈值在实时与尽力而为队列间划分波束内子信道。

第二个要素是基于 NVIDIA Sionna 射线追踪的数字孪生：不用常规的仰角门限可见性模型，而是预先计算显式建模遮挡的用户-卫星可见性窗口（508 km 轨道高度，每 2 秒更新），为智能体提供高保真状态且无需实时遮挡计算。Actor 网络对星上载荷友好：78.2 万参数、单次推理 1.56 MFLOPs、2.98 MB 内存。

对比六个基线（队列长度启发式、遗传算法、TopK-DQN、SAC、离散 PPO 变体、周期跳波束），BRIDGE 能效比最强学习基线高 16.6%、比周期跳波束高约 99%；4 Gbps 负载下实时吞吐约 1.8 Gbps（GA 约 1.5 Gbps）、总吞吐约 2.4 Gbps；公平性更优（满意度标准差 0.18–0.25 对 0.25–0.35）。本文少见地以对抗鲁棒性审计收尾：对状态输入施加 FGSM、I-FGSM、PGD 扰动（ε 0.05–0.15），能效退化 8–15%、实时吞吐降 10–20%，PGD 最强（梯度偏差约 25%）——策略保持可运行但尚无防御机制。

## Key technical points (EN)

- Hybrid action space: Gumbel-TopK for discrete beam-position selection + Dirichlet head for continuous power split — constraints satisfied by construction, no projection step.
- QoS-differentiated intra-beam subchannel allocation via a priority metric over queue depth, delay budget, and TTL loss threshold (RT vs BE weighted differently).
- Sionna ray-tracing digital twin replaces elevation-threshold visibility; windows precomputed every 2 s, removing online blockage computation.
- Payload-feasible model: 782,321 parameters, 1.56 MFLOPs, 2.98 MB.
- Ka-band 20 GHz, 200 MHz / 20 subchannels, 250 W, 508 km, 10 ms slots; 60 users, 8 active beams.
- Results: +16.6% energy efficiency vs QLPDL-BH, +98.7% vs periodic BH; RT throughput ~1.8 Gbps @ 4 Gbps load; fairness std 0.18–0.25.
- Adversarial audit (FGSM / I-FGSM / PGD, ε 0.05–0.15): 8–15% energy-efficiency and 10–20% RT-throughput degradation; PGD strongest; no defense yet.

## Key technical points (ZH)

- 混合动作空间：Gumbel-TopK 做离散波束位置选择 + Dirichlet 头做连续功率分配——约束由构造满足，无需投影步骤。
- 通过队列深度、时延预算与 TTL 丢包阈值上的优先级度量做 QoS 差异化波束内子信道分配（实时与尽力而为权重不同）。
- Sionna 射线追踪数字孪生取代仰角门限可见性；可见性窗口每 2 秒预计算，消除在线遮挡计算。
- 星上可行的模型规模：782,321 参数、1.56 MFLOPs、2.98 MB。
- Ka 频段 20 GHz、200 MHz / 20 子信道、250 W、508 km、10 ms 时隙；60 用户、8 激活波束。
- 结果：能效较 QLPDL-BH 高 16.6%、较周期跳波束高 98.7%；4 Gbps 负载下实时吞吐约 1.8 Gbps；公平性标准差 0.18–0.25。
- 对抗审计（FGSM / I-FGSM / PGD，ε 0.05–0.15）：能效退化 8–15%、实时吞吐降 10–20%；PGD 最强；尚无防御。

## Why it matters / what's new (EN)

The leo-constellations bin covers orchestration (2026-07-01 NEO-GNN heterogeneous-graph orchestration), transport (LEOSTP), and ISL path selection, but this is its first *beam-hopping resource-allocation* entry — the onboard scheduling layer that decides which cells get illuminated and with how much power. Two aspects stand out against the existing sat-ai thread: the digital-twin state pipeline (ray-traced visibility instead of elevation thresholds) mirrors the terrestrial trend seen in the O-RAN entries, and the adversarial-robustness audit is the first in this KB to quantify how a learned satellite scheduler degrades under gradient attacks — a security dimension the sat-ai bin hadn't touched.

## Why it matters / what's new (ZH)

leo-constellations 分类已覆盖编排（2026-07-01 NEO-GNN 异构图编排）、传输（LEOSTP）与星间链路路径选择，但本条目是该分类第一个*跳波束资源分配*条目——即决定哪些小区被照射、用多少功率的星上调度层。相对既有 sat-ai 线索有两个亮点：数字孪生状态管线（射线追踪可见性取代仰角门限）呼应了 O-RAN 条目中的地面侧趋势；对抗鲁棒性审计则是本 KB 首次量化学习型卫星调度器在梯度攻击下的退化——sat-ai 分类此前未触及的安全维度。
