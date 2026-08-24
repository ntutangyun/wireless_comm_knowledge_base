---
id: 2026-08-24_arxiv-z2act-verifiable-agentic-intent-oran
date_published: 2026-08-21
date_found: 2026-08-24
type: academic-paper
technology: cellular
title_en: "Z2-ACT: End-to-End Verifiable Agentic Intent Control for Open 6G RAN"
title_zh: "Z2-ACT：面向开放 6G RAN 的端到端可验证智能体意图控制"
url: "https://arxiv.org/abs/2608.21049"
source_quality: full
topics: [agentic-AI, intent-based-networking, zero-trust, zero-knowledge-proof, prompt-injection, RIC, O-RAN, LLM, auditability, multi-vendor]
topic_primary: cellular-security
topics_secondary: [open-ran, cellular-ai]
novelty_score: 3
---

## Summary (EN)
Sunder Ali Khowaja (Dublin City University), Kapal Dev (Munster Technological University) and George C. Alexandropoulos (National and Kapodistrian University of Athens) propose Z2-ACT, an architecture that makes LLM/agent-driven control of a multi-vendor Open 6G RAN verifiable end-to-end. Four primitives are composed into one pipeline: (1) Intent Contracts in the Non-RT RIC — a dual-agent stage that translates natural-language operator goals into formal, machine-checkable specifications (goal predicates, resource ceilings, spatial scope, temporal validity, permitted skills); (2) zero-trust prompt verification in the Near-RT RIC — every LLM-influenced input is decomposed into descriptive (telemetry) and imperative (action) components and scored for adversarial intent against a calibrated threshold before admission; (3) a self-management gate that evaluates six scalars (predicted risk, uncertainty, budget usage, explanation consistency, spatial extent, recent commit rate) before releasing any skill sequence; and (4) an asynchronous evidence-and-trust plane that emits Pedersen commitments and Groth16 zero-knowledge proofs showing each released decision complied with its contract and gate conditions, without exposing raw measurements. The stack rides standard O-RAN A1/E2/O1 interfaces plus a lightweight evidence bus.

Evaluation uses public ColO-RAN traces from the Colosseum emulator in multi-cell, multi-slice scenarios with a synthetic three-vendor assignment and a fixed catalogue of prompt-injection attacks embedded in telemetry. Against an RL baseline, the full pipeline lifts SLA satisfaction 0.81 to 0.91 and attack mitigation from 0.02 to 0.95, with near-RT latency at 18 ms (99% of epochs within the latency bound) and 1.15x E2 signaling overhead; audit verification succeeds in 100% of cases, and 96% of multi-vendor spatial-overlap conflicts resolve by priority rule. The authors are explicit that the evaluation is open-loop (released actions do not reshape subsequent radio state), vendors are simulated, and the adversarial prompts are non-adaptive.

## Summary (ZH)
都柏林城市大学的 Sunder Ali Khowaja、芒斯特理工大学的 Kapal Dev 与雅典大学的 George C. Alexandropoulos 提出 Z2-ACT——使多厂商开放 6G RAN 中由 LLM/智能体驱动的控制实现端到端可验证的架构。四个原语组合为一条流水线：(1) 非实时 RIC 中的意图合约（Intent Contract）——双智能体阶段将运营人员的自然语言目标翻译为形式化、机器可校验的规约（目标谓词、资源上限、空间范围、时间有效期、允许的技能集）；(2) 近实时 RIC 中的零信任提示词校验——所有受 LLM 影响的输入被分解为描述性（遥测）与命令性（动作）成分，并在准入前对照校准阈值进行对抗意图评分；(3) 自治管理门（self-management gate）——在放行任何技能序列前评估六个标量（预测风险、不确定性、预算占用、解释一致性、空间范围、近期提交速率）；(4) 异步证据与信任平面——生成 Pedersen 承诺与 Groth16 零知识证明，证明每个放行决策符合其合约与门控条件，且不暴露原始测量数据。整个栈运行在标准 O-RAN A1/E2/O1 接口之上，仅增加一条轻量证据总线。

评估基于 Colosseum 仿真器的公开 ColO-RAN 轨迹，多小区多切片场景 + 合成三厂商分配 + 嵌入遥测的固定提示词注入攻击目录。相比 RL 基线，完整流水线将 SLA 满足率从 0.81 提升至 0.91，攻击缓解率从 0.02 提升至 0.95；近实时时延 18 ms（99% 的 epoch 满足时延约束），E2 信令开销 1.15 倍；审计验证成功率 100%，96% 的多厂商空间重叠冲突可由优先级规则化解。作者明确说明：评估为开环（放行的动作不改变后续无线状态）、厂商为仿真设定、对抗提示词为非自适应目录。

