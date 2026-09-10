---
id: 2026-09-10_arxiv-llm-serving-cluster-cell-free-massive-mimo
date_published: 2026-09-04
date_found: 2026-09-10
type: academic-paper
technology: cellular
title_en: "WIP: Energy-Efficient LLM-Based Serving Cluster Formulation in Cell-Free Massive MIMO"
title_zh: "面向蜂窝无小区大规模 MIMO 的高能效 LLM 服务集群构建"
url: "https://arxiv.org/abs/2609.05725"
source_quality: full
topics: [cell-free-massive-MIMO, serving-cluster-formation, LLM-agent, energy-efficiency, GPT-4o, ray-tracing, 6G]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)
Marcin Hoffmann and Pawel Kryszkiewicz (arXiv v1, 4 Sep 2026; published in the 2026 IEEE 27th International Symposium on a World of Wireless, Mobile and Multimedia Networks, WoWMoM, DOI 10.1109/WoWMoM69805.2026.00054; both authors are at Poznan University of Technology. The paper is an explicitly-labelled work-in-progress (WIP) short paper, and this entry is filed on its arXiv date because the arXiv record gives no conference date) propose using a Large-Language-Model-based AI agent to decide Serving Cluster Formulation (SCF) in User-Centric Cell-Free Massive MIMO — the problem of deciding, for each user, which and how many base stations should jointly serve it. The motivation is that the conventional network-centric approach (assigning each user to whichever single base station gives the strongest received power) leaves infrastructure underused and wastes energy, while cell-free architectures that let multiple coordinated base stations serve one user can improve throughput and fairness, but existing analytical methods for choosing serving clusters rely on simplified system models that neglect practical effects such as OFDMA resource scheduling and power-amplifier nonlinearity.

The proposed system places a central processing unit hosting the LLM agent alongside six base stations (one 45 m macro site plus five 6 m micro sites) in a reinforcement-learning loop: the agent's state is a per-user matrix of received power (dBm) from each base station; its action is, per user, how many of the highest-power base stations should serve that user; and its reward is network energy efficiency, defined as median user throughput divided by total power consumption (chosen to reward fairness toward users in poor radio conditions rather than only the aggregate). A system prompt instructs the LLM to behave as a "mobile network operator AI," start each user with a single serving base station absent history, progressively grow assignments for specific users based on accumulated experience, apply small random perturbations when results plateau, and after 40+ experience samples select the historically best-performing assignment; the LLM is told to return only the assignment list with no explanation. The evaluation environment is a 3D ray-tracing cellular simulator (Madrid urban grid scenario, 3.6 GHz center frequency, 69 resource blocks at 30 kHz subcarrier spacing, Rapp power-amplifier model with 6 dB input back-off, 40 UEs, 1000 time slots of 0.5 ms each) that models OFDM-based MIMO resource scheduling and PA nonlinear distortion explicitly.

Three OpenAI models (GPT-5, GPT-4o, GPT-4o-mini) were compared as the agent's reasoning engine against a network-centric baseline (~68 kbit/J) and two non-LLM heuristics (a location-based 20-closest-base-station rule at ~50 kbit/J, and a 95%-power-threshold rule at ~40 kbit/J). Over the final 200 stable time slots, GPT-4o-mini matched the baseline (~68 kbit/J, essentially no learned adjustment after the initial assignment), GPT-5 reached ~80 kbit/J (+18%), and GPT-4o reached ~90 kbit/J (+32% over the network-centric baseline), with GPT-4o making the most cumulative reassignment decisions (over 65, versus over 35 for GPT-5 and almost none after initialization for GPT-4o-mini). On user-throughput fairness across the same final window, GPT-4o improved median user throughput by 37% over the network-centric baseline while keeping its 10th-percentile (poor-condition) users roughly flat (+0.5%), whereas the non-LLM heuristics degraded the 10th-percentile users substantially (-10% location-based, -18% for the 95%-threshold rule) and GPT-4o-mini's static behavior left its worst-off users 32% below baseline. The paper reports these results without discussing the computational latency or overhead of querying an LLM in a real-time serving-cluster-formation loop.

