---
id: 2026-11-10_arxiv-tofs-swap-supervised-feature-selection-semantic-communication-fading
date_published: 2026-11-06
date_found: 2026-11-10
technology: edge-ai
type: academic-paper
title_en: "TOFS: ranking which features to transmit by receiver classification loss after the fading channel, 84% vs 68% for an adapted prior selector (PLV)"
title_zh: "TOFS：按信道衰落后的接收端分类损失对待发特征排序，准确率 84%，对比改编的既有选择器（PLV）68%"
url: "https://arxiv.org/abs/2611.09173"
source_quality: full
topics: [semantic-communication, task-oriented-communication, feature-selection, Rayleigh-fading, image-classification]
topic_primary: task-oriented-communication
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

In task-oriented semantic communication only a subset of features is sent, and how useful a feature is depends on which other features are sent and on the distortion the channel adds. TOFS (Task-Oriented Feature Selection) evaluates feature replacements by the receiver's classification loss after transmission. Loss differences that are confirmed under independent transmission samples give pairwise ranking supervision for a selector network, which then predicts feature priorities in one forward pass. Link computed over: a simulated wireless link (Rayleigh fading plus Gaussian noise, zero-forcing receiver); no over-the-air measurement. The paper evaluates on CIFAR-10 image classification.

## Summary (ZH)

任务导向语义通信只发送一部分特征，而特征的价值取决于同时发送的其他特征以及信道引入的失真。TOFS（任务导向特征选择）用传输后接收端的分类损失来评估特征替换；在独立传输样本下得到确认的损失差，构成选择器网络的成对排序监督，训练后的选择器一次前向即可给出特征优先级。所经链路：仿真无线链路（瑞利衰落加高斯噪声、迫零接收），无空口实测。论文在 CIFAR-10 图像分类上评估。

## Key technical points (EN)

- Setting: a fixed number of transmitted features (100 coordinates in the evaluation) and a fixed average transmit power; Rayleigh fading plus noise with a zero-forcing receiver.
- Supervision: feature replacement is judged by receiver loss; only loss differences confirmed under independent transmission samples are used as pairwise ranking labels.
- Selector input includes a descriptor of nominal SNR, selected fraction, channel type and effective-SNR quantiles; it outputs priorities in a single forward pass.
- Headline (abstract): 84% accuracy under Rayleigh fading and Gaussian noise versus 68% for PLV, the authors' adaptation of a prior predicted-loss-variation selector (called state-of-the-art in the abstract).
- Table in the paper: with a clean channel Full, PLV and TOFS keep about 96.8-96.9% accuracy (Random 73.09%); under fading TOFS is 15.68 points above the importance-based baseline (PLV) at the reference SNR, and a matched straight-through-estimator control reaches 73.34% impaired accuracy against 84.17% for TOFS.
- The authors show TOFS selects more small-valued features, which shifts transmit power toward shared coordinates and lowers restoration error (RMSE 1.06 vs 1.80 for PLV), and note that accuracy does not rise monotonically with the number of transmitted features.

## Key technical points (ZH)

- 设置：发送特征数固定（评估中为 100 个坐标），平均发射功率固定；瑞利衰落加噪声，迫零接收。
- 监督：以接收端损失评判特征替换；仅将在独立传输样本下得到确认的损失差作为成对排序标签。
- 选择器输入包含标称信噪比、选择比例、信道类型及有效信噪比分位数描述，一次前向输出优先级。
- 摘要结论：瑞利衰落加高斯噪声下准确率 84%，对比 PLV（作者改编自既有预测损失变化选择器，摘要称其为最先进方法）的 68%。
- 论文表格：干净信道下 Full、PLV 与 TOFS 约 96.8%-96.9%（Random 为 73.09%）；衰落下 TOFS 在参考信噪比处比基于重要性的基线（PLV）高 15.68 个百分点，匹配的直通估计器对照为 73.34%，TOFS 为 84.17%。
- 作者分析指出 TOFS 选择更多小值特征，使发射功率向共有坐标集中并降低恢复误差（RMSE 1.06 对比 PLV 1.80），且精度并不随发送特征数单调上升。

## Why it matters / what's new (EN)

It targets a concrete question in task-oriented semantic communication for remote classification, namely which features deserve the limited channel uses, and ties the answer to post-channel receiver loss rather than to a feature-importance score. The evidence is CIFAR-10 simulation only; the authors say fresh images and further datasets would be needed to assess transfer.

## Why it matters / what's new (ZH)

它回答了任务导向语义通信远程分类中的一个具体问题：有限的信道使用应分配给哪些特征，并将答案与信道后的接收端损失而非特征重要性得分挂钩。证据仅为 CIFAR-10 仿真；作者指出需要新图像和更多数据集来评估迁移性。

## Images

*(No redistributable images for this entry.)*
