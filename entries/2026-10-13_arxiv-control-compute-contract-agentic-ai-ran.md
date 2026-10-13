---
id: 2026-10-13_arxiv-control-compute-contract-agentic-ai-ran
date_published: 2026-10-03
date_found: 2026-10-13
type: academic-paper
technology: cellular
title_en: "Control-Compute Governance in Agentic AI-RAN: AI Agents as Both Controllers and Workloads"
title_zh: "智能体 AI-RAN 中的控制-算力治理：AI 智能体既是控制器又是工作负载"
url: "https://arxiv.org/abs/2610.04578"
source_quality: full
topics: [AI-RAN, agentic-AI, LLM, Near-RT-RIC, xApp, GPU-sharing, PHY-latency, OpenAirInterface, MCS-control]
topic_primary: cellular-ai
topics_secondary: [open-ran]
novelty_score: 4
---

## Summary (EN)
Le Xia, Rose Qingyang Hu and Yuan Zhou (Virginia Tech) and Haijian Sun (University of Georgia) examine a coupling in AI-RAN where an LLM agent is both the controller of the RAN and a workload on the same GPU. Two paths are identified: direct contention (LLM inference competes with PHY processing on a shared accelerator) and action-induced feedback (an executed gNB control action changes PHY workload, which changes the compute available to the agent's next inference). The authors note that current AI-RAN and O-RAN specifications leave this bidirectional coupling unaddressed.

They propose a "control-compute contract" with three rules: R1, inference is admitted only at a compute fraction that keeps PHY within its time budget; R2, the Near-RT RIC keeps the latest verified control action and re-verifies it if conditions change; R3, the projected PHY workload is checked before an action executes. Operator requirements stay binding and cannot be relaxed by the agent: the gNB host rejects compute allocations that violate the PHY time budget or the agent's compute budget, and the Near-RT RIC rejects control actions that violate operator requirements. The rules map onto a five-stage workflow: action verification and PHY projection, compute-compatibility check, inference-workload adjustment, action execution and confirmation, and inference-admission update.

An over-the-air testbed (NVIDIA DGX Spark with GB10 GPU, OpenAirInterface gNB with aggregated O-CU/O-DU, Near-RT RIC over E2, Qwen2.5-7B served by llama.cpp, USRP-2901, 30 kHz SCS / 500 us slot, 1 Mbps uplink) shows that LDPC decoding time rises from about 175 us (LLM loaded but idle) to about 1.4 ms under continuous LLM reasoning, roughly eight times; samples under 500 us fall from 99.9% to 6.9% (1,278 samples; 19 consecutive 90 s frames across five GPU conditions). A simulated, OTA-calibrated uplink-MCS-controller case study (illustrative 2 ms PHY budget; four 4,000 s runs per setting) reports that the contract keeps active-slot PHY-budget violations below 0.9%, versus 20.7% for ungoverned co-location and a 10.2% peak for observed-load admission, with mean inference-start-to-control time of 3.1 to 12.6 s versus 13.2 s for worst-case reservation (up to about four times faster). In MCS-switch ordering tests, overrun slots within 2 s were 32 versus 2,201 (workload rising from 1 to 4 code blocks per slot) and 2 versus 597 (workload falling), at costs of 0.1 s extra wait and 0.3 s inference deferral respectively.

Stated limitations: possible prolonged deferral of inference, no measurement of how much extra LLM reasoning improves control quality, PHY cost-model drift and stopping-delay margins. The conclusion looks ahead to multiple agents sharing one pool and standardized RIC-host message carriers.

## Summary (ZH)
Le Xia、Rose Qingyang Hu、Yuan Zhou（弗吉尼亚理工大学）与 Haijian Sun（佐治亚大学）研究 AI-RAN 中的一种耦合：LLM 智能体既是 RAN 的控制器，又是同一 GPU 上的工作负载。论文识别出两条路径：直接争用（LLM 推理与 PHY 处理在共享加速器上竞争）与动作诱发反馈（已执行的 gNB 控制动作改变 PHY 工作负载，进而改变智能体下一次推理可用的算力）。作者指出，现有 AI-RAN 与 O-RAN 规范尚未涉及这种双向耦合。

他们提出"控制-算力契约"，含三条规则：R1，仅在能使 PHY 保持在时间预算内的算力比例下准入推理；R2，Near-RT RIC 保留最近一次已验证的控制动作，条件变化时需重新验证；R3，动作执行前先校验预计的 PHY 工作负载。运营商要求始终有效，智能体不得放宽：gNB 主机拒绝违反 PHY 时间预算或智能体算力预算的算力分配，Near-RT RIC 拒绝违反运营商要求的控制动作。这些规则对应五阶段流程：动作验证与 PHY 预测、算力兼容性检查、推理负载调整、动作执行与确认、推理准入更新。

空口测试床（NVIDIA DGX Spark 搭载 GB10 GPU，OpenAirInterface gNB（O-CU/O-DU 聚合），经 E2 连接的 Near-RT RIC，llama.cpp 部署的 Qwen2.5-7B，USRP-2901，30 kHz 子载波间隔 / 500 us 时隙，1 Mbps 上行）显示：LDPC 译码时间从约 175 us（LLM 已加载但空闲）升至持续 LLM 推理下的约 1.4 ms，约为八倍；低于 500 us 的样本占比从 99.9% 降至 6.9%（1,278 个样本；五种 GPU 条件下共 19 个连续 90 秒帧）。一项经空口数据标定的仿真案例（上行 MCS 控制器，示意性 2 ms PHY 预算，每种设置四次 4,000 秒运行）表明：契约使活跃时隙 PHY 预算违规率低于 0.9%，而无治理共置为 20.7%，按观测负载准入的峰值为 10.2%；从推理开始到控制执行的平均时间为 3.1–12.6 秒，对比最坏情况预留的 13.2 秒（最多快约四倍）。在 MCS 切换顺序测试中，2 秒内超限时隙数分别为 32 对 2,201（负载由每时隙 1 个码块增至 4 个）和 2 对 597（负载下降），代价分别为额外等待 0.1 秒与推理推迟 0.3 秒。

作者列出的局限：推理可能被长期推迟；未衡量额外 LLM 推理对控制质量的提升幅度；PHY 成本模型可能漂移且存在停止延迟的余量问题。结论部分展望了多个智能体共享同一算力池以及 RIC-主机消息的标准化承载。

## Key technical points (EN)
- Two coupling paths: direct GPU contention and action-induced PHY-workload feedback.
- Control-compute contract: R1 inference admission within PHY budget, R2 verified safe control, R3 action-induced workload projection; operator requirements may not be relaxed.
- OTA testbed (DGX Spark GB10, OAI gNB, Near-RT RIC, Qwen2.5-7B): LDPC decode ~175 us -> ~1.4 ms; samples under 500 us 99.9% -> 6.9%.
- Simulated OTA-calibrated case study: PHY-budget violations <0.9% vs 20.7% ungoverned; control up to ~4x faster than worst-case reservation.
- MCS-switch ordering: 32 vs 2,201 and 2 vs 597 overrun slots within 2 s.
- Evaluation uses one agent on one GPU; benefit of extra reasoning on control quality not measured.

## Key technical points (ZH)
- 两条耦合路径：GPU 直接争用与动作诱发的 PHY 负载反馈。
- 控制-算力契约：R1 在 PHY 预算内准入推理，R2 已验证的安全控制，R3 动作诱发负载预测；不得放宽运营商要求。
- 空口测试床（DGX Spark GB10、OAI gNB、Near-RT RIC、Qwen2.5-7B）：LDPC 译码约 175 us 升至约 1.4 ms；低于 500 us 的样本 99.9% 降至 6.9%。
- 经空口标定的仿真案例：PHY 预算违规率低于 0.9%（无治理为 20.7%）；控制速度最多比最坏情况预留快约 4 倍。
- MCS 切换顺序：2 秒内超限时隙 32 对 2,201 以及 2 对 597。
- 评估使用单智能体、单 GPU；额外推理对控制质量的收益未测量。

## Why it matters / what's new (EN)
The paper puts measured numbers on how a co-located LLM can break PHY timing in an OAI-based AI-RAN testbed and proposes a rule set that coordinates RIC control actions with compute admission; the governance results rely on a simulated, OTA-calibrated case study.

## Why it matters / what's new (ZH)
论文在基于 OAI 的 AI-RAN 测试床上给出了同机部署的 LLM 如何破坏 PHY 时序的实测数据，并提出一套协调 RIC 控制动作与算力准入的规则；其治理效果依赖于一项经空口标定的仿真案例。

## Images
![Architecture, coupling paths and OTA testbed | 架构、耦合路径与空口测试床](https://arxiv.org/html/2610.04578v1/Fig_1.png)
![Control-compute contract and five-stage workflow | 控制-算力契约与五阶段流程](https://arxiv.org/html/2610.04578v1/Fig_3.png)
