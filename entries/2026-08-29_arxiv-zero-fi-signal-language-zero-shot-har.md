---
id: 2026-08-29_arxiv-zero-fi-signal-language-zero-shot-har
date_published: 2026-07-29
date_found: 2026-08-29
technology: wifi
type: academic-paper
title_en: "Zero-Fi: Zero-Shot Wi-Fi-Based Human Activity Recognition via Contrastive Signal-Language Alignment"
title_zh: "Zero-Fi：基于对比式「信号—语言」对齐的零样本 Wi-Fi 人体活动识别"
url: "https://arxiv.org/abs/2607.26381"
source_quality: full
topics: [WiFi-sensing, CSI, HAR, zero-shot, CLIP, contrastive-learning, Doppler, WiDAR3.0, XRF55]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 1
---

## Summary (EN)

Nearly every Wi-Fi channel-state-information (CSI) activity-recognition system in the literature — and in this knowledge base — is a closed-set classifier. It is trained on a fixed list of activities, and the only way to make it recognise a new one is to collect labelled CSI for that activity and retrain. Zero-Fi (arXiv 2607.26381, submitted 29 July 2026, by Yitong Shen, Cheng Guo, Peiliang Wang, Jingzhe Zhang, Yi Sheng, Haopeng Zhang, Hongfei Xue and Yili Ren) attacks that assumption directly: it recognises activities for which **no Wi-Fi sample was ever seen during training**, by borrowing the CLIP recipe and aligning Wi-Fi signal embeddings against natural-language descriptions of what a body does during the activity.

The mechanism has three parts. First, the signal side extracts **three complementary CSI views** rather than one — Doppler frequency shift (time-frequency motion dynamics), phase (fine-grained variation) and amplitude (coarse motion envelope) — after suppressing random phase offset and carrier frequency offset by conjugate multiplication across antenna pairs. Each view gets its own Transformer encoder (1-D convolutional stems for amplitude and phase, 2-D for the DFS spectrogram), and a Signal Embedding Extractor plus a Signal Embedding Aggregator fuse them into a single vector. Second, the text side does not use bare class labels. An LLM (ChatGPT-3.5) is prompted to expand each activity name into a **body-part-decomposed description** of the movement, which the frozen CLIP text encoder embeds and a Text Embedding Aggregator condenses. Third, bidirectional InfoNCE contrastive learning pulls matching signal/text pairs together in a shared space, with class-aware batch sampling to suppress false negatives and intermediate supervision at several depths. An adversarial **domain discriminator** is trained against the signal encoder so the embedding forgets which dataset and which room the sample came from while keeping the motion content.

At inference the classifier is gone entirely. An unseen activity is described in text, embedded, and matched to the incoming signal embedding by cosine similarity — no labelled Wi-Fi data, no retraining, no head surgery.

The evaluation pools WiDAR 3.0 (22 activities, ~270k samples) and XRF55 (55 activities, ~128.7k samples) into a 75-class space, holds out seven classes at random under a strictly class-disjoint protocol, and repeats over six independent splits with a trimmed mean. Zero-Fi reaches **69.58 %** on the held-out activities against 26.79 % for Wi-CLIP and 23.86 % for FM-ZSL-IoT, the two other signal-language baselines; closed-set architectures with no language mapping (THAT, OneFi, CLAR) sit below 17 %, which is roughly what chance-plus-bias looks like when a model has no way to represent a class it never saw. The ablations are the interesting part: the **LLM-written descriptions are worth 21.09 points** over plain class labels (48.49 % → 69.58 %), the domain discriminator is worth 5.90 points, and among single views phase (65.19 %) beats amplitude (61.09 %) which beats DFS alone (48.99 %) — a ranking that inverts the usual Doppler-first intuition in Wi-Fi sensing and only recovers its full value in combination.

## Summary (ZH)

现有的 Wi-Fi CSI 人体活动识别系统——包括本知识库已收录的绝大多数工作——本质上都是闭集分类器：训练时给定固定的动作列表，若要识别新动作，就必须为该动作重新采集带标注的 CSI 并重新训练。Zero-Fi（arXiv 2607.26381，2026 年 7 月 29 日提交，作者 Yitong Shen、Cheng Guo、Peiliang Wang、Jingzhe Zhang、Yi Sheng、Haopeng Zhang、Hongfei Xue、Yili Ren）直接挑战这一前提：它能识别**训练阶段从未见过任何 Wi-Fi 样本**的动作类别，做法是借用 CLIP 的思路，把 Wi-Fi 信号嵌入与「该动作中身体如何运动」的自然语言描述对齐。

