---
id: 2026-10-23_arxiv-neural-receiver-unrolled-ldpc-gradient-masking-adversarial
date_published: 2026-10-21
date_found: 2026-10-23
type: academic-paper
technology: cellular
title_en: "On the Adversarial Vulnerability of Neural Receivers with Unrolled LDPC Decoders"
title_zh: "带展开式 LDPC 译码器的神经接收机的对抗脆弱性"
url: "https://arxiv.org/abs/2610.30345"
source_quality: full
topics: [neural-receiver, adversarial-attack, LDPC, belief-propagation, gradient-masking, DeepRx, Sionna, 5G-NR-uplink, PGD, jamming]
topic_primary: cellular-security
topics_secondary: [cellular-ai, 5g-nr]
novelty_score: 3
---

## Summary (EN)
The paper (6 pages, IEEE copyright notice, authors from Nokia Munich and FAU Erlangen-Nuernberg) studies how robust neural-network receivers (NNRs) for 5G New Radio are when an adversary adds a small perturbation at the receiver antennas and the NNR output feeds an unrolled 5G NR LDPC belief-propagation (BP) decoder. It reports that standard end-to-end gradient attacks (l2 fast gradient method and projected gradient descent on the post-decoder cross-entropy loss) barely beat a Gaussian perturbation of matched power, and it traces this to gradient masking: tanh saturation in the boxplus check-node update of BP.

Following the paper's own structure, it describes the uplink system model (Sionna PHY, CDL-C channel, QPSK, resource grid), a threat model with per-realization white-box and channel-transfer modes, three attack loss functions (end-to-end, multi-iteration BP loss, pre-decoder LLR margin loss), a gradient-norm diagnosis, and BLER-versus-perturbation-to-signal-ratio (PSR) results on two receivers: the Sionna NeuralReceiver (about 4.86M parameters) and a reduced DeepRx variant (about 0.64M parameters).

## Summary (ZH)
该论文（6 页，带 IEEE 版权声明，作者来自慕尼黑诺基亚与埃尔朗根-纽伦堡大学）研究 5G NR 神经网络接收机（NNR）在接收天线处被叠加小扰动、且 NNR 输出送入展开式 5G NR LDPC 置信传播（BP）译码器时的鲁棒性。论文报告，标准的端到端梯度攻击（对译码后交叉熵损失使用 l2 快速梯度法与投影梯度下降）几乎不比同功率高斯扰动更有效，并把原因归结为梯度掩蔽：BP 校验节点 boxplus 更新中的 tanh 饱和。

按论文自身结构，文中依次给出上行系统模型（Sionna PHY、CDL-C 信道、QPSK、资源栅格）、含逐实现白盒与信道迁移两种模式的威胁模型、三种攻击损失函数（端到端、多迭代 BP 损失、译码前 LLR 间隔损失）、梯度范数诊断，以及两种接收机上 BLER 随扰动信号比（PSR）变化的结果：Sionna NeuralReceiver（约 486 万参数）和缩减版 DeepRx（约 64 万参数）。

## Key technical points (EN)
- Setup: 5G NR uplink, single transmit antenna and 2 receive antennas, CDL-C channel with 100 ns RMS delay spread, 3.5 GHz carrier, 14 OFDM symbols x 128 subcarriers (3584 complex dimensions), LDPC with k = 1392, n = 2784 (rate 1/2), 10 unrolled BP iterations, Eb/N0 = 5 dB. The perturbation is injected at the receive antennas as an l2-bounded vector; the paper states this abstracts a real jammer and establishes a receiver-model vulnerability rather than a realisable over-the-air attack.
- Diagnosis: the gradient l2 norm of the end-to-end loss at zero perturbation sits at about 1e-7 (NeuralReceiver) and about 1e-9 (DeepRx), several orders below the pre-decoder LLR loss gradient. Per-iteration BP loss gradients fall by roughly one to two orders of magnitude per iteration and reach the end-to-end floor by iteration 5 (NeuralReceiver) or 4 (DeepRx). A single-step FGM and a 100-step PGD on the end-to-end loss (PGD-E2E) give indistinguishable BLER, which the paper treats as a signature of gradient masking.
- Two bypass losses: L_BP sums per-iteration cross-entropy terms over all BP iterations (adapting Nachmani-style per-iteration supervision from decoder training to the attack setting); L_LLR is a hinge/margin loss on pre-decoder LLRs (margin m = 2.0) whose gradient reaches the perturbation without passing through the BP graph. PGD uses 100 steps with step size eps/10 and batch size 512.
- Results: the ordering PGD-E2E < PGD-BP < PGD-LLR holds on both receivers. On NeuralReceiver, PGD-LLR reaches BLER about 0.5 at PSR = -10 dB, where PGD-BP needs about -5 dB and the Gaussian jammer about -1.5 dB. The paper reports PGD-LLR exceeding the Gaussian jammer by 10^2 to 10^4 in BLER over the moderate-PSR range (largest gap about 10^4 on DeepRx at -8 dB).
- Transfer: with perturbations designed on one set of channel realisations and applied to unseen ones, PGD-BP drops from BLER about 1.0 to about 1.4e-4 (NeuralReceiver) and 1.37e-5 (DeepRx) at PSR = -12 dB, while PGD-LLR keeps 0.23 and 3.0e-2 respectively; at PSR = -8 dB PGD-LLR reaches 0.63 and 0.29. The paper observes that L_LLR perturbations concentrate on pilot-carrying OFDM symbols.
- Stated scope: the study uses simulation with Sionna, assumes perfect timing and frequency synchronisation between adversary and transmitter, and does not model the jammer-to-receiver channel.

