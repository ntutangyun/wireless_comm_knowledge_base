---
id: 2026-09-07_arxiv-cv-cci-conformal-inference-ran-control
date_published: 2026-09-04
date_found: 2026-09-07
type: academic-paper
technology: cellular
title_en: "CV-CCI: Confounding-Valid Conformal Inference for Counterfactual KPIs in Wireless Networks, Evaluated on Two RAN Control Tasks"
title_zh: "CV-CCI：面向无线网络反事实 KPI 的抗混杂保形推断，在两类 RAN 控制任务上验证"
url: "https://arxiv.org/abs/2609.05073"
source_quality: full
topics: [conformal-prediction, counterfactual-inference, hidden-confounding, RAN-control, MAC-scheduling, handover, KPI-prediction]
topic_primary: cellular-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Abdessamed Qchohi, Jessica Moysen Cortes and Matteo Zecchin (arXiv v1, 4 Sep 2026) address a validity problem in how network operators evaluate "what-if" questions about RAN control actions from logged telemetry. Conformal counterfactual inference produces prediction sets that, with a user-set probability, are meant to contain the KPI values that would have resulted under an alternative control action. The paper's motivating example is MAC-layer scheduling: a controller picks round-robin (RR) or proportional-fair channel-aware (PFCA) scheduling based on user backlog and the instantaneous available radio-resource budget, but logged telemetry typically records only user-level information and omits the resource-budget variable that actually drove the decision. This creates hidden confounding, which invalidates the statistical coverage guarantees of counterfactual analysis built on observational telemetry alone. The paper notes this can in principle be fixed with randomized telemetry (control actions assigned independently of network state), but because randomization disrupts normal network operation, such data is typically scarce and analysis based on it alone yields uninformative (overly wide) prediction sets.

The authors propose Confounding-Valid Counterfactual Conformal Inference (CV-CCI), built on a General Synthetic-Powered Inference (GESPI) principle that combines abundant, potentially confounded observational telemetry with a small amount of randomized telemetry. GESPI aggregates three outputs from a base conformal procedure: a reliable-data output computed from randomized telemetry alone at the nominal level, an auxiliary-powered output that combines randomized and observational data at the same level, and a guardrail output computed from randomized telemetry alone at a relaxed level. The final CV-CCI prediction set is the intersection of the reliable-data set with the union of the auxiliary-powered and guardrail sets, which the paper proves (Proposition 1) guarantees finite-sample coverage at the relaxed level under arbitrary hidden confounding, sandwiched between the guardrail set and the randomized-only set.

