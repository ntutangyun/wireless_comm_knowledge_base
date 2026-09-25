---
id: 2026-09-25_arxiv-uav-bus-fog-rural-analytics-scheduling
date_published: 2026-09-21
date_found: 2026-09-25
type: academic-paper
technology: edge-ai
title_en: "Adaptive and Cost-Efficient Joint Scheduling of UAV Routes and Analytics with Transit-Borne Fog"
title_zh: "面向 UAV 路线与分析任务的自适应低成本联合调度：以公交车为载体的移动雾计算"
url: "https://arxiv.org/abs/2609.25479"
source_quality: full
topics: [fog-computing, UAV, task-offloading, rural-connectivity, cellular-coverage, scheduling]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 4
---

## Summary (EN)

Researchers from the University of Chicago, Kennesaw State University, IISc Bangalore, and Missouri S&T address a real infrastructure gap: UAVs running deadline-bound analytics missions over large rural areas cannot reliably offload their data because cellular base stations are sparse, and flying to the nearest tower or deferring everything to the base station wastes the flight time and energy the deadline is competing for. Their proposed fix is to treat scheduled public buses as a third, mobile compute tier: a drone hands off its data to a bus during a scheduled halt, the bus physically carries the data while it is out of cellular range, and it uploads once its route re-enters coverage — a delay-tolerant relay that exploits the fact that a public bus's route and timetable are fixed and known in advance, so a handover's timing depends on when the bus's route re-enters coverage, not on how physically close the halt is.

They formalize this as the Mission Scheduling Problem — jointly choosing UAV routes and where each analytics task actually runs (onboard the drone, at a stationary fog node near a tower, or on a bus) under deadline, energy, and cost constraints — and prove it NP-hard. Their Divide-and-Assign (DA) heuristic clusters tasks by spatio-temporal proximity (via ST-DBSCAN) and then greedily assigns each task to whichever available drone and drop-off point minimizes total cost, ranking candidate bus halts by cost-weighted energy impact rather than simple proximity, so a farther halt with an imminent bus-to-coverage transition can beat a nearer one whose bus is still offline. Evaluated on 36 workload configurations built from real infrastructure data — OpenCelliD cellular coverage and Bangalore's own GTFS public-bus timetables, over a 5x5 km rural region with just 12.5% cellular coverage — and using real device-side inference latency/energy numbers profiled on actual hardware (Jetson Orin Nano, Xavier NX, Orin AGX, RTX 3090 running YOLOv8, MobileNet-v3, ResNet-34, and ExpansionNetv2), DA achieves up to 20% higher utility than the strongest simple heuristic and up to 41% higher than the strongest prior-art scheduler adaptation, reaches 98-100% on-time task completion versus 61-69% for one baseline, and adding the bus tier (which takes up to 71% of drop-offs, acting mainly as a drop-off/relay point) cuts energy per completed task by 17% and recharge cycles by up to 31%. Under real-world transit delays, an adaptive variant that re-polls live transit feeds recovers 93% of the utility that delay would otherwise cost and keeps completion above 97%.

## Summary (ZH)

来自芝加哥大学、肯尼索州立大学、印度科学理工学院（IISc）班加罗尔分校与密苏里科技大学的研究者，针对一个真实存在的基础设施缺口展开研究：在广阔的农村地区执行有截止时间要求的分析任务的无人机，由于蜂窝基站稀疏，难以可靠地卸载数据——而飞往最近的基站塔或把所有处理推迟到基站，都会浪费与截止时间相互争夺的飞行时间和能量。他们提出的解决方案是把按固定时刻表运行的公交车当作第三种、可移动的计算层：无人机在公交车到站停靠期间将数据交接给公交车，公交车在驶出蜂窝覆盖范围期间物理携带这些数据，待其路线重新进入覆盖范围后再上传——这是一种利用了公交车路线和时刻表事先已知、固定不变这一特性的"容忍延迟"中继方式，因此交接的时机取决于公交车路线何时重新进入覆盖范围，而非站点在物理距离上有多近。

论文将此形式化为"任务调度问题"（Mission Scheduling Problem）——需要在截止时间、能耗与成本约束下，联合决定无人机路线以及每项分析任务究竟在何处执行（无人机机载、基站塔附近的静态雾节点，还是公交车上），并证明该问题是 NP 难的。其提出的"划分-分配"（Divide and Assign, DA）启发式算法先用 ST-DBSCAN 按时空邻近性对任务聚类，再贪心地将每项任务分配给能够使总成本最小化的可用无人机与卸载点，其中候选公交站点是按"成本加权的能耗影响"而非单纯的物理距离来排序的——因此一个即将迎来公交车驶入覆盖范围、但物理距离较远的站点，可以胜过一个物理距离更近、但公交车尚未进入覆盖范围的站点。论文在基于真实基础设施数据构建的 36 种工作负载配置上进行了评估——蜂窝覆盖数据来自 OpenCelliD，公交时刻表数据来自班加罗尔自身的 GTFS 公交数据，覆盖区域为一个蜂窝覆盖率仅 12.5% 的 5×5 公里农村区域，并使用了在真实硬件（Jetson Orin Nano、Xavier NX、Orin AGX、RTX 3090，运行 YOLOv8、MobileNet-v3、ResNet-34 与 ExpansionNetv2）上实测的推理时延与能耗数据。结果显示，DA 相较最强的简单启发式方法效用最高提升 20%，相较最强的现有方案改编版本最高提升 41%，按时任务完成率达到 98%～100%（而某一基线仅为 61%～69%），引入公交层后（最多承接 71% 的数据投递，主要充当投递/中继点），单任务能耗降低 17%，充电周期最多减少 31%。在真实的公交延误场景下，一个实时轮询公交动态数据的自适应变体能够挽回延误本会造成的 93% 效用损失，并将完成率维持在 97% 以上。

