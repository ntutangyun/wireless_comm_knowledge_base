---
id: 2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest
date_published: 2026-10-13
date_found: 2026-10-14
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq digest -- three IMMW revisions: mmW-link info advertised on sub-7 GHz, Service Interval/Epoch timing in place of beacons, and beam-establishment negotiation parameters"
title_zh: "IEEE 802.11 TGbq 摘要 —— 三份 IMMW 文档修订：经 sub-7 GHz 链路通告毫米波链路信息、以服务间隔/服务时点替代信标的定时、以及波束建立协商参数"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bq"
source_quality: full
topics: [TGbq, IMMW, mmWave, Beacon, RNR, Critical Updates, Beam Establishment]
topic_primary: mmwave-bq
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

On 2026-10-13 three TGbq presentations (PowerPoint decks) were uploaded as new revisions: DCN 11-26-1354r2 and DCN 11-26-1646r1 (both Abhishek Patil, Qualcomm, et al.) and DCN 11-26-1303r3 (Hongwon Lee, LG Electronics, with LG co-authors). All three concern the IMMW mmWave link and how it is described and set up from the sub-7 GHz link; each ends with draft straw-poll text for the group. The documents' own dates are 21 August 2026 (1354), 2026-09 (1646) and 2026-07-16 (1303). The group-level Mentor listing was read for titles, authors and upload times, and the three decks were downloaded and read in full.

