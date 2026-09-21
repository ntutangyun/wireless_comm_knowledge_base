---
id: 2026-09-21_arxiv-spacediffusion-generate-and-forward-leo
date_published: 2026-09-17
date_found: 2026-09-21
technology: satellite
type: academic-paper
title_en: "SpaceDiffusion: Over-the-Orbit Diffusion for Space Generate-and-Forward Communications"
title_zh: "SpaceDiffusion：面向空间生成转发通信的星上扩散模型"
url: "https://arxiv.org/abs/2609.20899"
source_quality: full
topics: [generate-and-forward, diffusion-model, on-orbit-AI, uplink-relay, DDIM, energy-harvesting]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 4
---

## Summary (EN)

Huang, Wang, and Huang (University of Hong Kong) and Letaief (Hong Kong University of Science and Technology) submitted this paper on 2026-09-17. It targets a bottleneck in satellite uplinks: ground devices have limited transmit power and antenna apertures, producing low data rates and high packet-error rates on the uplink to a satellite relay. Conventional decode-and-forward (DF) relaying handles lost or corrupted packets via a stop-and-wait ACK/NACK retransmission protocol, which -- for a satellite relay -- carries a round-trip-time (RTT) penalty on top of the retransmission itself.

The paper proposes "generate-and-forward" (GF), a relaying paradigm in which the satellite uses on-orbit generative AI to reconstruct corrupted or lost data before forwarding it, avoiding the need for uplink retransmission and its RTT penalty. The concrete instantiation, SpaceDiffusion, targets satellite-assisted image transmission: it formulates token-domain image recovery as an inverse problem that accounts for both packet loss (masking) and compression-quantization noise, and derives a "channel-distortion-aware" modification to the standard denoising diffusion implicit model (DDIM) update — a plug-in correction term added to the conventional DDIM step, decomposing the posterior score into a data-prior component (the usual DDIM term) and a channel-specific correction determined by the actually-received signal. This lets one pretrained diffusion model adapt to different packet-loss and compression conditions without retraining. The paper also derives a closed-form "diffusion-step activation threshold" (comparing the token-domain MSE upper bound at each reverse diffusion step against the error of forwarding corrupted tokens directly) predicting when running more generative reverse steps is worth it, and an energy-aware early-exit policy that either executes the maximum feasible number of reverse steps given available onboard solar/battery energy and time before the downlink pass, or falls back to conventional DF if the energy/time budget cannot reach the minimum useful threshold.

