---
id: 2026-11-27_arxiv-device-referred-channel-sounding-commodity-wifi-csi-body-worn
date_published: 2026-11-25
date_found: 2026-11-27
technology: wifi
type: academic-paper
title_en: "Device-Referred Channel Sounding With Commodity Wi-Fi Receivers: Error Budget and Body-Worn Measurements at 5 and 6 GHz"
title_zh: "基于商用 Wi-Fi 接收机的设备参考信道探测：误差预算与 5/6 GHz 佩戴式测量"
url: "https://arxiv.org/abs/2611.34769"
source_quality: full
topics: [802.11, CSI, channel sounding, delay spread, body-worn, 802.11be]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
The paper (Raghuram C. Kamath, Carlos Aldana and Kavya Guruswamy, all with Meta Platforms; arXiv eess.SP, submitted 25 November 2026 to IEEE Transactions on Antennas and Propagation as a communication, with a companion letter) asks whether a commodity Wi-Fi receiver that reports per-frame channel state information (CSI) can serve as a "device-referred" channel sounder, i.e. one that sees the channel through the product's own antennas and, for a wearable, the user's body. Its answer is a processing chain of five corrections, followed by estimators of RMS delay spread, coherence bandwidth, Rician K-factor and maximum Doppler frequency.

The corrections are: subcarrier mapping (discard the DC residual and padding, interpolate DC), receive-chain order (detect and undo unreported exchanges of antenna-to-chain assignment, compared against the 60 nearest packets), per-packet alignment (joint estimate of timing slope and common phase), received-signal-strength referencing (scale each packet and chain so its mean subcarrier power follows the reported per-chain RSSI), and removal of the analysis window's own response in quadrature (35.3 ns for 53 subcarriers). Beacons are used as the sounding frames because they are non-HT broadcast frames sent every 102.4 ms and are not beamformed; their CSI covers the 53 subcarriers of the primary 20 MHz channel.

The error budget uses synthetic ground truth that reproduces a commercial receiver's impairments (random timing offset, AGC steps of 2.7 dB standard deviation, 30 dB SNR, 5-10% missed beacons, exponential power delay profiles with RMS delay spread from 15 to 150 ns). With no corrections the RMS delay spread reads up to 191% high and the coherence bandwidth falls to about half of the true value; with all five the median delay-spread bias is between -6% and +14%. Without alignment, the correlation over one beacon interval is 0.03 for every Doppler value, so Doppler cannot be measured; without the RSSI reference, AGC steps read as fading and the K-factor collapses.

For measurements, a two-chain commercial client worn on the head recorded beacons from an IEEE 802.11be AP at 5745 MHz and 6135 MHz at six indoor sites (two laboratories, a conference room, two corridors, a lobby), 5-10 m from the AP, with the person standing or walking. Across seven APs and eight capture sets the chain gives RMS delay spreads of 24-96 ns; walking lowers the median correlation over one beacon interval from 0.85 to 0.15, near the estimator's floor. The paper also reports that unprecoded data frames gave 0.2-1.2 times the beacons' delay spread on the same channel, so the two frame types should not be pooled.

## Summary (ZH)
论文（Raghuram C. Kamath、Carlos Aldana、Kavya Guruswamy，均来自 Meta Platforms；arXiv eess.SP，2026 年 11 月 25 日提交，投稿 IEEE Transactions on Antennas and Propagation 的 Communication，另有配套 Letter）研究：能否把按帧上报信道状态信息（CSI）的商用 Wi-Fi 接收机当作“设备参考”（device-referred）信道探测仪，即通过产品自身天线（可穿戴时还包括用户身体）观察信道。其答案是一条包含五项校正的处理链，随后是 RMS 时延扩展、相干带宽、莱斯 K 因子和最大多普勒频率的估计器。

五项校正为：子载波映射（丢弃 DC 残留与填充值，DC 由邻点插值）、接收链顺序（检测并撤销未上报的天线—链路分配互换，与最近的 60 个包比较）、逐包对齐（联合估计时间斜率与公共相位）、接收信号强度参考（将每个包、每条链的平均子载波功率缩放到上报的各链 RSSI）、以及在平方和意义下去除分析窗自身的响应（53 个子载波时为 35.3 ns）。探测帧选用信标帧：它们是非 HT 的广播帧，每 102.4 ms 发送一次，不做波束赋形；其 CSI 覆盖主 20 MHz 信道的 53 个子载波。

误差预算基于复现商用接收机缺陷的合成真值（随机定时偏移、标准差 2.7 dB 的 AGC 跳变、30 dB 信噪比、5-10% 信标丢失、RMS 时延扩展 15 至 150 ns 的指数功率时延谱）。不做任何校正时，RMS 时延扩展读数最多偏高 191%，相干带宽降至真值的约一半；五项校正全部应用后，时延扩展的中位偏差在 -6% 至 +14% 之间。没有对齐时，一个信标间隔上的相关系数对任何多普勒值都是 0.03，多普勒无法测量；没有 RSSI 参考时，AGC 跳变被误读为衰落，K 因子塌缩。

