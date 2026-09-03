---
id: 2026-09-03_arxiv-collective-perception-nrv2x-sidelink
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: cellular
title_en: "The Role of Collective Perception and 5G NR-V2X Sidelink in Road Safety"
title_zh: "集体感知服务与5G NR-V2X侧链路在道路安全中的作用"
url: "https://arxiv.org/abs/2609.01478"
source_quality: full
topics: [NR-V2X, sidelink, collective-perception, ETSI-CPS, VoI, road-safety, V2X]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Vittorio Todisco, Mattia Andreani, Maria Luisa Merani and Alessandro Bazzi (arXiv v1, 1 Sep 2026; accepted for publication in IEEE Communications Magazine) examine how the ETSI Collective Perception Service (CPS) should be designed to operate over 5G NR-V2X sidelink for road-safety applications. The paper's framing: vehicles and roadside units increasingly carry their own sensors, but isolated per-vehicle perception has inherent blind spots, and sharing perceived-object data via V2X is a "key enabler of Day-2 applications" in intelligent transportation systems — provided the radio and the perception-message design are co-engineered, since naive message generation can overwhelm the shared sidelink channel.

Collective Perception Messages (CPMs), generated at the ETSI facilities layer, carry a management container, originating-station data (vehicle dimensions/speed/heading), sensor information, and — the element the paper's analysis centers on — a perceived-object container that costs roughly 13 bytes per object. The authors note that recent ETSI standardization work is moving toward adaptive, Value-of-Information (VoI)-based message construction rather than exhaustively listing every detected object, and evaluate three message-selection strategies against that shift: a baseline that includes all detected objects, random inclusion (each object kept with probability p_incl < 1), and VoI-rank inclusion, which ranks objects by a linear distance-based value law (value falls to zero beyond 50 m) and fills each CPM up to a 400-byte cap with the highest-value objects. Ground truth comes from the Cirrus dataset — camera/lidar/GPS/IMU recordings from a real autonomous vehicle across highway and urban driving at 11 Hz — used to drive realistic CPM traffic rather than synthetic object models.

Across four metrics, the paper reports that message design and radio behavior are tightly coupled. Packet Reception Ratio (PRR) for the naive 100 ms-period baseline is high near the transmitter and degrades with range; longer generation periods (200-400 ms) extend the usable range at the cost of update frequency. Packet Inter-Reception Time (PIR) for the 100 ms baseline develops a heavy tail of long gaps at the greater distances, while VoI-rank inclusion bounds the probability of such large gaps. Channel Busy Ratio (CBR) — a proxy for channel congestion — is markedly lower for VoI-rank inclusion at a 200 ms period than for the 100 ms baseline. Received VoI Ratio (RVR), the fraction of total information value actually delivered, is highest close to the transmitter under the naive baseline but falls off steeply with distance, whereas VoI-rank inclusion trades away some near-range value in exchange for a much flatter curve across distance. VoI-rank inclusion also reduces the number of objects shared per CPM and per second relative to the 100 ms baseline. All four metrics are presented graphically; the paper's text does not state numeric values for them. The authors' headline conclusion: perception-message generation and radio access mechanisms must be co-designed, and VoI-rank inclusion offers the best channel-load/information-value trade-off among the strategies tested.

## Summary (ZH)

Vittorio Todisco、Mattia Andreani、Maria Luisa Merani 与 Alessandro Bazzi（arXiv v1，2026年9月1日；已被IEEE Communications Magazine接受）研究了ETSI集体感知服务（CPS）在5G NR-V2X侧链路上运行时应如何设计，以服务于道路安全应用。论文的立论是：车辆与路侧单元日益配备自有传感器，但单车孤立感知存在固有盲区，通过V2X共享感知目标数据是智能交通系统中"Day-2应用的关键使能因素"——前提是无线电与感知消息设计须协同工程，因为简单粗暴的消息生成方式会淹没共享的侧链路信道。

在ETSI设施层生成的集体感知消息（CPM）包含管理容器、发起站数据（车辆尺寸/速度/航向）、传感器信息，以及本文分析的核心元素——每个目标约耗费13字节的感知目标容器。作者指出，近期ETSI标准化工作正朝着基于信息价值（Value of Information, VoI）的自适应消息构建方向发展，而非穷举列出每个检测到的目标；论文据此评估了三种消息选择策略：包含所有检测目标的基线方案、随机纳入方案（每个目标以概率p_incl < 1被保留），以及VoI排序纳入方案——按线性距离价值律（超过50米价值降为零）对目标排序，并在400字节上限内填入价值最高的目标。真值数据来自Cirrus数据集——一辆真实自动驾驶车辆在高速公路与城市道路场景下、以11 Hz采样率记录的相机/激光雷达/GPS/IMU数据——用以驱动真实的CPM流量，而非合成目标模型。

