---
id: 2026-05-24_bluetooth-core-6-3-spec-release
date_published: 2026-05-06
date_found: 2026-05-24
type: bluetooth-spec
technology: bluetooth
title_en: "Bluetooth Core Specification 6.3 released: Channel Sounding Inline PCT Transfer shifts phase-aligned tones into hardware (slashing PCT overhead), HCI command/event mask widened, Classic-LE RF limits harmonised for dual-mode silicon"
title_zh: "Bluetooth Core 规范 6.3 发布：信道探测 Inline PCT 传输将相位对齐音直接转入硬件（大幅削减 PCT 开销）、HCI 命令/事件掩码扩展、双模硅片的 Classic-LE 射频限制对齐"
url: "https://audioxpress.com/news/bluetooth-sig-releases-bluetooth-core-6-3"
source_quality: full
topics: [BT-LE, BT-Classic, Channel-Sounding, HCI, BT-6.3]
topic_primary: bt-channel-sounding
topics_secondary: [bt-le, bt-le-audio]
novelty_score: 3
---

## Summary (EN)

The Bluetooth SIG released **Bluetooth Core Specification 6.3 on May 6 2026**, the bi-annual update on top of 6.0 (June 2024, Channel Sounding) and 6.2 (Q4 2025, LE Audio refinements). 6.3 is a targeted-refinement release rather than a feature wave — three changes matter, all addressing pain points that surfaced in early 6.0/6.2 deployments.

**(1) Channel Sounding Inline PCT Transfer** is the headline. In the 6.0 baseline, the **Phase-based Channel Tone (PCT)** ranging exchange has the reflector send back **phase-aligned tones to the initiator, which then reports the phase samples back over the air for the initiator's host to compute range**. That report-back is bandwidth and battery overhead, especially for a tag responding to many anchors. 6.3 introduces an "inline" mode where the **reflector shifts the phase-aligned tones directly into hardware** rather than reporting the excess phase data. The phase-comparison happens at the reflector-side controller, and only the distilled distance estimate (or a much-reduced phase summary) crosses the air. The SIG positions this as enabling **centimetre-level accuracy** while removing the per-exchange overhead that was making sub-second update rates expensive.

**(2) HCI capacity expansion** — pragmatic plumbing. The Host Controller Interface command and event masks were running out of bits, which had become a real blocker for vendor extensions and future features. 6.3 widens the masks to accommodate "tomorrow's features without breaking legacy stacks" — i.e. existing host code stays valid, and new commands/events get room to live.

**(3) Classic-LE RF limit harmonisation** — the BR/EDR (Classic) and LE radio transmit/receive specifications were originally written in different eras and had drifted apart in subtle ways (different masks, different power tolerance bands). For dual-mode TWS earbuds/headsets — which all premium products are — this forced silicon designers to satisfy the union of both, hurting power efficiency. 6.3 aligns the RF limits so a single RF front-end can be tuned to one set of constraints. The SIG calls out this as enabling "more power-efficient radio architectures without compromising performance" — concretely, smaller PA backoff, simpler filter chains, lower current at the same TX power.

Target markets named: **TWS earbuds, headsets, professional monitors, hearing aids**, with future-looking framing of "AI-edge audio and industrial meshes."

## Summary (ZH)

Bluetooth SIG 于 **2026 年 5 月 6 日发布 Bluetooth Core 规范 6.3**，是在 6.0（2024 年 6 月，信道探测）与 6.2（2025 年 Q4，LE Audio 精化）之上的半年度更新。6.3 是定向精化发布而非特性浪潮 —— 三处变化重要，均针对早期 6.0/6.2 部署中浮现的痛点。

**(1) 信道探测 Inline PCT 传输**是头条。在 6.0 基线中，**基于相位的信道音（PCT）**测距交换由反射器**将相位对齐音回送给发起者，由发起者通过空口回报相位采样，然后由发起者主机计算距离**。该回报既是带宽开销也是电池开销，对于一个响应多个锚点的标签尤其严重。6.3 引入"inline"模式：**反射器将相位对齐音直接转入硬件**，而不报告过多的相位数据。相位比较在反射器侧控制器内完成，只有提炼后的距离估计（或大幅压缩的相位摘要）通过空口。SIG 将其定位为在去除使亚秒级更新率昂贵的每次交换开销的同时，实现 **厘米级精度**。

**(2) HCI 容量扩展** —— 务实的管道工作。主机控制器接口的命令与事件掩码位数耗尽，已成为厂商扩展与未来特性的真实障碍。6.3 加宽掩码以容纳"未来特性而不破坏遗留协议栈" —— 即现有主机代码仍然有效，新命令/事件有空间存在。

