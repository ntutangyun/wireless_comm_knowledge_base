---
id: 2026-05-03_arxiv-wirssi-rssi-only-wifi-sensing
date_published: 2026-02-15
date_found: 2026-05-03
type: academic-paper
title_en: "Rethinking RSSI for WiFi Sensing — WiRSSI: Doppler/AoA-aware Localisation from Amplitude-Only Data"
title_zh: "重新思考 RSSI 用于 Wi-Fi 感知 —— WiRSSI: 仅靠幅度数据的多普勒 / AoA 定位"
url: "https://arxiv.org/abs/2602.14004"
source_quality: full
topics: [802.11bf, WiFi-sensing]
novelty_score: 3
---

## Summary (EN)

Wang et al. (arxiv 2602.14004, Feb 2026) push back on the conventional view that RSSI is too coarse for Wi-Fi sensing. With a 1×3 setup (one TX, three RX antennas) they show that RSSI traces — amplitude only, no per-subcarrier phase — still retain exploitable Doppler, angle-of-arrival, and pseudo-delay cues. WiRSSI extracts those via a 2D FFT on (time × antenna) followed by AoA/delay-to-XY mapping, producing bistatic localisation without ever touching CSI.

Median XY localisation errors come in at 0.78–0.91 m across elliptical / linear / rectangular trajectories vs. 0.51–0.60 m for the CSI-based baseline — i.e. ~30–60 % worse than CSI but achievable on commodity hardware that *only* exposes RSSI. That gap matters because the install base of "CSI-not-available" Wi-Fi devices vastly outsizes the CSI-exposing one.

## Summary (ZH)

Wang 等人（arxiv 2602.14004，2026 年 2 月）反驳「RSSI 太粗，无法做感知」的既有共识。在 1×3 设置（一个 TX、三个 RX 天线）下，他们证明仅幅度的 RSSI 序列（无每子载波相位）仍保留可利用的多普勒、AoA 与伪时延信息。WiRSSI 通过 (时间 × 天线) 上的 2D FFT + AoA/时延到 XY 的映射，做到「不碰 CSI 的双站点定位」。

椭圆 / 线性 / 矩形轨迹的中位 XY 定位误差在 0.78–0.91 m，对照 CSI 基线 0.51–0.60 m —— 约比 CSI 差 30–60 %，但可在「只暴露 RSSI」的商用硬件上落地。这个差距重要的原因是：「不暴露 CSI」的 Wi-Fi 设备装机量远大于「暴露 CSI」的。

## Key technical points (EN)

- Inputs: RSSI only (no CSI, no per-subcarrier phase) on 1×3 antenna setup.
- 2D FFT over (time × antenna) extracts Doppler + AoA features.
- Pseudo-delay inferred from amplitude alone; AoA/delay → XY via geometry.
- Median XY error 0.78–0.91 m (CSI baseline: 0.51–0.60 m).
- Runs on commodity hardware that only exposes RSSI — no protocol changes.

## Key technical points (ZH)

- 输入：仅 RSSI（无 CSI、无每子载波相位），1×3 天线。
- (时间 × 天线) 上的 2D FFT 抽取多普勒 + AoA 特征。
- 仅由幅度推算伪时延；AoA/时延 → XY 走几何映射。
- 中位 XY 误差 0.78–0.91 m（CSI 基线 0.51–0.60 m）。
- 运行在「仅暴露 RSSI」的商用硬件上 —— 不改协议。

## Why it matters / what's new (EN)

Complements `arxiv-multiband-passive-sensing` (MilaGro: 5 GHz Beacon + 60 GHz BFT CSI fusion) by going in the opposite direction — *less* signal, not more. The two together bracket the design space: WiRSSI maximises deployment reach (RSSI is universally exposed); MilaGro maximises accuracy (multiband CSI). Both are receiver-side algorithms with no new IE — same "internal-policy / no observable signature" pattern.

## Why it matters / what's new (ZH)

与 `arxiv-multiband-passive-sensing`（MilaGro：5 GHz Beacon + 60 GHz BFT CSI 融合）互补 —— 走相反方向：用*更少*信号而非更多。两者合起来勾勒了设计空间：WiRSSI 最大化部署可达（RSSI 普遍暴露），MilaGro 最大化精度（多频段 CSI）。两者都是接收端算法、不引入新 IE —— 同属「内部策略 / 无可观测特征」模式。
