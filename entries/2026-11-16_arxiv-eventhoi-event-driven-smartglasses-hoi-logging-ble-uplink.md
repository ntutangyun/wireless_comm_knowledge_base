---
id: 2026-11-16_arxiv-eventhoi-event-driven-smartglasses-hoi-logging-ble-uplink
date_published: 2026-11-06
date_found: 2026-11-16
technology: edge-ai
type: academic-paper
title_en: "EventHOI: event-camera triggering and HOI-aware encoding shrink smartglasses video to under 130 kbps so hand-object logging fits a Bluetooth Low Energy uplink"
title_zh: "EventHOI：事件相机触发与面向手物交互的编码把智能眼镜视频压到 130 kbps 以下，使手物交互记录可走蓝牙低功耗上行链路"
url: "https://arxiv.org/abs/2611.09089"
source_quality: full
topics: [smartglasses, bluetooth-low-energy, uplink-bandwidth, event-camera, remote-inference, wearables]
topic_primary: on-device-inference
topics_secondary: [compute-offloading]
novelty_score: 4
---

## Summary (EN)

University of Michigan and Samsung Research America authors address egocentric hand-object interaction (HOI) logging on smartglasses, where the glasses capture video and a remote backend (edge or cloud) runs the computer-vision model. The paper's starting point is that continuous RGB capture and the wireless uplink both exceed the glasses' energy and bandwidth budgets: Wi-Fi video offloading is described as too energy-intensive for all-day use, while the Bluetooth Low Energy (BLE) throughput the authors measured from glasses to a smartphone can be as low as 0.3 Mbps on iPhones, below the bitrate their RGB-streaming baseline needs.

EventHOI splits the work between the glasses and the backend. On the glasses, a low-power event camera and an IMU decide when the high-power RGB camera is triggered; an IMU-based egomotion-cancellation step removes camera-motion events so that residual hand-object motion drives both the trigger and a spatially selective, HOI-aware video encoder. The compressed RGB stream then goes over BLE to the backend for HOI recognition. Link computed over: Bluetooth Low Energy (measured BLE uplink on a prototype built on a Raspberry Pi Zero plus an nRF52840 BLE workload; the vision model itself runs off the glasses).

## Summary (ZH)

密歇根大学与三星美国研究院的作者研究智能眼镜上的第一视角手物交互（HOI）记录：眼镜采集视频，远端后端（边缘或云）运行视觉模型。论文的出发点是，持续 RGB 采集与无线上行都超出了眼镜的能耗与带宽预算：文中称 Wi-Fi 视频卸载对全天使用而言能耗过高，而作者实测眼镜到手机的蓝牙低功耗（BLE）吞吐在 iPhone 上可低至 0.3 Mbps，低于其 RGB 串流基线所需码率。

EventHOI 在眼镜与后端之间划分工作。眼镜端由低功耗事件相机和 IMU 决定何时触发高功耗 RGB 相机；基于 IMU 的自运动消除步骤去除相机运动引起的事件，使剩余的手物运动同时驱动触发与空间选择性的、面向 HOI 的视频编码。压缩后的 RGB 流经 BLE 送往后端做 HOI 识别。所经链路：蓝牙低功耗（在基于树莓派 Zero 与 nRF52840 BLE 负载的原型上实测 BLE 上行；视觉模型本身运行在眼镜之外）。

## Key technical points (EN)

