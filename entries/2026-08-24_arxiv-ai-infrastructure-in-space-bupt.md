---
id: 2026-08-24_arxiv-ai-infrastructure-in-space-bupt
date_published: 2026-08-21
date_found: 2026-08-24
type: academic-paper
technology: satellite
title_en: "AI Infrastructure in Space: How Far Can We Go? — a systems vision grounded in three real in-orbit case studies on the BUPT-1/BUPT-2 smallsats: thermal/energy-bounded compute, 56.5% faster container updates, and power-loss-recoverable VLM serving"
title_zh: "太空 AI 基础设施能走多远？——基于 BUPT-1/BUPT-2 小卫星三个真实在轨案例的系统愿景：热/能量受限的算力、容器更新提速 56.5%、可跨断电恢复的视觉语言模型推理服务"
url: "https://arxiv.org/abs/2608.21034"
source_quality: full
topics: [satellite-edge-computing, orbital-computing, AI-infrastructure, onboard-AI, container-updates, VLM-serving, checkpointing, thermal-management, depth-of-discharge, BUPT, space-ground-integration]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Li, Zhang, Xu et al. (a 13-author BUPT-led team including Mengwei Xu and Shangguang Wang; arxiv cs.DC, 21 Aug 2026, 20 pages) lay out a systems vision for **AI infrastructure in space** — defined as "a cross-layer system for deploying, orchestrating, operating, updating, evaluating and reliably managing AI capabilities across spaceborne compute, orbital networks and space-ground systems under physical and operational constraints." The paper's distinguishing feature over prior orbital-computing surveys is that its vision is grounded in **three real in-orbit case studies** on the group's own 12U Sun-synchronous smallsats at ~490 km (BUPT-1: 2× Raspberry Pi 4B + 2× Atlas 200 DK COTS payloads; BUPT-2: a cloud-native container-capable sibling), with a 1:1 thermally matched ground twin for paired analysis.

**Case I (node level, BUPT-1 telemetry, 4 months):** usable compute is bounded by thermal and energy envelopes, not by silicon. A single accelerator runs ~9 hours continuously before hitting the 30°C structural limit; two accelerators sharing a radiator surface collapse that window to ~40 minutes. In eclipse, multi-day computation drives battery depth-of-discharge from 16% to 35% (past the 30% design limit; keeping daily-average DoD near 16% vs 25-30% changes battery lifetime by ~25%). Over the deployment, radiation caused zero observed single-event upsets while thermal protection killed tasks twice — thermals, not radiation, were the binding constraint. **Case II (platform level, SateLight on BUPT-2):** a container-based post-launch update framework using ground-side content-aware deltas + onboard layered reconstruction cuts application-update transmission latency by 56.54% on average and up to 91.18% with 100% update correctness (~2 s onboard reconstruction; 0.48 ms rollback preparation, ~36 s recovery), across ten applications in six languages — against a baseline where a full vision container costs ~10.7 hours of uplink at 200 kbps (roughly two weeks of real contact windows). **Case III (service level, Rover):** sustained Qwen3-VL-2B inference heats the payload from 45°C to the 55°C shutdown threshold in 48 seconds; a checkpointing runtime that follows the VLM pipeline structure (vision-encoder boundary states, KV-only prefill checkpoints, batched decode checkpoints, <100 ms restoration scheduling) achieves up to 3.2× end-to-end speedup over generic checkpointing, 85.6% lower recovery latency, 3.56× fewer SSD writes at 3.7-10.4% normal-path energy overhead — completing most requests where the baseline completed none.

From these, the paper distills a five-layer architecture (spaceborne compute / orbital network / space-ground control plane / AI lifecycle / physical-state interface) and a research agenda: space-native resource abstractions exposing forecasted compute-power-thermal envelopes, topology-predictive orchestration that treats contact prediction as an OS-like primitive, energy-thermal-aware serving metrics, AI-state lifecycle management over kbps uplinks, and trustworthy evaluation/governance including radiation-aware runtimes.

## Summary (ZH)
Li、Zhang、Xu 等（北邮牵头的 13 人团队，含 Mengwei Xu 与 Shangguang Wang；arxiv cs.DC，2026 年 8 月 21 日，20 页）提出**太空 AI 基础设施**的系统愿景——定义为"在物理与运行约束下，跨星载算力、轨道网络与天地系统部署、编排、运行、更新、评估并可靠管理 AI 能力的跨层系统"。相比以往的轨道计算综述，本文的独特之处在于其愿景以**三个真实在轨案例**为支撑，运行在该团队自己的约 490 km 太阳同步轨道 12U 小卫星上（BUPT-1：2× 树莓派 4B + 2× Atlas 200 DK 商用现货载荷；BUPT-2：具备云原生容器能力的姊妹星），并配有 1:1 热匹配地面孪生用于天地配对分析。

