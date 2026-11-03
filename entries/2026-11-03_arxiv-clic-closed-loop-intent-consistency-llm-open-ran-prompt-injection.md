---
id: 2026-11-03_arxiv-clic-closed-loop-intent-consistency-llm-open-ran-prompt-injection
date_published: 2026-10-29
date_found: 2026-11-03
type: academic-paper
technology: cellular
title_en: "CLIC: Closed-Loop Intent Consistency for Securing LLM-Driven Control in Open RAN"
title_zh: "CLIC：面向 Open RAN 中 LLM 驱动控制的闭环意图一致性安全防护"
url: "https://arxiv.org/abs/2610.40744"
source_quality: full
topics: [O-RAN, RIC, xApp, rApp, prompt-injection, virtual-prompt-injection, LLM, network-slicing, OpenAI-Cellular-OAIC, A1, E2]
topic_primary: cellular-security
topics_secondary: [open-ran, network-slicing, cellular-ai]
novelty_score: 3
---

## Summary (EN)

Sunder Ali Khowaja, Kapal Dev, Joongheon Kim, Angelos Antonopoulos and Nikolaos Bartzoudis (Dublin City University, Munster Technological University, Korea University, Nearby Computing, CTTC) consider O-RAN control loops in which a large language model, running as an xApp or rApp on the RAN Intelligent Controller (RIC), turns operator intents into slicing and PRB-allocation decisions. They describe two threats that interface authentication does not stop: runtime prompt injection (fabricated telemetry, injected instructions, context override) and residual virtual prompt injection (VPI), where a trigger planted in the instruction-tuning data silently steers the model later. The paper argues that existing defences check individual prompts and do not enforce consistency along the whole path from the certified A1 intent, through the model's multi-step trajectory, to the final E2 action.

CLIC adds two components. A Non-RT rApp certifies the model before deployment: it filters fine-tuning pairs by embedding distance, likelihood under a frozen clean reference model and KL divergence, then probes the adapted model with trigger and contrast instructions and only certifies models whose residual steering rate is under a bound. A Near-RT xApp scores every proposed action with a consistency score C(I, tau), a weighted sum of embedding similarity between intent and trajectory summary, a KL term against a clean reference model's action distribution (over four PRB-share templates: 70-30, 65-35, 50-50, 20-80), and a penalty if a known trigger is detected. Actions below a threshold (set at the 10% quantile on clean trajectories) are replaced through trajectory sanitization, source isolation or a deterministic non-LLM fallback. Both run on a 4-bit Phi-3-mini (3.8B) with LoRA adapters, implemented on the OAIC platform (srsRAN with a Near-RT RIC) and evaluated on domain-adapted JailbreakBench and AdvBench prompts plus an Alpaca corpus with about 2% poisoned pairs, mean over three LoRA seeds.

## Summary (ZH)

Sunder Ali Khowaja、Kapal Dev、Joongheon Kim、Angelos Antonopoulos 与 Nikolaos Bartzoudis（都柏林城市大学、芒斯特理工大学、高丽大学、Nearby Computing、CTTC）讨论这样一类 O-RAN 控制环路：大语言模型作为 xApp 或 rApp 运行在 RAN 智能控制器（RIC）上，把运营商意图转化为切片与 PRB 分配决策。他们指出接口认证无法阻止两类威胁：运行时提示注入（伪造遥测、注入指令、覆盖上下文）和残留的虚拟提示注入（VPI）——即植入指令微调数据中的触发器在之后悄悄操控模型。论文认为，现有防御只检查单条提示，没有对从经认证的 A1 意图、经模型多步轨迹、到最终 E2 动作的完整路径施加一致性约束。

CLIC 增加两个组件。Non-RT rApp 在部署前认证模型：先用嵌入距离、在冻结干净参考模型下的似然以及 KL 散度过滤微调样本对，再用触发指令与对照指令探测微调后的模型，仅为残留操控率低于设定界限的模型颁发证书。Near-RT xApp 用一致性分数 C(I, tau) 评估每个拟执行的动作：该分数由意图与轨迹摘要的嵌入相似度、与干净参考模型动作分布（四种 PRB 份额模板：70-30、65-35、50-50、20-80）之间的 KL 项、以及检测到已知触发器时的惩罚项加权组成。低于阈值（取干净轨迹分数的 10% 分位数）的动作通过轨迹净化、来源隔离或确定性的非 LLM 回退策略处理。两者均运行在 4 比特量化的 Phi-3-mini（3.8B）和 LoRA 适配器上，基于 OAIC 平台（srsRAN 加 Near-RT RIC）实现，在领域改写的 JailbreakBench、AdvBench 提示以及含约 2% 投毒样本对的 Alpaca 语料上评估，结果为三个 LoRA 随机种子的均值。

