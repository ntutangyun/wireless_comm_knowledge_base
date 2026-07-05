---
id: 2026-07-05_oran-alliance-release-5-completed
date_published: 2026-06-08
date_found: 2026-07-05
type: industry-news
technology: cellular
title_en: "O-RAN ALLIANCE completes Specification Release 5 (O-RAN-R005): AI/ML workflow services, D2 inter-O-DU carrier aggregation, deployable O-Cloud"
title_zh: "O-RAN 联盟完成规范 Release 5（O-RAN-R005）：AI/ML 工作流服务、D2 跨 O-DU 载波聚合、可部署 O-Cloud"
url: "https://www.o-ran.org/blog/o-ran-alliance-completed-its-specification-release-5-o-ran-r005"
source_quality: full
topics: [O-RAN, RIC, carrier-aggregation, massive-MIMO, energy-saving, O-Cloud]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

The O-RAN ALLIANCE announced (June 8, 2026) the completion of **Specification Release 5 (O-RAN-R005)**, developed from July 2024 through specification completion in November 2025. R005 packages five operator-demanded capability sets for existing 4G/5G deployments: (1) **AI/ML workflow services** spanning the Non-RT RIC and Near-RT RIC for model development, training, and deployment; (2) the **D2 interface**, enabling carrier aggregation between *different O-DUs* — a topology previously impossible in disaggregated deployments where component carriers terminate on separate distributed units; (3) **massive-MIMO optimization** with AI/ML-assisted beamforming; (4) **network energy savings** incorporating 3GPP Release 18 features plus O-RU-specific improvements; and (5) a **fully deployable O-Cloud** with provisioning, lifecycle management, and SMO integration.

Security work expands in parallel: TLS 1.3 requirements, Zero-Trust framework enhancements, and AI/ML-specific security controls now sit in the specification set.

R005 also carries five forward-looking studies — decoupled SMO, filtered measurements, O-RAN resiliency, NTN deployments, and SMO intent-driven management — feeding **O-RAN-R006**, which is already underway, targets July 2027, and will be the first release containing 6G study features. Future release timing will align with 3GPP standardization.

## Summary (ZH)

O-RAN 联盟于 2026 年 6 月 8 日宣布完成**规范 Release 5（O-RAN-R005）**，开发周期从 2024 年 7 月至 2025 年 11 月规范定稿。R005 打包了运营商强需求的五组能力，面向现有 4G/5G 部署：(1) 贯穿非实时 RIC 与近实时 RIC 的 **AI/ML 工作流服务**，覆盖模型开发、训练与部署；(2) **D2 接口**，实现*不同 O-DU 之间*的载波聚合——在成员载波终结于不同分布式单元的解耦部署中，这一拓扑此前无法实现；(3) 借助 AI/ML 应用的**大规模 MIMO 优化**与波束成形；(4) 纳入 3GPP Release 18 特性及 O-RU 专项改进的**网络节能**；(5) 具备开通、生命周期管理和 SMO 集成的**完整可部署 O-Cloud**。

安全工作同步扩展：TLS 1.3 要求、零信任框架增强以及针对 AI/ML 的安全控制已纳入规范集。

R005 还包含五项前瞻研究——解耦 SMO、过滤测量、O-RAN 韧性、NTN 部署、SMO 意图驱动管理——为已启动的 **O-RAN-R006** 提供输入。R006 目标交付时间为 2027 年 7 月，将是首个包含 6G 研究特性的版本；后续版本节奏将与 3GPP 标准化对齐。

## Key technical points (EN)

- R005 headline features: cross-RIC AI/ML workflow services; D2 interface for inter-O-DU carrier aggregation; AI/ML massive-MIMO beamforming optimization; 3GPP R18-aligned energy savings; fully deployable O-Cloud with SMO integration.
- Security: TLS 1.3, Zero-Trust enhancements, AI/ML security controls.
- Five studies open for R006: decoupled SMO, filtered measurements, resiliency, NTN deployments, intent-driven SMO management.
- R006 targets July 2027 — first release with 6G study features; release cadence to align with 3GPP.
- Development window: July 2024 → November 2025 (specs), announced complete June 8, 2026.

## Key technical points (ZH)

- R005 核心特性：跨 RIC 的 AI/ML 工作流服务；实现跨 O-DU 载波聚合的 D2 接口；AI/ML 大规模 MIMO 波束成形优化；对齐 3GPP R18 的网络节能；带 SMO 集成的完整可部署 O-Cloud。
- 安全：TLS 1.3、零信任增强、AI/ML 安全控制。
- 面向 R006 的五项研究：解耦 SMO、过滤测量、韧性、NTN 部署、意图驱动 SMO 管理。
- R006 目标 2027 年 7 月交付——首个含 6G 研究特性的版本；发布节奏与 3GPP 对齐。
- 开发窗口：2024 年 7 月 → 2025 年 11 月（规范定稿），2026 年 6 月 8 日宣布完成。

## Why it matters / what's new (EN)

First O-RAN release-milestone entry in the KB's open-ran bin, which so far tracks RIC research (2026-07-04_arxiv-realtime-ai-near-rt-ric-xapp) and deployment commentary. Two items stand out technically: the **D2 interface** creates a new standardized coordination path between distributed units (inter-O-DU CA changes where scheduling coordination state lives), and the **AI/ML workflow services** formalize the model-lifecycle plumbing that AI-RAN products — including vendor-integrated ones like Ericsson's AI in RAN (2026-07-05_ericsson-ai-in-ran-software-launch) — will either use or compete against. R006's July-2027 target sets the clock for the first 6G-flavored O-RAN content.

## Why it matters / what's new (ZH)

这是 KB open-ran 桶中第一条 O-RAN 版本里程碑条目——该桶此前跟踪 RIC 研究（2026-07-04_arxiv-realtime-ai-near-rt-ric-xapp）和部署评论。技术上有两点突出：**D2 接口**在分布式单元之间建立了新的标准化协调路径（跨 O-DU 载波聚合改变了调度协调状态的归属位置）；**AI/ML 工作流服务**将模型生命周期管道正式规范化，AI-RAN 产品——包括爱立信 AI in RAN（2026-07-05_ericsson-ai-in-ran-software-launch）这类厂商集成方案——要么使用它、要么与之竞争。R006 的 2027 年 7 月目标为首批 6G 风格的 O-RAN 内容设定了时间表。
