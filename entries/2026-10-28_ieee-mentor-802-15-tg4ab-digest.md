---
id: 2026-10-28_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-10-27
date_found: 2026-10-28
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-10-28 (SA-ballot recirculation: duty-cycle-triggered CCA proposed for narrowband O-QPSK channel access, angle/chip-order/association fixes)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-10-28（SA 投票再循环：窄带 O-QPSK 信道接入拟采用占空比触发 CCA，角度/码片顺序/关联字段修正）"
url: "https://mentor.ieee.org/802.15/documents?is_year=2026&is_group=04ab"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, NBA MMS, narrowband O-QPSK, channel access, CCA, coexistence, UNII-3, UNII-5]
topic_primary: uwb-ranging
topics_secondary: [uwb-standards]
novelty_score: 3
---

## Summary (EN)

Two new TG4ab comment-resolution documents and two revisions were uploaded on 27 October 2026. All are proposals against P802.15.4ab Draft 5.0 (D05) in the SA-ballot first recirculation. The largest is a joint proposal on channel access for the narrowband (NB) O-QPSK PHY used by narrowband-assisted multi-millisecond ranging (NBA MMS).

DCN 15-26-0458r0, "Resolution to NB Channel access comments on 15.4ab R1 SA Ballot" (Pooria Pakrooh, Bin Tian, Menzo Wentink of Qualcomm; Carlos Aldana of Meta; Bin Qian, Rojan Chitrakar of Huawei; Pelin Salem of Cisco; Wenzheng Li, Yi-Hsiu Wang of Calterah), resolves 32 comments (R1-307, -213, -194, -34, -312, -310, -308, -221, -38, -37, -36, -31, -19, -9, -190, -33, -20, -195, -193, -191, -188, -309, -212, -24, -23, -21, -39, -305, -192, -22, -211, -210). The commenters asked, from different directions, that the D05 text, in which listen-before-talk (LBT) for NB O-QPSK transmissions in the 5800 MHz and 6200 MHz bands is only "recommended" or "may", become a mandatory mechanism with defined parameters: some wanted LBT always, some a duty-cycle threshold (3%, 5% and 7% figures appear in the comments), and others asked for a minimum CCA duration (16 microseconds, tied to the 802.11 SIFS gap), a bound between CCA and transmission start (30 microseconds), an energy-detect (ED) threshold (one comment cites -75 dBm/MHz, another a transmit-power-dependent formula based on an ETSI proposal), a ban on CCA mode 4, and CCA before multi-slot O-QPSK packets and NB data offload (clause 10.44). One comment notes that Chinese MIIT rules require at least 25 microseconds of pre-transmission CCA for load-based devices at 5.8 GHz.

The proposed disposition for the whole set is "Revised". It replaces the text of subclause 10.39.8.3 (Channel access) so that, for O-QPSK PHY transmissions in clauses 10.39 and 10.44 on channels 0-249 in the 5800 and 6200 MHz bands, a device first determines its NB transmission duty cycle, defined as the maximum ratio of total NB transmission duration to any 200 ms observation window. When that duty cycle is greater than 7%, the device shall perform CCA mode 1 or CCA mode 3a before each O-QPSK transmission, with a minimum CCA duration of 16 microseconds and an ED threshold equal to the locally required value or otherwise -75 dBm/MHz; if the channel is sensed free the transmission occurs immediately, and if busy the device avoids transmitting. Subclause 10.39.4.2 would change from "may use" LBT to applying the 10.39.8.3 requirements, and the opportunistic NB Acquisition frame text in 10.39.3.3 changes from "recommended" to referencing the same rule. The document's supporting analysis tabulates NB message duty cycles at 10 Hz ranging with a 250 kb/s NB rate and a 200 ms window: it states that all practical one-to-one ranging modes stay below 3%, responders in one-to-many with up to 7 responders below 1.4%, and the initiator below 7%, so the mandatory CCA would not bind these modes; at 5 Hz or lower the initiator stays under 7% for up to 16 responders. Alternatives visible only in the comment table (separate initiator/responder thresholds of 7% and 3%, or a 5% threshold) are not in the proposed resolution.

