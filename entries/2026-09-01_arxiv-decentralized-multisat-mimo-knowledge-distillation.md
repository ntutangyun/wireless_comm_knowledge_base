---
id: 2026-09-01_arxiv-decentralized-multisat-mimo-knowledge-distillation
date_published: 2026-08-30
date_found: 2026-09-01
type: academic-paper
technology: satellite
title_en: "Robust decentralized multi-satellite massive MIMO precoding via hybrid knowledge distillation (Southeast Univ. / Purple Mountain Labs / SnT Luxembourg / Peng Cheng Lab / China SatNet Group) — a global-clean teacher supervises onboard students on partial, angle-corrupted CSI, closing most of the gap while cutting inference to under 10 ms"
title_zh: "面向多卫星大规模 MIMO 的稳健去中心化混合知识蒸馏预编码（东南大学 / 紫金山实验室 / 卢森堡大学 SnT / 鹏城实验室 / 中国卫星网络集团）——全局纯净教师网络监督在星上仅能获得局部、含角度误差 CSI 的学生网络，性能差距大幅收窄，推理耗时降至 10 毫秒以内"
url: "https://arxiv.org/abs/2608.29620"
source_quality: full
topics: [multi-satellite-MIMO, cooperative-precoding, knowledge-distillation, decentralized-inference, statistical-CSI, angle-error-correction, WMMSE, transformer, Walker-Delta]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)
Cao, Wang, Wang, Lin, Wang, Ding (Southeast University / Purple Mountain Laboratories, Nanjing), Chatzinotas and Ottersten (SnT, University of Luxembourg), with Peng Cheng Laboratory and China Satellite Network Group Company Ltd. as co-affiliations, target cooperative multi-satellite massive MIMO precoding under the constraint that actually matters onboard: each LEO satellite only has **statistical CSI (sCSI)** for its own users, angle information corrupted by ephemeris/GNSS error, and a limited inter-satellite-link (ISL) budget to share anything with its cooperating partners. A fully centralized WMMSE solver needs clean, global information no real deployment can supply; running each satellite's precoder independently (Sep-WMMSE) throws away the cooperative gain entirely.

The paper's answer is a three-network **hybrid knowledge-distillation (HKD)** pipeline. A large **teacher** network — Transformer encoder + dual-axis attention (alternating attention over the user axis and the satellite axis) + a permutation-equivariant tensor network — is trained offline on clean, global sCSI to imitate the WMMSE-optimal precoder. A lightweight, weight-shared **student** network runs onboard each satellite on local sCSI plus whatever partial, noisy features its neighbors can exchange over ISL, with angle errors modeled as bounded uniform noise on the AoD/AoA parameters. Two purpose-built correction modules — Angle/Phase Residual Prediction (APRP) and Kronecker Steering-Vector Correction (KSVC) — sit between the student's tensor network and its precoder-recovery step, learning to undo the angle-error-induced steering-vector distortion before the closed-form precoder is reconstructed. Training is staged: WSR objective first, then precoder-level L2 distillation from the teacher, then steering-vector-level L2 distillation — the paper's ablation (Dec-Student vs. Dec-Student-PKD vs. Dec-Student-HKD) is built to isolate what each distillation term buys.

Simulated on a QuaDRiGa NTN-Urban-LOS channel (600 km Walker-Delta, 28 planes x 60 sats/plane, 53-degree inclination, 2 GHz carrier, 64-element satellite arrays, 4-element UT arrays), the full HKD student closes most of the gap to the centralized teacher, delivers a stable **+7.07% to +8.27% precoder cosine-similarity gain** over the non-distilled student across the -10 to +10 dBW transmit-power range, generalizes to satellite counts and UT counts it was never trained on, and — the practical payoff — runs inference in **under 10 ms** on a laptop CPU versus 44 ms for the teacher and much longer for iterative WMMSE, because the student replaces the teacher's multi-layer Transformer with a single layer and averages over the satellite axis before the equivariant network.

## Summary (ZH)
东南大学/紫金山实验室（Cao、Wang、Wang、Lin、Wang、Ding）与卢森堡大学 SnT（Chatzinotas、Ottersten）团队，联合鹏城实验室与中国卫星网络集团有限公司，针对多卫星协同大规模 MIMO 预编码提出方案，直面星上实际约束：每颗 LEO 卫星只能获得自身用户的**统计 CSI（sCSI）**，角度信息因星历/GNSS 误差而失真，且星间链路（ISL）用于共享信息的预算有限。完全集中式的 WMMSE 求解需要干净的全局信息，任何真实部署都无法满足；而各卫星独立运行预编码（Sep-WMMSE）则完全丢弃了协同增益。

