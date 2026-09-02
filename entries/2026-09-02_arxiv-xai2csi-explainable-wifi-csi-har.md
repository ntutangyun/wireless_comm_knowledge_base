---
id: 2026-09-02_arxiv-xai2csi-explainable-wifi-csi-har
date_published: 2026-08-31
date_found: 2026-09-02
type: academic-paper
technology: wifi
title_en: "XAI2CSI: Interpreting CSI with eXplainable AI for Human Activity Recognition"
title_zh: "XAI2CSI：面向人体活动识别的可解释 AI 分析 Wi-Fi CSI 框架"
url: "https://arxiv.org/abs/2608.31034"
source_quality: full
topics: [802.11ax, WiFi-sensing, HAR]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
XAI2CSI (Guarino, Nascita, Ciuonzo, Carra, Pescapé) applies SAGE — a model-agnostic, Shapley-value-based global explainability method — to a deep-learning Wi-Fi CSI human activity recognition (HAR) pipeline, in order to diagnose *why* these models fail to generalize across users, environments, and antenna setups rather than just reporting that they fail. The dataset is IEEE 802.11ax CSI collected over two days across three environments (Lab, Office, Hall) with three users performing five activities (empty room, jumping, running, sitting, walking), captured on a 1x4 SIMO link at 5 GHz, 150 Hz sampling, up to 2048 subcarriers. The classifier is a compact 2D-CNN (three convolutional layers, max-pooling, 0.3 dropout, dense head).

Nominal accuracy (train and test drawn from the same context) is 88-98%, but accuracy collapses to a maximum of 65% under cross-user evaluation and as low as 28% under cross-environment evaluation — the generalization gap the paper sets out to explain rather than merely measure. SAGE attribution across three CSI dimensions (spatial/antenna, temporal/packet, spectral/subcarrier) shows the model over-relies on amplitude from specific receive antennas while largely ignoring phase-difference information; amplitude carries more user-specific and environment-specific signature than phase, so this is the leaky shortcut behind the collapse. Successful predictions draw temporal importance from early/central packets that reflect stable motion, and spread spectral importance broadly across subcarriers; failed predictions under distribution shift show *negative* importance assigned to nearly all subcarriers and to previously-informative temporal windows — evidence the model isn't simply "uncertain" out of distribution but has inverted its own feature-importance logic.

## Summary (ZH)
XAI2CSI（Guarino、Nascita、Ciuonzo、Carra、Pescapé）将 SAGE——一种与模型无关、基于 Shapley 值的全局可解释性方法——应用于基于深度学习的 Wi-Fi CSI 人体活动识别（HAR）流程，目的是诊断这些模型在跨用户、跨环境、跨天线配置时*为何*泛化失败，而不只是报告失败本身。数据集为 IEEE 802.11ax CSI，两天内在三种环境（实验室、办公室、大厅）由三名用户执行五种活动（空房间、跳跃、跑步、坐、走）采集，链路为 1x4 SIMO，5 GHz 频段，150 Hz 采样率，最多 2048 子载波。分类器是一个紧凑的 2D-CNN（三层卷积、最大池化、0.3 丢弃率、全连接输出层）。

同分布（训练测试同源）下准确率为 88%-98%，但跨用户评估下准确率最高只有 65%，跨环境评估下最低仅 28%——这正是论文要解释而非仅仅测量的泛化鸿沟。SAGE 在空间（天线）、时间（数据包）、频谱（子载波）三个维度上的归因分析显示：模型过度依赖特定接收天线的幅度信息，而基本忽略相位差信息；幅度携带更多用户和环境特异的"签名"，相位则相对更稳健，这正是导致泛化崩溃的"捷径依赖"。成功预测的时间重要性集中在反映稳定运动的早期/中段数据包，频谱重要性则较均匀地分布在各子载波上；而在分布偏移下失败的预测，几乎对所有子载波和此前有用的时间窗口都赋予*负*重要性——说明模型并非简单的"不确定"，而是彻底颠倒了自身的特征重要性逻辑。

