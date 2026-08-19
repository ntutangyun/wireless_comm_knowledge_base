---
id: 2026-08-19_arxiv-lcoin-llm-counterfactual-offloading-subthz-leo
date_published: 2026-08-17
date_found: 2026-08-19
type: academic-paper
technology: satellite
title_en: "L-COIN: SJTU's LLM-assisted counterfactual-inference potential game for decentralized computation offloading to sub-THz LEO edge servers — 220 GHz, 24×15 Walker-Delta at 780 km, 50 ground devices, cost 4.42 vs 4.40 ideal (−10.9 % to −27.7 % vs baselines) without global state exchange"
title_zh: "L-COIN：上海交大提出面向亚太赫兹低轨边缘服务器的 LLM 辅助反事实推理势博弈分布式计算卸载——220 GHz、780 km 24×15 Walker-Delta、50 个地面设备，代价 4.42 对理想 4.40（比基线低 10.9%–27.7%）且无需全局状态交换"
url: "https://arxiv.org/abs/2608.16174"
source_quality: full
topics: [LEO-edge-computing, computation-offloading, sub-THz, 220-GHz, potential-game, Nash-equilibrium, counterfactual-inference, LLM, DeepSeek, Walker-Delta, FCFS-queuing, space-based-information-network]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)
Yi, Gao and Han (Shanghai Jiao Tong University; submitted 17 Aug 2026, eess.SY) consider ground devices (IoT nodes) offloading compute-intensive tasks over **sub-THz uplinks** to LEO satellites acting as edge servers in a "space-based information network". They model a two-tier system: a time-varying **Walker-Delta** constellation (780 km altitude, P = 24 planes × T = 15 satellites, inclination 86.4°, phasing factor 1) with per-satellite first-come-first-served task queues and finite onboard CPU (20 Gcycles/s vs 0.5 Gcycles/s locally), and N = 50 ground devices randomly placed in a 118–122°E / 28–34°N box generating tasks of 1.5–8.5 MB at 500 cycles/bit, transmitting at 23 dBm over 20 MHz at a 220 GHz carrier with −114 dBm/MHz noise density; each device decides between local execution and offloading to a visible satellite, and its cost blends delay (upload + queuing + compute) and energy.

The offloading contest is cast as an **exact potential game** whose Nash equilibrium is reached by decentralized best-response, but — unlike prior game-theoretic, ADMM/Lyapunov or MADRL schemes that need repeated inter-device state exchange or large training sets — each device infers the unobserved states of competitors purely from its own local history via a **dual-source counterfactual inference** step ("what utility would I have obtained under alternative actions given what I actually observed?"). A pre-trained LLM (DeepSeek-Chat) is inserted as a training-free semantic-fusion / self-reflection module: after each round the device feeds a textual rendering of its state, chosen action, predicted vs realized utility and the gap ΔU to the LLM, which returns a concise causal insight (e.g. an unexpected queuing bottleneck or underestimated cascading interference); this is appended to the local record and kept in a FIFO sliding window (W_max = 50) so the inference baseline auto-calibrates to topology drift.

Against Compute-Local, Random, a greedy iterative scheme (ICSOC) and an Ideal potential game with perfect global information, L-COIN converges monotonically in ~15 rounds (Ideal ~4, ICSOC ~10 with oscillations) to an average cost of **4.42 versus the Ideal lower bound 4.40**, ICSOC 4.96, and CL/Random 5.79–6.11 — a 10.9–27.7 % reduction — with narrow variance; the individual-cost CDF shows only ~10 % of devices above cost 6 versus 28–40 % for the baselines. Over a 2,800 s time sweep of the moving constellation and over N = 40–80 devices, L-COIN stays at 4.22–5.06 while ICSOC rises from 4.63 to 5.52 and Random peaks at 7.95, tracking Ideal (4.94 at N = 80). The authors position the LLM as a cognitive reasoning engine that removes the data dependency of learned offloading policies.

