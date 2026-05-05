---
id: rtwt-latency
last_updated: 2026-05-05
---

## Current state (EN)

This bin is the home for **Restricted Target Wake Time (R-TWT)** and the broader low-latency / deterministic-delivery research that orbits it. R-TWT — defined in 802.11be and extended in 802.11bn — gives an AP the ability to schedule protected airtime windows for specific traffic classes (XR, real-time video, agent traffic) inside which contention is suppressed. The bin also covers latency-bounded link-layer redesigns that aren't strictly TWT-based, like NSDI'26 "Law" (`2026-05-03_nsdi-law-802-11-low-latency-link-layer`), which targets the queueing / rate-adaptation / retry triad that bottlenecks ultra-low-latency video over Wi-Fi.

KB coverage today is academic-heavy: R-TWT delay modelling for real-time apps (`2026-05-03_arxiv-rtwt-rta-delay-model`), backporting deterministic TWT to Wi-Fi 6 (`2026-05-03_arxiv-twt-deterministic-scheduling-wifi6`), and adaptive contention control for next-gen real-time (`2026-05-01_arxiv-blade-adaptive-contention`). The throughput-oriented side of Co-SR appears here as a secondary topic on `2026-05-01_arxiv-wifi8-latency-co-sr` (Wi-Fi 8 latency via Co-SR — primary `mapc-cosr`).

Watch for: vendor measurements of XR / cloud-gaming latency under R-TWT (the gap between paper-level claims and shipping-product claims is still wide); scheduling-primitive proposals in TGbn that combine R-TWT with MLO link selection; how `wifi-for-ai` claims become measurable when papers carry AI-workload signatures rather than synthetic traffic.

## Current state (ZH)

本桶是 **受限目标唤醒时间（R-TWT）** 及其周边低时延 / 确定性交付研究的归属。R-TWT 在 802.11be 中定义、在 802.11bn 中扩展，使 AP 能为特定业务类别（XR、实时视频、智能体流量）安排受保护的空口窗口，在窗口内抑制争用。本桶亦覆盖非纯 TWT 的有时延界链路层重设计，例如 NSDI'26 "Law"（`2026-05-03_nsdi-law-802-11-low-latency-link-layer`），其目标是 Wi-Fi 上限制超低时延视频的"队列 / 速率自适应 / 重传"三元组瓶颈。

当前 KB 覆盖偏学术：实时应用的 R-TWT 时延建模（`2026-05-03_arxiv-rtwt-rta-delay-model`）、Wi-Fi 6 上的确定性 TWT 回植（`2026-05-03_arxiv-twt-deterministic-scheduling-wifi6`）、面向下一代实时应用的自适应争用控制（`2026-05-01_arxiv-blade-adaptive-contention`）。Co-SR 的吞吐侧以次属形式出现在 `2026-05-01_arxiv-wifi8-latency-co-sr`（Wi-Fi 8 通过 Co-SR 降时延——主属 `mapc-cosr`）。

待关注：R-TWT 下 XR / 云游戏时延的厂商测量（论文级宣称与产品级宣称之间仍有较大落差）；TGbn 中将 R-TWT 与 MLO 链路选择联合的调度原语提案；当论文携带 AI 工作负载特征而非合成流量时，`wifi-for-ai` 的宣称如何变得可测量。
