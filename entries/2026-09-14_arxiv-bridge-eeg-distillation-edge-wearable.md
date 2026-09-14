---
id: 2026-09-14_arxiv-bridge-eeg-distillation-edge-wearable
date_published: 2026-09-10
date_found: 2026-09-14
type: academic-paper
technology: edge-ai
title_en: "BRIDGE-EEG: Bridging Self-Supervised Pretraining and Efficient Deployment for Cross-Dataset EEG Classification"
title_zh: "BRIDGE-EEG：面向跨数据集脑电分类的自监督预训练与高效部署桥接方案"
url: "https://arxiv.org/abs/2609.12218"
source_quality: full
topics: [knowledge-distillation, wearable-deployment, eeg-foundation-models, edge-energy-measurement]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

A team spanning Purdue University (M. Roy Chowdhury, Shreyas Sen) and Case Western University (Chengwei Zhou, Haotian Yu, Gourav Datta) presents BRIDGE-EEG, a pipeline that keeps most of the benefit of large-scale EEG foundation-model pretraining while shrinking the deployed model enough for wearable and edge hardware. A device-agnostic 62-channel time-frequency preprocessing scheme first normalizes heterogeneous EEG recordings (different channel counts, montages, sampling rates) into a common representation; an SE-ResNet18 teacher (11.84M parameters) is then pretrained with SimCLR self-supervision on unlabeled EEG pooled from five heterogeneous datasets, and compressed via two distillation strategies into SE-ResNet8 (1.56M) and SE-ResNet4 (0.48M) students.

## Summary (ZH)

由普渡大学（M. Roy Chowdhury、Shreyas Sen）与凯斯西储大学（Chengwei Zhou、Haotian Yu、Gourav Datta）组成的团队提出 BRIDGE-EEG，一套在大幅压缩部署模型体积、使其适配可穿戴与边缘硬件的同时，尽量保留大规模脑电（EEG）基础模型预训练收益的流水线。方案首先通过一种与设备无关的 62 通道时频预处理方案，将异构的脑电记录（不同通道数、电极布局、采样率）归一化为统一表示；随后用 SimCLR 自监督方式，在汇集自五个异构数据集的无标注脑电数据上预训练一个 SE-ResNet18 教师模型（1184 万参数），并通过两种蒸馏策略将其压缩为 SE-ResNet8（156 万参数）与 SE-ResNet4（48 万参数）学生模型。

## Key technical points (EN)

