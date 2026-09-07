---
id: 2026-09-07_arxiv-clp-speech-asr-edge-jetson-fairness
date_published: 2026-09-03
date_found: 2026-09-07
type: academic-paper
technology: edge-ai
title_en: "Fairness Evaluation of Edge-AI Implementation for Cleft Lip and Palate Speech ASR"
title_zh: "面向唇腭裂语音识别边缘 AI 实现的公平性评估"
url: "https://arxiv.org/abs/2609.03982"
source_quality: full
topics: [ASR, Whisper, Jetson, edge-deployment, severity-aware-training, accessibility]
topic_primary: on-device-inference
novelty_score: 2
---

## Summary (EN)

Automatic speech recognition (ASR) performs poorly on speech from people with cleft lip and palate (CLP), a group with limited pathological speech data and large acoustic variability across severity levels. The authors (IIT Guwahati, IIT Dharwad) target a specific deployment constraint on top of the accuracy problem: cloud-based ASR is unreliable in resource-constrained settings, so the system needs to run fully on-device.

The paper fine-tunes OpenAI's Whisper-small under five training configurations that vary which severity levels of CLP speech are included (normal-only; normal+mild; normal+mild+moderate; all four severity levels together; and CLP-only), each held to 280 training utterances for a controlled comparison, and evaluated on a held-out set of 264 utterances (66 per severity group). Alongside standard word/phoneme error rate, the paper reports a composite fairness score that balances average error rate against the performance disparity between normal and CLP speakers.

The deployment target is an NVIDIA Jetson edge platform (FP16, greedy decoding, beam size 1). Fine-tuning across all severity levels (configuration "NOMIMOSE") cuts pooled WER from 62.46% (pretrained Whisper-small) to 22.72%, and cuts the fairness-score gap from -62.30 to -23.50, while running at a real-time factor of 0.167 (5.99x faster than real-time) with roughly 566 MB peak GPU memory — essentially unchanged from the pretrained model's footprint, i.e. the accuracy and fairness gains come at no additional on-device memory cost. Severity-specific WER drops are steep at the more severe end: from 108.27% (pretrained, moderate) to 25.59%, and from 92.98% (pretrained, severe) to 54.96%.

## Summary (ZH)

针对唇腭裂（CLP）患者语音的自动语音识别（ASR）表现普遍不佳，这一群体的病理语音数据稀缺，且不同严重程度之间声学差异很大。作者（印度理工学院古瓦哈提分校、达瓦德分校）在准确率问题之上，还瞄准了一个具体的部署约束：基于云端的 ASR 在资源受限环境下并不可靠，因此系统需要完全在设备端本地运行。

论文对 OpenAI 的 Whisper-small 模型在五种训练配置下进行微调，各配置纳入不同严重程度组合的 CLP 语音（仅正常语音；正常+轻度；正常+轻度+中度；四个严重程度全部纳入；以及仅 CLP 语音），每种配置均控制为 280 条训练语句以保证对照公平，并在留出的 264 条语句（每个严重程度组 66 条）上评测。除标准的词错误率/音素错误率外，论文还给出一个综合公平性得分，用于平衡平均错误率与正常/CLP 说话人之间的表现差距。

部署目标为 NVIDIA Jetson 边缘平台（FP16，贪婪解码，束宽为 1）。在纳入全部严重程度进行微调的配置（"NOMIMOSE"）下，池化 WER 从预训练 Whisper-small 的 62.46% 降至 22.72%，公平性得分差距从 -62.30 收窄至 -23.50，同时实时因子达到 0.167（比实时快 5.99 倍），GPU 峰值显存约为 566MB——与预训练模型基本持平，即准确率与公平性的提升并未带来额外的设备端显存开销。在更严重的分组上，WER 降幅尤为显著：中度组从预训练的 108.27% 降至 25.59%，重度组从 92.98% 降至 54.96%。

## Key technical points (EN)

- **Problem**: CLP speech ASR suffers both from data scarcity/acoustic variability and, separately, from a deployment constraint — cloud ASR is unreliable where these systems are most needed, so the model must run on-device.
- **Method**: five severity-composition fine-tuning configurations of Whisper-small, each held to 280 training utterances; evaluated on 264 held-out utterances (66/severity group); a composite fairness score balances average error rate against normal-vs-CLP disparity.
- **Deployment**: NVIDIA Jetson edge platform, FP16, greedy decoding (beam size 1); model load time 2.877-2.964s.
- **Headline numbers**: pooled WER 62.46% (pretrained) -> 22.72% (best fine-tuned, "NOMIMOSE"); fairness score -62.30 -> -23.50; real-time factor 0.212 -> 0.167 (5.99x real-time); peak GPU memory ~566 MB, unchanged from pretrained; severity-specific WER improves most for moderate (108.27% -> 25.59%) and severe (92.98% -> 54.96%) groups.
- **Result shape**: accuracy and fairness improvements come with no additional on-device memory overhead versus the unmodified pretrained model.

## Key technical points (ZH)

- **问题**：CLP 语音 ASR 既受制于数据稀缺与声学差异性，又受制于一个独立的部署约束——在最需要这类系统的场景下，云端 ASR 往往不可靠，因此模型必须在设备端本地运行。
- **方法**：对 Whisper-small 采用五种按严重程度组合的微调配置，每种均控制为 280 条训练语句；在 264 条留出语句（每严重程度组 66 条）上评测；采用综合公平性得分，平衡平均错误率与正常/CLP 说话人差距。
- **部署**：NVIDIA Jetson 边缘平台，FP16，贪婪解码（束宽 1）；模型加载耗时 2.877-2.964 秒。
- **核心数据**：池化 WER 由预训练的 62.46% 降至最佳微调配置（"NOMIMOSE"）的 22.72%；公平性得分由 -62.30 收窄至 -23.50；实时因子由 0.212 降至 0.167（比实时快 5.99 倍）；GPU 峰值显存约 566MB，与预训练模型持平；中度组（108.27%→25.59%）与重度组（92.98%→54.96%）的 WER 改善幅度最大。
- **结果特征**：准确率与公平性的提升，相较未修改的预训练模型并未带来额外的设备端显存开销。

## Why it matters / what's new (EN)

The paper's headline framing is fairness/accessibility, not systems research, but its deployment section is a genuine, concrete edge measurement — real-time factor and peak GPU memory on named Jetson hardware — which is why it belongs in this KB's on-device-inference bin rather than being left to a speech-accessibility venue alone. It is a useful, modest data point for this domain's running theme: severity-aware fine-tuning bought a large accuracy gain on the hardest cases at effectively zero on-device memory cost, a different axis from the compression/quantization trade-offs this KB usually tracks.

## Why it matters / what's new (ZH)

该论文的主要叙事是公平性/无障碍，而非系统研究，但其部署章节给出了真实、具体的边缘测量数据——在具名的 Jetson 硬件上测得的实时因子与 GPU 峰值显存——这正是它被归入本知识库 on-device-inference 分类、而非仅留给语音无障碍类会议的原因。它为本领域持续跟踪的主题提供了一个有价值但规模适中的数据点：严重程度感知的微调在最难分组上换来了显著的准确率提升，而设备端显存开销几乎为零——这与本知识库通常跟踪的压缩/量化权衡是不同的维度。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
