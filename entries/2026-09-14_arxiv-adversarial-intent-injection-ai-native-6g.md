---
id: 2026-09-14_arxiv-adversarial-intent-injection-ai-native-6g
date_published: 2026-09-10
date_found: 2026-09-14
type: academic-paper
technology: cellular
title_en: "On Identifying Adversarial Intent Injection in AI-Native 6G Networks"
title_zh: "面向 AI 原生 6G 网络中对抗性意图注入攻击的识别"
url: "https://arxiv.org/abs/2609.12144"
source_quality: full
topics: [6G, intent-based-networking, AI-native, adversarial-attack, anomaly-detection]
topic_primary: cellular-security
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

Nilesh Chakraborty and Burak Kantarci (University of Ottawa) with Petar Djukic (Nokia Bell Labs) identify a new attack surface in AI-native 6G networks: adversarial intent injection against Intent-Based Networking (IBN) pipelines. IBN lets operators express high-level goals ("guarantee sub-5ms latency for this slice") that an AI-native orchestrator translates into network configurations — but that same abstraction layer creates an opening for attackers who compromise an API and inject malicious policies disguised as legitimate intents, enabling denial-of-service, privilege escalation, or traffic redirection at the intent-acquisition stage of the pipeline, before any configuration is even generated. The paper defines a fine-grained threat model and studies four injection strategies with different statistical signatures: stealth-mode (Poisson arrivals, λ≈3.40, designed to blend with benign traffic), random distribution, increasing-frequency, and decreasing-frequency (injection rate declines over time, λ≈1.08).

To detect these, the authors build a dual-path framework: a supervised CNN using TF-IDF-vectorized intent text (500 features, sliding window of 6 intents, focal loss to handle the malicious/benign class imbalance) for cases with labeled attack data, and a one-class AutoEncoder trained exclusively on benign intent sequences (Conv1D encoder to a 32-dimensional latent space, reconstruction-error threshold at the 85th percentile) for cases with no attack labels at all. On a dataset of 1,100 network intents (250 malicious, 850 benign) spanning all four injection strategies, the overall framework reaches 0.97 accuracy and 0.98 F1-score versus the state of the art — a roughly 9% accuracy and 36% F1 improvement over a baseline DIET intent classifier. Within that, the supervised CNN's own F1 breaks down as 0.97 (increasing-frequency), 0.95 (decreasing-frequency), 0.93 (stealth-mode), and 0.86 (random), so it holds F1 0.93-0.95 on the harder cases even though stealth-mode is its second-weakest scenario, not its strongest. The unsupervised AutoEncoder, which needs no attack examples at training time, still exceeds 0.85 accuracy in most scenarios, making it the more deployable option where labeled attack data is unavailable.

## Summary (ZH)

渥太华大学的 Nilesh Chakraborty、Burak Kantarci 与诺基亚贝尔实验室的 Petar Djukic 合作，在 AI 原生 6G 网络中识别出一种新的攻击面：针对基于意图的网络（Intent-Based Networking, IBN）流水线的对抗性意图注入攻击。IBN 让运营商能够表达高层目标（例如"为该切片保证低于 5 毫秒的时延"），再由 AI 原生编排器将其转译为具体网络配置——但同一层抽象也为攻击者打开了缺口：攻击者一旦攻陷某个 API，即可将伪装成合法意图的恶意策略注入系统，在流水线的意图获取阶段（早于任何配置生成之前）即可实现拒绝服务、权限提升或流量重定向。论文构建了细粒度威胁模型，并研究了具有不同统计特征的四种注入策略：隐蔽模式（泊松到达过程，λ≈3.40，刻意与正常流量混同）、随机分布、频率递增、以及频率递减（注入速率随时间推移逐渐降低，λ≈1.08）。

为检测这些攻击，作者构建了双路径检测框架：一是面向有标注攻击数据场景的监督式 CNN，采用 TF-IDF 向量化的意图文本（500 维特征、滑动窗口为 6 条意图、使用 focal loss 处理恶意/良性类别不平衡问题）；二是面向完全无攻击标注场景的单类自编码器，仅在良性意图序列上训练（Conv1D 编码器映射到 32 维潜在空间，以第 85 百分位的重构误差作为判定阈值）。在包含 1,100 条网络意图（250 条恶意、850 条良性，覆盖全部四种注入策略）的数据集上，整体框架相较业界最新方法达到 0.97 的准确率与 0.98 的 F1 分数——相较基线 DIET 意图分类器，准确率提升约 9%、F1 提升约 36%。其中，监督式 CNN 自身的 F1 分数依次为：频率递增 0.97、频率递减 0.95、隐蔽模式 0.93、随机分布 0.86，即在较难的场景上保持 0.93-0.95 的 F1，但隐蔽模式实际是其四种场景中第二弱的表现，而非最强。无需训练阶段任何攻击样本的无监督自编码器，在多数场景下准确率仍超过 0.85，在缺乏标注攻击数据的场景下更具可部署性。

## Key technical points (EN)

