---
id: amp-iot
last_updated: 2026-05-05
---

## Current state (EN)

This bin is the home for narrow-band Wi-Fi targeted at sensor-class devices: **802.11bp Ambient Power IoT** (battery-less devices powered by RF / light / vibration energy harvesting), and **Wi-Fi CERTIFIED 7 at 20 MHz** for low-power IoT clients. Both are responses to the same market gap — Wi-Fi has been chasing throughput while the IoT volume is in devices that just want low-rate, ultra-low-power, mesh-friendly connectivity, a space dominated until now by BLE / Thread / Zigbee.

KB coverage today is small but pointed: `2026-05-01_wifi-alliance-20mhz-iot-cert` documents the January 2026 launch of the 20-MHz IoT cert (Wi-Fi 7 features at 20 MHz — improved reliability, MLO-lite, lower power); `2026-05-03_ieee-11bp-amp-ul-channel-access` is Qualcomm's pre-interim contribution on uplink channel access for non-AP AMP STAs (a TGbp foundational mechanism). The bin also picks up reflected mentions in the Mentor digest (`2026-05-03_ieee-mentor-may-2026-pre-interim-digest`) and the HPE Aruba 730 AP entry (`2026-05-04_hpe-aruba-730-utb-wifi7-ap`, which packs BLE 5.4 alongside Wi-Fi 7 — closer to the AMP-IoT story than to the MLO story per se).

Watch for: TGbp draft progress (the cadence of Mentor contributions tells you which way the standard is moving); vendor reference designs that claim coin-cell or no-battery operation; certification rollouts that explicitly target AMP-IoT — the bin will populate fast once a major silicon vendor ships an AMP-aware Wi-Fi 8 chip.

## Current state (ZH)

本桶覆盖面向传感器类设备的窄带 Wi-Fi：**802.11bp 环境能量供电 IoT**（依靠射频 / 光 / 振动能量采集供电的无电池设备）和**面向低功耗 IoT 客户端的 20 MHz Wi-Fi CERTIFIED 7**。两者回应同一个市场缺口——Wi-Fi 长期追逐吞吐，而 IoT 数量却集中在追求低速率、超低功耗、网状友好的设备上，迄今该空间由 BLE / Thread / Zigbee 主导。

当前 KB 覆盖虽小但有针对性：`2026-05-01_wifi-alliance-20mhz-iot-cert` 记录 2026 年 1 月 20 MHz IoT 认证发布（Wi-Fi 7 特性在 20 MHz 上提供——更高可靠性、轻量 MLO、更低功耗）；`2026-05-03_ieee-11bp-amp-ul-channel-access` 是 Qualcomm 关于非 AP AMP STA 上行信道接入的中期前贡献（TGbp 基础机制之一）。本桶亦在 Mentor 摘要（`2026-05-03_ieee-mentor-may-2026-pre-interim-digest`）和 HPE Aruba 730 AP（`2026-05-04_hpe-aruba-730-utb-wifi7-ap`，同时集成 BLE 5.4，更贴近 AMP-IoT 而非 MLO 故事）中以反向提及形式出现。

待关注：TGbp 草案进展（Mentor 贡献节奏揭示标准走向）；声称纽扣电池或无电池运行的厂商参考设计；明确瞄准 AMP-IoT 的认证落地——一旦主流芯片厂商推出 AMP 感知的 Wi-Fi 8 芯片，本桶将快速增长。
