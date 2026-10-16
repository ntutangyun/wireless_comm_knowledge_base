---
id: 2026-10-16_arxiv-fttr-wifi7-xr-predictive-resource-allocation-roaming
date_published: 2026-10-11
date_found: 2026-10-16
technology: wifi
type: academic-paper
title_en: "Coarse-Grained Predictive Resource Allocation Framework enabling In-Premise XR Collaborations"
title_zh: "支持室内 XR 协作的粗粒度预测式资源分配框架（FTTH/FTTR/Wi-Fi 多级级联）"
url: "https://arxiv.org/abs/2610.15581"
source_quality: full
topics: [FTTR, Wi-Fi 7, MLO, OFDMA, XR, traffic forecasting, roaming, TCN-BiLSTM]
topic_primary: roaming-mobility
topics_secondary: [mlo, rtwt-latency, ai-for-wifi]
novelty_score: 2
---

## Summary (EN)

The paper (Sourav Mondal and Elaine Wong; arXiv 2610.15581, submitted 11 October 2026) addresses extended-reality (XR) collaboration traffic over a cascade of three segments: an FTTH 50G-PON backhaul, an FTTR (Fiber-To-The-Room) segment in which a main FTTR unit connects to room units (SFUs) over a 10 Gbps XG(S)-PON, and Wi-Fi access points in each room. Its stated problem is meeting XR throughput, latency and reliability demands across all three segments while avoiding cyber-sickness. The authors note in the introduction that distributed Wi-Fi lacks received-power-threshold handover, so a station can stay attached to a poorly received AP; the framework therefore combines traffic forecasting for proactive resource allocation with network-orchestrated in-premise roaming, building on the authors' earlier roaming framework.

AI model complexity is scaled to each segment. At the FTTR segment a hybrid temporal convolutional and bidirectional LSTM network (1 TCN + 2 BiLSTM layers) forecasts multi-modal XR traffic (video, head orientation, control and haptics); long-horizon forecasts reduce how often inference runs and drive coordinated FTTR-Wi-Fi allocation across Wi-Fi APs using multi-link operation and OFDMA. At the FTTH segment, Transformer-based time-series models (Informer, Autoformer, PatchTST, TFT) predict the aggregate XR traffic of the FTTR segments.

The evaluation uses an OMNeT++ simulation co-run with PyTorch: a 50G-PON of 20 km and 32 ONUs, 256 SFUs, each attached to a Wi-Fi 7 AP configured with a fixed 1 ms OFDMA TxOP and MLO (8 antennas on 5 GHz and 8 on 6 GHz, 20 dBm downlink power), four human-machine XR pairs per premise in 10 x 10 m rooms, plus three background devices; 4K, 8K and 16K XR video, network load 0.1 to 1.0. The reported results are NRMSE below 0.1 for the hybrid model on the FTTR-Wi-Fi segment, Transformer-based models (PatchTST and TFT specifically) outperforming the hybrid model at long horizons on the FTTH segment (the abstract says up to about 75% more accurate), and a reduction of XR frame transmission latency by nearly 90% with the network-orchestrated roaming compared with staying connected at large AP-STA distances.

## Summary (ZH)

论文（Sourav Mondal、Elaine Wong；arXiv 2610.15581，2026 年 10 月 11 日提交）研究跨三级级联网络的扩展现实（XR）协作流量：FTTH 的 50G-PON 回传、由主 FTTR 单元经 10 Gbps XG(S)-PON 连接房间单元（SFU）的 FTTR（光纤到房间）段，以及每个房间内的 Wi-Fi 接入点。论文所述问题是在三段上同时满足 XR 对吞吐、时延和可靠性的要求并避免眩晕。作者在引言中指出分布式 Wi-Fi 缺少基于接收功率门限的切换机制，终端可能一直连在信号很差的 AP 上；因此框架把用于主动资源分配的流量预测与网络编排的室内漫游结合起来，并建立在作者此前的漫游框架之上。

AI 模型复杂度按各段算力缩放。在 FTTR 段，混合时间卷积加双向 LSTM 网络（1 层 TCN + 2 层 BiLSTM）预测多模态 XR 流量（视频、头部朝向、控制与触觉）；长时域预测降低推理频率，并驱动使用多链路操作（MLO）与 OFDMA 的 FTTR-Wi-Fi 协同资源分配。在 FTTH 段，基于 Transformer 的时间序列模型（Informer、Autoformer、PatchTST、TFT）预测各 FTTR 段聚合的 XR 流量。

