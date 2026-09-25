---
id: 2026-09-25_arxiv-ocudu-dapp-platform-live-cell-airan
date_published: 2026-09-07
date_found: 2026-09-25
type: academic-paper
technology: cellular
title_en: "The OCUDU dApp Platform: An Open Runtime and E3 Interface for Real-Time AI-RAN"
title_zh: "OCUDU dApp 平台：面向实时 AI-RAN 的开放运行时与 E3 接口"
url: "https://arxiv.org/abs/2609.07843"
source_quality: full
topics: [AI-RAN, dApp, O-RAN, E3, OCUDU, neural-receiver, real-time-control, DU, GPU]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

DeepSig Inc. presents the OCUDU dApp platform, an open runtime that lets independently-built AI/ML software run inside a production 5G NR distributed unit (DU) below the 10ms control-loop boundary — the region where O-RAN's RICs (rApps at ≥1s, xApps at roughly ≥10ms) do not reach, and where the paper states prior "dApp" frameworks could only act as external observers of an exported IQ/KPI stream, with no admission bound, deadline, or fallback semantics. The platform defines three timing contracts a dApp module can be built under: Class A (resident on the GPU receive chain itself, e.g. a neural equalizer replacing a stage of the physical-layer pipeline), Class B (executes inside the scheduler's 100µs admitted deadline, e.g. a policy that must answer before a scheduling decision commits), and Class C (a never-blocking observer whose output the scheduler consumes asynchronously, e.g. a sensing worker). In every class the conventional (non-ML) signal-processing path is never displaced — it remains the deterministic fallback — and every dApp's authority over the DU is typed, validated, and operator-bounded.

The paper is written as a tutorial covering the runtime architecture, the embedded E3 control/telemetry plane, the package/signing/lifecycle model for dApps, and the three public repositories (platform, SDK, and a zero-hardware quickstart) that implement it. As a live validation, the authors ran dApps from all three classes — including an out-of-tree neural equalizer — together on a real cell (a GB10 gNB with attached commercial handsets) without triggering a single fallback event, and compared different equalizer variants over the air purely through lifecycle operations (swapping models at runtime) rather than redeploying the DU. The release is published under the BSD-3-Clause-Clear license as a preview of the OCUDU AI-RAN Working Group 2's work, explicitly inviting external feedback and use cases ahead of upstreaming into the OCUDU mainline.

## Summary (ZH)

DeepSig Inc. 提出了 OCUDU dApp 平台，这是一个开放运行时，可让独立开发的 AI/ML 软件运行在生产环境的 5G NR 分布式单元（DU）内部、位于 10ms 控制回路边界以下的区域——该区域是 O-RAN 的 RIC 所无法触及的（rApp 运行周期 ≥1s，xApp 大致 ≥10ms），论文指出此前的"dApp"框架在此区域内只能作为导出的 IQ/KPI 数据流的外部观察者，缺乏准入边界、截止时限或回退机制。该平台为 dApp 模块定义了三种时序契约：A 类（常驻于 GPU 接收链本身，例如取代物理层流水线某一环节的神经均衡器）、B 类（在调度器 100 微秒的准入截止时限内执行，例如必须在调度决策生效前给出答案的策略）、以及 C 类（永不阻塞的观察者，其输出由调度器异步消费，例如感知类工作负载）。在任何一类中，传统（非 ML）信号处理路径都不会被取代——它始终作为确定性的回退方案——且每个 dApp 对 DU 的操作权限都经过类型化、校验并受运营商限定。

本文以教程形式撰写，涵盖运行时架构、内嵌的 E3 控制/遥测平面、dApp 的打包/签名/生命周期模型，以及实现这一切的三个公开代码仓库（平台、SDK 及零硬件快速上手环境）。作为实测验证，作者将三个类别的 dApp——包括一个树外（out-of-tree）神经均衡器——一同运行在一个真实小区（配备真实手机终端的 GB10 gNB）上，未触发任何一次回退事件，并且仅通过生命周期操作（运行时热切换模型）而非重新部署 DU，就完成了不同均衡器变体的空口对比测试。该发布以 BSD-3-Clause-Clear 许可证公开，作为 OCUDU AI-RAN 工作组 2（Working Group 2）工作成果的预览版本，明确邀请外部反馈与新用例，为后续合并进 OCUDU 主线做准备。