**案例一（节点级，BUPT-1 遥测，4 个月）：** 可用算力受热与能量包络约束，而非芯片本身。单加速器连续运行约 9 小时即触及 30°C 结构温限；两个加速器共享辐射面时该窗口坍缩至约 40 分钟。地影期多日连续计算使电池放电深度（DoD）从 16% 升至 35%（超过 30% 设计限值；日均 DoD 保持在 16% 与 25-30% 相比，电池寿命差异约 25%）。整个部署期间辐射未造成任何单粒子翻转，而热保护两次强制终止任务——约束在热，不在辐射。**案例二（平台级，BUPT-2 上的 SateLight）：** 基于容器的发射后应用更新框架，地面侧内容感知增量 + 星上分层重构，将应用更新传输时延平均降低 56.54%、最高 91.18%，更新正确率 100%（星上重构约 2 秒；回滚准备 0.48 毫秒、恢复约 36 秒），覆盖六种语言的十个应用——对比基线：完整视觉容器在 200 kbps 上行下需约 10.7 小时传输（相当于约两周的真实过境窗口）。**案例三（服务级，Rover）：** Qwen3-VL-2B 持续推理使载荷在 48 秒内从 45°C 升至 55°C 关机阈值；遵循 VLM 流水线结构的检查点运行时（视觉编码器层边界状态、prefill 仅存 KV 张量、解码批量检查点、<100 毫秒恢复调度）相比通用检查点方案端到端提速最高 3.2 倍、恢复时延降低 85.6%、SSD 写入减少 3.56 倍，正常路径能耗开销仅 3.7-10.4%——多数请求得以完成，而基线一个也完不成。

由此论文提炼出五层架构（星载算力/轨道网络/天地控制面/AI 生命周期/物理状态接口）与研究议程：暴露算力-功率-热预测包络的太空原生资源抽象、将过境预测作为类操作系统原语的拓扑预测编排、能量-热感知的推理服务指标、kbps 上行下的 AI 状态生命周期管理，以及含辐射感知运行时的可信评估与治理。

## Key technical points (EN)
- **Definition + 5-layer architecture:** spaceborne compute / orbital network (ISLs, gateways, contact windows) / space-ground control plane (deploy, monitor, rollback) / AI lifecycle (weights, adapters, checkpoints, KV caches) / physical-state interface (energy, thermal, radiation, DoD, attitude) — orbital and physical state as first-class members of the resource model.
- **BUPT-1 thermal ceiling:** 1 accelerator ≈ 9 h continuous compute to the 30°C limit; 2 accelerators on a shared radiator ≈ 40 min. One COTS VLM deployment hit the 55°C shutdown threshold in 48 s. Inference latency +~10% under thermal throttling.
- **BUPT-1 energy governors:** ~6% of converted solar energy goes unused in sunlight; eclipse computation drives DoD 16%→35% (design limit 30%); daily-average DoD 16% vs 25-30% ≈ 25% battery-lifetime difference.
- **Radiation vs thermal:** 4 months at 490 km — zero single-event upsets observed, but thermal protection terminated tasks twice.
- **SateLight (BUPT-2):** content-aware container deltas + layered onboard reconstruction; −56.54% mean / −91.18% max update transmission latency, 100% correctness, ~2 s reconstruction, 0.48 ms rollback prep / ~36 s recovery; 10 apps, 6 languages (CV inference to 5G core functions); validated by a live in-orbit update. Baseline: full vision container ≈ 10.7 h uplink at 200 kbps (4-6 ten-minute contacts/day → ~2 weeks).
- **Rover stateful VLM serving:** pipeline-structured checkpointing (vision-encoder layer boundaries; token/layer-partitioned prefill persisting only KV + boundary states; batched decode checkpoints; recovery scheduling solved <100 ms, SSD reads overlapped with dependency-ready blocks); up to 3.2× end-to-end speedup, −85.6% recovery latency, 3.56× fewer SSD writes, 3.7-10.4% normal-path energy overhead; most requests complete vs zero for the baseline.
- **Research agenda:** forecasted-envelope resource abstractions; contact prediction as an OS primitive with explicit degradation modes (smaller models, batched inference, compressed features); serving metrics = sustained mission throughput under energy/thermal margins; constellation-staged model rollout (kbps uplinks cannot carry GB-scale weight refreshes even as deltas); benchmarks covering per-orbit useful work, recovery behavior, auditable rollback, radiation-aware runtimes.

