---
id: 2026-11-03_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-02
date_found: 2026-11-03
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-03 (SA-ballot recirculation: compact-frame replay protection, one-to-many Final compact frame, optional NB channel deferral, SOR message control 2)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-03（SA 投票再循环：紧凑帧重放保护、一对多 Final 紧凑帧、可选 NB 信道推迟、SOR 消息控制值 2）"
url: "https://mentor.ieee.org/802.15/documents?is_year=2026&is_group=04ab"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, NBA MMS, compact frames, frame counter, replay protection, DS-TWR, deferral, narrowband O-QPSK]
topic_primary: uwb-security
topics_secondary: [uwb-ranging]
novelty_score: 3
---

## Summary (EN)

Four TG4ab documents were uploaded on 2 November 2026 (ET), all comment-resolution or text-change proposals on P802.15.4ab D05 SA-ballot comments (R1-numbered). Each carries the standard notice that it does not represent agreed views of the 802.15 WG or TG4ab. IG FG UWB had no new uploads (latest remains DCN 15-26-0445r0, 18 October).

DCN 15-26-0447r1, "SA Ballot Recirc - Proposed Resolutions for rogue security comments" (Rojan Chitrakar, Lei Huang of Huawei), answers a set of security comments with 'Rogue-' CIDs from Tero Kivinen, centered on how MMS compact frames are secured. Its common thread is replay protection through a frame counter that is built from the ranging block, round and slot indices. The revised dispositions add a new key-descriptor element, secRangingCompactFrameCounter (integer, 0x0000000000 to 0xffffffffff). Outgoing and incoming compact-frame security procedures (9.2.12 and 9.2.13) gain a "set and check the frame counter" step that returns COUNTER_ERROR when the counter is smaller than or equal to the stored value, and a "store frame counter" step after a successful operation. Figure 2 (the frame counter used in the compact-frame nonce) swaps the Block Index and Slot Index positions so that the most significant part comes first (Rogue-19). Further changes: a note that a second secured compact frame in the same block/round/slot with the same key fails with COUNTER_ERROR (Rogue-21); a note that keying material is expected to be updated when the counter reaches its maximum (Rogue-20); security levels 0 and 4 return UNSUPPORTED_SECURITY for compact frames and an unsecured compact frame passes with SUCCESS when CompactSecurityEnabled is FALSE (Rogue-04, with matching text in 6.6.2); secCompactFrameSecurityEnabled is renamed macCompactFrameSecurityEnabled (Rogue-23, Accepted); and a recommendation that Poll compact frames carrying block and round indices use an authenticity-providing security level (1, 2 or 3) rather than a confidentiality level (5, 6 or 7), because the indices are needed to unsecure the frames (Rogue-30). Rogue-31 (an explanatory note) and Rogue-32 (renaming Key Index to Compact Key Index) are proposed as Rejected, the first because the counter behaviour is already specified in clause 9 and the second because the context is clear. Revision 1 changed the Rogue-04 text.

DCN 15-26-0417r1, "Resolution of selected SA ballot comments - Group J" (Billy Verso, Skyworks; Mickael Maman, ST), proposes a "Revised" disposition for R1-50, R1-13 and R1-17-related comments by adding a One-to-many Final compact frame (new Compact Frame ID 19, subclause 10.39.11.3.21) for non-interleaved double-sided two-way ranging (DS-TWR). The frame carries an Initiator RPA Hash, a Message ID, a Message Content field and an FCS. With Message Control zero the content is five zero octets used for clock-frequency-offset estimation; with Message Control one it carries a Number of Responders, a Round-trip Time List of 5-octet values (one per responder, in response order, with error codes allowed) and an optional Predicted Poll to Final Time, from which each responder derives its reply time. A sentence is added at the end of 10.39.7.4 allowing the Final sub-round for one-to-many ranging with an aggregated initiator report. The document states that detailed one-to-many procedures combining the basic one-to-many MMS mode with interleaving modes 2, 3, 5 and 6 are left to use-case developers.