## Key technical points (EN)

- Three dApp timing contracts inside the DU: Class A (resident on GPU receive chain, e.g. inline neural equalizer), Class B (inside the scheduler's 100µs admitted deadline), Class C (never-blocking async observer).
- The conventional signal-processing path is never displaced by a dApp — it remains the always-available deterministic fallback under all three classes.
- Live-cell validation on a GB10 gNB with real handsets: dApps of all three classes ran together, including an out-of-tree neural equalizer, without a single fallback event.
- Equalizer variants were compared over the air purely via lifecycle operations (model swap at runtime), not DU redeployment.
- Platform, SDK, and a zero-hardware quickstart are published under BSD-3-Clause-Clear as an OCUDU AI-RAN Working Group 2 preview release, ahead of upstreaming into the OCUDU mainline.
- Every dApp's authority is typed, validated, and operator-bounded; the paper documents measured latency/safety checkpoints "with its conditions and its gaps" rather than only best-case numbers.

## Key technical points (ZH)

- DU 内部的三种 dApp 时序契约：A 类（常驻 GPU 接收链，例如内联神经均衡器）、B 类（在调度器 100 微秒准入截止时限内执行）、C 类（永不阻塞的异步观察者）。
- 传统信号处理路径在任何一类 dApp 下都不会被取代——它始终作为随时可用的确定性回退方案。
- 在配备真实手机终端的 GB10 gNB 上完成实测小区验证：三个类别的 dApp（包括一个树外神经均衡器）同时运行，未触发任何回退事件。
- 不同均衡器变体的空口对比完全通过生命周期操作（运行时模型热切换）完成，而非重新部署 DU。
- 平台、SDK 及零硬件快速上手环境以 BSD-3-Clause-Clear 许可证发布，作为 OCUDU AI-RAN 工作组 2 的预览成果，为后续合并进 OCUDU 主线做准备。
- 每个 dApp 的操作权限均经过类型化、校验并受运营商限定；论文记录了测得的时延/安全性检查点及其"条件与局限"，而非仅报告最佳情况数字。

## Why it matters / what's new (EN)

The KB already tracks the OCUDU/AI-RAN dApp thread closely (including a companion Sept-9 entry on measured dApp interface timing requirements, arxiv 2609.07805, submitted the same day as this paper). This entry is the platform-release counterpart: rather than measuring interface requirements in the abstract, it documents an actual open-source runtime that was live-cell tested across all three timing-contract classes simultaneously with a real neural equalizer and zero fallbacks — evidence that the sub-10ms band the KB's prior dApp entries have characterized can be reached by an openly licensed platform, released as a preview for independent vetting (the paper notes open gaps, e.g. wide-grant Class A kernels not yet latency-qualified and no published dApps-unloaded control window).

## Why it matters / what's new (ZH)

本知识库已持续跟踪 OCUDU/AI-RAN dApp 这一研究脉络（包括同一天提交的姊妹条目：2026-09-09 关于 dApp 接口时延需求实测的条目，arxiv 2609.07805）。本条目则是该脉络中的"平台发布"对应篇：它不再是抽象地测量接口需求，而是记录了一个真正的开源运行时——在真实小区中同时对三类时序契约进行了实测验证，搭载了一个真实的神经均衡器且未出现任何回退。这表明本知识库此前多篇 dApp 条目所刻画的 10ms 以下频段，已可由一个开源许可的平台触达；该平台目前以预览版形式发布、供外部独立验证（论文也列出了尚存的缺口，例如宽带宽授权下的 A 类内核尚未通过时延认证，且尚未公布卸载 dApp 后的对照窗口）。
