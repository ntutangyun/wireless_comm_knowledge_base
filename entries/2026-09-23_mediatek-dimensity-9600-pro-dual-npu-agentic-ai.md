---
id: 2026-09-23_mediatek-dimensity-9600-pro-dual-npu-agentic-ai
date_published: 2026-09-15
date_found: 2026-09-23
technology: edge-ai
type: product
title_en: "MediaTek Dimensity 9600 Pro: 2nm dual-NPU flagship chip targets 30B-parameter on-device models"
title_zh: "MediaTek 天玑 9600 Pro：2nm 双 NPU 旗舰芯片，主打 300 亿参数端侧模型"
url: "https://www.mediatek.com/press-room/mediatek-dimensity-9600-pro-sets-new-standard-for-flagship-smartphone-chips"
source_quality: full
topics: [Dimensity-9600-Pro, NPU-1090, Super-Efficient-NPU, LPDDR6, agentic-AI, smartphone-SoC]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

MediaTek announced the Dimensity 9600 Pro flagship smartphone chip on 15 September 2026, its first mobile SoC built on TSMC's 2nm process. The CPU uses a "2+3+3" all-big-core cluster (two C2-Ultra cores at 4.55GHz, three C2-Pro cores at 4.35GHz, three more C2-Pro cores at 3.1GHz) and MediaTek reports a 61% reduction in multi-core power consumption alongside up to 17% higher single-core and up to 15% higher multi-core performance versus the prior generation. The chip brings LPDDR6 memory and UFS 5.0 storage support to the Dimensity platform for the first time, paired with a 34.5MB system cache and a new G2-Ultra NX GPU (claimed 27% higher peak performance, 24% lower power at peak, 18% faster ray tracing).

The AI story centers on a dual-NPU design plus what MediaTek calls an "Agentic AI Engine." The NPU 1090 targets generative and agentic workloads and is claimed by MediaTek to deliver 51% higher LLM prefill performance and 55% higher token generation per watt vs the previous generation, with support for on-device models up to 30 billion parameters. A second-generation Super Efficient NPU runs always-on AI tasks (wake word, sensing) at a claimed 40% lower power draw. All of these percentage figures are MediaTek's own vendor-tested comparisons against its previous-generation chip, run on demo devices in MediaTek's labs — the press release contains no independent or third-party benchmark results, and no absolute TOPS figure is disclosed for either NPU. First smartphones using the Dimensity 9600 Pro (and the companion 9600M) are expected to launch this quarter.

## Summary (ZH)

MediaTek 于 2026 年 9 月 15 日发布旗舰智能手机芯片天玑 9600 Pro，这是其首款采用台积电 2nm 制程的移动 SoC。CPU 采用"2+3+3"全大核集群（两颗 C2-Ultra 大核，主频 4.55GHz；三颗 C2-Pro 核心，主频 4.35GHz；另外三颗 C2-Pro 核心，主频 3.1GHz），官方称相较上一代多核功耗降低 61%，单核性能最高提升 17%，多核性能最高提升 15%。该芯片首次为天玑平台带来 LPDDR6 内存与 UFS 5.0 存储支持，配备 34.5MB 系统缓存及全新 G2-Ultra NX GPU（官方称峰值性能提升 27%，峰值功耗降低 24%，光线追踪速度提升 18%）。

AI 部分的核心是双 NPU 设计，外加 MediaTek 所称的"智能体 AI 引擎"（Agentic AI Engine）。NPU 1090 面向生成式与智能体工作负载，官方称相较上一代，LLM 预填充性能提升 51%，单位功耗的 token 生成量提升 55%，并支持最高 300 亿参数的端侧模型。第二代超高能效 NPU 负责常开型 AI 任务（唤醒词、感知），官方称功耗降低 40%。以上所有百分比数字均为 MediaTek 自行在其实验室演示机上、相对上一代芯片测得的厂商自测结果——新闻稿未提供任何独立第三方基准测试结果，也未披露两颗 NPU 各自的绝对 TOPS 数值。搭载天玑 9600 Pro（及配套的 9600M）的首批手机预计将于本季度上市。

## Key technical points (EN)

