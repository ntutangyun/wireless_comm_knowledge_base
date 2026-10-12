---
id: 2026-10-12_arxiv-ris-sagin-fr3-hierarchical-association
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "Hierarchical RIS Association for FR3 Space-Air-Ground Integrated Networks"
title_zh: "面向 FR3 频段空天地一体化网络的分层 RIS 关联方案"
url: "https://arxiv.org/abs/2610.09010"
source_quality: full
topics: [RIS, FR3, upper-mid-band, SAGIN, LEO, UAV, matching-theory, user-association]
topic_primary: ntn
topics_secondary: [cellular-massive-mimo]
novelty_score: 2
---

## Summary (EN)
Muddasir Rahim, Irfan Azam, and Soumaya Cherkaoui (Polytechnique Montreal) address user-RIS association in a space-air-ground integrated network (SAGIN) operating in the upper mid-band / FR3 spectrum (7-15 GHz), a band the authors position as a tradeoff between the limited bandwidth of sub-6 GHz systems and the severe propagation losses of mmWave/THz, but one more sensitive to path loss, penetration loss, and line-of-sight blockage than legacy cellular bands. The considered network has a terrestrial base station (BS) as the primary access node, a low-Earth-orbit (LEO) satellite providing complementary connectivity when terrestrial links cannot meet QoS requirements, multiple terrestrial RISs (TRISs), and UAV-mounted RISs (ARISs) that assist the non-terrestrial segment. The paper's stated motivation is that prior hierarchical RIS-assisted terrestrial/non-terrestrial studies mostly assume terahertz or very-high-frequency bands where direct BS-UE links are assumed unavailable — an assumption the authors say does not hold for FR3, where direct links, TRIS-assisted links, and LEO-assisted ARIS links can all remain viable depending on channel conditions.

The authors formulate the UE-RIS association problem as a sum-rate-maximizing mixed-integer nonconvex optimization under RIS capacity constraints, which is hard to solve directly because of binary association variables and coupling among UEs competing for limited RIS resources. They propose a hierarchical many-to-one matching-based framework implemented via deferred acceptance: UEs with satisfactory terrestrial connectivity are first associated with TRISs; UEs that cannot be reliably served this way are then associated with ARISs through the LEO-assisted non-terrestrial path. Simulations (MATLAB, averaged over 10^6 independent runs; BS transmit power fixed at 30 dBm, noise power spectral density -174 dBm/Hz, receiver noise figure 10 dB) compare the proposed hierarchical matching scheme against greedy (GS) and random (RS) association baselines across varying transmit power, number of RIS reflecting elements, and deployment area size. The proposed scheme consistently achieves the highest network sum rate across all tested conditions: RS, which ignores channel conditions entirely, yields the lowest achievable sum rate, while GS's locally optimal decisions lead to suboptimal resource utilization; the proposed hierarchical scheme's advantage persists as the number of RIS reflecting elements grows (via increased beamforming gain) and across UE counts in 500×500 m² and 1000×1000 m² areas (sum rate first rises with more UEs, then declines as UEs compete for limited RIS resources; the larger area achieves the higher sum rate).

## Summary (ZH)
Muddasir Rahim、Irfan Azam 与 Soumaya Cherkaoui（蒙特利尔理工大学）研究了工作于中高频段（上中频带，FR3，7–15 GHz）的空天地一体化网络（SAGIN）中的用户-RIS 关联问题。作者将 FR3 定位为在 6GHz 以下系统带宽受限与毫米波/太赫兹频段传播损耗严重之间的一种折中方案，但其对路径损耗、穿透损耗及视距阻挡的敏感程度仍高于传统蜂窝频段。所考虑的网络包含：作为主接入节点的地面基站（BS）；在地面链路无法满足 QoS 要求时提供补充连接的低轨（LEO）卫星；多个地面可重构智能表面（TRIS）；以及辅助非地面网络段的无人机载可重构智能表面（ARIS）。论文指出其研究动机在于：此前关于分层 RIS 辅助地面/非地面网络的研究大多假设工作于太赫兹或甚高频段，并假定地面基站到用户的直接链路不可用——作者认为这一假设在 FR3 频段下并不成立，因为在该频段下，直接链路、TRIS 辅助链路以及 LEO 辅助的 ARIS 链路均可能依据信道条件保持可用。

