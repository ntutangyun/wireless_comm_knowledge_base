---
id: 2026-08-31_arduino-ventuno-q-dragonwing-iq8-edge-agent-board
date_published: 2026-08-25
date_found: 2026-08-31
type: product
technology: edge-ai
title_en: "Arduino VENTUNO Q puts a 40-TOPS Qualcomm Dragonwing IQ-8275 and 16 GB of LPDDR5 on a maker board for on-device LLMs and VLMs"
title_zh: "Arduino VENTUNO Q 把 40 TOPS 的高通 Dragonwing IQ-8275 与 16 GB LPDDR5 装上开发板，用于端侧大模型与视觉语言模型"
url: "https://www.qualcomm.com/news/releases/2026/08/arduino-ventuno-q-is-here--bringing-agentic-ai-to-the-physical-w"
source_quality: full
topics: [Dragonwing, IQ-8275, Arduino, NPU, TOPS, GGUF, Zephyr, STM32H5, edge-agent, robotics]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Qualcomm and Arduino announced the **VENTUNO Q** on **25 August 2026**: a single-board computer built around the **Qualcomm Dragonwing IQ-8275**, sold through Arduino's own channel and mainstream distributors (DigiKey, Farnell, Mouser, RS, Robu.in) and open for pre-order at announcement. The pitch is running generative models locally on a board that also drives motors — Qualcomm frames it as "bringing agentic AI to the physical world".

The stated silicon budget is **up to 40 dense TOPS** of AI performance, **16 GB of LPDDR5** and **64 GB of eMMC** with an expandable M.2 NVMe slot. The memory figure is the one that matters for this domain: 16 GB of LPDDR5 on a maker-tier board is a different class of model budget from the 4–8 GB typical of embedded modules, and it is what makes the board's claim to run local LLMs and vision-language models plausible rather than aspirational.

The board is explicitly **dual-brain**. Alongside the Dragonwing application processor sits a dedicated **STM32H5 real-time microcontroller** handling motor control, CAN-FD, PWM and GPIO. That partition — a Linux-class AI processor for perception and reasoning, a hard-real-time MCU for actuation — is the standard architecture for a robot or an industrial controller, and putting it on an Arduino-branded board is a distribution event more than an architectural one.

Three model paths are offered: a **curated library of NPU-optimised models** shipped with the board covering LLMs, VLMs, speech recognition and object/gesture detection; arbitrary models pulled from **Hugging Face in GGUF format**; and custom models trained in **Edge Impulse Studio**. Software is **Ubuntu** pre-loaded and distributed by Canonical, plus Arduino App Lab, an Arduino Core on **Zephyr RTOS** for the MCU side, Qualcomm's **GenieX** Gen AI developer tool, and ordinary VS Code and Linux tooling.

Qualcomm's release discloses **no price, no availability date beyond "pre-order now", no wireless connectivity specification, and no benchmark of any kind** — no tokens/s, no latency, no power figure. The 40 TOPS is a vendor number with no third-party measurement behind it.

## Summary (ZH)

高通与 Arduino 于 **2026 年 8 月 25 日**发布 **VENTUNO Q**：一块基于**高通 Dragonwing IQ-8275** 的单板计算机，通过 Arduino 自有渠道与主流分销商（DigiKey、Farnell、Mouser、RS、Robu.in）销售，发布即开放预订。其卖点是在一块同时还要驱动电机的板子上本地运行生成式模型——高通的说法是「把智能体 AI 带入物理世界」。

公布的硅片预算为**最高 40 dense TOPS** 的 AI 算力、**16 GB LPDDR5** 与 **64 GB eMMC**，并带可扩展的 M.2 NVMe 插槽。对本领域而言真正关键的是那个内存数字：创客级板卡上的 16 GB LPDDR5，与嵌入式模组常见的 4–8 GB 完全不是一个模型预算量级，也正是它让「本地跑大模型与视觉语言模型」这一说法从愿景变得可信。

该板明确采用**双脑**结构。在 Dragonwing 应用处理器旁另有一颗专用的 **STM32H5 实时微控制器**，负责电机控制、CAN-FD、PWM 与 GPIO。这种切分——Linux 级 AI 处理器负责感知与推理，硬实时 MCU 负责执行——是机器人或工业控制器的标准架构；把它放到一块 Arduino 品牌的板子上，与其说是架构事件，不如说是分发事件。

