---
id: 2026-10-26_ieee-mentor-tgbn-dso-subband-negotiation-validity-rru-ru-term-digest
date_published: 2026-10-24
date_found: 2026-10-26
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-10-26 (DSO subband preference negotiation, DSO subband validity after channel updates, and RRU/RU terminology in LB296 CID 13996)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-10-26（DSO 子带偏好协商、信道更新后的 DSO 子带有效性，以及 LB296 CID 13996 中 RRU/RU 术语）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn"
source_quality: full
topics: [TGbn, 802.11bn, UHR, DSO, DBE, OMP, RRU, LB296]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr]
novelty_score: 2
---

## Summary (EN)

Since the previous digest, TGbn uploaded three new technical documents between 22 and 24 October 2026 (the TGbn September-November teleconference minutes, DCN 11-26-2034r1, were also revised on 24 October and are not detailed here). Two concern Dynamic Subband Operation (DSO), the mode in the P802.11bn draft in which a DSO AP directs selected UHR non-AP STAs to a specified DSO subband. DCN 11-26-2069r0 (Abhishek Chaturvedi et al., Samsung Electronics) proposes a DSO subband negotiation for 20 MHz-only DSO non-AP STAs. DCN 11-26-2064r0 (Mengying Lin et al., Ruijie Networks) proposes a condition under which DSO mode is disabled after a channel update. The third, DCN 11-26-2060r0 (Jiyang Bai, TCL), is a comment resolution for LB296 CID 13996 on the use of the terms RRU and RU.

DCN 2069r0 states as its problem that the draft lets a DSO non-AP STA indicate a prioritised subband for 80 MHz usage but has no equivalent for 20 MHz usage, so the subband assignment is at the sole discretion of the DSO AP. It proposes that a 20 MHz-only DSO non-AP STA signals a prioritised preference list in one of three forms: Option 1, an autonomous list in which a count field and an index field give the priority (index 0 highest; count optionally limited to 3); Option 2, an Access Category based list with at most four AC-to-subband mappings (AC_VI, AC_VO, AC_BE, AC_BK), each naming the single most preferred subband; Option 3, a TID based list with at most eight TID-to-subband mappings. The slides use a 160 MHz BSS with four allowed 20 MHz subband options as the example. The document also proposes that the list be updated and re-signalled when the BSS operating bandwidth changes through the Dynamic Bandwidth Expansion (DBE) procedure, using a modification of the UHR operating mode and parameter (OMP) update procedure; it gives the example that the allowed subband options change from two at 80 MHz to four at 160 MHz. The negotiation element may be carried in the (Re)Association Request, the Multi-Link Reconfiguration Request, the DSO-related Initial Control Frame, or the UHR OMP Request, and the DSO AP may accept, offer an alternative, or reject, with the AP retaining final authority over the assignment. The document marks the exact element format, applicable status codes and whether the STA preference is advisory or binding as TBD.

DCN 2064r0 states that the current DSO procedure defines behaviour when the BSS bandwidth changes, when DBE is enabled or its bandwidth updated, and when the Disabled Subchannel Bitmap is updated, and keeps DSO mode enabled while the assigned DSO subband remains within the applicable bandwidth. It notes that the procedure does not check whether all 20 MHz subchannels of the subband have been punctured. The proposed text disables DSO mode for the STA if the DSO subband is no longer within the applicable BSS or DBE bandwidth, or if all 20 MHz subchannels within the subband are indicated as punctured in the applicable Disabled Subchannel Bitmap, and states that the STA shall not send a UHR OMP request to disable DSO mode in that case. The document says the change adds no new signalling or operating mode.

DCN 2060r0 addresses CID 13996, whose comment says that D2.0 uses both "52-tone RRU" and "52-tone RU" for the same 11ax-style resource unit. The document defines RU (HE), MRU (EHT) and DRU (distributed-tone RU), and says RRU originally meant the non-DRU group (RU plus MRU) rather than one specific RU type. It proposes that specific units be written "xxx-tone RU", "xxx-tone + yyy-tone MRU" and "DBWzz xxx-tone DRU", that RRU be kept only for the general non-DRU concept, and it lists the D2.1 locations (clauses 38.3.8, 38.3.10.11, 38.3.10.12.2, 38.3.15.10.2, 38.3.15.11.3, 38.3.16.7, 38.3.16.9, 38.3.16.10 and 38.3.26.4.4) where "xxx-tone RRU" would change to "xxx-tone RU". The resolution is REVISED: change all "xxx-tone RRU" terms to "xxx-tone RU".

