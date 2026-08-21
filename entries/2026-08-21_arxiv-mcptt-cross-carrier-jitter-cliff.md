---
id: 2026-08-21_arxiv-mcptt-cross-carrier-jitter-cliff
date_published: 2026-08-20
date_found: 2026-08-21
type: academic-paper
technology: cellular
title_en: "Empirical Evaluation of Cross-Carrier MCPTT & OTT MCX Interoperability in High-Density Environments"
title_zh: "高密度场景下跨运营商 MCPTT 与 OTT MCX 互操作性的实测评估"
url: "https://arxiv.org/abs/2608.19554"
source_quality: full
topics: [MCPTT, MCX, mission-critical-communications, QoS, network-slicing, POLQA, jitter, public-safety, DAS]
topic_primary: network-slicing
topics_secondary: [4g-lte]
novelty_score: 3
---

## Summary (EN)
Eman Hammad (Texas A&M iSTAR Lab), Derek Ladd, Walt Magnussen and Michael Fox (Texas A&M CACN), and Sridhar Kowdley (US Department of Homeland Security) — funded by a DHS grant — deliver a rare field-measured account of Mission-Critical Push-To-Talk (MCPTT) performance under real mass-crowd saturation, accepted to IEEE WF-PST 2026. They deployed twelve identical Android smartphones across two commercial carriers at seven test points (one macro-cell, six inside a Distributed Antenna System) at Texas A&M's Kyle Field during a football game with 105,815 attendees, running automated calls in four configurations per carrier: prioritized 3GPP-compliant MCPTT versus best-effort OTT push-to-talk. Voice quality was scored with POLQA MOS, transport-layer jitter/delay, packet delivery, and connection success rate.

The headline finding is a **non-linear "cliff-edge" jitter failure model**, not a gradual quality decline: voice quality holds until the maximum temporal offset reaches roughly 850 ms; at a 1,200 ms operational drop boundary the adaptive de-jitter buffer underflows; and once instantaneous jitter exceeds a ~150 ms critical threshold, consecutive frame drops collapse the codec's state machine and the call fails almost immediately. Standard OTT PTT under congestion averaged POLQA 0.58–3.16 with wide, multi-modal variance and connection success near 60% in the worst sector; prioritized MCPTT stayed unimodal at 3.4–4.1 MOS with near-100% success — except in the most extreme uplink congestion (student-section test point), where even prioritized traffic dropped to mean POLQA 2.91, showing that QoS priority markings alone can be overwhelmed. An ANOVA across the two identical handsets (F = 0.3149, p = 0.5754) confirmed the degradation is an infrastructure property (DAS scheduler behavior and backhaul queue management), not a device limitation.

## Summary (ZH)
德州农工大学 iSTAR 实验室的 Eman Hammad、该校 CACN 中心的 Derek Ladd、Walt Magnussen、Michael Fox，以及美国国土安全部（DHS）的 Sridhar Kowdley——在 DHS 资助下——给出了一份罕见的、在真实人群密集场景下对关键任务一键通（MCPTT）性能进行实测的报告，已被 IEEE WF-PST 2026 接收。他们在德州农工大学 Kyle Field 体育场（一场有 105,815 名观众的橄榄球赛期间）部署了十二台相同的安卓手机，覆盖两家商业运营商、七个测试点（一个宏基站、六个分布式天线系统 DAS 覆盖区），每家运营商运行四种配置的自动化通话：符合 3GPP 标准、具有 QoS 优先级的 MCPTT，对比尽力而为的 OTT 一键通应用。语音质量通过 POLQA MOS 评分，并采集传输层抖动/时延、丢包率与连接成功率。

核心发现是一个**非线性"悬崖式"抖动失效模型**，而非渐进式质量下降：当最大时间偏移达到约 850 毫秒之前语音质量保持稳定；在 1,200 毫秒的"运行丢弃边界"处，自适应去抖动缓冲区发生下溢；一旦瞬时抖动超过约 150 毫秒的临界阈值，连续帧丢失会使编解码器状态机崩溃，通话几乎立即中断。拥塞下的标准 OTT 一键通平均 POLQA 为 0.58–3.16，分布呈多峰、方差极大，最差扇区连接成功率仅约 60%；具有优先级的 MCPTT 则保持单峰分布，MOS 在 3.4–4.1 之间，成功率接近 100%——但在上行拥塞最极端的学生看台测试点，即便是优先级流量的平均 POLQA 也降至 2.91，说明仅靠 QoS 优先级标记在极端拥塞下仍可能被压垮。对两台完全相同手机的方差分析（ANOVA，F = 0.3149，p = 0.5754）证实了性能下降是基础设施属性（DAS 调度器行为与回传队列管理），而非终端设备的限制。

