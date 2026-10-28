---
id: 2026-10-28_arxiv-sample-and-score-surrogate-guided-co-sr-80211bn
date_published: 2026-10-27
date_found: 2026-10-28
technology: wifi
type: academic-paper
title_en: "Sample-and-Score: Surrogate-Guided Coordinated Spatial Reuse in IEEE 802.11 Networks"
title_zh: "Sample-and-Score：IEEE 802.11 网络中由代理模型引导的协调空间复用（Co-SR）"
url: "https://arxiv.org/abs/2610.36868"
source_quality: full
topics: [802.11bn, MAPC, Co-SR, coordinated spatial reuse, surrogate model, graph neural network, mapc-sim]
topic_primary: mapc-cosr
topics_secondary: [ai-for-wifi, wifi8-uhr]
novelty_score: 4
---

## Summary (EN)

Maksymilian Wojnar's single-author paper (arXiv 2610.36868, cs.NI; the HTML page cites IEEE Communications Letters, doi 10.1109/LCOMM.2026.3746794) attacks the configuration-search problem of Coordinated Spatial Reuse (Co-SR) in IEEE 802.11bn. A Co-SR configuration fixes which APs transmit, which STA each active AP serves, the transmit power level and the MCS per active AP; with 14 MCS indices, 4 power levels and 4 STAs per AP, five APs already give more than 10^11 configurations. The proposal is "sample-and-score": draw random Co-SR configurations, score each with an offline-trained surrogate model, and pick the best. The surrogate is deployed without online fine-tuning or sequential exploration.

The surrogate works on a graph whose nodes are APs and STAs. Edges are AP-STA transmission links and AP-AP interference links (mutual RSSI above the CCA threshold), each carrying a 24-dimensional feature vector (standardized RSSI, a selected flag, one-hot MCS and one-hot power level). To limit signalling, only AP-AP links (from beacons) and AP-STA links (from ACKs, using reciprocity) are measured; residual cross-interference is inferred by message passing. The network is 3 graph-network layers with residual connections plus a 3-layer transformer (hidden size 64, 4 heads) with masked attention, and a 4-component mixture-density output trained on negative log-likelihood (the author reports MSE overfit). Training uses 11 parameterised scenario types with 2-10 APs and up to 50 STAs, 50,000 examples from the open-source mapc-sim Monte Carlo simulator (TGax path loss, Nakagami m=1.5 fading, 5 GHz, 80 MHz, 802.11be PHY, SISO, downlink full buffer, signalling overhead modelled); validation Spearman rho 0.87, R^2 0.70.

Results: in a 2x2 residential grid, a perfect-surrogate version of sample-and-score reaches 973 Mbit/s with 8192 candidates (95% of the throughput-optimal bound), while the learned surrogate reaches 656 Mbit/s at 1024 candidates, 16% above DCF, then plateaus beyond 2048 candidates. It is compared with a hierarchical multi-armed bandit (higher average throughput but many steps to converge), a greedy SINR-threshold SR-groups heuristic (similar average but runs spread from 473 to 1205 Mbit/s), random, DCF and two optimal bounds. In open-space topologies of 2-16 APs (unseen sizes beyond 10 APs are out of distribution) the learned surrogate recovers 52-77% of the perfect surrogate's median rate, best at 2 APs. Inference on an NVIDIA GH200 takes about 121 ms for 1024 candidates in the small model and 381 ms in the large one (split batching), versus 3780 ms for the bandit to converge; full-batch attention runs out of memory above 128 candidates for the large (16-AP) model and at 1024 for the small one. The paper states its limits: no full-stack simulator supports Co-SR yet, topologies are static, traffic is full-buffer downlink only; future work names other MAPC schemes such as coordinated beamforming and validation with a packet-level simulator and hardware.

## Summary (ZH)

