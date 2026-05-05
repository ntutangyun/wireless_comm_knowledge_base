---
id: agentic-wifi
last_updated: 2026-05-05
---

## Current state (EN)

This bin covers **LLM-based agents that perceive, plan, and act on the Wi-Fi network**: orchestration agents (deciding what to configure), troubleshooting agents (deciding what to investigate), code-generating policy agents (writing the rules a controller will run), and multi-agent frameworks where specialised agents collaborate. The defining feature is that the *network is the agent's environment* and the action space is *configuration / control*, not radio params directly — the latter belongs in `ai-for-wifi`.

KB coverage today is a healthy 6 entries split between academic frameworks and industry productisation. Academic: `2026-05-01_arxiv-wirelessbench-llm-agent` (the WirelessBench tolerance-aware benchmark, three-tier cognitive hierarchy with 23 % catastrophic-failure rate at GPT-4o), `2026-05-01_arxiv-wirelessagent-plus-plus` (automated agentic workflow design via Monte Carlo Tree Search), `2026-05-04_arxiv-comagent-multi-llm-wireless` (multi-LLM Perception–Planning–Action–Reflection pipeline), `2026-05-01_arxiv-intellicise-agentic-ai-security` (security/privacy threat model for the agent layer). Industry: `2026-05-01_hpe-aruba-mist-unified-2026` (HPE merging Aruba Central + Mist into a unified AI-native platform after the Juniper acquisition) and `2026-05-04_tp-link-aireal-ces2026` (TP-Link's Aireal cloud GPT assistant). The `2026-05-01_ieee-march-2026-readout` carries `agentic-wifi` as a secondary topic because the AI Offload Study Group is exactly this question at the standards level.

Watch for: the AI Offload SG's transition to a real task group (or not); benchmarks beyond WirelessBench, especially ones that score safety / hallucination, not just task accuracy; production deployments of LLM-managed Wi-Fi (where do the false positives end up?); the security-side cross-reference to `security-privacy` (an LLM that controls the network is a high-value attack target).

## Current state (ZH)

本桶覆盖 **在 Wi-Fi 网络上感知、规划、行动的 LLM 智能体**：编排智能体（决定要配置什么）、排障智能体（决定要调查什么）、生成策略代码的智能体（写出控制器要执行的规则），以及由专项智能体协同的多智能体框架。本桶的定义性特征是*网络是智能体的环境*，动作空间是*配置 / 控制*，而非直接的射频参数——后者属于 `ai-for-wifi`。

当前 KB 覆盖共 6 条，学界框架与产业落地各半。学术：`2026-05-01_arxiv-wirelessbench-llm-agent`（WirelessBench 容忍度感知基准，三层认知层级，GPT-4o 在其上 23% 灾难性失败率）、`2026-05-01_arxiv-wirelessagent-plus-plus`（蒙特卡洛树搜索的自动智能体工作流设计）、`2026-05-04_arxiv-comagent-multi-llm-wireless`（多 LLM 的感知-规划-行动-反思管线）、`2026-05-01_arxiv-intellicise-agentic-ai-security`（智能体层安全 / 隐私威胁模型）。产业：`2026-05-01_hpe-aruba-mist-unified-2026`（HPE 在收购 Juniper 后将 Aruba Central + Mist 合为统一 AI-Native 平台）、`2026-05-04_tp-link-aireal-ces2026`（TP-Link Aireal 云 GPT 助手）。`2026-05-01_ieee-march-2026-readout` 将 `agentic-wifi` 作为次属，因为 AI Offload 研究组在标准层正是这一问题。

待关注：AI Offload SG 是否转为真任务组；超越 WirelessBench 的基准——尤其评估安全 / 幻觉而非仅任务正确率的基准；LLM 管理 Wi-Fi 的生产部署（误报最终落在哪里？）；与 `security-privacy` 的交叉（控制网络的 LLM 是高价值攻击目标）。
