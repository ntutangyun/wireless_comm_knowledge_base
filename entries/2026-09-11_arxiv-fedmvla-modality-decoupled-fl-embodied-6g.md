---
id: 2026-09-11_arxiv-fedmvla-modality-decoupled-fl-embodied-6g
date_published: 2026-09-09
date_found: 2026-09-11
type: academic-paper
technology: cellular
title_en: "Modality-Decoupled Federated Learning for Privacy-Preserving Embodied Intelligence in 6G"
title_zh: "面向 6G 具身智能的模态解耦隐私保护联邦学习"
url: "https://arxiv.org/abs/2609.09591"
source_quality: full
topics: [federated-learning, vision-language-action, embodied-intelligence, network-slicing, differential-privacy, 3GPP-TR-38.901, URLLC, eMBB]
topic_primary: cellular-ai
topics_secondary: [network-slicing, 6g-vision]
novelty_score: 3
---

## Summary (EN)
Zhuodong Liu, Xiangyu Li, Chunhong Yuan, Hongyang Du, Bodong Shang, Qingqing Wu, Tony Q. S. Quek, and Mohsen Guizani (arXiv v1, 9 Sep 2026; accepted for publication in IEEE Wireless Communications Magazine) present FedMVLA, a federated-learning framework for training Vision-Language-Action (VLA) robot-control models across distributed robots that communicate over a 6G wireless substrate. The motivating problem: VLA models fuse three pathways — visual perception, language understanding, and action generation — that have very different parameter scales, privacy sensitivity, update dynamics, and tolerance to compression, yet existing federated-learning methods (FedAvg, FedProx, SCAFFOLD) aggregate, protect, and compress all of them the same way. FedMVLA instead decouples the three pathways end to end: aggregation topology, differential-privacy budget allocation, and communication compression are each configured per-modality, and the resulting traffic is mapped onto separate 3GPP network slices matched to each pathway's latency/reliability profile.

The three mechanisms are: (1) Modality-Aware Federated Aggregation (MAFA) — the action pathway aggregates only within same-embodiment client groups every round, vision aggregates within spectral-clustering-derived clusters every 5 rounds, and language aggregates globally every 10 rounds, reflecting how much each pathway's gradients actually diverge across clients; (2) Modality-Aware Privacy Allocation (MAPA) — a shared differential-privacy budget is split unevenly (61% action / 31% vision / 8% language at ε=1) because a fixed noise level costs the action pathway 16.0 percentage points of task success versus 9.6 for vision and 1.1 for language; (3) Modality-Aware Communication Compression (MACO) — vision updates get top-1% sparsification with error feedback (~1/59 of FP32 size), language gets 4-bit group quantization (~1/8 size), and action updates stay full-precision FP32, because 4-bit quantization of the action head produces 0.87 mm end-effector error and a 10.8-point success drop. On the network side, action updates ride a 5 MHz URLLC slice (10 ms latency target, 99.999% availability per 3GPP TS 22.104) while vision/language share a 100 MHz eMBB slice, evaluated over a 3GPP TR 38.901 indoor-factory (InF-SL) channel at 7 GHz with shadowing, block Rayleigh fading, and HARQ retransmissions.

The evaluation trains an OpenVLA-style model with 8.5M trainable parameters (a 400M SigLIP vision encoder with LoRA rank 16, a LLaMA-2 7B language backbone with LoRA rank 8, and a separately trained 50M diffusion action head of which only the 0.3M conditioning and output layers are trained) across 16 simulated clients spanning 4 robot embodiments (Franka Panda, Sawyer, UR5e, Jaco) and 4 manipulation task families, with non-overlapping objects/textures per client (strongly non-IID data) and paired wireless channel traces. FedMVLA reaches 84.8% task success versus 62.6% for FedAvg (+22.2 points) and 74.6% for FedVLA; removing MAFA costs 4.4 points and MACO 5.3, while replacing sliced transport with monolithic transport costs 3.2; MAPA's ablation is reported separately as the uniform-DP curve (72.7% versus 35.6% at ε=0.5). Communication efficiency improves sharply: schedule-averaged per-client uplink payload drops from 34 MB (FedAvg) to 1.5 MB (95.6% reduction) and transmit energy from 2.7 J to 0.3 J, while p95 round-critical completion time under sliced transport stays near 1.5 seconds regardless of sparsification ratio (versus 136 seconds for the FedAvg monolithic baseline, while monolithic transport compressed hard enough to become latency-competitive (k=0.005) is faster but falls to 53.8% task success). Scaling from 4 clients/1 cell to 128 clients/8 cells widens the advantage over FedAvg from 17.8 to 28.8 points, and under a pulsed jammer sweeping SNR from 0-20 dB the modality-sliced design degrades by at most 1.9 points (keeping action-stream packet loss below 10^-4 even at 0 dB SNR) versus a collapse to 56.4% for monolithic transport.

