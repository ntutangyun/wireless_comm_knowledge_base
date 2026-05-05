---
id: 2026-05-01_arxiv-on-device-llm-roaming
date_found: 2026-05-01
date_published: 2025-05-07
type: academic-paper
title_en: "On-Device LLM for Context-Aware Wi-Fi Roaming"
title_zh: "面向情境感知 Wi-Fi 漫游的端侧大语言模型"
url: "https://arxiv.org/html/2505.04174v1"
source_quality: full
topics: [roaming, agentic-AI, MAC-layer, MLO]
topic_primary: roaming-mobility
topics_secondary: [agentic-wifi]
novelty_score: 4
---

## Summary (EN)

Lee and Lu (May 2025) put a quantized on-device LLM directly on the STA — running on a MacBook Pro — and have it make Wi-Fi roaming decisions. The pitch: traditional threshold-based roaming oscillates between "sticky" (won't leave a weakening AP) and "ping-pong" (excessive handovers). The LLM consumes RSSI, scanned-AP list, time-of-day, user location, and battery state, then either (a) picks the best target BSSID directly or (b) dynamically adjusts the roaming threshold parameters.

Performance numbers: vs a legacy heuristic baseline, the LLM reduces handovers from 100 to 93 while improving average RSSI from a worse baseline to −58.58 dBm; vs a PPO-RL baseline tuned on the same scenarios, RSSI is ~1 dB better at comparable handover rates. Model footprint after Q2_K quantization: 3.2 GB (down from 8.5 GB). Parameter-efficient fine-tuning achieves 85% accuracy on held-out test data.

The paper's headline framing — "first on-device LLM that reasons in the application layer while issuing real-time actions in the PHY/MAC stack" — places it at the boundary where application-level intelligence and MAC-level control meet. The LLM *outputs* MAC actions (BSSID switch, threshold adjust); the inputs are STA-side observable state.

## Summary (ZH)

Lee 和 Lu（2025 年 5 月）把一个量化后的大语言模型直接部署在 STA 上 —— 实验运行于 MacBook Pro —— 由它来做 Wi-Fi 漫游决策。立意是：传统基于阈值的漫游总在"粘连"（不愿离开正在变弱的 AP）和"乒乓"（频繁切换）之间摇摆。本文中的 LLM 消费 RSSI、扫描到的 AP 列表、时段、用户位置、电量等状态，然后或者（a）直接挑选最佳目标 BSSID，或者（b）动态调整漫游阈值参数。

性能数据：相对传统启发式基线，LLM 将切换次数从 100 降到 93，同时把平均 RSSI 从更差的基线提升到 −58.58 dBm；相对在相同场景上调过的 PPO-RL 基线，在相近切换次数下 RSSI 高约 1 dB。Q2_K 量化后模型尺寸为 3.2 GB（原 8.5 GB）。参数高效微调（PEFT）在留出测试集上达到 85% 准确率。

论文的标志性提法 —— "首个在应用层进行推理、同时在 PHY/MAC 栈中发出实时动作的端侧 LLM" —— 把它放在了应用层智能与 MAC 层控制的交叉点上。LLM **输出**的是 MAC 动作（BSSID 切换、阈值调整），**输入**则是 STA 侧可观测状态。

## Key technical points (EN)

- LLM runs on STA (consumer hardware demonstrated: MacBook Pro)
- Inputs: RSSI, scan list, location, time-of-day, battery
- Outputs: target BSSID OR roaming-threshold adjustments
- Q2_K quantization: 8.5 GB → 3.2 GB
- 85% test accuracy with parameter-efficient fine-tuning (PEFT)
- Beats legacy threshold heuristic AND a PPO-DRL baseline
- Latency tradeoff not deeply discussed — chain-of-thought prompting at edge inference speeds is on the order of 100s of ms to seconds

## Key technical points (ZH)

- LLM 部署在 STA 端（消费级硬件：MacBook Pro）
- 输入：RSSI、扫描列表、位置、时段、电量
- 输出：目标 BSSID **或** 漫游阈值参数
- Q2_K 量化：8.5 GB → 3.2 GB
- 参数高效微调（PEFT）在测试集准确率 85%
- 同时优于传统阈值启发式以及 PPO-DRL 基线
- 时延权衡讨论不深入 —— 边缘端 CoT 推理大致在 100s 毫秒到秒级

## Why it matters / what's new (EN)

Confirms the on-device-LLM-for-WiFi-decision pattern is moving from theory to working prototype:

- Direction symmetry with AP-side LLM-MAPC work: a Wi-Fi network where both APs and STAs run LLM agents, with MAC-layer signaling as the standardized contract between them, is now a plausible near-term architecture rather than speculation.
- Roaming as an explicit research surface for context-aware decision-making — distinct from the more-studied scheduling/coordination side of agentic Wi-Fi work.
- The paper is silent on what richer MAC primitives (e.g., MLME-level battery/location/intent hints) would let an on-device LLM perform better. That's a natural follow-up area.

The PEFT and quantization details are pure ML engineering and reproducible from the methods section.

## Why it matters / what's new (ZH)

确认了"端侧 LLM 决策 Wi-Fi 行为"的范式正在从理论走向可工作原型：

- 与 AP 侧 LLM-MAPC 工作形成方向对称：一种 AP 与 STA 两端都运行 LLM 智能体、以 MAC 层信令为标准化契约的 Wi-Fi 网络架构，已经不再是推演，而是近期可期的形态。
- 漫游成为情境感知决策的一个明确研究面 —— 区别于此前研究更多的"调度 / 协调"角度的智能体 Wi-Fi 工作。
- 论文没有讨论"如果向端侧 LLM 提供更丰富的 MAC 原语（如 MLME 级别的电量 / 位置 / 意图提示）会怎样"。这是天然的后续方向。

PEFT 和量化细节属于纯 ML 工程，从论文方法章节可复现。

## Images

![Rule-based vs LLM-driven Wi-Fi handover overview | 基于规则的切换 vs 基于 LLM 的切换示意](https://arxiv.org/html/2505.04174v1/extracted/6417933/figure/fig_overview.jpg)
![Task 1: handover count vs RSSI for legacy / DRL / LLM | 任务一：传统启发式 / DRL / LLM 的切换次数与 RSSI 对比](https://arxiv.org/html/2505.04174v1/extracted/6417933/figure/comparison_task1.png)
![Task 2: dynamic threshold-selection performance | 任务二：动态阈值选择性能](https://arxiv.org/html/2505.04174v1/extracted/6417933/figure/comparison_task2.png)