机制分三部分。其一，信号侧不只用单一表征，而是提取**三路互补的 CSI 视图**——多普勒频移（时频运动动态）、相位（细粒度变化）与幅度（粗粒度运动包络）；先通过天线间共轭相乘抑制随机相位偏移与载波频偏。每一路各配一个 Transformer 编码器（幅度/相位用一维卷积前端，多普勒谱图用二维卷积），再由 Signal Embedding Extractor 与 Signal Embedding Aggregator 融合为单一向量。其二，文本侧不使用裸标签：先用大模型（ChatGPT-3.5）把动作名扩写为**按身体部位分解**的运动描述，经冻结的 CLIP 文本编码器嵌入，再由 Text Embedding Aggregator 归并。其三，用双向 InfoNCE 对比学习把匹配的信号/文本对拉近到共享空间，辅以类别感知的批采样以抑制假负样本，并在多层施加中间监督。此外训练一个对抗式**域判别器**，迫使信号嵌入「忘掉」样本来自哪个数据集、哪个房间，只保留运动内容。

推理阶段完全不需要分类头：把未见动作用文本描述、嵌入，与信号嵌入做余弦相似度匹配即可——无需标注 Wi-Fi 数据、无需重训练、无需改网络结构。

实验把 WiDAR 3.0（22 类、约 27 万样本）与 XRF55（55 类、约 12.87 万样本）合并为 75 类空间，随机留出 7 个类别，严格保证训练集中不含未见类数据，重复六次独立划分并取截尾均值。Zero-Fi 在未见类上达到 **69.58%**，而两个同样做信号—语言映射的基线 Wi-CLIP 与 FM-ZSL-IoT 分别只有 26.79% 与 23.86%；没有语言映射的闭集架构（THAT、OneFi、CLAR）低于 17%，基本等同于随机加偏置。消融结果更值得注意：**大模型生成的描述相比裸标签带来 21.09 个百分点的增益**（48.49% → 69.58%），域判别器贡献 5.90 个百分点；单视图中相位（65.19%）优于幅度（61.09%）优于多普勒（48.99%）——这一排序与 Wi-Fi 感知领域「多普勒优先」的惯常直觉相反，多普勒只有在组合中才发挥全部价值。

## Key technical points (EN)

- **Three-view CSI front end.** Doppler frequency shift, phase and amplitude are encoded separately (2-D conv stem for DFS, 1-D for the other two) and aggregated, rather than the single-representation pipelines typical of prior HAR work.
- **Hardware-noise removal by conjugate multiplication** across antennas cancels random phase offset and carrier frequency offset — the standard commodity-NIC trick — before encoding.
- **LLM-expanded class descriptions, not labels.** ChatGPT-3.5 decomposes each activity into per-body-part motion text; CLIP's frozen text encoder embeds it. This single choice accounts for 21.09 points of the final accuracy.
- **Bidirectional InfoNCE alignment** with class-aware batch sampling (to avoid treating same-class items as negatives) and intermediate supervision at multiple layers.
- **Adversarial domain discriminator** strips dataset/environment identity from the signal embedding (+5.90 points), which is what makes a WiDAR-trained embedding usable against XRF55 text prompts.
- **Zero-shot inference by cosine similarity** against text embeddings of unseen classes — no classifier head, no retraining.
- **Headline result:** 69.58 % on 7 held-out classes from a pooled 75-class space, versus 26.79 % (Wi-CLIP), 23.86 % (FM-ZSL-IoT) and < 17 % for closed-set baselines, over six class-disjoint splits.
- **Ablation ranking of single views:** phase 65.19 % > amplitude 61.09 % > DFS 48.99 %; all three combined 69.58 %.
- **Cost and gaps:** ~7 hours training on an RTX 4090; the evaluation does not report cross-subject or cross-environment splits, and only seven classes are held out per trial.
- **Category note:** the paper is filed under cs.CV / cs.AI with no cs.NI cross-list, which is why it does not appear in the networking listings where Wi-Fi sensing work is usually found.

