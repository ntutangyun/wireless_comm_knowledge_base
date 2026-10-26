---
id: 2026-10-26_arxiv-risk-aware-mobility-5g-aerial-vehicles-handover-interruption-cost
date_published: 2026-10-12
date_found: 2026-10-26
type: academic-paper
technology: cellular
title_en: "What Is the Cost of a Handover Interruption? Rethinking 5G Mobility for Aerial Vehicles"
title_zh: "切换中断的代价是什么？重新思考面向飞行器的 5G 移动性"
url: "https://arxiv.org/abs/2610.17380"
source_quality: full
topics: [5G-mobility, handover, A3-event, UAV, aerial-UE, low-altitude-aviation, OpenAirInterface, operational-risk, information-staleness]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Andre Melo, Yueqi Chen, Igor Kadota and Lourenco Alves Pereira Jr. (Aeronautics Institute of Technology, Brazil; Northwestern University, USA) ask whether 5G mobility decisions for low-altitude aircraft should account for the operational consequences of an interruption rather than only radio performance. They argue that the same interruption may be harmless in cruise over an empty field but critical near obstacles, crowds or other aircraft, while 5G mobility does not turn the location, population-density and radio information it can already obtain into a risk metric.

Using 547 traces from earlier 5G SA measurements by Liu et al. (four operators, several altitudes), the authors report that at 300 m aerial UEs see 14.6 handovers/km against about 9.2/km on the ground, and that 16.9% of aerial transitions are followed by a post-handover data-plane outage with a median duration of about 2.2 s. In an OpenAirInterface testbed, a regular inter-frequency handover costs a 377 ms data-plane gap, and one controlled run that deferred handover excessively lost 43% of probe packets versus 1.9% when deferral was limited by the serving-link limit.

They propose Risk-Aware Mobility (RAM), which maps communication-induced information staleness into position uncertainty and a composite operational-risk proxy (navigation separation margin, ground exposure, video coherence), keeps the A3-selected target cell and only chooses when to execute the handover. In a simulated Sao Paulo deployment with 188 licensed 5G sectors, RAM lowers the mean risk proxy from 0.289 (A3, 3 dB) to 0.160, a 45% reduction, with serving SNR within 0.4 dB.

## Summary (ZH)
Andre Melo、Yueqi Chen、Igor Kadota 与 Lourenco Alves Pereira Jr.（巴西航空技术学院；美国西北大学）探讨低空飞行器的 5G 移动性决策是否应考虑中断的运行后果，而不只是无线性能。作者认为同样的中断在空旷田野上空巡航时可能无害，但在障碍物、人群或其他飞行器附近可能很关键，而 5G 移动性并未把其已能获取的位置、人口密度和无线信息转化为风险度量。

作者使用 Liu 等人此前 5G SA 测量的 547 条轨迹（四家运营商、多个高度），报告在 300 m 高度空中 UE 每公里发生 14.6 次切换，而地面约为 9.2 次，且 16.9% 的空中切换之后出现数据面中断，中位持续时间约 2.2 s。在 OpenAirInterface 测试平台中，一次常规的异频切换造成 377 ms 的数据面间隙；在一次受控运行中，过度推迟切换丢失了 43% 的探测包，而按服务链路限制约束推迟时仅丢失 1.9%。

作者提出风险感知移动性（RAM）：把通信导致的信息陈旧映射为位置不确定性和复合运行风险代理（导航间隔余量、地面暴露、视频一致性），保留 A3 选定的目标小区，仅决定何时执行切换。在包含 188 个已授权 5G 扇区的圣保罗仿真部署中，RAM 将平均风险代理从 0.289（A3，3 dB）降到 0.160，降幅 45%，服务 SNR 相差在 0.4 dB 以内。

