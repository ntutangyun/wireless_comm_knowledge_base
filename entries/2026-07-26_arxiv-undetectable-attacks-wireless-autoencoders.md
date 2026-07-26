---
id: 2026-07-26_arxiv-undetectable-attacks-wireless-autoencoders
date_published: 2026-07-21
date_found: 2026-07-26
type: academic-paper
technology: cellular
title_en: "Intelligent Disruption: undetectable adversarial attacks on learned (autoencoder) wireless air interfaces"
title_zh: "智能干扰：针对自编码器学习式无线空口的不可检测对抗攻击"
url: "https://arxiv.org/abs/2607.19448"
source_quality: abstract_only
topics: [PHY-security, adversarial-ML, autoencoder, AI-native-air-interface, jamming]
topic_primary: cellular-security
topics_secondary: [cellular-ai, 6g-vision]
novelty_score: 3
---

## Summary (EN)

Jiang, Zhang, Jin, Zhao, Liu and Chen attack the air interface itself rather than the protocol above it. Autoencoder-based communication — where a neural encoder and decoder are jointly trained to replace hand-designed modulation and coding, the direction 3GPP's AI/ML-for-air-interface study items point toward — inherits the adversarial fragility of the neural networks it is built from. This work develops an attack framework that is explicitly optimized to be *undetectable* rather than merely effective.

Two components carry the attack. A neural transmit-power controller suppresses cumulative leakage interference, which is what gives away multiple parallel attackers in naive jamming. A conditional GAN then generates adaptive perturbation signals whose defining objective is that the *attacked* received signal should resemble a *clean* received signal — the perturbation hides inside the distribution the receiver expects rather than standing out from it. The authors target three weaknesses in prior adversarial-wireless work at once: leakage from parallel attacks, degradation when the channel environment shifts, and detectability.

Reported results are improvements over benchmarks along all three axes the design targets — undetectability, aggressivity, and adaptability. The paper does not bind itself to a specific standard or numerology; the threat model applies to any learned end-to-end PHY. Ingested from the abstract page (no HTML rendering or venue listed at time of scan), so the evaluation setup and quantitative margins are not yet captured here.

## Summary (ZH)

Jiang、Zhang、Jin、Zhao、Liu 与 Chen 攻击的是空口本身，而非其上的协议。基于自编码器的通信——由神经编码器与解码器联合训练取代人工设计的调制编码，正是 3GPP "AI/ML 用于空口"研究项目所指向的方向——继承了其所依赖神经网络的对抗脆弱性。本文提出的攻击框架被显式地优化为*不可检测*，而不仅仅是有效。

攻击由两个组件承载。神经发射功率控制器抑制累积泄漏干扰——这正是朴素干扰方案中多个并行攻击者暴露自身的原因。随后条件生成对抗网络（cGAN）生成自适应扰动信号，其核心目标是使*被攻击的*接收信号与*干净的*接收信号相似——扰动隐藏在接收机所预期的分布之内，而非从中凸显出来。作者同时针对既有对抗无线研究的三个弱点：并行攻击的泄漏、信道环境变化时的性能退化，以及可检测性。

论文报告在其设计针对的三个维度上均优于基线——不可检测性、攻击强度与自适应性。该工作未绑定特定标准或参数集；其威胁模型适用于任何端到端学习式物理层。本条目基于摘要页录入（扫描时无 HTML 渲染版本、未列出发表venue），因此评估设置与量化幅度尚未收录。

## Key technical points (EN)

- Threat model targets learned end-to-end (autoencoder) PHY, not a specific 3GPP release — applies wherever neural encoders/decoders replace designed modulation and coding.
- Neural transmit-power control suppresses cumulative leakage interference from multiple parallel attackers.
- Conditional GAN generates perturbations optimized so the attacked received signal resembles a clean received signal — evading signature-based interference detection.
- Explicitly co-optimizes three properties prior work traded off: undetectability, aggressivity, adaptability under channel dynamics.
- Submitted July 21, 2026; no venue listed; entry written from the abstract page (`source_quality: abstract_only`).

## Key technical points (ZH)

- 威胁模型针对端到端学习式（自编码器）物理层，而非特定 3GPP 版本——适用于任何以神经编解码器取代人工调制编码的场景。
- 神经发射功率控制抑制多个并行攻击者产生的累积泄漏干扰。
- 条件 GAN 生成扰动，其优化目标是使被攻击的接收信号与干净接收信号相似，从而规避基于特征的干扰检测。
- 显式联合优化既往工作中相互权衡的三个属性：不可检测性、攻击强度、信道动态下的自适应性。
- 2026 年 7 月 21 日提交；未列出发表venue；本条目基于摘要页撰写（`source_quality: abstract_only`）。

## Why it matters / what's new (EN)

The cellular-security bin has covered authentication and privacy at the protocol layers; this is its first entry on attacking the *learned physical layer* — a surface that only exists because the air interface is becoming a trained model. It pairs directly with the AI-native air-interface thread the KB has been building (2026-05-24_ericsson-6g-mwc2026-momentum on physics-aware AI receivers, 2026-07-22_arxiv-ericsson-world-model-network-control) and with 2026-07-26_arxiv-wmfm-ood-6g-isac, which detects when a wireless foundation model is out of distribution: this paper is the adversary deliberately engineering an input that looks in-distribution. Read together they frame the open question for Release 21 AI/ML work items — a learned air interface needs an integrity story, not just an accuracy story. Worth a follow-up read of the full PDF for the evaluation margins once an HTML rendering appears.

## Why it matters / what's new (ZH)

cellular-security 分类此前覆盖协议层的认证与隐私；这是首个攻击*学习式物理层*的条目——该攻击面之所以存在，正是因为空口本身正在变成一个训练出来的模型。它与知识库持续构建的 AI 原生空口线索直接呼应（2026-05-24_ericsson-6g-mwc2026-momentum 的物理感知 AI 接收机、2026-07-22_arxiv-ericsson-world-model-network-control），也与 2026-07-26_arxiv-wmfm-ood-6g-isac 形成对照：后者检测无线基础模型何时处于分布之外，而本文正是攻击者刻意构造看起来处于分布之内的输入。二者合起来提出了 Release 21 AI/ML 工作项目的开放问题——学习式空口需要的不只是准确性论证，还需要完整性论证。待 HTML 版本出现后，值得回读全文以补充评估幅度数据。
