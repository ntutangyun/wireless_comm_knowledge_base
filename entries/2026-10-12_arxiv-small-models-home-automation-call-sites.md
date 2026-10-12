---
id: 2026-10-12_arxiv-small-models-home-automation-call-sites
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "Not Every Call Needs a Frontier Model: Per-Call-Site Evaluation of Small Language Models in a Deployed Agentic Home-Automation System"
title_zh: "不是每次调用都需要前沿模型：在已部署智能体式家庭自动化系统中按调用点评估小语言模型"
url: "https://arxiv.org/abs/2610.09021"
source_quality: full
topics: [small-language-models, model-routing, home-automation, agentic-systems, actuation-safety]
topic_primary: home-ai-assistant
topics_secondary: [compute-offloading]
novelty_score: 4
---

## Summary (EN)

Researchers from the University of West Attica (with Waldiez PC and ThinGenious PC) note that an agentic system issues several structurally different kinds of LLM calls per turn — routing intent, classifying actions, grounding language in a device registry, planning multi-agent pipelines, and writing the Python code those pipelines run — whose difficulty varies by an order of magnitude, yet in practice a single model sized for the hardest call site is typically used to serve all of them. The paper tests whether this is necessary by evaluating 9 models (from 0.8B parameters up to a frontier hosted model) across the five call sites of Wactorz, a deployed open-source multi-agent home-automation framework, using its unmodified production prompts against two real Home Assistant installations (280 cases, 2,520 scored calls).

The central finding is that capability is not ordered the same way at every call site, and larger models are not uniformly better — one 4B model performs worse than its own 2B sibling at grounded actuation. Paired statistical testing shows the best local model is statistically indistinguishable from both hosted comparison models at four of the five call sites; only code generation separates local from hosted (p=0.039 against a small hosted model, p=0.002 against a frontier one). Critically, aggregate accuracy hides a safety-specific failure mode at the actuation site: small models resolve the accuracy/refusal trade-off in degenerate ways, with one model (Gemma4 E2B) actuating on 87.2% of requests for devices the installation does not own, while another model refuses every request it receives.

Routing each call site to its own best local model reaches 91.8% aggregate accuracy against 95.4% for an all-frontier baseline, at no per-call model-selection cost (the routing is a static configuration value, not a learned router). In a live deployment judged by an end user, hosting only the two call sites that require generation (rather than all five) matched the accuracy of hosting everything (39/43 vs. 39/43) for 28% of the hosted spend, and the actuation-safety gap the offline benchmark predicted showed up as exactly one failure case in twenty-six live interactions. Code, the 280-case benchmark, and all 2,520 records are publicly released.

## Summary (ZH)

来自希腊西阿提卡大学（联合 Waldiez PC 与 ThinGenious PC）的研究者指出，一个智能体式系统在每一轮交互中会发出若干结构上截然不同的 LLM 调用——意图路由、动作分类、将语言落地到设备注册表、规划多智能体流水线，以及为这些流水线编写实际运行的 Python 代码——这些调用的难度相差可达一个数量级，但实践中通常使用一个为最难调用点选型的单一模型来服务所有这些调用。本文通过在 Wactorz（一个已部署的开源多智能体家庭自动化框架）的五个调用点上评估 9 个模型（从 8 亿参数到一个托管的前沿模型），使用其未经修改的生产系统提示，针对两套真实的 Home Assistant 安装环境（280 个案例，2520 次评分调用），检验这种做法是否真的必要。

核心发现是：各调用点上模型能力的排序并不一致，更大的模型也并非普遍更优——某个 4B 模型在"落地执行"（grounded actuation）调用点上的表现不如它自己的 2B 版本。配对统计检验显示，在五个调用点中的四个上，表现最好的本地模型与两个托管对比模型在统计上不可区分；只有代码生成这一调用点能将本地模型与托管模型区分开来（相对小型托管模型 p=0.039，相对前沿托管模型 p=0.002）。关键的是，总体准确率掩盖了执行调用点上一种特定于安全性的失败模式：小模型以退化的方式解决了"准确率/拒绝"之间的权衡——一个模型（Gemma4 E2B）对该安装环境并不拥有的设备，仍对 87.2% 的请求执行了实际动作，而另一个模型拒绝了它收到的所有请求。

