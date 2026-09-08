---
id: 2026-09-08_arxiv-qmet-quantum-wifi-har-training
date_published: 2026-09-02
date_found: 2026-09-08
technology: wifi
type: academic-paper
title_en: "Quantum-Assisted Memory-Efficient Training for Parameter-Intensive Wi-Fi-Based Human Activity Recognition"
title_zh: "面向参数密集型 Wi-Fi 人体活动识别的量子辅助内存高效训练方法"
url: "https://arxiv.org/abs/2609.04271"
source_quality: full
topics: [WiFi-sensing, CSI, human-activity-recognition, quantum-machine-learning, model-pruning]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)

To Truong An, Jie Zhang, Guolin Yin and Simon L. Cotton (Centre for Wireless Innovation, Queen's University Belfast), Junqing Zhang (University of Liverpool), Yanjiao Li (University of Science and Technology Beijing) and Trung Q. Duong (Memorial University / Queen's University Belfast) target a gap in commodity Wi-Fi CSI-based human activity recognition (HAR): prior compression work optimises the *inference*-time model, but training a parameter-intensive HAR network still requires storing full-precision weights, gradients, optimiser state and activations, which the paper describes as "substantially greater than the memory required during inference." Their proposed method, Q-MET (Quantum-assisted MEmory-efficient Training), instead reduces the memory footprint of the training process itself by never directly optimising the full set of classical model weights.

Q-MET's core component is a Quantum Parameter Generator (QPG): a parameterised quantum circuit (PQC) built from U3/CU3 gates over N_q qubits produces a measured probability vector, which is passed through a sinusoidal embedding layer and then a small classical mapping network that synthesises the full set of weights for a classical ResNet-18 backbone. Rather than backpropagating through ~11.6M ResNet-18 parameters directly, gradients flow through a much smaller trainable set — the paper's own formula puts it at 6/2^N_q of the classical parameter count (≈9.4% at 6 qubits) — which then regenerates the full weight set on each step. The paper reports that the parameter-efficiency gain grows with qubit count — roughly 90.6% at 6 qubits and 95.3% at 7 qubits, per its own formula ΔC(%) ≈ (1 − 6/2^{N_q}) × 100. Q-MET further integrates Layer-Adaptive Magnitude-based Pruning (LAMP) directly into training in three stages (warm-up training, structured channel pruning by LAMP importance score, then continued QPG-based training on only the surviving channels), rather than training a full model first and pruning afterward.

The method is evaluated on two public Wi-Fi CSI HAR benchmarks collected with Intel 5300 NICs: UT-HAR (7 activity classes) and Widar3.0 (22 gesture classes), on a workstation with an RTX 4090 GPU. Reported results: at a 0.7 pruning ratio, Q-MET reaches 98.84% accuracy on UT-HAR (vs. 98.08% for a standard ResNet-18 trained by backpropagation) and 66.72% on Widar3.0 (vs. 71.29% for the baseline), while cutting reported training-time memory (parameters + gradients + optimiser state in FP32) from about 177 MB to about 8.4 MB on UT-HAR and from about 171 MB to about 17 MB on Widar3.0 — the authors state that "the activation and buffer memory, which is determined by the network forward pass and batch size, is orthogonal to and not the target of the proposed framework", so the activation term named in the paper's motivation is excluded from these figures — at the cost of roughly 18–36% more wall-clock time per training epoch. The paper also reports that pruning a fully-trained baseline model after the fact ("train-then-prune") without further fine-tuning collapses to 9.60% accuracy on UT-HAR at the same 0.7 pruning ratio, versus Q-MET's 98.84%, which the authors present as evidence that integrating pruning into the Q-MET training loop, rather than applying it afterward, is what preserves accuracy.

## Summary (ZH)

To Truong An、Jie Zhang、Guolin Yin 和 Simon L. Cotton（贝尔法斯特女王大学无线创新中心）、Junqing Zhang（利物浦大学）、Yanjiao Li（北京科技大学）以及 Trung Q. Duong（纽芬兰纪念大学 / 贝尔法斯特女王大学）针对商用 Wi-Fi CSI 人体活动识别（HAR）中的一个缺口展开研究：以往的压缩工作大多针对*推理*阶段的模型进行优化，而训练一个参数密集型的 HAR 网络仍需存储全精度权重、梯度、优化器状态与中间激活值，论文指出这部分内存需求"远大于推理阶段所需的内存"。他们提出的 Q-MET（量子辅助内存高效训练）方法不直接优化全部经典模型权重，从而降低训练过程本身的内存占用。

