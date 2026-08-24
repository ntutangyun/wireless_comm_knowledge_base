---
id: 2026-07-08_sigcomm26-concord-airtime-contention
date_published: 2026-08-17
date_found: 2026-07-08
type: academic-paper
title_en: "Concord: Airtime-Aware Contention Control for Taming Tail Latency from Wi-Fi Frame Bursting (SIGCOMM 2026)"
title_zh: "Concord：面向 Wi-Fi 帧突发尾时延的空口时间感知竞争控制（SIGCOMM 2026）"
url: "https://conferences.sigcomm.org/sigcomm/2026/program/papers/"
source_quality: abstract_only
topics: [802.11, frame-bursting, TXOP, tail-latency, contention, SIGCOMM]
topic_primary: rtwt-latency
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Camera-ready update (2026-08-24): the SIGCOMM 2026 proceedings are now live in the ACM Digital Library (proceedings DOI 10.1145/3789240), and Concord's full abstract is public on the conference program page (Research Session 7: Wireless, Backscatter & Sensing, presented August 19 in Denver). The paper — by Fengqian Guo, Siqi Wei, Sihao Miao and Hancheng Lu (University of Science and Technology of China) with Xinle Du (Tsinghua University) — was first recorded in this KB on 2026-07-08 from the accepted-papers list, when only the title was public. This entry is now upgraded with the actual mechanism and results.

The measurement finding is striking: on commodity Wi-Fi routers in the wild, sparse microflows (e.g., 100-byte periodic packets) suffer bulk-like tail latency even at negligible load. "Sending less does not guarantee lower latency" — the tail is driven by MAC-level contention dynamics, specifically neighbours' frame bursting (long A-MPDU bursts inside multi-millisecond TXOPs), not by the flow's own sending rate. This renders classic rate-based congestion control structurally ineffective against Wi-Fi tail latency: the bottleneck variable is medium-holding time, which no transport-layer rate signal observes or controls.

Concord's mechanism makes burst airtime an explicit control signal and penalizes excessive medium holding. It operates entirely within the Wi-Fi driver — no flow classification, no client-side changes, no protocol changes — and incurs only O(1) work per burst, making it deployable as a vendor driver update on existing APs. With four saturated downlink contenders, Concord reduces the 99.9th-percentile enqueue-to-ACK latency of 100 B microflows from 298 ms (IEEE default) / 461 ms (vendor bursting) to 42 ms without sacrificing bulk throughput. For interactive cloud-gaming workloads, it cuts 99.9th-percentile latency from 231/441 ms to 92 ms and reduces starvation by up to 10× versus the default IEEE stack. The full PDF is behind the ACM DL (anonymous access gated at review time); this entry reflects the published abstract and program metadata.

## Summary (ZH)

正式版更新（2026-08-24）：SIGCOMM 2026 会议论文集已上线 ACM 数字图书馆（论文集 DOI 10.1145/3789240），Concord 的完整摘要已在大会议程页面公开（研究分会 7：无线、反向散射与感知，8 月 19 日于丹佛报告）。论文作者为中国科学技术大学的 Fengqian Guo、Siqi Wei、Sihao Miao、Hancheng Lu 及清华大学的 Xinle Du。本 KB 于 2026-07-08 依据录用名单（当时仅标题公开）首次收录该论文，现依据正式摘要将条目升级为机制与结果级内容。

其测量发现颇具冲击力：在真实环境的商用 Wi-Fi 路由器上，稀疏微流（如周期性 100 字节报文）即便负载几乎为零也会遭受与大流量相当的尾时延。"发得少并不意味着时延低"——尾时延由 MAC 层竞争动态驱动，具体来说是邻居的帧突发（多毫秒 TXOP 内的长 A-MPDU 突发），而非流自身的发送速率。这使经典的基于速率的拥塞控制在结构上无法治理 Wi-Fi 尾时延：瓶颈变量是信道占用时长（medium-holding time），任何传输层速率信号都观测不到、也控制不了它。

Concord 的机制是把突发空口时间变成显式控制信号，并对过度占用信道的行为施加惩罚。它完全运行在 Wi-Fi 驱动内——无需流分类、无需客户端改动、无需协议修改——每个突发仅需 O(1) 计算量，因此可以作为厂商驱动更新直接部署到存量 AP 上。在 4 个饱和下行竞争者场景下，Concord 将 100 字节微流的 99.9 分位入队到 ACK 时延从 298 毫秒（IEEE 默认）/461 毫秒（厂商突发模式）降至 42 毫秒，且不牺牲大流量吞吐；对云游戏等交互负载，99.9 分位时延从 231/441 毫秒降至 92 毫秒，饥饿现象相比默认 IEEE 协议栈最多减少 10 倍。论文 PDF 目前在 ACM DL 上对匿名访问设限；本条目内容基于已公开的摘要与议程元数据。

## Key technical points (EN)

