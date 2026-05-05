---
id: roaming-mobility
last_updated: 2026-05-05
---

## Current state (EN)

This bin covers **roaming and mobility** in Wi-Fi: BSS-Transition (802.11k / v / r), MLO-roam, predictive / context-aware roaming, MLME extensions for roaming context, and mobility-relevant standards activity. Roaming has been a perennially under-served topic in research (most academic work treats associations as static), but 802.11bn is changing that — the bn EPCS work and the rise of agentic-AI predictive roaming are putting roaming back in the design centre.

Two entries are primary here. `2026-05-01_arxiv-on-device-llm-roaming` proposes an on-device LLM that predicts the next-best AP from observed context — a concrete instance of `agentic-wifi` applied to roaming. `2026-05-03_ieee-11bn-epcs-context-transfer-seamless-roaming` is Samsung's May 2026 pre-interim contribution on **EPCS (Emergency Preparedness Communications Service) context transfer between APs**, which extends the 802.11bn roaming machinery to carry session / QoS / security state across a roam without requiring a fresh 4-way handshake. The `2026-05-04_rcr-mdu-wifi-msp-vs-carriers` deployment piece is in the bin as primary because the MDU multi-AP context is a roaming context (one client, many APs, daily handoffs), and the `2026-05-05_arxiv-mac-rerandomization-runtime` entry has roaming-mobility implications for cross-link MAC consistency (carried as secondary).

Watch for: how EPCS context-transfer evolves through TGbn — observable in IEs is patentable surface (cf. `roaming-context-mlme-extension` candidate already in the patent pipeline from Apr/May 2026); MLO-roam mechanisms specifically (do you keep all setup links on roam, or only the primary?); ML / agent-driven predictive roaming benchmarked on real mobility traces; cross-references to `security-privacy` (the EPCS work touches authentication state and is therefore a security candidate too).

## Current state (ZH)

本桶覆盖 Wi-Fi 中的**漫游与移动性**：BSS 切换（802.11k / v / r）、MLO 漫游、预测式 / 上下文感知漫游、面向漫游上下文的 MLME 扩展，以及与移动性相关的标准化活动。漫游在研究中长期是未被充分服务的主题（多数学术工作将关联视为静态），但 802.11bn 正在改变这一现状——bn 的 EPCS 工作和智能体 AI 预测式漫游的兴起，把漫游重新推回设计核心。

本桶有两条主属。`2026-05-01_arxiv-on-device-llm-roaming` 提出基于设备端 LLM 的下一最佳 AP 预测——`agentic-wifi` 应用于漫游的具体实例。`2026-05-03_ieee-11bn-epcs-context-transfer-seamless-roaming` 是 Samsung 在 2026 年 5 月中期前的贡献，主题是 **AP 间 EPCS（应急准备通信服务）上下文转移**，把 802.11bn 漫游机制扩展为可在漫游中携带会话 / QoS / 安全状态、无需重做四次握手。`2026-05-04_rcr-mdu-wifi-msp-vs-carriers` 部署型条目作为主属在桶内，因为 MDU 多 AP 场景本质上是漫游场景（一客户、多 AP、每日切换）；`2026-05-05_arxiv-mac-rerandomization-runtime` 涉及跨链路 MAC 一致性，作为次属归入本桶。

待关注：EPCS 上下文转移在 TGbn 中的演进——IE 中可观察的部分构成可专利面（参考 4-5 月已建档的候选 `roaming-context-mlme-extension`）；专属 MLO 漫游机制（漫游时保留全部建立链路还是仅主链路？）；在真实移动轨迹上基准化的 ML / 智能体预测式漫游；与 `security-privacy` 的交叉（EPCS 工作触及认证状态，因此同时是安全候选）。
