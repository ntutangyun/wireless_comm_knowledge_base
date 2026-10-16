---
id: 2026-10-16_arxiv-lwm-tf-wireless-foundation-model-5g-nr-pusch-grids
date_published: 2026-10-14
date_found: 2026-10-16
type: academic-paper
technology: cellular
title_en: "LWM-TF: A Wireless Foundation Model on 5G NR Time-Frequency Resource Grids"
title_zh: "LWM-TF：基于 5G NR 时频资源网格的无线基础模型"
url: "https://arxiv.org/abs/2610.21013"
source_quality: full
topics: [foundation-model, masked-autoencoder, PUSCH, resource-grid, self-supervised-learning, modulation-classification, CRC-decodability, TS-38.211, TR-38.901, Sionna]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Namhyun Kim, Sadjad Alikhani and Ahmed Alkhateeb (Arizona State University) introduce LWM-TF, a 9.58M-parameter factorized masked autoencoder pre-trained on complex 5G NR uplink resource grids taken after the FFT and before channel estimation. Each block attends first across OFDM symbols and then across resource blocks and receive antennas, and the 75% mask follows the same two axes. Because the payload phase is unpredictable, the model reconstructs the normalized log-power of each masked token and predicts its scale separately; ablations in the paper show the two terms are complementary and that this target beats complex-signal reconstruction.

Pre-training uses 850,496 PUSCH slots drawn from a 10^6-slot dataset generated with a Sionna NR transmit chain that follows TS 38.211/38.212 and the MCS tables of TS 38.214, over TR 38.901 UMa, UMi and RMa channels (with ray-traced DeepMIMO channels used for comparison). The link is a rank-1 SIMO CP-OFDM uplink at 3.5 GHz with a 24-PRB allocation at 30 kHz subcarrier spacing and four receive ports. With the encoder frozen, linear probes classify modulation, predict CRC success and detect UE mobility. With 16 labeled slots per class the probes reach 0.85 modulation accuracy, 0.82 CRC AUROC and 0.73 mobility AUROC, ahead of a supervised CNN on every paired draw; with 10,000 labels they reach 0.94, 0.96 and 0.92. Without any impairment labels, distances in the frozen feature space flag unseen waveform impairments at 0.78 macro AUROC against 0.68 for receiver statistics.

## Summary (ZH)
Namhyun Kim、Sadjad Alikhani 与 Ahmed Alkhateeb（亚利桑那州立大学）提出 LWM-TF：一个 9.58M 参数的分解式掩码自编码器，在 FFT 之后、信道估计之前的复数 5G NR 上行资源网格上预训练。每个模块先在 OFDM 符号维度做注意力，再在资源块与接收天线维度做注意力，75% 的掩码沿同样两个维度施加。由于载荷相位不可预测，模型重建被掩码 token 的归一化对数功率并单独预测其尺度；论文的消融实验表明这两项互补，且该目标优于复信号重建。

预训练使用 850,496 个 PUSCH 时隙，取自一个 10^6 时隙的数据集，由遵循 TS 38.211/38.212 及 TS 38.214 MCS 表的 Sionna NR 发射链生成，信道为 TR 38.901 的 UMa、UMi、RMa（并以射线追踪的 DeepMIMO 信道作对比）。链路为 3.5 GHz 的 rank-1 SIMO CP-OFDM 上行，24 个 PRB、30 kHz 子载波间隔、4 个接收端口。冻结编码器后，线性探针完成调制分类、CRC 成功预测与 UE 移动检测。每类 16 个标注时隙时，探针达到 0.85 的调制准确率、0.82 的 CRC AUROC 与 0.73 的移动 AUROC，在每一次成对抽样中均领先有监督 CNN；有 10,000 个标签时分别为 0.94、0.96、0.92。无需任何损伤标签，冻结特征空间中的距离即可以 0.78 的宏平均 AUROC 识别未见过的波形损伤，接收机统计量为 0.68。

