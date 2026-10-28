---
id: 2026-10-28_arxiv-csi-textbench-language-grounded-wifi-csi-sensing
date_published: 2026-10-25
date_found: 2026-10-28
technology: wifi
type: academic-paper
title_en: "CSI-TextBench: A Dataset and Benchmark for Language-Grounded Ambient Sensing Perception"
title_zh: "CSI-TextBench：面向语言对齐环境感知的 Wi-Fi CSI 数据集与基准"
url: "https://arxiv.org/abs/2610.34616"
source_quality: full
topics: [Wi-Fi sensing, CSI, 802.11bf, CLIP, contrastive learning, zero-shot, benchmark, NeurIPS 2026]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

CSI-TextBench (arXiv 2610.34616, cs.AI; Guozhen Zhu, Yuqian Hu, Sakila S. Jayaweera, Wei-Hsiang Wang et al.; the comment field says accepted at NeurIPS 2026) addresses the fact that Wi-Fi Channel State Information (CSI) has no naturally paired text such as captions or transcripts, which blocks its use with language-driven multimodal AI. The authors unify three public Wi-Fi CSI benchmarks into 285,790 samples across 7 tasks and 353 classes: CSI-Bench (commercial devices in the wild; human activity recognition, fall detection, motion source, proximity and user ID), XRF55 (55 fine-grained indoor actions) and SignFi (276 sign-language gesture classes). All inputs are converted to a common amplitude tensor (amplitude extraction, 5-second windows, per-sample normalisation, subcarrier standardisation to a fixed count by zero-padding or uniform subsampling; the source hardware spans Broadcom with 14 subcarriers, ESP32 with 64, Qualcomm with 256 and Intel 5300 with 270). The samples are paired with 2,291 hierarchically structured, label-derived text descriptions by many-to-many assignment, giving about 2.0 million CSI-text training tuples (1,998,574).

Five alignment methods from four paradigm families are benchmarked on the same dual-encoder design: contrastive (CLIP-InfoNCE, SigLIP), anchor-based (LanguageBind), non-contrastive (Barlow Twins) and reconstructive (masked cross-modal prediction). Reported results: CLIP-InfoNCE zero-shot reaches 97.8% on HAR against 97.9% for the supervised baseline, and 97.0% on SignFi against 99.4%. On 76 held-out SignFi classes zero-shot accuracy is only 11.3% but rises to 74.6% with 10 labelled examples per class. A single multitask model scores 96.0% on HAR and 96.1% on SignFi with no task-specific heads, though proximity drops to 84.5%. A unified model answering joint queries over activity, proximity and identity reaches 86.9% top-1 on 140 composite scenes, against 70.4% joint accuracy from separate per-attribute question answering. The stated limitations: open-vocabulary accuracy falls to 35.4% on raw sensor-grounded prompts because the frozen pretrained text encoder handles specialised language poorly; template-based descriptions may miss fine-grained signal distinctions; transfer to unseen classes is limited on fine-grained tasks; cross-environment and cross-device performance remains constrained by CSI's domain sensitivity; and SignFi data is not redistributed, so users must obtain it from the dataset providers.

## Summary (ZH)

CSI-TextBench（arXiv 2610.34616，cs.AI；Guozhen Zhu、Yuqian Hu、Sakila S. Jayaweera、Wei-Hsiang Wang 等；备注栏写明被 NeurIPS 2026 接收）针对的问题是：Wi-Fi 信道状态信息（CSI）没有天然配对的文本（如说明或转写），因此难以与语言驱动的多模态 AI 结合。作者把三个公开的 Wi-Fi CSI 基准统一为 285,790 个样本、7 项任务、353 个类别：CSI-Bench（真实环境中的商用设备；人体活动识别、跌倒检测、运动源、接近度与用户识别）、XRF55（55 种细粒度室内动作）和 SignFi（276 类手语手势）。所有输入都转换为统一的幅度张量（提取幅度、5 秒窗口、逐样本归一化、通过补零或均匀下采样把子载波数标准化为固定值；来源硬件的子载波数各异：Broadcom 14、ESP32 64、Qualcomm 256、Intel 5300 270）。样本通过多对多分配与 2,291 条分层结构、由标签导出的文本描述配对，得到约 200 万个 CSI-文本训练元组（1,998,574）。