## Key technical points (EN)
- Dataset: IEEE 802.11ax CSI, 1x4 SIMO @ 5 GHz, 150 Hz, up to 2048 subcarriers; 3 users x 3 environments x 5 activities.
- Nominal (same-context) accuracy: 88-98%. Cross-user: up to 65%. Cross-environment: as low as 28%.
- Amplitude-based features are more cross-user robust than expected in isolation but drive the overfitting; phase-difference features hold up better under environmental shift — the two representations trade off differently against the two generalization axes.
- SAGE spatial attribution: over-reliance on two specific receive antennas (Rx1, Rx2) amplitude; cross-user models show unstable antenna-importance hierarchies.
- SAGE temporal/spectral attribution: failing predictions show near-uniform *negative* importance across subcarriers and previously-useful packet windows — a signature of inverted, not merely weak, feature reliance.
- Model: compact 2D-CNN (3 conv layers + pooling + dropout + dense), not a novel architecture — the contribution is the explainability methodology and its diagnostic findings, not the classifier.
- Accepted at WiMob 2026 (22nd IEEE Intl. Conf. on Wireless and Mobile Computing, Networking and Communications).

## Key technical points (ZH)
- 数据集：IEEE 802.11ax CSI，1x4 SIMO，5 GHz，150 Hz，最多 2048 子载波；3 用户 x 3 环境 x 5 活动。
- 同分布准确率 88%-98%；跨用户最高仅 65%；跨环境最低仅 28%。
- 幅度特征单独看似对跨用户更稳健，实则是过拟合的根源；相位差特征在跨环境场景下表现更稳健——两种表示在两个泛化轴上此消彼长。
- SAGE 空间归因：模型过度依赖两根特定接收天线（Rx1、Rx2）的幅度；跨用户模型的天线重要性排序不稳定。
- SAGE 时间/频谱归因：分布偏移下失败样本对几乎所有子载波和此前有用的数据包窗口都给出*负*重要性——这是特征依赖被"颠倒"而非仅仅"减弱"的证据。
- 模型本身是紧凑型 2D-CNN（3 层卷积+池化+丢弃+全连接），并非架构创新——贡献在于可解释性方法本身及其诊断结论。
- 已被 WiMob 2026（第 22 届 IEEE 无线移动计算、网络与通信国际会议）录用。

## Why it matters / what's new (EN)
The KB already has several entries on CSI-HAR generalization symptoms — e.g. 2026-05-25's multi-station CSI-missingness work and 2026-08-17's adversarial-robustness study — but those measure *that* models are fragile. XAI2CSI is the first entry in this bin to open the model up with a rigorous, model-agnostic attribution method and localize the failure to specific antennas, specific subcarrier bands, and specific packet windows, and to show the failure mode is a feature-importance *inversion* rather than mere uncertainty. That is a concretely actionable finding for anyone designing a robust Wi-Fi sensing pipeline: prefer phase-difference features over raw amplitude when cross-environment robustness matters, and treat antenna selection as a generalization lever, not just an SNR lever.

## Why it matters / what's new (ZH)
KB 中已有多篇关于 CSI-HAR 泛化问题"症状"的条目——如 2026-05-25 的多站点 CSI 缺失研究和 2026-08-17 的对抗鲁棒性研究——但它们衡量的是模型*确实*脆弱这一事实。XAI2CSI 是该主题下第一篇用严谨、与模型无关的归因方法"打开"模型内部、并将失败定位到具体天线、具体子载波频段、具体数据包窗口的条目，并且发现失败模式是特征重要性的"颠倒"而非单纯的不确定性。对于设计鲁棒 Wi-Fi 感知系统的工程师而言，这是一条具体可行动的结论：在需要跨环境鲁棒性时应优先使用相位差特征而非原始幅度，天线选择应被当作泛化能力的调节杆，而不仅仅是信噪比的调节杆。
