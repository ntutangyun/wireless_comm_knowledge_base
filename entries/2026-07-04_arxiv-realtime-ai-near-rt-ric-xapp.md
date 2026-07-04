---
id: 2026-07-04_arxiv-realtime-ai-near-rt-ric-xapp
date_published: 2026-07-02
date_found: 2026-07-04
type: academic-paper
technology: cellular
title_en: "Enabling Real-Time AI in O-RAN: Deploying and Measuring AI Inside a Near-RT RIC xApp — compiled-C inference at 1–25 µs shows the model is not the bottleneck"
title_zh: "在 O-RAN 中实现实时 AI：在 Near-RT RIC xApp 内部署并测量 AI — 编译为 C 的推理仅需 1–25 µs，证明模型不是瓶颈"
url: "https://arxiv.org/abs/2607.01583"
source_quality: full
topics: [O-RAN, Near-RT-RIC, xApp, AI-RAN, OpenAirInterface, FlexRIC]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

A ten-author team (Old Dominion University and collaborators; accepted at ICCCN 2026) closes a practical gap in AI-for-RAN research: almost all prior xApp intelligence work runs models in Python or on external ML servers, with no per-inference timing instrumentation, leaving open whether AI actually fits inside the Near-RT RIC's 10 ms–1 s control window. This paper embeds trained models (logistic regression and a shallow MLP) directly into the xApp binary as deterministic, exported C inference modules — no Python interpreter, no ML framework, no external runtime at inference time — and measures where every microsecond goes on a live OpenAirInterface (OAI) + FlexRIC testbed.

The headline measurements: logistic-regression inference completes in 1–5 µs and the shallow MLP in 10–25 µs inside the xApp callback, against an end-to-end closed-loop service latency under 4 ms that is dominated by E2 message transport and kernel scheduling, not model computation. The authors' conclusion is blunt: "AI inference is not the bottleneck." A second finding is that six supervised model families cluster within 0.88–0.90 F1 on the anomaly-classification task (5-D cross-layer feature vector: MAC/RLC/PDCP/GTP latencies + active UE count), suggesting feature geometry — not model capacity — limits performance at this granularity.

The team also releases RIC Workbench, a single-binary C orchestration dashboard (web UI on port 3000) that deploys the full OAI + FlexRIC stack on commodity laptops with one-click control, live KPM metrics, and an xApp IDE — lowering the reproduction barrier for RIC experimentation without dedicated testbed hardware.

## Summary (ZH)

一支十人团队（Old Dominion 大学及合作者；ICCCN 2026 录用）填补了 AI-for-RAN 研究中的一个实践空白：此前几乎所有 xApp 智能化工作都在 Python 或外部 ML 服务器上运行模型，且没有逐次推理的计时插桩，因此"AI 是否真的能放进 Near-RT RIC 的 10 ms–1 s 控制窗口"一直悬而未决。本文将训练好的模型（逻辑回归和浅层 MLP）以确定性的导出 C 推理模块形式直接编译进 xApp 二进制 — 推理时没有 Python 解释器、没有 ML 框架、没有外部运行时 — 并在真实的 OpenAirInterface（OAI）+ FlexRIC 测试台上测量每一微秒的去向。

核心测量结果：在 xApp 回调内，逻辑回归推理耗时 1–5 µs，浅层 MLP 为 10–25 µs；而端到端闭环服务时延低于 4 ms，且主要由 E2 消息传输和内核调度贡献，而非模型计算。作者的结论很直接："AI 推理不是瓶颈。"第二个发现是六类监督模型在异常分类任务上的 F1 都聚集在 0.88–0.90 区间（5 维跨层特征向量：MAC/RLC/PDCP/GTP 时延 + 活跃 UE 数），说明在这一粒度上限制性能的是特征几何结构而非模型容量。

团队还发布了 RIC Workbench：一个单二进制的 C 语言编排面板（端口 3000 的 Web 界面），可在普通笔记本上一键部署完整 OAI + FlexRIC 栈，提供实时 KPM 指标和 xApp IDE — 无需专用测试台硬件即可复现 RIC 实验。

## Key technical points (EN)

- Models exported as deterministic C code and compiled into the xApp binary; inference executes inside the xApp's E2 indication callback with zero external ML dependencies.
- Measured: LR 1–5 µs, shallow MLP 10–25 µs per inference; end-to-end closed-loop latency < 4 ms, dominated by E2 transport + kernel scheduling.
- Three-component latency decomposition (service model / inference / end-to-end) — the instrumentation prior xApp-AI work lacked.
- 5-D cross-layer feature vector: MAC, RLC, PDCP, GTP latencies + active UE count; six model families cluster at 0.88–0.90 F1 — feature geometry, not capacity, is the limit.
- Noise ablation (Gaussian σ sweep) and CDF-based closed-loop latency characterization included.
- RIC Workbench released: single-binary C dashboard, one-click OAI + FlexRIC stack deployment on commodity hardware, live KPM metrics, xApp IDE.

## Key technical points (ZH)

- 模型导出为确定性 C 代码并编译进 xApp 二进制；推理在 xApp 的 E2 指示回调内执行，零外部 ML 依赖。
- 实测：逻辑回归每次推理 1–5 µs，浅层 MLP 10–25 µs；端到端闭环时延 < 4 ms，主要由 E2 传输 + 内核调度贡献。
- 三分量时延分解（服务模型 / 推理 / 端到端）— 这是此前 xApp-AI 工作缺失的插桩。
- 5 维跨层特征向量：MAC、RLC、PDCP、GTP 时延 + 活跃 UE 数；六类模型 F1 聚集在 0.88–0.90 — 限制在特征几何而非模型容量。
- 包含高斯 σ 扫描的噪声消融和基于 CDF 的闭环时延刻画。
- 发布 RIC Workbench：单二进制 C 面板，普通硬件一键部署 OAI + FlexRIC 栈，实时 KPM 指标，xApp IDE。

## Why it matters / what's new (EN)

The KB's open-ran bin already holds RIC-side intelligence entries (LOLLA AI-RAN link adaptation, 2026-06-23; BeGREEN energy intelligent plane, 2026-06-09), but all prior entries treat inference cost as an assumption. This is the first entry to *measure* in-loop inference inside a production-shaped xApp and show the compiled-model path makes AI cost negligible relative to E2 transport — which reframes the near-RT AI design question from "can the model run fast enough" to "how do we shave E2 and scheduling overhead." The compiled-C deployment pattern and the released Workbench tooling are immediately reusable by any RIC research group.

## Why it matters / what's new (ZH)

KB 的 open-ran 主题已有 RIC 侧智能化条目（2026-06-23 的 LOLLA AI-RAN 链路自适应、2026-06-09 的 BeGREEN 能耗智能面），但此前条目都把推理开销当作假设。这是第一条在生产形态 xApp 内*实测*环内推理、并证明编译模型路径使 AI 开销相对 E2 传输可忽略的条目 — 它把近实时 AI 的设计问题从"模型能否跑得够快"重构为"如何压缩 E2 和调度开销"。编译为 C 的部署模式和开源的 Workbench 工具可被任何 RIC 研究团队直接复用。

## Images

![Model-family accuracy/F1 comparison | 各模型family准确率/F1对比](https://arxiv.org/html/2607.01583v1/x1.png)
![CDF-based closed-loop latency characterization | 基于CDF的闭环时延刻画](https://arxiv.org/html/2607.01583v1/x4.png)
