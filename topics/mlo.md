---
id: mlo
last_updated: 2026-05-05
---

## Current state (EN)

**Multi-Link Operation (MLO)** is the headline 802.11be / Wi-Fi 7 feature: a single STA-AP association spans multiple radio links across 2.4 / 5 / 6 GHz, with the link-set negotiated at association time and traffic dynamically allocated across links. The KB tracks MLO from three angles — protocol mechanics (STR / NSTR / SLO modes, link-add / remove flows), traffic-allocation research (cross-layer DRL, MAB-driven channel selection), and deployment data. The topic explicitly covers 802.11bn's MLO extensions; mechanism work that's specific to coordinated multi-AP belongs in `mapc-cosr` instead.

In 2026 MLO crossed from "advertised feature" to "deployed feature." `2026-05-04_cisco-wifi7-breakout-year-2026` argues 2026 is the inflection year, citing 500 M certified Wi-Fi 7 devices shipped (`2026-05-01_wifi7-deployment-milestone-2026`) and Q1 2026 vendor revenue spikes (`2026-05-04_realtek-wifi7-revenue-surge-q1-2026`, Extreme's 37 % Q3 unit-share `2026-05-04_extreme-networks-wifi7-momentum-q3`). Enterprise rollouts are concrete and large — Cisco's 6 000-AP Georgetown deployment (`2026-05-04_cisco-georgetown-wifi7-deployment`), HPE Aruba's 730 Series UTB AP (`2026-05-04_hpe-aruba-730-utb-wifi7-ap`), RUCKUS / Nokia OLAN integration (`2026-05-04_ruckus-nokia-wifi7-fiber-olan`). Academic work has shifted from "does MLO help" to "how to schedule across links" — `2026-05-01_arxiv-mlo-drl-lstm-cross-layer` (DRL + LSTM cross-layer optimisation), `2026-05-02_arxiv-mab-llm-mlo-channel-allocation` (MAB + LLM channel allocation).

Watch for: 802.11bn extensions of MLO (per-link MAC privacy, cf. today's candidate `mlo-coordinated-mac-rerandomization-ie`); NSTR vs STR deployment patterns from real telemetry; MLO-roam mechanisms (the bridge into `roaming-mobility`); per-link energy-tradeoff measurements (bridge into `energy-power-save`).

## Current state (ZH)

**多链路操作（MLO）**是 802.11be / Wi-Fi 7 的旗舰特性：单一 STA-AP 关联可同时跨 2.4 / 5 / 6 GHz 上的多条射频链路，链路集合在关联时协商，流量按链路动态分配。本 KB 从三个角度追踪 MLO——协议机制（STR / NSTR / SLO 模式、链路增删流程）、流量分配研究（跨层 DRL、MAB 驱动的信道选择）、以及部署数据。主题明确覆盖 802.11bn 对 MLO 的扩展；与"协调多 AP"专属的机制工作归 `mapc-cosr`。

2026 年 MLO 从"宣传特性"跨入"部署特性"。`2026-05-04_cisco-wifi7-breakout-year-2026` 主张 2026 是拐点之年，引用 5 亿台 Wi-Fi 7 认证设备出货量（`2026-05-01_wifi7-deployment-milestone-2026`）以及 2026 年 Q1 的厂商营收激增（`2026-05-04_realtek-wifi7-revenue-surge-q1-2026`、Extreme 在 Q3 的 37% 出货占比 `2026-05-04_extreme-networks-wifi7-momentum-q3`）。企业部署既具体又规模化——Cisco 在 Georgetown 的 6,000 AP 部署（`2026-05-04_cisco-georgetown-wifi7-deployment`）、HPE Aruba 730 系列 UTB AP（`2026-05-04_hpe-aruba-730-utb-wifi7-ap`）、RUCKUS / Nokia OLAN 整合（`2026-05-04_ruckus-nokia-wifi7-fiber-olan`）。学界工作已从"MLO 有效吗"转向"跨链路如何调度"——`2026-05-01_arxiv-mlo-drl-lstm-cross-layer`（DRL + LSTM 跨层优化）、`2026-05-02_arxiv-mab-llm-mlo-channel-allocation`（MAB + LLM 信道分配）。

待关注：802.11bn 对 MLO 的扩展（每链路 MAC 隐私，参考今日候选 `mlo-coordinated-mac-rerandomization-ie`）；来自真实遥测的 NSTR vs STR 部署模式；MLO-roam 机制（与 `roaming-mobility` 的桥梁）；每链路能耗权衡的测量（与 `energy-power-save` 的桥梁）。
