---
id: 2026-10-20_arxiv-multi-agentic-ai-conflict-aware-rapp-policy-orchestration-oran
date_published: 2026-10-17
date_found: 2026-10-20
type: academic-paper
technology: cellular
title_en: "Multi-Agentic AI for Intent-Driven and Conflict-Aware rApp Policy Orchestration in Open RAN"
title_zh: "面向 Open RAN 的意图驱动、冲突感知 rApp 策略编排的多智能体 AI"
url: "https://arxiv.org/abs/2610.24688"
source_quality: full
topics: [O-RAN, rApp, xApp, Non-RT-RIC, Near-RT-RIC, SMO, intent-based-networking, conflict-management, LLM-agents, A1-interface, E2-interface, OpenAirInterface, FlexRIC]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Haiyuan Li, Yulei Wu, Luyu Qi and Dimitra Simeonidou (Smart Internet Lab, University of Bristol) address the Non-RT layer of O-RAN, where rApp policies compose xApps from a shared catalog to realise operator intents. They formulate this as a joint problem of admitting incoming intents and assigning xApps to them, subject to KPI contracts, while keeping already admitted (incumbent) intents compliant. The proposed framework uses two LLM agents in a closed loop: a Reasoning Agent screens candidate xApps against the KPI contracts and decides admission and assignment, and, when KPI violations appear after deployment, a Diagnosis Agent identifies the failed intent-KPI pairs, labels the conflict mechanism and feeds the evidence into the next attempt.

On a benchmark with 17 xApps and 19 operator intents in 10 incumbent/incoming-intent cases (five runs per case), the framework with GPT-OSS 120B achieves 28.6% more KPI-compliant cases and admits over 15 times as many incoming intents as the adapted baselines (OREO, PACIFISTA, Causal-SHAP). A proof of concept on an over-the-air O-RAN testbed with commercial UEs is reported as confirmation of feasibility.

## Summary (ZH)
Haiyuan Li、Yulei Wu、Luyu Qi 与 Dimitra Simeonidou（布里斯托大学 Smart Internet Lab）关注 O-RAN 的 Non-RT 层：rApp 策略从共享目录中组合 xApp 以实现运营商意图。他们将其表述为联合问题——在 KPI 合约约束下准入新到达的意图并为其分配 xApp，同时保证已准入（在网）意图仍满足合约。所提框架在闭环中使用两个 LLM 智能体：推理智能体依据 KPI 合约筛选候选 xApp 并给出准入与分配决策；部署后若出现 KPI 违约，诊断智能体识别失败的意图-KPI 对、标注冲突机制，并把证据反馈给下一次尝试。

在包含 17 个 xApp、19 个运营商意图、10 个在网/新到意图组合（每例运行五次）的基准上，采用 GPT-OSS 120B 的框架比改编自文献的基线（OREO、PACIFISTA、Causal-SHAP）多 28.6% 的 KPI 合规案例，并准入超过 15 倍的新意图。论文还在带商用 UE 的空口 O-RAN 测试床上做了概念验证，以说明可行性。

## Key technical points (EN)
- Conflict taxonomy with five mechanisms in two layers: M1 direct, M2 indirect and M3 implicit conflicts inherit the Near-RT xApp conflict classes the paper attributes to O-RAN Alliance WG3; M4 (policy conflict, a shared xApp instance serving several rApp policies) and M5 (objective incompatibility between admitted intents) are the cross-layer additions.
- The pre-deployment screen checks M1 and M2 structurally and screens M5 only when KPI contracts are directly incompatible; it treats M3 and M4 as risks, which the Diagnosis Agent can confirm from post-deployment telemetry.
- Decisions are dispatched over the A1 interface; the supervision module reads O1 performance-management telemetry and E2SM-KPM indications.
- Ablations (GPT-OSS 120B, mean over five runs): Full gives 9.0 KPI-compliant cases, 15.4 admitted incoming intents and 2.16 attempts per case; removing guided chain-of-thought gives 7.2, 6.8 and 5.90; removing Diagnosis gives 8.4, 14.2 and 3.28. The Qwen 72B variant gives 7.8, 12.8 and 3.88 with Diagnosis versus 5.2, 3.2 and 5.76 without.
- Baselines: Causal-SHAP and PACIFISTA (tolerance 0.25) reach 7 and 6 compliant cases but admit no incoming intents; the authors attribute the gap to the baselines' one-shot decision structure, which reaches compliance mainly by rejecting incoming intents.
- The benchmark RAN spans Wi-Fi, 5G NR and LiFi access points with MEC servers; KPI contracts are of the kind "AR latency below 400 ms" or "downlink above 28 Mb/s".
- Live testbed: OpenAirInterface DU, CU and 5G core in Docker containers on a DGX Spark, an Ettus USRP B210 radio unit, an n78 cell at 3.6048 GHz (TDD, 30 kHz subcarrier spacing, 24 PRBs), two Quectel RM520N-GL modules as UEs, and FlexRIC connected over E2AP with the KPM, MAC and SLICE service models. The six PoC intents include a 2 Mb/s downlink limit, a 3 Mb/s guarantee, an MCS cap at 4 and two 12-PRB partitions.

