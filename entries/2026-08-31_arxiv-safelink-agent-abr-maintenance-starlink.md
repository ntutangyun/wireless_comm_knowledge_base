---
id: 2026-08-31_arxiv-safelink-agent-abr-maintenance-starlink
date_published: 2026-08-28
date_found: 2026-08-31
type: academic-paper
title_en: "SafeLink-Agent: Treating a Deployed Starlink Video Controller as a Maintainable Artifact — LLM-Proposed Patches, Replay-Verified Before Commit"
title_zh: "SafeLink-Agent：把已部署的 Starlink 视频码率控制器当作可维护制品——大模型提出补丁，回放验证后方可提交"
url: "https://arxiv.org/abs/2608.28194"
technology: satellite
source_quality: full
topics: [Starlink, adaptive-bitrate, ABR, QoE, LLM-agent, handover, replay-verification, RobustMPC, Pensieve, video-streaming]
topic_primary: starlink
topics_secondary: [sat-ai, leo-constellations]
novelty_score: 3
---

## Summary (EN)

Adaptive bitrate (ABR) control decides which quality level a video client requests for each chunk, trading picture quality against the risk of draining the playback buffer. Over Starlink that trade-off shifts under the operator's feet: satellite mobility, serving-satellite handovers, obstruction, regional coverage differences, traffic load and gateway association all move the throughput tail, volatility and latency that a client sees. Hongjun Xie and colleagues (Ningbo Artificial Intelligence Institute / Shanghai Jiao Tong University, with Shanghai i-Space Orbital Computing Infrastructure) observe that essentially all ABR research — rule-based (BOLA, RobustMPC) and learned (Pensieve, Comyco, SABR) alike — treats the controller as something you *design once*, leaving a deployment gap: keep the original controller and accept severe stalls on newly exposed hard profiles, or apply a globally conservative configuration and give up resolution on the profiles that were already fine.

**SafeLink-Agent** reframes this as controller **maintenance**. Measured Starlink sessions are grouped into *profiles* — batches sharing an operating condition (low throughput tail, high volatility, high latency, handover-heavy) and summarised by five metadata values: mean throughput, 5th-percentile throughput, volatility, mean latency, and handover intensity. When a profile exposes failures, an LLM-based **agentic patch proposer** (instantiated here with DeepSeek-V4-Pro) reads the mined failure evidence and emits a candidate patch inside a schema-validated admissible patch space. The patch is committed only if two replays agree: **target-profile replay** must show a real severe-risk reduction within a bounded QoE cost, and **regression-memory replay** over previously validated profiles must show the fix did not damage sessions that were already fine.

The evaluation is built from a real Starlink measurement dataset spanning the US, Germany and Victoria (Canada): 25.7 million raw throughput samples and 33,019 primary-satellite changes reduced to 3,221 valid 600 s replay traces (536.8 hours), with a 4K/8K-style bitrate ladder of 3-120 Mbps, 48 chunks of 4 s and a 60 s buffer. A severe session is one with more than 10 s of rebuffering. For rule-based controllers, SafeLink-Agent cuts the **RobustMPC severe-session ratio from 2.60% to 0.40%** (an 84.6% reduction) at 1.68% target-profile QoE loss and **zero** QoE loss on regression memory, where the static conservative configuration bought a similar risk reduction but with 0.60% regression-memory QoE loss; on BOLA it reaches 0.40% severe sessions at 1.24% QoE loss, against the static conservative variant's 7.84% target and 8.05% regression QoE loss. For learned controllers the patch type is a policy-agnostic **runtime auditor** that only overrides requests violating a verified safety rule: SABR, Pensieve and Comyco fall from 38.47% / 44.49% / 34.07% severe sessions to 11.01% / 10.13% / 8.22% under adaptive auditing (**39.01% -> 9.79% on average**), without retraining.

Two further experiments make the Starlink-specific case. In **rolling maintenance** across a sequence of arriving profiles (initial, calibration, high-volatility, low-tail, high-latency, future-test) the static default accumulates **45** severe sessions while SafeLink-Agent ends at **7**, close to the verifier upper bound of 9 — and the static conservative controller reaches 4 only by being conservative everywhere. In the **handover-heavy stress test**, sessions in the top 30% by primary candidate-satellite changes (1924.71 vs 758.52 changes on average, and a weaker 63.83 vs 72.77 Mbps P05 throughput) push the static default's severe-session ratio from 1.90% to 4.22%; SafeLink-Agent brings it back to 0.96% while holding a higher QoE operating point than the conservative baseline.

## Summary (ZH)

