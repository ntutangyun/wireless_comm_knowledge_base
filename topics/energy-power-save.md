---
id: energy-power-save
last_updated: 2026-05-05
---

## Current state (EN)

This bin covers the **energy-side** of Wi-Fi — TWT / R-TWT energy budgets (the latency-side of R-TWT lives in `rtwt-latency`), AMP-IoT energy harvesting (`amp-iot` covers AMP from the protocol angle), deep-sleep schedules, battery-aware client behaviour, and the device-power story for Wi-Fi 7 / 8 IoT classes.

As of May 2026 there are no entries with `energy-power-save` as their primary topic. The topic appears as *secondary* on `2026-05-03_arxiv-twt-deterministic-scheduling-wifi6` (deterministic scheduling via TWT — primary topic is `rtwt-latency`, but the energy-budget side of TWT is the same mechanism viewed from the other axis). The 20-MHz Wi-Fi 7 IoT certification (`2026-05-01_wifi-alliance-20mhz-iot-cert`, primary `amp-iot`) also has strong energy implications.

Watch for: papers measuring per-class energy under MLO (does multi-link cost more than single-link? when does staggered listen save vs cost?); battery-life studies on AMP-IoT pilots; vendor specs that publish Wi-Fi 8 deep-sleep current draw. The split between this bin and the `rtwt-latency` / `amp-iot` bins should be **side-of-the-tradeoff** — when a paper's contribution is "save N% energy," it's primary here; when it's "deliver under M ms," primary is the latency bin.

## Current state (ZH)

本桶覆盖 Wi-Fi 的**能耗面**——TWT / R-TWT 能量预算（R-TWT 的时延面归 `rtwt-latency`）、AMP-IoT 的能量采集（`amp-iot` 从协议角度覆盖 AMP）、深睡眠调度、电池感知的客户端行为，以及 Wi-Fi 7 / 8 IoT 类设备的功耗叙事。

截至 2026 年 5 月，尚无以 `energy-power-save` 为主属的条目。该主题作为*次属*出现在 `2026-05-03_arxiv-twt-deterministic-scheduling-wifi6`（基于 TWT 的确定性调度——主属为 `rtwt-latency`，但 TWT 的能耗面是同一机制的另一侧观察）。20 MHz Wi-Fi 7 IoT 认证（`2026-05-01_wifi-alliance-20mhz-iot-cert`，主属 `amp-iot`）也有显著的能耗含义。

待关注：测量 MLO 下每类设备能耗的论文（多链路是否比单链路更耗电？错相侦听何时节能、何时损耗？）；AMP-IoT 试点的电池寿命研究；公布 Wi-Fi 8 深睡眠电流的厂商规格。本桶与 `rtwt-latency` / `amp-iot` 的划分准则是**权衡哪一侧**——当论文贡献是"节能 N%"时主属此处；当贡献是"M ms 内交付"时主属时延桶。