## Key technical points (ZH)
- **定义 + 五层架构：** 星载算力 / 轨道网络（星间链路、网关、过境窗口）/ 天地控制面（部署、监控、回滚）/ AI 生命周期（权重、适配器、检查点、KV 缓存）/ 物理状态接口（能量、热、辐射、DoD、姿态）——轨道与物理状态是资源模型的一等成员。
- **BUPT-1 热上限：** 单加速器连续算约 9 小时触及 30°C 温限；双加速器共享辐射面仅约 40 分钟。某商用 VLM 部署 48 秒即达 55°C 关机阈值。热降频下推理时延增加约 10%。
- **BUPT-1 能量约束：** 日照期约 6% 已转换太阳能未被利用；地影期计算使 DoD 从 16% 升至 35%（设计限值 30%）；日均 DoD 16% 与 25-30% 相比电池寿命差约 25%。
- **辐射 vs 热：** 490 km 轨道 4 个月——未观测到任何单粒子翻转，热保护却两次终止任务。
- **SateLight（BUPT-2）：** 内容感知容器增量 + 星上分层重构；更新传输时延平均 −56.54%、最高 −91.18%，正确率 100%，重构约 2 秒，回滚准备 0.48 毫秒/恢复约 36 秒；覆盖 6 种语言 10 个应用（从视觉推理到 5G 核心网功能）；经真实在轨更新验证。基线：完整视觉容器 200 kbps 上行需约 10.7 小时（每天 4-6 次 10 分钟过境 → 约两周）。
- **Rover 有状态 VLM 服务：** 按流水线结构设计检查点（视觉编码器层边界；prefill 按 token/层分块仅持久化 KV 与边界状态；解码批量检查点；<100 毫秒求解恢复调度，SSD 读取与依赖就绪块重叠）；端到端最高提速 3.2 倍、恢复时延 −85.6%、SSD 写入 −3.56 倍、正常路径能耗开销 3.7-10.4%；多数请求完成，基线为零。
- **研究议程：** 预测包络式资源抽象；过境预测作为操作系统原语并配显式降级模式（更小模型、批量推理、特征压缩）；服务指标 = 能量/热裕度下的持续任务吞吐；星座分级模型分发（kbps 上行即使传增量也扛不动 GB 级权重刷新）；基准需覆盖每轨有效工作量、恢复行为、可审计回滚与辐射感知运行时。

## Why it matters / what's new (EN)
The KB's orbital-computing thread has been building since June — the space-data-center survey (06-13), Stride revisiting-aware in-orbit edge computing for EO (08-03), the orbital-AI carbon accounting paper (08-18), and the sub-THz L-COIN LEO edge offloading work (08-19) — but those entries are either surveys, single-system designs, or simulations. This paper is the first in the bin to present a **coherent infrastructure-layer vision backed by multi-case real in-orbit measurements**, and its numbers recalibrate several assumptions the thread has carried: the binding constraint on orbital AI compute in practice was thermal (55°C shutdown in 48 s of VLM inference; 9 h → 40 min when co-locating accelerators) rather than radiation (zero SEUs in 4 months at 490 km); and the real bottleneck for keeping onboard models current is the kbps-scale uplink (10.7 hours for one container), which makes delta-updates and checkpointable inference infrastructure problems, not optimizations. The framing that "orbital nodes are physically modulated resources metered by surface temperature and depth-of-discharge" is a genuinely space-native resource model that terrestrial MLOps has no analogue for, and the SateLight/Rover artifacts show the group is validating the agenda on real spacecraft, not just proposing it. As operators push edge compute into constellations (Starlink V3's advertised edge compute, the space-data-center wave), this is the most concrete public account yet of what actually breaks first.

## Why it matters / what's new (ZH)
知识库的轨道计算脉络自 6 月起持续积累——太空数据中心综述（06-13）、面向对地观测的 Stride 重访感知在轨边缘计算（08-03）、轨道 AI 碳核算论文（08-18）、亚太赫兹 L-COIN LEO 边缘卸载工作（08-19）——但这些条目要么是综述、要么是单系统设计或仿真。本文是该条目库中首个以**多案例真实在轨测量支撑的完整基础设施层愿景**，其数据修正了该脉络长期携带的若干假设：轨道 AI 算力的实际瓶颈是热（VLM 推理 48 秒即触发 55°C 关机；双加速器共置使 9 小时窗口坍缩至 40 分钟）而非辐射（490 km 轨道 4 个月零单粒子翻转）；维持星上模型时效的真正瓶颈是 kbps 级上行（单个容器需 10.7 小时）——这使增量更新与可检查点推理成为基础设施问题而非优化问题。"轨道节点是由表面温度与放电深度计量的物理调制型资源"这一表述，是地面 MLOps 没有对应物的真正太空原生资源模型；SateLight/Rover 等系统工件表明该团队在真实航天器上验证议程，而非纸上谈兵。随着运营商将边缘算力推向星座（Starlink V3 宣传的边缘计算、太空数据中心浪潮），这是迄今关于"实际最先坏掉的是什么"的最具体公开记述。
