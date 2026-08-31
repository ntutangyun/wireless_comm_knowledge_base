---
id: 2026-08-31_chuangyao-ethercat-nearlink-humanoid-robot-comms
date_published: 2026-01-19
date_found: 2026-08-31
type: industry-news
technology: nearlink
title_en: "A wired+wireless robot bus: Chuangyao (688259) pairs Beckhoff-licensed EtherCAT slave silicon with its own NearLink chips for humanoid robots — 28-58 EtherCAT parts per robot, NearLink quoted at 20 us air latency and <1 us sync error"
title_zh: "有线+无线的机器人总线：创耀科技（688259）把倍福授权的 EtherCAT 从站芯片与自研星闪芯片配对用于人形机器人——单台机器人 28-58 颗 EtherCAT 芯片，星闪侧宣称 20 us 空口时延、同步误差 <1 us"
url: "https://www.9fzt.com/common/610ed8fd8cb9d27a753ad0c3b6f8ae83.html"
source_quality: full
topics: [NearLink, SparkLink, SLE, SLB, EtherCAT, humanoid-robot, embodied-intelligence, industrial-wireless, deterministic, Polar-code, chipset]
topic_primary: nearlink-slb
topics_secondary: [nearlink-sle]
novelty_score: 3
---

## Summary (EN)

Chuangyao Technology (创耀（苏州）通信科技股份有限公司, Shanghai STAR Market 688259) is a Chinese communication-chip house — historically access-network, power-line-carrier and broadband modem silicon — that has repositioned around a two-bus story for robots: a wired EtherCAT bus for joint control and a wireless NearLink (星闪) link for distributed sensing. It is one of the few domestic vendors holding an official EtherCAT IP licence from Beckhoff, and it has been shipping NearLink parts since 2023, when it introduced the TR55Xs and TR53Xs families (a TR354X dual-mode part is also named), entering short-range wireless and industrial internet at the same time.

The division of labour it argues for is the interesting part, and it is a concrete answer to a question the NearLink ecosystem has mostly left open: which parts of a robot should go wireless. Joint-motor control stays wired on EtherCAT, where the vendor claims microsecond-class communication latency and system jitter well under 1 us — the determinism budget of a servo loop leaves no room for a radio. The distributed sensor fabric — the dozens of skin, force, torque, IMU and proximity sensors spread over a humanoid's body, where cable count, mass, routing through joints and connector wear are the real cost — moves to NearLink. For its NearLink SLE parts the company quotes Polar-code forward error correction plus dynamic resource scheduling, and the standard SparkLink deterministic figures: 20 us air-interface latency, synchronisation error under 1 us, 99.999% transmission reliability, and up to 4096 concurrently connected nodes per network (an October 2025 piece instead quotes "200 nodes joining within 1 ms" as the concurrency figure).

The commercial hooks reported are that a single humanoid robot needs roughly 28-58 EtherCAT slave-controller chips, that Chuangyao's EtherCAT parts undercut Infineon and TI equivalents by 30-50%, and that it has entered the supply chains of robot OEMs including UBTech (优必选) and Leadshine (雷赛智能). A strategic cooperation agreement with Haosen Intelligent (豪森智能) on embodied-AI industrial communication was signed on 18 March 2025. A Northeast Securities (东北证券) initiation report dated 14 May 2025 carries the same "robot + NearLink dual-drive" framing.

Sourcing needs stating plainly. The three carriers read for this entry are Chinese investment-research and financial-media pages (Jiufang Zhitou 2026-01-19 and its company-report variant, an Eastmoney Caifuhao column 2025-10-16, and a Northeast Securities report abstract 2025-05-14), not vendor datasheets or measured results. The performance numbers attributed to NearLink are the alliance's published specification figures, restated by the vendor's promoters; none of them is a measurement of a Chuangyao part in a robot. The chip part numbers, the Beckhoff licence, the per-robot chip count and the named customers are load-bearing claims that a datasheet or an exchange filing has not been used to confirm here.

## Summary (ZH)

创耀（苏州）通信科技股份有限公司（科创板 688259）是一家国产通信芯片企业——历史产品为接入网、电力线载波与宽带调制解调芯片——近年围绕"机器人双总线"重新定位：有线 EtherCAT 总线做关节控制，无线星闪链路做分布式传感。它是国内少数获得倍福（Beckhoff）EtherCAT IP 正式授权的厂商，并自 2023 年推出 TR55Xs、TR53Xs 系列星闪芯片（另有 TR354X 双模芯片）后开始出货，同时切入无线短距与工业互联网。