**(3) Classic-LE 射频限制对齐** —— BR/EDR（Classic）与 LE 的射频发送/接收规范原本写于不同时期，且在细节上漂移（不同的频谱模板、不同的功率容差带）。对于双模 TWS 耳塞/头戴 —— 所有高端产品都是双模 —— 这迫使硅设计者满足两者并集，损害功效。6.3 对齐射频限制，让单个射频前端可调到一组约束。SIG 将此点名为可实现"更高功效的射频架构而不损害性能" —— 具体地，更小的 PA 回退、更简单的滤波链、相同 TX 功率下更低电流。

具名的目标市场：**TWS 耳塞、头戴、专业监听、助听器**，并面向未来定位"AI 边缘音频与工业网状"。

## Key technical points (EN)

- **Release date**: May 6 2026 (bi-annual cadence: 6.0 → 6.2 → 6.3).
- **Channel Sounding Inline PCT Transfer**:
  - Reflector shifts phase-aligned tones into hardware (vs. reporting excess phase data over air in 6.0 baseline).
  - Phase comparison done at reflector-side controller; only distilled range estimate crosses the air.
  - Stated benefit: centimetre-level accuracy at lower per-exchange overhead → enables sub-second update rates more cheaply.
- **HCI capacity expansion**:
  - Command and event masks widened.
  - Backward-compatible — legacy stacks unbroken.
- **Classic-LE RF limit alignment**:
  - BR/EDR and LE radio transmit/receive specs harmonised.
  - Enables single tuned RF front-end for dual-mode (TWS) silicon.
  - Concrete benefit: smaller PA backoff, simpler filter chains, lower current at same TX power.
- **Target markets**: TWS earbuds, headsets, professional monitors, hearing aids; forward-positioned for AI-edge audio + industrial mesh.

## Key technical points (ZH)

- **发布日期**：2026 年 5 月 6 日（半年节奏：6.0 → 6.2 → 6.3）。
- **信道探测 Inline PCT 传输**：
  - 反射器将相位对齐音转入硬件（vs 6.0 基线中通过空口回报过多相位数据）。
  - 相位比较在反射器侧控制器完成；只有提炼的距离估计通过空口。
  - 声明的收益：厘米级精度而每次交换开销更低 → 亚秒级更新率更便宜。
- **HCI 容量扩展**：
  - 命令与事件掩码加宽。
  - 向后兼容 —— 遗留协议栈不受破坏。
- **Classic-LE 射频限制对齐**：
  - BR/EDR 与 LE 的发送/接收规范一致化。
  - 使双模（TWS）硅片能采用单一调优的射频前端。
  - 具体收益：更小的 PA 回退、更简单的滤波链、相同 TX 功率下更低电流。
- **目标市场**：TWS 耳塞、头戴、专业监听、助听器；面向未来定位 AI 边缘音频 + 工业网状。

## Why it matters / what's new (EN)

6.3 is a small spec release in word count but a meaningful one in deployment economics. The **Inline PCT Transfer** change is the most consequential single update — the v6.0 PCT-report-back overhead has been the main reason early Channel Sounding implementations couldn't sustain dense / fast ranging workloads, and removing it without changing the application-layer API makes 6.3 a drop-in upgrade for v6.0 stacks targeting indoor positioning. The **RF-limit harmonisation** is the unsexy item that matters most for product power budgets — TWS designers have been quietly compensating for the dual-spec mismatch for years; 6.3 lets them stop. This complements `2026-05-24_arxiv-connectionless-ble-cs-pawr.md` (academic-side connectionless CS via PAwR + CS Test, also targeting the same scalability problem from a different angle) — together they map the two complementary directions BLE-CS is evolving in 2026: per-exchange overhead cuts (6.3 spec) and per-connection overhead cuts (PAwR design pattern). Hearing-aid market specifically benefits from both the RF-limit alignment (power) and the Auracast-adjacent positioning use-cases the Inline PCT enables.

## Why it matters / what's new (ZH)

6.3 是字数小的规范发布，但在部署经济学上意义重大。**Inline PCT 传输**变化是最有意义的单一更新 —— v6.0 PCT 回报开销一直是早期信道探测实现无法承载密集/快速测距工作负载的主因，在不改变应用层 API 的前提下移除它，使 6.3 对面向室内定位的 v6.0 协议栈构成原地升级。**射频限制一致化**是对产品功耗预算最重要的不显眼项 —— TWS 设计者已多年默默补偿双规范不匹配；6.3 让他们可以停止。该条目补充 `2026-05-24_arxiv-connectionless-ble-cs-pawr.md`（学术侧通过 PAwR + CS Test 实现的无连接 CS，从另一角度同样针对可扩展性问题）—— 两者一同勾勒 2026 年 BLE-CS 演进的两个互补方向：每次交换开销削减（6.3 规范）与每连接开销削减（PAwR 设计模式）。助听器市场具体地同时受益于射频限制对齐（功耗）与 Inline PCT 使能的 Auracast 邻近定位用例。