在四项指标上，论文报告消息设计与无线电行为紧密耦合。对于简单的100毫秒周期基线方案，分组接收率（PRR）在发射端附近较高，但随距离下降；更长的生成周期（200-400毫秒）以更新频率为代价换取了更远的覆盖范围。100毫秒基线方案的分组间接收时间（PIR）在较远距离上出现长间隔的重尾现象，而VoI排序纳入方案则限制了此类大间隔出现的概率。信道占用率（CBR，信道拥塞的代理指标）方面，200毫秒周期的VoI排序方案明显低于100毫秒基线方案。已接收信息价值比（RVR，实际交付的信息价值占总价值的比例）方面，简单基线在发射端附近最高，但随距离急剧下降；VoI排序纳入方案则以牺牲部分近距离价值为代价，换取了随距离变化平坦得多的曲线。相对100毫秒基线，VoI排序纳入方案还减少了每条CPM及每秒共享的目标数量。上述四项指标均以图形方式呈现，论文正文并未给出具体数值。作者得出的核心结论是：感知消息生成机制与无线接入机制必须协同设计，而在所测试的策略中，VoI排序纳入方案在信道负载与信息价值之间取得了最佳折中。

## Key technical points (EN)
- Problem: naive CPM generation (all detected objects, fixed period) overwhelms the shared NR-V2X sidelink channel as vehicle/sensor density grows.
- CPM structure: management + originating-station + sensor-info + perceived-object containers (~13 bytes/object); ETSI moving toward VoI-based adaptive construction.
- Three strategies compared: all-objects baseline, random inclusion, VoI-rank inclusion (linear distance-based value, zero beyond 50 m, 400-byte cap).
- Dataset: Cirrus — real AV camera/lidar/GPS/IMU recordings at 11 Hz (highway + urban), not synthetic traffic.
- Results at matched generation period: VoI-rank inclusion lowers channel load (CBR) relative to the 100 ms baseline and keeps PRR, PIR and RVR more stable with distance; the paper presents these results as figures and gives no numeric values in its text.
- Headline finding: perception-message generation and radio-access design are tightly coupled and should be co-designed, not treated as independent layers.

## Key technical points (ZH)
- 问题：随着车辆/传感器密度增加，简单粗暴的CPM生成方式（所有检测目标、固定周期）会淹没共享的NR-V2X侧链路信道。
- CPM结构：管理容器+发起站容器+传感器信息容器+感知目标容器（约13字节/目标）；ETSI正朝基于VoI的自适应构建方向发展。
- 对比三种策略：全目标基线、随机纳入、VoI排序纳入（线性距离价值律，超过50米价值为零，400字节上限）。
- 数据集：Cirrus——真实自动驾驶车辆以11 Hz采样的相机/激光雷达/GPS/IMU记录（高速公路+城市），而非合成流量模型。
- 相同生成周期下的结果：相比100毫秒基线，VoI排序方案降低了信道负载（CBR），且PRR、PIR、RVR随距离变化均更稳定；论文以图形呈现这些结果，正文未给出具体数值。
- 核心结论：感知消息生成与无线接入设计紧密耦合，应协同设计，而非作为独立层各自处理。

## Why it matters / what's new (EN)
This knowledge base's 5G NR coverage already includes an NR-V2X sidelink entry on resource-allocation scheduling (Repeated Contention Scheduling, 2026-07-08) and a relay-selection entry (GINE L2O, 07-26), but neither addresses the *application-layer* message-content problem this paper tackles: what to put inside a CPM, and how that choice interacts with sidelink congestion and reception reliability. Grounded in the ETSI C-ITS facilities-layer standard and validated on a real autonomous-vehicle sensor dataset rather than synthetic object traces, it is the first entry here connecting collective-perception message design to measured NR-V2X sidelink performance.

## Why it matters / what's new (ZH)
本知识库的5G NR部分已有一篇关于NR-V2X侧链路资源分配调度的条目（重复竞争调度RCS，2026-07-08）以及一篇中继选择条目（GINE L2O，07-26），但均未涉及本文所处理的*应用层*消息内容问题：CPM中应放入什么内容，以及这一选择如何与侧链路拥塞和接收可靠性相互作用。本文立足于ETSI C-ITS设施层标准，并在真实自动驾驶车辆传感器数据集（而非合成目标轨迹）上完成验证，是本知识库中首个将集体感知消息设计与实测NR-V2X侧链路性能相联系的条目。

## Images
