---
id: 2026-10-26_arxiv-stochastic-geometry-serial-multi-leo-serving-satellites
date_published: 2026-10-22
date_found: 2026-10-26
technology: satellite
type: academic-paper
title_en: "Stochastic Geometry Analysis and Optimization for Multi-LEO Satellite-Assisted Communications"
title_zh: "多 LEO 卫星辅助通信的随机几何分析与优化"
url: "https://arxiv.org/abs/2610.31373"
source_quality: full
topics: [stochastic-geometry, binomial-point-process, shadowed-Rician, serial-transmission, satellite-failure, handover-delay, success-probability]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Hu, Lin, Wang, Lu, Zhuang and Qi (arXiv 2610.31373, eess.SP, submitted 22 October 2026) study how a ground user can obtain more reliable LEO service from several satellites. They note that coherent, non-coherent and parallel multi-satellite schemes need several satellites to take part at once, and propose a serial scheme: the user probes satellites nearest-first and moves to the next one only if the SNR on the uplink and feedback link misses the threshold; transmission ends if none succeed.

Model: N satellites form a binomial point process on a sphere of radius r_e + r_min (r_e = 6371 km); each satellite fails with probability q; channels use path loss plus shadowed Rician fading with a decode-and-forward protocol, and co-channel interference is treated as negligible. The authors derive the overall success probability, average rate and end-to-end delay (including a handover delay per extra satellite), give asymptotic forms for two special cases (high-SNR linearisation and a Gamma approximation of the fading), and propose a cluster-based approximation that cuts the integral count. They maximise the ratio of success probability to delay over the number of serving satellites K; the paper states the ratio is unimodal in K and uses a one-dimensional search.

Numerical settings include N = 400, r_min = 1000 km, 30 GHz carrier, 250 MHz bandwidth, 3 W user and 10 W satellite transmit power, path-loss exponent 2.2 and a 20 ms handover delay. Results: success probability rises with K; with q = 0 and K = 1 it falls from 1 to 0.908 as the threshold moves from -30 to -20 dB (0.8 to 0.726 with q = 0.1). Higher altitude lowers success probability and rate, larger constellations (100 to 600 satellites) improve both, and delay grows with altitude and K. Higher altitudes favour more serving satellites and lower altitudes fewer; exact optima appear only in a figure.

## Summary (ZH)

Hu、Lin、Wang、Lu、Zhuang 和 Qi（arXiv 2610.31373，eess.SP，2026 年 10 月 22 日提交）研究地面用户如何借助多颗卫星获得更可靠的 LEO 服务。作者指出，相干、非相干和并行的多星方案都要求多颗卫星同时参与，因此提出串行方案：用户按距离由近到远依次探测卫星，仅当上行与反馈链路的信噪比未达门限时才转向下一颗；若全部失败则传输结束。

模型：N 颗卫星构成半径为 r_e + r_min（r_e = 6371 km）球面上的二项点过程；每颗卫星以概率 q 失效；信道采用路径损耗加阴影莱斯衰落，使用译码转发协议，并忽略同频干扰。作者推导了总成功概率、平均速率和端到端时延（每多用一颗卫星增加一次切换时延），给出两种特殊情形的渐近形式（高信噪比线性化和衰落的 Gamma 近似），并提出可减少积分数量的分簇近似。他们对服务卫星数 K 最大化成功概率与时延之比；论文称该比值关于 K 单峰，并用一维搜索求解。

数值设置包括 N = 400、r_min = 1000 km、30 GHz 载频、250 MHz 带宽、用户 3 W 与卫星 10 W 发射功率、路径损耗指数 2.2 和 20 ms 切换时延。结果：成功概率随 K 增大；q = 0、K = 1 时，门限从 -30 dB 升到 -20 dB，成功概率由 1 降到 0.908（q = 0.1 时由 0.8 降到 0.726）。轨道越高，成功概率与速率越低；星座规模从 100 增至 600 颗则两者均改善；时延随高度和 K 增大。较高轨道倾向更多服务卫星，较低轨道倾向更少；具体最优值仅在图中给出。

## Key technical points (EN)

- **Scheme**: serial nearest-first probing, next satellite used only on SNR failure.
- **Model**: binomial point process, shadowed Rician fading, per-satellite failure probability, decode-and-forward.
- **Outputs**: closed-form success probability, average rate, end-to-end delay; two asymptotic cases; cluster approximation.
- **Optimisation**: success-probability-to-delay ratio over K, stated unimodal, one-dimensional search.
- **Settings**: N = 400, 1000 km, 30 GHz, 250 MHz, 20 ms handover delay.

## Key technical points (ZH)

- **方案**：由近到远串行探测，仅在信噪比不达标时才用下一颗卫星。
- **模型**：二项点过程、阴影莱斯衰落、单星失效概率、译码转发。
- **输出**：成功概率、平均速率、端到端时延的解析式；两种渐近情形；分簇近似。
- **优化**：对 K 最大化成功概率与时延之比，称其单峰，用一维搜索。
- **设置**：N = 400、1000 km、30 GHz、250 MHz、20 ms 切换时延。

## Why it matters / what's new (EN)

The paper gives an analytical treatment of on-demand multi-satellite service against simultaneous multi-satellite transmission. All results are analytical and numerical; no measurements are included.

## Why it matters / what's new (ZH)

该论文对按需多星服务与多星同时传输之间的差异给出了解析处理。结果均为解析与数值仿真，不含实测。

## Images

None.
