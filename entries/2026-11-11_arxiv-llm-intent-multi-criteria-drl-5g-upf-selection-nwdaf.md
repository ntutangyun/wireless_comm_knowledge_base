---
id: 2026-11-11_arxiv-llm-intent-multi-criteria-drl-5g-upf-selection-nwdaf
date_published: 2026-11-08
date_found: 2026-11-11
type: academic-paper
technology: cellular
title_en: "LLM-based Multi-Criteria Deep Reinforcement Learning for Dynamic Efficient 5G UPF Selection"
title_zh: "基于大语言模型的多准则深度强化学习用于动态高效的 5G UPF 选择"
url: "https://arxiv.org/abs/2611.11372"
source_quality: full
topics: [5G-core, UPF-selection, NWDAF, intent-based-networking, deep-reinforcement-learning, PPO, LLM, edge-UPF, energy-efficiency]
topic_primary: cellular-ai
topics_secondary: [mec]
novelty_score: 2
---

## Summary (EN)

Soliman, Hussein and Lei (University of Guelph; accepted at IEEE Globecom 2026) address selecting a user plane function (UPF) for each PDU session from a pool of edge and cloud UPFs. A Llama 3.1 8B model translates operator intents or NWDAF abnormality alerts into three weights for power, latency and traffic; a PPO policy conditioned on those weights and on live per-UPF metrics then picks the UPF.

The method is evaluated on a modified 5G core emulator with a UE-RAN simulator, using Prometheus metrics, against random, power-greedy, latency-greedy, traffic-greedy and fixed-weight DRL strategies. The dynamic DRL scheme improves mean reward by 16.89% over fixed DRL.

## Summary (ZH)

Soliman、Hussein 与 Lei（圭尔夫大学；已被 IEEE Globecom 2026 接收）研究如何为每个 PDU 会话从一组边缘与云端用户面功能（UPF）中选择 UPF。Llama 3.1 8B 模型把运营商意图或 NWDAF 异常告警转换为功耗、时延与流量三个权重；随后以这些权重和各 UPF 的实时指标为条件的 PPO 策略选出 UPF。

该方法在修改后的 5G 核心网仿真器加 UE-RAN 模拟器上评估，使用 Prometheus 指标，对比随机、功耗贪心、时延贪心、流量贪心以及固定权重 DRL 策略。动态 DRL 方案的平均奖励比固定权重 DRL 提高 16.89%。

## Key technical points (EN)

- LLM interface: a few-shot prompt asks for three weights [power, latency, traffic] summing to 1; the output is validated for three finite non-negative values, normalised, and regenerated if malformed. Example mappings include a high-power alert to [0.7, 0.15, 0.15].
- Test protocol: each strategy runs in an isolated five-minute deterministic-traffic run with 10 to 60 UEs, with capacity limits of 20 sessions for edge UPFs and 30 for cloud UPFs.
- Observed behaviour: the single-metric baselines score low on reward because of many session-requirement violations; on a high-traffic NWDAF alert the dynamic scheme moves to low-traffic cloud UPFs; when the intent is switched from balanced to traffic-focused (weights 0.15, 0.15, 0.70), only the dynamic scheme reduces traffic load.
- Stated limits: training uses synthetic normalised metrics that do not capture mobility, failures or large scale; stronger baselines, robustness to malformed or adversarial LLM outputs and deployment-scale LLM latency are left for future work.

## Key technical points (ZH)

- LLM 接口：少样本提示要求输出 [功耗, 时延, 流量] 三个和为 1 的权重；输出需通过三个有限非负值的校验并归一化，格式错误则重新生成。示例映射之一是高功耗告警对应 [0.7, 0.15, 0.15]。
- 测试方案：每种策略在隔离的五分钟确定性流量运行中测试，UE 数为 10 至 60，边缘 UPF 容量上限 20 个会话，云端 UPF 为 30 个。
- 观察到的行为：单指标基线因大量违反会话需求而奖励较低；收到 NWDAF 高流量告警时，动态方案转向低流量的云端 UPF；意图由均衡切换为侧重流量（权重 0.15、0.15、0.70）时，只有动态方案能降低流量负载。
- 论文声明的局限：训练使用的合成归一化指标无法体现移动性、故障与大规模情形；更强的基线、对格式错误或对抗性 LLM 输出的鲁棒性以及部署规模下的 LLM 时延留待后续研究。

## Why it matters / what's new (EN)

The authors' stated novelty is integrating three pieces in one loop: intent interpretation, NWDAF analytics as a trigger, and a multi-objective policy for the SMF's UPF-selection decision, and tests it on an emulated core rather than a pure simulation. The 16.89% gain is relative to the authors' own fixed-weight DRL under their emulated setup and synthetic training ranges, so it is best read as a demonstration of intent-conditioned selection rather than a deployment result.

## Why it matters / what's new (ZH)

作者所述的新意在于把三个部分整合到同一闭环中：意图解析、作为触发源的 NWDAF 分析，以及 SMF 的 UPF 选择决策所用的多目标策略，并在仿真核心网而非纯数值仿真上进行了测试。16.89% 的提升是相对于作者自己的固定权重 DRL，且基于其仿真环境与合成训练范围，因此宜视为意图条件化选择的演示，而非部署结果。

## Images

![System model: UPF selection by DRL, enhanced by an LLM interface | 系统模型：由 DRL 完成 UPF 选择并由 LLM 接口增强](https://arxiv.org/html/2611.11372v1/system_model.png)

![Mean reward comparison across UPF selection strategies | 各 UPF 选择策略的平均奖励对比](https://arxiv.org/html/2611.11372v1/figures/mean_reward_comparison.png)
