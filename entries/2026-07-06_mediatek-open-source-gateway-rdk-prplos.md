---
id: 2026-07-06_mediatek-open-source-gateway-rdk-prplos
date_published: 2026-06-29
date_found: 2026-07-06
type: industry-news
title_en: "MediaTek emerges as Wi-Fi 7's open-source gateway leader for RDK-B and prplOS"
title_zh: "联发科成为 Wi-Fi 7 开源网关平台（RDK-B 与 prplOS）的领军者"
url: "https://wifinowglobal.com/news-and-blog/mediatek-emerges-as-wi-fi-7s-open-source-rdk-b-and-prplos-gateway-leader/"
source_quality: full
topics: [802.11be, RDK-B, prplOS, OpenWrt, products, deployment]
topic_primary: wifi7-deployment
topics_secondary: [wifi8-uhr]
novelty_score: 1
---

## Summary (EN)

Wi-Fi NOW (Claus Hetting, June 29, 2026) reports that MediaTek has become the leading — and currently the only — Wi-Fi SoC vendor with commercial Wi-Fi 7 gateway deployments running on both of the industry's major open-source broadband gateway platforms, RDK-B and prplOS. The flagship proof point is Deutsche Telekom's Speedport 7 gateway: RDK-B-powered with MediaTek Filogic Wi-Fi 7 SoCs, it has passed one million deployed routers and is described as DT's most successful gateway product launch ever. MediaTek was also the first Wi-Fi SoC vendor to participate in a commercial Tier-One prplOS gateway deployment with a major European ISP.

The structural argument for open-source gateway software is supplier decoupling. Unlike proprietary gateway stacks, RDK-B and prplOS separate the operator's management software from the underlying silicon through standardized Linux-based interfaces, so an operator can change chipset or gateway suppliers without rewriting its higher-level management layer. MediaTek's early bet on this model — and the engineering work of adapting its SDK to both ecosystems — is what the article credits for its current market position.

A notable enabler is the Banana Pi BPI-R4 reference platform (April 2024): an open-source hardware design plus SDK, originally built for OpenWrt and since adapted to RDK-B and prplOS. The platform requires no contract or NDA, so OEMs and operators can begin development without the traditional silicon-vendor onboarding process. Looking forward, the article notes that Wi-Fi 8 Filogic SoCs are already available to partners, with commercial Wi-Fi 8 gateway products anticipated within roughly one year.

## Summary (ZH)

Wi-Fi NOW（Claus Hetting，2026 年 6 月 29 日）报道称，联发科已成为业界领先——目前也是唯一——在两大主流开源宽带网关平台（RDK-B 与 prplOS）上都有商用 Wi-Fi 7 网关部署的 Wi-Fi SoC 厂商。旗舰案例是德国电信的 Speedport 7 网关：基于 RDK-B、搭载联发科 Filogic Wi-Fi 7 SoC，部署量已突破一百万台，被称为德国电信有史以来最成功的网关产品发布。联发科也是首个参与欧洲主要运营商 Tier-1 prplOS 商用网关部署的 Wi-Fi SoC 厂商。

开源网关软件的结构性优势在于供应商解耦。与专有网关软件栈不同，RDK-B 和 prplOS 通过标准化的 Linux 接口将运营商管理软件与底层芯片分离，运营商更换芯片或网关供应商时无需重写上层管理软件。文章认为，联发科对这一模式的早期押注——以及将其 SDK 适配到两个生态的工程投入——是其当前市场地位的来源。

一个值得注意的推动因素是 Banana Pi BPI-R4 参考平台（2024 年 4 月）：开源硬件设计加 SDK，最初面向 OpenWrt，后适配 RDK-B 与 prplOS。该平台无需合同或 NDA，OEM 和运营商可以绕过传统芯片厂商的准入流程直接开始开发。展望未来，文章指出 Wi-Fi 8 Filogic SoC 已向合作伙伴提供，商用 Wi-Fi 8 网关产品预计约一年内出现。

## Key technical points (EN)