## Key technical points (EN)
- Input is the received grid Y (4 receive ports x 14 symbols x 288 subcarriers) after per-sample RMS normalization; one token per PRB, OFDM symbol and receive antenna, 1,344 tokens of width 256. The discarded scale is kept as a label for probes.
- Encoder: eight pre-norm transformer blocks, width 256, four heads, divided attention (over the 14 symbols, then over the 96 antenna-PRB positions) instead of joint attention.
- Target SNR is drawn from U(-5, 30) dB with gamma = 0, chosen so realised SNR alone cannot identify LoS links (at gamma = 1 it would, at AUROC 0.97); modulation is drawn uniformly, independent of SINR, to remove an SNR-modulation shortcut.
- A 3GPP-style receiver (LS channel estimation on DMRS, LMMSE equalization, max-log demapping, LDPC decoding) supplies the CRC label; 20.5% of slots fail CRC and none is excluded.
- A second test set of 24,576 slots was generated after the original 64 evaluation candidates were frozen; the extended main model was chosen on development validation only.
- Stated limits: the probes do not beat a parameter-free SNR estimator, and a detector fitted on some impairment families does not transfer to a held-out family. All data are simulated; the paper lists validation on measured data and lower encoder cost for real-time use as next steps.
- Scope: one UE on a fixed 24-PRB SIMO rank-1 allocation with thermal noise as the only disturbance; variable allocations, co-scheduled users, inter-cell interference and transform precoding are left to future work.

## Key technical points (ZH)
- 输入为逐样本 RMS 归一化后的接收网格 Y（4 接收端口 x 14 符号 x 288 子载波）；每个 PRB、OFDM 符号、接收天线对应一个 token，共 1,344 个宽度 256 的 token。被舍弃的尺度作为探针标签保留。
- 编码器：8 个 pre-norm Transformer 模块，宽度 256、4 个注意力头，采用分割式注意力（先沿 14 个符号，再沿 96 个天线-PRB 位置），而非联合注意力。
- 目标 SNR 取自 U(-5, 30) dB，gamma = 0，使得仅凭实现的 SNR 无法识别 LoS 链路（gamma = 1 时 AUROC 为 0.97）；调制方式独立于 SINR 均匀抽取，以消除 SNR-调制的捷径。
- 类 3GPP 接收机（DMRS 上的 LS 信道估计、LMMSE 均衡、max-log 解映射、LDPC 译码）提供 CRC 标签；20.5% 的时隙 CRC 失败，且均未剔除。
- 在原先的 64 个评估候选冻结之后，另生成了 24,576 个时隙的第二测试集；扩展后的主模型仅依据开发验证集选定。
- 论文自述的局限：探针并未超过无参数的 SNR 估计器；在部分损伤族上拟合的检测器无法迁移到留出的损伤族。所有数据均为仿真；论文将实测数据验证与面向实时使用的编码器降本列为下一步。
- 范围：单个 UE、固定 24-PRB SIMO rank-1 分配、仅热噪声干扰；可变分配、共调度用户、小区间干扰与变换预编码留待后续工作。

## Why it matters / what's new (EN)
The KB's earlier AI-for-RAN entries mostly address scheduling, beam management or management-plane forecasting; this paper works on the receiver's own post-FFT PUSCH grid and asks whether one pre-trained encoder can serve several receiver-side tasks. The authors state that, to their knowledge, no wireless foundation model had been pre-trained on this grid, and they note that their comparison with other wireless foundation models describes the published approaches rather than benchmarking them on a common dataset. The evidence is simulation-only and the label-efficiency gain is the headline result, so how the representation behaves on measured, multi-user, interference-limited uplink data remains open.

## Why it matters / what's new (ZH)
知识库此前的 AI-for-RAN 条目多关注调度、波束管理或管理面预测；本文则针对接收机自身 FFT 后的 PUSCH 网格，探讨单个预训练编码器能否服务多个接收侧任务。作者表示据其所知此前没有无线基础模型在该网格上预训练，并说明其与其他无线基础模型的比较只是描述已发表方法，而非在统一数据集上的基准测试。证据仅来自仿真，标签效率的提升是主要结论，因此该表征在实测、多用户、干扰受限的上行数据上表现如何仍是开放问题。