## Summary (ZH)
Marcin Hoffmann 与 Pawel Kryszkiewicz（arXiv v1，2026 年 9 月 4 日；发表于 2026 年 IEEE 第 27 届无线、移动与多媒体网络世界研讨会 WoWMoM，DOI 10.1109/WoWMoM69805.2026.00054；两位作者均来自波兰波兹南工科大学。该论文明确标注为在研短文（WIP），本条目因 arXiv 记录未给出会议日期而以 arXiv 日期归档）提出使用基于大语言模型（LLM）的 AI 智能体来决定用户中心蜂窝无小区大规模 MIMO 系统中的服务集群构建（SCF）问题——即为每个用户决定应由哪些、以及多少个基站联合为其提供服务。研究动机在于：传统的网络中心式方法（将每个用户分配给接收功率最强的单一基站）会导致基础设施利用不足、能量浪费，而允许多个协调基站联合服务单一用户的无小区架构虽可提升吞吐量与公平性，但现有的服务集群选择解析方法依赖于简化的系统模型，忽略了 OFDMA 资源调度、功放非线性等实际效应。

所提系统将托管 LLM 智能体的中央处理单元与六个基站（一个 45 米高的宏站加五个 6 米高的微站）置于一个强化学习闭环中：智能体的状态为每个用户从各基站接收到的功率（dBm）矩阵；其动作为针对每个用户，应由多少个接收功率最高的基站为其提供服务；其奖励为网络能效，定义为用户吞吐量中位数除以总功耗（这一定义旨在兼顾无线条件较差用户的公平性，而非仅优化总量）。系统提示词指示该 LLM 扮演"移动网络运营商 AI"的角色：在没有历史数据时为每个用户分配单一服务基站，基于累积经验逐步为特定用户扩大服务集群，当结果趋于平稳时施加小幅随机扰动，并在积累 40 个以上经验样本后选择历史表现最佳的分配方案；该 LLM 被要求仅返回分配列表、不附带任何解释。评估环境为一个三维射线追踪蜂窝仿真器（马德里城市网格场景，中心频率 3.6 GHz，69 个资源块、30 kHz 子载波间隔，采用 6 dB 输入回退的 Rapp 功放模型，40 个 UE，1000 个 0.5 毫秒时隙），显式建模了基于 OFDM 的 MIMO 资源调度与功放非线性失真。

作者比较了三种 OpenAI 模型（GPT-5、GPT-4o、GPT-4o-mini）作为智能体推理引擎，并与网络中心式基线（约 68 kbit/J）以及两种非 LLM 启发式方法（基于位置选取 20 个最近基站的规则，约 50 kbit/J；95% 功率阈值规则，约 40 kbit/J）进行对比。在最后 200 个稳定时隙内，GPT-4o-mini 的表现与基线持平（约 68 kbit/J，初始分配后几乎没有再学习调整），GPT-5 达到约 80 kbit/J（提升 18%），GPT-4o 达到约 90 kbit/J（相对网络中心式基线提升 32%），且 GPT-4o 累计做出的重新分配决策次数最多（超过 65 次，GPT-5 超过 35 次，而 GPT-4o-mini 在初始化后几乎不再调整）。在同一最后时段内的用户吞吐量公平性方面，GPT-4o 使用户吞吐量中位数相对网络中心式基线提升 37%，同时使处于第 10 百分位（无线条件较差）的用户基本持平（+0.5%），而非 LLM 启发式方法则显著恶化了第 10 百分位用户的表现（基于位置的规则下降 10%，95% 阈值规则下降 18%），GPT-4o-mini 因几乎不作调整，其条件最差用户的表现较基线低 32%。论文并未讨论在实时服务集群构建闭环中查询 LLM 所带来的计算延迟或开销。

## Key technical points (EN)
- LLM agent (state = per-user received-power matrix from each BS; action = number of highest-power BSs to serve each user; reward = median user throughput / total power consumption) drives Serving Cluster Formulation in User-Centric Cell-Free Massive MIMO.
- System prompt enforces an explore-then-exploit policy: single-BS start, incremental growth from experience, random perturbation on plateau, best-historical-EE selection after 40+ samples; LLM returns only the assignment list.
- Evaluated in a 3D ray-tracing simulator (Madrid grid, 3.6 GHz, 69 RBs @ 30 kHz SCS, Rapp PA model with 6 dB IBO, 6 BSs (1 macro/5 micro), 40 UEs, 1000 x 0.5ms slots) modeling OFDM resource scheduling and PA nonlinearity explicitly.
- GPT-4o reaches ~90 kbit/J vs. ~68 kbit/J network-centric baseline (+32%), vs. GPT-5 ~80 kbit/J (+18%) and GPT-4o-mini ~68 kbit/J (~0%, over the final 200 stable slots).
- Non-LLM heuristic baselines underperform: location-based (20 closest BS) ~50 kbit/J (-26%), 95%-power-threshold rule ~40 kbit/J (-41%).
- Fairness: GPT-4o improves median user throughput +37% over baseline while holding 10th-percentile (worst-condition) users roughly flat (+0.5%); heuristic baselines degrade the 10th percentile by -10% to -18%; GPT-4o-mini's near-static behavior leaves its worst-off users -32%.
- GPT-4o makes the most cumulative reassignment decisions (65+) vs. GPT-5 (35+) and GPT-4o-mini (near-none after initialization) — more active exploration correlates with better EE and fairness in this setup.
- No discussion of LLM query latency/computational overhead in a real-time serving loop; simulations run with the latest models available as of November 2025.