DCN 15-26-0365r3, "Text changes for optional deferral" (Menzo Wentink, Qualcomm), responds to R1-35 and R1-311 (initial-ballot comments I-112, I-142, I-167) and defines an optional mechanism, new subclause 10.47, by which a device in a session with DeferralActive equal to 1 may send its O-QPSK transmission on another narrowband channel, a deferral time into the slot, when CCA on the current channel is busy and the ranging block duration is at or below a threshold. The deferred channel is the entry of mmsNbChannelAllowList at the current index plus a configured offset, modulo list length. Supporting changes: the Capability Information field gains "Deferral Supported" (bit 11) and "Minimum Deferral Time" (bits 12-14, 150 to 500 microseconds in 50-microsecond steps); the Controller Association Response gains a Deferral Parameters field (Deferral Time, Deferral Block Duration Threshold of 100 to 400 ms, Deferred Channel Index Offset), flagged by a new Session Configuration bit 3. The baseline is IEEE P802.15.4ab/D05, September 2026.

DCN 15-26-0460r0, "Resolution of SA ballot comments R1-317" (Taeyoung Ha, Jinho Choi, Samsung; document date 14 October), answers a question about whether MMS ranging can be set up with Start of Ranging (SOR) message control value 2, which lacks MMS PHY/MAC configuration. The proposed disposition is "Revised": the SOR message content for value 2 gains Allocated Relative Block Index, Allocated Round Index, Allocated Slot Index, Block Description List Length and Block Description List fields alongside the existing Control Phase Time Offset, NB Channel Seed and NB Full Channel Map, so that a responder can locate the slot where the Ranging Control Message (RCM) is sent and use it to determine the hyper-block structure. Any missing configuration is delivered in a Poll compact frame with Message Control 1 (one-to-one) or 7 or 8 (one-to-many), with matching text in 10.39.3.2 and 10.39.3.8.

Housekeeping: the consolidated comments spreadsheet DCN 380r12, comment-resolution motions DCN 277r8, meeting slides DCN 431r7 and agenda details DCN 427r11 were last revised on 27 October and are unchanged.

## Summary (ZH)

2026 年 11 月 2 日（美东时间）新上传 4 份 TG4ab 文档，均为针对 P802.15.4ab D05 SA 投票意见（R1 编号）的处理或文本修改提案，各文档均声明不代表 802.15 工作组或 TG4ab 的一致意见。IG FG UWB 无新上传（最新仍为 10 月 18 日的 DCN 15-26-0445r0）。

DCN 15-26-0447r1《SA Ballot Recirc - Proposed Resolutions for rogue security comments》（华为 Rojan Chitrakar、Lei Huang）处理 Tero Kivinen 提出的一组编号为 'Rogue-' 的安全意见，围绕 MMS 紧凑帧如何加密保护。共同主线是用由测距块、轮次和时隙索引组成的帧计数器实现重放保护。修订后的处理方案在密钥描述符中新增元素 secRangingCompactFrameCounter（整数，0x0000000000 至 0xffffffffff）；紧凑帧的发送与接收安全流程（9.2.12、9.2.13）新增“设置并检查帧计数器”步骤——计数器小于或等于已存值时返回 COUNTER_ERROR，并在成功后新增“存储帧计数器”步骤。图 2（紧凑帧 nonce 中的帧计数器）对调 Block Index 与 Slot Index 的位置，使高位在前（Rogue-19）。其他改动：说明同一密钥下在同一 block/round/slot 内再发送或接收第二个受保护紧凑帧将以 COUNTER_ERROR 失败（Rogue-21）；说明计数器达到最大值时预期更新密钥材料（Rogue-20）；紧凑帧的安全等级 0 与 4 返回 UNSUPPORTED_SECURITY，CompactSecurityEnabled 为 FALSE 时未保护的紧凑帧以 SUCCESS 通过（Rogue-04，6.6.2 同步补充文字）；secCompactFrameSecurityEnabled 更名为 macCompactFrameSecurityEnabled（Rogue-23，Accepted）；建议携带块与轮次索引的 Poll 紧凑帧使用提供数据认证的安全等级（1、2 或 3），而非提供保密性的等级（5、6 或 7），因为索引是解保护所必需的（Rogue-30）。Rogue-31（解释性注释）与 Rogue-32（将 Key Index 改名为 Compact Key Index）的拟定处理为 Rejected，前者理由是 clause 9 已规定计数器行为，后者理由是上下文已明确。r1 修改了 Rogue-04 的文字。

