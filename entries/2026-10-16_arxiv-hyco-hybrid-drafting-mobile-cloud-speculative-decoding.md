---
id: 2026-10-16_arxiv-hyco-hybrid-drafting-mobile-cloud-speculative-decoding
date_published: 2026-10-15
date_found: 2026-10-16
technology: edge-ai
type: academic-paper
title_en: "HyCo: hybrid drafting on a phone NPU cuts server GPU time in mobile-cloud speculative decoding"
title_zh: "HyCo：在手机 NPU 上做混合起草，降低移动-云端推测解码的服务器 GPU 时间"
url: "https://arxiv.org/abs/2610.21436"
source_quality: abstract_only
topics: [speculative-decoding, device-cloud, mobile-NPU, multi-token-prediction, Galaxy-S26-Ultra, quantization]
topic_primary: compute-offloading
topics_secondary: [on-device-inference, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

Device-cloud speculative decoding reduces server computation, but growing a deep draft tree with a small language model (SLM) requires repeated passes on a mobile NPU. HyCo assigns draft depth to the server model's native multi-token prediction (MTP) head, executed on the device, and assigns alternative branches to a single SLM pass. The server returns the hidden state, input embedding and key-value entries the head needs instead of executing its sequential steps. Quantization, a restricted vocabulary and a 1K-token window fit both drafters onto the NPU. An epsilon-threshold rule additionally relaxes exact preservation of the verifier's sampling distribution.

In single-client runs with a Galaxy S26 Ultra over LTE/5G, HyCo reduces server GPU time per output token relative to server-side MTP self-speculation by 38.6% on Spec-Bench and 29.2% on 32K-token summarization. With the same acceptance rule, three Spec-Bench runs per system show 9.0 percentage points more saving and 1.9x delivery speed than an SLM-only drafter. HyCo differs from Cloud+MTP by +0.2 judge-score points (paired 95% CI: -0.9 to +1.3); exploratory translation favors SpecEdge-epsilon. Without relaxation, HyCo exact saves 27.7% and 11.9% on the two datasets.

## Summary (ZH)

设备-云端推测解码可以减少服务器计算，但用小语言模型（SLM）生成较深的草稿树，需要在手机 NPU 上反复推理。HyCo 把草稿的“深度”交给服务器模型自带的多 token 预测（MTP）头，并在设备端执行；把备选分支交给一次 SLM 推理。服务器返回该头所需的隐状态、输入嵌入和键值条目，而不是自己执行其串行步骤。量化、受限词表和 1K token 窗口使两个起草器都能放进 NPU。ε 阈值规则还进一步放宽了对验证器采样分布的严格保持。

在 Galaxy S26 Ultra 经 LTE/5G 的单客户端实验中，相比服务器端 MTP 自推测，HyCo 在 Spec-Bench 上把每输出 token 的服务器 GPU 时间降低 38.6%，在 32K token 摘要任务上降低 29.2%。在相同接受规则下，每个系统三次 Spec-Bench 运行显示，相比仅用 SLM 起草，HyCo 多节省 9.0 个百分点，交付速度为 1.9 倍。HyCo 与 Cloud+MTP 的评审得分相差 +0.2 分（配对 95% 置信区间：-0.9 至 +1.3）；探索性翻译任务上 SpecEdge-ε 更优。不放宽时，HyCo exact 在两个数据集上分别节省 27.7% 与 11.9%。

## Key technical points (EN)

- Split: draft depth from the server model's MTP head run on the device; alternative branches from one SLM pass.
- Server returns hidden state, input embedding and KV entries needed by the head.
- NPU fit: quantization, restricted vocabulary, 1K-token window.
- Epsilon-threshold rule relaxes exact preservation of the verifier's sampling distribution.
- Measured on a Galaxy S26 Ultra over LTE/5G, single client: server GPU time per output token down 38.6% (Spec-Bench) and 29.2% (32K summarization) versus server-side MTP self-speculation.
- Exact (non-relaxed) mode: 27.7% and 11.9% savings. Quality vs Cloud+MTP: +0.2 judge points (95% CI -0.9 to +1.3).

## Key technical points (ZH)

- 切分：草稿深度由服务器模型的 MTP 头在设备端产生；备选分支来自一次 SLM 推理。
- 服务器返回该头所需的隐状态、输入嵌入与 KV 条目。
- 适配 NPU：量化、受限词表、1K token 窗口。
- ε 阈值规则放宽对验证器采样分布的严格保持。
- 在 Galaxy S26 Ultra 经 LTE/5G 的单客户端实测：相比服务器端 MTP 自推测，每输出 token 的服务器 GPU 时间降低 38.6%（Spec-Bench）与 29.2%（32K 摘要）。
- 严格（不放宽）模式节省 27.7% 与 11.9%。相对 Cloud+MTP 的质量差：+0.2 评审分（95% 置信区间 -0.9 至 +1.3）。

## Why it matters / what's new (EN)

The contribution is the placement of the drafter pieces between phone and server, evaluated over a real cellular link on a flagship phone; the measured quantity is server GPU time, not phone energy or battery. Results are single-client and the authors' own; this record is based on the abstract only.

## Why it matters / what's new (ZH)

贡献在于草稿各组成部分在手机与服务器之间的放置方式，并在旗舰手机经真实蜂窝链路上完成评测；测得的是服务器 GPU 时间，而非手机能耗或电量。结果为单客户端、作者自测，本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
