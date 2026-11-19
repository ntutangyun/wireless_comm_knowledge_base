---
id: 2026-11-19_arxiv-gsdf-capc-null-subcarrier-rffi-80211ag-cross-domain
date_published: 2026-11-17
date_found: 2026-11-19
technology: wifi
type: academic-paper
title_en: "Pluggable Subband-Decoupled Fusion and Unlabeled Capture Prototype Calibration: Bridging High-SNR Null-Subcarrier Regrowth and Low-SNR Coherent Preambles for Cross-Domain IoT RF Fingerprinting"
title_zh: "可插拔子带解耦融合与无标签采集原型校准：衔接高信噪比空子载波再生与低信噪比相干前导的跨域物联网射频指纹识别"
url: "https://arxiv.org/abs/2611.22812"
source_quality: full
topics: [RFFI, RF fingerprinting, 802.11a/g, null subcarriers, optimal transport, physical-layer authentication]
topic_primary: security-privacy
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)
The paper (Yao, Li, Liu, Song, Li, Wang, Wang; submitted 17 Nov 2026) studies cross-domain radio frequency fingerprint identification (RFFI) for IoT transceivers at Wi-Fi access points, using IEEE 802.11a/g preambles. It describes a trade-off: power-amplifier spectral regrowth on unpopulated null subcarriers resists indoor multipath at high SNR but decays quadratically below the noise floor, whereas populated in-band preamble subcarriers survive low SNR but degrade under severe multipath; static fusion is reported to lose up to 44.7 percentage points.

The proposed GSDF (Pluggable Gated Subband-Decoupled Fusion) pairs a frozen pretrained host backbone for the in-band signal with a separately trained 46.3K-parameter null-subcarrier encoder (NS-Branch) over the 128 null bins. A blind SNR gate derived from lag-64 periodicity of the preamble, calibrated on source validation data only, controls the null branch's contribution; fusion combines scale-standardised logits and gate-weighted spherical embeddings, and when the gate closes the output reverts exactly to the host (reported 0.00 pp low-SNR loss). A proposition in the paper states that null-bin Fisher information decays quadratically at low SNR while active-bin information scales linearly.

At test time, UOT-CAPC (unlabeled capture-aware prototype calibration) refines class prototypes on unlabeled target captures with forward-only entropic unbalanced optimal transport (no backpropagation, aimed at edge CPUs); as the KL penalty goes to infinity it reduces to balanced Sinkhorn calibration (U-CAPC). Evaluation uses DataPort-WiFi (10 transceivers, four-antenna USRP X310, three rooms, leave-one-room-out), WiSig (15 emitters, raw unequalised preambles, four capture days in March 2021; source training on a single receiver, testing including an unseen receiver) and ORBIT MobRFFI (10 transmitters on a 20x20 grid). Reported: zero-retrain GSDF won all 72 of 72 paired runs across eight backbones; +29.4 pp over SigMix and +16.0 pp over IB-Host at 200 ns multipath; +48.6 pp over McAFF at 20 dB AWGN; the native edge model (about 93K active parameters) runs at 1.82 ms single-core CPU latency (ONNX Runtime, Xeon E5-2680 v4); over 5-10 packet bursts Macro-F1 ranges 89.04%-100.00%.

## Summary (ZH)
该论文（Yao、Li、Liu、Song、Li、Wang、Wang，2026 年 11 月 17 日提交）研究 Wi-Fi 接入点处物联网收发信机的跨域射频指纹识别（RFFI），使用 IEEE 802.11a/g 前导。文中描述了一种权衡：未占用空子载波上的功放频谱再生在高信噪比下抗室内多径，但在噪声底以下呈二次衰减；已占用的带内前导子载波在低信噪比下仍可存活，却在严重多径下退化；静态融合据称最多损失 44.7 个百分点。

所提 GSDF（可插拔门控子带解耦融合）将用于带内信号的冻结预训练主干与针对 128 个空子载波、单独训练的 46.3K 参数空子载波编码器（NS-Branch）配对。由前导 lag-64 周期性得到的盲信噪比门控（仅用源域验证数据标定）控制空子载波分支的贡献；融合由尺度标准化 logits 与门控加权的球面嵌入组成，门控关闭时输出精确退回主干（报告低信噪比损失为 0.00 pp）。文中一个命题指出：低信噪比下空子载波的 Fisher 信息呈二次衰减，而有效子载波的信息线性增长。

