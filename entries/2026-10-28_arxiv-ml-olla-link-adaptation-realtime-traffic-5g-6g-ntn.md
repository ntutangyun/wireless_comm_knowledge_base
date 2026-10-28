---
id: 2026-10-28_arxiv-ml-olla-link-adaptation-realtime-traffic-5g-6g-ntn
date_published: 2026-10-26
date_found: 2026-10-28
technology: satellite
type: academic-paper
title_en: "ML-OLLA: Link Adaptation for Real-Time Traffic in 5G/6G NTN Systems"
title_zh: "ML-OLLA：面向 5G/6G NTN 系统实时业务的链路自适应"
url: "https://arxiv.org/abs/2610.36147"
source_quality: full
topics: [NTN, link-adaptation, OLLA, HARQ, MCS, CQI, real-time-traffic, ns-3, 5G-LENA]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations, ntn]
novelty_score: 3
---

## Summary (EN)

Magamedov, Krasilov, Zlobin and Khorov (HSE University and IITP RAS, Moscow; arXiv 2610.36147, cs.NI, v1 26 October 2026; the arXiv comment states it is accepted for publication at IEEE GLOBECOM 2026) address link adaptation for low-latency real-time services such as voice, AR/VR and gaming over LEO satellite NTN. Long propagation delay, fast channel change and delayed CQI feedback make terrestrial link adaptation less effective, and existing capacity studies focus on throughput rather than a delay-and-loss budget. The goal is to maximise the number of UEs that satisfy both a delay budget and a packet loss rate (PLR), which amounts to minimising the resource blocks each UE consumes.

The proposed ML-OLLA runs an inner loop that maps delayed CQI reports to an MCS and a separate outer-loop link adaptation (OLLA) process per HARQ attempt, each with its own target BLER; a retransmission may not use a higher MCS than the previous attempt. Per-attempt targets and OLLA step sizes come from an exhaustive search that minimises expected RB use under the PLR constraint, using per-MCS error probabilities estimated from a sliding window of 2,000 CQI-derived samples.

Evaluation uses ns-3 with the 5G-LENA module and the 3GPP NTN channel model (TR 38.811): 600 km altitude, 3.6 GHz carrier, 10 MHz bandwidth, UE speeds 3 to 100 km/h, 256-byte packets every 20 ms (an intelligent-transport profile), averaged over 15 runs. Baselines are standard OLLA with a manual or SINR-based first-attempt target and always using the most robust MCS. At a 40 to 50 ms delay budget and PLR 10^-2, ML-OLLA supports about 80 UEs versus about 20 for the best baseline (up to roughly four times the capacity); at PLR 10^-3 the minimum supported delay falls from 60 ms to 40 ms; at 70 ms about 30% capacity gain. A satellite-based gNB lowers the minimum delay budget further and adds a 5 to 10% gain. Stated limits: the parameter-selection model treats errors across attempts as independent and omits the Chase-combining gain (conservative), downlink and a single beam only, simulation only.

## Summary (ZH)

Magamedov、Krasilov、Zlobin 和 Khorov（莫斯科高等经济大学与俄罗斯科学院信息传输问题研究所；arXiv 2610.36147，cs.NI，v1 于 2026 年 10 月 26 日发布；arXiv 备注称已被 IEEE GLOBECOM 2026 接收）研究 LEO 卫星 NTN 上语音、AR/VR 和游戏等低时延实时业务的链路自适应。传播时延长、信道变化快以及 CQI 反馈延迟使地面链路自适应效果下降，而已有容量研究关注吞吐量而非时延与丢包预算。目标是使同时满足时延预算和丢包率（PLR）的 UE 数量最大化，即最小化每个 UE 占用的资源块。

所提 ML-OLLA 包含将延迟的 CQI 报告映射为 MCS 的内环，以及为每次 HARQ 尝试单独运行、各有目标 BLER 的外环链路自适应（OLLA）过程；重传所用 MCS 不得高于前一次。各次尝试的目标和 OLLA 步长由穷举搜索得到，在 PLR 约束下最小化期望 RB 使用量，各 MCS 的错误概率由 2,000 个基于 CQI 的样本滑动窗口估计。

评估使用 ns-3 与 5G-LENA 模块及 3GPP NTN 信道模型（TR 38.811）：高度 600 km，载频 3.6 GHz，带宽 10 MHz，UE 速度 3 至 100 km/h，每 20 ms 一个 256 字节包（智能交通场景），15 次运行取平均。基线为首次尝试目标由人工设定或基于 SINR 的标准 OLLA，以及始终使用最稳健 MCS。在 40 至 50 ms 时延预算、PLR 10^-2 下，ML-OLLA 支持约 80 个 UE，最佳基线约 20 个（容量最高约四倍）；PLR 10^-3 下可支持的最小时延从 60 ms 降至 40 ms；70 ms 时容量增益约 30%。采用星上 gNB 可进一步降低最小时延预算并带来 5% 至 10% 增益。论文局限：参数选择模型假设各次尝试译码错误独立并忽略 Chase 合并增益（偏保守），仅研究下行和单波束，仅为仿真。

## Key technical points (EN)

- **Problem**: maximise UEs meeting both delay budget and PLR over LEO NTN with delayed CQI.
- **Mechanism**: per-HARQ-attempt OLLA loops with separate target BLERs, selected by exhaustive search minimising RB use.
- **Estimator**: sliding window of 2,000 CQI-derived samples for per-MCS error probabilities.
- **Setup**: ns-3 5G-LENA, TR 38.811, 600 km, 3.6 GHz, 10 MHz, 256-byte packets every 20 ms.
- **Results**: about 80 versus 20 UEs at 40 to 50 ms and PLR 10^-2; minimum delay 60 ms to 40 ms at PLR 10^-3.
- **Caveat**: independent-error assumption, downlink only, simulation only.

## Key technical points (ZH)

- **问题**：在 CQI 延迟的 LEO NTN 上，最大化同时满足时延预算和 PLR 的 UE 数。
- **机制**：每次 HARQ 尝试独立的 OLLA 环路，目标 BLER 各异，通过最小化 RB 使用的穷举搜索选取。
- **估计器**：2,000 个基于 CQI 的样本滑动窗口估计各 MCS 错误概率。
- **设置**：ns-3 5G-LENA，TR 38.811，600 km，3.6 GHz，10 MHz，每 20 ms 一个 256 字节包。
- **结果**：40 至 50 ms、PLR 10^-2 时约 80 对 20 个 UE；PLR 10^-3 时最小时延由 60 ms 降至 40 ms。
- **注意**：独立错误假设、仅下行、仅仿真。

## Why it matters / what's new (EN)

The paper notes that most 5G NTN studies target elastic traffic and throughput; it instead treats link adaptation as a delay-and-loss-budget problem with HARQ-attempt-specific targets. Results are from ns-3 simulation of a single beam and are not validated on hardware.

## Why it matters / what's new (ZH)

论文指出多数 5G NTN 研究针对弹性业务、以吞吐量为指标；本文则把链路自适应视为带 HARQ 尝试级目标的时延与丢包预算问题。结果来自单波束 ns-3 仿真，未经硬件验证。

## Images

![5G NTN scenario with a moving UE served by a LEO beam | LEO 波束服务移动 UE 的 5G NTN 场景](https://arxiv.org/html/2610.36147v1/5g-ntn-scheme.png)
![Fraction of satisfied UEs versus load | 满足要求的 UE 比例随负载变化](https://arxiv.org/html/2610.36147v1/fraction_satisfied_ues.png)
