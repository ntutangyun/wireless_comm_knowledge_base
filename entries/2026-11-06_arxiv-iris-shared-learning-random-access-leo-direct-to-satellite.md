---
id: 2026-11-06_arxiv-iris-shared-learning-random-access-leo-direct-to-satellite
date_published: 2026-11-04
date_found: 2026-11-06
technology: satellite
type: academic-paper
title_en: "IRIS: Intelligent Random Access with Integrated Shared Learning for Decentralized LEO Direct-to-Satellite Uplinks"
title_zh: "IRIS：面向去中心化低轨星地直连上行的集成共享学习智能随机接入"
url: "https://arxiv.org/abs/2611.07201"
source_quality: full
topics: [random-access, grant-free, deep-RL, DQN, sidelink, PC5, direct-to-satellite, NTN]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations, sat-ai]
novelty_score: 3
---

## Summary (EN)

Noman, Singh, Ahmed and Roy (University of Texas at Arlington and MathWorks; arXiv cs.NI, submitted 4 Nov 2026) address grant-free uplink access from devices to LEO satellites, where there is no real-time central scheduling and long propagation delay and stale channel state make coordination hard; random access without peer context collides more as contention grows.

IRIS uses a parameter-shared DQN so that every UE makes the same binary decision each epoch: transmit or stay silent. Vanilla-IRIS is the local-only ablation with five local features (queue occupancy, effective SINR, waiting age, previous outcome, contention token). A2A-IRIS adds a 27-bin histogram of delayed peer states and two current contention/payload rank features, 34 inputs in total, with peer data shared over the PC5 sidelink. Training uses load-aware exploration, event-preserving replay and action-balanced minibatches, with a reward mixing individual service terms and a shared access-outcome term. At inference each UE acts greedily on its own observation, with no central decision.

Evaluation is by simulation: TLE/SGP4 orbits for a 500-600 km shell (Walker-Delta fallback), a suburban scenario in Erding, Germany (61 active UEs) and a rural one in Mistelbach, Austria (22 active UEs), each on a 5x5 km region, with a 3GPP TR 38.811-based S-band channel, residual Doppler/ICI, MCS/BLER mapping, bounded HARQ and 0.5 s decision epochs. Baselines are an oracle upper bound, centralized schedulers with 0/1/2 epochs of CSI delay, p*-ALOHA and binary exponential backoff. A2A-IRIS reaches 2.1579 Mbps (rural) and 5.4478 Mbps (suburban), i.e. 99.9% and 96.1% of the oracle; throughput is 40.8% and 325.0% above Vanilla-IRIS; collision rates are 0.0000 and 0.0433 versus 0.2735 and 0.1678; and it is ahead of the delayed centralized schedulers by roughly 51-130%. Inference cost is about 21% more parameters and MACs than Vanilla-IRIS.

The authors note that sidelink delivery is idealized as collision-free and reliable, the model is a single shared contention domain without frequency-domain resource selection or multi-user decoding, results are simulation-only, and handover and beam-sweep effects are out of scope.

## Summary (ZH)

Noman、Singh、Ahmed 与 Roy（德克萨斯大学阿灵顿分校与 MathWorks；arXiv cs.NI，2026 年 11 月 4 日提交）研究设备到低轨卫星的免授权上行接入：这里缺乏实时集中调度，长传播时延与过时的信道状态使协调困难；缺少同伴信息的随机接入在竞争加剧时碰撞更多。

IRIS 采用参数共享的 DQN，使每个 UE 在每个时隙做出相同的二元决策：发送或保持静默。Vanilla-IRIS 是仅用本地信息的消融版本，使用五个本地特征（队列占用、有效 SINR、等待时长、上一次结果、竞争令牌）。A2A-IRIS 在此基础上加入延迟同伴状态的 27 区间直方图与两个当前竞争/负载排名特征，共 34 维输入，同伴数据经 PC5 侧链共享。训练采用负载感知探索、保留事件的回放与动作均衡小批量，奖励由个体服务项与共享接入结果项混合构成。推理时每个 UE 仅根据自身观测贪心决策，无需集中决策。

