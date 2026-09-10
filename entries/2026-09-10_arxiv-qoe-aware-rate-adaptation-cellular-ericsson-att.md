---
id: 2026-09-10_arxiv-qoe-aware-rate-adaptation-cellular-ericsson-att
date_published: 2026-09-08
date_found: 2026-09-10
type: academic-paper
technology: cellular
title_en: "Prototyping QoE-Aware Rate Adaptation in Cellular Networks with Commercial Applications"
title_zh: "面向商用应用的蜂窝网络 QoE 感知速率自适应原型设计"
url: "https://arxiv.org/abs/2609.09490"
source_quality: full
topics: [QoE, rate-adaptation, video-streaming, AMVOTS, SCONE, CAMARA, Media-over-QUIC, spectral-efficiency]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Szilveszter Nadas, Lars Ernstrom, David Lindero (Ericsson Research), Dan Druta, Igor Pruzhansky (AT&T), and Jonathan Lynam, Eric Petajan (arXiv v1, 8 Sep 2026; accepted author manuscript, published in Proc. IEEE QoMEX 2026, Cardiff, DOI 10.1109/QoMEX69967.2026.11618317; this entry is filed on its arXiv date because the arXiv record gives no conference date) address a gap between research and deployment in cellular quality-of-experience (QoE) management: prior work has shown that QoE-aware resource allocation can support up to three times more simultaneous real-time interactive video sessions at acceptable quality than plain rate-fair allocation, but the paper states that commercial cellular deployments still lack the capabilities to realize this in practice, chiefly because it is impractical to modify every commercial streaming application to expose the rich session state an "ideal" QoE-aware scheduler would need.

Rather than proposing a from-scratch clean-slate architecture, the paper proposes a pragmatic, incrementally deployable system built only from capabilities the authors say could be assembled in a lab today, and presents it as a lab-realisable prototype architecture without reporting performance numbers of its own — the paper has no evaluation or results section. The prototype's central idea is "composite spatial complexity," a metric combining a video stream's spatial encoding complexity with its per-session spectral efficiency into one resource-demand signal; QoE itself is measured externally via a system the authors call AMVOTS (Automated Mobile Video Objective Testing System), which reports per-session VMAF-based spatial-quality scores and bitrate without requiring any change to the streaming application. Based on these external QoE signals, a split-responsibility scheduler steers each session toward a target bitrate using congestion-signal mechanisms — Active Rate Management on the radio side and L4S (Low Latency, Low Loss, Scalable Throughput) congestion control — rather than by issuing direct commands to the application. The paper frames this as the first rung of an evolutionary ladder toward richer QoE-aware allocation, mapping successive capability levels onto three emerging standards: IETF SCONE for on-path rate guidance (replacing implicit congestion signaling with explicit throughput advice), CAMARA APIs for standardized application-to-network QoE reporting, and Media over QUIC (MoQ) for native, codec-level rate adaptation at the transport layer. The paper does not report original throughput, VMAF, or session-capacity measurements from its own prototype; the "three times more sessions" figure is drawn from the authors' cited prior work, not from this system's evaluation.

## Summary (ZH)
Szilveszter Nadas、Lars Ernstrom、David Lindero（爱立信研究院）、Dan Druta、Igor Pruzhansky（AT&T）以及 Jonathan Lynam、Eric Petajan（arXiv v1，2026 年 9 月 8 日；IEEE QoMEX 2026 会议[英国加的夫]已接收作者稿）探讨了蜂窝网络体验质量（QoE）管理中研究与部署之间的落差：此前的研究已表明，相较于纯粹的速率公平分配，QoE 感知的资源分配最多可支持三倍数量的同时实时互动视频会话并保持可接受的质量，但论文指出，现有商用蜂窝网络部署仍缺乏将其落地的能力，主要原因在于修改每一款商用流媒体应用以暴露"理想"QoE 感知调度器所需的丰富会话状态在实践中并不可行。