## Summary (ZH)

自上一期摘要以来，TGbn 于 2026 年 10 月 22 日至 24 日新上传三份技术文档（TGbn 9-11 月电话会议纪要 DCN 11-26-2034r1 也在 10 月 24 日更新，此处不展开）。其中两份涉及动态子带操作（DSO）——P802.11bn 草案中由 DSO AP 指示选定的 UHR non-AP STA 迁移到指定 DSO 子带的模式。DCN 11-26-2069r0（Abhishek Chaturvedi 等，三星电子）提出面向仅支持 20 MHz 的 DSO non-AP STA 的 DSO 子带协商。DCN 11-26-2064r0（Mengying Lin 等，锐捷网络）提出信道更新后关闭 DSO 模式的条件。第三份 DCN 11-26-2060r0（Jiyang Bai，TCL）是针对 LB296 CID 13996 的意见处理，涉及 RRU 与 RU 术语的使用。

DCN 2069r0 陈述的问题是：草案允许 DSO non-AP STA 就 80 MHz 使用指示优先子带，但 20 MHz 使用没有对应机制，因此子带分配完全由 DSO AP 自行决定。文档提出由仅支持 20 MHz 的 DSO non-AP STA 通过三种形式之一发送优先偏好列表：方案 1，自主列表，由 count 字段和 index 字段给出优先级（index 0 最高；count 可限制为最多 3）；方案 2，基于接入类别（AC）的列表，最多 4 个 AC 到子带的映射（AC_VI、AC_VO、AC_BE、AC_BK），每个 AC 指定一个最优选子带；方案 3，基于 TID 的列表，最多 8 个 TID 到子带的映射。幻灯片以 160 MHz BSS 中四个可选 20 MHz 子带为例。文档还提出当 BSS 工作带宽因动态带宽扩展（DBE）流程而改变时，更新并重新发送该列表，使用对 UHR 工作模式与参数（OMP）更新流程的修改；示例为允许的子带选项由 80 MHz 时的两个变为 160 MHz 时的四个。协商元素可承载于（重）关联请求、多链路重配置请求、DSO 相关初始控制帧（ICF）或 UHR OMP 请求，DSO AP 可接受、提供替代方案或拒绝，并保留分配的最终决定权。文档将具体元素格式、适用状态码以及 STA 偏好是建议性还是约束性标注为待定（TBD）。

DCN 2064r0 指出，现有 DSO 流程定义了 BSS 带宽变化、DBE 启用或带宽更新、以及 Disabled Subchannel Bitmap 更新时的行为，并在所分配 DSO 子带仍在适用带宽内时保持 DSO 模式开启。文档指出该流程并未检查子带内所有 20 MHz 子信道是否都已被打孔。其建议文本为：若 DSO 子带不再位于适用的 BSS 或 DBE 带宽内，或其中所有 20 MHz 子信道在适用的 Disabled Subchannel Bitmap 中均被指示为打孔，则该 STA 的 DSO 模式应被关闭，且此时 STA 不应发送 UHR OMP 请求来关闭 DSO 模式。文档称该改动不引入新信令或新工作模式。

DCN 2060r0 处理 CID 13996，该意见指出 D2.0 对同一种 11ax 风格资源单元同时使用“52-tone RRU”和“52-tone RU”。文档定义了 RU（HE）、MRU（EHT）和 DRU（分布式音调 RU），并说明 RRU 原意是非 DRU 的统称（RU 加 MRU），而不是某一种具体 RU 类型。文档建议具体单元写作“xxx-tone RU”、“xxx-tone + yyy-tone MRU”和“DBWzz xxx-tone DRU”，RRU 仅用于一般性的非 DRU 概念，并列出 D2.1 中需要将“xxx-tone RRU”改为“xxx-tone RU”的位置（条款 38.3.8、38.3.10.11、38.3.10.12.2、38.3.15.10.2、38.3.15.11.3、38.3.16.7、38.3.16.9、38.3.16.10 和 38.3.26.4.4）。处理结果为 REVISED：将所有“xxx-tone RRU”改为“xxx-tone RU”。

## Key technical points (EN)

