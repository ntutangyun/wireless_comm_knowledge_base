---
id: 2026-05-16_arxiv-csi-jepa
date_published: 2026-05-13
date_found: 2026-05-16
type: academic-paper
title_en: "CSI-JEPA: Towards Foundation Representations for Ubiquitous Sensing with Minimal Supervision"
title_zh: "CSI-JEPA：面向泛在感知的少监督基础表示学习"
url: "https://arxiv.org/abs/2605.14171"
source_quality: full
topics: [802.11bf, WiFi-sensing, CSI]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 4
---

## Summary (EN)

CSI-JEPA introduces the first joint-embedding predictive architecture (JEPA) tailored for Wi-Fi Channel State Information (CSI) sensing. The core insight is that unlabeled CSI is abundant in any Wi-Fi deployment — every packet exchange produces channel measurements — but task-specific labeled data (e.g., "this CSI segment means person A is walking") is expensive to collect. CSI-JEPA learns reusable temporal-spectral representations from unlabeled CSI alone, then freezes the encoder and attaches lightweight task-specific adapters for each downstream sensing task.

The key technical mechanism is a channel variation-aware masking strategy. Rather than randomly masking CSI patches, CSI-JEPA tokenizes CSI amplitude windows along both time and subcarrier dimensions, estimates local channel dynamics from temporal and subcarrier-domain variations, and preferentially masks regions with stronger dynamics. The model is then trained to predict latent features of the masked regions from visible context — not to reconstruct raw CSI values, which would waste capacity on low-level signal details irrelevant to sensing. After pretraining, the same frozen encoder supports seven real-world Wi-Fi sensing tasks: activity recognition, respiration monitoring, user identification, proximity estimation, fall detection, room occupancy, and gesture recognition.

Experiments show CSI-JEPA achieves up to 10.64 percentage points mean accuracy gain over the strongest supervised Transformer baseline, and up to 14.38 pp mean F1 gain. The label-efficiency story is even stronger: CSI-JEPA matches the fully-supervised baseline's performance using only 2% of the labels (98% label savings). Ablation studies confirm the channel variation-aware masking is responsible for roughly half the gain over random masking. The pretrained encoder costs 4.2M parameters and the per-task adapters add only 0.1–0.3M parameters each, making the approach practical for Wi-Fi AP-side deployment.

CSI-JEPA is positioned as a reusable representation layer between PHY-layer CSI acquisition (including future 802.11bf standardized sensing procedures) and application-layer sensing inference. By operating on CSI measurements already available in commodity Wi-Fi chipsets, it offers a protocol-compatible path toward integrated communication and sensing services.

## Summary (ZH)

CSI-JEPA 提出了首个专为 Wi-Fi 信道状态信息（CSI）感知设计的联合嵌入预测架构（JEPA）。核心洞察是：在任何 Wi-Fi 部署中，未标注的 CSI 数据随处可得——每次数据包交换都会产生信道测量——但任务特定的标注数据（如"这段 CSI 意味着人物 A 在行走"）收集成本高昂。CSI-JEPA 仅从未标注的 CSI 中学习可复用的时频表示，然后冻结编码器，为每个下游感知任务仅附加轻量级适配器。

关键技术机制是信道变化感知的掩码策略。CSI-JEPA 并非随机掩码 CSI 片段，而是沿时间和子载波两个维度对 CSI 幅度窗口进行分词，估计局部时域和子载波域的信道动态变化，并优先掩码动态更强的区域。模型随后从可见上下文预测被掩码区域的潜在特征——而非重建原始 CSI 值，后者会把容量浪费在与感知无关的低层信号细节上。预训练后，同一冻结编码器支持七种真实 Wi-Fi 感知任务：活动识别、呼吸监测、用户识别、接近度估计、跌倒检测、房间占用检测和手势识别。

实验表明，CSI-JEPA 相较最强监督 Transformer 基线平均准确率提升高达 10.64 个百分点，F1 提升高达 14.38 个百分点。标签效率方面更突出：CSI-JEPA 仅用 2% 的标签即可匹敌全监督基线的性能（节省 98% 标注成本）。消融实验证实，信道变化感知掩码贡献了约一半的增益。预训练编码器仅 4.2M 参数，每任务适配器仅增加 0.1–0.3M 参数，适合在 Wi-Fi AP 侧部署。

CSI-JEPA 定位为 PHY 层 CSI 采集（包括未来的 802.11bf 标准化感知流程）与应用层感知推理之间的可复用表示层。通过运行在现有商用 Wi-Fi 芯片组已有的 CSI 测量值之上，它为通信感知一体化服务提供了一条协议兼容的路径。

## Key technical points (EN)

- **Joint-Embedding Predictive Architecture for CSI**: First application of JEPA to Wi-Fi sensing. Learns by predicting latent embeddings of masked CSI regions rather than reconstructing raw IQ/amplitude, shifting the pretext task from signal recovery to semantic representation learning.
- **Channel Variation-Aware Masking**: Tokenizes CSI into temporal-subcarrier patches, computes local variation scores along both axes, and biases mask sampling toward high-dynamics regions. This ensures the model learns from the most informative channel structures.
- **Temporal-Spectral Tokenization**: CSI amplitude windows are partitioned into patch tokens spanning time and subcarrier dimensions, preserving the 2D structure of channel responses rather than flattening to 1D.
- **Frozen Encoder + Lightweight Adapters**: Pretrained encoder (4.2M params) is frozen; per-task adaptation uses tiny adapter modules (0.1–0.3M params). Total cost to support 7 tasks is ~5M params vs. ~30M for separate supervised models.
- **Seven-Task Evaluation**: Activity recognition, respiration monitoring, user identification, proximity estimation, fall detection, room occupancy, gesture recognition — all using publicly available CSI datasets.
- **98% Label Savings**: CSI-JEPA with 2% labels matches fully-supervised Transformer with 100% labels on mean accuracy.

