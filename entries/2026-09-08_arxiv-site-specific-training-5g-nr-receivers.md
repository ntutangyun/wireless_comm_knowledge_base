---
id: 2026-09-08_arxiv-site-specific-training-5g-nr-receivers
date_published: 2026-09-03
date_found: 2026-09-08
type: academic-paper
technology: cellular
title_en: "On the Impact of Site-Specific Training for a Real-World 5G NR System"
title_zh: "站点专属训练对真实世界 5G NR 系统性能影响的研究"
url: "https://arxiv.org/abs/2609.04004"
source_quality: full
topics: [5G-NR, neural-receiver, NRX, DUIDD, site-specific-training, channel-estimation, uplink-MIMO, O-RU, NVIDIA-Aerial]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Reinhard Wiesmayr, Nuri Berke Baytekin, Chris Dick and Christoph Studer (arXiv v1, 3 Sep 2026; accepted at the 60th Asilomar Conference on Signals, Systems, and Computers 2026) ask whether finetuning wireless receivers on real, site-collected data actually generalizes — across receiver architecture, across single- versus dual-layer uplink transmission, and across time — rather than being a single-setup artifact. The testbed is a standard-compliant 5G NR uplink built on NVIDIA Aerial software with commercial off-the-shelf Open RAN radio units (4 antennas each), operating at 3.45 GHz center frequency, 100 MHz bandwidth (273 physical resource blocks), 30 kHz subcarrier spacing, a 3-downlink/1-special/1-uplink slot pattern, and 16-QAM at MCS indices 6–10 chosen specifically to sit at a challenging SNR operating point. Two physical sites were measured — a small laboratory (3.5m×3.5m to 5m×4m) and a large mixed-LOS/NLOS office floor (~50m×30m in November 2025, ~16m×12.5m in June 2026) — each with two measurement campaigns more than six months apart (November 2025 and June 2026), using Samsung Galaxy S23, Apple iPhone 14 Pro and Google Pixel 9 Pro as commercial UEs. Data was extracted directly from successful transport-block decodes, with failed transmissions' payloads reconstructed from later HARQ retransmissions.

Three receiver architectures were compared. A fully-tunable neural receiver (NRX) — a convolutional/graph neural network unrolled over message-passing iterations, evaluated in shallow (~120K parameter, 2-iteration) and deep (~440K parameter, 8-iteration) configurations — was pretrained on synthetic 3GPP UMi channels and then finetuned by SGD on site data (10^5 batches of 16-slot samples, binary cross-entropy loss). A model-driven neural receiver (MDX) chains classical LS channel estimation and LMMSE equalization with a 2D ResNet refinement stage (~2,500 tunable parameters) before a final LMMSE detector. A model-based receiver (DUIDD, deep-unfolded iterative detection and decoding) has only ~30 tunable parameters (message damping, decoder state forwarding) layered onto an MMSE-PIC detector and LDPC decoder. Separately, the paper studies site-specific *parameter adaptation* rather than finetuning: estimating the spatial (4×4), frequency (3,276×3,276 Hermitian Toeplitz) and temporal (13×13) channel covariance matrices directly from site measurements for use in classical LMMSE channel estimation, instead of relying on a synthetic 3GPP UMi covariance model.

