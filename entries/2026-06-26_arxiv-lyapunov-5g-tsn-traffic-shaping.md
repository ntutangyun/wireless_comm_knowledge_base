---
id: 2026-06-26_arxiv-lyapunov-5g-tsn-traffic-shaping
date_published: 2026-06-24
date_found: 2026-06-26
type: academic-paper
technology: cellular
title_en: "Lyapunov Optimization based Queue-aware Traffic Shaping for 5G-TSN in Industrial Environments"
title_zh: "面向工业环境 5G-TSN 的基于李雅普诺夫优化的队列感知流量整形"
url: "https://arxiv.org/abs/2606.25823"
source_quality: abstract_only
topics: [5G-TSN, deterministic-latency, traffic-shaping, private-5G, industrial-IoT, Lyapunov]
topic_primary: 5g-nr
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)
Zanbouri, Noor-A-Rahim, Sreenan, and Pesch (University College Cork; submitted 24 Jun 2026) tackle deterministic latency for 5G-TSN (Time-Sensitive Networking over 5G) in industrial private-5G deployments — specifically Automated Guided Vehicles (AGVs) operating in factories where dense metallic structures cause sudden line-of-sight blockage. When a blockage drops channel capacity sharply, standard rate-control and shaping schemes suffer catastrophic queue accumulation (bufferbloat) and miss the deterministic deadlines that TSN flows require.

The contribution is a **cross-layer rate-control algorithm grounded in Lyapunov Drift-plus-Penalty theory** that dynamically balances service utility against queue stability using only instantaneous buffer states — explicitly **without a predictive channel model**. Because it reacts to measured queue backlog rather than forecasting the channel, it sidesteps the fragility of predictive schemes under abrupt blockage events. Simulation shows the controller eliminates the bufferbloat that baseline schemes suffer and restores near-deterministic behaviour with minimal delay once the channel recovers, using 3GPP-compliant channel data.

This is a concrete 5G-TSN systems contribution rather than a generic optimization exercise: the problem (blockage-induced latency spikes for AGVs), the mechanism (reactive Lyapunov queue control), and the target (3GPP private-5G + TSN bridge) are all specific. It strengthens the deterministic-latency / industrial-5G thread of the cellular KB.

## Summary (ZH)
Zanbouri、Noor-A-Rahim、Sreenan、Pesch（科克大学学院，2026 年 6 月 24 日提交）研究工业专网 5G 部署中 5G-TSN（5G 之上的时间敏感网络）的确定性时延问题——具体针对在密集金属结构工厂中运行的自动导引车（AGV），金属结构会造成突发的视距遮挡。当遮挡使信道容量骤降时，标准速率控制与整形方案会出现灾难性的队列堆积（bufferbloat），无法满足 TSN 流所需的确定性时限。

贡献是一种**基于李雅普诺夫漂移加惩罚理论的跨层速率控制算法**，仅利用瞬时缓冲状态在服务效用与队列稳定之间动态权衡——明确**不依赖预测性信道模型**。由于它对实测队列积压做出反应而非预测信道，避免了预测型方案在突发遮挡下的脆弱性。仿真表明，该控制器消除了基线方案的 bufferbloat，并在信道恢复后以极小时延恢复近确定性行为，使用符合 3GPP 的信道数据。

这是一项具体的 5G-TSN 系统贡献而非通用优化练习：问题（AGV 遮挡导致的时延尖峰）、机制（反应式李雅普诺夫队列控制）、目标（3GPP 专网 5G + TSN 桥接）均很明确。它强化了蜂窝 KB 的确定性时延/工业 5G 线索。

## Key technical points (EN)
- Cross-layer rate control via **Lyapunov Drift-plus-Penalty**, trading service utility against queue stability from instantaneous buffer state.
- **No predictive channel model** — reacts to measured queue backlog, robust to abrupt LOS blockage from metallic factory structures.
- Target: 5G-TSN for AGVs in industrial private-5G; uses 3GPP-compliant channel data.
- Eliminates bufferbloat where baselines hit catastrophic queue accumulation; near-deterministic recovery with minimal delay.

## Key technical points (ZH)
- 经**李雅普诺夫漂移加惩罚**的跨层速率控制，从瞬时缓冲状态在服务效用与队列稳定间权衡。
- **无预测信道模型**——对实测队列积压做反应，对金属厂房造成的突发视距遮挡鲁棒。
- 目标：工业专网 5G 中 AGV 的 5G-TSN；使用符合 3GPP 的信道数据。
- 在基线出现灾难性队列堆积处消除 bufferbloat；以极小时延实现近确定性恢复。

## Why it matters / what's new (EN)
Most deterministic-5G work leans on channel prediction or reservation; the novelty here is that a purely reactive Lyapunov queue controller can hold near-deterministic latency through blockage without any forecast, which is attractive precisely because blockage is the hardest case to predict. It adds an industrial-5G + TSN systems anchor to the cellular KB's deterministic-latency thread, complementing the closed-loop L4S-as-a-Service entry (2026-06-23) from the standards side with a factory-floor rate-control mechanism.

## Why it matters / what's new (ZH)
多数确定性 5G 工作依赖信道预测或资源预留；本文新意在于纯反应式李雅普诺夫队列控制器无需任何预测即可在遮挡期间维持近确定性时延，而这恰恰因为遮挡最难预测而具吸引力。它为蜂窝 KB 的确定性时延线索增加了工业 5G + TSN 系统锚点，从工厂现场速率控制角度补充了标准侧的闭环 L4S-as-a-Service 条目（2026-06-23）。
