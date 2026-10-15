---
id: 2026-10-15_arxiv-schemaweaver-schema-guided-parallel-decoding-mobile-agents
date_published: 2026-10-12
date_found: 2026-10-15
technology: edge-ai
type: academic-paper
title_en: "SchemaWeaver: schema-guided parallel decoding to cut LLM tool-calling latency on mobile devices"
title_zh: "SchemaWeaver：以模式引导的并行解码降低手机端 LLM 工具调用延迟"
url: "https://arxiv.org/abs/2610.17436"
source_quality: abstract_only
topics: [on-device-agents, tool-calling, parallel-decoding, mobile-SoC, decode-latency]
topic_primary: on-device-inference
topics_secondary: [home-ai-assistant]
novelty_score: 3
---

## Summary (EN)

SchemaWeaver addresses the latency of LLM tool calling for agents running on mobile devices. The authors state that the decode phase is the main contributor to this latency and is hard to speed up on mobile processors because it is bound by memory bandwidth rather than compute.

The technique enforces schema-guided parallel decoding during the decode phase of tool calling, so that multiple tokens are produced in each decode pass. The authors state it can be applied generically to the LLM inference engine on mobile devices, without any training or changes to the LLMs.

Experiments on major mobile SoCs and LLM families show that SchemaWeaver reduces LLM tool-calling latency by up to 3.9 times compared with the competitive baselines.

## Summary (ZH)

SchemaWeaver 针对手机上运行的智能体的 LLM 工具调用延迟问题。作者指出，解码阶段是该延迟的主要来源，并且由于受内存带宽而非算力限制，在移动处理器上很难加速。

该技术在工具调用的解码阶段强制执行模式引导的并行解码，使每次解码遍历产生多个 token。作者表示它可以通用地应用于手机上的 LLM 推理引擎，无需任何训练或修改 LLM。

在主流手机 SoC 与多个 LLM 系列上的实验表明，与有竞争力的基线相比，SchemaWeaver 将 LLM 工具调用延迟最多降低 3.9 倍。

## Key technical points (EN)

- Target: LLM tool-calling latency for on-device mobile agents; decode phase is memory-bandwidth-bound.
- Method: schema-guided parallel decoding producing multiple tokens per decode pass.
- Applicability: stated to apply to mobile LLM inference engines with no training and no LLM changes.
- Result: up to 3.9x lower tool-calling latency than competitive baselines on major mobile SoCs and LLM families.

## Key technical points (ZH)

- 目标：端侧手机智能体的 LLM 工具调用延迟；解码阶段受内存带宽限制。
- 方法：模式引导的并行解码，每次解码遍历产生多个 token。
- 适用性：据称可用于手机 LLM 推理引擎，无需训练、无需修改 LLM。
- 结果：在主流手机 SoC 与 LLM 系列上，工具调用延迟比有竞争力的基线最多降低 3.9 倍。

## Why it matters / what's new (EN)

The contribution is a decode-side speed-up specific to structured tool-call output on phones. The 3.9x figure is a best-case ('up to') number against the authors' chosen baselines, and this record is based on the abstract only, so baselines and devices are not named here.

## Why it matters / what's new (ZH)

其贡献是针对手机上结构化工具调用输出的解码侧加速。3.9 倍是相对作者所选基线的最佳情形（“最多”）数字；本条目仅基于摘要，因此此处未列出基线与设备名称。

## Images

*(No redistributable images for this entry.)*
