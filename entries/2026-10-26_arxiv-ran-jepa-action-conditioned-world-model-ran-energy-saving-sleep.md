---
id: 2026-10-26_arxiv-ran-jepa-action-conditioned-world-model-ran-energy-saving-sleep
date_published: 2026-10-13
date_found: 2026-10-26
type: academic-paper
technology: cellular
title_en: "RAN-JEPA: An Action-Conditioned World Model for Energy-efficient Mobile Network Control"
title_zh: "RAN-JEPA：面向节能移动网络控制的动作条件世界模型"
url: "https://arxiv.org/abs/2610.17584"
source_quality: full
topics: [RAN-energy-saving, world-model, JEPA, cell-sleep, action-conditioned-learning, TM500, n78, digital-twin, closed-loop-control]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Binghan Wu, Kai Zeng, Kai Yang, Ya-Qin Zhang, Joseph Sifakis and Ye Ouyang (AsiaInfo Technologies, Tongji University, Tsinghua University AIR, Universite Grenoble Alpes) treat RAN energy saving as an action-conditioned world-modelling problem. Their starting point is that operational networks produce abundant passive telemetry but few controlled action-response trajectories, an observation-intervention asymmetry. RAN-JEPA separates representation learning from intervention learning: an encoder is pretrained on observation-only data, adapted to the target domain, frozen, and then an action-conditioned rollout predictor learns from controlled cell sleep/wake trajectories.

Pretraining uses the CETIN performance-management dataset (30,213,561 PM records from 264 base stations over 84 days). Adaptation and control use a real-equipment testbed: a 5G core and NR base station, a TM500 multi-UE emulator, four cells on n78 (3.5 GHz, TDD, 100 MHz, 30 kHz SCS), 0-500 emulated UEs and a programmable attenuation matrix, with 180 days of observation-only and 90 days of controlled trajectories. Sleep is a protocol-level state in which UEs are handed over to neighbouring cells.

Across four future 15-minute intervals RAN-JEPA's relative MAE is about 0.97-1.00 against persistence, versus about 1.15-1.22 for a GPT-2-style world model and 1.22-1.74 for a mechanistic rule. In closed-loop control at about 5.5 percentage points of added congestion time it reaches a sleep ratio of about 17.4%, against 16.8% (GPT-2) and 8.5% (mechanistic).

## Summary (ZH)
Binghan Wu、Kai Zeng、Kai Yang、Ya-Qin Zhang、Joseph Sifakis 与 Ye Ouyang（亚信科技、同济大学、清华大学智能产业研究院、格勒诺布尔阿尔卑斯大学）把 RAN 节能视为动作条件的世界建模问题。其出发点是：运营网络产生大量被动遥测，但受控的“动作-响应”轨迹很少，即观测与干预的不对称。RAN-JEPA 将表征学习与干预学习分开：编码器先在仅含观测的数据上预训练，适配目标域后冻结，再由动作条件的推演预测器从受控的小区休眠/唤醒轨迹中学习。

预训练使用 CETIN 性能管理数据集（264 个基站、84 天共 30,213,561 条 PM 记录）。适配与控制使用真实设备测试平台：5G 核心网与 NR 基站、TM500 多 UE 模拟器、n78（3.5 GHz、TDD、100 MHz、30 kHz 子载波间隔）上的四个小区、0-500 个模拟 UE 和可编程衰减矩阵，含 180 天仅观测数据与 90 天受控轨迹。休眠是协议层状态，UE 会被切换至邻区。

在未来四个 15 分钟区间内，RAN-JEPA 相对持续性基准的相对 MAE 约为 0.97-1.00，GPT-2 风格世界模型约为 1.15-1.22，机理规则约为 1.22-1.74。在闭环控制中，当额外拥塞时间约为 5.5 个百分点时，其休眠比例约为 17.4%，对比 GPT-2 的 16.8% 和机理规则的 8.5%。

