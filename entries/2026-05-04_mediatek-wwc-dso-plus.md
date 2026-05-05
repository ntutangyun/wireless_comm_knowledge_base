---
id: 2026-05-04_mediatek-wwc-dso-plus
date_published: 2026-04-25
date_found: 2026-05-04
type: industry-news
title_en: "MediaTek @ WWC Mountain View 2026: DSO+ extension brings Wi-Fi 8 DSO benefits to legacy clients; DPD-driven 20% power reduction"
title_zh: "MediaTek 在 WWC Mountain View 2026：DSO+ 扩展让 Wi-Fi 8 DSO 收益惠及旧客户端；数字预失真驱动 20% 功耗降低"
url: "https://wifinowglobal.com/news-and-blog/mediatek-wwc-challenging-business-environment-requires-new-approach-to-successfully-introducing-wi-fi-8/"
source_quality: full
topics: [802.11bn, products, MAC-layer, PHY-layer, power-save]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 4
---

## Summary (EN)

At Wi-Fi World Congress Mountain View 2026 (April 14, reported April 25), **James Chen, VP Product & Technology Marketing at MediaTek**, made two technically substantive disclosures behind a wider message about "humble pie" Wi-Fi 8 marketing in a tariff/geopolitics/memory-shortage environment.

**(1) DSO+ — a vendor extension that delivers Wi-Fi 8's Dynamic Sub-channel Operation (DSO) benefit to legacy Wi-Fi 6 / Wi-Fi 7 clients.** DSO is one of the headline 802.11bn features (per-user dynamic sub-channel allocation within a wider channel), but its benefits normally require both AP and client to be Wi-Fi 8. Chen disclosed that MediaTek has built a standards extension called **DSO+** that lets a Wi-Fi 8 AP apply DSO-style sub-channel scheduling to non-Wi-Fi-8 clients as well — and that they have already demonstrated it to customers ("works perfectly"). This addresses one of the key adoption frictions Chen named: it took three years from Wi-Fi 7 launch for 40% of phones/PCs to ship with Wi-Fi 7 silicon, so without DSO+-style backwards extensions, Wi-Fi 8 APs sit largely unused until ~2030 (40% client penetration). This is the most concrete single-vendor "beyond-standard" Wi-Fi 8 feature MediaTek has confirmed.

**(2) Digital Pre-Distortion (DPD) for FEM linearisation — 20% power reduction vs Wi-Fi 7.** Chen confirmed MediaTek has co-developed an improved DPD solution with one of the world's largest front-end-module (FEM) vendors (unnamed in the talk). DPD lets the FEM run closer to its compression point with lower distortion, cutting required PA back-off and therefore power. The 20% headline number is "to begin with, later probably more." Notably, this is **not** a Wi-Fi 8 standardised feature — it's a silicon/RF improvement that ships under a Wi-Fi 7 or Wi-Fi 8 product equally — but it bears on the per-Mbps energy story for both the connected PC and the AP.

Chen also gave the broader framing: "This is the most challenging business environment we've seen in over thirty years," meaning Wi-Fi 8 launches require a more patient cadence and clearer end-user messaging (his rhetorical bar: "Can I explain Wi-Fi 8 to my 82-year-old mother?").

## Summary (ZH)

在 Wi-Fi World Congress Mountain View 2026（4 月 14 日演讲，4 月 25 日报道），**MediaTek 产品与技术市场副总裁 James Chen** 在"关税 / 地缘 / 内存短缺"的大背景之下，于"低姿态推 Wi-Fi 8"的整体叙事中给出两条技术层面的实质性披露。