Maksymilian Wojnar 的单作者论文（arXiv 2610.36868，cs.NI；HTML 页面标注发表于 IEEE Communications Letters，doi 10.1109/LCOMM.2026.3746794）针对 IEEE 802.11bn 协调空间复用（Co-SR）的配置搜索问题。一个 Co-SR 配置需确定哪些 AP 发射、每个活跃 AP 服务哪个 STA、发射功率等级与每个活跃 AP 的 MCS；在 14 个 MCS、4 个功率等级、每 AP 4 个 STA 的设定下，5 个 AP 就已超过 10^11 种配置。论文提出“采样并打分”（sample-and-score）：随机抽取 Co-SR 配置，用离线训练的代理模型给每个配置打分，选出最优者。代理模型部署时无需在线微调或序贯探索。

代理模型作用于一张图：节点为 AP 与 STA，边为 AP-STA 传输链路和 AP-AP 干扰链路（互相 RSSI 超过 CCA 门限），每条边带 24 维特征（标准化 RSSI、是否被选中标志、MCS 与功率等级的 one-hot）。为降低信令开销，只测量 AP-AP 链路（来自信标）和 AP-STA 链路（利用互易性由 ACK 获得），其余交叉干扰由消息传递推断。网络由 3 层带残差的图网络加 3 层 Transformer（隐藏维度 64、4 个注意力头，带掩码注意力）组成，输出为 4 分量混合密度，以负对数似然训练（作者报告 MSE 会过拟合）。训练使用 11 类参数化场景（2–10 个 AP、最多 50 个 STA），由开源 Monte Carlo 仿真器 mapc-sim 生成 50,000 个样本（TGax 路径损耗、Nakagami m=1.5 衰落、5 GHz、80 MHz、802.11be PHY、SISO、下行满缓冲，并建模信令开销）；验证集 Spearman rho 0.87、R^2 0.70。

结果：在 2x2 住宅网格中，使用完美代理模型的 sample-and-score 在 8192 个候选时达到 973 Mbit/s（吞吐最优上界的 95%）；学习到的代理模型在 1024 个候选时达到 656 Mbit/s，比 DCF 高 16%，超过 2048 个候选后趋于平台。对比对象包括分层多臂老虎机（平均吞吐更高但需要许多步才能收敛）、基于 SINR 门限的贪心 SR-groups 启发式（平均值相近，但各次运行在 473–1205 Mbit/s 之间波动）、随机、DCF 与两个最优上界。在 2–16 个 AP 的开阔场景中（超过 10 个 AP 的规模属于训练分布之外），学习到的代理模型达到完美代理模型中位速率的 52–77%，2 个 AP 时最好。在 NVIDIA GH200 上，1024 个候选的推理耗时小模型约 121 ms、大模型约 381 ms（分块批处理），而老虎机收敛需 3780 ms；全批注意力在候选数超过 128 时（大模型，16 AP）显存不足，小模型则在 1024 时不足。论文自述局限：目前没有支持 Co-SR 的全栈仿真器、拓扑为静态、仅下行满缓冲流量；后续工作提到协调波束赋形等其他 MAPC 方案，以及用包级仿真器和硬件验证。

## Key technical points (EN)

- Co-SR configuration = active AP set + served STA per AP + TX power level + MCS per AP; the space is combinatorial (over 10^11 for 5 APs, 14 MCS, 4 power levels, 4 STAs/AP).
- Sample-and-score: random candidate draw (k active APs uniform in 1..|A|), batch scoring by a learned surrogate, top-k selection applied round-robin over TXOPs; the output is a catalogue of Co-SR groups for a controller's own policy, regenerated on a snapshot when throughput drops or associations change.
- Graph surrogate: 24-dim edge features, AP-AP and AP-STA edges only (no full cross-link measurement), 3 GNN layers + 3-layer transformer + 4-component mixture-density head; AdamW, 20,000 steps, batch 16.
- Training data: 50,000 examples (1,000 realisations x 50 configurations, 10 of them with simulator-computed ideal MCS); rho 0.87, R^2 0.70.
- Residential: perfect surrogate 973 Mbit/s at N=8192 (95% of T-optimal); learned 656 Mbit/s at N=1024 (+16% vs DCF), plateau after 2048.
- Open space 2-16 APs: learned surrogate = 52-77% of perfect-surrogate median; inference 121 ms / 381 ms for 1024 candidates versus 3780 ms for H-MAB convergence.
- Evaluation is on mapc-sim (downlink, full buffer, static topologies); code stated as public on GitHub.

