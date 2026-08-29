---
id: 2026-08-29_arxiv-energy-proportional-vision-iot-node
date_published: 2026-08-24
date_found: 2026-08-29
type: academic-paper
technology: edge-ai
title_en: "Energy-proportional vision at the edge: an event-camera wake-up gates RGB capture and on-MCU YOLO for a 3-month battery life"
title_zh: "边缘侧的能耗正比视觉：以事件相机唤醒门控 RGB 采集与 MCU 上 YOLO 推理，实现三个月电池续航"
url: "https://arxiv.org/abs/2608.23192"
source_quality: full
topics: [TinyML, event-camera, GAP9, RISC-V, wake-up-sensing, YOLO, LoRa, always-on-vision, energy-proportional]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

In always-on edge vision the model is rarely the energy problem. As this ETH Zürich / University of Bologna paper (Moosmann, Mayer, Benini, Magno) puts it, **image acquisition remains a dominant contributor to system-level energy** — the camera and its pipeline cost more than the inference they feed. The node built here is designed around that fact: it makes energy *proportional to events* rather than to time.

The sensing is dual. A **Prophesee GENX320 event camera in ultra-low-power mode** watches continuously at **222 µW**, using Global Contrast Detector blocks over a 3×3 grid of nine zones to decide that something moved. Only then does a **Himax HM0360 320×240 RGB imager** power up. Both share a multiplexed MIPI-CSI link. Compute is split across two processors: a **GAP9 multi-core RISC-V SoC with the NE16 neural accelerator at 370 MHz** for inference, and an **nRF52832** for ultra-low-power control and radio, with 256 MiB flash and 64 MiB PSRAM for weights and buffers, an nPM1300 PMIC, and an iSP4520 SiP combining nRF52, LoRa and BLE.

The detector is **TinyissimoYOLOv12** — variant TYv12_5, **1 million parameters** across 309 layers at 256×256 input, 80-class COCO detection, **32.3% mAP@50–95**, with 8-bit post-training quantisation, depthwise-separable convolutions replacing 3×3 convolutions, and an attention detection head with reduced channel depths.

The measured cycle is the paper's substance. Idle draws **60 µA at 3.7 V** (of which the GENX320 is 22.9 µA at 2.5 V). A full sense-to-report cycle runs **452 ms at 17.1 mA average for 28.7 mJ total**, broken down as: **125.8 ms / 8.3 mJ** to first image, 2 ms demosaicing at 24.5 mA, 3.7 ms image preparation at 13.5 mA, **82.7 ms inference at 28.8 mA average = 8.8 mJ**, 2.5 ms NMS, then LoRa (**865.1 MHz, SF7**) at 980 µs of transmission followed by **99.2 ms waiting for the acknowledgement at 16.5 mA**. At a 1% daily activity ratio (1,728 cycles/day) that is **3.07 J/day**, giving **~90 days on a 1.85 Wh (6.66 kJ) battery**.

Wake-up range is characterised honestly, ten passes per distance: indoors with a window background, **13 m consistently and 7/10 at 15 m**; in a hallway, **7 m reliably, 9/10 at 8 m, 1/10 at 9 m**; outdoors **2–3 m cloudy and 3–6 m sunny**, across 200 lux indoor to 60 klux sunny, on a 104° diagonal field of view.

## Summary (ZH)

在常开边缘视觉中，模型很少是能耗问题的所在。正如这篇苏黎世联邦理工 / 博洛尼亚大学论文（Moosmann、Mayer、Benini、Magno）所指出的：**图像采集仍是系统级能耗的主导贡献者**——相机及其流水线的开销，超过它所供给的推理本身。这里构建的节点正是围绕这一事实设计的：它让能耗**正比于事件**，而非正比于时间。

传感是双路的。一颗处于超低功耗模式的 **Prophesee GENX320 事件相机**以 **222 µW** 持续监视，通过覆盖 3×3 网格九个分区的全局对比度检测器模块判断「有东西动了」。只有此时，一颗 **Himax HM0360 320×240 RGB 成像器**才上电。两者共用一条复用的 MIPI-CSI 链路。计算被拆到两颗处理器上：负责推理的 **GAP9 多核 RISC-V SoC（含 NE16 神经加速器，370 MHz）**，与负责超低功耗控制和无线的 **nRF52832**；另有 256 MiB 闪存与 64 MiB PSRAM 存放权重与缓冲，nPM1300 电源管理芯片，以及整合了 nRF52、LoRa 与 BLE 的 iSP4520 系统级封装。

