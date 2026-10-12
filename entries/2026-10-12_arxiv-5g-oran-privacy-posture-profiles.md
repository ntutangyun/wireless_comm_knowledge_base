---
id: 2026-10-12_arxiv-5g-oran-privacy-posture-profiles
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "Quantifying the Privacy Posture of Operator-Side 5G/O-RAN Profiles"
title_zh: "量化运营商侧 5G/O-RAN 网络画像的隐私风险水平"
url: "https://arxiv.org/abs/2610.07976"
source_quality: full
topics: [privacy, anonymisation, k-anonymity, l-diversity, t-closeness, O-RAN, GDPR, PENM, XTRUST-6G]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Nikolaos Kekatos, Apostolos Valiakos, Alexios Lekidis, and Elpiniki Papageorgiou (University of Thessaly, Department of Energy Systems), accepted for publication at the 2026 IEEE International Conference on Cyber Security and Resilience (IEEE CSR 2026), study how much re-identification risk survives after operator-side 5G/O-RAN network profiles are anonymised before being released to a federated-learning aggregator, threat-intelligence exchange, or ML training pipeline. The profiles under study are produced by PENM (Privacy-Enhanced Network Monitoring), a passive, DPI-based operator-side monitoring tool built under the EU Horizon Europe SNS-JU project XTRUST-6G; PENM itself is standard tooling, and the paper's contribution is a privacy-quantification layer that sits on top of its output. The layer computes k-anonymity, l-diversity and t-closeness on each release and aggregates them into a single [0,1] Privacy-Posture Index (PPI), modeled loosely on how CVSS aggregates vulnerability scores, using default weights (0.4, 0.3, 0.3) that place more weight on k because identity disclosure is treated as the primary regulator-facing risk.

The authors evaluate eight transformation configurations (pseudonymisation, generalisation, suppression, and combinations) across three datasets: a 12-session O-RAN testbed capture, a 513-session EV-charging dataset, and a ten-PCAP internal corpus, plus eight "Normal-1UE" captures from the public Idaho National Laboratory 5GAD corpus. Three adversary models are used to measure what an attacker actually achieves, rather than only what the release's syntactic metrics claim: an exact-QI (quasi-identifier) disclosure bound, a partial-QI adversary that forgets each QI value with probability 0.5, and a probabilistic record-linkage adversary that observes each QI attribute correctly with probability 0.8. Three observations emerge from the 10-PCAP x 8-configuration sweep (N=80 releases): (1) pseudonymisation alone (HMAC-hashing the IP) leaves re-identification completely unchanged, because the equivalence-class structure on the quasi-identifier tuple is untouched; (2) generalisation alone (IP-prefix generalisation to /24 or /16) is also insufficient, cutting exact-QI re-identification to only ~60% because long-tail singleton classes persist; (3) the strongest configurations are quasi-identifier-and-sensitive-attribute-aware rather than merely transformation-intensive — combining /24 generalisation with threshold suppression (config C4) raises mean k_min to 3 and cuts exact re-identification by ~72 percentage points, while binning a coarse quasi-identifier such as protocol count (config C6) achieves the lowest residual re-identification (25.3% exact, 22.3% partial) with only modest transformation cost; separately, on the combined N=144 corpus including 5GAD, the standard k_min-based PPI correlates only modestly with the exact-QI disclosure bound (r=+0.30) and is essentially uncorrelated with the partial-QI attack (r=+0.08), because it is driven only by the single worst-case class, whereas a proposed mean-class-size variant, PPI', correlates strongly with all three disclosure/attack measures (r=0.63-0.79). On the 513-session EV-charging dataset, the authors' example transformation raises the baseline (k,l,t)=(1,1,0.90) to (5,2,0.73) but retains only 70 of 513 rows (~14%). A separate downstream role-classification experiment on 664 pooled PCAP-profile records shows that suppression-heavy releases keep majority-class accuracy but lose about half of their minority-class recall — a utility cost the aggregate PPI metrics hide. The authors frame their PPI as a regulator-facing summary rather than a security bound, and stress that all of these are empirical trends from a modest-scale evaluation, not a certified anonymisation guarantee.