**（1）DSO+ ——把 Wi-Fi 8 的 Dynamic Sub-channel Operation (DSO) 收益带给旧 Wi-Fi 6 / Wi-Fi 7 客户端的厂商扩展。** DSO 是 802.11bn 的一项重头特性（在较宽信道内对每用户动态分配子信道），但通常需要 AP 与客户端都支持 Wi-Fi 8。Chen 披露 MediaTek 已构建了名为 **DSO+** 的标准扩展，使 Wi-Fi 8 AP 也能对非 Wi-Fi 8 客户端应用 DSO 样式的子信道调度，并已向客户做过演示（"工作完美"）。这直接回应了他点出的关键采纳痛点：从 Wi-Fi 7 发布到手机 / PC 出货 40% 支持，足足花了三年——若不做 DSO+ 这种向下兼容的扩展，Wi-Fi 8 AP 在客户端 40% 渗透前（约 2030 年）将基本被闲置。这是 MediaTek 目前最具体的单一厂商"超出标准"Wi-Fi 8 特性。

**（2）面向 FEM 线性化的数字预失真（DPD）—— 相比 Wi-Fi 7 功耗降低 20%。** Chen 确认 MediaTek 与一家全球最大的前端模块（FEM）厂商（演讲未点名）共同开发了改进 DPD 方案。DPD 让 FEM 可以在更接近压缩点的工作区运行而保持低失真，从而减小 PA 回退、降低功耗。20% 的标题数字"是初始水平，后续可能更高"。值得注意：这 **不是** Wi-Fi 8 标准化特性——它是无差别可用于 Wi-Fi 7 / Wi-Fi 8 产品的硅片 / 射频改进——但对 PC 与 AP 的"每 Mbps 能耗"曲线都有意义。

Chen 还给出了大背景的判断："这是过去三十年里最具挑战性的商业环境"，意味着 Wi-Fi 8 推出节奏要更耐心、对最终用户的传播要更清楚（他的口号是："我能向 82 岁的妈妈讲清楚 Wi-Fi 8 是什么吗？"）。

## Key technical points (EN)

- **DSO+:** MediaTek vendor extension allowing Wi-Fi 8 AP to apply DSO-style dynamic sub-channel scheduling to legacy Wi-Fi 6 / Wi-Fi 7 clients. Already demonstrated to customers.
- **Standardised DSO** requires both endpoints Wi-Fi 8; DSO+ relaxes that to AP-only — a non-standard interop pattern that should be observable on the wire as DSO-style sub-channel allocations targeting legacy clients.
- **DPD power reduction:** improved digital-pre-distortion solution co-developed with a top-tier FEM vendor; 20% power saving vs Wi-Fi 7 baseline ("to begin with"); silicon-level not standard-level.
- **Adoption framing:** Wi-Fi 7 took ~3 years to reach 40% client penetration → Wi-Fi 8 ~2030 for the same level. DSO+ explicitly designed to shorten this gap.
- **Boilable Wi-Fi 8 benefit list:** uplink-friendly (matters for AI services), better in-home coverage, mesh handoffs, network reliability, lower power.
- **Business context:** geopolitics, tariffs, memory chip shortage cited as the most challenging environment in 30 years for new-standard introductions.

## Key technical points (ZH)

- **DSO+：** MediaTek 厂商扩展，让 Wi-Fi 8 AP 对旧 Wi-Fi 6 / Wi-Fi 7 客户端施加 DSO 样式的动态子信道调度。已向客户演示。
- **标准化 DSO** 需要两端均为 Wi-Fi 8；DSO+ 把要求放宽为仅 AP 侧——这是一种非标准互通模式，从空口侧应能观测到 AP 对旧客户端使用 DSO 样式子信道分配的特征。
- **DPD 功耗降低：** 与一线 FEM 厂商共同开发的改进数字预失真方案；相对 Wi-Fi 7 基线节能 20%（"起步水平"）；属于硅片/RF 层而非标准层。
- **采纳节奏：** Wi-Fi 7 花约 3 年达到客户端 40% 渗透 → Wi-Fi 8 同等水平要到 2030 年左右。DSO+ 明确意在缩短这个空窗。
- **可消化的 Wi-Fi 8 收益列表：** 上行友好（对 AI 业务关键）、更好的家庭覆盖、Mesh 切换、网络可靠性、更低功耗。
- **业务背景：** 地缘、关税、内存芯片短缺被点名为 30 年来最具挑战的新标准导入环境。

