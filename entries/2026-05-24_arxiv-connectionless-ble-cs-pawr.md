---
id: 2026-05-24_arxiv-connectionless-ble-cs-pawr
date_published: 2026-05-16
date_found: 2026-05-24
type: academic-paper
technology: bluetooth
title_en: "Connectionless BLE Channel Sounding via PAwR: drops the per-pair ACL connection requirement, enables 16,384 devices per PAwR train, cuts 24-hour charge by up to 88% under partner switching"
title_zh: "通过 PAwR 实现的无连接 BLE 信道探测：去除每对设备的 ACL 连接需求，单 PAwR 训练支持 16384 台设备，伙伴切换场景下 24 小时电量消耗最多减少 88%"
url: "https://arxiv.org/abs/2605.17094"
source_quality: full
topics: [BT-LE, Channel-Sounding, PAwR, ranging, BT-6.0]
topic_primary: bt-channel-sounding
topics_secondary: [bt-le, bt-location]
novelty_score: 4
---

## Summary (EN)

Schex, Cremer & Dettmar (arxiv 2605.17094, submitted May 16 2026) tackle the bottleneck that has limited BLE Channel Sounding (CS) — the new ranging primitive introduced in **Bluetooth Core Specification v6.0** — from scaling to dense IoT deployments: **every pair of devices that wants to range needs an LE ACL connection between them**. For two devices that's fine. For an asset-tracking system with thousands of tags wanting to range to multiple anchors, the connection-setup overhead and per-link state cost dominates everything else — and the steady-state power profile is dominated by maintaining all those connections.

The proposal: a **connectionless CS architecture** built on top of the **LE CS Test command** combined with **Periodic Advertising with Responses (PAwR)** — both already in the v6.0 spec but never composed this way before. The architectural pieces:
- A **Central Orchestrator** that issues a PAwR-train schedule.
- A **Gateway** that aggregates results.
- **Synchronized Tag and Anchor devices** that take their PAwR slot, perform CS-Test exchanges, and respond in the assigned PAwR response window.
- A **Peer-to-Peer Assignment Matrix** that gives the deterministic channel sequences each pair uses — collision-free, no negotiation needed at run-time.
- A **compact data plane** that cuts the serialised ranging-data payload by ~69% vs the connection-mode CS framing.

The headline numbers are aggressive. **Steady-state energy savings: 40–48% vs the connected baseline.** **Initiation overhead per partner switch: cut ~98%.** **24-hour total charge: up to 88% reduction under realistic partner-switching workloads.** And the scalability ceiling: **16,384 active devices per PAwR train** — a >100× jump from what's practical with pairwise connection-mode CS in the same airtime budget. Because the design uses only standard-defined primitives (CS Test, PAwR), it works with v6.0-compliant silicon without spec changes — but it does need orchestrator-side software that the spec doesn't standardise.

## Summary (ZH)

Schex、Cremer 与 Dettmar（arxiv 2605.17094，2026 年 5 月 16 日提交）针对 BLE 信道探测（CS）—— **Bluetooth Core 规范 v6.0** 中引入的新测距原语 —— 在密集 IoT 部署中扩展的瓶颈给出方案：**每一对希望测距的设备都需要它们之间的一个 LE ACL 连接**。对两台设备这不是问题。但对于希望对多个锚点测距的数千个标签的资产追踪系统，连接建立开销与每链状态成本主导一切 —— 稳态功耗 profile 也由维持所有这些连接所主导。

提案：**无连接 CS 架构**，在 v6.0 规范中已有但从未这样组合的 **LE CS Test 命令** 与 **带响应的周期性广播（PAwR）** 之上构建。架构组件：
- 一个 **中心编排器**，发出 PAwR-train 调度。
- 一个 **网关**，聚合结果。
- **同步的标签与锚点设备**，占用其 PAwR 时隙、执行 CS-Test 交换、并在指派的 PAwR 响应窗口中应答。
- 一个 **点对点指派矩阵**，给出每对设备使用的确定性信道序列 —— 无冲突，运行时无需协商。
- 一个 **紧凑数据平面**，相对于连接模式 CS 的成帧，将串行化的测距数据有效载荷降低约 69%。

关键指标激进。**稳态能耗节省：相对连接基线 40–48%。** **每次伙伴切换的启动开销：减少约 98%。** **24 小时总电量：现实伙伴切换工作负载下最多减少 88%。** 可扩展性上限：**单 PAwR 训练支持 16384 台活跃设备** —— 在相同空口时间预算下，相对于成对连接模式 CS，提升 100 倍以上。由于设计仅使用规范定义的原语（CS Test、PAwR），它与符合 v6.0 的芯片工作，无需规范修改 —— 但需要编排器侧软件，而该侧软件并未在规范中标准化。