## Summary (ZH)
Zhuodong Liu、Xiangyu Li、Chunhong Yuan、Hongyang Du、Bodong Shang、Qingqing Wu、Tony Q. S. Quek 与 Mohsen Guizani（arXiv v1，2026 年 9 月 9 日；已被 IEEE Wireless Communications Magazine 接收）提出 FedMVLA，一种面向视觉-语言-动作（VLA）机器人控制模型的联邦学习框架，用于在通过 6G 无线网络互联的分布式机器人之间训练该类模型。其出发点是：VLA 模型融合了视觉感知、语言理解与动作生成三条通路，三者在参数规模、隐私敏感度、更新动态与压缩容忍度上差异巨大，而现有联邦学习方法（FedAvg、FedProx、SCAFFOLD）对三者采用完全相同的聚合、保护与压缩策略。FedMVLA 则从端到端对三条通路进行解耦：聚合拓扑、差分隐私预算分配与通信压缩方案均按模态单独配置，并将由此产生的流量映射到与各通路时延/可靠性需求相匹配的独立 3GPP 网络切片上。

三项机制分别是：（1）模态感知联邦聚合（MAFA）——动作通路每一轮仅在相同本体（embodiment）的客户端组内聚合，视觉通路每 5 轮在基于谱聚类得到的簇内聚合，语言通路每 10 轮进行一次全局聚合，这一设计反映了各通路梯度在客户端间实际的分歧程度；（2）模态感知隐私分配（MAPA）——在共享差分隐私预算下按不均匀比例分配（ε=1 时动作/视觉/语言分别为 61%/31%/8%），因为固定噪声水平会使动作通路损失 16.0 个百分点的任务成功率，而视觉与语言分别只损失 9.6 与 1.1 个百分点；（3）模态感知通信压缩（MACO）——视觉更新采用带误差反馈的 top-1% 稀疏化（约为 FP32 大小的 1/59），语言更新采用分组 4 比特量化（约 1/8 大小），动作更新则保持 FP32 全精度，因为对动作头做 4 比特量化会产生 0.87 毫米的末端执行器误差并使成功率下降 10.8 个百分点。在网络侧，动作更新通过 5 MHz 的 URLLC 切片传输（按 3GPP TS 22.104，时延目标 10 毫秒、可用性 99.999%），视觉与语言更新共享 100 MHz 的 eMBB 切片，评估基于 7 GHz 频段的 3GPP TR 38.901 室内工厂（InF-SL）信道模型，包含阴影衰落、分块瑞利衰落与 HARQ 重传。

评估中训练了一个可训练参数量为 8.5M 的类 OpenVLA 模型（400M 的 SigLIP 视觉编码器，LoRA rank 16；LLaMA-2 7B 语言主干，LoRA rank 8；以及单独训练的 50M 扩散式动作头，其中仅 0.3M 的条件层与输出层参与训练），跨 16 个模拟客户端、4 种机器人本体（Franka Panda、Sawyer、UR5e、Jaco）与 4 类操作任务，各客户端物体与纹理互不重叠（强非独立同分布数据），并配以成对的无线信道轨迹。FedMVLA 的任务成功率达到 84.8%，相比 FedAvg 的 62.6%（提升 22.2 个百分点）与FedVLA 的 74.6%均有明显优势；剔除 MAFA 会使成功率下降 4.4 个百分点，剔除 MACO 下降 5.3 个百分点，而将切片化传输替换为单体传输下降 3.2 个百分点；MAPA 的消融实验则以统一差分隐私曲线单独给出（ε=0.5 时为 72.7% 对 35.6%）。通信效率提升显著：按调度平均的单客户端上行负载从 FedAvg 的 34 MB 降至 1.5 MB（降低 95.6%），发射能耗从 2.7 J 降至 0.3 J；在切片化传输下，第 95 百分位的轮次关键完成时间无论稀疏化比例如何都稳定在约 1.5 秒（相比之下 FedAvg 单体传输为 136 秒，而将单体传输压缩到具备时延竞争力时（k=0.005）虽然更快，但任务成功率降至 53.8%）。从 4 客户端/1 小区扩展到 128 客户端/8 小区时，相对 FedAvg 的优势从 17.8 个百分点扩大到 28.8 个百分点；在 0-20 dB SNR 范围内施加脉冲干扰时，模态切片方案的性能下降最多仅 1.9 个百分点（即使在 0 dB SNR 下动作流丢包率仍低于 10^-4），而单体传输方案则会崩溃至 56.4% 的成功率。

