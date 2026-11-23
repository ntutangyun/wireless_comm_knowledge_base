---
id: 2026-11-23_arxiv-gnss-wasp-uav-swarm-transmitter-parallax-detection
date_published: 2026-11-19
date_found: 2026-11-23
type: academic-paper
technology: satellite
title_en: "Detecting Formation-Preserving GNSS Spoofing of UAV Swarms through Transmitter Parallax in Pseudorange and Doppler"
title_zh: "利用伪距与多普勒中的发射机视差检测无人机集群的保持队形 GNSS 欺骗"
url: "https://arxiv.org/abs/2611.26023"
source_quality: full
topics: [GNSS, spoofing, UAV-swarm, pseudorange, Doppler, likelihood-ratio-test, GNSS-WASP]
topic_primary: sat-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Park and Yoo (Jeonbuk National University) study GNSS spoofing of UAV swarms that defend themselves by comparing reported positions with a known formation. In the GNSS-WASP attack, one transmitter per satellite, a few kilometres away, shifts the whole swarm while keeping its formation, so the position-level check passes. The paper argues that the attack still leaves a trace below the position level: because the transmitters are close, each drone sees them at a slightly different angle, and this parallax bends the signal arrival times across a 90 m swarm by 20-40 cm for a transmitter at 5 km, whatever delays the attacker applies.

The proposed detector is a likelihood ratio test on the pseudoranges and Doppler that every drone already measures, with receiver clocks and attacker delays treated as unknown and no extra antennas. Nuisance terms (clocks, per-satellite delays and frequency offsets, drone velocities, Doppler tracking lag, UWB shape error) are projected out, and the residual is scored against a basis precomputed from the ephemeris and planned trajectory. A pseudorange-only test and a joint pseudorange-plus-Doppler test are combined with a Bonferroni split.

Evaluation is simulation only, using real GPS and (in one section) Galileo broadcast ephemerides, a 16-drone 4x4 grid with 30 m spacing at 80 m altitude, and a 2^-9 per-window false-alarm rate matching GNSS-WASP. The authors state no signals were transmitted and no aircraft flown.

## Summary (ZH)

Park 与 Yoo（全北国立大学）研究无人机集群的 GNSS 欺骗问题：集群通过比对上报位置与已知队形来防御。在 GNSS-WASP 攻击中，每颗卫星对应一台相距数公里的发射机，使整个集群整体位移而队形不变，因此位置层面的检查无法发现。论文指出，攻击仍会在位置层以下留下痕迹：发射机距离较近，各无人机看到它们的角度略有不同，这种视差使 90 m 宽的集群内信号到达时间产生弯曲，5 km 处发射机对应 20-40 cm，且与攻击者施加的延迟无关。

所提检测器是对每架无人机本来就测得的伪距与多普勒做似然比检验，接收机钟差和攻击者延迟均视为未知，无需额外天线。检验先投影掉干扰项（钟差、各卫星延迟与频偏、无人机速度、多普勒跟踪滞后、UWB 形状误差），再将残差与由星历和计划轨迹预先算出的基底做打分；仅伪距检验与伪距加多普勒联合检验按 Bonferroni 方式合并。

评估仅为仿真：使用真实 GPS 及（某一节中的）Galileo 广播星历，16 架无人机、4x4 网格、间距 30 m、高度 80 m，单窗口虚警率 2^-9，与 GNSS-WASP 一致。作者声明未发射任何信号，也未实际飞行。

## Key technical points (EN)