## Summary (ZH)
Yi、Gao 与 Han（上海交通大学；2026 年 8 月 17 日提交，eess.SY）研究地面设备（物联网节点）经 **亚太赫兹上行** 把计算密集型任务卸载到作为边缘服务器的低轨卫星，即"天基信息网络"场景。两层系统模型：时变 **Walker-Delta** 星座（780 km 高度，P = 24 个轨道面 × T = 15 颗卫星，倾角 86.4°，相位因子 1），每颗卫星带先来先服务任务队列与有限星载算力（20 Gcycles/s，本地为 0.5 Gcycles/s）；N = 50 个地面设备随机分布在 118–122°E / 28–34°N 区域内，生成 1.5–8.5 MB、500 cycles/bit 的任务，以 23 dBm 在 220 GHz 载波、20 MHz 带宽、−114 dBm/MHz 噪声密度下发送；每个设备在本地执行与卸载至可见卫星间抉择，代价综合时延（上传 + 排队 + 计算）与能耗。

卸载竞争被建模为 **精确势博弈**，由分布式最优响应到达纳什均衡；但不同于既有博弈论、ADMM/Lyapunov 或 MADRL 方案需要反复的设备间状态交换或大量训练数据，每个设备仅凭本地历史通过 **双源反事实推理**（"在我实际观察到的情形下，若采取其他动作会得到什么效用？"）推断竞争者的未观测状态。一个预训练 LLM（DeepSeek-Chat）作为免训练的语义融合 / 自反思模块被插入：每轮结束后设备把状态、所选动作、预测与实际效用及差距 ΔU 的文本描述交给 LLM，后者返回简明因果洞见（如意外排队瓶颈或被低估的级联干扰）；该洞见附加到本地记录并保存在 FIFO 滑动窗口（W_max = 50）中，使推理基线随拓扑漂移自动校准。

对比本地计算、随机、贪心迭代方案（ICSOC）与拥有完美全局信息的理想势博弈，L-COIN 在约 15 轮内单调收敛（理想约 4 轮，ICSOC 约 10 轮且有振荡），平均代价 **4.42 对理想下界 4.40**，ICSOC 4.96，CL/随机 5.79–6.11——降低 10.9%–27.7%，方差很小；个体代价 CDF 显示仅约 10% 设备代价超过 6，基线为 28%–40%。在 2,800 s 星座运动时间扫描与 N = 40–80 设备规模下，L-COIN 保持 4.22–5.06，ICSOC 从 4.63 升至 5.52，随机峰值 7.95，L-COIN 紧贴理想（N = 80 时 4.94）。作者将 LLM 定位为消除已学卸载策略数据依赖的认知推理引擎。

## Key technical points (EN)
- **Constellation / channel:** Walker-Delta 780 km, 24 planes × 15 sats, incl. 86.4°, F = 1; carrier 220 GHz, 20 MHz, Pₙ = 23 dBm, N₀ = −114 dBm/MHz; time-varying 3D topology with visibility windows.
- **Compute model:** FCFS satellite queues; f_s = 20 Gcycles/s onboard vs f_loc = 0.5 Gcycles/s local; tasks 1.5–8.5 MB, 500 cycles/bit; N = 50 devices in 118–122°E / 28–34°N.
- **Game:** exact potential game, decentralized best response → Nash equilibrium; softmax temperature 0.5.
- **Counterfactual inference:** dual-source estimate of others' unobserved states from local history; no inter-device state exchange.
- **LLM module:** pre-trained DeepSeek-Chat, zero-shot, training-free; inputs = textual state, action, predicted vs realized utility, ΔU; output = causal reflection insight appended to record; FIFO sliding window W_max = 50.
- **Results:** cost 4.42 (L-COIN) vs 4.40 (Ideal), 4.96 (ICSOC), 5.79–6.11 (CL/Random) → −10.9 % to −27.7 %; ~15 rounds to converge; ≤10 % of devices above cost 6 vs 28–40 %; N = 40–80 → 4.22–5.06 vs ICSOC 4.63–5.52, Random up to 7.95.

