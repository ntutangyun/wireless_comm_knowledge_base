---
id: 2026-11-10_ieee-mentor-wng-ns-3-ai-multi-agent-update-mlo-sr-examples-dcn-2318
date_published: 2026-11-09
date_found: 2026-11-10
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WNG SC: ns-3-ai update - multi-agent workflow and tutorial with MLO and spatial-reuse examples (DCN 11-26-2318r0, University of Washington)"
title_zh: "IEEE 802.11 WNG SC：ns-3-ai 更新——多智能体工作流与教程，含 MLO 与空间复用示例（DCN 11-26-2318r0，华盛顿大学）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2318"
source_quality: full
topics: [ns-3-ai, WNG, AI for Wi-Fi, MLO, spatial reuse, Co-SR, reinforcement learning, bandit]
topic_primary: ai-for-wifi
topics_secondary: [mlo, mapc-cosr]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2318r0, "ns-3-ai update: multi-agent workflow and tutorial", is a 24-slide WNG SC deck by Muyuan Shen and Sumit Roy (University of Washington); the title slide is dated 2026-11-05 and the file was uploaded on 9 November 2026 at 04:33 ET. It presents a reusable multi-agent workflow added to ns-3-ai, the shared-memory bridge between ns-3 simulations and Python learning code, together with bundled tutorials. The deck traces the tool's lineage (original ns-3-ai from HUST-diangroup; a DEFIANCE-maintained fork with multi-agent support, independent decision times and delayed actions, selected by the ns-3-allinone 3.48 manifest; and this update's helpers for scheduling measurements, reports, decisions and actions with a network controller sharing reports and rewards).

Four worked examples show how objectives, measurements and timing shape the algorithm. (1) MLO link selection for low latency with four STA agents and coordinated Q-learning, targeting at most 1% deadline misses per latency-sensitive STA: Q-learning reaches 0.73% misses with 15 of 16 samples meeting the 1% target (all runs include learning). (2) MLO MPDU allocation under a shared Block Ack window with one sender agent, using feedback or regression to bound fresh frames per link: regression 3.29 ms and feedback 4.20 ms mean delivery, both better than four fixed references, with the difference described as inconclusive (64 samples). (3) Spatial reuse with joint OBSS-PD and transmit-power choice, four AP agents and Thompson sampling: 0.56 ms versus 0.65 ms for independent learning, 13.44% lower mean delay over 32 deployments. (4) Shared-TXOP Co-SR with four AP agents and a UCB policy over at most seven choices: 19.10% deadline misses versus 33.93% for queue sharing and 42.76% for EDCA (32 samples, 5 ms deadline, modeled coordination costs).

The closing slides give a four-step workflow (define, connect, share, compare), setup commands for a multi-agent A+B lesson, and a WNG discussion prompt asking which Wi-Fi control problems and which multi-link or multi-AP use cases should be added as ns-3-ai examples. The project repository is listed as gitlab.com/uw-ns3-research/ns-3-ai.

## Summary (ZH)

DCN 11-26-2318r0《ns-3-ai update: multi-agent workflow and tutorial》是 Muyuan Shen 与 Sumit Roy（华盛顿大学）的 24 页 WNG SC 文稿；标题页日期为 2026-11-05，文件于 2026 年 11 月 9 日美东 04:33 上传。文稿介绍了加入 ns-3-ai 的可复用多智能体工作流及配套教程；ns-3-ai 是连接 ns-3 仿真与 Python 学习代码的共享内存桥。文稿回顾了该工具的沿革（HUST-diangroup 的原版 ns-3-ai；DEFIANCE 维护、支持多智能体、独立决策时刻与延迟动作的分支，已被 ns-3-allinone 3.48 清单选用；以及本次更新用于调度测量、上报、决策与动作执行，并由网络控制器共享上报与奖励的辅助组件）。

四个示例说明目标、测量与时序如何影响算法设计。（1）低时延 MLO 链路选择：4 个 STA 智能体与协同 Q-learning，目标为每个时延敏感 STA 的截止期错失率不超过 1%；Q-learning 达到 0.73% 错失率，16 个样本中 15 个满足 1% 目标（所有运行均含学习过程）。（2）共享 Block Ack 窗口下的 MLO MPDU 分配：单发送端智能体，用反馈或回归限定每条链路的新帧数；回归平均递送时延 3.29 ms、反馈 4.20 ms，均优于四种固定基线，二者差异被描述为不确定（64 个样本）。（3）联合 OBSS-PD 与发射功率选择的空间复用：4 个 AP 智能体与 Thompson 采样；平均时延 0.56 ms，对比独立学习的 0.65 ms，32 个部署下降低 13.44%。（4）共享 TXOP 的 Co-SR：4 个 AP 智能体，UCB 策略，至多 7 种选择；截止期错失率 19.10%，对比队列共享的 33.93% 与 EDCA 的 42.76%（32 个样本，5 ms 截止期，含建模的协调开销）。

