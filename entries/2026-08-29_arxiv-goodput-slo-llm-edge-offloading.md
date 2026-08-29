---
id: 2026-08-29_arxiv-goodput-slo-llm-edge-offloading
date_published: 2026-08-26
date_found: 2026-08-29
type: academic-paper
technology: edge-ai
title_en: "Goodput, not throughput: SLO-aware LLM offloading and bandwidth allocation for wireless edge inference"
title_zh: "以 goodput 而非吞吐量为目标：面向无线边缘推理的 SLO 感知大模型卸载与带宽分配"
url: "https://arxiv.org/abs/2608.25543"
source_quality: full
topics: [offloading, goodput, SLO, TTFT, TPOT, maskable-PPO, bandwidth-allocation, edge-serving, IEEE-WCL]
topic_primary: compute-offloading
topics_secondary: [edge-ai-networking, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

Most offloading formulations in the wireless-edge literature maximise completed tasks or minimise mean latency. For LLM serving that is the wrong objective, because a request that misses its deadline has consumed radio and GPU resources and delivered nothing. This IEEE Wireless Communications Letters paper (Shanghai University / CSIRO) optimises **goodput** instead — the count of requests completed *within* their end-to-end service-level objective.

The setting is deliberately plain: **J GPU-equipped edge nodes and N users** with no local GPU, coordinated by a central access point, with OFDM giving each node its own frequency band so nodes do not interfere. Every user request must be assigned to a node and given uplink bandwidth to ship the prompt and downlink bandwidth to return tokens. Three latency quantities are tracked — **time-to-first-token (TTFT), time-per-output-token (TPOT) and end-to-end latency** — and the SLO targets are prompt-length-dependent: **3, 5 or 9 seconds for 128, 256 and 512-token prompts**.

The algorithm, TP-MPPO, alternates two phases. Phase 1 is a **maskable PPO** policy over offloading decisions, where the mask sets the logits of infeasible node assignments to −∞ so the agent never spends exploration on assignments that would not fit. Phase 2 solves the resource split analytically given those assignments: uplink bandwidth by **min-max fairness**, closed-form as a fraction proportional to data size over channel capacity, and downlink by a greedy rule that serves first the requests needing the least bandwidth to hit their SLO. Phase 2's outcome is fed back as the immediate reward, so the learner is scored on what the allocator could actually achieve rather than on a proxy.

The reward — goodput weighted against out-of-memory failures, normalised by request count — is where the LLM-specific structure enters. KV-cache growth means an accepted request can later exhaust a node's memory, and penalising OOM directly is how the policy learns admission restraint rather than greedy packing.

Reported results: **33.3%–87.5% higher reward** than MPPO, TP-PPO, a rewardless variant and a heuristic baseline, converging within **200 episodes**; at **6 edge nodes and 20 users** the goodput ratio advantage is a more modest **5.4%–10.2%**.

## Summary (ZH)

无线边缘文献中的多数卸载建模，目标要么是最大化完成任务数，要么是最小化平均时延。对大模型服务而言这是错误的目标——一个错过截止时间的请求，既消耗了无线与 GPU 资源，又什么都没交付。这篇 IEEE Wireless Communications Letters 论文（上海大学 / CSIRO）转而优化 **goodput**：在端到端服务等级目标（SLO）**之内**完成的请求数。

场景刻意保持简单：**J 个配备 GPU 的边缘节点与 N 个无本地 GPU 的用户**，由一个中心接入点协调；OFDM 为每个节点分配独立频段，使节点之间互不干扰。每个用户请求都必须被指派到某个节点，并获得上行带宽以传送提示词、下行带宽以回传 token。论文跟踪三个时延量——**首 token 时延（TTFT）、每输出 token 时延（TPOT）与端到端时延**——且 SLO 目标随提示词长度而定：**128、256、512 token 的提示词分别对应 3、5、9 秒**。

算法 TP-MPPO 交替执行两个阶段。阶段一是对卸载决策的**可掩码 PPO** 策略，掩码把不可行节点指派的 logits 置为 −∞，使智能体不会把探索预算花在装不下的指派上。阶段二在给定指派下解析地求解资源划分：上行带宽按**最小化最大时延的公平性**给出闭式解，份额正比于数据量除以信道容量；下行则采用贪心规则，优先服务那些为达成 SLO 所需带宽最小的请求。阶段二的结果被作为即时奖励回馈，使学习器是按分配器实际能达成的效果打分，而非按某个代理指标。

奖励函数——goodput 与显存溢出（OOM）失败的加权、并按请求数归一化——正是大模型特有结构进入模型的地方。KV 缓存的增长意味着一个已被接纳的请求可能在后续耗尽节点显存；直接惩罚 OOM，才是策略学会「有节制地准入」而非贪心塞满的原因。

报告结果：相较 MPPO、TP-PPO、无奖励变体与启发式基线，**奖励高出 33.3%–87.5%**，并在 **200 个 episode 内收敛**；在 **6 个边缘节点、20 个用户**的配置下，goodput 比例上的优势较为温和，为 **5.4%–10.2%**。

## Key technical points (EN)

- Objective is goodput: requests completed within their end-to-end SLO, not raw completion count or mean latency.
- Topology: J GPU-enabled edge nodes, N users without local GPUs, central AP coordinator, OFDM with per-node frequency bands (no inter-node interference modelled).
- Latency decomposition tracked: TTFT, TPOT, end-to-end.
- SLO targets scale with prompt length: 3 s / 5 s / 9 s for 128 / 256 / 512-token prompts.
- Phase 1 — maskable PPO: state = request parameters + channel gains + node idle status; action = node assignment with invalid-action masking (infeasible logits → −∞).
- Reward = (ν_good · Σ goodput − ν_oom · N_oom,t) / N_req,t — explicitly penalising out-of-memory events, which is how KV-cache growth enters the control problem.
- Phase 2 — uplink bandwidth by min-max fairness with a closed-form share proportional to data size / channel capacity; downlink by a greedy rule prioritising the lowest bandwidth needed to meet the SLO.
- Two-phase coupling: Phase 2's achieved allocation is returned as the immediate reward for the next PPO iteration.
- Results: 33.3%–87.5% higher reward than MPPO, TP-PPO, rewardless and heuristic baselines; convergence within ~200 episodes.
- At J = 6, N = 20 the goodput-ratio margin over baselines narrows to 5.4%–10.2%.
- Published in IEEE Wireless Communications Letters, DOI 10.1109/LWC.2026.3718001.

## Key technical points (ZH)

- 优化目标为 goodput：在端到端 SLO 之内完成的请求数，而非完成总数或平均时延。
- 拓扑：J 个配 GPU 的边缘节点、N 个无本地 GPU 的用户、一个中心 AP 协调器；OFDM 按节点分频段（未建模节点间干扰）。
- 跟踪的时延分解：TTFT、TPOT、端到端。
- SLO 目标随提示词长度伸缩：128 / 256 / 512 token 提示词分别对应 3 / 5 / 9 秒。
- 阶段一——可掩码 PPO：状态 = 请求参数 + 信道增益 + 节点空闲状态；动作 = 节点指派并施加无效动作掩码（不可行 logits → −∞）。
- 奖励 = (ν_good · Σ goodput − ν_oom · N_oom,t) / N_req,t——显式惩罚显存溢出事件，这是 KV 缓存增长进入控制问题的方式。
- 阶段二——上行带宽按最小化最大时延的公平性给出闭式份额，正比于数据量 / 信道容量；下行采用贪心规则，优先满足达成 SLO 所需带宽最小的请求。
- 两阶段耦合：阶段二实际达成的分配结果作为即时奖励回馈给下一次 PPO 迭代。
- 结果：相较 MPPO、TP-PPO、无奖励与启发式基线，奖励高出 33.3%–87.5%；约 200 个 episode 内收敛。
- 在 J = 6、N = 20 时，相对基线的 goodput 比例优势收窄至 5.4%–10.2%。
- 发表于 IEEE Wireless Communications Letters，DOI 10.1109/LWC.2026.3718001。

## Why it matters / what's new (EN)

The mechanism here is standard — masked PPO for assignment, closed-form plus greedy for bandwidth — and the paper is a four-page letter, so its value is not in algorithmic novelty. It is in the objective and the reward, both of which correct assumptions that are common and wrong when generic edge-offloading formulations are pointed at LLM serving.

The first correction is the deadline. Optimising completed tasks treats a request that finishes at 12 seconds against a 9-second target as a success; goodput treats it as pure waste of both spectrum and GPU time, which is what it is. Because the SLO is set per prompt length rather than as a single number, the formulation also captures that a long prompt legitimately deserves more time — a detail that a flat latency budget gets wrong in both directions.

The second is the OOM penalty. Classical offloading models treat a node's capacity as a static number, but an LLM node's memory is consumed dynamically by KV-cache as generation proceeds, so a feasible-looking admission can become an out-of-memory failure several seconds later. Penalising OOM in the reward is a compact way of teaching the scheduler that edge LLM capacity is a function of what it has already admitted and how long those requests will run — closer to how a real serving stack fails than "does the model fit".

Read against the honest numbers, the contribution is modest: the 33.3%–87.5% figure is a reward-scale comparison, while the operationally meaningful goodput-ratio gain at a realistic 6-node/20-user scale is 5.4%–10.2%. That is the number to quote. The evaluation is also simulation-only with per-node orthogonal bands and no interference, so it says nothing about contention — the regime where wireless-edge inference actually gets hard, and the one the Wi-Fi broadcast-rate and over-the-air MoE work already in this KB attacks from the radio side.

## Why it matters / what's new (ZH)

这里的机制是标准的——用掩码 PPO 做指派，用闭式解加贪心做带宽——而且这只是一篇四页的 Letter，因此其价值不在算法新颖性，而在**目标函数与奖励函数**：两者都纠正了把通用边缘卸载建模套用到大模型服务时常见且错误的假设。

第一项纠正是截止时间。以「完成任务数」为目标，会把一个在 9 秒目标下 12 秒才完成的请求算作成功；而 goodput 把它算作频谱与 GPU 时间的纯粹浪费——它本来就是。由于 SLO 按提示词长度分档而非取单一数值，该建模还刻画了「长提示词理应获得更多时间」这一点，而扁平的时延预算在两个方向上都会搞错这件事。

第二项是 OOM 惩罚。经典卸载模型把节点容量视为静态数值，但大模型节点的显存是随生成推进被 KV 缓存动态吃掉的，因此一个看起来可行的准入可能在数秒后变成显存溢出失败。把 OOM 写进奖励，是一种紧凑的方式，用以教会调度器：**边缘大模型容量是「已经接纳了什么、这些请求还要跑多久」的函数**——这比「模型装不装得下」更接近真实服务栈的失效方式。

若按诚实的数字来读，贡献是温和的：33.3%–87.5% 是奖励尺度上的比较，而在 6 节点 / 20 用户这一较现实规模下，具有运行意义的 goodput 比例增益是 5.4%–10.2%。应当引用的是后者。评估还是纯仿真、各节点正交频段且不建模干扰，因此对**争用**只字未言——而争用恰恰是无线边缘推理真正变难的区间，也是本知识库中已有的 Wi-Fi 广播速率与空中计算 MoE 工作从无线侧攻击的那个问题。
