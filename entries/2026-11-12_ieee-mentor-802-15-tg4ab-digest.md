---
id: 2026-11-12_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-11
date_found: 2026-11-12
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-12 (R1-268 revision 2 applies the 0-255 Round Index limit to all hyper block mode in the Ranging Round IE; R1-295 moves to a separate Qualcomm document proposing one-byte angle fields)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-12（R1-268 第 2 版将 Ranging Round IE 中 Round Index 的 0-255 限制扩展到所有 hyper block 模式；R1-295 转入高通独立文档，提议角度字段改为一个字节）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=457&is_year=2026"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, comment resolution, Round Index, hyper block, NBA MMS, Ranging Round IE, Processed Target Feature Report, Azimuth, Elevation, chip order, spreading factor]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

On 10-11 November 2026 (ET) TG4ab uploaded two comment-resolution revisions and one new comment-resolution document, plus revisions of the chair's motion sheet and agenda workbook. IG FG UWB uploaded nothing new in this window. Comment-resolution documents carry the standard notice that they do not represent the agreed views of the 802.15 WG or TG4ab; they are offered as a basis for discussion.

DCN 15-26-0457r1 (10 November, 20:35 ET) and r2 (11 November, 03:56 ET), "Proposed Resolution for SA ballot comments R1-265, R1-266, R1-268, R1-204 and R1-298" (Wenzheng Li, Calterah; sources also list Taeyoung Ha, Samsung, and Rojan Chitrakar, Huawei), revise the discussion draft covered in the 28 October digest (r0). The document's own revision notes read: Rev 1 changes the proposed disposition status of R1-268 and R1-298 to "Revised", adds some revision for the hyper block for R1-268, and reassigns R1-295 to Pooria (Pakrooh, Qualcomm); Rev 2 updates the resolution to R1-268 and removes the content related to R1-295 (the title in r2 no longer lists R1-295). The abstract now reads "five technical comments on P802.15.4ab D05". Dispositions as stated in r2: R1-265 and R1-266 (Rolfe; remove CapabilityInformation from the ignored-parameter lists for controller association in 10.21.6.1.2 and 10.21.6.1.3) Accepted; R1-204 (Schmidt; symbol numbering for the even-indexed-symbol chip time reversal in 13.2.5) Revised; R1-298 (Rolfe; chip order for the 5800 and 6200 MHz bands in 13.2.8) Revised, with proposed text that the chip sequence in those bands contains SF chips, transmitted c0 to c(SF-1), where SF is the spreading factor in Table 71, and that the Table 73 even-indexed-symbol reversal still applies; and R1-268 (Rolfe; the Round Index described as 16 bits although Figure 10-248 assigns bits 1 to 15) Revised (the tracked change deletes the earlier "Accepted"). For R1-268, the proposed text in 10.32.9.3 (Ranging Round IE) says that in hyper block mode the Round Index field specifies the block index and is limited to 0 to 255, and otherwise the field carries the ranging round index with a range of 0 to 32767; in 10.32.9.10 (Scheduling IE) and 10.32.9.11 (Enhanced Ranging Round IE) the Round Index is set to a value in 0 to 255 when the ranging block is used for NBA MMS ranging; and in 10.32.9.12 (Hyper Block Structure IE) the controller shall set the Ranging Block Duration such that the number of ranging rounds in the ranging block is not more than 255, with a note that the number of ranging rounds per ranging block in NBA MMS ranging is limited to 255.

DCN 15-26-0508r0, "Resolution to CID R1-295" (Pooria Pakrooh, Qualcomm; 10 November, 21:09 ET), is a discussion draft whose abstract states that the angle quantization mapping for R1-295 remains open. The comment (Rolfe, clause 10.40.6.6, page 201) notes that the angle descriptions specify seven-bit Azimuth and Elevation values while Figure 199 allocates two octets to each, and asks for the mapping between seven bits and two octets to be defined. The document's discussion says a two-byte representation enables angle resolution below 0.01 degree, which it considers neither needed nor achievable in practice, and that a single byte gives around 1.4 degrees of resolution; it adds that the same argument holds for the Receiver Orientation fields (Azimuth, Elevation, Rotation) in Figure 198, and that a one-byte format reduces the airtime of the report. Proposed disposition: Revised. The notes to the editor change the number of octets from 0/2 to 0/1 for the three Receiver Orientation fields in Figure 198 and for the Azimuth and Elevation fields in Figure 199, and reword the field descriptions on pages 200 and 201 to one-byte signed two's-complement values representing an angle from -pi to +pi radians.

