---
id: 2026-11-23_arxiv-llm-driven-traffic-control-xapp-dynamic-5g-ran-intents
date_published: 2026-11-19
date_found: 2026-11-23
type: academic-paper
technology: cellular
title_en: "An LLM-Driven Traffic-Control xApp for Dynamic 5G RAN Intents"
title_zh: "面向动态 5G RAN 意图的 LLM 驱动流量控制 xApp"
url: "https://arxiv.org/abs/2611.25736"
source_quality: full
topics: [O-RAN, xApp, near-RT-RIC, intent-based-networking, LLM, TC-RAN, OpenAirInterface, FlexRIC, traffic-control]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Triolo, Valcarenghi and Paolini (Scuola Superiore Sant'Anna) build an xApp that uses a large language model to choose the traffic-control pipeline of a programmable RAN (TC-RAN). The xApp combines an operator-defined service intent (bounds on latency, UDP loss and throughput), runtime E2 telemetry and the currently deployed configuration into a structured prompt; the model returns a JSON policy that a deterministic validator checks before it is sent to the gNB over E2. Experiments on an OpenAirInterface 5G setup compare it with a static TC-RAN configuration.

## Summary (ZH)

Triolo、Valcarenghi 与 Paolini（圣安娜高等学院）构建了一个 xApp，用大语言模型为可编程 RAN（TC-RAN）选择流量控制流水线。该 xApp 把运营方定义的服务意图（时延、UDP 丢包和吞吐的界限）、运行时 E2 遥测和当前已部署的配置组合成结构化提示词；模型返回 JSON 策略，经确定性验证器检查后再通过 E2 下发到 gNB。论文在 OpenAirInterface 5G 环境中与静态 TC-RAN 配置做了对比实验。

## Key technical points (EN)

- Architecture: operator intent, an LLM policy agent, a Policy Validator and a TC-xApp on the near-RT RIC (FlexRIC). Decisions are triggered periodically and on intent change; the LLM is invoked asynchronously from a state snapshot so inference does not block packet forwarding or incoming E2 measurements, and triggers arriving during a pending inference are discarded.
- Action space: an ordered list of TC-RAN components with parameters - an OSI-based classifier, a CoDel queue, a scheduler, per-queue shapers and a 5G-BDP pacer that limits data forwarded to the RLC buffer to the estimated bandwidth-delay product. The model may also propose keeping the current configuration.
- Validation: JSON-schema check, whitelist of admissible operations, boundary clipping of numerical parameters (for example CoDel target_ms clamped to 5-100 ms) and rollback to a default OSI classifier plus CoDel configuration for TCP isolation.
- Testbed: OAI gNB, one OAI UE, 5G core and FlexRIC on an RF simulator, NR band 78, numerology 1, 106 PRBs; a 1 Mbit/s UDP flow with 160-byte payloads (latency-sensitive) coexists with six CUBIC TCP streams. Intent-sequence runs last 160 s (channel-degradation runs 190 s), with 10 repetitions; the primary metric is an Intent Satisfaction Ratio (all constraints of the active intent met in a 5 s window).
- Local LLM: Qwen3-8B served with Ollama on a Tesla P100, 3072-token context, temperature 0, thinking mode off; average policy inference 1.47 s and about 1.22 ms to install the pipeline at the gNB.
- Results: under a throughput-reliability-throughput intent sequence the average ISR was 0.91 for the LLM controller versus 0.52 for the static baseline; in the reliability phase the LLM controller stayed mostly between 0.8 and 1.0 versus about 0.2. When the radio quality dropped from CQI 10 to 7 (MCS 16 to 9, capacity from about 24 to 11.5 Mbit/s) the controller added a TCP shaper at about 11 Mbit/s and held an ISR of about 0.88 versus about 0.4 for the baseline.
- Backends: Qwen3-8B about 0.91, Mistral-7B about 0.83 and Gemma3-4B about 0.82; 98.6% to 100% of generated policies passed validation. The authors note that differences may reflect inference latency as well as reasoning ability.
- Caveats: emulated radio (RF simulator) with one UE and two flows; the baseline is a single fixed pipeline.

## Key technical points (ZH)

- 架构：运营方意图、LLM 策略代理、策略验证器以及运行在近实时 RIC（FlexRIC）上的 TC-xApp。决策既周期性触发，也在意图变化时触发；LLM 基于状态快照异步调用，因此推理不会阻塞数据转发或新到的 E2 测量，推理进行期间到达的触发请求会被丢弃。
- 动作空间：带参数的 TC-RAN 组件有序列表——基于 OSI 分层的分类器、CoDel 队列、调度器、按队列整形器，以及将送入 RLC 缓冲区的数据量限制在估计带宽时延积以内的 5G-BDP 节拍器（pacer）。模型也可以建议保持当前配置。
- 验证：JSON 模式检查、可接受操作白名单、数值参数边界截断（例如 CoDel 的 target_ms 限制在 5-100 ms），以及回退到由 OSI 分类器加 CoDel（用于 TCP 隔离）构成的默认配置。
- 测试床：基于射频模拟器的 OAI gNB、一个 OAI UE、5G 核心网和 FlexRIC，NR 频段 n78，子载波间隔配置 1，106 个 PRB；一条 1 Mbit/s、160 字节载荷的时延敏感 UDP 流与六条 CUBIC TCP 流共存。意图序列实验每次运行 160 s（信道劣化实验为 190 s），重复 10 次；主要指标为意图满足率（ISR，即 5 s 窗口内当前意图的所有约束同时满足）。
- 本地 LLM：Ollama 在 Tesla P100 上提供 Qwen3-8B，上下文 3072 token，温度 0，关闭思考模式；单次策略推理平均 1.47 s，在 gNB 安装流水线约 1.22 ms。
- 结果：在“吞吐-可靠性-吞吐”的意图序列下，LLM 控制器平均 ISR 为 0.91，静态基线为 0.52；在可靠性阶段，LLM 控制器大多维持在 0.8 至 1.0，基线约为 0.2。当无线质量从 CQI 10 降至 7（MCS 由 16 降至 9，容量约由 24 降至 11.5 Mbit/s）时，控制器在 TCP 队列加入约 11 Mbit/s 的整形器，ISR 保持约 0.88，基线约为 0.4。
- 不同后端：Qwen3-8B 约 0.91，Mistral-7B 约 0.83，Gemma3-4B 约 0.82；生成的策略中 98.6% 至 100% 通过验证。作者指出差异可能同时反映推理时延与推理能力。
- 注意事项：使用仿真射频、仅一个 UE 和两条流；基线是单一固定流水线。

## Why it matters / what's new (EN)

The distinguishing element is using the LLM as a runtime policy selector over a fixed, validated set of traffic-control components, with intent changes handled without redeploying the xApp. Evidence is limited to an emulated single-UE OAI setup and one static baseline, so it demonstrates feasibility of the control loop rather than performance on live networks.

## Why it matters / what's new (ZH)

其区别点在于：把 LLM 作为运行时策略选择器，作用于一组固定且经过验证的流量控制组件之上，意图变化时无需重新部署 xApp。证据仅限于仿真的单 UE OAI 环境和一个静态基线，因此证明的是该控制回路的可行性，而非在实网中的性能。

## Images

None.
