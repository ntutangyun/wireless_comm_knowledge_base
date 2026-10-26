---
id: 2026-10-26_arxiv-wisper-pose-supervised-residual-flow-multi-person-3d-pose-wifi-csi
date_published: 2026-10-04
date_found: 2026-10-26
technology: wifi
type: academic-paper
title_en: "WiSPER: Pose-Supervised Predictive and Residual Flow Refinement For Multi-Person 3D Pose Estimation With WiFi CSI"
title_zh: "WiSPER：面向 WiFi CSI 多人 3D 姿态估计的姿态监督预测预训练与残差流精修"
url: "https://arxiv.org/abs/2610.07025"
source_quality: full
topics: [Wi-Fi sensing, CSI, pose estimation, masked embedding, flow matching, Person-in-WiFi 3D]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Gabriel Lee Jun Rong, Shanhong Liu, Pai Chet Ng, Konstantinos N. Plataniotis, Jamal Seyedmohammadi and S. Mohammad Sheikholeslami propose WiSPER, a two-stage framework for multi-person 3D pose estimation from WiFi channel state information (submitted 4 October 2026). The paper starts from WiFi-JEPA, which pretrains a CSI encoder by masked latent prediction without pose annotations, and asks what happens when paired CSI and pose annotations are available during pretraining and when the decoder's remaining coordinate errors are modelled explicitly.

Stage 1, Pose-Aware Masked Embedding Learning (PAMEL), keeps WiFi-JEPA's masking of entire links across time (five of nine links) and adds an auxiliary head that predicts a set of pose slots from the same visible CSI context, trained with a one-to-one assignment between annotations and slots, focal loss and coordinate loss; the weight between the latent and pose objectives is updated every 50 steps. Stage 2, Residual Flow refinement with Transformer (ReFT), transfers the encoder to a hierarchical pose Transformer that outputs coarse pose candidates with per-joint features and presence logits for a fixed number of slots, so the number of people need not be an input; a conditional residual flow, parameterised as an endpoint network with attention across joint tokens and following the linear-path flow-matching formulation, then corrects each candidate. At inference, residuals from sampled Gaussian initialisations are integrated with Euler steps and averaged; training uses paired CSI and poses, inference needs CSI only.

The evaluation uses Person-in-WiFi 3D (PiW3D): 14-joint annotations, seven volunteers, eight actions, three indoor environments, 89,946 training and 7,824 test frames (2,586 single-person, 3,184 two-person, 2,054 three-person). Mean per-joint position error (MPJPE) is 63.72 mm overall for WiSPER against 106.28 mm for WiFi-JEPA (the paper reports this as a 40.0% reduction), 49.42 / 63.76 / 81.65 mm for one, two and three people, and 49.42 mm with PCK@0.2 of 89.07% on single-person frames against 81.20 mm and 74.26% for WiFi-JEPA. Enabling the residual refiner lowers overall MPJPE by 13.8-15.6% across three pretraining configurations. The paper itself notes limits: training and test frames come from different temporal portions of shared recordings, so generalisation to unseen participants or environments is not established; results are single runs without seed variation; and the PAMEL-versus-pose-only comparison (63.72 versus 65.15 mm) also differs in loss weighting, so it does not isolate the masked latent prediction.

## Summary (ZH)

Gabriel Lee Jun Rong、Shanhong Liu、Pai Chet Ng、Konstantinos N. Plataniotis、Jamal Seyedmohammadi 与 S. Mohammad Sheikholeslami 提出 WiSPER，一个基于 WiFi 信道状态信息的多人 3D 姿态估计两阶段框架（2026 年 10 月 4 日提交）。论文以 WiFi-JEPA 为起点——它通过掩码潜变量预测、在没有姿态标注的情况下预训练 CSI 编码器——并探讨：当预训练阶段已有成对的 CSI 与姿态标注，且显式建模解码器剩余的坐标误差时，效果如何。

第一阶段 Pose-Aware Masked Embedding Learning（PAMEL）沿用 WiFi-JEPA 跨时间整条链路的掩码（9 条链路中掩码 5 条），并增加一个辅助头，在同一可见 CSI 上下文上预测一组姿态槽位，训练时对标注与槽位做一对一匹配，使用 focal 损失与坐标损失；潜变量目标与姿态目标之间的权重每 50 步更新一次。第二阶段 Residual Flow refinement with Transformer（ReFT）将编码器迁移到层次化姿态 Transformer，后者针对固定数量的槽位输出粗略姿态候选、逐关节特征和存在性 logit，因此人数不必作为输入；随后一个条件残差流（以端点网络参数化、带跨关节 token 的注意力，并采用线性路径的流匹配形式）对每个候选进行修正。推理时，对多个高斯初始化采样得到的残差用欧拉步积分并取平均；训练使用成对的 CSI 与姿态，推理只需 CSI。