Also uploaded and not digested separately: the motion sheet DCN 15-26-0277r11 (11 November, 01:59 ET; the sheet records motion texts and tallies to assist the chair; per its own notice, formal results are recorded in the meeting minutes) and the agenda workbook DCN 15-26-0450r5 (10 November, 21:16 ET).

## Summary (ZH)

2026 年 11 月 10-11 日（美东时间），TG4ab 上传了两份意见处理文档的修订版和一份新的意见处理文档，以及主席动议表与议程工作簿的修订版。该时段 IG FG UWB 无新上传。意见处理文档均声明不代表 802.15 工作组或 TG4ab 的一致意见，仅作为讨论基础。

DCN 15-26-0457r1（11 月 10 日 20:35 ET）与 r2（11 月 11 日 03:56 ET）《Proposed Resolution for SA ballot comments R1-265, R1-266, R1-268, R1-204 and R1-298》（Calterah 的 Wenzheng Li；来源栏另列三星 Taeyoung Ha 与华为 Rojan Chitrakar）修订了 10 月 28 日摘要中涉及的讨论稿（r0）。文档自身的修订说明为：Rev 1 将 R1-268 与 R1-298 的拟定处理状态改为“Revised”，为 R1-268 增加了与 hyper block 相关的修订，并将 R1-295 重新分配给 Pooria（高通 Pakrooh）；Rev 2 更新了对 R1-268 的处理并删除与 R1-295 相关的内容（r2 标题中已不再列出 R1-295）。摘要现为“针对 P802.15.4ab D05 的五项技术意见”。r2 所述处理状态：R1-265 与 R1-266（Rolfe；在 10.21.6.1.2 与 10.21.6.1.3 中，控制器关联的忽略参数列表去掉 CapabilityInformation）为 Accepted；R1-204（Schmidt；13.2.5 中偶数索引符号码片时间反转的符号编号）为 Revised；R1-298（Rolfe；13.2.8 中 5800 与 6200 MHz 频段的码片顺序）为 Revised，拟定文字为：这两个频段中每个符号的码片序列含 SF 个码片，按 c0 至 c(SF-1) 发送，SF 为表 71 中的扩频因子，且表 73 的偶数索引符号反转规则仍然适用；R1-268（Rolfe；Round Index 被描述为 16 位而图 10-248 仅分配第 1 至 15 位）为 Revised（修订标记删除了原先的 “Accepted”）。针对 R1-268，10.32.9.3（Ranging Round IE）的拟定文字为：hyper block 模式下 Round Index 字段表示块索引，取值限于 0 至 255，否则该字段表示测距轮索引，取值范围 0 至 32767；10.32.9.10（Scheduling IE）与 10.32.9.11（Enhanced Ranging Round IE）中，测距块用于 NBA MMS 测距时 Round Index 取值为 0 至 255；10.32.9.12（Hyper Block Structure IE）中，控制器应设置 Ranging Block Duration，使测距块内的测距轮数不超过 255，并注明 NBA MMS 测距中每个测距块的测距轮数限于 255。

