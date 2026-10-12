---
id: 2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest
date_published: 2026-10-11
date_found: 2026-10-12
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn digest -- LB296 comment-resolution wave continues on D2.0/D2.1; NPCA switch-back timer negotiation, an urgent MAPC/Co-TDMA TXOP-return fix, and proposed UEQM extensions to 5-8 spatial streams"
title_zh: "IEEE 802.11 TGbn 摘要 —— D2.0/D2.1 的 LB296 意见处理持续进行；NPCA 切回定时器协商、紧急 MAPC/Co-TDMA TXOP 返回修复，以及将 UEQM 扩展至 5-8 条空间流的提案"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026"
source_quality: full
topics: [TGbn, LB296, NPCA, MAPC, Co-TDMA, UEQM, MLPM, 802.11bn]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr, energy-power-save]
novelty_score: 2
---

## Summary (EN)

Between 2026-09-28 and 2026-10-11, TGbn's Mentor stream carried the largest volume of new content of any group: 38 uploads in total, including 11 new base contributions (rev=0), seven of which are LB296 comment-resolution (CR) documents (Ross Jian Yu/Huawei -- two editorial-comment packages; Dongguk Lim/LG Electronics -- two; Hongwon Lee/LG Electronics; Shravan Kumar Kalyankar/Huawei; Liuming Lu/OPPO), alongside revised CR documents from Liwen Chu/NXP, Arik Klein/Huawei, Alfred Asterjadhi and Abhishek Patil/Qualcomm and others. Routine LB296 CR documents are not detailed individually here; four documents in the window are summarized below: two CID resolutions that change mechanism behavior (1988, 1997) and two non-CR proposals (1946, 1949).

An urgent CID resolution (DCN 11-26-1988r0, Samat Shabdanov/MediaTek with Kaiying Lu, Li-Hsiang Sun and James Yee, uploaded 2026-10-08) addresses a specification-compliance problem in the Co-TDMA TXOP-return mechanism (CID 20664, raised by Rubayet Shafin against clause 37.15.2.3.5): the current draft text mandates ("shall set") that a coordinating AP always solicit a TXOP-return frame from a coordinated AP in every Co-TDMA transmit-opportunity allocation, but if the allocated time is shorter than the TXOP-return frame's own transmission time (estimated at 45-56 microseconds), the coordinated AP cannot comply with the rule while also returning the TXOP in time -- and the current design splits TXOP-return support into an optional receive capability and a mandatory transmit obligation, which the authors argue is inconsistent for an optional feature. The commenter proposed changing "shall set" to "may set"; the authors' resolution is "Revised": the coordinating AP still sets TXOP Return Solicited to 1 whenever its Rx TXOP Return Support field is 1, but that capability field is redefined to mean support for both receiving and transmitting a MAPC TXOP Return frame, and the coordinated AP's transmission of the TXOP Return frame changes from "shall" to "should." The authors' discussion frames the current mandatory design as a specification-violation risk and a latency detriment (citing ~15-30% TXOP-efficiency loss for 100-500 us allocations).

A second contribution (DCN 11-26-1997r0, Lei Pan/Hikvision with Fanfu Huang and Fangdong Chen, dated 2026-09-30) proposes resolutions to CIDs on Non-Primary Channel Access (NPCA) (17799, 6190, 7154, 10639, 10640, 11037, 11188) and an NPCA_TIMER update-and-negotiation mechanism. The underlying problem: an NPCA station must normally switch back to the BSS primary channel when its NPCA_TIMER expires, but an NPCA AP holding buffered low-latency data may need to extend its stay beyond the BSS primary channel's NAV duration -- and if it switches back anyway, it may fail to win channel access there, delaying that low-latency traffic. The mechanism lets the data-transmitting STA (AP or non-AP) request a longer NPCA_TIMER in a BSRP-Trigger ICF (NPCA Duration Updated, 1 bit; NPCA Duration Request, 13 bits), with the peer accepting or countering in the Multi-STA BlockAck ICR (NPCA Duration Accepted, 1 bit; NPCA Duration Response, 13 bits), subject to an NPCA_TIMER_DEVIATION tolerance. The resolution also clarifies NAV handling across the switch: whether the Network Allocation Vector is tracked per-STA (as the 802.11 baseline implies) or per-channel matters, because an NPCA station that carries a stale NAV value from the BSS primary channel onto the NPCA primary channel could incorrectly treat the NPCA channel as busy and be unable to access it at all; the proposed text has an NPCA STA maintain a separate basic NAV and intra-BSS NAV for the NPCA primary channel, with BSS-primary NAVs not used for carrier sensing while on the NPCA primary channel.

