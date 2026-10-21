---
id: 2026-10-21_arxiv-rail-5g-nr-cir-indoor-localization-benchmark
date_published: 2026-10-18
date_found: 2026-10-21
type: academic-paper
technology: cellular
title_en: "RAIL-5G: A Challenging Real-World Dataset and Benchmark for AI-Based 5G Indoor Localization"
title_zh: "RAIL-5G：面向 AI 5G 室内定位的真实场景高难度数据集与基准"
url: "https://arxiv.org/abs/2610.25201"
source_quality: full
topics: [5G-NR, positioning, SRS, CIR, channel-charting, fingerprinting, TDoA, dataset, industrial, Amarisoft]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Jonas Pirkl and co-authors present RAIL-5G, a public real-world 5G NR channel-impulse-response (CIR) benchmark recorded in an operational railway maintenance facility. The paper is to be published in the proceedings of the 16th International Conference on Indoor Positioning and Indoor Navigation (IPIN). The dataset covers an 811 square metre indoor area with eight distributed radio units, robot-mounted user-equipment trajectories, high-accuracy iGPS reference positions, and severe metal-induced multipath from train compartments and maintenance infrastructure.

The measurement setup uses an Amarisoft 5G NR cell in band n77 at 3.95 GHz. The UE is a Quectel RM502Q-AE modem on a robot about 0.42 m above the floor, moving at roughly 1 m/s and sending uplink SRS configured at 100 MHz bandwidth and a 100 Hz rate. Eight Benetel RAN550 n77u radio units, attached through Fraunhofer's Mobile Testbed recording platform, each record the channel at 122.88 MHz sampling, mimicking a distributed-SIMO uplink system. A 7D Kinematic Metrology iGPS with eight laser transmitters provides ground truth at 40 Hz. Eight takes (meander, serpentine, random and coarse-meander trajectories over sub-areas and the full area) total 415,354 data points.

The benchmark compares geometric TDoA, supervised fingerprinting, unsupervised channel charting and self-supervised wireless pretraining. On the full split, TDoA reaches 7.02 m mean absolute error, the best unsupervised method about 2.4 to 2.5 m (the abstract gives 2.46 m, the conclusion 2.44 m), and supervised fingerprinting 0.52 m. Self-supervised pretraining reduces labelling effort by up to one order of magnitude, but a gap to supervised fingerprinting remains.

## Summary (ZH)
Jonas Pirkl 等人提出 RAIL-5G，这是一个在运营中的铁路检修厂房内采集的公开真实 5G NR 信道冲激响应（CIR）基准。论文将发表于第 16 届室内定位与室内导航国际会议（IPIN）论文集。数据集覆盖 811 平方米室内区域，包含八个分布式射频单元、机器人搭载的用户设备轨迹、高精度 iGPS 参考位置，以及由列车车厢和检修设施造成的严重金属多径。

测量系统采用 n77 频段 3.95 GHz 的 Amarisoft 5G NR 小区。UE 为安装在距地面约 0.42 m 机器人上的 Quectel RM502Q-AE 模组，以约 1 m/s 速度移动，发送带宽 100 MHz、速率 100 Hz 的上行 SRS。八个 Benetel RAN550 n77u 射频单元经 Fraunhofer 移动测试平台录制，各自以 122.88 MHz 采样记录信道，等效于分布式 SIMO 上行系统。带有八个激光发射器的 7D Kinematic Metrology iGPS 以 40 Hz 提供真值。八次采集（子区域与全区域的曲折往返（meander）、蛇形（serpentine）、随机和粗曲折往返（coarse meander）轨迹）共 415,354 个数据点。

基准对比了几何 TDoA、监督指纹、无监督信道制图和自监督无线预训练。在完整划分上，TDoA 的平均绝对误差为 7.02 m，最佳无监督方法约为 2.4 至 2.5 m（摘要为 2.46 m，结论为 2.44 m），监督指纹为 0.52 m。自监督预训练可将标注工作量最多减少一个数量级，但与监督指纹之间仍有差距。

## Key technical points (EN)
- Environment: operational railway maintenance facility, 811 square metres, large metallic train compartments and narrow corridors; the authors report that metallic compartments distort the radio manifold, causing abrupt spatial changes in the CIR.
- Radio setup: Amarisoft cell, n77, 3.95 GHz; SRS 100 MHz at 100 Hz; eight Benetel RAN550 n77u radio units at 122.88 MHz sampling; Quectel RM502Q-AE UE.
- Ground truth: iGPS with sub-millimetre accuracy at 40 Hz, temporally aligned to the 5G measurements in preprocessing.
- Data: eight takes, 415,354 points in total; takes 1 to 6 cover sub-areas (lower corridor, free space, upper corridor) and takes 7 and 8 cover the full area.
- Methods benchmarked: geometric TDoA, supervised fingerprinting, unsupervised channel charting (including Siamese/Triplet-style variants), self-supervised pretraining.
- Headline numbers on the full split: TDoA 7.02 m, best unsupervised about 2.46 m, supervised fingerprinting 0.52 m MAE.

## Key technical points (ZH)
- 环境：运营中的铁路检修厂房，811 平方米，含大型金属列车车厢与狭窄通道；作者报告金属车厢扭曲了无线电流形，使 CIR 在空间上发生突变。
- 射频设置：Amarisoft 小区，n77，3.95 GHz；SRS 带宽 100 MHz、速率 100 Hz；八个 Benetel RAN550 n77u 射频单元，采样率 122.88 MHz；Quectel RM502Q-AE UE。
- 真值：iGPS 以 40 Hz 提供亚毫米精度，预处理时与 5G 测量在时间上对齐。
- 数据：八次采集，共 415,354 个点；第 1 至 6 次覆盖子区域（下走廊、空旷区、上走廊），第 7、8 次覆盖全区域。
- 评测方法：几何 TDoA、监督指纹、无监督信道制图（含 Siamese/Triplet 类变体）、自监督预训练。
- 完整划分上的关键数字：TDoA 7.02 m，最佳无监督方法约 2.46 m，监督指纹 MAE 为 0.52 m。

## Why it matters / what's new (EN)
The KB already holds several 5G-positioning and indoor-localization entries (for example the OAI-based SRS xApp localization entry and the 5G-plus-UWB LocAttMamba entry). RAIL-5G adds a public measured 5G NR uplink CIR dataset from an industrial site with severe metal multipath, and its benchmark shows the size of the gap between geometric, unsupervised and supervised approaches on it (7.02 m, about 2.4 m, 0.52 m). The authors say the dataset is aimed at the case where existing public sets cover only simulation, Wi-Fi, massive-MIMO channel sounding, small-scale 5G measurements or less severe propagation.

## Why it matters / what's new (ZH)
知识库中已有若干 5G 定位与室内定位条目（如基于 OAI 的 SRS xApp 定位条目和 5G 加 UWB 的 LocAttMamba 条目）。RAIL-5G 补充了一个公开的、来自严重金属多径工业场地的 5G NR 上行 CIR 实测数据集，其基准结果展示了几何、无监督和监督方法在该数据上的差距（7.02 m、约 2.4 m、0.52 m）。作者指出，该数据集面向现有公开数据仅覆盖仿真、Wi-Fi、大规模 MIMO 信道探测、小规模 5G 测量或传播条件较温和的情形。
