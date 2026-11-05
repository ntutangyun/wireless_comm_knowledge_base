---
id: 2026-11-05_arxiv-rfshape-iq-pretrained-wireless-foundation-model-uwb-cir
date_published: 2026-11-02
date_found: 2026-11-05
technology: uwb
type: academic-paper
title_en: "RFShape: an IQ-pretrained wireless foundation model that transfers to UWB channel-impulse-response tasks (NLOS classification, ranging-error correction, TDoA positioning)"
title_zh: "RFShape：仅用 IQ 预训练的无线基础模型，可迁移到 UWB 信道冲激响应任务（NLOS 分类、测距误差修正、TDoA 定位）"
url: "https://arxiv.org/abs/2611.03947"
source_quality: full
topics: [wireless foundation model, IQ samples, channel impulse response, CIR, DW1000, NLOS classification, ranging-error correction, TDoA positioning, LoRA, representation operators]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar]
novelty_score: 3
---

## Summary (EN)

Mohammad Cheraghinia, Sebbe Van Der Smissen, Jaron Fontaine, Delia Rico, Eli De Poorter and Adnan Shahid (IDLab, Ghent University - imec; EDGX; Universidad de Malaga) present RFShape (arXiv 2611.03947, submitted 2 November 2026, eess.SP), a 7.4 M-parameter wireless foundation model. The paper's starting point is that choosing a foundation model also fixes its input representation: a model pretrained on spectrograms expects spectrograms, one pretrained on IQ samples expects IQ. RFShape instead keeps one frozen encoder and changes how a signal is presented to it, using deterministic, parameter-free "representation operators" (for example turning IQ into a spectrum, an envelope or an autocorrelation).

The encoder is pretrained only on synthetic IQ generated in MATLAB: NB-IoT uplink, 5G NTN uplink and 5G terrestrial downlink waveforms passed through 3GPP NTN tapped-delay-line channels for a LEO satellite at 700 km, giving 97,200 scenarios. No real captures, labels or channel impulse responses (CIRs) are used in pretraining. It is then evaluated on ten tasks across nine datasets unseen during pretraining, covering classification, ranging-error regression and 2-D positioning. Three of the tasks use UWB CIRs: TDoA positioning, ranging-error correction and (N)LOS classification.

For UWB the reported results are as follows. On TDoA positioning (300-sample CIRs from the anchors that heard each transmission, trained on one trajectory and tested on an unseen one, following a published transformer-based TDoA-correction baseline), RFShape with rank-16 LoRA adapters (0.49 M adapter parameters) reaches 1.24 m mean absolute error against 1.48 m for the deployed uncorrected TDoA baseline (15.9 percent lower), with a better error tail, but the TDoA baseline has the better median (0.59 m against 1.01 m). On ranging-error correction with 150-sample DW1000 CIRs (n = 11,418), a frozen probe with a 1,153-parameter linear head removes 39.0 percent of the mean error, from 326 mm to 199 mm, and cuts the 90th-percentile error from 598 mm to 392 mm; per-environment reductions range from 22 to 66 percent, and the paper reports that it beats the compared published corrections in every environment they report except the office, where it trails one of them (66 percent against 73 percent). The paper notes the three works do not share a common uncorrected error level, so comparisons are relative. On (N)LOS classification with a frozen linear model, accuracy is 93.7 percent in the hallway, 93.7 percent on the hallway1st environment and 96.9 percent in the lab, up to 12.7 percentage points above the strongest CIR-pretrained baseline, while those baselines are slightly better in the environments they were pretrained on (office and iiot).

Outside UWB, the paper reports that choosing the representation alone, with the encoder frozen, raises 23-class radar recognition from 23.0 to 69.5 percent and short-range wireless technology recognition from 70.8 to 97.1 percent. For deployment it gives 7.40 M encoder parameters (29.6 MB at FP32), a parameter-free operator costing 0.16 to 0.21 ms on CPU, and per-task heads of roughly 1 to 3 thousand parameters, so one encoder can serve several receiver-side functions.

## Summary (ZH)

Mohammad Cheraghinia、Sebbe Van Der Smissen、Jaron Fontaine、Delia Rico、Eli De Poorter 与 Adnan Shahid（根特大学 - imec IDLab；EDGX；马拉加大学）提出 RFShape（arXiv 2611.03947，2026 年 11 月 2 日提交，eess.SP），一个 7.4 M 参数的无线基础模型。论文的出发点是：选择基础模型同时也决定了输入表示——在频谱图上预训练的模型只接受频谱图，在 IQ 采样上预训练的模型只接受 IQ。RFShape 则保持单一冻结的编码器，通过确定性、无参数的“表示算子”（例如把 IQ 变成频谱、包络或自相关）改变信号呈现给编码器的方式。

编码器仅在 MATLAB 生成的合成 IQ 上预训练：NB-IoT 上行、5G NTN 上行和 5G 地面下行波形，经 700 km 高度 LEO 卫星的 3GPP NTN 抽头延迟线信道，共 97,200 个场景。预训练不使用真实采集数据、标签或信道冲激响应（CIR）。随后在预训练中未见过的 9 个数据集上完成 10 项任务的评估，涵盖分类、测距误差回归和二维定位。其中三项任务使用 UWB CIR：TDoA 定位、测距误差修正和 (N)LOS 分类。

