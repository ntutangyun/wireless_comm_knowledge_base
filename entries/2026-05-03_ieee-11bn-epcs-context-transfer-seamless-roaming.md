---
id: 2026-05-03_ieee-11bn-epcs-context-transfer-seamless-roaming
date_published: 2026-05-01
date_found: 2026-05-03
type: proposal
title_en: "IEEE 802.11bn — EPCS Context Transfer for Seamless Roaming (Samsung, May 2026 pre-interim)"
title_zh: "IEEE 802.11bn —— 用于无缝漫游的 EPCS 上下文转移（Samsung，2026 年 5 月会前）"
url: "https://mentor.ieee.org/802.11/dcn/26/11-26-0036-03-00bn-epcs-context-transfer-for-seamless-roaming.docx"
source_quality: snippet_only
topics: [802.11bn, MAC-layer, security, roaming]
novelty_score: 4
---

## Summary (EN)

Samsung's Peshal Nayak (DCN 11-26/036r3, posted 01-May-2026 ahead of the Antwerp interim) tables a Wi-Fi 8 (TGbn) mechanism for transferring **EPCS** — the per-station Pairwise Cipher Suite context (PMK, sequence counters, key-confirmation state) — between APs so that a roaming non-AP STA can resume an authenticated session at the new AP **without performing a fresh 4-way handshake**.

The mechanism slots into the broader Seamless Roaming workstream that's currently consuming a large fraction of TGbn's contribution stream (the parallel LB291 comment-resolution series 11-26/378 + 11-26/379 from Duncan Ho at Qualcomm covers parts 3+4). The novelty is on the wire: a new context-transfer Action frame between APs (over the distribution system or a backhaul), a new state in the STA's association procedure, and a defined sequence in which the new AP gates upper-layer traffic until the transfer succeeds.

## Summary (ZH)

Samsung 的 Peshal Nayak（DCN 11-26/036r3，2026 年 5 月 1 日 Antwerp 临时会议前提交）为 Wi-Fi 8（TGbn）提交了一项 **EPCS** —— 即每站台的 Pairwise Cipher Suite 上下文（PMK、序列计数器、密钥确认状态）—— 在 AP 间转移的机制，使漫游非 AP STA 能在新 AP **不重做 4-way 握手**就续上已认证会话。

该机制嵌入 TGbn 当前正在消耗大量贡献流量的「无缝漫游」工作流（并行的 LB291 评论决议系列 11-26/378 + 11-26/379 来自 Qualcomm 的 Duncan Ho，覆盖第 3+4 部分）。新颖之处在空口：在 AP 之间（走 distribution system 或独立 backhaul）的新上下文转移 Action 帧、STA 关联流程中的新状态、以及新 AP 在上下文转移成功前对上层流量的明确门控时序。

## Key technical points (EN)

- New AP-to-AP Action frame carrying PMK + sequence counters + key-confirmation state.
- New state in the non-AP STA's association state machine: "EPCS-transferring".
- New gating rule: the new AP rejects upper-layer data until EPCS transfer completes.
- Eliminates the ~60-100 ms cost of a fresh 4-way handshake on every roam.
- Parallel LB291 resolutions (11-26/378-379) handle the Seamless Roaming amendment text.

## Key technical points (ZH)

- AP 间新 Action 帧，携带 PMK + 序列计数器 + 密钥确认状态。
- 非 AP STA 关联状态机新增状态：「EPCS-transferring」。
- 新门控规则：新 AP 在 EPCS 转移完成前拒绝上层数据。
- 消除每次漫游约 60–100 ms 的 4-way 握手成本。
- 并行的 LB291 决议（11-26/378-379）处理无缝漫游修订文本。

## Why it matters / what's new (EN)

This is a clean rule-1.1 / rule-1.3 mechanism: a new on-the-wire Action frame, a new MLME state, a new gating sequence — all observable in packet captures. It complements (not duplicates) the existing KB candidate `roaming-context-mlme-extension`: that one is about exposing per-AP context to an *on-device AI agent* via an MLME SAP; this one is about transferring per-STA context *between APs* during roaming. The two could even compose in a deployment.

## Why it matters / what's new (ZH)

这是一条干净的 rule-1.1 / rule-1.3 机制：空口新 Action 帧 + 新 MLME 状态 + 新门控时序，全部可在抓包中观测。它与既有 KB 候选 `roaming-context-mlme-extension` 互补（不重复）：那一份是把「每 AP 的上下文」通过 MLME SAP 暴露给*端侧 AI 智能体*；本贡献是漫游时把「每 STA 的上下文」在 *AP 之间* 转移。二者甚至可以在同一部署中组合使用。
