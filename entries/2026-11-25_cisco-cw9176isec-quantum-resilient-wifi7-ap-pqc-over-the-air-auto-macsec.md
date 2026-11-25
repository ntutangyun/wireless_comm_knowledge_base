---
id: 2026-11-25_cisco-cw9176isec-quantum-resilient-wifi7-ap-pqc-over-the-air-auto-macsec
date_published: 2026-10-26
date_found: 2026-11-25
technology: wifi
type: product
title_en: "Cisco CW9176ISEC: a Wi-Fi 7 access point with quantum-resilient capabilities, PQC over the air based on the IEEE 802.11bt draft, and Auto MACsec"
title_zh: "Cisco CW9176ISEC：具备抗量子能力的 Wi-Fi 7 接入点——基于 IEEE 802.11bt 草案的空口后量子密码（PQC OTA）与 Auto MACsec"
url: "https://blogs.cisco.com/networking/wireless-is-the-next-security-frontier-and-cisco-is-leading-the-way"
source_quality: full
topics: [Wi-Fi 7, 802.11bt, post-quantum cryptography, CNSA 2.0, MACsec, enterprise Wi-Fi, secure boot]
topic_primary: security-privacy
topics_secondary: [wifi7-deployment]
novelty_score: 3
---

## Summary (EN)
In a Cisco blog post dated 26 October 2026 ("Wireless is the next security frontier, and Cisco is leading the way", by Peter Lane), Cisco announces the Cisco Wireless CW9176ISEC, which the post calls "the industry's first Wi-Fi 7 access point with quantum-resilient capabilities". The CW9176ISEC builds on the existing CW9176I and adds security capabilities that the post says are designed to meet the requirements of national security systems and of organizations with demanding security and compliance needs. The post states the access point is aligned to CNSA 2.0, the NSA's set of quantum-resistant algorithms, and notes that starting 1 January 2027 all new national security system deployments must comply with CNSA 2.0, with fielded equipment targeted to complete the transition by the end of 2030. Cisco also says that, starting in January, the Cisco Wireless 9800 Series Wireless Controllers and Campus Gateways are being refreshed to bring the same quantum-resilient security capabilities.

The second element is "PQC over the air (OTA)", described in the post as based on the IEEE 802.11bt draft specification and pursued in partnership with Qualcomm Technologies, Microsoft and Intel. According to the post it is available starting in January across Cisco's Wi-Fi 7 access point portfolio; Cisco provides Qualcomm-powered access points, while the client side is supported by an Intel Wi-Fi chipset and driver and by Microsoft for Windows system software. The post says existing wireless ecosystems can support quantum-resilient communications without a rip-and-replace. Quotes from Microsoft (Dana Huang), Intel (David Feng) and Qualcomm Technologies are included in the post.

The third element is Auto MACsec for the link between the access point and the switch. The post describes it as automatically detecting compatible Wi-Fi 7 access points, applying the required security policies and establishing certificate-based encryption between the access point and the switch; when an access point moves to another port, the protection follows automatically. It is stated to be available now with IOS XE 26.2.1 and supported on Cisco C9350 Series Smart Switches, available out of the box with the CW9176ISEC, and existing access points can establish MACsec and 802.1X without manual configuration after upgrading to IOS XE 26.2.1.

Beyond these items the post frames the launch as covering "quantum-resilient secure boot, client-to-AP communications, AP-to-management communications, and AP-to-switch protection with MACsec", and describes the CW9176ISEC as "the first quantum-resilient secure-boot-ready Wi-Fi 7 access point". It also mentions combining PQC OTA with micro-segmentation using security group tags, Cisco Resilient Infrastructure configuration warnings, and Live Protect on Wireless LAN Controllers and Campus Gateways. All "first" statements above are Cisco's own claims.

## Summary (ZH)
Cisco 在 2026 年 10 月 26 日的博客文章（《Wireless is the next security frontier, and Cisco is leading the way》，作者 Peter Lane）中发布了 Cisco Wireless CW9176ISEC，文中称其为“业界首款具备抗量子能力的 Wi-Fi 7 接入点”。CW9176ISEC 基于现有的 CW9176I，增加了文中所述旨在满足国家安全系统及高安全合规要求机构需求的安全能力。文章称该接入点与 NSA 抗量子算法集 CNSA 2.0 对齐，并指出自 2027 年 1 月 1 日起所有新的国家安全系统部署必须符合 CNSA 2.0，已部署设备的过渡目标是在 2030 年底前完成。Cisco 还表示，自 1 月起，Cisco Wireless 9800 系列无线控制器和 Campus Gateway 将更新，具备相同的抗量子安全能力。

第二项是“空口 PQC（PQC over the air，OTA）”。文中称其基于 IEEE 802.11bt 草案规范，由 Cisco 与 Qualcomm Technologies、Microsoft 和 Intel 合作推进。据文章所述，该功能自 1 月起在 Cisco 的 Wi-Fi 7 接入点产品线中提供；Cisco 提供基于 Qualcomm 的接入点，客户端侧由 Intel Wi-Fi 芯片组及驱动、Microsoft 的 Windows 系统软件支持。文章称现有无线生态无需推倒重来即可支持抗量子通信，并引用了 Microsoft（Dana Huang）、Intel（David Feng）和 Qualcomm Technologies 的表态。