## Key technical points (EN)
- Three-stage training: observation-only pretraining (CETIN, 22-field input interface, 19 fields shared with the testbed), domain adaptation on the testbed's observation-only data, then action-conditioned post-training with the encoder frozen.
- Model: predicts five per-cell KPIs (UE count, DL and UL PRB utilisation, DL and UL data volume) plus direction; numeric output is a mechanistic reference plus a learned residual. RAN-JEPA has 258,504 parameters (203,944 trainable in post-training); the GPT-2-style baseline has 213,336.
- Inputs: twelve five-minute windows from four cells and a candidate sleep plan over four 15-minute segments (a 60-minute rollout); energy is not a learned output but enters through the controller's accounting rule.
- Data split by complete experimental scenario (70/15/15); open-loop results over 15 runs, closed-loop over nine matched runs per setting.
- What-if analysis on a calibrated digital twin (median-error episode among 734): after SLEEP the action cell's UE count drops by 100% and a neighbour's DL PRB utilisation rises; the KEEP plan gives a clearly different trajectory.
- Closed-loop sleep ratio: about 17.4% / 16.8% / 8.5% (RAN-JEPA / GPT-2 / mechanistic) at about 5.5 pp added congestion, and about 21.1% / 19.3% / 14.9% at about 7.0 pp.
- Authors' caveats: the margin over persistence is small and the plotted variation does not support a significance claim; results are for a four-cell laboratory testbed with sleep ratio as a proxy and are not network-wide energy savings.

## Key technical points (ZH)
- 三阶段训练：仅观测预训练（CETIN，22 字段输入接口，其中 19 个字段与测试平台共有）、在测试平台仅观测数据上的域适配，然后在冻结编码器的情况下进行动作条件后训练。
- 模型：预测每小区五项 KPI（UE 数、下行与上行 PRB 利用率、下行与上行数据量）及其变化方向；数值输出为机理参考加学习到的残差。RAN-JEPA 共 258,504 个参数（后训练中 203,944 个可训练），GPT-2 风格基线为 213,336 个。
- 输入：来自四个小区的十二个五分钟窗口和四个 15 分钟段的候选休眠计划（60 分钟推演）；能耗不是学习输出，而是通过控制器的核算规则引入。
- 数据按完整实验场景划分（70/15/15）；开环结果为 15 次运行，闭环结果为每种设置 9 次匹配运行。
- 在校准数字孪生上的假设分析（734 个可用片段中误差中位数的片段）：执行 SLEEP 后，动作小区的 UE 数降低 100%，邻区下行 PRB 利用率上升；KEEP 计划给出明显不同的轨迹。
- 闭环休眠比例：额外拥塞约 5.5 个百分点时约 17.4% / 16.8% / 8.5%（RAN-JEPA / GPT-2 / 机理规则），约 7.0 个百分点时约 21.1% / 19.3% / 14.9%。
- 作者的说明：相对持续性基准的优势很小，图中的波动不足以支持显著性结论；结果来自四小区实验室测试平台，以休眠比例作为代理指标，并非全网节能量。

## Why it matters / what's new (EN)
The paper's central claim is a training pattern for telecom control: learn the network representation from plentiful passive telemetry and reserve scarce intervention data for learning action effects. Evidence comes from a public operator dataset plus a four-cell emulated-UE laboratory testbed; the authors state that the improvement over persistence is small and not shown to be statistically significant, and that sleep ratio is an operational proxy rather than a measured energy figure.

## Why it matters / what's new (ZH)
论文的核心主张是一种电信控制的训练模式：从丰富的被动遥测中学习网络表征，把稀缺的干预数据留给学习动作的影响。证据来自公开的运营商数据集和一个使用模拟 UE 的四小区实验室测试平台；作者指出相对持续性基准的改进很小，也未证明具有统计显著性，且休眠比例只是运行代理指标而非实测能耗。

## Images

None.
