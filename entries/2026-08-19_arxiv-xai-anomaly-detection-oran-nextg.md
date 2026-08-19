---
id: 2026-08-19_arxiv-xai-anomaly-detection-oran-nextg
date_published: 2026-08-14
date_found: 2026-08-19
type: academic-paper
technology: cellular
title_en: "Explainability Boosted Anomaly Detection Framework for O-RAN based NextG Networks"
title_zh: "面向 O-RAN 下一代网络的可解释性增强异常检测框架"
url: "https://arxiv.org/abs/2608.14826"
source_quality: full
topics: [O-RAN, anomaly-detection, explainable-AI, SHAP, LIME, KPM, xApp, FlexRIC, signaling-flood, feature-reduction]
topic_primary: cellular-security
topics_secondary: [open-ran, cellular-ai]
novelty_score: 2
---

## Summary (EN)
Nurullah Aksu, Ali Fuat Sahin and Semiha Tedik Başaran (Istanbul Technical University and TUBITAK BILGEM Communications and Signal Processing Research Lab; arXiv 14 Aug 2026, **accepted at IEEE WCNC 2026**) build an O-RAN intrusion/anomaly detector on a real testbed and use post-hoc explainability not just to interpret it, but to shrink the feature set the detector needs. The testbed is an OpenAirInterface 5G core + gNodeB with a **FlexRIC near-RT RIC** in band n78 (3.6 GHz, 106 PRBs, 30 kHz SCS); a custom **xApp** collects 23 standardized KPMs per UE over the E2 interface. Four signaling-flood attacks (SYN, UDP, TCP, ICMP) are generated with hping3/iperf3 against five emulated benign application types. The resulting dataset is ~10 hours of live measurements — 103 traces, 70 features (69 KPMs across 3 UEs plus a binary attack label) spanning PDCP/RLC volumes, throughput, buffer occupancy, PRB allocation, HARQ efficiency, MCS indices, and signal/SNR.

Five detectors are compared — Decision Tree, Random Forest, K-Nearest Neighbor, Isolation Forest and an LSTM classifier. **Random Forest** gives the best test accuracy (97.01%) and F1 (0.951) at 24.7 µs inference; the Decision Tree is the fastest at 0.91 µs, comfortably inside near-RT budgets. The headline contribution is the explainability step: **LIME and SHAP** identify the four most decisive KPMs — the attacker UE's uplink throughput and PDCP volume, its buffer size, and downlink PRB allocation — and retraining on just those four reduces dataset/feature complexity by roughly **80% with no loss of detection accuracy**. The attributions also expose protocol-specific attack signatures (e.g. UDP floods vs. error-checking TCP/ICMP behavior). The authors position this as a path toward interpretable, resource-light security xApps for 6G-and-beyond RANs, and flag the usual limits: supervised-only, no zero-day/unsupervised handling, and no full real-time deployment-overhead analysis yet; dataset and code are promised on GitHub.

## Summary (ZH)
Nurullah Aksu、Ali Fuat Sahin 与 Semiha Tedik Başaran（伊斯坦布尔理工大学与 TUBITAK BILGEM 通信与信号处理实验室；2026 年 8 月 14 日 arXiv，**已被 IEEE WCNC 2026 接收**）在真实测试床上构建 O-RAN 入侵/异常检测器，并用事后可解释性不仅解释模型，更用来压缩检测所需的特征集。测试床为 OpenAirInterface 5G 核心网 + gNodeB，配 **FlexRIC 近实时 RIC**，工作于 n78（3.6 GHz、106 PRB、30 kHz SCS）；自研 **xApp** 经 E2 接口每 UE 采集 23 个标准 KPM。用 hping3/iperf3 生成四类信令泛洪攻击（SYN、UDP、TCP、ICMP），对抗五类模拟正常应用。所得数据集为约 10 小时实测——103 条轨迹、70 个特征（3 个 UE 共 69 个 KPM 加一个二元攻击标签），涵盖 PDCP/RLC 量、吞吐、缓冲占用、PRB 分配、HARQ 效率、MCS 指数与信号/SNR。

对比五种检测器——决策树、随机森林、KNN、孤立森林与 LSTM 分类器。**随机森林**测试准确率最高（97.01%）、F1 0.951，推理 24.7 µs；决策树最快 0.91 µs，稳落近实时预算内。核心贡献在可解释性环节：**LIME 与 SHAP** 识别出四个最具决定性的 KPM——攻击 UE 的上行吞吐与 PDCP 量、其缓冲大小、下行 PRB 分配——仅用这四个特征重训，数据/特征复杂度约降 **80% 且检测准确率无损**。归因还揭示协议特有攻击特征（如 UDP 泛洪 vs TCP/ICMP 的错误校验行为）。作者将其定位为面向 6G 及以后 RAN 的可解释、轻资源安全 xApp 路径，并指出常见局限：仅监督、无零日/无监督处理、尚缺完整实时部署开销分析；数据集与代码承诺开源于 GitHub。