它主张的分工是最有价值的部分，也是对星闪生态一直未正面回答的问题——机器人的哪些部分该走无线——给出的具体答案。关节电机控制继续走有线 EtherCAT：厂商称其通信时延可低至微秒级、整系统抖动远小于 1 us，伺服环的确定性预算容不下一条无线链路。而分布式传感网络——人形机器人全身数十个电子皮肤、力/力矩、IMU 与接近传感器，其真实成本在于线缆数量、质量、过关节走线与连接器磨损——则改用星闪。其星闪 SLE 芯片宣称采用 Polar 码纠错与动态资源调度，并援引星闪标准的确定性指标：空口时延低至 20 us、同步误差 <1 us、99.999% 传输可靠性、单网络最多 4096 节点并发（2025 年 10 月的一篇文章则把并发能力表述为"1 ms 内 200 节点入网"）。

被报道的商业抓手包括：单台人形机器人约需 28-58 颗 EtherCAT 从站控制芯片；创耀 EtherCAT 芯片价格较英飞凌、TI 等国际品牌低 30%-50%；已切入优必选、雷赛智能等整机厂供应链。2025 年 3 月 18 日与豪森智能签署具身智能工业通信技术战略合作协议。东北证券 2025 年 5 月 14 日的深度报告采用同样的"机器人 + 星闪双轮驱动"框架。

信源必须直说。本条目所读的三个载体均为中文投研与财经媒体页面（九方智投 2026-01-19 及其公司报告版、东方财富财富号专栏 2025-10-16、东北证券报告摘要 2025-05-14），而非厂商数据手册或实测报告。归于星闪的性能数字是联盟公开规范值，由厂商推介方转述，没有一项是创耀芯片在机器人上的实测。芯片型号、倍福授权、单机芯片用量与点名客户都是承重性论断，此处并未以数据手册或交易所公告加以确认。

## Key technical points (EN)

- **Vendor**: Chuangyao Technology / 创耀（苏州）通信科技, Shanghai STAR Market 688259. Legacy business: access-network, PLC and broadband modem silicon.
- **Two-bus architecture for humanoids**: EtherCAT (wired) for joint-motor control; NearLink (wireless) for the distributed sensor fabric. Explicit rationale: the servo determinism budget excludes a radio; the sensor harness is where cabling cost, mass and joint-routing wear dominate.
- **NearLink parts**: TR55Xs and TR53Xs families launched 2023; TR354X named as a dual-mode part. IoT products using them began market promotion in 2024.
- **NearLink SLE claims**: Polar-code FEC + dynamic resource scheduling; 20 us air-interface latency; synchronisation error <1 us; 99.999% transmission reliability; up to 4096 concurrent nodes per network. A separate carrier instead states "200 nodes joining within 1 ms".
- **Spec-attribution inconsistency worth flagging**: the 20 us / 4096-node figures are SparkLink's *SLB* (basic access, orthogonal multi-carrier) headline numbers, but the carriers attribute them to the vendor's *SLE* (low-energy) chips. Treat the mode labelling as unreliable in these sources.
- **EtherCAT side**: official Beckhoff IP licence (rare domestically); microsecond-class latency, system jitter well under 1 us; priced 30-50% below Infineon / TI equivalents; small-batch deployment in industrial robots and servo drives.
- **Volume claim**: ~28-58 EtherCAT slave-controller chips per humanoid robot.
- **Customers / partners named**: UBTech (优必选), Leadshine (雷赛智能) supply chains; strategic agreement with Haosen Intelligent (豪森智能) signed 2025-03-18 for embodied-AI industrial communication.
- **Ecosystem context**: TC591, China's national robot standardisation technical committee, and the SparkLink Alliance held a joint "embodied intelligence + next-generation communication standards" seminar in Shenzhen in April 2025, with the forthcoming SparkLink 3.0 said to target embodied intelligence and AI wireless communication. SparkLink 3.0 remains roadmap-only with no primary specification page.
- **Sourcing**: Chinese investment-research / financial-media carriers only (Jiufang Zhitou 2026-01-19; Eastmoney Caifuhao 2025-10-16; Northeast Securities initiation abstract 2025-05-14). No datasheet, no measured robot data, no exchange filing consulted.

## Key technical points (ZH)

- **厂商**：创耀（苏州）通信科技股份有限公司，科创板 688259。传统业务为接入网、电力线载波与宽带调制解调芯片。
- **人形机器人双总线架构**：有线 EtherCAT 做关节电机控制，无线星闪做分布式传感网络。理由明确：伺服确定性预算容不下无线链路；而线束成本、质量与过关节磨损主要集中在传感器侧。
- **星闪产品**：2023 年推出 TR55Xs、TR53Xs 系列；另有 TR354X 双模芯片。2024 年基于这些芯片的 IoT 产品开始市场推广。
- **星闪 SLE 宣称指标**：Polar 码纠错 + 动态资源调度；空口时延 20 us；同步误差 <1 us；99.999% 传输可靠性；单网络最多 4096 节点并发。另一载体则表述为"1 ms 内 200 节点入网"。
- **值得标注的模式归属不一致**：20 us / 4096 节点是星闪 *SLB*（基础接入，正交多载波）的标称指标，而这些载体把它们归到厂商的 *SLE*（低功耗）芯片上。这些信源中的模式标注不可靠。
- **EtherCAT 侧**：获倍福 IP 正式授权（国内少见）；通信时延微秒级、整系统抖动远小于 1 us；价格较英飞凌 / TI 低 30%-50%；已在工业机器人与伺服驱动器上小批量应用。
- **用量论断**：单台人形机器人约需 28-58 颗 EtherCAT 从站控制芯片。
- **点名客户 / 伙伴**：已进入优必选、雷赛智能供应链；2025-03-18 与豪森智能就具身智能工业通信签署战略合作协议。
- **生态背景**：全国机器人标准化技术委员会（TC591）与国际星闪联盟于 2025 年 4 月在深圳举办"具身智能 + 新一代通信标准技术研讨会"，并称即将到来的星闪 3.0 将面向具身智能与 AI 无线通信开展标准化工作。星闪 3.0 仍停留在路线图阶段，没有一手规范页面。
- **信源**：仅中文投研 / 财经媒体载体（九方智投 2026-01-19；东方财富财富号 2025-10-16；东北证券深度报告摘要 2025-05-14）。未查阅数据手册、实测机器人数据或交易所公告。