The headline results (block-error rate, BLER): on June-2026 single-layer data, finetuning the MDX cut BLER from 0.351 to 0.237 in the small lab (~33% reduction) and from 0.463 to 0.240 on the office floor (~48% reduction); the DUIDD's much smaller parameter budget yielded only a further 0.004 absolute BLER reduction by comparison, which the paper attributes to its limited tunability. Cross-campaign testing showed NRX models finetuned on either the November-2025 or June-2026 campaign outperform the synthetic-pretrained baseline when evaluated on the *other* campaign's data — finetuning gains survive a six-month gap, though same-campaign finetuning still performs best, and the deep (8-iteration) NRX degrades less across the gap than the shallow (2-iteration) one. A single NRX jointly finetuned on combined single- and dual-layer data matched separately-specialized models to within ≤0.02 absolute BLER. On the parameter-adaptation side, the paper states that using covariance-matrix estimates from site-specific rather than synthetic data reduces the absolute dataset BLER by 0.72 for single-layer and 0.26 for dual-layer transmission, and the best result in the entire study — 0.06 BLER — came from combining site-specific covariance estimation with 4 iterative detection stages, not from neural-receiver finetuning alone. The authors note synthetic UMi covariance actually *degrades* single-layer performance relative to simple averaged least-squares estimates, underscoring a synthetic-to-real gap in the channel statistics themselves, not just in the receiver weights.

## Summary (ZH)
Reinhard Wiesmayr、Nuri Berke Baytekin、Chris Dick 与 Christoph Studer（arXiv v1，2026 年 9 月 3 日；已被第 60 届 Asilomar 信号、系统与计算机会议 2026 接收）研究了在真实、站点采集数据上微调无线接收机所获得的增益，是否能在接收机架构、单/双层上行传输、以及时间跨度上真正泛化，而非仅是某一特定设置下的偶然结果。测试平台是基于 NVIDIA Aerial 软件、搭配商用现货 Open RAN 射频单元（各 4 天线）构建的标准兼容 5G NR 上行链路，中心频率 3.45 GHz，带宽 100 MHz（273 个物理资源块），子载波间隔 30 kHz，采用 3 下行/1 特殊/1 上行时隙格式，并特意选择 MCS 索引 6–10 的 16-QAM 以落在具有挑战性的信噪比工作点。测量覆盖两个物理场地——一间小型实验室（3.5m×3.5m 至 5m×4m）与一层视距/非视距混合的大型办公楼层（2025 年 11 月约 50m×30m，2026 年 6 月约 16m×12.5m）——各自进行了间隔超过六个月的两轮测量（2025 年 11 月与 2026 年 6 月），使用三星 Galaxy S23、苹果 iPhone 14 Pro 与谷歌 Pixel 9 Pro 作为商用终端。数据直接取自成功解码的传输块，失败传输的负载则通过后续 HARQ 重传恢复。

论文比较了三种接收机架构。完全可调神经接收机（NRX）——一种在消息传递迭代上展开的卷积/图神经网络，分别以浅层（约 12 万参数、2 次迭代）与深层（约 44 万参数、8 次迭代）配置评估——先在合成的 3GPP UMi 信道上预训练，再通过随机梯度下降在站点数据上微调（10 万批次、每批 16 时隙样本，采用二元交叉熵损失）。模型驱动神经接收机（MDX）在经典 LS 信道估计与 LMMSE 均衡之后串接一个二维 ResNet 精化阶段（约 2500 个可调参数），最后再接一个 LMMSE 检测器。基于模型的接收机（DUIDD，深度展开迭代检测与译码）仅有约 30 个可调参数（消息阻尼、译码器状态前传），叠加在 MMSE-PIC 检测器与 LDPC 译码器之上。此外，论文还单独研究了站点专属的*参数适配*而非微调：直接从站点测量中估计空间（4×4）、频率（3276×3276 厄米托普利兹）与时间（13×13）信道协方差矩阵，用于经典 LMMSE 信道估计，取代依赖合成 3GPP UMi 协方差模型。

