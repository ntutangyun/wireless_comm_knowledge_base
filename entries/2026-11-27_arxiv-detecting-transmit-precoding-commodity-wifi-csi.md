---
id: 2026-11-27_arxiv-detecting-transmit-precoding-commodity-wifi-csi
date_published: 2026-11-25
date_found: 2026-11-27
technology: wifi
type: academic-paper
title_en: "Detecting Transmit Precoding in Commodity Wi-Fi Channel State Information and Its Effect on Measured Channel Statistics"
title_zh: "检测商用 Wi-Fi 信道状态信息中的发射预编码及其对信道统计测量的影响"
url: "https://arxiv.org/abs/2611.33881"
source_quality: full
topics: [802.11, CSI, transmit beamforming, precoding detection, 802.11be, 802.11ax]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
This letter (Raghuram C. Kamath, Carlos Aldana and Kavya Guruswamy, Meta Platforms; arXiv eess.SP, submitted 25 November 2026 to IEEE Antennas and Wireless Propagation Letters) addresses a measurement-validity problem for channel state information (CSI) reported by commodity Wi-Fi receivers. For multi-stream data frames the access point may apply transmit beamforming, so the reported CSI describes the precoded channel HQ rather than the propagation channel H. The authors give a blind test that decides, from the CSI of a single PPDU, whether the frame was precoded with an eigen-beamformer, and they quantify how precoding changes the statistics one would compute from it.

The test uses two statistics over the valid subcarriers of a PPDU with at least two streams: the column coherence between the two stream columns of the CSI matrix, minimised over the receive-chain gain ratio (searched over -15 to +15 dB in 0.5 dB steps), and the fraction of subcarriers on which stream 1 has more power than stream 2. Under eigen-beamforming the stream columns are near-orthogonal and power-ordered, so the coherence goes toward 0 and the power-ordering fraction toward 1. For an unprecoded frame in i.i.d. Rayleigh fading the squared column coherence follows a Beta(1, Nr-1) law. The decision rule (coherence below 0.45 and power-ordering fraction above 0.9) needs no calibration, packet alignment or cyclic-shift removal, and tolerates gain changes between the sounding and data frames. It requires at least two streams; multi-user and deliberately randomised precoding are outside its scope.

In simulation (80 MHz, 501 subcarriers, 2 or 4 transmit antennas, compressed feedback with subcarrier grouping, feedback aging, antenna correlation, SNR 10-30 dB) the false-alarm rate is at most 2.9e-3 at the chosen thresholds; fresh feedback is detected in at least 99.9% of PPDUs at 30 dB, but with two transmit antennas and stale, coarse feedback most precoded frames are missed. Precoding scales the per-entry RMS delay spread by factors of 0.3 to 5.7, while the per-subcarrier Gram matrix H H^H is preserved, so quantities derived from it (Frobenius norm, singular values, receive correlation) transfer from precoded CSI whereas per-entry delay spread, coherence bandwidth and envelope-based K-factor do not.

On a commercial 2x2 802.11be client chipset, 880 of the 896 two-stream data frames sent by two APs (an 802.11ax AP and an 802.11be AP) at 5 and 6 GHz tested as precoded, including 601 of 605 802.11be frames that carried no beamforming flag. A third AP gave 0 of 5221 frames in 802.11n mode and 4003 of 5225 flagged frames in 802.11ac mode (fewer while walking); a fourth gave 3283 of 3296 with beamforming on and 0 of 3223 with it off.

## Summary (ZH)
这篇 Letter（Raghuram C. Kamath、Carlos Aldana、Kavya Guruswamy，Meta Platforms；arXiv eess.SP，2026 年 11 月 25 日提交，投稿 IEEE Antennas and Wireless Propagation Letters）处理商用 Wi-Fi 接收机上报 CSI 的测量有效性问题。对于多流数据帧，接入点可能做发射波束赋形，此时上报的 CSI 描述的是预编码后的信道 HQ，而非传播信道 H。作者给出一种盲检测方法，仅凭单个 PPDU 的 CSI 判断该帧是否经过特征波束赋形，并量化预编码对由此计算的统计量的改变。

该检验在至少两个空间流的 PPDU 的有效子载波上使用两个统计量：CSI 矩阵两个流列之间的列相干度（在接收链增益比上取最小，搜索范围 -15 至 +15 dB，步长 0.5 dB），以及流 1 功率大于流 2 的子载波占比。特征波束赋形下各流列近似正交且按功率排序，因此相干度趋向 0、功率排序占比趋向 1。对 i.i.d. 瑞利衰落下的未预编码帧，列相干度平方服从 Beta(1, Nr-1) 分布。判决规则（相干度低于 0.45 且功率排序占比高于 0.9）无需校准、包对齐或循环移位去除，并能容忍探测帧与数据帧之间的增益变化。该方法要求至少两个流；多用户与刻意随机化的预编码不在其范围内。

仿真（80 MHz、501 个子载波、2 或 4 根发射天线、带子载波分组的压缩反馈、反馈时延老化、天线相关、信噪比 10-30 dB）中，所选门限下虚警率不超过 2.9e-3；30 dB 时新鲜反馈在至少 99.9% 的 PPDU 中被检出，但在两根发射天线且反馈陈旧、量化粗糙时多数预编码帧会漏检。预编码使逐项 RMS 时延扩展缩放 0.3 至 5.7 倍，而逐子载波 Gram 矩阵 H H^H 保持不变，因此由它导出的量（Frobenius 范数、奇异值、接收相关）可从预编码 CSI 迁移，而逐项时延扩展、相干带宽和基于包络的 K 因子则不能。