自适应码率（ABR）控制决定视频客户端为每个分片请求哪一档画质，在画质与耗尽播放缓冲的风险之间权衡。在 Starlink 上，这一权衡的基准会在运营过程中自行漂移：卫星运动、服务星切换、遮挡、区域覆盖差异、话务负载与关口站关联，都会改变客户端所感受到的吞吐尾部、波动性与时延。Hongjun Xie 等（宁波人工智能研究院 / 上海交通大学，并与上海 i-Space 轨道计算基础设施公司合作）指出，几乎全部 ABR 研究——无论规则式（BOLA、RobustMPC）还是学习式（Pensieve、Comyco、SABR）——都把控制器当作*一次性设计*的产物，由此留下部署缺口：要么保留原控制器、承受新暴露困难画像下的严重卡顿，要么全局采用保守配置、在本来正常的画像上白白牺牲分辨率。

**SafeLink-Agent** 把这个问题重构为控制器**维护**问题。实测 Starlink 会话被归组为*画像*——共享某种运行条件（低吞吐尾部、高波动、高时延、切换密集）的一批轨迹，并用五个元数据概括：平均吞吐、5 百分位吞吐、波动度、平均时延、切换强度。当某画像暴露出失效时，基于大模型的**智能体补丁提议器**（本文用 DeepSeek-V4-Pro 实例化）阅读挖掘出的失效证据，在经模式校验的可行补丁空间内产出候选补丁。补丁只有在两次回放都通过后才被提交：**目标画像回放**须证明严重风险确有下降且 QoE 代价在界内，**回归记忆回放**须在此前已验证的画像上证明该修复没有损害原本正常的会话。

评估基于覆盖美国、德国与加拿大维多利亚的真实 Starlink 测量数据集：2570 万条原始吞吐采样、33,019 次主星切换，整理为 3,221 条有效的 600 s 回放轨迹（合计 536.8 小时），码率阶梯为 4K/8K 风格的 3-120 Mbps、48 个 4 s 分片、缓冲上限 60 s。卡顿超过 10 s 的会话记为严重会话。对规则式控制器，SafeLink-Agent 把 **RobustMPC 的严重会话率从 2.60% 降到 0.40%**（降幅 84.6%），目标画像 QoE 损失 1.68%，回归记忆上的 QoE 损失为**零**；相比之下静态保守配置虽取得相近的风险下降，却带来 0.60% 的回归记忆 QoE 损失。在 BOLA 上则以 1.24% 的 QoE 损失达到 0.40% 严重会话率，而静态保守方案的目标与回归 QoE 损失分别高达 7.84% 与 8.05%。对学习式控制器，补丁形态是与策略无关的**运行时审计器**，只在请求违反已验证安全规则时才介入：SABR、Pensieve、Comyco 的严重会话率在自适应审计下由 38.47% / 44.49% / 34.07% 降至 11.01% / 10.13% / 8.22%（**平均 39.01% -> 9.79%**），且无需重训练。

另外两组实验凸显了 Starlink 特有的意义。在画像按序到达的**滚动维护**实验（初始部署、新标定、高波动、低尾部、高时延、未来测试）中，静态默认控制器累计 **45** 次严重会话，SafeLink-Agent 收于 **7** 次，接近验证器上界的 9 次——而静态保守控制器虽只有 4 次，代价是处处保守。在**切换密集压力测试**中，按主候选星切换次数排名前 30% 的会话（平均 1924.71 次对 758.52 次，且 P05 吞吐更低，63.83 Mbps 对 72.77 Mbps）把静态默认控制器的严重会话率从 1.90% 推高到 4.22%；SafeLink-Agent 将其拉回 0.96%，同时保持比保守基线更高的 QoE 工作点。

## Key technical points (EN)

