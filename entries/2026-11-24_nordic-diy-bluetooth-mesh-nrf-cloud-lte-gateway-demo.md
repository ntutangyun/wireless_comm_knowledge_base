---
id: 2026-11-24_nordic-diy-bluetooth-mesh-nrf-cloud-lte-gateway-demo
date_published: 2026-11-09
date_found: 2026-11-24
type: industry-news
technology: bluetooth
title_en: "Nordic DevZone: DIY gateway bridging a Bluetooth Mesh network to nRF Cloud over LTE, built from an nRF54L15 DK and an nRF9151 DK (student demo)"
title_zh: "Nordic DevZone：以 nRF54L15 DK 与 nRF9151 DK 搭建、经 LTE 将蓝牙 Mesh 网络接入 nRF Cloud 的 DIY 网关（学生演示项目）"
url: "https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/diy-gateway-bluetooth-mesh-to-nrf-cloud-via-cellular-bridge-demo"
source_quality: full
topics: [BLE, Bluetooth-Mesh, gateway, nRF-Cloud, MQTT, provisioning, remote-provisioning, key-refresh, nRF54L15, nRF9151]
topic_primary: bt-mesh
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

A Nordic DevZone blog post (dated 9 November 2026) describes a demonstration gateway that connects a Bluetooth Mesh network to nRF Cloud, created by four NTNU students as a bachelor's thesis, two of whom continued it as a summer job at Nordic Semiconductor. The gateway is built from two development kits joined by a UART link: an nRF54L15 DK that handles all Bluetooth Mesh functions and acts as the mesh provisioner, and an nRF9151 DK that holds the LTE connection, authenticates with nRF Cloud and maintains the MQTT session. A custom web interface controls the whole system from a browser; the source code is published in a NordicPlayground repository. The post states that the demo uses lights only as a stand-in, and that the underlying mechanics apply to monitoring use cases such as fault detection, energy and power monitoring and network statistics.

