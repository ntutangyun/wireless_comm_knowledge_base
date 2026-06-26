---
id: 2026-06-26_arxiv-kom8ndor-wifi8-simulator
date_published: 2026-06-24
date_found: 2026-06-26
type: academic-paper
title_en: "Kom8ndor: An IEEE 802.11bn-Oriented Simulator for Wi-Fi 8 and Beyond"
title_zh: "Kom8ndor：面向 IEEE 802.11bn 的 Wi-Fi 8 及后续仿真器"
url: "https://arxiv.org/abs/2606.25435"
technology: wifi
source_quality: full
topics: [802.11bn, MAPC, Co-SR, Co-BF, NPCA, DSO, simulator, Wi-Fi-8]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr, ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Kom8ndor (Wilhelmi, Barrachina-Muñoz, Bellalta, UPF; submitted 24 Jun 2026) is an open-source discrete-event simulator that extends the established Komondor platform with IEEE 802.11bn / Wi-Fi 8 Ultra-High-Reliability (UHR) features. It is the tooling companion to the group's June 2026 "Tutorial on 802.11bn Multi-AP Coordination" (already in the KB) — where the tutorial named Kom8ndor as its evaluation engine, this paper documents the simulator itself and releases it under GNU GPLv3 at github.com/wn-upf/Komondor.

The simulator's headline additions are the full **Multi-AP Coordination (MAPC)** family — Co-TDMA (orthogonal time-slicing of a shared TXOP), Co-SR (coordinated spatial reuse via simultaneous reduced-power transmission), and Co-BF (coordinated beamforming with zero-forcing precoding and ULAs that null peer-BSS receivers) — plus **NPCA** (Non-Primary Channel Access, temporary switching to a pre-configured secondary channel on OBSS detection, via an ICF/ICR exchange) and **DSO** (Dynamic Subband Operation, round-robin allocation of narrow-band STAs onto secondary subchannels during wide-band TXOPs). New MAC states (TRANSMIT_ICF, WAIT_ICR, WAIT_MU-RTS) and a preamble-puncturing bitmap round out the 802.11bn channel-access model on top of the existing EDCA/DCF baseline and a set of deterministic / token-passing backoff variants (deterministic backoff, "It's Your Turn", ECA, synchronized backoff).

The second pillar is **native ML integration**. Kom8ndor ships a built-in Multi-Armed Bandit (with ε-greedy exploration) and a new socket-based bridge (POSIX Unix-domain sockets, 32-bit integer headers + feature vectors) that lets external Python models — PyTorch, TensorFlow, scikit-learn DNNs — drive in-simulation decisions across decentralized, coordinated, and centralized agent topologies. Tutorial examples show Co-BF delivering the largest throughput gain among MAPC modes (SINR gains from coordinated nulling) and DSO/NPCA enabling simultaneous scheduling under overlapping spectrum. The paper positions Kom8ndor against ns-3 explicitly: ns-3 is high-fidelity but Wi-Fi-7-only and slow to evolve, whereas Kom8ndor trades PHY/MAC fidelity for rapid 802.11bn prototyping speed and first-class ML hooks.

## Summary (ZH)
Kom8ndor（Wilhelmi、Barrachina-Muñoz、Bellalta，UPF，2026 年 6 月 24 日提交）是一款开源离散事件仿真器，在成熟的 Komondor 平台上扩展了 IEEE 802.11bn / Wi-Fi 8 超高可靠性（UHR）特性。它是该组 2026 年 6 月《802.11bn 多 AP 协调教程》（已收录于 KB）的工具配套——教程将 Kom8ndor 列为其评测引擎，而本文记录仿真器本身，并以 GNU GPLv3 发布于 github.com/wn-upf/Komondor。

仿真器的核心新增是完整的**多 AP 协调（MAPC）**族——Co-TDMA（对共享 TXOP 做正交时隙划分）、Co-SR（通过同时降功率发送实现协调空间复用）、Co-BF（基于迫零预编码与均匀线阵、对邻 BSS 接收者置零的协调波束成形）——以及 **NPCA**（非主信道接入：检测到 OBSS 时经 ICF/ICR 交互临时切换到预配置的辅信道）和 **DSO**（动态子带操作：在宽带 TXOP 期间用轮询将窄带 STA 分配到辅子信道）。新增 MAC 状态（TRANSMIT_ICF、WAIT_ICR、WAIT_MU-RTS）与前导码穿孔位图，在既有 EDCA/DCF 基线及一组确定性/令牌传递退避变体（确定性退避、"It's Your Turn"、ECA、同步退避）之上补全了 802.11bn 信道接入模型。

