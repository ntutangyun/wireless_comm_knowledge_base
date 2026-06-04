---
id: 2026-06-04_arxiv-cosmo-oran-cross-tech-multitenant-smo
date_published: 2026-06-03
date_found: 2026-06-04
type: academic-paper
technology: cellular
title_en: "COSMO: O-RAN-based service management and orchestration for cross-technology, multi-tenant radio access networks"
title_zh: "COSMO：面向跨技术、多租户无线接入网的 O-RAN 服务管理与编排平台"
url: "https://arxiv.org/abs/2606.05012"
source_quality: abstract_only
topics: [O-RAN, SMO, Non-RT-RIC, rApp, multi-tenancy, SLA, network-slicing]
topic_primary: open-ran
topics_secondary: [network-slicing, cellular-ai]
novelty_score: 3
---

## Summary (EN)

COSMO is a RAN Service Management and Orchestration (SMO) platform built on the O-RAN architecture that delivers "cross-technology multi-tenancy" — unified orchestration of heterogeneous radio resources spanning 3GPP technologies (5G NR, LTE) and non-3GPP systems such as Wi-Fi, so that multiple tenants can dynamically share the underlying radio with per-tenant SLA guarantees. The authors argue that while O-RAN gives a rich ecosystem for building individual components, few platforms actually integrate end-to-end SMO functionality with multi-tenancy across mixed-technology access.

COSMO's design centres on a Non-Real-Time RIC hosting rApps for intelligent control, with an SLA-enforcing rApp that allocates resources dynamically as traffic shifts. In evaluation, the SLA-based rApp cuts SLA violations from roughly 21% to below 10% under dynamic traffic. The paper is to appear in IEEE Transactions on Network and Service Management (2026).

## Summary (ZH)

COSMO 是一个基于 O-RAN 架构构建的无线接入网服务管理与编排（SMO）平台，提供"跨技术多租户"能力——对横跨 3GPP 技术（5G NR、LTE）与非 3GPP 系统（如 Wi-Fi）的异构无线资源进行统一编排，使多个租户能在带有各自 SLA 保证的前提下动态共享底层无线资源。作者指出，O-RAN 虽为单个组件的开发提供了丰富生态，但鲜有平台真正实现"端到端 SMO 功能 + 跨混合技术接入的多租户"的整合。

COSMO 的设计以承载 rApp 的非实时 RIC（Non-RT RIC）为核心进行智能控制，其中一个执行 SLA 的 rApp 会随流量变化动态分配资源。评测中，该 SLA rApp 在动态流量下将 SLA 违约率从约 21% 降至 10% 以下。论文将发表于 IEEE Transactions on Network and Service Management（2026）。

## Key technical points (EN)

- **Cross-technology multi-tenancy**: one SMO orchestrates 3GPP (5G NR, LTE) + non-3GPP (Wi-Fi) radio resources for multiple tenants with SLA guarantees.
- **O-RAN SMO + Non-RT RIC**: hosts rApps; an SLA-enforcing rApp does dynamic resource allocation.
- **Result**: SLA violations cut from ~21% to <10% under dynamic traffic.
- **Authors**: Catalan-Cid, Aleixendri, Pueyo, Tomas, Camps-Mur (i2CAT). To appear in IEEE TNSM 2026.

## Key technical points (ZH)

- **跨技术多租户**：单一 SMO 为多租户编排 3GPP（5G NR、LTE）+ 非 3GPP（Wi-Fi）无线资源，并提供 SLA 保证。
- **O-RAN SMO + 非实时 RIC**：承载 rApp；由执行 SLA 的 rApp 完成动态资源分配。
- **结果**：动态流量下 SLA 违约率从约 21% 降至 10% 以下。
- **作者**：Catalan-Cid、Aleixendri、Pueyo、Tomas、Camps-Mur（i2CAT）。将发表于 IEEE TNSM 2026。

## Why it matters / what's new (EN)

The KB's open-ran bin already holds RIC/xApp/digital-twin and energy-efficiency entries (e.g. the 2026-06-03 O-RAN E2E energy-testing framework, OpenTwin), but COSMO's distinctive angle is multi-tenant orchestration that spans 3GPP and non-3GPP (Wi-Fi) radio under one O-RAN SMO with explicit SLA enforcement. That cross-technology convergence — treating Wi-Fi as an orchestrated tenant resource alongside 5G/LTE — is the new piece, and it pairs naturally with the same group's energy-efficiency work (BeGREEN / cell on/off) emerging in the same week.

## Why it matters / what's new (ZH)

KB 的 open-ran 分箱已有 RIC/xApp/数字孪生与能效类条目（如 2026-06-03 的 O-RAN 端到端能效测试框架、OpenTwin），而 COSMO 的独特角度在于：在单一 O-RAN SMO 下、以明确的 SLA 执行，对横跨 3GPP 与非 3GPP（Wi-Fi）的无线资源进行多租户编排。这种跨技术融合——将 Wi-Fi 作为与 5G/LTE 并列的可编排租户资源——正是其新意，并与同一团队同周出现的能效工作（BeGREEN / 小区开关）天然互补。
