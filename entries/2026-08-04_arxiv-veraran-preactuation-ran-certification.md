---
id: 2026-08-04_arxiv-veraran-preactuation-ran-certification
date_published: 2026-08-02
date_found: 2026-08-04
type: academic-paper
technology: cellular
title_en: "VeraRAN: Pre-Actuation Certification and Event-Causal Synchronization Repair for Asynchronous Multi-Interface RAN Plans"
title_zh: "VeraRAN：异步多接口 RAN 计划的执行前认证与事件因果同步修复"
url: "https://arxiv.org/abs/2608.01047"
source_quality: full
topics: [O-RAN, AI-RAN, formal-verification, E2, A1, O1]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

VeraRAN (Hou & Yang, submitted 2026-08-02) attacks a safety gap that becomes acute as LLM planners start driving RAN controllers: a plan whose every command is individually valid, and whose final state is safe, can still traverse unsafe *intermediate* states when its actions execute asynchronously across the E2, A1, and O1 interfaces. Feeding a 35B-parameter language-model planner (Qwen) with RAN planning tasks, the authors measure that 28.8% of locally-valid plans are asynchronously unsafe — a striking number that turns "the plan passed validation" into a false comfort.

The mechanism, VeraSync, models each action's full lifecycle as six events — REQUEST, DELIVERY, ACCEPT, authoritative APPLY, mechanism COMPLETE, independent OBSERVE — with bounded delays and causal relations, explicitly distinguishing transport acknowledgements from authoritative state transitions (live E2 measurements show ACCEPT-to-APPLY separations of 0.455–50.9 ms median, so treating an ACK as "done" is measurably wrong). Verification explores delay scenarios and event orderings; when it finds an unsafe trajectory, counterexample-driven repair synthesises *versioned event barriers* from registered templates (e.g. "recipient quota APPLY must precede donor quota REQUEST") and re-verifies. To keep exploration tractable, MI-POR — a multi-interface partial-order reduction using RAN-specific lifecycle/resource/evidence footprints — prunes 94.6–95.0% of explored states on 20–40-action plans and cuts median verification time 37.7–40.9×.

Across a 144-plan benchmark (six families, 4–30 actions, handover/quota on E2, policy on A1, cell-sleep on O1), all plans certify after repair while leaving 87–89% of action pairs unordered — i.e. the repair adds only the ordering that safety actually requires. Evaluation spans ns-O-RAN simulation and a live OCUDU E2SM-RC deployment.

## Summary (ZH)

VeraRAN（Hou 与 Yang，2026-08-02 提交）针对的是随 LLM 规划器开始驱动 RAN 控制器而日益尖锐的安全缺口：即使计划中每条命令各自有效、最终状态安全，其动作在 E2、A1、O1 接口上异步执行时仍可能穿越不安全的*中间*状态。作者用 35B 参数的语言模型规划器（Qwen）生成 RAN 计划，测得 28.8% 的局部有效计划在异步执行下不安全——这一数字使"计划通过了校验"成为虚假的安心。

其机制 VeraSync 将每个动作的完整生命周期建模为六个事件——REQUEST、DELIVERY、ACCEPT、权威 APPLY、机制 COMPLETE、独立 OBSERVE——带有界时延与因果关系，并显式区分传输层确认与权威状态迁移（实测 E2 上 ACCEPT 到 APPLY 的中位间隔为 0.455–50.9 ms，把 ACK 当作"已完成"是可测量的错误）。验证器探索时延场景与事件排序；发现不安全轨迹时，反例驱动的修复从注册模板合成*带版本的事件屏障*（如"接收方配额的 APPLY 必须先于捐出方配额的 REQUEST"）并重新验证。为保持可解性，MI-POR——利用 RAN 特定生命周期/资源/证据足迹的多接口偏序归约——在 20–40 动作计划上剪除 94.6–95.0% 的探索状态，中位验证时间缩短 37.7–40.9 倍。

在 144 个计划的基准（六个家族，4–30 个动作，E2 上的切换/配额、A1 策略、O1 小区休眠）上，所有计划经修复后均获认证，同时保留 87–89% 的动作对无序——即修复只添加安全真正需要的排序。评估覆盖 ns-O-RAN 仿真与真实 OCUDU E2SM-RC 部署。

