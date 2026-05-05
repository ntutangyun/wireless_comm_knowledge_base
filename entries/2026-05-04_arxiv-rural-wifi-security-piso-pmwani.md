---
id: 2026-05-04_arxiv-rural-wifi-security-piso-pmwani
date_published: 2026-04-03
date_found: 2026-05-04
type: academic-paper
title_en: "Open Challenges for Secure and Scalable Wi-Fi Connectivity in Rural Areas — Piso-WiFi and PM-WANI Field Survey + Attacks"
title_zh: "面向农村地区安全可扩展 Wi-Fi 接入的开放挑战 —— Piso-WiFi 与 PM-WANI 现场实测 + 攻击验证"
url: "https://arxiv.org/abs/2604.02774"
source_quality: full
topics: [security, IoT]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Astillo, Sengupta, and Vanhoef (arXiv 2604.02774, posted 3 April 2026; accepted to SPAIC, AsiaCCS Workshops 2026) field-survey two of the largest pay-for-use Wi-Fi ecosystems serving rural connectivity in Asia: the **Piso-WiFi** hotspot model widespread in the Philippines (coin-/QR-paid micro-hotspots) and India's **PM-WANI** national initiative (Public Wi-Fi Access Network Interface, the regulator-backed framework that lets local entrepreneurs run public APs). The paper combines deployment surveys in both countries with two practical, validated attack classes against operational systems.

The first attack is **session hijacking** — riding on top of another user's already-paid time window, by exploiting the way captive-portal billing is keyed (typically MAC-/IP-tied state without strong cryptographic binding). The second is **rogue-hotspot deployment** — spoofing a Piso-WiFi or PM-WANI SSID and skimming credentials / payment-flow data from users trained to expect those captive portals. Both are demonstrated in real environments, not just modelled.

The paper proposes a **secure caching architecture** as the mitigation, plus a threat model tailored to the pay-for-use rural-hotspot context (where most prior security work has assumed enterprise or home deployments).

## Summary (ZH)

Astillo、Sengupta 与 Vanhoef（arXiv 2604.02774，2026 年 4 月 3 日提交；已被 SPAIC、AsiaCCS Workshops 2026 接收）对亚洲两大主流付费 Wi-Fi 生态做了田野调研：**菲律宾的 Piso-WiFi**（投币 / 扫码付费的微型热点）与 **印度的 PM-WANI**（Public Wi-Fi Access Network Interface，监管层面允许本地业主运营公共 AP 的国家计划）。论文将两国部署调查与两类已落地验证的攻击结合起来。

第一类是**会话劫持** —— 利用 captive portal 计费仅基于 MAC / IP 绑定（缺乏强加密绑定）的设计缺陷，搭载其他已付费用户的时间窗。第二类是**伪造热点** —— 仿冒 Piso-WiFi 或 PM-WANI SSID，从习惯使用对应 captive portal 的用户处窃取凭证 / 支付流数据。两者均在真实环境验证，并非仅理论建模。

论文提出**安全缓存架构**作为缓解方案，并给出一套面向"付费式农村热点"语境的威胁模型 —— 此前的安全工作大多假设企业或家庭部署。

## Key technical points (EN)

- Field survey: Piso-WiFi (Philippines) + PM-WANI (India) deployments.
- Attack 1: session hijacking — ride a paid window via weak MAC/IP binding.
- Attack 2: rogue hotspot — spoof captive portal, capture credentials and payment data.
- Threat model: pay-for-use, low-budget hotspot operator, transient users.
- Mitigation: secure caching architecture (proposed, not yet standardised).
- Validated on operational systems, not just simulated.

## Key technical points (ZH)

- 现场调研：菲律宾 Piso-WiFi + 印度 PM-WANI。
- 攻击 1：会话劫持 —— 利用 MAC / IP 绑定弱性搭载付费窗口。
- 攻击 2：伪造热点 —— 仿冒 captive portal，截取凭证与支付数据。
- 威胁模型：付费式、低预算热点运营者、流动用户。
- 缓解方案：安全缓存架构（仅为设计提案，尚未标准化）。
- 在真实运营系统上验证，并非仅做仿真。

## Why it matters / what's new (EN)

Most public-Wi-Fi security work in this KB (`arxiv-vwattacker-vowifi-security`, `arxiv-secure-wifi-ranging-az-bk`) targets enterprise or carrier-grade infrastructure. This paper extends the surface to the **billions of users connecting through low-cost, captive-portal-only rural hotspots** — a regulatory + commercial deployment class that scales faster than enterprise Wi-Fi 7 / 8 rollouts but receives almost no security review. The Piso-WiFi / PM-WANI threat model is a useful addition for any system trying to harden captive-portal flows, MAC-randomisation interactions with billing, or roaming-style trust handoffs across micro-operators.

## Why it matters / what's new (ZH)

本 KB 中的公共 Wi-Fi 安全工作（`arxiv-vwattacker-vowifi-security`、`arxiv-secure-wifi-ranging-az-bk`）多面向企业 / 运营商级基础设施。本文把视角扩展到**接入低成本、仅 captive portal 的农村热点的数十亿用户** —— 这是规模增长比企业 Wi-Fi 7 / 8 更快、但安全审查几乎为零的部署类。Piso-WiFi / PM-WANI 威胁模型对所有需要加固 captive portal 流程、MAC 随机化与计费交互、跨微运营商的"漫游式信任移交"的系统而言，都是有用的补充。