作者将用户-RIS 关联问题建模为在 RIS 容量约束下的混合整数非凸优化问题，以最大化网络总和速率为目标；由于关联变量为二元变量，且用户之间会因竞争有限的 RIS 资源而相互耦合，该问题难以直接求解。为此，作者提出了一种基于分层多对一匹配、通过延迟接受算法实现的关联框架：地面连接质量令人满意的用户首先与 TRIS 关联；无法通过该方式获得可靠服务的用户，则通过 LEO 辅助的非地面路径与 ARIS 关联。仿真实验（基于 MATLAB，取 10^6 次独立运行的平均值；基站发射功率固定为 30 dBm，噪声功率谱密度为 -174 dBm/Hz，接收机噪声系数为 10 dB）在不同发射功率、RIS 反射单元数量及部署区域大小条件下，将所提出的分层匹配方案与贪婪（GS）和随机（RS）关联基线进行对比。在所有测试条件下，所提方案均持续取得最高的网络总和速率：完全忽略信道条件的 RS 方案取得的可达总和速率最低，而 GS 方案的局部最优决策会导致资源利用欠佳；随着 RIS 反射单元数量增加（带来更高的波束成形增益），以及在 500×500 m² 与 1000×1000 m² 区域内不同用户数下（总和速率随用户数先升后降，原因是用户对有限 RIS 资源的竞争加剧；较大区域取得更高总和速率），所提分层方案的优势始终得以保持。

## Key technical points (EN)
- Models a SAGIN with a terrestrial BS, LEO satellite, multiple terrestrial RISs (TRISs), and UAV-mounted RISs (ARISs), operating in the FR3 / upper-mid-band (7-15 GHz).
- Unlike prior hierarchical RIS studies focused on terahertz or very-high-frequency bands, explicitly allows direct BS-UE, TRIS-assisted, and LEO-assisted ARIS links to all remain viable depending on channel conditions, as is realistic at FR3.
- Formulates UE-RIS association as a sum-rate-maximizing mixed-integer nonconvex problem under RIS capacity constraints.
- Solves it with a hierarchical many-to-one matching (deferred-acceptance) framework: terrestrial-first TRIS association, falling back to LEO-assisted ARIS association only when terrestrial QoS cannot be met.
- MATLAB simulations (10^6-run averages; 30 dBm BS power, -174 dBm/Hz noise PSD, 10 dB noise figure) show consistent sum-rate gains over greedy and random association baselines across transmit power, RIS element count, and deployment area.

## Key technical points (ZH)
- 构建了包含地面基站、LEO 卫星、多个地面 RIS（TRIS）及无人机载 RIS（ARIS）的 SAGIN 模型，工作于 FR3 / 中高频段（7–15 GHz）。
- 与此前聚焦太赫兹或甚高频段的分层 RIS 研究不同，本文明确允许直接 BS-UE 链路、TRIS 辅助链路与 LEO 辅助 ARIS 链路均可能依信道条件保持可用，这更符合 FR3 频段的实际情况。
- 将用户-RIS 关联问题建模为在 RIS 容量约束下、以最大化网络总和速率为目标的混合整数非凸优化问题。
- 采用基于延迟接受算法的分层多对一匹配框架求解：优先尝试地面 TRIS 关联，仅当地面链路无法满足 QoS 时才回退至 LEO 辅助的 ARIS 关联。
- MATLAB 仿真（10^6 次运行平均；基站功率 30 dBm，噪声功率谱密度 -174 dBm/Hz，噪声系数 10 dB）表明，在不同发射功率、RIS 单元数量及部署区域条件下，所提方案相较贪婪与随机关联基线均能持续取得总和速率增益。

## Why it matters / what's new (EN)
The authors argue that prior hierarchical RIS work for terrestrial/non-terrestrial networks targets terahertz or very-high-frequency bands where direct terrestrial links are assumed unavailable; at FR3 they model direct, TRIS-assisted and LEO-assisted ARIS paths as all potentially viable, which motivates a terrestrial-first, NTN-fallback association scheme.

## Why it matters / what's new (ZH)
作者指出，既有分层 RIS 地面/非地面研究多面向太赫兹或甚高频段并假设无直接地面链路；在 FR3 频段，直接链路、TRIS 辅助链路与 LEO 辅助 ARIS 链路都可能可用，因而提出"地面优先、非地面兜底"的分层关联方案。

## Images

None.
