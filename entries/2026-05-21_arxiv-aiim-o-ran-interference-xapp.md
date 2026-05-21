---
id: 2026-05-21_arxiv-aiim-o-ran-interference-xapp
date_published: 2026-05-01
date_found: 2026-05-21
type: academic-paper
title_en: "AIIM: Adaptive Inter-cell Interference Mitigation xApp for Heterogeneous Multi-vendor 5G O-RAN Networks"
title_zh: "AIIM：面向异构多厂商 5G O-RAN 网络的自适应小区间干扰抑制 xApp"
url: "https://arxiv.org/abs/2605.01112"
source_quality: full
topics: [O-RAN, interference-mitigation, xApp, near-RT-RIC, PRB-allocation]
topic_primary: open-ran
topics_secondary: [5g-nr, cellular-ai]
technology: cellular
novelty_score: 3
---

## Summary (EN)
Reinders et al. present AIIM, an adaptive inter-cell interference mitigation xApp for the O-RAN near-real-time RAN Intelligent Controller (near-RT RIC). AIIM performs coordinated physical resource block (PRB) allocation across multiple heterogeneous base stations under diverse traffic demands and channel conditions. Unlike prior simulation-only studies, AIIM is built and evaluated in a full-stack O-RAN system using srsRAN, Open5GS, and the O-RAN Software Community (ORAN-SC) components, deployed on a hybrid experimental platform that combines SDR-based and virtual gNBs and UEs.

The xApp explicitly models overlapping PRB regions across neighboring cells and learns coordinated allocation policies that adapt to per-user QoS demand and pathloss variation. Experimental results show AIIM improves QoS satisfaction and reduces interference-induced PRB loss relative to proportional-fair scheduling baselines, while maintaining comparable aggregate network throughput. The hybrid SDR + virtual-gNB platform design is itself a contribution — it preserves realistic PHY-layer interactions while improving scalability, reproducibility, and cost-effectiveness for multi-cell interference experiments compared to fully hardware-centric testbeds.

## Summary (ZH)
Reinders 等人提出 AIIM，一个运行在 O-RAN 近实时 RAN 智能控制器（near-RT RIC）上的自适应小区间干扰抑制 xApp。AIIM 在多样化流量需求和信道条件下跨多个异构基站执行协调物理资源块（PRB）分配。与先前仅基于仿真的研究不同，AIIM 在完整 O-RAN 协议栈系统中构建与评估，使用 srsRAN、Open5GS 和 O-RAN 软件社区（ORAN-SC）组件，部署于结合 SDR 与虚拟 gNB/UE 的混合实验平台上。

该 xApp 显式建模相邻小区间的重叠 PRB 区域，并学习适应每用户 QoS 需求和路径损耗变化的协调分配策略。实验结果表明，AIIM 相对比例公平调度基线提升了 QoS 满足率并减少了干扰导致的 PRB 损失，同时保持了可比的总网络吞吐。混合 SDR + 虚拟 gNB 的平台设计本身即为贡献——在保持真实 PHY 层交互的同时，相对纯硬件测试床提升了多小区干扰实验的可扩展性、可复现性和成本效益。

## Key technical points (EN)
- **O-RAN near-RT RIC xApp**: Runs in the O-RAN near-real-time RIC control loop (10ms–1s timescale), making coordinated PRB allocation decisions across multiple gNBs
- **Full-stack implementation**: Built on srsRAN (RAN) + Open5GS (core) + ORAN-SC (RIC), with hybrid SDR + virtual gNB/UE testbed
- **Overlapping PRB modeling**: Explicitly models PRB regions shared across neighboring cells to learn interference-aware allocation policies
- **QoS + pathloss adaptation**: Per-user QoS demand and pathloss variation inform the learned allocation policy
- **Baseline comparison**: Outperforms proportional-fair scheduling on QoS satisfaction and PRB loss, with comparable aggregate throughput

## Key technical points (ZH)
- **O-RAN near-RT RIC xApp**：运行在 O-RAN 近实时 RIC 控制环（10ms–1s 时间尺度），跨多个 gNB 做出协调 PRB 分配决策
- **全协议栈实现**：基于 srsRAN（RAN）+ Open5GS（核心网）+ ORAN-SC（RIC）构建，采用混合 SDR + 虚拟 gNB/UE 测试床
- **重叠 PRB 建模**：显式建模相邻小区共享的 PRB 区域以学习干扰感知分配策略
- **QoS 与路径损耗自适应**：每用户 QoS 需求和路径损耗变化驱动学习到的分配策略
- **基线对比**：在 QoS 满足率和 PRB 损失方面优于比例公平调度，总吞吐可比

## Why it matters / what's new (EN)
AIIM is one of the first O-RAN xApp papers to demonstrate coordinated interference management on a full-stack, hybrid (SDR + virtual) testbed rather than simulation-only. The practical significance for O-RAN adoption: it shows that a near-RT RIC xApp can meaningfully improve interference management in heterogeneous multi-vendor deployments — the exact scenario O-RAN was designed for. The hybrid testbed design (SDR PHY + virtualized higher layers) is a template future xApp papers can follow. The open-source stack (srsRAN + Open5GS + ORAN-SC) means the results are reproducible without proprietary 5G hardware.
