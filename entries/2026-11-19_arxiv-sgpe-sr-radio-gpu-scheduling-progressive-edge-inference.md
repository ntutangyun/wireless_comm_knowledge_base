---
id: 2026-11-19_arxiv-sgpe-sr-radio-gpu-scheduling-progressive-edge-inference
date_published: 2026-08-08
date_found: 2026-11-19
technology: edge-ai
type: academic-paper
title_en: "Split-Gate Pooled-Evidence Stochastic-Rollout Scheduling for Timely Progressive Edge Inference (shared wireless uplink coupled to GPU stages, simulated)"
title_zh: "面向及时渐进式边缘推理的分割门控池化证据随机推演调度（共享无线上行与 GPU 阶段耦合，仿真）"
url: "https://arxiv.org/abs/2608.08338"
source_quality: full
topics: [progressive-inference, radio-scheduling, edge-inference, uplink, GPU-batching, deadline]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

This paper studies causal radio scheduling for progressive edge inference in a multi-tenant system: several end devices each generate deadline-constrained DNN inference jobs and send data to one GPU-equipped edge server over a shared wireless uplink. A job is not offloaded in one piece. It uploads a compact base representation, the edge GPU runs a first stage, a region of interest (ROI) chosen from that intermediate result is then uploaded as a second transmission, and refinement stages produce the final result. Each job therefore passes through five stages: two uplink transmissions interleaved with three GPU stages.

The model captures time-varying uplink service (per-tenant log-rate fading as an AR(1) process), precedence between stages, variant-aware batching, non-preemptive execution on two GPU streams and heterogeneous deadlines (45 to 75 ms classes). The radio scheduler serves at most one eligible job per slot, using only causally available information. The proposed SGPE-SR scheduler selects candidate and fallback policies on one set of sampled futures, then evaluates admission on an independent held-out set; an override of the baseline policy is applied only if its pooled held-out advantage is sufficiently positive and an independent recent-history statistic is non-negative.

Link computed over: a simulated shared wireless uplink (slotted, AR(1) fading rates). GPU stage durations come from offline-measured P95 profiles, so the computation side is measured and the radio side is simulated.

## Summary (ZH)

本文研究多租户系统中渐进式边缘推理的因果无线调度：多个终端各自产生带截止时间的 DNN 推理任务，经共享无线上行把数据发送到一台配备 GPU 的边缘服务器。一个任务并非一次性卸载：先上传紧凑的基础表示，边缘 GPU 运行第一阶段，再根据中间结果选出感兴趣区域（ROI）作为第二次传输上传，最后由精炼阶段给出结果。因此每个任务经历五个阶段：两次上行传输与三个 GPU 阶段交替进行。

模型涵盖时变的上行服务（每租户对数速率衰落按 AR(1) 过程建模）、阶段间先后关系、按变体区分的批处理、双 GPU 流上的不可抢占执行，以及异构截止时间（45 至 75 ms 类别）。无线调度器每个时隙至多服务一个可服务任务，且仅使用因果可得的信息。所提 SGPE-SR 调度器先在一组采样未来上选择候选与回退策略，再在独立的留出集上评估准入；仅当其池化留出优势足够为正、且独立的近期历史统计量非负时，才覆盖基线策略。

所经链路：仿真的共享无线上行（时隙化、AR(1) 衰落速率）。GPU 阶段时长来自离线测得的 P95 剖面，因此计算侧为实测、无线侧为仿真。

## Key technical points (EN)

- Evaluation: 100 ms warm-up and 500 ms measurement windows, heterogeneous radio-rate and deadline classes, measured P95 GPU profiles and five causal baselines (Max-Rate, earliest-deadline-first, smallest-remaining-upload-first, a drift-plus-penalty policy and others).
- Prespecified long-horizon evaluation over 30 previously unused seeds and 3,379 offered jobs: SGPE-SR improves timely completions over the strongest rate-based baseline by 4.27%, a mean paired gain of 3.00 jobs per run with a 95% bootstrap interval of [1.60, 4.43].
- The protocol separates a 30-seed design audit from a frozen 30-seed confirmation, reports paired-bootstrap intervals and an exact sign-flip test, and examines load sensitivity over 220 to 300 jobs per second.
- Radio rates are simulated, not measured over an air interface; the gain is a scheduling result inside that model.

## Key technical points (ZH)

- 评估设置：100 ms 预热与 500 ms 测量窗口，异构的无线速率与截止时间类别，实测 P95 GPU 剖面，以及五种因果基线（Max-Rate、最早截止时间优先、剩余上传量最小优先、漂移加惩罚策略等）。
- 在 30 个全新种子、3,379 个到达任务的预设长时程评估中：SGPE-SR 相对最强的基于速率的基线，及时完成数提升 4.27%，每次运行平均成对增益 3.00 个任务，95% 自举区间为 [1.60, 4.43]。
- 评估流程把 30 个种子的设计审计与冻结后的 30 个种子确认分开，给出成对自举区间与精确符号翻转检验，并考察 220 至 300 任务/秒的负载敏感性。
- 无线速率为仿真而非空口实测；增益是该模型内的调度结果。

## Why it matters / what's new (EN)

The KB already holds offloading and split-inference entries that choose where to cut a model for a given link (for example the channel-adaptive split-inference robotics entry 2026-09-09_arxiv-comvla-channel-adaptive-split-inference-robotics). This one sits on the scheduling side: with the cut fixed by the progressive pipeline, the open question is which job gets the next uplink slot while the GPU batches other jobs, so the radio and the GPU are one coupled queueing problem. The modest 4.27% gain is reported with a statistical protocol, which makes it a calibrated data point rather than a headline claim.

## Why it matters / what's new (ZH)

KB 中已有针对给定链路选择模型切分点的卸载与拆分推理条目（例如 2026-09-09_arxiv-comvla-channel-adaptive-split-inference-robotics）。本文处于调度一侧：切分点由渐进式流水线固定后，问题变为在 GPU 对其他任务做批处理的同时，下一个上行时隙分配给哪个任务，无线与 GPU 构成同一个耦合的排队问题。4.27% 的增益配有统计检验流程，是一个经过校准的数据点，而非夸大的结论。

## Images

![Multi-tenant progressive edge inference system: shared wireless uplink and GPU server | 多租户渐进式边缘推理系统：共享无线上行与 GPU 服务器](https://arxiv.org/html/2608.08338v1/Fig1.png)