检测器为 **TinyissimoYOLOv12**——变体 TYv12_5，**100 万参数**、309 层、输入 256×256、80 类 COCO 检测、**32.3% mAP@50–95**；采用 8 位训练后量化（PTQ）、以深度可分离卷积替换 3×3 卷积，并使用降低了通道深度的注意力检测头。

论文的实质在于实测的这一个周期。空闲态在 3.7 V 下消耗 **60 µA**（其中 GENX320 在 2.5 V 下占 22.9 µA）。一次完整的「感知到上报」周期历时 **452 ms、平均 17.1 mA、共 28.7 mJ**，分解为：至首帧图像 **125.8 ms / 8.3 mJ**，去马赛克 2 ms @ 24.5 mA，图像准备 3.7 ms @ 13.5 mA，**推理 82.7 ms @ 平均 28.8 mA = 8.8 mJ**，NMS 后处理 2.5 ms，随后 LoRa（**865.1 MHz，SF7**）发送 980 µs，再以 16.5 mA **等待确认 99.2 ms**。按每日 1% 活动占比（每天 1,728 次周期）计算为 **3.07 J/天**，在 **1.85 Wh（6.66 kJ）**电池上给出 **约 90 天**续航。

唤醒距离的刻画很诚实，每个距离测试十次：室内以窗户为背景时 **13 m 稳定触发、15 m 处 7/10**；走廊场景 **7 m 可靠、8 m 处 9/10、9 m 处 1/10**；户外阴天 **2–3 m**、晴天 **3–6 m**；光照跨度从室内 200 lux 到晴天 60 klux，镜头对角视场 104°。

## Key technical points (EN)

- Design principle: energy proportional to events, not to elapsed time — the expensive RGB path is gated by a cheap always-on event sensor.
- Event camera: Prophesee GENX320 in ULP mode, 222 µW continuous, Global Contrast Detector blocks over a 3×3 grid (9 zones), 104° diagonal FoV.
- RGB imager: Himax HM0360 at 320×240, powered only on motion; both cameras on a multiplexed MIPI-CSI interface.
- Compute: GAP9 multi-core RISC-V SoC with NE16 neural accelerator at 370 MHz; nRF52832 for ULP control and radio; 256 MiB flash + 64 MiB PSRAM; nPM1300 PMIC; iSP4520 SiP (nRF52 + LoRa + BLE).
- Model: TinyissimoYOLOv12 variant TYv12_5 — 1M parameters, 309 layers, 256×256 input, 80 classes, 32.3% mAP@50–95 on MS-COCO; 8-bit PTQ, depthwise-separable convolutions, reduced-depth attention detection head.
- Idle: 60 µA @ 3.7 V total; GENX320 22.9 µA @ 2.5 V; remainder level-shifter and regulator.
- Active cycle: 452 ms, 17.1 mA average, 28.7 mJ per trigger end-to-end.
- Cycle breakdown: 125.8 ms / 8.3 mJ to first image; demosaicing 2 ms @ 24.5 mA; image prep 3.7 ms @ 13.5 mA; inference 82.7 ms @ 28.8 mA = 8.8 mJ; NMS 2.5 ms; LoRa TX 980 µs then 99.2 ms ACK wait @ 16.5 mA.
- Radio: LoRa at 865.1 MHz, spreading factor 7. The ACK wait costs more energy than the transmission itself.
- Lifetime: 3.07 J/day at a 1% activity ratio (1,728 cycles/day) → ~90 days on 1.85 Wh (6.66 kJ).
- Wake-up range (10 passes per distance): indoor with window background 13 m consistent, 7/10 at 15 m; hallway 7 m reliable, 9/10 at 8 m, 1/10 at 9 m; outdoor 2–3 m cloudy, 3–6 m sunny. Illumination 200 lux to 60 klux.

## Key technical points (ZH)