## Key technical points (ZH)
- 设置：5G NR 上行，单发射天线、2 根接收天线，CDL-C 信道（均方根时延扩展 100 ns），载频 3.5 GHz，14 个 OFDM 符号 x 128 个子载波（3584 个复维度），LDPC 参数 k = 1392、n = 2784（码率 1/2），展开 10 次 BP 迭代，Eb/N0 = 5 dB。扰动以 l2 有界向量形式直接注入接收天线；论文说明这是对真实干扰机的抽象，所证明的是接收机模型的脆弱性，而非可在空口实现的攻击。
- 诊断：零扰动处端到端损失的梯度 l2 范数约为 1e-7（NeuralReceiver）和约 1e-9（DeepRx），比译码前 LLR 损失的梯度低多个数量级。逐迭代 BP 损失的梯度每次迭代约衰减一到两个数量级，并在第 5 次（NeuralReceiver）或第 4 次（DeepRx）迭代时降到端到端的数值下限。单步 FGM 与基于端到端损失的 100 步 PGD（PGD-E2E）的 BLER 无法区分，论文将其视为梯度掩蔽的特征。
- 两种绕过式损失：L_BP 对所有 BP 迭代的交叉熵项求和（把译码器训练中 Nachmani 式逐迭代监督改用于攻击场景）；L_LLR 是对译码前 LLR 的铰链/间隔损失（间隔 m = 2.0），其梯度无需经过 BP 图即可到达扰动。PGD 使用 100 步、步长 eps/10、批大小 512。
- 结果：两种接收机上均呈 PGD-E2E < PGD-BP < PGD-LLR 的顺序。NeuralReceiver 上，PGD-LLR 在 PSR = -10 dB 时 BLER 约 0.5，而 PGD-BP 需约 -5 dB、高斯干扰需约 -1.5 dB。论文报告在中等 PSR 范围内 PGD-LLR 的 BLER 比高斯干扰高 10^2 到 10^4 倍（DeepRx 在 -8 dB 时差距最大，约 10^4）。
- 迁移性：当扰动在一组信道实现上设计、再用于未见过的实现时，PGD-BP 在 PSR = -12 dB 处 BLER 由约 1.0 降到约 1.4e-4（NeuralReceiver）和 1.37e-5（DeepRx），而 PGD-LLR 分别保持 0.23 和 3.0e-2；在 PSR = -8 dB 时 PGD-LLR 达到 0.63 和 0.29。论文观察到 L_LLR 扰动集中在含导频的 OFDM 符号上。
- 论文说明的范围：研究基于 Sionna 仿真，假设攻击者与发射机之间时频同步完美，且未建模干扰机到接收机的信道。

## Why it matters / what's new (EN)
The paper's contribution is a diagnosis plus two attack losses on a simulated link, not a deployed-network measurement. For the cellular-security and cellular-ai bins it links the neural-receiver literature (DeepRx, Sionna NeuralReceiver) to the obfuscated-gradients framework: the apparent robustness of a receiver that ends in an unrolled LDPC decoder can come from vanishing gradients in the decoder chain; the authors call this "gradient masking, not genuine robustness of the NNR". The authors flag that the setup is an abstraction of jamming, not an over-the-air attack.

## Why it matters / what's new (ZH)
该论文的贡献是在仿真链路上的诊断加两种攻击损失，而非已部署网络的测量。对蜂窝安全与蜂窝 AI 主题而言，它把神经接收机文献（DeepRx、Sionna NeuralReceiver）与混淆梯度框架联系起来：末端带展开式 LDPC 译码器的接收机，其表观鲁棒性可能来自译码链中的梯度消失；作者称之为“梯度掩蔽，而非 NNR 真正的鲁棒性”。作者也指出，该设置只是对干扰的抽象，并非空口攻击。

## Images

None.
