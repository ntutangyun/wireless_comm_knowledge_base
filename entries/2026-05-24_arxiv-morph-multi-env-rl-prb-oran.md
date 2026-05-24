---
id: 2026-05-24_arxiv-morph-multi-env-rl-prb-oran
date_published: 2026-05-01
date_found: 2026-05-24
type: academic-paper
technology: cellular
title_en: "MORPH: Multi-Environment Orchestrated RL for slice-aware PRB scheduling in O-RAN — fuses iPerf-on-OAI measurements + empirical MCS distributions + scalable PHY simulator into one training signal"
title_zh: "MORPH：面向 O-RAN 切片感知 PRB 调度的多环境编排式强化学习 —— 将 OAI 上的 iPerf 测量 + 经验 MCS 选择分布 + 可扩展 PHY 仿真器融合为单一训练信号"
url: "https://arxiv.org/abs/2605.01128"
source_quality: full
topics: [O-RAN, 5G-NR, reinforcement-learning, PRB-allocation, network-slicing]
topic_primary: open-ran
topics_secondary: [cellular-ai, network-slicing]
novelty_score: 3
---

## Summary (EN)

Dorcheh, Seyfi, Barker, & Afghah (arxiv 2605.01128, submitted May 1 2026) tackle a recurring problem with RL-trained O-RAN xApps for **physical resource block (PRB) scheduling**: where do you get the training data? Two existing options each have a fatal weakness. **Analytical / PHY-only simulators** scale beautifully (millions of episodes, cheap) but miss protocol-stack effects — signalling overhead, ARQ/HARQ retransmissions, scheduler-application interactions — that dominate real throughput. **OpenAirInterface (OAI) + real measurements** capture those effects accurately but train painfully slowly and don't generalise outside the test bench.

**MORPH** (Multi-Environment Orchestrated Reinforcement-learning Pipeline) refuses the choice. It trains a single PRB-allocation policy on **three throughput sources fused into one reward signal**:

1. **Application-layer measurements via iPerf running on the OAI 5G-NR RF-simulator stack** — captures real packet flow, real MAC/RLC retransmits, real scheduler queue dynamics.
2. **Empirical MCS-selection distributions** — empirically observed link-adaptation behaviour from real link-level traces, used to sample realistic MCS outcomes for given SINR.
3. **Scalable PHY-fidelity OFDM simulator** — fills in the rare-event tails (high-mobility, deep fades) that iPerf-on-OAI can't sample in reasonable wall time.

The policy targets **slice-aware PRB allocation within a single gNB**: given multiple slices with different SLAs (e.g. an eMBB slice and a URLLC slice contending for the same PRB pool), allocate to honour all slice SLAs simultaneously. The orchestration step decides at each step which signal to weight more heavily based on the current state (e.g. lean on iPerf for slow-time-varying scenarios, lean on the PHY simulator for rare deep-fade events).

The result, per the abstract, is **more robust slice-wise performance and improved SLA compliance** vs. agents trained on any single source — OAI-only or simulator-only. The contribution is a training-methodology pattern as much as a particular policy: the recipe (fuse measurement-grounded + behavioural-empirical + scalable-simulator signals via orchestrated weighting) is portable to other O-RAN xApp targets (handover, beam-management, energy-saving).

## Summary (ZH)

Dorcheh、Seyfi、Barker 与 Afghah（arxiv 2605.01128，2026 年 5 月 1 日提交）针对 RL 训练的 O-RAN xApp 用于**物理资源块（PRB）调度**的反复出现的问题：训练数据从哪里来？现有两种选择各有致命缺陷。**纯解析/PHY 仿真器**扩展性极佳（百万级回合、成本低），但遗漏协议栈效应 —— 信令开销、ARQ/HARQ 重传、调度器-应用交互 —— 而这些往往主导实际吞吐。**OpenAirInterface (OAI) + 实测**能准确捕捉上述效应，但训练痛苦缓慢且无法泛化到测试台之外。

**MORPH**（多环境编排式强化学习管道）拒绝二选一。它在**三种吞吐源融合为单一奖励信号**上训练单一 PRB 分配策略：

1. **基于 OAI 5G-NR RF-simulator 协议栈上运行的 iPerf 应用层测量** —— 捕捉真实分组流、真实 MAC/RLC 重传、真实调度器队列动态。
2. **经验 MCS 选择分布** —— 实测链路自适应行为，用于根据给定 SINR 采样合实际的 MCS 结果。
3. **可扩展的 PHY 保真 OFDM 仿真器** —— 填补 iPerf-on-OAI 在合理墙钟内无法采样的稀有事件尾部（高移动性、深衰落）。