## Key technical points (ZH)

- **CSI 联合嵌入预测架构**：首次将 JEPA 应用于 Wi-Fi 感知。通过预测被掩码 CSI 区域的潜在嵌入而非重建原始 I/Q 或幅度来学习，将预训练任务从信号恢复提升为语义表示学习。
- **信道变化感知掩码**：将 CSI 分词为时频二维片段，沿时间和子载波轴计算局部变化分数，使掩码采样偏向高动态区域，确保模型从信息最丰富的信道结构中学习。
- **时频二维分词**：将 CSI 幅度窗口划分为同时覆盖时间和子载波维度的补丁令牌，保留信道响应的二维结构，而非展平为一维。
- **冻结编码器 + 轻量适配器**：预训练编码器（4.2M 参数）保持冻结；每任务仅通过微型适配器（0.1–0.3M 参数）适配。7 任务总成本约 5M 参数，而独立监督模型需约 30M。
- **七任务评估**：活动识别、呼吸监测、用户识别、接近度估计、跌倒检测、房间占用检测、手势识别——均使用公开 CSI 数据集。
- **98% 标签节省**：CSI-JEPA 仅用 2% 标签即在全监督 Transformer 的 100% 标签条件下匹敌平均准确率。

## Why it matters / what's new (EN)

This is the first work to bring joint-embedding predictive representation learning — the same family of approaches behind I-JEPA and V-JEPA in vision — to the Wi-Fi sensing domain. Prior self-supervised CSI work relied on either contrastive learning (which needs careful negative sampling) or masked reconstruction (which wastes capacity on low-level signal details). CSI-JEPA's latent-space prediction objective is better aligned with downstream sensing tasks because it learns to represent *what changed* in the channel rather than *what the raw signal looked like*.

The channel variation-aware masking strategy is the key innovation that makes JEPA work for CSI. Wi-Fi channel responses are not natural images — a "patch" of CSI has physical meaning (time = motion evolution, subcarrier = frequency-selective fading). Random masking ignores this structure; uniform masking misses the most informative regions. The variation-aware approach bridges the gap.

For the 802.11bf standardization context, CSI-JEPA provides a concrete representation-learning layer that can sit between standardized sensing measurement procedures and application-layer sensing services — exactly the kind of reusable sensing primitive that would make integrated communication and sensing (ICAS) practical in future WLANs.

## Why it matters / what's new (ZH)

这是首次将联合嵌入预测表示学习（与视觉领域 I-JEPA / V-JEPA 同族方法）引入 Wi-Fi 感知领域的工作。此前自监督 CSI 方法要么依赖对比学习（需要精心设计负样本），要么依赖掩码重建（将容量浪费在低层信号细节上）。CSI-JEPA 的潜在空间预测目标与下游感知任务更加对齐，因为它学习表示的是信道中*发生了什么变化*，而非*原始信号长什么样*。

信道变化感知掩码策略是使 JEPA 适用于 CSI 的关键创新。Wi-Fi 信道响应不是自然图像——CSI 的"补丁"具有物理含义（时域 = 运动演化，子载波 = 频率选择性衰落）。随机掩码忽略了这一结构；均匀掩码错过了信息最丰富的区域。变化感知方法弥合了这一差距。

在 802.11bf 标准化背景下，CSI-JEPA 提供了一个可坐落在标准化感知测量流程与应用层感知服务之间的具体表示学习层——正是使通信感知一体化（ICAS）在未来 WLAN 中切实可行所需的那种可复用感知原语。

## Images
![CSI-JEPA architecture overview: unlabeled CSI → temporal-spectral tokenization → channel variation-aware masking → predictive latent pretraining → frozen encoder + task adapters | CSI-JEPA 架构总览：未标注CSI → 时频分词 → 信道变化感知掩码 → 预测性潜在预训练 → 冻结编码器+任务适配器](https://arxiv.org/html/2605.14171v1/x1.png)
![Channel variation-aware masking strategy: local variation estimation along temporal and subcarrier axes, adaptive target region sampling | 信道变化感知掩码策略：沿时间和子载波轴的局部变化估计，自适应目标区域采样](https://arxiv.org/html/2605.14171v1/x2.png)
![Downstream adaptation: frozen encoder with lightweight per-task adapter modules for 7 sensing tasks | 下游适配：冻结编码器配合7个感知任务的轻量级逐任务适配器模块](https://arxiv.org/html/2605.14171v1/x3.png)
![Label-efficient adaptation results: accuracy vs. label budget across 7 tasks, showing 98% label savings | 标签高效适配结果：7个任务中准确率与标签预算的关系，显示98%标签节省](https://arxiv.org/html/2605.14171v1/x4.png)
![Ablation study: masking strategy comparison and backbone design choices | 消融实验：掩码策略对比和骨干网络设计选择](https://arxiv.org/html/2605.14171v1/x5.png)
