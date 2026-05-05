---
id: 2026-05-04_hpe-aruba-730-utb-wifi7-ap
date_published: 2026-04-21
date_found: 2026-05-04
type: product
title_en: "HPE Aruba 730 Series Wi-Fi 7 Campus AP — Ultra Tri-Band (UTB) filtering, BLE 5.4 + 802.15.4, sub-meter location"
title_zh: "HPE Aruba 730 系列 Wi-Fi 7 园区 AP —— 超三频（UTB）滤波、BLE 5.4 + 802.15.4、亚米级定位"
url: "https://www.hpe.com/us/en/collaterals/collateral.a50009206enw.html"
source_quality: snippet_only
topics: [802.11be, MLO, products, IoT]
topic_primary: mlo
topics_secondary: [amp-iot]
novelty_score: 3
---

## Summary (EN)

HPE Aruba's **730 Series** is a recently-launched campus-class Wi-Fi 7 (802.11be) access-point family that adds two distinguishing pieces beyond the typical 11be feature set: **Ultra Tri-Band (UTB) filtering** and an integrated multi-radio IoT stack. The product sits in the enterprise tier alongside Cisco Catalyst Wi-Fi 7 and Juniper Mist's Wi-Fi 7 line, and is reported to be the first AP family to leverage the new Wi-Fi Location standard for **sub-meter precision** (i.e. 802.11az / bk indoor positioning, see `arxiv-ftm-survey-2025`).

UTB filtering is the load-bearing engineering claim. The 5 GHz and 6 GHz bands are now physically adjacent and 802.11be allows a STA to use them simultaneously through MLO; without sharp filters between the two bands, an AP transmitting near the upper 5 GHz edge bleeds into the lower 6 GHz, creating self-interference that throttles the AP's own MLO sessions. UTB adds dedicated filtering hardware that reportedly lifts 6 GHz capacity by **up to 30%** by allowing both bands to operate at full power simultaneously without the conservative inter-band guard that previous Wi-Fi 7 APs needed. The 730 also doubles IoT density vs. the prior generation, integrating two BLE 5.4 + 802.15.4 (Zigbee) radios plus two USB extension ports per AP. Aggregate radio capacity is **up to 9.3 Gbps** across 2.4 / 5 / 6 GHz, fed by dual 5 Gbps Ethernet uplinks.

## Summary (ZH)

HPE Aruba **730 系列**是新近上市的园区级 Wi-Fi 7（802.11be）AP 产品系列，在常见 11be 特性之外，额外突出两点：**超三频（UTB）滤波** 与集成多射频 IoT 栈。该产品定位与 Cisco Catalyst Wi-Fi 7、Juniper Mist Wi-Fi 7 线同属企业层；据称是首个利用 Wi-Fi Location 新标准实现**亚米级定位**的 AP 系列（即 802.11az / bk 室内定位，参 `arxiv-ftm-survey-2025`）。

UTB 滤波是核心工程主张。5 GHz 与 6 GHz 带在频谱上相邻，且 802.11be 允许 STA 通过 MLO 同时使用两频段；若两带之间没有锐利滤波，AP 在 5 GHz 上沿发射会泄漏到 6 GHz 下沿，形成自干扰，限制 AP 自身 MLO 会话。UTB 增设了专用滤波硬件，据称**让 6 GHz 容量提升最多 30%**：两频段可同时全功率工作，不必像前一代 Wi-Fi 7 AP 那样保留保守的频间防护。730 同时把 IoT 密度比上一代翻倍 —— 集成两个 BLE 5.4 + 802.15.4 (Zigbee) 射频以及两个 USB 扩展口；总射频容量为 **最高 9.3 Gbps**（2.4 / 5 / 6 GHz 总和），上行为双 5 Gbps Ethernet。

## Key technical points (EN)

- UTB filter between 5 GHz and 6 GHz → ~30% 6 GHz capacity uplift in MLO sessions.
- 9.3 Gbps aggregate, 2.4 + 5 + 6 GHz, dual 5 GbE uplink.
- Integrated IoT: 2× BLE 5.4 + 2× 802.15.4 (Zigbee) radios, 2× USB extension.
- Sub-meter Wi-Fi Location (802.11az/bk) — claimed first in class.
- Targeted at enterprise refresh ahead of Wi-Fi 8.

## Key technical points (ZH)

- 5 GHz ↔ 6 GHz 之间的 UTB 滤波 → MLO 会话下 6 GHz 容量提升约 30%。
- 总速率 9.3 Gbps，覆盖 2.4 / 5 / 6 GHz，双 5 GbE 上行。
- 集成 IoT 栈：2× BLE 5.4 + 2× 802.15.4 (Zigbee) 射频，2× USB 扩展。
- 亚米级 Wi-Fi Location（802.11az / bk）—— 厂商主张同档首发。
- 目标场景：Wi-Fi 8 到来前的企业刷新。

## Why it matters / what's new (EN)

The interesting part isn't the Wi-Fi 7 baseline (every enterprise vendor has shipped that); it's the explicit positioning of **UTB inter-band filtering as a hardware-level differentiator for MLO**. MLO without UTB filters limits how aggressively an AP can use 5 GHz upper and 6 GHz lower simultaneously — a practical capacity ceiling that's been quietly holding back enterprise MLO claims. If UTB is durable and not just a marketing label, it sets a new bar for the upcoming Wi-Fi 8 (802.11bn) APs that will need to do MLO at higher PA backoffs. Connects to: `hpe-aruba-mist-unified-2026` (the broader unified-platform story this AP slots into), `arxiv-mlo-drl-lstm-cross-layer` (MLO scheduler research), `ieee-tgbn-d2-schedule` (the standards line that defines what MLO has to deliver in Wi-Fi 8).

## Why it matters / what's new (ZH)

亮点不在 Wi-Fi 7 本身（企业厂商都已出货），而在于把 **UTB 频间滤波明确定位为 MLO 的硬件级差异化**。没有 UTB 滤波的 MLO 会限制 AP 同时激进使用 5 GHz 上沿与 6 GHz 下沿 —— 这是一个长期被默默压住的企业 MLO 容量天花板。若 UTB 是真实工程而非营销标签，它就为下一代 Wi-Fi 8（802.11bn）AP 确立了新基线 —— 后者在更高 PA 回退下做 MLO 时同样会受频间隔影响。关联条目：`hpe-aruba-mist-unified-2026`（本 AP 所属的统一平台大故事）、`arxiv-mlo-drl-lstm-cross-layer`（MLO 调度研究）、`ieee-tgbn-d2-schedule`（定义 Wi-Fi 8 MLO 应交付什么的标准线）。