## Key technical points (ZH)

- **三视图 CSI 前端**：多普勒频移、相位、幅度分别编码（多普勒用二维卷积前端，其余用一维）后聚合，不同于既往 HAR 工作常见的单一表征流水线。
- **共轭相乘去硬件噪声**：跨天线共轭相乘消除随机相位偏移与载波频偏——商用网卡上的标准做法——然后再进入编码器。
- **用大模型扩写的类别描述，而非标签**：ChatGPT-3.5 把每个动作分解为按身体部位的运动文本，由冻结的 CLIP 文本编码器嵌入。仅此一项即贡献 21.09 个百分点。
- **双向 InfoNCE 对齐**，配合类别感知批采样（避免把同类样本当作负样本）与多层中间监督。
- **对抗式域判别器**剥离信号嵌入中的数据集/环境身份（+5.90 个百分点），这正是让 WiDAR 上训练的嵌入能对接 XRF55 文本提示的关键。
- **零样本推理靠余弦相似度**与未见类文本嵌入匹配——无分类头、无需重训练。
- **主要结果**：在合并的 75 类空间中留出 7 类，准确率 69.58%，对比 Wi-CLIP 26.79%、FM-ZSL-IoT 23.86%，闭集基线低于 17%；六次类别互斥划分。
- **单视图消融排序**：相位 65.19% > 幅度 61.09% > 多普勒 48.99%；三者合并 69.58%。
- **代价与不足**：RTX 4090 上训练约 7 小时；未报告跨用户、跨环境划分结果，每次试验仅留出 7 个类别。
- **归类说明**：论文归于 cs.CV / cs.AI，未交叉列入 cs.NI，因此不会出现在通常收录 Wi-Fi 感知工作的网络类列表中。

## Why it matters / what's new (EN)

The `sensing-csi` bin of this knowledge base is dense with representation-learning work — self-supervised pretraining (`2026-05-01_arxiv-ssl-wifi-sensing-tutorial`, `2026-05-16_arxiv-csi-jepa`), foundation models (`2026-05-04_arxiv-am-fm-wifi-foundation-model`), and LLM-coupled sensing (`2026-05-16_arxiv-wireless-sense-llm`). All of those still terminate in a classifier over a known label set; they make the encoder better, not the label space open. Zero-Fi changes the axis: the label space becomes text, so the deployed system's vocabulary is whatever an operator can write down. **Correction to an earlier draft of this entry, which called it "the first genuinely open-set-by-construction entry in this bin": that was wrong about the bin and wrong about the field.** Signal-to-language zero-shot RF sensing is a seven-year-old sub-literature. **Wi-Fringe** (arXiv 1908.06803, 2019) already mapped CSI to English word embeddings for unseen gestures; TENT (2311.08245), "Large Model for Small Data" (2410.19766, a CLIP text encoder over an RF encoder), Wi-Chat (2502.12421) and WiFi2Cap (2603.22690) followed, and this knowledge base already holds `2026-05-16_arxiv-wireless-sense-llm` (novelty 4) in the same territory. Zero-Fi also benchmarks against Wi-CLIP and FM-ZSL-IoT, which are themselves signal-language methods. Zero-Fi is roughly the eighth entrant in that line, not the first — hence novelty 1. What it contributes is engineering depth rather than a new axis, and it remains a different capability from `2026-08-19_arxiv-argus-csi-statgram-person-id` (identification within a known roster) or `2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit` (auditing synthetic data quality).

Two findings deserve to survive independent of the specific architecture. The first is that **the language side is where the accuracy lives** — swapping LLM-written body-part descriptions for plain class names costs 21 points, more than any signal-side ablation. A Wi-Fi motion signature apparently aligns to a description of *limb trajectories*, not to a category name, which is a useful prior for anyone building semantic interfaces over RF sensing. The second is that phase, not Doppler, is the strongest single view here (65.19 % vs 48.99 %) — a result worth checking against the Doppler-centric designs that dominate this bin, including `2026-08-19_arxiv-dorf-doppler-radiance-fields-wifi-sensing`.

The caveats are real: no cross-subject or cross-environment protocol is reported, so the domain discriminator's contribution is demonstrated against dataset identity rather than against the deployment shift that actually breaks Wi-Fi sensing in the field. Both source datasets are also lab-collected. This entry is a deliberate ingest of a paper published four weeks before its capture — it was filed under cs.CV / cs.AI with no networking cross-list, so the usual networking-listing sweep could not see it, and the bin had no open-set coverage to substitute for it.