## Key technical points (EN)

- Threat model: authenticated control-plane inputs and fine-tuned weights are treated as potentially adversarial; the base model weights, execution environment, certified A1 intent and the CLIC components themselves are assumed trusted.
- Reported results against no defence and a re-implemented PromptGuard-style runtime-only filter (the original system was not run): attack success rate 0.92 / 0.41 / 0.29, residual VPI steering 0.37 / 0.34 / 0.04, isolation violations 0.58 / 0.30 / 0.19, Jain fairness 0.76 / 0.83 / 0.87.
- Cost: false-positive rate on clean decisions rises to 0.11 (the paper says the threshold is an operator-tunable trade-off) and added latency is 27 ms versus 18 ms for the runtime-only filter, measured on RTX 4090 / H200 workstation hardware, not an edge platform.
- Ablation: removing the trigger indicator returns residual steering to 0.31, close to the runtime-only baseline; removing the semantic term raises attack success to 0.41.
- Stated limits: the trigger indicator only covers triggers seen during certification (the remaining 4% residual comes from paraphrased unseen triggers); the verifier shares the quantized model it checks; adaptive attackers targeting the score are not evaluated; the throughput cost of the fallback policy under false positives is not quantified; the evaluation is simulated on workstation GPUs.

## Key technical points (ZH)

- 威胁模型：经认证的控制面输入与微调后的权重都被视为可能受攻击者影响；基础模型权重、执行环境、经认证的 A1 意图以及 CLIC 组件本身被假定可信。
- 与无防御及重新实现的 PromptGuard 式仅运行时过滤（未运行原系统）对比，三者依次为：攻击成功率 0.92 / 0.41 / 0.29，残留 VPI 操控率 0.37 / 0.34 / 0.04，隔离违规率 0.58 / 0.30 / 0.19，Jain 公平性 0.76 / 0.83 / 0.87。
- 代价：对正常决策的误报率升至 0.11（论文称阈值是运营商可调的权衡），新增延迟为 27 ms，而仅运行时过滤为 18 ms；延迟在 RTX 4090 / H200 工作站上测得，并非边缘平台。
- 消融：去掉触发器指示项后残留操控率回升到 0.31，接近仅运行时基线；去掉语义项后攻击成功率升至 0.41。
- 论文自述的局限：触发器指示项只覆盖认证阶段见过的触发器（剩余 4% 来自未见过的改写触发器）；验证器与被检查的控制器共用同一量化模型；未评估针对一致性分数的自适应攻击者；误报时回退策略的吞吐代价未量化；评估为工作站 GPU 上的仿真。

## Why it matters / what's new (EN)

The paper's framing is that LLM-driven RIC applications add a semantic attack surface that O-RAN's authentication, transport protection and access control do not cover, and that defence should span model preparation (Non-RT) and runtime (Near-RT) instead of filtering prompts alone. The evidence is a small-scale simulation with a single 3.8B model, one slicing task and JailbreakBench/AdvBench prompts domain-adapted by fixed mapping rules, so the numbers show the mechanism working in that setting rather than a measured margin on a deployed RAN.

## Why it matters / what's new (ZH)

论文的出发点是：LLM 驱动的 RIC 应用带来了 O-RAN 现有认证、传输保护与访问控制未覆盖的语义层攻击面，防御应当横跨模型准备阶段（Non-RT）与运行阶段（Near-RT），而不只是过滤提示。其证据来自小规模仿真：单一 3.8B 模型、单一切片任务，以及按固定映射规则做领域改写的 JailbreakBench/AdvBench 提示，因此数字说明该机制在此设定下有效，而不是在实际部署 RAN 上测得的裕量。

## Images

None.
