---
id: 2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms
date_published: 2026-08-07
date_found: 2026-08-12
type: academic-paper
technology: satellite
title_en: "Rigid-Covert GNSS Spoofing of UAV Swarms: A Structural Blind Spot, Its Detection Limit, and Absolute-Anchor Defenses"
title_zh: "无人机集群的刚性隐蔽 GNSS 欺骗：结构性盲区、检测极限与绝对锚点防御"
url: "https://arxiv.org/abs/2608.06885"
source_quality: full
topics: [GNSS, spoofing, UAV-swarm, security, PNT, anchor-recovery]
topic_primary: sat-ai
topics_secondary: [sat-direct-device]
novelty_score: 3
---

## Summary (EN)
This paper (Minseok Park, Joon Soo Yoo — Jeonbuk National University; arXiv 7 Aug 2026, routed from the cs.CR security sweep) exposes a fundamental blind spot in the leading class of GNSS-spoofing defenses for drone swarms — those that cross-check each drone's reported GNSS position against the measured inter-drone geometry. The authors prove that a **common-mode rigid translation** of the whole formation preserves every pairwise distance and is therefore mathematically **unobservable** to any relative-geometry-only detector — a direct consequence of gauge freedom in network localization. An attacker who slowly ramps the entire swarm's GNSS in unison (gradual enough to stay inside onboard failsafe gates, common across all drones, distance-preserving) is invisible to consensus/relative-position checks while walking the swarm off course.

They formalize a **detection-limit law**: the minimum detectable covert ramp rate is v* ≈ 2.66γ + 1.3 cm/s, where γ is the anchor's registration-drift rate — validated empirically (measured slope 2.66 vs predicted 2.67, R²=0.99). Representative relative-only defenses (distance verification, SDP feasibility, SwarmRaft, formation localization) sit at chance on this attack (AUC ≈ 0.48–0.56). The fix must inject **absolute** information: an anchor-rooted recovery pipeline reconstructs swarm shape by classical MDS on inter-drone ranges, aligns it to a trusted-anchor subset via Byzantine-robust RANSAC, and propagates the transform to recover absolute positions of all N drones. Minimum conditions are made explicit (≥1 trusted anchor for translation, ≥3 non-collinear to kill MDS reflection ambiguity, m ≥ max(2f+1, f+3) under f Byzantine anchors). In eight-vehicle ArduPilot SITL, non-anchored drones recover to 0.39 m despite ~10 m GNSS drift; a Gazebo rendered-vision capstone reaches 7.1 cm. Robustness holds to 25% anchor compromise and collapses at the 50% Byzantine barrier. All evaluation is simulation-based (no RF spoofing hardware or physical flights).

## Summary (ZH)
本文（Minseok Park、Joon Soo Yoo——全北国立大学；2026 年 8 月 7 日 arXiv，经 cs.CR 安全扫描路由）揭示了无人机集群主流 GNSS 欺骗防御的一个根本盲区——那些将每架无人机上报的 GNSS 位置与实测机间几何做交叉校验的防御。作者证明：整个编队的**共模刚性平移**保持所有两两距离不变，因而对任何仅依赖相对几何的检测器在数学上**不可观测**——这是网络定位中规范自由度（gauge freedom）的直接后果。攻击者只要缓慢、统一地拉偏整群 GNSS（足够渐进以停留在机载失效保护门限内、对所有无人机共模、保距），就能对共识/相对位置校验隐形，同时把集群带离航线。

作者给出**检测极限定律**：最小可检测隐蔽斜坡率 v* ≈ 2.66γ + 1.3 cm/s，其中 γ 为锚点配准漂移率——并实证验证（实测斜率 2.66 对预测 2.67，R²=0.99）。代表性的仅相对防御（距离校验、SDP 可行性、SwarmRaft、编队定位）在此攻击上处于随机水平（AUC ≈ 0.48–0.56）。修复必须注入**绝对**信息：锚点根定的恢复流水线以经典 MDS 由机间距离重建集群形状，经拜占庭鲁棒 RANSAC 对齐到可信锚点子集，再传播变换以恢复全部 N 架无人机的绝对位置。最小条件被明确给出（平移需 ≥1 可信锚点，消除 MDS 反射歧义需 ≥3 非共线，f 个拜占庭锚点下 m ≥ max(2f+1, f+3)）。在八机 ArduPilot SITL 中，非锚点无人机在约 10 m GNSS 漂移下恢复至 0.39 m；Gazebo 渲染视觉压轴实验达 7.1 cm。鲁棒性维持至 25% 锚点被攻陷、在 50% 拜占庭壁垒处崩溃。所有评测基于仿真（无 RF 欺骗硬件或真实飞行）。

