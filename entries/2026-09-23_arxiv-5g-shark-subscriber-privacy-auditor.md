---
id: 2026-09-23_arxiv-5g-shark-subscriber-privacy-auditor
date_published: 2026-09-21
date_found: 2026-09-23
type: academic-paper
technology: cellular
title_en: "5G-Shark: A Network Security Auditor for 5G Subscriber Privacy and Unauthenticated Signalling Resilience"
title_zh: "5G-Shark：面向 5G 用户隐私与未认证信令抗扰性的网络安全审计工具"
url: "https://arxiv.org/abs/2609.24656"
source_quality: full
topics: [5G-SA, 5G-NSA, rogue-base-station, SUCI, GUTI, cell-reselection, RAT-downgrade, DoS]
topic_primary: cellular-security
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Oscar Lasierra, Gines Garcia-Aviles, Antonio Skarmeta and Xavier Costa-Perez present 5G-Shark, an open-source auditing tool that assesses subscriber-privacy and signalling-resilience posture on live commercial 5G networks without active jamming or malformed-packet injection. The paper's organizing idea is to separate two sources of residual exposure that field measurements usually conflate: protocol-design limitations (flaws that survive standards compliance) and implementation gaps (vendor- or operator-specific weaknesses). Rather than overpowering a legitimate cell, 5G-Shark exploits the standardized cell-reselection procedure (3GPP TS 38.304): it broadcasts System Information Blocks claiming higher or equal reselection priority on the frequency a target device already prefers, so the device reselects to the attacker's rogue cell per normal standard behavior. Once camped, the rogue cell issues an unauthenticated IDENTITY_REQUEST to extract the subscriber's SUCI/IMSI, and can send unauthenticated REGISTRATION_REJECT messages with chosen cause codes to force a RAT downgrade or a denial-of-service state.

