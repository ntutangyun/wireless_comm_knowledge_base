---
id: 2026-09-21_arxiv-samsone-small-audio-language-models-edge
date_published: 2026-09-18
date_found: 2026-09-21
technology: edge-ai
type: academic-paper
title_en: "Samsone: A Family of Open Small Audio Language Models for On-Device Inference"
title_zh: "Samsone：面向端侧推理的开放小型音频语言模型系列"
url: "https://arxiv.org/abs/2609.21666"
source_quality: full
topics: [audio-language-model, small-model, on-device-inference, open-weights, Interspeech]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Piotr Masztalski, Michał K. Grzeszczyk and Olaf Sikorski (Samsung R&D Institute Poland; AGH University of Kraków) submitted this paper to arXiv on 18 September 2026; it has been accepted for Interspeech 2026. The paper's motivation is that Large Audio Language Models have grown to billions of parameters, while privacy-preserving, low-latency use cases push in the opposite direction toward Small Audio Language Models (SALMs) that can run on-device. The authors introduce Samsone, a family of SALMs explicitly designed for edge computing, with a core model, Samsone-134M, plus two additional sizes (Samsone-99M and Samsone-356M) used to explore SALM scaling laws. All three are trained on publicly available data, and the authors release training code, model weights, mobile-optimized checkpoints and an open-source Android application (github.com/SamsungLabs/samsone) demonstrating real-time on-device inference.

On the MMAU benchmark (Test split), Samsone-134M scores 61.33 average (Sound 73.23, Music 62.87, Speech 47.90), and Samsone-356M scores 62.00 average (Sound 74.27, Music 65.83, Speech 45.90) — both ahead of the paper's cited prior state-of-the-art for the size class, Mellow (167M parameters; the paper benchmarks against an improved Mellow v0_s checkpoint released after the original Mellow paper), which scores 53.34 average (Sound 66.17, Music 58.13, Speech 35.73); the smallest variant, Samsone-99M, still scores 58.13 average, ahead of Mellow despite having over 40% fewer parameters. The paper also reports Samsone outperforming competing small models on audio entailment (92.4-93.7% accuracy) and question answering (71.8-74.5%), with one noted exception — a slight performance downgrade for Samsone-99M on AudioCaps (89.1 vs. Mellow's 89.7). On-device measurements on a Samsung Galaxy S25 Ultra CPU, without hardware-level optimizations, show audio-processing / query-processing / generation-speed figures of 667 ms / 15 ms / 125 tok/s for Samsone-99M, 757 ms / 23 ms / 87 tok/s for Samsone-134M, and 1,116 ms / 47 ms / 39 tok/s for Samsone-356M — a real device-side latency and throughput table, not a vendor TOPS claim.

## Summary (ZH)

三星波兰研发院（Samsung R&D Institute Poland）与克拉科夫 AGH 科技大学的 Piotr Masztalski、Michał K. Grzeszczyk 与 Olaf Sikorski 于 2026 年 9 月 18 日向 arXiv 提交了本文，并已被 Interspeech 2026 接收。论文的动机在于：大型音频语言模型的参数规模已增长至数十亿级别，而隐私保护、低时延的应用场景则要求相反的方向——能够在端侧运行的小型音频语言模型（Small Audio Language Model, SALM）。作者提出了 Samsone，一个明确面向边缘计算设计的 SALM 系列，核心模型为 Samsone-134M，另外还有两个规模（Samsone-99M 与 Samsone-356M）用于探索 SALM 的缩放规律。三者均基于公开可得数据训练，作者开源了训练代码、模型权重、移动端优化的模型文件，以及一个演示实时端侧推理的开源 Android 应用（github.com/SamsungLabs/samsone）。

在 MMAU 基准测试（Test 划分）上，Samsone-134M 平均得分 61.33（Sound 73.23、Music 62.87、Speech 47.90），Samsone-356M 平均得分 62.00（Sound 74.27、Music 65.83、Speech 45.90）——均超过论文引用的同尺寸级别此前最优模型 Mellow（167M 参数；论文对比的是原论文之后发布的改进版 Mellow v0_s），其平均得分为 53.34（Sound 66.17、Music 58.13、Speech 35.73）；最小的 Samsone-99M 平均得分仍达 58.13，尽管参数量比 Mellow 少四成以上，依然优于后者。论文还报告 Samsone 在音频蕴含任务（准确率 92.4%-93.7%）与问答任务（71.8%-74.5%）上优于同类小模型，但也指出一处例外：Samsone-99M 在 AudioCaps 上性能略有下降（89.1，Mellow 为 89.7）。在三星 Galaxy S25 Ultra 的 CPU 上（未做硬件级优化）的端侧实测显示，音频处理/查询处理/生成速度分别为：Samsone-99M 为 667ms/15ms/125 tokens/s，Samsone-134M 为 757ms/23ms/87 tokens/s，Samsone-356M 为 1,116ms/47ms/39 tokens/s——这是一份真实的端侧时延与吞吐数据表，而非厂商 TOPS 宣传数字。