## Key technical points (EN)
- Trace analysis (547 traces from Liu et al.): a post-handover outage is defined as at least one second without L1 throughput within a two-second window after a handover recorded as successful; the authors note this is trace-derived and not a 3GPP handover-failure class. The outage fraction varies from 0.14 (rural) to 0.22 (near the urban-rural transition) but the median duration stays 1.9-2.2 s at 80-300 m.
- OAI experiment: one CU, two DUs on different carriers, one UE in the RF simulator; the serving link withstands about 23 dB of added attenuation before degrading sharply, with radio-link failure between 30 and 35 dB. The authors state these are results for the tested configuration, not universal 5G thresholds.
- Risk proxy: R = wN*RN + wG*RG + wV*RV with position uncertainty r(t) = r_min + v_max * age; the authors state R = 1 is a declared reference boundary, not a certified safety threshold or an accident probability.
- RAM picks the execution time minimising expected risk over a 30 s horizon on a 1 s grid; it does not change the handover procedure or the target cell. RAM-T uses the planned trajectory, RAM-R uses only network-observed position and heading.
- Simulation: Alphaville corridor, 188 licensed sectors in the reconstructed deployment (72 within 1.5 km of the routes used, 59 after pruning), two routes (river and mall-to-residential), six UAVs at 60 m and 14 m/s, three seeds, A3 hysteresis 3, 6, 9 and 12 dB as comparison.
- Findings: fewer handovers are not necessarily safer (risk 0.289 at 3 dB, 0.171 at 9 dB, 0.221 at 12 dB); RAM-T reaches 0.160 at 2.9 HO/km and RAM-R 0.198 at 3.2 HO/km; on the crowd-exposed route RAM-T executes 30 handovers over exposed ground per run versus 94 for A3 at 3 dB.
- Limits stated by the authors: simulated radio conditions and trace-derived outages in one urban deployment; no measured improvement in flight safety or commercial-RAN performance is claimed.

## Key technical points (ZH)
- 轨迹分析（来自 Liu 等人的 547 条轨迹）：切换后中断定义为在记录为成功的切换之后、两秒窗口内至少有一秒无 L1 吞吐量；作者指出这是由轨迹推导的标准，并非 3GPP 的切换失败分类。中断占比从 0.14（乡村）到 0.22（城乡过渡区附近）不等，但在 80-300 m 高度中位持续时间都在 1.9-2.2 s。
- OAI 实验：一个 CU、两个位于不同载波的 DU、射频模拟器中的一个 UE；服务链路在额外衰减约 23 dB 之前不会急剧恶化，在 30 至 35 dB 之间发生无线链路失败。作者指出这是测试配置下的结果，并非普适的 5G 阈值。
- 风险代理：R = wN*RN + wG*RG + wV*RV，位置不确定性 r(t) = r_min + v_max * 陈旧时长；作者指出 R = 1 是人为声明的参考边界，既不是经认证的安全阈值，也不是事故概率。
- RAM 在 1 s 网格、30 s 预测时域内选择使期望风险最小的执行时刻；它不改变切换流程或目标小区。RAM-T 使用计划航迹，RAM-R 仅使用网络观测到的位置和航向。
- 仿真：Alphaville 走廊，重建部署含 188 个已授权扇区（仿真使用路线 1.5 km 内的 72 个，剪除后 59 个），两条路线（河流与商场至居民区），6 架无人机、60 m、14 m/s，三个随机种子，以 3、6、9、12 dB 的 A3 迟滞作对比。
- 发现：切换更少并不一定更安全（3 dB 时风险 0.289，9 dB 时 0.171，12 dB 时 0.221）；RAM-T 在 2.9 次/km 切换时达到 0.160，RAM-R 在 3.2 次/km 时为 0.198；在人群暴露路线上 RAM-T 每次运行在暴露地面上方执行 30 次切换，而 3 dB 的 A3 为 94 次。
- 作者给出的局限：仅为单个城市部署中的仿真无线条件和由轨迹推导的中断；并不声称飞行安全或商用 RAN 性能有实测改善。

## Why it matters / what's new (EN)
The paper frames the handover question around what the decision optimises (operational risk rather than radio quality alone) and proposes using existing 5G positioning, analytics and exposure data as inputs without new air-interface procedures or UE changes. The evidence combines previously published commercial traces, a small OAI testbed and a model-based simulation of one city; the risk weights and reference levels are declared by the authors and depend on the operation, so the 45% figure is a reduction in a modelled proxy, as the authors themselves emphasise.

## Why it matters / what's new (ZH)
论文围绕“切换决策在优化什么”展开（运行风险而非仅无线质量），并提出把现有 5G 定位、分析和暴露数据作为输入，无需新的空口流程或 UE 修改。证据来自此前发表的商用轨迹、小型 OAI 测试平台以及对一个城市的模型仿真；风险权重和参考水平由作者声明并取决于具体运行场景，因此 45% 是模型化代理指标的降低，作者本人也强调了这一点。

## Images

None.
