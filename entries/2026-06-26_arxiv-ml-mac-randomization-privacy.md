---
id: 2026-06-26_arxiv-ml-mac-randomization-privacy
date_published: 2026-06-24
date_found: 2026-06-26
type: academic-paper
title_en: "Can Machine Learning Break Wi-Fi Privacy? A Study on MAC Address Randomization"
title_zh: "机器学习能攻破 Wi-Fi 隐私吗？面向 MAC 地址随机化的去匿名研究"
url: "https://arxiv.org/abs/2606.25788"
technology: wifi
source_quality: full
topics: [802.11, security, privacy, MAC-randomization, device-fingerprinting]
topic_primary: security-privacy
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)
This paper from the UPF Wireless Networking group (Puig, Michaelides, Pintor, Bellalta, Wilhelmi; submitted 24 Jun 2026) shows that MAC address randomization — the standard privacy defence in modern Wi-Fi clients — can be largely defeated by passive, unsupervised machine-learning fingerprinting of Probe Request frames. The attacker model is a passive eavesdropper who never associates: it only collects the unencrypted probe requests devices broadcast during network discovery and tries to re-link the rotating randomized MACs back to the same physical device.

The core technical contribution is **bitwise decomposition of the 16-bit HT (High Throughput) capabilities field** into its individual subfields (LDPC, channel width, power-save mode, etc.) instead of treating it as one opaque hex value — this alone materially improves separability. The fingerprint combines three feature families: static information elements (decomposed HT capabilities, vendor OUI, SSID list), the Inter-Probe Frame Arrival Time (IFAT) computed within bursts of frames <1 s apart, and a Simulated RSSI (SRSSI) modelled with log-normal shadowing and distance-dependent variance. Three unsupervised clustering algorithms — K-Means, DBSCAN, OPTICS — are compared, with the Hungarian algorithm mapping unlabeled clusters to ground-truth devices only for scoring.

On a dataset of **22 devices across 6 manufacturers** (Apple, Samsung, Xiaomi, Huawei, Google, OnePlus), **DBSCAN with decomposed HT capabilities plus three-sniffer RSSI trilateration reaches 89.6% global accuracy**. Even with no spatial information at all (header + timing only), accuracy stays around 88%. The authors are candid about the failure mode: severe class imbalance (devices emitting only 5–7 probe frames) causes minority devices to be absorbed into dominant clusters and score 0%, and the SRSSI coefficients are fitted to a single 15×10 m indoor hall, so spatial generalization is unproven. The conclusion is that current MAC-randomization implementations are insufficient against combined-feature ML fingerprinting.

## Summary (ZH)
本文来自 UPF 无线网络组（Puig、Michaelides、Pintor、Bellalta、Wilhelmi，2026 年 6 月 24 日提交），证明现代 Wi-Fi 终端的标准隐私防护——MAC 地址随机化——可被基于探测请求帧（Probe Request）的被动、无监督机器学习指纹大幅攻破。攻击模型为从不关联的被动窃听者：仅收集设备在网络发现阶段广播的未加密探测请求，尝试将不断轮换的随机化 MAC 重新关联回同一台物理设备。

核心技术贡献是将 16 位 HT（高吞吐）能力字段**按位拆解**为各子字段（LDPC、信道带宽、省电模式等），而非作为一个不透明的十六进制值处理——仅此一项即显著提升可分性。指纹融合三类特征：静态信息元素（拆解后的 HT 能力、厂商 OUI、SSID 列表）、在间隔 <1 秒的帧突发内计算的探测帧到达间隔（IFAT），以及用对数正态阴影衰落与随距离变化的方差建模的模拟 RSSI（SRSSI）。比较三种无监督聚类算法——K-Means、DBSCAN、OPTICS，仅在评分时用匈牙利算法将无标签簇映射到真实设备。

