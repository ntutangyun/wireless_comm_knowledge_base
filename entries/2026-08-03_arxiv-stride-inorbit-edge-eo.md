---
id: 2026-08-03_arxiv-stride-inorbit-edge-eo
date_published: 2026-07-28
date_found: 2026-08-03
type: academic-paper
technology: satellite
title_en: "Stride: revisiting-aware in-orbit edge computing cuts Earth-observation delivery delay 4.55x by transmitting only what changed"
title_zh: "Stride：利用轨道重访特性的在轨边缘计算——只传输变化区域，将对地观测交付时延改善 4.55 倍"
url: "https://arxiv.org/abs/2607.25813"
source_quality: full
topics: [LEO, in-orbit-computing, earth-observation, edge-computing, downlink]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Stride (Sun, Ni, Cui, Xu, Wang; submitted 28 July 2026) attacks the revisiting-cycle-delay problem in Earth-observation constellations: downlink bandwidth is so scarce that only ~2% of captured data reaches the ground, stretching effective revisit cycles from 1 day to 1.5+ days — a real cost in wildfire and flood response. The insight is celestial-mechanical: because satellites revisit the same ground track periodically, the onboard computer can compare fresh captures against orbit-aligned historical references and transmit only the regions that actually changed.

The framework has three onboard components. A mono-/multi-temporal cloud indicator distinguishes cloud contamination from reflective terrain (snow) using spatial and temporal continuity of cached labels. A coarse-to-fine reference selector handles orbital deviation: geographic-coordinate queries pick candidate historical references, then SURF keypoint matching with global consensus voting aligns them precisely. An ensemble-local change detector differences the aligned pair, suppresses noise via local compensation, and encodes the sparse result in CSR format for transmission.

Evaluated on a Flat-Sat testbed (NVIDIA Jetson TX2 onboard computer) and a constellation simulator driven by real TLE data for Landsat-8, Sentinel-2A and SKYSAT-A across five public datasets (SpaceNet 7, LSCIDMR, DynamicEarthNet, MTGL40-5, SatSOT), Stride improves the Revisiting Imagery Delivery score by up to 4.55x, cuts connectivity latency 5.02x, enlarges mapping coverage 2.56x, and reaches a 0.22 size ratio versus 0.51 for the CCSDS 121.0-B-3 space-data compression standard — with modest RAM/CPU/energy overhead on the TX2 and high reconstruction quality (SSIM).

## Summary (ZH)

Stride（Sun、Ni、Cui、Xu、Wang；2026 年 7 月 28 日提交）针对对地观测星座的重访周期时延问题：下行带宽稀缺到仅约 2% 的采集数据能到达地面，使有效重访周期从 1 天拉长到 1.5 天以上——这在山火、洪水应急响应中是实打实的代价。其洞察源自轨道力学：卫星周期性重访同一地面轨迹，星载计算机因此可以将新采集图像与按轨道对齐的历史参考图比对，只传输真正发生变化的区域。

框架含三个星载组件。单/多时相云指示器利用缓存标签的空间与时间连续性区分云污染与高反射地形（积雪）。粗到细参考选择器处理轨道偏差：先以地理坐标查询候选历史参考，再用 SURF 关键点匹配与全局一致性投票精确对齐。集成式局部变化检测器对对齐图像做差分、以局部补偿抑制噪声，并将稀疏结果以 CSR 格式编码传输。

在 Flat-Sat 测试台（NVIDIA Jetson TX2 星载计算机）和基于 Landsat-8、Sentinel-2A、SKYSAT-A 真实 TLE 的星座仿真器上，跨五个公开数据集（SpaceNet 7、LSCIDMR、DynamicEarthNet、MTGL40-5、SatSOT）评估：Stride 将重访影像交付（RID）分数提升至多 4.55 倍、连接时延降低 5.02 倍、制图覆盖扩大 2.56 倍，压缩尺寸比达 0.22（CCSDS 121.0-B-3 标准为 0.51）——TX2 上内存/CPU/能耗开销温和，重建质量（SSIM）高。

## Key technical points (EN)

- Revisiting-aware differencing: orbit-aligned historical references let the satellite transmit only changed regions of interest instead of full frames.
- Three-stage onboard pipeline: cloud indicator (spatial+temporal continuity) → coarse-to-fine reference selection (geo-query + SURF consensus) → ensemble-local change detection (CSR-encoded sparse output).
- Up to 4.55x RID improvement, 5.02x latency cut, 2.56x mapping coverage, 0.22 vs 0.51 size ratio against CCSDS 121.0-B-3.
- Validated on Jetson TX2 Flat-Sat hardware plus real-TLE constellation simulation (Landsat-8, Sentinel-2A, SKYSAT-A); stable thermals and energy.
- No uplink dependency (unlike Earth+-style reference distribution) and preserves data completeness (unlike filter-and-discard schemes).

## Key technical points (ZH)

- 重访感知差分：按轨道对齐的历史参考使卫星只需传输发生变化的感兴趣区域，而非整幅图像。
- 三级星载流水线：云指示器（空间+时间连续性）→ 粗到细参考选择（地理查询 + SURF 一致性投票）→ 集成式局部变化检测（CSR 稀疏编码输出）。
- RID 分数提升至多 4.55 倍、时延降 5.02 倍、制图覆盖扩大 2.56 倍、压缩尺寸比 0.22 对 CCSDS 121.0-B-3 的 0.51。
- 在 Jetson TX2 Flat-Sat 硬件与真实 TLE 星座仿真（Landsat-8、Sentinel-2A、SKYSAT-A）上验证；热与能耗稳定。
- 不依赖上行链路（区别于 Earth+ 式参考分发），且保持数据完整性（区别于过滤丢弃方案）。

## Why it matters / what's new (EN)

The KB's in-orbit computing thread (2026-07-28's in-orbit edge coverage window) has mostly framed onboard compute as an AI-inference story; Stride is the first entry to weaponize *orbital mechanics itself* as the compression prior — the revisit cycle becomes the reference cache key. The 0.22-vs-0.51 result against CCSDS 121.0-B-3 is a direct challenge to the standards baseline for EO downlink, and the Jetson-class hardware validation makes it deployable on current smallsat OBCs rather than hypothetical accelerators.

## Why it matters / what's new (ZH)

本库的在轨计算主线（2026-07-28 的在轨边缘覆盖窗口）此前大多把星载计算框定为 AI 推理故事；Stride 是首个把「轨道力学本身」武器化为压缩先验的条目——重访周期成为参考缓存的键。对 CCSDS 121.0-B-3 的 0.22 对 0.51 结果是对 EO 下行标准基线的直接挑战，而 Jetson 级硬件验证使其可部署于现役小卫星星载计算机，而非假想的加速器。

## Images

![Stride framework overview | Stride 框架总览](https://arxiv.org/html/2607.25813v1/x1.png)
![Onboard processing pipeline | 星载处理流水线](https://arxiv.org/html/2607.25813v1/x2.png)
