---
id: 2026-09-15_arxiv-mobibench-on-device-llm-benchmark
date_published: 2026-07-15
date_found: 2026-09-15
type: academic-paper
technology: edge-ai
title_en: "MobiBench: Benchmarking LLMs for On-Device Performance"
title_zh: "MobiBench：面向端侧性能的大模型基准测试"
url: "https://arxiv.org/abs/2609.13159"
source_quality: full
topics: [on-device-inference, llama.cpp, benchmark, quantization]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 2
---

## Summary (EN)

MobiBench (Arya Hariharan, Rohit Suresh, Bolla Sai Naga Yashwanth, Ashok Senapati, Thummala Pallavi, Anala M R, and Soumya A — RV College of Engineering, Bengaluru, with two authors, Ashok Senapati and Thummala Pallavi, at Samsung Research R&D, Bengaluru) is a unified benchmarking suite for edge-optimized LLMs, built on llama.cpp as the sole inference runtime. It evaluates four small models — Gemma 1B, TinyLLaMA (~1B), LLaMA 3B, and Phi-2 — across four benchmark datasets spanning four task types: RepLiQA (context question-answering), CNN/DailyMail (summarization), and SciQ and MMLU (both multiple-choice question-answering). Only Phi-2 is additionally run in quantized variants (Q2_K and Q3_KM); no run in the paper is identified as a full-precision comparison point. Testing splits across two separate consumer laptops rather than one shared machine: a gaming laptop (12th-generation Intel Core i7 with an NVIDIA RTX 3060 discrete GPU) for the GPU runs, and a separate standard laptop (Intel Core i5, integrated graphics only) for the CPU-only runs.

The benchmark's stated metric list includes prefill speed, decode speed, time-to-first-token, task accuracy, peak RAM, GPU memory/utilization, energy consumption (Joules), and names ROUGE as a candidate summarization metric — but the results actually reported in the paper are wall-clock generation time (not a separate TTFT figure), task accuracy, memory/CPU/GPU utilization, and BERTScore plus an LLM-based (Groq-hosted gpt-oss-120b) semantic-quality score for summarization; no ROUGE, TTFT, or energy-consumption results appear in the paper's result tables.

## Summary (ZH)

MobiBench（作者 Arya Hariharan、Rohit Suresh、Bolla Sai Naga Yashwanth、Ashok Senapati、Thummala Pallavi、Anala M R 与 Soumya A——均任职于班加罗尔 RV 工程学院，其中 Ashok Senapati 与 Thummala Pallavi 两位作者同时任职于班加罗尔三星研究院）是一套面向端侧优化大模型的统一基准测试套件，以 llama.cpp 作为唯一推理运行时。该套件在四款小模型——Gemma 1B、TinyLLaMA（约 1B）、LLaMA 3B 与 Phi-2——上，针对四个基准数据集、涵盖四类任务类型进行评测：RepLiQA（上下文问答）、CNN/DailyMail（摘要生成），以及 SciQ 与 MMLU（均为多选问答）。仅 Phi-2 额外测试了量化变体（Q2_K 与 Q3_KM）；论文中未见任何被标识为全精度对照的测试。测试并非在同一台设备上完成，而是分别在两台不同的消费级笔记本上进行：GPU 测试使用一台游戏本（第 12 代 Intel Core i7 + NVIDIA RTX 3060 独立显卡），纯 CPU 测试则使用另一台标准笔记本（Intel Core i5，仅集成显卡）。

该基准所列的指标清单包括首处理（prefill）速度、逐 token 解码速度、首 token 时延、任务准确率、峰值内存、GPU 显存/利用率与能耗（焦耳），并将 ROUGE 列为摘要任务的候选指标——但论文实际报告的结果为墙钟生成耗时（并非单独的首 token 时延数字）、任务准确率、内存/CPU/GPU 利用率，以及 BERTScore 与一个基于大模型（Groq 平台托管的 gpt-oss-120b）的摘要语义质量评分；论文的结果表中并未出现 ROUGE、首 token 时延或能耗方面的实测数字。

## Key technical points (EN)

- **GPU vs. CPU speedup**: not uniform or measured across all four models. TinyLlama documents a 12-47x GPU-vs-CPU wall-clock speedup (Table III); Gemma 1B shows roughly 2.4-12.6x, computed from Table I's per-task wall-clock times; Llama 3B and Phi-2 are reported only on GPU, with no CPU run for comparison. The CPU and GPU numbers also come from two different physical laptops (an i7+RTX 3060 gaming laptop vs. a separate i5 CPU-only laptop), not one shared hardware tier.
- **Headline numbers (Gemma 1B on GPU)**: wall-clock generation time of 2.2-2.5 seconds across the tested datasets; prefill throughput ranging from 433 to 4,407 tokens/sec depending on task (highest on RepLiQA, lowest on SciQ); decode throughput of 150-167 tokens/sec; summarization BERTScore F1 of approximately 0.84.
- **Semantic-quality consistency is narrower than it first appears**: the paper's "essentially constant across CPU and GPU" language applies specifically to TinyLlama's BERTScore (0.8417 GPU vs. 0.8458 CPU F1). The LLM-judge metric is not uniformly stable — e.g. Gemma 1B scores 0.5852 on GPU vs. 0.6961 on CPU (Table XIII), an 0.11 gap. The paper states Phi-2 (unquantized, GPU) had the highest LLM-judge score among the four base models at 0.6056, though this is inconsistent with its own later tables, where Gemma 1B on CPU (0.6961) and the Phi2_Q3_KM quantized variant (0.6269) both score higher.
- **Reasoning tasks are the weak point for this model class at this scale**: accuracy on MMLU (the benchmark itself, not an "MMLU-style" proxy) and SciQ ranged from 1.1% (TinyLlama on SciQ, CPU) to 26.3% (Phi2_Q3_KM on MMLU) across the tested models and quantization variants.
- **Memory footprint does not scale cleanly with parameter count**: Llama 3B (1339-1360 MB) and the much smaller Gemma 1B (~1309-1313 MB on GPU) show near-identical peak memory, while Phi-2 is the outlier at 2070-2091 MB; across all tested models and quantization settings, footprints span roughly 1.0-2.1 GB.

