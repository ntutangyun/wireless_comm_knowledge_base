---
id: 2026-10-26_arxiv-heterogeneous-space-data-centers-large-small-nodes-dawn-dusk
date_published: 2026-10-23
date_found: 2026-10-26
technology: satellite
type: academic-paper
title_en: "Heterogeneous Space Data Centers: A Key Paradigm for Future Non-Terrestrial and In-Orbit Services"
title_zh: "异构太空数据中心：未来非地面与在轨服务的关键范式"
url: "https://arxiv.org/abs/2610.32260"
source_quality: full
topics: [space-data-center, in-orbit-computing, dawn-dusk-orbit, inter-satellite-link, optical-ISL, Earth-observation, energy, node-sizing]
topic_primary: sat-ai
topics_secondary: [leo-constellations, ntn]
novelty_score: 3
---

## Summary (EN)

Hu, Alhassan and Iqbal (arXiv 2610.32260, eess.SY with cs.AI, submitted 23 October 2026) argue that cheaper launches and AI demand are driving interest in orbital data centres, while architecture, service models and power supply remain little studied. They propose heterogeneous space data centres (HSDC): large nodes (L-SDC) in a dawn-dusk sun-synchronous orbit acting as a shared backbone, and small nodes (S-SDC) flying in customers' orbits to process data near where it is produced.

Sizing as given in the paper: an L-SDC is rack-class (one NVL72-type rack), needs to generate and reject roughly 175 to 275 kW, with about 225 to 350 m2 of radiator and 540 to 850 m2 of beginning-of-life array; an S-SDC has a 5 to 10 kW budget (comparable to an eight-GPU server), about 50 m2 of array and 20 kWh of battery at 30% depth of discharge for 10 kW. L-SDCs sit at 650 km, 97.98 degrees inclination, with beta angle near 80 degrees, so they need only a small safe-mode battery; the stated trade-off is weaker coverage of low- and mid-latitude users. Inference, filtering and scheduling go to S-SDCs; training, model repository and the main ground path go to L-SDCs. Links are an S-band control plane (1 to 100 Mb/s) and a 1550 nm optical data plane (commercial links of about 100 Gb/s at up to 5,400 km), with gateways at Svalbard, Troll and Winnipeg.

Preliminary evaluation: 8 Earth-observation satellites at 650 km, 2 GB scenes, 400 per satellite per day (1,600 stress case). The authors recommend four L-SDCs per plane (longest link-window wait 27 to 36 minutes). For in-orbit users HSDC delivers products in about 2 s (all within 7 s); L-SDC-only serves about 46% of scenes within 40 s. For ground users, median latency is 14 min (HSDC), 16 min (L-SDC-only) and 22 min (ground-only); the share arriving within 15 min is 52%, 49% and 39%. Energy is about 1,470 kWh/day per L-SDC and 60 kWh/day per S-SDC, 96% of a four-plus-four total from L-SDCs. Stated caveats: no job forwarding from busy S-SDCs, no L-SDC retraining, no weather or drag, and H100 speed scaled from Jetson timings via spec sheets rather than measured.

## Summary (ZH)

Hu、Alhassan 和 Iqbal（arXiv 2610.32260，eess.SY，交叉 cs.AI，2026 年 10 月 23 日提交）指出，发射成本下降与 AI 需求正推动对在轨数据中心的关注，但其架构、服务模型和供电仍少有研究。他们提出异构太空数据中心（HSDC）：大型节点（L-SDC）位于晨昏太阳同步轨道，充当共享骨干；小型节点（S-SDC）运行在客户轨道上，就近处理数据。

论文给出的规模：L-SDC 为机架级（约一个 NVL72 类机架），需产生并散出约 175 至 275 kW，约需 225 至 350 m2 散热板和 540 至 850 m2 寿命初期太阳翼；S-SDC 功率预算 5 至 10 kW（相当于一台八 GPU 服务器），10 kW 节点约需 50 m2 太阳翼和 30% 放电深度下 20 kWh 电池。L-SDC 位于 650 km、倾角 97.98 度，beta 角接近 80 度，因此仅需小型安全模式电池；论文给出的代价是对低、中纬度用户覆盖较弱。推理、过滤与调度由 S-SDC 承担；训练、模型库和主要的对地通路由 L-SDC 承担。链路为 S 频段控制面（1 至 100 Mb/s）和 1550 nm 光数据面（商用链路约 100 Gb/s、最远 5,400 km），地面关口站位于斯瓦尔巴、Troll 和温尼伯。

初步评估：650 km 上 8 颗对地观测卫星，每景 2 GB，每星每天 400 景（压力场景 1,600 景）。作者建议每个轨道面部署四个 L-SDC（最长链路窗口等待 27 至 36 分钟）。对在轨用户，HSDC 约 2 秒交付产品（全部在 7 秒内）；仅 L-SDC 时约 46% 的场景在 40 秒内得到服务。对地面用户，中位时延为 14 分钟（HSDC）、16 分钟（仅 L-SDC）和 22 分钟（仅地面）；15 分钟内到达的比例分别为 52%、49% 和 39%。能耗约为每个 L-SDC 每天 1,470 kWh、每个 S-SDC 每天 60 kWh，四加四配置总量中 96% 来自 L-SDC。论文自述的局限：未建模繁忙 S-SDC 的任务转发、L-SDC 再训练、天气和阻力，且 H100 速度由 Jetson 计时按规格书换算而非实测。

## Key technical points (EN)

- **Architecture**: L-SDC backbone in dawn-dusk SSO (650 km) plus S-SDC nodes in customer orbits.
- **Sizing**: L-SDC about 175 to 275 kW; S-SDC 5 to 10 kW.
- **Interconnect**: S-band control plane; 1550 nm optical data plane about 100 Gb/s.
- **Workload split**: inference on S-SDC; training and model repository on L-SDC.
- **Results**: median ground-user latency 14 / 16 / 22 min for HSDC / L-SDC-only / ground-only; in-orbit users about 2 s.
- **Caveat**: H100 speed scaled from Jetson timings, not measured.

## Key technical points (ZH)

- **架构**：晨昏太阳同步轨道（650 km）上的 L-SDC 骨干，加客户轨道上的 S-SDC 节点。
- **规模**：L-SDC 约 175 至 275 kW；S-SDC 5 至 10 kW。
- **互联**：S 频段控制面；1550 nm 光数据面约 100 Gb/s。
- **负载划分**：推理在 S-SDC；训练与模型库在 L-SDC。
- **结果**：地面用户中位时延 HSDC / 仅 L-SDC / 仅地面分别为 14 / 16 / 22 分钟；在轨用户约 2 秒。
- **局限**：H100 速度由 Jetson 计时换算，非实测。

## Why it matters / what's new (EN)

The paper sets out a two-tier sizing and placement framework for orbital computing with a simulated Earth-observation workload. The numbers come from the authors' own simulation and spec-sheet scaling.

## Why it matters / what's new (ZH)

该论文为在轨计算提出了两层规模与部署框架，并以仿真的对地观测负载做了评估。数字来自作者自己的仿真与规格书换算。

## Images

None.
