---
id: 2026-11-05_ieee-mentor-tgbq-immw-transmission-failure-handling-narrow-bandwidth-beam-establishment-immw-ltf-digest
date_published: 2026-11-04
date_found: 2026-11-05
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — 2026-11-05 (IMMW: transmission failure handling in OPPO's DCN 1374r2, narrower receive bandwidth for beam establishment in LG's DCN 1301r1, IMMW-LTF with two spatial streams in LG's DCN 1631r1)"
title_zh: "IEEE 802.11 TGbq Mentor 当日摘要 — 2026-11-05（IMMW：OPPO DCN 1374r2 的传输失败处理、LG DCN 1301r1 的波束建立窄带接收、LG DCN 1631r1 的双空间流 IMMW-LTF）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=1374"
source_quality: full
topics: [802.11bq, TGbq, IMMW, mmWave, beam establishment, IMMW-LTF, retry, service period]
topic_primary: mmwave-bq
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)

Three TGbq slide decks on integrated mmWave (IMMW) operation had new revisions on 4 November 2026. DCN 11-26-1374r2, "Transmission Failure Handling" (Chaoming Luo, OPPO, dated 2026-11-04), proposes limited durations for the ICF/ICR exchange and for succeeding frame exchanges in a service period (SP), after which the SP is terminated. DCN 11-26-1301r1, "Narrower Channel Width Operation for Beam Establishment" (Eunsung Park, LG Electronics, slide date 2026-07-10), discusses a receiver operating on a channel narrower than the NDP bandwidth during beam establishment. DCN 11-26-1631r1, "Considerations on IMMW-LTF" (Eunsung Park, LG Electronics, slide date 2026-09-10), covers IMMW-LTF for two spatial streams and how the P matrix is applied.

Each deck ends with straw polls for inclusion in the TGbq Specification Framework Document (SFD).

## Summary (ZH)

2026 年 11 月 4 日，三份关于集成毫米波（IMMW）的 TGbq 幻灯片有新版本。DCN 11-26-1374r2《Transmission Failure Handling》（Chaoming Luo，OPPO，日期 2026-11-04）建议为 ICF/ICR 交互及服务期（SP）内后续帧交互设置有限时长，超时则终止 SP。DCN 11-26-1301r1《Narrower Channel Width Operation for Beam Establishment》（Eunsung Park，LG Electronics，幻灯片日期 2026-07-10）讨论波束建立期间接收端工作带宽窄于 NDP 带宽的情形。DCN 11-26-1631r1《Considerations on IMMW-LTF》（Eunsung Park，LG Electronics，幻灯片日期 2026-09-10）讨论双空间流 IMMW-LTF 及 P 矩阵的应用方式。

每份文稿均以拟纳入 TGbq 规范框架文档（SFD）的投票（straw poll）收尾。

## Key technical points (EN)

- **DCN 11-26-1374r2 · TGbq** — Transmission Failure Handling. Chaoming Luo, Liuming Lu, Huixuan Zhou, LiangXiao Xin (OPPO). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1374&is_year=2026). The deck lists causes of failure on an IMMW link (busy medium, interference from other radio technologies such as radar and cellular, interference from other STAs such as P2P and OBSS, obstacles in the line-of-sight path, change of location) and states that for the last two causes retrying, or retrying at lower MCS, is unlikely to help, since the STAs most likely need to change beams. It also notes the two ends can have different views of medium busy/idle, so a receiver cannot tell a busy-medium non-transmission from a blockage. Proposal: after an SP starts, the ICF/ICR exchange must complete within a limited duration; after a successful ICF/ICR exchange, Data/BA must complete within a limited duration; after a successful Data/Ack, a succeeding Data/BA exchange must complete within a limited duration. On expiry the SP is terminated early (if scheduled for that initiator and single responder), with an alternative of starting a beam establishment procedure. Straw Poll 1 and 2 propose SFD text; the value is "predefined or negotiated TBD" and should be larger than the initial ICF exception timer.
- **DCN 11-26-1301r1 · TGbq** — Narrower Channel Width Operation for Beam Establishment. Eunsung Park and co-authors (LG Electronics). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1301&is_year=2026). The deck recalls the 320 MHz M-preamble structure (160 MHz duplication for M-STF, 80 MHz duplication for M-LTF/SIG), so a receiver can operate at e.g. 160 MHz when the PPDU is 320 or 640 MHz. Beam establishment may need M*N NDPs, so narrower operation is presented as a power saving approach for non-AP STAs. It discusses beam squint: beam angle deviation is described as almost negligible in IMMW bandwidths, and TX beamforming gain degradation as possibly small, with an example at 65 GHz centre frequency, 60 degrees beam angle, 256 array antennas and -240 MHz offset giving about 2.5 dB degradation. It suggests the receiver may report its operating channel width and/or centre frequency during negotiation/scheduling or the report phase; how to use it is called implementation specific.
- **DCN 11-26-1631r1 · TGbq** — Considerations on IMMW-LTF. Eunsung Park and co-authors (LG Electronics). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1631&is_year=2026). IMMW-LTF for single-stream SU PPDU is four OFDM symbols with GI per symbol. Proposal: for 2 SS MIMO using different polarizations, IMMW-LTF also has four OFDM symbols with GI per symbol; for 1 SS, the four elements of the first row of P4x4 are applied to the four symbols in turn; for 2 SS, Option 1 applies only the first row in each stream, Option 2 applies the first and second rows to streams 1 and 2 (the authors prefer Option 2); pilot tones use the first row regardless of stream. Straw polls ask for SFD inclusion.

