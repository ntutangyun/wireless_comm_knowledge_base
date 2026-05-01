---
id: 2026-05-01_arxiv-on-device-llm-roaming
date_found: 2026-05-01
type: academic-paper
title: "On-Device LLM for Context-Aware Wi-Fi Roaming"
url: "https://arxiv.org/html/2505.04174v1"
source_quality: full
topics: [roaming, agentic-AI, MAC-layer, MLO]
novelty_score: 4
---

## Summary

Lee and Lu (May 2025) put a quantized on-device LLM directly on the STA — running on a MacBook Pro — and have it make Wi-Fi roaming decisions. The pitch: traditional threshold-based roaming oscillates between "sticky" (won't leave a weakening AP) and "ping-pong" (excessive handovers). The LLM consumes RSSI, scanned-AP list, time-of-day, user location, and battery state, then either (a) picks the best target BSSID directly or (b) dynamically adjusts the roaming threshold parameters.

Performance numbers: vs a legacy heuristic baseline, the LLM reduces handovers from 100 to 93 while improving average RSSI from a worse baseline to −58.58 dBm; vs a PPO-RL baseline tuned on the same scenarios, RSSI is ~1 dB better at comparable handover rates. Model footprint after Q2_K quantization: 3.2 GB (down from 8.5 GB). Parameter-efficient fine-tuning achieves 85% accuracy on held-out test data.

The paper's headline framing — "first on-device LLM that reasons in the application layer while issuing real-time actions in the PHY/MAC stack" — places it at the boundary where application-level intelligence and MAC-level control meet. The LLM *outputs* MAC actions (BSSID switch, threshold adjust); the inputs are STA-side observable state.

## Key technical points

- LLM runs on STA (consumer hardware demonstrated: MacBook Pro)
- Inputs: RSSI, scan list, location, time-of-day, battery
- Outputs: target BSSID OR roaming-threshold adjustments
- Q2_K quantization: 8.5 GB → 3.2 GB
- 85% test accuracy with parameter-efficient fine-tuning (PEFT)
- Beats legacy threshold heuristic AND a PPO-DRL baseline
- Latency tradeoff not deeply discussed — chain-of-thought prompting at edge inference speeds is on the order of 100s of ms to seconds

## Why it matters / what's new

Confirms the on-device-LLM-for-WiFi-decision pattern is moving from theory to working prototype:

- Direction symmetry with AP-side LLM-MAPC work: a Wi-Fi network where both APs and STAs run LLM agents, with MAC-layer signaling as the standardized contract between them, is now a plausible near-term architecture rather than speculation.
- Roaming as an explicit research surface for context-aware decision-making — distinct from the more-studied scheduling/coordination side of agentic Wi-Fi work.
- The paper is silent on what richer MAC primitives (e.g., MLME-level battery/location/intent hints) would let an on-device LLM perform better. That's a natural follow-up area.

The PEFT and quantization details are pure ML engineering and reproducible from the methods section.
