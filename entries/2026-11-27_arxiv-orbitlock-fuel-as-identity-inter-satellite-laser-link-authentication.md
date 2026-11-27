---
id: 2026-11-27_arxiv-orbitlock-fuel-as-identity-inter-satellite-laser-link-authentication
date_published: 2026-11-25
date_found: 2026-11-27
type: academic-paper
technology: satellite
title_en: "Fuel as Identity: Authenticating Inter-Satellite Laser Links after Total Key Compromise"
title_zh: "以燃料为身份：全部密钥泄露后的星间激光链路认证"
url: "https://arxiv.org/abs/2611.34470"
source_quality: full
topics: [optical-inter-satellite-link, authentication, key-compromise, ML-KEM, delta-v, Starlink, position-gated-adversary]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 4
---

## Summary (EN)

Leon Birkel, Mohammad Hamad and Sebastian Steinhorst (Technical University of Munich) address optical inter-satellite links (OISLs) whose security rests on keys alone: once an attacker holds every key of a satellite, no secret is left to authenticate it again, ground rekeying encrypts new keys under the leaked ones, and post-compromise protocols such as the double ratchet assume an authenticated start. Their proposal is to let the satellite's orbit act as the trust anchor. An impostor posing as the compromised satellite must remove the genuine beam at the partner's detector, which on a direct-detection laser link means blocking it from a seat on the straight line of sight. That line is a chord below the curved orbit, so holding the seat costs continuous thrust.

The authors formalise a position-gated Dolev-Yao adversary, prove for satellites on a shared circular orbit a tight lower bound on the delta-v a point-mass craft must spend to keep blocking, and present OrbitLock, a history-chained protocol that combines this physical gate with ML-KEM. They evaluate it on 17,433 possible Starlink crosslinks built from public orbital data (CelesTrak element sets of 26 October 2026, SGP4 propagation, assumed +Grid topology). With one rigid attacking craft per link running the best attack the authors know, and a 1 km exclusion zone enforced by each terminal, the abstract states that every Starlink satellite has a partner on whose link a CubeSat-class impostor runs out of propellant in about two days, while the protocol uses under 0.02% of the link.

## Summary (ZH)

Leon Birkel、Mohammad Hamad 与 Sebastian Steinhorst（慕尼黑工业大学）研究仅依赖密钥保障安全的星间光链路（OISL）：一旦攻击者拿到某颗卫星的全部密钥，就没有任何秘密可再用于认证该卫星；地面重新分发密钥是在已泄露密钥之下加密新密钥，而双棘轮等后泄露（post-compromise）协议又假定起点已被认证。作者的方案是让卫星轨道充当信任锚。冒充被攻陷卫星的攻击者必须在对端探测器处消除真实光束，而在直接探测的激光链路上，这意味着必须在直线视线上的某个位置挡住光束。该直线是位于弯曲轨道下方的弦，因此维持这一位置需要持续推力。

作者形式化了“位置门控”的 Dolev-Yao 攻击者，针对共享圆轨道上的卫星证明了点质量飞行器持续遮挡所需 delta-v 的紧下界，并提出 OrbitLock：一种将该物理门限与 ML-KEM 结合的历史链式协议。评估基于由公开轨道数据构建的 17,433 条可能的 Starlink 交叉链路（2026 年 10 月 26 日的 CelesTrak 星历、SGP4 传播、假设 +Grid 拓扑）。在每条链路一个刚性攻击飞行器、采用作者已知的最优攻击、且每个终端强制 1 km 禁入区的条件下，摘要称每颗 Starlink 卫星都有一个伙伴，其链路上的立方星级冒充者约两天耗尽推进剂，而协议仅占用不到 0.02% 的链路。

## Key technical points (EN)

- Four-step argument: the impostor must remove the genuine signal at the partner (otherwise the two streams add up); light from off the line of sight cannot cancel it because independent light adds in intensity at a direct-detection receiver; the impostor must therefore block from a seat on the line of sight; that line is a chord below the curved orbit, so the seat lies below free fall and needs continuous outward thrust.
- Hold cost: in the Clohessy-Wiltshire frame a craft held at radial offset d below the reference point needs thrust 3n^2 d. On a shared 550 km circular orbit and a 1000 km link, the paper gives 22.5 m/s of delta-v per day beside a terminal, so a 100 m/s CubeSat-class budget lasts 4.4 days, a 500 m/s smallsat 22 days and a 2 km/s heavy platform 89 days (Table IV, reference terminal CubeISL: 20 mm aperture, 1 W, 1550 nm, OOK, 100 Mbps).
- Protocol: rounds run at random times, at most 10 s apart. Each round mixes fresh random bits with a fresh ML-KEM key (public key 1184 bytes, ciphertext 1088 bytes for ML-KEM-768, about 2.5 KB per round) and authenticates under the secret of the previous round. Round zero has no prior secret and is guarded by in-band checks and a fail-closed rule; an attacker already on the on-axis seat passes it, so security comes from the paid history that follows. A satellite needs no crosslink key before launch.
- Adversary model: at most one rigid maneuvering craft per link, holding every key of the compromised satellite; Kerckhoffs's principle; each terminal enforces a 1 km exclusion zone (stated as a parameter of the bound, pending a flight test). Collusion cannot be excluded by position verification, so the bound is worst case only under these assumptions.
- Starlink evaluation: in-plane links have a median length of 1386 km and cost a median 32.7 m/s per day; inter-plane links, median 321 km, cost 7.5 m/s per day. Using each satellite's most expensive link, 98.7% of satellites exhaust a CubeSat-class craft within a week. At the 5400 km reach the paper cites for Starlink terminals, every satellite finds a partner whose link costs at least 69.6 m/s per day.
- Validation: the analytic floor matches numerical propagation with J2 and drag to within 0.25 percent and NASA station-keeping practice to about 3 percent; a released artifact recomputes every bound.
- Defender cost: 0.02 percent of a 100 Mbps link at one round per second. The baseline needs two star tracker heads (1.5 arcsec) with terminal alignment held to 20 microrad; a wavefront check would need a second aperture about 30 cm from the first.
- Stated limits: collusion of two craft taking turns, the exclusion-zone size, authenticating the spacecraft and its position but not the operator, dependence on the Gaussian beam model, and tethers or booms (which could lower the paid offset); the false-alarm rates on real receivers still need tests on real terminals.

