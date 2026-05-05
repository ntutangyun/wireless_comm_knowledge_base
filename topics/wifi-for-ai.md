---
id: wifi-for-ai
last_updated: 2026-05-05
---

## Current state (EN)

This bin covers **Wi-Fi as the access layer for AI / autonomous-system payloads** — XR streams, on-device LLM coordination, agentic-traffic delivery, and computation offloading from edge devices to LAN-side compute *when the offload hop is over Wi-Fi* (cellular offload — 5G MEC, NTN, NR-U computation offloading via the cellular access leg — is explicitly out of scope and gets filtered at scout-ingest time). The defining question is: **what does the radio need to deliver so that AI workloads stay within their latency / loss / throughput budget?**

As of May 2026 there are no entries with `wifi-for-ai` as their primary topic. The topic appears as *secondary* on three vendor announcements that explicitly position their Wi-Fi 8 silicon for AI traffic carriage — `2026-05-01_qualcomm-wifi8-mwc2026` (FastConnect 8800 + Dragonwing for "AI-native" experiences), `2026-05-01_gemtek-quectel-wifi8-mwc2026` (Gemtek's AI-driven CPE vision), and `2026-05-04_intel-wwc-wifi8-vision` (four-pillar framework where AI-enablement is pillar #1).

Watch for: arxiv work on XR / VR streaming over MLO; on-device LLM coordination protocols; deterministic-delivery measurements with AI workload signatures; computation-offload-over-Wi-Fi papers that explicitly model the radio as part of the offload-budget calculation. **Reject** anything where the offload hop is cellular; those go to the cellular literature, not here.

## Current state (ZH)

本桶覆盖 **Wi-Fi 作为 AI / 自治系统负载的接入层**——XR 流、设备端 LLM 协调、智能体流量投递，以及边缘设备到 LAN 侧算力的计算卸载，*仅当卸载跳板为 Wi-Fi 时*（蜂窝卸载——5G MEC、NTN、通过蜂窝接入的 NR-U 计算卸载——明确不在范围，会在巡检采集环节过滤）。核心问题：**为了让 AI 工作负载保持在其时延 / 丢包 / 吞吐预算内，射频侧需要交付什么？**

截至 2026 年 5 月，尚无以 `wifi-for-ai` 为主属的条目。该主题作为*次属*出现在三条明确将 Wi-Fi 8 芯片定位为 AI 流量承载的厂商公告中——`2026-05-01_qualcomm-wifi8-mwc2026`（面向"AI-Native"体验的 FastConnect 8800 + Dragonwing）、`2026-05-01_gemtek-quectel-wifi8-mwc2026`（Gemtek 的 AI-driven CPE 路线）和 `2026-05-04_intel-wwc-wifi8-vision`（四支柱框架中 AI-enablement 居首）。

待关注：MLO 上的 XR / VR 流传输研究；设备端 LLM 协调协议；带有 AI 工作负载特征的确定性交付测量；将 Wi-Fi 显式纳入卸载预算的计算卸载论文。**拒绝**任何卸载跳板为蜂窝的论文；它们属于蜂窝文献，不在此范围。
