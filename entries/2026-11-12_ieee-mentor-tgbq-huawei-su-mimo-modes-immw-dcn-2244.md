---
id: 2026-11-12_ieee-mentor-tgbq-huawei-su-mimo-modes-immw-dcn-2244
date_published: 2026-11-11
date_found: 2026-11-12
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq: SU-MIMO Modes in IMMW — single-beam dual-polarized versus multi-beam PER comparison (DCN 11-26-2244r1, Huawei)"
title_zh: "IEEE 802.11 TGbq：IMMW 中的 SU-MIMO 模式——单波束双极化与多波束的 PER 对比（DCN 11-26-2244r1，华为）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2244&is_year=2026"
source_quality: full
topics: [802.11bq, IMMW, mmWave, SU-MIMO, polarization, PER]
topic_primary: mmwave-bq
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2244r1, "SU-MIMO Modes in IMMW" (Wee Kiat New and seven co-authors, Huawei; TGbq; 12 slides; r1 uploaded 11 November 2026, title-slide date 2026-11-03), starts from the TGbq decision (cited as the compendium of motions) that 11bq optionally supports SU-MIMO with two spatial streams, including two-stream transmission over two different polarizations, and from an earlier contribution (26/0922) on antenna configuration and polarization diversity. It states that the possible SU-MIMO modes and their performance in IMMW had not yet been investigated, and evaluates two: Mode 1, Single-Beam Dual-Polarized MIMO, where the beams of the two orthogonal polarizations are aligned toward a similar direction (so the training complexity may be reduced), and Mode 2, Multi-Beam MIMO, where the two streams may be steered toward different or independent directions, each beam single-polarized. The deck also recalls the SU-MIMO and hybrid-beamforming protocols of 11ay.

The simulation setup stated on the slides is 320 MHz bandwidth, the 11ay CR-DD channel model (LOS and NLOS), practical channel estimation, 11ad PN of -5 dB, ideal synchronization, GI of 100 ns, 4096-byte packets at MCS 7, 4 IMMW-LTFs, an MMSE receiver, XPD of 20 dB and an 8x2 antenna configuration; the multi-beam modes use the 11ay beamforming training procedure with suboptimal selection among 4 candidate beams. The slides report that Single-Beam Dual-Polarized MIMO gives robust PER for both 1 and 2 spatial streams in LOS and NLOS; Multi-Beam with orthogonal-polarization arrays is slightly better but potentially needs more complex training; Multi-Beam with same-polarization arrays has comparable 1-SS performance but significant 2-SS degradation under LOS, which the slides attribute to potential channel rank deficiency; and hybrid beamforming generally outperforms analog with a relatively small improvement, especially with orthogonal polarizations; for same-polarization arrays the summary gives about 1.1–2.8 dB for 1 SS. The last slide is a straw poll: add to the 11bq SFD that 11bq only supports Single-Beam Dual-Polarized MIMO mode and define a corresponding training procedure. The slide notes unanimous consensus in the Wednesday PM2 TGbq PHY session.

## Summary (ZH)

DCN 11-26-2244r1《SU-MIMO Modes in IMMW》（Wee Kiat New 等八位作者，华为；TGbq；共 12 页；r1 于 2026 年 11 月 11 日上传，标题页日期 2026-11-03）以 TGbq 的决定（引用自动议汇编）为起点：11bq 可选支持两空间流的 SU-MIMO，包括在两种不同极化上进行双流传输；并以此前关于天线配置与极化分集的文稿（26/0922）为基础。文稿称 IMMW 中可能的 SU-MIMO 模式及其性能尚未被研究，并评估了两种模式：模式 1 单波束双极化 MIMO，两个正交极化的波束对准相近方向（因此训练复杂度可能降低）；模式 2 多波束 MIMO，两个流可指向不同或相互独立的方向，每个波束为单极化。文稿还回顾了 11ay 的 SU-MIMO 与混合波束赋形协议。

