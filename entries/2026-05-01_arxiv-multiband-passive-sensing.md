---
id: 2026-05-01_arxiv-multiband-passive-sensing
date_found: 2026-05-01
type: academic-paper
title: "802.11bf Multiband Passive Sensing: Reusing Wi-Fi Signaling for Sensing"
url: "https://arxiv.org/html/2507.22591v1"
source_quality: full
topics: [802.11bf, WiFi-sensing, PHY-layer]
novelty_score: 4
---

## Summary

Picazo-Martinez et al. (Jul 2025, IoT-Journal preprint) propose MilaGro, a passive multiband Wi-Fi sensing system that fuses CSI from 5 GHz beacon frames *and* 60 GHz mmWave beamforming-training (TRN-Unit) sequences to detect human presence, motion, and activities indoors. The key claim: a Passive Station (P-STA) that only receives — never transmits — already-emitted standard frames can deliver 95–100% accuracy on common sensing tasks, with no airtime cost and no protocol change.

The architecture is a dual-block CNN. Block 1 preprocesses mmWave Golay-sequence CSI (1D conv → max-pool → dense). Block 2 fuses the mmWave embedding with 5 GHz beacon-frame CSI (52 OFDM subcarriers, BPSK/QPSK) and produces the final classification. Concrete results: indoor presence-monitoring 100% (vs 89% with 5 GHz alone); corridor-movement tracking 94% (vs 85% with 5 GHz alone); through-wall mmWave detection "close to 100%". The 60 GHz beamforming uses 6×6 antenna arrays with 60° beam sweeps.

Mechanism-wise, the contribution is twofold: (a) showing multiband CSI fusion materially beats single-band, and (b) doing it *passively* against frames the AP already transmits — no new IE, no new Action frame, no new Trigger. The MAC layer is unchanged. The novelty is entirely in the receiver-side ML model and the choice of which standard frames to repurpose for sensing.

## Key technical points

- Multiband fusion: 5 GHz beacon CSI (52 subcarriers) + 60 GHz beamforming-training Golay sequences
- Passive receiver-only operation — no on-the-wire protocol modification
- Dual-block CNN: mmWave preprocessing + 5/60 GHz fusion + classification
- Headline accuracies: 100% (presence in-room), 94% (corridor motion), ~89%→100% improvement over 5 GHz-only on the same scenario
- Hardware: 6×6 60 GHz antenna array, 60° beam sweeps
- Zero airtime overhead — reuses frames already sent for communication / association

## Why it matters / what's new

First entry on multiband-fusion Wi-Fi sensing in this KB. Sets a baseline that future sensing work should be compared against.

A separate, currently unstaked direction would be a transmitter-side hint — for example, an IE in Beacon advertising "this AP transmits 5 GHz beacons plus 60 GHz BFT sequences usable as sensing reference signals" — so that passive sensing receivers know which transmissions to listen to. The MilaGro paper is explicit that it operates without such a hint; the question of whether one should be standardized is left open.
