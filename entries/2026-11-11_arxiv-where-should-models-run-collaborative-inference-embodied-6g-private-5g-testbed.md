---
id: 2026-11-11_arxiv-where-should-models-run-collaborative-inference-embodied-6g-private-5g-testbed
date_published: 2026-11-07
date_found: 2026-11-11
technology: edge-ai
type: academic-paper
title_en: "Where Should Models Run? Split points across channel conditions for ResNet-101, Qwen2.5-VL-7B and OpenVLA-7B, with a private-5G Jetson testbed cutting latency 18.86% at the worst measured link"
title_zh: "模型该在哪里运行？ResNet-101、Qwen2.5-VL-7B、OpenVLA-7B 在不同信道条件下的切分点，私有 5G Jetson 测试床在最差实测链路下时延降低 18.86%"
url: "https://arxiv.org/abs/2611.11023"
source_quality: full
topics: [collaborative-inference, model-partitioning, embodied-intelligence, private-5G, Wi-Fi, VLA]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 4
---

## Summary (EN)

The article (version 1, under review; Univ. of Warwick with co-authors from Nanchang Univ., Wuhan Univ. of Technology and Pengcheng Laboratory; supported by the EU Horizon Europe project DIRECT) asks where a model should be split between a robot and an edge server when the best split depends on the wireless link. It proposes an edge-centric framework in which the edge server predicts end-to-end latency from device and network status and chooses the partition point. Link computed over: Wi-Fi in an analytical simulator (communication latency from a Wi-Fi SNR-to-goodput mapping, five SNR settings from 30 to 5 dB), and a real private 5G standalone link (USRP B210 base station, NR band n78, 20 MHz) in the hardware test. Models are ResNet-101, Qwen2.5-VL-7B and OpenVLA-7B, split between a Jetson Nano or AGX Xavier device and an AGX Thor edge server.

## Summary (ZH)

本文（第 1 版，审稿中；华威大学，合作者来自南昌大学、武汉理工大学和鹏城实验室；受欧盟 Horizon Europe 项目 DIRECT 资助）研究当最优切分取决于无线链路时，模型应在机器人与边缘服务器之间如何切分。文中提出以边缘为中心的框架：边缘服务器根据设备与网络状态预测端到端时延并选择切分点。所经链路：解析仿真器中的 Wi-Fi（通信时延来自 Wi-Fi 信噪比到有效吞吐的映射，五档信噪比 30 至 5 dB），以及硬件测试中的真实私有 5G 独立组网链路（USRP B210 基站，NR n78 频段，20 MHz）。模型为 ResNet-101、Qwen2.5-VL-7B 与 OpenVLA-7B，在 Jetson Nano 或 AGX Xavier 设备与 AGX Thor 边缘服务器之间切分。

## Key technical points (EN)

- Framework: a four-stage loop (device reports battery and link status; the MEC server predicts latency, caches and optionally compresses the model; it picks the partition point; the device runs its prefix and sends intermediate features).
- Simulation (analytical, not over-the-air): for ResNet-101 the preferred split moves deeper onto the device as the channel degrades from Excellent to Bad; for Qwen2.5-VL-7B the preferred split changes between Fair and Poor, because executing the patch merger on the device shrinks the transmitted payload while earlier vision-block splits do not. Partitioning is restricted to the visual and feature-fusion parts so that autoregressive decoding stays on Thor.
- Hardware (Qwen2.5-VL-7B only): a camera rover with an AGX Xavier and a 5G modem moves away from and back toward the base station; three measured channel conditions C1-C3 are not assigned SNR values. Communication latency is HTTP round trip minus Thor server-processing time, so it includes protocol overhead.
- Measured: under C1 the earliest of the five candidate splits is best (2426.73 ms end to end); under C2 and C3 the deepest candidate (patch merger on the rover) cuts end-to-end latency by 6.61% and 18.86% relative to it. At C3 communication latency falls from 2362.33 ms to 1594.57 ms and Thor-side energy per frame from 46.45 J to 39.55 J (14.85%).
- The latency-minimizing split need not minimize edge energy (at C1 a different candidate has the lowest edge energy). Rover energy is not reported because device power telemetry was unavailable; online switching overhead is not included; every configuration identified the target in the demonstrated scene.

## Key technical points (ZH)

- 框架：四阶段闭环（设备上报电量与链路状态；MEC 服务器预测时延、缓存并可选压缩模型；选择切分点；设备执行前段并发送中间特征）。
- 仿真（解析仿真，非空口）：ResNet-101 的最优切分随信道由 Excellent 恶化到 Bad 而更多地留在设备端；Qwen2.5-VL-7B 的最优切分在 Fair 与 Poor 之间改变，原因是在设备上执行 patch merger 会缩小传输载荷，而更早的视觉块切分不会。切分仅限于视觉与特征融合部分，自回归解码保留在 Thor 上。
- 硬件（仅 Qwen2.5-VL-7B）：载有 AGX Xavier 与 5G 模组的摄像头小车远离并返回基站；三种实测信道条件 C1-C3 未标注信噪比。通信时延为 HTTP 往返时间减去 Thor 服务端处理时间，因此包含协议开销。
- 实测：C1 下五个候选切分中最浅者最优（端到端 2426.73 ms）；C2、C3 下最深候选（小车端执行 patch merger）相对其将端到端时延降低 6.61% 与 18.86%。C3 下通信时延由 2362.33 ms 降至 1594.57 ms，Thor 侧单帧能耗由 46.45 J 降至 39.55 J（14.85%）。
- 时延最优的切分未必边缘能耗最低（C1 下另一候选的边缘能耗最低）。因设备功耗遥测不可用，未报告小车能耗；不含在线切换开销；演示场景中所有配置均识别出目标。

## Why it matters / what's new (EN)

It pairs a channel-parameterised model of three very different models (CNN, VLM, VLA) with a measurement on a real private 5G link, and it shows that no single rule such as "split deeper as SNR drops" holds across them. Caveats: the hardware study covers one model and one rover trajectory, the Wi-Fi results are simulated, and the paper is a review-plus-framework article under review.

## Why it matters / what's new (ZH)

它将三种差异很大的模型（CNN、VLM、VLA）的信道参数化建模与真实私有 5G 链路实测相结合，并表明"信噪比下降就把切分点后移"之类的单一规则并不适用于所有模型。局限：硬件研究仅覆盖一个模型与一条小车轨迹，Wi-Fi 结果为仿真，且本文为综述加框架类文章、尚在审稿。

## Images

*(No redistributable images for this entry.)*