提供三条模型路径：随板附带的**NPU 优化模型精选库**，涵盖大语言模型、视觉语言模型、语音识别与物体/手势检测；从 **Hugging Face 拉取的 GGUF 格式**任意模型；以及在 **Edge Impulse Studio** 中训练的自定义模型。软件方面预装由 Canonical 分发的 **Ubuntu**，另有 Arduino App Lab、MCU 侧基于 **Zephyr RTOS** 的 Arduino Core、高通的 **GenieX** 生成式 AI 开发工具，以及常规的 VS Code 与 Linux 工具链。

高通的发布稿**未披露价格、未给出「现已预订」之外的上市日期、未说明无线连接规格，也没有任何形式的基准测试**——没有 tokens/s、没有时延、没有功耗数字。40 TOPS 是一个没有第三方实测支撑的厂商数字。

## Key technical points (EN)

- **SoC**: Qualcomm Dragonwing **IQ-8275**, vendor-quoted at **up to 40 dense TOPS**. "Dense" is the qualifier to note — sparse-TOPS figures are typically 2× the dense number, so this is the conservative of the two conventions.
- **Memory and storage**: **16 GB LPDDR5**, **64 GB eMMC**, expandable via **M.2 NVMe**. The DRAM figure is the practical ceiling on locally-resident model size.
- **Dual-brain partition**: Dragonwing applications processor for AI, dedicated **STM32H5** MCU for motor, CAN-FD, PWM and GPIO real-time control.
- **Model supply**: curated NPU-optimised library (LLMs, VLMs, ASR, object and gesture detection) + arbitrary **GGUF** models from Hugging Face + custom models via Edge Impulse Studio.
- **Software stack**: Ubuntu pre-loaded (distributed by Canonical), Arduino App Lab, Arduino Core on **Zephyr RTOS**, Qualcomm **GenieX** Gen AI developer tool, VS Code and native Linux tooling.
- **Availability**: pre-order at announcement via Arduino Store, DigiKey, Farnell, Robu.in, Mouser and RS.
- **Not disclosed**: price, ship date, wireless connectivity (no Wi-Fi, Bluetooth or cellular specification appears in the release), and **any performance measurement at all**.
- **Distinct from the Wi-Fi-side Dragonwing parts** already in this knowledge base — the Dragonwing NPro A8 Elite AP/gateway platform (`2026-05-01_qualcomm-wifi8-mwc2026`) is a different product line targeting access points, not this IoT/robotics tier.

## Key technical points (ZH)

- **SoC**：高通 Dragonwing **IQ-8275**，厂商标称**最高 40 dense TOPS**。「dense（稠密）」这个限定词值得注意——稀疏 TOPS 数字通常是稠密值的 2 倍，因此这里用的是两种口径中较保守的一种。
- **内存与存储**：**16 GB LPDDR5**、**64 GB eMMC**，可通过 **M.2 NVMe** 扩展。DRAM 数字是本地常驻模型规模的实际上限。
- **双脑切分**：Dragonwing 应用处理器负责 AI，专用 **STM32H5** MCU 负责电机、CAN-FD、PWM 与 GPIO 的实时控制。
- **模型供给**：随板的 NPU 优化模型库（大模型、视觉语言模型、语音识别、物体与手势检测）+ 来自 Hugging Face 的任意 **GGUF** 模型 + 经 Edge Impulse Studio 训练的自定义模型。
- **软件栈**：预装 Ubuntu（由 Canonical 分发）、Arduino App Lab、基于 **Zephyr RTOS** 的 Arduino Core、高通 **GenieX** 生成式 AI 开发工具，以及 VS Code 与原生 Linux 工具。
- **上市**：发布即通过 Arduino Store、DigiKey、Farnell、Robu.in、Mouser 与 RS 开放预订。
- **未披露**：价格、发货日期、无线连接规格（发布稿中未出现 Wi-Fi、蓝牙或蜂窝的任何说明），以及**任何性能测量**。
- **与本知识库中 Wi-Fi 侧的 Dragonwing 产品不是一回事**——面向接入点/网关的 Dragonwing NPro A8 Elite（`2026-05-01_qualcomm-wifi8-mwc2026`）是另一条产品线，不属于这一 IoT/机器人档位。

## Why it matters / what's new (EN)

The number to watch on this board is not the 40 TOPS, it is the **16 GB of LPDDR5**. Every entry in this knowledge base that touches on-device model size keeps arriving at the same conclusion — that memory, not arithmetic, is the binding constraint at the edge. Apple's response to that constraint was to page a 20B model out of NAND; the response here is simply to fit more DRAM onto a maker-tier board than that tier normally carries. A 16 GB device can hold a mid-size quantised model resident with room left over for a vision encoder and the operating system, which is what separates "runs a demo" from "runs a service", and it is why the GGUF-from-Hugging-Face path is a credible offer rather than a checkbox.

