---
id: 2026-11-10_arxiv-integrated-identity-protection-semantic-communication-embodied-iot
date_published: 2026-11-04
date_found: 2026-11-10
technology: edge-ai
type: academic-paper
title_en: "Integrated identity protection for semantic communication in embodied IoT: one received waveform used for both task recovery and transmitter authentication or identity concealment"
title_zh: "具身物联网语义通信的一体化身份保护：同一接收波形既用于任务恢复，又用于发送端认证或身份隐匿"
url: "https://arxiv.org/abs/2611.06788"
source_quality: full
topics: [semantic-communication, task-oriented-communication, physical-layer-authentication, RF-fingerprint, embodied-IoT]
topic_primary: task-oriented-communication
topics_secondary: [edge-ai-networking]
novelty_score: 2
---

## Summary (EN)

In embodied IoT systems that use task-oriented semantic communication, trustworthy decisions need both reliable semantic content and a legitimate source. The paper treats each semantic-communication signal as a carrier of two things at once, task-relevant semantic information and the transmitter's physical (hardware) identity, and builds a dual-branch mechanism on that observation. In an authentication mode, semantic recovery and physical-layer source verification run in parallel on the same received observation. In a concealment mode, identity exposure is suppressed while semantic recovery quality is kept, to support anonymous sensing reports. Link computed over: simulated wireless links (numerically generated complex baseband I/Q signals with simulated transmitter hardware impairments and channel models); no over-the-air measurement. It is framed as a framework and two case studies.

## Summary (ZH)

在使用任务导向语义通信的具身物联网系统中，可信决策既需要可靠的语义内容，也需要合法的信号来源。论文把每个语义通信信号视为同时携带两类信息的载体：任务相关语义信息与发送端的物理（硬件）身份信息，并据此构建双分支机制。认证模式下，语义恢复与物理层信源验证在同一接收观测上并行进行；隐匿模式下，在保持语义恢复质量的同时抑制身份暴露，以支持匿名感知上报。所经链路：仿真无线链路（数值生成的复基带 I/Q 信号，含仿真的发射机硬件损伤与信道模型），无空口实测。论文定位为一个框架加两个案例研究。

## Key technical points (EN)

- Idea: integrate semantic recovery and source legitimacy on the same received observation (observation-, processing- and decision-level integration are analysed).
- Authentication mode: parallel semantic recovery and physical-layer source verification; the identity branch takes raw I/Q samples, receiver preprocessing results and channel estimates, and must separate content- and channel-induced variation from transmitter hardware traits.
- Concealment mode: suppress identity exposure while holding semantic quality.
- Case study 1 (impersonation, SNR 20 dB, five legitimate transmitters and one attacker): mean PSNR over eight displayed images 26.11 dB for a legitimate transmitter and 25.77 dB for the attacker; identity classification accuracy 99.67% on 600 held-out RF signals; on the full test set all 1,500 legitimate transmissions were accepted and all 300 attacker transmissions rejected.
- Case study 2 (identity inference): the eavesdropper's identity-recognition accuracy falls from 93.50% to 22.33% while mean PSNR over eight displayed images is 24.09 dB against 24.08 dB for the original signals.
- Source code link is given by the authors in the paper.

## Key technical points (ZH)

- 思路：在同一接收观测上整合语义恢复与信源合法性（分析了观测级、处理级与决策级整合的可行性）。
- 认证模式：语义恢复与物理层信源验证并行；身份分支的输入为原始 I/Q 采样、接收端预处理结果与信道估计，需将内容和信道引起的变化与发射机硬件特征区分开。
- 隐匿模式：在保持语义质量的同时抑制身份暴露。
- 案例一（冒充，信噪比 20 dB，5 个合法发送端与 1 个攻击者）：合法发送端8 张展示图像上的平均 PSNR 26.11 dB，攻击者 25.77 dB；在 600 个留出射频信号上身份分类准确率 99.67%；整个测试集中 1,500 次合法发送全部接受，300 次攻击发送全部拒绝。
- 案例二（身份推断）：窃听者身份识别准确率由 93.50% 降至 22.33%，8 张展示图像上的平均 PSNR 为 24.09 dB，原始信号为 24.08 dB。
- 作者在论文中给出了源代码链接。

## Why it matters / what's new (EN)

The link-side point is that the same received waveform serves the inference task and the legitimacy check, instead of adding a separate authentication step. It is a conceptual framework supported by two simulated case studies on numerically generated signals, so the near-perfect authentication figures should not be read as field performance.

## Why it matters / what's new (ZH)

链路侧的要点是：同一接收波形同时服务于推理任务和合法性校验，而不是另外增加认证步骤。这是一个概念框架，由两个基于数值生成信号的仿真案例支撑，因此近乎完美的认证数字不应视为现场性能。

## Images

*(No redistributable images for this entry.)*
