---
id: 2026-05-12_ieee-mentor-tgbp-antwerp-digest
date_published: 2026-05-11
date_found: 2026-05-12
type: ieee-document
title_en: "IEEE 802.11 TGbp Mentor digest — Antwerp interim May 2026 (AMP backscatter demo, frames, privacy)"
title_zh: "IEEE 802.11 TGbp Mentor 摘要——Antwerp 期中会议 2026-05（AMP 反向散射演示、帧、隐私）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=0bp
source_quality: snippet_only
topics: [802.11bp, AMP, ambient-power, backscatter, IoT, S1G-coexistence, energizer]
topic_primary: amp-iot
topics_secondary: [energy-power-save, security-privacy]
novelty_score: 1
---

## Summary (EN)

TGbp (Ambient Power IoT) is on schedule for an initial WG ballot on D1.0 out of the May 2026 session — the deadline the March readout flagged. Antwerp output is heavy on AMP control-plane primitives: AMP frames structure, AMP energizer control, AMP-S1G coexistence (IFS rules), AMP privacy considerations, scrambling-seed indication, and the 40 MHz protection mechanism for bi-static backscatter that has been TGbp's most-revised single thread (DCN 79). The week's most concrete signal is **DCN 11-26-1013 "Demo of 2.4 GHz AMP mono-static backscattering"** from Rui Cao (NXP) — the first AMP demo entry pointing at actual silicon producing the right waveforms, not just protocol text. Companion PDT contributions (DCN 959 Excitation Field, 732 PPDU encoding) continue to refine the PHY description.

## Summary (ZH)

TGbp（环境能量供电 IoT）按 3 月综述所示节奏推进，目标在 2026-05 会议结束后启动 D1.0 初次 WG 投票。Antwerp 输出大量集中在 AMP 控制面原语：AMP 帧结构、AMP 激励控制、AMP-S1G 共存（IFS 规则）、AMP 隐私考量、扰码种子指示，以及 40 MHz 双站反向散射保护机制 —— 后者是 TGbp 修订次数最多的单一线索（DCN 79）。本周最具体的信号是 **DCN 11-26-1013「2.4 GHz AMP 单站反向散射演示」**，由 Rui Cao（NXP）提交 —— 这是首份指向实际硅片产生正确波形（而不只是协议文本）的 AMP 演示条目。配套 PDT 贡献（DCN 959 激励场、732 PPDU 编码）继续细化 PHY 描述。

## Key technical points (EN)

- **DCN 11-26-1017 · TGbp** — tgbp-snapshot-may-2026. Bo Sun (Sanechips).
- **DCN 11-26-1013 · TGbp** — Demo of 2.4 GHz AMP mono-static backscattering. Rui Cao (NXP). **First silicon demo entry.**
- **DCN 11-26-965 · TGbp** — Scrambling Seed Indication for AMP Communication. Lumin Liu (Huawei).
- **DCN 11-26-963 · TGbp** — AMP S1G Coexistence and IFS. Rojan Chitrakar (Huawei).
- **DCN 11-26-962 · TGbp** — AMP privacy considerations. Rojan Chitrakar.
- **DCN 11-26-961 · TGbp** — AMP Frames - follow up. Rojan Chitrakar.
- **DCN 11-26-960 · TGbp** — AMP Energizer Control. Rojan Chitrakar.
- **DCN 11-26-959r1 · TGbp** — PDT for Excitation Field. Rui Cao (NXP).
- **DCN 11-26-732r1 · TGbp** — PDT 40.3.4 overview of the PPDU encoding process. Alice Jialing Li Chen (Qualcomm).
- **DCN 11-26-79 · TGbp** — Protection Mechanisms for Bi-static Backscatter in 40MHz channel (Jan rev, referenced).

## Key technical points (ZH)

- **DCN 11-26-1017 · TGbp** —— tgbp 5 月快照。Bo Sun（Sanechips）。
- **DCN 11-26-1013 · TGbp** —— 2.4 GHz AMP 单站反向散射演示。Rui Cao（NXP）。**首份硅片演示条目。**
- **DCN 11-26-965 · TGbp** —— AMP 通信扰码种子指示。Lumin Liu（Huawei）。
- **DCN 11-26-963 · TGbp** —— AMP 与 S1G 共存及 IFS。Rojan Chitrakar（Huawei）。
- **DCN 11-26-962 · TGbp** —— AMP 隐私考量。Rojan Chitrakar。
- **DCN 11-26-961 · TGbp** —— AMP 帧 - 后续。Rojan Chitrakar。
- **DCN 11-26-960 · TGbp** —— AMP 激励控制。Rojan Chitrakar。
- **DCN 11-26-959r1 · TGbp** —— 激励场 PDT。Rui Cao（NXP）。
- **DCN 11-26-732r1 · TGbp** —— PPDU 编码 PDT 40.3.4。Alice Jialing Li Chen（Qualcomm）。
- **DCN 11-26-79 · TGbp** —— 40 MHz 信道双站反向散射保护机制（1 月修订，被引用）。

## Why it matters / what's new (EN)

The NXP demo entry is the contribution worth flagging — TGbp has had plenty of text contributions but very few that point at running silicon, and a 2.4 GHz mono-static backscatter demo with actual waveform output is exactly the kind of validation gate D1.0 needs before WG ballot. AMP-S1G IFS coexistence (DCN 963) is the most consequential standards-side question on this docket — sub-1 GHz IoT (802.11ah) and AMP-IoT will share spectrum in many deployments and the IFS rules determine which gets priority. The privacy contribution (DCN 962) is the first AMP-privacy text and connects to the security-privacy bin (DCN 962 deserves a cross-link to the TGbi work on MAC randomisation).

## Why it matters / what's new (ZH)

NXP 演示条目是值得点出的贡献 —— TGbp 文本贡献很多，但指向实际硅片运行的极少，而 2.4 GHz 单站反向散射演示并给出实际波形输出，恰是 D1.0 WG 投票前所需的验证关口。AMP-S1G IFS 共存（DCN 963）是本议程上最具影响的标准侧问题 —— sub-1 GHz IoT（802.11ah）与 AMP-IoT 在许多部署中将共享频谱，IFS 规则决定谁优先。隐私贡献（DCN 962）是首份 AMP 隐私文本，与 security-privacy 桶相连（DCN 962 值得与 TGbi 的 MAC 随机化工作做交叉引用）。
