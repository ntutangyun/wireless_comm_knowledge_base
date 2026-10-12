---
id: 2026-10-12_arxiv-llm-ambiguities-3gpp-oran-protocol-specs
date_published: 2026-09-30
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "Can LLMs help find Ambiguities in Protocol Specifications?"
title_zh: "大语言模型能否帮助发现协议规范中的歧义？"
url: "https://arxiv.org/abs/2609.38752"
source_quality: full
topics: [LLM, protocol-specification, 3GPP, O-RAN, F1AP, E1AP, NGAP, E2AP, differential-testing, OpenAirInterface, srsRAN]
topic_primary: cellular-ai
topics_secondary: [open-ran, cellular-security]
novelty_score: 4
---

## Summary (EN)
Ziyue Dang, Sixu Tan, Atharva Nevasekar, Zhaowei Tan, George Varghese, and Songwu Lu (UCLA; UC Riverside) study semantic underspecification in protocol specifications: cases where procedural text, written in natural language, fails to define how to handle a syntactically valid message, so standard-compliant implementations can diverge — distinct from either a specification error (wrong description) or an implementation bug (code fails to meet requirements). The authors ground the study in 5G, since 3GPP and O-RAN specifications pair a formal message syntax (ASN.1) with natural-language procedures, and because 5G is described as arguably less mature than the classic Internet protocol suite; they also check the long-standardized DNS protocol and report finding several unresolved ambiguities there as well.