## Key technical points (EN)
- Decouples VLA federated learning into three per-modality pipelines: aggregation topology (MAFA), differential-privacy budget split (MAPA), and communication compression (MACO) — each tuned to that pathway's divergence, sensitivity, and compression tolerance.
- Action pathway: same-embodiment group aggregation every round, full FP32 precision, 61% of the privacy budget, routed on a 5 MHz URLLC slice (10 ms / 99.999% per 3GPP TS 22.104).
- Vision pathway: spectral-clustering aggregation every 5 rounds, top-1% sparsification with error feedback (~1/59 FP32 size); Language pathway: global aggregation every 10 rounds, 4-bit group quantization (~1/8 size); both share a 100 MHz eMBB slice.
- Evaluated over a 3GPP TR 38.901 InF-SL channel at 7 GHz with shadowing, block Rayleigh fading, and HARQ; 16 clients / 4 robot embodiments / 4 task families, strongly non-IID.
- 84.8% task success vs. 62.6% FedAvg (+22.2pp) and 74.6% FedVLA; per-mechanism ablations each cost 3.2-5.3pp.
- 95.6% uplink payload reduction (34 MB -> 1.5 MB) and an 88.9% transmit-energy reduction (2.7 J -> 0.3 J) vs. FedAvg; p95 completion time ~1.5 s under sliced transport vs. 136 s monolithic.
- Scales from 4 clients/1 cell to 128 clients/8 cells with the FedAvg gap widening from 17.8pp to 28.8pp; under a pulsed jammer (0-20 dB SNR) degrades at most 1.9pp, keeping action-stream packet loss below 10^-4 at 0 dB SNR.

## Key technical points (ZH)
- 将 VLA 联邦学习拆解为三条按模态定制的流水线：聚合拓扑（MAFA）、差分隐私预算分配（MAPA）与通信压缩（MACO），分别针对该通路的分歧程度、隐私敏感度与压缩容忍度进行调优。
- 动作通路：每轮在相同本体客户端组内聚合，保持 FP32 全精度，占隐私预算的 61%，通过 5 MHz 的 URLLC 切片传输（按 3GPP TS 22.104，10 毫秒/99.999%）。
- 视觉通路：每 5 轮基于谱聚类进行聚合，采用 top-1% 稀疏化（约为 FP32 的 1/59）；语言通路：每 10 轮进行全局聚合，采用 4 比特分组量化（约为 1/8 大小）；两者共享 100 MHz 的 eMBB 切片。
- 评估基于 7 GHz 频段的 3GPP TR 38.901 室内工厂（InF-SL）信道，含阴影衰落、分块瑞利衰落与 HARQ 重传；16 个客户端、4 种机器人本体、4 类任务，数据强非独立同分布。
- 任务成功率 84.8%，相比 FedAvg 的 62.6%（提升 22.2 个百分点）与 FedVLA 的 74.6%均有提升；剔除任一机制会使成功率下降 3.2 至 5.3 个百分点。
- 相比 FedAvg，上行负载降低 95.6%（34 MB 降至 1.5 MB），发射能耗降低 88.9%（2.7 J 降至 0.3 J）；切片化传输下第 95 百分位完成时间约 1.5 秒，单体传输则为 136 秒。
- 从 4 客户端/1 小区扩展到 128 客户端/8 小区时，相对 FedAvg 的差距从 17.8 个百分点扩大到 28.8 个百分点；在 0-20 dB SNR 范围的脉冲干扰下最多下降 1.9 个百分点，0 dB SNR 时动作流丢包率仍低于 10^-4。

## Why it matters / what's new (EN)
The KB's 6G-embodied-intelligence coverage has so far been mostly vision/position papers on what 6G should support for robots and AI agents. This entry is a concrete, quantitatively evaluated system that ties a federated-learning training method directly to a 3GPP network-slicing substrate — the modality-sliced transport design is itself the mechanism that makes the ML method work under realistic wireless impairments (jamming, fading), not just an afterthought deployment target. It is a genuinely new combination for this KB: per-modality FL design co-engineered with per-modality 3GPP slice assignment.

## Why it matters / what's new (ZH)
知识库中此前关于"6G 支撑具身智能"的条目大多是愿景性或立场性论文，讨论 6G 应当为机器人与 AI 智能体提供哪些能力。本条目则是一个具体的、经过量化评估的系统，将联邦学习训练方法直接与 3GPP 网络切片底层相绑定——按模态切片的传输设计本身就是该机器学习方法能在真实无线损伤（干扰、衰落）下正常工作的关键机制，而非事后附加的部署目标。这是本知识库中一个真正新颖的组合：按模态定制的联邦学习设计与按模态分配的 3GPP 切片方案协同设计。

## Images
![Representative application scenarios of federated embodied intelligence in 6G networks | 6G 网络中联邦具身智能的代表性应用场景](https://arxiv.org/html/2609.09591v1/figures/fig1ready.png)
![Overview of FedMVLA: per-modality client processing, transport slices, and aggregation topologies | FedMVLA 总览：按模态的客户端处理、传输切片与聚合拓扑](https://arxiv.org/html/2609.09591v1/fig2_framework.png)
