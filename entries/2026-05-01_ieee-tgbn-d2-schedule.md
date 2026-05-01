---
id: 2026-05-01_ieee-tgbn-d2-schedule
date_found: 2026-05-01
type: ieee-standard
title: "IEEE 802.11bn (Wi-Fi 8 / UHR) — TGbn status: D2.0 ballot July 2026, May 2028 ratification target"
url: "https://www.ieee802.org/11/Reports/tgbn_update.htm"
source_quality: full
topics: [802.11bn, MAC-layer, PHY-layer, MLO]
novelty_score: 5
---

## Summary

The IEEE 802.11bn Task Group (TGbn) — codifying Wi-Fi 8 / Ultra High Reliability — has finalized the schedule slip first hinted at the March 2026 plenary in Vancouver. Draft 2.0 letter ballot, originally targeted for May 2026, has shifted to July 2026 after roughly 1,800 comments from LB291 (D1.0 letter ballot) were resolved through D1.4. Approximately 60% of D1.0 technical comments have been addressed; the remaining 40% will be handled before D2.0 freeze. The May 2028 final IEEE-SA Sponsor Ballot / RevCom approval target remains intact despite the D2.0 slip.

The amendment's scope is now stable: the three headline reliability targets (≥25% throughput uplift at a given SINR, 25% reduction in p95 latency, 25% reduction in MPDU loss especially across BSS transitions) survive into D2.0. Major technical features being added include distributed RUs, Enhanced Long Range PPDUs (ELR), coordinated spatial reuse, unequal modulation across spatial streams (UEQM), and multi-AP coordination (MAPC) primitives. The amendment operates between 1 GHz and 7.250 GHz with backwards compatibility maintained for 2.4 / 5 / 6 GHz legacy devices.

## Key technical points

- **Schedule (current):** D1.4 in development → D2.0 LB July 2026 → D3.0 LB Jan 2027 → D4.0 SA-Ballot May 2027 → final WG approval Mar 2028 → RevCom May 2028
- **Three headline targets:** +25% throughput at fixed SINR, −25% p95 latency, −25% MPDU loss (esp. inter-BSS transitions)
- **New PHY features in D1.x:** distributed RUs, Enhanced Long Range PPDUs (ELR), unequal modulation (UEQM)
- **New MAC features:** coordinated spatial reuse, multi-AP coordination (MAPC) primitives
- **Frequency scope:** 1 GHz – 7.250 GHz with legacy 2.4 / 5 / 6 GHz coexistence

## Why it matters / what's new

First entry on TGbn timeline in this KB. Future updates should track:

- D2.0 letter-ballot opening (expected July 2026) — major comment volume expected
- Specific MAPC primitive proposals
- ELR PPDU format details
- Inter-BSS reliability mechanisms — likely the most active design cluster, since it forces new on-the-wire signaling

The May 2026 → July 2026 slip is a 2-month delay that does not cascade — the delta is being absorbed in D2.0/D3.0 prep timeline. Worth flagging if it widens.
