---
id: 2026-11-18_arxiv-kan-lut-demapper-apsk-nonlinear-satellite-links
date_published: 2026-11-15
date_found: 2026-11-18
technology: satellite
type: academic-paper
title_en: "Kolmogorov-Arnold Lookup Table Demappers for Amplitude Phase-Shift Keying over Nonlinear Satellite Links"
title_zh: "面向非线性卫星链路 APSK 的 Kolmogorov-Arnold 查找表解映射器"
url: "https://arxiv.org/abs/2611.20068"
source_quality: abstract-only
topics: [APSK, soft demapper, Kolmogorov-Arnold network, LUT, LDPC, TWTA nonlinearity, regenerative payload]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Tekbıyık, Kurt and Lesage-Landry (arXiv, 15 Nov 2026) note that high-throughput satellites increasingly demodulate and decode on board, so per-symbol receiver cost limits payload power and throughput. They introduce a KAN-LUT demapper: a two-layer Kolmogorov-Arnold network whose learned univariate edge functions are stored as 128-entry lookup tables, so inference needs only table reads, linear interpolation and additions. The LLR error introduced by the tables is bounded, and the demapper is evaluated on APSK links with LDPC coding and a nonlinear travelling-wave-tube amplifier.

## Summary (ZH)

Tekbıyık、Kurt 与 Lesage-Landry（arXiv，2026 年 11 月 15 日）指出，高通量卫星越来越多地在星上解调解码，因此逐符号接收机开销制约载荷功耗与吞吐。论文提出 KAN-LUT 解映射器：两层 Kolmogorov-Arnold 网络，其学习到的一元边函数存为 128 项查找表，推理只需查表、线性插值与加法。论文给出查找表引入的 LLR 误差界，并在带 LDPC 编码与非线性行波管放大器的 APSK 链路上评估。

## Key technical points (EN)

- For 16-, 32- and 64-APSK, KAN-LUT stays within 0.2 dB of a per-cluster Gaussian log-MAP (LogMAP-CG) demapper while its cost relative to LogMAP-CG falls from 87% to 27% as order grows.
- Matches or slightly exceeds MLPs at about one fifth of their cost; competitive under operating-point mismatch; needs only tens of kilobytes of tables.
- Abstract-level read; results are simulated.

## Key technical points (ZH)

- 对 16、32、64-APSK，KAN-LUT 与逐簇高斯 log-MAP（LogMAP-CG）解映射器相差不超过 0.2 dB，随调制阶数增大其相对 LogMAP-CG 的开销由 87% 降至 27%。
- 性能持平或略优于 MLP，而开销约为其五分之一；在工作点失配下仍有竞争力；仅需数十 KB 的表。
- 仅阅读摘要；结果为仿真。

## Why it matters / what's new (EN)

A table-lookup soft demapper that targets the compute budget of regenerative payloads under amplifier nonlinearity. Simulation only.

## Why it matters / what's new (ZH)

一种面向再生式载荷算力预算、适应放大器非线性的查表式软解映射器。仅为仿真。

## Images

None.
