---
id: 2026-11-18_arxiv-disaggregated-llm-inference-in-space-communication-feasibility
date_published: 2026-11-16
date_found: 2026-11-18
technology: edge-ai
type: academic-paper
title_en: "Disaggregated LLM inference in space: prefill-decode split is limited by inter-satellite link capacity, attention-FFN split by propagation delay (analytical study)"
title_zh: "太空中的解耦式 LLM 推理：预填充-解码拆分受星间链路容量限制，注意力-FFN 拆分受传播时延限制（解析研究）"
url: "https://arxiv.org/abs/2611.20893"
source_quality: full
topics: [orbital-data-center, disaggregated-inference, inter-satellite-link, kv-cache-transfer, moe-llm, satellite-constellation]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

This article (Troch, Sanchez-Vital, Lahmer, Kozicki, Famaey and Peeters) asks whether large-language-model serving can be split across several cooperating compute satellites linked by optical inter-satellite links (ISLs). It analyses two disaggregation modes: prefill-decode disaggregation (PDD), which migrates a large KV cache once per request, and attention-FFN disaggregation (AFD), which exchanges small activations at every mixture-of-experts layer for every generated token, in compact formations (100-300 m) and distributed constellations (100-1000 km). It uses a communication-time model of serialisation plus propagation delay, applied to three MoE models for AFD and to Mooncake's Qwen3-235B measurements for PDD, and proposes a hierarchical orbital inference architecture. Link computed over: satellite inter-satellite links (optical), analytical model only, no measurement or simulation of a real constellation.

## Summary (ZH)

本文（作者 Troch、Sanchez-Vital、Lahmer、Kozicki、Famaey、Peeters）探讨大语言模型服务能否拆分到多颗经光学星间链路（ISL）协作的计算卫星上。文章分析两种解耦方式：预填充-解码解耦（PDD），每个请求一次性迁移大型 KV 缓存；以及注意力-FFN 解耦（AFD），每生成一个 token 都在每个混合专家层交换小型激活。场景覆盖紧凑编队（100-300 m）与分布式星座（100-1000 km）。文章使用"串行化加传播时延"的通信时间模型，AFD 采用三个 MoE 模型，PDD 采用 Mooncake 的 Qwen3-235B 实测数据，并提出分层的轨道推理架构。所经链路：卫星星间链路（光学），仅为解析模型，无真实星座的测量或仿真。

## Key technical points (EN)

- PDD is limited mainly by link capacity: extending the path from 300 m to 1000 km adds only 3.33 ms of propagation delay, small next to moving a multi-gigabyte cache; raising capacity from 100 to 800 Gbps cuts serialisation from about 24-31% to 3.8-5.8% of the modelled time-to-first-token.
- AFD is limited mainly by propagation delay accumulating layer by layer; with a 10% communication budget of time-per-output-token, a 10 ms TPOT allows roughly kilometre-scale separation, a 1 ms TPOT (0.1 ms overhead) caps separation at a few hundred metres even at very high capacity, and 100-300 m formations need about 100-400 Gbps.
- The model is deliberately conservative (no computation-communication overlap) and does not predict actual TPOT.
- Proposed architecture: compact decode groups for local attention-expert cooperation, with a wider network connecting prefill resources and carrying state migration; ground access delay postpones the whole response but preserves inter-token spacing.

## Key technical points (ZH)

- PDD 主要受链路容量限制：路径从 300 m 延长到 1000 km 仅增加 3.33 ms 传播时延，相比迁移数 GB 的缓存很小；容量从 100 提高到 800 Gbps，可使串行化时延占模型化首 token 时间的比例从约 24-31% 降至 3.8-5.8%。
- AFD 主要受逐层累积的传播时延限制；以每输出 token 时间（TPOT）的 10% 作为通信预算，10 ms TPOT 允许大约公里级间距，1 ms TPOT（0.1 ms 开销）即使在很高容量下也将间距限制在数百米，100-300 m 编队约需 100-400 Gbps。
- 模型刻意保守（不考虑计算与通信重叠），不预测实际 TPOT。
- 所提架构：紧凑解码组负责本地注意力-专家协作，更广的网络连接预填充资源并承载状态迁移；地面接入时延会推迟整个响应，但保持 token 间的间隔。

## Why it matters / what's new (EN)

It translates the question of orbital LLM serving into link-capacity and distance budgets for two different split points, showing they respond to the link in different ways. It is an analytical feasibility study over optical (free-space) ISL assumptions; the 800 Gbps ceiling is taken from Google Suncatcher's early optical-link demonstrator; the paper notes such capacity may be unrealistic over longer paths.

## Why it matters / what's new (ZH)

它把轨道 LLM 服务问题转化为两种不同拆分点的链路容量与距离预算，并表明二者对链路的响应方式不同。这是基于光学（自由空间）ISL 假设的解析可行性研究；800 Gbps 上限取自 Google Suncatcher 的早期光链路演示器；论文指出在更长距离上该容量可能不现实。

## Images

![Orbital inference architecture | 轨道推理架构](https://arxiv.org/html/2611.20893v1/orbital_inference_latex.png)