## Summary (ZH)
Nikolaos Kekatos、Apostolos Valiakos、Alexios Lekidis 与 Elpiniki Papageorgiou（希腊塞萨利大学能源系统系）的论文已被 2026 年 IEEE 网络安全与韧性国际会议（IEEE CSR 2026）接收录用，研究运营商侧 5G/O-RAN 网络画像在向联邦学习聚合方、威胁情报交换平台或机器学习训练管道发布前经标准匿名化处理后，残余的重新识别风险有多大。研究对象是由 PENM（隐私增强网络监测，Privacy-Enhanced Network Monitoring）产生的画像——这是一款基于被动深度包检测（DPI）的运营商侧监测工具，诞生于欧盟"地平线欧洲"SNS-JU 项目 XTRUST-6G 之下；PENM 本身是现有标准工具，论文的贡献在于叠加于其输出之上的隐私量化层。该层在每次发布上计算 k-匿名性、l-多样性与 t-接近性，并将三者聚合为单一的 [0,1] 区间隐私姿态指数（Privacy-Posture Index, PPI），其构造思路大致借鉴了 CVSS 聚合漏洞评分的方式，默认权重为 (0.4, 0.3, 0.3)，因身份披露被视为监管层面的首要风险而赋予 k 更高权重。

作者在三个数据集上评估了八种转换配置（伪匿名化、泛化、抑制及其组合）：一个 12 次会话的 O-RAN 测试床抓包、一个 513 次会话的电动汽车充电数据集，以及一个由十份内部 PCAP 组成的语料库，外加来自爱达荷国家实验室公开 5GAD 语料库的八份"单终端正常"（Normal-1UE）抓包。研究使用三种攻击者模型来衡量攻击者实际能达到的效果，而不仅是发布版本自身语法指标所声称的水平：一个精确准标识符（QI）披露界限、一个以 0.5 概率遗忘每个 QI 值的"部分 QI"攻击者，以及一个以 0.8 概率正确观测每个 QI 属性的概率式记录关联攻击者。在 10 份 PCAP × 8 种配置的扫描实验（N=80 次发布）中得出三项观察：（1）仅做伪匿名化（对 IP 做 HMAC 哈希）完全不改变重新识别结果，因为准标识符元组上的等价类结构未受影响；（2）仅做泛化（将 IP 前缀泛化至 /24 或 /16）同样不足，精确 QI 重新识别率仅降至约 60%，因为长尾单例类依然存在；（3）最强的配置是"针对准标识符与敏感属性"而非单纯"转换强度大"——将 /24 泛化与门限抑制相结合（配置 C4）可将平均 k_min 提升至 3，并将精确重新识别率降低约 72 个百分点，而对协议计数等粗粒度准标识符进行分箱（配置 C6）则以较低的转换代价取得最低的残余重新识别率（精确 25.3%，部分 22.3%）；另外，在合并后的 N=144 语料上，标准的基于 k_min 的 PPI 与精确 QI 披露界限的相关性仅为中等（r=+0.30），且与部分 QI 攻击几乎不相关（r=+0.08），原因在于它只由单一最差情形类别驱动，而作者提出的均值类规模变体 PPI' 则与三种披露/攻击度量均高度相关（r=0.63–0.79）。在 513 次会话的电动汽车充电数据集上，作者给出的示例转换将基线 (k,l,t)=(1,1,0.90) 提升至 (5,2,0.73)，但仅保留 513 行中的 70 行（约 14%）。另一项在 664 条合并 PCAP 画像记录上进行的下游角色分类实验表明，以抑制为主的发布版本保住了多数类准确率，却损失了约一半的少数类召回率——这一效用代价被聚合后的 PPI 指标所掩盖。作者将 PPI 定位为面向监管者的摘要指标而非安全性界限，并强调上述均为小规模评估得出的经验趋势，而非经认证的匿名化保证。

