---
id: 2026-06-01_arxiv-kairos-timing-induced-failures-5g-core
date_published: 2026-05-29
date_found: 2026-06-01
type: academic-paper
title_en: "Kairos: Lightweight Testing Framework for Timing-Induced Interaction Failures in LTE and 5G Core Networks"
title_zh: "Kairos：面向 LTE 与 5G 核心网时序诱发交互故障的轻量测试框架"
url: "https://arxiv.org/abs/2605.30985"
source_quality: abstract_only
topics: [5G-core, LTE, security, fuzzing, control-plane]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Kairos identifies a previously under-explored vulnerability class in cloud-native cellular cores: **timing-induced interaction failures**, where the specific temporal spacing between consecutive control-plane messages — not malformed content — triggers network-function crashes. Prior cellular-security testing concentrated on malformed inputs and specification violations; the timing dimension of message interactions was left largely unaddressed even as cores became distributed and message choreography grew more complex.

The framework is deliberately lightweight: it discovers timing vulnerabilities without requiring deep, standard-specific modelling of 3GPP procedures. Instead it systematically enumerates control-plane interaction patterns and analyses the failure modes associated with each pattern, varying inter-message timing to surface fragile sequences.

Across two open-source and two commercial LTE/5G implementations, Kairos **uncovered 20 new vulnerabilities and reproduced 34 existing issues**, evidence that timing-sensitive failures are widespread across modern cellular cores. The authors argue this class warrants explicit treatment in future specifications.

## Summary (ZH)
Kairos 揭示了云原生蜂窝核心网中一类此前研究不足的漏洞：**时序诱发的交互故障**——触发网络功能崩溃的并非畸形内容，而是连续控制面消息之间特定的时间间隔。以往蜂窝安全测试聚焦于畸形输入与规范违例；随着核心网走向分布式、消息编排日益复杂，消息交互的时序维度却几乎无人问津。

该框架刻意保持轻量：无需对 3GPP 流程做深入的、特定于标准的建模即可发现时序漏洞。它系统化枚举控制面交互模式，分析每种模式对应的失效模式，并通过改变消息间时序来暴露脆弱序列。

在两个开源与两个商用 LTE/5G 实现上，Kairos **发现 20 个新漏洞并复现 34 个已知问题**，表明时序敏感故障在现代蜂窝核心网中普遍存在。作者主张未来规范应显式处理这一类问题。

## Key technical points (EN)
- New vulnerability class: timing-induced interaction failures — crash triggered by inter-message temporal spacing, not malformed content.
- Lightweight: no deep standard-specific 3GPP modelling; enumerates control-plane interaction patterns and per-pattern failure modes.
- Tested on 2 open-source + 2 commercial LTE/5G cores → 20 new vulnerabilities, 34 reproduced issues.
- Argues timing failures deserve explicit treatment in future cellular specifications.

## Key technical points (ZH)
- 新漏洞类别：时序诱发交互故障——崩溃由消息间时间间隔触发，而非畸形内容。
- 轻量：无需深入的特定标准 3GPP 建模；枚举控制面交互模式与每模式失效模式。
- 在 2 个开源 + 2 个商用 LTE/5G 核心网测试 → 20 个新漏洞、34 个复现问题。
- 主张未来蜂窝规范应显式处理时序故障。

## Why it matters / what's new (EN)
This widens cellular-security testing from content (malformed packets, spec violations) to the temporal dimension of control-plane choreography — a gap that grows as cores become distributed and cloud-native. The 20 new vulnerabilities across both open-source and commercial stacks make the case concrete.

## Why it matters / what's new (ZH)
这把蜂窝安全测试从内容维度（畸形包、规范违例）拓展到控制面编排的时序维度——随着核心网分布式、云原生化，该缺口将持续扩大。横跨开源与商用协议栈发现的 20 个新漏洞使论点更具说服力。