Testing against three Tier-1 commercial operators (labelled A, B, C) with seven COTS devices (including a Galaxy Z Flip3, Oppo Find X5 Lite, iPhone 13 Pro, Google Pixel 8, Galaxy S23 and a Quectel RM520N-GL module) found that only a subset of devices could attach to the commercial SA networks (SA was available only from Operators A and B); three devices concealed identity correctly, while a Galaxy S23 using a legacy SIM sent its IMSI in cleartext, and the others could not attach because of band support. On 5G Non-Standalone (NSA) networks — which rely on a 4G control plane — all seven devices exposed a permanent, cleartext IMSI during forced re-registration, which the authors classify as a protocol-design limitation of NSA rather than a vendor bug. Specific REGISTRATION_REJECT cause codes reliably forced devices down to LTE (losing SUCI protection) or to UMTS "Limited Service" with no data connectivity; two further cause codes (#11/#73) triggered infinite retry loops that ignore the standard back-off timer and drain battery via signalling storms, while cause #12 froze a Galaxy S23's modem completely, requiring a manual airplane-mode toggle. A longitudinal analysis of 3,742 observed GUTI (temporary identifier) values across the three operators found that Operator A (both RATs) and Operator B's NSA network allocate GUTIs in quasi-sequential steps of at most 0.11% of their effective range (versus roughly 29% expected under uniform re-randomisation), while Operator B's SA network is only partially re-randomised (2.74%) — enabling persistent tracking of a "concealed" subscriber across re-registrations despite correct SUCI use, an implementation gap distinct from the NSA protocol-design issue. The authors describe 5G-Shark as open source and state the anonymised dataset will be released upon acceptance.

## Summary (ZH)

Oscar Lasierra、Gines Garcia-Aviles、Antonio Skarmeta 与 Xavier Costa-Perez 提出了 5G-Shark，这是一款开源安全审计工具，可在不进行主动干扰或畸形报文注入的情况下，评估真实商用 5G 网络中的用户隐私与信令抗扰性状况。论文的核心思路是区分现场测量中通常被混为一谈的两类残余暴露来源：协议设计层面的局限（即使完全符合标准规范也存在的缺陷）与实现层面的缺口（特定厂商或运营商的薄弱环节）。5G-Shark 并非通过压制合法小区信号，而是利用标准化的小区重选流程（3GPP TS 38.304）：它广播系统信息块（SIB），在目标设备本已偏好的频段上宣称更高或相同的重选优先级，使设备按照标准正常行为重选到攻击者的伪基站。设备驻留后，伪基站发送未经认证的 IDENTITY_REQUEST 以提取用户的 SUCI/IMSI，并可发送带有特定原因码的未认证 REGISTRATION_REJECT 消息，强制触发制式降级或拒绝服务状态。

研究团队对三家一级运营商（标记为 A、B、C）及七款商用现货终端（包括 Galaxy Z Flip3、Oppo Find X5 Lite、iPhone 13 Pro、Google Pixel 8、Galaxy S23 及 Quectel RM520N-GL 模组）进行了测试。结果显示：在 5G 独立组网（SA）网络中——仅 A、B 两家运营商提供 SA 网络——只有部分终端能够附着：三款终端正确隐藏了身份标识，一台使用旧版 SIM 卡的 Galaxy S23 仍以明文发送了 IMSI，其余终端因频段支持问题无法附着。在依赖 4G 控制面的 5G 非独立组网（NSA）网络中，全部七款终端在被迫重新注册时均暴露了永久性明文 IMSI——作者将其归类为 NSA 架构本身的协议设计局限，而非厂商实现缺陷。特定的 REGISTRATION_REJECT 原因码能可靠地将终端降级至 LTE（从而失去 SUCI 保护），或降级至 UMTS 的"受限服务"状态且无数据连接；另有两个原因码（#11/#73）会触发无限重试循环，忽略标准规定的退避计时器，通过信令风暴耗尽终端电量；原因码 #12 则使一部 Galaxy S23 的基带完全无响应，需手动切换飞行模式才能恢复。研究团队对三家运营商共计 3,742 次观测到的 GUTI（临时标识符）取值进行了纵向分析，发现运营商 A（两种制式）以及运营商 B 的 NSA 网络分配新 GUTI 时呈准顺序递增模式（相邻取值间隔最高为其有效取值范围的 0.11%，而均匀重新随机化下预期约为 29%），而运营商 B 的 SA 网络仅实现了部分重新随机化（2.74%）——这使得即便正确使用了 SUCI，"已隐藏"的用户仍可在多次重新注册间被持续追踪，这是一种区别于 NSA 协议设计问题的实现层面缺口。作者称 5G-Shark 已开源，匿名化数据集将在论文录用后公开。

## Key technical points (EN)

- Rogue-cell creation via the standardized 3GPP TS 38.304 cell-reselection procedure — no jamming or malformed packets, "minimal service disruption" per the authors.
- Attack cycle: SIB-based priority manipulation -> forced reselection -> unauthenticated IDENTITY_REQUEST for SUCI/IMSI extraction -> unauthenticated REGISTRATION_REJECT for RAT downgrade or DoS.
- Tested against 3 Tier-1 commercial operators and 7 COTS devices; NSA networks exposed cleartext IMSI on all 7 devices (protocol-design limitation); SA networks were available only from Operators A and B, where 3 devices concealed identity correctly, a Galaxy S23 leaked cleartext IMSI via a legacy-SIM anomaly, and the rest could not attach because of band support.
- Specific REGISTRATION_REJECT cause codes force LTE downgrade, UMTS "Limited Service" fallback, infinite-retry battery-drain loops (#11/#73), or a frozen modem requiring manual recovery (#12, observed on a Galaxy S23).
- Longitudinal GUTI analysis (3,742 observations, 3 operators): Operator A (both RATs) and Operator B's NSA network allocate GUTIs in quasi-sequential steps of at most 0.11% of their effective range (vs. ~29% expected under uniform re-randomisation); Operator B's SA network is only partially re-randomised (2.74%) — enabling persistent tracking despite correct SUCI concealment.
- Root-cause attribution framework distinguishes protocol-design limitations (survive standards compliance) from implementation gaps (vendor/operator-specific).
- The authors describe 5G-Shark as open source; the anonymised dataset will be released upon acceptance.

## Key technical points (ZH)

- 利用标准化的 3GPP TS 38.304 小区重选流程构建伪基站——无需干扰或畸形报文，作者称其"服务中断影响极小"。
- 攻击流程：基于 SIB 的优先级操纵 -> 强制重选 -> 未认证 IDENTITY_REQUEST 提取 SUCI/IMSI -> 未认证 REGISTRATION_REJECT 实现制式降级或拒绝服务。
- 对 3 家一级运营商、7 款商用终端进行测试；NSA 网络下全部 7 款终端均暴露明文 IMSI（协议设计局限）；SA 网络仅由 A、B 两家运营商提供，其中 3 款终端正确隐藏身份标识，一台 Galaxy S23 因旧版 SIM 配置异常泄露明文 IMSI，其余终端因频段支持问题无法附着。
- 特定 REGISTRATION_REJECT 原因码可强制触发 LTE 降级、UMTS"受限服务"回落、无限重试导致的电量耗尽循环（#11/#73），或基带完全冻结需手动恢复（#12，在一台 Galaxy S23 上观测到）。
- 对 3 家运营商共 3,742 次 GUTI 观测的纵向分析：运营商 A（两种制式）及运营商 B 的 NSA 网络的 GUTI 分配呈准顺序递增（相邻取值间隔最高为有效范围的 0.11%，均匀重新随机化下预期约为 29%）；运营商 B 的 SA 网络仅部分重新随机化（2.74%），即便正确隐藏 SUCI 仍可被持续追踪。
- 提出了区分协议设计局限（合规仍存在）与实现缺口（厂商/运营商特定）的根因归属框架。
- 作者称 5G-Shark 已开源；匿名化数据集将在论文录用后公开。

## Why it matters / what's new (EN)

The KB's existing 5G-core security entries (e.g. `2026-09-08_arxiv-drishti-5g-core-vulnerability-auditing`) focus on auditing open-source core-network code; this entry is the first in this KB to report field measurements against live commercial 5G SA/NSA deployments using an SDR-based rogue-cell tool, and the GUTI-sequentiality finding (quasi-sequential allocation from Operator A on both RATs and from Operator B's NSA network, with Operator B's SA network only partially re-randomised) is a concrete, operator-specific implementation gap distinct from any protocol-level 5G-AKA privacy issue previously catalogued here.

## Why it matters / what's new (ZH)

知识库现有的 5G 核心网安全相关条目（如 `2026-09-08_arxiv-drishti-5g-core-vulnerability-auditing`）聚焦于对开源核心网代码的审计；本条目是本知识库中首次报告针对真实商用 5G SA/NSA 网络、基于 SDR 伪基站工具的实地测量结果，其中"GUTI 准顺序分配"这一发现（运营商 A 的两种制式及运营商 B 的 NSA 网络存在此问题，运营商 B 的 SA 网络仅部分重新随机化）是一项具体的、运营商特定的实现缺口，不同于此前收录的任何协议层面的 5G-AKA 隐私问题。