## Key technical points (EN)
- Studies operator-side 5G/O-RAN network profiles (from AMF/SMF/UPF/gNB and O-RAN Near-RT RIC/E2T telemetry) produced by PENM under the XTRUST-6G EU Horizon Europe SNS-JU project.
- Quantifies privacy with three syntactic models (k-anonymity, l-diversity, t-closeness) aggregated into a composite Privacy-Posture Index (PPI), weighted (0.4, 0.3, 0.3).
- Tests eight transformation configurations across an O-RAN testbed capture, a 513-session EV-charging dataset, and PCAPs from the public Idaho National Laboratory 5GAD corpus.
- Pseudonymisation alone (keyed HMAC) gives no measurable privacy gain in this setup; only generalisation/suppression combinations (e.g., /24 generalisation + threshold suppression) materially raise k_min.
- The k_min-based PPI correlates only modestly with the exact-QI disclosure bound (r=+0.30) and the linkage attack (r=+0.24), and essentially not with the partial-QI attack (r=+0.08); a proposed mean-class-size variant PPI' correlates strongly (r=0.63-0.79).
- Suppression-heavy anonymisation retains majority-class ML utility but costs roughly half the minority-class recall — a trade-off the aggregate privacy score does not surface.
- Transformation throughput on commodity hardware is ~3x10^5 records/second, well below the PCAP/DPI profiling cost.

## Key technical points (ZH)
- 研究对象是 PENM（在欧盟 XTRUST-6G 项目下开发）从 AMF/SMF/UPF/gNB 及 O-RAN Near-RT RIC/E2T 遥测数据生成的运营商侧 5G/O-RAN 网络画像。
- 用 k-匿名性、l-多样性、t-接近性三种语法模型量化隐私，并聚合为加权 (0.4, 0.3, 0.3) 的综合隐私姿态指数 PPI。
- 在 O-RAN 测试床抓包、513 次会话电动车充电数据集，以及源自爱达荷国家实验室公开 5GAD 语料库的 PCAP 上测试八种转换配置。
- 仅做伪匿名化（带密钥的 HMAC）在本文实验设置下没有可测量的隐私收益；只有泛化与抑制的组合（如 /24 泛化 + 门限抑制）才能显著提升 k_min。
- 基于 k_min 的 PPI 与精确 QI 披露界限（r=+0.30）和关联攻击（r=+0.24）仅中等相关，与部分 QI 攻击几乎不相关（r=+0.08）；作者提出的均值类规模变体 PPI' 相关性更强（r=0.63–0.79）。
- 以抑制为主的匿名化保住了多数类的机器学习可用性，却损失约一半的少数类召回率——这一代价未体现在聚合隐私评分中。
- 在普通硬件上转换吞吐量约为每秒 3×10^5 条记录，远低于 PCAP/DPI 画像生成本身的开销。

## Why it matters / what's new (EN)
The paper quantifies, with adversary simulation rather than syntactic metrics alone, how much re-identification risk an anonymised operator-side 5G/O-RAN data release (e.g. to a federated-learning aggregator or threat-intelligence exchange) actually carries, and finds that pseudonymising identifiers alone yields no measurable protection in its setup, a result the authors note is at odds with the assumption that hashing identifiers is sufficient for anonymisation.

## Why it matters / what's new (ZH)
论文不仅依赖语法指标，还通过攻击者仿真量化经匿名化的运营商侧 5G/O-RAN 数据发布（如面向联邦学习聚合方或威胁情报交换）实际承载的重新识别风险，并发现在其实验设置下仅对标识符做伪匿名化并无可测量的保护效果——作者指出，这与"对标识符做哈希即足以匿名化"的假设相悖。

## Images

None.
