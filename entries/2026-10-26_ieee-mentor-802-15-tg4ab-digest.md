---
id: 2026-10-26_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-10-22
date_found: 2026-10-26
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-10-26 (SA-ballot recirculation: compact-frame security counters, optional deferral, MMS clause 10.39 comment resolutions)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-10-26（SA 投票再循环：紧凑帧安全计数器、可选延迟、MMS 第 10.39 条意见处理）"
url: "https://mentor.ieee.org/802.15/documents?is_year=2026&is_group=04ab"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, compact frames, MMS, NBA, AEAD nonce, frame counter, deferral]
topic_primary: uwb-security
topics_secondary: [uwb-ranging]
novelty_score: 2
---

## Summary (EN)

TG4ab uploads dated 19-21 October 2026 (window: uploads after 16 October) are comment-resolution documents against the P802.15.4ab SA-ballot recirculation; the documents use Draft 5.0 (D05) as baseline. The bodies of the five substantive documents below were downloaded and read.

DCN 15-26-0447r0, "SA Ballot Recirc - Proposed Resolutions for rogue security comments" (Rojan Chitrakar and Lei Huang, Huawei), resolves comments Rogue-04, -11, -12, -15, -16, -17, -19, -20, -21, -23, -25, -30, -31 and -32, all from the commenter Tero Kivinen, on the Compact-frame security procedures (9.2.12, 9.2.13), the AEAD nonce (9.3.2.4), the security PIBs (9.5.1, 9.5.11) and 10.39.11.2. Its discussion section states that a new security PIB "secRangingCompactFrameCounter" is added; if the frame counter (made of block, round and slot indices) is less than or equal to it, the outgoing or incoming security procedure fails with status COUNTER_ERROR, otherwise it is updated at the end of a successful procedure. Rogue-04 is dispositioned "Revised" with clarifying text in 6.6.1 and 6.6.2 (security levels 0 and 4 are not used for Compact frames). Rogue-19 swaps the Slot Index and Block Index fields in Figure 2 (the comment cites big-endian ordering in 9.3). Rogue-23 is "Accepted": secCompactFrameSecurityEnabled is renamed macCompactFrameSecurityEnabled. Rogue-31 is "Rejected" because the behaviour is already added by the Rogue-11 and Rogue-16 resolutions.

DCN 15-26-0448r0, "SA Ballot Recirc - Proposed Resolutions for Security - Initialization & Setup" (Rojan Chitrakar and Lei Huang, Huawei), takes the D5.0 text as edited by 26/447 as its baseline and addresses comment R1-282 (Rolfe), which points to a risk if Compact frames used in MMS initialization are not secured. The proposal secures Compact frames used outside the ranging block structure with the same key: a 3-octet Lower Frame Counter carried in the Security Control field forms the lower 3 octets of the nonce, the Block Index is set to 0xffff (so that block index cannot then be used for ranging), two new per-key counters (secOutgoingCompactLowerFrameCounter, secIncomingCompactLowerFrameCounter) provide replay checking, and the first bit of the Supported Message Control Bitmap in the SMIB indicates support. The text uses Table 28 (frames inside the ranging block structure) and Table 29 (outside: Advertising Poll/Response/Confirmation, Start of Ranging, the Public variants, Acquisition).

DCN 15-26-0365r2, "Text changes for optional deferral" (Menzo Wentink, Qualcomm Technologies), addressing comments R1-35, I-112, I-142 and I-167, adds an optional O-QPSK "Deferral" mechanism (new 10.47): when CCA on the current channel is busy and the ranging block duration is at or below a threshold, a transmitter may send DeferralTime microseconds into the slot on a deferred channel taken from mmsNbChannelAllowList by a channel-index offset. It adds a "Deferral Supported" capability bit, a Minimum Deferral Time field (150 to 500 microseconds in 50-microsecond steps) and a Deferral Parameters field in the Controller Association Response (Deferral Time, Deferral Block Duration Threshold of 100/200/300/400 ms, Deferred Channel Index Offset).