主要结果（误块率，BLER）：在 2026 年 6 月的单层数据上，微调 MDX 将小实验室场景的 BLER 从 0.351 降至 0.237（约降低 33%），办公楼层场景从 0.463 降至 0.240（约降低 48%）；相比之下，可调参数量小得多的 DUIDD 仅再带来 0.004 的绝对 BLER 降幅，论文将其归因于该接收机可调性有限。跨轮次测试表明，无论在 2025 年 11 月还是 2026 年 6 月轮次上微调的 NRX 模型，在*另一轮次*数据上评估时均优于合成数据预训练的基线——微调增益能跨越六个月的时间间隔而保留，尽管同轮次微调仍表现最佳，且深层（8 次迭代）NRX 相较浅层（2 次迭代）NRX 在跨轮次场景下性能衰减更小。在单层与双层混合数据上联合微调的单一 NRX 模型，其表现与分别针对两种配置专门微调的模型相比，绝对 BLER 差异不超过 0.02。在参数适配方面，将合成 UMi 信道协方差替换为站点实测协方差，论文称，相对合成数据得到的协方差估计，站点实测数据得到的协方差估计将绝对误块率分别降低 0.72（单层）与 0.26（双层）；而全文最佳结果——0.06 BLER——来自站点专属协方差估计与 4 级迭代检测的组合，而非单纯的神经接收机微调。作者指出，合成 UMi 协方差实际上会*劣化*单层性能，相比简单的平均最小二乘估计更差，这说明合成与真实之间的差距不仅存在于接收机权重中，也存在于信道统计本身。

## Key technical points (EN)
- Testbed: NVIDIA Aerial software + COTS Open RAN radio units, 3.45 GHz / 100 MHz / 273 PRBs / 30 kHz SCS / 3DSU slot pattern; two sites (small lab, large office) × two campaigns 6+ months apart (Nov 2025, Jun 2026); commercial UEs (Galaxy S23, iPhone 14 Pro, Pixel 9 Pro).
- Three receivers compared: fully-tunable NRX (CGNN, shallow ~120K / deep ~440K params), model-driven MDX (LS+LMMSE+2D-ResNet refinement, ~2,500 params), model-based DUIDD (deep-unfolded MMSE-PIC + LDPC, ~30 params) — all pretrained on synthetic 3GPP UMi channels, then site-finetuned via SGD.
- Headline BLER results: MDX finetuning -33% (lab) / -48% (office) on Jun-2026 single-layer data; DUIDD finetuning only -2% absolute given its small parameter budget.
- Temporal robustness: NRX finetuned on either campaign outperforms the pretrained baseline when tested on the *other* campaign's data 6+ months later; deep NRX degrades less across the gap than shallow NRX.
- Joint single+dual-layer finetuning of one NRX matches separately-specialized models to within ≤0.02 absolute BLER — one model can serve both configurations.
- Site-specific parameter adaptation (measured spatial/frequency/temporal channel covariance replacing synthetic UMi covariance in classical LMMSE estimation) beats finetuning alone: absolute dataset BLER reduced by 0.72 (single-layer) and 0.26 (dual-layer) versus the synthetic-covariance baseline, per the paper; best result in the paper, 0.06 BLER, combines site-specific covariance with 4-stage iterative detection.
- Synthetic UMi covariance actively degrades single-layer performance versus simple averaged LS estimates — the synthetic-to-real gap sits in the channel statistics, not only the receiver weights.
- Code and measurement datasets released on GitHub per the paper.