The post is organised as: the problem, use cases (smart home and office), gateway requirements, architecture and end-to-end data flow, a source code map, key concepts (MQTT, the mesh provisioner and Configuration Database, Nordic's Networked Lighting Control samples, Remote Provisioning, Key Refresh), capabilities, how to run it, testing, notes and limitations. Over 100 tests per method, both a gateway round-trip measurement and a zero-hop LED-toggle measurement averaged about 0.95 seconds, which the authors read as Bluetooth Mesh propagation adding negligible latency compared with the website-to-gateway path. Provisioning and configuring a node took 5.9 seconds on average, and 23.7 seconds in total for four nodes.

## Summary (ZH)

Nordic DevZone 博客文章（日期 2026 年 11 月 9 日）介绍了一个把蓝牙 Mesh 网络接入 nRF Cloud 的演示网关，由 NTNU 的四名学生作为本科毕业设计完成，其中两人随后在 Nordic Semiconductor 以暑期工作的形式继续该项目。网关由通过 UART 相连的两块开发板构成：nRF54L15 DK 负责全部蓝牙 Mesh 功能并担任 Mesh 配网器，nRF9151 DK 负责 LTE 连接、与 nRF Cloud 的认证以及维护 MQTT 会话。一个自定义网页界面可在浏览器中控制整个系统，源代码发布在 NordicPlayground 代码库。文章称该演示仅以灯具作为替代对象，其底层机制同样适用于故障检测、能耗与功率监测及网络统计等监测场景。

文章结构为：问题、应用场景（智能家居与办公室）、网关需求、架构与端到端数据流、源码地图、关键概念（MQTT、Mesh 配网器与配置数据库、Nordic 联网照明控制示例、远程配网、密钥刷新）、功能、运行方法、测试、说明与局限。每种方法各测试 100 次，网关往返时延测量与零跳 LED 切换测量的平均值均约为 0.95 秒，作者据此认为与网页到网关的时延相比，蓝牙 Mesh 传播引入的时延可以忽略。配网并配置一个节点平均耗时 5.9 秒，四个节点合计 23.7 秒。

## Key technical points (EN)

- **Architecture**: nRF54L15 DK (Bluetooth Mesh, provisioner, Zephyr shell) and nRF9151 DK (LTE, MQTT) linked by UART; built with nRF Connect SDK v3.4.0. Cloud commands arrive as plain-text shell commands (the gateway's own `gtw` set or Zephyr `mesh` commands), with an optional `-r` prefix asking for the output to be returned.
- **Cloud transport**: nRF Cloud's standard MQTT message schema, with the application filling only the `appId` and `data` fields; one device-to-cloud and one cloud-to-device topic; the web front end sends commands through the nRF Cloud REST API.
- **Mesh side**: the gateway keeps the Configuration Database (nodes, addresses, device keys, NetKeys, AppKeys), configures new nodes from their composition data, and can auto-provision discovered nodes. The Nordic NLC `light_ctrl` and `light_dimmer` samples serve as mesh nodes, modified to add the Remote Provisioning Server model and more key slots.
- **Remote Provisioning**: nodes with the RPR Server model scan for unprovisioned devices out of the gateway's direct range and report UUID and RSSI; the gateway picks the server with the strongest RSSI to provision.
- **Key Refresh and recovery**: the gateway runs the three-phase Key Refresh Procedure on selected NetKeys and AppKeys (an AppKey is refreshed together with its NetKey). The Configuration Database can be saved and used to recreate the gateway on replacement hardware, which is provisioned onto a new unicast address because of the replay protection list.
- **Measurements**: about 0.95 s average latency for both test methods (100 tests each); 5.9 s average per node and 23.7 s for four nodes to provision and configure.
- **Stated limitations**: it is a demo not for production; no FOTA; saving the Configuration Database exposes mesh keys in plain text in the web front end and nRF Cloud message history; the UART link is unencrypted; device-key refresh is not implemented; the web application has no user authentication; no mechanism authenticates a replacement gateway device to the cloud; anyone with the nRF Cloud API key and the nRF9151 device ID can control the mesh.
- **Design alternative noted**: tunnelling raw Mesh Network PDUs through the nRF9151 to a cloud-side mesh stack would keep network keys off the devices in the chain, but would require implementing and qualifying the mesh stack on the cloud side and, depending on the connection, add latency.

## Key technical points (ZH)

- **架构**：nRF54L15 DK（蓝牙 Mesh、配网器、Zephyr shell）与 nRF9151 DK（LTE、MQTT）通过 UART 相连；基于 nRF Connect SDK v3.4.0 构建。云端命令以纯文本 shell 命令的形式到达（网关自有的 `gtw` 命令集或 Zephyr 的 `mesh` 命令），可带可选的 `-r` 前缀以要求返回输出。
- **云传输**：采用 nRF Cloud 标准 MQTT 消息模式，应用仅填写 `appId` 与 `data` 字段；设备到云、云到设备各一个主题；网页前端通过 nRF Cloud REST API 发送命令。
- **Mesh 侧**：网关维护配置数据库（节点、地址、设备密钥、NetKey、AppKey），依据组合数据（composition data）配置新节点，并可自动配网已发现的节点。Nordic NLC 示例 `light_ctrl` 与 `light_dimmer` 作为 Mesh 节点，经修改后加入了远程配网服务器模型并增加了密钥槽数量。
- **远程配网**：带有 RPR Server 模型的节点扫描网关直接覆盖范围之外的未配网设备，并上报 UUID 与 RSSI；网关选择 RSSI 最强的服务器执行配网。
- **密钥刷新与恢复**：网关对选定的 NetKey 与 AppKey 执行三阶段密钥刷新流程（AppKey 须与其所属 NetKey 一并刷新）。配置数据库可保存并用于在替换硬件上重建网关；由于重放保护列表，替换网关会被配网到新的单播地址。
- **测量**：两种测试方法的平均时延均约为 0.95 秒（各 100 次）；配网并配置一个节点平均 5.9 秒，四个节点合计 23.7 秒。
- **文中所述局限**：仅为演示，不可用于生产；不支持 FOTA；保存配置数据库会使 Mesh 密钥以明文出现在网页前端及 nRF Cloud 消息历史中；两块板之间的 UART 链路未加密；未实现设备密钥刷新；网页应用没有用户认证；没有机制向云端认证替换的网关设备；任何持有 nRF Cloud API 密钥与 nRF9151 设备 ID 的人都能控制该 Mesh 网络。
- **文中提到的替代设计**：经 nRF9151 将原始 Mesh 网络 PDU 隧道传至云端的 Mesh 协议栈，可使链路上的设备接触不到网络密钥，但需要在云端实现并认证 Mesh 协议栈，且视连接情况会增加时延。

## Why it matters / what's new (EN)

The KB's earlier Bluetooth Mesh entries cover a Networked Lighting Control and HVAC integration article from the Bluetooth SIG, a BLE-LoRa dual-radio mesh paper and a BLE multi-hop timing model; this adds a concrete mesh-to-cloud gateway reference with published code, measured latency and provisioning times, and an explicit list of its own security gaps. The figures come from a single vendor-hosted student project post and were reported by its authors; they were not independently reproduced here.

## Why it matters / what's new (ZH)

知识库此前的蓝牙 Mesh 条目涵盖蓝牙技术联盟关于联网照明控制与暖通集成的文章、BLE-LoRa 双射频 Mesh 论文以及 BLE 多跳时序模型；本条补充了一个带公开代码的 Mesh 到云网关参考实现，包括实测时延与配网耗时，以及作者自行列出的安全缺口。相关数据均来自厂商平台上的单篇学生项目文章，由作者自行报告，此处未独立复现。

## Images

No figures are embedded; see the source page (https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/diy-gateway-bluetooth-mesh-to-nrf-cloud-via-cellular-bridge-demo) for its architecture and data-flow diagrams and latency charts.
