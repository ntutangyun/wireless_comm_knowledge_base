---
id: 2026-11-27_ieee-mentor-win-sg-coordinated-multiband-spectrum-channel-leasing-dcn-2401
date_published: 2026-11-26
date_found: 2026-11-27
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG: coordinated multi-band spectrum aggregation and time-bounded inter-AP leasing (DCN 11-26-2401r0)"
title_zh: "IEEE 802.11 WIN SG：协调式多频段频谱聚合与带时限的 AP 间租借（DCN 11-26-2401r0）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2401&is_year=2026"
source_quality: full
topics: [WIN, 802.11bn, MAPC, MLO, spectrum leasing, DFS, AFC]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr, spectrum-policy, mlo]
novelty_score: 3
---

## Summary (EN)
DCN 11-26-2401r0, "Coordinated multiband spectrum and channel leasing", was uploaded to the WIN (WLAN Intelligent Networking) Study Group on 26 November 2026 (10:04 ET) by Robert R. Sinclair, who lists his affiliation as Independent Researcher (Tokyo, Japan). The 16-slide deck (the .pptx was read in full) is titled "Coordinated Multi-Band Spectrum Aggregation and Time-Bounded Leasing for IEEE 802.11 WLANs", cites agenda reference 11-26/1943r2 and a companion paper still numbered 11-26/xxxxr0, and states three core invariants: zero client STA changes, verified donor protection (states D0/D1), and zero regulatory delegation.

The problem slide lists four operational gaps in multi-AP WLANs: asymmetric cell traffic between adjacent APs, static channel silos with no standardized contract to lend or reclaim unused channels, a "false idle" trap (RF silence is not proof a channel is safe to borrow, because power-save/TWT stations, DTIM beacons and hidden nodes wake up unpredictably), and channel-number descriptors that do not capture exact frequency bounds, puncturing masks, PSD limits or local AFC/DFS status. The architecture has three modes: Mode A, Autonomous Spectrum Aggregation (ASA), where an isolated AP aggregates all locally lawful hardware-supported multi-band resources; Mode B, Cooperative Time-Bounded Leasing (CTBL), where a Donor AP grants residual resources to a Borrower AP under expiring, revocable contracts; and Mode C, fall-back to ordinary 802.11 CCA/EDCA near legacy or non-participating APs ("silence is NEVER presumed consent").

The resource model defines five typed lease classes: SPECTRUM_RESOURCE (a band-agnostic frequency atom [f_start, f_end] with regulatory and power bounds, inventory only), FULL_CHANNEL (baseline; donor vacates, borrower runs its own BSS, donor BSSID, keys and associations are never transferred), CHANNEL_TIME (Phase 2; bounded recurring TXOP windows via MAPC Co-TDMA), SUBCHANNEL (Phase 3; nested OFDMA RU/subband inside a coordinated PPDU) and SPATIAL_REUSE (Phase 3; concurrent transmission under EIRP/PSD, beam and SINR constraints). A donor in state D0 (no associated STAs, beacons/probe responses/data disabled on the offered channel) is immediately eligible; a donor in state D1 (associated but idle, including power-save/TWT clients) is ineligible until a three-step transfer completes: steer STAs away (802.11be MLO TID-to-Link, 802.11v BTM or eCSA), verify zero STAs remain and TX is quiet, then issue a LEASE_READY token.

The lease lifecycle is a two-phase prepare/commit: GRANT authorizes parameters without TX rights, the donor verifies silence and emits READY, and the borrower arms a watchdog and starts only at COMMIT plus a guard. The stated reclaim inequality is T_reclaim_notice + T_drain + T_sw_off + 2*Delta_t_sync <= T_hard_stop, enforced by a local monotonic hardware watchdog; loss of the backhaul or control link never extends a lease and an unverified release triggers QUARANTINE. Control exchanges run over Protected Dual of Public Action (PDPA) frames on discovery/retained links or wired IEEE 1905.1 backhaul. On regulation, a peer lease never transfers regulatory permission: the borrower independently checks operating class, EIRP/PSD, 6 GHz AFC grant and 5 GHz DFS/CAC, and radar detection or AFC expiry triggers an immediate unilateral REVOKE_REGULATORY. Privacy rules state that no persistent STA MAC addresses, payloads or flow logs are exchanged across APs.

