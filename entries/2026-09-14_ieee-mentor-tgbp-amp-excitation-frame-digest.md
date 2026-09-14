---
id: 2026-09-14_ieee-mentor-tgbp-amp-excitation-frame-digest
date_published: 2026-09-13
date_found: 2026-09-14
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 Mentor digest — TGbp AMP frame-format PDTs and the pre-interim push to D1.0 (2026-09-11 to 2026-09-13)"
title_zh: "IEEE 802.11 Mentor 摘要 — TGbp AMP 帧格式 PDT 及会前冲刺 D1.0（2026-09-11 至 2026-09-13）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: partial
topics: [TGbp, AMP, 802.11bp, ambient-power]
topic_primary: amp-iot
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

TGbp (Ambient Power Communication, AMP) uploaded five proposed draft text (PDT) contributions at revision 0, a September-interim meeting agenda and a status snapshot, plus revisions to six existing PDTs, between 2026-09-11 and 2026-09-13 ahead of the Waikoloa interim. The new PDTs are dominated by frame-format work: HaiLa Technologies proposed the MAC header for the AMP Excitation frame — the next instalment of the excitation-frame thread this KB first recorded on 2026-08-03 (DCN 11-26-1508, "PDT AMP Excitation frame format", also Ian Bajaj/HaiLa), and whose own reference baseline is "TGbp D0.5, and PDT 11-26/1508r2" — and separately proposed the AMP Response frame, a new uplink frame format. Huawei contributed an update to the 9.6 Action frame format PDT, and a second HaiLa author filled in transmit and receive specification TBDs and revised the transmitter block diagram and vector-parameter PDTs. Sanechips' status snapshot gives the group's stated goal for the week: improve the 11bp draft with PDT proposals and "approve the release of D1.0 and going for initial WG Ballot".

## Summary (ZH)

TGbp（环境能量通信，AMP）于 2026-09-11 至 2026-09-13 期间、Waikoloa 临时会议召开前，上传了五份修订版本为 0 的拟稿文本（PDT）、一份九月临时会议议程与一份状态快照，并修订了六份既有 PDT。新提交的 PDT 以帧格式工作为主：HaiLa Technologies 提出了 AMP Excitation 帧的 MAC 头——这是本知识库于 2026-08-03 首次记录的激励帧工作线（DCN 11-26-1508《PDT AMP Excitation frame format》，同为 Ian Bajaj/HaiLa）的后续分期，该文档自述的参考基线即为"TGbp D0.5 与 PDT 11-26/1508r2"；同一单位另外提出了 AMP Response 帧这一新的上行帧格式。华为贡献了 9.6 节 Action 帧格式 PDT 的更新，HaiLa 的另一位作者补齐了发送与接收规范中的待定项（TBD），并修订了发射机框图与矢量参数两份 PDT。Sanechips 的状态快照给出了该组本周的既定目标：以 PDT 提案改进 11bp 草案，并"批准发布 D1.0、进入首轮工作组投票"。

## Key technical points (EN)

