---
id: 2026-11-10_arxiv-delay-doppler-sync-distributed-uplink-interference-nulling-leo
date_published: 2026-11-04
date_found: 2026-11-10
technology: satellite
type: academic-paper
title_en: "Delay-Doppler Synchronization for Distributed Uplink Interference Nulling in LEO Networks"
title_zh: "LEO 网络分布式上行干扰置零的时延-多普勒同步"
url: "https://arxiv.org/abs/2611.06719"
source_quality: full
topics: [LEO, uplink-interference, interference-nulling, delay-Doppler, synchronization, multi-satellite-cooperation]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Tancovici, Jia, Mezzavilla, Barati and Rangan (arXiv, submitted 4 Nov 2026) consider cooperation among LEO satellites to suppress uplink interference that a single onboard array struggles to remove. Coherent cancellation across satellites requires compensating the relative delay and Doppler of a common interferer. The paper analyzes two-branch interference nulling with finite training and derives a closed-form approximation of the mean residual interference-to-noise ratio (INR) that separates wrong acquisition, local synchronization errors and weight-learning losses, tying performance to input INR, branch power imbalance, training length and effective search size.

Under a Gaussian surrogate with small errors and approximately unbiased refinement, correct acquisition gives a high-INR plateau of 2/N_v (N_v is the valid training length); synchronization and weight learning contribute equally, while persistent alignment bias adds a penalty growing with input power. Monte Carlo comparison of dense FFT/zoom against coarse FFT/gradient acquisition, both with matched final FIR refinement (fixed-geometry case: 96-tap FIR, 1,536-sample records with 1,222 valid, search range ±600 samples and ±20 kHz), shows both approach the predicted plateau at high input INR; coarse search cuts measured search time 6.7x at about a 0.7 dB acquisition-threshold penalty. A 24-hour Starlink-geometry experiment (720 snapshots at 120 s, 10 GHz, 192-tap FIR, 2,916-sample records, ±0.30 ms / ±125 kHz search, 716 retained) supports comparable nulling under changing geometry. The authors list desired-user synchronization, signal-preserving combining and equalization as future work.

## Summary (ZH)

Tancovici、Jia、Mezzavilla、Barati 与 Rangan（arXiv，2026 年 11 月 4 日提交）研究通过 LEO 卫星间协作抑制单个星载阵列难以消除的上行干扰。跨卫星相干抵消需要补偿共同干扰源的相对时延与多普勒。论文分析有限训练下的双支路干扰置零，推导平均残余干扰噪声比（INR）的闭式近似，将错误捕获、局部同步误差与权重学习损失分开，并将性能与输入 INR、支路功率失衡、训练长度和有效搜索规模联系起来。

在小误差且近似无偏细化的高斯替代模型下，正确捕获时存在 2/N_v 的高 INR 平台（N_v 为有效训练长度）；同步与权重学习的贡献相等，持续的对齐偏差则带来随输入功率增长的代价。蒙特卡洛实验比较了稠密 FFT/缩放与粗 FFT/梯度两种捕获方式（均配合匹配的最终 FIR 细化；固定几何场景：96 抽头 FIR、1,536 样点记录（有效 1,222）、时延搜索 ±600 样点、多普勒 ±20 kHz），二者在高输入 INR 下均逼近预测平台；粗搜索使实测搜索时间缩短 6.7 倍，捕获门限约增加 0.7 dB。基于 24 小时 Starlink 几何的实验（720 个快照、间隔 120 s、10 GHz、192 抽头 FIR、2,916 样点记录、±0.30 ms/±125 kHz 搜索、保留 716 个）表明在几何变化下可获得相当的置零效果。作者将期望用户同步、保信号合并与均衡列为后续工作。

## Key technical points (EN)

- Setting: cooperative LEO uplink interference nulling needs relative delay and Doppler of the common interferer to be compensated for coherent cancellation.
- Analysis: closed-form mean residual INR separating wrong acquisition, synchronization error and weight-learning loss.
- Plateau: 2/N_v with correct acquisition; persistent alignment bias adds a penalty growing with input power.
- Comparison: dense FFT/zoom vs coarse FFT/gradient acquisition; coarse search is 6.7x faster for about 0.7 dB acquisition penalty.
- Starlink-geometry check: 720 snapshots at 10 GHz (716 retained) show comparable nulling under changing geometry.

## Key technical points (ZH)

- 背景：LEO 协作上行干扰置零需补偿共同干扰源的相对时延与多普勒以实现相干抵消。
- 分析：闭式平均残余 INR，区分错误捕获、同步误差与权重学习损失。
- 平台：正确捕获时为 2/N_v；持续对齐偏差带来随输入功率增长的代价。
- 比较：稠密 FFT/缩放与粗 FFT/梯度捕获；粗搜索快 6.7 倍，捕获门限代价约 0.7 dB。
- Starlink 几何检验：10 GHz、720 个快照（保留 716 个），变化几何下置零效果相当。

## Why it matters / what's new (EN)

The KB covers LEO uplink access (IRIS random access) and downlink scheduling but not multi-satellite cooperative uplink interference suppression. This entry adds that physical-layer synchronization problem with an analytical residual-INR model. Desired-user synchronization and equalization are explicitly left to future work, so it addresses only the interference branch.

## Why it matters / what's new (ZH)

KB 已涵盖 LEO 上行接入（IRIS 随机接入）与下行调度，但没有多卫星协作的上行干扰抑制。本条目补充这一物理层同步问题及其残余 INR 解析模型。期望用户同步与均衡被明确留作后续工作，因此仅涉及干扰支路。

## Images