## Why it matters / what's new (EN)

DSO+ is the second concrete "beyond IEEE 802.11bn" vendor feature surfaced this week, alongside Intel's QoS / sensing extensions in `intel-wwc-wifi8-vision`. The pattern is significant: silicon vendors are increasingly differentiating *outside* the standard while remaining compliant inside it, and the resulting client/AP feature mix is more vendor-specific than the Wi-Fi 5/6/7 transitions were. From a competitive-intelligence angle, DSO+ is also notable because it directly attacks the adoption friction (`extreme-networks-wifi7-momentum-q3`, `cisco-wifi7-breakout-year-2026`, `realtek-wifi7-revenue-surge-q1-2026` together describe the slow Wi-Fi 7 ramp): MediaTek says deploy Wi-Fi 8 APs *now*, you'll get DSO benefits even with your existing Wi-Fi 7 fleet. The DPD power claim is independently interesting because it's PA/FEM-side, not MAC/PHY-side — the spec readouts (`ieee-january-2026-readout`, `ieee-march-2026-readout`) don't capture power-amp-level efficiency improvements but they materially shape the per-mW energy budget for IoT/PC clients. Together with the Intel piece, this gives the KB its first direct view of what client- and AP-silicon vendors will actually ship under the Wi-Fi 8 banner — and how much of that ships *outside* the IEEE 802.11bn specification proper.

## Why it matters / what's new (ZH)

DSO+ 是本周浮现的第二条具体的"超出 IEEE 802.11bn"厂商特性，与 `intel-wwc-wifi8-vision` 中 Intel 的 QoS / 感知扩展形成对照。模式很重要：硅片厂商正越来越多地在标准 *之外* 做差异化（同时仍保持标准内合规），由此形成的客户端 / AP 特性组合，比 Wi-Fi 5/6/7 几代过渡更带有厂商色彩。从竞争情报角度，DSO+ 也很值得注意——它正面回击采纳摩擦（`extreme-networks-wifi7-momentum-q3`、`cisco-wifi7-breakout-year-2026`、`realtek-wifi7-revenue-surge-q1-2026` 合起来勾勒了 Wi-Fi 7 的缓慢上升曲线）：MediaTek 的口径是"现在就上 Wi-Fi 8 AP，对你已有的 Wi-Fi 7 客户端也能享受到 DSO 收益"。DPD 功耗指标独立地有意思——它发生在 PA/FEM 侧，而非 MAC/PHY 侧——KB 已有的标准 readout（`ieee-january-2026-readout`、`ieee-march-2026-readout`）并不覆盖功放级效率改进，但这对 IoT / PC 客户端的"每 mW 能耗"预算有实质影响。结合 Intel 那篇，KB 第一次拿到了客户端 / AP 硅片厂商在 Wi-Fi 8 旗号下真正会出货什么的直接视图——以及其中有多少其实落在 IEEE 802.11bn 规范之外。

## Images

![MediaTek's Wi-Fi 8 messaging framework at WWC Mountain View 2026 | MediaTek 在 WWC Mountain View 2026 的 Wi-Fi 8 信息传播框架](https://wifinowevents.s3.amazonaws.com/uploads/2026/04/Screenshot-2026-04-24-at-18.33.43-768x232.png)
![James Chen, VP Product & Technology Marketing at MediaTek, speaking at WWC Mountain View 2026 | MediaTek 产品与技术市场副总裁 James Chen 在 WWC Mountain View 2026 演讲](https://wifinowevents.s3.amazonaws.com/uploads/2026/04/Screenshot-2026-04-24-at-18.23.50.png)
