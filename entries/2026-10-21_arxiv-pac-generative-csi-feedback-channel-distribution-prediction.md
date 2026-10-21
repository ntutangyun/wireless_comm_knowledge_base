---
id: 2026-10-21_arxiv-pac-generative-csi-feedback-channel-distribution-prediction
date_published: 2026-10-12
date_found: 2026-10-21
type: academic-paper
technology: cellular
title_en: "Generative Deep Learning for CSI Feedback in Massive MIMO via Channel Distribution Prediction"
title_zh: "基于信道分布预测的大规模 MIMO CSI 反馈生成式深度学习"
url: "https://arxiv.org/abs/2610.16796"
source_quality: full
topics: [massive-MIMO, CSI-feedback, FDD, entropy-coding, Transformer, DeepMIMO, COST-2100, CSI-tokens, prediction-aided-coding]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Liujia Yao, Changsheng You, Chao Zhou, Yi Gong (Southern University of Science and Technology) and Chengwen Xing (Beijing Institute of Technology) propose PAC, a prediction-aided coding framework for CSI feedback in FDD massive MIMO. The paper's stated starting point is that existing deep-learning CSI feedback methods compress CSI into low-dimensional representations and/or exploit historical CSI to predict future CSI, and can become unreliable when the UE suddenly changes its motion.

PAC represents each CSI frame as multiple CSI tokens obtained without using historical CSI, which makes token generation robust to abrupt UE motion. In the first stage, a Transformer predicts the conditional distribution (not a deterministic value) of the next frame's CSI tokens from historical tokens. In the second stage, when the next frame arrives, the UE uses the predicted distribution for variable-length entropy coding of its tokens, and the resulting bitstream is fed back to the base station. Two designs are added: an intra-frame positional embedding (IPE) that gives tokens at the same intra-frame position the same embedding, and a parallel decoding architecture (PAC-Paral, against the sequential PAC-Seq) that lets the BS decode several tokens in parallel to reduce end-to-end latency.

On the DeepMIMO dataset the authors report feedback overhead reduced by 72% to 84% relative to two representative history-aware baselines, and stable CSI reconstruction accuracy under random-walk trajectories where history-aware baselines degrade sharply. The authors state the source code will be released upon acceptance.

## Summary (ZH)
Liujia Yao、Changsheng You、Chao Zhou、Yi Gong（南方科技大学）与 Chengwen Xing（北京理工大学）提出 PAC，一种用于 FDD 大规模 MIMO CSI 反馈的预测辅助编码框架。论文的出发点是：现有深度学习 CSI 反馈方法把 CSI 压缩为低维表示，和/或利用历史 CSI 预测未来 CSI，当 UE 运动突然改变时可能变得不可靠。

PAC 将每个 CSI 帧表示为多个 CSI 令牌，且令牌的获得不使用历史 CSI，因此令牌生成对 UE 运动突变具有鲁棒性。第一阶段，Transformer 根据历史令牌预测下一帧 CSI 令牌的条件分布（而非确定值）。第二阶段，下一帧到达后，UE 利用预测分布对其令牌做变长熵编码，并把得到的比特流反馈给基站。此外还加入两项设计：帧内位置编码（IPE），使处于相同帧内位置的令牌获得相同的位置嵌入；以及并行解码架构（PAC-Paral，对应顺序解码的 PAC-Seq），使基站可并行解码多个令牌以降低端到端时延。

在 DeepMIMO 数据集上，作者报告相对两种有代表性的历史感知基线，反馈开销降低 72% 至 84%，且在随机游走轨迹下 CSI 重建精度保持稳定，而历史感知基线则明显下降。作者称源代码将在论文录用后发布。

