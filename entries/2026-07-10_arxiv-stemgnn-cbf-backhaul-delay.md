---
id: 2026-07-10_arxiv-stemgnn-cbf-backhaul-delay
date_published: 2026-07-09
date_found: 2026-07-10
type: academic-paper
technology: cellular
title_en: "Spatio-Temporal Scheduling Prediction Under Backhaul Delay for Resilient Coordinated Beamforming"
title_zh: "回传时延下的时空调度预测：让协作波束赋形在陈旧信息下保持增益"
url: "https://arxiv.org/abs/2607.08454"
source_quality: full
topics: [5G, massive-MIMO, CoMP, coordinated-beamforming, GNN, StemGNN, backhaul]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

This paper (arxiv 2607.08454, submitted July 9, 2026; Prashant Kumar Singh, Shubham Vaishnav, Ahmet Hasim Gökceoglu, Li Wang) attacks a quietly devastating failure mode of coordinated beamforming (CBF) in distributed 5G networks: **stale inter-cell scheduling information**. CBF-SLNR precoders need each neighbour's current user-scheduling vector to build interference-leakage covariance matrices — but that information arrives over backhaul with delay. The authors show that even **one TTI of delay drops CBF below the uncoordinated baseline** (138.93 vs 149.40 bits/s/Hz sum rate in their 48-subcarrier setup), because the precoder confidently steers nulls toward users who are no longer scheduled.

The fix is a **Spectral-Temporal Graph Neural Network (StemGNN) predictor** at each base station that forecasts the neighbours' current scheduling vectors from their delayed history, then feeds the predictions into the SLNR beamformer in place of the stale observations. A GRU + self-attention latent-correlation layer *learns* the inter-UE adjacency (which users tend to co-schedule); a Graph-Fourier-Transform block processes the spectral-temporal dynamics; per-user logits are thresholded to binary scheduling predictions. The design is permutation-invariant over UEs, so it survives variable user populations without retraining.

In a three-cell, 64-antenna, 60-user Quadriga UMi simulation with proportional-fair schedulers, StemGNN reaches **87.57% scheduling-prediction accuracy** (beating LSTM/GRU by ~1.8 pp at horizon 1, widening to 7.7 pp at horizons 3–5) and — the headline — restores the sum rate at τ=1 TTI to **152.24 bits/s/Hz, recovering 73% of the gap to the ideal zero-lag CBF**, with 9.6–14.4% sum-rate gains over the stale baseline and an 83% recovery of edge-user fairness loss in the narrowband configuration.

## Summary (ZH)

本文（arxiv 2607.08454，2026 年 7 月 9 日提交；Prashant Kumar Singh、Shubham Vaishnav、Ahmet Hasim Gökceoglu、Li Wang）针对分布式 5G 网络中协作波束赋形（CBF）的一个隐蔽而致命的失效模式：**小区间调度信息陈旧**。CBF-SLNR 预编码器需要邻小区当前的用户调度向量来构建干扰泄漏协方差矩阵——而该信息经回传链路到达时必有时延。作者证明**仅 1 个 TTI 的时延就会使 CBF 跌破无协作基线**（48 子载波配置下总速率 138.93 对 149.40 bits/s/Hz），因为预编码器会"自信地"朝已不再被调度的用户方向打零陷。

解法是在每个基站部署 **StemGNN（谱-时图神经网络）预测器**，从邻站的延迟历史中预测其当前调度向量，再将预测值替代陈旧观测输入 SLNR 波束赋形器。GRU + 自注意力的潜在相关层*学习*用户间邻接关系（哪些用户倾向于共同调度）；图傅里叶变换模块处理谱-时动态；逐用户 logit 经阈值化得到二值调度预测。设计对 UE 具备置换不变性，可适应用户数变化而无需重训。

