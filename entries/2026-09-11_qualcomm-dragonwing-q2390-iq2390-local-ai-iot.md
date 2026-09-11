---
id: 2026-09-11_qualcomm-dragonwing-q2390-iq2390-local-ai-iot
date_published: 2026-09-01
date_found: 2026-09-11
type: product
technology: edge-ai
title_en: "Qualcomm Introduces Dragonwing Q-2390 and IQ-2390: Local-AI Processors for Consumer and Industrial IoT"
title_zh: "高通推出 Dragonwing Q-2390 与 IQ-2390：面向消费与工业物联网的本地 AI 处理器"
url: "https://www.qualcomm.com/news/releases/2026/09/-qualcomm-introduces-dragonwing-q-2390-and-iq-2390-processors--e"
source_quality: full
topics: [Dragonwing, NPU, Hexagon, IoT, edge-AI-silicon, AIoT]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Qualcomm's newsroom dated this release September 1, 2026: two new Dragonwing processors — Q-2390 for retail point-of-sale systems, kiosks, access-control devices, smart appliances, smart agriculture, home robots, fitness equipment and enterprise terminals and IQ-2390, the first entry in a new "Dragonwing IQ2 Series," for industrial use (machine vision, building management, energy systems, industrial automation). Both are built around the same quad-core die, differentiated by variant: the CPU side pairs a single 64-bit Arm Cortex-A78 application core with three Arm Cortex-A55 efficiency cores, all up to 1.5 or 1.9 GHz depending on SKU and a 32-bit, 600 MHz SiFive E61 RISC-V microcontroller core reserved for real-time workloads; a Qualcomm Adreno 704 GPU runs up to 1.1 GHz. On-device AI is handled by a Hexagon neural coprocessor, reported at 1.1 TOPS at minimum precision in third-party spec coverage; Qualcomm's own release states no TOPS figure. Variants split further by capability: an "AB" tier adds the NPU, the RISC-V core, and a Hexagon V66 audio DSP that the base "AA" tier lacks; an "M" tier adds 4G LTE and GNSS connectivity over the base "S" tier. The IQ-2390 additionally targets deterministic/time-sensitive networking (TSN) for industrial control-loop use cases.

This is a modest-TOPS product relative to the flagship mobile/PC NPUs this KB's edge-ai-silicon bin otherwise covers (Jetson Orin Nano 2 at 78 TOPS, Qualcomm's own VENTUNO Q at 40 dense TOPS) — it targets the low-cost AIoT tier (cameras, sensors, gateways, building/energy controllers) rather than flagship compute, and the 1.1 TOPS figure comes from third-party spec coverage rather than from Qualcomm's own release, which states no TOPS number.

## Summary (ZH)

高通官方新闻室将该发布日期标注为 2026 年 9 月 1 日：推出两款新的 Dragonwing 处理器——面向零售 POS 系统、自助终端、门禁设备、智能家电、智慧农业、家用机器人、健身器材与企业终端的 Q-2390，以及面向工业场景（机器视觉、楼宇管理、能源系统、工业自动化）、作为全新「Dragonwing IQ2 系列」首款产品的 IQ-2390。两者基于同一颗四核芯片，通过不同版本区分：CPU 侧搭配 1 颗 64 位 Arm Cortex-A78 应用核心与 3 颗 Arm Cortex-A55 能效核心，视 SKU 最高 1.5 或 1.9 GHz，以及一颗专用于实时工作负载的 32 位、600 MHz SiFive E61 RISC-V 微控制器核心；配备最高 1.1 GHz 的高通 Adreno 704 GPU。端侧 AI 由 Hexagon 神经协处理器承担；据第三方规格报道为最低精度下 1.1 TOPS，高通官方新闻稿本身未给出 TOPS 数字。版本进一步按能力划分：「AB」档位相比基础「AA」档位增加了 NPU、RISC-V 核心与 Hexagon V66 音频 DSP；「M」档位相比基础「S」档位增加了 4G LTE 与 GNSS 连接能力。IQ-2390 还额外面向工业控制回路场景支持确定性/时间敏感网络（TSN）。