DCN 15-26-0440r2, "Resolution of SA ballot comments R1-11, R1-12" (Taeyoung Ha, Samsung Electronics): R1-11 Accepted (in 10.44 change "ERDEVs" to "HRP-ARDEVs", with the stated rationale that UWB data offload to narrowband needs NB, which HRP-ARDEVs support); R1-12 Revised, inserting a note that where CSMA/CA is used for a Narrowband Acquisition Compact frame the maximum number of backoff periods is recommended to be zero, so a busy channel yields CHANNEL_ACCESS_FAILURE and the higher layer can resend with the UWB Per-Session Info updated or set to zero.

DCN 15-26-0408r2, "D05 Comment Resolution Proposals - Section 10.39 (MMS) comments" (Alex Krebs, Apple), lists proposed dispositions for R1-8, -18, -29, -30, -196, -197, -202, -203, -216 to -220, -269 to -272, -279, -280, -285, -286, -291, -314, -316 and -318. Its revision note says r2 updates the proposals for R1-316 and R1-318 and adds Rogue-26. For example R1-8 and R1-269 (adaptive NB TPC) are proposed "Rejected" as out of scope for this recirculation, with the stated reason that D05 has no TPC text change; R1-316 is "Revised" so that, for a field present in both the Advertising Response and Start of Ranging Compact frames, the Start of Ranging value is used unless the field is set independently by initiator and responder.

Folded into the state note, not summarised separately: DCN 15-26-0450r0 (TG4ab agenda details, November 2026), 0427r7-r9 (agenda details Sept-Nov), 0431r5-r6 (TG4ab meeting slides; the schedule slide lists an SA recirculation ballot window of 23 October to 2 November 2026 and the November plenary on 9-12 November), 0380r10 (Consolidated Comments Draft 5.0 spreadsheet) and 0277r7 (comment resolution motions sheet, a template listing motions; formal results are recorded in the minutes). IG FG UWB had one row in the window (DCN 15-26-0445r0, November plenary agenda).

## Summary (ZH)

2026 年 10 月 19-21 日的 TG4ab 上传（窗口：10 月 16 日之后的上传）均为针对 P802.15.4ab SA 投票再循环的意见处理文档，文档以 Draft 5.0（D05）为基线。下列 5 份实质性文档的正文均已下载并阅读。

DCN 15-26-0447r0《SA Ballot Recirc - Proposed Resolutions for rogue security comments》（华为 Rojan Chitrakar、Lei Huang）处理评论人 Tero Kivinen 提出的 Rogue-04、-11、-12、-15、-16、-17、-19、-20、-21、-23、-25、-30、-31、-32，涉及紧凑帧安全流程（9.2.12、9.2.13）、AEAD nonce（9.3.2.4）、安全 PIB（9.5.1、9.5.11）与 10.39.11.2。其讨论部分称新增安全 PIB“secRangingCompactFrameCounter”：若由块、轮、时隙索引构成的帧计数器小于或等于该值，则出站或入站安全流程以 COUNTER_ERROR 失败，否则在成功流程结束时更新。Rogue-04 处理为“Revised”，在 6.6.1、6.6.2 补充说明（紧凑帧不使用安全级别 0 和 4）；Rogue-19 对调图 2 中 Slot Index 与 Block Index 字段（评论引用 9.3 的大端序）；Rogue-23 为“Accepted”：secCompactFrameSecurityEnabled 更名为 macCompactFrameSecurityEnabled；Rogue-31 为“Rejected”，因 Rogue-11 与 Rogue-16 的解决已加入相应行为。

