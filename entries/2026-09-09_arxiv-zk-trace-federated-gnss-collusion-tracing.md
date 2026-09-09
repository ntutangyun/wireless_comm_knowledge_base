---
id: 2026-09-09_arxiv-zk-trace-federated-gnss-collusion-tracing
date_published: 2026-09-08
date_found: 2026-09-09
type: academic-paper
technology: satellite
title_en: "ZK-Trace: Certified Collusion Tracing with Zero-Knowledge Credentials for Federated GNSS Interference Monitoring -- Traces 712/720 Two-Owner Leaked-Model Mixtures Without Naming an Innocent Station"
title_zh: "ZK-Trace：面向联邦 GNSS 干扰监测的零知识凭证可证明合谋溯源——在 720 组双方泄露模型混合样本中溯源 712 组且未误判任何无辜站点"
url: "https://arxiv.org/abs/2609.08763"
source_quality: full
topics: [GNSS-interference-monitoring, federated-learning, model-watermarking, traitor-tracing, zero-knowledge-proof, Tardos-fingerprinting, collusion-security, PNT-security]
topic_primary: sat-ai
topics_secondary: [ngso-regulation]
novelty_score: 3
---

## Summary (EN)
Karim, Raichur, Heublein, Feigl, Mutschler and Ott (Fraunhofer Institute for Integrated Circuits IIS, Nuremberg, with the University of Technology Nuremberg) address a specific leakage risk in federated GNSS interference monitoring: a network of partly-trusted ground stations trains a shared classifier via federated learning (FedAvg) without pooling raw measurements, but any station holding a copy of the resulting proprietary model can leak it, letting an adversary inspect which jamming/spoofing patterns evade detection and undermining the positioning-navigation-timing (PNT) system the monitoring network protects. ZK-Trace separates two distinct forensic questions that prior federated-watermarking schemes conflate or only partially answer: (1) which enrolled credentials are represented in a given model copy, verified via a zero-knowledge proof (extending FedZKP's credential mechanism with a Sigma-protocol authentication over exact-weight Learning Parity with Noise, so a claimant can prove membership during a dispute without exposing its secret), and (2) which specific recipient a leaked copy traces back to, via a recipient-specific Tardos collusion-secure fingerprint embedded as a public identity codeword plus an offline registry comparison that requires no cooperation from the leaker. The paper's central theoretical contribution is turning tracing into an auditable, executable decision rather than a probabilistic guess: it derives a conditional false-accusation bound that holds for arbitrary recovered bit patterns (not assuming independent extraction errors introduced by FedAvg averaging), a finite completeness bound under a "hidden-bias residual channel," and a deterministic tracing-score bound for correlated feature-distillation errors, all enforced by an interval-arithmetic checker that allocates a shared error budget across accusation and tamper decisions. Evaluated on a simulated ten-station GNSS federation (real GNSS recordings, few-shot prototypical-network classifier per Gaikwad et al.) plus a CIFAR-10 transfer check, at a false-naming budget of 0.001 per investigation: the scheme isolates all 160 single-owner leaked copies and traces 712 of 720 two-owner collusion mixtures without ever naming an innocent station, at a copy-accuracy cost of 4.8 percentage points (GNSS) / 6.1 points (CIFAR-10); its feature-space watermark carrier survives feature-matching model distillation in 20/20 runs and cross-architecture transfer in 19/20, though pure function-only distillation erases it (as it erases all five tested weight-space-only baseline marks, including a DeepMarks-family comparator that, unlike ZK-Trace, does produce false accusations in the coalition sweep).

## Summary (ZH)
Karim、Raichur、Heublein、Feigl、Mutschler 与 Ott（弗劳恩霍夫集成电路研究所 IIS，纽伦堡，与纽伦堡工业大学合作）针对联邦式 GNSS 干扰监测中一种特定的泄露风险展开研究：由部分可信的地面站组成的网络通过联邦学习（FedAvg）训练共享分类器，而无需汇聚原始测量数据，但任何持有该专有模型副本的站点都可能泄露该模型，使攻击者能够探知哪些干扰/欺骗模式可以规避检测，从而破坏该监测网络本应保护的定位—导航—授时（PNT）系统。ZK-Trace 将此前联邦水印方案混淆或仅部分回答的两个取证问题明确区分开来：（1）某个模型副本中体现了哪些已注册的凭证——通过零知识证明验证（在 FedZKP 凭证机制基础上扩展，采用基于精确权重带噪声奇偶学习问题的 Sigma 协议进行身份认证，使申诉方能够在争议中证明其成员身份而无需暴露其秘密）；（2）一份泄露的副本可追溯到哪个具体接收者——通过嵌入为公开身份码字的、面向特定接收者的抗合谋 Tardos 指纹，配合无需泄露者配合的离线登记簿比对完成。论文的核心理论贡献在于将溯源转化为一个可审计、可执行的判定，而非概率性猜测：论文推导出一个对任意恢复比特模式均成立的条件性误判（false-accusation）界（不假设 FedAvg 聚合引入的提取误差相互独立）、一个在"隐藏偏置残差信道"下的有限完备性界，以及一个针对相关特征蒸馏误差的确定性溯源分数界，并由一个区间算术检查器统一执行，在指控判定与篡改判定之间分配共享的错误预算。在一个模拟的十站点 GNSS 联邦（基于真实 GNSS 记录，采用 Gaikwad 等人的小样本原型网络分类器）以及一个 CIFAR-10 迁移验证上进行评估，在每次调查误判预算为 0.001 的条件下：该方案在 160 份单一所有者泄露副本中全部准确定位，并在 720 组双所有者合谋混合样本中溯源 712 组、且从未误判任何无辜站点，代价是副本准确率下降 4.8 个百分点（GNSS）/6.1 个百分点（CIFAR-10）；其特征空间水印载体在特征匹配式模型蒸馏下 20 次运行中全部存活，在跨架构迁移中 19/20 存活，但纯功能性蒸馏会将其抹除（正如其抹除了全部五种参与对比的仅权重空间基线水印一样，其中包括一种 DeepMarks 系族对比方法——与 ZK-Trace 不同，该方法在合谋扫描测试中确实产生了误判）。

## Key technical points (EN)
- **Threat model:** federated GNSS interference-monitoring network distributes a proprietary classifier (trained via FedAvg across partly-trusted stations) to enrolled recipients; any recipient may leak its copy, exposing detection blind spots to jamming/spoofing adversaries.
- **Two-part construction:** (1) zero-knowledge credential verification (extends FedZKP; Sigma-protocol authentication over exact-weight Learning Parity with Noise / xLPN, per Jain et al. and Veron's identification scheme) proves group membership/credential validity without exposing the client secret; (2) recipient-specific Tardos collusion-secure fingerprinting (public identity codeword + registry) traces a specific leaked copy to its recipient offline, without leaker cooperation.
- **Theoretical contributions:** conditional false-accusation bound for arbitrary recovered bit patterns (Theorem 3, no independent-extraction-error assumption); finite completeness bound under a hidden-bias residual channel (Theorem 4); deterministic tracing-score bound for correlated feature-distillation errors (Theorem 5); interval-arithmetic checker enforcing a shared accusation/tamper error budget.
- **Embedding carriers:** BN-scaling-parameter carrier (weight-space, following FedIPR) and a feature-space carrier designed for stability under feature-matching distillation.
- **Evaluation setup:** 10 simulated GNSS federation stations (real GNSS recordings, prototypical-network few-shot classifier per Gaikwad et al.), repeated random seeds, plus a CIFAR-10 transfer check; false-naming budget 10^-3 per investigation.
- **Headline results:** isolates all 160 single-owner leaked copies; traces 712/720 two-owner collusion mixtures without naming an innocent; copy-accuracy cost 4.8 pp (GNSS) / 6.1 pp (CIFAR-10); feature carrier survives feature-matching distillation 20/20 and cross-architecture transfer 19/20; function-only distillation erases the feature carrier and all five weight-space-only baseline marks (incl. a DeepMarks-family comparator, which unlike ZK-Trace produces false accusations under collusion).
- **Funding/provenance:** carried out within the DARCII project (German Federal Ministry for Economic Affairs and Climate Action, funding code 50NA2401), with support from the German Space Agency at DLR, Bundesnetzagentur, and the Federal Agency for Cartography and Geodesy (BKG) -- same institutional lineage (Fraunhofer IIS, Feigl/Mutschler/Ott) as the 2026-08-18 Jammertest Norway GNSS-interference-dataset entry already in this bin.

## Key technical points (ZH)
- **威胁模型：** 联邦式 GNSS 干扰监测网络将通过 FedAvg 在部分可信站点间训练得到的专有分类器分发给已注册的接收方；任一接收方都可能泄露其副本，从而向干扰/欺骗攻击者暴露检测盲区。
- **两部分构造：** （1）零知识凭证验证（在 FedZKP 基础上扩展，采用基于精确权重带噪声奇偶学习问题 / xLPN 的 Sigma 协议认证，参照 Jain 等人及 Véron 的身份识别方案），在不暴露客户端秘密的前提下证明成员身份/凭证有效性；（2）面向特定接收者的抗合谋 Tardos 指纹（公开身份码字 + 登记簿），在离线且无需泄露者配合的条件下，将泄露副本追溯至具体接收方。
- **理论贡献：** 针对任意恢复比特模式的条件性误判界（定理 3，不假设提取误差相互独立）；隐藏偏置残差信道下的有限完备性界（定理 4）；针对相关特征蒸馏误差的确定性溯源分数界（定理 5）；由区间算术检查器统一在指控与篡改判定之间分配共享错误预算。
- **嵌入载体：** BN 缩放参数载体（权重空间，沿用 FedIPR 思路）与专为在特征匹配式蒸馏下保持稳定而设计的特征空间载体。
- **评估设置：** 10 个模拟 GNSS 联邦站点（基于真实 GNSS 记录，采用 Gaikwad 等人的原型网络小样本分类器），多个随机种子，另加一项 CIFAR-10 迁移验证；每次调查的误判预算为 10^-3。
- **核心结果：** 在 160 份单一所有者泄露副本中全部准确定位；在 720 组双所有者合谋混合样本中溯源 712 组且未误判任何无辜站点；副本准确率代价为 4.8 个百分点（GNSS）/6.1 个百分点（CIFAR-10）；特征载体在特征匹配式蒸馏下 20 次运行全部存活，跨架构迁移中 19/20 存活；纯功能性蒸馏会抹除特征载体及全部五种参与对比的仅权重空间基线水印（含一种 DeepMarks 系族对比方法，该方法与 ZK-Trace 不同，在合谋测试中确实产生了误判）。
- **资助与渊源：** 本研究在 DARCII 项目框架下完成（德国联邦经济事务与气候行动部资助，编号 50NA2401），并得到德国航天局（隶属德国航空航天中心 DLR）、德国联邦网络局（Bundesnetzagentur）及德国联邦制图与大地测量局（BKG）支持——与本分箱此前收录的 2026-08-18 Jammertest Norway GNSS 干扰数据集条目同属一个机构脉络（弗劳恩霍夫 IIS，Feigl/Mutschler/Ott）。

## Why it matters / what's new (EN)
This KB's GNSS/PNT-security thread (seeded 2026-07-28 with VLM-based spoofing detection, extended 2026-08-12 with rigid-covert-spoofing and CORS-network integrity monitoring, 2026-08-17 with onboard flight-software trust boundaries, and 2026-08-18 with the Jammertest Norway interference dataset) gains a distinct new axis with this entry: rather than detecting jamming/spoofing of GNSS signals themselves, ZK-Trace protects the *detection infrastructure* -- the shared federated classifier that a distributed monitoring network relies on -- against insider leakage, by making leak attribution cryptographically verifiable and statistically bounded rather than a matter of trust or plaintext fingerprint comparison. It is also a direct evolutionary link to the 08-18 Jammertest entry (same Fraunhofer IIS group, same DARCII funding line), suggesting this lab's GNSS-interference-monitoring research program is now producing a security-of-the-monitoring-system-itself result alongside its interference-detection-dataset work.

## Why it matters / what's new (ZH)
本知识库的 GNSS/PNT 安全线索（始于 2026-07-28 基于视觉-语言模型的欺骗检测，2026-08-12 拓展至刚性隐蔽欺骗与 CORS 网络完整性监测，2026-08-17 拓展至星上飞行软件信任边界，2026-08-18 拓展至 Jammertest Norway 干扰数据集）因本条目获得了一个新的、有别以往的维度：ZK-Trace 并非检测 GNSS 信号本身受到的干扰/欺骗，而是保护*检测基础设施本身*——即分布式监测网络所依赖的共享联邦分类器——使其免受内部泄露之害，其做法是让泄露溯源具备密码学可验证性与统计学可界定性，而非依赖信任或明文指纹比对。本条目也与 08-18 的 Jammertest 条目存在直接的研究脉络延续（同一弗劳恩霍夫 IIS 团队、同一 DARCII 资助项目），表明该实验室的 GNSS 干扰监测研究方向，目前正在其干扰检测数据集工作之外，同步产出"监测系统自身安全性"方面的成果。

## Images

None.