## Key technical points (EN)

- **Motivation**: Large Audio Language Models have scaled to billions of parameters; privacy-preserving, low-latency use cases require Small Audio Language Models (SALMs) capable of on-device execution instead.
- **Model family**: Samsone-99M / -134M (core) / -356M, all trained on publicly available data, exploring SALM scaling laws.
- **Benchmark results (MMAU Test-split average)**: 99M: 58.13, 134M: 61.33, 356M: 62.00 — all ahead of the cited prior SOTA for the size class, Mellow (167M, 53.34 average); also ahead on audio entailment (92.4-93.7%) and QA (71.8-74.5%), except a slight downgrade for Samsone-99M on AudioCaps (89.1 vs. Mellow's 89.7).
- **On-device numbers (Samsung Galaxy S25 Ultra CPU, no hardware-level optimizations)**: audio-processing / query-processing / generation-speed of 667ms/15ms/125 tok/s (99M), 757ms/23ms/87 tok/s (134M), 1,116ms/47ms/39 tok/s (356M).
- **Openness**: training code, model weights, mobile-optimized checkpoints and an open-source Android demo app released at github.com/SamsungLabs/samsone.
- **Venue**: accepted for Interspeech 2026.

## Key technical points (ZH)

- **研究动机**：大型音频语言模型已扩展至数十亿参数规模；隐私保护、低时延场景则需要能够端侧运行的小型音频语言模型（SALM）。
- **模型系列**：Samsone-99M / -134M（核心模型）/ -356M，均基于公开数据训练，用于探索 SALM 的缩放规律。
- **基准结果（MMAU Test 划分平均分）**：99M 为 58.13，134M 为 61.33，356M 为 62.00——均超过论文引用的同尺寸级别此前最优模型 Mellow（167M，平均 53.34）；在音频蕴含任务（92.4%-93.7%）与问答任务（71.8%-74.5%）上同样领先，仅 Samsone-99M 在 AudioCaps 上略有下降（89.1，Mellow 为 89.7）。
- **端侧实测数据（三星 Galaxy S25 Ultra CPU，未做硬件级优化）**：音频处理/查询处理/生成速度分别为 667ms/15ms/125 tokens/s（99M）、757ms/23ms/87 tokens/s（134M）、1,116ms/47ms/39 tokens/s（356M）。
- **开放性**：在 github.com/SamsungLabs/samsone 开源了训练代码、模型权重、移动端优化模型文件，以及一个开源 Android 演示应用。
- **发表渠道**：已被 Interspeech 2026 接收。

## Why it matters / what's new (EN)

This KB's small-model-release entries have so far been dominated by text LLMs (Phi, Gemma, Qwen-class families); Samsone is the first small-model release in this domain's coverage built specifically for the audio modality, and it clears the strict scope gate this KB applies to model releases — published explicitly for on-device use, with real device-side latency/throughput numbers on named hardware (Samsung Galaxy S25 Ultra) rather than accuracy tables alone, plus open weights and a working Android demo app rather than a marketing announcement.

## Why it matters / what's new (ZH)

本知识库此前的小模型发布类条目多集中于文本 LLM（Phi、Gemma、Qwen 等系列）；Samsone 是本知识库该领域条目中首个专门面向音频模态、以端侧使用为目标发布的小模型系列，也符合本库对模型发布类条目设定的严格准入标准——明确面向端侧使用发布，在具名硬件（三星 Galaxy S25 Ultra）上给出真实的端侧时延/吞吐数据，而非仅有准确率表格，并配有开放权重与可运行的 Android 演示应用，而非单纯的营销公告。

## Images

![Samsone system architecture: audio encoder, projector and language model | Samsone 系统架构：音频编码器、投影层与语言模型](https://arxiv.org/html/2609.21666v1/samsone_system_overview.png)