在 **6 个厂商共 22 台设备**（Apple、Samsung、Xiaomi、Huawei、Google、OnePlus）的数据集上，**DBSCAN 配合拆解 HT 能力与三嗅探器 RSSI 三角定位达到 89.6% 全局准确率**；即便完全没有空间信息（仅头部+时序），准确率仍约 88%。作者也坦诚失效模式：严重类别不均衡（仅发出 5–7 帧的设备）使少数设备被吸收进主导簇、准确率为 0%；且 SRSSI 系数拟合于单一 15×10 m 室内大厅，空间泛化性未验证。结论是：当前 MAC 随机化实现不足以抵御组合特征的 ML 指纹。

## Key technical points (EN)
- **Bitwise HT-capabilities decomposition** is the headline novelty — splitting the 16-bit field into subfields beats treating it as a single hex token for clustering.
- Three feature families fused: static IEs (HT subfields, OUI, SSID), Inter-Probe Frame Arrival Time (IFAT) within <1 s bursts, and Simulated RSSI (log-normal shadowing, distance-dependent variance).
- Three eavesdropping scenarios: (1) header+timing only, (2) single sniffer / one RSSI, (3) three sniffers in triangular topology (trilateration).
- Unsupervised pipeline (K-Means / DBSCAN / OPTICS); Hungarian assignment used only for scoring — attacker assumed to have no labels.
- 22 devices, 6 manufacturers; per-device frame counts 2–1,236 (severe imbalance). Best: **DBSCAN + decomposed HT + 3×RSSI = 89.6%**; no-RSSI ~88%.
- Honest limitations: minority devices (5–7 frames) score 0%; IFAT adds noise to density-based clustering; SRSSI fitted to one room.

## Key technical points (ZH)
- **HT 能力字段按位拆解**为核心创新——将 16 位字段拆为子字段，聚类效果优于单一十六进制 token。
- 融合三类特征：静态 IE（HT 子字段、OUI、SSID）、<1 秒突发内的探测帧到达间隔（IFAT）、模拟 RSSI（对数正态阴影、随距离方差）。
- 三种窃听场景：(1) 仅头部+时序；(2) 单嗅探器/单 RSSI；(3) 三嗅探器三角拓扑（三角定位）。
- 无监督流程（K-Means / DBSCAN / OPTICS）；匈牙利算法仅用于评分，攻击者假定无标签。
- 22 台设备、6 个厂商；单设备帧数 2–1236（严重不均衡）。最佳：**DBSCAN + 拆解 HT + 3×RSSI = 89.6%**；无 RSSI 约 88%。
- 诚实的局限：少数设备（5–7 帧）准确率 0%；IFAT 给密度聚类引入噪声；SRSSI 仅拟合单一房间。

## Why it matters / what's new (EN)
This sharpens the security-privacy bin's de-anonymization thread with a concrete, reproducible attack and a new feature-engineering trick (HT-subfield decomposition) that prior probe-fingerprinting work — which mostly exploited single feature categories in isolation — did not use. It is also a direct empirical rebuttal to the assumption that MAC randomization alone protects unassociated clients, and it pairs naturally with the standards-side privacy work in the bin (the EPPKE / TGbi privacy thread and the WPA3-SAE formal analysis). The combined-feature synergy (IEs + timing + spatial) is the part most relevant to designing a real countermeasure: defending against any one signal is insufficient if the three together still reach ~90%.

## Why it matters / what's new (ZH)
本文以一个具体、可复现的攻击与新的特征工程技巧（HT 子字段拆解）强化了 security-privacy 分类中的去匿名线索——以往探测指纹工作多孤立利用单一特征类别，未采用此法。它也直接以实证反驳"仅靠 MAC 随机化即可保护未关联终端"的假设，并与该分类中标准侧隐私工作（EPPKE / TGbi 隐私线索、WPA3-SAE 形式化分析）自然呼应。组合特征的协同效应（IE+时序+空间）对设计真正的对抗措施最具参考价值：若三者合并仍达约 90%，仅防御任一信号都不够。
