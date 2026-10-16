---
id: 2026-10-16_arxiv-wifire-concealed-handgun-detection-wifi-csi
date_published: 2026-10-13
date_found: 2026-10-16
technology: wifi
type: academic-paper
title_en: "Concealed Handgun Detection using WiFi Signals"
title_zh: "利用 WiFi 信号检测隐藏手枪"
url: "https://arxiv.org/abs/2610.18736"
source_quality: full
topics: [WiFi-sensing, CSI, object detection, WiFire, WiFireNet, 802.11a]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

The paper (Persson, Gustafsson, Wilkinson, Swedish Defence Research Agency FOI; arXiv 2610.18736, submitted 13 October 2026) proposes detecting a concealed handgun carried by a person from Wi-Fi channel state information. It contributes the WiFi Firearm Detection (WiFire) dataset of aligned CSI and RGB video, and WiFireNet, a deep model that detects objects in CSI using vision-based supervision. Code, dataset and models are released (Hugging Face and GitHub links in the paper). The authors write that they know of no prior work on Wi-Fi-based handgun detection in dynamic multi-person environments.

Data were collected with a modified open-source GNU Radio implementation of IEEE 802.11a at 5.68 GHz and 20 MHz bandwidth, with transmitters on one laptop and receivers on another, CSI in bursts at 80 Hz and a USB camera at 30 Hz. Two configurations were recorded: WiFi-regular (four pilot subcarriers, the remaining 48 interpolated) and WiFi-plus (48 of 52 subcarriers used as pilots, 92.3 percent coverage, intended as an intermediate step toward radar-like known-signal systems). The main setup is a 12 m2 area with 0-4 people, at most one carrying a concealed deactivated metal handgun; a smaller 8 m2 room with 0-2 people was also recorded. Four object classes are used: handgun, plastic handgun, metal water bottle and mobile phone, each paired with a shirt colour that a pretrained keypoint model uses to auto-label bounding boxes. Roughly 100k CSI samples each were collected for WiFi-plus and WiFi-regular and 40k for the small room.

WiFireNet takes the three latest CSI samples (37.5 ms), splits phase and amplitude through separate convolutional encoders, and a convolutional Modality Translation Network turns them into an image-sized representation that feeds a Feature Pyramid Network, a Region Proposal Network, ROIAlign and a detection head; a cross-modal feature distillation loss from a vision model is used in training and only CSI is used at inference. Baseline results at 25% IoU are mAP 39.9 / recall 87.7 (WiFi-plus), 50.3 / 91.5 (WiFi-regular) and 49.8 / 90.0 (small room). The convolutional translation network beat an MLP version at equal parameter count by roughly 6-15 points in the large room. The extra pilot subcarriers of WiFi-plus gave no clear benefit and were slightly worse, which the authors attribute tentatively to the clean recording environment.

## Summary (ZH)

论文（Persson、Gustafsson、Wilkinson，瑞典国防研究局 FOI；arXiv 2610.18736，2026 年 10 月 13 日提交）提出利用 Wi-Fi 信道状态信息检测人员携带的隐藏手枪。贡献包括：对齐的 CSI 与 RGB 视频数据集 WiFi Firearm Detection（WiFire），以及利用视觉监督在 CSI 上做目标检测的深度模型 WiFireNet。代码、数据集和模型已发布（论文给出 Hugging Face 与 GitHub 链接）。作者写道，据其所知此前没有在动态多人环境中基于 Wi-Fi 检测手枪的工作。

数据由经修改的开源 GNU Radio 版 IEEE 802.11a 实现采集，频率 5.68 GHz、带宽 20 MHz，一台笔记本连接发射机，另一台连接接收机，CSI 以 80 Hz 突发采集，USB 摄像头 30 Hz。录制了两种配置：WiFi-regular（4 个导频子载波，其余 48 个插值）和 WiFi-plus（52 个中的 48 个子载波用作导频，覆盖 92.3%，作为向已知信号雷达式系统过渡的中间步骤）。主要场景为 12 m2 区域内 0-4 人、至多 1 人携带隐藏的已停用金属手枪；另录制了 8 m2 小房间 0-2 人。使用四个目标类别：手枪、塑料手枪、金属水瓶和手机，每个类别配一种衬衫颜色，由预训练关键点模型据此自动标注边界框。WiFi-plus 与 WiFi-regular 各约 10 万个 CSI 样本，小房间 4 万个。

