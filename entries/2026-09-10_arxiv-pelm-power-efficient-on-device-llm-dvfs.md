---
id: 2026-09-10_arxiv-pelm-power-efficient-on-device-llm-dvfs
date_published: 2026-09-09
date_found: 2026-09-10
type: academic-paper
technology: edge-ai
title_en: "PELM: Power Efficient On-Device LLM Inference with Speculative Decoding and Dynamic Voltage Frequency Scaling"
title_zh: "PELM：结合投机解码与动态电压频率调节的端侧大模型节能推理"
url: "https://arxiv.org/abs/2609.09662"
source_quality: full
topics: [on-device-LLM, DVFS, speculative-decoding, early-exit, thermal-throttling, Jetson]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Researchers at Northwestern University target a specific bottleneck in on-device LLM inference: mobile and edge platforms lack the fans or heatsinks to dissipate the heat that sustained LLM inference generates, so processors throttle and lose performance. Prior mobile-LLM dynamic voltage and frequency scaling (DVFS) methods address this only by tuning hardware parameters and processor frequencies, which the authors find falls short in thermally constrained scenarios. PELM adds two workload-specific knobs on top of traditional DVFS: speculative decoding and a variable verification depth, exploiting the observation that not every token needs full-depth inference to maintain output quality. Varying how deep the verification pass runs turns "how much work is spent per token" into an additional axis DVFS can trade against processor frequency.

Evaluated on LLaMA-3.2-1B, LLaMA-3.1-8B and LLaMA-2-13B (using LayerSkip pretraining for early-exit capability) on both a Jetson AGX Orin and a lower-power Jetson Orin Nano, PELM reports up to 23.1% speedup and up to 52.4% reduction in energy consumption compared to state-of-the-art power-governing baselines, with comparable task performance, and 29.0%-52.4% energy reduction specifically on the AGX Orin running the 13B model. The paper is accepted to ACM/IEEE SenSys 2026.

## Summary (ZH)

西北大学的研究者聚焦端侧大模型推理的一个具体瓶颈：移动与边缘平台缺乏风扇或散热片来疏散持续大模型推理所产生的热量，导致处理器降频、性能下降。此前面向移动端大模型的动态电压频率调节（DVFS）方法仅通过调节硬件参数与处理器频率来应对，作者发现这在热约束场景下效果有限。PELM 在传统 DVFS 之上新增两个与工作负载相关的调节维度：投机解码与可变验证深度，利用「并非每个 token 都需要全深度推理才能保持输出质量」这一观察，将「每个 token 花费多少计算量」变成一个可与处理器频率联合权衡的新维度。

在 Jetson AGX Orin 与功耗更低的 Jetson Orin Nano 上，针对 LLaMA-3.2-1B、LLaMA-3.1-8B、LLaMA-2-13B（均采用 LayerSkip 预训练以支持早退出）进行评测，PELM 相较最先进的功耗调控基线最高可实现 23.1% 的加速与最高 52.4% 的能耗降低，同时保持相当的任务性能；在 AGX Orin 上运行 13B 模型时，能耗降低幅度为 29.0%–52.4%。该论文已被 ACM/IEEE SenSys 2026 录用。

## Key technical points (EN)

- **Problem**: mobile/edge form factors lack active cooling, so LLM inference causes thermal throttling that existing DVFS-only methods handle poorly.
- **Mechanism**: augments processor-frequency DVFS with two workload-specific knobs — speculative decoding and variable verification depth — expanding the power/quality trade-off to a multi-dimensional search space.
- **Models**: LLaMA-3.2-1B, LLaMA-3.1-8B, LLaMA-2-13B, all using LayerSkip pretraining for early-exit.
- **Hardware**: Jetson AGX Orin (12x Arm Cortex-A78AE, Ampere GPU 2048 CUDA cores, 64GB LPDDR5) and Jetson Orin Nano (6x Arm Cortex-A78AE, Ampere GPU 1042 CUDA cores as stated in the paper's Table 2 — the shipping part has 1024 — 8GB LPDDR5).
- **Results**: up to 23.1% speedup and up to 52.4% energy reduction vs. state-of-the-art power-governing baselines; 29.0%-52.4% energy reduction specifically for the 13B model on AGX Orin.
- **Venue**: accepted to ACM/IEEE SenSys 2026 (the arXiv record states acceptance only, with no conference date, so this entry is filed on its arXiv date); authors Weisi Yang and Stephen Xia, Northwestern University.

## Key technical points (ZH)

- **问题**：移动/边缘设备形态缺乏主动散热，大模型推理会导致热降频，仅依赖 DVFS 的既有方法难以有效应对。
- **机制**：在处理器频率 DVFS 之上新增两个与工作负载相关的调节维度——投机解码与可变验证深度——将功耗/质量权衡扩展为多维搜索空间。
- **模型**：LLaMA-3.2-1B、LLaMA-3.1-8B、LLaMA-2-13B，均采用 LayerSkip 预训练以支持早退出。
- **硬件**：Jetson AGX Orin（12 核 Arm Cortex-A78AE、Ampere GPU 2048 CUDA 核心、64GB LPDDR5）与 Jetson Orin Nano（6 核 Arm Cortex-A78AE、Ampere GPU 1042 CUDA 核心（为论文表 2 所述，量产型号实为 1024）、8GB LPDDR5）。
- **结果**：相较最先进功耗调控基线最高加速 23.1%、最高降耗 52.4%；在 AGX Orin 上运行 13B 模型时降耗幅度为 29.0%–52.4%。
- **发表**：已被 ACM/IEEE SenSys 2026 录用（arXiv 记录仅标明录用，未给出会议日期，因此本条目以 arXiv 日期归档）；作者 Weisi Yang、Stephen Xia，西北大学。

## Why it matters / what's new (EN)

This KB already holds several DVFS/thermal-throttling entries for edge AI (e.g. the 2026-09-07 proactive-DVFS vision-inference entry on a passively-cooled Raspberry Pi 5), but those work purely on the frequency-scaling axis. PELM's contribution is adding workload-shape knobs — speculative decoding and verification depth — as co-optimization variables alongside frequency, which is a genuinely different lever than tuning the processor alone, and it is validated on two real Jetson tiers with named LLaMA model sizes rather than a single configuration.

## Why it matters / what's new (ZH)

本知识库此前已收录若干面向端侧 AI 的 DVFS/热降频类条目（例如 2026-09-07 收录的、面向无源散热树莓派 5 上视觉推理的主动式 DVFS 条目），但那些工作仅在频率调节这一个维度上做文章。PELM 的贡献在于新增了与工作负载形态相关的调节维度——投机解码与验证深度——将其与频率一起纳入联合优化，这是一个与「仅调节处理器」不同的真正新增杠杆，并且在两档真实 Jetson 硬件、多种命名 LLaMA 模型规模上得到了验证，而非仅单一配置下的结果。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
