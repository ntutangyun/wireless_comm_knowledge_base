---
id: 2026-11-04_arxiv-ble-dl-device-fingerprinting-iq-dataset
date_published: 2026-10-30
date_found: 2026-11-04
type: academic-paper
technology: bluetooth
title_en: "Dataset and Experimental Testbed for Deep Learning-Based Bluetooth Device Fingerprinting"
title_zh: "面向深度学习蓝牙设备指纹识别的数据集与实验测试平台"
url: "https://arxiv.org/abs/2611.00332"
source_quality: full
topics: [BLE, RF-fingerprinting, deep-learning, IQ-dataset, domain-generalization, device-identification]
topic_primary: bt-security
topics_secondary: [bt-le]
novelty_score: 2
---

## Summary (EN)

This arXiv paper (Haytham Albousayri and Bechir Hamdaoui, eess.SP with cs.CR cross-list, submitted 30 October 2026) is a 6-page paper accepted and presented at the Experimental Research on Networking (ERN 2026) workshop, part of the 17th International Conference on Network of the Future (NoF 2026). The abstract starts from the observation that deep learning models integrated into the physical layer of BLE networks, for tasks such as environment sensing, localization, radio frequency fingerprinting (RFFP) and signal denoising, often fail significantly when deployed in unseen environments such as different rooms, varying temperatures or altered carrier frequencies.

The paper makes two contributions: (i) a large-scale wireless BLE dataset of raw IQ transmissions from 31 distinct commercial devices, captured across diverse days, locations, environments, temperatures, receiver hardware and frequency channels; and (ii) a case study evaluating state-of-the-art techniques for domain-robust RFFP. The dataset was captured with two Ettus USRP B210 SDRs; the authors are at Oregon State University.

## Summary (ZH)

这篇 arXiv 论文（Haytham Albousayri 与 Bechir Hamdaoui，主分类 eess.SP，交叉列入 cs.CR，2026 年 10 月 30 日提交）共 6 页，已在第 17 届未来网络国际会议（NoF 2026）的 Experimental Research on Networking（ERN 2026）研讨会上录用并报告。摘要指出，集成在 BLE 网络物理层中的深度学习模型（用于环境感知、定位、射频指纹识别 RFFP 和信号去噪等任务）在未见过的环境（如不同房间、不同温度或不同载频）中部署时常常显著失效。

论文有两项贡献：（i）一个大规模 BLE 无线数据集，包含 31 台不同商用设备的原始 IQ 传输，采集跨越不同日期、地点、环境、温度、接收机硬件和频率信道；（ii）一项案例研究，评估面向域鲁棒 RFFP 的最新技术。数据集使用两台 Ettus USRP B210 软件无线电采集；作者来自俄勒冈州立大学。

## Key technical points (EN)

- **Dataset**: raw IQ transmissions from 31 distinct commercial BLE devices.
- **Capture diversity**: varied days, locations, environments, temperatures, receiver hardware and frequency channels.
- **Problem framed**: DL models for BLE sensing, localization, RFFP and denoising degrade in unseen rooms, temperatures or carrier frequencies.
- **Case study**: evaluation of state-of-the-art domain-robust RFFP techniques against unseen configurations.
- **Venue**: ERN 2026 workshop at NoF 2026 (6 pages).

## Key technical points (ZH)

- **数据集**：31 台不同商用 BLE 设备的原始 IQ 传输。
- **采集多样性**：不同日期、地点、环境、温度、接收机硬件与频率信道。
- **问题设定**：用于 BLE 感知、定位、RFFP 与去噪的 DL 模型在未见过的房间、温度或载频下性能下降。
- **案例研究**：针对未见配置，评估最新的域鲁棒 RFFP 技术。
- **发表**：NoF 2026 的 ERN 2026 研讨会（6 页）。

## Why it matters / what's new (EN)

The KB already carries several RF-fingerprinting papers; this one contributes a BLE-specific raw-IQ dataset whose capture conditions (days, temperatures, receivers, channels) are designed to test generalization rather than same-session accuracy. Case-study results are not summarised here.

## Why it matters / what's new (ZH)

知识库已收录若干射频指纹识别论文；本文提供了一个 BLE 专用的原始 IQ 数据集，其采集条件（日期、温度、接收机、信道）旨在检验泛化能力而非同一会话内的准确率。案例研究结果本条目未作归纳。
