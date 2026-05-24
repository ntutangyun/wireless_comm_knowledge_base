---
id: 2026-05-24_arxiv-ilcp-6g-post-handover-cold-start
date_published: 2026-05-01
date_found: 2026-05-24
type: academic-paper
technology: cellular
title_en: "ILCP: Inductive Latent Context Persistence — closing the post-handover cold start in 6G RAN by transporting a 128-byte recurrent-state payload over Xn"
title_zh: "ILCP：归纳式潜在上下文持久化 —— 通过 Xn 接口传输 128 字节循环状态有效载荷，消除 6G RAN 切换冷启动问题"
url: "https://arxiv.org/abs/2605.00593"
source_quality: full
topics: [6G, handover, RAN, machine-learning, Xn-interface]
topic_primary: 6g-vision
topics_secondary: [cellular-ai, 5g-nr]
novelty_score: 4
---

## Summary (EN)

Banerjee & Awan (arxiv 2605.00593, submitted May 1 2026) address a problem that emerges when an ML-driven RAN runs into mobility: the AI/ML models inside a serving gNB carry **recurrent state** (LSTM hidden states, transformer KV caches, graph-message buffers) that summarises everything the model has learned about the UE's recent behaviour — and when the UE hands over to a neighbour gNB, that state is **lost**. The target gNB sees a "cold start": its model has to rebuild a usable representation of the UE over hundreds of milliseconds of new observations. During that window, handover decisions and resource allocations are noticeably worse, which manifests in measurable failures (ping-pongs, throughput drops, dropped sessions). The cold-start window is small in clock terms but large in 6G's intended use cases (XR, V2X, eMTC) where 50–250 ms of degraded decisioning is operationally bad.

**Inductive Latent Context Persistence (ILCP)** is the proposed fix. The source gNB **compresses** the relevant recurrent state into a compact **128-byte payload**, ships it over the existing **3GPP Xn interface** as part of the handover signalling, and the target gNB **adapts** it to its own model topology using a dynamic heterogeneous graph network. The adapter is the novelty: it doesn't assume source and target gNBs run identical models (different vendors, different generations), and it doesn't require a full retraining round-trip — the graph operates on the compressed latent and outputs an initialisation vector for the target model that captures the UE's behavioural fingerprint.

The headline numbers are strong. **Ping-pong handovers drop from 6.5% (baseline) and 22.6% (Transformer baseline) to 0.0%**. Post-handover decision accuracy improves by **+5.1 pp average / +13.3 pp peak** in the critical 50–250 ms window vs. cold-start. The Xn-transport overhead is tiny (128 bytes), and per-handover decision latency is **7.7 ms p99 on a single GPU** — comfortable for near-real-time RAN operation. Under perturbation (channel changes, vendor swap), ILCP holds at 10–13% HO failure vs. A3/A5 baseline rules degrading to 57–65%, suggesting the latent compression generalises rather than memorising.

## Summary (ZH)

Banerjee 与 Awan（arxiv 2605.00593，2026 年 5 月 1 日提交）解决了 ML 驱动 RAN 在移动性下出现的核心问题：服务 gNB 内的 AI/ML 模型携带**循环状态**（LSTM 隐藏状态、transformer KV 缓存、图消息缓冲），这些状态浓缩了模型对 UE 近期行为的全部学习内容 —— 而当 UE 切换到邻接 gNB 时，这些状态**完全丢失**。目标 gNB 经历"冷启动"：其模型需要数百毫秒的新观测才能重建对 UE 的可用表示。在此期间，切换决策与资源分配明显变差，表现为乒乓切换、吞吐下降、会话掉线。冷启动窗口在时钟上虽短，但对 6G 目标场景（XR、V2X、eMTC）而言，50–250 ms 的决策劣化在运营上不可接受。

**归纳式潜在上下文持久化（ILCP）**是其提出的解法。源 gNB 将相关循环状态**压缩**为紧凑的 **128 字节有效载荷**，作为切换信令的一部分通过现有 **3GPP Xn 接口**传送，目标 gNB 使用动态异构图网络**适配**到其自身模型拓扑。适配器是创新点：它不假设源/目标 gNB 运行相同模型（不同厂商、不同代际），也不需要完整再训练往返 —— 图作用于压缩的潜在表示，输出一个能捕捉 UE 行为指纹的目标模型初始化向量。

