---
id: 2026-08-26_arxiv-certiot-6g-continuous-certification
date_published: 2026-08-24
date_found: 2026-08-26
type: academic-paper
technology: cellular
title_en: "CERTIoT-6G: Continuous Cybersecurity Certification for IoT Devices inside a Live 5G Network"
title_zh: "CERTIoT-6G：在真实 5G 网络内对物联网设备进行持续网络安全认证"
url: "https://arxiv.org/abs/2608.23339"
source_quality: full
topics: [IoT-security, compliance, certification, Cyber-Resilience-Act, NIS2, ETSI-EN-303-645, UPF, local-breakout, 5G-testbed, security-as-a-service, CSCN-2026]
topic_primary: cellular-security
topics_secondary: [redcap-iot]
novelty_score: 2
---

## Summary (EN)
An Imperial College London / UCL team (Lempesis, Palmese, Haddadi, Mandalari; accepted at IEEE CSCN 2026, EU PIONEERS-6G / 6G-PATH funded) builds CERTIoT-6G, a Security-as-a-Service platform that performs *continuous* cybersecurity certification of IoT devices from inside a live 5G network — motivated by the EU's newly binding obligations: the Cyber Resilience Act's secure-by-design and lifecycle compliance-monitoring requirements and the NIS2 Directive's duties on operators of essential services. The premise is that one-off, lab-based certification cannot track devices whose behavior changes with firmware updates and network conditions; the network operator's own infrastructure is the natural continuous vantage point.

The platform chains four engines: a Regulatory Interpretation Engine that transforms CRA / NIS2 / ETSI EN 303 645 requirements into machine-readable test bindings; a Device Identification Engine that auto-discovers and classifies devices via passive traffic analysis and ML classifiers; a Validation Engine running both passive monitoring and active adversarial tests; and a Reporting Engine emitting structured compliance evidence with remediation guidance. Deployment-wise it sits at the 5G User Plane Function using Local Breakout for in-path inspection, integrated with the CARL-W testbed at Karlstad University (Ericsson radio, gNodeB, analysis VM, WireGuard link to cloud management). Testing three IoT device categories — surveillance camera, smart lighting, environmental sensor — it found 0% encryption compliance (all devices sent cleartext), only 33% DoS resilience, but 100% port hygiene; the monitoring pipeline added at most 10 ms latency with negligible jitter and no retransmission impact on live 5G traffic over 100 runs.

## Summary (ZH)
帝国理工/伦敦大学学院团队（Lempesis、Palmese、Haddadi、Mandalari；IEEE CSCN 2026 录用，欧盟 PIONEERS-6G / 6G-PATH 项目资助）构建了 CERTIoT-6G——一个从真实 5G 网络内部对物联网设备进行*持续*网络安全认证的"安全即服务"平台，动因是欧盟新近生效的约束性义务：《网络弹性法案》（CRA）的安全设计与全生命周期合规监测要求，以及 NIS2 指令对关键服务运营者的义务。其前提是：一次性的实验室认证无法跟踪行为随固件更新与网络条件变化的设备；网络运营者自身的基础设施才是天然的持续观测点。

平台串联四个引擎：法规解释引擎将 CRA / NIS2 / ETSI EN 303 645 要求转化为机器可读的测试绑定；设备识别引擎通过被动流量分析与机器学习分类器自动发现并归类设备；验证引擎同时执行被动监测与主动对抗测试；报告引擎输出与具体法规条款绑定的结构化合规证据及整改指引。部署上，平台位于 5G 用户面功能（UPF），利用本地分流（LBO）做在径检测，集成于卡尔斯塔德大学 CARL-W 测试网（爱立信无线设备、gNodeB、分析虚拟机、WireGuard 连接云端管理）。对三类物联网设备——监控摄像头、智能照明、环境传感器——的测试发现：加密合规率 0%（全部明文传输）、DoS 韧性仅 33%、端口卫生 100%；监测管线对在网 5G 业务最多增加 10 毫秒时延，抖动可忽略，100 次测试无重传影响。