- **Distillation strategies**: Strategy A (task-agnostic) distills the SSL-pretrained teacher into SE-ResNet8 on unlabeled pretraining data using combined NT-Xent + MSE losses, producing a shared backbone reusable across downstream tasks; Strategy B (task-specific) first fine-tunes the teacher per task, then distills each task-specific teacher into SE-ResNet8/SE-ResNet4 students via standard knowledge-distillation loss, trading generality for per-task optimization.
- **Six benchmarks, three categories**: abnormality detection (TUAB, SIENA), emotion recognition (SEED, EmoEEG), motor imagery (BCI-IV-2a, BCI-IV-2b).
- **Accuracy vs. much larger foundation models**: on TUAB abnormality detection, the 1.56M-parameter SE-ResNet8 reaches 90.35% accuracy, ahead of REVE (83%, 69M params) and LaBraM-Huge (82.58%, 369M params) — a >200x parameter-count advantage at higher accuracy. On SEED emotion recognition, SE-ResNet8 (Strategy B) reaches 80% vs. LaBraM-Base's 73.18% at 5.8M params — though this result does not generalize to the other emotion benchmark: on EmoEEG, Strategy B collapses (SE-ResNet8: 60.29% vs. the fine-tuned teacher's 75.89% and Strategy A's 77.32%; SE-ResNet4: 35.10%). Motor imagery is the one category with a remaining accuracy gap, and it is far more severe on BCI-IV-2a than on BCI-IV-2b: on BCI-IV-2a, BRIDGE-EEG's best result is 38.66%, well behind REVE (63.96%), NeuroGPT (58.60%), and EEGPT (58.46%) — a roughly 25-point deficit — whereas on BCI-IV-2b the gap is much narrower (69% vs. EEGPT's 72.12% at 25M params). The authors attribute the shortfall to insufficient pretraining-data diversity for that task type.
- **Cross-hardware dynamic-energy/latency profile** (energy figures are dynamic energy — average power minus idle power, times latency — not total energy): server GPU (L4, direct measurement) SE-ResNet18: 4.61ms / 5.30W / 24.43mJ, SE-ResNet8: 2.19ms / 1.42W / 3.11mJ; desktop CPU (i7-8700; the paper's own table footnote flags CPU power/energy as a utilization-scaled TDP proxy rather than direct device-level telemetry) SE-ResNet18: 19.19ms / 337.03mJ, SE-ResNet8: 12.22ms / 230.45mJ; edge (Jetson Orin Nano, direct measurement) SE-ResNet18: 12.93ms / 3.61W / 46.67mJ, SE-ResNet8: 5.73ms / 2.73W / 15.64mJ — a 3.0x edge-energy reduction per inference from distillation alone, on real hardware for the GPU and edge tiers (the CPU figures are TDP-model estimates, not direct telemetry).
- **Forward-looking claim**: the smallest student, SE-ResNet4 (0.48M params), is presented as sized for future MCU-class wearable deployment, though the paper's own measured energy/latency table is reported for SE-ResNet18/SE-ResNet8 rather than SE-ResNet4 specifically.

## Key technical points (ZH)

- **两种蒸馏策略**：策略 A（任务无关）在无标注预训练数据上，使用 NT-Xent + MSE 组合损失，将自监督预训练教师蒸馏为 SE-ResNet8，得到可跨下游任务复用的共享主干；策略 B（任务特定）先针对每个任务微调教师模型，再通过标准知识蒸馏损失将各任务专用教师蒸馏为 SE-ResNet8/SE-ResNet4 学生模型，以牺牲通用性换取单任务性能。
- **六项基准，三大类别**：异常检测（TUAB、SIENA）、情绪识别（SEED、EmoEEG）、运动想象（BCI-IV-2a、BCI-IV-2b）。
- **相对大型基础模型的准确率优势**：在 TUAB 异常检测任务上，仅 156 万参数的 SE-ResNet8 达到 90.35% 准确率，优于 REVE（83%，6900 万参数）与 LaBraM-Huge（82.58%，3.69 亿参数）——以超过 200 倍的参数量优势取得更高准确率。在 SEED 情绪识别任务上，SE-ResNet8（策略 B）达到 80%，优于参数量 580 万的 LaBraM-Base（73.18%）——但该结果并未在另一个情绪识别基准上重现：在 EmoEEG 上，策略 B 的表现大幅下滑（SE-ResNet8 仅 60.29%，远低于经微调教师模型的 75.89% 与策略 A 的 77.32%；SE-ResNet4 仅 35.10%）。运动想象是唯一仍存在差距的类别，且在 BCI-IV-2a 上的差距远大于 BCI-IV-2b：在 BCI-IV-2a 上，BRIDGE-EEG 的最佳结果仅为 38.66%，明显落后于 REVE（63.96%）、NeuroGPT（58.60%）与 EEGPT（58.46%）——差距约 25 个百分点；而在 BCI-IV-2b 上差距要小得多（69% 对比参数量 2500 万的 EEGPT 的 72.12%）。作者将这一差距归因于该任务类型的预训练数据多样性不足。
- **跨硬件动态能耗/延迟画像**（能耗数字均为动态能耗——平均功耗减去空闲功耗，再乘以延迟——而非总能耗）：服务器 GPU（L4，直接实测）上 SE-ResNet18 为 4.61ms / 5.30W / 24.43mJ，SE-ResNet8 为 2.19ms / 1.42W / 3.11mJ；桌面 CPU（i7-8700；论文表格脚注注明其功耗/能耗为按利用率缩放的 TDP 估算值，而非设备级直接遥测）上 SE-ResNet18 为 19.19ms / 337.03mJ，SE-ResNet8 为 12.22ms / 230.45mJ；边缘端（Jetson Orin Nano，直接实测）上 SE-ResNet18 为 12.93ms / 3.61W / 46.67mJ，SE-ResNet8 为 5.73ms / 2.73W / 15.64mJ——仅靠蒸馏即在 GPU 与边缘两层真实硬件上实现边缘端每次推理 3.0 倍的能耗降低（CPU 数字为 TDP 模型估算值，非直接遥测）。
- **前瞻性表述**：最小的学生模型 SE-ResNet4（48 万参数）被定位为面向未来 MCU 级可穿戴部署，但论文自身给出的能耗/延迟实测表针对的是 SE-ResNet18/SE-ResNet8，而非专门针对 SE-ResNet4 的实测数据。

## Why it matters / what's new (EN)

This domain's edge-model-efficiency bin has so far been dominated by LLM/ViT/CNN compression work; BRIDGE-EEG extends the same distillation-for-edge-deployment logic to a biosignal modality (EEG) not previously represented in this KB, with the same emphasis this domain rewards — dynamic cross-hardware energy measurement, direct on the server GPU and the genuine edge device (Jetson Orin Nano), with a utilization-scaled TDP proxy (not direct telemetry) for the desktop CPU tier — rather than accuracy tables alone. The >200x parameter reduction at improved accuracy on abnormality detection is a notable result, though the paper's own motor-imagery gap is a useful reminder that distillation from a foundation-model teacher does not close every task's data-diversity gap equally.

## Why it matters / what's new (ZH)

本领域的 edge-model-efficiency 分类此前以 LLM/ViT/CNN 压缩工作为主；BRIDGE-EEG 将同样的「面向边缘部署的蒸馏」思路，拓展到本知识库此前尚未覆盖的生物信号模态（脑电）上，并延续了本领域一贯看重的取向——即跨硬件的动态能耗实测，在服务器 GPU 与真实边缘设备（Jetson Orin Nano）上为直接实测，桌面 CPU 层则为按利用率缩放的 TDP 估算值（而非直接遥测）——而非仅仅给出准确率表格。在异常检测任务上以超过 200 倍的参数削减换取更高准确率，是一个值得关注的结果；不过论文自身在运动想象任务上仍存在的差距，也提醒我们：源自基础模型教师的蒸馏，并不能同等程度地弥补每类任务的数据多样性缺口。

## Images

*(No redistributable images for this entry — text-only extraction from the arXiv HTML rendering, no figures reproduced.)*