DCN 11-26-1354r2 (Mentor title "IMMW - Sub7 based discovery of mmW link"; slide title "Advertising mmW link info on sub7 link(s)") starts from the stated tension between TGbn's rules to reduce the footprint of UHR and later generations in the Beacon frame (to address beacon bloating) and TGbq's requirement to provide mmW link information on sub-7 GHz links. The deck gives the reason that broadcast on the mmW band is expensive: broadcast frames would have to be duplicated on every AP sector. Its proposal: a sub-7 GHz AP affiliated with an IMMW AP MLD does not include the IMMW Operation or IMMW Capabilities element in its Beacon (SP #1 excludes the IMMW Capabilities element from the Beacon and leaves inclusion of the IMMW Operation element TBD); the Beacon's Reduced Neighbor Report (RNR) and Basic Multi-Link element indicate that collocated IMMW AP(s) exist, with operating class/channel identifying the mmW link and the Link ID identifying each link; full IMMW Operation/Capabilities content is carried in ML probe responses, (Re)Association Responses and ST preparation/execution responses; and mmW parameter changes are signalled through the existing critical-update mechanism on the sub-7 GHz link (the deck lists a new Update Type value 2 in the TIM element, an incremented update counter and the corresponding (e)BPCC). The deck closes with three straw polls (SP #1 to #3) covering the AP-side rules, the non-AP STA's IMMW Capabilities element in (Re)Association Request and ST preparation request, and RNR/Neighbor Report handling (one new 1-bit field in the BSS Information field to identify an IMMW AP; whether the 17-octet TBTT Information field needs extension is marked TBD).

DCN 11-26-1646r1 ("Timing references on mmW link") starts from TGbq having agreed that an AP on the mmW link will not transmit a Beacon frame, while operations such as TBTT, TBTT offset, Beacon Interval and DTIM are described in terms of Beacon transmission. It proposes a clean-slate set of mmW-link timing terms: a Service Interval (SI) equivalent to the Beacon Interval, a Service Epoch (SE) equivalent to a TBTT that occurs every SI, and a Special Service Epoch (SSE) equivalent to a DTIM, defined as a multiple of SEs. When a sub-7 GHz link reports mmW link information, the (Neighbor AP) TBTT Offset field points to the next SE, events such as a channel change are counted in SEs, and the SE also corresponds to the time at which an IMMW AP, if configured, transmits sector sweep frames. TSF-based operations, including cross-link TWT, are stated to be unchanged because the IMMW AP keeps its own TSF. The closing straw poll asks for the equivalent of Beacon Interval to be described as a "Service Epoch Interval (SEI)" (exact name marked TBD).

DCN 11-26-1303r3 ("Beam establishment procedure negotiation detail") builds on Motions 31 and 32, which the deck says set the parameters for upcoming beam establishment on the mmWave link (target start time of the training sequence, numbers M and N of transmit and receive sectors to be trained) and defined an Antenna Pattern Reciprocity capability for an IMMW STA. The deck argues that, because negotiation happens over sub-7 GHz, the STA sending the request need not be the initiator on the mmWave link, so a role indication should be a negotiated parameter; that an STA with antenna pattern reciprocity can set the number of Tx or Rx sweeps to 1; and that for several STAs at once (the example given is an AR/VR headset and controllers) the initiator should use the maximum Rx-sweep count among peers and may use a broadcast Tx sweep indicated with one bit. It sketches a 1-octet "BE Control" field (B0 role, B1 broadcast Tx sweep, B2 to B7 reserved), a Status Code for accept/reject, and a table of which parameters the AP dictates or the non-AP STA may recommend (the AP determines the final start time). It also raises 3-way negotiation (e.g., a confirmation frame after 'Reject with Suggestion') and closes with six straw polls for SFD text, including multiple beam-establishment modules within a single BESP, per-module result reporting, and an N-way (N >= 2) sub-7 GHz frame exchange for negotiating with multiple IMMW STAs.

## Summary (ZH)

2026 年 10 月 13 日，TGbq 上传了三份演示文稿的新修订版：DCN 11-26-1354r2 与 DCN 11-26-1646r1（均为高通 Abhishek Patil 等）以及 DCN 11-26-1303r3（LG 电子 Hongwon Lee 等）。三份文档均围绕 IMMW 毫米波链路，讨论如何通过 sub-7 GHz 链路描述和建立该链路，并在末尾给出供小组使用的草案意向投票文本。文档自注日期分别为 2026 年 8 月 21 日（1354）、2026-09（1646）和 2026-07-16（1303）。本条目依据 Mentor 列表读取标题、作者和上传时间，并下载通读了三份文档。

DCN 11-26-1354r2（Mentor 登记标题《IMMW - Sub7 based discovery of mmW link》；幻灯片标题《在 sub7 链路上通告毫米波链路信息》）的出发点是：TGbn 规则要求减小 UHR 及后续代际在 Beacon 帧中的占用（以应对 Beacon 膨胀），而 TGbq 需要在 sub-7 GHz 链路上提供毫米波链路信息，二者存在冲突。文档给出的理由是毫米波频段上的广播代价高昂：广播帧需要在 AP 的每个扇区上重复发送。提议如下：与 IMMW AP MLD 关联的 sub-7 GHz AP 不在其 Beacon 中携带 IMMW Operation 或 IMMW Capabilities 元素（SP #1 规定 Beacon 不携带 IMMW Capabilities 元素，IMMW Operation 元素是否携带待定）；Beacon 中的 RNR 与 Basic Multi-Link 元素指示同址 IMMW AP 的存在，用操作类/信道标识毫米波链路、用 Link ID 区分各链路；完整的 IMMW Operation/Capabilities 内容通过 ML 探测响应、（重）关联响应以及 ST 准备/执行响应携带；毫米波参数的变化经 sub-7 GHz 链路上现有的关键更新机制通告（文档列出 TIM 元素中新的 Update Type 取值 2、更新计数器加 1 及对应的 (e)BPCC 加 1）。文档末尾有三项意向投票（SP #1 至 #3），分别涉及 AP 侧规则、非 AP STA 在（重）关联请求及 ST 准备请求中携带 IMMW Capabilities 元素，以及 RNR/邻居报告的处理（BSS Information 字段新增 1 比特用于标识 IMMW AP；TBTT Information 字段的 17 字节格式是否需要扩展标注为待定）。

DCN 11-26-1646r1（《毫米波链路上的定时参考》）的出发点是：TGbq 已同意毫米波链路上的 AP 不发送 Beacon 帧，而 TBTT、TBTT 偏移、Beacon 间隔和 DTIM 等操作都以 Beacon 发送来描述。文档提出一套全新的毫米波链路定时术语：服务间隔（SI，对应 Beacon 间隔）、服务时点（SE，对应 TBTT，每个 SI 出现一次）以及特殊服务时点（SSE，对应 DTIM，定义为 SE 的整数倍）。当 sub-7 GHz 链路报告毫米波链路信息时，（邻居 AP）TBTT 偏移字段指向下一个 SE，信道切换等事件以 SE 计数，且 SE 也对应 IMMW AP（若已配置）发送扇区扫描帧的时刻。基于 TSF 的操作（包括跨链路 TWT）保持不变，因为 IMMW AP 维护自己的 TSF。末尾的意向投票要求把与 Beacon 间隔对应的概念称为“服务时点间隔（SEI）”（具体名称待定）。

DCN 11-26-1303r3（《波束建立流程协商细节》）以动议 31 和 32 为基础；文档称这两项动议确定了毫米波链路即将进行的波束建立的参数（训练序列的目标开始时间、待训练的发送与接收扇区数 M 和 N），并为 IMMW STA 定义了天线方向图互易性能力。文档主张：由于协商经 sub-7 GHz 完成，发送请求的 STA 在毫米波链路上不一定是发起方，因此角色指示应作为协商参数；具备天线方向图互易性的 STA 可把发送或接收扫描次数设为 1；多个 STA 同时进行时（文中举例为 AR/VR 头显与手柄），发起方应取各对端 Rx 扫描次数的最大值，并可用 1 比特指示广播 Tx 扫描。文档勾画了 1 字节的“BE Control”字段（B0 角色、B1 广播 Tx 扫描、B2 至 B7 保留）、用于接受/拒绝的状态码，以及一张说明哪些参数由 AP 决定、哪些可由非 AP STA 建议的表格（最终开始时间由 AP 确定）。文档还讨论了三方协商（如“带建议的拒绝”后的确认帧），并以六项 SFD 文本意向投票收尾，包括在单个 BESP 内执行多个波束建立模块、按模块上报结果，以及经 sub-7 GHz 为多个 IMMW STA 协商的 N 方（N >= 2）帧交换。

## Key technical points (EN)

- **DCN 11-26-1354r2 · TGbq** -- IMMW - Sub7 based discovery of mmW link (slide title: Advertising mmW link info on sub7 link(s)): IMMW Operation/Capabilities elements kept out of the sub-7 GHz Beacon (SP #1 excludes the IMMW Capabilities element from the Beacon and leaves inclusion of the IMMW Operation element TBD); presence signalled via RNR + Basic Multi-Link element; full profile via ML probe/(Re)Association/ST responses; updates via critical updates over the sub-7 GHz link; SP #1 to #3 attached. Abhishek Patil (Qualcomm) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1354&is_year=2026).
- **DCN 11-26-1646r1 · TGbq** -- Timing references on mmW link: Service Interval (SI), Service Epoch (SE), Special Service Epoch (SSE) as mmW-link counterparts of Beacon Interval, TBTT and DTIM; TSF-based operations incl. cross-link TWT unchanged. Abhishek Patil (Qualcomm) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1646&is_year=2026).
- **DCN 11-26-1303r3 · TGbq** -- Beam establishment procedure negotiation detail: negotiated initiator/responder role, reciprocity-based reduction of sweeps to 1, multi-STA case with maximum Rx-sweep count and a 1-bit broadcast Tx sweep, 1-octet BE Control field sketch, Status Code; 3-way negotiation; six SFD straw polls (multiple modules within one BESP, per-module result reporting, N-way sub-7 GHz exchange with multiple IMMW STAs). Hongwon Lee (LG Electronics) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1303&is_year=2026).
- Also uploaded 2026-10-13, not read in detail: TGbn LB296 CR revisions (1992r1, 1965r2 Huawei; 1671r5/r6 Intel P-EDCA; agenda 1911r8), TGm 1633r11 (Intel, control-frame protection CR for REVmf D3.0), TGbq 2012r0 (Visio source of a figure in DCN 1644), 2011r0 (TGbn September 2026 meeting minutes, NTT; uploaded 2026-10-12).