论文给出的方案是三网络**混合知识蒸馏（HKD）**流水线。一个大型**教师**网络——Transformer 编码器 + 双轴注意力（在用户轴与卫星轴之间交替）+ 置换等变张量网络——在干净的全局 sCSI 上离线训练，模仿 WMMSE 最优预编码。一个轻量级、跨卫星权重共享的**学生**网络在每颗卫星星上运行，输入为本地 sCSI 加上邻居经 ISL 可交换的部分含噪特征，角度误差建模为 AoD/AoA 参数上的有界均匀噪声。两个专门设计的校正模块——角度/相位残差预测（APRP）与 Kronecker 导向矢量校正（KSVC）——置于学生张量网络与预编码恢复步骤之间，学习在闭式预编码重建前撤销角度误差引入的导向矢量畸变。训练分阶段进行：先优化 WSR 目标，再引入教师端的预编码级 L2 蒸馏，最后加入导向矢量级 L2 蒸馏——论文的消融实验（Dec-Student、Dec-Student-PKD、Dec-Student-HKD 三者对比）正是为了分离每一级蒸馏各自带来的收益。

在 QuaDRiGa NTN-Urban-LOS 信道（600 km Walker-Delta 星座，28 轨道面 x 每面 60 星，倾角 53 度，载频 2 GHz，卫星端 64 阵元、终端 4 阵元）上仿真，完整 HKD 学生网络弥合了与集中式教师的大部分差距，在 -10 至 +10 dBW 发射功率范围内相对未蒸馏学生稳定获得 **+7.07% 至 +8.27% 的预编码余弦相似度增益**，能泛化到训练时未见过的卫星数与终端数组合，而实际收益在于推理耗时：学生网络在笔记本 CPU 上推理**低于 10 毫秒**，相比教师网络的 44 毫秒、以及迭代式 WMMSE 更长的耗时——因为学生网络用单层结构替换了教师的多层 Transformer，并在等变网络之前对卫星轴做平均。