The deck says it claims no pre-existing simulation results. It proposes baselines B1 (static OBSS), B2 (intra-BSS MLO) and B3 (intra-channel MAPC), scenarios S1-S15 and candidate KPIs (area MAC goodput, P95/P99 tail latency, reclaim hard-stop compliance, donor and legacy QoS, regulatory safety). It positions itself as reusing 802.11be MLO TID-to-Link, 802.11v BTM/802.11h eCSA and 802.11bn MAPC Co-TDMA/Co-SR, and contrasts DBE/DSO/NPCA as intra-BSS adaptation only. A phased roadmap (Phase 0 study, Phase 1 FULL_CHANNEL baseline with two-phase commit and watchdog, Phase 2 multi-band portfolios and CHANNEL_TIME, Phase 3 optional SUBCHANNEL and SPATIAL_REUSE) and two candidate straw polls close the deck, the first asking whether the SG supports studying coordinated multi-band aggregation and time-bounded inter-AP leasing with verified donor station protection.

## Summary (ZH)
DCN 11-26-2401r0《Coordinated multiband spectrum and channel leasing》由 Robert R. Sinclair 于 2026 年 11 月 26 日（美东 10:04）上传至 WIN（WLAN 智能网络）研究组，其署名单位为 Independent Researcher（日本东京）。该 16 页演示文稿（已通读 .pptx）题为“Coordinated Multi-Band Spectrum Aggregation and Time-Bounded Leasing for IEEE 802.11 WLANs”，引用议程编号 11-26/1943r2 及尚编号为 11-26/xxxxr0 的配套论文，并声明三项核心不变量：不改动客户端 STA、经验证的施主保护（状态 D0/D1）、不下放监管权限。

问题页列出多 AP WLAN 的四个运行缺口：相邻 AP 之间业务不对称；静态信道孤岛，缺少借出或收回闲置信道的标准化约定；“假空闲”陷阱（射频静默并不证明信道可借，因为省电/TWT 站点、DTIM 信标和隐藏节点会不可预测地唤醒）；信道号描述符无法表达精确频率边界、打孔掩码、PSD 限值及本地 AFC/DFS 状态。架构分三种模式：模式 A 自治频谱聚合（ASA），孤立 AP 聚合本地合法且硬件支持的全部多频段资源；模式 B 协作式带时限租借（CTBL），施主 AP 在会到期、可撤销的合约下把剩余资源授予借用 AP；模式 C 在存在传统或未参与 AP 时退回常规 802.11 CCA/EDCA（“静默绝不视为同意”）。

资源模型定义五种带类型的租借类别：SPECTRUM_RESOURCE（带有监管与功率边界的、与频段无关的频率原子 [f_start, f_end]，仅作清单）、FULL_CHANNEL（基线；施主腾空，借用方运行自己的 BSS，施主的 BSSID、密钥与关联绝不转移）、CHANNEL_TIME（第 2 阶段；通过 MAPC Co-TDMA 的有界周期性 TXOP 窗口）、SUBCHANNEL（第 3 阶段；协调 PPDU 内嵌套的 OFDMA RU/子带）、SPATIAL_REUSE（第 3 阶段；在 EIRP/PSD、波束与 SINR 约束下并发发射）。处于 D0 状态的施主（无关联 STA，所提供信道上的信标、探测响应与数据发射均关闭）立即合格；处于 D1 状态（有关联但空闲，含省电/TWT 客户端）的施主在三步转移完成前不合格：先引导 STA 离开（802.11be MLO TID-to-Link、802.11v BTM 或 eCSA），再验证无 STA 残留且发射静默，最后签发 LEASE_READY 令牌。

租约生命周期为两阶段准备/提交：GRANT 只授权参数而无发射权，施主验证静默后发出 READY，借用方启动看门狗并仅在 COMMIT 加保护间隔后开始发射。文稿给出的回收不等式为 T_reclaim_notice + T_drain + T_sw_off + 2*Delta_t_sync <= T_hard_stop，由本地单调硬件看门狗执行；回传或控制链路丢失绝不延长租约，未经验证的释放触发 QUARANTINE。控制交互通过发现/保留链路上的 Protected Dual of Public Action（PDPA）帧或有线 IEEE 1905.1 回传进行。监管方面，对等租约绝不转移监管许可：借用方独立检查工作类别、EIRP/PSD、6 GHz AFC 授权及 5 GHz DFS/CAC，雷达检测或 AFC 到期触发立即的单方 REVOKE_REGULATORY。隐私规则规定 AP 之间不交换持久的 STA MAC 地址、载荷或流日志。

