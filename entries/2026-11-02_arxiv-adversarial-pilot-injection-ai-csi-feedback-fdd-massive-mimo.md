---
id: 2026-11-02_arxiv-adversarial-pilot-injection-ai-csi-feedback-fdd-massive-mimo
date_published: 2026-10-29
date_found: 2026-11-02
type: academic-paper
technology: cellular
title_en: "Adversarial Pilot Injection Against AI-Based CSI Feedback in FDD Massive MIMO Systems"
title_zh: "针对 FDD 大规模 MIMO 中 AI 信道状态信息反馈的对抗性导频注入"
url: "https://arxiv.org/abs/2610.40229"
source_quality: full
topics: [CSI-feedback, adversarial-attack, pilot-injection, FDD, massive-MIMO, adversarial-training, two-sided-AI-model]
topic_primary: cellular-security
topics_secondary: [cellular-massive-mimo, cellular-ai]
novelty_score: 3
---

## Summary (EN)

Jinli Zhai, Yusen Wang, Qimei Cui, Zengbao Zhu, Shengyuan Liang and Xiaofeng Tao (Beijing University of Posts and Telecommunications) study the robustness of AI-based CSI feedback in FDD massive MIMO, where a UE-side encoder compresses the downlink channel estimate and a base-station decoder reconstructs it (the 3GPP study in TR 38.843 covers such two-sided AI models). Their motivation is that channel coding, CRC and ARQ guarantee delivery of the quantized payload but not that the UE formed it from a clean estimate: an attacker transmitting during downlink pilot intervals can contaminate the observation, so correctly delivered bits still describe a corrupted channel.

They model the path end to end (attacker propagation, LMMSE estimation, compression, quantization, decoding) under a total transmit-energy constraint, and build an adversarial perturbation generator (APG) that needs only channel statistics at deployment. In simulation (32 BS antennas, 3GPP CDL-C, 2 GHz, 15 kHz SCS, Transformer feedback with a 208-bit payload), at a 10 dB Rician attacker-channel factor and a -4 dB perturbation-to-signal ratio, APG gives a reconstruction NMSE of 0.84 dB versus -10.31 dB for Gaussian interference, and the damage also degrades beamforming. A countermeasure, alternating adversarial training (AAT), adapts the encoder and decoder to contaminated pilots and lowers NMSE by 2.40-3.79 dB across six channel-power conditions when the attacker is re-optimised against the defended receiver.

## Summary (ZH)

Zhai Jinli、Wang Yusen、Cui Qimei、Zhu Zengbao、Liang Shengyuan 与 Tao Xiaofeng（北京邮电大学）研究 FDD 大规模 MIMO 中基于 AI 的 CSI 反馈的鲁棒性：UE 侧编码器压缩下行信道估计，基站侧解码器重建（3GPP TR 38.843 研究了此类双边 AI 模型）。其动机是：信道编码、CRC 与 ARQ 能保证量化载荷被正确送达，却不能保证 UE 是基于干净的估计生成该载荷；攻击者在下行导频时段发射即可污染观测，因此正确送达的比特仍然描述了一个被污染的信道。

他们对该路径做了端到端建模（攻击者传播、LMMSE 估计、压缩、量化、解码），并在总发射能量约束下设计了部署时只需信道统计信息的对抗扰动生成器（APG）。仿真设置为 32 根基站天线、3GPP CDL-C、2 GHz、15 kHz SCS、Transformer 反馈、208 比特载荷。在攻击者信道莱斯因子 10 dB、扰动信号比 -4 dB 时，APG 使重建 NMSE 达到 0.84 dB，而高斯干扰为 -10.31 dB，且损害还会降低波束赋形性能。对策为交替对抗训练（AAT），使编码器与解码器适应被污染的导频；当攻击者针对被防御的接收机重新优化时，六种信道-功率条件下 NMSE 降低 2.40-3.79 dB。

## Key technical points (EN)

- Attack surface: the downlink pilot acquisition stage, upstream of compression and quantization; the feedback link itself is assumed to deliver bits correctly.
- Two attack targets compared: estimator-targeted and reconstruction-targeted, which give different error orderings; the same transmit energy is used for APG and universal-waveform baselines.
- APG: a convolutional generator trained with channel statistics only (no instantaneous legitimate CSI or attacker-channel observation at deployment); a straight-through estimator is used during attack optimisation while evaluation keeps hard quantization.
- Defence: AAT alternates attacker and feedback-network updates with a clean/attacked mixed loss; evaluation separates a frozen shared attack from an adaptive attacker re-optimised against the final receiver.
- Setting: 2-bit quantization of a 104-dimension latent, 10 dB clean pilot SNR, 32 pilot tones per BS antenna; results are simulation-only and the paper is submitted to IEEE Internet of Things Journal.

## Key technical points (ZH)

- 攻击面：下行导频获取阶段，位于压缩与量化之前；假定反馈链路本身能正确传送比特。
- 比较两类攻击目标：针对估计器与针对重建，二者误差排序不同；APG 与通用波形基线使用相同发射能量。
- APG：仅用信道统计信息训练的卷积生成器（部署时无需瞬时合法 CSI 或攻击者信道观测）；攻击优化时使用直通估计器，评估时保留硬量化。
- 防御：AAT 以干净/被攻击混合损失交替更新攻击者与反馈网络；评估区分共享的冻结攻击与针对最终接收机重新优化的自适应攻击者。
- 设置：104 维隐变量 2 比特量化、干净导频信噪比 10 dB、每根基站天线 32 个导频音；结果仅为仿真，论文已投稿至 IEEE Internet of Things Journal。

## Why it matters / what's new (EN)

The authors argue that earlier work on adversarial examples and pilot contamination does not evaluate the acquisition stage of quantized AI-based CSI feedback, and that protecting pilot acquisition matters alongside protecting feedback delivery. Because the attack and defence are only simulated with a fixed channel model and a single feedback architecture, how the results carry to standardised two-sided models in deployed networks remains open.

## Why it matters / what's new (ZH)

作者认为，此前关于对抗样本与导频污染的工作并未评估量化 AI CSI 反馈的获取阶段，保护导频获取与保护反馈传送同样重要。由于攻击与防御仅在固定信道模型和单一反馈架构上仿真，结果能否推广到已部署网络中的标准化双边模型仍有待验证。

## Images

None.