DCN 15-26-0448r0《SA Ballot Recirc - Proposed Resolutions for Security - Initialization & Setup》（华为 Rojan Chitrakar、Lei Huang）以经 26/447 修改后的 D5.0 文本为基线，处理 R1-282（Rolfe）：评论指出 MMS 初始化中使用的紧凑帧若不加安全则存在风险。方案使用同一密钥保护测距块结构之外的紧凑帧：Security Control 字段携带 3 字节 Lower Frame Counter，作为 nonce 的低 3 字节；Block Index 设为 0xffff（因此该块索引不能再用于测距）；新增两个按密钥的计数器（secOutgoingCompactLowerFrameCounter、secIncomingCompactLowerFrameCounter）用于重放检查；SMIB 中 Supported Message Control Bitmap 的第一位指示支持。文中表 28 列出测距块结构内的帧，表 29 列出结构外的帧（Advertising Poll/Response/Confirmation、Start of Ranging、Public 变体、Acquisition）。

DCN 15-26-0365r2《Text changes for optional deferral》（高通 Menzo Wentink），针对 R1-35、I-112、I-142、I-167，新增可选的 O-QPSK“延迟（Deferral）”机制（新 10.47）：当前信道 CCA 忙且测距块时长不超过阈值时，发送方可在时隙内 DeferralTime 微秒处，于 mmsNbChannelAllowList 中按信道索引偏移确定的延迟信道上发送。同时新增“Deferral Supported”能力位、Minimum Deferral Time 字段（150 至 500 微秒，步长 50 微秒），以及控制器关联响应中的 Deferral Parameters 字段（Deferral Time、100/200/300/400 ms 的 Deferral Block Duration Threshold、Deferred Channel Index Offset）。

DCN 15-26-0440r2《Resolution of SA ballot comments R1-11, R1-12》（三星 Taeyoung Ha）：R1-11 为 Accepted（10.44 中把“ERDEVs”改为“HRP-ARDEVs”，所述理由为 UWB 数据卸载到窄带需要 NB，而 NB 由 HRP-ARDEV 支持）；R1-12 为 Revised，插入说明：对窄带 Acquisition 紧凑帧使用 CSMA/CA 时，建议将最大退避次数设为零，信道忙则返回 CHANNEL_ACCESS_FAILURE，由高层以更新后的 UWB Per-Session Info 或将其置零重发。

DCN 15-26-0408r2《D05 Comment Resolution Proposals - Section 10.39 (MMS) comments》（苹果 Alex Krebs）列出 R1-8、-18、-29、-30、-196、-197、-202、-203、-216 至 -220、-269 至 -272、-279、-280、-285、-286、-291、-314、-316、-318 的拟议处理。修订说明称 r2 更新了 R1-316、R1-318 的方案并新增 Rogue-26。例如 R1-8 与 R1-269（自适应 NB TPC）拟为“Rejected”，所述理由是 D05 无 TPC 文本改动、超出本次再循环范围；R1-316 为“Revised”：Advertising Response 与 Start of Ranging 紧凑帧中同时存在的字段，除非由发起方与响应方独立设置，否则采用 Start of Ranging 中的值。

仅并入状态记录、不单独摘要：DCN 15-26-0450r0（TG4ab 11 月议程细节）、0427r7-r9（9-11 月议程细节）、0431r5-r6（TG4ab 会议幻灯片，日程页列出 2026 年 10 月 23 日至 11 月 2 日的 SA 再循环投票窗口及 11 月 9-12 日全会）、0380r10（Consolidated Comments Draft 5.0 表格）、0277r7（意见处理动议表，为模板，正式结果记录在会议纪要中）。IG FG UWB 本窗口仅有一行（DCN 15-26-0445r0，11 月全会议程）。

## Key technical points (EN)