- Evaluation uses a 50-hour egocentric benchmark with 97 subjects, plus a 20-hour real-world dataset the authors collected from 10 participants (IRB approval) with a 46 g glasses prototype carrying an event camera, an RGB camera and an IMU.
- Against the 1-FPS uniform-sampling baseline, EventHOI lowers the effective RGB frame rate from 1 to 0.42 FPS and the BLE uplink from 0.38 to 0.13 Mbps (2.9x) on average, at a 1.2% loss in weighted recognition accuracy; the RGB uplink stays under 130 kbps.
- At the same 0.12 Mbps BLE uplink, EventHOI is reported to be 12.2% more accurate on average than 0.35-FPS uniform sampling, which isolates the benefit of the detector and encoder from simply sending fewer frames.
- On-device power: always-on sensing power is reduced by about 35x versus uniform and YOLO baselines, detection-stage power by 5.5x versus YOLO, and uplink radio power by 1.3-1.8x; total always-on backend power during non-HOI periods falls by 5.8x and 10.4x versus the two baselines, which the paper maps to 33% and 41% energy savings on the two datasets (Raspberry Pi OS idle power excluded).
- Latency on the Raspberry Pi Zero: YOLO needs 6.93 s per 256x256 frame, while EventHOI processes an event frame in 15-20 ms and decides a 1-FPS RGB capture within 100 ms; waking the ESP32-S3 camera from sleep takes up to 300 ms.
- The power study on an ESP32-S3 with an OV5640 camera is used to show where glasses energy goes, motivating a design that avoids continuous Wi-Fi streaming in favour of a low-power radio.

## Key technical points (ZH)

- 评测使用含 97 名受试者的 50 小时第一视角基准，以及作者经伦理审批从 10 名参与者处采集的 20 小时真实数据，所用 46 g 眼镜原型带有事件相机、RGB 相机与 IMU。
- 相对 1 FPS 均匀采样基线，EventHOI 将有效 RGB 帧率从 1 降至 0.42 FPS，BLE 上行平均从 0.38 降至 0.13 Mbps（2.9 倍），加权识别准确率仅下降 1.2%；RGB 上行保持在 130 kbps 以下。
- 在同为 0.12 Mbps 的 BLE 上行下，EventHOI 的平均准确率比 0.35 FPS 均匀采样高 12.2%，从而把检测器与编码器的收益同"单纯少发帧"区分开来。
- 端侧功耗：常开感知功耗相对均匀采样与 YOLO 基线降低约 35 倍，检测阶段功耗相对 YOLO 降低 5.5 倍，上行射频功耗降低 1.3-1.8 倍；非 HOI 时段的常开后端总功耗相对两种基线分别降低 5.8 倍与 10.4 倍，论文折算为两个数据集上 33% 与 41% 的能耗节省（不含树莓派系统空闲功耗）。
- 树莓派 Zero 上的时延：YOLO 处理一帧 256x256 图像需 6.93 秒，EventHOI 处理一帧事件图像仅 15-20 毫秒，并可在 100 毫秒内决定 1 FPS 的 RGB 采集；ESP32-S3 相机从休眠唤醒最多需 300 毫秒。
- 作者在带 OV5640 相机的 ESP32-S3 上做功耗研究，说明眼镜的能耗去向，并据此采用避免持续 Wi-Fi 串流、改用低功耗无线电的设计。

## Why it matters / what's new (EN)

For a phone-or-backend-plus-glasses split, it treats the Bluetooth Low Energy link as the binding constraint and works backwards from it: the compute on the glasses (event triggering, compression) exists to fit the video into what BLE can carry. The numbers come from a real prototype and a large benchmark, but the vision model runs off the glasses, and the 35x and 5.8-10.4x power figures are measured on a Raspberry Pi Zero-based prototype with specific baselines rather than on a shipping glasses product.

## Why it matters / what's new (ZH)

对"眼镜加手机或后端"的分工而言，它把蓝牙低功耗链路视为决定性约束并由此倒推设计：眼镜端的计算（事件触发、压缩）只为让视频能装进 BLE 的承载能力。数据来自真实原型与大规模基准，但视觉模型运行在眼镜之外，35 倍与 5.8-10.4 倍的功耗数字是在基于树莓派 Zero 的原型和特定基线上测得，并非量产眼镜产品。

## Images

![EventHOI overview: event sensing triggers RGB capture and compresses the uplink | EventHOI 概览：事件感知触发 RGB 采集并压缩上行](https://arxiv.org/html/2611.09089v1/teaser.png)
![EventHOI smartglasses prototype | EventHOI 智能眼镜原型](https://arxiv.org/html/2611.09089v1/prototype.png)