- MediaTek is currently the only Wi-Fi SoC vendor with commercial Wi-Fi 7 gateway deployments on both RDK-B and prplOS.
- Deutsche Telekom Speedport 7 (RDK-B + MediaTek Filogic Wi-Fi 7 SoCs) has surpassed 1,000,000 deployed routers — DT's most successful gateway launch.
- First commercial Tier-One prplOS gateway deployment with a major European ISP also used MediaTek silicon.
- RDK-B / prplOS decouple operator management software from silicon via standardized Linux interfaces, enabling chipset/supplier swaps without management-stack rewrites.
- Banana Pi BPI-R4 (April 2024) is the open reference platform: open hardware + SDK, no contract/NDA required; OpenWrt first, later adapted to RDK-B and prplOS.
- Wi-Fi 8 Filogic SoCs are already sampling to partners; commercial Wi-Fi 8 gateway products expected within ~1 year.

## Key technical points (ZH)

- 联发科是目前唯一在 RDK-B 与 prplOS 两个平台上都有商用 Wi-Fi 7 网关部署的 Wi-Fi SoC 厂商。
- 德国电信 Speedport 7（RDK-B + 联发科 Filogic Wi-Fi 7 SoC）部署量已超过 100 万台，是德国电信最成功的网关产品发布。
- 欧洲主要运营商的首个 Tier-1 prplOS 商用网关部署同样采用联发科芯片。
- RDK-B / prplOS 通过标准化 Linux 接口将运营商管理软件与芯片解耦，更换芯片/供应商无需重写管理软件栈。
- Banana Pi BPI-R4（2024 年 4 月）是其开放参考平台：开源硬件 + SDK，无需合同或 NDA；最初面向 OpenWrt，后适配 RDK-B 与 prplOS。
- Wi-Fi 8 Filogic SoC 已向合作伙伴送样，商用 Wi-Fi 8 网关产品预计约一年内推出。

## Why it matters / what's new (EN)

First entry covering the open-source gateway software ecosystem (RDK-B / prplOS) as a competitive axis in Wi-Fi 7 silicon. The KB already tracks MediaTek's Wi-Fi 8 silicon roadmap (2026-05-01_mediatek-filogic8000-ces2026) and its DSO+ mechanism work (2026-05-04_mediatek-wwc-dso-plus); this article adds the go-to-market layer: operator-scale deployments (DT's 1M Speedport 7 units) won through software-platform openness rather than radio specsmanship. The supplier-decoupling argument matters for how quickly Wi-Fi 8 silicon can reach carrier CPE — an operator already on RDK-B/prplOS with Filogic Wi-Fi 7 can slot in Wi-Fi 8 SoCs without a management-stack rewrite, which supports the article's ~1-year commercial Wi-Fi 8 gateway expectation. Also notable for the community: the no-NDA Banana Pi BPI-R4 path continues to lower the barrier for independent Wi-Fi 7 systems research on production-grade silicon.

## Why it matters / what's new (ZH)

这是 KB 中第一条将开源网关软件生态（RDK-B / prplOS）作为 Wi-Fi 7 芯片竞争维度的条目。KB 已收录联发科的 Wi-Fi 8 芯片路线图（2026-05-01_mediatek-filogic8000-ces2026）和 DSO+ 机制工作（2026-05-04_mediatek-wwc-dso-plus）；本文补充了市场化层面：运营商规模的部署（德国电信 100 万台 Speedport 7）是靠软件平台开放性而非射频参数竞赛赢得的。供应商解耦的论点关系到 Wi-Fi 8 芯片进入运营商 CPE 的速度——已在 RDK-B/prplOS 上使用 Filogic Wi-Fi 7 的运营商可以直接换装 Wi-Fi 8 SoC 而无需重写管理软件栈，这支撑了文章"约一年内出现商用 Wi-Fi 8 网关"的预期。对社区同样值得注意：无需 NDA 的 Banana Pi BPI-R4 路径持续降低在量产级芯片上开展独立 Wi-Fi 7 系统研究的门槛。

## Images

![MediaTek open-source home gateway platforms | 联发科开源家庭网关平台](https://wifinowevents.s3.amazonaws.com/uploads/2026/06/HomeGatewayMediaTek-1024x512.png)
