---
id: 2026-08-03_arxiv-macgyver-airan-scheduler-framework
date_published: 2026-07-28
date_found: 2026-08-03
type: academic-paper
technology: cellular
title_en: "MAC-Gyver: open programmable MAC scheduling for AI-RAN — pluggable OAI scheduler interfaces plus a 90-UE real-time PHY-less emulator"
title_zh: "MAC-Gyver：面向 AI-RAN 的开放可编程 MAC 调度——可插拔 OAI 调度器接口与 90 用户实时无 PHY 仿真器"
url: "https://arxiv.org/abs/2607.26012"
source_quality: abstract_only
topics: [AI-RAN, MAC-scheduler, OpenAirInterface, 6G, open-source]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

MAC-Gyver (Elkael, Prasad, Aghayev, D'Oro, Polese, Melodia — the Northeastern University AI-RAN group; submitted 28 July 2026) is an open-source framework for making the 5G/6G MAC scheduler a programmable, AI-pluggable component. The authors argue the MAC scheduler is the highest-leverage target for AI in the RAN: it allocates spectrum every slot under competing latency, throughput, and reliability requirements, yet in production stacks it remains a monolithic, vendor-locked block.

The framework introduces typed interfaces into OpenAirInterface's scheduler so that custom or learned scheduling policies can be swapped in without forking the L2 stack. The companion tool, mac-emu, is a PHY-less emulator that runs the *unmodified* OAI Layer 2 for up to 90 users on a single host at real-time slot pace against a 3GPP-compliant channel model — filling the gap between slow full-stack simulation and expensive over-the-air testing for scheduler research and AI-policy training.

Two use cases demonstrate the loop: a proactive uplink scheduler that roughly halves median round-trip latency versus the baseline grant cycle, and a frequency-selective uplink scheduler evaluated across operating conditions against optimal scheduling benchmarks.

## Summary (ZH)

MAC-Gyver（Elkael、Prasad、Aghayev、D'Oro、Polese、Melodia——美国东北大学 AI-RAN 团队；2026 年 7 月 28 日提交）是一个开源框架，旨在把 5G/6G MAC 调度器变成可编程、可插拔 AI 的组件。作者认为 MAC 调度器是 RAN 中 AI 杠杆最大的位置：它在时延、吞吐、可靠性相互竞争的约束下逐时隙分配频谱，但在商用协议栈中仍是铁板一块、厂商锁定的模块。

该框架在 OpenAirInterface 调度器中引入类型化接口，使自定义或学习得到的调度策略可以在不分叉 L2 协议栈的前提下替换。配套工具 mac-emu 是无 PHY 仿真器，可在单机上以实时时隙节奏运行未经修改的 OAI 二层协议栈、支撑多达 90 个用户，并配 3GPP 兼容信道模型——填补了「全栈仿真太慢、空口测试太贵」之间的调度器研究与 AI 策略训练空档。

两个用例演示了闭环：一个主动式上行调度器将中位往返时延约减半（相对基线授权周期），一个频选上行调度器在多种工况下对照最优调度基准完成评估。

## Key technical points (EN)

- Typed, pluggable scheduler interfaces inside OpenAirInterface L2 — swap scheduling policies without forking the stack.
- mac-emu: PHY-less emulation of the unmodified OAI L2, up to 90 UEs in real-time slot pace on one host, 3GPP-compliant channel model.
- Proactive UL scheduler use case: ~50% median RTT reduction; frequency-selective UL scheduler benchmarked against optimal allocations.
- Open-source; aimed at AI-policy training loops (the mac-emu pace makes RL-in-the-loop feasible).

## Key technical points (ZH)

- OpenAirInterface 二层内的类型化可插拔调度器接口——无需分叉协议栈即可替换调度策略。
- mac-emu：对未修改 OAI 二层的无 PHY 仿真，单机实时时隙节奏支撑至多 90 UE，3GPP 兼容信道模型。
- 主动式上行调度器用例：中位 RTT 约降 50%；频选上行调度器对照最优分配基准评测。
- 开源；面向 AI 策略训练闭环（mac-emu 的速度使在环强化学习可行）。

## Why it matters / what's new (EN)

This is the cellular twin of what Kom8ndor (2026-06-26_arxiv-kom8ndor-wifi8-simulator) did for Wi-Fi 8 research: an open eval-and-training engine that lowers the barrier for AI-native protocol work. It also complements the KB's AI-RAN thread — O-RAN R005's AI/ML workflow services (2026-07-05_oran-alliance-release-5-completed) standardize where models live, Nokia's AI-RAN platform (2026-07-19) productizes the GPU substrate, and MAC-Gyver supplies the missing open research tooling at the slot-level scheduling layer where AI gains are most direct. The Northeastern group (D'Oro/Polese/Melodia) is the same lab behind much of the open O-RAN tooling the KB already tracks, making this a reliable-source signal as well.

## Why it matters / what's new (ZH)

这相当于 Kom8ndor（2026-06-26_arxiv-kom8ndor-wifi8-simulator）在 Wi-Fi 8 研究中的角色在蜂窝侧的对应物：一个降低 AI 原生协议研究门槛的开放评测与训练引擎。它同时补全了本库的 AI-RAN 主线——O-RAN R005 的 AI/ML 工作流服务（2026-07-05_oran-alliance-release-5-completed）标准化了模型的位置，诺基亚 AI-RAN 平台（2026-07-19）将 GPU 底座产品化，而 MAC-Gyver 在 AI 收益最直接的时隙级调度层补上了缺失的开放研究工具。东北大学团队（D'Oro/Polese/Melodia）正是本库已追踪的多数开放 O-RAN 工具背后的实验室，这也是一个来源可靠性信号。