## Key technical points (EN)
- Two stages: Transformer-based next-frame token-distribution prediction from history, then variable-length entropy coding of the actual tokens using that predicted distribution.
- Tokens are generated per frame without historical CSI, which the authors identify as the reason for robustness to abrupt motion changes.
- IPE: a standard absolute positional embedding captures only position within the whole sequence; IPE assigns the same embedding to tokens at the same intra-frame position. In the ablation at 32 (the largest setting listed), feedback overhead is far higher without IPE (about 64 bits per frame against about 36) while parameters rise by under 0.5%.
- Parallel decoding: increasing the number of parallel groups reduces inference latency (for example from 2.665 ms to 0.660 ms at NMSE of -22.4 dB with 1 vs 8 groups) at a small increase in feedback overhead (24.27 to 29.76 bpf).
- Setup: DeepMIMO v3 indoor (scene I1_2p5, 2.5 GHz, 50 MHz, 84 trajectories) and outdoor (O1_3p5, 3.5 GHz, 50 MHz, 201 trajectories) scenes; COST 2100 IndoorHall_5GHz (5.3 GHz, 20 MHz, 12000 trajectories); random-walk mobility model with 0.5 forward / 0.25 left / 0.25 right probabilities; context window of 15 frames; two-layer Transformer, width 256, 8 heads.
- COST 2100 check: PAC-Seq reaches an NMSE of -21.40 dB at 14.83 bits per frame (bpf), while history-aware baselines use 256 bpf for -17.20 and -20.00 dB.

## Key technical points (ZH)
- 两个阶段：基于 Transformer 的历史条件下一帧令牌分布预测，以及利用该预测分布对实际令牌进行变长熵编码。
- 令牌逐帧生成，不使用历史 CSI，作者认为这是其对运动突变具有鲁棒性的原因。
- IPE：标准绝对位置编码只能表示令牌在整个序列中的位置；IPE 为处于相同帧内位置的令牌分配相同嵌入。在消融实验的最大设置（32）下，去掉 IPE 后反馈开销明显更高（约 64 比特每帧对约 36），而参数量仅增加不到 0.5%。
- 并行解码：增加并行组数可降低推理时延（例如 NMSE 为 -22.4 dB 时，1 组与 8 组相比时延从 2.665 ms 降至 0.660 ms），代价是反馈开销小幅上升（24.27 增至 29.76 bpf）。
- 设置：DeepMIMO v3 室内（场景 I1_2p5，2.5 GHz，50 MHz，84 条轨迹）与室外（O1_3p5，3.5 GHz，50 MHz，201 条轨迹）场景；COST 2100 IndoorHall_5GHz（5.3 GHz，20 MHz，12000 条轨迹）；随机游走移动模型（前进 0.5、左转 0.25、右转 0.25 的概率）；上下文窗口 15 帧；两层 Transformer，宽度 256，8 个头。
- COST 2100 验证：PAC-Seq 在 14.83 比特每帧（bpf）下达到 -21.40 dB 的 NMSE，而历史感知基线使用 256 bpf，NMSE 分别为 -17.20 dB 和 -20.00 dB。

## Why it matters / what's new (EN)
The KB's massive-MIMO and AI-for-cellular entries contain CSI-feedback and AI-native-air-interface work; this one frames CSI feedback as entropy coding driven by a predicted channel distribution, and reports results on mobility that changes abruptly. The numbers are from dataset-based simulation (DeepMIMO, COST 2100), not over-the-air or 3GPP codebook comparisons, so how the reported overhead savings relate to standardized Type-I/II feedback is not addressed by the paper.

## Why it matters / what's new (ZH)
知识库的大规模 MIMO 与蜂窝 AI 条目中已有 CSI 反馈及 AI 原生空口方面的工作；本条目把 CSI 反馈表述为由预测信道分布驱动的熵编码，并给出了运动突变场景下的结果。数据均来自基于数据集的仿真（DeepMIMO、COST 2100），不是空口测试或与 3GPP 码本的对比，因此论文未涉及所报告的开销节省与标准化 Type-I/II 反馈之间的关系。