## Key technical points (ZH)

- **GPU 相对 CPU 的加速比**：并非四款模型统一测得。TinyLlama 记录了 12-47 倍的 GPU 对 CPU 墙钟加速比（Table III）；Gemma 1B 按 Table I 各任务墙钟耗时换算约为 2.4-12.6 倍；LLaMA 3B 与 Phi-2 仅报告了 GPU 结果，并无对应的 CPU 测试作对比。且 CPU 与 GPU 数据分别来自两台不同的物理笔记本（i7+RTX 3060 游戏本 与 另一台 i5 纯 CPU 笔记本），并非同一档硬件。
- **核心数字（Gemma 1B，GPU）**：在所测数据集上生成总耗时 2.2-2.5 秒；首处理（prefill）吞吐依任务不同介于 433 至 4,407 token/秒之间（RepLiQA 最高，SciQ 最低）；解码吞吐 150-167 token/秒；摘要任务 BERTScore F1 约为 0.84。
- **语义质量的一致性比表面看起来更有限**：论文所称「跨 CPU/GPU 基本保持恒定」这一表述，具体是针对 TinyLlama 的 BERTScore（GPU F1 0.8417 对 CPU F1 0.8458）而言的。大模型评估打分并非普遍稳定——例如 Gemma 1B 在 GPU 上为 0.5852、CPU 上为 0.6961（Table XIII），相差达 0.11。论文称 Phi-2（未量化、GPU）在四款基础模型中大模型评估得分最高（0.6056），但这与论文后文自身的数据存在矛盾：Gemma 1B 在 CPU 上的得分（0.6961）以及 Phi2_Q3_KM 量化变体的得分（0.6269）均高于该数值。
- **推理类任务是该规模模型的薄弱环节**：MMLU（这里就是该基准本身，而非「类 MMLU」的替代测试）与 SciQ 上的准确率，在所测模型与量化变体中，介于 1.1%（TinyLlama 在 SciQ、CPU 上）至 26.3%（Phi2_Q3_KM 在 MMLU 上）之间。
- **内存占用并未随参数量呈干净的线性增长**：LLaMA 3B（1339-1360 MB）与参数量小得多的 Gemma 1B（GPU 上约 1309-1313 MB）峰值内存几乎相同，而 Phi-2 是明显的异常值（2070-2091 MB）；在所测四款模型与全部量化配置下，内存占用整体介于约 1.0-2.1 GB 之间。

## Why it matters / what's new (EN)

This is a measurement-grade addition to a bin this KB already treats as favoring independent numbers over vendor claims — it doesn't introduce a new inference mechanism, and it is not fully reproducible as published (no code release accompanies it; the paper itself claims only to lay "groundwork for repeatable... evaluation"), but it is a consumer-hardware benchmark built entirely on the open llama.cpp runtime this scout has repeatedly tracked. No NPU backend is exercised in this paper, so it does not speak to this KB's NPU-backend-integration-gap thread. The narrower, checkable finding that survives fact-checking is that BERTScore held essentially constant across CPU/GPU specifically for TinyLlama, while the LLM-judge metric moved more — and inconsistently across models and hardware — which is a more mixed signal than a clean "semantic quality is hardware-invariant" takeaway.

## Why it matters / what's new (ZH)

本条目为「重独立实测、轻厂商宣称」这一本知识库长期偏好的分区补充了一项测量类工作——它并未提出新的推理机制，且论文并未随附代码发布，并非严格意义上「完全可复现」（论文自身的表述仅为「为可重复的评估打下基础」），但仍是一项完全基于开源 llama.cpp 运行时构建的消费级硬件基准测试。本文未测试任何 NPU 后端，因此不涉及本侦察持续跟踪的 NPU 后端集成缺口这一线索。经核实后仍然成立、且更为局限的发现是：BERTScore 在 CPU/GPU 间「基本保持恒定」这一结论具体只适用于 TinyLlama；而大模型评估打分在不同模型与硬件间的变动幅度更大、也不一致——相较于「语义质量与硬件无关」这一简洁结论，实际情况是一个更为混杂的信号。

## Images

![llama.cpp execution pipeline used by MobiBench | MobiBench 所用 llama.cpp 执行流程图](https://arxiv.org/html/2609.13159v1/llama_structure.png)
