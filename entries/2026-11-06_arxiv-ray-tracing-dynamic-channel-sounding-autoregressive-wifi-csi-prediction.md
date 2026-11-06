---
id: 2026-11-06_arxiv-ray-tracing-dynamic-channel-sounding-autoregressive-wifi-csi-prediction
date_published: 2026-11-04
date_found: 2026-11-06
technology: wifi
type: academic-paper
title_en: "Ray-Tracing-Based Dynamic Channel Sounding With Autoregressive Wi-Fi CSI Prediction"
title_zh: "基于射线追踪的动态信道探测：自回归 Wi-Fi CSI 预测"
url: "https://arxiv.org/abs/2611.05970"
source_quality: full
topics: [802.11bn, channel sounding, CSI prediction, Transformer, Sionna, beamforming, MU-MIMO]
topic_primary: ai-for-wifi
topics_secondary: [wifi8-uhr]
novelty_score: 3
---

## Summary (EN)

The paper (arXiv:2611.05970, cs.IT; Lyutianyang Zhang, Yixin Ying, Liu Cao, Vanlin Sathya, Jinke Ren and Shuguang Cui, from Chongqing University, City University of Hong Kong (Dongguan), Celona and CUHK-Shenzhen) addresses the tradeoff in Wi-Fi MIMO channel sounding between CSI accuracy and acquisition overhead. Device mobility causes channel aging, and prediction errors accumulate when a predictor is run autoregressively across the sounding interval. The authors generate channels with Sionna ray tracing because standardized statistical models may not capture environment-specific dynamics, and they motivate AI/ML-assisted sounding by pointing to IEEE 802.11bn and related work.

The framework has three parts. A causal Transformer takes 60 history snapshots of tokenized CSI (7,744 values per snapshot), optionally with the STA position, and predicts autoregressively; it is trained with temporal rotary position embedding (RoPE) and a Huber loss. A theorem gives a per-stream SINR lower bound under a Frobenius-norm error bound. A throughput-maximizing sounding-interval selection problem is then solved with a cumulative-sum and binary-search algorithm that the authors analyze as linear in complexity.

The evaluation uses a 10 x 10 x 3.2 m room with one fixed AP and one moving STA, Sionna RT 2.0.1 for channels and MATLAB WLAN Toolbox for the link-level simulation: 8 transmit and 2 receive antennas, 242 subcarriers at 20 MHz, 0.1 ms sampling, six decoder layers, embedding width 128, 8 heads. Linear and circular trajectories train the model and a cosine trajectory is the transfer target. RoPE with Huber loss reaches an NMSE of 4.27e-5 against 4.32e-4 for a 1-ms delayed-CSI baseline; zero-shot on the cosine trajectory the NMSE is 91.65% lower than delayed CSI, and transfer learning lowers it a further 38.20%. In single-STA, two-stream link-level runs, goodput with predicted CSI versus stale CSI is 102.47 vs 61.25 Mb/s (linear), 123.64 vs 58.12 Mb/s (circular) and 30.52 vs 13.93 Mb/s (cosine), against ground-truth CSI at 202.67 to 244.89 Mb/s.

## Summary (ZH)

该论文（arXiv:2611.05970，cs.IT；作者 Lyutianyang Zhang、Yixin Ying、Liu Cao、Vanlin Sathya、Jinke Ren、Shuguang Cui，来自重庆大学、香港城市大学（东莞）、Celona 与香港中文大学（深圳））讨论 Wi-Fi MIMO 信道探测中 CSI 精度与获取开销之间的权衡。设备移动造成信道老化，而预测器沿探测间隔自回归运行时误差会累积。作者用 Sionna 射线追踪生成信道，理由是标准化的统计模型可能无法刻画具体环境的动态特性，并以 IEEE 802.11bn 及相关工作作为 AI/ML 辅助探测的动机。

框架分三部分：因果 Transformer 以 60 个历史快照的 CSI token（每个快照 7,744 个值）为输入，可选加入 STA 位置，自回归预测，训练采用时间旋转位置编码（RoPE）与 Huber 损失；一个定理给出在 Frobenius 范数误差界下的单流 SINR 下界；随后以累计和加二分搜索求解吞吐最大化的探测间隔选择问题，作者分析其复杂度为线性。

