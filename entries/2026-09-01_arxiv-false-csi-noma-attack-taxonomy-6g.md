---
id: 2026-09-01_arxiv-false-csi-noma-attack-taxonomy-6g
date_published: 2026-08-28
date_found: 2026-09-01
type: academic-paper
technology: cellular
title_en: "False-CSI Attacks in Power-Domain NOMA for 6G: A Threat Taxonomy and System-Level Impacts"
title_zh: "面向 6G 功率域 NOMA 的虚假信道状态信息攻击：威胁分类与系统级影响"
url: "https://arxiv.org/abs/2608.28351"
source_quality: abstract_only
topics: [NOMA, power-domain, CSI, channel-state-information, SIC, RIS, pilot-spoofing, threat-taxonomy, 6G, security]
topic_primary: cellular-security
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)
Samira Jafarli, Aysha Ebrahim and Suleyman Uludag (arXiv v1, 28 Aug 2026) treat false channel-state information (CSI) as a first-class attack surface against power-domain Non-Orthogonal Multiple Access (NOMA), a technique widely studied for spectral efficiency and dense connectivity in beyond-5G/6G. NOMA's power allocation, user ordering, pairing, clustering and beamforming all depend on CSI integrity — and all can be distorted when the CSI the base station consumes is deliberately biased rather than merely noisy. The paper's contribution is a taxonomy of that distortion space along two primary axes: magnitude (underreporting vs. overreporting) and ordering effect (order-preserving, boundary, and order-reversing attacks). It then extends the basic taxonomy with concrete attack families — coordinated false-CSI behavior across colluding users, group-changing attacks, direction forgery, pilot spoofing, training-phase injection, and RIS-induced channel manipulation — and maps each family to its system-level consequences: power allocation, SIC (successive interference cancellation) reliability, scheduler behavior, fairness, throughput and secrecy. The central argument is that false CSI in 6G NOMA should be treated not just as a channel-estimation error problem but as a control-input integrity problem.

The paper is a taxonomy/threat-modeling article; no simulation, testbed or quantitative attack-impact numbers are given in the abstract.

## Summary (ZH)
Samira Jafarli、Aysha Ebrahim 与 Suleyman Uludag（arXiv v1，2026 年 8 月 28 日）将虚假信道状态信息（CSI）视为针对功率域非正交多址接入（NOMA）——一种在超 5G/6G 中被广泛研究以提升频谱效率与支持密集连接的技术——的一等攻击面。NOMA 的功率分配、用户排序、配对、聚类与波束成形均依赖 CSI 的完整性，而当基站所使用的 CSI 被蓄意偏置而非仅仅带噪时，上述各环节均可能被扭曲。本文的贡献是沿两个主轴对该扭曲空间进行分类：幅度轴（低报 vs 高报）与排序效应轴（保序、边界、逆序三类攻击）。随后将基础分类拓展为具体攻击族——串谋用户间协同的虚假 CSI 行为、分组变更攻击、方向伪造、导频欺骗、训练阶段注入，以及 RIS 诱发的信道操纵——并将每一攻击族映射到其系统级后果：功率分配、SIC（串行干扰消除）可靠性、调度器行为、公平性、吞吐量与保密性。核心论点是：6G NOMA 中的虚假 CSI 不应仅被视为信道估计误差问题，而应被视为一个控制输入完整性问题。

本文为分类/威胁建模类文章；摘要中未给出仿真、测试床或定量攻击影响数字。

## Key technical points (EN)
- Premise: power-domain NOMA's power allocation/ordering/pairing/clustering/beamforming all depend on CSI integrity; deliberately biased (not just noisy) CSI distorts all of them.
- Taxonomy axis 1 (magnitude): CSI underreporting vs. overreporting.
- Taxonomy axis 2 (ordering effect): order-preserving, boundary, and order-reversing attacks.
- Extended attack families: coordinated multi-user false-CSI, group-changing attacks, direction forgery, pilot spoofing, training-phase injection, RIS-induced channel manipulation.
- Impact mapping: each attack family tied to consequences in power allocation, SIC reliability, scheduling, fairness, throughput, and secrecy.
- Framing: false CSI as a control-input integrity problem, not merely a channel-estimation error, for 6G NOMA specifically.
- No eval: taxonomy/threat-modeling article, no simulation or testbed numbers in the abstract.

## Key technical points (ZH)
- 前提：功率域 NOMA 的功率分配/排序/配对/聚类/波束成形均依赖 CSI 完整性；蓄意偏置（而非仅带噪）的 CSI 会扭曲上述各环节。
- 分类轴一（幅度）：CSI 低报 vs 高报。
- 分类轴二（排序效应）：保序、边界、逆序三类攻击。
- 拓展攻击族：多用户协同虚假 CSI、分组变更攻击、方向伪造、导频欺骗、训练阶段注入、RIS 诱发的信道操纵。
- 影响映射：每一攻击族对应功率分配、SIC 可靠性、调度行为、公平性、吞吐量与保密性方面的后果。
- 定位：将虚假 CSI 视为 6G NOMA 场景下的控制输入完整性问题，而非单纯的信道估计误差。
- 无实验：分类/威胁建模类文章，摘要中未给出仿真或测试床数字。

## Why it matters / what's new (EN)
The KB's NOMA coverage to date has been capability-focused (e.g. the 2026-08-19 aggressive-NOMA DFT-s-OFDM device-to-satellite uplink entry), and its cellular-security bin has covered RIS as an attack surface economically (the 2026-08-26 RIS-auction adversary) but not as a CSI-manipulation vector inside NOMA specifically. This is the first entry to build a structured threat taxonomy purpose-built for power-domain NOMA's CSI dependency, and it is a useful companion to FlyBlind (2026-09-01, this run): both papers argue that a control mechanism relying on trusted-but-unverified inputs (CSI for NOMA; slice soft-isolation for UAV C2) is exploitable by an actor who never has to break the radio link itself, only bias what the network believes about it. As NOMA moves from a 5G-Advanced feature toward a candidate 6G building block, this taxonomy gives implementers a checklist of attack families to test against before deployment, even without accompanying quantitative results.

## Why it matters / what's new (ZH)
知识库此前对 NOMA 的覆盖偏重能力层面（如 2026-08-19 面向卫星上行的激进 NOMA DFT-s-OFDM 条目），其 cellular-security 栏目也已从经济学角度覆盖 RIS 作为攻击面的问题（2026-08-26 的 RIS 拍卖对手），但此前未有条目专门针对 NOMA 内部的 CSI 操纵向量。本条目是首个为功率域 NOMA 的 CSI 依赖性量身构建结构化威胁分类的条目，并与本轮同日的 FlyBlind（2026-09-01）形成有益呼应：两篇论文都指出，依赖"可信但未经验证"输入的控制机制（NOMA 中的 CSI；无人机 C2 中的切片软隔离）可被一个从不需要真正攻破无线链路本身、只需扭曲网络对其认知的攻击者利用。随着 NOMA 从 5G-Advanced 特性逐步走向 6G 候选构建模块，这一分类为实现者在部署前提供了一份可对照测试的攻击族清单，即便尚未附带定量结果。

## Images