## Key technical points (ZH)

- **DCN 11-26-1354r2 · TGbq** —— IMMW - Sub7 based discovery of mmW link（幻灯片标题：在 sub7 链路上通告毫米波链路信息）：IMMW Operation/Capabilities 元素不放入 sub-7 GHz 的 Beacon（SP #1 规定 Beacon 不携带 IMMW Capabilities 元素，IMMW Operation 元素是否携带待定）；通过 RNR 与 Basic Multi-Link 元素指示存在；完整配置经 ML 探测/（重）关联/ST 响应获得；更新经 sub-7 GHz 链路的关键更新机制通告；附 SP #1 至 #3。Abhishek Patil（高通）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1354&is_year=2026)。
- **DCN 11-26-1646r1 · TGbq** —— 毫米波链路上的定时参考：以服务间隔（SI）、服务时点（SE）、特殊服务时点（SSE）对应 Beacon 间隔、TBTT 和 DTIM；基于 TSF 的操作（含跨链路 TWT）不变。Abhishek Patil（高通）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1646&is_year=2026)。
- **DCN 11-26-1303r3 · TGbq** —— 波束建立流程协商细节：可协商的发起方/响应方角色、利用互易性把扫描次数降为 1、多 STA 情形下取最大 Rx 扫描次数并用 1 比特指示广播 Tx 扫描、1 字节 BE Control 字段草案、状态码；三方协商；六项 SFD 意向投票（单个 BESP 内多个模块、按模块上报结果、经 sub-7 GHz 与多个 IMMW STA 的 N 方帧交换）。Hongwon Lee（LG 电子）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1303&is_year=2026)。
- 同日其他上传（未详读）：TGbn LB296 CR 修订（华为 1992r1、1965r2；英特尔 1671r5/r6 P-EDCA；议程 1911r8）、TGm 1633r11（英特尔，REVmf D3.0 控制帧保护 CR）、TGbq 2012r0（DCN 1644 中某图的 Visio 源文件）、2011r0（NTT，TGbn 2026 年 9 月会议纪要；2026-10-12 上传）。

## Why it matters / what's new (EN)

These are revisions of earlier TGbq contributions, so they show where the IMMW design discussion stands rather than introducing new base documents. Taken together they cover where mmW-link information is carried (sub-7 GHz Beacon, probe and association frames), how mmW-link timing is expressed without a Beacon (SI/SE/SSE), and which parameters are negotiated over the sub-7 GHz link for beam establishment. The straw polls in the decks are proposals; the decks do not record their outcome. See also the earlier TGbq digests in this KB (2026-09-09 and 2026-09-11) for the IMMW baseline.

## Why it matters / what's new (ZH)

这些是此前 TGbq 文档的修订版，反映的是 IMMW 设计讨论的现状，而非新的基础文档。三者分别涉及：毫米波链路信息在哪里携带（sub-7 GHz 的 Beacon、探测与关联帧）、在没有 Beacon 的情况下毫米波链路定时如何表达（SI/SE/SSE），以及经 sub-7 GHz 链路为波束建立协商哪些参数。文档中的意向投票均为提案，文档本身未记录表决结果。IMMW 的基线可参见本知识库此前的 TGbq 摘要（2026-09-09 与 2026-09-11）。

## Images

None.
