---
id: 2026-06-03_arxiv-cmab-802-11bq-multi-ap-mmwave-throughput
date_published: 2026-06-02
date_found: 2026-06-03
type: academic-paper
title_en: "Throughput Optimization for Multi-AP IEEE P802.11bq Networks Based on Combinatorial Multi-Armed Bandits"
title_zh: "基于组合多臂老虎机的多 AP IEEE P802.11bq 网络吞吐优化"
url: "https://arxiv.org/abs/2606.03528"
source_quality: full
topics: [802.11bq, mmWave, MAPC, multi-AP, CMAB, spatial-reuse]
topic_primary: mmwave-bq
topics_secondary: [mapc-cosr, ai-for-wifi]
novelty_score: 3
---

## Summary (EN)
This paper tackles distributed throughput optimization in dense multi-AP IEEE P802.11bq networks — the emerging amendment that couples a sub-7 GHz control/contention link with a 60 GHz directional mmWave data link in a single Wi-Fi device. The authors observe that the two planes are cross-coupled: the sub-7 GHz CSMA/CA parameters (minimum contention window, CCA threshold, RTS/CTS) decide *who gets to transmit*, while the mmWave beamwidth and MCS reservation margin decide *whether the payload is delivered successfully*. Static or independently-tuned configurations therefore leave throughput on the table, because aggressive carrier sensing can starve neighbours while narrow beams raise beam-training overhead and wide beams invite directional interference.

The configuration problem is cast as a multi-group combinatorial multi-armed bandit (CMAB) with G=4 parameter groups (CW_min, CCA threshold, beamwidth, MCS margin). The proposed CSAR-inspired algorithm indexes each group's candidate values as "elementary arms", uses Hadamard-matrix-guided exploration to sample diverse *feasible* configurations (exactly one value chosen per group), scores each arm's main effect from local throughput feedback, and successively rejects the weakest candidate in each group per phase. This reduces the exploration cost from the full Cartesian product of all parameter combinations to roughly O(2V·max_g(V_g−1)) trials while preserving the grouped feasibility constraints that P802.11bq imposes.

A packet-level simulator models backoff delay, RTS/CTS failures, beam-training overhead, MCS selection, directional interference and retransmissions across 2–12 co-located APs (6 GHz control plane, 60 GHz / 80 MHz data plane, 240 kbit payloads). Against a Thompson-sampling MAB over the flat Cartesian action space (MAB-TS), a pure-mmWave MAB-TS, and fixed configurations, the CMAB scheme reaches ~4570 Mbps aggregate at 10 APs versus ~3110 Mbps for MAB-TS (~47% higher) and stabilizes in 1.66–2.21 s versus 3.49–3.78 s (~49% faster convergence). The learned policies are notably non-extremal: relaxed CCA thresholds (~−2 to −5 dBm in dense cases), moderate beamwidths (26–38°), and intermediate MCS margins (2–4), confirming that good performance requires *balancing* control-channel aggressiveness, mmWave spatial reuse, beam-training cost and MCS robustness rather than maximizing any single knob.

## Summary (ZH)
本文研究密集多 AP IEEE P802.11bq 网络中的分布式吞吐优化。P802.11bq 是新兴修正案，在单个 Wi-Fi 设备中将 sub-7 GHz 控制/竞争链路与 60 GHz 定向 mmWave 数据链路耦合。作者指出两个平面存在跨层耦合：sub-7 GHz 的 CSMA/CA 参数（最小竞争窗口 CW_min、CCA 门限、RTS/CTS）决定"谁能发送"，而 mmWave 的波束宽度与 MCS 预留余量决定"载荷能否成功送达"。静态或各自独立调参会损失吞吐——激进的载波侦听会饿死邻居，窄波束抬高波束训练开销，宽波束又招致定向干扰。

作者将配置问题建模为含 G=4 个参数组（CW_min、CCA 门限、波束宽度、MCS 余量）的多组组合多臂老虎机（CMAB）。所提 CSAR 启发式算法将每组候选值索引为"基本臂"，用 Hadamard 矩阵引导的探索采样多样化的*可行*配置（每组恰选一个值），依据本地吞吐反馈对各臂主效应打分，并在每个阶段逐组剔除最弱候选。这将探索代价从所有参数组合的完整笛卡尔积降至约 O(2V·max_g(V_g−1)) 次试验，同时保持 P802.11bq 要求的分组可行性约束。

