---
id: 2026-07-28_arxiv-twin-fidelity-xapp-conflict-oran
date_published: 2026-07-24
date_found: 2026-07-28
type: academic-paper
technology: cellular
title_en: "Twin-Fidelity-Aware Resolution of Direct xApp Conflicts in Open RAN — a training-free arbiter that stops trusting a drifting digital twin"
title_zh: "开放 RAN 中直接 xApp 冲突的孪生保真度感知消解——不再盲信漂移数字孪生的免训练仲裁器"
url: "https://arxiv.org/abs/2607.22857"
source_quality: full
topics: [O-RAN, xApp, digital-twin, RIC, conflict-resolution]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Almohammedi, Balfaqih, Darshi, Langar and Jaafar (arXiv 2607.22857, submitted Jul-24-2026) tackle *direct conflicts* in Open RAN: independent xApps on the Near-RT RIC issuing incompatible values for the same control parameter — here, downlink transmit power contested between an energy-saving xApp and a coverage/throughput xApp, encoded as a blend weight α ∈ [0,1]. State-of-the-art resolvers (COMIX-style) rank candidate actions with a network digital twin (NDT) — and implicitly assume the twin stays accurate.

The paper's contribution is a lightweight, training-free runtime arbiter that explicitly monitors twin fidelity: an EWMA (β=0.70) of the mismatch between twin-predicted and live-observed utility. While the error stays below threshold, the arbiter follows the twin's ranking; when it crosses, it hard-switches to a live-validated fallback action (hard switching deliberately avoids interpolating through poor intermediate actions on non-monotonic utility landscapes). Complexity is O(21) twin queries per control step with O(1) storage, requiring no retraining, no external coordination, and no modification to the conflicting xApps.

In a 7-cell hexagonal scenario (2.5 GHz, 10 MHz, 42 UEs, 20 seeds), the arbiter achieves normalized utility regret 0.017 ± 0.006 versus 0.159 ± 0.052 for the blind-twin COMIX-style baseline. The gap explodes under twin drift: at 10 dB modeled drift, 0.55 ± 0.25 regret versus 11.19 ± 3.58 — more than 20× worse for the blind baseline — while QoS satisfaction stays comparable to QoS-optimized baselines.

## Summary (ZH)

Almohammedi、Balfaqih、Darshi、Langar 与 Jaafar（arXiv 2607.22857，2026-07-24 提交）研究开放 RAN 中的*直接冲突*：Near-RT RIC 上相互独立的 xApp 对同一控制参数下发不兼容的取值——本文中是节能 xApp 与覆盖/吞吐 xApp 争夺下行发射功率，编码为混合权重 α ∈ [0,1]。现有最优消解器（COMIX 类）用网络数字孪生（NDT）为候选动作排序——并隐含假设孪生始终准确。

论文贡献是一个轻量、免训练的运行时仲裁器，显式监测孪生保真度：对孪生预测效用与实测效用之间失配做 EWMA 平滑（β=0.70）。误差低于阈值时跟随孪生排序；越过阈值时硬切换到经实测验证的回退动作（在非单调效用面上刻意避免经过糟糕中间动作的插值）。每控制步复杂度 O(21) 次孪生查询、O(1) 存储，无需重训练、无需外部协调、无需修改冲突 xApp。

在 7 小区六边形场景（2.5 GHz、10 MHz、42 UE、20 个随机种子）中，归一化效用后悔值为 0.017 ± 0.006，而盲信孪生的 COMIX 类基线为 0.159 ± 0.052。孪生漂移下差距急剧放大：10 dB 漂移时为 0.55 ± 0.25 对 11.19 ± 3.58——盲信基线劣化超过 20 倍——同时 QoS 满足率与面向 QoS 优化的基线相当。

## Key technical points (EN)

- Direct-conflict setting: two xApps contest DL transmit power; action = blend α ∈ [0,1] between energy-saving (α=0) and coverage/throughput (α=1); 21 candidate actions per interval.
- Fidelity signal: ε_t = β·ε_{t−1} + (1−β)·e_t with β=0.70 over twin-vs-live utility mismatch; threshold crossing triggers hard switch to live-validated fallback.
- Training-free, O(|A|) per step, no xApp modification — contrasts with Safety Copilot / AIDITA robustness that needs model retraining or continuous alignment.
- Results: regret 0.017 vs 0.159 (COMIX-style) drift-free; 0.55 vs 11.19 at 10 dB twin drift; QoS satisfaction 0.740 ± 0.061.
- Assumptions: calibrated warm-up, slowly varying optimum, twin query budget of all 21 candidates per interval.

## Key technical points (ZH)

- 直接冲突设定：两个 xApp 争夺下行发射功率；动作为节能（α=0）与覆盖/吞吐（α=1）之间的混合权重 α ∈ [0,1]；每区间 21 个候选动作。
- 保真度信号：对孪生预测与实测效用失配做 ε_t = β·ε_{t−1} + (1−β)·e_t（β=0.70）；越过阈值即硬切换到实测验证回退动作。
- 免训练、每步 O(|A|)、不修改 xApp——与需要模型重训练或持续对齐的 Safety Copilot / AIDITA 鲁棒方案形成对比。
- 结果：无漂移时后悔值 0.017 对 0.159（COMIX 类）；10 dB 孪生漂移时 0.55 对 11.19；QoS 满足率 0.740 ± 0.061。
- 假设：校准预热期、最优动作缓变、孪生每区间可评估全部 21 个候选。

## Why it matters / what's new (EN)

This is the KB's first xApp *conflict-resolution* entry — the open-ran bin so far covered testbeds (RANPilot), energy optimization (BeGREEN), and link adaptation, but not the arbitration layer that decides between contradictory xApp commands. It is also the first entry to treat digital-twin *unreliability* as a first-class runtime signal rather than an offline calibration concern, which the authors claim is a first for direct conflict resolution. The result lands as O-RAN digital-twin usage grows across the KB's cellular-ai thread (world-model network control, 2026-07-22), and its drift-robustness argument generalises to any twin-in-the-loop RIC control.

## Why it matters / what's new (ZH)

这是 KB 中首个 xApp *冲突消解*条目——open-ran 主题此前覆盖测试床（RANPilot）、能耗优化（BeGREEN）与链路自适应，但未涉及在相互矛盾的 xApp 指令间做裁决的仲裁层。它也是首个将数字孪生*不可靠性*作为一级运行时信号（而非离线校准问题）处理的条目，作者称这在直接冲突消解中是首创。在 KB 蜂窝 AI 主线中数字孪生用量持续增长（世界模型网络控制，2026-07-22）的背景下，其抗漂移论证可推广到任何孪生在环的 RIC 控制。