- 设计原则：能耗正比于事件而非流逝时间——昂贵的 RGB 通路由廉价的常开事件传感器门控。
- 事件相机：Prophesee GENX320（ULP 模式），持续 222 µW，3×3 网格 9 分区的全局对比度检测器模块，104° 对角视场。
- RGB 成像器：Himax HM0360，320×240，仅在检测到运动时上电；两颗相机共用复用 MIPI-CSI 接口。
- 计算：GAP9 多核 RISC-V SoC（NE16 神经加速器，370 MHz）；nRF52832 负责超低功耗控制与无线；256 MiB 闪存 + 64 MiB PSRAM；nPM1300 PMIC；iSP4520 SiP（nRF52 + LoRa + BLE）。
- 模型：TinyissimoYOLOv12 变体 TYv12_5——100 万参数、309 层、输入 256×256、80 类，MS-COCO 上 32.3% mAP@50–95；8 位 PTQ、深度可分离卷积、降通道深度的注意力检测头。
- 空闲：3.7 V 下总计 60 µA；GENX320 占 2.5 V 下 22.9 µA；其余为电平转换与稳压电路。
- 活动周期：452 ms，平均 17.1 mA，每次触发端到端 28.7 mJ。
- 周期分解：至首帧 125.8 ms / 8.3 mJ；去马赛克 2 ms @ 24.5 mA；图像准备 3.7 ms @ 13.5 mA；推理 82.7 ms @ 28.8 mA = 8.8 mJ；NMS 2.5 ms；LoRa 发送 980 µs，随后 16.5 mA 下等待 ACK 99.2 ms。
- 无线：LoRa，865.1 MHz，扩频因子 7。等待 ACK 的能耗高于发送本身。
- 续航：1% 活动占比（每天 1,728 次周期）下 3.07 J/天 → 1.85 Wh（6.66 kJ）电池约 90 天。
- 唤醒距离（每个距离 10 次通过测试）：室内窗户背景 13 m 稳定、15 m 处 7/10；走廊 7 m 可靠、8 m 处 9/10、9 m 处 1/10；户外阴天 2–3 m、晴天 3–6 m。光照 200 lux 至 60 klux。

## Why it matters / what's new (EN)

Most of this KB's edge-AI material sits at the LLM end of the scale, where the constraint is memory bandwidth and the unit of measurement is tokens per second. This paper is a reminder that the other end of the domain — battery-powered TinyML nodes — is constrained by something the LLM literature does not model at all: **the cost of getting the data in the first place**.

The architecture's honesty is the finding. Inference is 82.7 ms and 8.8 mJ; getting to the first image is 125.8 ms and 8.3 mJ; and waiting for the LoRa acknowledgement is 99.2 ms at 16.5 mA — comparable to the inference and roughly a hundred times longer than the 980 µs transmission it acknowledges. Acquisition and the radio's *listening* window each cost about as much as running the network. Optimising the model alone, which is where nearly all TinyML effort goes, cannot touch two thirds of the energy budget.

The event-camera gate is what makes the system energy-proportional, and the 222 µW standby is the number that turns a duty-cycle argument into a deployable one: at a 1% activity ratio the node lives ~90 days on a battery smaller than a phone's. But the range characterisation is the part that should travel furthest, because it is the part usually omitted. Indoors the wake-up works to 13 m; outdoors in cloud it works to 2–3 m. Event-based wake-up is an illumination-contrast mechanism, so its detection envelope collapses under exactly the conditions — bright, low-contrast outdoor scenes — that an outdoor deployment brings. Reporting a 60 klux failure mode rather than only a best-case indoor number is what makes the three-month figure worth anything.

For the home and gateway deployments this bin tracks, the transferable lesson is that a wake-up tier is a compute-placement decision, not a power-management detail: it decides how often the expensive tier runs at all, and it is measured in the sensor's detection envelope, not in TOPS.

## Why it matters / what's new (ZH)

本知识库的边缘 AI 素材多数落在大模型这一端，约束是内存带宽，度量单位是 tokens/s。这篇论文提醒我们，该领域的另一端——电池供电的 TinyML 节点——受制于大模型文献根本不建模的一件事：**先把数据拿到手的代价**。

这套架构的诚实之处正是它的发现。推理是 82.7 ms、8.8 mJ；拿到首帧图像是 125.8 ms、8.3 mJ；而等待 LoRa 确认是 99.2 ms @ 16.5 mA——与推理相当，且约为它所确认的那 980 µs 发送的一百倍时长。**采集**与无线的**侦听**窗口，各自的代价都与跑一遍网络相当。而只优化模型——这正是几乎全部 TinyML 精力的投向——根本触碰不到能耗预算的三分之二。

事件相机门控是使系统「能耗正比于事件」的关键，222 µW 的待机则是把占空比论证变成可部署方案的那个数字：在 1% 活动占比下，节点用一块比手机电池更小的电池可存活约 90 天。但真正应当被广泛传播的是距离刻画，因为这恰恰是通常被省略的部分。室内唤醒可达 13 m；户外阴天只有 2–3 m。基于事件的唤醒本质上是**光照对比度**机制，因此其检测包络恰恰在户外部署所带来的明亮、低对比场景下塌缩。报告 60 klux 下的失效模式、而不只给出室内最佳值，才让「三个月」这个数字具有意义。

对本主题所跟踪的家庭与网关部署而言，可迁移的教训是：**唤醒层是一个算力放置决策，而非电源管理细节**——它决定了昂贵的那一层究竟多久才运行一次，而衡量它的是传感器的检测包络，不是 TOPS。
