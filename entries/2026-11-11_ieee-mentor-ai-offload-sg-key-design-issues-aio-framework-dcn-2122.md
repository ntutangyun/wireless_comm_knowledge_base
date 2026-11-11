---
id: 2026-11-11_ieee-mentor-ai-offload-sg-key-design-issues-aio-framework-dcn-2122
date_published: 2026-11-10
date_found: 2026-11-11
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 AI Offload SG: Key Design Issues for the AIO Framework — registration, Beacon IE content, MAC sessions, AP role in provider selection (DCN 11-26-2122r3, MediaTek)"
title_zh: "IEEE 802.11 AI Offload SG：AIO 框架的关键设计问题——注册、Beacon IE 内容、MAC 会话、AP 在提供者选择中的角色（DCN 11-26-2122r3，联发科）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2122&is_year=2026"
source_quality: full
topics: [AI Offload, AIO, 802.11bu, Beacon IE, service discovery, compute offload]
topic_primary: wifi-for-ai
topics_secondary: [wifi8-uhr]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2122r3, "Key Design Issues for AIO Framework" (Chung-Ta Ku, MediaTek; co-listed Wilson Tsao and Paul Cheng; AI Offload SG; 9 slides; r3 uploaded 10 November 2026), builds on the authors' earlier contribution on an AIO framework in which a non-AP STA is the compute provider. The slides state that multiple contributions in the group (cited as [2-13]) explore different but overlapping architectures, leaving several design choices open that may significantly affect the scope of the 802.11 specification. The contribution presents four design issues with options, trade-offs and 802.11 impact, with the stated goal of gathering group feedback for further 11bu specification development. The illustrative flow has a requester STA, an AP and a non-AP STA provider, with steps of registration, discovery via Beacon IE, session setup and offload.

Issue 1, need for a registration frame: Option A defines registration in the MAC (native 802.11 mechanism for providers on the BSS; impact is extra information in the association request or new registration request/response frames; stated con: applies only to 802.11 devices). Option B keeps registration outside the MAC as an upper-layer function (connectivity-agnostic across Wi-Fi, Ethernet, cellular, Bluetooth; stated con: possible fragmented registration across vendors; impact is defining what information upper layers must give for Beacon IE generation). Issue 2, Beacon IE information: a compute-oriented indicator (for example TOPS, memory; supports model-URL download and execution, but metrics change quickly and need a refresh mechanism) versus a service-oriented indicator (an AI Service ID for a pre-downloaded model or configured service, offering flexible granularity from small neural networks to large LLMs, but with AI Service ID governance as a concern); the question is whether the Beacon IE should carry both. Issue 3, a session in the MAC: Option A gives the MAC its own session (enabling traffic prioritization and airtime optimization such as TDLS establishment, at the cost of parallel MAC/application sessions and new session setup/start frames); Option B leaves sessions to the application layer (no duplication, but upper-layer session definitions may be proprietary and hard to interoperate). Issue 4, AP participation in provider selection: AP-assisted selection (AP load balancing, fuller view of provider status, lower requester complexity, but selection is application-specific and dynamic (policy, licensing, model availability, authorization, cost), so standardizing it in the AP may reduce flexibility) versus requester-led selection (AP only forwards; little to no 802.11 effort, but no AP load balancing or orchestration).

The summary slide poses four questions for the group: whether registration of providers to the AP is within 802.11 scope; whether Beacon IEs should advertise compute-oriented information, service-oriented information, or both; whether there is sufficient benefit to define a session in the MAC; and whether the AP should take part in provider selection and in which scenarios.

## Summary (ZH)

DCN 11-26-2122r3《Key Design Issues for AIO Framework》（Chung-Ta Ku，联发科；另列 Wilson Tsao、Paul Cheng；AI Offload SG；共 9 页；r3 于 2026 年 11 月 10 日上传）建立在作者此前以非 AP STA 作为算力提供者的 AIO 框架文稿之上。幻灯片指出，组内多份文稿（引用为 [2-13]）探讨了不同但相互重叠的架构，若干设计选择尚未定论，并可能显著影响 802.11 规范的范围。本文稿给出四个设计问题，列出选项、权衡及对 802.11 的影响，目标是为后续 11bu 规范制定收集工作组反馈。示意流程包含请求方 STA、AP 与作为提供者的非 AP STA，步骤为注册、经 Beacon IE 发现、会话建立与卸载。