主要指标很强。**乒乓切换从基线 6.5%、Transformer 基线 22.6% 降至 0.0%**。切换后决策准确率在关键 50–250 ms 窗口内相对冷启动**平均提升 5.1 pp / 峰值 13.3 pp**。Xn 传输开销极小（128 字节），每次切换决策延迟 **7.7 ms p99**（单 GPU）—— 完全适合近实时 RAN 运行。扰动下（信道变化、厂商更换），ILCP 切换失败率维持在 10–13%，而 A3/A5 基线规则恶化到 57–65%，说明潜在压缩具有泛化性而非简单记忆。

## Key technical points (EN)

- **Problem framing**: ML-RAN handover cold start — recurrent ML state is lost when UE moves to target gNB, causing measurable degradation for 50–250 ms.
- **Mechanism**:
  - Source gNB **compresses** recurrent state → 128-byte payload.
  - Payload transported via existing **3GPP Xn interface** (no new air-interface signalling).
  - Target gNB **adapts** payload using dynamic heterogeneous graph model (handles vendor/model heterogeneity).
- **Results**:
  - Ping-pong rate: **0.0%** (vs 6.5% baseline / 22.6% Transformer).
  - Post-HO accuracy: **+5.1 pp avg, +13.3 pp peak** in 50–250 ms window.
  - Per-decision latency: **7.7 ms p99** on single GPU.
  - Robustness under perturbation: 10–13% HO failure vs 57–65% for A3/A5 rules.
- **Standards angle**: rides existing Xn interface — no new 3GPP work needed for transport; the adapter is purely vendor-side ML infrastructure.

## Key technical points (ZH)

- **问题界定**：ML-RAN 切换冷启动 —— 循环 ML 状态在 UE 移到目标 gNB 时丢失，导致 50–250 ms 内决策可测的劣化。
- **机制**：
  - 源 gNB 将循环状态**压缩**为 128 字节有效载荷。
  - 通过现有 **3GPP Xn 接口**传输（不引入新的空口信令）。
  - 目标 gNB 使用动态异构图模型**适配**有效载荷（处理厂商/模型异构性）。
- **结果**：
  - 乒乓切换率：**0.0%**（vs 基线 6.5% / Transformer 22.6%）。
  - 切换后准确率：**平均 +5.1 pp，峰值 +13.3 pp**（50–250 ms 窗口）。
  - 每决策延迟：**单 GPU 7.7 ms p99**。
  - 扰动下鲁棒性：HO 失败 10–13% vs A3/A5 规则的 57–65%。
- **标准接口角度**：复用现有 Xn 接口 —— 传输部分无需新的 3GPP 工作；适配器纯属厂商侧 ML 基础设施。

## Why it matters / what's new (EN)

The contribution is significant for two reasons. First, **the failure mode is real and underappreciated**: 6G's AI-native vision assumes ML models will sit in the RAN and improve over time — but mobility actively destroys that improvement at every handover boundary. ILCP is the first paper I've seen that names this problem cleanly and quantifies it (the 22.6% ping-pong rate for naive Transformer baseline is a striking number — vendor RAN AI without context-handoff is *worse* than rules-based A3/A5). Second, **the transport choice is pragmatic**: 128 bytes on Xn is invisible inside existing handover signalling overhead, and the adapter design accommodates heterogeneous gNB models — so the proposal can land in deployments without 3GPP needing to standardise a new context-handoff IE on N2/N3. The work pairs naturally with the existing `2026-05-21_kddi-ericsson-ai-uplink-ropt.md` and `2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator.md` entries that frame the agentic-RAN direction — those entries describe the goal state; ILCP supplies a primitive that mobility-aware agentic-RAN actually needs.

## Why it matters / what's new (ZH)

该贡献意义重大有两点。第一，**失效模式真实且被低估**：6G AI 原生愿景假设 ML 模型驻留 RAN 并随时间改进 —— 但每次切换边界处的移动性都在主动摧毁这种改进。ILCP 是我看到的第一篇清晰命名该问题并将其量化的论文（朴素 Transformer 基线的 22.6% 乒乓率是惊人数字 —— 没有上下文交接的厂商 RAN AI 比规则化 A3/A5 *更差*）。第二，**传输选择很务实**：Xn 上的 128 字节淹没在现有切换信令开销中，适配器设计容纳异构 gNB 模型 —— 该提案可在不需要 3GPP 在 N2/N3 上标准化新上下文交接 IE 的情况下落地。该工作与现有的 `2026-05-21_kddi-ericsson-ai-uplink-ropt.md` 和 `2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator.md` 条目天然配套 —— 后者描述目标状态；ILCP 提供了移动性感知的智能体 RAN 实际需要的一项原语。