UWB 方面的报告结果如下。TDoA 定位（取接收到该次发射的各锚点的 300 采样 CIR，在一条轨迹上训练、在未见过的轨迹上测试，沿用已发表的基于 Transformer 的 TDoA 修正基线），RFShape 配合 rank-16 LoRA 适配器（0.49 M 适配器参数）达到 1.24 m 平均绝对误差，而已部署的未修正 TDoA 基线为 1.48 m（低 15.9%），误差尾部更好，但 TDoA 基线的中位数更优（0.59 m 对 1.01 m）。测距误差修正使用 150 采样的 DW1000 CIR（n = 11,418），冻结探针加 1,153 参数的线性头可去除 39.0% 的平均误差，由 326 mm 降到 199 mm，90 分位误差由 598 mm 降到 392 mm；各环境的降幅为 22% 至 66%，论文称其在对比的已发表修正方法所报告的各环境中均更优，唯独办公室环境落后其中一种（66% 对 73%）。论文指出三项工作的未修正误差水平不同，因此只能做相对比较。(N)LOS 分类使用冻结线性模型，走廊环境准确率 93.7%，hallway1st 环境 93.7%，实验室 96.9%，比最强的 CIR 预训练基线高出最多 12.7 个百分点，而这些基线在其预训练所用环境（办公室与 iiot）中略好。

在 UWB 之外，论文报告仅靠选择表示（编码器冻结），23 类雷达识别准确率从 23.0% 升至 69.5%，短距无线技术识别从 70.8% 升至 97.1%。部署方面，编码器为 7.40 M 参数（FP32 下 29.6 MB），无参数算子在 CPU 上耗时 0.16 至 0.21 ms，各任务头约 1 至 3 千参数，因此接收端可用同一个编码器承担多项功能。

## Key technical points (EN)

- Pretraining: synthetic IQ only (NB-IoT uplink, 5G NTN uplink, 5G terrestrial downlink through 3GPP NTN TDL-A/C/D channels, LEO at 700 km, 97,200 scenarios); no real captures, labels or CIRs.
- Mechanism: one frozen 7.4 M-parameter encoder plus deterministic representation operators; per-task heads of about 1,153 to 3,076 parameters, or rank-16 LoRA adapters (0.49 M parameters) for positioning.
- UWB (N)LOS classification (150-tap DW1000 CIR): 93.7 percent (hallway), 93.7 percent (hallway1st), 96.9 percent (lab); up to 12.7 points above the strongest baseline in those unseen environments, slightly behind baselines in the environments they were pretrained on.
- UWB ranging-error correction: mean error 326 mm to 199 mm (39.0 percent removed), p90 598 mm to 392 mm; relative reductions 22 to 66 percent by environment; baselines have different uncorrected error levels, so comparison is relative.
- UWB TDoA positioning: 1.24 m MAE with LoRA r = 16 against 1.48 m for the uncorrected TDoA baseline, but TDoA has the better median (0.59 m against 1.01 m); the authors note their evaluation filters out some motion-capture dropouts and superframes heard by fewer than three anchors.
- Stated conclusion: no single representation or readout was best on all tasks, and additional adaptation helped in several settings, so representation selection and adaptation are complementary.

## Key technical points (ZH)

- 预训练：仅用合成 IQ（NB-IoT 上行、5G NTN 上行、5G 地面下行，经 3GPP NTN TDL-A/C/D 信道，700 km LEO，97,200 个场景）；不含真实采集数据、标签或 CIR。
- 机制：单一冻结的 7.4 M 参数编码器加确定性表示算子；各任务头约 1,153 至 3,076 个参数，定位任务使用 rank-16 LoRA 适配器（0.49 M 参数）。
- UWB (N)LOS 分类（150 抽头 DW1000 CIR）：走廊 93.7%、hallway1st 93.7%、实验室 96.9%；在这些未见过的环境中比最强基线最多高 12.7 个百分点，在基线预训练所用环境中略逊于基线。
- UWB 测距误差修正：平均误差 326 mm 降至 199 mm（去除 39.0%），p90 由 598 mm 降至 392 mm；各环境相对降幅 22% 至 66%；各基线的未修正误差水平不同，因此只能相对比较。
- UWB TDoA 定位：LoRA r = 16 下 MAE 为 1.24 m，未修正 TDoA 基线为 1.48 m，但 TDoA 的中位数更优（0.59 m 对 1.01 m）；作者说明其评估过滤了部分动捕丢失点和被少于三个锚点接收的超帧。
- 论文结论：没有任何单一表示或读出方式在所有任务上最优，额外的适配在若干场景中有帮助，因此表示选择与适配是互补而非互换的。

## Why it matters / what's new (EN)

The paper's argument is that a wireless foundation model pretrained on one signal representation can be reused on other representations and on CIR inputs it never saw, by changing the input view rather than retraining. The UWB tasks serve as the CIR test of that claim, using DW1000 CIR datasets and comparing against published CIR-pretrained models. The results are mixed in useful ways: strong generalisation to unseen environments for NLOS classification, a 39 percent mean-error reduction for ranging correction, and positioning that beats the uncorrected baseline in mean error but not in median. The ranging and NLOS comparisons rely on relative numbers across differing baselines, and the authors do not claim a single best representation, so the work reads as evidence of feasibility rather than a settled recipe for deployed UWB receivers.

## Why it matters / what's new (ZH)

论文的论点是：在一种信号表示上预训练的无线基础模型，只需改变输入视图而无需重新训练，就能用于其他表示以及它从未见过的 CIR 输入。UWB 任务作为对这一说法的 CIR 检验，使用 DW1000 CIR 数据集，并与已发表的 CIR 预训练模型对比。结果有喜有忧：NLOS 分类在未见过的环境中泛化良好，测距修正平均误差降低 39%，定位的平均误差优于未修正基线，但中位数不如基线。测距与 NLOS 的对比依赖各基线之间的相对数值，作者也未声称存在单一最优表示，因此这项工作更像是可行性证据，而非已定型的 UWB 接收机部署方案。

## Images

None.
