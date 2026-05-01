---
id: 2026-05-01_arxiv-mapc-llm-agents
date_found: 2026-05-01
type: academic-paper
title: "Learning Multi-Access Point Coordination in Agentic AI Wi-Fi with Large Language Models"
url: "https://arxiv.org/abs/2511.20719"
source_quality: full
topics: [802.11bn, MLO, agentic-AI, MAC-layer, scheduling]
novelty_score: 5
---

## Summary

Fan et al. (Nov 2025) propose treating each Wi-Fi access point as an autonomous LLM agent that negotiates Multi-AP Coordination (MAPC) decisions through natural-language dialogue with neighboring APs. The paper frames MAPC — the headline 802.11bn feature for dense-deployment interference mitigation — as a multi-agent reasoning problem rather than a traditional rule-based or RL-based optimization. Each AP-agent maintains memory, performs reflection over past decisions, and can invoke "tools" (read radio metrics, propose airtime allocations, vote on coordinated-beamforming pairings). Agents converge on coordination strategies via iterative dialogue, demonstrated to beat spatial-reuse baselines.

The novelty is the *coordination-as-conversation* framing. Prior MAPC literature is dominated by centralized controllers, distributed game-theoretic solvers, or DRL agents trained on fixed reward functions. LLM-mediated negotiation is portable across topology changes, surfaces interpretable rationales for each scheduling decision (the agent literally *says* why it yielded), and avoids retraining when the BSS membership changes. The downside is latency and compute cost: each "round" of dialogue likely runs at human-conversation timescales (seconds), not the µs–ms scale that 802.11 MAC scheduling normally lives in.

The paper does not specify any concrete on-the-wire protocol changes. The LLM agents communicate over an unspecified inter-AP backhaul, and the per-AP decisions presumably translate into existing standard primitives (RU allocation, TWT scheduling). This leaves the inter-AP coordination protocol layer as a clean open question for the standards community.

## Key technical points

- AP-as-LLM-agent: each AP runs an LLM (size unspecified) with memory, reflection, and tool-use
- Coordination via natural-language dialogue between neighboring APs (over unspecified backhaul)
- Compared favorably to spatial-reuse baselines on simulated dense BSS scenarios
- Time scale of dialogue is seconds-level, not µs-level — practical only for slow-loop coordination decisions, not per-frame scheduling
- Concrete protocol layer is left abstract — the LLM outputs are mapped to standard 802.11 primitives but the mapping is not specified

## Why it matters / what's new

Highest-novelty entry of today's run. Significant for two reasons:

- It is the first paper to demonstrate LLM agents in the MAPC role of 802.11bn, lining up with the most active TGbn comment cluster.
- It exposes the gap between "coordination decided by reasoning agents" and "coordination expressed in standardized 802.11 frames". The former is increasingly proven; the latter is still wide open.

Pairs naturally with on-device-LLM-for-roaming work — together they sketch out a Wi-Fi network where both APs and STAs run LLM agents, with MAC-layer signaling as the only standardized contract between them.