DCN 15-26-0417r1《Resolution of selected SA ballot comments - Group J》（Skyworks Billy Verso；ST Mickael Maman）对 R1-50、R1-13 及与 R1-17 相关的意见给出“Revised”处理：新增一对多 Final 紧凑帧（紧凑帧 ID 19，条款 10.39.11.3.21），用于非交织双边双向测距（DS-TWR）。该帧含 Initiator RPA Hash、Message ID、Message Content 和 FCS。Message Control 为 0 时内容为 5 个全零字节，用于时钟频偏估计；为 1 时携带 Number of Responders、往返时间列表（每个响应方一个 5 字节值，按应答顺序排列，允许使用错误码）以及可选的 Predicted Poll to Final Time，响应方据此推算自身应答时间。10.39.7.4 末尾增加一句，允许在带汇总发起方报告的一对多测距中使用 Final 子轮次。文档说明，基本一对多 MMS 模式与交织模式 2、3、5、6 结合的详细一对多流程留给用例开发者。

DCN 15-26-0365r3《Text changes for optional deferral》（高通 Menzo Wentink）回应 R1-35 与 R1-311（初次投票意见 I-112、I-142、I-167），定义可选机制（新增 10.47 条）：DeferralActive 为 1 的会话中，当前信道 CCA 忙且测距块时长不超过门限时，设备可在时隙内推迟一个 deferral time 后改在另一个窄带信道发送 O-QPSK。推迟信道取 mmsNbChannelAllowList 中当前索引加配置偏移（对列表长度取模）所指的信道。配套改动：Capability Information 字段新增“Deferral Supported”（第 11 位）与“Minimum Deferral Time”（第 12-14 位，150 至 500 微秒，步长 50 微秒）；Controller Association Response 新增 Deferral Parameters 字段（Deferral Time、100 至 400 ms 的 Deferral Block Duration Threshold、Deferred Channel Index Offset），由 Session Configuration 新增的第 3 位指示。基线为 IEEE P802.15.4ab/D05（2026 年 9 月）。

DCN 15-26-0460r0《Resolution of SA ballot comments R1-317》（三星 Taeyoung Ha、Jinho Choi；文档日期 10 月 14 日）回应 Start of Ranging（SOR）消息控制值 2 缺少 MMS PHY/MAC 配置时能否进行 MMS 测距的问题。拟定处理为“Revised”：值 2 的 SOR 消息内容在原有 Control Phase Time Offset、NB Channel Seed、NB Full Channel Map 之外，新增 Allocated Relative Block Index、Allocated Round Index、Allocated Slot Index、Block Description List Length 与 Block Description List，使响应方能够定位发送测距控制消息（RCM）的时隙，并据此确定超块结构。缺失的配置通过 Message Control 为 1（一对一）或 7、8（一对多）的 Poll 紧凑帧补充，10.39.3.2 与 10.39.3.8 作相应修改。

事务性文件：意见汇总表 DCN 380r12、意见处理动议 DCN 277r8、会议幻灯片 DCN 431r7、议程细节 DCN 427r11 均为 10 月 27 日最后修订，本日无变化。

## Key technical points (EN)