- **Problem reframing**: ABR over Starlink as *controller maintenance*, not controller design — versioned patches C_{v+1} = C_v (+) p drawn from an admissible patch space, gated by verifier constraints on both a target profile and a regression memory.
- **Starlink profile**: a batch of measured replay sessions sharing an operating condition, summarised by z(D) = [mean throughput, P05 throughput, throughput volatility, mean latency, handover intensity]. Profiles used: initial deployment, new calibration, high volatility, low tail, high latency, future test, plus a stable regression-memory profile.
- **Patch pipeline**: profile/failure mining from replay logs -> LLM agentic patch proposer (DeepSeek-V4-Pro) -> patch schema validation -> target-profile replay -> regression-memory replay -> commit.
- **Verifier constraints**: severe-session threshold b_sev = 10 s, tail fraction alpha = 0.05; maintenance triggers at beta_sev = 1% and beta_tail = 10 s. Rule-based patches must reach R_sev <= 1% on the target profile, reduce at least one risk metric, and keep target QoE loss within 8%; regression memory allows 2% QoE loss, 0.5 pp severe-session slack and 1 s worst-5% rebuffering tolerance.
- **Patch types**: profile-conditioned *configuration* patches for BOLA (min/target buffer 10/30 s default, 15/45 s conservative) and RobustMPC (horizon 5 + safety margin 1.00 default, horizon 6 + margin 0.85 conservative); policy-agnostic *runtime auditor* patches for the learned controllers (No auditor / Static auditor / Adaptive auditor).
- **Dataset**: 322 raw Starlink measurement runs (US 2024-04-26..05-28, Germany 2024-07-13..07-31, Victoria 2024-07-11..07-28), 25,676,707 throughput samples, 27,023,958 latency samples, 33,019 primary-satellite changes -> 3,221 valid 600 s traces (2,255 / 484 / 482 train-calibration-test), 536.8 replay hours; mean throughput 209.3 Mbps, mean P05 102.7 Mbps.
- **Rule-based results**: RobustMPC severe-session ratio **2.60% -> 0.40%** (84.6% reduction) at 1.68% target QoE loss and 0.00% regression-memory QoE loss (static conservative: 2.35% target, 0.60% regression). BOLA 0.63% -> 0.40% at 1.24% QoE loss vs the static conservative variant's 0.23% at 7.84% / 8.05% loss.
- **Learned-controller results**: severe-session ratios SABR 38.47% -> 12.33% (static auditor) -> 11.01% (adaptive); Pensieve 44.49% -> 12.33% -> 10.13%; Comyco 34.07% -> 11.31% -> 8.22%. Pensieve's worst-5% rebuffering starts at 161.05 s. Adaptive auditing costs audit rate and some QoE (SABR QoE 4311.30 -> 4271.32, audit rate 11.26% -> 12.48%).
- **Rolling maintenance**: cumulative severe sessions — static default 45 (19 after high-volatility, 32 after low-tail, 42 after high-latency), SafeLink-Agent 7, verifier upper bound 9, static conservative 4 (globally conservative).
- **Handover-heavy stress test**: top-30% by primary candidate-satellite changes -> 521 handover-heavy vs 1,213 normal sessions; static default 1.90% -> 4.22% severe sessions across the split, SafeLink-Agent 4.22% -> 0.96% with a higher QoE operating point (93.39) than static conservative (92.84 at 0.58%).
- Source code announced at github.com/luopeng69131/SafeLink-Agent.

## Key technical points (ZH)

- **问题重构**：把 Starlink 上的 ABR 视为*控制器维护*而非控制器设计——版本化补丁 C_{v+1} = C_v (+) p 取自可行补丁空间，由目标画像与回归记忆两侧的验证器约束把关。
- **Starlink 画像**：共享同一运行条件的一批实测回放会话，用 z(D) = [平均吞吐, P05 吞吐, 吞吐波动度, 平均时延, 切换强度] 概括。所用画像：初始部署、新标定、高波动、低尾部、高时延、未来测试，另加一个稳定的回归记忆画像。
- **补丁流水线**：从回放日志挖掘画像与失效证据 -> 大模型智能体补丁提议器（DeepSeek-V4-Pro）-> 补丁模式校验 -> 目标画像回放 -> 回归记忆回放 -> 提交。
- **验证器约束**：严重会话门限 b_sev = 10 s、尾部比例 alpha = 0.05；维护触发阈值 beta_sev = 1%、beta_tail = 10 s。规则式补丁须在目标画像上达到 R_sev <= 1%、至少降低一项风险指标，且目标 QoE 损失不超过 8%；回归记忆允许 2% 的 QoE 损失、0.5 个百分点的严重会话松弛与 1 s 的最差 5% 卡顿容差。
- **补丁类型**：面向 BOLA（默认最小/目标缓冲 10/30 s，保守 15/45 s）与 RobustMPC（默认预测步长 5 + 安全裕量 1.00，保守步长 6 + 裕量 0.85）的画像条件化*配置*补丁；面向学习式控制器的与策略无关的*运行时审计器*补丁（无审计器 / 静态审计器 / 自适应审计器）。
- **数据集**：322 次原始 Starlink 测量（美国 2024-04-26..05-28、德国 2024-07-13..07-31、维多利亚 2024-07-11..07-28），25,676,707 条吞吐采样、27,023,958 条时延采样、33,019 次主星切换 -> 3,221 条有效 600 s 轨迹（训练/标定/测试 2,255 / 484 / 482），合计 536.8 回放小时；平均吞吐 209.3 Mbps，平均 P05 为 102.7 Mbps。
- **规则式结果**：RobustMPC 严重会话率 **2.60% -> 0.40%**（降幅 84.6%），目标 QoE 损失 1.68%、回归记忆 QoE 损失 0.00%（静态保守：目标 2.35%、回归 0.60%）。BOLA 由 0.63% 降到 0.40%、QoE 损失 1.24%，而静态保守方案虽达 0.23%，代价是 7.84% / 8.05% 的损失。
- **学习式结果**：严重会话率 SABR 38.47% -> 12.33%（静态审计器）-> 11.01%（自适应）；Pensieve 44.49% -> 12.33% -> 10.13%；Comyco 34.07% -> 11.31% -> 8.22%。Pensieve 的最差 5% 卡顿初始高达 161.05 s。自适应审计会抬高审计率并略损 QoE（SABR 的 QoE 由 4311.30 降到 4271.32，审计率由 11.26% 升到 12.48%）。
- **滚动维护**：累计严重会话——静态默认 45 次（高波动后 19、低尾部后 32、高时延后 42），SafeLink-Agent 为 7 次，验证器上界 9 次，静态保守 4 次（代价是全局保守）。
- **切换密集压力测试**：按主候选星切换次数取前 30% -> 521 条切换密集会话对 1,213 条普通会话；静态默认的严重会话率在两组间由 1.90% 升到 4.22%，SafeLink-Agent 把 4.22% 拉回 0.96%，且 QoE 工作点（93.39）高于静态保守（92.84，对应 0.58%）。
- 源码发布地址：github.com/luopeng69131/SafeLink-Agent。

