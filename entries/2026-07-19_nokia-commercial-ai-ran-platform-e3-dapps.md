---
id: 2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps
date_published: 2026-07-15
date_found: 2026-07-19
type: industry-news
technology: cellular
title_en: "Nokia launches first commercial GPU-based AI-RAN platform — anyRAN + NVIDIA ARC-Pro, with O-RAN E3 dApps as the differentiator"
title_zh: "诺基亚发布首个商用 GPU AI-RAN 平台——anyRAN + 英伟达 ARC-Pro，以 O-RAN E3 dApps 为差异化关键"
url: https://the-mobile-network.com/2026/07/when-it-comes-to-nokias-new-ai-ran-keep-your-eye-on-the-dapps/
source_quality: full
topics: [AI-RAN, O-RAN, dApps, E3-interface, NVIDIA, massive-MIMO]
topic_primary: cellular-ai
topics_secondary: [open-ran, cellular-massive-mimo]
novelty_score: 3
---

## Summary (EN)

On July 15, 2026 Nokia announced what it calls the industry's first **commercial AI-RAN platform**, pairing its anyRAN software with NVIDIA's GPU-accelerated Aerial / ARC-Pro foundation. The headline claim: more than 100% spectral-efficiency gain by 2028 — effectively doubling mobile traffic capacity from licensed spectrum — under optimal conditions (highly congested TDD massive-MIMO sites). Pilot deployments begin by end-2026 (SK Telecom named in coverage), with full commercial availability targeted for 2027. GPU-hosted functions include multi-user MIMO pairing, non-linear channel estimation, and carrier aggregation with deep-learning transmitters/receivers, while remaining O-RAN compliant (fronthaul splits, O1/O2 interfaces).

The most architecturally significant element, per The Mobile Network's July 16 analysis, is Nokia's adoption of the **O-RAN-proposed E3 interface** enabling **dApps (distributed applications)** — applications that interact directly with the O-DU and O-CU at low latency, overcoming the control-loop limitations of xApps/rApps. E3 dApps enable closed-loop control for dynamic spectrum allocation, positioning, and sensing-assisted mobility (ISAC), plus geolocation and robotics use cases, with NVIDIA's CUDA developer ecosystem as the third-party innovation surface.

This crystallizes a fundamental architectural divergence with Ericsson, which began selling a CPU-based AI-in-RAN software subscription in June 2026 (up to 20% downlink throughput, ~10% spectral-efficiency gain, 15+ live deployments) that runs on existing baseband silicon with no GPUs. Nokia is betting the RAN becomes a GPU-hosted software platform; Ericsson is optimizing within installed hardware. Meanwhile Qualcomm's reported small-cell exit narrows the vendor field as Nokia positions NVIDIA silicon for 6G radio networks.

## Summary (ZH)

2026 年 7 月 15 日，诺基亚宣布推出其所称的业界首个**商用 AI-RAN 平台**，将 anyRAN 软件与英伟达 GPU 加速的 Aerial / ARC-Pro 基础设施结合。核心宣称：到 2028 年频谱效率提升超过 100%——即在最优条件下（高负载 TDD 大规模 MIMO 站点）将现有授权频谱的移动流量容量翻倍。试点部署 2026 年底启动（报道点名 SK 电讯），2027 年全面商用。GPU 承载的功能包括多用户 MIMO 配对、非线性信道估计、以及采用深度学习收发机的载波聚合，同时保持 O-RAN 合规（前传切分、O1/O2 接口）。

据 The Mobile Network 7 月 16 日的分析，架构上最重要的元素是诺基亚采用 **O-RAN 提议的 E3 接口**以支持 **dApps（分布式应用）**——可低时延直接与 O-DU、O-CU 交互的应用，突破 xApp/rApp 控制环路的局限。E3 dApps 可为动态频谱分配、定位、感知辅助移动性（ISAC）提供闭环控制，并支持地理定位与机器人等用例；英伟达 CUDA 开发者生态是第三方创新的入口。

这使与爱立信的根本性架构分歧清晰化：爱立信 2026 年 6 月开始销售基于 CPU 的 AI-in-RAN 软件订阅（下行吞吐最高 +20%、频谱效率约 +10%，15+ 现网部署），无需 GPU、运行于现有基带芯片。诺基亚押注 RAN 演变为 GPU 承载的软件平台；爱立信则在既有硬件内做优化。同时，高通据报道退出小基站市场，使诺基亚为 6G 无线网络布局英伟达芯片时的厂商格局进一步收窄。

