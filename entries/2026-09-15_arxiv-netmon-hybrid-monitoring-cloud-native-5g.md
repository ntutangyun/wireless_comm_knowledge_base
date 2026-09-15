---
id: 2026-09-15_arxiv-netmon-hybrid-monitoring-cloud-native-5g
date_published: 2026-09-11
date_found: 2026-09-15
type: academic-paper
technology: cellular
title_en: "Hybrid Monitoring for Early Fault Detection in Cloud-Native 5G Systems"
title_zh: "面向云原生5G系统的早期故障检测混合监测方案"
url: "https://arxiv.org/abs/2609.12649"
source_quality: full
topics: [5G-core, AMF, Kubernetes, eBPF, fault-detection, cloud-native, CUSUM]
topic_primary: 5g-nr
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

Anton Andersson and Sai Akshara Naineni (Chalmers University of Technology and University of Gothenburg, and Ericsson AB), Yixing Zhang and Romaric Duvignau (Chalmers University of Technology and University of Gothenburg), and Mats Jansborg (Ericsson AB) present NetMon, a hybrid monitoring system for Kubernetes-based 5G packet-core deployments, evaluated specifically against Ericsson's Access and Mobility Management Function (AMF) clusters. The design pairs a pod-level sidecar agent with a centralized correlator. Each agent runs active TCP probing (every 5 seconds, to peers discovered via headless-service DNS, with a ping-pong protocol and a 60-second grace period that ensures terminated pods are detected via probe failures rather than silently disappearing from the monitoring set) alongside three passive eBPF programs attached to the pod's network interface: an XDP program maintaining per-peer packet/byte/flag/retransmission counters, and TC ingress/egress programs that timestamp SYN packets in the kernel to measure round-trip latency without userspace scheduling noise. Each agent locally flags anomalies using an EMA-based z-score detector for latency/jitter (z>5.0 and ≥2ms absolute deviation, ≥20 samples) and relative/absolute thresholds for RST and retransmission rates (5x their EMA baseline or fixed 5%/10% floors), reporting every 5 seconds to a central server that classifies each pod's health (HEALTHY/DEGRADED/WARNING/FAILING/DOWN) and runs nine correlation patterns across pod-, connectivity- and worker-level scopes (e.g. WORKER_ISOLATED, INTER_NODE_FAILURE, WORKER_HOTSPOT), plus a Welford/CUSUM-based online change-point detector for gradual degradation.

The system was evaluated on a virtual 5G AMF deployment spanning four worker nodes and ten pods (controller, SCTP transport, forwarding, mobility-management microservices), with eight fault types injected via `tc netem`/`tbf` and `iptables` (latency, jitter, packet loss, bandwidth throttling, network partition, worker-pair link failure, pod termination, gradual degradation); six of these categories (latency, jitter, packet loss, and gradual degradation) were run at 0/20/50% simulated UE load, while bandwidth throttling, network partition, link failure, and pod termination were evaluated only at 0% load. Latency and jitter faults were detected and localized fastest — NetMon detects faults as subtle as 10ms of added latency within 2–10 seconds and localizes them to the affected worker within roughly 6–20 seconds, with correlation performance across all tested latency magnitudes (10–100ms) improving under load (13–20s at 0% load to 6–10s at 50% load, because the elevated baseline RTT pushes measurements further above the WORKER_HIGH_LATENCY threshold; for the 10ms magnitude specifically, correlation ran 17–20s at 0% load and 10–18s at 50% load). Packet-loss faults were slower and noisier: at 5% loss, detection took 5–11 seconds and correlation 22–71 seconds; at 50% loss, correlation reached up to 133 seconds and one of nine runs never fired at all. A full network partition was detected and correlated simultaneously in 9–11 seconds using only observations from the non-partitioned side. Resource overhead measured 3.4 millicores CPU and 4.5 MiB memory per pod agent plus under 1 millicore/2.6 MiB for the central correlator — under 35 millicores CPU and 47.6 MiB memory in total across the 10-pod cluster, or 0.5–8.7% of the application's own CPU budget depending on load. Over an 18-hour, fault-free, 0%-load baseline run, the system logged roughly 2,900 anomalies and 423 correlations per hour (reflecting genuine RTT variance in a virtualized environment), but the two highest-confidence correlation types — PEER_DOWN and WORKER_ISOLATED — produced zero false positives during that baseline. The authors position this against three existing approaches: standard liveness probes (10–30s intervals, blind to "gray failures"), Prometheus/Blackbox-exporter scraping (tens of seconds of inherent delay, no internal data-plane view), and purely passive eBPF tools (cannot verify connectivity on network paths that carry no traffic — a real gap given 5G's bursty traffic patterns).