## Key technical points (ZH)

- Co-SR 配置 = 活跃 AP 集合 + 每 AP 服务的 STA + 发射功率等级 + 每 AP 的 MCS；配置空间呈组合爆炸（5 个 AP、14 个 MCS、4 个功率等级、每 AP 4 个 STA 时超过 10^11）。
- Sample-and-score：随机抽取候选（活跃 AP 数 k 在 1..|A| 均匀取值），用学习到的代理模型批量打分，取 top-k 并在各 TXOP 间轮转使用；输出是供控制器自有策略使用的 Co-SR 分组目录，在吞吐下降或关联变化时基于快照重新生成。
- 图代理模型：24 维边特征，仅有 AP-AP 与 AP-STA 边（无需完整交叉链路测量），3 层 GNN + 3 层 Transformer + 4 分量混合密度输出头；AdamW、20,000 步、批大小 16。
- 训练数据：50,000 个样本（1,000 次随机实现 x 50 个配置，其中 10 个使用仿真器计算的理想 MCS）；rho 0.87、R^2 0.70。
- 住宅场景：完美代理在 N=8192 时 973 Mbit/s（T-optimal 的 95%）；学习代理在 N=1024 时 656 Mbit/s（比 DCF 高 16%），2048 后进入平台。
- 2–16 个 AP 的开阔场景：学习代理为完美代理中位值的 52–77%；1024 个候选推理 121 ms / 381 ms，而 H-MAB 收敛需 3780 ms。
- 评估基于 mapc-sim（下行、满缓冲、静态拓扑）；代码称已在 GitHub 公开。

## Why it matters / what's new (EN)

Earlier Co-SR work includes TGbn standards contributions and bandit/learning papers such as [2026-05-01_arxiv-hmab-co-sr](2026-05-01_arxiv-hmab-co-sr.md) and [2026-08-06_arxiv-fm4wifi-flow-matching-cosr](2026-08-06_arxiv-fm4wifi-flow-matching-cosr.md); this entry adds a one-shot, no-online-learning alternative with an explicit trade-off table (catalogue size versus recovered throughput, inference time versus bandit convergence). Its graph representation is claimed to generalise across topologies and to scale to groups of up to 16 APs, beyond the pairwise scope the paper attributes to the Wi-Fi 8 specification. Caveats from the paper itself: simulator-only evidence, static topologies, downlink full-buffer, and a 52-77% gap to a perfect scorer, so the 95% figure applies to the idealised scorer, not the learned one. Related: [2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest](2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest.md) and [2026-10-27_ieee-mentor-tgbn-lb296-mapc-bss-operating-info-cids-digest](2026-10-27_ieee-mentor-tgbn-lb296-mapc-bss-operating-info-cids-digest.md).

## Why it matters / what's new (ZH)

此前的 Co-SR 工作包括 TGbn 标准贡献以及老虎机/学习类论文（如 [2026-05-01_arxiv-hmab-co-sr](2026-05-01_arxiv-hmab-co-sr.md)、[2026-08-06_arxiv-fm4wifi-flow-matching-cosr](2026-08-06_arxiv-fm4wifi-flow-matching-cosr.md)）；本条目补充了一种一次性、无需在线学习的替代方案，并给出明确的权衡数据（目录规模与恢复吞吐、推理耗时与老虎机收敛时间）。论文称其图表示可跨拓扑泛化，并可扩展到最多 16 个 AP 的分组，超出论文所述 Wi-Fi 8 规范的成对范围。论文自述的注意事项：仅有仿真证据、拓扑静态、下行满缓冲，且与完美打分器之间有 52–77% 的差距，因此 95% 的数字对应理想化打分器而非学习得到的模型。相关：[2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest](2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest.md) 与 [2026-10-27_ieee-mentor-tgbn-lb296-mapc-bss-operating-info-cids-digest](2026-10-27_ieee-mentor-tgbn-lb296-mapc-bss-operating-info-cids-digest.md)。