- Threat model targets the intent-acquisition stage of the IBN pipeline: attackers compromise an API to submit malicious policies disguised as legitimate intent requests, before any translation into network configuration occurs.
- Four injection strategies modeled as distinct arrival processes: stealth-mode (Poisson, λ≈3.40, designed to statistically resemble benign traffic), random distribution (λ≈3.41), increasing frequency (λ≈3.01, escalating rate), decreasing frequency (λ≈1.08, injection rate declines over time).
- Path 1 (supervised): CNN over TF-IDF features (500-dim), sliding window of 6 intents, Conv1D layers, focal loss for class imbalance, 0.7 prediction threshold.
- Path 2 (unsupervised): one-class AutoEncoder trained only on benign sequences, Conv1D encoder (256 filters) to a 32-dimensional latent layer, anomaly flagged via reconstruction error above the 85th-percentile threshold — captures temporal anomalies with zero malicious training examples.
- Dataset: 1,100 network intents (250 malicious / 850 benign) across all four distribution scenarios.
- Headline results: overall framework accuracy 0.97, F1 0.98 vs. the state of the art (roughly +9% accuracy, +36% F1 over the DIET baseline classifier); the CNN's own per-strategy F1 is 0.97/0.95/0.93/0.86 for increasing-frequency/decreasing-frequency/stealth-mode/random respectively (holding 0.93-0.95 on the harder cases, though stealth-mode is its second-weakest, not best, scenario); AutoEncoder exceeds 0.85 accuracy in most scenarios despite using no labeled attacks.
- Accepted to IEEE GLOBECOM 2026; co-authored with Nokia Bell Labs (Kanata, ON), giving the threat model an industry-research anchor rather than a purely academic framing.

## Key technical points (ZH)

- 威胁模型聚焦 IBN 流水线的意图获取阶段：攻击者攻陷 API，在任何配置转译发生之前，提交伪装成合法意图请求的恶意策略。
- 四种注入策略被建模为不同的到达过程：隐蔽模式（泊松过程，λ≈3.40，刻意在统计特征上贴近良性流量）、随机分布（λ≈3.41）、频率递增（λ≈3.01，速率逐步上升）、频率递减（λ≈1.08，注入速率随时间推移逐渐降低）。
- 路径一（监督式）：基于 TF-IDF 特征（500 维）的 CNN，滑动窗口为 6 条意图，采用 Conv1D 层与 focal loss 处理类别不平衡，预测阈值为 0.7。
- 路径二（无监督）：仅在良性序列上训练的单类自编码器，Conv1D 编码器（256 个滤波器）映射至 32 维潜在层，以超过第 85 百分位的重构误差判定异常——无需任何恶意训练样本即可捕捉时序异常。
- 数据集：1,100 条网络意图（250 条恶意 / 850 条良性），覆盖全部四种分布场景。
- 核心结果：整体框架相较业界最新方法，准确率 0.97、F1 分数 0.98（相较 DIET 基线分类器，准确率提升约 9%，F1 提升约 36%）；CNN 自身各场景 F1 依次为频率递增 0.97、频率递减 0.95、隐蔽模式 0.93、随机分布 0.86，即在较难场景上保持 0.93-0.95，但隐蔽模式实为四者中第二弱、并非表现最好的场景；自编码器在未使用任何标注攻击样本的情况下，多数场景准确率仍超过 0.85。
- 论文已被 IEEE GLOBECOM 2026 接收；与诺基亚贝尔实验室（安大略省 Kanata）合作完成，使威胁模型具备产业研究背景，而非纯学术设定。

## Why it matters / what's new (EN)

This KB has been tracking an "AI-RAN safety" thread across many entries — conflict taxonomy, forensic triage (C-RE-ACT), programmable MAC enforcement (MAC-Gyver), pre-actuation certification (VeraRAN), verifiable agentic intent control (Z2-ACT), and provable multi-xApp arbitration. That thread is not uniformly blind to adversarial inputs: Z2-ACT (2026-08-24) already scores prompt injection at admission (95% mitigation vs. 2% unguarded), and the 2026-05-01 Intellicise entry enumerates poisoned inputs and prompt injection among agentic-AI security threats. What this paper adds is not the first look at untrustworthy inputs, but a specific, characterized attack surface: the intent-acquisition API itself, with a fine-grained threat model of four statistically distinct injection strategies — including a stealth-mode designed to evade naive detection by mimicking benign statistical patterns — and a dual supervised/unsupervised detector pair. Pairing a supervised classifier with an unsupervised one that needs zero attack examples is also a practically useful design choice for operators who have no historical attack data to train on.

## Why it matters / what's new (ZH)

本知识库此前已持续跟踪"AI-RAN 安全"这一系列成果——冲突分类法、取证式分诊（C-RE-ACT）、可编程 MAC 层强制执行（MAC-Gyver）、执行前认证（VeraRAN）、可验证的智能体式意图控制（Z2-ACT），以及可证明的多 xApp 仲裁。该系列并非全部默认输入可信：Z2-ACT（2026-08-24）已在准入阶段对提示注入进行评分（缓解率 95% vs. 无防护时的 2%），2026-05-01 收录的 Intellicise 条目也已将中毒输入与提示注入列为智能体式 AI 的安全威胁。本文的新增之处并非"首次关注不可信输入"，而是提出了一个具体、可刻画的攻击面：意图获取 API 本身，并给出了包含四种具有不同统计特征的注入策略（其中隐蔽模式专门设计用于通过模仿良性统计特征规避朴素检测）的细粒度威胁模型，以及一套监督/无监督双路径检测方案。将监督式分类器与无需任何攻击样本的无监督方法配对，对于没有历史攻击数据可用于训练的运营商而言也是一个具有实用价值的设计选择。

## Images

![Threat model diagram for adversarial intent injection in the IBN pipeline | IBN 流水线中对抗性意图注入攻击的威胁模型示意图](https://arxiv.org/html/2609.12144v1/themeWork.png)
![t-SNE visualization of stealth-mode intent injection distribution | 隐蔽模式意图注入分布的 t-SNE 可视化](https://arxiv.org/html/2609.12144v1/stealthFinal-tSNE.png)
![t-SNE visualization of decreasing-frequency intent injection distribution | 频率递减模式意图注入分布的 t-SNE 可视化](https://arxiv.org/html/2609.12144v1/DecreasingFinal-tSNE.png)
