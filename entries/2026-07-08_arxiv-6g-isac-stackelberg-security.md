---
id: 2026-07-08_arxiv-6g-isac-stackelberg-security
date_published: 2026-07-07
date_found: 2026-07-08
type: academic-paper
technology: cellular
title_en: "6G ISAC security: distributed Stackelberg-Bayesian RL for urban mmWave beamforming under falsified-feedback attackers"
title_zh: "6G ISAC 安全：伪造反馈攻击下城市毫米波波束赋形的分布式 Stackelberg-贝叶斯强化学习"
url: "https://arxiv.org/abs/2607.06115"
source_quality: full
topics: [6G, ISAC, security, beamforming, game-theory, reinforcement-learning, mmWave]
topic_primary: cellular-security
topics_secondary: [cellular-ai, 6g-vision]
novelty_score: 2
---

## Summary (EN)

Geranmayeh and Günlü (arxiv 2607.06115, submitted July 7, 2026) study a security problem specific to integrated sensing and communication (ISAC) in 6G: a malicious receiver that feeds falsified beam-quality / channel-state feedback to steer transmitter main lobes toward itself, simultaneously stealing energy and raising interference for legitimate users. The setting is a ray-traced 28 GHz urban microcell (Dortmund downtown, 3GPP UMi, two 4×8-array transmitters, four receivers of which one is adversarial).

The defense combines three layers. Bayesian belief tracking maintains per-user attack probabilities updated from observed feedback consistency. A game-theoretic layer embeds those beliefs into transmitter utilities (U = Σ(1−Pj)Cj − β·Pj·Cj) and is evaluated in two structures: a Nash formulation where both transmitters best-respond independently, and a Stackelberg formulation where the transmitter serving more users leads and the other follows. The hierarchy matters enormously: Nash detection accuracy is 38.4% because uncoordinated interference confuses the Bayesian estimator, while Stackelberg reaches 69.4%. Finally, Q-learning selects beamforming angles (25 discrete angles per antenna) with the game outputs shaping both the state (suspected node + quantised confidence) and the exploration policy (ε-greedy guided by Stackelberg predictions instead of uniform randomness); adding memory-based experience replay lifts detection to 75.5% and throughput to 934 Mbps (+11% vs memoryless), with the system sustaining ~2.5 Gbps aggregate capacity despite the active attacker.

## Summary (ZH)

Geranmayeh 和 Günlü（arxiv 2607.06115，2026 年 7 月 7 日提交）研究 6G 通感一体化（ISAC）特有的安全问题：恶意接收机通过伪造波束质量/信道状态反馈，诱导发射机主瓣指向自己，既窃取能量又抬高合法用户的干扰。场景为射线追踪的 28 GHz 城市微蜂窝（多特蒙德市中心，3GPP UMi，两个 4×8 阵列发射机，四个接收机中一个为攻击者）。

防御由三层组成。贝叶斯信念跟踪基于观测到的反馈一致性维护每用户攻击概率。博弈论层将这些信念嵌入发射机效用函数（U = Σ(1−Pj)Cj − β·Pj·Cj），并比较两种结构：两发射机独立最优响应的纳什形式，以及服务更多用户的发射机先行、另一台跟随的 Stackelberg 形式。层级结构影响巨大：纳什形式的检测精度仅 38.4%（不协调的干扰扰乱了贝叶斯估计器），而 Stackelberg 达到 69.4%。最后，Q-learning 选择波束角度（每天线 25 个离散角度），博弈输出同时塑造状态（嫌疑节点 + 量化置信度）和探索策略（由 Stackelberg 预测引导的 ε-贪婪而非均匀随机）；引入基于记忆的经验回放后检测率升至 75.5%、吞吐升至 934 Mbps（较无记忆版本 +11%），系统在活跃攻击者存在下仍维持约 2.5 Gbps 总容量。

## Key technical points (EN)

- Threat model: falsified beam-quality/CSI feedback steering mmWave main lobes toward the adversary (feedback-integrity attack, not jamming).
- Bayesian belief vector over users, quantised to 5 confidence levels, embedded in the RL state.
- Stackelberg (leader-follower) vs Nash: detection 69.4% vs 38.4% — coordination structure, not the learner, is the dominant factor.
- Q-learning with game-guided ε-greedy exploration; memory/experience replay adds +5pp detection, +11% throughput (934 Mbps).
- Ray-traced 3GPP UMi evaluation at 28 GHz / 400 MHz, Dortmund downtown geometry.

## Key technical points (ZH)

- 威胁模型：伪造波束质量/CSI 反馈把毫米波主瓣引向攻击者（反馈完整性攻击，非干扰攻击）。
- 用户级贝叶斯信念向量，量化为 5 个置信等级，嵌入 RL 状态。
- Stackelberg（领导者-跟随者）对比纳什：检测率 69.4% 对 38.4%——起决定作用的是协调结构而非学习器本身。
- 博弈引导 ε-贪婪探索的 Q-learning；记忆/经验回放带来 +5 个百分点检测率、+11% 吞吐（934 Mbps）。
- 28 GHz / 400 MHz 射线追踪 3GPP UMi 评估，多特蒙德市中心几何。

## Why it matters / what's new (EN)

ISAC security work in the KB has focused on sensing-privacy and waveform leakage; this is the first entry on feedback-integrity attacks against beam management — an attack surface that gets sharper as 6G couples sensing and communication decisions to user-reported measurements. The headline lesson generalises beyond the specific learner: the coordination topology between base stations (Stackelberg hierarchy) contributed a bigger detection gain (~31pp) than the RL refinement (~5pp), which speaks directly to the KB's 6G sensing-security thread (cf. 2607.06115's own contrast with the distributed-RL urban beamforming entry lineage). Note the modest absolute numbers: even the best variant misses ~25% of attacks — beam-feedback authentication at the protocol layer remains an open gap.

## Why it matters / what's new (ZH)

KB 中的 ISAC 安全工作此前集中在感知隐私与波形泄露；这是第一条关于针对波束管理的反馈完整性攻击的条目——随着 6G 将感知与通信决策耦合到用户上报的测量值，这一攻击面会愈发尖锐。核心教训超越具体学习器：基站间协调拓扑（Stackelberg 层级）贡献的检测增益（约 31 个百分点）远大于 RL 精化（约 5 个百分点），这与 KB 的 6G 感知安全线索直接相关。也要注意绝对数字仍然有限：最佳变体仍漏检约 25% 的攻击——协议层的波束反馈认证仍是开放缺口。