## Summary (ZH)

查尔姆斯理工大学暨哥德堡大学的 Anton Andersson、Sai Akshara Naineni（二人同时也隶属爱立信 Ericsson AB）、Yixing Zhang 与 Romaric Duvignau，联合爱立信（Ericsson AB）的 Mats Jansborg，提出了 NetMon——一套面向基于 Kubernetes 的 5G 分组核心网部署的混合监测系统，并专门针对爱立信的接入与移动性管理功能（AMF）集群进行了评估。该方案将 Pod 级的旁路代理与集中式关联分析器相结合。每个代理执行主动 TCP 探测（每 5 秒一次，通过无头服务 DNS 发现对端，采用 ping-pong 协议，并设置 60 秒宽限期，以确保被终止的 Pod 能通过探测失败被检测到，而不是在监测集合中无声消失），同时运行三个挂载于 Pod 网络接口上的被动式 eBPF 程序：一个维护按对端统计的包/字节/标志位/重传计数器的 XDP 程序，以及在内核态对 SYN 包打时间戳、以在无用户态调度噪声干扰下测量往返时延的 TC 入/出方向程序。每个代理在本地使用基于指数移动平均（EMA）的 z 分数检测器判定时延/抖动异常（z>5.0 且绝对偏差≥2 毫秒，样本数≥20），并使用相对/绝对阈值判定 RST 与重传速率异常（超过其 EMA 基线的 5 倍，或固定的 5%/10% 阈值），每 5 秒向中心服务器上报一次；中心服务器据此对每个 Pod 的健康状态进行分类（健康/降级/警告/故障/宕机），并在 Pod、连通性与 Worker 三个层面运行九种关联模式（如 WORKER_ISOLATED、INTER_NODE_FAILURE、WORKER_HOTSPOT 等），再叠加基于 Welford 算法与 CUSUM 的在线变点检测以捕捉渐进式劣化。

该系统在一个横跨四个 Worker 节点、共十个 Pod（控制器、SCTP 传输、转发、移动性管理等微服务）的虚拟 5G AMF 部署上进行了评估，通过 `tc netem`/`tbf` 与 `iptables` 注入八类故障（时延、抖动、丢包、带宽限速、网络分区、Worker 间链路故障、Pod 终止、渐进式劣化）；其中六类（时延、抖动、丢包与渐进式劣化）在 0%/20%/50% 的模拟 UE 负载下重复实验，而带宽限速、网络分区、链路故障与 Pod 终止仅在 0% 负载下评估。时延与抖动类故障的检测与定位最快——NetMon 能在 2–10 秒内检测到低至 10 毫秒的附加时延，并在约 6–20 秒内将其定位到受影响的 Worker；在全部所测时延幅度（10–100 毫秒）上，关联时间随负载升高而改善（0% 负载下 13–20 秒，50% 负载下 6–10 秒，原因是负载升高后的基线往返时延本身更容易超过 WORKER_HIGH_LATENCY 的判定阈值；仅就 10 毫秒这一幅度而言，关联时间为 0% 负载下 17–20 秒、50% 负载下 10–18 秒）。丢包类故障的检测与关联更慢、波动更大：5% 丢包率下检测耗时 5–11 秒，关联耗时 22–71 秒；50% 丢包率下关联耗时最长可达 133 秒，且九次实验中有一次始终未触发关联。在完全网络分区场景下，系统仅凭未被隔离一侧的观测数据，即可在 9–11 秒内同时完成检测与关联定位。资源开销方面，每个 Pod 代理占用 3.4 毫核 CPU 与 4.5 MiB 内存，中心关联器占用不足 1 毫核 CPU 与 2.6 MiB 内存；整个十 Pod 集群总开销低于 35 毫核 CPU 与 47.6 MiB 内存，占应用自身 CPU 预算的 0.5%–8.7%（视负载而定）。在长达 18 小时、无故障、0% 负载的基线运行中，系统每小时记录约 2,900 次异常与 423 次关联（反映了虚拟化环境中真实存在的往返时延波动），但置信度最高的两类关联——PEER_DOWN 与 WORKER_ISOLATED——在该基线期间未产生任何误报。作者将该方案与三类现有方法进行了对比：标准存活探测（10–30 秒探测间隔，无法发现"灰色故障"）、基于 Prometheus/Blackbox exporter 的抓取式监测（固有延迟可达数十秒，且缺乏内部数据面视角），以及纯被动式 eBPF 工具（无法在无流量承载的网络路径上验证连通性——鉴于 5G 流量本身具有突发性，这是一个真实存在的盲区）。