- **DCN 15-26-0447r1 · TG4ab** — Rogue security comments (Rogue-04, -11, -12, -15, -16, -17, -19, -20, -21, -23, -25, -30, -31, -32). Huawei (Chitrakar, Huang). New secRangingCompactFrameCounter; COUNTER_ERROR if the block/round/slot counter does not increase; Block Index/Slot Index order swapped in Figure 2; authenticity-level security recommended for Poll compact frames with block/round indices; Rogue-31 and -32 proposed Rejected. [document](https://mentor.ieee.org/802.15/documents?is_dcn=447&is_year=2026)
- **DCN 15-26-0417r1 · TG4ab** — Group J (R1-50, R1-13, R1-17). Skyworks (Verso), ST (Maman). One-to-many Final compact frame (ID 19, 10.39.11.3.21) for non-interleaved DS-TWR; per-responder 5-octet round-trip time list and optional predicted poll-to-final time. [document](https://mentor.ieee.org/802.15/documents?is_dcn=417&is_year=2026)
- **DCN 15-26-0365r3 · TG4ab** — Optional deferral (R1-35, R1-311). Qualcomm (Wentink). New subclause 10.47: NB O-QPSK transmission on a deferred channel when CCA is busy; capability bits 11-14; deferral time 150-500 microseconds; block-duration threshold 100-400 ms. [document](https://mentor.ieee.org/802.15/documents?is_dcn=365&is_year=2026)
- **DCN 15-26-0460r0 · TG4ab** — R1-317 (SOR message control 2 and MMS configuration). Samsung (Ha, Choi). Allocated block/round/slot indices and block description list added to SOR content; missing configuration via Poll compact frame (Message Control 1, 7 or 8). [document](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0447r1 · TG4ab** — Rogue 安全意见（Rogue-04、-11、-12、-15、-16、-17、-19、-20、-21、-23、-25、-30、-31、-32）。华为（Chitrakar、Huang）。新增 secRangingCompactFrameCounter；block/round/slot 计数器不递增时返回 COUNTER_ERROR；图 2 中 Block Index 与 Slot Index 次序对调；带块/轮次索引的 Poll 紧凑帧建议使用认证级安全；Rogue-31、-32 拟定 Rejected。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=447&is_year=2026)
- **DCN 15-26-0417r1 · TG4ab** — Group J（R1-50、R1-13、R1-17）。Skyworks（Verso）、ST（Maman）。为非交织 DS-TWR 新增一对多 Final 紧凑帧（ID 19，10.39.11.3.21）；每个响应方一个 5 字节往返时间，另有可选的预测 poll-to-final 时间。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=417&is_year=2026)
- **DCN 15-26-0365r3 · TG4ab** — 可选推迟机制（R1-35、R1-311）。高通（Wentink）。新增 10.47 条：CCA 忙时在推迟信道发送 NB O-QPSK；能力位 11-14；推迟时间 150-500 微秒；块时长门限 100-400 ms。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=365&is_year=2026)
- **DCN 15-26-0460r0 · TG4ab** — R1-317（SOR 消息控制值 2 与 MMS 配置）。三星（Ha、Choi）。SOR 内容新增分配的块/轮次/时隙索引与块描述列表；缺失配置经 Poll 紧凑帧（Message Control 1、7 或 8）补充。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)

## Why it matters / what's new (EN)

The four documents show where the D05 text for MMS compact frames is being tightened during recirculation: replay protection for secured compact frames, a Final frame for one-to-many DS-TWR, an optional way to move an O-QPSK transmission to another narrowband channel when CCA is busy, and the information a responder needs to join NBA MMS from a Start of Ranging frame. All are proposals by the named contributors; none records an adopted resolution, and the dispositions (including the proposed Rejected ones) may change before any motion. The deferral document is an optional mechanism, and the one-to-many Final frame defines only the frame, leaving procedures to implementers.

## Why it matters / what's new (ZH)

这四份文档反映了 D05 中 MMS 紧凑帧文本在再循环阶段的收紧方向：受保护紧凑帧的重放保护、一对多 DS-TWR 的 Final 帧、CCA 忙时把 O-QPSK 发送移到另一窄带信道的可选方式，以及响应方通过 Start of Ranging 帧加入 NBA MMS 所需的信息。均为所列贡献方的提案，没有任何一份记录已通过的决议，处理意见（包括拟定的 Rejected）在动议前可能变化。推迟机制为可选；一对多 Final 帧仅定义帧格式，流程留给实现方。

## Images

None.
