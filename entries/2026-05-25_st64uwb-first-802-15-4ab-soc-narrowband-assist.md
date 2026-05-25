---
id: 2026-05-25_st64uwb-first-802-15-4ab-soc-narrowband-assist
date_published: 2026-03-10
date_found: 2026-05-25
type: product
technology: uwb
title_en: "STMicroelectronics ST64UWB: first IEEE 802.15.4ab UWB SoC with narrowband assistance"
title_zh: "意法半导体 ST64UWB：首款支持窄带辅助的 IEEE 802.15.4ab UWB 系统级芯片"
url: "https://blog.st.com/st64uwb/"
source_quality: snippet_only
topics: [uwb-ranging, 802.15.4ab, narrowband-assist, multi-millisecond-ranging, digital-key, automotive, radar]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar, uwb-fi-ra]
novelty_score: 3
---

## Summary (EN)

At Embedded World 2026 (Nuremberg, ~10–11 March 2026), STMicroelectronics launched the ST64UWB family, which it positions as the industry's first fully-integrated system-on-chip built to the next-generation ultra-wideband standard, IEEE 802.15.4ab. The headline differentiator is an on-chip narrowband-assistance (NBA) radio paired with the amendment's multi-millisecond ranging (MMS) mode — the combination ST credits with roughly 8× more operating range than current-generation HRP UWB, materially better non-line-of-sight performance for tags carried in a bag or pocket, and close-range direction finding, while also opening "entirely new" radar/sensing applications on the same silicon.

802.15.4ab (the successor amendment to 802.15.4z) is the standards step the whole UWB ecosystem has been waiting on: it adds narrowband-assisted acquisition, multi-millisecond ranging, and coherent-receiver improvements aimed squarely at the two volume markets — automotive digital key / keyfobs and consumer hands-free access / presence detection. ST framing the ST64UWB as the *first* 4ab-compliant SoC is the noteworthy part: it puts ST in direct contention with the incumbent UWB chip leaders (NXP, Qorvo, and Apple's in-house U-series) at the moment the standard transitions, rather than chasing the prior 4z generation.

This entry is marked `snippet_only` — it is compiled from the launch coverage and ST's own blog headline rather than a fully-fetched article, so specific part numbers, sampling dates, and process-node details should be backfilled on a later pass. It is recorded now because a first-of-kind 802.15.4ab SoC is a load-bearing milestone for the `uwb-ranging` bin and complements the KB's existing UWB entries (the UWB-radar body-fat paper and SPARK's LE-UWB pitch) with the standards-track silicon side of the story.

## Summary (ZH)

在 Embedded World 2026（纽伦堡，约 2026 年 3 月 10–11 日）上，意法半导体（ST）发布 ST64UWB 系列，并将其定位为业界首款面向下一代超宽带标准 IEEE 802.15.4ab 打造的全集成系统级芯片。核心差异点是片上窄带辅助（NBA）射频与该修订版的多毫秒测距（MMS）模式相结合——ST 称这一组合带来约 8× 于当前 HRP UWB 的工作距离、对放在包内或口袋中的标签显著更好的非视距性能、近距离方向查找，并在同一芯片上开启「全新」的雷达 / 感知应用。

802.15.4ab（802.15.4z 的后继修订）是整个 UWB 生态翘首以待的标准步伐：它加入窄带辅助捕获、多毫秒测距与相干接收机改进，直指两大走量市场——车载数字钥匙 / 钥匙扣，以及消费级免提门禁 / 在场检测。ST 把 ST64UWB 标榜为 *首款* 符合 4ab 的 SoC 是值得关注之处：它让 ST 在标准切换的当口，与现有 UWB 芯片领导者（NXP、Qorvo 及 Apple 自研 U 系列）正面竞争，而非追赶上一代 4z。

本条目标记为 `snippet_only`——它基于发布报道与 ST 博客标题汇编，而非完整抓取的文章，因此具体型号、送样时间与制程节点细节应在后续补读。现在收录，是因为「首款 802.15.4ab SoC」对 `uwb-ranging` 桶是承重里程碑，并以标准化的硅片侧故事补充 KB 既有的 UWB 条目（UWB 雷达体脂论文与 SPARK 的 LE-UWB 路演）。

## Key technical points (EN)

- **First IEEE 802.15.4ab SoC** (per ST) — the successor amendment to 802.15.4z.
- **Integrated narrowband-assistance (NBA) radio** on-die alongside the UWB radio — used for faster/cheaper acquisition and range extension.
- **Multi-millisecond ranging (MMS)** mode — the 4ab feature that, with NBA, ST credits for ~**8× operating range** and improved **NLOS** (bag/pocket) performance.
- **Close-range direction finding** and **new radar/sensing** modes on the same silicon.
- Target markets: **automotive digital key / keyfobs**, consumer **hands-free access** and **presence detection**.
- Announced at **Embedded World 2026** (~10–11 March 2026); positions ST against NXP / Qorvo / Apple at the 4z→4ab transition.

## Key technical points (ZH)

- **首款 IEEE 802.15.4ab SoC**（据 ST）——802.15.4z 的后继修订。
- **片上集成窄带辅助（NBA）射频** 与 UWB 射频并存——用于更快 / 更省的捕获与距离扩展。
- **多毫秒测距（MMS）** 模式——4ab 的特性，配合 NBA，ST 称带来约 **8× 工作距离** 与更优 **非视距（NLOS）**（包内 / 口袋）性能。
- 同一芯片上的 **近距离方向查找** 与 **全新雷达 / 感知** 模式。
- 目标市场：**车载数字钥匙 / 钥匙扣**、消费级 **免提门禁** 与 **在场检测**。
- 于 **Embedded World 2026**（约 2026 年 3 月 10–11 日）发布；在 4z→4ab 切换之际与 NXP / Qorvo / Apple 竞争。

## Why it matters / what's new (EN)

The KB's UWB coverage so far is application-driven (UWB-radar body composition) and pitch-driven (SPARK LE-UWB). ST64UWB adds the standards-and-silicon anchor: it is the first announced commercial part for 802.15.4ab, the amendment that defines narrowband-assisted UWB and multi-millisecond ranging. That makes it the reference point against which subsequent NXP/Qorvo/Apple 4ab parts will be measured, and the concrete signal that 4ab is moving from draft to product. The range-extension and NLOS claims (driven by NBA) are exactly the gaps that limited 4z UWB in bag/pocket tag scenarios, so this is worth tracking as the volume-market enabler for digital key and presence detection. Backfill the part numbers and sampling timeline on a later, fully-fetched pass.

## Why it matters / what's new (ZH)

KB 目前的 UWB 覆盖偏应用驱动（UWB 雷达体成分）与路演驱动（SPARK LE-UWB）。ST64UWB 补上标准与硅片的锚点：它是 802.15.4ab——定义窄带辅助 UWB 与多毫秒测距的修订——首款公布的商用器件。这使它成为后续 NXP/Qorvo/Apple 4ab 器件的参照基准，也是 4ab 从草案走向产品的具体信号。其距离扩展与 NLOS 主张（由 NBA 驱动）恰好针对 4z UWB 在包内 / 口袋标签场景中的短板，因此值得作为数字钥匙与在场检测走量市场的使能者来跟踪。型号与送样时间待后续完整抓取时补录。
