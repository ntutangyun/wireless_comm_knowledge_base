---
id: 2026-05-30_arxiv-deauth-resilience-pmf-testbed
date_published: 2026-02-26
date_found: 2026-05-30
type: academic-paper
technology: wifi
title_en: "A software-defined testbed for quantifying deauthentication resilience: PMF / WPA3 vs legacy Wi-Fi"
title_zh: "量化去认证攻击韧性的软件定义测试床：PMF / WPA3 与传统 Wi-Fi 的对比"
url: https://arxiv.org/abs/2602.23513
source_quality: full
topics: [802.11w, PMF, deauthentication, WPA3, security, MAC-layer]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 1
---

## Summary (EN)
Carbajal and Jodeiri Akbarfam (Washington State University Tri-Cities) present an automated, software-defined access-point testbed that quantifies how well modern Wi-Fi configurations resist the classical deauthentication denial-of-service attack — the attack that forges unprotected 802.11 management (deauth/disassociate) frames to forcibly disconnect clients. The testbed is built on Arch Linux with three roles (software AP host, attacker, clients) using commodity NICs in monitor/injection mode, and is offered as a reproducible alternative to vendor-specific platforms.

They sweep five security configurations — open, WPA1, WPA2 without Protected Management Frames (PMF / 802.11w), WPA2 with PMF, and WPA3 — and report three metrics: average client disconnection rate, median packets-to-disconnect, and median time-to-disruption. The result is a clean quantitative confirmation of the expected boundary: open, WPA1 and WPA2-without-PMF were 100% vulnerable (clients dropped in ~0.22–0.28 s after a few thousand injected frames), while WPA2-with-PMF and WPA3 saw 0% successful disconnections under the tested conditions. The headline contribution is the systematic, identical-conditions comparison and the open testbed, not a new attack or defense.

## Summary (ZH)
Carbajal 与 Jodeiri Akbarfam（华盛顿州立大学 Tri-Cities 分校）提出了一个自动化的软件定义接入点测试床，用于量化现代 Wi-Fi 配置对经典去认证拒绝服务攻击的抵抗能力——该攻击伪造未受保护的 802.11 管理帧（deauth/disassociate）以强制断开客户端。测试床基于 Arch Linux，包含三个角色（软件 AP 主机、攻击者、客户端），使用支持监听/注入模式的通用网卡，作为可复现的、不依赖特定厂商平台的替代方案。

作者遍历五种安全配置——开放、WPA1、不带受保护管理帧（PMF / 802.11w）的 WPA2、带 PMF 的 WPA2、以及 WPA3——并报告三项指标：平均客户端断连率、断连所需中位数据包数、以及中位中断时间。结果干净地量化确认了预期边界：开放、WPA1 与不带 PMF 的 WPA2 在 100% 情况下被攻破（注入数千帧后约 0.22–0.28 秒内客户端掉线），而带 PMF 的 WPA2 与 WPA3 在测试条件下断连成功率为 0%。核心贡献是同等条件下的系统化对比与开放测试床，而非新的攻击或防御。

## Key technical points (EN)
- Reproducible software-defined AP testbed (Arch Linux + commodity monitor-mode NICs); host / attacker / client roles.
- Five configs swept: open, WPA1, WPA2 (no PMF), WPA2 (PMF), WPA3.
- Metrics: avg disconnect %, median packets-to-disconnect, median time-to-disruption.
- Findings: open / WPA1 / WPA2-no-PMF = 100% disconnect (~0.22–0.28 s); WPA2-PMF and WPA3 = 0%.
- Confirms PMF (802.11w) as the operative mitigation; isolates its effect under identical conditions.
- Limitation: small client count (hardware-constrained), so dense-deployment generalisation is open.

## Key technical points (ZH)
- 可复现的软件定义 AP 测试床（Arch Linux + 通用监听模式网卡）；主机 / 攻击者 / 客户端三角色。
- 遍历五种配置：开放、WPA1、WPA2（无 PMF）、WPA2（PMF）、WPA3。
- 指标：平均断连率、断连所需中位数据包数、中位中断时间。
- 结论：开放 / WPA1 / WPA2-无-PMF = 100% 断连（约 0.22–0.28 秒）；WPA2-PMF 与 WPA3 = 0%。
- 确认 PMF（802.11w）为有效缓解手段；在同等条件下隔离其作用。
- 局限：客户端数量少（受硬件限制），密集部署下的泛化性待验证。

## Why it matters / what's new (EN)
Novelty 1 — this is a confirmatory measurement study, not a new mechanism. Deauthentication DoS and PMF/802.11w as its mitigation are long established (prior art: Schepers et al. 2022; Chatzoglou et al. 2022). The contribution is the open, reproducible testbed and a clean side-by-side dataset across all five configurations under identical conditions, which is useful as a teaching/benchmarking reference and as a quantified argument for retiring legacy no-PMF deployments. It is the first `security-privacy` paper added since the May lull and resets the dedicated arxiv security query after a stale run.

## Why it matters / what's new (ZH)
新颖度 1——这是一项确认性测量研究，而非新机制。去认证拒绝服务及其缓解手段 PMF/802.11w 早已确立（现有技术：Schepers 等 2022；Chatzoglou 等 2022）。其贡献在于开放、可复现的测试床，以及在同等条件下覆盖全部五种配置的整洁对比数据集，可作为教学/基准参考，并为淘汰传统无 PMF 部署提供量化论据。它是五月沉寂以来新增的首篇 `security-privacy` 论文，并在一次陈旧检索后重置了专用的 arxiv 安全检索源。
