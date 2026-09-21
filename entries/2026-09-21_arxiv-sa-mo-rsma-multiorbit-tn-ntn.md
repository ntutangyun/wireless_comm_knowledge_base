---
id: 2026-09-21_arxiv-sa-mo-rsma-multiorbit-tn-ntn
date_published: 2026-09-13
date_found: 2026-09-21
technology: satellite
type: academic-paper
title_en: "Rate-Splitting for Service-Aware Multi-Orbit Orchestration in 6G TN-NTN Networks"
title_zh: "面向 6G 地面-非地面网络（TN-NTN）业务感知多轨道编排的速率分裂方案"
url: "https://arxiv.org/abs/2609.14629"
source_quality: full
topics: [RSMA, TN-NTN, multi-orbit, GEO, MEO, LEO, orchestration]
topic_primary: leo-constellations
novelty_score: 3
---

## Summary (EN)

Ghosh and Marchetti (Trinity College Dublin) and Kishk (Maynooth University) submitted this paper on 2026-09-13 (5 pages, 5 figures; submitted to IEEE Transactions on Vehicular Technology as a Correspondence / Short Paper). The authors frame the problem as a gap in existing integrated terrestrial-non-terrestrial network (TN-NTN) research for 6G: prior frameworks do not jointly address service-aware serving-domain selection (which of GEO, MEO, LEO, or terrestrial domains should serve a user), multi-orbit coordination, and hierarchical multi-stream transmission within a single system.

The paper proposes service-aware multi-orbit rate-splitting multiple access (SA-MO-RSMA), which structures the transmitted signal into three hierarchical stream types: a "global-common" stream accessible to all users, "orbit-common" streams specific to each domain (GEO/MEO/LEO/terrestrial), and "user-private" streams for individual users. Serving-domain selection and resource allocation are jointly optimized against a proposed multi-criteria Orbit-Service Utility Function (OSUF) that combines seven weighted components covering throughput, service continuity, positioning, multicast efficiency, synchronization stability, and penalty terms for latency and orchestration overhead. The framework is explicitly positioned as a system-level orchestration layer sitting on top of existing 3GPP NTN architectures (3GPP TR 38.811/38.821), not a physical-layer replacement for them.

Simulations use 3GPP-aligned NTN parameters (20 GHz carrier, 400 MHz bandwidth, 40 dBm transmit-power budget, LEO/MEO/GEO altitudes of 600/8,000/35,786 km, 3GPP TR 38.811 channel model) with 10-80 users at speeds of 20-160 km/h, comparing SA-MO-RSMA against conventional RSMA (without orbit-specific common streams), OMA/NOMA, max-SINR domain selection, latency-only selection, and fixed-domain retention. The paper reports that SA-MO-RSMA achieves the highest average per-user OSUF across all tested user loads, the highest service-continuity metric (MOSCR) across all tested user speeds, the highest switching-stability metric (OSSI) across tested hysteresis margins, and the highest power-normalized transmission-efficiency metric (OARE) across the tested transmit-power range — in each case attributed to the hierarchical stream structure letting orbit-common streams carry domain-shared information without duplicating it across user-private streams. The paper does not report these comparisons as specific percentage or numeric gains; the reported results are qualitative rankings across the benchmark set, backed by boundedness and solution-existence proofs for the OSUF-based optimization (Lemmas 1-2, Propositions 1-2, Theorems 1-2 in the appendix).

## Summary (ZH)

Ghosh 与 Marchetti（都柏林三一学院）及 Kishk（梅努斯大学）于 2026 年 9 月 13 日提交本文（arXiv 备注栏标明全文 5 页、5 幅插图，已作为通信短文（Correspondence / Short Paper）投稿至 IEEE Transactions on Vehicular Technology）。作者将问题定位为现有 6G 地面-非地面融合网络（TN-NTN）研究中的一个空白：既有框架未能在单一系统内同时兼顾业务感知的服务域选择（应由 GEO、MEO、LEO 还是地面域为用户提供服务）、多轨道协同以及分层多流传输。

本文提出业务感知多轨道速率分裂多址接入（SA-MO-RSMA），将发送信号结构化为三类分层流：面向所有用户的"全局公共流"、针对每个域（GEO/MEO/LEO/地面）的"轨道公共流"，以及面向单个用户的"用户私有流"。服务域选择与资源分配围绕一个提出的多准则轨道-业务效用函数（OSUF）联合优化，该函数由七个加权分量组成，涵盖吞吐量、业务连续性、定位、组播效率、同步稳定性，以及针对时延和编排开销的惩罚项。该框架被明确定位为叠加于现有 3GPP NTN 架构（3GPP TR 38.811/38.821）之上的系统级编排层，而非对其物理层的替代。

