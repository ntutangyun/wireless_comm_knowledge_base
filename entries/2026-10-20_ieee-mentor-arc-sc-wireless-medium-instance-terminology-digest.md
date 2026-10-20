---
id: 2026-10-20_ieee-mentor-arc-sc-wireless-medium-instance-terminology-digest
date_published: 2026-10-19
date_found: 2026-10-20
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 ARC SC Mentor digest — 2026-10-20 (\"Discussion about the wireless medium\": replacing \"instance of use\" with \"WM instance\")"
title_zh: "IEEE 802.11 ARC SC Mentor 当日摘要 — 2026-10-20（“关于无线介质的讨论”：以“WM 实例”取代“使用实例”）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2035"
source_quality: full
topics: [ARC SC, wireless medium, frame exchange sequence, NAV, channel, definitions, terminology]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr]
novelty_score: 1
---

## Summary (EN)

DCN 11-26-2035r0, "Discussion about the wireless medium" (Harry Bims, Bims Laboratories, Inc.; ARC SC; uploaded 19 October 2026; the slide date reads 2026-11-10), is a 30-slide deck.

The deck walks through how the IEEE 802.11 baseline defines related terms. It quotes the frame exchange sequence (FES) definition as "A sequence of frames that maintains control of the wireless medium", says the FES was created without a definition, and states that an FES does not control the medium. It quotes the NAV definition (which refers to the wireless medium, not to an FES) and the wireless medium (WM) definition ("The medium used to implement the transfer of protocol data units (PDUs) between peer physical layer (PHY) entities of a wireless local area network (LAN)"). It then quotes the channel definition ("An instance of use of the wireless medium (WM) for the purpose of passing physical layer (PHY) protocol data units (PDUs) between two or more stations (STAs)") and states that this contradicts the WM definition, because "an instance of use of the WM is not the WM". The beamforming steering matrix definition is quoted as an example of text that relies on channel knowledge.

The deck's proposal is stated in its conclusion slides: replace each "instance of use" with "a WM instance", and describe "a broadcast WM instance" and "a directed WM instance" separately. It defines the broadcast WM instance as having a lifetime limited to each broadcast frame exchange, and the directed WM instance as having a lifetime limited to either a virtual physical protection mechanism or the time between beamforming steering matrix determinations. Intermediate slides describe an "instance of use" as a three-dimensional resource whose indices identify a resource unit or frequency segment, one or more peer STAs, and a beamforming, and illustrate broadcast and directed instances with beacon, beamforming and TDLS examples and with overlapping or quasi-collocated instances. The last slide is titled "Q&A and next steps". The document contains no motions or straw polls.

## Summary (ZH)

DCN 11-26-2035r0《Discussion about the wireless medium》（Bims Laboratories, Inc. 的 Harry Bims；ARC SC；2026 年 10 月 19 日上传，幻灯片日期为 2026-11-10）是一份 30 页幻灯片。

幻灯片梳理了 IEEE 802.11 基线对相关术语的定义。它引用帧交换序列（FES）的定义“维持对无线介质控制权的一串帧”，称 FES 创建时没有定义，并称 FES 并不控制介质；引用 NAV 的定义（其指向无线介质而非 FES）与无线介质（WM）的定义（“用于在无线局域网对等 PHY 实体之间传送 PDU 的介质”）；随后引用信道的定义（“为在两个或多个 STA 之间传递 PHY PDU 而对无线介质的一次使用实例”），并称其与 WM 的定义相矛盾，因为“WM 的使用实例并不是 WM”。波束成形转向矩阵的定义被引作依赖信道知识的文本示例。

结论页给出了幻灯片的提议：将每处“instance of use”替换为“a WM instance”，并分别描述“广播 WM 实例”和“定向 WM 实例”。广播 WM 实例的生命周期限于每次广播帧交换；定向 WM 实例的生命周期限于虚拟物理保护机制，或两次波束成形转向矩阵确定之间的时间。中间页将“使用实例”描述为三维资源，其索引分别标识资源单元或频率段、一个或多个对等 STA 以及波束成形，并用 Beacon、波束成形、TDLS 示例及重叠或准同位的实例加以图示。最后一页标题为“Q&A and next steps”。文档不含动议或意向投票。

## Key technical points (EN)

- **DCN 11-26-2035r0 · ARC SC** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2035&is_year=2026) Discussion about the wireless medium. Harry Bims (Bims Laboratories, Inc.).
- Quotes the baseline definitions of FES, NAV, wireless medium, channel and beamforming steering matrix, and states that the channel definition contradicts the WM definition.
- Proposes the term "a WM instance" in place of "instance of use", split into "broadcast WM instance" and "directed WM instance" with the lifetimes stated in the deck.
- Describes an instance of use as a three-dimensional resource (frequency segment/RU, peer STAs, beamforming).

## Key technical points (ZH)

- **DCN 11-26-2035r0 · ARC SC** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2035&is_year=2026) Discussion about the wireless medium。Harry Bims（Bims Laboratories, Inc.）。
- 引用基线中 FES、NAV、无线介质、信道、波束成形转向矩阵的定义，并称信道定义与 WM 定义相矛盾。
- 提议以“a WM instance”取代“instance of use”，并拆分为“广播 WM 实例”和“定向 WM 实例”，其生命周期如幻灯片所述。
- 将使用实例描述为三维资源（频率段/RU、对等 STA、波束成形）。

## Why it matters / what's new (EN)

This is a terminology discussion deck from the ARC standing committee; it carries no motion, poll or draft text, and its slide date (2026-11-10) is later than the upload date.

## Why it matters / what's new (ZH)

这是 ARC 常设委员会的术语讨论幻灯片，不含动议、投票或草案文本，其幻灯片日期（2026-11-10）晚于上传日期。