## Key technical points (ZH)
- 测试平台：NVIDIA Aerial 软件 + 商用现货 Open RAN 射频单元，3.45 GHz / 100 MHz / 273 个 PRB / 30 kHz 子载波间隔 / 3DSU 时隙格式；两个场地（小实验室、大型办公楼层）× 两轮间隔超六个月的测量（2025 年 11 月、2026 年 6 月）；商用终端为 Galaxy S23、iPhone 14 Pro、Pixel 9 Pro。
- 比较三种接收机：完全可调 NRX（卷积图神经网络，浅层约 12 万 / 深层约 44 万参数）、模型驱动 MDX（LS+LMMSE+二维 ResNet 精化，约 2500 参数）、基于模型的 DUIDD（深度展开 MMSE-PIC + LDPC，约 30 参数）——均在合成 3GPP UMi 信道上预训练，再通过随机梯度下降在站点数据上微调。
- 主要 BLER 结果：在 2026 年 6 月单层数据上，微调 MDX 使 BLER 在实验室场景降低约 33%，办公楼层场景降低约 48%；而参数量很小的 DUIDD 微调仅带来约 2% 的绝对降幅。
- 时间鲁棒性：无论在哪一轮次微调的 NRX，在六个月后*另一轮次*数据上测试时均优于预训练基线；深层 NRX 相较浅层 NRX 在跨轮次场景下性能衰减更小。
- 对单一 NRX 在单层+双层混合数据上联合微调，其表现与分别专门微调的模型相比，绝对 BLER 差异不超过 0.02——一个模型即可服务两种配置。
- 站点专属参数适配（用实测的空间/频率/时间信道协方差替代合成 UMi 协方差，用于经典 LMMSE 估计）优于单纯微调：论文称相对合成协方差基线，绝对误块率降低 0.72（单层）与 0.26（双层）；全文最佳结果 0.06 BLER 来自站点专属协方差与 4 级迭代检测的组合。
- 合成 UMi 协方差相较简单平均最小二乘估计反而会劣化单层性能——合成与真实之间的差距不仅存在于接收机权重，也存在于信道统计本身。
- 论文在 GitHub 上公开了代码与测量数据集。

## Why it matters / what's new (EN)
The KB's AI-RAN PHY thread (OCUDU's GPU/CUDA 5G PHY, the two-sided-AI-models testbed, ETRI's neural receiver, Learnware CSI feedback) has established that neural receivers work on real hardware and that scene-specific models beat general ones — but every prior entry is a single-snapshot capability demonstration. This is the first entry to test whether those gains *persist over time* on the same physical site: by repeating measurements 6+ months apart, it converts "does site-specific training help" into "does it still help after the environment has had six months to drift," and finds that it does, though with measurable degradation the deep architecture resists better than the shallow one. It is also the first entry to show, on a real 5G NR uplink, that improving the *channel-statistics model* (measured covariance vs. synthetic 3GPP UMi covariance) can outperform neural-receiver finetuning altogether — a useful counterpoint to a bin that has so far framed "learn a better receiver" and "estimate a better channel" as separate research tracks.

## Why it matters / what's new (ZH)
知识库中的 AI-RAN 物理层脉络（OCUDU 的 GPU/CUDA 5G 物理层、双侧 AI 模型测试床、ETRI 的神经接收机、Learnware CSI 反馈）已经证明神经接收机可在真实硬件上运行，且场景专属模型优于通用模型——但此前的每一条相关条目都只是单一时间快照下的能力展示。在本知识库中，本条目首次检验这些增益是否能在同一物理场地*随时间持续*：通过间隔超过六个月的重复测量，它把"站点专属训练是否有帮助"这一问题，转变为"在环境经历六个月漂移之后是否仍有帮助"，结果是肯定的，尽管存在可测量的性能衰减，且深层架构比浅层架构更能抵御这种衰减。在本知识库中，本条目也首次在真实 5G NR 上行链路上表明，改进*信道统计模型*本身（实测协方差 vs. 合成 3GPP UMi 协方差）可以完全超过神经接收机微调所带来的增益——这为该栏目此前将"学习更好的接收机"与"估计更好的信道"视为两条独立研究路线的框架，提供了一个有价值的反例。

## Images
![ETH Zurich small-laboratory 5G NR testbed setup, June 2026 campaign | ETH 苏黎世小型实验室 5G NR 测试平台（2026 年 6 月测量），中英对照](https://arxiv.org/html/2609.04004v1/fig/small_lab2026.png)
![OFDM resource grid with DMRS pilot layout used for single- and dual-layer uplink | 用于单/双层上行传输的 OFDM 资源网格与 DMRS 导频布局](https://arxiv.org/html/2609.04004v1/resource_grid.png)