仿真采用与 3GPP 对齐的 NTN 参数（载频 20 GHz，带宽 400 MHz，发射功率预算 40 dBm，LEO/MEO/GEO 高度分别为 600/8,000/35,786 公里，采用 3GPP TR 38.811 信道模型），用户数为 10 至 80、速度为 20 至 160 公里/小时，将 SA-MO-RSMA 与传统 RSMA（不含轨道专属公共流）、OMA/NOMA、最大 SINR 域选择、仅时延选择以及固定域保留策略进行对比。论文报告称，在所有测试用户负载下 SA-MO-RSMA 均取得最高的平均单用户 OSUF；在所有测试用户速度下取得最高的业务连续性指标（MOSCR）；在测试的滞回门限范围内取得最高的切换稳定性指标（OSSI）；在测试的发射功率范围内取得最高的功率归一化传输效率指标（OARE）——论文将这些优势均归因于分层流结构使轨道公共流可承载域内共享信息，而无需在各用户私有流中重复传输。论文并未给出这些对比的具体百分比或数值增益；所报告的结果是在基准方案集合中的定性排名，并辅以针对基于 OSUF 的优化问题的有界性与解存在性证明（附录中的引理 1-2、命题 1-2、定理 1-2）。

## Key technical points (EN)

- **Three-tier stream structure**: global-common stream (all users) + orbit-common streams (per GEO/MEO/LEO/TN domain) + user-private streams, with 25% of transmit power fixed to the global-common stream by default and the remaining 75% split between orbit-common and user-private streams via the resource-allocation procedure.
- **OSUF formula**: U_OSUF = w_T*T + w_C*C + w_P*P + w_M*M + w_J*J - w_L*L - w_O*O, combining normalized throughput (T), service-continuity (C), positioning (P), multicast-efficiency (M), synchronization (J), latency-cost (L, penalized) and orchestration-overhead (O, penalized) components; equal weights (1/7 each) used as a service-neutral reference setting.
- **Simulation parameters**: 20 GHz carrier, 400 MHz bandwidth, 40 dBm max transmit power, -174 dBm/Hz noise PSD, 10-80 users, 20-160 km/h user speed, LEO/MEO/GEO altitudes 600/8,000/35,786 km, 4 dB urban-LOS shadow-fading std. dev., 3GPP TR 38.811 channel model, 10,000 Monte Carlo realizations.
- **Metrics and thresholds enforced as feasibility constraints**: MOSCR (service continuity) >= 0.8, OSSI (switching stability) >= 0.8, OARE (transmission efficiency) >= 0.5, synchronization quality J >= 0.8.
- **Baselines compared**: conventional RSMA, OMA/NOMA, max-SINR domain selection, latency-only selection, fixed-domain retention, and a no-hysteresis variant for the switching-stability comparison.
- **Reported outcome**: SA-MO-RSMA ranks highest on OSUF, MOSCR, OSSI, and OARE across all tested operating ranges (user load, speed, hysteresis margin, power budget respectively) versus every baseline — reported as qualitative rankings from figures, not stated as specific percentage gains in the paper's text.

## Key technical points (ZH)

- **三层流结构**：全局公共流（全体用户）+ 轨道公共流（按 GEO/MEO/LEO/地面域划分）+ 用户私有流，默认将 25% 的发射功率固定分配给全局公共流，剩余 75% 通过资源分配流程在轨道公共流与用户私有流之间分配。
- **OSUF 公式**：U_OSUF = w_T·T + w_C·C + w_P·P + w_M·M + w_J·J − w_L·L − w_O·O，综合归一化的吞吐量（T）、业务连续性（C）、定位（P）、组播效率（M）、同步性（J）、时延成本（L，惩罚项）与编排开销（O，惩罚项）；默认采用等权重（各 1/7）作为业务中立的参考设置。
- **仿真参数**：载频 20 GHz，带宽 400 MHz，最大发射功率 40 dBm，噪声功率谱密度 −174 dBm/Hz，用户数 10–80，用户速度 20–160 公里/小时，LEO/MEO/GEO 高度分别为 600/8,000/35,786 公里，城区视距阴影衰落标准差 4 dB，采用 3GPP TR 38.811 信道模型，10,000 次蒙特卡洛实现。
- **作为可行性约束的指标门限**：MOSCR（业务连续性）≥ 0.8，OSSI（切换稳定性）≥ 0.8，OARE（传输效率）≥ 0.5，同步质量 J ≥ 0.8。
- **对比基线**：传统 RSMA、OMA/NOMA、最大 SINR 域选择、仅时延选择、固定域保留，以及用于切换稳定性对比的无滞回变体。
- **报告结果**：在用户负载、速度、滞回门限、功率预算各自的测试范围内，SA-MO-RSMA 在 OSUF、MOSCR、OSSI、OARE 上均相对所有基线取得最高值——论文正文中以图示定性排名的形式呈现，并未给出具体的百分比增益数字。

## Why it matters / what's new (EN)

This KB's TN-NTN orchestration thread has covered multi-orbit routing and QoS-aware agent-based approaches with single fixed optimization objectives; this paper's own contribution is a system-level orchestration layer that unifies serving-domain selection across all four domains (GEO/MEO/LEO/terrestrial) with a hierarchical RSMA stream structure and a single composite utility function (OSUF) governing continuity, stability, and efficiency jointly, explicitly designed to sit above rather than replace existing 3GPP NTN standards.

## Why it matters / what's new (ZH)

知识库现有的 TN-NTN 编排相关条目此前涉及多轨道路由与基于智能体的 QoS 感知方法，通常采用单一固定优化目标；本文自身的贡献是一个系统级编排层，通过分层 RSMA 流结构与单一复合效用函数（OSUF）联合治理连续性、稳定性与效率，统一了四个域（GEO/MEO/LEO/地面）的服务域选择，并明确定位为叠加于现有 3GPP NTN 标准之上而非替代之。

## Images

None.
