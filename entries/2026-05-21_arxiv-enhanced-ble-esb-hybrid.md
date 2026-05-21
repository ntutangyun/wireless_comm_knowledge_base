---
id: 2026-05-21_arxiv-enhanced-ble-esb-hybrid
date_published: 2026-05-20
date_found: 2026-05-21
type: academic-paper
title_en: "Enhanced-BLE: A Hybrid BLE-ESB Framework for Energy-Efficient 2.4 GHz IoT Communication"
title_zh: "Enhanced-BLE：面向高能效 2.4 GHz IoT 通信的 BLE-ESB 混合框架"
url: "https://arxiv.org/abs/2605.21270"
source_quality: full
topics: [BLE, ESB, Nordic, IoT, energy-efficiency, protocol-hybrid]
topic_primary: bt-le
topics_secondary: [energy-power-save]
technology: bluetooth
novelty_score: 3
---

## Summary (EN)
Zhou, Shen, Cao, and Huang propose Enhanced-BLE, a hybrid framework that integrates Bluetooth Low Energy (BLE) with Nordic Semiconductor's Enhanced ShockBurst (ESB) protocol on a unified nRF54L15 platform. BLE's connection-oriented architecture introduces tradeoffs among wake-up latency, throughput, and energy efficiency, limiting its suitability for burst-mode and on-demand sensing. ESB, a lightweight connectionless 2.4 GHz protocol, enables fast wake-up and efficient data transmission but lacks BLE-level robustness for sustained bidirectional communication.

Systematic benchmarking on the nRF54L15 reveals: ESB nearly halves packet transmission time and energy vs BLE, doubles forward throughput, and reduces wake-up latency and energy by nearly 20× during intermittent operation. However, ESB reverse transmission suffers packet loss. Enhanced-BLE addresses this through adaptive radio scheduling and coexistence-aware connection management — combining ESB-based high-throughput forward transmission with BLE-based reliable reverse communication. The BLE-to-ESB handover completes in ~18 ms, and BLE restoration from standby takes ~49 ms. The framework achieves ~2× higher forward throughput than BLE while reducing wake-up latency.

## Summary (ZH)
Zhou、Shen、Cao 与 Huang 提出 Enhanced-BLE，一个在 Nordic Semiconductor 统一 nRF54L15 平台上集成低功耗蓝牙（BLE）与 Nordic 增强型 ShockBurst（ESB）协议的混合框架。BLE 面向连接架构在唤醒时延、吞吐和能效之间存在权衡，限制了其适用于突发模式和按需感知场景。ESB 作为轻量无连接 2.4 GHz 协议，支持快速唤醒和高效数据传输，但缺乏 BLE 级别的可靠双向通信能力。

在 nRF54L15 上的系统基准测试表明：ESB 相对 BLE 近乎减半包传输时间和能耗，前向吞吐翻倍，间歇运行时唤醒时延和能耗降低近 20 倍。但 ESB 反向传输存在丢包。Enhanced-BLE 通过自适应射频调度和共存感知的连接管理解决此权衡——结合基于 ESB 的高速前向传输与基于 BLE 的可靠反向通信。BLE 到 ESB 切换约 18 ms 完成，从待机恢复 BLE 运行约 49 ms。该框架实现约 2 倍于纯 BLE 的前向吞吐，同时降低唤醒时延。

## Key technical points (EN)
- **Hybrid BLE-ESB protocol**: ESB for high-throughput forward path, BLE for reliable reverse path — coexisting on same Nordic nRF54L15 hardware
- **Benchmarking on nRF54L15**: ESB halves packet TX time/energy, doubles forward throughput, 20× lower wake-up latency vs BLE
- **Adaptive radio scheduling**: Coexistence-aware scheduling manages BLE and ESB timesharing on the same 2.4 GHz radio
- **Fast handover**: BLE→ESB in ~18 ms, standby→BLE in ~49 ms
- **Protocol selection logic**: Framework dynamically chooses BLE or ESB based on traffic pattern (burst vs sustained, forward vs bidirectional)

## Key technical points (ZH)
- **BLE-ESB 混合协议**：ESB 用于高速前向路径，BLE 用于可靠反向路径——共存于同一 Nordic nRF54L15 硬件
- **nRF54L15 基准测试**：ESB 包传输时间/能耗减半，前向吞吐翻倍，唤醒时延较 BLE 降低 20 倍
- **自适应射频调度**：共存感知调度管理同一 2.4 GHz 射频上 BLE 与 ESB 的分时共享
- **快速切换**：BLE→ESB 约 18 ms，待机→BLE 约 49 ms
- **协议选择逻辑**：框架根据流量模式（突发 vs 持续、前向 vs 双向）动态选择 BLE 或 ESB

## Why it matters / what's new (EN)
First systematic comparison of BLE vs ESB on Nordic's latest nRF54L15 platform, and first hybrid framework that combines both protocols on a single radio. Prior BLE-IoT work focused on BLE parameter tuning (connection interval, PHY selection); this paper goes further by integrating an entirely different link-layer protocol (ESB) alongside BLE. The practical significance: any Nordic-based IoT device (a huge fraction of the BLE market) can adopt this hybrid approach with the same hardware, no additional radio needed. The ~18 ms handover time makes the hybrid practical for real-time sensing applications.