## Key technical points (ZH)

- **DCN 11-26-1374r2 · TGbq** — Transmission Failure Handling。Chaoming Luo、Liuming Lu、Huixuan Zhou、LiangXiao Xin（OPPO）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1374&is_year=2026)。文稿列出 IMMW 链路失败原因（介质忙、雷达与蜂窝等其他无线技术的干扰、P2P 与 OBSS 等其他 STA 的干扰、视距路径上的障碍物、位置变化），并指出对后两种原因，重传或降低 MCS 重传不太可能奏效，因为 STA 多半需要更换波束。文稿还指出收发两端对介质忙闲的判断可能不同，接收端无法区分因介质忙而未发送与信号被遮挡。建议：SP 开始后 ICF/ICR 交互须在有限时长内完成；ICF/ICR 成功后 Data/BA 须在有限时长内完成；Data/Ack 成功后后续 Data/BA 交互须在有限时长内完成；超时则提前终止 SP（SP 是为该发起方和单一响应方安排时），替代方案是启动波束建立流程。Straw Poll 1、2 提出 SFD 文本；时长取值为“预定义或协商，待定”，且应大于 ICF 异常定时器初值。
- **DCN 11-26-1301r1 · TGbq** — Narrower Channel Width Operation for Beam Establishment。Eunsung Park 等（LG Electronics）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1301&is_year=2026)。文稿回顾 320 MHz M-preamble 结构（M-STF 为 160 MHz 复制，M-LTF/SIG 为 80 MHz 复制），因此当 PPDU 为 320 或 640 MHz 时，接收端可工作在如 160 MHz。波束建立可能需要 M*N 个 NDP，因此窄带工作被作为非 AP STA 的省电手段。文稿讨论波束偏斜：波束角度偏差在 IMMW 带宽内几乎可忽略，发射波束赋形增益劣化可能较小；示例为中心频率 65 GHz、波束角 60 度、256 阵元、偏移 -240 MHz 时约劣化 2.5 dB。文稿建议接收端可在协商/调度阶段或报告阶段上报其工作带宽和/或中心频率，具体用法称属实现问题。
- **DCN 11-26-1631r1 · TGbq** — Considerations on IMMW-LTF。Eunsung Park 等（LG Electronics）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1631&is_year=2026)。单流 SU PPDU 的 IMMW-LTF 为每符号带 GI 的四个 OFDM 符号。建议：采用不同极化的 2 SS MIMO，其 IMMW-LTF 同样为每符号带 GI 的四个 OFDM 符号；1 SS 时将 P4x4 第一行的四个元素依次作用于四个符号；2 SS 时方案 1 对每个流仅用第一行，方案 2 对流 1、流 2 分别用第一、第二行（作者倾向方案 2）；导频无论流序号均用第一行。Straw poll 请求纳入 SFD。

## Why it matters / what's new (EN)

These are discussion decks with straw polls for the TGbq SFD, not draft text. The OPPO deck addresses what happens when exchanges fail in a scheduled SP; the two LG decks address receiver bandwidth during beam establishment and the IMMW-LTF structure. Note the LG decks carry July and September slide dates and were re-uploaded as r1 on 4 November.

They follow the TGbq IMMW PHY and beam-establishment threads in 2026-09-14_ieee-mentor-tgbq-immw-phy-baseline-wave-digest and 2026-11-03_ieee-mentor-tgbq-bft-before-roaming-and-cca-in-advance-for-beam-establishment.

## Why it matters / what's new (ZH)

这些是带 TGbq SFD straw poll 的讨论性文稿，而非草案文本。OPPO 的文稿处理已调度 SP 中交互失败后的行为；LG 的两份文稿分别处理波束建立期间的接收带宽与 IMMW-LTF 结构。注意 LG 文稿的幻灯片日期为 7 月和 9 月，并在 11 月 4 日以 r1 重新上传。

它们延续了 2026-09-14_ieee-mentor-tgbq-immw-phy-baseline-wave-digest 与 2026-11-03_ieee-mentor-tgbq-bft-before-roaming-and-cca-in-advance-for-beam-establishment 中的 TGbq IMMW PHY 与波束建立议题。
