---
id: 2026-08-04_arxiv-sok-wifi-csi-biometrics-security
date_published: 2025-11-14
date_found: 2026-08-04
type: academic-paper
title_en: "SoK: Security Evaluation of Wi-Fi CSI Biometrics: Attacks, Metrics, and Open Challenges"
title_zh: "SoK：Wi-Fi CSI 生物特征认证的安全评估——攻击、度量与开放挑战"
url: "https://arxiv.org/abs/2511.11381"
source_quality: full
topics: [WiFi-sensing, CSI, biometrics, security, 802.11bf]
topic_primary: sensing-csi
topics_secondary: [security-privacy]
novelty_score: 2
---

## Summary (EN)

A Systematization of Knowledge (Braga et al., accepted to the 11th IEEE European Symposium on Security & Privacy, 2026) that evaluates Wi-Fi CSI-based biometric authentication through an explicitly adversarial lens. Surveying 16 representative works from 2018–2025, the authors find the field methodologically fragile: 81% relied on the long-discontinued Intel 5300 NIC, 62% omitted any security metric (EER/FAR/FRR), only 19% used open-source CSI extraction platforms such as Nexmon, and 87% studied dynamic modalities (gait, gestures) rather than static physiological ones.

The SoK articulates three concrete attack classes against CSI biometrics: replay (retransmitting captured CSI recordings), geometric mimicry (approximating hand geometry/placement to forge similar electromagnetic signatures), and environmental perturbation (multipath interference or controlled EM noise corrupting the biometric signal). It argues static palm-based sensing resists behavioural mimicry better than gait/gesture systems because the signature derives from internal dielectric properties rather than repeatable motion.

Its central contribution is a metrics critique: aggregate accuracy hides concentrated risk. The authors advocate per-class Equal Error Rate (per-user thresholds in their analysis ranged from ~0.008 to ~0.987), Frequency Count of Scores (visualising genuine/impostor overlap), and the Gini coefficient of error concentration (GC > 45% marks a "security hole" for specific users). Empirically, an MLP with a stellar 0.14% aggregate EER showed GC of 48.35% — unequal protection — while a Random Forest at 0.28% EER kept GC below 40% with 4× lower threshold variability, making it the more production-ready choice. The verdict: CSI biometrics should be treated as a complementary continuous-authentication layer, not a standalone primitive, until per-user metrics, cross-environment validation, and drift compensation become standard practice — with 802.11bf standardisation about to institutionalise CSI access and raise the stakes.

## Summary (ZH)

一篇知识系统化（SoK）论文（Braga 等，已被第 11 届 IEEE 欧洲安全与隐私研讨会 EuroS&P 2026 接收），以明确的对抗视角评估基于 Wi-Fi CSI 的生物特征认证。综述 2018–2025 年间 16 项代表性工作后，作者发现该领域方法论基础脆弱：81% 依赖早已停产的 Intel 5300 网卡，62% 未报告任何安全度量（EER/FAR/FRR），仅 19% 使用 Nexmon 等开源 CSI 提取平台，87% 研究动态模态（步态、手势）而非静态生理特征。

SoK 提出针对 CSI 生物特征的三类具体攻击：重放攻击（重传捕获的 CSI 记录）、几何模仿（近似手部几何形态与位置以伪造相似电磁签名）、环境扰动（多径干扰或受控电磁噪声破坏生物特征信号）。文章认为基于静态手掌的感知比步态/手势系统更能抵抗行为模仿，因为其签名来自内部介电特性而非可重复的动作。

核心贡献是度量批判：聚合精度掩盖了集中性风险。作者主张按用户的等错误率（其分析中单用户阈值从约 0.008 到 0.987 不等）、分数频次分布（可视化真实/冒充者分数重叠）以及错误集中度的基尼系数（GC > 45% 意味着特定用户存在"安全洞"）。实证上，聚合 EER 仅 0.14% 的 MLP 其 GC 达 48.35%——保护不均；而 EER 0.28% 的随机森林 GC 低于 40%，阈值波动小 4 倍，更适合生产部署。结论：在按用户度量、跨环境验证与漂移补偿成为标准实践之前，CSI 生物特征只应作为持续认证的补充层而非独立原语——而 802.11bf 标准化即将制度化 CSI 访问，使这一问题更加紧迫。

