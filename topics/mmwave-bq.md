---
id: mmwave-bq
last_updated: 2026-06-03
---

## Current state (EN)

This bin is reserved for **802.11bq Integrated mmWave** work — 60 GHz Wi-Fi tightly coupled to a sub-7 GHz link for discovery, association, and scheduling. The bin's structure has so far been standards-side: the topic appears as a *secondary* topic on a handful of plenary readouts (`2026-05-01_ieee-january-2026-readout`, `2026-05-01_ieee-march-2026-readout`, `2026-05-03_ieee-mentor-may-2026-pre-interim-digest`) and on `2026-05-01_arxiv-multiband-passive-sensing` (which uses mmWave TRN fields for sensing).

As of June 2026 the bin has its **first primary entry, and it is an optimization algorithm rather than a standards readout**: `2026-06-03_arxiv-cmab-802-11bq-multi-ap-mmwave-throughput` treats the sub-7 GHz↔mmWave split not as an architecture question but as a *joint configuration* problem. It models the two planes as coupled — sub-7 GHz contention parameters (CW_min, CCA threshold, RTS/CTS) decide channel access while mmWave beamwidth and MCS reservation margin decide payload delivery — and tunes all four per-AP with a grouped, feasibility-constrained combinatorial multi-armed bandit driven only by local throughput feedback (~47% higher aggregate throughput and ~49% faster convergence than a flat Thompson-sampling bandit at 10 APs). It is fully decentralized: no inter-AP coordination frame, no new IE. This connects `mmwave-bq` to `mapc-cosr` (the same coupled-plane CMAB framing generalizes to Co-SR / Co-BF parameter selection) and to `ai-for-wifi` (bandit/RL parameter tuning).

The unresolved 802.11bq design question this KB has tracked is the **mmWave beacon split**: whether 60 GHz APs should advertise their own beacon frames (standalone-capable architecture, higher complexity) or rely entirely on sub-7 GHz coordination (lower power, faster time-to-market). The January 2026 interim closed without prohibition either way.

Watch for: substantive 802.11bq draft progress; vendor silicon announcements (mmWave + Wi-Fi 7/8 dual-radio chips); more learning-based mmWave–sub-7 GHz scheduling/configuration work now that the first algorithmic entry has landed.

## Current state (ZH)

本桶留给 **802.11bq 融合 mmWave** 工作——60 GHz Wi-Fi 通过 sub-7 GHz 链路紧耦合完成发现、关联与调度。该桶此前的结构偏标准侧：主题作为*次属*出现在数份全会综述中（`2026-05-01_ieee-january-2026-readout`、`2026-05-01_ieee-march-2026-readout`、`2026-05-03_ieee-mentor-may-2026-pre-interim-digest`），以及 `2026-05-01_arxiv-multiband-passive-sensing`（利用 mmWave TRN 字段做感知）。

截至 2026 年 6 月，本桶迎来**首个主属条目，且是一篇优化算法而非标准综述**：`2026-06-03_arxiv-cmab-802-11bq-multi-ap-mmwave-throughput` 把 sub-7 GHz↔mmWave 的分工视为*联合配置*问题而非架构争议。它将两个平面建模为耦合关系——sub-7 GHz 竞争参数（CW_min、CCA 门限、RTS/CTS）决定信道接入，mmWave 波束宽度与 MCS 预留余量决定载荷送达——并用带可行性约束的分组组合多臂老虎机、仅凭本地吞吐反馈对四个参数逐 AP 调优（10 个 AP 时聚合吞吐高约 47%、收敛快约 49%，对比扁平汤普森采样老虎机）。其完全去中心化：无 AP 间协调帧、无新 IE。这将 `mmwave-bq` 与 `mapc-cosr`（同样的耦合面 CMAB 框架可推广到 Co-SR / Co-BF 参数选择）及 `ai-for-wifi`（老虎机/RL 参数调优）联系起来。

本 KB 一直追踪的 802.11bq 关键设计争议是 **mmWave 信标分裂**：60 GHz AP 是否要自行发射信标帧（独立可运行架构、复杂度更高），还是完全依赖 sub-7 GHz 协调（功耗更低、上市更快）。2026 年 1 月中期会议未对二者做禁令。

待关注：802.11bq 草案的实质性进展；厂商芯片公告（mmWave + Wi-Fi 7/8 双射频芯片）；在首个算法条目落地后，更多基于学习的 mmWave–sub-7 GHz 调度/配置工作。