第二大支柱是**原生 ML 集成**。Kom8ndor 内置多臂赌博机（ε-贪婪探索），并新增基于套接字的桥接（POSIX Unix 域套接字、32 位整型头部+特征向量），使外部 Python 模型（PyTorch、TensorFlow、scikit-learn DNN）能在去中心、协调、集中三类智能体拓扑下驱动仿真内决策。教程示例显示 Co-BF 在各 MAPC 模式中吞吐增益最大（来自协调置零的 SINR 增益），DSO/NPCA 则在重叠频谱下实现并行调度。论文明确将 Kom8ndor 对标 ns-3：ns-3 高保真但仅支持 Wi-Fi 7 且演进慢，而 Kom8ndor 以 PHY/MAC 保真度换取 802.11bn 快速原型速度与一流的 ML 接口。

## Key technical points (EN)
- Open-source (GNU GPLv3) discrete-event simulator extending Komondor to 802.11bn / Wi-Fi 8 UHR; repo github.com/wn-upf/Komondor.
- Full MAPC family modeled: **Co-TDMA**, **Co-SR** (simultaneous reduced-power), **Co-BF** (zero-forcing + ULA nulling of peer BSS).
- **NPCA** (ICF/ICR-triggered secondary-channel switch on OBSS) and **DSO** (round-robin narrow-band STA subchannel allocation) implemented; preamble-puncturing bitmap.
- New MAC FSM states: TRANSMIT_ICF, WAIT_ICR, WAIT_MU-RTS; plus deterministic-backoff / IYT / ECA / synchronized-backoff variants alongside EDCA.
- Native ML: built-in MAB (ε-greedy) + Unix-domain-socket bridge to external PyTorch/TF/sklearn models; decentralized / coordinated / centralized agent topologies.
- Tutorial results: Co-BF gives the largest MAPC throughput gain; DSO/NPCA enable simultaneous scheduling under overlapping spectrum. Positioned as a faster, ML-first alternative to Wi-Fi-7-only ns-3.

## Key technical points (ZH)
- 开源（GNU GPLv3）离散事件仿真器，将 Komondor 扩展至 802.11bn / Wi-Fi 8 UHR；仓库 github.com/wn-upf/Komondor。
- 建模完整 MAPC 族：**Co-TDMA**、**Co-SR**（同时降功率）、**Co-BF**（迫零 + ULA 对邻 BSS 置零）。
- 实现 **NPCA**（检测 OBSS 时经 ICF/ICR 切换辅信道）与 **DSO**（轮询将窄带 STA 分配到子信道）；前导码穿孔位图。
- 新增 MAC 状态机状态：TRANSMIT_ICF、WAIT_ICR、WAIT_MU-RTS；并提供确定性退避 / IYT / ECA / 同步退避等变体及 EDCA。
- 原生 ML：内置 MAB（ε-贪婪）+ 经 Unix 域套接字桥接外部 PyTorch/TF/sklearn 模型；去中心/协调/集中三类智能体拓扑。
- 教程结果：Co-BF 的 MAPC 吞吐增益最大；DSO/NPCA 在重叠频谱下实现并行调度。定位为比仅支持 Wi-Fi 7 的 ns-3 更快、ML 优先的替代方案。

## Why it matters / what's new (EN)
The KB already holds the group's 802.11bn MAPC tutorial (mapc-cosr); this entry completes that thread by documenting and releasing the evaluation engine itself, making the tutorial's numbers reproducible and giving the community a Wi-Fi-8-native, ML-instrumented simulator that ns-3 does not yet match. It is a tooling/infrastructure contribution rather than a new air-interface mechanism — every modeled feature (Co-SR/Co-BF/Co-TDMA, NPCA, DSO) is already in the 802.11bn draft — so its value is in lowering the cost of Wi-Fi 8 + AI-for-Wi-Fi experimentation, not in introducing a novel protocol. Worth watching as the de-facto open simulator the academic MAPC literature standardizes on.

## Why it matters / what's new (ZH)
KB 已收录该组的 802.11bn MAPC 教程（mapc-cosr）；本条目通过记录并发布评测引擎本身补全了这条线索，使教程数据可复现，并为社区提供一款 ns-3 尚不具备的 Wi-Fi 8 原生、带 ML 仪表的仿真器。它属于工具/基础设施贡献，而非新空口机制——所建模的每项特性（Co-SR/Co-BF/Co-TDMA、NPCA、DSO）均已在 802.11bn 草案中——其价值在于降低 Wi-Fi 8 + AI-for-Wi-Fi 实验成本，而非引入新协议。值得关注它是否会成为学术 MAPC 文献标准化采用的事实开源仿真器。

## Images
![Kom8ndor MAPC scenario: two overlapping 40 MHz BSSs | Kom8ndor MAPC 场景：两个重叠的 40 MHz BSS](https://arxiv.org/html/2606.25435v1/x6.png)
![MAPC throughput comparison (Co-TDMA / Co-SR / Co-BF) | MAPC 吞吐对比（Co-TDMA / Co-SR / Co-BF）](https://arxiv.org/html/2606.25435v1/x7.png)
![DSO/NPCA throughput under overlapping spectrum | 重叠频谱下 DSO/NPCA 吞吐](https://arxiv.org/html/2606.25435v1/x9.png)
