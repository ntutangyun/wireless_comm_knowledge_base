---
id: 2026-05-01_arxiv-gr-wifi-platform
date_found: 2026-05-01
date_published: 2025-01-10
type: academic-paper
title_en: "GR-WiFi: A GNU Radio-based WiFi Platform with Single-User and Multi-User MIMO Capability"
title_zh: "GR-WiFi：基于 GNU Radio 的支持单用户与多用户 MIMO 的 Wi-Fi 平台"
url: "https://arxiv.org/abs/2501.06176"
source_quality: full
topics: [802.11ax, 802.11be, MU-MIMO, PHY-layer]
topic_primary: mapc-cosr
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

GR-WiFi is an open-source GNU Radio-based Wi-Fi software-defined-radio platform that — uniquely in the open ecosystem — supports both **single-user MIMO and multi-user MIMO** transmission and reception, including DL MU-MIMO with explicit beamforming feedback. Until now, openly available SDR Wi-Fi implementations either skipped MU-MIMO or limited support to one or two simplified scenarios. GR-WiFi closes that gap with a real implementation that researchers can use for measurement, protocol-modification experiments, and ML model evaluation against actual radios.

The platform is positioned as foundational infrastructure: every paper that wants to validate a Wi-Fi PHY/MAC modification on real hardware now has a credible open option (joining ns-3 modules like the 802.11bf one in `2026-05-01_arxiv-bf-ax-coexistence-ns3.md`).

## Summary (ZH)

GR-WiFi 是一个基于 GNU Radio 的开源 Wi-Fi 软件无线电（SDR）平台 —— 在开源生态中独此一家地同时支持**单用户 MIMO 与多用户 MIMO** 的发送与接收，包括带显式波束成形反馈的下行 MU-MIMO。此前公开可用的 SDR Wi-Fi 实现要么完全不做 MU-MIMO，要么只支持有限的简化场景。GR-WiFi 用一个真实可用的实现填补了这一缺口，研究者可用于测量、协议改动实验、以及在真实射频条件下评估 ML 模型。

该平台定位为基础设施：任何想在真实硬件上验证 Wi-Fi PHY/MAC 改动的论文，现在都有一个可信的开源选项（与 `2026-05-01_arxiv-bf-ax-coexistence-ns3.md` 中提到的 802.11bf ns-3 模块共同构成评估栈）。

## Key technical points (EN)

- Open-source, GNU Radio-based
- SU-MIMO + MU-MIMO transmission and reception
- DL MU-MIMO with explicit beamforming feedback
- Researcher-grade evaluation platform

## Key technical points (ZH)

- 开源、基于 GNU Radio
- SU-MIMO + MU-MIMO 收发都支持
- 下行 MU-MIMO 含显式波束成形反馈
- 适合学术 / 研究级评估的平台

## Why it matters / what's new (EN)

- **Closes a long-standing gap in open SDR Wi-Fi tooling.** Researchers no longer need proprietary tools to test MU-MIMO mods.
- **Pairs with the bf-ax ns-3 module entry (`2026-05-01_arxiv-bf-ax-coexistence-ns3.md`):** GR-WiFi covers SDR-based testing, ns-3 covers system-level simulation. Two complementary slots in the open evaluation stack.

## Why it matters / what's new (ZH)

- **填补开源 SDR Wi-Fi 工具长期空白。** 研究者不再需要使用专有工具来测试 MU-MIMO 改动。
- **与 bf-ax ns-3 模块条目（`2026-05-01_arxiv-bf-ax-coexistence-ns3.md`）形成搭配：** GR-WiFi 覆盖 SDR 测试，ns-3 覆盖系统级仿真。在开源评估栈中是两个互补位。