Evaluated on the AFHQ (15,000 images) and Kodak datasets at a 5-degree elevation angle, 0.1 packet error rate, ~0.1 bits-per-pixel compression, and quantization step 0.8: SpaceDiffusion holds a roughly constant end-to-end latency of 6-7 seconds/image across LEO altitudes, versus DF baselines that grow with altitude (JPEG2000+DF exceeds 300 seconds/image at high altitude), for an overall 4-50x latency reduction versus the DF baselines at matched ~0.2 LPIPS perceptual-quality target; part of this comes from needing only 20 reverse diffusion steps versus 100 for a prior DPS-based GF baseline (cutting that component's computation from 23.5 to 3.9 seconds/image), and part from replacing a 7.8-second RTT component with 3.9 seconds of local diffusion computation (about a 40% reduction in that component). On reconstruction quality at a 0.1 packet error rate, SpaceDiffusion achieves an LPIPS of about 0.22, versus about 0.30 for a DPS-based GF baseline and about 0.39 for non-generative tokenization without reconstruction. At a target LPIPS of about 0.25, SpaceDiffusion requires about 15 dB less uplink transmit power than the non-generative compression baseline to hit the same perceptual-quality target.

## Summary (ZH)

Huang、Wang 与 Huang（香港大学）及 Letaief（香港科技大学）于 2026 年 9 月 17 日提交本文，聚焦卫星上行链路的一个瓶颈：地面终端受限于发射功率与天线孔径，导致上行至卫星中继的数据速率低、丢包率高。传统解码转发（DF）中继通过"停等"式 ACK/NACK 重传协议处理丢失或损坏的分组，而对卫星中继而言，这种方式除重传本身外还需承受往返时延（RTT）带来的额外代价。

论文提出"生成转发"（Generate-and-Forward, GF）这一中继范式：卫星利用星上生成式 AI 在转发前重建损坏或丢失的数据，从而避免上行重传及其 RTT 代价。具体实现方案 SpaceDiffusion 面向卫星辅助图像传输：将 token 域的图像恢复问题表述为一个同时考虑丢包（掩码）与压缩量化噪声的逆问题，并推导出一种"信道失真感知"的去噪扩散隐式模型（DDIM）更新修改方案——在传统 DDIM 步骤中加入一个插件式修正项，将后验分数分解为数据先验分量（即常规 DDIM 项）与由实际接收信号决定的信道相关修正分量。这使得单个预训练扩散模型无需重新训练即可适应不同的丢包与压缩条件。论文还推导出一个闭式的"扩散步数激活阈值"（在每个反向扩散步比较 token 域均方误差上界与直接转发损坏 token 所产生误差），用以预测何时执行更多生成式反向步骤是值得的；并提出一种能量感知的提前退出策略：在星上太阳能/电池能量及下行过境前可用时间允许的范围内执行尽可能多的反向步骤，若能量/时间预算无法达到最低有效阈值，则退回传统 DF 方式。

在 AFHQ（15,000 张图像）与 Kodak 数据集上，仰角设为 5 度、丢包率 0.1、压缩比特率约 0.1 比特/像素、量化步长 0.8 的条件下评估：SpaceDiffusion 在各 LEO 高度下保持大致恒定的端到端时延（6–7 秒/图像），而 DF 基线的时延随高度增加而增长（JPEG2000+DF 在高轨道高度下超过 300 秒/图像），在匹配约 0.2 LPIPS 感知质量目标时，相对 DF 基线总体实现 4–50 倍的时延降低；这一改善部分来自仅需 20 步反向扩散步骤（相较此前基于 DPS 的 GF 基线所需的 100 步），将该部分计算时延从 23.5 秒/图像降至 3.9 秒/图像；部分来自以 3.9 秒的本地扩散计算替代 7.8 秒的 RTT 分量（该部分降低约 40%）。在丢包率为 0.1 时的重建质量方面，SpaceDiffusion 的 LPIPS 约为 0.22，而基于 DPS 的 GF 基线约为 0.30，未经生成式重建的非生成式 token 化方案约为 0.39。在目标 LPIPS 约为 0.25 时，SpaceDiffusion 相较非生成式压缩基线，在达到相同感知质量目标的前提下可节省约 15 dB 的上行发射功率。

## Key technical points (EN)

- **New relay paradigm**: "generate-and-forward" (GF) — satellite reconstructs corrupted/lost uplink tokens via on-orbit generative AI before forwarding, avoiding the ACK/NACK retransmission RTT penalty inherent to decode-and-forward (DF).
- **Channel-distortion-aware DDIM**: reformulates token recovery as an inverse problem incorporating a packet-loss mask and compression-noise covariance; adds a plug-in channel-aware correction term to the standard DDIM reverse step, letting one pretrained model handle varying channel/compression conditions without retraining.
- **Diffusion-step activation threshold (Corollary 4.1)**: closed-form threshold t_threshold comparing per-step token-domain MSE upper bound against direct-forwarding error, predicting the minimum reverse steps needed for GF to beat DF.
- **Energy-aware early-exit policy**: maximizes executable reverse diffusion steps subject to a minimum-steps threshold, available pre-downlink execution time, and energy-causality (harvested + battery reserve) constraints; falls back to N*=0 (plain DF) if the budget cannot reach the threshold.
- **Latency**: ~6-7 s/image across LEO altitudes (600-2000 km) at 5-degree elevation and 0.1 packet error rate, vs. DF+retransmission exceeding 300 s/image at high altitude for JPEG2000 — a 4-50x reduction; 20 vs. 100 reverse steps versus a prior DPS-based GF baseline (23.5s -> 3.9s of that component); RTT component (7.8s) replaced by 3.9s of local computation (~40% cut).
- **Reconstruction quality / power**: LPIPS ~0.22 (SpaceDiffusion) vs. ~0.30 (DPS-based GF) vs. ~0.39 (non-generative tokenization) at 0.1 packet error rate; ~15 dB less uplink transmit power than the non-generative baseline at a target LPIPS of ~0.25. Datasets: AFHQ (15,000 images), Kodak.

## Key technical points (ZH)

- **新中继范式**："生成转发"（GF）——卫星在转发前利用星上生成式 AI 重建损坏/丢失的上行 token，避免解码转发（DF）固有的 ACK/NACK 重传 RTT 代价。
- **信道失真感知 DDIM**：将 token 恢复问题重新表述为同时纳入丢包掩码与压缩噪声协方差的逆问题；在标准 DDIM 反向步骤中加入插件式信道感知修正项，使单个预训练模型无需重新训练即可应对不同信道/压缩条件。
- **扩散步数激活阈值（推论 4.1）**：闭式阈值 t_threshold，比较每步 token 域均方误差上界与直接转发误差，预测 GF 优于 DF 所需的最少反向步数。
- **能量感知提前退出策略**：在满足最少步数阈值、下行前可用执行时间及能量因果性（已收集能量+电池储备）约束下，最大化可执行的反向扩散步数；若预算无法达到阈值则退回 N*=0（即普通 DF）。
- **时延**：在 5 度仰角、丢包率 0.1 条件下，各 LEO 高度（600–2000 公里）约为 6–7 秒/图像，而 DF+重传方案中 JPEG2000 在高轨道高度下超过 300 秒/图像——降低 4–50 倍；相较此前基于 DPS 的 GF 基线所需的 100 步，仅需 20 步（该部分计算时延从 23.5 秒降至 3.9 秒）；以 3.9 秒的本地计算替代 7.8 秒的 RTT 分量（降低约 40%）。
- **重建质量/功耗**：丢包率 0.1 时，LPIPS 约为 0.22（SpaceDiffusion）对比约 0.30（基于 DPS 的 GF）与约 0.39（非生成式 token 化）；在目标 LPIPS 约 0.25 时，相较非生成式基线可节省约 15 dB 上行发射功率。数据集：AFHQ（15,000 张图像）、Kodak。

## Why it matters / what's new (EN)

This KB's sat-ai bin has covered onboard AI for routing and image processing, but this is the first entry proposing a new relay paradigm category (generate-and-forward, as distinct from decode-and-forward or the earlier DPS-based generative-forward baseline it compares against) with a formal theoretical backbone: a channel-distortion-aware diffusion-model derivation, a closed-form activation threshold predicting when the approach helps, and an energy-aware onboard scheduling policy tying the generative computation budget to the satellite's own solar/battery constraints.

## Why it matters / what's new (ZH)

知识库现有的 sat-ai 主题条目此前涉及用于路由与图像处理的星载 AI；本文是首条提出一种新中继范式类别（生成转发，区别于解码转发以及其对比的、更早的基于 DPS 的生成式转发基线）并给出完整理论支撑的条目：包括信道失真感知的扩散模型推导、预测该方法何时有效的闭式激活阈值，以及将生成式计算预算与卫星自身太阳能/电池约束相绑定的能量感知星上调度策略。

## Images

None.
