---
id: 2026-10-12_arxiv-ble-multihop-clock-drift-collision-model
date_published: 2026-09-28
date_found: 2026-10-12
technology: bluetooth
type: academic-paper
title_en: "Deconstructing BLE Multi-hop: A Model-based Approach to Quantifying the Challenges"
title_zh: "解构蓝牙低功耗多跳网络：量化其挑战的模型化方法"
url: "https://arxiv.org/abs/2609.34483"
source_quality: full
topics: [BLE, multi-hop, mesh, clock-drift, connection-event, collision-probability]
topic_primary: bt-mesh
topics_secondary: [bt-le]
novelty_score: 3
---

## Summary (EN)

This paper (Bozheng Pang and Matthias Wählisch, TU Dresden / Barkhausen Institut; José Alamos and Thomas C. Schmidt, HAW Hamburg; submitted Sep 28, 2026, cs.NI) builds a mathematical model for how clock drift causes collisions between independently-scheduled Bluetooth Low Energy (BLE) connections when a single device relays traffic across multiple BLE connections (multi-hop / mesh-style topologies, as used by RFC 9159 IPv6-over-BLE and BLE 4.2+'s simultaneous central/peripheral role support). The authors note that prior work (Petersen et al.) first reported the clock-drift problem empirically, but no existing publication had modeled it mathematically; this paper frames the problem as a periodic-pulse-train overlap question and derives closed-form and approximate collision-probability expressions from BLE's own connection-event timing (anchor points, connection event length CE, connection interval CI).

The core model computes the overlap probability between two connections' time windows (Eq. 4: a double integral over each connection's interval, testing whether anchor-point gaps fall inside the sum of connection-event lengths), converts it into each connection's effective collision probability (Eq. 5), extends to n simultaneous connections via a complement product over pairwise probabilities assuming independent connection establishment (Eq. 6), and supplies a simplified approximation, P ≈ (CE1+CE2)/CI, for quick estimation. The model was validated against real BLE hardware: Adafruit Feather nRF52840 Sense boards running RIOT OS, at a 100 ms primary connection interval (with a 50-260 ms range used for validation sweeps), 1M PHY, 233-byte packets (200-byte payload), and connection-event lengths of 4.028 ms or 8.056 ms; 2-hour experiment runs, with measurement converging to theory after about 1 h (scenario 1) and about 3 h (scenario 2). Four topologies were tested: a star (one central, two peripherals, the collision-free control case), two centrals sharing one peripheral, a chain (central → relay acting as peripheral on one link and central on the other → peripheral), and an extended four-centrals-to-one-peripheral case. In the validation sweep (one connection fixed at 50 ms, the other varied 60-260 ms), the collision probability of the fixed 50-ms connection fell as the other connection's interval grew, while that of the varying connection stayed roughly constant (as Eq. 5 predicts), with a maximum model-to-measurement error of about 1%. In the earlier equal-interval (100 ms) experiments, anchor-point offsets on the shared peripheral oscillated between 0 and half the connection interval, with collisions appearing once the offset fell below the connection-event length, producing a characteristic "stepped" retransmission pattern.

The authors state plainly that "a BLE multi-hop network cannot eliminate the impact of clock drift in most cases" under BLE's current time-synchronization mechanism, and propose four categories of mitigation rather than a single fix: topology constraints (a star topology removes the problem entirely; line/tree topologies require that each device act as peripheral in at most one connection at a time, plus a mechanism to monitor and adjust anchor points); parameter tuning (keep connection intervals sufficiently separated relative to connection-event length, and choose intervals with a large least-common-multiple to avoid frequent recurring collisions); software changes giving every role (not just central) independent control over its own anchor point; and a hardware route — adding extra transceivers per device — which the authors say would work but trades the clock-drift problem for an electromagnetic-interference management problem, pointing to full-duplex radio research as a related direction. The analysis excludes the CI1=CI2 case (treated as an obvious/degenerate case); the authors describe parameter fine-tuning as helpful for short-term issues but insufficient, and propose topology limits, anchor-point control for all roles, or extra transceivers as the actual remedies. Funding: German Federal Ministry of Research, Technology and Space (BMFTR), project C-ray4edge (grants 16KIS1694K, 16KIS1695).

## Summary (ZH)