评估使用 10 x 10 x 3.2 m 房间、一个固定 AP 与一个移动 STA，信道由 Sionna RT 2.0.1 生成，链路级仿真使用 MATLAB WLAN Toolbox：8 发 2 收天线，20 MHz 带宽 242 个子载波，0.1 ms 采样，6 层解码器，嵌入宽度 128，8 个头。线性与圆形轨迹用于训练，余弦轨迹作为迁移目标。RoPE 加 Huber 损失的 NMSE 为 4.27e-5，而 1 ms 延迟 CSI 基线为 4.32e-4；在余弦轨迹上零样本 NMSE 比延迟 CSI 低 91.65%，迁移学习再降低 38.20%。在单 STA、双流链路级仿真中，预测 CSI 与过时 CSI 的吞吐分别为 102.47 对 61.25 Mb/s（线性）、123.64 对 58.12 Mb/s（圆形）、30.52 对 13.93 Mb/s（余弦），真值 CSI 为 202.67 至 244.89 Mb/s。

## Key technical points (EN)

- Predictor: causal Transformer, 60-snapshot history, 7,744 tokenized CSI values per snapshot, optional STA position input; temporal RoPE and Huber loss; autoregressive roll-out.
- Theoretical piece: Theorem 1 gives a per-stream SINR lower bound under a Frobenius-norm CSI error bound; the authors state the bound is sufficient, not necessary.
- Optimization: sounding-interval selection maximizing predicted average throughput under SINR constraints, solved by cumulative sums and binary search.
- Simulation: Sionna RT 2.0.1 plus MATLAB WLAN Toolbox; 8x2 MIMO, 20 MHz, 242 subcarriers; one AP, one STA, one room.
- NMSE: 4.27e-5 (RoPE + Huber) vs 4.32e-4 (1-ms delayed CSI); cosine zero-shot 91.65% lower than delayed CSI; transfer learning a further 38.20% lower.
- Goodput gain of predicted over stale CSI: 67.3% (linear), 112.7% (circular), 119.1% (cosine).
- Stated limitations: simulation only; autoregressive error grows over the horizon (to 1.3e-1 NMSE over 30 steps for linear motion), so a finite prediction horizon is argued for; predicted CSI sometimes underperforms stale CSI (for example 31 to 40 ms and 72 to 81 ms for linear motion).

## Key technical points (ZH)

- 预测器：因果 Transformer，60 个快照历史，每快照 7,744 个 CSI token，可选 STA 位置输入；时间 RoPE 与 Huber 损失；自回归滚动预测。
- 理论部分：定理 1 给出在 Frobenius 范数 CSI 误差界下的单流 SINR 下界；作者说明该界为充分而非必要条件。
- 优化：在 SINR 约束下最大化预测平均吞吐的探测间隔选择，以累计和与二分搜索求解。
- 仿真：Sionna RT 2.0.1 加 MATLAB WLAN Toolbox；8x2 MIMO，20 MHz，242 子载波；一个 AP、一个 STA、一个房间。
- NMSE：4.27e-5（RoPE + Huber）对 4.32e-4（1 ms 延迟 CSI）；余弦轨迹零样本比延迟 CSI 低 91.65%；迁移学习再降低 38.20%。
- 预测 CSI 相对过时 CSI 的吞吐增益：67.3%（线性）、112.7%（圆形）、119.1%（余弦）。
- 作者列出的局限：仅为仿真；自回归误差随预测视距增长（线性运动 30 步内 NMSE 增至 1.3e-1），故主张有限预测视距；预测 CSI 有时不如过时 CSI（例如线性运动的 31 至 40 ms 与 72 至 81 ms）。

## Why it matters / what's new (EN)

The paper frames the CSI-aging problem of explicit sounding as a joint prediction-and-scheduling decision, with a closed-form-style SINR guarantee tying prediction error to the choice of sounding interval, rather than only reporting prediction accuracy. It sits beside the KB's other AI-for-Wi-Fi work on CSI and sounding; it differs in using a ray-traced, environment-specific channel source and in reporting link-level goodput from a standard WLAN toolbox. All results come from one room, one AP and one STA in simulation.

## Why it matters / what's new (ZH)

该论文把显式探测的 CSI 老化问题表述为预测与调度的联合决策，并用一个把预测误差与探测间隔选择联系起来的 SINR 保证来支撑，而不只是报告预测精度。它与本 KB 中其他关于 CSI 与探测的 AI-for-Wi-Fi 工作相邻；不同之处在于使用射线追踪得到的、针对具体环境的信道源，并用标准 WLAN 工具箱报告链路级吞吐。所有结果均来自仿真中的一个房间、一个 AP 和一个 STA。

## Images

![Ray-tracing geometry used to generate the channels | 用于生成信道的射线追踪几何](https://arxiv.org/html/2611.05970v1/frame.png)
![Transformer predictor and training pipeline | Transformer 预测器与训练流程](https://arxiv.org/html/2611.05970v1/transformer.png)
