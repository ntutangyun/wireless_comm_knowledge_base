---
id: 2026-08-17_arxiv-csi-sensing-adversarial-robustness
date_published: 2025-11-25
date_found: 2026-08-17
type: academic-paper
technology: wifi
title_en: "Towards Trustworthy Wi-Fi CSI-based Sensing: Systematic Evaluation of Adversarial Robustness"
title_zh: "迈向可信的 Wi-Fi CSI 感知：对抗鲁棒性的系统性评测"
url: "https://arxiv.org/abs/2511.20456"
source_quality: full
topics: [WiFi-sensing, 802.11bf, CSI, adversarial-ML, security]
topic_primary: sensing-csi
topics_secondary: [security-privacy, ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Gopalakrishnan and Hailes (University College London) present the first systematic, unified evaluation of adversarial robustness across the ML models that power Wi-Fi CSI-based sensing — the technology that IEEE 802.11bf is standardizing for deployment in homes, offices, and care facilities. Prior robustness studies were fragmented, differing in experimental setup, model scale, and threat assumptions, and few incorporated the physics constraints that determine whether an attack is actually feasible over the air. The authors benchmark five architectures (residual MLP, LeNet-style 2D CNN, ResNet-18, BiLSTM, TimeSformer) on four public datasets spanning a controlled lab corpus (NTU-Fi HAR/HID, Atheros CSI tool) and a heterogeneous real-world deployment corpus (CSI-Bench HAR/HID: 26 environments, 16 device types), under white-box APGD, black-box transfer, and universal adversarial perturbation (UAP) attacks at perturbation budgets from 40 dB down to 5 dB SNR.

Two findings stand out. First, vulnerability is strongly task-dependent: human activity recognition (HAR) attack success rates climb to 64.8–69.4% at the largest budget, while human identification (HID) stays at 13.4–17.6% under identical attacks — identity signatures embedded in CSI are inherently more attack-resistant than activity patterns. Second, model capacity does not buy robustness: the simple residual MLP is consistently the most robust architecture despite (or because of) its flattened input representation, while high-capacity sequence and vision models (BiLSTM, TimeSformer) are the most fragile.

The paper's main methodological contribution is a physics-constrained perturbation projection (a composite operator enforcing frequency correlation via a power-delay-profile Toeplitz structure, Doppler-coherent temporal smoothing, MIMO receive-covariance regularization, an MMD manifold-alignment penalty, and an L2 energy budget). Constraining attacks to channel-realizable perturbations collapses their measured effectiveness — e.g. constrained APGD against BiLSTM on CSI-Bench HAR drops from 98.4% to 30.3% ASR while costing the attacker 4.1x more computation — showing that unconstrained robustness studies substantially overestimate real-world risk. On defenses, adversarial training almost fully protects HID (~99.9% robust accuracy) but recovers only ~36% on HAR, where randomized smoothing with certified guarantees fares comparatively better.

## Summary (ZH)
伦敦大学学院（UCL）的 Gopalakrishnan 与 Hailes 首次对支撑 Wi-Fi CSI 感知的机器学习模型进行了统一的对抗鲁棒性系统评测——该技术正随 IEEE 802.11bf 标准化而走向家庭、办公室与养老护理场景的普及部署。此前的鲁棒性研究彼此割裂：实验设置、模型规模与威胁假设各不相同，且很少纳入决定攻击现实可行性的物理约束。作者在四个公开数据集上（受控实验室的 NTU-Fi HAR/HID，与覆盖 26 种环境、16 类设备的真实异构部署数据集 CSI-Bench HAR/HID）对五种架构（残差 MLP、LeNet 式二维 CNN、ResNet-18、BiLSTM、TimeSformer）进行了基准测试，攻击方式涵盖白盒 APGD、黑盒迁移与通用对抗扰动（UAP），扰动预算从 40 dB 至 5 dB SNR。

两项发现尤为突出。其一，脆弱性高度依赖任务类型：人体行为识别（HAR）在最大预算下攻击成功率升至 64.8–69.4%，而人员身份识别（HID）在相同攻击下仅为 13.4–17.6%——CSI 中蕴含的身份特征天然比行为模式更抗攻击。其二，模型容量并不能换来鲁棒性：结构最简单的残差 MLP 反而始终最稳健，而大容量的序列与视觉模型（BiLSTM、TimeSformer）最为脆弱。

论文最主要的方法学贡献是一个物理约束扰动投影算子（复合约束：基于功率时延谱 Toeplitz 结构的频域相关性、符合多普勒相干时间的时域平滑、MIMO 接收协方差正则化、MMD 流形对齐惩罚以及 L2 能量预算）。将攻击限制在信道可实现的扰动范围内后，攻击效力大幅坍缩——例如针对 CSI-Bench HAR 上 BiLSTM 的受约束 APGD 攻击成功率从 98.4% 降至 30.3%，同时攻击者计算开销增加 4.1 倍——表明不加物理约束的鲁棒性研究显著高估了现实风险。防御方面，对抗训练几乎可完全保护 HID（鲁棒精度约 99.9%），但对 HAR 仅恢复约 36%；带认证保证的随机平滑在 HAR 上表现相对更好。

## Key technical points (EN)
- Five architectures (CSIMLP, CSILeNet, CSIResNet-18, CSIBiLSTM, CSITimeSformer) x four datasets (NTU-Fi and CSI-Bench, each with HAR and HID tasks) x three attack families (white-box APGD/APGD-T, black-box transfer, UAP) at 5/10/20/40 dB SNR perturbation budgets.
- Task asymmetry: HAR white-box ASR reaches 64.8% (NTU-Fi) / 69.4% (CSI-Bench); HID stays at or below 17.6% / 13.4% — identification is inherently more attack-resistant than activity recognition.
- Capacity is not robustness: the residual MLP (largest parameter count, 11.2M–96.0M) is consistently the most robust; sequence/attention models are the most fragile.
- Physics-constrained projection operator: power-delay-profile Toeplitz frequency correlation + Doppler-coherence temporal smoothing + MIMO receive-covariance regularization + MMD manifold alignment + L2 energy budget.
- Constraining to channel-realizable perturbations cuts APGD vs BiLSTM on CSI-Bench HAR from 98.4% to 30.3% ASR at 4.1x attacker compute (11.5 -> 47.3 ms per sample); UAP on CSI-Bench HAR falls from 72.3% to 20.5%.
- Defenses: APGD adversarial training gives ~99.9% robust accuracy on HID but only ~36.3% on HAR; randomized smoothing provides certified robustness and degrades less on HAR.
- Threat model: attacker co-located with the edge processor, aiming for stealthy misclassification; black-box transfer stays weak (max 22.1% HAR, near-zero HID).
- Authors commit to releasing the modular evaluation framework as an open-source artifact.

## Key technical points (ZH)
- 五种架构（CSIMLP、CSILeNet、CSIResNet-18、CSIBiLSTM、CSITimeSformer）× 四个数据集（NTU-Fi 与 CSI-Bench，各含 HAR 与 HID 任务）× 三类攻击（白盒 APGD/APGD-T、黑盒迁移、UAP），扰动预算 5/10/20/40 dB SNR。
- 任务不对称性：HAR 白盒攻击成功率最高达 64.8%（NTU-Fi）/ 69.4%（CSI-Bench）；HID 不超过 17.6% / 13.4%——身份识别天然比行为识别更抗攻击。
- 容量不等于鲁棒性：残差 MLP（参数量最大，11.2M–96.0M）反而始终最稳健；序列/注意力模型最脆弱。
- 物理约束投影算子：功率时延谱 Toeplitz 频域相关 + 多普勒相干时域平滑 + MIMO 接收协方差正则化 + MMD 流形对齐 + L2 能量预算。
- 限制为信道可实现扰动后，CSI-Bench HAR 上针对 BiLSTM 的 APGD 成功率从 98.4% 降至 30.3%，攻击者计算量增加 4.1 倍（单样本 11.5 -> 47.3 ms）；CSI-Bench HAR 上 UAP 从 72.3% 降至 20.5%。
- 防御：APGD 对抗训练在 HID 上鲁棒精度约 99.9%，但 HAR 仅约 36.3%；随机平滑提供认证鲁棒性且在 HAR 上退化更少。
- 威胁模型：攻击者与边缘处理器同处一地、追求隐蔽误分类；黑盒迁移攻击整体较弱（HAR 最高 22.1%，HID 接近零）。
- 作者承诺开源模块化评测框架。

## Why it matters / what's new (EN)
The KB's sensing-csi and security-privacy bins already track the attack surface of CSI systems from complementary angles — the SoK on CSI-biometric security (2026-08-04_arxiv-sok-wifi-csi-biometrics-security) systematized threats against identity-from-CSI, and the CSI simulation/AGC calibration work (2026-07-04_arxiv-csi-simulation-agc-calibration) showed how hardware gain control corrupts naive channel models. This entry adds the missing quantitative core: a controlled, cross-architecture, cross-task measurement of how much adversarial pressure CSI sensing models actually withstand, and — critically — a physics-grounded feasibility correction showing that the alarming numbers from unconstrained attack studies shrink by 50-70 percentage points once perturbations must respect coherence bandwidth, Doppler, and antenna-correlation structure. The HAR-vs-HID asymmetry and the "simple models are tougher" result are directly actionable for anyone building 802.11bf-era sensing pipelines on edge hardware, where the robust choice (a residual MLP) is also the cheap choice.

## Why it matters / what's new (ZH)
KB 的 sensing-csi 与 security-privacy 两个主题分区此前已从互补角度追踪 CSI 系统的攻击面——CSI 生物特征安全 SoK（2026-08-04_arxiv-sok-wifi-csi-biometrics-security）系统化了针对"从 CSI 提取身份"的威胁，CSI 仿真/AGC 校准工作（2026-07-04_arxiv-csi-simulation-agc-calibration）揭示了硬件增益控制对朴素信道模型的破坏。本条目补上了缺失的定量核心：一次受控的、跨架构跨任务的测量，回答 CSI 感知模型究竟能承受多大的对抗压力；更关键的是，其物理可行性修正表明，一旦扰动必须遵守相干带宽、多普勒与天线相关性结构，无约束攻击研究给出的惊人数字会缩水 50–70 个百分点。HAR 与 HID 的不对称性以及"简单模型更抗打"的结论，对在边缘硬件上构建 802.11bf 时代感知流水线的工程师有直接指导意义——鲁棒的选择（残差 MLP）恰好也是便宜的选择。

## Images
![CSI sensing pipeline under adversarial threat | 对抗威胁下的 CSI 感知流水线](https://arxiv.org/html/2511.20456v2/images/updated_csi_pipeline.png)
![Modular evaluation framework software stack | 模块化评测框架软件栈](https://arxiv.org/html/2511.20456v2/images/exp_software_stack.png)
![Threat model: co-located attacker at the edge processor | 威胁模型：与边缘处理器同处一地的攻击者](https://arxiv.org/html/2511.20456v2/images/threat_model.png)
![Effect of physics constraints (MMD/correlation) on adversarial samples | 物理约束（MMD/相关性）对对抗样本的影响](https://arxiv.org/html/2511.20456v2/images/effect_of_mmdcorr.png)