文稿称其不声称已有仿真结果，提出基线 B1（静态 OBSS）、B2（BSS 内 MLO）、B3（信道内 MAPC）、场景 S1-S15 及候选 KPI（区域 MAC 吞吐、P95/P99 尾时延、回收硬停止达标率、施主与传统站点 QoS、监管安全）。它自述复用 802.11be MLO TID-to-Link、802.11v BTM/802.11h eCSA 与 802.11bn MAPC Co-TDMA/Co-SR，并把 DBE/DSO/NPCA 对比为仅限 BSS 内的自适应。文末给出分阶段路线图（第 0 阶段研究，第 1 阶段带两阶段提交与看门狗的 FULL_CHANNEL 基线，第 2 阶段多频段组合与 CHANNEL_TIME，第 3 阶段可选的 SUBCHANNEL 与 SPATIAL_REUSE）及两项候选表决，第一项询问研究组是否支持研究带经验证施主站点保护的协调式多频段聚合与带时限的 AP 间租借。

## Key technical points (EN)
- **DCN 11-26-2401r0 · WIN SG** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2401&is_year=2026) Coordinated multiband spectrum and channel leasing. Robert R. Sinclair (Independent Researcher). Modes ASA, CTBL and conventional-coexistence fallback.
- Five lease classes: SPECTRUM_RESOURCE, FULL_CHANNEL (Phase 1 baseline), CHANNEL_TIME (Phase 2, via MAPC Co-TDMA), SUBCHANNEL and SPATIAL_REUSE (Phase 3, optional).
- Donor states D0 (unassociated and vacated) and D1 (associated but idle; "traffic idleness is a trigger, not proof"), with the three-step D1-to-D0 transfer ending in a LEASE_READY token.
- Fairness: donor protected service envelope reserved first, weighted max-min sharing of residual capacity across borrowers, preference for FULL_CHANNEL when the donor can vacate, minimum hold times and request back-offs against channel flapping.
- Open questions Q1-Q5 for the SG: reuse of 802.11be/bn primitives, a common descriptor ([f_start_hz, f_end_hz], PHY/op-class, puncturing mask, EIRP/PSD, validity), donor quiet proof, clock-uncertainty bound, and scoping Phase 1 to FULL_CHANNEL vacating.

## Key technical points (ZH)
- **DCN 11-26-2401r0 · WIN SG** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2401&is_year=2026) Coordinated multiband spectrum and channel leasing。Robert R. Sinclair（Independent Researcher）。模式 ASA、CTBL 及常规共存回退。
- 五种租借类别：SPECTRUM_RESOURCE、FULL_CHANNEL（第 1 阶段基线）、CHANNEL_TIME（第 2 阶段，经 MAPC Co-TDMA）、SUBCHANNEL 与 SPATIAL_REUSE（第 3 阶段，可选）。
- 施主状态 D0（未关联且已腾空）与 D1（有关联但空闲；“业务空闲是触发条件，而非证明”），三步 D1 到 D0 转移以 LEASE_READY 令牌收尾。
- 公平性：先预留施主受保护的服务包络，再在借用方之间按加权最大最小方式分配剩余容量；施主可腾空时优先选 FULL_CHANNEL；用最短保持时间和请求退避防止信道抖动。
- 向研究组提出的开放问题 Q1-Q5：802.11be/bn 原语的复用、通用描述符（[f_start_hz, f_end_hz]、PHY/工作类别、打孔掩码、EIRP/PSD、有效期）、施主静默证明、时钟不确定度上界，以及把第 1 阶段范围限定为 FULL_CHANNEL 腾空。

## Why it matters / what's new (EN)
The document describes itself as a concept contribution submitted for WIN Study Group technical evaluation; it states that it is pre-standard technical discussion, not an approved PAR or standard, and that no simulation results are claimed. Its content packages inter-AP channel lending around the existing MLO, BTM/eCSA and MAPC Co-TDMA mechanisms and proposes a descriptor and lease metadata layer on top. It sits alongside the other WIN SG contributions in this KB, for example 2026-11-12_ieee-mentor-win-sg-cisco-enterprise-directions-and-determinism-gaps-dcn-2077-2078 and 2026-11-16_ieee-mentor-win-sg-draft-par-r2-scope-latency-ai-assisted-decision-dcn-1834. Only the slide deck was read; the companion paper was not available.

## Why it matters / what's new (ZH)
该文档自述为提交给 WIN 研究组进行技术评估的概念性贡献；其自述为标准前的技术讨论，并非已批准的 PAR 或标准，也不声称有仿真结果。其内容围绕既有的 MLO、BTM/eCSA 与 MAPC Co-TDMA 机制组织 AP 间信道租借，并在其上提出描述符与租约元数据层。它与本知识库中其他 WIN SG 贡献并列，例如 2026-11-12_ieee-mentor-win-sg-cisco-enterprise-directions-and-determinism-gaps-dcn-2077-2078 与 2026-11-16_ieee-mentor-win-sg-draft-par-r2-scope-latency-ai-assisted-decision-dcn-1834。仅阅读了演示文稿；配套论文未获取。
