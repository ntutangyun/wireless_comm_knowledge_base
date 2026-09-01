---
id: 2026-09-01_arxiv-flyblind-cross-slice-timeliness-attack-uav
date_published: 2026-08-27
date_found: 2026-09-01
type: academic-paper
technology: cellular
title_en: "FlyBlind: Cross-Slice Timeliness Attacks on UAV Situational Awareness over 5G"
title_zh: "FlyBlind：针对基于 5G 的无人机态势感知的跨切片及时性攻击"
url: "https://arxiv.org/abs/2608.27604"
source_quality: abstract_only
topics: [5G-SA, network-slicing, soft-isolation, UAV, BVLOS, ground-control-station, C2-link, timeliness-attack, state-staleness, security]
topic_primary: cellular-security
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)
Wagner Comin Sonaglio, Ágney Lopes Roth Ferraz, André Elias Melo, Guevara Noubir and Lourenço Alves Pereira Júnior (arXiv v1, 27 Aug 2026) describe a new attack class against Beyond Visual Line of Sight (BVLOS) drone operations carried over 5G Standalone networks. Such operations share a single User Plane for both command-and-control (C2) traffic and video feedback, and operators typically judge link quality by latency and availability alone, trusting the "soft isolation" between network slices to keep other tenants from interfering. FlyBlind shows that trust is misplaced: an authorized co-tenant on a *neighboring* slice can simply maintain ordinary, legitimate uplink demand — no rogue gNB, no direct interference with the C2 flow itself — and, because idle radio resources are shared across slices under soft isolation, that authorized competition for grants quietly ages the state held at the Ground Control Station (GCS) without the connection ever looking unhealthy. The authors formalize this as "Silent State Staleness": a falsifiable false-healthy predicate where conventional link monitors (which watch latency and availability) fail to detect that the *information* reaching the operator has gone stale.

On a dedicated testbed, the attack drives GCS telemetry age up to roughly 12 seconds, producing position-estimate discrepancies of tens of meters against ground truth, while one-way delay stays in the tens of milliseconds at the 99th percentile and availability holds above 99.9% — the vehicle keeps flying in GUIDED mode without ever triggering a failsafe. The paper's conclusion is that in any deployment with asymmetric uplink enforcement across slices, verifying *freshness of state at the destination* has to be a first-class check, not an inference drawn from link health.

## Summary (ZH)
Wagner Comin Sonaglio、Ágney Lopes Roth Ferraz、André Elias Melo、Guevara Noubir 与 Lourenço Alves Pereira Júnior（arXiv v1，2026 年 8 月 27 日）描述了一类针对基于 5G 独立组网（SA）的超视距（BVLOS）无人机作业的新型攻击。此类作业将指挥控制（C2）流量与视频回传共用同一用户面，运营方通常仅凭时延与可用性判断链路质量，并信任网络切片间的"软隔离"能阻止其他租户的干扰。FlyBlind 表明这种信任是错位的：位于相邻切片上的一个已授权共租户，只需维持普通、合法的上行需求——无需伪基站，也无需直接干扰 C2 流本身——由于软隔离下空闲无线资源在切片间共享，这种已授权的授权竞争会悄然使地面控制站（GCS）所持有的状态陈旧化，而连接本身看起来始终"健康"。作者将其形式化为"静默状态陈旧"（Silent State Staleness）：一个可证伪的"假健康"谓词，常规仅监测时延与可用性的链路监测器无法察觉到达运营方的*信息*本身已经过时。

在专用测试床上，该攻击可使 GCS 遥测年龄饱和至约 12 秒，导致 GCS 位置估计与地面真值相差数十米，而单向时延第 99 百分位仍保持在数十毫秒，可用性高于 99.9%——飞行器全程保持在 GUIDED 模式下飞行，从未触发故障保护机制。论文的结论是：在切片间存在非对称上行授权强制的部署中，验证"目的端状态的新鲜度"必须作为一项独立的一等检查，而不能仅从链路健康状况推断得出。

## Key technical points (EN)
- Setting: BVLOS UAS over 5G SA, shared User Plane for C2 + video, soft isolation between network slices, link quality judged by latency/availability only.
- Attack: an authorized co-tenant on a neighboring slice maintains ordinary legitimate uplink demand; shared idle-resource grants under soft isolation turn authorized competition into GCS state aging — no rogue gNB, no direct C2 interference.
- Formalization: "Silent State Staleness" — a falsifiable false-healthy predicate; conventional latency/availability link monitors do not detect it.
- Testbed results: telemetry age saturates ~12 s; position-estimate discrepancy tens of meters vs. ground truth; OWD p99 in the tens of ms; availability >99.9%; vehicle stays in GUIDED mode, no failsafe triggered.
- Takeaway: destination-side state-freshness verification must be checked independently of link-health signals wherever uplink enforcement is asymmetric across slices.

## Key technical points (ZH)
- 场景：基于 5G SA 的 BVLOS 无人机系统，C2 与视频共用同一用户面，网络切片间为软隔离，链路质量仅凭时延/可用性判断。
- 攻击：相邻切片上已授权的共租户维持普通合法上行需求；软隔离下共享的空闲资源授权，将合法竞争转化为 GCS 状态陈旧化——无需伪基站，也不直接干扰 C2 流。
- 形式化：提出"静默状态陈旧"——一个可证伪的"假健康"谓词；常规仅看时延/可用性的链路监测器无法检测到该现象。
- 测试床结果：遥测年龄饱和于约 12 秒；位置估计与地面真值相差数十米；单向时延 p99 为数十毫秒；可用性 >99.9%；飞行器全程保持 GUIDED 模式，未触发故障保护。
- 结论：在切片间上行授权不对称的部署中，必须将"目的端状态新鲜度"作为独立检查项，而非仅从链路健康信号推断。

## Why it matters / what's new (EN)
The KB's network-slicing bin has covered orchestration, admission control, RL-based slice control and stateful cross-slice *migration* (Orchra, 2026-08-24), but nothing on slicing as an *attack surface*. FlyBlind is the first entry to show that soft isolation between slices — the mechanism virtually every 5G slicing deployment relies on for multi-tenancy — can be exploited by a fully authorized, non-malicious-looking co-tenant to silently degrade a safety-critical application (UAV command-and-control) without ever violating a monitored SLA metric. It also complements the KB's existing MCPTT field-measurement work (Kyle Field, 2026-08-21) and public-safety network-slicing findings by identifying a failure mode those field studies were not designed to catch: a link that looks perfectly healthy by every metric operators watch, while the information flowing over it is stale enough to matter for flight safety.

## Why it matters / what's new (ZH)
知识库网络切片栏目已覆盖编排、准入控制、基于 RL 的切片控制以及有状态跨切片*迁移*（Orchra，2026-08-24），但此前从未涉及切片作为*攻击面*的问题。FlyBlind 是首个证明如下事实的条目：几乎所有 5G 切片多租户部署都依赖的软隔离机制，可被一个完全已授权、看似毫无恶意的共租户利用，在从不触发任何被监测 SLA 指标告警的情况下，悄然降级一个安全关键应用（无人机指挥控制）。它也补充了知识库既有的 MCPTT 现场实测（Kyle Field，2026-08-21）与公共安全网络切片成果，指出了那些现场研究本未设计用于捕捉的失效模式：一条按运营方所监测的一切指标看都完全健康的链路，其上承载的信息却已陈旧到足以危及飞行安全。

## Images