DCN 15-26-0508r0《Resolution to CID R1-295》（高通 Pooria Pakrooh；11 月 10 日 21:09 ET）为讨论稿，其摘要称 R1-295 的角度量化映射仍待定。该意见（Rolfe，10.40.6.6 条，第 201 页）指出角度描述规定 Azimuth 与 Elevation 为 7 位值，而图 199 为每个字段分配两个八位组，要求定义 7 位与两个八位组之间的映射。文档的讨论部分称：两字节表示可达到小于 0.01 度的角度分辨率，其认为在实际中既不需要也无法实现；单字节约有 1.4 度分辨率；同样的论据适用于图 198 中的接收端方向字段（Azimuth、Elevation、Rotation），且单字节格式可减少报告的空口时间。拟定处理：Revised。给编辑的说明将图 198 中三个接收端方向字段以及图 199 中 Azimuth 与 Elevation 字段的八位组数由 0/2 改为 0/1，并将第 200、201 页的字段描述改为表示 -π 至 +π 弧度角度的单字节有符号补码值。

另有上传但未单独摘要：动议表 DCN 15-26-0277r11（11 月 11 日 01:59 ET；该表列出动议文本及计票以协助主席；按其自身说明，正式结果以会议纪要为准）与议程工作簿 DCN 15-26-0450r5（11 月 10 日 21:16 ET）。

## Key technical points (EN)

- **DCN 15-26-0457r1/r2 · TG4ab** — R1-268 (Round Index): limited to 0-255 in hyper block mode and for NBA MMS ranging in the Ranging Round, Scheduling and Enhanced Ranging Round IEs; otherwise 0-32767; Ranging Block Duration set so a ranging block holds at most 255 rounds. R1-298: chip order in the 5800/6200 MHz bands expressed via the spreading factor SF. Calterah (Li) with Samsung and Huawei listed. [document](https://mentor.ieee.org/802.15/documents?is_dcn=457&is_year=2026)
- **DCN 15-26-0508r0 · TG4ab** — R1-295: Receiver Orientation (Figure 198) and Azimuth/Elevation (Figure 199) fields change from two octets to one octet; quantization mapping stated as open. Qualcomm (Pakrooh). [document](https://mentor.ieee.org/802.15/documents?is_dcn=508&is_year=2026)
- **DCN 15-26-0277r11 / 0450r5 · TG4ab** — motion sheet and agenda workbook revisions (chair). [document](https://mentor.ieee.org/802.15/documents?is_dcn=277&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0457r1/r2 · TG4ab** — R1-268（Round Index）：hyper block 模式下以及 NBA MMS 测距在 Ranging Round、Scheduling、Enhanced Ranging Round IE 中限于 0-255，其余为 0-32767；Ranging Block Duration 须使一个测距块至多含 255 轮。R1-298：5800/6200 MHz 频段的码片顺序以扩频因子 SF 表述。Calterah（Li），来源栏另列三星与华为。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=457&is_year=2026)
- **DCN 15-26-0508r0 · TG4ab** — R1-295：接收端方向字段（图 198）与 Azimuth/Elevation 字段（图 199）由两个八位组改为一个八位组；量化映射标注为待定。高通（Pakrooh）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=508&is_year=2026)
- **DCN 15-26-0277r11 / 0450r5 · TG4ab** — 动议表与议程工作簿修订（主席）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=277&is_year=2026)

## Why it matters / what's new (EN)

These documents show how two ballot comments on P802.15.4ab D05 were being reworked on 10-11 November: the Round Index field width and range in the ranging IEs (r2 removes the NBA-MMS-only qualifier from the Ranging Round IE hyper-block limit; the 255-round limits for NBA MMS in the Scheduling, ERR and HBS IEs were already in r1), and the encoding of angle fields in the Processed Target Feature Report, which was split into its own Qualcomm discussion draft proposing one-byte fields. Both are proposals, not agreed text, and the document states the angle quantization remains open.

## Why it matters / what's new (ZH)

这些文档展示了 11 月 10-11 日 P802.15.4ab D05 两项投票意见的处理调整：测距信息元素中 Round Index 字段的位宽与取值范围（r2 删除了 Ranging Round IE 中仅限 NBA MMS 的限定；Scheduling、ERR、HBS IE 中针对 NBA MMS 的 255 轮上限在 r1 中已有），以及 Processed Target Feature Report 中角度字段的编码——该意见被拆出为高通的独立讨论稿，提议改用单字节字段。两者均为提案而非已商定文本，且文档称角度量化仍待定。

## Images

None.