## Key technical points (ZH)
- **星座 / 信道：** Walker-Delta 780 km，24 面 × 15 星，倾角 86.4°，F = 1；载波 220 GHz、20 MHz，Pₙ = 23 dBm，N₀ = −114 dBm/MHz；时变三维拓扑与可见窗口。
- **计算模型：** 卫星 FCFS 队列；星载 f_s = 20 Gcycles/s 对本地 f_loc = 0.5 Gcycles/s；任务 1.5–8.5 MB、500 cycles/bit；N = 50 设备位于 118–122°E / 28–34°N。
- **博弈：** 精确势博弈，分布式最优响应 → 纳什均衡；softmax 温度 0.5。
- **反事实推理：** 由本地历史双源估计他方未观测状态；无设备间状态交换。
- **LLM 模块：** 预训练 DeepSeek-Chat，零样本、免训练；输入 = 文本化状态、动作、预测与实际效用、ΔU；输出 = 因果反思洞见并附加到记录；FIFO 滑动窗口 W_max = 50。
- **结果：** 代价 4.42（L-COIN）对 4.40（理想）、4.96（ICSOC）、5.79–6.11（CL/随机）→ 降低 10.9%–27.7%；约 15 轮收敛；≤10% 设备代价超 6 对 28%–40%；N = 40–80 → 4.22–5.06 对 ICSOC 4.63–5.52、随机最高 7.95。

## Why it matters / what's new (EN)
The KB's orbital-computing thread has covered the infrastructure case (space data centres 2026-06-13, orbital-AI carbon 2026-08-18), in-orbit edge for Earth observation (2026-08-03 STRIDE), and the sub-THz LEO link layer (2026-05-21 mmWave/sub-THz relay, 2026-06-17 TeraLink), while the AI-for-satellite bin has multiple learning-based schedulers and handover agents (2026-06-30 diffusion traffic predictor, 2026-08-17 MARL multi-orbit handover). L-COIN sits at the junction: it is the first entry that treats **LEO satellites as sub-THz-fed edge servers contested by ground devices** and the first to use an **LLM as an in-loop reasoning component of a distributed game** rather than as a configuration assistant (cf. the cellular 2026-06-23 LLM gNB-parameter entry). The genuinely new idea is methodological — counterfactual inference from local history replacing state exchange, with an LLM's zero-shot self-reflection as the calibrator that lets a training-free policy track a moving Walker constellation — and the near-Ideal cost (4.42 vs 4.40) plus the N = 40–80 generalization curve are the evidence. Read the result with the usual caveats: it is a numerical study with abstract cost units, a single-hop 220 GHz link with fixed 20 MHz bandwidth and no atmospheric/beam-alignment model, FCFS queues and one LLM (DeepSeek-Chat) queried per device per round — the latency and energy of that LLM call, and whether it runs on the device or via the same satellite link, are not accounted for in the offloading cost, which is the obvious gap for a follow-up.

## Why it matters / what's new (ZH)
知识库的在轨计算脉络已覆盖基础设施（太空数据中心 2026-06-13、在轨 AI 碳排 2026-08-18）、面向对地观测的在轨边缘（2026-08-03 STRIDE）与亚太赫兹低轨链路层（2026-05-21 毫米波/亚太赫兹中继、2026-06-17 TeraLink），AI-for-satellite 板块则有多个基于学习的调度与切换代理（2026-06-30 扩散流量预测、2026-08-17 MARL 多轨道切换）。L-COIN 处在交汇点：这是首个把 **低轨卫星视为由地面设备竞争的亚太赫兹馈入边缘服务器** 的条目，也是首个把 **LLM 用作分布式博弈的在环推理组件** 而非配置助手（参见蜂窝 2026-06-23 LLM gNB 参数条目）的条目。真正的新意在方法——以本地历史的反事实推理替代状态交换，用 LLM 零样本自反思作为校准器，使免训练策略能跟踪运动中的 Walker 星座——接近理想的代价（4.42 对 4.40）与 N = 40–80 的泛化曲线是其证据。需照例保留：这是使用抽象代价单位的数值研究，单跳 220 GHz 链路、固定 20 MHz 带宽、无大气/波束对准模型，FCFS 队列，且每设备每轮调用一次 LLM（DeepSeek-Chat）——该调用的时延与能耗、以及它运行在设备上还是经由同一卫星链路，均未计入卸载代价，这是后续工作最明显的缺口。