## Key technical points (EN)
- Testbed: OAI 5G core + gNB, FlexRIC near-RT RIC, n78 3.6 GHz / 106 PRB / 30 kHz SCS, USRP B200mini; custom xApp pulls 23 KPMs/UE over E2.
- Dataset: ~10 h live capture, 103 traces, 70 features (69 KPMs over 3 UEs + binary label); PDCP/RLC volume, throughput, buffer, PRB, HARQ, MCS, SNR.
- Attacks: SYN/UDP/TCP/ICMP signaling floods (hping3/iperf3); benign = 5 app types; malicious flows 15–45 s, benign 85–125 s; 0.5–3.5 Mbps.
- Models: Decision Tree, Random Forest, KNN, Isolation Forest, LSTM. RF best (97.01% acc, F1 0.951, 24.7 µs); DT fastest (0.91 µs).
- XAI feature reduction: LIME + SHAP → top-4 KPMs (attacker uplink throughput, PDCP volume, buffer size, downlink PRB) → ~80% complexity cut, accuracy preserved.
- Interpretability surfaces protocol-specific attack signatures (UDP vs error-check attacks).
- Limits: supervised-only, no zero-day/unsupervised, real-time overhead not fully analyzed; dataset/code promised on GitHub.

## Key technical points (ZH)
- 测试床：OAI 5G 核心 + gNB、FlexRIC 近实时 RIC、n78 3.6 GHz / 106 PRB / 30 kHz SCS、USRP B200mini；xApp 经 E2 每 UE 取 23 个 KPM。
- 数据集：约 10 小时实测、103 轨迹、70 特征（3 UE 共 69 KPM + 二元标签）；PDCP/RLC 量、吞吐、缓冲、PRB、HARQ、MCS、SNR。
- 攻击：SYN/UDP/TCP/ICMP 信令泛洪（hping3/iperf3）；正常为 5 类应用；恶意流 15–45 s，正常 85–125 s；0.5–3.5 Mbps。
- 模型：决策树、随机森林、KNN、孤立森林、LSTM。RF 最佳（97.01% 准确、F1 0.951、24.7 µs）；DT 最快（0.91 µs）。
- XAI 特征缩减：LIME + SHAP → 前 4 个 KPM（攻击上行吞吐、PDCP 量、缓冲大小、下行 PRB）→ 复杂度约降 80%、准确率保持。
- 可解释性揭示协议特有攻击特征（UDP vs 错误校验类攻击）。
- 局限：仅监督、无零日/无监督、实时开销未充分分析；数据集/代码承诺 GitHub 开源。

## Why it matters / what's new (EN)
The KB already has O-RAN anomaly-detection work that leans on LLMs/VLMs across interfaces (2026-06-05_arxiv-dast-vlm-llm-oran-cross-interface-anomaly, 2026-07-07_arxiv-ranpilot-proactive-oran-ai-adaptation), but this entry is the practical counterpoint: a classical-ML detector on a real FlexRIC/E2 KPM stream, where the explainability layer earns its keep operationally by cutting the feature set ~80% so a security xApp can run within a near-RT RIC's tight compute and latency budget (sub-microsecond DT inference). It pairs naturally with the same-week 2026-08-17_arxiv-energy-cost-mitigating-ai-attacks-cellular finding that defense compute cost is the overlooked axis — feature reduction is one concrete lever on that cost. Caveats are standard for a WCNC-scale study (small labeled dataset, supervised, four flood types), but the E2-KPM feature ranking is a reusable, deployment-oriented result.

## Why it matters / what's new (ZH)
知识库已有依赖 LLM/VLM 的跨接口 O-RAN 异常检测（2026-06-05 DAST、2026-07-07 RANPilot），而本条目是务实的对照面：在真实 FlexRIC/E2 KPM 流上的经典 ML 检测器，其可解释性层在运行层面真正带来价值——将特征集缩减约 80%，使安全 xApp 能在近实时 RIC 紧张的算力与时延预算内运行（亚微秒级 DT 推理）。它与同周的 2026-08-17 能耗代价条目自然呼应（防御算力开销是被忽视的一维）——特征缩减正是控制该开销的一个具体杠杆。局限属 WCNC 规模研究之常态（小标注集、监督式、四类泛洪），但基于 E2-KPM 的特征排序是可复用、面向部署的结果。
