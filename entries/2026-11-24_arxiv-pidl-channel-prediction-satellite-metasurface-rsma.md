---
id: 2026-11-24_arxiv-pidl-channel-prediction-satellite-metasurface-rsma
date_published: 2026-11-19
date_found: 2026-11-24
type: academic-paper
technology: satellite
title_en: "Physics-Informed Deep Learning for Channel Prediction in Satellite-Mounted Metasurface Reflection Communication Networks"
title_zh: "卫星搭载超表面反射通信网络中基于物理信息深度学习的信道预测"
url: "https://arxiv.org/abs/2611.26068"
source_quality: full
topics: [LEO, metasurface, RSMA, outage-probability, physics-informed, deep-learning, stochastic-geometry]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Sun, Jiang, Mo, Guo and Cui (the page lists Henan University, Beijing University of Posts and Telecommunications and KU Leuven) propose a physics-informed deep learning (PIDL) framework for outage-probability (OP)-aware channel prediction in satellite-mounted metasurface (MS) systems. They argue that satellite-terrestrial links suffer heavy path loss, that satellite payloads cannot afford high power or active relays, and that earlier analytical work assumed continuous phase control, fixed satellite positions and simplified circular user distributions.

The system model is a two-hop cascaded transmitter-metasurface-user channel with rate-splitting multiple access (RSMA), a Gamma approximation of the cascaded gain and closed-form OP expressions. Practical constraints are added: satellites follow a spherical Poisson point process, users are placed uniformly in a ring sector on the Earth's surface, and metasurface phases are quantised to B bits. A fully connected network predicts log10 of the OP, trained with a Huber loss plus a monotonicity penalty and an asymptotic-decay penalty tied to the diversity order.

## Summary (ZH)

Sun、Jiang、Mo、Guo 与 Cui（页面列出河南大学、北京邮电大学和鲁汶大学）提出一种基于物理信息深度学习（PIDL）的框架，用于卫星搭载超表面（MS）系统中感知中断概率（OP）的信道预测。他们指出，星地链路路径损耗大，卫星载荷无法承受高功率或有源中继，而此前的解析工作假设了连续相位控制、固定卫星位置和简化的圆形用户分布。

系统模型为发射端-超表面-用户的两跳级联信道，采用速率分裂多址（RSMA）、级联增益的 Gamma 近似以及闭式 OP 表达式。论文加入了实际约束：卫星服从球面泊松点过程，用户均匀分布在地表环形扇区内，超表面相位量化为 B 比特。一个全连接网络预测 OP 的 log10 值，训练采用 Huber 损失，并加入单调性惩罚和与分集阶数相关的渐近衰减惩罚。

## Key technical points (EN)

- Network: five inputs (transmit power, distance, altitude, constellation size, quantisation bits), five hidden layers of sizes 64, 64, 64, 32 and 16, min-max normalised inputs; the monotonicity penalty acts on transmit power, distance and altitude.
- Data and setup: 9,600 samples split 70/20/10 into training, validation and test sets, each label averaged over 10^6 Monte Carlo realisations; transmit power 45-60 dBm, distance 300-500 km, altitude 300-500 km, constellation size 2,000-10,000, 1-4 quantisation bits; carrier 1 GHz, bandwidth 20 MHz, 2 users, 100 metasurface elements, target rates 30 kbps (common) and 10 kbps (private), shadowed-Rician channel.
- Results: training loss falls to roughly 10^-5 within about 400 epochs; prediction accuracy stabilises above 0.99, though the metric's tolerance is not defined. Predicted OP follows the theoretical curves as power, altitude and distance vary (down to about 10^-20 in the plotted range), OP falls as constellation size grows but stays above the ideal curve even at 9,000 satellites, and 1-bit quantisation causes significant loss while the gap is negligible at B >= 3.
- Comparison is against theoretical curves from the authors' earlier work and an ideal continuous-phase case; no other machine-learning models and no variant without the physics-informed terms are compared.
- Limitations: data are entirely simulated; fixed parameters (two users, equal power split, fixed target rates); the OP under random satellite positions stays above the ideal theoretical curve even at 9,000 satellites, which the paper attributes to satellites not being optimally positioned. No venue is stated.

## Key technical points (ZH)

- 网络：五个输入（发射功率、距离、高度、星座规模、量化比特数），五个隐藏层，规模为 64、64、64、32 和 16，输入做 min-max 归一化；单调性惩罚作用于发射功率、距离和高度。
- 数据与设置：9,600 个样本按 70/20/10 划分为训练、验证和测试集，每个标签由 10^6 次蒙特卡洛实现平均得到；发射功率 45-60 dBm，距离 300-500 km，高度 300-500 km，星座规模 2,000-10,000，量化 1-4 比特；载频 1 GHz，带宽 20 MHz，2 个用户，100 个超表面单元，目标速率为 30 kbps（公共流）和 10 kbps（私有流），阴影莱斯信道。
- 结果：训练损失在约 400 轮内降至约 10^-5；预测精度稳定在 0.99 以上，但论文未定义该指标的容差。预测的 OP 在功率、高度和距离变化时贴合理论曲线（绘图范围内低至约 10^-20）；OP 随星座规模增大而下降，但即便在 9,000 颗卫星时仍高于理想曲线；1 比特量化造成显著损失，而 B >= 3 时差距可忽略。
- 对比对象为作者此前工作的理论曲线和理想连续相位情形；未与其他机器学习模型比较，也未与去掉物理信息项的变体比较。
- 局限：数据完全来自仿真；参数固定（两用户、功率平均分配、目标速率固定）；在随机卫星位置下，即便有 9,000 颗卫星，OP 仍高于理想理论曲线，论文将其归因于卫星无法保证处于最优位置。未说明发表场合。

## Why it matters / what's new (EN)

According to the paper, the contribution is an OP-aware prediction network for satellite-mounted metasurface links under practical constraints (random satellite positions, ring-sector user placement, quantised phases) where earlier analysis assumed idealised settings. The headline accuracy figure depends on an undefined tolerance and is validated only against the authors' own theory and simulation.

## Why it matters / what's new (ZH)

据论文所述，其贡献是在实际约束（随机卫星位置、环形扇区用户分布、量化相位）下，为卫星搭载超表面链路提供感知 OP 的预测网络，而此前的分析假设的是理想化设置。其核心精度数字依赖于未定义的容差，且仅与作者自己的理论和仿真对照验证。

## Images

None.
