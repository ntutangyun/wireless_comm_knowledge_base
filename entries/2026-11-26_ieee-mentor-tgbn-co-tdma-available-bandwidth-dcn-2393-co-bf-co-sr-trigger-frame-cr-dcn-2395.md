---
id: 2026-11-26_ieee-mentor-tgbn-co-tdma-available-bandwidth-dcn-2393-co-bf-co-sr-trigger-frame-cr-dcn-2395
date_published: 2026-11-25
date_found: 2026-11-26
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest - 2026-11-24/25: Co-TDMA available bandwidth after TXOP return (DCN 11-26-2393r0) and LB296 CR for Co-BF/Co-SR Trigger frame naming (DCN 2395r0/r1)"
title_zh: "IEEE 802.11 TGbn Mentor 摘要 - 2026-11-24/25：Co-TDMA TXOP 归还后的可用带宽（DCN 11-26-2393r0）与 Co-BF/Co-SR Trigger frame 术语 LB296 CR（DCN 2395r0/r1）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2393&is_year=2026"
source_quality: full
topics: [802.11bn, TGbn, MAPC, Co-TDMA, Co-BF, Co-SR, LB296, comment resolution]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)
TGbn has two new base documents in the Mentor listing after DCN 11-26-2392. DCN 11-26-2393r0, "Thoughts on Available Bandwidth in Co-TDMA" (Shu Yang, Ruijie Networks, with Hang Yang, Ke Zhong and Fachang Guo; uploaded 25 November 07:07 ET, PowerPoint, dated Nov. 2026), addresses a gap it says exists in the current draft: after a Co-TDMA coordinated AP returns the rest of its allocated time with a MAPC TXOP Return frame (or the allocated time ends), the draft does not define how the Co-TDMA coordinating AP determines the available bandwidth for its subsequent PPDU when the medium is idle. The slides recap the TXOP return phase (clause 37.15.2.3.5): the TXOP Return frame carries Duration/ID 0 and no acknowledgement, and the coordinating AP may transmit a PPDU a PIFS later if carrier sense shows an idle medium at the TxPIFS slot boundary and enough TXOP time remains; the CH_BANDWIDTH of that PPDU is the same or narrower than that of the PPDU that obtained the TXOP (37.15.2.3.3). The problem statement cites the existing EDCA TXOP bandwidth rules (10.23.2.5, tied to the moment the TXOP is obtained, and 10.23.2.8, tied to the preceding PPDU), neither of which is defined for the TXOP return phase, and quotes CID 20049, which asks which bandwidth the coordinating AP should use after getting a TXOP return.

The proposal in 2393r0 is that, after the TXOP return or the end of the allocated time, if carrier sense indicates an idle medium, the coordinating AP may determine the available bandwidth for its subsequent PPDU from the CCA state of the secondary channels during the PIFS interval, not exceeding the CH_BANDWIDTH of the PPDU that obtained the TXOP. The document states this lets the coordinating AP recover bandwidth that the coordinated AP did not occupy during the allocated time. It ends with a straw poll (SP1) asking whether the group agrees with the proposed rule. References listed are IEEE P802.11bn/D2.1, P802.11REVmf/D3.1 and 11-26/1613r4 (LB296 comments on D2.0).

The second document is DCN 11-26-2395, "LB296 CR for Co-BF/Co-SR Trigger or Co-BF/Co-SR Trigger frame" (Xiaoman Shen and Jason Yuchen Guo, Huawei; r0 uploaded 24 November 22:17 ET by "Huawei", r1 at 22:28 ET adding a missed author; document date 2026-11-25; baseline is spec D2.2). It proposes resolutions for ten LB296 CIDs: 14829, 15755, 14843, 14846, 14850, 14857, 14859, 14860, 14865 and 15756. All are terminology comments on "Co-BF Trigger" / "Co-SR Trigger" versus "… Trigger frame"; eight ask for "… frame", and two (15755, 15756) ask for consistent use and lean towards "… frame". All ten are resolved "Revised". Eight note that the changes were already incorporated in D2.2 by the editor and CID 14735, with no further change needed. For CID 14829 two remaining instances in 37.15.2.1.3 are changed in the document's proposed text. For CID 14860 the document says only the first occurrence (the frame itself) should read "Co-SR Trigger frame", a change already in D2.2, while "Co-SR Trigger padding delay" and "Co-SR Trigger Padding Delay field" stay unchanged as defined parameter and field names in the MAPC element.

