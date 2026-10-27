---
id: 2026-10-27_arxiv-starmind-orbital-computing-five-layer-framework-six-interfaces
date_published: 2026-10-17
date_found: 2026-10-27
technology: satellite
type: academic-paper
title_en: "StarMind: Challenges and Opportunities in Orbital Computing"
title_zh: "StarMind：轨道计算的挑战与机遇"
url: "https://arxiv.org/abs/2610.26916"
source_quality: full
topics: [orbital-computing, optical-ISL, reference-architecture, task-placement, SAR, InSAR, space-ground-collaboration, interfaces]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

Gong, Liu, Cao and co-authors (City University of Hong Kong, China Telecom Research Institute, University of Cambridge CXC; arXiv 2610.26916, cs.NI with eess.SY, v1 17 October 2026) examine the StarMind vision, in which satellites act as an interconnected orbital computing fabric over optical inter-satellite links (OISLs), and propose a reference framework for it. The paper's stated motivation in the abstract is that current infrastructures are fragmented, making end-to-end coordination across heterogeneous multi-vendor systems difficult. It positions StarMind as building on SatCom/NTN, satellite edge computing, communication-computing integration and delay-tolerant networking, not replacing them or terrestrial processing.

The architecture has five layers (Spacecraft Operation and Assurance; Service and Application; Orchestration; Compute, Storage and Data Management; Communication) and six standardisable interfaces: I1 Task and Service, I2 Data and Product, I3 Compute and Storage Resource, I4 Network and Contact-State, I5 Spacecraft State and Safety, I6 Result Assurance and Provenance. Four challenges follow: benefit-aware workload selection (in-orbit processing helps when source data is large, products compact and downlink delay dominates); joint network-compute-storage orchestration (worthwhile only when execution-time savings exceed coordination cost); spacecraft-constrained reliable execution (power, thermal, radiation, maintainability); and economics, trust and sustainability (interoperability, spectrum coordination, debris mitigation). Three research opportunities are listed: joint task partitioning and cross-domain orchestration, hierarchical federated intelligence across space and ground, and large-model-enabled space-ground intelligence.

The case study compares ground-based processing (GND), localised onboard computing (LOCAL) and StarMind (SM) for SAR/InSAR products using a latency model that splits end-to-end latency into transmission, contact waiting, queueing, computation and validation/delivery. Baseline latencies are 146 min for GND (including a 70 min wait for a raw-data-capable contact and a 40 min source downlink), 61 min for LOCAL and 41 min for SM (including an 8 min OISL transfer). A 10^4-run Monte Carlo perturbing contact timing, queueing, computation and link rates shows lower typical and tail latency for SM; sweeps over data volume (1 to 40 GB), OISL bandwidth (0.1 to 1000 Gbps), raw-to-product ratio (1 to 1000) and waiting time (0.1 to 720 min) draw break-even contours. The authors say the gain does not rely on faster orbital processors and is largest with large source data, compact products and sufficient OISL capacity; conventional processing may remain preferable for small datasets, imminent ground contact or slow OISLs. The paper describes the evaluation as an illustrative system-level analysis based on an analytical latency model; no hardware measurements are reported.

## Summary (ZH)

Gong、Liu、Cao 等（香港城市大学、中国电信研究院、剑桥大学 CXC；arXiv 2610.26916，cs.NI 交叉 eess.SY，v1 于 2026 年 10 月 17 日发布）阐述了 StarMind 愿景，即卫星通过光学星间链路（OISL）构成互联的轨道计算网络，并提出相应的参考框架。摘要中陈述的动机是：现有基础设施较为分散，使异构、多厂商系统之间的端到端协同困难。论文将 StarMind 定位为建立在卫星通信/NTN、卫星边缘计算、通信计算一体化和容迟网络之上，而非取代它们或地面处理。

架构分五层（航天器运行与保障；服务与应用；编排；计算、存储与数据管理；通信）和六个可标准化接口：I1 任务与服务，I2 数据与产品，I3 计算与存储资源，I4 网络与接触状态，I5 航天器状态与安全，I6 结果保证与溯源。随后提出四项挑战：效益感知的负载选择（源数据大、产品紧凑、下行延迟占主导时在轨处理才有利）；网络-计算-存储联合编排（仅当执行时间节省超过协调成本才值得）；受航天器约束的可靠执行（功率、热、辐射、可维护性）；经济、信任与可持续性（互操作性、频谱协调、碎片缓解）。列出三个研究方向：联合任务划分与跨域编排、天地分层联邦智能、大模型赋能的天地智能。

案例研究针对 SAR/InSAR 产品比较地面处理（GND）、本地星上计算（LOCAL）和 StarMind（SM），时延模型将端到端时延拆分为传输、接触等待、排队、计算和验证/交付。基线时延：GND 为 146 分钟（含等待具备原始数据下传能力的接触 70 分钟和源数据下行 40 分钟），LOCAL 为 61 分钟，SM 为 41 分钟（含 8 分钟 OISL 传输）。对接触时间、排队、计算和链路速率扰动的 10^4 次蒙特卡洛表明 SM 的典型和尾部时延更低；对数据量（1 至 40 GB）、OISL 带宽（0.1 至 1000 Gbps）、原始/产品比（1 至 1000）和等待时间（0.1 至 720 分钟）的扫描给出了盈亏平衡等值线。作者称收益并不依赖更快的星上处理器，在源数据大、产品紧凑、OISL 容量充足时最大；数据集小、地面接触即将到来或 OISL 较慢时，传统处理可能仍更优。论文称该评估为基于解析时延模型的示意性系统级分析；文中未报告硬件实测结果。

## Key technical points (EN)

- **Layers**: five (operation/assurance, service, orchestration, compute-storage-data, communication).
- **Interfaces**: six, I1 to I6, from task/service to result assurance and provenance.
- **Case study (SAR/InSAR)**: end-to-end latency 146 min (ground), 61 min (onboard), 41 min (StarMind, including 8 min OISL).
- **Method**: latency decomposition, 10^4-run Monte Carlo, break-even sweeps.
- **Caveat**: illustrative analytical model; no hardware measurements reported.

## Key technical points (ZH)

- **分层**：五层（运行保障、服务、编排、计算存储数据、通信）。
- **接口**：六个（I1 至 I6），涵盖从任务/服务到结果保证与溯源。
- **案例（SAR/InSAR）**：端到端时延 146 分钟（地面）、61 分钟（星上）、41 分钟（StarMind，含 8 分钟 OISL）。
- **方法**：时延分解、10^4 次蒙特卡洛、盈亏平衡扫描。
- **注意**：示意性解析模型；未报告硬件实测。

## Why it matters / what's new (EN)

The paper proposes named layers and interfaces for distributed in-orbit computing and quantifies when offloading across OISLs beats ground or single-satellite processing under assumed parameters.

## Why it matters / what's new (ZH)

论文为分布式在轨计算提出了命名的分层和接口，并在假设参数下量化了跨 OISL 卸载何时优于地面或单星处理。

## Images

None.
