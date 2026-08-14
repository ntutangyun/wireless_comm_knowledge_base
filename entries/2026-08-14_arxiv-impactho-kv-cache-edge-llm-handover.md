---
id: 2026-08-14_arxiv-impactho-kv-cache-edge-llm-handover
date_published: 2026-08-11
date_found: 2026-08-14
type: academic-paper
technology: cellular
title_en: "ImpactHO: Importance-Aware KV Cache Transfer for Multi-User Edge LLM Handover"
title_zh: "ImpactHO：多用户边缘大模型切换中的重要性感知 KV 缓存传输"
url: "https://arxiv.org/abs/2608.10545"
source_quality: full
topics: [MEC, edge-LLM, handover, KV-cache, resource-allocation, water-filling]
topic_primary: mec
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Kim, Song, Lee, Jung and Kim (POSTECH + Ajou, arXiv 11 Aug 2026) treat a mobile user's **LLM inference context as first-class handover state**: when a user moves between edge nodes hosting shared LLMs, the accumulated key-value (KV) cache — ~9.66 Gbit for an 8K-token context on Qwen3-8B in BF16 — must migrate over a shared, bandwidth-constrained backhaul within a mobility time window. ImpactHO scores KV entries by importance, transmits them in descending order, and allocates backhaul across concurrently handing-over users.

The enabling empirical finding: partial-cache inference accuracy vs. fraction transferred follows a **sigmoid with R² > 0.99** across models (Qwen3-8B/14B, Llama-3.1-8B) and context lengths (4K–16K) on the RULER benchmark; importance ordering pulls the inflection down to ~6.5% of the cache, so almost the whole curve is concave. That concavity turns multi-user backhaul allocation into a convex problem with a closed-form **weighted water-filling** solution (cache size as the weight), plus an admission policy for the scarce-bandwidth regime. At 4 handovers/s, 20 Gbps backhaul and a 500 ms window it reaches 93.7% average accuracy — within 0.5 pp of the 94.1% full-cache ceiling — and 98.2–99.5% of a clairvoyant bound across loads; transfer beats compute-side re-prefill (e.g. 590 ms vs 1566 ms at 16K context).

## Summary (ZH)
Kim、Song、Lee、Jung 与 Kim（POSTECH + 亚洲大学，2026 年 8 月 11 日 arXiv）把移动用户的 **LLM 推理上下文当作一等切换状态**：当用户在承载共享 LLM 的边缘节点间移动时，累积的键值（KV）缓存——Qwen3-8B BF16 下 8K token 上下文约 9.66 Gbit——必须在移动时间窗内经共享的受限回传链路迁移。ImpactHO 按重要性给 KV 条目打分、按降序传输，并在并发切换用户间分配回传带宽。

关键经验发现：部分缓存推理精度随已传输比例呈 **R² > 0.99 的 Sigmoid 曲线**（RULER 基准，Qwen3-8B/14B、Llama-3.1-8B，4K–16K 上下文）；重要性排序把拐点压到缓存的约 6.5%，使曲线几乎全程处于凹区。该凹性把多用户回传分配化为凸问题，得到闭式**加权注水解**（缓存大小为权重），并配稀缺带宽下的准入策略。在 4 次切换/秒、20 Gbps 回传、500 ms 窗口下平均精度 93.7%——距 94.1% 全缓存上限仅 0.5 个百分点——各负载下达先知上界的 98.2–99.5%；传输方案优于计算侧重预填（16K 上下文 590 ms 对 1566 ms）。

## Key technical points (EN)
- System: multi-user edge-LLM handover; per-user KV cache fraction x_i, shared backhaul B, slotted scheduling; importance-ordered transmission of KV entries.
- Utility model: algebraic sigmoid fit of accuracy vs. cache fraction, R² > 0.99; concavity anchor τ ≈ 0.065 under importance ordering (Fast KVzip).
- Allocation: closed-form weighted water-filling — interior users equalize marginal accuracy gain per transmitted bit A_i'(y)/L_i; bisection search per slot, O(N log(λ/ε)).
- Ablations: importance ordering keeps >90% accuracy at 8 users/s vs 20.2% with random ordering; admission control cuts sub-τ starvation 20.8% → 0.65% at 12 users/s; robust over Δt 20–100 ms and windows 200–1000 ms.
- Latency: importance-aware transfer 229/353/590 ms (4K/8K/16K) vs 300/676/1566 ms pure re-prefill.

## Key technical points (ZH)
- 系统：多用户边缘 LLM 切换；每用户 KV 缓存比例 x_i、共享回传 B、分槽调度；KV 条目按重要性排序传输。
- 效用模型：精度对缓存比例的代数 Sigmoid 拟合，R² > 0.99；重要性排序（Fast KVzip）下凹性锚点 τ ≈ 0.065。
- 分配：闭式加权注水——内点用户的每比特边际精度增益 A_i'(y)/L_i 相等；每槽二分搜索，O(N log(λ/ε))。
- 消融：8 用户/秒下重要性排序保持 >90% 精度，随机排序仅 20.2%；准入控制把 12 用户/秒下低于 τ 的饥饿率从 20.8% 降至 0.65%；对 Δt 20–100 ms、窗口 200–1000 ms 稳健。
- 时延：重要性感知传输 229/353/590 ms（4K/8K/16K）对纯重预填 300/676/1566 ms。

## Why it matters / what's new (EN)
This is the KB's first entry treating **LLM inference state migration as a radio-adjacent network resource-allocation problem** — the mobility-management counterpart of BALANCE's edge-inference serving entry (2026-08-08). The structural insight is transferable: any AI service whose quality-vs-bytes curve is sigmoidal under importance ordering admits water-filling-style multi-user scheduling. As edge-hosted assistants proliferate, "context handover" could become a standardization topic alongside classical UE-context transfer in Xn/N2 mobility — this paper supplies the utility model and the allocation math such work would need.

## Why it matters / what's new (ZH)
这是知识库中第一条把 **LLM 推理状态迁移当作近无线侧网络资源分配问题**的条目——与 BALANCE 边缘推理服务条目（2026-08-08）形成移动性管理侧的对位。其结构性洞见可迁移：任何在重要性排序下"质量-字节"曲线呈 Sigmoid 的 AI 服务都可用注水式多用户调度。随着边缘托管助手普及，"上下文切换"可能与 Xn/N2 移动性中的经典 UE 上下文转移并列成为标准化议题——本文提供了此类工作所需的效用模型与分配数学。
