---
id: 2026-11-17_arxiv-goal-oriented-communication-physical-ai-5g-testbed
date_published: 2026-09-14
date_found: 2026-11-17
type: academic-paper
technology: edge-ai
title_en: "Goal-Oriented Communications for Physical AI: Design and Testbed"
title_zh: "面向物理 AI 的目标导向通信：设计与测试床"
url: "https://arxiv.org/abs/2609.15895"
source_quality: full
topics: [goal-oriented communication, physical AI, 5G, OpenAirInterface, scene graph, split inference, digital twin]
topic_primary: task-oriented-communication
topics_secondary: [compute-offloading]
novelty_score: 4
---

## Summary (EN)

A King's College London and Toshiba Europe team builds an end-to-end testbed for goal-oriented communication (GoC) in physical AI. A robot user equipment (an AgileX PiPER six-degree-of-freedom arm, an Intel RealSense D435i RGB-D camera, an Intel mini PC and a Quectel RM520N-GL 5G modem) talks over a real 5G NR standalone link to an NVIDIA Jetson AGX Orin that runs the OpenAirInterface (OAI) 5G core and gNB, through a USRP B210, and also acts as the edge server. The link is band n77 at 3.3 GHz, 40 MHz bandwidth, 106 resource blocks, 2x2 antennas, at a distance of 0.5 m.

Instead of streaming raw camera images, the robot extracts and sends task-relevant semantic representations: 3D bounding boxes, 2D scene graphs or 3D scene graphs. The edge server runs a 4-bit quantised Qwen2.5-VL-72B vision-language model and LLM, an 8-bit quantised Llama-3.2-1B small language model, a MuJoCo digital twin and RRT-Connect trajectory replanning, and sends control back. Two tasks (fruit packing and cube stacking, with injected faults such as grasp failure and collision) were run 20 times per framework. The paper reports up to 52.6% shorter task completion time and up to 45% higher task success probability against a framework that periodically transmits raw images.

The paper also shows that a smaller payload does not automatically mean lower latency: higher PNG compression shrinks the image (about 150 KB at level 9) but adds encoding delay, so its total (~640 ms) exceeds the level-3 image (~324 ms); the semantic payloads (about 0.04 to 0.9 KB) arrive in roughly 18 to 22 ms on all three links, close to a protocol-stack floor, whereas a ~902 KB PNG level-0 image takes about 965, 1023 and 444 ms.

## Summary (ZH)

伦敦国王学院与东芝欧洲研究院团队为物理 AI 搭建了目标导向通信（GoC）的端到端测试床。机器人用户设备（AgileX PiPER 六自由度机械臂、Intel RealSense D435i RGB-D 相机、Intel 迷你主机和 Quectel RM520N-GL 5G 模组）通过真实的 5G NR 独立组网链路连接到 NVIDIA Jetson AGX Orin；后者经 USRP B210 运行 OpenAirInterface（OAI）5G 核心网与 gNB，同时充当边缘服务器。链路为 n77 频段 3.3 GHz、40 MHz 带宽、106 个资源块、2x2 天线，距离 0.5 m。

机器人不传原始图像，而是提取并发送与任务相关的语义表示：3D 包围盒、2D 场景图或 3D 场景图。边缘服务器运行 4 比特量化的 Qwen2.5-VL-72B 视觉语言模型与大模型、8 比特量化的 Llama-3.2-1B 小模型、MuJoCo 数字孪生以及 RRT-Connect 轨迹重规划，并将控制指令回传。两类任务（水果装箱、方块堆叠，并注入抓取失败、碰撞等故障）每种框架各运行 20 次。论文报告，相比周期性传输原始图像的框架，任务完成时间最多缩短 52.6%，任务成功概率最多提高 45%。

论文还表明载荷变小不一定带来更低时延：更高的 PNG 压缩级别使图像变小（9 级约 150 KB），但增加编码时延，总时延（约 640 ms）反而高于 3 级图像（约 324 ms）；语义载荷（约 0.04 至 0.9 KB）在三种链路上总时延均约 18 至 22 ms，已接近协议栈下限，而约 902 KB 的 PNG 0 级图像分别约需 965、1023、444 ms。

## Key technical points (EN)

- Link: real 5G NR SA (OAI gNB + Quectel modem, 40 MHz, n77); the latency table also compares Wi-Fi (20 MHz) and 5G (20 MHz) transport. Not a simulated channel.
- Compute split: semantic extraction on the robot's mini PC; VLM/LLM/SLM inference, digital twin and replanning on the Jetson edge server.
- Three semantic representations are compared: 3D-BBox, 2D-SG, 3D-SG.
- Headline: up to 52.6% less task completion time and up to 45% higher success probability versus raw image transmission; 20 runs per framework per task.
- Finding: full-stack encoding and buffering can make small payloads no faster than expected, and raw-video processing adds computation that hurts freshness for real-time control.

## Key technical points (ZH)

- 链路：真实 5G NR SA（OAI gNB + Quectel 模组，40 MHz，n77）；时延表还对比了 Wi-Fi（20 MHz）与 5G（20 MHz）传输。并非仿真信道。
- 计算划分：语义提取在机器人迷你主机上完成；VLM/LLM/SLM 推理、数字孪生与重规划在 Jetson 边缘服务器上完成。
- 对比三种语义表示：3D-BBox、2D-SG、3D-SG。
- 核心结果：相比传输原始图像，任务完成时间最多减少 52.6%，成功概率最多提高 45%；每个任务每种框架 20 次运行。
- 发现：全协议栈的编码与缓冲会使小载荷的收益不及预期，而处理原始视频带来的计算开销会损害实时控制所需的信息新鲜度。

## Why it matters / what's new (EN)

The authors state that existing GoC frameworks were mainly evaluated in simulation and had not been validated in a practical physical-AI deployment. This is a measured 5G testbed in which the communication payload is chosen to serve a downstream computation (LLM planning and a digital twin), so both the link and the compute placement are part of the result. It complements the simulated task-oriented work already in the KB. Caveats: one robot, a 0.5 m link and 20 runs per setting.

## Why it matters / what's new (ZH)

作者指出，现有 GoC 框架主要在仿真中评估，尚未在实际的物理 AI 部署中得到验证。这是一个实测的 5G 测试床：通信载荷的选择服务于下游计算（大模型规划与数字孪生），链路与计算位置都是结果的一部分。它补充了 KB 中已有的仿真类任务导向通信工作。局限：单个机器人、0.5 m 链路、每种设置 20 次运行。

## Images
![Testbed hardware: robot UE with 5G modem and Jetson AGX Orin gNB/edge server | 测试床硬件：带 5G 模组的机器人 UE 与 Jetson AGX Orin gNB/边缘服务器](https://arxiv.org/html/2609.15895v1/hardware.png)
![System model of the goal-oriented physical AI loop | 目标导向物理 AI 回路的系统模型](https://arxiv.org/html/2609.15895v1/system_model.png)
