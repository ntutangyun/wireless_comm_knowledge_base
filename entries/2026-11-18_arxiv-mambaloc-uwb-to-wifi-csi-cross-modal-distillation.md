---
id: 2026-11-18_arxiv-mambaloc-uwb-to-wifi-csi-cross-modal-distillation
date_published: 2026-11-07
date_found: 2026-11-18
type: academic-paper
technology: uwb
title_en: "MambaLoc: Lightweight Indoor Localization Using Cross-Modal Knowledge Distillation (UWB teacher, Wi-Fi CSI student)"
title_zh: "MambaLoc：基于跨模态知识蒸馏的轻量级室内定位（UWB 教师模型、Wi-Fi CSI 学生模型）"
url: "https://arxiv.org/abs/2611.10360"
source_quality: full
topics: [UWB, Wi-Fi-CSI, Mamba, knowledge-distillation, indoor-positioning, CIR, OPERAnet]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Mohab Bahnassy, Omar Saqr, Hamada Rizk and Moustafa Youssef posted "MambaLoc: Lightweight Indoor Localization Using Cross-Modal Knowledge Distillation" to arxiv (cs.AI, cross-listed cs.NI) on 7 November 2026. The arxiv page lists the work as published in the Proceedings of the 27th IEEE International Conference on Mobile Data Management (MDM) 2026, pp. 177-183. The paper starts from a trade-off in edge indoor localization: Wi-Fi channel state information (CSI) is cheap to deploy but distorted by multipath, Transformer models cope with that distortion but scale quadratically in compute, and UWB is geometrically precise but needs dedicated hardware.

Method. The authors train a teacher on UWB channel impulse response (CIR) data (an encoder-only Transformer, 6 layers, 8 heads, 256 dimensions) and a student on Wi-Fi CSI (a linear-time Mamba selective state-space model, 3x3 MIMO over 30 subcarriers, amplitude and phase concatenated into 540 features). A Feature Alignment Module projects teacher and student features into a shared space (MSE, cosine and cross-attention losses), and both models end in a 16-component Gaussian-mixture regression head so that several plausible locations caused by multipath are modelled instead of averaged. Training has three stages: teacher pre-training, aligner warm-up, then student distillation with a temperature schedule (30 to 10) and adaptive loss weighting. UWB is used only in training; inference is CSI-only.

Evaluation. The experiments use OPERAnet, which the paper describes as the only public dataset with synchronized UWB and CSI under shared ground truth: two indoor rooms (5.09 x 10.02 m and 7.20 x 7.24 m), about 8 hours of data, six daily activities, metric = median absolute Euclidean error. MambaLoc reports a 0.230 m median error versus DeepFi 0.318 m, AARES-CNN 0.240 m and TIPS 0.238 m. In the ablation, a standalone CSI-Mamba reaches 0.2957 m, same-modality distillation 0.2757 m, CSI-Transformer to CSI-Mamba distillation 0.2466 m, and the full UWB-to-CSI cross-architecture distillation 0.2300 m (the stated 22.2% gain over the standalone Mamba checks out). On a single GTX 1650 GPU at batch size 1, MambaLoc needs 0.39 GFLOPs, 6.94 ms and 257k parameters versus TIPS at 1.12 GFLOPs, 16.55 ms and 447k parameters (65.1% fewer FLOPs, 58% lower latency, 42.5% fewer parameters).

## Summary (ZH)

Mohab Bahnassy、Omar Saqr、Hamada Rizk 与 Moustafa Youssef 于2026年11月7日在 arxiv（cs.AI，交叉列入 cs.NI）发布《MambaLoc：基于跨模态知识蒸馏的轻量级室内定位》。arxiv 页面注明该工作已发表于第27届 IEEE 移动数据管理国际会议（MDM）2026 论文集，第177-183页。论文的出发点是边缘室内定位中的权衡：Wi-Fi 信道状态信息（CSI）部署成本低但受多径畸变影响；Transformer 能处理这种畸变但计算量随长度二次增长；UWB 几何精度高但需要专用硬件。

方法：作者用 UWB 信道冲激响应（CIR）训练教师模型（仅编码器 Transformer，6层、8头、256维），用 Wi-Fi CSI 训练学生模型（线性复杂度的 Mamba 选择性状态空间模型，3x3 MIMO、30个子载波，幅度与相位拼接为540维特征）。特征对齐模块（Feature Alignment Module）通过 MSE、余弦与交叉注意力损失把教师与学生特征投影到共享空间；两者均以16分量高斯混合回归头输出，以建模多径造成的多个可能位置而非取平均。训练分三阶段：教师预训练、对齐器预热、学生蒸馏（温度由30降至10，自适应损失权重）。UWB 仅用于训练，推理阶段只用 CSI。