幻灯片所述仿真设置为：带宽 320 MHz，11ay CR-DD 信道模型（LOS 与 NLOS），实际信道估计，11ad 相噪 -5 dB，理想同步，GI 100 ns，4096 字节分组、MCS 7，4 个 IMMW-LTF，MMSE 接收机，XPD 20 dB，8x2 天线配置；多波束模式采用 11ay 的波束赋形训练流程，并在 4 个候选波束中做次优选择。幻灯片报告：单波束双极化 MIMO 在 LOS 与 NLOS 下对 1 流与 2 流均有稳健的 PER；采用正交极化阵列的多波束略优，但训练流程可能更复杂；采用同极化阵列的多波束 1 流性能相当，但 LOS 下 2 流明显劣化，幻灯片将其归因于可能的信道秩亏；混合波束赋形总体优于模拟波束赋形但提升较小，正交极化时尤甚；对同极化阵列，总结页给出 1 流约 1.1–2.8 dB 增益。末页为 straw poll：在 11bq SFD 中加入“11bq 仅支持单波束双极化 MIMO 模式，并定义相应的训练流程”。幻灯片标注该提议在周三 PM2 的 TGbq PHY 会议上获得一致同意。

## Key technical points (EN)

- Mode 1, Single-Beam Dual-Polarized MIMO: two orthogonal polarizations aligned to similar direction; for one shared array the AWVs are the same, for separate arrays they are calibrated; stated to reduce training complexity.
- Mode 2, Multi-Beam MIMO: beams steered independently, each single-polarized; arrays either orthogonal-polarized or same-polarized.
- Setup: 320 MHz, 11ay CR-DD LOS/NLOS, MCS 7, 4096 B, 4 IMMW-LTF, MMSE, XPD 20 dB, 8x2; multi-beam uses 11ay training with 4 candidate beams.
- Results: Mode 1 robust for 1 and 2 SS; multi-beam orthogonal slightly better; multi-beam same-polarization degrades for 2 SS under LOS (attributed to possible rank deficiency); hybrid beamforming generally outperforms analog with a relatively small improvement, especially with orthogonal polarizations; for same-polarization arrays the summary gives about 1.1–2.8 dB for 1 SS.
- Straw poll: 11bq supports only Single-Beam Dual-Polarized MIMO mode and defines a corresponding training procedure; slide notes unanimous consensus in the TGbq PHY session.

## Key technical points (ZH)

- 模式 1 单波束双极化 MIMO：两个正交极化对准相近方向；共用一个阵列时 AWV 相同，使用分离阵列时 AWV 经校准；文稿称可降低训练复杂度。
- 模式 2 多波束 MIMO：波束独立指向，每个波束为单极化；阵列可为正交极化或同极化。
- 设置：320 MHz，11ay CR-DD LOS/NLOS，MCS 7，4096 字节，4 个 IMMW-LTF，MMSE，XPD 20 dB，8x2；多波束采用 11ay 训练流程与 4 个候选波束。
- 结果：模式 1 对 1 流与 2 流均稳健；正交极化多波束略优；同极化多波束在 LOS 下 2 流劣化（归因于可能的秩亏）；混合波束赋形总体优于模拟波束赋形但提升较小，正交极化时尤甚；对同极化阵列，总结页给出 1 流约 1.1–2.8 dB 增益。
- Straw poll：11bq 仅支持单波束双极化 MIMO 模式并定义相应训练流程；幻灯片注明在 TGbq PHY 会议上获一致同意。

## Why it matters / what's new (EN)

The deck narrows the SU-MIMO design space that the earlier TGbq feasibility input (26/0922) opened, by comparing two modes under one channel model and proposing that 11bq standardize only one of them. The comparison is a link-level PER study with the stated simulation assumptions (including suboptimal beam selection among 4 candidates for the multi-beam modes); the preference for the single-beam mode is argued on the balance of PER and training complexity as stated on its comparison slide. The KB covers other TGbq IMMW inputs, such as 2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest and 2026-09-14_ieee-mentor-tgbq-immw-phy-baseline-wave-digest.

## Why it matters / what's new (ZH)

本文稿在此前 TGbq 可行性输入（26/0922）所开启的 SU-MIMO 设计空间上做了收敛：在同一信道模型下比较两种模式，并提议 11bq 仅标准化其中一种。该对比为链路级 PER 研究，采用上述仿真假设（其中多波束模式在 4 个候选波束中做次优选择）；其对单波束模式的倾向，依据其对比页所述的 PER 与训练复杂度之间的平衡。KB 另有其他 TGbq IMMW 输入，例如 2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest 与 2026-09-14_ieee-mentor-tgbq-immw-phy-baseline-wave-digest。

## Images

None.
