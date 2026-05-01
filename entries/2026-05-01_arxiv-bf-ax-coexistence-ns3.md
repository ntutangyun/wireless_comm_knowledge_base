---
id: 2026-05-01_arxiv-bf-ax-coexistence-ns3
date_found: 2026-05-01
type: academic-paper
title: "When Next-Gen Sensing Meets Legacy Wi-Fi: Performance Analyses of IEEE 802.11bf and IEEE 802.11ax Coexistence"
url: "https://arxiv.org/html/2503.04637v1"
source_quality: full
topics: [802.11bf, 802.11ax, WiFi-sensing, MAC-layer, scheduling]
novelty_score: 3
---

## Summary

Keshtiarast, Bishoyi, Lumbantobing, and Petrova (Mar 2025) build the first analytical-plus-simulation framework for evaluating how a sensing-enabled 802.11bf network coexists with a co-channel 802.11ax-only network. Their contribution includes a publicly released ns-3 module for IEEE 802.11bf — until now the simulator coverage for 802.11bf was effectively zero, and the open-sourcing matters as much as the analysis itself.

The framework parameterizes sensing-interval, access-category, network-density, and antenna-configuration knobs. Headline finding: there is a sharp trade-off between sensing-cadence and communication throughput when both BSSs share airtime. Aggressive sensing intervals starve the legacy 802.11ax flows; conservative sensing intervals collapse the sensing-detection accuracy. Concrete numerical results for delay/throughput aren't fully extractable from the abstract, but the framework itself is the asset.

The most useful contribution is the *tool*: the open-source ns-3 module is the right starting point for anyone validating MAC-layer mechanisms that change the sensing/communication trade-off. The paper itself doesn't propose a new mechanism — it measures the gap between the two existing standards.

## Key technical points

- Open-source ns-3 module for IEEE 802.11bf (publicly released alongside paper)
- Analytical model + system-level simulation framework
- Identifies trade-off frontier between sensing interval and 802.11ax throughput
- Sweep parameters: sensing intervals, access categories (VO/VI/BE/BK), network density, antenna configurations
- No new mechanism proposed — measurement infrastructure paper

## Why it matters / what's new

First measurement-tooling entry in this KB. Useful infrastructure for anyone touching 802.11bf coexistence:

- Reference baseline when comparing a new sensing-coordination mechanism against the unmodified standard
- Reproducible simulator means cross-paper comparisons are now possible

Lower novelty than mechanism papers, but high practical value as evaluation infrastructure.