DCN 15-26-0457r0, "Proposed Resolution for SA ballot comments R1-265, R1-266, R1-268, R1-295, R1-204 and R1-298" (Wenzheng Li, Calterah), is a discussion draft of six technical fixes. R1-265/R1-266 (both from Rolfe): CapabilityInformation is removed from the ignored-parameter lists for controller association in MLME-ASSOCIATE.request and .indication (10.21.6.1.2/3), because clause 10.41.4.1 defines it for that procedure (Accepted). R1-268: Round Index is a 15-bit field (0-32767) per Figure 10-248 rather than 16 bits (Accepted). R1-295: Azimuth and Elevation in the Processed Target Feature Report IE (10.40.6.6) become 16-bit two's-complement values in units of 2*pi/(2^16-1) radians (Revised; the document says the quantization mapping remains open). R1-204 (Schmidt): symbol numbering for the even-indexed time-reversal rule in Config #7 symbol spreading (13.2.5) starts at index zero at the first PHR symbol, continues through tail-bit symbols and the payload without reset, and restarts per PPDU (Revised). R1-298: the chip transmission order for the 5800/6200 MHz bands (13.2.8) is described with the selected spreading factor (4, 8, 16 or 32) instead of always ending at chip c31 (Accepted).

Revisions: DCN 15-26-0454r1 (Riku Pirhonen, NXP) drops R1-17 from the set (r0, uploaded 26 October, included it; the consolidated comment sheet DCN 380r12 now notes that a new CR will be proposed based on DCN 354) and keeps R1-206, -275, -276 and Rogue-36 on 10.39.7 interleaving modes. DCN 15-26-0455r1 (Sven Zeisberg, Zigpos) changes R1-43 ("minimize" to "reduce", subclause 10.39.3.3) from Accepted to Revised and keeps R1-52 as Accepted. Housekeeping uploads: consolidated comments Draft 5.0 spreadsheet DCN 380 r11/r12, comment-resolution motions DCN 277r8, meeting slides DCN 431r7, agenda details DCN 427r11. IG FG UWB had no new uploads (latest remains DCN 15-26-0445r0, 18 October).

## Summary (ZH)

2026 年 10 月 27 日新上传 2 份 TG4ab 意见处理文档并有 2 份修订，均为 SA 投票第一次再循环中针对 P802.15.4ab Draft 5.0（D05）的提案。其中最大的一份是针对窄带辅助多毫秒测距（NBA MMS）所用窄带（NB）O-QPSK PHY 信道接入的联合提案。

DCN 15-26-0458r0《Resolution to NB Channel access comments on 15.4ab R1 SA Ballot》（高通 Pooria Pakrooh、Bin Tian、Menzo Wentink；Meta Carlos Aldana；华为 Bin Qian、Rojan Chitrakar；思科 Pelin Salem；Calterah 的 Wenzheng Li、Yi-Hsiu Wang）处理 32 条意见（R1-307、-213、-194、-34、-312、-310、-308、-221、-38、-37、-36、-31、-19、-9、-190、-33、-20、-195、-193、-191、-188、-309、-212、-24、-23、-21、-39、-305、-192、-22、-211、-210）。意见人从不同角度要求：D05 中 5800 MHz 与 6200 MHz 频段 NB O-QPSK 发送的先听后说（LBT）目前仅为“建议”或“可以”，应改为带明确参数的强制机制——有的要求始终 LBT，有的要求按占空比门限触发（意见中出现 3%、5%、7%），还有的要求最短 CCA 时长（16 微秒，对应 802.11 SIFS 间隙）、CCA 到发送起点的上限（30 微秒）、能量检测（ED）门限（一条意见引用 -75 dBm/MHz，另一条引用依赖发射功率的 ETSI 提案公式）、禁用 CCA 模式 4，以及对多时隙 O-QPSK 包和 NB 数据卸载（10.44 条）要求先做 CCA。一条意见指出中国 MIIT 规则要求 5.8 GHz 负载型设备至少 25 微秒的发射前 CCA。

