---
id: 2026-06-09_arxiv-begreen-intelligent-plane-oran-energy
date_published: 2026-06-04
date_found: 2026-06-09
type: academic-paper
title_en: "BeGREEN Intelligent Plane for AI-driven Energy-Efficient O-RAN Management"
title_zh: "BeGREEN 智能面：AI 驱动的能效型 O-RAN 管理"
url: "https://arxiv.org/abs/2606.05747"
source_quality: abstract_only
technology: cellular
topics: [O-RAN, energy-efficiency, RIC, AI-ML, cell-on-off]
topic_primary: open-ran
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)
BeGREEN Intelligent Plane (Catalan-Cid, Pueyo, Sanchez-Gonzalez, Gutierrez, Ghoraishi; submitted 4 Jun 2026) is a framework that implements and exposes AI/ML workflows for O-RAN-based energy-efficiency optimisations. It plugs ML models into O-RAN's Non-Real-Time and Near-Real-Time RAN Intelligent Controllers (RICs) so that energy-saving control loops can be authored, deployed, and exposed as reusable workflows rather than one-off scripts. The headline exemplar application is AI-driven cell on/off switching to cut RAN energy consumption.

This paper is the framework anchor of a coordinated June-2026 release from the same i2CAT-led group, all targeting beyond-5G energy efficiency: a companion demo (2606.05000), a policy-guided ML cell-on/off study under operator QoS constraints in a real 5G network (2606.05755), an energy-vs-QoS trade-off quantification for traffic offloading in real 4G/5G scenarios (2606.05752), plus the previously-ingested COSMO cross-technology multi-tenant SMO (2606.05012) and the adaptable-QoS cell-on/off threshold work (2606.05019). Together they form an end-to-end energy-management story from intelligent-plane plumbing down to measured cell-switching policies.

The contribution is integration and exposure: turning energy-efficiency AI/ML into first-class, RIC-hosted O-RAN workflows, validated on the cell on/off use case.

## Summary (ZH)
BeGREEN 智能面（Catalan-Cid、Pueyo、Sanchez-Gonzalez、Gutierrez、Ghoraishi；2026 年 6 月 4 日提交）是一个为基于 O-RAN 的能效优化实现并对外暴露 AI/ML 工作流的框架。它把 ML 模型接入 O-RAN 的非实时与近实时 RAN 智能控制器（RIC），使节能控制回路能够以可复用工作流的形式被编写、部署与暴露，而非一次性脚本。其代表性示例应用是 AI 驱动的小区开/关切换，以降低 RAN 能耗。

本文是同一以 i2CAT 为主的团队 2026 年 6 月协同发布的框架锚点，均面向超 5G 能效：配套演示（2606.05000）、在真实 5G 网络中受运营商 QoS 约束的策略引导式 ML 小区开/关研究（2606.05755）、真实 4G/5G 场景下流量卸载的能耗-QoS 权衡量化（2606.05752），以及此前已收录的 COSMO 跨技术多租户 SMO（2606.05012）与可适配 QoS 的小区开/关阈值工作（2606.05019）。它们共同构成了从智能面管线到实测小区切换策略的端到端能量管理叙事。

其贡献在于整合与暴露：把能效 AI/ML 变为一类由 RIC 托管的 O-RAN 工作流，并在小区开/关用例上验证。

## Key technical points (EN)
- Exposes AI/ML energy-efficiency workflows through O-RAN Non-RT and Near-RT RICs.
- Exemplar: AI-driven cell on/off switching for RAN energy savings.
- Anchor of a coordinated BeGREEN release cluster (2606.05000 demo, 2606.05755 policy-guided cell-on/off, 2606.05752 energy-vs-QoS offloading; with 2606.05012 COSMO and 2606.05019 already in KB).
- Reusable-workflow framing rather than per-deployment scripting.

## Key technical points (ZH)
- 通过 O-RAN 非实时与近实时 RIC 暴露 AI/ML 能效工作流。
- 示例：AI 驱动的小区开/关切换以节省 RAN 能耗。
- 协同 BeGREEN 发布集群的锚点（2606.05000 演示、2606.05755 策略引导小区开/关、2606.05752 能耗-QoS 卸载；COSMO 2606.05012 与 2606.05019 已在 KB）。
- 以可复用工作流为框架，而非按部署写脚本。

## Why it matters / what's new (EN)
The KB's `open-ran` and `energy-power-save` bins held the COSMO orchestration and cell-on/off threshold work; BeGREEN supplies the intelligent-plane layer that exposes those as RIC-hosted AI/ML workflows, tying the June-2026 i2CAT energy-efficiency cluster into one coherent O-RAN story rather than scattered point solutions.

## Why it matters / what's new (ZH)
KB 的 `open-ran` 与 `energy-power-save` 分类已有 COSMO 编排与小区开/关阈值工作；BeGREEN 提供了把它们暴露为 RIC 托管 AI/ML 工作流的智能面层，把 2026 年 6 月 i2CAT 能效集群串成连贯的 O-RAN 叙事，而非零散的点状方案。