实测方面，一台戴在头部的双链商用客户端，在 6 个室内地点（两个实验室、一个会议室、两条走廊、一个大厅）、距 AP 5-10 m 处，于 5745 MHz 与 6135 MHz 记录一台 IEEE 802.11be AP 的信标，佩戴者站立或行走。跨 7 台 AP、8 组采集，处理链得到的 RMS 时延扩展为 24-96 ns；行走使一个信标间隔上的中位相关系数从 0.85 降到 0.15，接近估计器的下限。论文还报告，同一信道上未预编码数据帧的时延扩展为信标的 0.2-1.2 倍，因此两类帧不应合并统计。

## Key technical points (EN)
- Five corrections: subcarrier mapping, receive-chain order, per-packet alignment, RSSI referencing, window-response removal (Eq. 2: tau_rms = sqrt(tau_meas^2 - tau_w^2)).
- Estimators: power delay profile from a 256-point transform of Hann-windowed CSI (12.5 ns bins), threshold 25 dB below the peak; coherence bandwidth B_c,50 (censored at the 16.25 MHz span); K-factor from an envelope-moment estimate; maximum Doppler from a fit of c*|J0(2*pi*f_D*tau)|; confidence intervals by moving-block bootstrap.
- Table I (static channels, 150 realizations per point): all corrections give median tau_rms bias of -6, -4, -1, -2, -5% at true values of 15, 30, 50, 100, 150 ns; no corrections give +191, +72, +36, +26, +20%; B_c,50 ratio 1.00 with all corrections, 0.50 (30 ns) and 0.57 (50 ns) with none.
- Measured receiver response is not flat: per-chain power spectrum departs from flat by 3.3-3.4 dB (5 GHz) and 4.3-4.7 dB (6 GHz) peak to peak; in synthetic runs this raises tau_rms by 18-26% at 15 ns and 2% at 50 ns, a bias the error budget's flat-response rows do not include.
- Site survey (Table II, AP-B, primary 20 MHz): RMS delay spread up to 96 ns (site S4, both bands); twelve 100-s captures of AP-B were used to study how many consecutive or random beacons are needed to stay close to the full-capture value.
- Frame-type caution: multi-stream data frames are often transmit-beamformed, which biases per-entry delay spread and coherence bandwidth; the companion letter (arXiv 2611.33881) gives a blind test for this.

## Key technical points (ZH)
- 五项校正：子载波映射、接收链顺序、逐包对齐、RSSI 参考、窗响应去除（式 2：tau_rms = sqrt(tau_meas^2 - tau_w^2)）。
- 估计器：对加汉宁窗的 CSI 做 256 点变换得到功率时延谱（12.5 ns 间隔），阈值为峰值以下 25 dB；相干带宽 B_c,50（在 16.25 MHz 跨度处截断）；K 因子采用包络矩估计；最大多普勒由对 c*|J0(2*pi*f_D*tau)| 的拟合得到；置信区间采用滑动块自助法。
- 表 I（静态信道，每点 150 次实现）：全部校正时，真值 15、30、50、100、150 ns 对应的 tau_rms 中位偏差为 -6、-4、-1、-2、-5%；不做校正时为 +191、+72、+36、+26、+20%；B_c,50 比值在全部校正时为 1.00，不校正时为 0.50（30 ns）与 0.57（50 ns）。
- 实测接收机响应并不平坦：各链功率谱相对平坦的峰峰偏差在 5 GHz 为 3.3-3.4 dB，6 GHz 为 4.3-4.7 dB；合成仿真中这使 tau_rms 在 15 ns 时升高 18-26%、在 50 ns 时升高 2%，误差预算中的平坦响应行不含此偏差。
- 地点勘测（表 II，AP-B，主 20 MHz）：RMS 时延扩展最高 96 ns（地点 S4，两个频段）；另用 AP-B 的 12 段 100 秒采集研究需要多少连续或随机抽取的信标才能接近整段采集的数值。
- 帧类型提醒：多流数据帧常做发射波束赋形，会使逐项时延扩展与相干带宽产生偏差；配套 Letter（arXiv 2611.33881）给出一种盲检测方法。

## Why it matters / what's new (EN)
The paper's premise is that a wireless product experiences the channel through its own antennas and, when worn, its user's body, so a commodity receiver can serve as a device-referred sounder once its impairments are corrected. The authors note that the receivers were not compared with a reference sounder; accuracy rests on the synthetic error budget, which assumes a flat receiver response. It is paired with 2026-11-27_arxiv-detecting-transmit-precoding-commodity-wifi-csi, the companion letter by the same authors. Both are submitted manuscripts, not yet peer reviewed.

## Why it matters / what's new (ZH)
论文的出发点是：无线产品通过自身天线（佩戴时还包括用户身体）感受信道，因此商用接收机在校正其缺陷后可充当设备参考探测仪。作者指出接收机未与参考探测仪对比，精度依赖于假设接收机响应平坦的合成误差预算。它与同一作者的配套 Letter 条目 2026-11-27_arxiv-detecting-transmit-precoding-commodity-wifi-csi 成对。两篇均为已投稿稿件，尚未经同行评审。

## Images
![Processing chain: four corrections then four estimators | 处理链：四项校正后接四个估计器](https://arxiv.org/html/2611.34769v1/fig1.svg)
![Site survey: RMS delay spread and temporal correlation | 地点勘测：RMS 时延扩展与时间相关性](https://arxiv.org/html/2611.34769v1/fig3.svg)