- **DCN 11-26-1805r0 · TGbp** — "PDT MAC Header of AMP Excitation frame format". Ian Bajaj (HaiLa Technologies), uploaded 11-Sep-2026. The MAC-header instalment of the existing excitation-frame thread: its abstract states "The reference document is TGbp D0.5, and PDT 11-26/1508r2", 1508 being the excitation-frame-format PDT this KB recorded on 2026-08-03 (`2026-08-03_ieee-mentor-tgbp-digest`). Scope is specifically **bistatic backscatter**: the text adds subclause 9.10.7, in which the AMP Excitation frame is sent by the AMP Energizer to indicate that the AMP PPDU carrying it is an AMP DL Type 4 PPDU supporting bistatic backscattering. Per the group's adopted motions the frame carries no Frame Body, and all MAC-header bits other than the Type field are set to disregard (all zeros) to ease energizer implementation; the header is Frame Control (8 bits) / ID (16 bits) / Truncated FCS (8 bits). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1805&is_year=2026)
- **DCN 11-26-1598r0 · TGbp** — "PDT AMP Response Frame Format". Ian Bajaj (HaiLa Technologies), uploaded 11-Sep-2026. Draft text for a new subclause 9.10.x defining an AMP frame that carries the uplink response from a non-AP AMP STA, built on adopted motions #110, #163 and #164: an Operation Status field carrying the transmission time the non-AP AMP STA can sustain, reported in the UL frame sent in response to a request from the AMP AP, and an Operation Mode Factor field carrying a fixed multiplicative factor of that reported time to express how long the STA can sustain idle-mode operation. STAs that cannot report sustainable transmission time do not respond to the request. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1598&is_year=2026)
- **DCN 11-26-1561r0 · TGbp** — "PDT 9.6 Action frame format - updates 1". Rojan Chitrakar (Huawei), uploaded 12-Sep-2026. The one non-HaiLa PDT in the window. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1561&is_year=2026)
- **DCN 11-26-1542r0 · TGbp** — "PDT Transmit and Receiver Specification TBDs". Nelson Costa (HaiLa Technologies), uploaded 11-Sep-2026. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1542&is_year=2026)
- **DCN 11-26-1596r0/r1 · TGbp** — "PDT Control of energizer function within an AMP energizer". Ian Bajaj (HaiLa Technologies); r0 uploaded 11-Sep-2026, r1 on 13-Sep-2026. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1596&is_year=2026)
- **DCN 11-26-1821r0 · TGbp** — "tgbp-snapshot-sep-2026". Bo Sun (Sanechips), uploaded 13-Sep-2026. The chair's status snapshot: the 11bp SFD was frozen after the July 2026 plenary and the group is now focused on draft improvement through PDT proposals; nine teleconferences were held since July; nine TGbp meetings are scheduled for the September interim. The stated goal for the week is to "improve 11bp spec draft with PDT proposals" and to "approve the release of D1.0 and going for initial WG Ballot". The deck's timeline puts the D1.0 letter ballot at September 2026, D2.0 recirculation at March 2027, initial SA ballot (D4.0) at August 2027, and RevCom/SASB approval at May 2028. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1821&is_year=2026)
- **DCN 11-26-1480r0 · TGbp** — "tg-bp-meeting-agenda-for-sep-interim-2026". Bo Sun (Sanechips), uploaded 12-Sep-2026. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1480&is_year=2026)
- Revised, not new: DCN 1496r6/r7 (PDT AMP SP Advert frame) and 1521r5 (PDT AMP Group Ack frame format), both Ian Bajaj; 1541r2 (PDT Transmitter Block Diagram) and 1543r2 (PDT TRIGVECTOR/PHYCONFIG_VECTOR parameters), both Nelson Costa; 1597r1 (PDT Elements), Ian Bajaj — all HaiLa Technologies, uploaded 11–13-Sep-2026. The SP Advert frame was first recorded in this KB on 2026-05-18 (`2026-05-18_ieee-mentor-tgbp-antwerp-digest`, DCN 940r5) and the Group Ack frame format on 2026-08-03.

## Key technical points (ZH)