## Why it matters / what's new (EN)

Most of the KB's Starlink research entries look at the network from below or beside it — measured queuing behaviour, PoP and satellite assignment across a continent, congestion-control emulation fidelity, interference modelling. This one looks at what the *application* has to do to survive that network, and reaches an unusual conclusion: the interesting artifact is not a better ABR algorithm but a **maintenance loop around whatever algorithm is already deployed**. That reframing travels well beyond video — any LEO-facing controller with tuned constants (congestion control, handover thresholds, terminal power management) faces the same problem that its tuning was done against a network whose statistics keep moving.

The design detail worth carrying forward is the **verify-before-commit split**. The LLM is used only where it is strong — reading failure evidence and proposing a localised, schema-constrained change — while the accept/reject decision is made by deterministic replay against two populations: the profile that failed *and* a regression memory of profiles that did not. The reported numbers show why that second replay matters: static conservative tuning reaches a comparable severe-session ratio but pays 8.05% QoE on regression memory for BOLA, whereas the verified patch pays zero. The handover-heavy split supplies the LEO-specific evidence: handover-dense periods are not just another random subset of traces — they roughly double a high-QoE controller's severe-session tail (1.90% -> 4.22%), which is precisely the kind of failure mode that only appears after deployment.

## Why it matters / what's new (ZH)

知识库中大多数 Starlink 研究条目是从网络之下或之侧观察它的——实测排队行为、跨大陆的 PoP 与卫星分配、拥塞控制的仿真/仿真器保真度、干扰建模。本文关注的则是*应用层*要如何在这样的网络中活下来，并给出一个不寻常的结论：真正有价值的产物不是更好的 ABR 算法，而是**围绕已部署算法的一套维护回路**。这一重构远不止适用于视频——任何面向低轨的、带有调优常数的控制器（拥塞控制、切换门限、终端功耗管理）都面临同一问题：它的调参是针对一个统计特性持续漂移的网络做的。

值得带走的设计细节是**先验证后提交的分工**。大模型只被用在它擅长的地方——阅读失效证据并提出局部化、受模式约束的改动——而接受/拒绝的裁决交给确定性回放，且是对两个群体回放：失效的那个画像，*以及*没有失效的画像构成的回归记忆。报告的数字说明了第二次回放为何重要：静态保守调参虽能达到相近的严重会话率，但在 BOLA 上要付出 8.05% 的回归记忆 QoE，而经验证的补丁付出的是零。切换密集组则提供了低轨特有的证据：切换密集时段并非随机子集——它们把高 QoE 控制器的严重会话尾部近乎翻倍（1.90% -> 4.22%），而这恰恰是只有部署之后才会显形的失效模式。

## Images

![Deployment gap of ABR streaming over dynamic Starlink access links | Starlink 动态接入链路上 ABR 流媒体的部署缺口](https://arxiv.org/html/2608.28194v1/Fig/1_introduction.jpg)
![From conventional static ABR controller design to agentic controller maintenance | 从传统静态 ABR 控制器设计到智能体式控制器维护](https://arxiv.org/html/2608.28194v1/Fig/2_compare.jpg)
![Rule-based result as a QoE-loss versus severe-risk tradeoff map | 规则式控制器结果：QoE 损失与严重风险的权衡图](https://arxiv.org/html/2608.28194v1/Fig/rule_based_tradeoff_map.png)
![Rolling maintenance: cumulative severe sessions as new Starlink profiles arrive | 滚动维护：新 Starlink 画像到达时的累计严重会话数](https://arxiv.org/html/2608.28194v1/Fig/rolling_maintenance_timeline.png)
![Handover-heavy Starlink stress test | Starlink 切换密集场景压力测试](https://arxiv.org/html/2608.28194v1/Fig/handover_heavy_stress.png)