整组意见的拟定处理为“Revised”：改写 10.39.8.3（信道接入）条，对 10.39 与 10.44 条中 5800/6200 MHz 频段信道 0-249 上的 O-QPSK PHY 发送，设备先确定其 NB 发送占空比（定义为任意 200 ms 观察窗内 NB 总发送时长之比的最大值）。占空比大于 7% 时，须在每次 O-QPSK 发送前执行 CCA 模式 1 或 3a，最短 CCA 时长 16 微秒，ED 门限取当地法规要求值，否则取 -75 dBm/MHz；信道空闲则立即发送，忙则不发送。10.39.4.2 由“may use”LBT 改为适用 10.39.8.3 的要求，10.39.3.3 中机会式 NB Acquisition 帧由“建议”改为引用同一规则。文档的支撑分析按 10 Hz 测距、NB 速率 250 kb/s、200 ms 窗口列出 NB 报文占空比：所有实用的一对一测距模式低于 3%，一对多（最多 7 个响应方）响应方低于 1.4%、发起方低于 7%，因此强制 CCA 对这些模式不起约束；测距频率不高于 5 Hz 时，发起方在最多 16 个响应方下仍低于 7%。仅见于意见表的其他方案（发起方 7%/响应方 3% 分设门限，或 5% 门限）不在拟定处理方案中。

DCN 15-26-0457r0《Proposed Resolution for SA ballot comments R1-265, R1-266, R1-268, R1-295, R1-204 and R1-298》（Calterah Wenzheng Li）是含六项技术修正的讨论稿。R1-265/R1-266（均为 Rolfe）：在 MLME-ASSOCIATE.request 与 .indication（10.21.6.1.2/3）中，控制器关联时的忽略参数列表去掉 CapabilityInformation，因为 10.41.4.1 为该流程定义了该字段（Accepted）。R1-268：Round Index 按图 10-248 为 15 位字段（0-32767），而非 16 位（Accepted）。R1-295：Processed Target Feature Report IE（10.40.6.6）中的 Azimuth 与 Elevation 改为 16 位补码有符号数，单位 2π/(2^16-1) 弧度（Revised；文档称量化映射仍待定）。R1-204（Schmidt）：Config #7 符号扩频（13.2.5）中偶数索引符号的时间反转规则，符号索引从 PHR 第一个符号起记为 0，经尾比特符号与载荷连续计数、不在 PHR/载荷边界复位，每个 PPDU 重新从 0 开始（Revised）。R1-298：5800/6200 MHz 频段的码片发送顺序（13.2.8）按所选扩频因子（4、8、16 或 32）描述，而非总以 c31 结尾（Accepted）。

修订：DCN 15-26-0454r1（NXP Riku Pirhonen）把 R1-17 从处理集中移除（10 月 26 日上传的 r0 含该条；意见汇总表 DCN 380r12 现注明将基于 DCN 354 另提处理），保留 10.39.7 交织模式相关的 R1-206、-275、-276 和 Rogue-36。DCN 15-26-0455r1（Zigpos Sven Zeisberg）把 R1-43（10.39.3.3，“minimize”改“reduce”）由 Accepted 改为 Revised，R1-52 保持 Accepted。事务性上传：意见汇总 Draft 5.0 表 DCN 380 r11/r12、意见处理动议 DCN 277r8、会议幻灯片 DCN 431r7、议程细节 DCN 427r11。IG FG UWB 无新上传（最新仍为 10 月 18 日的 DCN 15-26-0445r0）。

## Key technical points (EN)