评测：实验使用 OPERAnet——论文称其为唯一带有同步 UWB 与 CSI 且共享真值的公开数据集：两个室内房间（5.09x10.02 m 与 7.20x7.24 m），约8小时数据，六种日常活动，指标为中位绝对欧氏误差。MambaLoc 的中位误差为0.230 m，对比 DeepFi 0.318 m、AARES-CNN 0.240 m、TIPS 0.238 m。消融实验中，独立 CSI-Mamba 为0.2957 m，同模态蒸馏0.2757 m，CSI-Transformer 到 CSI-Mamba 蒸馏0.2466 m，完整的 UWB 到 CSI 跨架构蒸馏0.2300 m（所述相对独立 Mamba 提升22.2%与数据吻合）。在单块 GTX 1650 GPU、批大小1的条件下，MambaLoc 需要0.39 GFLOPs、6.94 ms、257k 参数，而 TIPS 为1.12 GFLOPs、16.55 ms、447k 参数（FLOPs 少65.1%，时延低58%，参数少42.5%）。

## Key technical points (EN)

- Problem: accurate, low-cost indoor localization at the edge; Wi-Fi CSI is cheap but multipath-distorted, UWB is precise but needs dedicated anchors, Transformers are costly.
- Teacher: UWB-CIR Transformer (6 layers, 8 heads, 256-d) with GMM regression head. Student: Wi-Fi CSI Mamba (3x3 MIMO, 30 subcarriers, 540 features).
- Feature Alignment Module with MSE + cosine + cross-attention losses; 16-component GMM head, distillation matches mixture weights via KL divergence. The paper reports that a deterministic head made the student underperform the baseline.
- Three-stage training with temperature schedule 30 to 10 and adaptive loss weighting. UWB is needed only at training time.
- Data: OPERAnet, two rooms, ~8 h, six activities; median error 0.230 m (DeepFi 0.318, AARES-CNN 0.240, TIPS 0.238).
- Cost (GTX 1650, batch 1): 0.39 GFLOPs / 6.94 ms / 257k params versus TIPS 1.12 GFLOPs / 16.55 ms / 447k.
- Limitations (the paper states only cross-building generalization as future work; the rest are reviewer observations): one dataset with two rooms; cross-building generalization left to future work; timing on a GTX 1650, which the paper calls representative of mid-range edge hardware; 2D only; the margin over TIPS is small (0.230 vs 0.238 m); no code or data repository is given.

## Key technical points (ZH)

- 问题：边缘侧精确且低成本的室内定位；Wi-Fi CSI 便宜但受多径畸变，UWB 精确但需专用锚点，Transformer 代价高。
- 教师：UWB CIR Transformer（6层、8头、256维）加 GMM 回归头；学生：Wi-Fi CSI Mamba（3x3 MIMO、30子载波、540维特征）。
- 特征对齐模块使用 MSE、余弦与交叉注意力损失；16分量 GMM 头，蒸馏通过 KL 散度匹配混合权重；论文报告确定性回归头会使学生模型不及基线。
- 三阶段训练，温度从30降到10，自适应损失权重；UWB 仅在训练阶段需要。
- 数据：OPERAnet，两个房间、约8小时、六种活动；中位误差0.230 m（DeepFi 0.318、AARES-CNN 0.240、TIPS 0.238）。
- 代价（GTX 1650、批大小1）：0.39 GFLOPs／6.94 ms／257k 参数，TIPS 为1.12 GFLOPs／16.55 ms／447k。
- 局限（论文仅将跨建筑泛化列为未来工作；其余为审阅者观察）：仅一个含两个房间的数据集；跨楼宇泛化留待后续；计时在 GTX 1650 上完成，论文称其代表中端边缘硬件；仅二维；相对 TIPS 的优势较小（0.230 对 0.238 m）；未给出代码或数据仓库。

## Why it matters / what's new (EN)

UWB serves only as a training-time teacher; the deployed model uses Wi-Fi CSI alone. The paper's own ablation is the evidence offered for the idea, with the cross-modal UWB teacher beating same-modality and CSI-Transformer teachers (0.2300 m vs 0.2757 m and 0.2466 m). Caveats are those the evaluation implies: a single two-room dataset, a 0.008 m median margin over the best listed baseline (TIPS), and timing measured on a GTX 1650, which the paper calls representative of mid-range edge hardware. Treat the numbers as the authors' reported results on OPERAnet. For related work in the KB, see 2026-10-12 LocAttMamba (one Mamba architecture applied separately to 5G and UWB CIR data) and the 2026-09-23 HYMN benchmark on fused UWB+BLE+Wi-Fi-FTM data.

## Why it matters / what's new (ZH)

UWB 仅作为训练阶段的教师；部署模型只使用 Wi-Fi CSI。论文自带的消融实验是该思路的证据：跨模态 UWB 教师优于同模态与 CSI-Transformer 教师（0.2300 m 对 0.2757 m 与 0.2466 m）。需注意评测本身带来的限制：单一的两房间数据集、相对最佳列出基线（TIPS）仅0.008 m 的中位误差优势，以及计时在 GTX 1650 上测得（论文称其代表中端边缘硬件）。数字均为作者在 OPERAnet 上报告的结果。相关工作可参见知识库中的 2026-10-12 LocAttMamba（同一 Mamba 架构分别用于5G与UWB CIR数据）与 2026-09-23 HYMN（融合 UWB+BLE+Wi-Fi-FTM 数据上的基准）。

## Images

![MambaLoc comparison with state-of-the-art | MambaLoc 与现有方法对比](https://arxiv.org/html/2611.10360v1/fig_sota_comparison.png)