## Summary (ZH)
在 DCN 11-26-2392 之后，TGbn 在 Mentor 列表中新增两份基础文档。DCN 11-26-2393r0《Thoughts on Available Bandwidth in Co-TDMA》（Shu Yang，锐捷网络，署名另有 Hang Yang、Ke Zhong、Fachang Guo；11 月 25 日 07:07 ET 上传，PowerPoint，文稿日期 2026 年 11 月）针对文稿称现行草案存在的空白：Co-TDMA 被协调 AP 通过 MAPC TXOP Return 帧归还剩余分配时间（或分配时间结束）后，草案没有规定当介质空闲时，Co-TDMA 协调 AP 如何确定其后续 PPDU 的可用带宽。幻灯片回顾了 TXOP 归还阶段（第 37.15.2.3.5 条）：TXOP Return 帧的 Duration/ID 为 0 且无确认；若载波侦听在 TxPIFS 时隙边界显示介质空闲且 TXOP 剩余时间足够，协调 AP 可在一个 PIFS 之后发送 PPDU；该 PPDU 的 CH_BANDWIDTH 与获得 TXOP 的 PPDU 相同或更窄（37.15.2.3.3）。问题陈述援引现有 EDCA TXOP 带宽规则（10.23.2.5，与获得 TXOP 的时刻挂钩；10.23.2.8，与前一 PPDU 挂钩），二者均未针对 TXOP 归还阶段定义，并引用 CID 20049：询问协调 AP 在获得 TXOP 归还后应使用哪个带宽。

2393r0 的提议是：在 TXOP 归还后或分配时间结束后，若载波侦听显示介质空闲，协调 AP 可根据 PIFS 期间次信道的 CCA 状态确定其后续 PPDU 的可用带宽，且不超过获得该 TXOP 的 PPDU 的 CH_BANDWIDTH。文档称这使协调 AP 能够回收被协调 AP 在分配时间内未占用的带宽。文档以草测投票（SP1）结束，询问是否同意上述拟议规则。列出的参考文献为 IEEE P802.11bn/D2.1、P802.11REVmf/D3.1 以及 11-26/1613r4（针对 D2.0 的 LB296 意见）。

第二份文档是 DCN 11-26-2395《LB296 CR for Co-BF/Co-SR Trigger or Co-BF/Co-SR Trigger frame》（Xiaoman Shen 与 Jason Yuchen Guo，华为；r0 于 11 月 24 日 22:17 ET 以“Huawei”名义上传，r1 于 22:28 ET 补充遗漏的作者；文稿日期 2026-11-25；基线为规范 D2.2）。它为十个 LB296 CID 提出处理方案：14829、15755、14843、14846、14850、14857、14859、14860、14865 和 15756。均为关于“Co-BF Trigger”/“Co-SR Trigger”与“… Trigger frame”的术语意见；八条要求改为“… frame”，两条（15755、15756）要求用法统一并倾向“… frame”。十条均处理为“Revised”。其中八条注明修改已由编辑和 CID 14735 纳入 D2.2，无需进一步修改；CID 14829 在第 37.15.2.1.3 条尚余两处，由文档的拟议文字修改；CID 14860 文档称仅第一处（指帧本身）应改为“Co-SR Trigger frame”，该修改已在 D2.2 中完成，而“Co-SR Trigger padding delay”与“Co-SR Trigger Padding Delay field”作为 MAPC 元素中已定义的参数名与字段名保持不变。

## Key technical points (EN)
- **DCN 11-26-2393r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2393&is_year=2026) Thoughts on Available Bandwidth in Co-TDMA. Shu Yang (Ruijie Networks). Proposes that after TXOP return or end of the allocated time, with an idle medium, the Co-TDMA coordinating AP may set the available bandwidth for its next PPDU from the secondary-channel CCA state during PIFS, capped at the CH_BANDWIDTH of the PPDU that obtained the TXOP; ends with SP1.
- Context stated in the slides: draft clauses 37.15.2.3.5 (TXOP return phase) and 37.15.2.3.3; the Co-TDMA coordinated AP may use a bandwidth narrower than the coordinating AP's during the allocated time; related comment CID 20049.
- **DCN 11-26-2395r0/r1 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2395&is_year=2026) LB296 CR for Co-BF/Co-SR Trigger frame. Xiaoman Shen, Jason Yuchen Guo (Huawei). Ten CIDs (14829, 15755, 14843, 14846, 14850, 14857, 14859, 14860, 14865, 15756); baseline D2.2; resolutions "Revised", mostly "already incorporated in D2.2 by Ed and CID 14735".
- Proposed text in 2395: clause 37.15.2.1.3 (Co-BF transmission sequence) with the Co-BF Trigger frame (9.3.1.22.11.5) sent by the coordinating AP to the coordinated AP before the two simultaneous data PPDUs; TA set to the coordinating AP's MAC address, RA to the coordinated AP's, AP ID fields of the MAPC User Info fields set to the coordinated AP's AP ID, and each data PPDU starting SIFS after the end of the PPDU carrying the trigger. EMCCA-set variants of the TA/RA rules are included in the text.
- Also in the listing (listed only here; not summarized in this entry): DCN 11-26-2396r0 WIN SG November-December 2026 teleconference agendas (Laurent Cariou, Intel) uploaded 25 November 11:34 ET; revisions of DCN 11-26-2362 (TGbq December teleconference agenda, r1/r2).