## Why it matters / what's new (EN)

This knowledge base has held NearLink's industrial story in two pieces so far: an academic Layer-2 adaptation scheme that bridges NearLink into industrial Ethernet without touching the wired protocols (IEEE WCNIoT 2025, tested in automotive welding workshops), and a communication-sensing-fusion pilot for vehicle-to-grid. Neither says who would build the silicon, and neither touches robotics. This entry fills the robotics vertical for the first time and, more usefully, supplies a merchant-silicon answer: a listed non-Huawei chip vendor with a NearLink product line aimed squarely at humanoid robots.

The architectural claim is the part worth keeping even if the vendor's numbers are promotional. "Wired EtherCAT for joints, wireless NearLink for sensors" is a specific and falsifiable partition of a robot's communication load, and it converges with the WCNIoT paper from the opposite direction: that paper made NearLink speak industrial Ethernet at Layer 2 so brownfield lines would not have to change; this vendor sells both halves and draws the boundary at the servo loop instead. Both agree the deterministic wired bus keeps the joints. The disagreement worth watching is whether NearLink ever crosses that line into joint control, which is what the 20 us / <1 us synchronisation figures would be for if they were ever measured rather than quoted.

Two cautions. First, the mode attribution in these sources is wrong or at least loose: SparkLink's 20 us and 4096-node headline figures belong to SLB, the orthogonal-multicarrier basic-access mode, while the chips are described as SLE parts — a reader should not conclude that an SLE sensor link delivers a 20 us deterministic budget. Second, everything here is carried by investment-research pages whose purpose is to argue a stock thesis; the chip families, the Beckhoff licence and the 28-58-parts-per-robot figure are checkable in principle against a datasheet or an exchange filing and have not been checked here. The concrete follow-ups are a Chuangyao NearLink datasheet or an iSLA certification-database entry under its name, a named robot design win with a NearLink sensor link actually shipping, and whether SparkLink 3.0 turns the embodied-intelligence talk into a published specification rather than a roadmap item.

## Why it matters / what's new (ZH)

本知识库此前的星闪工业故事只有两块：一篇把星闪在二层桥接进工业以太网、且不改动有线协议的学术方案（IEEE WCNIoT 2025，在汽车焊装车间实测），以及一个车网互动的通感一体试点。两者都没说芯片由谁来做，也都没有涉及机器人。本条目首次填补机器人这一垂直领域，更有用的是给出了商用芯片侧的答案：一家非华为系的上市芯片厂商，拥有直接面向人形机器人的星闪产品线。

即便厂商数字带有推广色彩，其架构论断仍值得保留。"关节走有线 EtherCAT、传感走无线星闪"是对机器人通信负载的一个具体且可证伪的划分，并且与 WCNIoT 那篇论文从相反方向汇合：那篇论文让星闪在二层说工业以太网，使存量产线无需改动；这家厂商则两侧都卖，把边界直接划在伺服环上。二者一致认为确定性有线总线保留给关节。值得观察的分歧在于星闪是否终将越过这条线进入关节控制——那正是 20 us / <1 us 同步指标若被实测（而非引用）时的用武之地。

两点提醒。其一，这些信源的模式归属是错的、至少是含混的：星闪 20 us 与 4096 节点是 SLB（正交多载波的基础接入模式）的标称值，而芯片被描述为 SLE 产品；读者不应据此认为一条 SLE 传感链路能提供 20 us 的确定性预算。其二，本条目的全部内容由以论证股票逻辑为目的的投研页面承载；芯片系列、倍福授权与"单机 28-58 颗"在原则上可用数据手册或交易所公告核对，而此处并未核对。具体的后续观察点是：创耀星闪数据手册或以其名义出现在 iSLA 产品认证数据库中的条目；一个点名的机器人定点且星闪传感链路真正出货；以及星闪 3.0 能否把具身智能的说法变成已发布的规范而非路线图条目。

## Images

None.
