---
id: 2026-11-05_arxiv-replica-aware-split-inference-edge-iot-wifi-ble-esp-now
date_published: 2026-11-03
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "Replica-Aware Split Inference for Edge IoT Systems"
title_zh: "面向边缘 IoT 系统的副本感知拆分推理"
url: "https://arxiv.org/abs/2611.04779"
source_quality: full
topics: [split-inference, TinyML, IoT, replica-placement, fault-tolerance, MILP, Wi-Fi, BLE, ESP-NOW]
topic_primary: compute-offloading
topics_secondary: [on-device-inference, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

Split inference spreads the segments of a small neural network (TinyML) across several IoT devices so that no single microcontroller has to hold the whole model. The price is fragility: if one device fails, the inference pipeline is interrupted. Jenhani, Razmi and Jukan propose a recovery step in which replicas of the model segments that lived on a failed device are deployed onto surviving devices.

The placement is posed as a mixed-integer linear program (MILP). It chooses jointly which surviving device hosts each replica and which communication protocol carries the traffic, to minimise inference latency after reconfiguration. The latency model counts both computation and transmission time, under flash-memory and runtime-memory limits on each device. In the paper's setup intermediate activations move directly between devices over Wi-Fi (TCP or UDP), BLE, or ESP-NOW (restricted to ESP32-S3 pairs), and replicas are delivered by differential over-the-air update through the server's Wi-Fi access point, or over BLE for the Arduino Nano 33 BLE Sense.

The evaluation is a simulation: a MobileNetV2 (INT8, ImageNet-pretrained) split over networks of 5, 10 and 15 heterogeneous devices (ESP32-S3, Arduino Nano 33 BLE Sense, Raspberry Pi Pico 2 W, STM32 B-U585I-IOT02A), with device memory taken from datasheets and link rates referenced to earlier ESP32-S3 benchmarks. The link was therefore modelled rather than measured over the air in this paper. With 15 devices and a maximum link-rate reduction of 75%, the MILP's modelled latency is 6.8% below Computation Greedy and 18.3% below Random. Recovery success at the original link rates is 73.3%, 94.2% and 100% for the three network sizes, identical for the MILP and the deterministic heuristics (§VI-D). Simulation scripts are released on GitHub.

## Summary (ZH)

拆分推理把一个小型神经网络（TinyML）的各段分布到多台 IoT 设备上，使任何单个微控制器都不必容纳整个模型。代价是脆弱性：一台设备失效，推理流水线就会中断。Jenhani、Razmi 与 Jukan 提出一个恢复步骤：把原本位于失效设备上的模型段的副本部署到存活设备上。

副本放置被建模为混合整数线性规划（MILP）：联合选择由哪台存活设备承载每个副本，以及使用哪种通信协议，以最小化重配置后的推理时延。时延模型同时计入计算与传输时间，并受各设备闪存与运行时内存限制。论文设定中，中间激活值通过 Wi-Fi（TCP 或 UDP）、BLE 或 ESP-NOW（仅限 ESP32-S3 设备对）在设备间直接传输；副本经由服务器的 Wi-Fi 接入点以差分 OTA 方式下发，Arduino Nano 33 BLE Sense 则通过 BLE 下发。

评估为仿真：MobileNetV2（INT8，ImageNet 预训练）在 5、10、15 台异构设备（ESP32-S3、Arduino Nano 33 BLE Sense、Raspberry Pi Pico 2 W、STM32 B-U585I-IOT02A）上拆分，设备内存取自数据手册，链路速率参考此前的 ESP32-S3 基准。因此本文中的链路是建模而非空口实测。在 15 台设备、链路速率最大下降 75% 的条件下，MILP 的建模时延比计算贪心（Computation Greedy）低 6.8%，比随机放置低 18.3%。原始链路速率下三种规模的恢复成功率分别为 73.3%、94.2% 和 100%，MILP 与确定性启发式方法相同（§VI-D）。仿真脚本已在 GitHub 开源。

## Key technical points (EN)

- Setting: TinyML segments distributed across heterogeneous IoT devices; failure of a hosting device breaks the pipeline.
- Replica placement and protocol selection are decided jointly by one MILP, minimising post-reconfiguration end-to-end latency (computation + transmission) under flash and runtime-memory limits.
- Protocols considered per link: Wi-Fi (TCP/UDP), BLE, ESP-NOW (ESP32-S3 pairs only); replicas delivered by differential OTA over Wi-Fi or BLE.
- Evaluation is simulated: MobileNetV2 INT8, 5/10/15 devices, link rates referenced to earlier ESP32-S3 benchmarks, link-rate reductions of 25/50/75% applied.
- Reported for 15 devices at a maximum link-rate reduction of 75%: modelled latency 6.8% below Computation Greedy and 18.3% below Random.
- Recovery success at original link rates (73.3%, 94.2%, 100%) is identical for the MILP and the deterministic heuristics.
- MILP solve time rises with the number of failures (shown for ten and fifteen devices); at five failures the heuristics are faster. With five devices and four failures recovery is infeasible under the memory limits.
- Stated future work: OTA update latency and device energy.

## Key technical points (ZH)

- 场景：TinyML 模型段分布在异构 IoT 设备上，承载设备失效会中断流水线。
- 副本放置与协议选择由同一个 MILP 联合决定，在闪存与运行时内存限制下最小化重配置后的端到端时延（计算 + 传输）。
- 每条链路可选协议：Wi-Fi（TCP/UDP）、BLE、ESP-NOW（仅限 ESP32-S3 设备对）；副本通过 Wi-Fi 或 BLE 差分 OTA 下发。
- 评估为仿真：MobileNetV2 INT8，5/10/15 台设备，链路速率参考此前 ESP32-S3 基准，并施加 25/50/75% 的链路速率下降。
- 15 台设备、链路速率最大下降 75% 时：建模时延比计算贪心低 6.8%、比随机低 18.3%。
- 原始链路速率下的恢复成功率（73.3%、94.2%、100%）MILP 与确定性启发式方法相同。
- MILP 求解时间随失效数量上升（针对 10 台与 15 台设备给出）；在 5 次失效时启发式更快。5 台设备、4 台失效时在内存限制下无法恢复。
- 作者列出的后续工作：OTA 更新时延与设备能耗。

## Why it matters / what's new (EN)

The link is a design variable here, not a background assumption: the optimiser picks a protocol per hop. The paper also reports results under reduced link rates.

Caveats worth keeping in view: the numbers are modelled latencies from a simulator with assumed computing rates, the percentage gains are modest, and the paper's own abstract mentions an implementation on 15 devices while the evaluation text describes simulation with benchmark-referenced link rates. Treat the result as a placement method with a released simulator, not as an over-the-air measurement.

## Why it matters / what's new (ZH)

这里链路是一个设计变量，而非背景假设：优化器为每一跳选择协议。论文还报告了链路速率下降条件下的结果。

需要留意的保留意见：数值是基于假定计算速率的仿真器所得的建模时延，百分比增益有限；论文摘要提到在 15 台设备上实现，而评估正文描述的是以基准参考链路速率进行的仿真。应将其视为附带开源仿真器的放置方法，而非空口实测结果。

## Images

*(No redistributable images for this entry.)*