- **DCN 15-26-0458r0 · TG4ab** — Resolution to NB channel access comments on the R1 SA ballot (32 comments). Qualcomm, Meta, Huawei, Cisco, Calterah authors. Proposed 10.39.8.3: NB duty cycle over a 200 ms window; above 7% CCA mode 1/3a before each O-QPSK transmission; CCA at least 16 microseconds; ED threshold per local rule else -75 dBm/MHz; applies to clauses 10.39 and 10.44 on channels 0-249 in the 5800/6200 MHz bands. Supporting tables: one-to-one modes below 3% duty cycle at 10 Hz. [document](https://mentor.ieee.org/802.15/documents?is_dcn=458&is_year=2026)
- **DCN 15-26-0457r0 · TG4ab** — Proposed resolution for R1-265, -266, -268, -295, -204, -298. Wenzheng Li (Calterah). Controller-association CapabilityInformation, 15-bit Round Index, 16-bit Azimuth/Elevation encoding (mapping open), symbol numbering for even-symbol chip reversal in Config #7, spreading-factor-aware chip order. [document](https://mentor.ieee.org/802.15/documents?is_dcn=457&is_year=2026)
- **DCN 15-26-0454r1 · TG4ab** — SA ballot R1 resolutions 206, 275, 276, Rogue 36. Riku Pirhonen (NXP). R1-17 withdrawn from this document (new CR to follow based on DCN 354). [document](https://mentor.ieee.org/802.15/documents?is_dcn=454&is_year=2026)
- **DCN 15-26-0455r1 · TG4ab** — SA ballot R1 resolutions 43 and 52. Sven Zeisberg (Zigpos). R1-43 now Revised, R1-52 Accepted ("minimizing" to "reducing"). [document](https://mentor.ieee.org/802.15/documents?is_dcn=455&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0458r0 · TG4ab** — 针对 R1 SA 投票中 NB 信道接入意见的处理（32 条）。作者来自高通、Meta、华为、思科、Calterah。拟定 10.39.8.3：按 200 ms 窗口计算 NB 占空比；高于 7% 时每次 O-QPSK 发送前执行 CCA 模式 1/3a；CCA 不少于 16 微秒；ED 门限按当地规定否则 -75 dBm/MHz；适用于 5800/6200 MHz 频段信道 0-249 上 10.39 与 10.44 条的发送。支撑表格：10 Hz 下一对一模式占空比低于 3%。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=458&is_year=2026)
- **DCN 15-26-0457r0 · TG4ab** — R1-265、-266、-268、-295、-204、-298 的拟定处理。Calterah Wenzheng Li。控制器关联的 CapabilityInformation、15 位 Round Index、16 位 Azimuth/Elevation 编码（映射待定）、Config #7 偶数符号码片反转的符号编号、与扩频因子相关的码片顺序。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=457&is_year=2026)
- **DCN 15-26-0454r1 · TG4ab** — SA ballot R1 resolutions 206, 275, 276, Rogue 36。NXP Riku Pirhonen。R1-17 移出本文档（后续基于 DCN 354 另提处理）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=454&is_year=2026)
- **DCN 15-26-0455r1 · TG4ab** — SA ballot R1 resolutions 43 and 52。Zigpos Sven Zeisberg。R1-43 现为 Revised，R1-52 为 Accepted（“minimizing”改“reducing”）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=455&is_year=2026)

## Why it matters / what's new (EN)

The D05 text left channel access for the narrowband assist radio in the 5.8 and 6 GHz bands optional, which is where 802.11 devices share the spectrum. DCN 458 carries a concrete, jointly authored mandatory-CCA rule with numbers (7% duty cycle over 200 ms, 16 microsecond CCA, -75 dBm/MHz default ED). It is a proposal by the named contributors and does not represent agreed views of the 802.15 WG or TG4ab; the thresholds may change before any motion, and the document itself notes the analysis assumes a 250 kb/s NB rate.

## Why it matters / what's new (ZH)

D05 将 5.8 与 6 GHz 频段（与 802.11 设备共享）窄带辅助射频的信道接入留作可选；DCN 458 给出了带具体数值的联合署名强制 CCA 规则（200 ms 窗口 7% 占空比、16 微秒 CCA、默认 ED 门限 -75 dBm/MHz）。这是所列贡献方的提案，不代表 802.15 工作组或 TG4ab 的一致意见；门限在任何动议前可能变化，文档自身也注明分析假设 NB 速率为 250 kb/s。
