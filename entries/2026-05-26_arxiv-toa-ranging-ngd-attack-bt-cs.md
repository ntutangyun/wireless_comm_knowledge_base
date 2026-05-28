---
id: 2026-05-26_arxiv-toa-ranging-ngd-attack-bt-cs
date_published: 2026-05-11
date_found: 2026-05-26
type: academic-paper
title_en: "Security Analysis of Time-of-Arrival Estimation via Cross-Correlation under Narrow-Band Conditions"
title_zh: "窄带条件下基于互相关的到达时间估计的安全性分析"
url: "https://arxiv.org/abs/2605.10632"
source_quality: abstract_only
topics: [Bluetooth, channel-sounding, ranging, distance-reduction-attack, ToA, security]
technology: bluetooth
topic_primary: bt-channel-sounding
topics_secondary: [bt-security]
novelty_score: 4
---

## Summary (EN)
Time-of-arrival (ToA) estimation via cross-correlation is the core building block of time-of-flight ranging, and securing it against distance-decreasing attacks is notoriously hard in narrow-band systems. This paper presents two new attacks that physically reshape the ranging signal to fool correlation-based ToA estimation, and analyzes them specifically in the context of Bluetooth Channel Sounding (CS) — a recent, narrow-band ranging system in Bluetooth 6.0. The headline result: the attack can pull the estimated distance down by up to 18 m against Bluetooth CS round-trip-time (RTT) ranging.

The two attacks differ from the classic Early-Detect/Late-Commit (ED/LC) family in a crucial way: they are completely symbol-agnostic. The first multiplies the ranging signal by a symbol-periodic waveform in the time domain; the second passes it through a negative group delay (NGD) filter. Because neither needs real-time symbol detection or adaptive compensation, the attacker does not have to decode or predict the victim's symbols on the fly — a major practicality advantage over ED/LC, which requires real-time detection. Narrow-band conditions are what make this possible: the limited bandwidth of systems like Bluetooth CS gives the defender little frequency diversity, so correlation-based ToA is easier to bias.

The authors validate the NGD approach end-to-end: they simulate the NGD circuit in LTspice and a ToA estimator in MATLAB, then build a prototype from commercial off-the-shelf (COTS) components to confirm feasibility. No countermeasures are proposed — the paper is an attack-surface analysis, establishing that even Bluetooth 6.0's new CS ranging is exposed to a practical, symbol-agnostic distance-reduction attack.

## Summary (ZH)
基于互相关的到达时间（ToA）估计是飞行时间测距的核心构件，而在窄带系统中保护它免受"缩短距离"攻击素来困难。本文提出两种新攻击，通过在物理层重塑测距信号来欺骗基于互相关的 ToA 估计，并专门在蓝牙信道探测（Channel Sounding, CS，蓝牙 6.0 中新引入的窄带测距系统）的语境下加以分析。核心结果是：该攻击可将蓝牙 CS 往返时间（RTT）测距的估计距离缩短最多 18 米。

这两种攻击与经典的"早检测/晚提交"（ED/LC）家族有一处关键不同：它们完全与符号无关（symbol-agnostic）。第一种在时域将测距信号乘以一个符号周期波形；第二种让信号通过一个负群时延（NGD）滤波器。由于两者都不需要实时符号检测或自适应补偿，攻击者无需在线解码或预测受害方的符号——相较需要实时检测的 ED/LC，这是显著的可行性优势。窄带条件正是其得以成立的原因：蓝牙 CS 这类系统带宽受限、频率分集很少，使得基于互相关的 ToA 更易被偏置。

作者对 NGD 方案做了端到端验证：在 LTspice 中仿真 NGD 电路、在 MATLAB 中仿真 ToA 估计器，并用商用现成（COTS）器件搭建原型确认可行性。文中未提出对策——这是一份攻击面分析，确立了即便是蓝牙 6.0 新引入的 CS 测距，也暴露于一种实用的、与符号无关的缩距攻击之下。

## Key technical points (EN)
- Two new **symbol-agnostic** distance-reduction attacks on correlation-based ToA: (1) time-domain multiplication by a **symbol-periodic waveform**; (2) a **negative group delay (NGD) filter**.
- Unlike **ED/LC**, neither attack needs real-time symbol detection or adaptive compensation — much more practical.
- Targets **Bluetooth Channel Sounding (CS)** RTT ranging specifically; narrow-band = low frequency diversity = easier to bias ToA.
- Validated via **LTspice** (NGD circuit) + **MATLAB** (ToA estimator) + a **COTS prototype**; up to **18 m** distance reduction against BT CS RTT.
- No countermeasures proposed — pure attack-surface analysis.

## Key technical points (ZH)
- 两种新的 **与符号无关** 的缩距攻击：(1) 时域乘以 **符号周期波形**；(2) **负群时延（NGD）滤波器**。
- 与 **ED/LC** 不同，两者都不需要实时符号检测或自适应补偿——可行性大幅提高。
- 专门针对 **蓝牙信道探测（CS）** RTT 测距；窄带 = 频率分集少 = ToA 更易被偏置。
- 经 **LTspice**（NGD 电路）+ **MATLAB**（ToA 估计器）+ **COTS 原型** 验证；对 BT CS RTT 缩距最多 **18 米**。
- 未提出对策——纯攻击面分析。

## Why it matters / what's new (EN)
This sharpens the security picture for Bluetooth Channel Sounding, which the KB already covers on the functional side (e.g. the connectionless-CS-via-PAwR ranging entry). CS is being positioned for security-sensitive uses — digital car keys, secure proximity, payment — where a distance-reduction attack is exactly the threat that matters. The contribution is a new, symbol-agnostic attack class that sidesteps the real-time-detection requirement of ED/LC, making the threat far more practical, and the authors confirm it with a COTS hardware prototype rather than simulation alone. It mirrors the secure-ranging arms race already documented for UWB (STS / distance bounding) and Wi-Fi FTM (802.11az/bk), now reaching Bluetooth's newest ranging primitive.

## Why it matters / what's new (ZH)
本文锐化了蓝牙信道探测的安全图景——KB 已在功能侧覆盖 CS（如基于 PAwR 的无连接 CS 测距条目）。CS 正被定位用于安全敏感场景——数字车钥匙、安全接近、支付——而缩距攻击恰是这些场景最关键的威胁。其贡献是一类新的、与符号无关的攻击，绕开了 ED/LC 的实时检测要求，使威胁的可行性大大提高；作者还用 COTS 硬件原型而非仅靠仿真加以确认。这与 KB 中已记录的 UWB（STS / 距离界定）与 Wi-Fi FTM（802.11az/bk）安全测距军备竞赛相呼应，如今延伸到蓝牙最新的测距原语。
