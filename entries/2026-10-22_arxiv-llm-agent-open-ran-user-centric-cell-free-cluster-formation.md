---
id: 2026-10-22_arxiv-llm-agent-open-ran-user-centric-cell-free-cluster-formation
date_published: 2026-10-20
date_found: 2026-10-22
type: academic-paper
technology: cellular
title_en: "Agentic AI for Management of Open RAN User-Centric Cell-Free Network"
title_zh: "面向 Open RAN 以用户为中心的无蜂窝网络管理的智能体式 AI"
url: "https://arxiv.org/abs/2610.28860"
source_quality: full
topics: [Open-RAN, rApp, Non-RT-RIC, O1, user-centric, cell-free, massive-MIMO, serving-cluster, LLM-agent, 7.2-split]
topic_primary: open-ran
topics_secondary: [cellular-massive-mimo, cellular-ai]
novelty_score: 3
---

## Summary (EN)
Marcin Hoffmann (Poznan University of Technology and Rimedo Labs) addresses one practical problem in Open RAN user-centric cell-free networks: forming the serving cluster, i.e. deciding which O-RUs serve each user. Too many O-RUs waste radio resources on distant units with marginal gain; too few give up received-power and interference-coordination benefits. The paper proposes a large-language-model agent that runs as an rApp in the Non-RT RIC and tunes one parameter of a low-complexity cluster-formation algorithm that sits in the O-CU/O-DU. The work is funded by the PRELUDIUM project of Poland's National Science Centre. The arXiv paper is written in Polish; pages 5-8 are an AI-generated English translation, which this entry follows. The official arXiv title is Polish ("Agent AI Zarządzający Siecią Open RAN Zorientowana na Użytkownika"), and the paper was published in Przegląd Telekomunikacyjny – Wiadomości Telekomunikacyjne 2026, issue 4, pp. 64–67.

In the O-CU/O-DU, the serving cluster of a user consists of the smallest number of O-RUs, taken in order of transmit power to that user, whose cumulative power share reaches a threshold Delta in [0, 1]. Delta near 0 behaves like a network-centric architecture (one O-RU per user); Delta = 1 means all reachable O-RUs serve the user. The agent reads user positions (state), chooses Delta (action) and observes the median of the user-throughput distribution (reward), retrieving network data and updating Delta over the O1 interface. Its prompt carries the current user locations plus historical data, so it can infer a suitable Delta for layouts it has not yet seen instead of running a separate learning process per layout.

## Summary (ZH)
Marcin Hoffmann（波兹南工业大学与 Rimedo Labs）针对 Open RAN 以用户为中心的无蜂窝网络中的一个实际问题：服务簇的形成，即决定由哪些 O-RU 为每个用户服务。服务的 O-RU 过多会把无线资源浪费在增益有限的远端单元上；过少则放弃接收功率和干扰协调方面的收益。论文提出一个大语言模型智能体，以 rApp 形式运行在 Non-RT RIC 中，调节位于 O-CU/O-DU 内的低复杂度服务簇形成算法的一个参数。该工作由波兰国家科学中心的 PRELUDIUM 项目资助。该 arXiv 论文以波兰语撰写，第 5 至 8 页为 AI 生成的英文译文，本条目依据该译文。arXiv 官方标题为波兰语（“Agent AI Zarządzający Siecią Open RAN Zorientowana na Użytkownika”），论文发表于 Przegląd Telekomunikacyjny – Wiadomości Telekomunikacyjne 2026 年第 4 期，第 64–67 页。

在 O-CU/O-DU 中，用户的服务簇由按发射功率从大到小选取的最少数量的 O-RU 构成，使其累计功率占比达到阈值 Delta（取值 [0, 1]）。Delta 接近 0 时近似以网络为中心的架构（每个用户一个 O-RU）；Delta = 1 表示所有可达的 O-RU 都为该用户服务。智能体读取用户位置（状态），选择 Delta（动作），并观察用户吞吐量分布的中位数（奖励），通过 O1 接口获取网络数据并更新 Delta。其提示词包含当前用户位置和历史数据，因此对于未见过的用户分布，它可以直接推断合适的 Delta，而不必为每种分布单独运行学习过程。