## Key technical points (EN)

- **Problem**: BT v6.0 Channel Sounding requires per-pair LE ACL connection → doesn't scale to dense asset-tracking.
- **Mechanism**: Connectionless CS by composing two existing v6.0 primitives:
  - **LE CS Test command** (Channel Sounding without connection-establishment).
  - **PAwR — Periodic Advertising with Responses** (broadcast-then-respond schedule).
- **Components**: Central Orchestrator + Gateway + Tag/Anchor + Peer-to-Peer Assignment Matrix (deterministic channel sequences) + compact data plane.
- **Energy**:
  - Steady-state: 40–48% saving vs connected baseline.
  - Per-switch initiation overhead: ~98% reduction.
  - 24-hour total charge: up to **88% reduction** under partner switching.
- **Throughput / payload**: serialised ranging-data payload reduced by **~69%**.
- **Scalability**: **16,384 active devices per PAwR train** — a >100× jump.
- **Standards posture**: spec-clean — uses only v6.0 primitives, but orchestrator-layer is unstandardised.

## Key technical points (ZH)

- **问题**：BT v6.0 信道探测要求每对设备建立 LE ACL 连接 → 无法扩展到密集资产追踪。
- **机制**：通过组合两个已有 v6.0 原语实现无连接 CS：
  - **LE CS Test 命令**（无需建立连接的信道探测）。
  - **PAwR —— 带响应的周期性广播**（广播-响应调度）。
- **组件**：中心编排器 + 网关 + 标签/锚点 + 点对点指派矩阵（确定性信道序列）+ 紧凑数据平面。
- **能耗**：
  - 稳态：相对连接基线节省 40–48%。
  - 每次切换启动开销：减少约 98%。
  - 24 小时总电量：伙伴切换下最多减少 **88%**。
- **吞吐/有效载荷**：串行化测距数据有效载荷减少 **约 69%**。
- **可扩展性**：**单 PAwR 训练支持 16384 台活跃设备** —— 提升 100 倍以上。
- **标准姿态**：spec 干净 —— 仅用 v6.0 原语，但编排层未标准化。

## Why it matters / what's new (EN)

This is the most significant BLE Channel-Sounding scalability paper since v6.0 landed. The bottleneck — per-pair connections — was widely understood as a barrier to large-asset-tracking deployments, but no one had built a clean spec-compatible workaround using existing primitives. The **PAwR + CS Test composition** is the structural insight: CS Test was added for diagnostic/manufacturing use, and PAwR was added for cellular-style schedule-broadcast, but together they give a scalable connectionless ranging fabric. The numbers (88% charge reduction, 16,384 devices/train, 98% initiation overhead reduction) make this a real architecture, not a paper-only proposal. It also pairs naturally with the v6.3 spec's **Channel Sounding Inline PCT Transfer** announced May 6 2026 (see `2026-05-24_bluetooth-core-6-3-spec-release.md`) — together they're the two compatible-with-each-other paths the BLE-CS ecosystem is taking in 2026: 6.3 cuts the per-exchange overhead, this paper cuts the per-pair-connection overhead. Vendors targeting indoor-positioning-at-scale (BLE-CS-based asset tracking, hospital bed location, retail) should look at this design.

## Why it matters / what's new (ZH)

这是 v6.0 落地以来最重要的 BLE 信道探测可扩展性论文。瓶颈 —— 成对连接 —— 被普遍认为是大规模资产追踪部署的障碍，但无人构建出基于现有原语的、spec 兼容的干净绕路。**PAwR + CS Test 组合**是结构性洞见：CS Test 是为诊断/制造用途添加的，PAwR 是为蜂窝式调度广播添加的，两者合起来形成可扩展的无连接测距织物。指标（88% 电量减少、16384 台/训练、98% 启动开销减少）使其成为真实架构，而非纸面提案。该工作还自然搭配 2026 年 5 月 6 日宣布的 v6.3 规范的 **Channel Sounding Inline PCT Transfer**（见 `2026-05-24_bluetooth-core-6-3-spec-release.md`）—— 二者是 BLE-CS 生态在 2026 年走的两条相互兼容的路径：6.3 削减每次交换开销，本论文削减每对连接开销。面向室内定位规模化（BLE-CS 资产追踪、医院床位定位、零售）的厂商应关注此设计。