## Key technical points (ZH)

- 四步论证：冒充者必须在对端消除真实信号（否则两路信号叠加）；视线之外的光无法抵消真实信号，因为独立光在直接探测接收机上按强度相加；因此冒充者必须在视线上的某个位置遮挡光束；该视线是位于弯曲轨道下方的弦，故该位置低于自由落体轨道，需要持续向外的推力。
- 驻留成本：在 Clohessy-Wiltshire 坐标系中，保持在参考点下方径向偏移 d 处的飞行器需要推力 3n^2 d。对 550 km 共享圆轨道、1000 km 链路，论文给出终端旁每天 22.5 m/s 的 delta-v，因此 100 m/s 的立方星级预算可维持 4.4 天，500 m/s 的小型卫星 22 天，2 km/s 的大型平台 89 天（表 IV；参考终端 CubeISL：20 mm 口径、1 W、1550 nm、OOK、100 Mbps）。
- 协议：在随机时刻执行轮次，间隔最长 10 s。每一轮将新的随机比特与新的 ML-KEM 密钥混合（ML-KEM-768 的公钥 1184 字节、密文 1088 字节，每轮约 2.5 KB），并以上一轮的秘密进行认证。第 0 轮没有先前秘密，由带内检查和故障关闭规则保护；已处于轴上位置的攻击者可通过第 0 轮，因此安全性来自其后需付出代价的历史。卫星在发射前无需任何交叉链路密钥。
- 攻击者模型：每条链路至多一个刚性机动飞行器，持有被攻陷卫星的全部密钥；遵循 Kerckhoffs 原则；每个终端强制 1 km 禁入区（作为界限的参数，有待飞行试验）。位置验证无法排除合谋，因此该界限仅在这些假设下为最坏情形。
- Starlink 评估：星内链路长度中位数 1386 km，成本中位数每天 32.7 m/s；轨道面间链路中位数 321 km，成本每天 7.5 m/s。取每颗卫星成本最高的链路，98.7% 的卫星可在一周内耗尽立方星级飞行器。在论文所引的 Starlink 终端 5400 km 作用距离下，每颗卫星都能找到一个伙伴，其链路成本至少每天 69.6 m/s。
- 验证：解析下界与计入 J2 和大气阻力的数值传播吻合到 0.25% 以内，与 NASA 站位保持实践吻合到约 3%；公开的制品可重算所有界限。
- 防御方开销：每秒一轮时占用 100 Mbps 链路的 0.02%。基线方案需要两个星敏感器探头（1.5 角秒）以及保持在 20 微弧度的终端对准；波前检查则需要距第一口径约 30 cm 的第二口径。
- 声明的局限：两个飞行器轮流占位的合谋、禁入区大小、仅认证航天器及其位置而不认证运营方、对高斯光束模型的依赖、以及可能降低所付偏移的系绳或悬臂；真实接收机上的误报率仍需在真实终端上测试。

## Why it matters / what's new (EN)

The paper's stated gap is that standard satellite key management cannot recover from a total key compromise, and its answer is to price the attacker's position in propellant rather than rely on a secret. The authors note a prior poster abstract stated the insight; this paper adds a security definition, proofs, a full protocol and an evaluation on the Starlink geometry. The authors contrast it with ratchet-based post-compromise schemes, which heal only from an authenticated start and only once the attacker turns passive. All results are analytical and computed from public orbital data; no flight test or hardware measurement is reported, and the Starlink laser topology is assumed.

## Why it matters / what's new (ZH)

论文声明的空白是：标准卫星密钥管理无法从全部密钥泄露中恢复，其回答是以推进剂来为攻击者所处位置定价，而不是依赖某个秘密。作者指出此前有一篇海报摘要提出了这一思路；本文补充了安全定义、证明、完整协议以及基于 Starlink 几何的评估。作者将其与双棘轮类后泄露协议对比：后者只能从已认证的起点恢复，且须等攻击者转为被动。所有结果均为解析推导并由公开轨道数据计算得出，未报告飞行试验或硬件测量，Starlink 的激光拓扑为假设。

## Images

None.