A third contribution (DCN 11-26-1946r0, Ke Zhong/Ruijie Networks with Fachang Guo, dated 2026-09-28) proposes two extensions to Unequal Modulation (UEQM) -- the 802.11bn mechanism that lets a beamformed transmission assign independent QAM constellations per spatial stream to match per-stream channel conditions, currently specified for 2-4 spatial streams. The contribution proposes extending UEQM to 5-8 spatial streams, arguing that the D2.0 baseline already supports up to 8 spatial streams for equal-modulation (EQM) transmission and that 8-antenna Wi-Fi products are becoming more common in both consumer and enterprise deployments, and separately proposes extending UEQM's applicability from single-user/non-MU-MIMO transmissions to MU-MIMO allocations. The contribution sketches the signaling change needed for the first extension (widening the UEQM Tx/Rx Support and Max Nss fields, and the Beamformed-and-Coding/UEQM-Pattern subfield, from 2 bits to 3 bits) but states the exact text and full signaling design remain to be determined.

Separately, a fourth contribution (DCN 11-26-1949r0, Yuqing Zheng/Ruijie Networks with Ke Zhong and Fachang Guo, dated 2026-09-28) proposes adding an optional MLPMLinkBitmap parameter to the MLME-POWERMGT.request primitive, so that one SME-generated request can express the full per-link power-management-mode bitmap used by 802.11bn's Multi-Link Power Management (MLPM) signaling in a single call, rather than the existing primitive's single PowerManagementMode parameter which cannot express a complete multi-link bitmap in one request.

## Summary (ZH)

2026-09-28 至 2026-10-11 期间，TGbn 在 Mentor 上的新增内容量在各任务组中最大：共 38 次上传，其中 11 份新基础提案（rev=0），7 份为 LB296 意见处理（CR）文档（华为的 Ross Jian Yu——两份编辑性意见文档包；LG 电子的 Dongguk Lim——两份；LG 电子的 Hongwon Lee；华为的 Shravan Kumar Kalyankar；OPPO 的 Liuming Lu），此外还有 NXP 的 Liwen Chu、华为的 Arik Klein、高通的 Alfred Asterjadhi 与 Abhishek Patil 等人提交的 CR 修订版。常规 LB296 CR 文档在此不逐一详述；以下概述本窗口内四份文档：两份改变机制行为的 CID 解决方案（1988、1997）与两份非 CR 提案（1946、1949）。

一份紧急 CID 解决方案（DCN 11-26-1988r0，联发科 Samat Shabdanov 联合 Kaiying Lu、Li-Hsiang Sun 及 James Yee，2026-10-08 上传）解决了 Co-TDMA TXOP 返回机制中的一项规范合规性问题（CID 20664，由 Rubayet Shafin 针对第 37.15.2.3.5 条提出）：当前草案文本强制规定（"shall set"）协调 AP 必须在每次 Co-TDMA 发送机会分配中都向被协调 AP 征求 TXOP 返回帧，但若分配的时间短于 TXOP 返回帧本身的发送时间（估计为 45-56 微秒），被协调 AP 将无法在遵守该规则的同时及时返回 TXOP——且当前设计将 TXOP 返回支持拆分为可选的接收能力与强制的发送义务，作者认为这对可选特性而言自相矛盾。评论者建议将"shall set"改为"may set"；作者的解决方案为"Revised"：只要协调 AP 的 Rx TXOP Return Support 字段为 1，仍须将 TXOP Return Solicited 置 1，但该能力字段被重新定义为同时支持接收与发送 MAPC TXOP Return 帧，且被协调 AP 发送 TXOP Return 帧由"shall"改为"should"。作者的讨论将当前的强制性设计定性为规范违反风险与时延损害（并指出在 100-500 微秒分配下 TXOP 效率下降约 15%-30%）。