测试阶段，UOT-CAPC（无标签采集感知的原型校准）在无标签目标域采集上用仅前向的熵正则非平衡最优传输细化类原型（无反向传播，面向边缘 CPU）；当 KL 惩罚趋于无穷时退化为平衡 Sinkhorn 校准（U-CAPC）。评估使用 DataPort-WiFi（10 个收发信机，四天线 USRP X310，三个房间，留一房间交叉）、WiSig（15 个发射机，未均衡原始前导，2021 年 3 月四个采集日；源域仅用单接收机训练，测试含未见接收机）与 ORBIT MobRFFI（20x20 网格上 10 个发射机）。报告结果：零重训练的 GSDF 在八种主干上的 72 组配对实验中全部获胜；200 ns 多径下相对 SigMix 提升 29.4 pp、相对 IB-Host 提升 16.0 pp；20 dB AWGN 下相对 McAFF 提升 48.6 pp；原生边缘模型（约 93K 活跃参数）在单核 CPU（ONNX Runtime，Xeon E5-2680 v4）上时延 1.82 ms；5–10 包突发下 Macro-F1 为 89.04%–100.00%。

## Key technical points (EN)
- Two-subband design: frozen host for in-band subcarriers plus a 46.3K-parameter NS-Branch for the 128 null bins, avoiding the 20-35 dB subband gradient imbalance of joint training.
- Blind SNR gate (lag-64 preamble periodicity), calibrated on source validation only; exact fallback to the host when closed.
- Forward-only prototype calibration with unbalanced optimal transport; designed to accommodate small capture windows of about 10-100 frames.
- Stated caveats: large residual CFO or packet collisions can inflate the noise estimate and close the gate conservatively; WiSig scores are lower partly due to raw unequalised preambles and single-receiver source training; only NS-Branch and one baseline use the null bins.
- Three-benchmark Macro-F1: 57.50% for the edge IB-Host + GSDF model, up to 65.05% for the timing-synchronised GSDF-STO / GSDF-Tri variants.

## Key technical points (ZH)
- 双子带设计：带内子载波用冻结主干，128 个空子载波用 46.3K 参数的 NS-Branch，避免联合训练中 20–35 dB 的子带梯度失衡。
- 盲信噪比门控（前导 lag-64 周期性），仅用源域验证数据标定；门控关闭时精确退回主干。
- 基于非平衡最优传输的仅前向原型校准；面向约 10–100 帧的小采集窗口设计。
- 文中所述局限：较大残余载波频偏或包碰撞会抬高噪声估计并使门控保守关闭；WiSig 得分较低部分源于未均衡的原始前导及单接收机源域训练；仅 NS-Branch 与一个基线使用空子载波。
- 三基准 Macro-F1：边缘 IB-Host + GSDF 为 57.50%，时间同步的 GSDF-STO / GSDF-Tri 变体最高 65.05%。

## Why it matters / what's new (EN)
Adds a Wi-Fi-preamble RFFI work that uses the null subcarriers of 802.11a/g as a separate evidence stream, alongside earlier KB RFFI entries such as 2026-09-18_arxiv-calibrated-rf-fingerprinting-heterogeneous-protocols and 2026-11-17_arxiv-rf-fingerprint-cross-corpus-wisig-smorffi-lora-identity. The results are the authors' own, on three public datasets.

## Why it matters / what's new (ZH)
补充了一项利用 802.11a/g 空子载波作为独立证据流的 Wi-Fi 前导 RFFI 工作，与知识库已有的 RFFI 条目（如 2026-09-18_arxiv-calibrated-rf-fingerprinting-heterogeneous-protocols、2026-11-17_arxiv-rf-fingerprint-cross-corpus-wisig-smorffi-lora-identity）相呼应。结果为作者自报，基于三个公开数据集。

## Images

None.