在同一双编码器设计下基准测试了来自四类范式的五种对齐方法：对比式（CLIP-InfoNCE、SigLIP）、锚点式（LanguageBind）、非对比式（Barlow Twins）和重建式（掩码跨模态预测）。报告结果：CLIP-InfoNCE 零样本在 HAR 上达 97.8%（有监督基线 97.9%），在 SignFi 上达 97.0%（有监督基线 99.4%）。在 SignFi 的 76 个留出类别上，零样本准确率仅 11.3%，每类给 10 个标注样本后升至 74.6%。单一多任务模型无需任务专用头，在 HAR 与 SignFi 上分别达 96.0% 与 96.1%，但接近度任务降至 84.5%。统一模型回答活动、接近度、身份的联合问题，在 140 个复合场景上 top-1 达 86.9%，高于分属性单独问答得到的联合准确率 70.4%。论文自述局限：冻结的预训练文本编码器对专业化语言支持不佳，原始传感器相关提示下的开放词汇准确率降至 35.4%；基于模板的描述可能遗漏细粒度信号差异；细粒度任务上对未见类别的迁移有限；跨环境、跨设备性能仍受 CSI 领域敏感性限制；SignFi 原始数据不随本数据集发布，用户需向数据集提供方获取。

## Key technical points (EN)

- Dataset: 285,790 CSI samples, 7 tasks, 353 classes, 2,291 unique descriptions, about 2.0M CSI-text tuples; built from CSI-Bench, XRF55 and SignFi with a common preprocessing pipeline (5-s windows, normalisation, fixed subcarrier count).
- Benchmarked alignment methods: CLIP-InfoNCE, SigLIP, LanguageBind, Barlow Twins, masked cross-modal prediction (same dual encoder).
- Zero-shot parity with supervision on coarse tasks: HAR 97.8% vs 97.9%; SignFi 97.0% vs 99.4%.
- Unseen classes (SignFi, 76 held out): 11.3% zero-shot, 74.6% with 10 shots per class.
- One unified model: HAR 96.0%, SignFi 96.1%, proximity 84.5%; 86.9% top-1 on 140 composite scenes vs 70.4% for per-attribute QA.
- Open-vocabulary on raw sensor-grounded prompts: 35.4%; domain sensitivity across environments and devices remains.

## Key technical points (ZH)

- 数据集：285,790 个 CSI 样本、7 项任务、353 个类别、2,291 条独立描述、约 200 万个 CSI-文本元组；由 CSI-Bench、XRF55 与 SignFi 通过统一预处理流程构建（5 秒窗口、归一化、固定子载波数）。
- 基准测试的对齐方法：CLIP-InfoNCE、SigLIP、LanguageBind、Barlow Twins、掩码跨模态预测（同一双编码器）。
- 粗粒度任务上零样本与有监督持平：HAR 97.8% 对 97.9%；SignFi 97.0% 对 99.4%。
- 未见类别（SignFi，76 个留出类）：零样本 11.3%，每类 10 样本时 74.6%。
- 单一统一模型：HAR 96.0%、SignFi 96.1%、接近度 84.5%；140 个复合场景 top-1 为 86.9%，分属性问答为 70.4%。
- 原始传感器相关提示下的开放词汇准确率为 35.4%；跨环境、跨设备的领域敏感性依然存在。

## Why it matters / what's new (EN)

Compared with recent CSI-sensing papers that propose a model for one task (e.g. [2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing](2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing.md) and [2026-10-26_arxiv-wisper-pose-supervised-residual-flow-multi-person-3d-pose-wifi-csi](2026-10-26_arxiv-wisper-pose-supervised-residual-flow-multi-person-3d-pose-wifi-csi.md)), this entry is a data and benchmark contribution that ties Wi-Fi CSI to text for open-vocabulary and compositional queries. The numbers also show where the approach is weak (unseen fine-grained classes, raw sensor-grounded prompts, proximity), which is useful calibration for anyone considering CSI as an input to language models. It is a research benchmark on public datasets, not a statement about 802.11bf behaviour.

## Why it matters / what's new (ZH)

与近期多针对单一任务提出模型的 CSI 感知论文（例如 [2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing](2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing.md) 与 [2026-10-26_arxiv-wisper-pose-supervised-residual-flow-multi-person-3d-pose-wifi-csi](2026-10-26_arxiv-wisper-pose-supervised-residual-flow-multi-person-3d-pose-wifi-csi.md)）相比，本文属于数据与基准贡献，把 Wi-Fi CSI 与文本关联起来以支持开放词汇和组合式查询。数字同时显示了该方法的薄弱处（未见的细粒度类别、原始传感器相关提示、接近度），对考虑把 CSI 作为语言模型输入的人是有用的校准。这是基于公开数据集的研究基准，不涉及 802.11bf 的行为。

## Images

![Overview of the seven ambient sensing tasks unified in CSI-TextBench | CSI-TextBench 统一的七项环境感知任务概览](https://arxiv.org/html/2610.34616v1/concept_figure.png)
