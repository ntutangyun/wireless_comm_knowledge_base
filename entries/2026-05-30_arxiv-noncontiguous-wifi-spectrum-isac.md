---
id: 2026-05-30_arxiv-noncontiguous-wifi-spectrum-isac
date_published: 2026-02-20
date_found: 2026-05-30
type: academic-paper
title_en: "Non-Contiguous Wi-Fi Spectrum for ISAC: Impact on Multipath Delay Estimation"
title_zh: "面向 ISAC 的非连续 Wi-Fi 频谱：对多径时延估计的影响"
url: "https://arxiv.org/abs/2602.18086"
source_quality: full
topics: [802.11bf, ISAC, WiFi-sensing, CSI, multipath, delay-estimation, Cramer-Rao]
topic_primary: sensing-csi
topics_secondary: [mmwave-bq]
technology: wifi
novelty_score: 3
---

## Summary (EN)
Jeknić, Švigelj, Javornik, and Hrovat (Jožef Stefan Institute) analyse a problem that becomes unavoidable as Wi-Fi sensing (IEEE 802.11bf) goes cross-band: when a contiguous block of spectrum is not available, an ISAC system must stitch together channel state information (CSI) from non-contiguous Wi-Fi channels, and the frequency gaps between those subbands degrade multipath delay estimation in specific, predictable ways. The paper quantifies exactly how.

Methodologically it pairs two views. First, it derives the Cramér-Rao lower bound (CRLB) for delay separation in a two-path model with unknown complex gains and delays, exposing how the gap geometry (how far apart the subbands sit, and how wide the hole between them is) shapes the achievable bound. Second, it analyses the combined sub-band delay response directly, showing that aggregating non-contiguous subbands sharpens the mainlobe (more total aperture) but simultaneously intensifies sidelobes and spectral leakage — and those sidelobes and secondary peaks can mask closely-spaced multipath components, the very thing a sensing system is trying to resolve.

Two findings are practically useful. The dominant peak spacing in the delay response tracks the separation between sub-band center frequencies rather than the individual channels' own bandwidths, and the CRLB exhibits separation-dependent oscillations that reveal regimes where real performance diverges from the classical bound. The authors fold this into a normalized leakage metric that predicts which delay separations will be problematic, giving system designers a way to anticipate non-contiguous-spectrum sensing failures before deployment.

## Summary (ZH)
Jeknić、Švigelj、Javornik 与 Hrovat（约热夫·斯特凡研究所）分析了一个随着 Wi-Fi 感知（IEEE 802.11bf）走向跨频段而无法回避的问题：当无法获得连续频谱块时，ISAC 系统必须把来自非连续 Wi-Fi 信道的信道状态信息（CSI）拼接起来，而这些子带之间的频率间隙会以特定、可预测的方式劣化多径时延估计。论文精确量化了这一点。

方法上结合两种视角。其一，在具有未知复增益与时延的双径模型中推导时延分离的克拉美-罗下界（CRLB），揭示间隙几何（子带相距多远、之间空洞多宽）如何塑造可达界。其二，直接分析合并后的子带时延响应，表明聚合非连续子带虽锐化主瓣（总孔径更大），但同时加剧旁瓣与谱泄漏——而这些旁瓣与次峰会掩盖紧邻的多径分量，恰是感知系统试图分辨的对象。

两点结论实用：时延响应中的主峰间距取决于子带中心频率间隔，而非各信道自身带宽；CRLB 呈现随分离变化的振荡，揭示真实性能偏离经典界的区域。作者将其归纳为一个归一化泄漏度量，用以预测哪些时延分离会成为问题，使系统设计者能在部署前预判非连续频谱感知的失效。

## Key technical points (EN)
- Targets 802.11bf cross-band/non-contiguous ISAC sensing: combining CSI across spectrum gaps for multipath delay estimation.
- Derives CRLB for two-path delay separation with unknown complex gains/delays; gap geometry shapes the bound.
- Aggregating non-contiguous subbands sharpens the mainlobe but intensifies sidelobes/leakage that mask close multipath.
- Dominant delay-response peak spacing tracks sub-band center-frequency separation, not individual channel bandwidth.
- Introduces a normalized leakage metric to predict problematic delay separations; CRLB oscillations flag where practice diverges from theory.

## Key technical points (ZH)
- 面向 802.11bf 跨频段/非连续 ISAC 感知：跨频谱间隙合并 CSI 进行多径时延估计。
- 推导双径时延分离的 CRLB（未知复增益/时延）；间隙几何塑造该界。
- 聚合非连续子带锐化主瓣，但加剧掩盖紧邻多径的旁瓣/泄漏。
- 时延响应主峰间距取决于子带中心频率间隔，而非各信道带宽。
- 提出归一化泄漏度量预测问题时延分离；CRLB 振荡标示理论与实践偏离区域。

## Why it matters / what's new (EN)
The KB's sensing-csi bin has RSSI-only sensing and 802.11bf coexistence work; this adds the spectrum-geometry layer for cross-band ISAC. As 802.11bf sensing increasingly relies on non-contiguous spectrum (because contiguous wide blocks are scarce), knowing *which* gap geometries break delay resolution — and having a leakage metric to predict it — is directly actionable for sensing-system design. The CRLB-plus-leakage-metric framing is the transferable contribution, complementing the existing multiband-passive-sensing entries.

## Why it matters / what's new (ZH)
KB 的 sensing-csi 分箱已有仅 RSSI 感知与 802.11bf 共存工作；本文补上跨频段 ISAC 的频谱几何层。随着 802.11bf 感知越来越依赖非连续频谱（连续宽带块稀缺），知道*哪些*间隙几何会破坏时延分辨、并有泄漏度量加以预测，对感知系统设计直接可用。CRLB + 泄漏度量的框架是可迁移贡献，与现有多频段被动感知条目互补。
