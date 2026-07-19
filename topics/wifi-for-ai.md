---
id: wifi-for-ai
last_updated: 2026-07-20
---

## Current state (EN)

This bin covers **Wi-Fi as the access layer for AI / autonomous-system payloads** — XR streams, on-device LLM coordination, agentic-traffic delivery, and computation offloading from edge devices to LAN-side compute *when the offload hop is over Wi-Fi* (cellular offload — 5G MEC, NTN, NR-U computation offloading via the cellular access leg — is explicitly out of scope and gets filtered at scout-ingest time). The defining question is: **what does the radio need to deliver so that AI workloads stay within their latency / loss / throughput budget?**

The bin's centre of gravity has shifted from vendor positioning to **standards-track reality**. The IEEE 802.11 AI Offload effort — SG approved March 2026, PAR/CSD skeletons at the Antwerp May interim — produced a **draft PAR carrying the P802.11bu designation** at the July 2026 Montreal plenary (`2026-07-19_ieee-p802-11bu-draft-par-ai-offload`): the first numbered 802.11 amendment project whose scope is Wi-Fi carrying AI compute offload (AP as edge AI compute node, sub-20 ms targets). Primary entries also include `2026-05-12_arxiv-ncsim-edge-wifi-interference` (edge-inference traffic under Wi-Fi interference), `2026-05-24_qualcomm-wwc-ai-traffic-architecture-rethink` (AI-traffic-first architecture argument), and the pre-plenary Mentor digest `2026-07-09_ieee-mentor-misc-groups-preplenary-digest`. The early vendor-positioning trio (`2026-05-01_qualcomm-wifi8-mwc2026`, `2026-05-01_gemtek-quectel-wifi8-mwc2026`, `2026-05-04_intel-wwc-wifi8-vision`) remains the secondary-topic backdrop.

Watch for: the P802.11bu PAR's public scope text and WG approval vote (September 2026 interim) — which offload functions (compute negotiation, model transfer, result delivery) get MAC-layer treatment; TGbu formation (plausibly late 2026); arxiv work on XR / VR streaming over MLO; on-device LLM coordination protocols; deterministic-delivery measurements with AI workload signatures; computation-offload-over-Wi-Fi papers that explicitly model the radio as part of the offload-budget calculation. **Reject** anything where the offload hop is cellular; those go to the cellular literature, not here.

## Current state (ZH)

本桶覆盖 **Wi-Fi 作为 AI / 自治系统负载的接入层**——XR 流、设备端 LLM 协调、智能体流量投递，以及边缘设备到 LAN 侧算力的计算卸载，*仅当卸载跳板为 Wi-Fi 时*（蜂窝卸载——5G MEC、NTN、通过蜂窝接入的 NR-U 计算卸载——明确不在范围，会在巡检采集环节过滤）。核心问题：**为了让 AI 工作负载保持在其时延 / 丢包 / 吞吐预算内，射频侧需要交付什么？**

本桶的重心已从厂商叙事转向**标准化现实**。IEEE 802.11 AI Offload 工作线——2026 年 3 月 SG 获批、5 月安特卫普期中会议的 PAR/CSD 骨架——在 2026 年 7 月蒙特利尔全会产出了**带 P802.11bu 编号的 PAR 草案**（`2026-07-19_ieee-p802-11bu-draft-par-ai-offload`）：这是首个以"Wi-Fi 承载 AI 计算卸载"为范围的带编号 802.11 修订案项目（AP 作为边缘 AI 计算节点，目标亚 20 ms）。主属条目还包括 `2026-05-12_arxiv-ncsim-edge-wifi-interference`（Wi-Fi 干扰下的边缘推理流量）、`2026-05-24_qualcomm-wwc-ai-traffic-architecture-rethink`（AI 流量优先的架构论证）以及会前 Mentor 摘要 `2026-07-09_ieee-mentor-misc-groups-preplenary-digest`。早期厂商定位三部曲（`2026-05-01_qualcomm-wifi8-mwc2026`、`2026-05-01_gemtek-quectel-wifi8-mwc2026`、`2026-05-04_intel-wwc-wifi8-vision`）仍是次属背景。

待关注：P802.11bu PAR 的公开范围文本与工作组批准投票（2026 年 9 月期中会议）——哪些卸载功能（算力协商、模型传输、结果回传）会进入 MAC 层；TGbu 成立（预计 2026 年底）；MLO 上的 XR / VR 流传输研究；设备端 LLM 协调协议；带有 AI 工作负载特征的确定性交付测量；将 Wi-Fi 显式纳入卸载预算的计算卸载论文。**拒绝**任何卸载跳板为蜂窝的论文；它们属于蜂窝文献，不在此范围。