- Published in the ACM SIGCOMM 2026 proceedings (Denver, August 17-21; ACM DL proceedings DOI 10.1145/3789240); presented August 19 in Research Session 7 (Wireless, Backscatter & Sensing).
- Authors: Fengqian Guo, Siqi Wei, Sihao Miao, Hancheng Lu (USTC); Xinle Du (Tsinghua University) — same USTC contention-control group as BLADE (Guo, Miao on both).
- Measurement finding: sparse microflows on commodity routers suffer bulk-like tail latency at negligible load — tail latency is set by MAC contention dynamics (neighbours' burst medium-holding), not sending rate, so rate-based congestion control cannot fix it.
- Mechanism: burst airtime becomes an explicit control signal; excessive medium holding is penalized. Driver-only, no flow classification, no client or protocol changes, O(1) work per burst.
- Results: with 4 saturated downlink contenders, p99.9 enqueue-to-ACK latency of 100 B microflows drops 298/461 ms (IEEE baseline / vendor bursting) → 42 ms with bulk throughput preserved; cloud gaming p99.9 231/441 ms → 92 ms; starvation reduced up to 10×.
- Thesis: controlling medium-holding time — not transmission rate — is the key lever for WLAN tail latency.

## Key technical points (ZH)

- 发表于 ACM SIGCOMM 2026 会议论文集（丹佛，8 月 17-21 日；ACM DL 论文集 DOI 10.1145/3789240）；8 月 19 日在研究分会 7（无线、反向散射与感知）报告。
- 作者：Fengqian Guo、Siqi Wei、Sihao Miao、Hancheng Lu（中国科学技术大学）；Xinle Du（清华大学）——与 BLADE 同属中科大竞争控制团队（Guo、Miao 两文共同作者）。
- 测量发现：商用路由器上的稀疏微流在负载几乎为零时仍遭受与大流量相当的尾时延——尾时延由 MAC 竞争动态（邻居突发的信道占用）决定，与发送速率无关，因此基于速率的拥塞控制无法治理。
- 机制：将突发空口时间作为显式控制信号，惩罚过度信道占用。仅驱动侧实现，无需流分类、客户端或协议修改，每突发 O(1) 计算量。
- 结果：4 个饱和下行竞争者下，100 字节微流的 99.9 分位入队到 ACK 时延从 298/461 毫秒（IEEE 默认/厂商突发）降至 42 毫秒，吞吐不受损；云游戏 99.9 分位从 231/441 毫秒降至 92 毫秒；饥饿最多减少 10 倍。
- 核心论点：治理 WLAN 尾时延的关键杠杆是信道占用时长控制，而非发送速率控制。

## Why it matters / what's new (EN)

The camera-ready confirms and sharpens what the July acceptance signal suggested: Concord attacks the burst/TXOP dimension of Wi-Fi tail latency, complementing the two threads already in this KB — BLADE's contention-window adaptation (2026-05-01_arxiv-blade-adaptive-contention, same USTC group) and the NSDI 26 Law link-layer redesign (2026-05-03_nsdi-law-802-11-low-latency-link-layer). The new claim with teeth is the control-variable inversion: rate control cannot reach WLAN tail latency because the bottleneck variable is medium-holding time, and a driver-local O(1) penalty on burst airtime suffices to cut p99.9 latency ~7-11× on unmodified clients. That deployment profile (AP-driver-only, no protocol change) distinguishes it from 802.11bn UHR's standards-track latency mechanisms (R-TWT, P-EDCA) tracked in this bin — Concord is the retrofit path for the installed base, while UHR is the forward path, and both now target the same P95/P99 latency numbers the bn PAR names. Remaining gap: full-text section detail (eval topology, penalty function form) awaits accessible PDF — recheck via ACM OpenTOC or an author preprint.

## Why it matters / what's new (ZH)

正式版证实并深化了 7 月录用信号的判断：Concord 攻击的是 Wi-Fi 尾时延的突发/TXOP 维度，与本 KB 已有的两条研究线互补——BLADE 的竞争窗口自适应（2026-05-01_arxiv-blade-adaptive-contention，同一中科大团队）和 NSDI 26 Law 链路层重构（2026-05-03_nsdi-law-802-11-low-latency-link-layer）。真正有分量的新主张是控制变量的反转：速率控制之所以够不到 WLAN 尾时延，是因为瓶颈变量是信道占用时长；而仅在驱动内对突发空口时间施加 O(1) 惩罚，就足以在客户端零改动的前提下把 99.9 分位时延削减约 7-11 倍。这种部署形态（仅 AP 驱动、零协议修改）使其区别于本桶跟踪的 802.11bn UHR 标准侧时延机制（R-TWT、P-EDCA）——Concord 是存量设备的改造路径，UHR 是前向路径，两者瞄准的正是 bn PAR 点名的 P95/P99 时延指标。剩余缺口：全文级细节（评测拓扑、惩罚函数形式）待 PDF 可访问后补充——可经 ACM OpenTOC 或作者预印本回访。