第二份提案（DCN 11-26-1997r0，海康威视 Lei Pan 联合 Fanfu Huang 及 Fangdong Chen，日期 2026-09-30）就非主信道接入（NPCA）相关 CID（17799、6190、7154、10639、10640、11037、11188）提出解决方案，并提出 NPCA_TIMER 更新与协商机制。其背后的问题是：NPCA 站点通常须在其 NPCA_TIMER 到期时切回 BSS 主信道，但持有缓存低时延数据的 NPCA AP 可能需要将停留时间延长至超出 BSS 主信道的 NAV 时长——而若其仍然切回，则可能无法在该信道上获得信道接入，从而延迟该低时延流量。该机制允许发送数据的站点（AP 或非 AP）在 BSRP 触发帧形式的 ICF 中请求延长 NPCA_TIMER（NPCA Duration Updated，1 比特；NPCA Duration Request，13 比特），对端在多站点块确认帧形式的 ICR 中接受或给出反向取值（NPCA Duration Accepted，1 比特；NPCA Duration Response，13 比特），并引入 NPCA_TIMER_DEVIATION 容差。该解决方案还澄清了切换过程中的 NAV 处理方式：网络分配向量究竟是按每站点跟踪（如 802.11 基线所暗示）还是按每信道跟踪，这一点至关重要，因为若 NPCA 站点将来自 BSS 主信道的陈旧 NAV 值带入 NPCA 主信道，可能错误地将 NPCA 信道视为忙碌状态，从而完全无法接入该信道；拟议文本要求 NPCA 站点为 NPCA 主信道单独维护基本 NAV 与 BSS 内 NAV，在 NPCA 主信道上运行时不使用 BSS 主信道的 NAV 进行载波侦听。

第三份提案（DCN 11-26-1946r0，锐捷网络 Ke Zhong 联合 Fachang Guo，日期 2026-09-28）提出对非均等调制（UEQM）——802.11bn 中允许波束成形传输按每条空间流独立分配 QAM 星座以匹配各流信道条件的机制，目前规定适用于 2-4 条空间流——进行两项扩展。该提案提议将 UEQM 扩展至 5-8 条空间流，理由是 D2.0 基线已支持最多 8 条空间流的均等调制（EQM）传输，且 8 天线 Wi-Fi 产品在消费级与企业级部署中都日益普及；该提案还另外提议将 UEQM 的适用范围从单用户/非 MU-MIMO 传输扩展至 MU-MIMO 分配。该提案勾勒了第一项扩展所需的信令变更（将 UEQM 发送/接收支持与最大 Nss 字段，以及波束成形与编码/UEQM 模式子字段，从 2 比特扩展至 3 比特），但指出具体文本与完整信令设计仍待确定。

另外，第四份提案（DCN 11-26-1949r0，锐捷网络 Yuqing Zheng 联合 Ke Zhong 及 Fachang Guo，日期 2026-09-28）提议为 MLME-POWERMGT.request 原语新增一个可选的 MLPMLinkBitmap 参数，使 SME 发出的单次请求即可表达 802.11bn 多链路省电管理（MLPM）信令所用的完整逐链路省电模式位图，而现有原语的单一 PowerManagementMode 参数无法在单次请求中表达完整的多链路位图。

## Key technical points (EN)

- **LB296 CR wave (D2.0/D2.1)**: 7 new rev=0 LB296 CR documents this window from Huawei (Ross Jian Yu, Shravan Kumar Kalyankar), LG (Dongguk Lim, Hongwon Lee), OPPO (Liuming Lu), plus multiple revised CRs from NXP (Liwen Chu), Huawei (Arik Klein), Qualcomm (Alfred Asterjadhi, Abhishek Patil) and others -- routine ballot comment-resolution, not detailed individually.
- **DCN 11-26-1988r0 -- Urgent MAPC/Co-TDMA CID** -- Samat Shabdanov (MediaTek) et al. CID 20664: commenter proposed changing "shall set" to "may set" for TXOP Return Solicited; the authors' "Revised" resolution makes TXOP-return support symmetric (receive + transmit) and relaxes the coordinated AP's TXOP-return transmission from "shall" to "should," fixing a case where the allocated TXOP is shorter than the ~45-56 us TXOP-return frame itself. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1988&is_year=2026)
- **DCN 11-26-1997r0 -- NPCA_TIMER Update and Negotiation** -- Lei Pan (Hikvision) et al. Proposes resolutions to NPCA CIDs 17799/6190/7154/10639/10640/11037/11188: adds an NPCA_TIMER request/response mechanism (BSRP-Trigger ICF / Multi-STA BlockAck ICR) for extending an NPCA device's stay on the NPCA primary channel beyond the BSS-primary NAV duration (for buffered low-latency data), and clarifies per-STA vs. per-channel NAV handling across NPCA channel switches, with a separate basic/intra-BSS NAV maintained for the NPCA primary channel. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1997&is_year=2026)
- **DCN 11-26-1946r0 -- Considerations on UEQM Extensions** -- Ke Zhong (Ruijie Networks) et al. Proposes extending Unequal Modulation (UEQM) from 2-4 to 5-8 spatial streams (citing existing 8-spatial-stream EQM support and growing 8-antenna product availability) and from SU/non-MU-MIMO to MU-MIMO allocations; sketches a 2-bit-to-3-bit field widening for the first extension, exact signaling TBD. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1946&is_year=2026)
- **DCN 11-26-1949r0 -- MLME SAP Support for Multi-Link Power Management** -- Yuqing Zheng (Ruijie Networks) et al. Proposes an optional MLPMLinkBitmap parameter on MLME-POWERMGT.request so one primitive call can express the full per-link MLPM bitmap, rather than only a single-STA PowerManagementMode value. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1949&is_year=2026)

