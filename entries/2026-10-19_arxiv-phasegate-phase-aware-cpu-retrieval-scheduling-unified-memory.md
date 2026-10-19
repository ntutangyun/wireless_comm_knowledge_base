---
id: 2026-10-19_arxiv-phasegate-phase-aware-cpu-retrieval-scheduling-unified-memory
date_published: 2026-10-03
date_found: 2026-10-19
technology: edge-ai
type: academic-paper
title_en: "PhaseGate: gating CPU retrieval by LLM prefill/decode phase on unified-memory devices (Apple M4 and M2 systems)"
title_zh: "PhaseGate：在统一内存设备（Apple M4 与 M2 系统）上按 LLM 预填充/解码阶段门控 CPU 检索"
url: "https://arxiv.org/abs/2610.04537"
source_quality: abstract_only
topics: [unified-memory, retrieval, scheduling, decode-latency, Apple-M4, on-device-assistant]
topic_primary: on-device-inference
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

On-device assistants run GPU-based LLM inference alongside CPU retrieval on unified-memory systems. The authors measure that, under a saturated local-retrieval workload, four concurrent retrieval workers raise 95th-percentile (p95) decode latency by 60-61% on two M4 systems, whereas prefill latency rises by only 5.7-6.9%. They study the LLM phase as an admission signal for independent CPU retrieval under controlled LLM workloads.

PhaseGate calibrates separate concurrency limits for prefill and decode, selecting four and one on the base-M4 configuration. Under a backlogged queue it reaches 2.0 times the aggregate retrieval throughput of the best tested feasible fixed policy, with both p95 LLM latency metrics within 1.25 times their no-retrieval baselines in all seven held-out runs. A phase-blind control, TimeGate, uses the same two limits on a calibration-derived schedule without observing LLM phase; it reaches similar retrieval throughput but violates the output-token latency limit in every run. M2 and M2 Pro Mac minis reproduce the policy ordering, and output-length sweeps show the advantage narrows as decode occupies more of each request.

## Summary (ZH)

端侧助手在统一内存系统上同时运行基于 GPU 的 LLM 推理和 CPU 检索。作者测得，在饱和的本地检索负载下，四个并发检索工作线程会使两台 M4 系统的 p95 解码时延上升 60-61%，而预填充时延仅上升 5.7-6.9%。他们在受控的 LLM 负载下研究把 LLM 阶段作为独立 CPU 检索准入信号的做法。

PhaseGate 为预填充与解码分别标定并发上限，在基础款 M4 配置上选为 4 和 1。在积压队列下，其聚合检索吞吐量达到最佳可行固定策略的 2.0 倍，且在全部七次留出运行中两项 p95 LLM 时延指标都在无检索基线的 1.25 倍以内。不观察 LLM 阶段的对照方案 TimeGate 使用同样的两个上限，但按标定得到的时间表执行；其检索吞吐量相近，却在每次运行中都违反输出 token 时延上限。M2 与 M2 Pro Mac mini 复现了策略排序，输出长度扫描表明，随着解码在每个请求中占比增大，该优势会缩小。

## Key technical points (EN)

- Setting: GPU LLM inference plus CPU retrieval sharing unified memory on Apple M-series systems.
- Measurement: 4 retrieval workers raise p95 decode latency by 60-61% (M4) but prefill by only 5.7-6.9%.
- Mechanism: separate admission limits for prefill and decode (4 and 1 on base M4), keyed on the observed LLM phase.
- Result: 2.0x aggregate retrieval throughput vs the best feasible fixed policy; p95 LLM latencies within 1.25x of no-retrieval baselines in 7/7 held-out runs.
- Control: phase-blind TimeGate matches throughput but violates the output-token latency limit in every run.
- Limit noted by the authors: advantage narrows as decode takes more of each request.

## Key technical points (ZH)

- 场景：Apple M 系列系统上，GPU LLM 推理与 CPU 检索共享统一内存。
- 测量：4 个检索线程使 p95 解码时延上升 60-61%（M4），预填充仅上升 5.7-6.9%。
- 机制：依据观测到的 LLM 阶段，对预填充与解码设置不同的准入上限（基础款 M4 上为 4 和 1）。
- 结果：聚合检索吞吐量为最佳可行固定策略的 2.0 倍；7/7 次留出运行中 p95 LLM 时延均在无检索基线的 1.25 倍以内。
- 对照：不感知阶段的 TimeGate 吞吐量相当，但每次运行都违反输出 token 时延上限。
- 作者指出的局限：随着解码在每个请求中占比增大，优势会缩小。

## Why it matters / what's new (EN)

Local assistants that mix retrieval with generation on one chip have to decide how much background CPU work the LLM can tolerate; the paper shows the answer depends on which phase the LLM is in. Results come from Apple M4 and M2-series machines, and this record is based on the abstract only.

## Why it matters / what's new (ZH)

在同一芯片上混合检索与生成的本地助手，需要决定 LLM 能容忍多少后台 CPU 工作；论文表明答案取决于 LLM 所处阶段。结果来自 Apple M4 与 M2 系列设备，本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