- **DCN 11-26-1805r0 · TGbp** — "AMP Excitation 帧格式 MAC 头 PDT"。Ian Bajaj（HaiLa Technologies），2026-09-11 上传。这是既有激励帧工作线的 MAC 头分期：其摘要写明"参考文档为 TGbp D0.5 与 PDT 11-26/1508r2"，而 1508 正是本知识库 2026-08-03 记录的激励帧格式 PDT（`2026-08-03_ieee-mentor-tgbp-digest`）。其适用范围专门针对**双基地反向散射（bistatic backscatter）**：文本新增子条款 9.10.7，规定 AMP Excitation 帧由 AMP 能量激励器（Energizer）发出，用以指示承载该帧的 AMP PPDU 是支持双基地反向散射的 AMP DL Type 4 PPDU。按该组已通过的动议，该帧不含帧体（Frame Body），且 MAC 头中除 Type 字段之外的全部比特均置为 disregard（全 0），以简化能量激励器的实现；帧头结构为 Frame Control（8 比特）/ ID（16 比特）/ Truncated FCS（8 比特）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1805&is_year=2026)
- **DCN 11-26-1598r0 · TGbp** — "AMP Response 帧格式 PDT"。Ian Bajaj（HaiLa Technologies），2026-09-11 上传。为新子条款 9.10.x 提出拟稿文本，定义一种承载非 AP AMP STA 上行响应的 AMP 帧，依据已通过的动议 #110、#163 与 #164：Operation Status 字段携带该非 AP AMP STA 可持续维持的发送时间，在响应 AMP AP 请求的上行帧中上报；Operation Mode Factor 字段则携带一个对该上报时间的固定倍乘因子，用以表示该 STA 可维持空闲模式运行的时长。不支持上报可持续发送时间的 STA 不对该请求作出响应。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1598&is_year=2026)
- **DCN 11-26-1561r0 · TGbp** — "9.6 节 Action 帧格式 PDT——更新 1"。Rojan Chitrakar（华为），2026-09-12 上传。本窗口内唯一一份非 HaiLa 提交的 PDT。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1561&is_year=2026)
- **DCN 11-26-1542r0 · TGbp** — "发送与接收规范待定项 PDT"。Nelson Costa（HaiLa Technologies），2026-09-11 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1542&is_year=2026)
- **DCN 11-26-1596r0/r1 · TGbp** — "AMP 能量激励器内能量激励功能控制 PDT"。Ian Bajaj（HaiLa Technologies）；r0 于 2026-09-11 上传，r1 于 2026-09-13 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1596&is_year=2026)
- **DCN 11-26-1821r0 · TGbp** — "tgbp-snapshot-sep-2026"。Bo Sun（Sanechips），2026-09-13 上传。主席的状态快照：11bp 的 SFD 已在 2026 年 7 月全会后冻结，该组现阶段专注于通过 PDT 提案改进草案；7 月以来共举行了九次电话会议；九月临时会议期间安排了九场 TGbp 会议。本周既定目标是"以 PDT 提案改进 11bp 规范草案"并"批准发布 D1.0、进入首轮工作组投票"。文稿中的时间表将 D1.0 信件投票定在 2026 年 9 月、D2.0 再循环定在 2027 年 3 月、首轮 SA 投票（D4.0）定在 2027 年 8 月、RevCom 与 SASB 批准定在 2028 年 5 月。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1821&is_year=2026)
- **DCN 11-26-1480r0 · TGbp** — "2026 年 9 月临时会议 TGbp 会议议程"。Bo Sun（Sanechips），2026-09-12 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1480&is_year=2026)
- 修订而非新提交：DCN 1496r6/r7（AMP SP Advert 帧 PDT）与 1521r5（AMP Group Ack 帧格式 PDT），均为 Ian Bajaj；1541r2（发射机框图 PDT）与 1543r2（TRIGVECTOR/PHYCONFIG_VECTOR 参数 PDT），均为 Nelson Costa；1597r1（Elements PDT），Ian Bajaj——均属 HaiLa Technologies，2026-09-11 至 13 上传。SP Advert 帧最早由本知识库于 2026-05-18 记录（`2026-05-18_ieee-mentor-tgbp-antwerp-digest`，DCN 940r5），Group Ack 帧格式则记录于 2026-08-03。

## Why it matters / what's new (EN)

The week's TGbp uploads are best read against the goal the chair's snapshot states outright: approve the release of D1.0 and go for the initial Working Group letter ballot. That explains both the volume of same-group revisions (six existing PDTs touched in three days) and the shape of the new text, which closes out specific gaps rather than opening broad new topics. Two of the new PDTs are frame formats. DCN 1805 continues the AMP Excitation frame thread that has been running since at least DCN 959 (May 2026) and DCN 1508 (August 2026), adding the MAC header for the specific case of a bistatic-backscatter excitation PPDU (AMP DL Type 4) with every header bit but the Type field disregarded — an implementation-simplifying choice aimed at the energizer. DCN 1598 is arguably the more novel of the two, defining an uplink AMP Response frame that carries a battery-free device's sustainable transmission time and an idle-mode factor derived from it — the first time this KB has recorded TGbp draft text in which the tag reports its own energy budget back to the AP. DCN 1542's transmit/receive specification TBDs and DCN 1561's Action frame update fill remaining holes on the way to a balloted draft.

## Why it matters / what's new (ZH)

本周 TGbp 的上传最好对照主席快照中明确写出的目标来看：批准发布 D1.0 并进入首轮工作组信件投票。这既解释了同组修订的密集程度（三天内触及六份既有 PDT），也解释了新文本的形态——它们补的是具体缺口，而非开辟宽泛的新议题。新提交的 PDT 中有两份属于帧格式工作。DCN 1805 延续了至少自 DCN 959（2026 年 5 月）与 DCN 1508（2026 年 8 月）起就在推进的 AMP Excitation 帧工作线，为双基地反向散射激励 PPDU（AMP DL Type 4）这一特定场景补上 MAC 头，其中除 Type 字段外的全部头部比特均置为 disregard——这是为简化能量激励器实现而作的选择。DCN 1598 在两者中新颖性可能更高：它定义了一种上行 AMP Response 帧，承载无电池设备可持续维持的发送时间，以及由该时间推导出的空闲模式因子——这是本知识库首次记录 TGbp 拟稿文本中出现标签向 AP 回报自身能量预算的设计。DCN 1542 的发送/接收规范待定项与 DCN 1561 的 Action 帧更新，则填补了通往可投票草案途中剩余的空缺。

## Images

None.