相较于本知识库 edge-ai-silicon 分类中收录的旗舰级手机/PC NPU（如 Jetson Orin Nano 2 的 78 TOPS、高通自家 VENTUNO Q 的 40 密集 TOPS），这是一款算力较为温和的产品——其目标市场是低成本 AIoT 层级（摄像头、传感器、网关、楼宇/能源控制器），而非旗舰级算力场景；1.1 TOPS 这一数字来自第三方规格报道，而非高通官方新闻稿——后者未给出任何 TOPS 数字。

## Key technical points (EN)

- **Two SKUs, one die**: Q-2390 (consumer/connected devices) and IQ-2390 (industrial — first of a new "IQ2 Series"), differentiated by variant configuration rather than a separate chip design.
- **CPU**: 1x Arm Cortex-A78 + 3x Arm Cortex-A55 efficiency cores, all up to 1.5 or 1.9 GHz depending on SKU, plus a 32-bit 600 MHz SiFive E61 RISC-V core for real-time workloads.
- **GPU**: Qualcomm Adreno 704, up to 1.1 GHz.
- **NPU**: Hexagon neural coprocessor, reported at 1.1 TOPS at minimum precision in third-party spec coverage. Qualcomm's own release gives no TOPS figure at all.
- **Variant tiers**: AA/AB split on NPU + RISC-V + Hexagon V66 audio DSP presence; S/M split on cellular (4G LTE)/GNSS presence.
- **Industrial angle (IQ-2390)**: deterministic/time-sensitive networking (TSN) support for machine vision, building management, energy systems, industrial automation.
- **Positioning**: a low-cost AIoT tier product, well below the flagship-NPU TOPS figures elsewhere in this KB's edge-ai-silicon bin.

## Key technical points (ZH)

- **同一芯片、两款产品**：Q-2390（零售 POS、自助终端、门禁、智能家电、智慧农业、家用机器人、健身器材、企业终端）与 IQ-2390（工业场景，「IQ2 系列」首款），二者通过版本配置而非独立芯片设计区分。
- **CPU**：1 颗 Arm Cortex-A78 + 3 颗 Arm Cortex-A55 能效核心（视 SKU 最高 1.5 或 1.9 GHz），另加一颗用于实时工作负载的 32 位、600 MHz SiFive E61 RISC-V 核心。
- **GPU**：高通 Adreno 704，最高 1.1 GHz。
- **NPU**：Hexagon 神经协处理器，据第三方规格报道为最低精度下 1.1 TOPS。高通官方新闻稿本身未给出任何 TOPS 数字。
- **版本档位**：AA/AB 档位区分是否具备 NPU、RISC-V 核心与 Hexagon V66 音频 DSP；S/M 档位区分是否具备蜂窝（4G LTE）/GNSS 连接。
- **工业侧亮点（IQ-2390）**：支持确定性/时间敏感网络（TSN），面向机器视觉、楼宇管理、能源系统、工业自动化场景的控制回路需求。
- **定位**：低成本 AIoT 层级产品，其 TOPS 数字远低于本知识库 edge-ai-silicon 分类中其他旗舰级 NPU。

## Why it matters / what's new (EN)

This KB's edge-ai-silicon bin so far skews toward flagship compute (Jetson Orin Nano 2, VENTUNO Q/Dragonwing IQ8, FALCON in-memory research silicon); the Dragonwing Q-2390/IQ-2390 pair is a useful counterweight — a real, dated, low-end AIoT product where the NPU figure (1.1 TOPS) is modest, though it reaches this entry through third-party spec coverage rather than Qualcomm's own release. It also broadens this bin's device-class coverage from phones/robotics/PCs down to cameras, sensors and industrial controllers.

## Why it matters / what's new (ZH)

本知识库 edge-ai-silicon 分类此前以旗舰级算力产品为主（Jetson Orin Nano 2、VENTUNO Q/Dragonwing IQ8、FALCON 存内计算研究芯片）；Dragonwing Q-2390/IQ-2390 这对产品提供了有益的补充——一款真实、有明确日期、面向低端 AIoT 市场的产品，其 NPU 数字（1.1 TOPS）较为温和，但该数字来自第三方规格报道，而非高通官方新闻稿。它也将本分类的设备类别覆盖范围从手机/机器人/PC 扩展到摄像头、传感器与工业控制器。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
