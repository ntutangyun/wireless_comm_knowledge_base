---
id: 2026-11-19_arxiv-channel-chart-driven-antenna-activation-cell-free-massive-mimo
date_published: 2026-11-12
date_found: 2026-11-19
type: academic-paper
technology: cellular
title_en: "Channel-Chart-Driven Antenna Activation for Energy-Efficient Cell-Free Massive MIMO"
title_zh: "面向节能无蜂窝大规模 MIMO 的信道图驱动天线激活"
url: "https://arxiv.org/abs/2611.16996"
source_quality: full
topics: [cell-free-massive-MIMO, channel-charting, antenna-activation, energy-efficiency, fronthaul-overhead, Sionna, ray-tracing]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai, 6g-vision]
novelty_score: 3
---

## Summary (EN)

Kafa, Le Magoarou, Farah and Crussiere (IETR, Univ Rennes / INSA Rennes / CNRS) study uplink energy-efficient antenna activation in cell-free massive MIMO. Instead of forwarding full CSI to the central processing unit, each access point maps its local CSI to a low-dimensional channel-chart embedding and forwards only that. Three strategies use the embeddings: direct activation with a proxy energy-efficiency metric, nearest chart-point CSI approximation, and decoder-based CSI reconstruction with a pre-trained autoencoder. A greedy search then selects the antenna subset.

## Summary (ZH)

Kafa、Le Magoarou、Farah 与 Crussiere（雷恩大学 / INSA Rennes / CNRS 的 IETR）研究无蜂窝大规模 MIMO 的上行节能天线激活。各接入点不再向中央处理单元转发完整 CSI，而是将本地 CSI 映射为低维信道图（channel chart）嵌入后仅转发该嵌入。三种策略利用这些嵌入：以代理能效指标直接激活、最近信道图点 CSI 近似，以及用预训练自编码器的解码器重构 CSI；随后用贪心搜索选择天线子集。

## Key technical points (EN)

- Problem: keeping all antennas active in cell-free massive MIMO causes high circuit and fronthaul power; network-wide activation needs CSI at the CPU, which costs signalling.
- Direct strategy (DD): each user's per-antenna channel power is predicted from channel-chart similarity, and a proxy SINR and proxy energy-efficiency metric (rewarding predicted channel power, penalizing highly clustered users, promoting sparse activation per AP) drive the greedy search with no CSI reconstruction.
- Nearest-neighbour strategy (NN): an offline lookup table of calibration CSI and embeddings per AP; online, the nearest embedding retrieves an approximate channel, and the exact energy-efficiency objective is evaluated.
- Reconstruction strategy (RC): an AP-specific decoder rebuilds a normalized channel direction; the AP also sends the channel norm and per-stage circular-mean phases as side information, giving d + N_st + 1 scalars per link.
- Fronthaul: full CSI needs 2NS real scalars per UE-AP link, DD and NN need only the d-dimensional embedding; the paper's qualitative summary ranks EE as NN above RC above DD, signalling as DD equal to NN better than RC, and computational cost as DD lowest.
- Setup: ray-traced Sionna dataset for the Etoile urban scenario in Paris, 3.8 GHz, L = 10 APs with 48 antennas each (M = 480), K = 30 users, 8000 calibration and 2000 test realizations for DD/NN and 3500/4500/2000 for RC; 1000 Monte-Carlo realizations.
- Results: the CC-driven greedy strategies reach average EE gains of roughly 280-315% over the all-active baseline while activating about 40-45 of 480 antennas; NN is closest to full-CSI benchmarks, DD and RC slightly lower; full-CSI simulated annealing gives the highest EE and full-CSI greedy a nearly identical CDF at lower complexity; all-active gives the highest sum SE but lowest EE.
- Caveats visible in the text: single simulated scenario; relies on offline calibration or training data per AP; distributed MMSE detection shows pronounced EE and SE degradation relative to centralized detection.

## Key technical points (ZH)

- 问题：无蜂窝大规模 MIMO 中保持所有天线激活会带来较高的电路与前传功耗；全网天线激活需要 CPU 端的 CSI，信令开销大。
- 直接策略（DD）：根据信道图相似度预测每个用户的逐天线信道功率，并用代理 SINR 与代理能效指标（奖励预测信道功率、惩罚高度聚集的用户、鼓励每个 AP 稀疏激活）驱动贪心搜索，无需重构 CSI。
- 最近邻策略（NN）：每个 AP 离线保存校准 CSI 与嵌入的查找表；在线时以最近嵌入检索近似信道，并计算精确的能效目标。
- 重构策略（RC）：AP 专用解码器重建归一化的信道方向；AP 另发送信道范数与分级圆均值相位作为辅助信息，每条链路共 d + N_st + 1 个标量。
- 前传：完整 CSI 每条 UE-AP 链路需 2NS 个实数，DD 与 NN 只需 d 维嵌入；论文的定性总结为能效 NN 优于 RC 优于 DD，信令开销 DD 与 NN 优于 RC，计算开销 DD 最低。
- 设置：基于 Sionna 的巴黎 Etoile 城区射线追踪数据集，3.8 GHz，L = 10 个 AP、每个 48 根天线（M = 480），K = 30 个用户；DD/NN 使用 8000 个校准和 2000 个测试样本，RC 使用 3500/4500/2000；1000 次蒙特卡洛实现。
- 结果：信道图驱动的贪心策略相对全激活基线平均能效提升约 280-315%，激活天线约 40-45 根（共 480 根）；NN 最接近全 CSI 基准，DD 与 RC 略低；全 CSI 模拟退火能效最高，全 CSI 贪心的 CDF 几乎相同而复杂度更低；全激活的和谱效率最高但能效最低。
- 文中可见的注意事项：仅一个仿真场景；依赖每个 AP 的离线校准或训练数据；分布式 MMSE 检测相对集中式检测的能效与谱效率明显下降。

## Why it matters / what's new (EN)

The paper links channel charting to antenna-activation decisions, so the CPU can decide activation from compact embeddings rather than full CSI. The numeric gains are relative to an all-active baseline in one ray-traced urban scenario, so they show the signalling-versus-energy trade-off rather than a general-purpose result.

## Why it matters / what's new (ZH)

该论文将信道图与天线激活决策联系起来，使 CPU 能够依据紧凑的嵌入而非完整 CSI 做出激活决策。数值收益相对于单一射线追踪城区场景下的全激活基线，体现的是信令开销与能耗之间的折中，而非通用结论。

## Images

None.