## Key technical points (EN)
- Four-engine pipeline: Regulatory Interpretation (CRA / NIS2 / ETSI EN 303 645 -> machine-readable test bindings), Device Identification (passive traffic + ML classification), Validation (passive monitoring + active adversarial tests), Reporting (structured evidence bound to specific regulatory clauses, with remediation guidance).
- Network placement: at the 5G UPF with Local Breakout for in-path traffic inspection — certification runs inside the operator network, not in a lab; WireGuard VPN links edge monitoring to cloud management.
- Real infrastructure: CARL-W testbed at Karlstad University with Ericsson radio equipment and gNodeB; NLP-based personal-data detection included in the validation path.
- Findings on 3 device categories (camera, smart lighting, environmental sensor): 0% traffic-encryption compliance (all cleartext), 33% DoS/availability resilience (only the sensor survived), 100% port hygiene.
- Overhead on live 5G traffic: max +10 ms latency, negligible jitter, no packet-retransmission effects across 100 concurrent monitoring/production runs.
- Novelty claim: first continuous, in-network (5G) certification loop combining passive + active testing with machine-readable compliance evidence, versus one-shot lab certification tools.
- Accepted at IEEE CSCN 2026; fresh v1 submitted 2026-08-24 — passes the postprint guard.

## Key technical points (ZH)
- 四引擎管线：法规解释（CRA / NIS2 / ETSI EN 303 645 -> 机器可读测试绑定）、设备识别（被动流量 + ML 分类）、验证（被动监测 + 主动对抗测试）、报告（绑定具体法规条款的结构化证据与整改指引）。
- 网络位置：位于 5G UPF、经本地分流（LBO）做在径流量检测——认证在运营商网络内部而非实验室运行；WireGuard VPN 连接边缘监测与云端管理。
- 真实基础设施：卡尔斯塔德大学 CARL-W 测试网，爱立信无线设备与 gNodeB；验证路径含基于 NLP 的个人数据检测。
- 三类设备（摄像头、智能照明、环境传感器）结果：流量加密合规 0%（全明文）、DoS/可用性韧性 33%（仅传感器存活）、端口卫生 100%。
- 对在网 5G 业务的开销：时延最多 +10 毫秒、抖动可忽略、100 次并行监测/生产测试无重传影响。
- 新颖性主张：首个持续的、网内（5G）认证闭环，结合被动+主动测试与机器可读合规证据，区别于一次性实验室认证工具。
- IEEE CSCN 2026 录用；2026-08-24 提交的新 v1——通过重印守卫。

## Why it matters / what's new (EN)
The cellular-security bin so far holds attacks, defenses, privacy mechanisms and AI-control verification — but nothing on *regulatory compliance as a network function*, even though the CRA and NIS2 are exactly the kind of binding obligations that will force operators and device makers to produce continuous evidence rather than one-off certificates. CERTIoT-6G is the first entry to operationalize that: the interesting architectural choice is placing certification at the UPF with local breakout, which turns the 5G user plane into the compliance sensor and makes "certification" a service the operator can sell (Security-as-a-Service) — a plausible new revenue line for the 5G/6G enterprise story, and a concrete instance of the regulation-to-machine-readable-tests pattern appearing elsewhere in the KB (lawful-ISAC/GDPR, 08-20). The empirical teeth are modest but real: on actual commercial-grade infrastructure (Ericsson RAN), every tested device failed cleartext checks — a blunt datapoint for the CRA debate — and the ≤10 ms in-path overhead result addresses the operator's first objection. Caveats: only three devices, one testbed, and the regulatory-interpretation engine's coverage of CRA text is thin in the paper. Watch CSCN 2026 proceedings and the EU 6G-PATH project for scaling to larger device fleets and for whether 3GPP SA3 picks up in-network certification exposure.

## Why it matters / what's new (ZH)
cellular-security 栏目迄今收录攻击、防御、隐私机制与 AI 控制验证——但从无"法规合规作为网络功能"的条目，尽管 CRA 与 NIS2 正是将迫使运营商和设备商持续出具证据（而非一次性证书）的约束性义务。CERTIoT-6G 是首个将其工程化的条目：有趣的架构选择是把认证放在 UPF 并用本地分流，使 5G 用户面成为合规传感器，让"认证"成为运营商可售卖的服务（安全即服务）——这是 5G/6G 企业叙事中合理的新收入线，也是库中他处已现的"法规到机器可读测试"模式（合法 ISAC/GDPR，08-20）的具体实例。实证力度不大但真实：在实际商用级基础设施（爱立信 RAN）上，所有受测设备均未通过明文检查——为 CRA 辩论提供了直白的数据点——且 ≤10 毫秒在径开销结果回应了运营商的第一反对意见。注意：仅三台设备、单一测试网，论文对 CRA 文本的法规解释引擎覆盖较薄。关注 CSCN 2026 论文集与欧盟 6G-PATH 项目的更大规模设备扩展，以及 3GPP SA3 是否采纳网内认证暴露接口。

## Images
![Architecture pipeline](https://arxiv.org/html/2608.23339v1/pipeline.png)