包级仿真建模了退避时延、RTS/CTS 失败、波束训练开销、MCS 选择、定向干扰与重传，覆盖 2–12 个同址 AP（6 GHz 控制面、60 GHz / 80 MHz 数据面、240 kbit 载荷）。相较于在扁平笛卡尔动作空间上的汤普森采样 MAB（MAB-TS）、纯 mmWave MAB-TS 及固定配置，本 CMAB 方案在 10 个 AP 时达到约 4570 Mbps 聚合吞吐（MAB-TS 约 3110 Mbps，高约 47%），收敛时间 1.66–2.21 s（MAB-TS 为 3.49–3.78 s，快约 49%）。学到的策略明显非极端：CCA 门限放松（密集时约 −2 至 −5 dBm）、波束宽度适中（26–38°）、MCS 余量居中（2–4），印证了优良性能需要*平衡*控制信道激进度、mmWave 空间复用、波束训练开销与 MCS 鲁棒性，而非单一参数取极值。

## Key technical points (EN)
- **Coupled PHY/MAC model for P802.11bq:** sub-7 GHz contention plane (CW_min, CCA, RTS/CTS) jointly modeled with 60 GHz directional data plane (beamwidth, MCS reservation margin), including beam-training overhead and directional interference.
- **Multi-group CMAB formulation:** four parameter groups, each contributing "elementary arms"; the joint action must pick exactly one value per group (feasibility constraint).
- **Hadamard-guided exploration + successive group-wise rejection (CSAR-inspired):** main-effect scoring via ω̂ = (1/L)·Hᵀy; exploration cost ~O(2V·max_g(V_g−1)) instead of the full Cartesian product ∏V_g.
- **Fully decentralized:** each AP learns from local throughput feedback only — no central coordinator, no explicit interference map.
- **Results:** ~47% higher aggregate throughput and ~49% faster convergence vs. flat Thompson-sampling MAB at 10 APs; learned configs are balanced/non-extremal.

## Key technical points (ZH)
- **P802.11bq 的 PHY/MAC 耦合模型：** sub-7 GHz 竞争面（CW_min、CCA、RTS/CTS）与 60 GHz 定向数据面（波束宽度、MCS 预留余量）联合建模，含波束训练开销与定向干扰。
- **多组 CMAB 建模：** 四个参数组各贡献"基本臂"；联合动作须每组恰选一个值（可行性约束）。
- **Hadamard 引导探索 + 逐组逐次剔除（CSAR 启发）：** 主效应打分 ω̂ = (1/L)·Hᵀy；探索代价约 O(2V·max_g(V_g−1))，而非完整笛卡尔积 ∏V_g。
- **完全去中心化：** 每个 AP 仅凭本地吞吐反馈学习——无中心协调器、无显式干扰图。
- **结果：** 10 个 AP 时聚合吞吐高约 47%、收敛快约 49%（对比扁平汤普森采样 MAB）；学到的配置均衡、非极端。

## Why it matters / what's new (EN)
802.11bq (integrated mmWave) is one of the least-explored 802.11 amendments in the KB's `mmwave-bq` bin — most existing coverage is standards-track structure rather than working optimization algorithms. This is the first KB entry to give a concrete *learning-based, decentralized configuration* mechanism that treats the sub-7 GHz↔mmWave coupling as a single joint optimization rather than two independent tuning problems. It also connects `mmwave-bq` to the `mapc-cosr` (multi-AP coordination) and `ai-for-wifi` (bandit/RL parameter tuning) bins: the same coupled-plane, feasibility-constrained CMAB framing could generalize to Co-SR / Co-BF parameter selection. The headline gains (~47% throughput, ~49% faster convergence over a flat bandit) quantify how much the grouped/feasible structure buys over naive combinatorial exploration.

## Why it matters / what's new (ZH)
802.11bq（融合 mmWave）是本 KB `mmwave-bq` 桶中探索最少的 802.11 修正案之一——现有内容多为标准化结构而非可运行的优化算法。这是 KB 中首个给出具体*基于学习的去中心化配置*机制的条目，将 sub-7 GHz↔mmWave 耦合视为单一联合优化，而非两个独立调参问题。它还把 `mmwave-bq` 与 `mapc-cosr`（多 AP 协调）、`ai-for-wifi`（老虎机/RL 参数调优）两个桶联系起来：同样的耦合面、带可行性约束的 CMAB 框架可推广到 Co-SR / Co-BF 参数选择。约 47% 吞吐、约 49% 更快收敛的结果量化了分组/可行结构相对朴素组合探索的收益。

## Images
![Multi-AP P802.11bq system model: sub-7 GHz contention plane + 60 GHz directional data plane | 多 AP P802.11bq 系统模型：sub-7 GHz 竞争面 + 60 GHz 定向数据面](https://arxiv.org/html/2606.03528v1/x1.png)
![Aggregate and per-AP throughput vs. AP density: CMAB vs. MAB-TS baselines | 聚合与每 AP 吞吐随 AP 密度变化：CMAB 对比 MAB-TS 基线](https://arxiv.org/html/2606.03528v1/x3.png)
