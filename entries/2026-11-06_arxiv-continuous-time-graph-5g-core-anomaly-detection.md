---
id: 2026-11-06_arxiv-continuous-time-graph-5g-core-anomaly-detection
date_published: 2026-11-04
date_found: 2026-11-06
type: academic-paper
technology: cellular
title_en: "Explainable Anomaly Detection in 5G Networks through Continuous Time Graphs"
title_zh: "基于连续时间图的可解释 5G 网络异常检测"
url: "https://arxiv.org/abs/2611.06225"
source_quality: full
topics: [anomaly-detection, continuous-time-dynamic-graph, 5G-core, PFCP, HTTP2-SBI, GTP-U, free5GC, UERANSIM, explainability]
topic_primary: cellular-security
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Thomas Hoger and Philippe Owezarski (LAAS-CNRS, Toulouse) address anomaly detection in the 5G control plane, whose service-based, virtualised core makes it resemble a distributed system with an enlarged attack surface. They argue that attacks should be characterised along three dimensions: semantic (the content of a packet), sequential (the order of messages from the same entity) and topological (which entities talk to which). Prior detectors, in their reading, cover one or two; the closest, GSAD, combines a CNN, an RNN and a GNN as three separate models.

Their contribution is a graph formalisation of 5G control traffic in two forms. A static graph gives each packet a central node connected to one node per feature value, with feature nodes shared across packets and dashed edges for packet order; a continuous-time dynamic graph (CTDG) expresses the same content as a stream of events, which lets continuous-time graph networks learn all three dimensions jointly. Because individual features are nodes, the static form can be coloured with anomaly scores to show which parameter or interaction triggered an alert, which the authors present as the explainability benefit. The scope is limited to the control plane (HTTP/2 service-based interfaces, PFCP, GTP-U); user-plane traffic is excluded because it carries no 5G-specific behaviour.

## Summary (ZH)

Thomas Hoger 与 Philippe Owezarski（图卢兹 LAAS-CNRS）研究 5G 控制面的异常检测：5G 核心网基于服务化架构并已虚拟化，因而更像分布式系统，攻击面也随之扩大。他们主张从三个维度刻画攻击：语义（包的内容）、时序（同一实体消息的先后顺序）和拓扑（哪些实体与哪些实体通信）。在他们看来，既有检测方法只覆盖其中一两个维度；最接近的 GSAD 把 CNN、RNN 和 GNN 作为三个独立模型组合起来。

他们的贡献是以两种形式对 5G 控制面流量做图形式化。静态图为每个包设一个中心节点，连接到每个特征值对应的节点，特征节点在包之间共享，并用虚线边表示包的先后顺序；连续时间动态图（CTDG）把相同内容表示为事件流，使连续时间图网络能够联合学习三个维度。由于各特征本身是节点，静态形式可以按异常分数着色，以显示是哪个参数或交互触发了告警，作者将此作为可解释性的好处。范围限定在控制面（HTTP/2 服务化接口、PFCP、GTP-U）；用户面流量被排除，因为它不带 5G 特有的行为。

## Key technical points (EN)

- Pipeline: PCAP traces are parsed with Scapy, 41 empirically selected features per packet are extracted, converted to a sequence of events (central node, feature node, feature-name edge), and fed to seven continuous-time graph models from the DyGLib library (TGN, GraphMixer, DyGFormer, CAWN, TCL, JODIE, DyRep) trained for supervised link prediction; the link-probability score is read as an anomaly score.
- Dataset: the authors built their own because they found no public 5G control-plane set with comparable benign traffic. A four-hour capture on UERANSIM and free5GC holds about 1,200,000 benign and 130,000 attack messages, with benign and attack traffic interleaved in random order and attacker identities randomised to avoid shortcuts.
- Attacks: ten attack types across the service-based interface, N4 (PFCP) and N3 (GTP-U), seven taken from the literature (for example PFCP establishment, deletion and modification floods, GTP-U uplink spoofing) and three introduced by the authors (application-layer man-in-the-middle, API fuzzing, SEID fuzzing). Each is mapped to the detection dimension(s) needed to catch it and to a matching benign procedure; the authors check that the attacks are detectable only along those dimensions.
- Result: TGN is best with an AUC of 0.9517; GraphMixer reaches 0.7411, DyGFormer 0.6741 and the others between 0.53 and 0.62. TGN is also slowest at about 22.8 packets/s, below the roughly 29 packets/s observed in the generated traffic, so it does not yet meet real-time processing.
- Stated limitations: the authors say the performance is not yet sufficient for direct operational deployment because even a low false-positive rate yields many alerts at scale; the evaluation is supervised, and unsupervised detection is left to future work. Capture and generator code are published (GitHub CTD-5G, Zenodo).

## Key technical points (ZH)

- 流程：用 Scapy 解析 PCAP，对每个包提取 41 个经验选取的特征，转换为事件序列（中心节点、特征节点、特征名边），输入 DyGLib 库中的七种连续时间图模型（TGN、GraphMixer、DyGFormer、CAWN、TCL、JODIE、DyRep），以监督式链路预测训练；链路概率分数被当作异常分数。
- 数据集：作者自建数据集，因为未找到带有可比良性流量的公开 5G 控制面数据集。基于 UERANSIM 与 free5GC 的四小时抓包约含 1,200,000 条良性消息和 130,000 条攻击消息，良性与攻击流量按随机顺序交错，攻击者身份随机化以避免捷径。
- 攻击：覆盖服务化接口、N4（PFCP）和 N3（GTP-U）的十类攻击，其中七类取自文献（如 PFCP 建立、删除、修改洪泛，GTP-U 上行欺骗），三类为作者新增（应用层中间人、API 模糊测试、SEID 模糊测试）。每类攻击都对应检测所需的维度及相匹配的良性流程；作者检验了这些攻击仅在对应维度上可被检测。
- 结果：TGN 最佳，AUC 为 0.9517；GraphMixer 为 0.7411，DyGFormer 为 0.6741，其余在 0.53 至 0.62 之间。TGN 同时也最慢，约 22.8 包/秒，低于生成流量中观察到的约 29 包/秒，因此尚不能满足实时处理。
- 论文自述的局限：作者称其性能尚不足以直接用于运营部署，因为即使很低的误报率在大规模下也会产生大量告警；评估为监督式，无监督检测留待后续。抓包与生成器代码已公开（GitHub CTD-5G、Zenodo）。

## Why it matters / what's new (EN)

The paper's distinguishing step is to put packet content, ordering and communication topology into one graph representation instead of stacking three models, and to keep per-feature nodes so a detection can be traced to a field. Its evidence is on a self-generated emulated core (free5GC with UERANSIM) with supervised training, and the authors themselves flag real-time throughput and false-alarm volume as unresolved; the paper is accepted to the International Conference on Future and Intelligent Communication and Networking (December 2026). It sits in the cellular-security bin next to other core-network and O-RAN detection work, with a focus on the core control plane.

## Why it matters / what's new (ZH)

该论文的区别在于把包内容、顺序和通信拓扑放进同一种图表示，而不是堆叠三个模型，并保留逐特征节点，使检测结果可以追溯到具体字段。证据来自自行生成的仿真核心网（free5GC 加 UERANSIM）与监督式训练，作者自己也指出实时吞吐与误报量仍未解决；论文已被 International Conference on Future and Intelligent Communication and Networking（2026 年 12 月）接收。它位于 cellular-security 分类中，与其他核心网和 O-RAN 检测工作并列，侧重核心网控制面。

## Images

None.