## Key technical points (EN)

- First commercial AI-RAN platform: Nokia anyRAN + NVIDIA Aerial/ARC-Pro GPU compute; pilots end-2026 (SK Telecom), commercial 2027.
- Claim: >100% spectral-efficiency gain by 2028 on congested TDD massive-MIMO sites (vs Ericsson's shipped 10–15% CPU-based gains).
- GPU-hosted L1/L2 functions: MU-MIMO pairing, non-linear channel estimation, CA with deep-learning transceivers.
- **E3 interface + dApps**: O-RAN-proposed low-latency control plane directly at O-DU/O-CU — beyond xApp (near-RT) and rApp (non-RT) loops; use cases: dynamic spectrum allocation, positioning, sensing-assisted mobility, ISAC, robotics.
- O-RAN compliance retained: standard fronthaul splits, O1/O2 management interfaces; CUDA ecosystem opens the RAN to third-party dApp developers.
- Vendor divergence: Ericsson AI-in-RAN = software on existing silicon (in KB: 2026-07-05_ericsson-ai-in-ran-software-launch); Nokia = GPU platform bet; Qualcomm reportedly exiting small cells.

## Key technical points (ZH)

- 首个商用 AI-RAN 平台：诺基亚 anyRAN + 英伟达 Aerial/ARC-Pro GPU 算力；2026 年底试点（SK 电讯），2027 年商用。
- 宣称：到 2028 年在高负载 TDD 大规模 MIMO 站点频谱效率提升 >100%（对比爱立信已交付的 10–15% CPU 方案增益）。
- GPU 承载的 L1/L2 功能：MU-MIMO 配对、非线性信道估计、深度学习收发机的载波聚合。
- **E3 接口 + dApps**：O-RAN 提议的低时延控制面，直达 O-DU/O-CU——超越 xApp（近实时）与 rApp（非实时）环路；用例：动态频谱分配、定位、感知辅助移动性、ISAC、机器人。
- 保持 O-RAN 合规：标准前传切分、O1/O2 管理接口；CUDA 生态向第三方 dApp 开发者开放 RAN。
- 厂商分歧：爱立信 AI-in-RAN = 既有芯片上的软件（KB 条目 2026-07-05_ericsson-ai-in-ran-software-launch）；诺基亚 = GPU 平台押注；高通据报道退出小基站。

## Why it matters / what's new (EN)

The KB has tracked AI-RAN as research (2026-05-29_ariadne-airan-link-adaptation-digital-twin, 2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator) and as Ericsson's incremental software product (2026-07-05_ericsson-ai-in-ran-software-launch). Nokia's launch is the first *commercial platform* commitment to the GPU-native architecture — and the first commercial adoption signal for the E3 interface/dApps concept, which until now existed only in O-RAN Alliance proposal papers. If E3 hardens into an O-RAN spec, it becomes the standardized low-latency hook for third-party AI at the DU/CU — a structural change in who can program the RAN. Watch: E3's formal status in the O-RAN Alliance, SK Telecom pilot results, and whether the 2028 "double efficiency" claim survives contact with non-optimal sites.

## Why it matters / what's new (ZH)

KB 此前对 AI-RAN 的追踪停留在研究侧（2026-05-29_ariadne-airan-link-adaptation-digital-twin、2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator）与爱立信的渐进式软件产品（2026-07-05_ericsson-ai-in-ran-software-launch）。诺基亚此次发布是对 GPU 原生架构的首个*商用平台*承诺——也是 E3 接口/dApps 概念的首个商用采纳信号（此前仅存在于 O-RAN 联盟提案文件中）。若 E3 固化为 O-RAN 规范，它将成为第三方 AI 接入 DU/CU 的标准化低时延挂点——改变"谁能对 RAN 编程"的格局。关注：E3 在 O-RAN 联盟的正式地位、SK 电讯试点结果、以及"2028 年效率翻倍"的宣称能否在非理想站点成立。

## Images

![GPU-based RAN architecture | GPU 化 RAN 架构示意](assets/2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps/gpu-based-ran.webp)