## Key technical points (EN)
- **Problem framing:** onboard precoding must work with statistical CSI (not instantaneous), partial/noisy inter-satellite information over a limited ISL budget, and angle errors from ephemeris/GNSS rather than perfect global state.
- **Teacher NN:** Large Transformer Encoder (LTE, L layers) -> Dual-Axis Attention (DAA, alternating user-axis and satellite-axis self-attention) -> Tensor-Equivariant Network (TEN, permutation-equivariant to satellite/UT ordering) -> Parameter Decoder -> closed-form Precoder Recovery. Trained offline on clean, global sCSI to match the WMMSE objective.
- **Student NN:** single-layer Transformer encoder (vs. teacher's L layers) + same DAA + satellite-axis averaging + same TEN/decoder/recovery chain; weight-shared across all satellites so one trained model deploys onboard every satellite. Input is local features plus zero-padded, partial neighbor features.
- **Correction modules:** APRP predicts bounded angle/phase residuals (tanh-squashed) to correct AoD/AoA errors; KSVC reconstructs corrected steering vectors via Kronecker structure and re-normalizes them before precoder recovery.
- **Hybrid distillation loss:** WSR objective + precoder-level L2 distillation (student precoder vs. teacher precoder) + steering-vector-level L2 distillation (student vs. teacher steering vectors), staged in three training phases.
- **Baselines compared:** Sep-WMMSE (no cooperation), Cen-WMMSE (centralized, clean/noisy), Cen-Teacher (clean/noisy), Dec-Student (no KD), Dec-Student-PKD (precoder-only KD), Dec-Student-HKD (proposed).
- **Sim setup:** QuaDRiGa NTN_Urban_LOS scenario (3GPP-consistent), Walker-Delta 600 km / 28 planes / 60 sats-per-plane / 53-degree inclination, S in {2,3,4} cooperating satellites, K in {12,18,24,30,36} UTs, 2 GHz carrier, 30 kHz SCS, 20 MHz DL bandwidth, M=64 satellite Tx antennas, N=4 UT Rx antennas, 6 dBi/0 dBi antenna gains, 7 dB noise figure, 290 K noise temperature.
- **Headline numbers:** +7.07% to +8.27% precoder cosine-similarity gain of HKD over non-distilled student across -10..+10 dBW; Cen-Teacher inference 0.044 s vs. Dec-Student-HKD under 0.01 s (Intel Core Ultra 9 185H laptop CPU); HKD tracks Cen-Teacher/Cen-WMMSE closely as S and K scale beyond the S=3, K=24 training point, without retraining; under large angle perturbations HKD beats even Cen-Teacher run on noisy inputs, and stays robust across both uniform and Gaussian angle-error models.
- **Not yet shown:** no over-the-air or hardware validation; complexity analysis (Table III) confirms the student stays near O(K M^3), i.e. the same order as separate per-satellite WMMSE, while remaining non-iterative.

## Key technical points (ZH)
- **问题设定：** 星上预编码必须在统计 CSI（而非瞬时 CSI）、经有限 ISL 预算传递的部分含噪星间信息、以及来自星历/GNSS 而非完美全局状态的角度误差下工作。
- **教师网络：** 大型 Transformer 编码器（LTE，L 层）-> 双轴注意力（DAA，在用户轴与卫星轴间交替自注意力）-> 张量等变网络（TEN，对卫星/终端排列置换等变）-> 参数解码器 -> 闭式预编码恢复。在干净的全局 sCSI 上离线训练以匹配 WMMSE 目标。
- **学生网络：** 单层 Transformer 编码器（相对教师的 L 层）+ 相同的 DAA + 卫星轴平均 + 相同的 TEN/解码器/恢复链路；跨卫星权重共享，单一训练模型即可部署到每颗卫星。输入为本地特征加上零填充的部分邻居特征。
- **校正模块：** APRP 预测经 tanh 压缩的有界角度/相位残差以校正 AoD/AoA 误差；KSVC 通过 Kronecker 结构重建校正后的导向矢量并在预编码恢复前重新归一化。
- **混合蒸馏损失：** WSR 目标 + 预编码级 L2 蒸馏（学生预编码对齐教师预编码）+ 导向矢量级 L2 蒸馏（学生对齐教师导向矢量），分三阶段训练。
- **对比基线：** Sep-WMMSE（无协同）、Cen-WMMSE（集中式，干净/含噪）、Cen-Teacher（干净/含噪）、Dec-Student（无蒸馏）、Dec-Student-PKD（仅预编码级蒸馏）、Dec-Student-HKD（本文方案）。
- **仿真设置：** QuaDRiGa NTN_Urban_LOS 场景（与 3GPP 一致），Walker-Delta 600 km / 28 轨道面 / 每面 60 星 / 倾角 53 度，协同卫星数 S∈{2,3,4}，终端数 K∈{12,18,24,30,36}，载频 2 GHz，子载波间隔 30 kHz，下行带宽 20 MHz，卫星发射天线 M=64、终端接收天线 N=4，天线增益 6 dBi/0 dBi，噪声系数 7 dB，噪声温度 290 K。
- **关键数值：** HKD 相对未蒸馏学生在 -10 至 +10 dBW 范围内预编码余弦相似度增益 +7.07% 至 +8.27%；集中式教师推理耗时 0.044 秒，Dec-Student-HKD 低于 0.01 秒（Intel Core Ultra 9 185H 笔记本 CPU）；HKD 在训练点 S=3、K=24 之外扩展卫星数与终端数时无需重训即能保持接近 Cen-Teacher/Cen-WMMSE 的性能；在较大角度扰动下 HKD 甚至优于在含噪输入上运行的 Cen-Teacher，且在均匀与高斯两种角度误差模型下均保持稳健。
- **尚未验证：** 无空口或硬件实测；复杂度分析（表 III）确认学生网络复杂度仍接近 O(K M^3)，与各卫星独立 WMMSE 同阶，但为非迭代式。

## Why it matters / what's new (EN)
The KB's satellite-MIMO thread so far has been mostly single-satellite (SSB positioning bounds, PRACH preambles, phase shifters) or coordination-without-a-learned-precoder (stochastic-geometry sharing models, beam-hopping schedulers). This is the first entry that puts a **learned, decentralized precoder** at the center of multi-satellite cooperation, and it is explicit about the two things that make cooperative MIMO hard onboard a real constellation: statistical (not instantaneous) CSI, and angle information that is wrong by a bounded but nonzero amount because it comes from ephemeris and GNSS rather than a perfect oracle. The teacher-student framing is not novel in itself, but distilling *both* the precoder output and the intermediate steering vectors — with dedicated correction modules that specifically target the angle-error mechanism rather than generic noise — is a mechanism worth remembering: it lets the student recover directional information the teacher never had to reconstruct because its inputs were clean. The sub-10-ms inference number is the practical hook; it puts a learned cooperative precoder within range of an onboard real-time loop, which the iterative WMMSE baselines the paper compares against are not.

## Why it matters / what's new (ZH)
知识库此前的卫星 MIMO 脉络多集中于单星层面（SSB 定位精度界、PRACH 前导、移相器）或不含学习式预编码的协同（随机几何共享模型、跳波束调度器）。本条目是第一篇将**学习式去中心化预编码**置于多卫星协同核心的条目，并明确点出了让协同 MIMO 在真实星座星上运行困难的两个因素：统计（而非瞬时）CSI，以及来自星历与 GNSS、而非完美先知的、有界但非零的角度误差。教师-学生框架本身并不新颖，但同时蒸馏预编码输出*与*中间的导向矢量——并配以专门针对角度误差机制（而非泛化噪声）的校正模块——是值得记住的机制：它让学生网络能够恢复教师从未需要重建的方向性信息（因为教师的输入本就是干净的）。低于 10 毫秒的推理耗时是最具实用价值的一点：它使学习式协同预编码进入星上实时闭环可用的范围，而论文对比的迭代式 WMMSE 基线做不到这一点。