本文（作者 Bozheng Pang、Matthias Wählisch，德累斯顿工业大学/巴克豪森研究所；José Alamos、Thomas C. Schmidt，汉堡应用科技大学；提交于 2026 年 9 月 28 日，cs.NI 分类）为时钟漂移如何在单台设备跨多条蓝牙低功耗（BLE）连接转发流量（多跳/类 Mesh 拓扑，如 RFC 9159 IPv6 over BLE 及 BLE 4.2 及以上版本支持的同时中心/外围角色）时导致独立调度连接之间发生碰撞的问题，建立了数学模型。作者指出，此前的工作（Petersen 等）首次从经验上报告了时钟漂移问题，但尚无已发表工作对其进行数学建模；本文将该问题形式化为周期脉冲序列的重叠问题，并基于 BLE 自身的连接事件时序（锚点、连接事件长度 CE、连接间隔 CI）推导出闭式与近似的碰撞概率表达式。

该核心模型计算两条连接时间窗口的重叠概率（公式 4：对各连接区间进行二重积分，判断锚点间隙是否落入两连接事件长度之和内），将其转化为各连接自身的有效碰撞概率（公式 5），并在各连接独立建立的假设下，通过对两两碰撞概率取补后连乘扩展到 n 条同时连接的情形（公式 6），同时给出便于快速估算的简化近似式 P ≈ (CE1+CE2)/CI。该模型在真实 BLE 硬件上得到验证：使用运行 RIOT 操作系统的 Adafruit Feather nRF52840 Sense 开发板，主连接间隔为 100 ms（验证扫描范围为 50-260 ms），1M PHY，233 字节数据包（200 字节负载），连接事件长度为 4.028 ms 或 8.056 ms；实验运行 2 小时；实测分别约 1 小时（场景 1）与约 3 小时（场景 2）收敛至理论值。共测试四种拓扑：星形（一个中心、两个外围设备，作为无碰撞的对照情形）、两个中心共享一个外围设备、链式（中心 → 在一条链路上作外围、另一条链路上作中心的中继 → 外围）以及扩展的四中心对一外围设备情形。在验证扫描中（一条连接固定为 50 ms，另一条在 60-260 ms 范围内变化），固定 50 ms 连接的碰撞概率随另一条连接间隔增大而下降，而间隔变化的那条连接的碰撞概率大致保持不变（与公式 5 一致），模型与实测的最大误差约 1%。在此前等间隔（100 ms）实验中，共享外围设备上的锚点偏移在 0 与连接间隔一半之间振荡，当偏移小于连接事件长度时即发生碰撞，呈现出特征性的"阶梯式"重传模式。

作者明确指出，在 BLE 现有的时间同步机制下，"在大多数情况下，BLE 多跳网络无法消除时钟漂移的影响"，并提出了四类缓解方向，而非单一解决方案：拓扑约束（星形拓扑可完全消除该问题；线形/树形拓扑则要求每台设备在同一时刻最多只能以外围角色参与一条连接，并需具备监测与调整锚点的机制）；参数调优（保持连接间隔相对于连接事件长度有足够间隔，并选择具有较大最小公倍数的连接间隔以避免频繁周期性碰撞）；软件层修改，使每种角色（而非仅中心角色）都能独立控制自身的锚点；以及硬件方案——为每台设备增加额外收发器，作者指出这种方式可行，但会把时钟漂移问题转化为电磁干扰管理问题，并指出全双工无线通信研究是相关方向。分析排除了 CI1=CI2 的情形（视为显而易见的退化情形）；作者指出参数微调仅有助于缓解短期问题、并不充分，并提出拓扑限制、让所有角色控制锚点或增加收发器作为真正的解决途径。资助来源：德国联邦研究、技术与航天部（BMFTR），C-ray4edge 项目（资助号 16KIS1694K、16KIS1695）。

## Key technical points (EN)

- **Problem**: clock drift between independently-scheduled BLE connections causes periodic collisions when one device relays across multiple connections (multi-hop/mesh-style topologies, RFC 9159 IPv6-over-BLE, BLE 4.2+ simultaneous central/peripheral roles).
- **Model**: derives overlap/collision probability from BLE's own anchor-point / connection-event (CE) / connection-interval (CI) timing — exact double-integral form (Eq. 4-5), an n-connection extension (Eq. 6), and a simplified estimate P ≈ (CE1+CE2)/CI.
- **Testbed**: Adafruit Feather nRF52840 Sense boards on RIOT OS; 100 ms primary CI (50-260 ms validation sweep), 1M PHY, 233-byte packets (200-byte payload), CE of 4.028 ms or 8.056 ms; 2-hour runs, converging to theory after about 1 h (scenario 1) and about 3 h (scenario 2).
- **Topologies tested**: star (collision-free control), two-centrals-one-peripheral, chain (central → relay acting as peripheral on one link and central on the other → peripheral), four-centrals-one-peripheral.
- **Result**: the collision probability of the fixed 50-ms connection fell as the other connection's interval grew, while that of the varying connection stayed roughly constant (as Eq. 5 predicts), with a maximum model-to-measurement error of about 1%; collisions occur once anchor-point offset drops below CE, producing a stepped retransmission pattern.
- **Mitigations proposed (four categories)**: topology constraints (star eliminates it; non-star needs "peripheral role in at most one connection" plus a mechanism to monitor and adjust anchor points); connection-interval tuning (sufficient separation, large LCM between intervals); software giving every role independent anchor-point control; extra transceiver hardware (trades the problem for EMI management).
- **Stated limit**: "a BLE multi-hop network cannot eliminate the impact of clock drift in most cases" under BLE's current synchronization mechanism; CI1=CI2 case excluded as degenerate; parameter fine-tuning is described as helpful for short-term issues but insufficient, with topology limits, anchor-point control for all roles, or extra transceivers as the actual remedies.