## Key technical points (EN)
- Four-stage verifiable pipeline: Intent Contracts (Non-RT RIC, dual-agent NL-to-formal translation) -> zero-trust prompt scoring alpha(P) <= theta (Near-RT RIC) -> six-scalar self-management gate -> Pedersen-commitment + Groth16 ZK audit plane.
- Rides standard O-RAN A1/E2/O1 interfaces; adds only a lightweight evidence bus; near-RT budget respected (18 ms mean, 99% of epochs in bound).
- Results on public ColO-RAN/Colosseum traces: SLA satisfaction 0.91 vs 0.81 (RL baseline); prompt-injection mitigation 0.95 vs 0.02; E2 overhead 1.15x; audit verification 1.00.
- Non-RT intent translation with Llama 2 7B: 0.78 translation accuracy, 0.18 invalid/hallucinated output rate, ~1 s latency — the contract stage exists precisely to catch that 18%.
- Multi-vendor coordination: 35% of episodes exhibit spatial overlap; 96% resolved by priority rule; release predicate well-defined after serialization in 98%.
- Honest limitations section: open-loop evaluation only (filtering effect, not closed-loop reshaping), synthetic vendor split, fixed non-adaptive attack catalogue, one-at-a-time threshold sensitivity.
- Claimed novelty is the composition — first unified intent -> verified realization -> cryptographic audit chain for agentic RAN control, not any individual block.

## Key technical points (ZH)
- 四级可验证流水线：意图合约（非实时 RIC，双智能体自然语言到形式化翻译）-> 零信任提示词评分 alpha(P) <= theta（近实时 RIC）-> 六标量自治管理门 -> Pedersen 承诺 + Groth16 零知识审计平面。
- 运行于标准 O-RAN A1/E2/O1 接口之上；仅新增轻量证据总线；满足近实时预算（平均 18 ms，99% epoch 在界内）。
- 公开 ColO-RAN/Colosseum 轨迹上的结果：SLA 满足率 0.91 对 RL 基线 0.81；提示词注入缓解率 0.95 对 0.02；E2 开销 1.15 倍；审计验证 1.00。
- 非实时意图翻译（Llama 2 7B）：翻译准确率 0.78、无效/幻觉输出率 0.18、时延约 1 s——合约阶段正是为兜住这 18% 而设。
- 多厂商协调：35% 的回合存在空间重叠；96% 由优先级规则化解；序列化后放行谓词良定义率 98%。
- 局限性坦诚：仅开环评估（过滤效应而非闭环重塑）、合成厂商划分、固定非自适应攻击目录、阈值敏感性逐一变化。
- 主张的新颖性在于组合——首个面向智能体 RAN 控制的"意图 -> 已验证执行 -> 密码学审计"统一链条，而非单个模块的发明。

## Why it matters / what's new (EN)
The KB's AI-RAN safety thread has accumulated post-hoc forensics (C-RE-ACT, 2026-08-03), conflict arbitration (twin-fidelity xApp arbiter, 2026-07-28), pre-actuation certification (VeraRAN, 2026-08-04) and typed telemetry-integrity gates (WirelessOpsAgent, 2026-08-15). Z2-ACT adds the missing trust layer: cryptographic accountability — zero-knowledge proofs that an agent's released action complied with a formally translated operator intent, verifiable by third parties without raw data disclosure. It also directly connects the intent-based-networking thread (MISES privacy-intent assurance, 2026-07-13; Ericsson intent-driven orchestration, 2026-07-03) to the adversarial-input problem (prompt injection scored at admission, 95% mitigation vs 2% for an unguarded baseline). The 18% hallucination rate of the Llama-2 intent translator is itself a useful published datapoint for why contract checking is not optional. Open-loop evaluation is the main caveat — closed-loop network reshaping remains unproven.

## Why it matters / what's new (ZH)
知识库的 AI-RAN 安全线索已积累了事后取证（C-RE-ACT，2026-08-03）、冲突仲裁（孪生保真度 xApp 仲裁器，2026-07-28）、执行前认证（VeraRAN，2026-08-04）与类型化遥测完整性门（WirelessOpsAgent，2026-08-15）。Z2-ACT 补上缺失的信任层：密码学问责——用零知识证明证明智能体放行的动作符合形式化翻译后的运营意图，第三方无需原始数据即可验证。它还将意图网络线索（MISES 隐私意图保障，2026-07-13；爱立信意图驱动编排，2026-07-03）与对抗输入问题直接连通（准入时对提示词注入评分，缓解率 95%，对无防护基线的 2%）。Llama-2 意图翻译器 18% 的幻觉率本身就是"合约校验不可省略"的有力公开数据点。主要保留意见是开环评估——闭环网络重塑效果尚未验证。

## Images
![Real-world O-RAN deployment comparison | 现实 O-RAN 部署对比](https://arxiv.org/html/2608.21049v1/Figure1.jpg)
![Z2-ACT architectural layers | Z2-ACT 架构分层](https://arxiv.org/html/2608.21049v1/Figure2.jpg)