## Key technical points (EN)

- Introduces public transit buses as a third, mobile fog-compute tier alongside onboard UAV edge and stationary fog — a delay-tolerant relay exploiting fixed bus routes/timetables rather than physical proximity.
- Formalizes the joint UAV-route + task-placement decision as the NP-hard Mission Scheduling Problem, with tasks placeable on drone, stationary fog, or bus.
- Divide-and-Assign (DA) heuristic: ST-DBSCAN spatio-temporal task clustering + greedy assignment ranking bus halts by cost-weighted energy impact rather than proximity.
- Evaluated with real infrastructure data (OpenCelliD cellular coverage, Bangalore GTFS bus timetables) and real device-profiled DNN inference numbers (Jetson Orin Nano/Xavier NX/Orin AGX/RTX 3090 on YOLOv8, MobileNet-v3, ResNet-34, ExpansionNetv2) — not a purely simulated cost model.
- Up to 41% utility improvement over the strongest prior-art adaptation, 98-100% on-time completion, 17% energy-per-task reduction, and an adaptive variant that recovers 93% of utility lost to real transit delays.

## Key technical points (ZH)

- 提出将公交车作为与"无人机机载边缘"和"静态雾节点"并列的第三种、可移动雾计算层——一种利用公交路线/时刻表固定特性、而非物理邻近性的容忍延迟中继方式。
- 将"无人机路线 + 任务放置"的联合决策形式化为 NP 难的任务调度问题，任务可放置于无人机、静态雾节点或公交车三者之一。
- "划分-分配"（DA）启发式算法：先用 ST-DBSCAN 做时空任务聚类，再贪心分配，候选公交站点按成本加权的能耗影响而非物理距离排序。
- 使用真实基础设施数据（OpenCelliD 蜂窝覆盖数据、班加罗尔 GTFS 公交时刻表）与真实设备实测的深度学习推理数据（Jetson Orin Nano/Xavier NX/Orin AGX/RTX 3090 运行 YOLOv8、MobileNet-v3、ResNet-34、ExpansionNetv2）进行评估，而非纯仿真成本模型。
- 相较最强的现有方案改编版本效用最高提升 41%，按时完成率达 98%～100%，单任务能耗降低 17%，自适应变体能挽回真实公交延误造成的 93% 效用损失。

## Why it matters / what's new (EN)

Most compute-offloading entries in this KB evaluate split/collaborative inference over a wireless link that already exists (Wi-Fi, 5G, satellite). This paper's contribution is a genuinely different partitioning axis: it adds a third, physically-mobile compute/relay tier whose availability is scheduled rather than continuous, and shows that ranking candidates by a bus's predictable future coverage entry — not by current proximity — is what makes the tier useful. That is a new answer to "what runs where" for the specific but common case of rural/low-infrastructure deployments this KB's compute-offloading bin has not yet covered from this angle.

## Why it matters / what's new (ZH)

知识库 compute-offloading 分类下的大多数条目评估的是在一条已经存在的无线链路（Wi-Fi、5G、卫星）上做分割式/协同式推理。这篇论文的贡献在于一个真正不同的划分维度：它引入了第三种、物理上可移动的计算/中继层，其可用性是按时刻表调度而非持续存在的，并且证明了按公交车"未来何时可预测地进入覆盖范围"而非"当前物理距离"来给候选站点排序，正是让这一层真正发挥作用的关键。这为"任务究竟该在何处运行"这一问题，针对知识库 compute-offloading 分类此前尚未从这一角度覆盖的农村/基础设施薄弱场景，提供了一个新的答案。

## Images

![Mission workflow: a UAV hands data to a scheduled bus, which relays it once its route re-enters cellular coverage | 任务流程示意：无人机将数据交接给按时刻表运行的公交车，公交车在路线重新进入蜂窝覆盖范围后完成中继](https://arxiv.org/html/2609.25479v1/Overview.png)
![The 5x5 km rural study region near Bangalore, built from real OpenStreetMap and cellular-coverage data | 班加罗尔附近 5x5 公里农村研究区域，基于真实 OpenStreetMap 与蜂窝覆盖数据构建](https://arxiv.org/html/2609.25479v1/fig_map_bangalore_sw5x5_R1000.png)