末尾几页给出四步工作流（定义、连接、共享、比较）、多智能体 A+B 课程的安装运行命令，以及向 WNG 提出的讨论问题：应把哪些 Wi-Fi 控制问题、哪些多链路或多 AP 用例加入 ns-3-ai 示例。项目仓库列为 gitlab.com/uw-ns3-research/ns-3-ai。

## Key technical points (EN)

- Multi-agent helpers retain the Boost shared-memory, protobuf and pybind11 toolchain; agents attach to ns-3 nodes, channels or applications with C++ observation/action hooks and a registered Python policy.
- MLO link selection (STR vs EMLSR actions, 20 ms reports, capacity screening leaves six joint choices): coordinated Q-learning 0.73% deadline misses.
- MLO shared Block Ack window (256 entries): feedback vs regression bounds on fresh frames per link; 3.29 ms (regression) vs 4.20 ms (feedback) mean delivery, difference inconclusive.
- SR joint OBSS-PD/power (4 power x OBSS-PD pairs, 16 joint choices): Thompson sampling 0.56 ms vs 0.65 ms independent, 13.44% lower mean delay.
- Shared-TXOP Co-SR (send alone or pick a neighbor AP and one of its STAs): UCB 19.10% misses vs 33.93% queue sharing and 42.76% EDCA.
- Setup uses ns-3.49, Poisson arrivals, 1500-byte payloads, two spatial streams, 800 ns GI; shared-TXOP Co-SR needs a supplied ns-3.49 helper patch.

## Key technical points (ZH)

- 多智能体辅助组件沿用 Boost 共享内存、protobuf 与 pybind11 工具链；智能体可关联到 ns-3 的节点、信道或应用，通过 C++ 观测/动作钩子和注册的 Python 策略工作。
- MLO 链路选择（STR 与 EMLSR 动作，20 ms 上报，容量筛选后剩 6 种联合选择）：协同 Q-learning 截止期错失率 0.73%。
- MLO 共享 Block Ack 窗口（256 项）：以反馈或回归限定每链路新帧数；平均递送时延回归 3.29 ms、反馈 4.20 ms，差异不确定。
- SR 联合 OBSS-PD/功率（4 个功率与 OBSS-PD 组合，16 种联合选择）：Thompson 采样 0.56 ms，对比独立学习 0.65 ms，平均时延降低 13.44%。
- 共享 TXOP 的 Co-SR（独自发送，或选择邻居 AP 及其一个 STA）：UCB 错失率 19.10%，对比队列共享 33.93% 与 EDCA 42.76%。
- 设置采用 ns-3.49、泊松到达、1500 字节载荷、两空间流、800 ns GI；共享 TXOP 的 Co-SR 需提供的 ns-3.49 辅助补丁。

## Why it matters / what's new (EN)

The contribution packages learned MAC-control examples (MLO link choice, Block Ack window allocation, OBSS-PD/power selection, shared-TXOP Co-SR partner choice) as a reproducible simulator workflow with packet-level traces, and asks the WNG SC which further control problems to add. The numbers are simulation results from the deck's own configurations and include learning time; the deck itself marks the regression-versus-feedback difference as inconclusive. It complements the KB's AI-for-Wi-Fi and Co-SR entries, such as 2026-10-28_arxiv-sample-and-score-surrogate-guided-co-sr-80211bn.

## Why it matters / what's new (ZH)

该贡献把学习式 MAC 控制示例（MLO 链路选择、Block Ack 窗口分配、OBSS-PD/功率选择、共享 TXOP 的 Co-SR 伙伴选择）打包为可复现的仿真工作流并附带包级轨迹，同时向 WNG SC 征询还应加入哪些控制问题。文中数字来自文稿自身配置的仿真结果且包含学习时间；文稿自己也将回归与反馈的差异标为不确定。它与本知识库中 AI-for-Wi-Fi 与 Co-SR 的条目互补，例如 2026-10-28_arxiv-sample-and-score-surrogate-guided-co-sr-80211bn。

## Images

None.