- **Process**: TSMC 2nm — MediaTek's first 2nm mobile SoC.
- **CPU**: 2+3+3 all-big-core cluster (2× C2-Ultra @4.55GHz, 3× C2-Pro @4.35GHz, 3× C2-Pro @3.1GHz); vendor-claimed 61% lower multi-core power, up to +17%/up to +15% single/multi-core performance vs. prior generation.
- **Memory/storage**: brings LPDDR6 and UFS 5.0 support to the Dimensity platform for the first time; 34.5MB cache.
- **GPU**: G2-Ultra NX — vendor-claimed +27% peak performance, -24% power at peak, +18% ray-tracing speed.
- **NPU 1090** (generative/agentic): vendor-claimed +51% LLM prefill performance, +55% tokens-per-watt vs the previous generation, per MediaTek; supports on-device models up to 30B parameters.
- **Second-generation Super Efficient NPU** (always-on): vendor-claimed 40% lower power for always-on AI.
- **Disclosure gap**: no absolute TOPS figures for either NPU, and every percentage comparison is MediaTek's own lab measurement against its own prior-generation chip — no independent benchmark cited.
- Launch: announced 2026-09-15; first devices expected this quarter.

## Key technical points (ZH)

- **制程**：台积电 2nm —— MediaTek 首款 2nm 移动 SoC。
- **CPU**：2+3+3 全大核集群（2× C2-Ultra @4.55GHz，3× C2-Pro @4.35GHz，3× C2-Pro @3.1GHz）；官方称相较上一代多核功耗降低 61%，单核/多核性能分别最高提升 17%/15%。
- **内存/存储**：天玑平台首次支持 LPDDR6 与 UFS 5.0；34.5MB 缓存。
- **GPU**：G2-Ultra NX —— 官方称峰值性能 +27%，峰值功耗 -24%，光追速度 +18%。
- **NPU 1090**（生成式/智能体）：官方称相较上一代，LLM 预填充性能 +51%，单位功耗 token 生成量 +55%；支持最高 300 亿参数的端侧模型。
- **第二代超高能效 NPU**（常开）：官方称常开 AI 功耗降低 40%。
- **披露缺口**：两颗 NPU 均未公布绝对 TOPS 数值，所有百分比对比均为 MediaTek 自家实验室相对上一代芯片的自测结果，未引用任何独立基准测试。
- 发布时间：2026-09-15；首批搭载机型预计本季度上市。

## Why it matters / what's new (EN)

This KB already tracks the on-device NPU race across generations (e.g. 2026-08-31_litert-cross-vendor-npu-backend-matrix for the cross-vendor runtime side, and prior Dimensity 9500/9400 references). The Dimensity 9600 Pro — which MediaTek says makes it the first company to announce a 2nm chip — is the next data point in that trend line, bringing LPDDR6 and UFS 5.0 support to the Dimensity platform for the first time and setting an explicit 30B-parameter on-device model target. Consistent with recent flagship silicon launches (Arduino VENTUNO Q (on Qualcomm Dragonwing), Apple AFM 3, Microsoft Aion), the entry is logged with its vendor-only benchmark caveat made explicit rather than repeated as fact — the percentage claims describe MediaTek's own generation-over-generation comparison, not an absolute or third-party-verified capability level.

## Why it matters / what's new (ZH)

本知识库已在跟踪历代端侧 NPU 竞赛（例如 2026-08-31_litert-cross-vendor-npu-backend-matrix 覆盖跨厂商运行时侧，此前也记录过天玑 9500/9400 的相关信息）。天玑 9600 Pro——MediaTek 称这使其成为首家宣布 2nm 芯片的公司——是这条趋势线上的下一个数据点，首次为天玑平台带来 LPDDR6 与 UFS 5.0 支持，并明确给出 300 亿参数的端侧模型目标。与近期旗舰芯片发布的情况一致（Arduino VENTUNO Q（基于高通 Dragonwing）、苹果 AFM 3、微软 Aion），本条目明确标注了"厂商自测"这一前提，而非将百分比数字当作既定事实复述——这些数字描述的是 MediaTek 自身的代际对比，而非绝对能力水平或经第三方验证的结果。

## Images

*(No redistributable images for this entry — the press-room page exposes only MediaTek's brand logo assets, no product renders or benchmark charts suitable for hotlinking.)*