在一款商用 2x2 802.11be 客户端芯片组上，两台 AP（一台 802.11ax、一台 802.11be）在 5 与 6 GHz 发送的 896 个双流数据帧中有 880 个被判为预编码，其中包括 605 个未带波束赋形标志的 802.11be 帧中的 601 个。第三台 AP 在 802.11n 模式下 5221 帧中检出 0 个，在 802.11ac 模式下 5225 个带标志帧中检出 4003 个（行走时更少）；第四台在波束赋形开启时 3296 帧中检出 3283 个，关闭时 3223 帧中检出 0 个。

## Key technical points (EN)
- Signal model: CSI = beta_k * G * H(k) * Q(k) * C(k) + N(k), with Q(k) the spatial mapping (identity for direct mapping, fixed up to cyclic shifts for spatial expansion, reconstructed from Givens angles for beamforming) and G the receive-chain gains.
- Decision rule: c_tilde < c_th = 0.45 and q > q_th = 0.9, with thresholds also swept (c_th 0.35-0.55, q_th 0.8-0.95) in the measured data.
- Simulated detection (Table I): unprecoded false alarm 2.6e-3 (Nt=2) and 2.9e-3 (Nt=4); beamformed with rho=1, Ng=4, (6,4)-bit feedback at least 0.999; rho=0.90, Ng=16, (4,2)-bit feedback 0.00-0.21 (Nt=2) and 0.47-0.81 (Nt=4).
- Effect on statistics (Table II): per-entry RMS delay spread ratio, precoded to propagation channel, of 1.33-1.65 (stream 1) and 2.21-3.34 (stream 2) in NLOS; in LOS stream 1 reads 0.45-0.84 and stream 2 2.24-5.69; the bias cannot be undone without Q, which the receiver does not observe.
- Beamforming flag: AP-B (802.11be) set the beamforming indication on none of its 605 EHT frames to the client, yet 318 of 322 frames at 80 MHz and all 283 at 160 MHz tested as precoded; the authors state the flag cannot replace the test.
- Measured false-alarm bound: the 3223 AP-D frames with beamforming off bound it below 9.3e-4 (95%); with AP-C's 802.11n frames, 8444 frames bound it below 3.6e-4 if AP-C does not precode in that mode.

## Key technical points (ZH)
- 信号模型：CSI = beta_k * G * H(k) * Q(k) * C(k) + N(k)，其中 Q(k) 为空间映射（直接映射时为单位阵，空间扩展时在循环移位意义下固定，波束赋形时由 Givens 角重构），G 为接收链增益。
- 判决规则：c_tilde < c_th = 0.45 且 q > q_th = 0.9；实测数据中还扫描了门限（c_th 0.35-0.55，q_th 0.8-0.95）。
- 仿真检测（表 I）：未预编码虚警 2.6e-3（Nt=2）与 2.9e-3（Nt=4）；rho=1、Ng=4、(6,4) 比特反馈的波束赋形帧检出率至少 0.999；rho=0.90、Ng=16、(4,2) 比特反馈时 Nt=2 为 0.00-0.21，Nt=4 为 0.47-0.81。
- 对统计量的影响（表 II）：预编码信道与传播信道逐项 RMS 时延扩展之比，NLOS 下流 1 为 1.33-1.65、流 2 为 2.21-3.34；LOS 下流 1 为 0.45-0.84、流 2 为 2.24-5.69；没有 Q（接收机不可观测）就无法消除该偏差。
- 波束赋形标志位：AP-B（802.11be）在发给客户端的 605 个 EHT 帧上都没有置位波束赋形指示，但 80 MHz 的 322 帧中有 318 帧、160 MHz 的 283 帧全部被判为预编码；作者指出该标志不能替代此检验。
- 实测虚警上界：AP-D 关闭波束赋形的 3223 帧给出低于 9.3e-4（95%）的上界；若 AP-C 在 802.11n 模式下不做预编码，则连同其 802.11n 帧共 8444 帧给出低于 3.6e-4 的上界。

## Why it matters / what's new (EN)
The paper's own framing is that CSI from commodity Wi-Fi receivers is increasingly used as a low-cost sounder, and that the transmitter side adds a layer of artefact that has received less attention than receiver artefacts; the authors say they are not aware of work that quantifies how routine transmit beamforming alters CSI-derived channel statistics or that lets a campaign tell whether its CSI was precoded. It is the companion letter of 2026-11-27_arxiv-device-referred-channel-sounding-commodity-wifi-csi-body-worn, which cites it for the precoded-frame caution. Both are submitted manuscripts, not yet peer reviewed.

## Why it matters / what's new (ZH)
论文自述的背景是：商用 Wi-Fi 接收机的 CSI 正越来越多地被当作低成本探测仪使用，而发射端带来的伪影层比接收端伪影受到的关注更少；作者称，据其所知尚无工作量化常规发射波束赋形如何改变由 CSI 导出的信道统计，也没有让测量活动判断其 CSI 是否经过预编码的方法。它是 2026-11-27_arxiv-device-referred-channel-sounding-commodity-wifi-csi-body-worn 的配套 Letter，后者在预编码帧的注意事项中引用了它。两篇均为已投稿稿件，尚未经同行评审。

## Images
![Column coherence CDFs and measured coherence versus power-ordering fraction with decision region | 列相干度分布及实测相干度与功率排序占比（含判决区域）](https://arxiv.org/html/2611.33881v1/fig2.png)