在三小区、64 天线、60 用户的 Quadriga UMi 仿真（比例公平调度）中，StemGNN 达到 **87.57% 调度预测精度**（视野 1 超 LSTM/GRU 约 1.8 个百分点，视野 3–5 扩大到 7.7 个百分点），且——最关键的——在 τ=1 TTI 时将总速率恢复到 **152.24 bits/s/Hz，收复了与零时延理想 CBF 差距的 73%**，较陈旧基线总速率提升 9.6–14.4%，窄带配置下边缘用户公平性损失恢复 83%。

## Key technical points (EN)

- **Failure mode quantified**: 1 TTI of backhaul delay makes CBF-SLNR *worse than no coordination* — and counterintuitively, 1 TTI is more harmful than 3 or 5, because recent-looking misinformation steers nulls with high confidence.
- **StemGNN predictor**: learned inter-UE adjacency (GRU + self-attention), spectral graph convolution over scheduling history, binary-classification head (BCE loss); one predictor instance per neighbour BS.
- **Permutation invariance** over UEs → handles variable user populations without retraining.
- 87.57% prediction accuracy (horizon 1); advantage over RNN baselines grows with horizon (structural dependencies dominate).
- Sum-rate recovery: 73% of the lag-0 gap at τ=1; +9.58% (48 SC) / +14.35% (1 SC) vs stale baseline; 83% edge-fairness recovery.
- Setup: 3-cell massive MIMO (64 TX antennas), 60 users, Quadriga UMi channels, PF scheduling, 2000 TTIs.

## Key technical points (ZH)

- **失效模式量化**：1 个 TTI 的回传时延即令 CBF-SLNR *劣于无协作*——且反直觉地，1 TTI 比 3、5 个 TTI 更有害，因为"看似新鲜"的错误信息使零陷指向高置信错误方向。
- **StemGNN 预测器**：学习式用户间邻接（GRU + 自注意力）、调度历史上的谱图卷积、二分类头（BCE 损失）；每个邻站一个预测器实例。
- **UE 置换不变性** → 用户数变化无需重训。
- 视野 1 预测精度 87.57%；相对 RNN 基线的优势随视野增大（结构性依赖占主导）。
- 总速率恢复：τ=1 时收复零时延差距的 73%；较陈旧基线 +9.58%（48 子载波）/ +14.35%（单子载波）；边缘公平性恢复 83%。
- 场景：三小区大规模 MIMO（64 发射天线）、60 用户、Quadriga UMi 信道、PF 调度、2000 TTI。

## Why it matters / what's new (EN)

The KB's cellular-massive-mimo bin has coordination and beam-management entries, but nothing on the **information-staleness axis** — the practical reason distributed CoMP/CBF underdelivers in real deployments with non-ideal backhaul. The "1 TTI is worse than 5" finding is a genuinely useful design insight (confidence-weighted staleness, not just staleness, is the enemy). Methodologically this is the first KB entry marrying spectral-temporal GNN forecasting to a closed-loop precoding pipeline; it pairs naturally with 2026-07-10_arxiv-adorn-oran-drift-retraining (same-day cs.NI batch) as evidence that the ML-for-RAN conversation is shifting from "predict well" to "keep the *system* metric healthy when inputs degrade."

## Why it matters / what's new (ZH)

KB 的 cellular-massive-mimo 板块已有协作与波束管理条目，但**信息陈旧性维度**尚属空白——而这正是分布式 CoMP/CBF 在真实非理想回传部署中表现不及预期的现实原因。"1 TTI 比 5 TTI 更糟"是真正有用的设计洞见（敌人不是陈旧本身，而是带着高置信度的陈旧）。方法论上，这是 KB 首个将谱-时 GNN 预测嵌入闭环预编码流水线的条目；它与同日 cs.NI 批次的 2026-07-10_arxiv-adorn-oran-drift-retraining 相互印证：RAN 的 ML 讨论正从"预测得准"转向"输入退化时保持*系统*指标健康"。

## Images

![Prediction-assisted coordinated beamforming framework | 预测辅助的协作波束赋形框架](https://arxiv.org/html/2607.08454v1/x1.png)
![CBF-SLNR sum rate vs backhaul latency | CBF-SLNR 总速率随回传时延的变化](https://arxiv.org/html/2607.08454v1/x2.png)
