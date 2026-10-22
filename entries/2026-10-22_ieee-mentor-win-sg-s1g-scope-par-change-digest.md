---
id: 2026-10-22_ieee-mentor-win-sg-s1g-scope-par-change-digest
date_published: 2026-10-21
date_found: 2026-10-22
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG Mentor digest — 2026-10-22 (\"WIN, S1G & PAR\": three Sub-1 GHz use cases and a proposed change to the PAR scope statement)"
title_zh: "IEEE 802.11 WIN SG Mentor 当日摘要 — 2026-10-22（“WIN, S1G & PAR”：三个 Sub-1 GHz 用例及对 PAR 范围表述的修改提议）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2047"
source_quality: full
topics: [WIN-SG, S1G, Wi-Fi HaLow, PAR, scope, MLO, Wi-Fi-9]
topic_primary: wifi8-uhr
topics_secondary: [mlo]
novelty_score: 2
---

## Summary (EN)

The WIN Study Group has one new base document above the previous Mentor watermark: DCN 11-26-2047r0, "WIN, S1G & PAR" (Dave Halasz, Morse Micro; uploaded 21 October 2026, slide date 2026-10-21). It is a 7-slide deck; the .pptx was read in full.

The deck's abstract slide states that "the Sub 1 GHz PHY enables connections at greater distance", that "having S1G within scope of WIN provides for increased reliability and increased utility", and that the submission "shows use cases and proposes scope change to allow S1G". Three use cases follow, one per slide. Use case 1 is MLO discovery/advertisement: the slide says that more knowledge of the WLAN in an area can increase reliability, that S1G used for discovery/advertisement gives a view into neighbours not within reach of 2.4/5/6 GHz, and that this use case "is limited to discovery/advertisement and not data aggregation". Use case 2 is 2.4 GHz and S1G MLO: the slide says MLO "does make sense in some cases", gives a video camera that supports both 2.4 GHz and Wi-Fi HaLow as the example, and states that this use case "does include aggregation of data". Use case 3 is S1G when no other wireless link is available: the slide describes a campus or warehouse where 2.4/5/6 GHz is widely available indoors but has little or no coverage outdoors, proposes Wi-Fi HaLow to cover the transit between buildings, and says "usually low throughput is better than no throughput".

Slide 6 is titled "Proposed changes to section 5.2.b. Scope of the project". Its revision markup is resolvable: "below" is underlined (inserted), while "between" and " 1 GHz and " are struck through (deleted). The proposed scope therefore reads "This amendment applies to carrier frequency operation below 7.250 GHz. This amendment shall ensure backward compatibility and coexistence with legacy IEEE 802.11 devices in the 2.4 GHz, 5 GHz and 6 GHz unlicensed bands." The last slide, "References", carries no entries.

## Summary (ZH)

WIN 研究组在上次 Mentor 水位线之上有一份新的基础文档：DCN 11-26-2047r0《WIN, S1G & PAR》（Morse Micro 的 Dave Halasz；2026 年 10 月 21 日上传，幻灯片日期 2026-10-21）。这是一份 7 页幻灯片，已通读 .pptx。

摘要页写道：“Sub 1 GHz PHY 可实现更远距离的连接”，“将 S1G 纳入 WIN 范围可带来更高的可靠性和更大的效用”，并称本提交“给出用例并提议修改范围以允许 S1G”。随后每页一个用例。用例 1 为 MLO 发现/通告：幻灯片称，对所在区域 WLAN 了解更多可提高可靠性；用 S1G 做发现/通告，可看到 2.4/5/6 GHz 无法触及的邻居；该用例“仅限于发现/通告，不含数据聚合”。用例 2 为 2.4 GHz 与 S1G 的 MLO：幻灯片称 MLO“在某些情况下确实有意义”，以同时支持 2.4 GHz 与 Wi-Fi HaLow 的摄像机为例，并称该用例“包含数据聚合”。用例 3 为无其他无线链路可用时使用 S1G：幻灯片描述室内 2.4/5/6 GHz 覆盖广泛、室外几乎没有覆盖的园区或仓库，提出用 Wi-Fi HaLow 覆盖楼宇之间的过渡路段，并称“通常低吞吐量胜过没有吞吐量”。

第 6 页标题为“Proposed changes to section 5.2.b. Scope of the project”。其修订标记可以确定：“below”带下划线（插入），“between”与“ 1 GHz and ”带删除线（删除）。因此提议的范围表述为：“This amendment applies to carrier frequency operation below 7.250 GHz. This amendment shall ensure backward compatibility and coexistence with legacy IEEE 802.11 devices in the 2.4 GHz, 5 GHz and 6 GHz unlicensed bands.”最后一页“References”没有条目。

## Key technical points (EN)

- **DCN 11-26-2047r0 · WIN SG** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2047&is_year=2026) WIN, S1G & PAR. Dave Halasz (Morse Micro). 7 slides.
- Stated aim: bring Sub-1 GHz (S1G) within the scope of WIN, citing increased reliability and utility.
- Use case 1: S1G for MLO discovery/advertisement only (no data aggregation). Use case 2: 2.4 GHz + S1G (Wi-Fi HaLow) MLO with data aggregation, example a video camera. Use case 3: S1G where no other link is available, e.g. outdoor transit between buildings on a campus or in a warehouse.
- Proposed change to PAR section 5.2.b (Scope of the project): the scope sentence is changed so that "below" is inserted and "between" and " 1 GHz and " are deleted, giving "carrier frequency operation below 7.250 GHz"; the backward-compatibility and coexistence sentence names the 2.4, 5 and 6 GHz unlicensed bands.
- The document contains no motions or straw polls.

## Key technical points (ZH)

- **DCN 11-26-2047r0 · WIN SG** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2047&is_year=2026) WIN, S1G & PAR。Dave Halasz（Morse Micro）。共 7 页。
- 所述目的：将 Sub-1 GHz（S1G）纳入 WIN 范围，理由是可提高可靠性和效用。
- 用例 1：S1G 仅用于 MLO 发现/通告（不含数据聚合）。用例 2：2.4 GHz + S1G（Wi-Fi HaLow）MLO，含数据聚合，示例为摄像机。用例 3：无其他链路可用时使用 S1G，例如园区或仓库中楼宇之间的室外过渡路段。
- 对 PAR 第 5.2.b 节（项目范围）的修改提议：范围句插入“below”，删除“between”与“ 1 GHz and ”，结果为“carrier frequency operation below 7.250 GHz”；向后兼容与共存一句点名了 2.4、5、6 GHz 免许可频段。
- 文档不含动议或意向投票。

## Why it matters / what's new (EN)

This is a single-author scope contribution to the WIN Study Group; it records a position and a proposed wording change and carries no motion, poll or draft text. It adds a Sub-1 GHz view to the WIN coverage in this KB (see 2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest for the earlier PAR-language discussion). The slide wording is the author's; nothing here indicates how the study group responded.

## Why it matters / what's new (ZH)

这是提交给 WIN 研究组的单一作者范围类贡献，记录一种立场和一项措辞修改提议，不含动议、投票或草案文本。它为本知识库的 WIN 内容补充了 Sub-1 GHz 视角（此前的 PAR 文本讨论见 2026-09-16_ieee-mentor-win-sg-wifi9-par-and-features-digest）。幻灯片措辞出自作者本人；其中没有任何内容表明研究组的反应。