评测使用 Person-in-WiFi 3D（PiW3D）：14 关节标注、7 名志愿者、8 种动作、3 个室内环境，训练 89,946 帧、测试 7,824 帧（单人 2,586、双人 3,184、三人 2,054）。WiSPER 的平均每关节位置误差（MPJPE）总体为 63.72 mm，WiFi-JEPA 为 106.28 mm（论文称降低 40.0%）；一、二、三人分别为 49.42 / 63.76 / 81.65 mm；单人帧上 WiSPER 为 49.42 mm、PCK@0.2 为 89.07%，WiFi-JEPA 为 81.20 mm、74.26%。启用残差精修器后，在三种预训练配置下总体 MPJPE 降低 13.8-15.6%。论文自述的局限包括：训练与测试帧来自共享录制的不同时间段，因此未证明对未见参与者或环境的泛化；结果为单次运行，未评估随机种子差异；PAMEL 与仅姿态预训练的比较（63.72 对 65.15 mm）同时存在损失加权的差异，因此无法单独说明掩码潜变量预测的贡献。

## Key technical points (EN)

- PAMEL: JEPA-style masked latent prediction plus auxiliary pose-set supervision on the same visible CSI context; encoder 12 layers, dimension 512.
- ReFT: hierarchical pose Transformer proposals refined by a conditional residual flow; flow sampling configurations compared (8 trajectories, 5 Euler steps gives 63.72 mm; 32 trajectories gives 63.33 mm).
- PiW3D results: overall MPJPE 63.72 mm (WiFi-JEPA 106.28 mm); single-person PA-MPJPE 35.68 mm; DT-Pose 91.86 mm and a local GraphPose-Fi adaptation 622.38 mm on single-person frames (trained for single-person only).
- Stated limits: same-recording train/test split, single seed, loss-weighting confound in the PAMEL ablation.

## Key technical points (ZH)

- PAMEL：在同一可见 CSI 上下文上结合 JEPA 式掩码潜变量预测与辅助姿态集监督；编码器 12 层、维度 512。
- ReFT：层次化姿态 Transformer 的候选由条件残差流精修；比较了不同流采样配置（8 条轨迹、5 个欧拉步得 63.72 mm；32 条轨迹得 63.33 mm）。
- PiW3D 结果：总体 MPJPE 63.72 mm（WiFi-JEPA 106.28 mm）；单人 PA-MPJPE 35.68 mm；单人帧上 DT-Pose 为 91.86 mm、本地适配的 GraphPose-Fi 为 622.38 mm（二者仅针对单人训练）。
- 自述局限：同一录制的训练/测试划分、单一随机种子、PAMEL 消融中的损失加权混杂。

## Why it matters / what's new (EN)

The entry adds a pose-estimation result on PiW3D to the KB's CSI-sensing coverage, which already includes CSI representation work such as [2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder](2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder.md) and [2026-10-23_arxiv-trajectory-guided-tokenization-complex-csi-wifi-sensing](2026-10-23_arxiv-trajectory-guided-tokenization-complex-csi-wifi-sensing.md). The numbers are for one dataset with a same-recording split, as the paper states.

## Why it matters / what's new (ZH)

该条目为本知识库的 CSI 感知内容增加了一项 PiW3D 上的姿态估计结果，已有内容中包括 CSI 表示方面的工作，例如 [2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder](2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder.md) 和 [2026-10-23_arxiv-trajectory-guided-tokenization-complex-csi-wifi-sensing](2026-10-23_arxiv-trajectory-guided-tokenization-complex-csi-wifi-sensing.md)。如论文所述，这些数据仅来自一个数据集，且采用同一录制的划分。

## Images

![WiSPER two-stage framework: PAMEL pretraining and ReFT residual flow refinement | WiSPER 两阶段框架：PAMEL 预训练与 ReFT 残差流精修](https://arxiv.org/html/2610.07025v1/figures/WiSPER-v2.png)
