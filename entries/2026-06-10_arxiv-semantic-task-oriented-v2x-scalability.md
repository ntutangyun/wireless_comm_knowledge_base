---
id: 2026-06-10_arxiv-semantic-task-oriented-v2x-scalability
date_published: 2026-06-08
date_found: 2026-06-10
type: academic-paper
technology: cellular
title_en: "Semantic and Task-Oriented V2X Communications: Pushing the Limits of V2X Networks Scalability"
title_zh: "语义与任务导向的 V2X 通信：突破 V2X 网络可扩展性的极限"
url: "https://arxiv.org/abs/2606.09126"
source_quality: full
topics: [V2X, C-V2X, sidelink, semantic-communications, cooperative-perception]
topic_primary: 5g-nr
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)
This paper attacks the scalability ceiling of Vehicle-to-Everything (V2X) networks by replacing the dominant "deliver everything reliably and on time" paradigm with a semantic and task-oriented communication approach that selects message content by its *relevance to the intended receivers*. The authors (Lusvarghi, Gozalvez, Khan, Ucar, Sepulcre, Altintas — the UMH Elche / Toyota InfoTech V2X group) frame the problem around cooperative perception (sensor-data sharing in ETSI terms): in dense traffic, every vehicle broadcasting full object lists saturates the shared channel, so the marginal message carries mostly redundant information. By transmitting only the content that changes a receiver's task state, channel resources are used far more efficiently.

The evaluation is built on C-V2X sidelink at 5.9 GHz (QPSK), using the openly released C-V2X sidelink analytical reception models and the ETSI CBR-based (Channel Busy Ratio) congestion-control mechanism that drops/limits transmissions under load. Against the conventional content-agnostic baseline, semantic/task-oriented V2X increases the number of supported vehicles by up to **4.1×** in high-density single-channel scenarios (gains preserved in multi-channel scenarios), **nearly doubles** the probability of successfully serving a vehicle with all the relevant information it needs, and cuts the **inter-reception time (IRT)** between consecutive useful messages by up to **67%** — a more regular, frequent exchange that directly benefits safety applications.

The contribution is a quantified demonstration that relevance-based content selection — not better PHY or more spectrum — is the lever for V2X scalability, and that the gains hold under realistic sidelink congestion control rather than in an idealized channel.

## Summary (ZH)
本文针对车联网（V2X）网络的可扩展性瓶颈，提出用"语义与任务导向通信"取代当前"可靠且及时地传输全部信息"的主导范式——按消息内容对目标接收方的**相关性**来筛选发送内容。作者为 UMH Elche / 丰田 InfoTech 的 V2X 团队。其问题围绕协作感知（ETSI 术语中的传感器数据共享）展开：在高密度交通下，每辆车广播完整目标列表会使共享信道饱和，边际消息大多是冗余信息。仅传输能改变接收方任务状态的内容，可大幅提升信道资源利用率。

评估基于 5.9 GHz 的 C-V2X 旁链路（sidelink，QPSK 调制），采用公开发布的 C-V2X 旁链路接收解析模型与 ETSI 基于信道忙比（CBR）的拥塞控制机制（在高负载下丢弃/限制发送）。相比内容无关的传统基线，语义/任务导向 V2X 在高密度单信道场景下将可支持车辆数提升最多 **4.1 倍**（多信道场景下增益依旧保持），将"成功向某车辆送达其所需全部相关信息"的概率**几乎翻倍**，并将连续有效消息之间的**接收间隔时间（IRT）**缩短最多 **67%**——更规律、更频繁的信息交换直接利好安全类应用。

本文的贡献在于量化证明：撬动 V2X 可扩展性的杠杆是基于相关性的内容筛选，而非更强的物理层或更多频谱，且这些增益在真实的旁链路拥塞控制下依然成立。

## Key technical points (EN)
- **Paradigm shift**: from reliability/timeliness-first to relevance-first message-content selection (semantic + task-oriented), evaluated on the cooperative-perception use case.
- **Radio layer**: C-V2X **sidelink** at 5.9 GHz, QPSK; reception modeled with openly released C-V2X sidelink analytical models; **ETSI CBR-based congestion control** implemented (drops transmissions when channel load is high).
- **Headline numbers**: up to **4.1×** more supported vehicles (high-density single-channel; preserved multi-channel); **~2×** probability of delivering all required relevant info; up to **67%** lower inter-reception time.
- **Why the gains appear**: relevance filtering removes redundant transmissions, freeing channel airtime under CBR congestion control, which both raises capacity and regularizes IRT.
- **Sensitivity analysis**: scalability gains analyzed across different driving conditions, confirming robustness rather than a single-scenario artifact.

## Key technical points (ZH)
- **范式转变**：从"可靠性/时效性优先"转为"相关性优先"的消息内容筛选（语义+任务导向），以协作感知用例评估。
- **无线层**：5.9 GHz 的 C-V2X **旁链路**，QPSK；接收采用公开的 C-V2X 旁链路解析模型；实现 **ETSI 基于 CBR 的拥塞控制**（高负载时丢弃发送）。
- **关键数字**：可支持车辆数最多提升 **4.1 倍**（高密度单信道；多信道下保持）；送达全部所需相关信息的概率**约 2 倍**；接收间隔时间最多降低 **67%**。
- **增益来源**：相关性筛选剔除冗余发送，在 CBR 拥塞控制下释放信道时长，既提升容量又使 IRT 更规律。
- **敏感性分析**：在不同驾驶条件下分析可扩展性增益，确认其稳健性而非单一场景的偶然结果。

## Why it matters / what's new (EN)
The KB's existing V2X entry — `2026-05-26_arxiv-v2x-mode0-rcu-safety` (Mode 0, roadside-computing-assisted resource allocation) — works the *resource-allocation* axis of C-V2X scalability. This paper works a complementary and largely orthogonal axis: *what to send*, not *how to schedule it*. It is the KB's first entry to quantify semantic / task-oriented communications on a realistic C-V2X sidelink stack with ETSI congestion control (most semantic-comms work is evaluated on idealized point-to-point links). The relevance-as-scalability-lever result is a concrete data point for the broader 6G "semantic communications" thesis, grounded here in a deployed-standard vehicular setting.

## Why it matters / what's new (ZH)
KB 现有的 V2X 条目 `2026-05-26_arxiv-v2x-mode0-rcu-safety`（Mode 0，路侧计算辅助的资源分配）处理的是 C-V2X 可扩展性的*资源分配*维度；本文处理的是互补且基本正交的维度：*发送什么*而非*如何调度*。这是 KB 中首个在带 ETSI 拥塞控制的真实 C-V2X 旁链路协议栈上量化语义/任务导向通信的条目（多数语义通信工作仅在理想点对点链路上评估）。"相关性即可扩展性杠杆"的结论，为更广泛的 6G"语义通信"命题提供了一个落地于已部署标准车联网场景的具体数据点。
