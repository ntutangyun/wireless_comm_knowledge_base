---
id: 2026-09-09_arxiv-pa-bench-personal-assistant-memory-forgetting
date_published: 2026-09-04
date_found: 2026-09-09
type: academic-paper
technology: edge-ai
title_en: "Will My Assistant Remember My Allergy? What Personal LLM Assistants Forget When Conversation Memory Is Compressed"
title_zh: "我的助手会记得我的过敏史吗？对话记忆压缩下个人大模型助手的遗忘问题"
url: "https://arxiv.org/abs/2609.05767"
source_quality: full
topics: [personal-LLM-assistant, KV-cache-eviction, on-device-privacy, PA-Bench, safety-critical-memory]
topic_primary: home-ai-assistant
topics_secondary: [on-device-inference, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Researchers at Duke University study a specific failure mode of on-device personal LLM assistants (the paper's examples are health companions, elder-care agents, and accessibility aides): under privacy constraints these assistants run on-device, where a month of accumulated conversation can outgrow the model's own context window, forcing a KV-cache eviction policy to decide what the compressed cache keeps and discards. The paper's central methodological point is that standard eviction benchmarks report deceptively good retention — around a 20% cache budget — because those benchmarks compress the conversation *after* revealing the recall question, giving the compressor foresight no real assistant has. To test the realistic case, the authors build PA-Bench: 100 constructed thirty-round conversations, each seeded with everyday requests plus two safety-critical disclosures (drawn from six categories — allergy, medication, doctor contact, emergency contact, dietary restriction, appointment date) mentioned only in passing, with the recall query withheld until after compression.

Under this "query-hidden" protocol, six training-free eviction policies were evaluated (SnapKV, a single-position "Probe" ranking, H2O, StreamingLLM, LRU, and an INT4-demotion variant) at a 20% cache budget: every policy dropped to 0.00–0.01 recall of the safety-critical fact when it was needed, against 0.97 recall with the full uncompressed cache. The same policies reach 0.945–0.975 recall for the query-aware scorers (against ≈0.93 for the full cache) under the conventional "query-visible" protocol that leaks the future question — the gap the paper argues makes standard benchmarks misleading. A budget sweep for H2O shows the facts only become recoverable at much larger allocations (H2O reaches 0.43 recall at 40% budget, 0.80 at 60%, 0.965 at 80%), and the paper notes the effective "scoring cache" a policy actually uses can be as small as 4% even at a nominal 20% budget. The paper's stated conclusion is architectural, not just algorithmic: a compressed KV cache should be treated purely as an inference-acceleration mechanism, not as a persistence layer, and safety-critical facts need a separate auditable episodic store plus an interface that asks the user to confirm rather than silently inventing an answer — the paper reports 99% of observed failures were repair requests rather than confabulations. Accepted at the ACM HumanSys 2026 workshop (Austin, 26–30 Oct 2026).

## Summary (ZH)

杜克大学的研究者研究了端侧个人大模型助手的一种特定失效模式（论文举例包括健康陪伴、老年看护、无障碍辅助等场景）：出于隐私考虑，这类助手运行在设备本地，而累积一个月的对话往往会超出模型自身的上下文窗口，迫使 KV 缓存淘汰策略决定压缩后的缓存保留什么、丢弃什么。本文的核心方法论观点是：现有主流淘汰基准所报告的保留率之所以看起来不错（约 20% 缓存预算下），是因为这些基准在压缩对话*之后*才揭示召回问题——这相当于赋予压缩器一种真实助手根本不具备的「预知能力」。为测试更贴近现实的场景，作者构建了 PA-Bench：100 段构造出的三十轮对话，每段对话中除日常请求外，还顺带提及两条来自六个类别（过敏、用药、医生联系方式、紧急联系人、饮食限制、预约日期）的安全关键信息，且召回问题在压缩完成后才揭示。

在这种「问题隐藏」协议下，研究评测了六种无需训练的淘汰策略（SnapKV、单位置排序的「Probe」、H2O、StreamingLLM、LRU，以及一种 INT4 降精度变体），在 20% 缓存预算下：所有策略在需要用到该安全关键信息时的召回率均降至 0.00–0.01，而完整未压缩缓存的召回率为 0.97。同样这些策略在常规的「问题可见」协议（会泄露未来问题）下，问题感知型打分策略可达到 0.945–0.975 的召回率（完整缓存约为 0.93）——论文认为正是这一差距使得现有基准具有误导性。针对 H2O 的预算扫描显示，只有在大幅提高预算配额时相关信息才可被召回（H2O 在 40% 预算下召回率 0.43，60% 时 0.80，80% 时 0.965），论文还指出，即便名义预算为 20%，策略实际使用的「打分缓存」有效规模可能小至 4%。论文给出的结论是架构层面而非仅算法层面的：应将压缩后的 KV 缓存纯粹视为推理加速机制，而非持久化存储层；安全关键信息需要一个独立的、可审计的情景记忆存储，并配合一个在不确定时向用户确认、而非默默编造答案的交互界面——论文报告称观测到的失效中 99% 属于修复请求而非虚构回答。本文已被 ACM HumanSys 2026 研讨会（美国奥斯汀，2026 年 10 月 26–30 日）录用。

## Key technical points (EN)

- **Deployment setting**: on-device personal LLM assistants (health companion / elder-care / accessibility framing), driven on-device by privacy constraints, with conversation history exceeding the model's context window over a month of use.
- **PA-Bench**: 100 constructed 30-round conversations, everyday requests plus two safety-critical disclosures per conversation across six fact categories (allergy, medication, doctor contact, emergency contact, dietary restriction, appointment date); recall query withheld until after compression ("query-hidden" protocol).
- **Six eviction policies evaluated**: SnapKV, Probe (single-position ranking), H2O, StreamingLLM, LRU, INT4-demotion.
- **Headline result at 20% budget**: 0.00–0.01 recall (query-hidden, realistic) vs. 0.97 (full memory) vs. 0.945–0.975 for the query-aware scorers, against ≈0.93 for the full cache (query-visible, the conventional and misleading benchmark protocol).
- **Budget sweep (H2O)**: recall recovers only at much larger budgets — H2O reaches 0.43 at 40%, 0.80 at 60%, 0.965 at 80%.
- **Effective vs. nominal budget**: a nominal 20% budget can correspond to an effective "scoring cache" as small as 4%.
- **Recommendation**: treat compressed KV cache as inference-reuse only, not persistence; pair it with an auditable episodic store for safety-critical facts and a confirm-rather-than-invent interface (99% of observed failures were repair requests, not confabulations).
- **Venue**: the ACM HumanSys 2026 workshop (Austin, 26–30 Oct 2026); authors from Duke University.

## Key technical points (ZH)

- **部署场景**：端侧个人大模型助手（健康陪伴/老年看护/无障碍辅助场景），出于隐私原因运行在本地，一个月使用周期内对话历史会超出模型上下文窗口。
- **PA-Bench**：100 段构造的三十轮对话，每段包含日常请求以及来自六个类别（过敏、用药、医生联系方式、紧急联系人、饮食限制、预约日期）的两条安全关键信息；召回问题在压缩完成后才揭示（「问题隐藏」协议）。
- **评测的六种淘汰策略**：SnapKV、Probe（单位置排序）、H2O、StreamingLLM、LRU、INT4 降精度变体。
- **20% 预算下的核心结果**：召回率 0.00–0.01（问题隐藏、更贴近现实）对比 0.97（完整记忆）对比问题感知型打分策略的 0.945–0.975、完整缓存的约 0.93（问题可见——常规但具有误导性的基准协议）。
- **预算扫描（H2O）**：仅在大幅提高预算时召回率才恢复——H2O 在 40% 预算下为 0.43，60% 时 0.80，80% 时 0.965。
- **有效预算与名义预算**：名义 20% 的预算，实际有效的「打分缓存」规模可能小至 4%。
- **建议**：将压缩后的 KV 缓存仅视为推理复用机制而非持久化存储；为安全关键信息配备独立的可审计情景记忆存储，并采用「确认而非编造」的交互方式（观测到的失效中 99% 是修复请求而非虚构回答）。
- **会议/机构**：ACM HumanSys 2026 研讨会（美国奥斯汀，2026 年 10 月 26–30 日）；作者来自杜克大学。

## Why it matters / what's new (EN)

This KB's home-ai-assistant bin currently holds two entries about *where* compute runs — Amazon's Alexa+ cloud-vs-on-device chip trade-off (`2026-09-02_amazon-alexa-plus-cloud-required-az3-edge-chips`) and Huawei's Xiaoyi architecture refresh (`2026-09-02_huawei-xiaoyi-hdc2026-agentic-architecture`) — but neither addresses what happens *inside* an on-device assistant once it is running under a memory budget. This paper supplies a rigorous, constructed-benchmark measurement of a failure mode the paper argues standard eviction benchmarks systematically conceal, in exactly that setting: the query-hidden vs. query-visible evaluation gap the paper identifies is a methodological point that could affect how any future on-device-assistant benchmark result in this KB should be read, not just this one paper's own claims.

## Why it matters / what's new (ZH)

本知识库的 home-ai-assistant 分类目前收录的两条条目关注的是「计算发生在哪里」——亚马逊 Alexa+ 的云端与端侧芯片权衡（`2026-09-02_amazon-alexa-plus-cloud-required-az3-edge-chips`）以及华为小艺架构升级（`2026-09-02_huawei-xiaoyi-hdc2026-agentic-architecture`）——但两者均未涉及端侧助手在有限内存预算下运行时，「内部」究竟发生了什么。本文针对这一确切场景，提供了一项严谨的、基于构造基准的实测，揭示了论文认为被现有淘汰基准系统性掩盖的一种失效模式：论文所指出的「问题隐藏」与「问题可见」评测方式之间的差距，是一个方法论层面的要点，可能影响未来本知识库中任何端侧助手基准结果的解读方式，而不仅仅关乎本文自身的结论。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
