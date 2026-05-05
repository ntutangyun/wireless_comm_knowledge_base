---
id: 2026-05-04_arxiv-csi-rff-microsignals-fingerprinting
date_published: 2026-02-26
date_found: 2026-05-04
type: academic-paper
title_en: "CSI-RFF — Leveraging Micro-Signals on CSI for RF Fingerprinting of Commodity WiFi (~99% accuracy with 20 measurements)"
title_zh: "CSI-RFF —— 利用 CSI 中的微信号对商用 WiFi 设备做射频指纹（20 次测量约 99% 准确率）"
url: "https://arxiv.org/abs/2602.22738"
source_quality: full
topics: [security, WiFi-sensing, PHY-layer]
topic_primary: security-privacy
topics_secondary: [sensing-csi]
novelty_score: 4
---

## Summary (EN)

Kong and Chen (arXiv 2602.22738, posted 26 February 2026) introduce **CSI-RFF**, an RF fingerprinting framework that authenticates WiFi devices by extracting **micro-signals embedded within CSI curves**. The key observation is that imperfections in the device's RF circuitry (oscillator offsets, PA non-linearity, IQ imbalance, etc.) leave structured but very small residual signatures inside the CSI a receiver normally just uses for equalisation — and those signatures are stable across WiFi 4 / 5 / 6 commodity hardware over more than a year of measurement.

The technical contribution is a **signal-space-based extraction technique** that separates the channel-dependent component of CSI (the wireless multipath that changes minute to minute) from the device-dependent micro-CSI component (the hardware-imperfection residual that stays put), under clear line-of-sight conditions. The result is a feature vector that's invariant to the channel but identifies the radio.

Validation is in a mobile-robot access-control scenario: with only **20 CSI measurements per fingerprint**, CSI-RFF achieves ~**99% attack-detection accuracy with zero false alarms**. The over-the-year stability is the headline result — most prior RF-fingerprinting work degrades within hours / days as ageing or temperature shifts the imperfections.

## Summary (ZH)

Kong 与 Chen（arXiv 2602.22738，2026 年 2 月 26 日提交）提出 **CSI-RFF**：通过提取 **CSI 曲线中嵌入的微信号**来认证 WiFi 设备的射频指纹框架。核心观察是：设备 RF 电路的不完美（振荡器偏置、功放非线性、IQ 失衡等）会在接收机只当作均衡输入的 CSI 中留下结构化但极小的残差签名 —— 而这些签名在 WiFi 4 / 5 / 6 商用硬件上跨一年以上时间保持稳定。

技术贡献是一个**基于信号空间的提取方法**：在视距条件下，把 CSI 中信道相关分量（分钟级变化的无线多径）与设备相关的微 CSI 分量（不变的硬件不完美残差）分离开。结果是一组对信道不变、但能识别出射频体本身的特征向量。

验证场景为移动机器人访问控制：**每个指纹仅需 20 条 CSI 测量**，CSI-RFF 实现约 **99% 攻击检测准确率、零误报**。跨一年的稳定性是最关键结论 —— 多数既有射频指纹工作在数小时 / 数天内即因老化或温度漂移而退化。

## Key technical points (EN)

- "Micro-CSI" = small, structured, hardware-induced residual inside CSI curves.
- Signal-space-based extraction separates channel from device imperfection (LoS).
- Stability validated over >1 year of measurements (most prior RF-FP doesn't survive this).
- Works on commodity WiFi 4 / 5 / 6 — no special radio.
- Practical recipe: 20 CSI measurements per device → ~99% / 0 FAR access control.
- Adversary model: spoofed device entering an access-controlled boundary.

## Key technical points (ZH)

- "微 CSI" = CSI 曲线内由硬件不完美引起的小而结构化的残差。
- 基于信号空间的提取方法（视距条件）：分离信道与设备分量。
- 稳定性在 >1 年测量上验证（多数既有射频指纹工作在更短时间内即失效）。
- 在商用 WiFi 4 / 5 / 6 上工作，无需专用射频。
- 实操配方：20 条 CSI / 设备 → 约 99% 准确率 / 0 误报的访问控制。
- 对抗模型：伪造设备试图进入受控边界。

## Why it matters / what's new (EN)

CSI is the same signal that every WiFi-sensing paper in this KB uses for activity / breathing / localisation — `arxiv-am-fm-wifi-foundation-model`, `arxiv-multiband-passive-sensing`, `arxiv-aiml-csi-feedback-compression`. CSI-RFF shows that the *same* CSI also carries a stable hardware fingerprint, which has two consequences. First, **WiFi sensing can dual-purpose as device identification** — useful for access control, but also a privacy concern: a passive sensor near a coffee shop AP can re-identify the same phone day to day even with MAC-randomisation. That dovetails with `arxiv-statefi-fsm-device-fingerprinting` (FSM-based fingerprinting through randomisation) and is a stronger signal because it's analog-circuit-level rather than driver-behaviour. Second, the RF-fingerprinting community has long had robustness problems; "stable across one year on commodity hardware" is the bar that makes the technique deployable in practice rather than a lab demo.

## Why it matters / what's new (ZH)

CSI 正是本 KB 中各种 WiFi 感知工作（`arxiv-am-fm-wifi-foundation-model`、`arxiv-multiband-passive-sensing`、`arxiv-aiml-csi-feedback-compression`）所用的同一信号。CSI-RFF 证明同样的 CSI 还携带稳定的硬件指纹，这有两层后果。其一，**WiFi 感知可双重用途作为设备识别** —— 有利于访问控制，但同时是隐私威胁：咖啡店 AP 附近的一个被动感知器即可在 MAC 随机化下日复一日地重识别同一台手机。这与 `arxiv-statefi-fsm-device-fingerprinting`（基于 FSM 的指纹）相互印证，且因为是模拟电路级别的特征而非驱动行为，威胁更强。其二，射频指纹社区长期面临稳定性问题；"商用硬件上跨一年稳定"是把该技术从实验室 Demo 推到可落地部署的门槛。