WiFireNet 以最近 3 个 CSI 样本（37.5 ms）为输入，相位和幅度分别经卷积编码器，卷积式模态转换网络将其转为图像尺寸的表示，再送入特征金字塔网络、区域提议网络、ROIAlign 与检测头；训练中使用来自视觉模型的跨模态特征蒸馏损失，推理仅使用 CSI。25% IoU 下基线结果为：WiFi-plus mAP 39.9 / 召回 87.7，WiFi-regular 50.3 / 91.5，小房间 49.8 / 90.0。在参数量相同时，卷积转换网络在大房间比 MLP 版本高约 6-15 个点。WiFi-plus 的额外导频子载波没有带来明显收益，反而略差，作者初步归因于采集环境较为干净。

## Key technical points (EN)

- Dataset: WiFire, 0-4 people in 12 m2 (and 0-2 in 8 m2), classes handgun / plastic handgun / metal water bottle / phone, labels auto-generated from shirt colour via a keypoint model, RGB video aligned to CSI.
- Radio: modified GNU Radio 802.11a at 5.68 GHz, 20 MHz, CSI bursts at 80 Hz; WiFi-regular (4 pilots) versus WiFi-plus (48 of 52 pilots).
- Model: phase/amplitude encoders, convolutional modality translation network, FPN + RPN + ROIAlign detection head, cross-modal knowledge-distillation loss (weights 1, 0.5, 0.001 in the total loss); CSI only at inference.
- Results: mAP@25 of 39.9 (WiFi-plus), 50.3 (WiFi-regular), 49.8 (small room); handgun-only AP@25 of 44.2, 72.5 and 40.4 respectively; the distillation loss helped by about 3-4 points (small room) and 8 (WiFi-regular), and not for WiFi-plus.
- Split is by individual CSI sample (50/50 train/test), as in the prior work the paper cites.

## Key technical points (ZH)

- 数据集：WiFire，12 m2 内 0-4 人（8 m2 内 0-2 人），类别为手枪/塑料手枪/金属水瓶/手机，标签通过关键点模型据衬衫颜色自动生成，RGB 视频与 CSI 对齐。
- 无线：改造的 GNU Radio 802.11a，5.68 GHz、20 MHz，CSI 80 Hz 突发采集；WiFi-regular（4 导频）对 WiFi-plus（52 中 48 导频）。
- 模型：相位/幅度编码器、卷积模态转换网络、FPN + RPN + ROIAlign 检测头、跨模态知识蒸馏损失（总损失权重 1、0.5、0.001）；推理仅用 CSI。
- 结果：mAP@25 分别为 39.9（WiFi-plus）、50.3（WiFi-regular）、49.8（小房间）；仅手枪类 AP@25 分别为 44.2、72.5、40.4；蒸馏损失在小房间约提升 3-4 点、WiFi-regular 约 8 点，对 WiFi-plus 无提升。
- 数据按单个 CSI 样本 50/50 划分训练与测试，与论文所引既有工作一致。

## Why it matters / what's new (EN)

Wi-Fi sensing entries in this KB centre on pose, activity and localisation; this paper applies CSI detection to a security-screening object class and releases a dataset for it. Because the split is per CSI sample within the same sessions and environments, as the paper states, the numbers describe in-session performance and are not evidence of cross-environment generalisation. The authors note that the extra pilot subcarriers did not help in their clean setting and flag this for future work. See also 2026-10-16_arxiv-ghostline-six-node-esp32-csi-motion-tracker and 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder.

## Why it matters / what's new (ZH)

本知识库中的 Wi-Fi 感知条目集中于姿态、活动和定位；本文把 CSI 检测用于安检类目标并发布了相应数据集。如论文所述，数据按同一会话、同一环境内的单个 CSI 样本划分，因此这些数字反映的是会话内性能，并不证明跨环境泛化。作者指出额外导频子载波在其干净环境中未带来收益，并留待后续研究。另见 2026-10-16_arxiv-ghostline-six-node-esp32-csi-motion-tracker 与 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder。