The second thing worth recording is the **shape of the board**, because it says something about what edge AI silicon is now expected to be attached to. A Linux-class AI processor bolted to a hard-real-time MCU is not a general-purpose computer; it is a controller for something that moves. Qualcomm's Dragonwing IQ line, the same week's Japan robotics investment, and NVIDIA's Jetson family all point at the same target — perception and language models sitting directly on the actuation loop, where offloading to a server introduces latency the control loop cannot absorb. That is a distinct motivation for on-device inference from the privacy and cost arguments that drive phone and PC deployment, and it produces different requirements: bounded worst-case latency matters more than peak throughput.

The distribution channel is the third point. Arduino is the volume on-ramp for embedded developers, and Qualcomm reaching that audience with a 40-TOPS part is a signal about where NPU-equipped silicon is heading — not just flagship phones and Copilot+ PCs, but the long tail of industrial and hobbyist controllers. Whether that translates into deployments is a separate question this entry cannot answer.

What the announcement does not do is give anyone a way to check it. There is no price, no ship date, no wireless specification and no benchmark — not a single tokens-per-second, latency or power figure for any of the LLMs and VLMs the board is sold on running. The 40 dense TOPS is a vendor claim, and this knowledge base's standing position is that such figures are marketing until an independent benchmark or a third party backs them. The useful comparison already exists on the software side: the LiteRT NPU stack (`2026-08-31_litert-cross-vendor-npu-backend-matrix`) lists Qualcomm AI Engine Direct as a production backend and publishes actual tokens-per-second for a competing SoC, which is exactly the kind of number this launch is missing.

## Why it matters / what's new (ZH)

这块板子上值得盯住的数字不是 40 TOPS，而是 **16 GB LPDDR5**。本知识库中凡是涉及端侧模型规模的条目，最后都收敛到同一个结论：在边缘侧真正卡住脖子的是内存而非算力。苹果对这条约束的回应是把一个 200 亿参数模型从 NAND 分页调入；这里的回应则直接得多——在创客级板卡上装比该档位通常配备更多的 DRAM。16 GB 的设备可以常驻一个中等规模的量化模型，还能留出空间给视觉编码器和操作系统，而这正是「跑得起一个演示」与「跑得起一项服务」之间的分界，也是「从 Hugging Face 拉 GGUF」这条路径称得上可信而非凑数的原因。

第二件值得记录的是**板子的形态**，因为它透露了如今边缘 AI 芯片被期待连接到什么上面。一颗 Linux 级 AI 处理器旁挂一颗硬实时 MCU，这不是通用计算机，而是某个会动的东西的控制器。高通的 Dragonwing IQ 产品线、同一周的日本机器人投资计划，以及英伟达的 Jetson 系列，指向的是同一个目标——把感知与语言模型直接放到执行回路上，而在那里，卸载到服务器所引入的时延是控制回路吸收不了的。这与驱动手机和 PC 端侧部署的隐私与成本论据是不同的动机，也带来不同的需求：有界的最坏情况时延比峰值吞吐更重要。

第三点是分发渠道。Arduino 是嵌入式开发者的走量入口，高通带着一颗 40 TOPS 的芯片触达这批人群，是关于「配备 NPU 的硅片正在往哪里去」的一个信号——不只是旗舰手机和 Copilot+ PC，还有工业与爱好者控制器的长尾。这能否转化为真实部署，则是本条目无法回答的另一个问题。

这次发布没有做到的，是给外界任何核查手段。没有价格、没有发货日期、没有无线规格、没有基准测试——对于这块板子赖以立足的那些大模型与视觉语言模型，连一个 tokens/s、时延或功耗数字都没有。40 dense TOPS 是厂商主张，而本知识库的一贯立场是：在独立基准或第三方背书之前，此类数字属于营销。软件侧恰好已有可资对照的例子：LiteRT 的 NPU 栈（`2026-08-31_litert-cross-vendor-npu-backend-matrix`）把 Qualcomm AI Engine Direct 列为生产可用后端，并对一颗竞品 SoC 公布了真实的 tokens/s——那正是这次发布所缺的那类数字。

## Images

*(No redistributable images for this entry — the product renders are hosted on qualcomm.com and arduino.cc.)*