## Key technical points (EN)
- **Blind spot:** common-mode rigid translation preserves all pairwise distances → unobservable to relative-geometry-only detectors (gauge freedom).
- **Attack (RigidShift):** common-mode + gradual (inside failsafe gates) + geometry-preserving; single spoofer exact for N ≤ 9, larger needs wide-area multi-TX.
- **Detection-limit law:** v* ≈ 2.66γ + 1.3 cm/s (γ = anchor drift rate); measured slope 2.66 vs predicted 2.67 (R²=0.99); relative-only defenses AUC ≈ 0.48–0.56.
- **Defense:** anchor-rooted recovery = MDS on ranges → Byzantine-robust RANSAC align to trusted anchors → transform propagation; needs ≥3 non-collinear anchors, m ≥ max(2f+1, f+3).
- **Results:** 8-vehicle ArduPilot SITL 0.39 m recovery (vs ~10 m drift); rendered-vision 7.1 cm; robust to 25% compromise, collapses at 50%. Simulation-only.

## Key technical points (ZH)
- **盲区：** 共模刚性平移保持所有两两距离 → 对仅相对几何检测器不可观测（规范自由度）。
- **攻击（RigidShift）：** 共模 + 渐进（在失效保护门限内）+ 保距；单欺骗源对 N ≤ 9 精确，更大需广域多发射。
- **检测极限定律：** v* ≈ 2.66γ + 1.3 cm/s（γ 为锚点漂移率）；实测斜率 2.66 对预测 2.67（R²=0.99）；仅相对防御 AUC ≈ 0.48–0.56。
- **防御：** 锚点根定恢复 = 距离 MDS → 拜占庭鲁棒 RANSAC 对齐可信锚点 → 变换传播；需 ≥3 非共线锚点，m ≥ max(2f+1, f+3)。
- **结果：** 八机 ArduPilot SITL 恢复 0.39 m（对约 10 m 漂移）；渲染视觉 7.1 cm；鲁棒至 25% 被攻陷，50% 崩溃。仅仿真。

## Why it matters / what's new (EN)
GNSS spoofing of autonomous systems is a growing security concern, and drone-swarm defenses have leaned heavily on the intuition that "the swarm can police itself" via relative geometry. This paper gives a clean impossibility result showing exactly where that intuition fails — a rigid common-mode shift — and pairs it with a quantitative detection floor and a concrete absolute-anchor recovery method with stated minimum trust conditions. For the KB it opens the GNSS/PNT-security angle alongside the constellation-communication entries, and its gauge-freedom framing is a reusable lens for any cooperative-localization security analysis. Novelty 3: the formal blind-spot + detection-limit law + Byzantine-robust recovery is a coherent, well-validated contribution, tempered only by its simulation-only scope.

## Why it matters / what's new (ZH)
自主系统的 GNSS 欺骗是日益严重的安全问题，而无人机集群防御长期依赖"集群可经相对几何自我监管"的直觉。本文给出清晰的不可能性结果，精确指出该直觉在何处失效——刚性共模平移——并配以量化检测下限与带明确最小信任条件的绝对锚点恢复方法。对 KB 而言，它在星座通信条目之外开辟了 GNSS/PNT 安全视角，其规范自由度框架是任意协作定位安全分析的可复用视角。novelty 3：形式化盲区 + 检测极限定律 + 拜占庭鲁棒恢复是一个连贯、验证充分的贡献，仅受限于其纯仿真范围。

## Images
![RigidShift threat: the whole swarm drifts together while all pairwise distances stay invariant | RigidShift 威胁：整群一起漂移而所有两两距离保持不变](https://arxiv.org/html/2608.06885v1/figures/fig1_threat.png)
![Anchor-rooted recovery (Tier-2 SITL): anchored and non-anchored drones hold near 0.5 m despite ~10 m GPS drift | 锚点根定恢复（Tier-2 SITL）：锚点与非锚点无人机在约 10 m GPS 漂移下维持约 0.5 m](https://arxiv.org/html/2608.06885v1/figures/report_fig9_recovery.png)
