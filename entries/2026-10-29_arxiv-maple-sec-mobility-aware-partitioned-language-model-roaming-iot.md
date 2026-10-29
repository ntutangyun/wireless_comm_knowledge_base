---
id: 2026-10-29_arxiv-maple-sec-mobility-aware-partitioned-language-model-roaming-iot
date_published: 2026-10-27
date_found: 2026-10-29
technology: edge-ai
type: academic-paper
title_en: "MAPLE-Sec: splitting a compact security language model across a roaming device and its nearest edge node, with handover-time state migration"
title_zh: "MAPLE-Sec：在漫游设备与最近的边缘节点之间划分紧凑安全语言模型，并在切换时迁移推理状态"
url: "https://arxiv.org/abs/2610.37147"
source_quality: full
topics: [split-inference, early-exit, activation-compression, handover, mobile-edge-computing, Jetson-Orin-Nano, intrusion-detection]
topic_primary: compute-offloading
topics_secondary: [edge-ai-networking]
novelty_score: 2
---

## Summary (EN)

Roaming IoT endpoints (vehicles, wearables, drones) cross network domains, static, cloud-anchored detectors cannot follow them, and detection state is lost at every inter-domain handover. MAPLE-Sec partitions a compact security-tuned language model between the device and its nearest edge node. A trajectory-conditioned partition scheduler recomputes the split layer from predicted handover timing, residual battery and uplink quality; a token-budgeted early-exit mechanism returns a verdict at the shallowest layer that meets a confidence threshold; and a learned activation-compression codec moves the intermediate state to the next edge node during handover instead of resending raw telemetry. The partition-and-migration choice is formulated as an on-device constrained optimisation solved in sub-millisecond time.

Experiments run the device head on a physical Jetson Orin Nano (TensorRT FP16) and the tail on an RTX 4090 edge server, joined by a Linux tc-netem link emulating 5G NR (cell edge 4 Mb/s, 15 ms RTT, 1% loss; mid-cell 25 Mb/s, 5 ms RTT), with handovers injected every 6 to 12 s from SUMO vehicle traces (1,200 traces, about 14,000 handover events) and traffic from the CIC-IoT 2023 and Edge-IIoTset intrusion datasets. Reported: converged F1 up to 9.3% (relative) above cloud-only and 2.9 points above the strongest edge-collaborative baseline (EdgeShard), end-to-end latency reduced by up to 2.5x, and the codec cuts migration energy 2.4x. The codec compresses a 1,024-byte split activation to 160 bytes (6.4x), with encode/decode under 0.3 ms each on the Orin Nano.

## Summary (ZH)

漫游的物联网终端（车辆、可穿戴设备、无人机）会跨越多个网络域，静态的、锚定在云端的检测器无法跟随，且每次跨域切换都会丢失检测状态。MAPLE-Sec 把一个紧凑的、针对安全任务微调的语言模型划分到设备与其最近的边缘节点之间：轨迹条件化的划分调度器根据预测的切换时间、剩余电量和上行链路质量重新计算切分层；受 token 预算约束的提前退出机制在满足置信度阈值的最浅层给出判定；学习得到的激活压缩编解码器在切换时把中间状态迁移到下一个边缘节点，而不是重发原始遥测数据。划分与迁移的决策被表述为设备端约束优化问题，可在亚毫秒内求解。

实验把设备端头部放在真实的 Jetson Orin Nano 上（TensorRT FP16），尾部放在 RTX 4090 边缘服务器上，两者之间用 Linux tc-netem 链路模拟 5G NR（小区边缘 4 Mb/s、15 ms RTT、1% 丢包；小区中部 25 Mb/s、5 ms RTT），按 SUMO 车辆轨迹每 6 至 12 秒注入一次切换（1200 条轨迹，约 14000 次切换事件），流量来自 CIC-IoT 2023 与 Edge-IIoTset 入侵数据集。论文报告：收敛后的 F1 最高比仅云端方案高 9.3%（相对），比最强的边缘协同基线（EdgeShard）高 2.9 个百分点，端到端时延最多降低 2.5 倍，编解码器使迁移能耗降低 2.4 倍。该编解码器把 1024 字节的切分激活压缩到 160 字节（6.4 倍），在 Orin Nano 上编码和解码各不到 0.3 ms。

## Key technical points (EN)

- **Split point is dynamic**: recomputed per flow from handover prediction, battery and uplink, rather than fixed at design time.
- **Early exit plus split**: a confidence-gated exit can end inference on the device before any transmission.
- **State migration**: only the 160-byte compressed activation moves between edge nodes (versus 1,024 bytes raw).
- **Evaluation caveat**: the radio is emulated (tc-netem) and mobility comes from SUMO traces; no real cellular handover is measured, and the language model is small and task-specific.
- **Boundary note**: the handover and edge-node behaviour is 5G/MEC-flavoured; the AI-workload partitioning is the contribution kept here.

## Key technical points (ZH)

- **切分点是动态的**：根据切换预测、电量和上行链路对每条流重新计算，而非在设计时固定。
- **提前退出加切分**：置信度门控的退出可以在任何传输之前于设备端结束推理。
- **状态迁移**：边缘节点之间只需迁移 160 字节的压缩激活（原始为 1,024 字节）。
- **评测注意事项**：无线链路为模拟（tc-netem），移动性来自 SUMO 轨迹；没有测量真实的蜂窝切换，且语言模型规模小、任务专用。
- **边界说明**：切换与边缘节点行为带有 5G/MEC 色彩；此处保留的是 AI 工作负载划分这一贡献。

## Why it matters / what's new (EN)

Most split-inference entries in this KB assume a static device-edge pair; this paper makes the split follow the device across edge nodes and treats the intermediate activation as migratable state. The numbers come from a testbed with an emulated link and a dataset-driven workload, so they indicate direction rather than field performance. It is kept as a compact example of mobility-aware partitioning.

## Why it matters / what's new (ZH)

本知识库中的多数切分推理条目假设设备与边缘节点的配对是静态的；本文让切分点随设备在边缘节点之间移动，并把中间激活当作可迁移的状态。结果来自链路模拟、负载由数据集驱动的测试台，因此只反映趋势而非现场性能。作为感知移动性的划分方案的简明示例保留。

## Images

*(No redistributable images for this entry.)*