## Key technical points (ZH)
- **DCN 11-26-2393r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2393&is_year=2026) Thoughts on Available Bandwidth in Co-TDMA。Shu Yang（锐捷网络）。提议在 TXOP 归还后或分配时间结束后、介质空闲时，Co-TDMA 协调 AP 可依据 PIFS 期间次信道的 CCA 状态确定下一 PPDU 的可用带宽，上限为获得该 TXOP 的 PPDU 的 CH_BANDWIDTH；以 SP1 结尾。
- 幻灯片给出的背景：草案第 37.15.2.3.5 条（TXOP 归还阶段）与 37.15.2.3.3 条；Co-TDMA 被协调 AP 在分配时间内可使用比协调 AP 更窄的带宽；相关意见 CID 20049。
- **DCN 11-26-2395r0/r1 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2395&is_year=2026) LB296 CR for Co-BF/Co-SR Trigger frame。Xiaoman Shen、Jason Yuchen Guo（华为）。十个 CID（14829、15755、14843、14846、14850、14857、14859、14860、14865、15756）；基线 D2.2；处理结果为“Revised”，多数注明“已由编辑和 CID 14735 纳入 D2.2”。
- 2395 中的拟议文字：第 37.15.2.1.3 条（Co-BF 传输序列）——协调 AP 在两个同时发送的数据 PPDU 之前向被协调 AP 发送 Co-BF Trigger frame（9.3.1.22.11.5）；TA 设为协调 AP 的 MAC 地址，RA 设为被协调 AP 的 MAC 地址，MAPC User Info 字段的 AP ID 设为被协调 AP 的 AP ID，每个数据 PPDU 在承载触发帧的 PPDU 结束后 SIFS 开始。文字中包含 EMCCA 集合下 TA/RA 规则的变体。
- 同一列表中的其他文档（本条仅列出，不作摘要）：DCN 11-26-2396r0 WIN SG 2026 年 11-12 月电话会议议程（Laurent Cariou，Intel），11 月 25 日 11:34 ET 上传；DCN 11-26-2362（TGbq 12 月电话会议议程）的 r1/r2 版本。

## Why it matters / what's new (EN)
The Co-TDMA TXOP return phase (clause 37.15.2.3.5) already appears in this KB in 2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest, which covers a comment resolution on the TXOP Return Solicited and Rx TXOP Return Support fields; the present item is a different DCN, from Ruijie Networks, that raises one specific open point, bandwidth determination after the hand-back, and ends in a straw poll rather than draft text. The 2395 document is a terminology clean-up in which the document itself records that most of the requested changes were already made in D2.2. Whether either document was presented or adopted cannot be told from the uploads; the contribution queues and telecon agendas (see the 2026-11-25 TGbn digest for the Nov-Jan telecon plan) are the places to watch.

## Why it matters / what's new (ZH)
Co-TDMA 的 TXOP 归还阶段（第 37.15.2.3.5 条）已见于知识库的 2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest，该条涉及对 TXOP Return Solicited 与 Rx TXOP Return Support 字段的意见处理；本条是来自锐捷网络的另一份 DCN，提出一个具体的未决问题——归还后的带宽确定，并以草测投票而非草案文字收尾。2395 文档是术语整理，文档自身记载多数所请修改已在 D2.2 中完成。仅凭上传内容无法判断这两份文档是否被宣讲或采纳；可关注贡献队列与电话会议议程（11 月至 1 月电话会议计划见 2026-11-25 的 TGbn 摘要）。