CV-CCI is evaluated on two representative RAN control tasks. The first is the MAC-layer scheduling scenario above, where the target KPI is the residual per-UE backlog vector after a scheduling decision and the hidden confounder is the omitted PRB-budget variable, with confounding strength swept via a parameter λ ∈ {0, 0.25, 0.5, 0.75, 1}. The second is a handover decision task: whether to keep a UE on its serving base station or hand it over to a neighboring one, where logged context carries historical RSS measurements from both base stations but omits the instantaneous load at the target base station (the hidden confounder), the target KPI is average throughput over a 10-TTI horizon, and confounding strength is swept over λ ∈ {0,2,4,6,8}. CV-CCI is compared against CCKE (which assumes no hidden confounding), wSCP-DR Inexact and wSCP-DR Exact (density-ratio-based confounding corrections), and a Guardrail-only baseline (CV-CCI's reliable-data component alone). Under strong confounding, CCKE and wSCP-DR Inexact both under-cover (dropping to roughly 0.78 and 0.67 coverage respectively on the scheduling task at λ=1, and to roughly 0.75 and 0.71 on the handover task at λ=8, against a nominal 0.90 target), while CV-CCI and the Guardrail baseline hold coverage near the nominal 0.90 level across the confounding range; wSCP-DR Exact restores validity but over-covers (inefficient, wider sets). Where CV-CCI improves on the plain Guardrail baseline is failure-rate efficiency: at the strict per-instance failure threshold (coverage below the guardrail level 1−α−ϵ), CV-CCI records a 30%→26% failure rate across the scheduling task's confounding sweep versus Guardrail's 47%→41%, and a 9%→13% failure rate on the handover task versus Guardrail's 18%→40%. The reported experimental setup uses 7,000 observational samples (5,000 training / 2,000 calibration), only 50 randomized samples, 1,000 test instances, nominal miscoverage α=0.1, guardrail tolerance ϵ=0.025, and 100 evaluation folds.

## Summary (ZH)

Abdessamed Qchohi、Jessica Moysen Cortes 与 Matteo Zecchin（arXiv v1，2026年9月4日）研究的是运营商依据日志遥测数据评估RAN控制动作"假设"问题时的有效性缺陷。反事实保形推断给出的预测集，本应以用户设定的概率包含在采用另一控制动作时本应观测到的KPI值。论文的引例是MAC层调度：控制器依据用户积压量与瞬时可用无线资源预算，在轮询（RR）与感知信道的比例公平（PFCA）调度之间做出选择，但日志遥测通常只记录用户层信息，遗漏了真正驱动该决策的资源预算变量。这造成了隐藏混杂，使仅基于观测性遥测数据构建的反事实分析统计覆盖保证失效。论文指出，原则上可通过随机化遥测（控制动作与网络状态独立分配）解决该问题，但由于随机化会扰乱网络正常运行，此类数据通常稀缺，仅依赖它进行分析会得到信息量不足（过宽）的预测集。

作者提出了抗混杂反事实保形推断（CV-CCI），建立在通用合成增强推断（GESPI）原则之上，将丰富但可能混杂的观测性遥测数据与少量随机化遥测数据相结合。GESPI聚合基础保形程序的三种输出：仅用随机化遥测数据、在名义水平下计算的可靠数据输出；结合随机化与观测数据、同一水平下的辅助增强输出；以及仅用随机化遥测数据、在放宽水平下计算的护栏输出。最终的CV-CCI预测集是可靠数据集合与（辅助增强集合∪护栏集合）的交集，论文（命题1）证明该集合在任意隐藏混杂下均能保证放宽水平下的有限样本覆盖，且被夹在护栏集合与纯随机化集合之间。

CV-CCI在两个代表性RAN控制任务上进行了评估。第一个是上述MAC层调度场景，目标KPI是调度决策后每UE的剩余积压向量，隐藏混杂因子是被遗漏的PRB预算变量，混杂强度通过参数λ∈{0, 0.25, 0.5, 0.75, 1}调节。第二个是切换决策任务：是否将UE保留在服务基站，或切换至邻近基站，日志上下文携带来自两个基站的历史RSS测量值，但遗漏了目标基站的瞬时负载（隐藏混杂因子），目标KPI是10个TTI窗口内的平均吞吐量，混杂强度在λ∈{0,2,4,6,8}范围内调节。CV-CCI与CCKE（假设无隐藏混杂）、wSCP-DR Inexact与wSCP-DR Exact（基于密度比的混杂校正方法）以及仅护栏基线（CV-CCI可靠数据组件单独使用）进行了比较。在强混杂下，CCKE与wSCP-DR Inexact均出现覆盖不足（在调度任务λ=1时分别降至约0.78与0.67覆盖率，在切换任务λ=8时分别降至约0.75与0.71，对照名义目标0.90），而CV-CCI与护栏基线在整个混杂范围内均将覆盖率维持在名义0.90附近；wSCP-DR Exact恢复了有效性但覆盖过度（效率低、预测集偏宽）。CV-CCI相对纯护栏基线的改进体现在失败率效率上：按严格的逐实例失败阈值（覆盖率低于护栏水平1−α−ϵ）计算，CV-CCI在调度任务混杂扫描范围内的失败率为30%→26%，而护栏基线为47%→41%；在切换任务上CV-CCI为9%→13%，护栏基线为18%→40%。报告的实验设置使用7,000个观测样本（5,000训练/2,000校准）、仅50个随机化样本、1,000个测试实例，名义误覆盖率α=0.1，护栏容差ϵ=0.025，共100折评估。

## Key technical points (EN)
- Problem: hidden confounding in logged RAN telemetry (e.g. an omitted PRB-budget or target-BS-load variable driving the controller's decision) invalidates conformal counterfactual coverage guarantees built from observational data alone.
- Method: CV-CCI, built on the General Synthetic-Powered Inference (GESPI) principle — combines a reliable-data output (randomized telemetry only, nominal level), an auxiliary-powered output (randomized + observational, nominal level), and a guardrail output (randomized only, relaxed level 1−α−ϵ); final set = reliable ∩ (auxiliary ∪ guardrail).
- Guarantee: Proposition 1 proves finite-sample coverage at 1−α−ϵ under arbitrary hidden confounding, with the CV-CCI set sandwiched between the guardrail set and the randomized-only set.
- Task 1 — MAC scheduling: RR vs PFCA choice; hidden confounder = omitted PRB budget; target KPI = residual per-UE backlog; confounding swept λ∈{0, 0.25, 0.5, 0.75, 1}.
- Task 2 — Handover: stay vs handover to neighbor BS; hidden confounder = omitted target-BS load; target KPI = 10-TTI average throughput; confounding swept λ∈{0,2,4,6,8}.
- Baselines: CCKE (no-confounding assumption), wSCP-DR Inexact/Exact (density-ratio corrections), Guardrail-only.
- Results: under strong confounding CCKE/wSCP-DR Inexact under-cover (~0.78/0.67 on scheduling at λ=1; ~0.75/0.71 on handover at λ=8) vs CV-CCI/Guardrail holding ~0.90; CV-CCI beats Guardrail on failure-rate efficiency (scheduling 30%→26% vs 47%→41%; handover 9%→13% vs 18%→40%).
- Setup: 7,000 observational samples (5,000 train/2,000 calib), only 50 randomized samples, 1,000 test instances, α=0.1, ϵ=0.025, 100 folds.

## Key technical points (ZH)
- 问题：日志RAN遥测数据中的隐藏混杂（如被遗漏的PRB预算或目标基站负载变量，实际驱动了控制器决策）会使仅基于观测数据构建的反事实保形覆盖保证失效。
- 方法：CV-CCI，建立在通用合成增强推断（GESPI）原则之上——结合可靠数据输出（仅随机化遥测，名义水平）、辅助增强输出（随机化+观测，名义水平）与护栏输出（仅随机化遥测，放宽水平1−α−ϵ）；最终集合=可靠∩（辅助∪护栏）。
- 保证：命题1证明在任意隐藏混杂下，该方法在放宽水平1−α−ϵ实现有限样本覆盖，且CV-CCI集合被夹在护栏集合与纯随机化集合之间。
- 任务一——MAC调度：RR与PFCA之间选择；隐藏混杂因子=被遗漏的PRB预算；目标KPI=每UE剩余积压量；混杂强度λ∈{0, 0.25, 0.5, 0.75, 1}。
- 任务二——切换：留在服务基站或切换至邻近基站；隐藏混杂因子=被遗漏的目标基站负载；目标KPI=10个TTI窗口平均吞吐量；混杂强度λ∈{0,2,4,6,8}。
- 基线：CCKE（假设无混杂）、wSCP-DR Inexact/Exact（基于密度比的校正）、仅护栏基线。
- 结果：强混杂下CCKE/wSCP-DR Inexact覆盖不足（调度任务λ=1时约0.78/0.67；切换任务λ=8时约0.75/0.71），CV-CCI/护栏维持约0.90；CV-CCI在失败率效率上优于护栏基线（调度30%→26% vs 47%→41%；切换9%→13% vs 18%→40%）。
- 实验设置：7,000个观测样本（5,000训练/2,000校准）、仅50个随机化样本、1,000个测试实例，α=0.1，ϵ=0.025，共100折。

## Why it matters / what's new (EN)
This knowledge base's cellular-ai entries have so far covered AI-RAN capability systems (schedulers, xApp arbitration, foundation models) and evaluation-methodology entries that assess model correctness (e.g. the Surrey LLM-as-judge 5G eval, 2026-08-24). CV-CCI is the first entry to address a different, more fundamental measurement problem: whether the statistical claims made about a proposed RAN control action from logged telemetry are even valid, when logged data cannot capture every variable the controller actually used. It gives operators a principled way to combine cheap, plentiful observational logs with a small amount of costly randomized experimentation to make trustworthy counterfactual claims — directly relevant to any closed-loop AI-RAN system (scheduling, handover, or beyond) that is evaluated or audited from field telemetry rather than fresh randomized trials.

## Why it matters / what's new (ZH)
本知识库此前的cellular-ai条目主要覆盖AI-RAN能力系统（调度器、xApp仲裁、基础模型）以及评估模型正确性的方法论条目（如Surrey大学的LLM裁判式5G评测，2026-08-24）。CV-CCI首次触及一个更根本、性质不同的测量问题：当日志数据无法捕捉控制器实际使用的全部变量时，基于日志遥测数据对某一RAN控制动作提出的统计性主张是否本身就成立。它为运营商提供了一种原则性方法，将廉价、充裕的观测性日志与少量代价高昂的随机化实验相结合，从而得出可信的反事实结论——这与任何依靠现场遥测数据（而非全新随机化试验）进行评估或审计的闭环AI-RAN系统（调度、切换或其他）都直接相关。

## Images

None.