## Key technical points (EN)
- Hierarchical split: a low-complexity cluster-formation algorithm in the O-CU/O-DU reacts on millisecond timescales; the LLM agent, with a response time of a few seconds, sits in the Non-RT RIC and only tunes Delta.
- Simulator: the author's own user-centric massive-MIMO OFDMA simulator with 3D ray tracing (Wireless InSite, 15 reflections, 1 diffraction), zero-forcing precoding executed independently at each O-RU, and 15 MCSs. Setup: 3.6 GHz, 69 resource blocks, one O-CU/O-DU, one macro O-RU (128 antennas, 46 dBm, 45 m) and five micro O-RUs (32 antennas, 30 dBm, 6 m), 20 users, 5 000 slots.
- Agent: Qwen3.5 32B run locally through Ollama, with a system prompt describing the network and Delta, and a user prompt giving positions and historical median throughputs. Five independent user-location layouts ("states"), ten independent runs of the agent per sequence.
- Baselines: network-centric (1 O-RU per user), all O-RUs serving all users (6 O-RU), and a contextual multi-armed bandit (MAB) selecting Delta independently per state. MAB spends about one third of the time exploring all Delta values, including ones that degrade performance.
- Results over the whole run, relative to the network-centric reference: median throughput 2.18x for the agent and 1.95x for MAB (about 12% in the agent's favour); 6 O-RU gives 1.34x. For the worst-case users (10th percentile) 2.25x for the agent, 2.13x for MAB, 2.35x for 6 O-RU; for best-case users (90th percentile) about 20% gain for the agent against about 4% for MAB, while 6 O-RU drops best-case users to 64% of the reference.
- The agent performs a full learning process only in the first state and then reuses the accumulated knowledge with minor adjustments; in most states its mean median throughput is comparable to MAB. Median throughput fluctuates by a few Mbit/s across runs. Network-centric median throughput is roughly 20-30 Mbit/s.
- Future work named: comparing different language models, including smaller open models and large commercial cloud-hosted ones.

## Key technical points (ZH)
- 分层划分：O-CU/O-DU 中的低复杂度服务簇形成算法在毫秒级时间尺度响应；响应时间为数秒的 LLM 智能体位于 Non-RT RIC，只调节 Delta。
- 仿真器：作者自己开发的以用户为中心的大规模 MIMO OFDMA 仿真器，使用 3D 射线追踪（Wireless InSite，15 次反射、1 次绕射），在每个 O-RU 独立执行迫零预编码，包含 15 种 MCS。设置：3.6 GHz，69 个资源块，1 个 O-CU/O-DU，1 个宏 O-RU（128 天线、46 dBm、45 m）和 5 个微 O-RU（32 天线、30 dBm、6 m），20 个用户，5 000 个时隙。
- 智能体：通过 Ollama 在本地运行的 Qwen3.5 32B，系统提示词描述网络与 Delta，用户提示词给出位置和历史吞吐量中位数。五种独立的用户位置分布（“状态”），每个序列对智能体做十次独立运行。
- 基线：以网络为中心（每用户 1 个 O-RU）、所有 O-RU 服务所有用户（6 O-RU），以及对每个状态独立选择 Delta 的上下文多臂老虎机（MAB）。MAB 约三分之一的时间用于探索所有 Delta 取值，包括会使性能下降的取值。
- 整个仿真的结果（相对以网络为中心的参照）：吞吐量中位数智能体为 2.18 倍，MAB 为 1.95 倍（智能体约高 12%）；6 O-RU 为 1.34 倍。最差用户（第 10 百分位）智能体 2.25 倍、MAB 2.13 倍、6 O-RU 2.35 倍；最好用户（第 90 百分位）智能体约提升 20%，MAB 约 4%，而 6 O-RU 使最好用户降至参照的 64%。
- 智能体只在第一个状态完整学习一次，之后复用累积知识并做少量调整；在大多数状态下其平均吞吐量中位数与 MAB 相当。各次运行间吞吐量中位数波动为数 Mbit/s。以网络为中心的吞吐量中位数约 20 至 30 Mbit/s。
- 提出的未来工作：比较不同语言模型，包括较小的开源模型和大型商用云端模型。

## Why it matters / what's new (EN)
The paper treats cluster formation in a 7.2-split Open RAN with a single O-CU/O-DU acting as the CPU for many O-RUs, and positions the LLM agent as an rApp that tunes a parameter rather than computing clusters itself. The evidence is one author's simulation with a locally hosted 32B model, five layouts and a bandit baseline; the gain over MAB is about 12% in median throughput, and the paper itself attributes it to avoiding repeated exploration across layouts. The paper's rationale for placing the agent in the Non-RT RIC is its few-second response time.

## Why it matters / what's new (ZH)
该论文处理 7.2 分离 Open RAN 中的服务簇形成问题（单个 O-CU/O-DU 充当多个 O-RU 的 CPU），并将 LLM 智能体定位为调节参数的 rApp，而非自己计算服务簇。证据来自单一作者的仿真：本地部署的 32B 模型、五种分布和一个老虎机基线；相对 MAB 的增益约为吞吐量中位数的 12%，论文自身将其归因于避免了在不同分布间重复探索。论文把智能体放在 Non-RT RIC 的理由，是其数秒级的响应时间。

## Images

None.