评估基于仿真：500-600 km 轨道层采用 TLE/SGP4 轨道（备选 Walker-Delta），场景为德国 Erding 郊区（61 个活跃 UE）与奥地利 Mistelbach 农村（22 个活跃 UE），各为 5x5 km 区域，信道基于 3GPP TR 38.811 的 S 频段模型，含残余多普勒/ICI、MCS/BLER 映射、有限次 HARQ 与 0.5 s 决策时隙。基线包括 oracle 上界、带 0/1/2 个时隙 CSI 延迟的集中式调度器、p*-ALOHA 与二进制指数退避。A2A-IRIS 在农村与郊区分别达到 2.1579 Mbps 与 5.4478 Mbps，即 oracle 的 99.9% 与 96.1%；吞吐比 Vanilla-IRIS 高 40.8% 与 325.0%；碰撞率为 0.0000 与 0.0433，Vanilla-IRIS 为 0.2735 与 0.1678；比有延迟的集中式调度器高约 51-130%。推理开销比 Vanilla-IRIS 多约 21% 的参数与 MAC。

作者指出：侧链传输被理想化为无碰撞且可靠；模型为单一共享竞争域，不含频域资源选择与多用户解码；结果仅来自仿真；切换与波束扫描效应不在范围内。

## Key technical points (EN)

- Parameter-shared DQN gives each UE a transmit/silent decision per 0.5 s epoch; inference is fully decentralized.
- Vanilla-IRIS: 5 local features. A2A-IRIS: 34 inputs including a 27-bin histogram of delayed peer states shared over PC5 sidelink.
- Setup: 500-600 km shell, S-band 3GPP TR 38.811 channel, suburban (61 UEs) and rural (22 UEs) 5x5 km areas.
- A2A-IRIS throughput 2.1579 / 5.4478 Mbps (rural / suburban) = 99.9% / 96.1% of oracle; +40.8% / +325.0% over Vanilla-IRIS.
- Collision rate 0.0000 / 0.0433 (A2A) vs 0.2735 / 0.1678 (Vanilla); 51-130% ahead of delayed centralized schedulers.
- Limits: idealized sidelink, single contention domain, simulation only.

## Key technical points (ZH)

- 参数共享 DQN 在每个 0.5 s 时隙为各 UE 给出发送/静默决策；推理完全去中心化。
- Vanilla-IRIS：5 个本地特征；A2A-IRIS：34 维输入，含经 PC5 侧链共享的延迟同伴状态 27 区间直方图。
- 设置：500-600 km 轨道层，S 频段 3GPP TR 38.811 信道，郊区（61 UE）与农村（22 UE）5x5 km 区域。
- A2A-IRIS 吞吐 2.1579 / 5.4478 Mbps（农村/郊区）= oracle 的 99.9% / 96.1%；比 Vanilla-IRIS 高 40.8% / 325.0%。
- 碰撞率 A2A 0.0000 / 0.0433，Vanilla 0.2735 / 0.1678；比延迟的集中式调度器高 51-130%。
- 局限：侧链理想化、单一竞争域、仅仿真。

## Why it matters / what's new (EN)

The KB's direct-to-device papers cover uplink link budget (2026-05-26_arxiv-elevation-aware-sul-ds2d), PRACH preamble design (2026-08-17_arxiv-hfm-prach-preamble-ntn-doppler) and NOMA uplink waveforms (2026-08-19_arxiv-aggressive-noma-dft-s-ofdm-device-to-satellite-uplink), among others. IRIS adds a learning-based, grant-free MAC-layer access scheme for the uplink that needs no grant, no central scheduler and no per-UE CSI feedback, at the price of an assumed sidelink among nearby UEs. The results are simulation-based and the sidelink assumption is the main open point.

## Why it matters / what's new (ZH)

KB 中的直连终端论文涵盖上行链路预算（2026-05-26_arxiv-elevation-aware-sul-ds2d）、PRACH 前导设计（2026-08-17_arxiv-hfm-prach-preamble-ntn-doppler）与 NOMA 上行波形（2026-08-19_arxiv-aggressive-noma-dft-s-ofdm-device-to-satellite-uplink）等。IRIS 补充了一种基于学习的免授权上行 MAC 层接入方案：无需授权、无需集中调度器、也无需逐 UE 的 CSI 反馈，代价是假设邻近 UE 之间存在侧链。结果基于仿真，侧链假设是主要的待验证点。

## Images

![IRIS framework | IRIS 框架](https://arxiv.org/html/2611.07201v1/images/twc/twc_framework.png)
