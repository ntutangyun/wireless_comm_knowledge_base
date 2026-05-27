---
id: 2026-05-27_arxiv-tn-ntn-backhaul-potential-game
date_published: 2026-05-26
date_found: 2026-05-27
type: academic-paper
title_en: "SLA-aware traffic steering in hybrid TN-NTN 5G backhaul via an exact potential game"
title_zh: "基于精确势博弈的混合 TN-NTN 5G 回传 SLA 感知流量调度"
url: "https://arxiv.org/abs/2605.26673"
source_quality: abstract_only
topics: [NTN, satellite-backhaul, network-slicing, game-theory, SLA, traffic-steering]
topic_primary: ntn
topics_secondary: [network-slicing, 5g-nr]
novelty_score: 3
---

## Summary (EN)
This paper (Navidan, Rico, Cheraghinia, Moerman, Shahid — IDLab/Ghent) tackles traffic steering across hybrid terrestrial / non-terrestrial (TN-NTN) 5G backhaul, where an operator has both a cheap, high-capacity terrestrial path and an expensive, capacity-constrained satellite path, and must keep multiple network slices inside their service-level agreements while spending as little satellite capacity as possible. The asymmetry is the hard part: uplink and downlink have very different cost and capacity profiles, and the slices (V2X, emergency, video, IoT, best-effort) compete for the same shared backhaul.

The core contribution is to formulate per-slice load balancing as an **exact potential game**. That formulation lets uplink and downlink "agents" coordinate in a decentralized way — each adjusts the fraction of its slice's traffic sent over the terrestrial vs. satellite path to improve a utility that folds in throughput, latency, packet loss, and an SLA-violation penalty — and the potential-game structure guarantees the dynamics converge to a pure-strategy Nash equilibrium without any explicit control signalling between the agents. The result is stable, low-overhead adaptation rather than a central optimizer that needs global state every cycle.

The authors validate on a geographically distributed 5G testbed with five representative slices and bidirectional traffic. The controller holds SLA violations to 1.7% for V2X and 0.7% for emergency services and drives them to zero for video, IoT, and best-effort, beating heuristic baselines while minimizing satellite usage.

## Summary (ZH)
本文（Navidan、Rico、Cheraghinia、Moerman、Shahid——根特大学 IDLab）研究混合地面/非地面（TN-NTN）5G 回传中的流量调度：运营商同时拥有廉价、大容量的地面路径与昂贵、容量受限的卫星路径，必须在尽量少用卫星容量的同时让多个网络切片满足各自的服务等级协议（SLA）。难点在于不对称性：上行与下行的成本与容量特征差异很大，而各切片（V2X、应急、视频、IoT、尽力而为）争用同一共享回传。

核心贡献是把按切片的负载均衡建模为**精确势博弈（exact potential game）**。该建模使上行与下行"智能体"以去中心化方式协调——各自调整其切片在地面与卫星路径间的流量分配比例，以改进一个综合了吞吐、时延、丢包与 SLA 违约惩罚的效用函数——而势博弈结构保证动态收敛到纯策略纳什均衡，且智能体之间无需任何显式控制信令。其结果是稳定、低开销的自适应，而非每周期都需要全局状态的中心优化器。

作者在地理上分布的 5G 试验床上以五个代表性切片与双向流量进行验证。控制器将 V2X 的 SLA 违约率控制在 1.7%、应急业务 0.7%，并将视频、IoT 与尽力而为业务的违约率降为零，在最小化卫星用量的同时优于启发式基线。

## Key technical points (EN)
- Problem: steer per-slice traffic across asymmetric TN (cheap/large) vs NTN (expensive/limited) 5G backhaul while honoring SLAs and sparing satellite capacity.
- Formulation: load balancing as an **exact potential game**; convergence to a pure-strategy Nash equilibrium is guaranteed.
- Decentralized uplink/downlink agents adjust per-slice terrestrial-vs-satellite split with no explicit inter-agent signalling.
- Utility folds in throughput, latency, packet loss, and SLA-violation penalty.
- Testbed: geographically distributed 5G, five slices (V2X, emergency, video, IoT, best-effort), bidirectional traffic.
- Results: SLA violations 1.7% (V2X), 0.7% (emergency), 0% (video/IoT/best-effort); beats heuristic baselines, minimizes satellite usage.

## Key technical points (ZH)
- 问题：在不对称的 TN（廉价/大容量）与 NTN（昂贵/受限）5G 回传间按切片调度流量，同时满足 SLA 并节省卫星容量。
- 建模：把负载均衡表述为**精确势博弈**；保证收敛到纯策略纳什均衡。
- 去中心化的上/下行智能体调整各切片地面-卫星分流比例，无需智能体间显式信令。
- 效用综合吞吐、时延、丢包与 SLA 违约惩罚。
- 试验床：地理分布的 5G，五个切片（V2X、应急、视频、IoT、尽力而为），双向流量。
- 结果：SLA 违约率 V2X 1.7%、应急 0.7%、视频/IoT/尽力而为 0%；优于启发式基线，最小化卫星用量。

## Why it matters / what's new (EN)
NTN-as-backhaul (rather than NTN-as-access) is an under-covered corner of this KB's cellular and satellite coverage, and the potential-game framing is the genuinely new piece: it gives decentralized, signalling-free coordination with a convergence guarantee, which is attractive when the satellite leg's control latency makes a tight central optimizer impractical. It complements the access-side direct-to-device and D2C-vs-NTN material already in the KB (2026-05-22_arxiv-d2c-vs-ntn-comparative-analysis) by addressing the transport tier behind the cell rather than the air interface in front of it.

## Why it matters / what's new (ZH)
"NTN 作为回传"（而非作为接入）是本 KB 蜂窝与卫星内容中覆盖较少的一角，而势博弈建模是真正的新意：它在带收敛保证的前提下实现去中心化、免信令的协调；当卫星链路的控制时延使紧耦合中心优化器不切实际时，这一点尤为可取。它与本库已有的接入侧直连设备及 D2C-vs-NTN 内容（2026-05-22_arxiv-d2c-vs-ntn-comparative-analysis）互补——后者关注小区前的空口，本文关注小区后的传输层。
