---
id: 2026-09-10_arxiv-local-contiguous-on-device-learning-runtime
date_published: 2026-08-15
date_found: 2026-09-10
type: academic-paper
technology: edge-ai
title_en: "LOCAL: Enabling Learning On-device Contiguously for Agent LLMs"
title_zh: "LOCAL：面向大模型智能体的单 GPU 连续端侧学习运行时"
url: "https://arxiv.org/abs/2608.15241"
source_quality: full
topics: [on-device-learning, LLM-agents, GPU-scheduling, adapter-versioning, KV-cache, privacy]
topic_primary: on-device-inference
topics_secondary: [edge-federated-learning, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

On-device LLM agents accumulate private, locally-generated interaction traces that are valuable training signal but should not leave the device — yet the authors note that existing inference runtimes assume model weights stay fixed, and existing RL/fine-tuning systems assume dedicated, separated resources, so neither lets an agent keep serving user requests while continuously adapting from every interaction without pausing. LOCAL is presented by its authors as the first single-GPU runtime that enables this "contiguous" on-device learning: foreground inference and background adaptation share one GPU, coordinated through GPU scheduling, adapter version management, and KV-cache validity tracking working together, so that a training step in progress does not block or invalidate an in-flight generation request and vice versa.

On a single 24GB GPU running 7B-class models, the paper reports: foreground queue-wait p95 improved 3.1x over a FIFO scheduling baseline; p95 time-to-first-token reduced 1.55x compared to a non-preemptible training setup; post-publish first-hit prefill p99 latency cut by 25.6% (i.e. after a newly-trained adapter is published, the first request that hits it); and cross-agent time-to-first-token p99 reduced by 21.9% in a multi-agent setting on the same GPU. The paper (16 pages, 8 figures, cs.DC) does not yet state a conference or journal venue.

## Summary (ZH)

端侧大模型智能体会积累具有隐私性、由本地交互产生的对话轨迹，这些数据是宝贵的训练信号，但不应离开设备——作者指出，现有推理运行时假设模型权重保持固定，而现有强化学习/微调系统假设拥有专用且相互隔离的资源，因此二者都无法让智能体在持续从每一次交互中学习适配的同时、不间断地继续为用户提供推理服务。LOCAL 由作者提出，并自称是首个支持这种「连续」端侧学习的单 GPU 运行时：前台推理与后台适配共用一块 GPU，通过 GPU 调度、适配器版本管理与 KV 缓存有效性追踪三者协同实现——使得进行中的训练步骤不会阻塞或使正在进行的生成请求失效，反之亦然。

在运行 7B 级模型的单块 24GB GPU 上，论文报告：前台排队等待 p95 相较 FIFO 调度基线改善 3.1 倍；相较不可抢占式训练方案，p95 首 token 时延（TTFT）降低 1.55 倍；适配器发布后首次命中的预填充 p99 时延（即新训练适配器发布后首个命中该适配器的请求）降低 25.6%；在同一 GPU 上的多智能体场景下，跨智能体首 token 时延 p99 降低 21.9%。该论文（16 页，8 幅图，cs.DC 分类）目前尚未标注会议或期刊发表信息。

## Key technical points (EN)

- **Problem framing**: on-device LLM agents need to learn continuously from private local interactions without sending data off-device, but existing inference runtimes (fixed weights) and RL/training systems (separated resources) cannot both run without pausing user-facing service.
- **Mechanism**: single-GPU coordination of (1) GPU scheduling between foreground inference and background training, (2) adapter version management, and (3) KV-cache validity tracking, working cooperatively.
- **Hardware**: single 24GB GPU, 7B-class models.
- **Results**: foreground queue-wait p95 +3.1x vs. FIFO; p95 TTFT +1.55x vs. non-preemptible training; post-publish first-hit prefill p99 -25.6%; cross-agent TTFT p99 -21.9% (multi-agent setting).
- **Status**: cs.DC preprint, 16 pages / 8 figures, no stated conference/journal venue yet — the "first" claim is the authors' own characterization, not independently confirmed by this entry.

## Key technical points (ZH)

- **问题定位**：端侧大模型智能体需要在不将数据传出设备的前提下从本地私有交互中持续学习，但现有推理运行时（假设权重固定）与强化学习/训练系统（假设资源相互隔离）都无法在不中断面向用户服务的情况下同时运行。
- **机制**：在单 GPU 上协同（1）前台推理与后台训练之间的 GPU 调度、（2）适配器版本管理、（3）KV 缓存有效性追踪，三者协同工作。
- **硬件**：单块 24GB GPU，7B 级模型。
- **结果**：前台排队等待 p95 提升 3.1 倍（对比 FIFO）；p95 首 token 时延提升 1.55 倍（对比不可抢占式训练）；适配器发布后首次命中的预填充 p99 时延降低 25.6%；多智能体场景下跨智能体首 token 时延 p99 降低 21.9%。
- **现状**：cs.DC 预印本，16 页、8 幅图，尚未标注会议或期刊发表信息——「首个」这一表述为作者自述，本条目未做独立核实确认。

## Why it matters / what's new (EN)

This KB's on-device-inference and edge-federated-learning bins have so far covered either pure inference-time efficiency (KV-cache eviction, speculative decoding, DVFS) or multi-device federated training, but not the specific coexistence problem LOCAL targets: a single on-device agent that must keep serving inference requests while continuously fine-tuning itself on private local data, on one GPU, without a remote trainer. That framing sits between this KB's home-ai-assistant entries about compute placement (Alexa+, Xiaoyi) and its on-device-inference entries about serving efficiency, and is the first entry to measure the specific cost of interleaving live inference with continuous local adaptation rather than treating them as separate phases. Because the paper carries no stated peer-reviewed venue yet, its "first" claim and headline percentages should be read as the authors' own reported results pending independent replication.

## Why it matters / what's new (ZH)

本知识库的 on-device-inference 与 edge-federated-learning 分类目前所覆盖的，要么是纯推理阶段的效率优化（KV 缓存淘汰、投机解码、DVFS），要么是多设备联邦训练，但尚未涉及 LOCAL 所针对的这一具体共存问题：单个端侧智能体必须在一块 GPU 上、无需远程训练服务器的情况下，一边持续基于本地私有数据自我微调，一边保持对推理请求的服务。这一问题定位介于本知识库中关于计算放置的 home-ai-assistant 类条目（Alexa+、小艺）与关于服务效率的 on-device-inference 类条目之间，也是首个专门测量「将实时推理与持续本地适配交织进行」这一具体代价的条目，而非将二者视为彼此分离的阶段。由于论文尚未标注经同行评审的发表渠道，其「首个」表述与核心百分比数字应被理解为作者自行报告的结果，有待独立复现验证。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