## Key technical points (ZH)

- **问题**：当单台设备跨多条连接转发流量（多跳/类 Mesh 拓扑，RFC 9159 IPv6 over BLE，BLE 4.2 及以上同时中心/外围角色）时，独立调度的 BLE 连接之间的时钟漂移会导致周期性碰撞。
- **模型**：基于 BLE 自身的锚点、连接事件长度（CE）、连接间隔（CI）时序，推导出重叠/碰撞概率——精确二重积分形式（公式 4-5）、扩展至 n 条连接的形式（公式 6），以及简化估算式 P ≈ (CE1+CE2)/CI。
- **测试平台**：运行 RIOT OS 的 Adafruit Feather nRF52840 Sense 开发板；主连接间隔 100 ms（验证扫描范围 50-260 ms），1M PHY，233 字节数据包（200 字节负载），连接事件长度 4.028 ms 或 8.056 ms；运行 2 小时，分别约 1 小时（场景 1）与约 3 小时（场景 2）收敛至理论值。
- **测试拓扑**：星形（无碰撞对照）、两中心共享一外围、链式（中心 → 在一条链路上作外围、另一条链路上作中心的中继 → 外围）、四中心对一外围（扩展情形）。
- **结果**：固定 50 ms 连接的碰撞概率随另一条连接间隔增大而下降，而间隔变化的那条连接的碰撞概率大致保持不变（与公式 5 一致），模型与实测的最大误差约 1%；当锚点偏移小于连接事件长度时发生碰撞，呈阶梯式重传模式。
- **提出的缓解方案（四类）**：拓扑约束（星形可完全消除；非星形需保证"外围角色最多参与一条连接"，并需具备监测与调整锚点的机制）；连接间隔调优（保持足够间隔、选择最小公倍数较大的间隔）；软件层修改以让每种角色独立控制锚点；增加收发器硬件（将问题转化为电磁干扰管理问题）。
- **作者说明的局限**：在 BLE 现有同步机制下，"大多数情况下 BLE 多跳网络无法消除时钟漂移的影响"；排除 CI1=CI2 的退化情形；参数微调仅有助于缓解短期问题、并不充分，拓扑限制、让所有角色控制锚点或增加收发器才是真正的解决途径。

## Why it matters / what's new (EN)

The KB's bt-mesh bin so far has covered a dual-radio BLE-LoRa hierarchical mesh (2026-05-30) and Bluetooth NLC lighting-control mesh deployments (2026-08-28), but had no entry quantifying the clock-drift collision problem in connection-based BLE multi-hop (e.g. IPv6-over-BLE) networks. This paper supplies that missing piece: a closed-form collision-probability model derived directly from BLE's connection-event parameters, validated on real nRF52840 hardware across four topologies, with an explicit statement that the current BLE synchronization mechanism cannot remove the effect — only constrain it via topology, parameter choice, software anchor-point control, or added radio hardware.

## Why it matters / what's new (ZH)

知识库的 bt-mesh 分类此前收录了双射频 BLE-LoRa 层级化 Mesh（2026-05-30）与蓝牙 NLC 照明控制 Mesh 部署（2026-08-28），但尚无条目量化基于连接的 BLE 多跳网络（如 IPv6 over BLE）中的时钟漂移碰撞问题。本文补上了这一缺失环节：基于 BLE 连接事件参数直接推导出闭式碰撞概率模型，并在真实 nRF52840 硬件上跨四种拓扑进行了验证，同时明确指出当前 BLE 同步机制无法消除该影响——只能通过拓扑选择、参数调优、软件层锚点控制或增加射频硬件加以约束。