评估采用与 PyTorch 联合运行的 OMNeT++ 仿真：20 km、32 个 ONU 的 50G-PON，256 个 SFU，每个连接一台 Wi-Fi 7 AP，配置固定 1 ms 的 OFDMA TxOP 和 MLO（5 GHz 8 天线、6 GHz 8 天线，下行 20 dBm），每户 10 x 10 m 房间内 4 对人机 XR 用户，另有 3 个背景设备；4K、8K、16K XR 视频，网络负载 0.1 至 1.0。报告结果：FTTR-Wi-Fi 段混合模型 NRMSE 低于 0.1；在 FTTH 段长时域预测上，Transformer 类模型（具体为 PatchTST 与 TFT）优于混合模型（摘要称最高约精确 75%）；与在较大 AP-STA 距离下保持连接相比，网络编排漫游使 XR 帧传输时延降低近 90%。

## Key technical points (EN)

- Architecture: FTTH (50G-PON, 20 km, 32 ONUs) to FTTR (XGS-EPON 1:8 in simulation, 256 SFUs) to Wi-Fi 7 APs; the MFU acts as residential gateway and controller for the FTTR-Wi-Fi segment.
- Forecasting: 1 TCN + 2 BiLSTM hybrid at FTTR; Informer / Autoformer / PatchTST / TFT at FTTH; forecast horizon examined from 125 us to 1 ms ahead at the FTTR segment.
- Wi-Fi settings in the simulation: Wi-Fi 7 APs with fixed 1 ms OFDMA TxOP and MLO over 5 and 6 GHz.
- Reported: NRMSE < 0.1 for the hybrid model; Transformer models up to about 75% more accurate for long-horizon FTTH forecasting (abstract); nearly 90% lower XR frame latency with orchestrated roaming versus staying connected at large AP-STA distance.

## Key technical points (ZH)

- 架构：FTTH（50G-PON，20 km，32 个 ONU）到 FTTR（仿真中为 1:8 的 XGS-EPON，256 个 SFU）再到 Wi-Fi 7 AP；MFU 充当住宅网关及 FTTR-Wi-Fi 段的控制器。
- 预测：FTTR 段用 1 层 TCN + 2 层 BiLSTM 混合网络；FTTH 段用 Informer / Autoformer / PatchTST / TFT；FTTR 段考察了向前 125 us 至 1 ms 的预测时域。
- 仿真中的 Wi-Fi 设置：Wi-Fi 7 AP，固定 1 ms OFDMA TxOP，5 GHz 与 6 GHz 上的 MLO。
- 报告结果：混合模型 NRMSE < 0.1；FTTH 长时域预测 Transformer 类模型最高约精确 75%（摘要）；与在较大 AP-STA 距离下保持连接相比，编排漫游使 XR 帧时延降低近 90%。

## Why it matters / what's new (EN)

The Wi-Fi part of this work is evaluated only in simulation and is one segment of a fiber-plus-Wi-Fi cascade; the roaming figure compares against a no-handover baseline rather than against standardised Wi-Fi roaming mechanisms. The authors state that satisfying XR QoE across FTTR-Wi-Fi in dense multi-AP premises had not been investigated, and that their earlier work proposed the in-premise roaming framework. It touches roaming-mobility, MLO and AI-for-Wi-Fi topics in this KB; a related invited paper on in-premise network evolution (arXiv 2610.15566) appeared in the same listing but was not read.

## Why it matters / what's new (ZH)

这项工作中的 Wi-Fi 部分仅在仿真中评估，并且只是光纤加 Wi-Fi 级联中的一段；漫游的数据是与“不切换”基线比较，而非与标准化的 Wi-Fi 漫游机制比较。作者声称，在密集多 AP 的住宅中满足 FTTR-Wi-Fi 上的 XR QoE 此前尚未被研究，其此前工作提出了室内漫游框架。它涉及本知识库中的漫游、MLO 和 AI-for-Wi-Fi 主题；同一列表中还看到一篇讨论室内网络演进的相关特邀论文（arXiv 2610.15566），但未阅读。