- **DCN 15-26-0447r0 · TG4ab** — SA Ballot Recirc - Proposed Resolutions for rogue security comments. Rojan Chitrakar, Lei Huang (Huawei). Replay check via secRangingCompactFrameCounter; COUNTER_ERROR; Slot/Block Index swap in Figure 2; macCompactFrameSecurityEnabled rename. [document](https://mentor.ieee.org/802.15/documents?is_dcn=447&is_year=2026)
- **DCN 15-26-0448r0 · TG4ab** — SA Ballot Recirc - Proposed Resolutions for Security - Initialization & Setup (R1-282). Rojan Chitrakar, Lei Huang (Huawei). Lower Frame Counter (3 octets) and Block Index 0xffff for Compact frames outside the ranging block structure. [document](https://mentor.ieee.org/802.15/documents?is_dcn=448&is_year=2026)
- **DCN 15-26-0365r2 · TG4ab** — Text changes for optional deferral. Menzo Wentink (Qualcomm Technologies). New clause 10.47; Minimum Deferral Time 150-500 us; Deferral Block Duration Threshold 100-400 ms. [document](https://mentor.ieee.org/802.15/documents?is_dcn=365&is_year=2026)
- **DCN 15-26-0440r2 · TG4ab** — Resolution of SA ballot comments R1-11, R1-12. Taeyoung Ha (Samsung Electronics). ERDEVs to HRP-ARDEVs in 10.44; zero-backoff note for NB Acquisition Compact frames. [document](https://mentor.ieee.org/802.15/documents?is_dcn=440&is_year=2026)
- **DCN 15-26-0408r2 · TG4ab** — D05 Comment Resolution Proposals - Section 10.39 (MMS) comments. Alex Krebs (Apple). Dispositions for about 25 R1 comment IDs, including NB TPC comments proposed Rejected as out of scope. [document](https://mentor.ieee.org/802.15/documents?is_dcn=408&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0447r0 · TG4ab** — SA Ballot Recirc - Proposed Resolutions for rogue security comments。Rojan Chitrakar、Lei Huang（华为）。通过 secRangingCompactFrameCounter 做重放检查；COUNTER_ERROR；图 2 中 Slot/Block Index 对调；macCompactFrameSecurityEnabled 更名。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=447&is_year=2026)
- **DCN 15-26-0448r0 · TG4ab** — SA Ballot Recirc - Proposed Resolutions for Security - Initialization & Setup（R1-282）。Rojan Chitrakar、Lei Huang（华为）。测距块结构之外的紧凑帧使用 3 字节 Lower Frame Counter 与 Block Index 0xffff。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=448&is_year=2026)
- **DCN 15-26-0365r2 · TG4ab** — Text changes for optional deferral。Menzo Wentink（高通）。新增 10.47 条；Minimum Deferral Time 150-500 微秒；Deferral Block Duration Threshold 100-400 ms。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=365&is_year=2026)
- **DCN 15-26-0440r2 · TG4ab** — Resolution of SA ballot comments R1-11, R1-12。Taeyoung Ha（三星）。10.44 中 ERDEVs 改为 HRP-ARDEVs；窄带 Acquisition 紧凑帧的零退避说明。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=440&is_year=2026)
- **DCN 15-26-0408r2 · TG4ab** — D05 Comment Resolution Proposals - Section 10.39 (MMS) comments。Alex Krebs（苹果）。约 25 个 R1 意见编号的处理，其中 NB TPC 相关意见拟以超出范围为由 Rejected。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=408&is_year=2026)

## Why it matters / what's new (EN)

The substantive uploads in this window are dispositions and text changes against the SA-ballot recirculation draft, from Huawei, Qualcomm, Samsung and Apple; the two security documents (447, 448) are both from Huawei, with 448 taking 447's edited text as its baseline. These are proposals by the named contributors; the documents state they do not represent agreed TG views, and adopted outcomes are recorded in minutes and motions, not in these files. The meeting-slide deck lists an SA recirculation ballot window ending 2 November 2026, ahead of the 9-12 November plenary. This KB has no view of the group's earlier history on any of these topics.

## Why it matters / what's new (ZH)

本窗口的实质性上传均为针对 SA 投票再循环草案的处理意见与文本修改，来自华为、高通、三星与苹果；两份安全类文档（447、448）均来自华为，448 以 447 修改后的文本为基线。以上均为所列贡献方的提案；文档声明其不代表 TG 的一致意见，通过结果记录在会议纪要与动议中，而非这些文件。会议幻灯片列出 SA 再循环投票窗口截至 2026 年 11 月 2 日，之后是 11 月 9-12 日全会。本知识库无法看到该小组在这些议题上的更早历史。