## Key technical points (EN)
- First empirical, DHS-funded field measurement of cross-carrier MCPTT vs. OTT PTT interoperability at a real 100k+-attendee mass-gathering event (macro-cell + 6-point in-building DAS).
- Non-linear cliff-edge jitter model: stable to ~850 ms max temporal offset, 1,200 ms operational drop boundary (de-jitter buffer underflow), ~150 ms instantaneous-jitter threshold triggers near-immediate codec/call collapse.
- Standard OTT PTT under load: POLQA 0.58–3.16, multi-modal/high-variance (σ = 1.10–1.43), ~60% connection success in worst sector.
- Prioritized 3GPP MCPTT: unimodal 3.4–4.1 POLQA MOS, near-100% success — except the most extreme uplink-congested sector, where mean POLQA still fell to 2.91.
- ANOVA across identical handsets (F=0.3149, p=0.5754) isolates the failure to network infrastructure (DAS scheduler / backhaul queueing), not device hardware.
- Recommends operational focus on upper-tail jitter distributions (not mean delay), end-to-end network slicing with explicit radio-resource reservation, and pre-negotiated cross-carrier Mutual Aid Roaming / hard-coded QoS priority agreements for emergency responders.
- Future work flagged: standalone-5G MCPTT prioritization, cross-carrier handover latency, and MEC-based backhaul-queuing mitigation.

## Key technical points (ZH)
- 首个在真实十万级观众大型聚集活动中（宏基站 + 6 点室内 DAS）对跨运营商 MCPTT 与 OTT PTT 互操作性进行的、由 DHS 资助的实测研究。
- 非线性悬崖式抖动模型：最大时间偏移约 850 毫秒以内保持稳定；1,200 毫秒为"运行丢弃边界"（去抖动缓冲区下溢）；瞬时抖动超过约 150 毫秒的临界阈值即触发编解码器/通话近乎瞬间崩溃。
- 拥塞下的标准 OTT 一键通：POLQA 0.58–3.16，多峰、高方差（σ = 1.10–1.43），最差扇区连接成功率约 60%。
- 具有优先级的 3GPP MCPTT：单峰分布，POLQA MOS 在 3.4–4.1 之间，成功率接近 100%——但在上行拥塞最极端的扇区，平均 POLQA 仍降至 2.91。
- 对相同手机的方差分析（F=0.3149，p=0.5754）将性能下降归因于网络基础设施（DAS 调度器/回传队列管理），而非终端硬件。
- 建议运营关注抖动分布的高尾部而非平均时延，采用端到端网络切片与显式无线资源预留，并为应急响应方建立预先协商的跨运营商互助漫游协议与硬编码 QoS 优先级约定。
- 提出的未来方向：独立组网 5G 下的 MCPTT 优先级、跨运营商切换时延，以及基于 MEC 的回传队列缓解方案。

## Why it matters / what's new (EN)
The KB's mission-critical-communications coverage so far has been standards-side (2026-07-09_3gpp-sa6-mcx-6g-study: 3GPP SA6 opening the FS_MCX_MC study toward 6G). This paper is the empirical counterpart — the first KB entry to actually measure MCPTT under saturation on live commercial networks rather than describe the standard. The quantified cliff-edge jitter model (a specific 150 ms / 1,200 ms / 850 ms triplet) gives network planners and the 3GPP MCX line of work a concrete design target that upper-tail jitter, not average delay, is the metric that predicts catastrophic voice-path failure — directly actionable for the network-slicing and QoS-provisioning mechanisms 3GPP is standardizing for public-safety broadband.

## Why it matters / what's new (ZH)
KB 此前对关键任务通信的覆盖偏标准侧（2026-07-09_3gpp-sa6-mcx-6g-study：3GPP SA6 启动面向 6G 的 FS_MCX_MC 研究）。本文是其实测对照——KB 中首个在真实商业网络饱和状态下实际测量 MCPTT 性能而非描述标准本身的条目。量化的悬崖式抖动模型（150 毫秒／1,200 毫秒／850 毫秒三个具体数值）为网络规划者与 3GPP MCX 相关工作提供了明确的设计目标：预测语音链路灾难性失败的指标是抖动分布的高尾部，而非平均时延——这对 3GPP 正在为公共安全宽带标准化的网络切片与 QoS 资源配置机制具有直接的可操作意义。

## Images
