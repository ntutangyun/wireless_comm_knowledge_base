---
id: 2026-07-24_arxiv-srs-xapp-indoor-localization-oai
date_published: 2026-07-20
date_found: 2026-07-24
type: academic-paper
technology: cellular
title_en: "Uplink SRS-Based Real-Time Indoor Localization System over OpenAirInterface"
title_zh: "基于上行 SRS 的 OpenAirInterface 实时室内定位系统（O-RAN xApp 实现）"
url: "https://arxiv.org/abs/2607.18549"
source_quality: full
topics: [5G-NR, O-RAN, SRS, positioning, xApp, OpenAirInterface]
topic_primary: 5g-nr
topics_secondary: [open-ran, cellular-ai]
novelty_score: 3
---

## Summary (EN)

NTUST (Ray-Guang Cheng's group) and EURECOM (Navid Nikaein, the OpenAirInterface lead) present an end-to-end, real-time indoor localization system built entirely on commercial-grade open 5G infrastructure (arxiv 2607.18549, submitted 2026-07-20, accepted at ICMIC 2026). A Positioning xApp on the Near-RT RIC subscribes to uplink Sounding Reference Signal (SRS) measurements streamed from an OAI gNodeB over the E2 interface (Low Layer Control service model), so channel data is extracted passively without disturbing live UE traffic.

The pipeline converts each Channel Frequency Response into a 32-dimensional physics-aware feature vector — a 16-D power-delay profile (IFFT multipath signature), 8-D trigonometrically-encoded inter-antenna phase differences (approximating AoA), and 8-D power features (path loss + antenna-pair differential symmetry) — feeding a Random Forest regressor (100 trees, depth 12) that outputs 2-D position plus a variance-based uncertainty estimate. In a 6×6 m EURECOM lab with glass-partition multipath, 23,000+ SRS frames yield 0.12 m mean absolute error (85% within 0.5 m) on a standard split, a 42% improvement over an RSSI-only baseline; spatially-separated validation degrades to 1.78 m, honestly flagging the fingerprinting extrapolation limit. Multi-UE positions render as real-time probability heatmaps.

## Summary (ZH)

台湾科技大学（Ray-Guang Cheng 团队）与 EURECOM（OpenAirInterface 负责人 Navid Nikaein）在商用级开源 5G 基础设施上实现了端到端实时室内定位（arxiv 2607.18549，2026-07-20 提交，ICMIC 2026 录用）。定位 xApp 部署在 Near-RT RIC 上，通过 E2 接口（低层控制服务模型）订阅 OAI gNodeB 流式上报的上行探测参考信号（SRS）测量，被动提取信道数据、不干扰在网 UE 通信。

流水线将每个信道频率响应（CFR）转换为 32 维物理感知特征向量 —— 16 维功率时延谱（IFFT 多径特征）、8 维三角编码的天线间相位差（近似到达角）、8 维功率特征（路损 + 天线对差分对称性）—— 输入随机森林回归器（100 棵树、深度 12）输出二维位置及基于方差的不确定度。在 EURECOM 6×6 m 玻璃隔断多径实验室中，23,000+ SRS 帧取得 0.12 m 平均绝对误差（85% 在 0.5 m 内），比仅 RSSI 基线提升 42%；空间分离验证退化到 1.78 m，如实标出指纹外推极限。多 UE 位置以实时概率热图呈现。

## Key technical points (EN)

- Passive SRS extraction via E2 (LLC service model) from an OAI gNB to a Near-RT RIC Positioning xApp — no UE-side changes, no traffic disruption.
- 32-D physics-aware features: 16-D PDP + 8-D trig-encoded inter-antenna phase (AoA proxy) + 8-D power/path-loss symmetry.
- Random Forest (100 trees, depth 12, min-split 20); ensemble variance doubles as an uncertainty output.
- 0.12 m MAE / 85% < 0.5 m on 80/20 split; 0.22 m for RSSI-only baseline; 1.78 m under spatially-separated validation.
- 23,000+ SRS frames, 6×6 m lab, severe glass multipath; real-time multi-UE probability heatmaps.

## Key technical points (ZH)

- 通过 E2（LLC 服务模型）从 OAI gNB 被动提取 SRS 至 Near-RT RIC 定位 xApp —— 无需 UE 侧修改、不干扰业务。
- 32 维物理感知特征：16 维 PDP + 8 维三角编码天线间相位（AoA 代理）+ 8 维功率/路损对称性。
- 随机森林（100 树、深 12、最小分裂 20）；集成方差兼作不确定度输出。
- 80/20 划分下 0.12 m MAE / 85% < 0.5 m；仅 RSSI 基线 0.22 m；空间分离验证 1.78 m。
- 23,000+ SRS 帧、6×6 m 实验室、玻璃隔断强多径；实时多 UE 概率热图。

## Why it matters / what's new (EN)

The KB's cellular positioning coverage so far is search-side (2026-07-08 run checked and excluded a cellular RSSI sim-to-real paper) — this is the first entry demonstrating O-RAN-native positioning as an xApp on real OAI infrastructure, and the first with SRS/CFR-level features rather than RSSI. It complements the O-RAN bin's RIC/dApp entries (e.g. 2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps): the same E2 data path Nokia frames for AI-RAN control here carries a sensing/positioning service, a concrete instance of network-as-a-sensor on open hardware. The honest spatial-generalization gap (0.12 m → 1.78 m) is a useful benchmark for anyone claiming fingerprint-free 5G positioning.

## Why it matters / what's new (ZH)

KB 中蜂窝定位此前仅有搜索侧排查（2026-07-08 排除了一篇蜂窝 RSSI sim-to-real 论文）—— 本条目首次展示以 xApp 形态运行在真实 OAI 基础设施上的 O-RAN 原生定位，也是首个使用 SRS/CFR 级特征而非 RSSI 的条目。它与 open-ran 主题的 RIC/dApp 条目（如 2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps）互补：Nokia 用于 AI-RAN 控制的同一条 E2 数据通路，这里承载了感知/定位服务，是开放硬件上"网络即传感器"的具体实例。诚实标注的空间泛化差距（0.12 m → 1.78 m）为任何声称免指纹 5G 定位的工作提供了有用基准。