The authors first show that naive direct LLM prompting does not work well: it rediscovers a few shallow, high-probability gaps across many fields but misses many cross-step cases, and giving entire specifications to frontier agentic models (the paper's agentic comparison uses GPT-5.6 Sol and Claude Opus 5) "buys breadth but not discipline" — fewer than half of the findings mined without a scaffold survive expert inspection, a third conflate the freedom a specification purposely grants with an actual specification failure, and a further third of scaffolded findings are missed entirely without a scaffold. To address this, the authors propose SPECLENS, a scaffolded LLM-driven analysis framework that models a protocol specification as a set of communicating state machines, uses that model to derive a taxonomy of underspecification categories, and runs a staged inference workflow (context construction, taxonomy-based mining, gap/fork triage, and impact analysis via a deterministic state-machine engine that also derives a differential test) to produce a ranked set of under-specified cases with textual evidence, an impact estimate, and a test design — intended to assist domain experts rather than replace them.

In a preliminary evaluation across 36 procedures from six 3GPP and O-RAN protocols (four control-plane protocols — F1AP, E1AP, NGAP, E2AP — plus the GTP-U user plane and the E2SM-KPM service model; backends gpt-5.4-mini, claude-haiku-4.5 and gemini-3-flash), 185 of 197 SPECLENS proposals (about 94%) were conservatively supported — accepted by both of two domain experts (157 audited against the spec text) or confirmed by code review (40). Of the delivered findings whose scenarios both implementations exercise, 60 drive observable divergence between the OpenAirInterface and srsRAN open-source RAN implementations under a differential test the framework itself helps construct — meaning the identified ambiguities are not merely theoretical but correspond to real behavioral differences between two independent open-source RAN stacks.

## Summary (ZH)
Ziyue Dang、Sixu Tan、Atharva Nevasekar、Zhaowei Tan、George Varghese 与 Songwu Lu（加州大学洛杉矶分校；加州大学河滨分校）研究协议规范中的"语义欠规范"问题：即以自然语言撰写的流程性文本，未能明确规定如何处理一个语法合法的消息，从而导致各个符合标准的实现出现行为分歧——这与"规范错误"（描述本身有误）或"实现缺陷"（代码未达到要求）均不相同。作者以 5G 为研究对象，因为 3GPP 与 O-RAN 规范将形式化的消息语法（ASN.1）与自然语言描述的处理流程相结合，且 5G 可以说比经典互联网协议族更不成熟；他们同时检验了历史悠久的 DNS 协议，发现其中同样存在若干尚未解决的歧义。

作者首先指出，简单直接地提示大语言模型效果并不理想：这种方式能在许多字段中重新发现一些浅层的、高概率的歧义，却会遗漏大量跨步骤的情形；而将整份规范直接交给前沿的具有自主能力的模型（论文的自主代理对比实验使用 GPT-5.6 Sol 与 Claude Opus 5）"换来了广度，却未能换来纪律性"——在没有脚手架（scaffold）约束的情况下挖掘出的发现中，不到一半能通过专家核查，三分之一将规范有意赋予的自由度误判为真正的规范缺陷，而在有脚手架约束时发现的结果中，又有三分之一若不使用脚手架便会被完全遗漏。为此，作者提出了 SPECLENS，一个有脚手架约束的大语言模型驱动分析框架，将协议规范建模为一组相互通信的状态机，利用该模型推导出一套欠规范类别的分类体系，并运行一个分阶段的推理流程（上下文构建、基于分类体系的挖掘、缺口/分叉分类，以及通过确定性状态机引擎进行的影响分析，该引擎同时生成差异化测试），最终产出一组带有文本证据、影响评估与测试设计的、按优先级排序的欠规范情形列表——其定位是辅助领域专家，而非取代专家。

在一项覆盖六个 3GPP 与 O-RAN 协议、共 36 个流程的初步评估中（四个控制面协议 F1AP、E1AP、NGAP、E2AP，外加 GTP-U 用户面与 E2SM-KPM 服务模型；后端为 gpt-5.4-mini、claude-haiku-4.5 与 gemini-3-flash），197 项提案中有 185 项（约 94%）获得保守认可——或由两名领域专家一致接受（157 项对照规范文本审核），或经代码审查确认（40 项）。在两套实现均会触发其场景的已交付发现中，有 60 项导致 OpenAirInterface 与 srsRAN 这两套开源 RAN 实现之间产生可观察到的行为分歧——这意味着所识别出的歧义并非仅停留在理论层面，而是对应着两套相互独立的开源 RAN 代码栈之间真实存在的行为差异。

## Key technical points (EN)
- Defines "semantic underspecification" as a distinct failure class from specification errors or implementation bugs: a syntactically valid message for which natural-language procedural text never specifies handling behavior.
- Naive direct LLM prompting underperforms: shallow high-probability gaps rediscovered, cross-step cases missed; giving whole specs to frontier agentic models (GPT-5.6 Sol, Claude Opus 5) broadens findings but fewer than half survive expert review without a scaffold.
- Proposes SPECLENS: models a spec as communicating state machines, derives an underspecification taxonomy from that model, and runs context construction -> taxonomy-based mining -> gap/fork triage -> impact analysis (with a deterministic state-machine engine that also builds a differential test).
- Evaluated on 36 procedures across six 3GPP/O-RAN protocols (F1AP, E1AP, NGAP, E2AP, plus the GTP-U user plane and E2SM-KPM service model) with three LLM backends (gpt-5.4-mini, claude-haiku-4.5, gemini-3-flash): 185/197 (~94%) of SPECLENS proposals conservatively supported (accepted by both of two domain experts, or confirmed by code review).
- 60 of the accepted findings produce observable behavioral divergence between OpenAirInterface and srsRAN under differential testing — ambiguities with real interoperability consequences, not just theoretical ones.
- Also finds several unresolved ambiguities in the much more mature DNS protocol, suggesting semantic underspecification is not unique to newer standards.

## Key technical points (ZH)
- 将"语义欠规范"定义为一类独立于规范错误与实现缺陷的失效类型：对于语法合法的消息，自然语言流程文本从未规定其处理方式。
- 简单直接的大语言模型提示效果不佳：仅能重新发现浅层高概率歧义，遗漏跨步骤情形；将整份规范交给前沿自主模型（GPT-5.6 Sol、Claude Opus 5）能扩大发现范围，但在无脚手架约束下不到一半的结果能通过专家核查。
- 提出 SPECLENS：将规范建模为相互通信的状态机，据此推导欠规范分类体系，并运行"上下文构建→基于分类体系的挖掘→缺口/分叉分类→影响分析"流程（其确定性状态机引擎同时生成差异化测试）。
- 在覆盖六个 3GPP/O-RAN 协议（F1AP、E1AP、NGAP、E2AP，外加 GTP-U 用户面与 E2SM-KPM 服务模型）、36 个流程、三种大语言模型后端（gpt-5.4-mini、claude-haiku-4.5、gemini-3-flash）的评估中，197 项提案中有 185 项（约 94%）获得保守认可（由两名领域专家一致接受，或经代码审查确认）。
- 在被接受的发现中，有 60 项经差异化测试证实会导致 OpenAirInterface 与 srsRAN 之间出现可观察的行为分歧——说明所识别的歧义具有真实的互操作性后果，而非仅停留在理论层面。
- 研究还在成熟度远高于 5G 的 DNS 协议中发现若干尚未解决的歧义，说明语义欠规范并非新兴标准的独有问题。

## Why it matters / what's new (EN)
Most cellular-ai entries in this KB apply AI to RAN operation; this paper instead applies scaffolded LLMs to published 3GPP/O-RAN specification text, and validates the ambiguities it finds both by expert or code review and by observed divergence between OpenAirInterface and srsRAN.

## Why it matters / what's new (ZH)
本知识库 cellular-ai 栏目多数条目将 AI 用于 RAN 运行；本文则将带脚手架的大语言模型用于已发布的 3GPP/O-RAN 规范文本，并通过专家/代码审查以及 OpenAirInterface 与 srsRAN 之间的实测行为分歧来验证所发现的歧义。

## Images

None.
