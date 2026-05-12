---
id: 2026-05-12_ieee-mentor-tgbq-antwerp-digest
date_published: 2026-05-11
date_found: 2026-05-12
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — Antwerp interim May 2026 (mmWave beam establishment, scheduling, polarization)"
title_zh: "IEEE 802.11 TGbq Mentor 摘要——Antwerp 期中会议 2026-05（mmWave 波束建立、调度、极化）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=0bq
source_quality: snippet_only
topics: [802.11bq, mmWave, IMMW, beam-establishment, scheduling, polarization, deterministic-latency]
topic_primary: mmwave-bq
topics_secondary: [wifi8-uhr, rtwt-latency]
novelty_score: 1
---

## Summary (EN)

TGbq (Integrated mmWave) used the Antwerp interim to push on three open architectural questions: how beams are established and reported, how mmWave service periods are scheduled (on-demand vs. pre-scheduled), and how polarisation factors into IMMW link design. The Huawei pitch DCN 11-26-1002 — "Deterministic Low-Latency ~10 Gbps in the mmWave band for IEEE 802.11bq" — is the most concrete numerical target the TG has put on paper this year, mapping the technical mission to a ~10 Gbps deterministic envelope rather than a peak-throughput marketing claim. Beam-establishment timing and reporting are now the most-revised threads (DCN 944, 510r2, 480r1), suggesting the TG is converging on a frame-level beam-establishment protocol but hasn't yet locked the timing parameters.

## Summary (ZH)

TGbq（融合 mmWave）在 Antwerp 期中会议推进三个尚未收敛的架构问题：波束如何建立与上报、mmWave 服务期如何调度（按需 vs 预调度）、以及极化如何进入 IMMW 链路设计。Huawei 的 DCN 11-26-1002 ——「IEEE 802.11bq mmWave 频段确定性低时延约 10 Gbps」—— 是该 TG 本年度在文稿上给出最具体的数值目标，把技术任务映射到约 10 Gbps 的确定性包络，而不是峰值吞吐的营销口径。波束建立时序与上报是当前修订次数最多的线索（DCN 944、510r2、480r1），说明 TG 在向帧级波束建立协议收敛，但尚未锁定时序参数。

## Key technical points (EN)

- **DCN 11-26-1046 · TGbq** — Discussion on Report of Beam establishment results. Chun Huang (ZTE).
- **DCN 11-26-1002 · TGbq** — Deterministic Low-Latency ~10 Gbps in the mmWave band for IEEE 802.11bq. Luna Xin Li (Huawei). **First explicit numerical target** the TG has put on paper for the IMMW mission.
- **DCN 11-26-944r1 · TGbq** — Timing of Initial Beam Establishment. Liangxiao Xin (OPPO).
- **DCN 11-26-967 · TGbq** — Measure the interference during BFT. Chaoming Luo (OPPO).
- **DCN 11-26-957 · TGbq** — IMMW Polarization Considerations. Ratnesh Kumbhkar (Intel).
- **DCN 11-26-958 · TGbq** — On-Demand mmWave SP scheduling. Shuang Fan (Sanechips).
- **DCN 11-26-888r1 · TGbq** — IMMW Service Period for Beam Establishment. Safi Hoque (Ofinno).
- **DCN 11-26-510r2 · TGbq** — Thoughts on channel access in IMMW. Dmitry Akhmetov (Intel).
- **DCN 11-26-480r1 · TGbq** — Considerations on SIG. Eunsung Park (LG).
- **DCN 11-26-692r3 · TGbq** — TGbq agenda - May wireless interim. Edward Au (Huawei).

## Key technical points (ZH)

- **DCN 11-26-1046 · TGbq** —— 波束建立结果上报讨论。Chun Huang（ZTE）。
- **DCN 11-26-1002 · TGbq** —— IEEE 802.11bq mmWave 频段确定性低时延约 10 Gbps。Luna Xin Li（Huawei）。**TG 在 IMMW 任务上首次给出明确数值目标**。
- **DCN 11-26-944r1 · TGbq** —— 初始波束建立时序。Liangxiao Xin（OPPO）。
- **DCN 11-26-967 · TGbq** —— BFT 期间干扰测量。Chaoming Luo（OPPO）。
- **DCN 11-26-957 · TGbq** —— IMMW 极化考量。Ratnesh Kumbhkar（Intel）。
- **DCN 11-26-958 · TGbq** —— 按需 mmWave SP 调度。Shuang Fan（Sanechips）。
- **DCN 11-26-888r1 · TGbq** —— 波束建立的 IMMW 服务期。Safi Hoque（Ofinno）。
- **DCN 11-26-510r2 · TGbq** —— IMMW 信道接入考量。Dmitry Akhmetov（Intel）。
- **DCN 11-26-480r1 · TGbq** —— SIG 设计考量。Eunsung Park（LG）。
- **DCN 11-26-692r3 · TGbq** —— TGbq 期中会议议程。Edward Au（Huawei）。

## Why it matters / what's new (EN)

The Huawei ~10 Gbps deterministic envelope is the contribution worth tracking — it's the first time a TGbq contributor has formally proposed a service-class target rather than a peak-rate goal, which aligns the TG with the Wi-Fi 8 reliability narrative rather than the mmWave-as-fat-pipe story. The March 2026 readout flagged that "the broader question of how much independence 60 GHz links should have remains open" — Antwerp doesn't close that question but the on-demand-SP-scheduling thread (DCN 958) is the first contribution that materially leans toward sub-7 GHz scheduling state driving mmWave link-up rather than independent 60 GHz operation.

## Why it matters / what's new (ZH)

Huawei 的 ~10 Gbps 确定性包络是值得跟进的贡献 —— 这是 TGbq 贡献者首次正式提出服务类目标而非峰值速率，使该 TG 与 Wi-Fi 8 可靠性叙事对齐，而不是 mmWave-as-fat-pipe 故事。2026 年 3 月综述提到「60 GHz 链路应当多大程度独立运行仍是开放问题」—— Antwerp 没有关闭这个问题，但按需 SP 调度线（DCN 958）是首个明确倾向于「sub-7 GHz 调度状态驱动 mmWave 链路建立」、而非「60 GHz 独立运行」的贡献。