## Key technical points (EN)

- Measured gap: 28.8% of locally-valid LLM-generated RAN plans are asynchronously unsafe (35B-model study) — validity of individual commands does not compose.
- Six-event action lifecycle (REQUEST/DELIVERY/ACCEPT/APPLY/COMPLETE/OBSERVE) with bounded delays; transport ACK explicitly not release authority; live E2 ACCEPT→APPLY medians 0.455–50.9 ms.
- Counterexample-driven repair synthesises versioned event barriers gated on action identity, target scope, version, and epoch; re-verifies after insertion.
- MI-POR partial-order reduction with RAN lifecycle/resource semantics: 94.6–95.0% state pruning, 37.7–40.9× median verification speed-up.
- 144-plan benchmark certified with 87–89% of action pairs left unordered; ns-O-RAN + live OCUDU E2SM-RC validation.
- Positioning: pre-actuation certification versus post-hoc conflict detection (PACIFISTA, COMIX) and versus SDN consistent-update work (NICE, Dionysus) that lacks authoritative external lifecycle evidence.

## Key technical points (ZH)

- 实测缺口：局部有效的 LLM 生成 RAN 计划中 28.8% 异步不安全（35B 模型研究）——单条命令的有效性不可组合。
- 六事件动作生命周期（REQUEST/DELIVERY/ACCEPT/APPLY/COMPLETE/OBSERVE）带有界时延；传输 ACK 明确不作为放行依据；实测 E2 ACCEPT→APPLY 中位间隔 0.455–50.9 ms。
- 反例驱动修复合成带版本的事件屏障，按动作身份、目标范围、版本与纪元门控；插入后重新验证。
- 具备 RAN 生命周期/资源语义的 MI-POR 偏序归约：状态剪枝 94.6–95.0%，中位验证提速 37.7–40.9 倍。
- 144 计划基准全部认证且 87–89% 动作对保持无序；ns-O-RAN 仿真 + 真实 OCUDU E2SM-RC 验证。
- 定位：执行前认证，区别于事后冲突检测（PACIFISTA、COMIX）与缺少权威外部生命周期证据的 SDN 一致性更新工作（NICE、Dionysus）。

## Why it matters / what's new (EN)

This is the missing safety layer for the AI-RAN actuation thread the KB has been tracking: 2026-08-03_arxiv-creact-oran-forensic-triage-agent diagnoses failures *after* they happen, the xApp-conflict taxonomy entry (2026-08-03 window) catalogues *what* conflicts, and MAC-Gyver opens the MAC to programmable agents — VeraRAN is the first entry that certifies agent-issued plans *before* they touch the network, with the asynchrony-aware lifecycle model as the genuinely new piece. The 28.8% unsafe-plan rate is the most concrete quantitative argument yet that LLM planners need a verification shim, not just better prompts. Watch for this framing (authoritative-evidence barriers, not ACK-gated release) to surface in O-RAN Alliance WG3 discussions around RIC conflict mitigation.

## Why it matters / what's new (ZH)

这是本 KB 持续跟踪的 AI-RAN 执行线索中缺失的安全层：2026-08-03_arxiv-creact-oran-forensic-triage-agent 在故障*发生后*诊断，xApp 冲突分类条目（2026-08-03 窗口）归纳*何种*冲突，MAC-Gyver 向可编程智能体开放 MAC——VeraRAN 则是第一个在智能体计划*触网前*进行认证的条目，其感知异步性的生命周期模型是真正的新元素。28.8% 的不安全计划率是迄今最具体的量化论据：LLM 规划器需要验证垫层，而不仅是更好的提示词。关注这一框架（基于权威证据的屏障而非 ACK 门控放行）是否会出现在 O-RAN 联盟 WG3 关于 RIC 冲突缓解的讨论中。

## Images

![VeraRAN architecture: pre-actuation verification, barrier repair, MI-POR | VeraRAN 架构：执行前验证、屏障修复与 MI-POR](https://arxiv.org/html/2608.01047v1/x1.png)
![Local validity risk and repair baselines | 局部有效性风险与修复基线对比](https://arxiv.org/html/2608.01047v1/x2.png)
![MI-POR state and verification-time reduction | MI-POR 状态与验证时间缩减](https://arxiv.org/html/2608.01047v1/x4.png)