- Threat model: GNSS-WASP (one transmitter per satellite, about 5 km from a reference point) is the main target; single-transmitter spoofing and a ground antenna array that reproduces the satellite field on the swarm's flight plane are also covered. Per-victim tailored spoofing is out of scope.
- Physical basis: a real satellite is about 2x10^4 km away so its wavefront is flat across the swarm, whereas a transmitter at distance d delays the signal at a drone a distance q from the swarm centre by about q^2/(2d), of order B^2/(8d) across a swarm of width B (0.20 m at the edge, 0.40 m at the corners of a 90 m swarm at d = 5 km). When the transmitters fly with the swarm (the paper's default attacker), the Doppler parallax appears only when drones have different velocities, for example in a formation turn.
- Test: linearised generalised likelihood ratio on projected residuals; under no attack the score is chi-square distributed, and a whitened version handles first-order Gauss-Markov time-correlated noise.
- Setup: code pseudorange noise 0.3 m (also 1 m), Doppler noise 0.05 m/s or 0.005 m/s (precise), UWB shape error 0.1 m per axis, 10 s windows, straight flight or a 5 deg/s turn, 300 Monte Carlo trials per condition; baselines are the GNSS-WASP countermeasure (pairwise distance check, three variants) and per-drone RAIM.
- Results (16 drones, transmitters at 5 km): 13-60% of 10 s windows detected in straight flight, and every window during a turn with a precise Doppler receiver, versus at most 5% for the GNSS-WASP countermeasure. Transmitters at 2 km were always detected, per the paper's text. Widening the swarm from 90 m to 300 m raises the evasion distance from 3.4-5.6 km to 42-65 km, scaling with swarm width squared.
- An adaptive attacker that optimises transmitter placement reduced the trace by at most 1.8% with 16 drones, and by 8-42% with 4 drones.
- Limitations stated by the authors: simulation only, no receiver tracking loops or multipath, noise correlation of small receivers not yet measured (under time-correlated noise straight-flight detection falls to 0-0.12 for correlation times of 2 s or more), detection but not position recovery, and a planned cabled validation with recorded genuine and software-generated counterfeit signals.

## Key technical points (ZH)

- 威胁模型：主要针对 GNSS-WASP（每颗卫星一台发射机，距参考点约 5 km）；同时涵盖单发射机欺骗，以及在集群飞行平面上复现卫星场的地面天线阵列。针对单个受害者的定制欺骗不在范围内。
- 物理基础：真实卫星距离约 2x10^4 km，波前在集群范围内是平面；而距离为 d 的发射机使距集群中心 q 处的无人机多出约 q^2/(2d) 的路径，对宽度为 B 的集群约为 B^2/(8d) 量级（d = 5 km、90 m 集群时边缘 0.20 m、角点 0.40 m）。当发射机随集群飞行（论文默认的攻击者）时，多普勒中仅当各无人机速度不同（如队形转弯）时才出现视差。
- 检验：对投影后残差做线性化广义似然比检验；无攻击时得分服从卡方分布，白化版本可处理一阶高斯-马尔可夫的时间相关噪声。
- 设置：码伪距噪声 0.3 m（也测试 1 m），多普勒噪声 0.05 m/s 或 0.005 m/s（高精度），UWB 形状误差每轴 0.1 m，10 s 窗口，直线飞行或 5 度/秒转弯，每个条件 300 次蒙特卡洛；基线为 GNSS-WASP 对策（成对距离检查，三种变体）和单机 RAIM。
- 结果（16 架无人机，发射机 5 km）：直线飞行下 13-60% 的 10 s 窗口被检出，配备高精度多普勒接收机的转弯过程中每个窗口均被检出，而 GNSS-WASP 对策至多 5%。按论文文字，2 km 处的发射机总被检出。将集群宽度从 90 m 增至 300 m，规避距离由 3.4-5.6 km 增至 42-65 km，与集群宽度平方成比例。
- 自适应攻击者优化发射机布置后，16 架无人机时痕迹最多降低 1.8%，4 架时降低 8-42%。
- 作者给出的局限：仅为仿真，未建模接收机跟踪环路与多路径，小型接收机的噪声相关性尚未测量（在时间相关噪声下，相关时间 2 s 及以上时直线飞行检出率降至 0-0.12），只检测不恢复位置，后续计划用录制的真实信号与软件生成的欺骗信号做线缆连接验证。

## Why it matters / what's new (EN)

The KB already holds the authors' companion paper ([2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms](2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms.md), rigid-covert GNSS spoofing of UAV swarms), which showed that an exact common shift of a swarm is invisible to relative-geometry checks and needs absolute anchors. This paper covers the realizable case, transmitters a few kilometres away, and adds a multi-receiver geometric check using only measurements a swarm already makes. The evidence is simulation with real constellation geometry; satellite-geometry dependence is visible in the paper (GPS alone gives a median detection score of 0.52 for straight flight, Galileo added raises it to 0.91), and the system under study is the UAV receiver side rather than a satellite link.

## Why it matters / what's new (ZH)

KB 已收录作者的配套论文（[2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms](2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms.md)，无人机集群刚性隐蔽 GNSS 欺骗条目），该文指出集群整体精确平移对相对几何检查不可见，需要绝对锚点。本文针对可实现的情形（发射机在数公里外），增加了一种只用集群已有测量值的多接收机几何检验。证据为采用真实星座几何的仿真；论文中可见对卫星几何的依赖（仅 GPS 时直线飞行的检测得分中位数为 0.52，加入 Galileo 后为 0.91），所研究的对象是无人机接收端，而非卫星链路。

## Images

None.