问题 1，是否需要注册帧：选项 A 在 MAC 中定义注册（为 BSS 内的提供者提供 802.11 原生机制；影响是在关联请求帧中增加信息或新增注册请求/响应帧；文稿所列缺点：仅适用于 802.11 设备）；选项 B 将注册置于 MAC 之外，作为上层功能（与连接方式无关，覆盖 Wi-Fi、以太网、蜂窝、蓝牙；所列缺点：各厂商注册机制可能碎片化；影响是需定义上层应向 Beacon IE 生成提供哪些信息）。问题 2，Beacon IE 内容：算力导向指示（如 TOPS、内存；支持提供模型 URL 下载并执行，但指标变化快，需要刷新机制）对比服务导向指示（用 AI Service ID 调用预下载模型或预配置服务，粒度灵活，从小型神经网络到大型 LLM，但 AI Service ID 的治理仍是问题）；待讨论的是 Beacon IE 能否同时承载二者。问题 3，MAC 中是否设会话：选项 A 由 MAC 维护自己的会话（便于流量优先级与空口时间优化，例如 TDLS 建立；代价是 MAC 与应用会话并行，并需新增会话建立/开始帧）；选项 B 会话完全留给应用层（无重复，但上层会话定义可能私有，难以互通）。问题 4，AP 是否参与提供者选择：AP 辅助选择（AP 负载均衡、更全面掌握提供者状态、降低请求方复杂度，但选择取决于具体应用且是动态的（策略、许可、模型可用性、授权与成本），在 AP 中将其标准化可能降低灵活性）对比请求方主导选择（AP 仅转发，对 802.11 几乎无工作量，但无 AP 负载均衡与编排）。

总结页向工作组提出四个问题：向 AP 注册提供者是否属于 802.11 范围；Beacon IE 应通告算力导向信息、服务导向信息还是二者兼有；定义 MAC 会话的收益是否足够；AP 是否应参与提供者选择及适用场景。

## Key technical points (EN)

- Framework context: non-AP STA as compute provider; requester STA, AP, provider; steps registration, Beacon IE discovery, session setup, offload.
- Issue 1: registration in the MAC (association request additions or new registration frames) vs outside the MAC (upper-layer, connectivity-agnostic).
- Issue 2: Beacon IE carries compute-oriented info (TOPS, MEM; model URL) vs service-oriented info (AI Service ID); question of carrying both; AI Service ID governance flagged as a concern.
- Issue 3: MAC-level AIO session (session setup/start request and response frames; enables prioritization and airtime optimization) vs application-layer sessions only.
- Issue 4: AP-assisted provider selection (load balancing, orchestration) vs requester-led selection (AP as forwarder).
- Each issue is paired with pros, cons, 802.11 impact and, where relevant, upper-layer impact; no option is selected, and the deck asks for group feedback.

## Key technical points (ZH)

- 框架背景：非 AP STA 作为算力提供者；请求方 STA、AP、提供者；步骤为注册、Beacon IE 发现、会话建立、卸载。
- 问题 1：在 MAC 中注册（关联请求增补或新增注册帧）对比在 MAC 之外（上层功能，与连接方式无关）。
- 问题 2：Beacon IE 承载算力导向信息（TOPS、MEM；模型 URL）还是服务导向信息（AI Service ID），能否二者兼载；文稿将 AI Service ID 的治理列为顾虑。
- 问题 3：MAC 层 AIO 会话（会话建立/开始请求与响应帧；便于优先级与空口时间优化）对比仅在应用层维护会话。
- 问题 4：AP 辅助提供者选择（负载均衡、编排）对比请求方主导选择（AP 仅转发）。
- 每个问题均给出优缺点、对 802.11 的影响及（如适用）对上层的影响；文稿未选定方案，而是征求工作组反馈。

## Why it matters / what's new (EN)

The KB already tracks the AI Offload SG's formation and draft PAR (2026-07-19_ieee-p802-11bu-draft-par-ai-offload) and an earlier SG digest (2026-05-12_ieee-mentor-ai-offload-sg-antwerp-digest). This deck is a snapshot of where the architecture debate stands in November: it lays out the open design axes for the 11bu framework side by side, which is useful context for reading the other AIO contributions. The same plenary week also saw the SG's PAR and CSD comment-response deck (DCN 11-26-2266) revised; a NesCom-member comment in it suggests rephrasing PAR item 5.2.b as an amendment enabling a STA to provide secure AI offload services to a non-AP STA, discovery of such services, and a MAC service interface for requesting offload and retrieving results, and the response states that 5.2.b was revised in this comment round.

## Why it matters / what's new (ZH)

本 KB 已跟踪 AI Offload SG 的成立与 PAR 草案（2026-07-19_ieee-p802-11bu-draft-par-ai-offload）以及早先的 SG 摘要（2026-05-12_ieee-mentor-ai-offload-sg-antwerp-digest）。本文稿反映 11 月架构讨论的现状：并列给出 11bu 框架尚未定论的设计维度，有助于理解其他 AIO 文稿。同一全会周内，SG 的 PAR 与 CSD 意见答复文稿（DCN 11-26-2266）也有修订；其中一位 NesCom 成员的意见建议将 PAR 5.2.b 改写为：该修订案使 STA 能向非 AP STA 提供安全的 AI 卸载服务、发现此类服务，并提供用于请求卸载与取回结果的 MAC 服务接口；答复称 5.2.b 已在本轮意见处理中修订。

## Images

None.
