---
id: 2026-11-16_arxiv-topology-aware-handover-ppo-leo-service-continuity
date_published: 2026-11-12
date_found: 2026-11-16
technology: satellite
type: academic-paper
title_en: "Topology-Aware Handover Management for Service Continuity in LEO Satellite Networks"
title_zh: "面向 LEO 卫星网络业务连续性的拓扑感知切换管理"
url: "https://arxiv.org/abs/2611.16878"
source_quality: full
topics: [LEO, handover, PPO, reinforcement learning, feeder link, core network, service continuity]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Han, Khan, Seeram and Cavdar (KTH Royal Institute of Technology; arXiv cs.NI, 12 Nov 2026) address handover (HO) in LEO networks, where fixed HO margin and time-to-trigger thresholds adapt poorly and where earlier reinforcement-learning work ignores how satellite-to-ground-station (GS) connectivity changes HO interruption time. They define three HO topologies (A, B, C) that differ in the GS feeder-link association and where core functions sit, each with its own signalling delay, and minimise HO count and cumulative HO delay jointly.

A PPO agent observes up to eight candidate satellites (received power, elevation, GS association, remaining visibility) plus association history and picks the target satellite; the reward penalises topology-dependent delay, closely spaced HOs, and infeasible choices, radio link failure or coverage gaps. A least-delay (LD) selection rule is the second baseline. The paper is a preprint with no stated venue.

## Summary (ZH)

Han、Khan、Seeram 与 Cavdar（瑞典皇家理工学院 KTH；arXiv cs.NI，2026 年 11 月 12 日）研究 LEO 网络的切换（HO）：固定的切换余量与触发时间门限适应性差，而此前的强化学习工作忽略了卫星与地面站（GS）的连接关系如何改变切换中断时间。作者定义了三种切换拓扑（A、B、C），它们在 GS 馈电链路关联与核心网功能部署位置上不同，各有自己的信令时延，并联合最小化切换次数与累计切换时延。

PPO 智能体观测至多八颗候选卫星（接收功率、仰角、GS 关联、剩余可见时间）及关联历史，选择目标卫星；奖励对拓扑相关时延、间隔过近的切换以及不可行选择、无线链路失败或覆盖空洞进行惩罚。最小时延（LD）选择规则作为第二个基线。该文为预印本，未注明发表场所。

## Key technical points (EN)

- Scenario: Starlink-like constellation of 1,584 satellites in 72 planes at 550 km, 53 degrees inclination; four European GSs (GS 1 and 4 host AMF and UPF, two feeder links each); one urban UE at about 45.78 N, 1.75 E; 20 GHz carrier, EIRP 53.5 dBW, receive gain 20 dBi, received-power threshold -109 dBW; UE minimum elevation 40 degrees; 1 s slots, 1,200-slot window.
- Delay model: 20 ms synchronisation, 50 ms core, 1 ms per-message processing.
- Baselines: O-HT (HO margin 15 dB, TTT 1 s, highest-RSRP selection, no topology awareness) and LD (same thresholds, lowest predicted HO delay).
- Reported results at 40 degrees: availability 99.32% (1.67 points above O-HT, 1.41 above LD); RLF duration cut 85.7% versus O-HT and 85.0% versus LD; cumulative HO delay 5.21 s versus 5.04 s for LD and 7.14 s for O-HT.
- Elevation sensitivity: availability stays above 97.52% up to 55 degrees, then falls to 47.44% at 70 degrees due to coverage gaps (policy trained at 40 degrees, not retrained).
- HO-weight sweep: availability falls from 99.63% to 95.91% as the HO weight rises from 0.5 to 2.5, with RLF duration rising from 1 s to 29 s.
- Stated limitations: single urban scenario and one UE location, clear-sky line-of-sight with ideal beam steering, inter-satellite HOs only, residual RLFs from shadow fading.

## Key technical points (ZH)

- 场景：类 Starlink 星座，1,584 颗卫星、72 个轨道面、550 km、倾角 53 度；四个欧洲 GS（GS 1 与 4 部署 AMF 与 UPF，各有两条馈电链路）；一个城区 UE，约 45.78°N、1.75°E；20 GHz 载波，EIRP 53.5 dBW，接收增益 20 dBi，接收功率门限 -109 dBW；UE 最小仰角 40 度；时隙 1 s，窗口 1,200 个时隙。
- 时延模型：同步 20 ms，核心网 50 ms，每条消息处理 1 ms。
- 基线：O-HT（切换余量 15 dB、TTT 1 s、选择 RSRP 最高者，无拓扑感知）与 LD（相同门限，选择预测切换时延最低者）。
- 40 度下的结果：可用性 99.32%（比 O-HT 高 1.67 个百分点，比 LD 高 1.41）；RLF 时长相比 O-HT 减少 85.7%、相比 LD 减少 85.0%；累计切换时延 5.21 s，LD 为 5.04 s，O-HT 为 7.14 s。
- 仰角敏感性：至 55 度可用性保持在 97.52% 以上，70 度时因覆盖空洞降至 47.44%（策略在 40 度训练，未重新训练）。
- 切换权重扫描：权重从 0.5 升至 2.5 时，可用性由 99.63% 降至 95.91%，RLF 时长由 1 s 增至 29 s。
- 作者承认的局限：仅单一城区场景与一个 UE 位置，晴空视距与理想波束指向，仅星间切换，阴影衰落仍造成残余 RLF。

## Why it matters / what's new (EN)

The paper makes the feeder-link/core-function topology an explicit input to learned LEO handover decisions rather than treating HO delay as uniform. Results come from a single simulated urban scenario.

## Why it matters / what's new (ZH)

本文将馈电链路/核心网功能拓扑作为学习型 LEO 切换决策的显式输入，而不是把切换时延视为均匀。结果来自单一仿真城区场景。

## Images

None.