Q-MET 的核心组件是量子参数生成器（QPG）：由 U3/CU3 门构成、作用于 N_q 个量子比特的参数化量子电路（PQC）产生一个测量概率向量，经正弦嵌入层处理后，再由一个小型经典映射网络合成经典 ResNet-18 骨干网络的全部权重。梯度不再直接反向传播经过 ResNet-18 约 1160 万个参数，而是流经一个规模小得多的可训练参数集——按论文公式，其参数量为经典参数量的 6/2^N_q（6 量子比特时约 9.4%）——该参数集在每一步重新生成完整权重集合。论文给出的参数效率增益随量子比特数增加而提升——按其公式 ΔC(%) ≈ (1 − 6/2^{N_q}) × 100 计算，6 量子比特约为 90.6%，7 量子比特约为 95.3%。Q-MET 还将逐层自适应幅值剪枝（LAMP）直接嵌入训练过程，分三阶段进行（预热训练、按 LAMP 重要性分数进行结构化通道剪枝、随后仅在保留通道上继续基于 QPG 的训练），而非先训练完整模型再事后剪枝。

该方法在两个基于 Intel 5300 网卡采集的公开 Wi-Fi CSI HAR 基准数据集上评估：UT-HAR（7 类活动）与 Widar3.0（22 类手势），实验平台配备 RTX 4090 GPU。报告结果显示：在剪枝比例为 0.7 时，Q-MET 在 UT-HAR 上达到 98.84% 的准确率（标准反向传播训练的 ResNet-18 基线为 98.08%），在 Widar3.0 上为 66.72%（基线为 71.29%）；同时将训练期内存占用（FP32 下的参数+梯度+优化器状态）从约 177 MB 降至约 8.4 MB（UT-HAR）、从约 171 MB 降至约 17 MB（Widar3.0）——作者说明"激活值与缓冲区内存由网络前向传播和批大小决定，与本框架正交，不是本框架的目标"，因此论文动机中提到的激活值内存并不计入上述数字——代价是每训练轮次的实际耗时增加约 18%–36%。论文还报告称，在同样 0.7 剪枝比例下，对一个已训练完成的基线模型事后剪枝（"先训练后剪枝"）且不做进一步微调时，UT-HAR 上准确率骤降至 9.60%，而 Q-MET 为 98.84%；作者将其作为证据，说明将剪枝直接整合进 Q-MET 的训练循环、而非事后施加，是保持准确率的关键。

## Key technical points (EN)

- Quantum Parameter Generator (QPG): PQC (U3/CU3 gates, N_q qubits) → sinusoidal embedding of the measured probability vector → small classical mapping network → generates the full ResNet-18 weight set; gradients backpropagate through the whole QPG pipeline rather than through the classical model's own parameters directly.
- Parameter-efficiency formula ΔC(%) ≈ (1 − 6/2^{N_q}) × 100: ~62.5% at 4 qubits, ~90.6% at 6 qubits, ~95.3% at 7 qubits.
- LAMP-based structured pruning is integrated into the training loop in three stages (warm-up → structured pruning by LAMP importance score → continued QPG training on surviving channels), not applied after training completes.
- Datasets: UT-HAR (7-class, Intel 5300 CSI, 3,977 train / 996 test) and Widar3.0 (22-class gesture, 34,926 train / 8,726 test).
- At pruning ratio 0.7: 98.84% accuracy / ~95% training memory reduction on UT-HAR; 66.72% accuracy / ~90% training memory reduction on Widar3.0.
- Train-then-prune baseline (no fine-tuning) collapses to 9.60% accuracy on UT-HAR at the same pruning ratio, versus Q-MET's 98.84%.
- Reported training-time overhead: roughly 18–36% more wall-clock time per epoch versus standard backpropagation training, with no added cost at inference.