- **DCN 11-26-2069r0 · TGbn** — About DSO subband negotiation. Abhishek Chaturvedi et al. (Samsung Electronics). 20 MHz-only DSO non-AP STA preference list in three forms (autonomous count+index, AC based up to 4 entries, TID based up to 8 entries); list updated after a DBE bandwidth change via a modified UHR OMP update; candidate carriers are (Re)Association, Multi-Link Reconfiguration, DSO ICF and UHR OMP frames; AP responds accept/alternative/reject; element format and advisory-vs-binding status listed as TBD. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2069&is_year=2026)
- **DCN 11-26-2064r0 · TGbn** — DSO Subband Validity after Channel Update. Mengying Lin, Ke Zhong, Fachang Guo (Ruijie Networks). DSO mode stays enabled only if the assigned subband is within the applicable BSS/DBE bandwidth and not all of its 20 MHz subchannels are punctured in the Disabled Subchannel Bitmap; the STA does not send a UHR OMP request to disable DSO in that case; references P802.11bn/D2.0. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2064&is_year=2026)
- **DCN 11-26-2060r0 · TGbn** — LB296 CR for CID 13996. Jiyang Bai (TCL). Replace "xxx-tone RRU" with "xxx-tone RU" across D2.1 (RU / MRU / DRU naming rules in two tables); resolution REVISED; text based on D2.1. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2060&is_year=2026)

## Key technical points (ZH)

- **DCN 11-26-2069r0 · TGbn** —— 关于 DSO 子带协商。Abhishek Chaturvedi 等（三星电子）。仅支持 20 MHz 的 DSO non-AP STA 以三种形式发送偏好列表（自主 count+index、基于 AC 最多 4 项、基于 TID 最多 8 项）；DBE 带宽变化后通过修改的 UHR OMP 更新流程更新列表；候选承载帧为（重）关联、多链路重配置、DSO ICF 和 UHR OMP 帧；AP 回复接受/替代/拒绝；元素格式及建议性或约束性标注为待定。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2069&is_year=2026)
- **DCN 11-26-2064r0 · TGbn** —— 信道更新后的 DSO 子带有效性。Mengying Lin、Ke Zhong、Fachang Guo（锐捷网络）。仅当所分配子带位于适用的 BSS/DBE 带宽内、且其 20 MHz 子信道在 Disabled Subchannel Bitmap 中并非全部被打孔时，DSO 模式才保持开启；此时 STA 不发送 UHR OMP 请求来关闭 DSO；参考 P802.11bn/D2.0。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2064&is_year=2026)
- **DCN 11-26-2060r0 · TGbn** —— LB296 CID 13996 的 CR。Jiyang Bai（TCL）。在 D2.1 中将“xxx-tone RRU”统一改为“xxx-tone RU”（以两张表给出 RU / MRU / DRU 命名规则）；处理结果 REVISED；文本基于 D2.1。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2060&is_year=2026)

## Why it matters / what's new (EN)

The two DSO documents are new contributions rather than comment resolutions: 2069r0 adds a STA-side preference signal to a mode that the document describes as AP-controlled, and 2064r0 closes a case in the enable/disable rules for DSO after puncturing changes. Both reference the DBE and Disabled Subchannel Bitmap behaviour already in the D2.x text. The KB's earlier TGbn digests covered DSO and DBE contributions, for example [2026-10-13_ieee-mentor-tgbn-nokia-npca-pedca-dso-dbe-digest](2026-10-13_ieee-mentor-tgbn-nokia-npca-pedca-dso-dbe-digest.md). DCN 2060r0 is a terminology clean-up for LB296.

## Why it matters / what's new (ZH)

两份 DSO 文档是新的贡献而非意见处理：2069r0 为文档所述由 AP 控制的模式增加了 STA 侧偏好信号，2064r0 补上了打孔变化后 DSO 启用/关闭规则中的一种情形。两者都引用了 D2.x 文本中已有的 DBE 与 Disabled Subchannel Bitmap 行为。本知识库此前的 TGbn 摘要涵盖过 DSO 与 DBE 相关的贡献，例如 [2026-10-13_ieee-mentor-tgbn-nokia-npca-pedca-dso-dbe-digest](2026-10-13_ieee-mentor-tgbn-nokia-npca-pedca-dso-dbe-digest.md)。DCN 2060r0 是 LB296 的术语整理。