## Key technical points (ZH)

- **LB296 CR 系列（D2.0/D2.1）**：本窗口内新增 7 份 rev=0 LB296 CR 文档，来自华为（Ross Jian Yu、Shravan Kumar Kalyankar）、LG（Dongguk Lim、Hongwon Lee）、OPPO（Liuming Lu），另有来自 NXP（Liwen Chu）、华为（Arik Klein）、高通（Alfred Asterjadhi、Abhishek Patil）等人的多份 CR 修订版——均为常规投票意见处理，不逐一详述。
- **DCN 11-26-1988r0 · 紧急 MAPC/Co-TDMA CID** —— Samat Shabdanov（联发科）等。CID 20664：评论者建议将 TXOP Return Solicited 的"shall set"改为"may set"；作者的"Revised"解决方案使 TXOP 返回支持对称化（接收 + 发送），并将被协调 AP 发送 TXOP 返回帧由"shall"放宽为"should"，修复了分配的 TXOP 时长短于 TXOP 返回帧本身（约 45-56 微秒）的情形。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1988&is_year=2026)
- **DCN 11-26-1997r0 · NPCA_TIMER 更新与协商** —— Lei Pan（海康威视）等。就 NPCA 相关 CID 17799/6190/7154/10639/10640/11037/11188 提出解决方案：新增 NPCA_TIMER 请求/响应机制（BSRP 触发帧 ICF / 多站点块确认 ICR），允许 NPCA 设备在 NPCA 主信道上的停留超出 BSS 主信道 NAV 时长（用于缓存的低时延数据），并澄清了 NPCA 信道切换过程中 NAV 按每站点还是每信道处理，为 NPCA 主信道单独维护基本/BSS 内 NAV。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1997&is_year=2026)
- **DCN 11-26-1946r0 · UEQM 扩展考量** —— Ke Zhong（锐捷网络）等。提议将非均等调制（UEQM）从 2-4 条空间流扩展至 5-8 条（援引现有 8 空间流 EQM 支持及 8 天线产品日益普及），并将其适用范围从 SU/非 MU-MIMO 扩展至 MU-MIMO 分配；为第一项扩展勾勒了 2 比特扩展至 3 比特的字段方案，具体信令待定。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1946&is_year=2026)
- **DCN 11-26-1949r0 · MLME SAP 对多链路省电管理的支持** —— Yuqing Zheng（锐捷网络）等。提议为 MLME-POWERMGT.request 新增可选的 MLPMLinkBitmap 参数，使单次原语调用即可表达完整的逐链路 MLPM 位图，而非仅表达单一站点的 PowerManagementMode 取值。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1949&is_year=2026)

## Why it matters / what's new (EN)

The KB's mapc-cosr bin has tracked TGbn's MAPC/Co-TDMA and NPCA mechanisms since their introduction; these four contributions are incremental refinements against the D2.0/D2.1 baseline (a TXOP-return capability-unification fix, an NPCA switch-back negotiation addressing a NAV-handling edge case, a UEQM spatial-stream/MU-MIMO scope extension, and an MLME-primitive convenience parameter for multi-link power management) rather than new standalone mechanisms.

## Why it matters / what's new (ZH)

知识库的 mapc-cosr 分类自 TGbn 的 MAPC/Co-TDMA 与 NPCA 机制引入以来一直对其进行跟踪；本次收录的四份提案是针对 D2.0/D2.1 基线的渐进式改进（TXOP 返回能力统一修复、解决 NAV 处理边缘情形的 NPCA 切回协商、UEQM 空间流/MU-MIMO 适用范围扩展，以及面向多链路省电管理的 MLME 原语便利参数），而非全新的独立机制。

## Images

None.
