---
id: 2026-11-23_arxiv-hpaa-hierarchical-sdn-traffic-engineering-regenerative-payloads
date_published: 2026-11-18
date_found: 2026-11-23
type: academic-paper
technology: satellite
title_en: "Hierarchical Traffic Engineering for Scalable Software-Defined Satellite Networks"
title_zh: "面向可扩展软件定义卫星网络的分层流量工程"
url: "https://arxiv.org/abs/2611.24777"
source_quality: full
topics: [LEO, regenerative-payload, SDN, traffic-engineering, modem-banks, max-min-fairness]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Khiari, Abderrahim, Ben Yahia and coauthors consider satellite systems moving to regenerative payloads, where many modem banks are interconnected into a reconfigurable on-board network. Constellation-level routing normally treats each satellite as one node and so overlooks congestion and load imbalance inside the payload. The paper proposes a hierarchical software-defined networking (SDN) traffic-engineering framework that spans both the constellation and the payload.

The system is a two-level graph: each satellite node in the constellation graph is expanded into a toroidal internal network of modem banks. The hierarchical payload-aware allocation (HPAA) algorithm coordinates the levels by exchanging assigned traffic demand and advertised capacity budgets. A macro-controller maximises the minimum served fraction across demands (max-min fairness) given each payload's advertised budget, and each satellite's micro-controller then routes its assigned demand internally to maximise the minimum residual capacity across inter-modem links. In simulation under heavy load, the abstract reports about 9 times the throughput of shortest-path routing, 17% lower end-to-end delay and no packet loss.

## Summary (ZH)

Khiari、Abderrahim、Ben Yahia 等考虑卫星系统向再生式载荷演进的情形：多个调制解调器组被互联成可重构的星上网络。星座级路由通常把每颗卫星当作单个节点，因而忽略载荷内部的拥塞与负载不均。论文提出一种跨星座与载荷两级的分层软件定义网络（SDN）流量工程框架。

系统被表示为两级图：星座图中的每个卫星节点被展开为由调制解调器组构成的环面内部网络。分层载荷感知分配（HPAA）算法通过交换分配的流量需求与通告的容量预算来协调两级：宏控制器在各载荷通告预算的约束下最大化各需求的最小满足比例（最大最小公平），随后各卫星的微控制器在内部路由其分得的需求，以最大化调制解调器间链路的最小剩余容量。摘要报告，在重载仿真下吞吐约为最短路径路由的 9 倍，端到端时延低 17%，且无丢包。

## Key technical points (EN)

- Model: constellation graph with ISL and ground-link capacities; each payload is a toroidal graph of modem banks with per-bank service rates and inter-modem link capacities, plus a demultiplexer model in which traffic may enter by any ingress port and leave by any egress port; each payload advertises a scalar budget of the maximum traffic it can process.
- Bilevel formulation: an upper-level max-min served-fraction problem and per-satellite lower-level problems; the paper states (Proposition 1) that under the demultiplexer model the bilevel approach reaches the same optimal served fraction as a centralised benchmark that sees every payload's internal state.
- HPAA steps: satellites compute budgets in parallel, the macro-controller solves a linear reformulation for constellation-level path rates, per-satellite demands are derived, and micro-controllers solve internal routing in parallel; LPs are solved with GLPK via CVXPY.
- Simulation: a custom SimPy discrete-event simulator, 198 satellites in 14 planes (Walker shell at 1325 km, 50.88 deg inclination, +Grid ISLs), 10 ground stations with 3 links each, 16 modem banks per satellite with 6 ingress and 6 egress ports, 100,000 packets/s per bank and 10 Gbit/s inter-modem links.
- Baselines: centralised benchmark, payload-blind controller, single-bank satellite, load-aware shortest path and minimum-hop shortest path; HPAA matches the centralised benchmark while the baselines degrade once payloads overload, and HPAA is reported as 8.3 times faster to compute than the centralised benchmark at 198 satellites.
- Caveat: results are from the authors' own simulator with a single constellation configuration; the 9x and 17% figures appear only in the abstract (heavy load) and are not restated numerically in the body; the body notes the benchmark itself shows higher delay at light load because it selects longer candidate paths.

## Key technical points (ZH)

- 模型：星座图包含 ISL 与地面链路容量；每个载荷是调制解调器组的环面图，含每组服务速率和组间链路容量，并采用解复用器模型（流量可从任一入端口进入、从任一出端口离开）；每个载荷通告一个标量预算，表示其可处理的最大流量。
- 双层建模：上层为最大最小满足比例问题，下层为各卫星的内部问题；论文（命题 1）指出，在解复用器模型下，双层方法可达到与能看到每个载荷内部状态的集中式基准相同的最优满足比例。
- HPAA 步骤：卫星并行计算预算，宏控制器求解线性化问题得到星座级路径速率，导出各卫星分得的需求，微控制器并行求解内部路由；LP 通过 CVXPY 用 GLPK 求解。
- 仿真：自研 SimPy 离散事件仿真器，198 颗卫星分布于 14 个轨道面（Walker 壳层，高度 1325 km，倾角 50.88 度，+Grid ISL），10 个地面站、每站 3 条链路，每颗卫星 16 个调制解调器组、6 个入端口和 6 个出端口，每组 100,000 包/秒，组间链路 10 Gbit/s。
- 基线：集中式基准、载荷无感控制器、单组卫星、负载感知最短路径与最小跳数最短路径；HPAA 与集中式基准持平，而基线在载荷过载后性能下降；论文还报告在 198 颗卫星时 HPAA 的计算速度是集中式基准的 8.3 倍。
- 注意：结果来自作者自己的仿真器和单一星座配置；9 倍与 17% 的数字仅见于摘要（重载情形），正文未以数字重述；正文指出基准本身在轻载时因选择较长候选路径而时延更高。

## Why it matters / what's new (EN)

The paper notes that existing hierarchical SDN schemes model each satellite as a single node; it adds a second level inside the satellite, tied to the regenerative-payload direction (modem banks interconnected into an on-board forwarding network), and describes a controller split in which satellites advertise a single capacity number to the constellation controller. The evidence is simulation only.

## Why it matters / what's new (ZH)

论文指出现有分层 SDN 方案把每颗卫星建模为单个节点；本文在卫星内部增加了第二层，与再生式载荷方向（调制解调器组互联成星上转发网络）相关，并描述了一种控制分工：卫星仅向星座控制器通告一个容量数值。证据仅来自仿真。

## Images

None.