## Key technical points (ZH)

- 量子参数生成器（QPG）：PQC（U3/CU3 门，N_q 量子比特）→ 对测量概率向量做正弦嵌入 → 小型经典映射网络 → 生成完整的 ResNet-18 权重集合；梯度经由整条 QPG 流水线反向传播，而非直接作用于经典模型自身参数。
- 参数效率公式 ΔC(%) ≈ (1 − 6/2^{N_q}) × 100：4 量子比特约 62.5%，6 量子比特约 90.6%，7 量子比特约 95.3%。
- 基于 LAMP 的结构化剪枝被整合进训练循环的三个阶段（预热 → 按 LAMP 重要性分数结构化剪枝 → 在保留通道上继续 QPG 训练），而非在训练完成后再施加。
- 数据集：UT-HAR（7 类，Intel 5300 CSI，训练集 3,977 / 测试集 996）与 Widar3.0（22 类手势，训练集 34,926 / 测试集 8,726）。
- 剪枝比例为 0.7 时：UT-HAR 上准确率 98.84%、训练内存降低约 95%；Widar3.0 上准确率 66.72%、训练内存降低约 90%。
- 在相同剪枝比例下，"先训练后剪枝"（不做微调）的基线在 UT-HAR 上准确率骤降至 9.60%，而 Q-MET 为 98.84%。
- 报告的训练开销：相较标准反向传播训练，每轮训练实际耗时增加约 18%–36%，推理阶段无额外开销。

## Why it matters / what's new (EN)

The KB's existing Wi-Fi CSI / HAR entries (e.g. `2026-08-29_arxiv-zero-fi-signal-language-zero-shot-har`) address recognition accuracy and generalisation; this paper instead targets the *training-time* memory cost of running a parameter-intensive CSI HAR model, which the authors frame as a barrier to on-device or edge-based training. The quantum parameter generator itself is not new: it is the published Quantum-Train framework (Liu et al., arXiv 2405.11304 and 2402.16465), which the paper cites and which has already been applied to reinforcement learning (QTRL, arXiv 2407.06103), LSTMs and federated learning (arXiv 2409.02763); LAMP is likewise an off-the-shelf pruner (ICLR 2021). Q-MET's contribution is the Wi-Fi-sensing instance of that framework plus the in-loop structured-pruning schedule — which is why this entry is scored 2 rather than higher. It is nonetheless the first quantum-machine-learning entry filed under this KB's sensing-csi bin (the KB's other quantum entries are all satellite- or O-RAN-security-scoped, e.g. `2026-08-21_arxiv-quasar-quantum-sar-satellite-authentication`, `2026-09-01_arxiv-quantum-security-oran-6g`). The quantum circuit itself does not process CSI data; per the paper it functions purely as a weight generator for the classical backbone.

## Why it matters / what's new (ZH)

本知识库现有的 Wi-Fi CSI / HAR 相关条目（如 `2026-08-29_arxiv-zero-fi-signal-language-zero-shot-har`）关注的是识别准确率与泛化能力；而本文关注的是运行参数密集型 CSI HAR 模型时*训练阶段*的内存开销，作者将其视为端侧或边缘侧训练的一个障碍。量子参数生成器本身并非新方法：它就是已发表的 Quantum-Train 框架（Liu 等，arXiv 2405.11304 与 2402.16465），论文本身亦引用了该工作，且该框架此前已被应用于强化学习（QTRL，arXiv 2407.06103）、LSTM 与联邦学习（arXiv 2409.02763）；LAMP 同样是现成的剪枝方法（ICLR 2021）。Q-MET 的贡献在于把该框架用于 Wi-Fi 感知模型，并加入训练环路内的结构化剪枝流程——因此本条目新颖度评为 2 而非更高。不过，这仍是本知识库 sensing-csi 分类下首次收录的量子机器学习条目（本库此前的量子相关条目均属卫星或 O-RAN 安全范畴，如 `2026-08-21_arxiv-quasar-quantum-sar-satellite-authentication`、`2026-09-01_arxiv-quantum-security-oran-6g`）。根据论文所述，量子电路本身并不处理 CSI 数据，其作用纯粹是为经典骨干网络生成权重。
