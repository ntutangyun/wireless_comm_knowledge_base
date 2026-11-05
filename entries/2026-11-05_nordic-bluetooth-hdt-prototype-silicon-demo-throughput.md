---
id: 2026-11-05_nordic-bluetooth-hdt-prototype-silicon-demo-throughput
date_published: 2026-10-29
date_found: 2026-11-05
type: industry-news
technology: bluetooth
title_en: "Nordic demonstrates Bluetooth HDT on prototype silicon: about 3.8 Mbps average on a 2 MB transfer versus 1.4 Mbps on LE 2M, with a ~10-byte break-even payload"
title_zh: "Nordic 在原型芯片上演示蓝牙 HDT：2 MB 传输平均约 3.8 Mbps，LE 2M 约 1.4 Mbps，盈亏平衡负载约 10 字节"
url: "https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/bluetooth-hdt-demo-and-introduction"
source_quality: full
topics: [BLE, HDT, throughput, PHY, prototype-silicon, LE-2M, 16QAM]
topic_primary: bt-le
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

A Nordic DevZone blog post by Pawel Kanafek (29 October 2026) introduces Bluetooth HDT and shows it running on two prototype SoCs; Nordic issued a press release the same day (Oslo, 29 October 2026) saying it has demonstrated HDT in silicon and will show it at electronica 2026 in Munich. The post follows this structure: a look back at the LE 2M introduction, what changes with HDT (longer packets and a new protocol, new-modulation PHYs, why there are several PHYs), a demo, choosing the right technology, what HDT unlocks, and what is next.

On the technical side the post says HDT adds new PHYs alongside LE 1M and LE 2M rather than replacing them. LE 2M doubled the symbol rate but, because fixed per-packet costs (inter-packet gaps, acknowledgements) stayed the same, throughput did not double. HDT amortizes those costs with longer packets, and adds pi/4-QPSK (2 bits/symbol), 8-PSK (3) and 16-QAM (4) with forward error correction. The spec defines five new 2.4 GHz PHYs (HDT2, HDT3, HDT4, HDT6, HDT7.5); faster PHYs need better link quality, and a Link Layer link-quality feature is meant to enable fast PHY switching. Because the modulation needs new radio hardware, HDT cannot be added to existing SoCs in software. The post states a theoretical break-even payload of roughly 10 bytes below which HDT has little advantage or can be slower than LE 2M, and recommends much larger payloads for high throughput.