## Key technical points (EN)

- 16 works systematised (2018–2025): 81% Intel 5300-bound, 62% report no security metrics, 19% open-source platforms, 87% dynamic modalities — a reproducibility crisis.
- Attack taxonomy: replay, geometric mimicry, environmental perturbation; static palm sensing argued more mimicry-resistant (dielectric-property anchor).
- Metrics framework: per-class EER, Frequency Count of Scores, Gini coefficient of FAR/FRR concentration; GC > 45% flags per-user security holes.
- Aggregate-vs-distributional gap demonstrated: MLP 0.14% EER but GC 48.35%; Random Forest 0.28% EER with GC 39.61% and 4× lower threshold variability (18/20 vs 6/20 subjects at usable thresholds).
- Feature analysis: spectral centroid and empirical energy features dominate; raw phase ranks poorly without calibration — contradicting amplitude-only conventions.
- Open challenges: cross-environment generalisation, temporal drift, dataset scarcity, and 802.11bf institutionalising CSI access (compression, compatibility, privacy).

## Key technical points (ZH)

- 系统化 16 项工作（2018–2025）：81% 绑定 Intel 5300，62% 无安全度量，19% 开源平台，87% 动态模态——可复现性危机。
- 攻击分类：重放、几何模仿、环境扰动；静态手掌感知因介电特性锚点被认为更抗模仿。
- 度量框架：按用户 EER、分数频次分布、FAR/FRR 集中度基尼系数；GC > 45% 标记单用户安全洞。
- 聚合与分布差距实证：MLP 聚合 EER 0.14% 但 GC 48.35%；随机森林 EER 0.28%、GC 39.61%，阈值波动小 4 倍（18/20 对 6/20 受试者处于可用阈值区间）。
- 特征分析：谱质心与经验能量特征最具区分力；未经校准的原始相位表现差——与只用幅度的惯例相悖。
- 开放挑战：跨环境泛化、时间漂移、数据集匮乏，以及 802.11bf 将 CSI 访问制度化带来的压缩、兼容与隐私问题。

## Why it matters / what's new (EN)

Deliberate backfill (published November 2025, within the 12-month window): the sensing-csi bin has simulation-calibration (2026-07-04_arxiv-csi-simulation-agc-calibration) and application entries, but no security evaluation of CSI-as-authentication — this SoK is the first systematic treatment in the KB and bridges sensing-csi to the security-privacy thread (2026-06-26_arxiv-ml-mac-randomization-privacy covers the inverse problem: CSI-adjacent signals attacking privacy, while here CSI is the defence being attacked). Its per-user risk-concentration framing (Gini over FAR/FRR) is directly relevant to how 802.11bf-era sensing services should be evaluated, and its finding that phase features underperform without calibration links back to the AGC-calibration entry's core argument. EuroS&P 2026 acceptance gives it venue weight the bin's arxiv-only entries lack.

## Why it matters / what's new (ZH)

有意的回填条目（2025 年 11 月发表，处于 12 个月窗口内）：sensing-csi 主题已有仿真校准（2026-07-04_arxiv-csi-simulation-agc-calibration）与应用类条目，但缺少对"CSI 作为认证手段"的安全评估——本 SoK 是 KB 中首个系统化处理，并将 sensing-csi 与 security-privacy 线索连接起来（2026-06-26_arxiv-ml-mac-randomization-privacy 讨论的是逆问题：CSI 相邻信号攻击隐私，而这里 CSI 是被攻击的防御方）。其按用户风险集中度框架（FAR/FRR 的基尼系数）与 802.11bf 时代感知服务的评估方式直接相关；相位特征未校准即失效的发现也呼应了 AGC 校准条目的核心论点。EuroS&P 2026 的录用使其具备该主题下纯 arxiv 条目所缺的 venue 分量。