## Key technical points (EN)

- Hybrid pod-level agent: active TCP probing every 5s (headless-service DNS peer discovery, ping-pong protocol, 60s grace period) + three eBPF programs (XDP per-peer counters; TC ingress/egress kernel-timestamped SYN-to-first-reply RTT).
- Local anomaly detection: EMA-based z-score (z>5.0, ≥2ms absolute deviation, ≥20 samples) for latency/jitter; relative (5x EMA)/absolute (5% RST, 10% retransmit) thresholds for traffic anomalies.
- Central correlator: 5-tier pod health classification (HEALTHY→DOWN), nine correlation patterns spanning pod/connectivity/worker scopes, plus Welford-mean/CUSUM online change-point detection (slack k=0.5, threshold h=4.0) for gradual degradation.
- Testbed: virtual 5G AMF across 4 worker nodes / 10 pods (controller, SCTP transport, forwarding, mobility-management); 8 injected fault types via tc netem/tbf and iptables; 6 categories (latency, jitter, packet loss, gradual degradation) run at 0/20/50% simulated UE load, the other 4 (bandwidth throttle, partition, link failure, pod termination) at 0% only.
- Headline detection/localization latency: 10ms-latency faults detected in 2–10s, localized in ~6–20s, with correlation across all tested latency magnitudes improving from 13–20s at 0% load to 6–10s at 50% load (10ms magnitude specifically: 17–20s → 10–18s); 5% packet loss detected in 5–11s but correlated more slowly (22–71s, up to 133s at 50% loss, one run never firing); full network partition detected+correlated simultaneously in 9–11s using only observations from the non-partitioned side.
- Resource overhead: 3.4 millicores CPU / 4.5 MiB memory per pod agent, <1 millicore / 2.6 MiB for the central correlator; <35 millicores / 47.6 MiB total for the 10-pod cluster (0.5–8.7% of application CPU budget).
- 18-hour fault-free baseline: ~2,900 anomalies/hour and ~423 correlations/hour logged, but PEER_DOWN and WORKER_ISOLATED (the two highest-confidence correlation types) produced zero false positives.
- Positioned against liveness probes (blind to gray failures), Prometheus/Blackbox scraping (tens-of-seconds delay), and purely passive eBPF tools (cannot verify idle paths — a real gap given 5G's bursty traffic).
- Acknowledged limitations: O(N²) full-mesh probing bounds scalability past small clusters (hierarchical aggregation proposed as future work); single central correlator is a single point of failure for correlation (though agents keep detecting locally); requires CAP_BPF/CAP_NET_ADMIN privileges; thresholds were tuned on preliminary runs rather than a held-out validation split.

## Key technical points (ZH)

- 混合式 Pod 级代理：每 5 秒进行一次主动 TCP 探测（基于无头服务 DNS 的对端发现、ping-pong 协议、60 秒宽限期），配合三个 eBPF 程序（按对端统计的 XDP 计数器；在内核态对 SYN 到首个回复进行时间戳标记以测量 RTT 的 TC 入/出方向程序）。
- 本地异常检测：基于 EMA 的 z 分数检测（z>5.0，绝对偏差≥2 毫秒，样本数≥20）用于时延/抖动；相对（EMA 基线的 5 倍）/绝对（RST 5%、重传 10%）阈值用于流量异常。
- 中心关联器：五级 Pod 健康状态分类（健康→宕机），涵盖 Pod、连通性、Worker 三个层面的九种关联模式，并叠加基于 Welford 均值与 CUSUM（松弛量 k=0.5，阈值 h=4.0）的在线变点检测以捕捉渐进式劣化。
- 测试平台：跨 4 个 Worker 节点、10 个 Pod 的虚拟 5G AMF 部署（控制器、SCTP 传输、转发、移动性管理等微服务）；通过 tc netem/tbf 与 iptables 注入 8 类故障，其中 6 类（时延、抖动、丢包、渐进式劣化）在 0%/20%/50% 模拟 UE 负载下评估，另外 4 类（带宽限速、网络分区、链路故障、Pod 终止）仅在 0% 负载下评估。
- 核心检测/定位延迟结果：10 毫秒时延故障可在 2–10 秒内检测到，约 6–20 秒内定位；在全部所测时延幅度上，关联时间从 0% 负载下的 13–20 秒改善至 50% 负载下的 6–10 秒（仅就 10 毫秒幅度而言为 17–20 秒 → 10–18 秒）；5% 丢包故障检测耗时 5–11 秒，但关联更慢（22–71 秒，50% 丢包率下最长达 133 秒，且有一次实验始终未触发）；完全网络分区仅凭未被隔离一侧的观测数据，即可在 9–11 秒内同时完成检测与关联。
- 资源开销：每个 Pod 代理 3.4 毫核 CPU / 4.5 MiB 内存，中心关联器不足 1 毫核 CPU / 2.6 MiB 内存；十 Pod 集群总开销低于 35 毫核 CPU / 47.6 MiB 内存（占应用自身 CPU 预算的 0.5%–8.7%）。
- 18 小时无故障基线运行：每小时记录约 2,900 次异常、约 423 次关联，但置信度最高的两类关联——PEER_DOWN 与 WORKER_ISOLATED——在该基线期间零误报。
- 作者将方案与三类现有方法作对比：存活探测（无法发现"灰色故障"）、基于 Prometheus/Blackbox exporter 的抓取式监测（固有延迟可达数十秒）、纯被动式 eBPF 工具（无法验证无流量路径的连通性——鉴于 5G 流量具有突发性，这是一个真实盲区）。
- 已知局限：O(N²) 全连接探测在集群规模扩大后制约可扩展性（未来工作拟采用分层聚合）；单一中心关联器构成关联分析的单点故障（但各代理仍可独立进行本地检测）；需要 CAP_BPF/CAP_NET_ADMIN 权限；检测阈值基于初步实验调优，而非独立的验证集划分。

## Why it matters / what's new (EN)

This KB already carries eBPF-based 5G data-plane work at the user-plane function (per-slice UPF latency, 2026-05-29; UPF dataplane I/O modes, 2026-08-19), but those target the UPF's own packet-forwarding path. NetMon instead monitors the control-plane AMF cluster's *inter-pod network health* inside Kubernetes — a different failure class (gray degradation between microservices, not dataplane throughput) — and two of the five authors are jointly affiliated with Ericsson AB alongside Chalmers/Gothenburg, giving the AMF-shaped testbed some industry input even though the evaluation itself runs on a virtual 5G AMF with simulated UE load rather than a production deployment (the authors themselves describe the approach as "promising for further validation"). It is the first entry in this bin to combine active probing with passive eBPF observation specifically to close the "silent idle path" gap that purely passive cloud-native monitoring tools have.

## Why it matters / what's new (ZH)

本知识库此前已收录针对 5G 用户面功能（UPF）的 eBPF 相关工作（按切片划分的 UPF 时延监测，2026-05-29；UPF 数据面 I/O 模式，2026-08-19），但那些工作关注的是 UPF 自身的报文转发路径。NetMon 监测的则是控制面 AMF 集群在 Kubernetes 内部的 *Pod 间网络健康状况*——这是一类不同的故障（微服务之间的灰色劣化，而非数据面吞吐问题）——五位作者中有两位同时隶属爱立信（Ericsson AB）与查尔姆斯/哥德堡大学，为贴近 AMF 形态的测试平台带来了一定的产业投入；但评估本身仍运行在配置了模拟 UE 负载的虚拟 5G AMF 之上，而非生产部署（作者自己也将该方法形容为"有望进一步验证"）。这是该分类下首个将主动探测与被动 eBPF 观测相结合、专门用于弥补纯被动云原生监测工具在"无流量空闲路径"上盲区的条目。

## Images

![NetMon architecture: distributed sidecar agents on each 5G AMF pod report to a central correlator | NetMon 架构：部署于各 5G AMF Pod 的分布式旁路代理向中心关联器上报](https://arxiv.org/html/2609.12649v1/figure/Application_container_5G.png)
![Evaluation cluster topology: 10 pods across 4 worker nodes used for the virtual 5G AMF testbed | 评估集群拓扑：用于虚拟 5G AMF 测试平台的 4 个 Worker 节点、10 个 Pod](https://arxiv.org/html/2609.12649v1/figure/Kubernetes_Cluster.png)