## Key technical points (ZH)
- 冲突分类包含两层共五种机制：M1 直接冲突、M2 间接冲突、M3 隐式冲突沿用论文所述的 O-RAN Alliance WG3 Near-RT xApp 冲突类别；M4（策略冲突，即同一 xApp 实例服务多个 rApp 策略）与 M5（已准入意图之间的目标不相容）为跨层新增。
- 部署前筛选以结构性方式检查 M1 与 M2，仅在 KPI 合约直接不相容时筛查 M5；对 M3 与 M4 仅视为风险，由诊断智能体依据部署后遥测确认。
- 决策经 A1 接口下发；监督模块读取 O1 性能管理遥测与 E2SM-KPM 指示。
- 消融（GPT-OSS 120B，五次运行均值）：完整方案为每例 9.0 个 KPI 合规案例、15.4 个被准入的新意图、2.16 次尝试；去掉引导式思维链为 7.2、6.8、5.90；去掉诊断为 8.4、14.2、3.28。Qwen 72B 变体有诊断时为 7.8、12.8、3.88，无诊断时为 5.2、3.2、5.76。
- 基线：Causal-SHAP 与 PACIFISTA（容差 0.25）分别达到 7 与 6 个合规案例，但不准入任何新意图；作者将差距归因于基线的一次性决策结构，即主要靠拒绝新意图来达到合规。
- 基准 RAN 涵盖 Wi-Fi、5G NR 与 LiFi 接入点及 MEC 服务器；KPI 合约形如“AR 时延低于 400 ms”或“下行高于 28 Mb/s”。
- 实际测试床：OpenAirInterface 的 DU、CU 与 5G 核心网以 Docker 容器运行于 DGX Spark，Ettus USRP B210 作为射频单元，n78 小区位于 3.6048 GHz（TDD，30 kHz 子载波间隔，24 个 PRB），两块 Quectel RM520N-GL 模块作为 UE，FlexRIC 经 E2AP 连接，使用 KPM、MAC 与 SLICE 服务模型。概念验证的六个意图包括 2 Mb/s 下行限速、3 Mb/s 保证、MCS 上限 4 以及两个 12-PRB 分区。

## Why it matters / what's new (EN)
The paper's own frame is that automation at the Non-RT orchestration layer is less mature than xApp development in the Near-RT RIC, and that prior work, split between intent-based management and conflict management, lacks joint reasoning over intent admission and xApp assignment, and leaves pre- and post-deployment conflict handling disconnected, with no closed-loop path from runtime KPI evidence back to orchestration decisions. The headline gains are measured on the authors' own benchmark against baselines they adapted themselves, while the over-the-air test is a single cell with two UEs and a small set of intents, so it demonstrates feasibility rather than scale.

## Why it matters / what's new (ZH)
论文自身的论述框架是：Non-RT 编排层的自动化不如 Near-RT RIC 中的 xApp 开发成熟，现有工作分为意图管理与冲突管理两个方向，缺乏对意图准入与 xApp 分配的联合推理，且部署前与部署后的冲突处理彼此割裂，没有从运行期 KPI 证据回到编排决策的闭环路径。文中的主要增益来自作者自建基准以及自行改编的基线；空口测试只有单小区、两个 UE 和少量意图，因此证明的是可行性而非规模。