## Why it matters / what's new (ZH)

本知识库 `sensing-csi` 分类中已密集收录了表征学习类工作——自监督预训练（`2026-05-01_arxiv-ssl-wifi-sensing-tutorial`、`2026-05-16_arxiv-csi-jepa`）、基础模型（`2026-05-04_arxiv-am-fm-wifi-foundation-model`）、以及大模型耦合感知（`2026-05-16_arxiv-wireless-sense-llm`）。但这些工作最终仍落到一个已知标签集上的分类器：它们改善的是编码器，而非标签空间的开放性。Zero-Fi 改变的是这个维度——标签空间变成了文本，于是部署系统的「词汇表」就是运维人员能写下来的任何描述。**对本条目早前草稿的更正**：那份草稿称其为「该分类下第一条在构造上即为开集的条目」，这个说法既误判了本分类，也误判了整个领域。「信号—语言」零样本射频感知是一条已有七年历史的支线：**Wi-Fringe**（arXiv 1908.06803，2019）就已把 CSI 映射到英文词嵌入以识别未见手势；其后有 TENT（2311.08245）、《Large Model for Small Data》（2410.19766，在射频编码器之上接 CLIP 文本编码器）、Wi-Chat（2502.12421）、WiFi2Cap（2603.22690）；本知识库自身也已收录同一领域的 `2026-05-16_arxiv-wireless-sense-llm`（novelty 4）。而 Zero-Fi 对标的 Wi-CLIP 与 FM-ZSL-IoT 本身也是信号—语言方法。Zero-Fi 大致是这条线上的第八位入场者，而非第一位——故 novelty 评为 1。它的贡献在于工程深度，而非开辟新维度；其能力仍与 `2026-08-19_arxiv-argus-csi-statgram-person-id`（已知名单内的身份识别）或 `2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit`（合成数据质量审计）不同。

有两点结论值得脱离具体网络结构单独记住。其一，**准确率主要来自语言侧**——把大模型撰写的身体部位描述换成裸类别名，代价是 21 个百分点，超过任何信号侧消融。Wi-Fi 运动特征似乎是与「肢体轨迹的描述」对齐，而非与类别名称对齐；这对任何想在射频感知之上构建语义接口的人都是有用的先验。其二，此处最强的单视图是相位而非多普勒（65.19% vs 48.99%），这一点值得与本分类中占主导的多普勒中心设计（如 `2026-08-19_arxiv-dorf-doppler-radiance-fields-wifi-sensing`）对照检验。

不足亦须如实记录：论文未报告跨用户或跨环境协议，因此域判别器的作用只是针对「数据集身份」验证，而非针对真正会在现场击垮 Wi-Fi 感知的部署漂移；两个源数据集也都是实验室采集。本条目是对一篇早于收录四周发表的论文的有意补录——它归于 cs.CV / cs.AI 且未交叉列入网络类目录，常规的网络列表扫描无法看到它，而该分类此前也没有任何开集工作可以替代。

## Images
![Wi-Fi sensing setup and the closed-set limitation Zero-Fi targets | Zero-Fi 针对的 Wi-Fi 感知场景与闭集局限](https://arxiv.org/html/2607.26381v1/wifi_sensing.png)
![Zero-Fi pipeline: three-view signal encoders, LLM-expanded text branch, contrastive alignment | Zero-Fi 流程：三视图信号编码器、大模型扩写文本分支与对比对齐](https://arxiv.org/html/2607.26381v1/procedure.png)
![Doppler frequency shift view of the CSI input | CSI 输入的多普勒频移视图](https://arxiv.org/html/2607.26381v1/dfs.png)
![Phase view — the strongest single representation in the ablation | 相位视图——消融中最强的单一表征](https://arxiv.org/html/2607.26381v1/phase.png)
![Amplitude view of the CSI input | CSI 输入的幅度视图](https://arxiv.org/html/2607.26381v1/amplitude.png)
![LLM prompt that decomposes an activity into per-body-part motion text | 将动作分解为身体部位运动描述的大模型提示词](https://arxiv.org/html/2607.26381v1/activity_decomposition_propmpt.png)