将每个调用点路由到各自最优的本地模型，可达到 91.8% 的总体准确率（相较全部使用前沿模型基线的 95.4%），且无需任何按次调用的模型选择成本（该路由是静态配置值，而非一个学习得到的路由器）。在一次由终端用户评判的真实部署中，仅托管需要生成能力的两个调用点（而非全部五个）即与托管全部调用点的准确率相当（39/43 对 39/43），而托管成本仅为 28%；离线基准所预测的执行安全缺口，在 26 次真实交互中恰好表现为 1 次失败案例。代码、280 个案例的基准数据及全部 2520 条记录均已公开发布。

## Key technical points (EN)

- Treats model selection as a per-call-site (not per-whole-model, not per-query-router) decision in a deployed, unmodified production agentic home-automation system (Wactorz, MQTT-supervised multi-agent runtime).
- 9 models (0.8B to frontier hosted) evaluated across 5 call sites: intent routing, action classification, device-registry grounding, multi-agent planning, and Python code generation for the pipelines.
- Capability ordering is non-monotonic in model size and differs by call site; a 4B model underperforms its own 2B sibling at grounded actuation.
- Best local model is statistically indistinguishable from hosted models at 4/5 sites; only code generation shows a significant gap (p=0.039 vs small hosted, p=0.002 vs frontier).
- Safety finding distinct from accuracy: Gemma4 E2B actuates 87.2% of requests naming devices the installation does not own; a different small model refuses every request it receives — aggregate accuracy alone hides this.
- Per-site routing reaches 91.8% vs. 95.4% all-frontier, at no per-call routing cost; live deployment with only generative sites hosted matches full-hosting accuracy (39/43 vs 39/43) at 28% of spend; the predicted actuation gap appeared as exactly 1/26 live cases.

## Key technical points (ZH)

- 将模型选择视为一个"按调用点"（而非按整体模型、也非按查询学习路由器）的决策，在一个已部署、未经修改的生产级智能体家庭自动化系统（Wactorz，基于 MQTT 监督的多智能体运行时）中进行。
- 评估 9 个模型（8 亿参数到托管前沿模型）在 5 个调用点上的表现：意图路由、动作分类、设备注册表落地、多智能体规划，以及流水线所需的 Python 代码生成。
- 能力排序并非随模型规模单调变化，且不同调用点的排序不同；某 4B 模型在"落地执行"调用点上表现不如自身的 2B 版本。
- 最优本地模型在 5 个调用点中的 4 个上与托管模型在统计上不可区分；只有代码生成调用点显示出显著差距（相对小型托管模型 p=0.039，相对前沿模型 p=0.002）。
- 区别于准确率的安全性发现：Gemma4 E2B 对该安装环境并不拥有的设备，仍对 87.2% 的请求执行了实际动作；另一个小模型则拒绝了它收到的所有请求——仅看总体准确率无法发现这一问题。
- 按调用点路由可达到 91.8% 准确率（相较全部使用前沿模型的 95.4%），且无需任何按次路由成本；在仅托管生成类调用点的真实部署中，准确率与全部托管相当（39/43 对 39/43），成本仅为 28%；预测的执行安全缺口在 26 次真实交互中恰好表现为 1 次失败案例。

## Why it matters / what's new (EN)

This paper decomposes a single deployed agentic system into its distinct LLM call sites and shows the local-vs-hosted question has a different answer at each one. The actuation-safety finding (a small model actuating on 87.2% of requests naming devices the installation does not own, where the correct response is refusal) is a measured failure mode that aggregate accuracy hides, and it is independently reproducible from the released benchmark and records.

## Why it matters / what's new (ZH)

本文将一个已部署的智能体系统拆分为若干结构不同的 LLM 调用点，并说明"本地还是托管"这一问题在每个调用点上的答案并不相同。执行安全发现（某小模型对点名安装环境中并不存在之设备的请求，87.2% 仍执行动作，而正确做法应为拒绝）是一种被总体准确率掩盖的实测失败模式，并且可通过已公开发布的基准和记录独立复现。