策略目标为**单 gNB 内的切片感知 PRB 分配**：给定具有不同 SLA 的多个切片（如争夺同一 PRB 池的 eMBB 切片与 URLLC 切片），分配以同时满足所有切片 SLA。编排步骤根据当前状态决定每一步对哪种信号加大权重（如缓变场景偏重 iPerf，稀有深衰落事件偏重 PHY 仿真器）。

摘要所示结果是：相比单一来源训练的代理（仅 OAI 或仅仿真器），具有**更鲁棒的切片侧性能与更好的 SLA 合规性**。贡献既是特定策略，也是训练方法学模式：该配方（融合测量基准 + 行为经验 + 可扩展仿真信号，通过编排加权）可移植到其他 O-RAN xApp 目标（切换、波束管理、节能）。

## Key technical points (EN)

- **Problem**: PRB-allocation xApp RL training is gated by quality/scale of the training environment.
- **Three signal sources fused into one reward**:
  1. iPerf application-layer measurements on OAI 5G-NR RF-simulator (full stack).
  2. Empirical MCS-selection distributions (real link-adaptation behaviour).
  3. Scalable PHY-fidelity OFDM simulator (rare-event tails).
- **Orchestration step** weights sources per state — exploits each one where it's accurate.
- **Target task**: slice-aware PRB allocation under multi-slice SLA contention within a single gNB.
- **Stack**: OpenAirInterface (OAI), open-source — replicable.
- **Reported result**: more robust slice-wise performance + improved SLA compliance vs single-source agents.

## Key technical points (ZH)

- **问题**：PRB 分配 xApp 的 RL 训练受限于训练环境的质量/规模。
- **三种信号源融合为单一奖励**：
  1. OAI 5G-NR RF-simulator 上的 iPerf 应用层测量（完整协议栈）。
  2. 经验 MCS 选择分布（真实链路自适应行为）。
  3. 可扩展的 PHY 保真 OFDM 仿真器（稀有事件尾部）。
- **编排步骤**按状态对来源加权 —— 在各自精确的领域内充分利用。
- **目标任务**：单 gNB 内多切片 SLA 竞争下的切片感知 PRB 分配。
- **平台**：OpenAirInterface (OAI)，开源，可复现。
- **报告结果**：相比单一来源代理，切片侧性能更鲁棒、SLA 合规更好。

## Why it matters / what's new (EN)

The methodology angle is more valuable than the specific PRB policy. Most RL-in-O-RAN papers either use a toy PHY simulator (great scale, wrong stack) or train on a real testbench (right stack, no scale). The fused-sources + orchestration pattern is a reusable recipe — and it's grounded in OAI (which is what RAN researchers actually run), so the artefact is replicable, not aspirational. This complements the existing `2026-05-21_arxiv-aiim-o-ran-interference-xapp.md` entry (AIIM, also an O-RAN xApp but for inter-cell interference) and the `2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator.md` entry (which posits an agentic RAN orchestrator one layer up the stack) — together they map out the early-2026 O-RAN-xApp research frontier: domain-specific control surfaces (interference, PRB, scheduling) each getting their own RL-trained xApp, with shared infrastructure problems (training-environment quality, generalisation across vendors) being addressed alongside.

## Why it matters / what's new (ZH)

方法学角度比特定 PRB 策略更具价值。大多数 O-RAN 中的 RL 论文要么使用玩具 PHY 仿真器（规模好、协议栈错），要么在真实测试台上训练（协议栈对、无规模）。融合源 + 编排的模式是一种可复用的配方 —— 而且建立在 OAI（RAN 研究人员实际运行的平台）之上，因此产物可复现而非空想。该工作补充现有的 `2026-05-21_arxiv-aiim-o-ran-interference-xapp.md` 条目（AIIM，也是 O-RAN xApp，但针对小区间干扰）和 `2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator.md` 条目（其在协议栈上一层提出智能体 RAN 编排器）—— 三者共同勾勒出 2026 年初 O-RAN xApp 的研究前沿：领域特定控制面（干扰、PRB、调度）各自获得自有的 RL 训练 xApp，而共享的基础设施问题（训练环境质量、跨厂商泛化）同步得到解决。
