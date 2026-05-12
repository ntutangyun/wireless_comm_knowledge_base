---
id: 2026-05-12_ieee-mentor-tgbt-antwerp-digest
date_published: 2026-05-11
date_found: 2026-05-12
type: ieee-document
title_en: "IEEE 802.11 TGbt Mentor digest — Antwerp interim May 2026 (PQC PAKE / PASN / Roaming / PoW)"
title_zh: "IEEE 802.11 TGbt Mentor 摘要——Antwerp 期中会议 2026-05（PQC PAKE / PASN / 漫游 / PoW）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=0bt
source_quality: snippet_only
topics: [802.11bt, post-quantum-cryptography, PAKE, PASN, PQC-roaming, 802.1X, PoW]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 1
---

## Summary (EN)

TGbt (Post-Quantum Cryptography for 802.11) is collecting comments on D0.2 and is on track for an initial WG ballot on D1.0 coming out of the May 2026 session — the schedule flagged at the March plenary. Antwerp activity is dense: 25+ contributions spanning PQC PAKE, PQC PASN, PQC roaming, PQC direct authentication, key derivation, rekey CIDs, 802.1X integration, and proof-of-work strengthening. The week also produced two academic-quality cryptographic critiques from KU Leuven (Mathy Vanhoef): **DCN 11-26-1047 "PQC PTK hash transcript ambiguity"** and **DCN 11-26-1024 "CPACEOQUAKE+ in 802.11"** (a CPace+OQUAKE+ hybrid PAKE variant from ZTE) — bringing the same security-research rigor Vanhoef applied to KRACK / FragAttacks into the PQC drafting phase before D1.0 ratification.

## Summary (ZH)

TGbt（802.11 后量子密码）正在收集 D0.2 评论，按本届 5 月会议结束后启动 D1.0 初次 WG 投票的进度推进 —— 这是 3 月全会确认的时间表。Antwerp 活动密集：25 余项贡献覆盖 PQC PAKE、PQC PASN、PQC 漫游、PQC 直接认证、密钥派生、rekey CID、802.1X 集成、以及工作量证明加固。本周还产生了两份来自 KU Leuven（Mathy Vanhoef）的学术级密码学批评：**DCN 11-26-1047「PQC PTK 哈希转录歧义」** 与 **DCN 11-26-1024「802.11 中的 CPACEOQUAKE+」**（ZTE 提出的 CPace+OQUAKE+ 混合 PAKE 变体）—— 把 Vanhoef 在 KRACK / FragAttacks 上的安全研究严谨度带入 PQC 起草、在 D1.0 批准之前。

## Key technical points (EN)

- **DCN 11-26-1047 · TGbt** — PQC PTK hash transcript ambiguity. KU Leuven (Mathy Vanhoef).
- **DCN 11-26-1040r3 · TGbt** — CIDs related to rekey. Bo Cao (ZTE).
- **DCN 11-26-1024r1 · TGbt** — CPACEOQUAKE+ in 802.11. Jay Yang (ZTE). Hybrid PAKE construction.
- **DCN 11-26-1007 · TGbt** — aggregation of authentication frames. Yan Li (ZTE).
- **DCN 11-26-1003 · TGbt** — TGbt CC52 with Grouping. Stephen Orr (Cisco).
- **DCN 11-26-984/981/980 · TGbt** — Strengthening PoW Mechanisms (CR + presentation). Anuj Dharap (Cisco).
- **DCN 11-26-974 · TGbt** — Proposed Draft Texts for PQC PASN. Xuwen Zhao (TCL).
- **DCN 11-26-973 · TGbt** — Proposed Draft Texts for PQC Roaming. Xuwen Zhao (TCL).
- **DCN 11-26-972 · TGbt** — Proposed Draft Texts for PQC Direct Authentication. Xuwen Zhao (TCL).
- **DCN 11-26-938r1 · TGbt** — ptk-key-derivation. Dan Harkins (HPE).
- **DCN 11-26-921r3 · TGbt** — CR for 802.1X. Po-Kai Huang (Intel).
- **DCN 11-26-841r2 · TGbt** — TGbt agenda May Interim. Stephen Orr (Cisco).

## Key technical points (ZH)

- **DCN 11-26-1047 · TGbt** —— PQC PTK 哈希转录歧义。KU Leuven（Mathy Vanhoef）。
- **DCN 11-26-1040r3 · TGbt** —— rekey 相关 CID。Bo Cao（ZTE）。
- **DCN 11-26-1024r1 · TGbt** —— 802.11 中的 CPACEOQUAKE+。Jay Yang（ZTE）。混合 PAKE 构造。
- **DCN 11-26-1007 · TGbt** —— 认证帧聚合。Yan Li（ZTE）。
- **DCN 11-26-1003 · TGbt** —— TGbt CC52 分组。Stephen Orr（Cisco）。
- **DCN 11-26-984/981/980 · TGbt** —— 加固 PoW 机制（CR + 演示）。Anuj Dharap（Cisco）。
- **DCN 11-26-974 · TGbt** —— PQC PASN 提议文本。Xuwen Zhao（TCL）。
- **DCN 11-26-973 · TGbt** —— PQC 漫游提议文本。Xuwen Zhao（TCL）。
- **DCN 11-26-972 · TGbt** —— PQC 直接认证提议文本。Xuwen Zhao（TCL）。
- **DCN 11-26-938r1 · TGbt** —— PTK 密钥派生。Dan Harkins（HPE）。
- **DCN 11-26-921r3 · TGbt** —— 802.1X CR。Po-Kai Huang（Intel）。
- **DCN 11-26-841r2 · TGbt** —— TGbt 期中议程。Stephen Orr（Cisco）。

## Why it matters / what's new (EN)

PQC for Wi-Fi was rushed into TG status (TGbt formed November 2024) on the back of NIST PQC standardisation; the Antwerp output is the first time the TG has had to face academic-grade cryptographic scrutiny of its drafts. Vanhoef's transcript-ambiguity finding (DCN 1047) is exactly the kind of issue that would have shipped if D1.0 had ratified without independent review — the discovery before D1.0 is the success story here. TCL's three direct-text proposals (PASN / Roaming / Direct Auth) are the broadest single-contributor PQC-text drop in TGbt history and will likely anchor the D1.0 base text. The rekey-CIDs thread (DCN 1040) revising three times in two days indicates active disagreement on key-rotation semantics — worth a dedicated entry next run if a converged proposal emerges.

## Why it matters / what's new (ZH)

Wi-Fi 后量子密码是借 NIST PQC 标准化的势能在 2024-11 仓促立项（TGbt）；Antwerp 输出是该 TG 首次面对学术级别的密码学审视。Vanhoef 的转录歧义发现（DCN 1047）恰是若 D1.0 未经独立评审就批准、将随之进入草案的那类问题 —— 在 D1.0 之前发现，正是本周的成功故事。TCL 的三项直接文本提案（PASN / 漫游 / 直接认证）是 TGbt 历史上单一贡献者的最广 PQC 文本投放，很可能锚定 D1.0 基础文本。rekey CID 线索（DCN 1040）两天三修说明对密钥轮换语义仍有活跃分歧 —— 若有收敛方案出现，下次运行值得独立成文。
