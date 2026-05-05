---
id: 2026-05-04_ofcom-better-together-6ghz-uk
date_published: 2026-04-10
date_found: 2026-05-04
type: industry-news
title_en: "Ofcom (UK) \"Better Together\" upper-6 GHz plan: shared Wi-Fi + mobile use stands in sharp contrast to EU RSPG decision"
title_zh: "英国 Ofcom \"Better Together\" 上 6 GHz 方案：Wi-Fi 与移动共享，与欧盟 RSPG 立场形成鲜明对比"
url: "https://wifinowglobal.com/news-and-blog/guest-paper-what-ofcoms-better-together-6-ghz-plan-means-for-wi-fi-mobile-the-eu/"
source_quality: full
topics: [6GHz, regulation, products]
topic_primary: spectrum-policy
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

In a Cisco white paper authored by Pelin Salem (Cisco's Radio Regulatory Technical Leader, Wireless CTO Office) and published via Wi-Fi NOW Global on **April 10 2026**, Ofcom's recent UK upper-6 GHz decision is presented as a **deliberate counterpoint to the EU Radio Spectrum Policy Group (RSPG) opinion** that the KB already covers in `eu-rspg-upper-6ghz-decision`. Where RSPG signalled prioritising most of the upper 6 GHz (6.425–7.125 GHz) for licensed mobile services, Ofcom's "Better Together" approach explicitly designs the same band to **share between Wi-Fi (unlicensed) and mobile**, treating the two as complementary rather than competing for the same MHz.

The white paper unpacks the rationale: the UK regulator's view is that Wi-Fi already carries the majority of mobile-device traffic indoors, so optimising the upper-6 GHz purely for licensed cellular forecloses the most efficient indoor-spectrum option. "Better Together" instead pursues a shared-frequency architecture supported by Automated Frequency Coordination (AFC) and time/space sharing rules, so that outdoor licensed mobile and indoor unlicensed Wi-Fi can both operate.

For the wider Wi-Fi industry this is the first formal national-regulator decision in Europe that diverges from the RSPG line. It creates a reference template for other EU member states (Germany, France, Italy) that have not yet decided their upper-6 GHz allocation, and it sets up a real-world test of whether Wi-Fi 7 / Wi-Fi 8 320 MHz channels and licensed 5G/6G can coexist with non-trivial AFC-style coordination — an open question that earlier KB entries (`arxiv-llm-6ghz-wifi-nru-coexistence`, `arxiv-policy-driven-drl-nru-wifi-coexistence`) approach from the algorithmic side.

## Summary (ZH)

在一份由思科 Pelin Salem（思科无线 CTO 办公室 / 公司合规部门的射频法规技术负责人）撰写、并于 **2026 年 4 月 10 日** 通过 Wi-Fi NOW Global 发布的白皮书中，英国 Ofcom 最近的上 6 GHz 决策被定位为对 KB 已有条目 `eu-rspg-upper-6ghz-decision` 中 **欧盟无线电频谱政策组（RSPG）意见的有意反衬**。RSPG 倾向于把上 6 GHz（6.425–7.125 GHz）大部分优先用于授权移动业务；而 Ofcom 的"Better Together"方案则明确把同一频段设计为 **Wi-Fi（非授权）与移动共享**，把二者视为互补而非争抢同样的 MHz。

白皮书阐述了立论：英国监管者的判断是 Wi-Fi 在室内已经承载了大部分移动设备流量，把上 6 GHz 完全优化给授权蜂窝等于关闭了最高效的室内频谱选项。"Better Together"反而追求一个共享频谱架构——以自动频率协调（AFC）和时空共享规则为支撑——使室外授权移动与室内非授权 Wi-Fi 都能运行。

对整个 Wi-Fi 行业，这是欧洲第一个与 RSPG 路线明确分歧的国家级监管决定。它为尚未决定上 6 GHz 分配的其他欧盟成员国（德国、法国、意大利）提供了参考模板，也为"Wi-Fi 7 / Wi-Fi 8 的 320 MHz 信道是否能与授权 5G/6G 在非平凡 AFC 式协调下共存"这个开放问题，搭建了一个真实世界测试场——KB 此前从算法侧探讨该问题的条目有 `arxiv-llm-6ghz-wifi-nru-coexistence`、`arxiv-policy-driven-drl-nru-wifi-coexistence`。

## Key technical points (EN)

- **"Better Together" plan:** Ofcom (UK) decision to share upper-6 GHz (6.425–7.125 GHz) between unlicensed Wi-Fi and licensed mobile, rather than allocating exclusively to one.
- **Sharing tools:** AFC for outdoor / standard-power Wi-Fi; time/space coordination rules between the two services.
- **Direct contrast with EU RSPG:** RSPG signalled prioritising most of the upper-6 GHz to mobile (per `eu-rspg-upper-6ghz-decision`); Ofcom rejects that prioritisation.
- **Author / source:** White paper by Pelin Salem, Cisco — second in the series. Cisco-side framing emphasises Wi-Fi's existing role in indoor traffic offload.
- **Implications for member states:** likely template for other EU regulators (DE, FR, IT) still undecided.
- **Forthcoming Wi-Fi NOW TV debate:** "European 6 GHz regulation at a crossroads: Ofcom vs. RSPG" scheduled May 19 2026.

## Key technical points (ZH)

- **"Better Together"方案：** 英国 Ofcom 决定把上 6 GHz（6.425–7.125 GHz）在 Wi-Fi（非授权）与授权移动之间共享，而非独占式分配。
- **共享工具：** 户外 / 标准功率 Wi-Fi 用 AFC；两类业务之间时空协调规则。
- **与欧盟 RSPG 直接对照：** RSPG 倾向于上 6 GHz 大部分优先给移动（见 `eu-rspg-upper-6ghz-decision`）；Ofcom 拒绝这一优先化。
- **作者 / 来源：** Cisco Pelin Salem 撰写的白皮书——系列第二篇。Cisco 侧的论述强调 Wi-Fi 在室内流量分担中的既有角色。
- **对成员国的含义：** 很可能成为其他尚未定调的欧盟监管者（DE、FR、IT）的参考模板。
- **后续讨论：** Wi-Fi NOW TV 计划于 2026 年 5 月 19 日举行"欧洲 6 GHz 监管的十字路口：Ofcom vs. RSPG"专题。

## Why it matters / what's new (EN)

The KB's existing `eu-rspg-upper-6ghz-decision` captures one side of the European 6 GHz debate; this Ofcom-via-Cisco piece supplies the other. Together they make the European upper-6 GHz situation legible as a *split*, not a settled outcome — which materially affects how Wi-Fi 7 / Wi-Fi 8 320 MHz deployment plans (`qualcomm-wifi8-mwc2026`, `mediatek-filogic8000-ces2026`, `broadcom-wifi8-ces2026`, `intel-wwc-wifi8-vision`) need to read European regulatory risk for 2027–2028. It also adds the missing AFC-and-coordination angle: where the RSPG decision is essentially exclusionary, the Ofcom path requires the kind of dynamic-coordination machinery that academic work in `arxiv-llm-6ghz-wifi-nru-coexistence` and the new `arxiv-policy-driven-drl-nru-wifi-coexistence` (added today) is exactly designed for. So the regulatory split is not just a policy story — it sets up which technical body of work matters in which jurisdiction.

## Why it matters / what's new (ZH)

KB 已有 `eu-rspg-upper-6ghz-decision` 给出欧洲 6 GHz 辩论的一面；这条 Ofcom（由 Cisco 撰文转述）补上了另一面。合在一起，欧洲上 6 GHz 局面就被可读地呈现为一种 *分裂* 而非已定局——这对 Wi-Fi 7 / Wi-Fi 8 的 320 MHz 部署计划（`qualcomm-wifi8-mwc2026`、`mediatek-filogic8000-ces2026`、`broadcom-wifi8-ces2026`、`intel-wwc-wifi8-vision`）如何评估 2027–2028 年欧洲监管风险有实质影响。它还补上了缺失的"AFC 与协调"角度：RSPG 的决策本质上是排他式的，而 Ofcom 的路径则恰需 `arxiv-llm-6ghz-wifi-nru-coexistence` 与今天新增的 `arxiv-policy-driven-drl-nru-wifi-coexistence` 这类学术工作所设计的动态协调机制。所以监管分裂不只是政策故事——它决定了在哪个司法管辖下，哪类技术工作最重要。

## Images

![Cisco white paper thumbnail — "What Ofcom's Better Together 6 GHz plan means for Wi-Fi, mobile, & the EU" | Cisco 白皮书封面 ——《Ofcom Better Together 6 GHz 方案对 Wi-Fi、移动与欧盟意味着什么》](https://wifinowevents.s3.amazonaws.com/uploads/2026/04/CiscoWhitePaperThumb-600x839.png)
![6 GHz Wi-Fi vs mobile band-plan illustration | 6 GHz Wi-Fi 与移动频段规划示意](https://wifinowevents.s3.amazonaws.com/uploads/2026/01/Screenshot-2026-01-24-at-14.17.44-768x303.png)
