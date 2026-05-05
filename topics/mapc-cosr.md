---
id: mapc-cosr
last_updated: 2026-05-05
---

## Current state (EN)

This bin holds **multi-AP coordination** in 802.11bn — Coordinated Spatial Reuse (Co-SR), Coordinated Beamforming (Co-BF), Non-Primary Channel Access (NPCA), Distributed Resource Units (DRU) — and the older but related multi-user MIMO / OFDMA literature whose modern extensions live alongside Co-SR. MAPC is the central new bn mechanism: neighbouring APs that used to back-off-then-transmit now coordinate to transmit *together* under a controlled rule. The bin also covers MediaTek's DSO+ family and similar vendor extensions for legacy-client subchannel allocation.

The KB's MAPC research is heavily ML / RL: hierarchical multi-armed bandits for Co-SR group selection (`2026-05-01_arxiv-hmab-co-sr`), coordinated bandits with reward-sharing (`2026-05-01_arxiv-ma-mab-spatial-reuse`), supervised ML for Co-SR scheduling (`2026-05-01_arxiv-ml-co-sr-scheduling`), and LLM-agents applied to MAPC (`2026-05-01_arxiv-mapc-llm-agents`). Performance work includes throughput analysis of Co-TDMA on bn (`2026-05-01_arxiv-co-tdma-802-11bn`), Co-SR latency analysis under Wi-Fi 8 constraints (`2026-05-01_arxiv-wifi8-latency-co-sr`), and NPCA modelling (`2026-05-04_arxiv-npca-802-11bn-modeling`). On the industry side, MediaTek's DSO+ shipped at WWC Mountain View 2026 (`2026-05-04_mediatek-wwc-dso-plus`) — bringing Wi-Fi 8 sub-channel allocation benefits to legacy Wi-Fi 6 / 7 clients via vendor IE.

Watch for: standards-track resolution of Co-SR group-formation primitives in TGbn D2.0 (July 2026); how the "limit to 2 simultaneous APs" rule shifts as comments are addressed; cross-vendor MAPC interop testing (today the proposals are mostly intra-vendor); embodiments of the academic ML schemes in vendor silicon (which would land as products in the industry sub-axis of this bin).

## Current state (ZH)

本桶覆盖 802.11bn 中的**多 AP 协调**——协调空间复用（Co-SR）、协调波束成形（Co-BF）、非主信道接入（NPCA）、分布式资源单元（DRU）——以及更早但相关的 MU-MIMO / OFDMA 文献，其现代延伸与 Co-SR 同处一线。MAPC 是 bn 的核心新机制：相邻 AP 由"退避后发射"转向受控规则下的"协同发射"。本桶亦覆盖 MediaTek DSO+ 等厂商面向遗留客户端子信道分配的扩展。

本 KB 的 MAPC 研究偏 ML / RL：用于 Co-SR 组选择的层级 MAB（`2026-05-01_arxiv-hmab-co-sr`）、带奖励共享的协调 MAB（`2026-05-01_arxiv-ma-mab-spatial-reuse`）、有监督 ML 调度 Co-SR（`2026-05-01_arxiv-ml-co-sr-scheduling`）、应用于 MAPC 的 LLM 智能体（`2026-05-01_arxiv-mapc-llm-agents`）。性能工作涵盖 bn 上 Co-TDMA 的吞吐分析（`2026-05-01_arxiv-co-tdma-802-11bn`）、Wi-Fi 8 约束下 Co-SR 时延分析（`2026-05-01_arxiv-wifi8-latency-co-sr`）和 NPCA 建模（`2026-05-04_arxiv-npca-802-11bn-modeling`）。产业侧，MediaTek 的 DSO+ 在 2026 年 WWC Mountain View 落地（`2026-05-04_mediatek-wwc-dso-plus`）——通过厂商 IE 将 Wi-Fi 8 子信道分配收益带给遗留 Wi-Fi 6 / 7 客户端。

待关注：TGbn D2.0（2026 年 7 月）中 Co-SR 组建立原语的标准化解决；"同时最多 2 个 AP"规则随评审推进的演变；跨厂商 MAPC 互操作测试（目前提案多为同厂商内部）；学界 ML 方案在厂商芯片中的具体实施（将以产品形式落入本桶的工业子轴）。
