---
id: 2026-05-12_ieee-mentor-ai-offload-sg-antwerp-digest
date_published: 2026-05-11
date_found: 2026-05-12
type: ieee-document
title_en: "IEEE 802.11 AI Offload SG Mentor digest — Antwerp interim May 2026 (initial PAR + CSD)"
title_zh: "IEEE 802.11 AI Offload SG Mentor 摘要——Antwerp 期中会议 2026-05（首版 PAR 与 CSD）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=0aio
source_quality: snippet_only
topics: [AI Offload SG, agentic-AI, AI-inference, computation-offloading, PAR, CSD]
topic_primary: agentic-wifi
topics_secondary: [wifi-for-ai, wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

The AI Offload Study Group held its first formal session at the Antwerp interim and started moving toward chartering. The two most important contributions of the week are **DCN 11-26-978 "Initial PAR discussion"** and **DCN 11-26-979 "Initial CSD discussion"**, both from Gaurang Naik (Qualcomm) and chair of the SG — these are the first concrete artefacts on the path from SG → study → PAR ballot → task group. PAR (Project Authorization Request) defines what an amendment would do; CSD (Criteria for Standards Development) demonstrates the case for why IEEE 802 should do it. The AI Offload SG was formed at the March 2026 plenary (`2026-05-01_ieee-march-2026-readout`); having initial PAR/CSD drafts on the table by May suggests the chair is targeting a Study Group → Task Group escalation at the July 2026 plenary.

Alongside PAR/CSD, the SG ran a substantive use-case session (DCNs 968, 994/995/996, 930) clustering around two themes: (a) collaborative STA-AP inference offloading where the device hands part of a model to the AP for execution, and (b) agent-perspective use cases where the LLM agent on the device negotiates compute, memory, and link budget with the AP. ZTE (Zisheng Wang), OPPO (Sam Shi), and InterDigital (Antonio de la Oliva) each contributed; the contributor distribution is notably broader than typical TGbn drafting, reflecting that AI-offload requirements are being gathered from device, infrastructure, and academic perspectives at once.

## Summary (ZH)

AI Offload Study Group 在 Antwerp 期中会议召开了首次正式会议，并开始向立项推进。本周最重要的两项贡献是 **DCN 11-26-978「初版 PAR 讨论」** 与 **DCN 11-26-979「初版 CSD 讨论」**，均由 Gaurang Naik（Qualcomm，SG 主席）提交 —— 这是从 SG → 研究 → PAR 投票 → 任务组 这条路径上的第一批具体产出。PAR（项目授权请求）定义一份修订要做什么；CSD（标准制定准则）论证为什么 IEEE 802 应该做这件事。AI Offload SG 在 2026 年 3 月全会上成立（`2026-05-01_ieee-march-2026-readout`）；在 5 月就把初版 PAR/CSD 摆到桌上，说明主席的目标是在 2026 年 7 月全会上把 SG 升级为 TG。

除 PAR/CSD 外，本组还举办了一场较实质的用例讨论（DCN 968、994/995/996、930），围绕两个主题成簇：(a) STA-AP 协同推理卸载 —— 设备把模型的一部分交给 AP 执行；(b) 智能体视角用例 —— 设备上的 LLM 智能体与 AP 协商算力、内存、链路预算。ZTE（王自圣）、OPPO（Sam Shi）、InterDigital（Antonio de la Oliva）各有贡献；贡献者分布明显比典型的 TGbn 起草更宽，说明 AI 卸载需求正在同时从设备、基础设施、学界三个视角汇集。

## Key technical points (EN)

- **DCN 11-26-978 · AI Offload SG** — Initial PAR discussion. Gaurang Naik (Qualcomm, SG chair). The skeleton document defining what an "AI Offload" amendment would cover.
- **DCN 11-26-979 · AI Offload SG** — Initial CSD discussion. Gaurang Naik. The companion document making the IEEE 802-level case for the project.
- **DCN 11-26-968 · AI Offload SG** — Collaborative STA-AP Inference Offloading use case. Antonio de la Oliva (InterDigital). Model-partitioning between STA and AP.
- **DCN 11-26-994 / 995 / 996 · AI Offload SG** — AI offloading use cases and requirements / Considerations on AI offload procedures. Sam Shi (OPPO). Device-side perspective.
- **DCN 11-26-930r2 · AI Offload SG** — AI Offload Use Cases - Agent Perspective. Zisheng Wang (ZTE). Agent-side view: LLM agent on STA negotiates with AP.
- **DCN 11-26-779 · AI Offload SG** — May 2026 meeting agenda. Gaurang Naik.

## Key technical points (ZH)

- **DCN 11-26-978 · AI Offload SG** —— 初版 PAR 讨论。Gaurang Naik（Qualcomm，SG 主席）。定义「AI Offload」修订将覆盖什么的骨架文档。
- **DCN 11-26-979 · AI Offload SG** —— 初版 CSD 讨论。Gaurang Naik。从 IEEE 802 层面论证该项目的配套文档。
- **DCN 11-26-968 · AI Offload SG** —— STA-AP 协同推理卸载用例。Antonio de la Oliva（InterDigital）。STA 与 AP 之间的模型分割。
- **DCN 11-26-994 / 995 / 996 · AI Offload SG** —— AI 卸载用例与需求 / AI 卸载流程考量。Sam Shi（OPPO）。设备侧视角。
- **DCN 11-26-930r2 · AI Offload SG** —— AI 卸载用例——智能体视角。王自圣（ZTE）。智能体侧视图：STA 上的 LLM 智能体与 AP 协商。
- **DCN 11-26-779 · AI Offload SG** —— 2026-05 会议议程。Gaurang Naik。

## Why it matters / what's new (EN)

The PAR/CSD drafts are the meaningful Antwerp output: they make AI offload a concrete IEEE 802 candidate amendment rather than a marketing slogan. If the SG ratifies them in July, a Task Group is plausible by November 2026, which would be one of the fastest SG-to-TG promotions in recent 802.11 history. Initial PAR/CSD also crystallise the scope question that has been latent since the SG was formed: is "AI Offload" specifically about computation offloading from STA to AP (which is what the InterDigital and OPPO use cases assume), or more broadly about the full agent-AP negotiation surface (which is what the ZTE agent-perspective contribution argues for)? The next-run dedicated entry on DCN 978/979 will be worth writing once their full content is digestible from the readout. The relationship with `2026-05-12_arxiv-ncsim-edge-wifi-interference` is also worth flagging — the academic rank-inversion result there is the empirical foundation under the "AI offload needs Wi-Fi awareness" argument the SG is now formalising.

## Why it matters / what's new (ZH)

PAR/CSD 草案是 Antwerp 本周最有意义的产出：它把 AI 卸载变成了一个具体的 IEEE 802 候选修订，而不只是一句营销口号。如果 SG 在 7 月批准它们，那 11 月之前出现任务组是合理可能 —— 这将是 802.11 近年最快的 SG→TG 跃迁之一。初版 PAR/CSD 也把自 SG 成立以来潜伏的范围问题正式摆出：「AI 卸载」究竟是 STA 到 AP 的算力卸载（InterDigital 与 OPPO 用例所假设的范围），还是更广义的「智能体—AP 协商面」（ZTE 智能体视角的主张）？等 DCN 978/979 的完整内容可解读后，下次运行值得写独立深度条目。与 `2026-05-12_arxiv-ncsim-edge-wifi-interference` 的关联也值得点出 —— 学界的排名反转结果是 SG 当前正在正式化的「AI 卸载需要 Wi-Fi 感知」论点的实证底座。