论文并未提出一套从零构建的全新架构，而是提出了一套务实的、可增量部署的系统,其构建仅依赖作者认为"当下即可在实验室中组装"的现有能力,并将其呈现为一套可在实验室搭建的原型架构，未报告任何自有性能数据——该论文没有评估或结果章节。该原型的核心思路是"复合空间复杂度"，一项将视频流的空间编码复杂度与其逐会话的频谱效率相结合、形成单一资源需求信号的指标；QoE 本身通过作者称为 AMVOTS（自动化移动视频客观测试系统）的外部工具进行测量，该系统在无需对流媒体应用做任何改动的前提下，报告基于 VMAF 的逐会话空间质量评分与比特率。基于这些外部 QoE 信号，一个职责拆分的调度器通过拥塞信号机制——无线侧的主动速率管理（Active Rate Management）与 L4S（低时延、低丢包、可扩展吞吐量）拥塞控制——将各会话引导至目标比特率，而非直接向应用下发指令。论文将此定位为通向更丰富 QoE 感知分配能力的演进阶梯的第一级，并将后续能力等级映射到三项新兴标准：用于路径内速率指导的 IETF SCONE（以显式吞吐量建议取代隐式拥塞信号）、用于应用到网络标准化 QoE 上报的 CAMARA API，以及在传输层实现原生、编解码器级速率自适应的 Media over QUIC（MoQ）。论文并未报告其自有原型的原始吞吐量、VMAF 或会话容量测量数据；文中提及的"三倍会话数"数字引自作者所引用的既有研究，而非本系统自身的评估结果。

## Key technical points (EN)
- Authors span Ericsson Research (Santa Clara, CA / Lulea, Sweden) and AT&T (Bothell, WA / New York) — an operator/vendor co-authored deployability study, accepted at IEEE QoMEX 2026.
- Core metric: "composite spatial complexity," combining video spatial encoding complexity with per-session spectral efficiency into one resource-demand signal.
- QoE measured externally via AMVOTS (VMAF-based per-session spatial-quality scores + bitrate) without any modification to commercial streaming applications.
- Rate steering via congestion signals only (radio-side Active Rate Management + L4S congestion control), explicitly avoiding direct application-level commands.
- Proposes an evolutionary standards mapping: IETF SCONE (on-path rate guidance) -> CAMARA APIs (app-to-network QoE reporting) -> Media over QUIC (native codec-level rate adaptation).
- No original quantitative results (throughput, VMAF, session capacity) from the authors' own prototype are reported in this paper; the cited "up to 3x more sessions" figure comes from prior work, not this system's evaluation.

## Key technical points (ZH)
- 作者团队横跨爱立信研究院（美国加州圣克拉拉/瑞典吕勒奥）与 AT&T（美国华盛顿州博塞尔/纽约）——一项运营商与设备商联合撰写的可部署性研究，已被 IEEE QoMEX 2026 接收。
- 核心指标："复合空间复杂度"，将视频空间编码复杂度与逐会话频谱效率结合为单一资源需求信号。
- QoE 通过 AMVOTS 系统在外部测量（基于 VMAF 的逐会话空间质量评分与比特率），无需对商用流媒体应用做任何改动。
- 仅通过拥塞信号（无线侧主动速率管理 + L4S 拥塞控制）实现速率引导，明确避免对应用层直接下发指令。
- 提出一条渐进式标准映射路径：IETF SCONE（路径内速率指导）→ CAMARA API（应用到网络的标准化 QoE 上报）→ Media over QUIC（传输层原生编解码器级速率自适应）。
- 本文未报告作者自有原型的原始定量结果（吞吐量、VMAF、会话容量）；文中引用的"最多三倍会话数"数字引自既有研究，并非本系统自身的评估结果。

## Why it matters / what's new (EN)
The KB's 5g-nr bin has largely covered PHY/MAC-layer and network-planning contributions; this entry is the first to address application-layer QoE-aware rate adaptation as a deployability problem co-authored across an equipment vendor (Ericsson) and an operator (AT&T), explicitly designed to work with unmodified commercial streaming applications rather than requiring an application-side integration. It is presented as an architecture and evolutionary-standards-mapping paper without its own empirical results, distinguishing it from the testbed-validated entries in the same bin.

## Why it matters / what's new (ZH)
知识库 5g-nr 栏目此前的内容大多聚焦于物理层/MAC 层及网络规划相关贡献；本条目是首个将应用层 QoE 感知速率自适应作为"可部署性问题"来处理的条目，由设备商（爱立信）与运营商（AT&T）联合撰写，明确设计为可与未经修改的商用流媒体应用协同工作，而非要求应用侧集成改造。该文以架构设计与渐进式标准映射为主，并未报告自有的实证结果，这与同一栏目中经测试床验证的其他条目有所不同。

## Images

None.