第三项是接入点与交换机之间链路的 Auto MACsec。文中描述其可自动识别兼容的 Wi-Fi 7 接入点、应用所需安全策略，并在接入点与交换机之间建立基于证书的加密；接入点换到其他端口时保护会自动跟随。文章称其现已随 IOS XE 26.2.1 提供，支持 Cisco C9350 系列智能交换机，CW9176ISEC 开箱即用，现有接入点升级到 IOS XE 26.2.1 后无需手工配置即可建立 MACsec 和 802.1X。

此外，文章将此次发布概括为覆盖“抗量子安全启动、客户端到 AP 通信、AP 到管理平面通信，以及基于 MACsec 的 AP 到交换机保护”，并称 CW9176ISEC 是“首款具备抗量子能力、支持安全启动的 Wi-Fi 7 接入点”。文中还提到将 PQC OTA 与基于安全组标签（security group tags）的微分段结合使用、Cisco Resilient Infrastructure 的配置风险提示，以及无线控制器和 Campus Gateway 上的 Live Protect。以上所有“首款”表述均为 Cisco 自身的说法。

## Key technical points (EN)
- Product: Cisco Wireless CW9176ISEC, built on the CW9176I, described by Cisco as a quantum-resilient, secure-boot-ready Wi-Fi 7 access point aligned to CNSA 2.0.
- Timeline as stated in the post: new national security system deployments must comply with CNSA 2.0 from 1 January 2027; fielded equipment targeted to finish the transition by the end of 2030. Controller and Campus Gateway refresh and PQC OTA availability are stated as "starting in January".
- PQC over the air: based on the IEEE 802.11bt draft specification; Cisco supplies Qualcomm-powered access points, client side uses an Intel Wi-Fi chipset and driver plus Microsoft Windows system software.
- Auto MACsec: certificate-based AP-to-switch encryption applied automatically, following the AP when it moves ports; available with IOS XE 26.2.1 on C9350 Series Smart Switches.
- Related items named in the post: micro-segmentation with security group tags combined with PQC OTA, Cisco Resilient Infrastructure warnings, Live Protect on Wireless LAN Controllers and Campus Gateways.

## Key technical points (ZH)
- 产品：Cisco Wireless CW9176ISEC，基于 CW9176I，Cisco 称其为与 CNSA 2.0 对齐、支持安全启动的抗量子 Wi-Fi 7 接入点。
- 文中给出的时间线：新的国家安全系统部署自 2027 年 1 月 1 日起必须符合 CNSA 2.0；已部署设备目标在 2030 年底前完成过渡。控制器与 Campus Gateway 的更新以及 PQC OTA 的可用时间表述为“自 1 月起”。
- 空口 PQC：基于 IEEE 802.11bt 草案规范；Cisco 提供基于 Qualcomm 的接入点，客户端侧使用 Intel Wi-Fi 芯片组及驱动与 Microsoft Windows 系统软件。
- Auto MACsec：自动建立基于证书的 AP 到交换机加密，AP 换端口时保护随之迁移；随 IOS XE 26.2.1 在 C9350 系列智能交换机上提供。
- 文中提及的相关项：PQC OTA 与基于安全组标签的微分段结合、Cisco Resilient Infrastructure 提示、无线控制器和 Campus Gateway 上的 Live Protect。

## Why it matters / what's new (EN)
The KB already follows the post-quantum thread on the standards side: TGbt digests such as 2026-11-24_ieee-mentor-tgbt-cisco-lb297-pow-cr-r7-lifetime-extension-admission-token-dcn-1941-1980 track the IEEE 802.11bt comment-resolution work. This entry adds a vendor product announcement that says it implements PQC over the air on the 802.11bt draft, together with the partners named (Qualcomm-powered access points on the AP side; Intel and Microsoft on the client side) and the availability months Cisco states. It is a vendor blog, so performance, algorithm choices and the exact feature set are not specified in the source; those details are not in the post. The related earlier Cisco enterprise roadmap entry is 2026-10-22_cisco-wifi8-enterprise-roadmap-smd-dbe-dso-npca-duo-wba.

## Why it matters / what's new (ZH)
知识库已在标准侧跟踪后量子线索：如 2026-11-24_ieee-mentor-tgbt-cisco-lb297-pow-cr-r7-lifetime-extension-admission-token-dcn-1941-1980 等 TGbt 摘要记录了 IEEE 802.11bt 的意见处理工作。本条新增的是一项厂商产品发布：Cisco 称其在 802.11bt 草案基础上实现了空口 PQC，并列出了合作方（AP 侧为基于 Qualcomm 的接入点，客户端侧为 Intel 与 Microsoft）及其所述的可用月份。来源为厂商博客，文中未给出性能数据、算法选择及完整功能细节。Cisco 此前的企业级路线图条目见 2026-10-22_cisco-wifi8-enterprise-roadmap-smd-dbe-dso-npca-duo-wba。