## Key technical points (ZH)
- LLM 智能体（状态为每用户从各基站接收到的功率矩阵；动作为为每个用户服务的最高功率基站数量；奖励为用户吞吐量中位数除以总功耗）驱动用户中心蜂窝无小区大规模 MIMO 中的服务集群构建。
- 系统提示词强制执行"先探索后利用"策略：从单基站起步，基于经验逐步扩大集群，结果平稳时施加随机扰动，积累 40 个以上样本后选择历史能效最佳的方案；LLM 仅返回分配列表。
- 在三维射线追踪仿真器中评估（马德里网格场景，3.6 GHz，69 个资源块 @ 30 kHz 子载波间隔，采用 6 dB 输入回退的 Rapp 功放模型，6 个基站[1 宏站/5 微站]，40 个 UE，1000 个 0.5 毫秒时隙），显式建模 OFDM 资源调度与功放非线性。
- 在最后 200 个稳定时隙内，GPT-4o 达到约 90 kbit/J，相对网络中心式基线（约 68 kbit/J）提升 32%；GPT-5 达到约 80 kbit/J（提升 18%）；GPT-4o-mini 约 68 kbit/J（基本无提升）。
- 非 LLM 启发式基线表现更差：基于位置（20 个最近基站）约 50 kbit/J（下降 26%），95% 功率阈值规则约 40 kbit/J（下降 41%）。
- 公平性方面：GPT-4o 使用户吞吐量中位数相对基线提升 37%，同时使第 10 百分位（条件最差）用户基本持平（+0.5%）；启发式基线使第 10 百分位用户下降 10%-18%；GPT-4o-mini 因几乎不作调整，其条件最差用户下降 32%。
- GPT-4o 累计做出的重新分配决策最多（超过 65 次），高于 GPT-5（超过 35 次）与 GPT-4o-mini（初始化后几乎不再调整）——在该设置下，更积极的探索与更优的能效及公平性相关。
- 论文未讨论在实时服务集群构建闭环中查询 LLM 所带来的延迟或计算开销；仿真采用截至 2025 年 11 月可用的最新模型版本。

## Why it matters / what's new (EN)
The KB's cellular-massive-mimo bin has previously covered CSI feedback, beam tracking/charting, and PCI/network-planning problems, but this is the first entry applying an LLM agent directly to the serving-cluster-formation decision in user-centric cell-free massive MIMO — a core 6G RAN architecture problem — with an energy-efficiency reward explicitly weighted toward fairness for poorly served users, and a head-to-head comparison across three commercial LLM tiers plus two non-LLM heuristics inside a physically detailed ray-tracing simulator that models power-amplifier nonlinearity.

## Why it matters / what's new (ZH)
知识库 cellular-massive-mimo 栏目此前已覆盖 CSI 反馈、波束跟踪/制图以及 PCI/网络规划等问题，但本条目是首个将 LLM 智能体直接应用于用户中心蜂窝无小区大规模 MIMO 中"服务集群构建"这一核心 6G RAN 架构问题的条目，其能效奖励函数被明确设计为向无线条件较差用户的公平性倾斜，并在一个对功放非线性等物理细节建模详尽的射线追踪仿真器中，对三个商用 LLM 档位与两种非 LLM 启发式方法进行了正面对比。

## Images
![Median network energy efficiency over time (100-slot moving average) for the network-centric baseline, two non-LLM heuristics, and the three GPT-based agents | 网络中心式基线、两种非 LLM 启发式方法与三种基于 GPT 的智能体随时间变化的网络能效中位数（100 时隙滑动平均）](https://arxiv.org/html/2609.05725v1/median_time_ee.png)