The demo transferred the same 2 MB file over each PHY in turn with a 508-byte payload, on a desk in an ordinary office; results are labelled preliminary with lab benchmarks to follow. As stated in the text: the fastest HDT PHY averaged about 3.8 Mbps (peak about 3.9 Mbps, about 4 s), LE 2M about 1.4 Mbps (about 12 s) and LE 1M about 0.76 Mbps (about 22 s); the averages stayed within about 4% of the maximum on every PHY. Nordic positions LE 1M/2M (nRF54L Series) for ultra-low-power, modest-throughput products, HDT for transfers too large for those but not needing Wi-Fi bandwidth, and Wi-Fi for the highest throughput. No HDT-capable SoC is announced yet, though the post says Nordic is developing an upcoming SoC that will be among the first to support HDT (Nordic's statement).

## Summary (ZH)

Nordic DevZone 博客文章（作者 Pawel Kanafek，2026 年 10 月 29 日）介绍了蓝牙 HDT，并展示其在两颗原型 SoC 上运行；Nordic 同日（奥斯陆，2026 年 10 月 29 日）发布新闻稿，称已在芯片上演示 HDT，并将在慕尼黑 electronica 2026 展出。文章结构为：回顾 LE 2M 的引入、HDT 带来的变化（更长的数据包与新协议、采用新调制的 PHY、为何有多种 PHY）、演示、如何选择合适的技术、HDT 带来的可能性以及后续计划。

技术上，文章指出 HDT 是在 LE 1M 和 LE 2M 之外新增 PHY，而非取而代之。LE 2M 将符号率翻倍，但由于每包固定开销（包间隔、确认）不变，吞吐量并未翻倍。HDT 通过更长的数据包摊薄这些开销，并加入 π/4-QPSK（每符号 2 比特）、8-PSK（3 比特）与 16-QAM（4 比特）及前向纠错。规范定义了五种新的 2.4 GHz PHY（HDT2、HDT3、HDT4、HDT6、HDT7.5）；更快的 PHY 需要更好的链路质量，链路层的链路质量功能用于实现快速 PHY 切换。由于调制需要新的射频硬件，HDT 无法通过软件加到现有 SoC 上。文章给出约 10 字节的理论盈亏平衡负载，低于此值 HDT 优势很小，甚至可能比 LE 2M 更慢，并建议使用大得多的负载以获得高吞吐。

演示在普通办公室桌面上，以 508 字节负载依次通过各 PHY 传输同一个 2 MB 文件；结果标注为初步，后续将有实验室基准测试。按文中描述：最快的 HDT PHY 平均约 3.8 Mbps（峰值约 3.9 Mbps，约 4 秒），LE 2M 约 1.4 Mbps（约 12 秒），LE 1M 约 0.76 Mbps（约 22 秒）；各 PHY 的平均值均在最大值的约 4% 以内。Nordic 将 LE 1M/2M（nRF54L 系列）定位于超低功耗、吞吐需求不高的产品，HDT 定位于对 LE 1M/2M 过大但又无需 Wi-Fi 带宽的传输，最高吞吐则选择 Wi-Fi。目前尚未公布支持 HDT 的 SoC，不过文章称 Nordic 正在开发一款即将推出的 SoC，将是首批支持 HDT 的产品之一（Nordic 的表述）。

## Key technical points (EN)

- **Demo setup**: two prototype SoCs, 2 MB file, 508-byte payload, office desk, preliminary results.
- **Measured (per post text)**: fastest HDT PHY ~3.8 Mbps average / ~3.9 Mbps peak / ~4 s; LE 2M ~1.4 Mbps / ~12 s; LE 1M ~0.76 Mbps / ~22 s.
- **PHYs**: HDT2, HDT3, HDT4, HDT6, HDT7.5 in 2.4 GHz; pi/4-QPSK, 8-PSK, 16-QAM with FEC.
- **Why LE 2M did not double throughput**: fixed gaps and acknowledgements unchanged; HDT amortizes them with longer packets.
- **Break-even**: ~10-byte payload (theoretical); small frequent messages gain little or run slower than LE 2M.
- **Hardware**: new radio hardware needed; Nordic's product page claims 2.5x LE 2M without stating the derivation.
- **Positioning**: LE 1M/2M for ultra-low power; HDT for multi-MB transfers; Wi-Fi for highest throughput.

## Key technical points (ZH)

- **演示设置**：两颗原型 SoC，2 MB 文件，508 字节负载，办公室桌面，结果为初步。
- **实测（按文章文字）**：最快 HDT PHY 平均约 3.8 Mbps / 峰值约 3.9 Mbps / 约 4 秒；LE 2M 约 1.4 Mbps / 约 12 秒；LE 1M 约 0.76 Mbps / 约 22 秒。
- **PHY**：2.4 GHz 下的 HDT2、HDT3、HDT4、HDT6、HDT7.5；π/4-QPSK、8-PSK、16-QAM 加 FEC。
- **LE 2M 吞吐未翻倍的原因**：包间隔与确认的固定开销未变；HDT 以更长数据包摊薄这些开销。
- **盈亏平衡**：约 10 字节负载（理论值）；小而频繁的消息收益很小，甚至比 LE 2M 更慢。
- **硬件**：需要新的射频硬件；Nordic 产品页称相对 LE 2M 快 2.5 倍，但未说明推导方式。
- **定位**：LE 1M/2M 用于超低功耗；HDT 用于多 MB 传输；最高吞吐用 Wi-Fi。

## Why it matters / what's new (EN)

The KB's earlier HDT entries covered the draft specification and test/chip-IP announcements; this adds measured prototype-silicon throughput on the same transfer for HDT, LE 2M and LE 1M, plus the vendor's stated short-payload caveat. The figures come from one preliminary desk test on prototype parts by the chip vendor, so treat them as indicative; the measured ~3.8 Mbps sits well below the 7.5 Mbps PHY ceiling, consistent with the SIG-side caveat that PHY rate is not application throughput.

## Why it matters / what's new (ZH)

知识库此前的 HDT 条目涵盖草案规范及测试/芯片 IP 的发布；本条补充了原型芯片上 HDT、LE 2M 与 LE 1M 在同一传输任务下的实测吞吐，以及厂商给出的小负载注意事项。数据来自芯片厂商在原型器件上的一次初步桌面测试，仅供参考；实测约 3.8 Mbps 远低于 7.5 Mbps 的 PHY 上限，与 SIG 方面关于物理层速率不等于应用层吞吐的提示一致。

## Images

![Nordic HDT demo throughput results chart (alt text not provided by source) | Nordic HDT 演示吞吐结果图（来源未提供替代文字）](https://devzone.nordicsemi.com/resized-image/__size/1280x712/__key/communityserver-blogs-components-weblogfiles/00-00-00-00-04/7725.581970d2_2D00_0570_2D00_4888_2D00_a7d2_2D00_509ba28d38b3.png)
