---
id: 2026-09-17_arxiv-xona-pulsar-spaceborne-gnss-compat
date_published: 2026-09-15
date_found: 2026-09-17
technology: satellite
type: academic-paper
title_en: "Xona Pulsar Compatibility with Spaceborne GNSS Receivers"
title_zh: "Xona Pulsar 星座与星载 GNSS 接收机的兼容性分析"
url: "https://arxiv.org/abs/2609.17174"
source_quality: full
topics: [LEO-PNT, GNSS-compatibility, ITU-R-M.1831, C/N0-degradation]
topic_primary: leo-constellations
topics_secondary: [ngso-regulation]
novelty_score: 3
---

## Summary (EN)

Kriezis, Turner, Mah, O'Meara, and Reid (Xona Space Systems) submitted this paper on 2026-09-15 to address a compatibility question that the authors say has received comparatively little attention: whether a Low Earth Orbit (LEO) Positioning, Navigation, and Timing (PNT) constellation operating in RNSS L-band spectrum can coexist with GNSS receivers flown aboard other spacecraft, as opposed to the terrestrial and airborne receivers that existing compatibility frameworks were built for. The paper's own framing is that MEO GNSS constellations (GPS, Galileo) sit roughly 20,000 km up and are naturally separated from most spacecraft, but LEO PNT systems operate at 800-1200 km, in the same orbital neighborhood as many other satellites, so a nearby spaceborne receiver can see much higher received power than a terrestrial user would.

The authors extend the ITU-R M.1831-1 coordination methodology (originally written for terrestrial RNSS receivers) to spaceborne users, and apply it to Xona's own Pulsar constellation (planned at approximately 258 satellites, dual L-band signals adjacent to GPS L1 and L5) against legacy GPS and Galileo receivers on other spacecraft at altitudes from 400 km to 1000 km. A static worst-case analysis computes C/N0 degradation as a function of receiver altitude, and a dynamic analysis propagates the full 258-satellite Pulsar constellation over a 48-hour window at five different user-satellite inclinations (0 deg to 98 deg) to capture how often the worst-case geometry actually occurs.

The static analysis found C/N0 degradation stays limited for receiver altitudes between 400 km and 900 km, and only grows for spacecraft close to the Pulsar shells (900-1000 km). The dynamic analysis, run for the worst case of a user satellite at 1000 km (80 km below the Pulsar shells), showed that GPS L1 never exceeded 1 dB of C/N0 degradation across the 48-hour simulation, while for GPS L5 (identified as the worst-case signal), degradation events above 3 dB occurred less than 1% of the time and generally lasted under 20 seconds. Across all simulated inclinations, the 99th-percentile degradation stayed below 3 dB and the 90th-percentile stayed well below 1 dB. The paper's stated conclusion is that compatibility is driven primarily by orbital separation distance rather than by Pulsar's transmit power alone, and that Pulsar can coexist with legacy GNSS without sustained degradation to spaceborne navigation performance, while noting the same framework applies to any emerging LEO PNT system, not just Pulsar.

## Summary (ZH)

Kriezis、Turner、Mah、O'Meara 与 Reid（均来自 Xona Space Systems）于 2026 年 9 月 15 日提交本文，研究一个作者称此前关注较少的兼容性问题：在 RNSS L 频段运行的低地球轨道（LEO）定位、导航与授时（PNT）星座，能否与搭载在其他航天器上的 GNSS 接收机共存——而非现有兼容性框架所针对的地面与机载接收机。论文的出发点是：GPS、Galileo 等中地球轨道（MEO）星座位于约 2 万公里高空，与大多数航天器自然隔开较远距离；而 LEO PNT 系统运行在 800-1200 公里高度，与许多其他卫星处于同一轨道邻域，因此附近的星载接收机所接收到的功率可能远高于地面用户。

作者将原本为地面 RNSS 接收机制定的 ITU-R M.1831-1 协调方法扩展至星载用户，并将其应用于 Xona 自家的 Pulsar 星座（计划约 258 颗卫星，采用与 GPS L1、L5 相邻的双 L 频段信号），评估其对搭载在 400 公里至 1000 公里高度其他航天器上的传统 GPS、Galileo 接收机的影响。静态最坏情况分析计算了 C/N0 恶化程度随接收机高度的变化；动态分析则将完整的 258 颗 Pulsar 卫星按 48 小时窗口进行轨道传播，并针对五种不同的用户卫星倾角（0° 至 98°）进行仿真，以刻画最坏几何情形出现的实际频率。

静态分析发现，在 400 公里至 900 公里高度范围内 C/N0 恶化程度维持在有限水平，仅在接近 Pulsar 轨道壳层（900-1000 公里）的航天器上才明显增大。针对最坏情形——用户卫星位于 1000 公里高度（比 Pulsar 壳层低 80 公里）——的动态分析显示，在 48 小时仿真期间 GPS L1 的 C/N0 恶化从未超过 1 dB；对于被认定为最坏情形信号的 GPS L5，恶化超过 3 dB 的事件发生概率低于 1%，且通常持续不到 20 秒。在所有仿真倾角下，第 99 百分位的恶化均低于 3 dB，第 90 百分位则远低于 1 dB。论文得出的结论是：兼容性主要由轨道间隔距离决定，而非仅由 Pulsar 的发射功率决定，Pulsar 可以与传统 GNSS 共存，而不会对星载导航性能造成持续性恶化；作者同时指出，该方法框架同样适用于其他新兴 LEO PNT 系统，而不限于 Pulsar 本身。

## Key technical points (EN)

- **Problem framing**: existing RNSS compatibility methodology (ITU-R M.1831) was built for terrestrial/airborne receivers; LEO PNT's close orbital proximity to other spacecraft makes spaceborne-receiver compatibility a distinct, under-studied question.
- **Method**: extends ITU-R M.1831-1's C/N0-degradation formula (based on ambient thermal noise plus reference/remaining/alternate-system interference terms) from terrestrial to orbital geometry.
- **Static analysis**: worst-case C/N0 degradation computed for receiver altitudes 400-1000 km against Xona Pulsar's X1 (near GPS L1/Galileo E1) and X5 (near GPS L5/Galileo E5) signals.
- **Dynamic analysis**: full 258-satellite Pulsar constellation propagated over 48 hours at a 1-second timestep, for five user-satellite inclinations (0 deg-98 deg), recomputing instantaneous free-space path loss and aggregate interference at each step.
- **Headline results (from the 48-hour dynamic simulation)**: GPS L1 C/N0 degradation never exceeded 1 dB for a 1000 km user satellite; GPS L5 (worst-case signal) exceeded 3 dB less than 1% of the time, generally for under 20 seconds per event; 99th-percentile degradation stayed below 3 dB across all tested inclinations.
- **Conclusion (paper's own framing)**: compatibility is governed by orbital separation distance, not transmit power alone; the framework generalizes beyond Pulsar to other emerging LEO PNT systems.

## Key technical points (ZH)

- **问题背景**：现有 RNSS 兼容性方法（ITU-R M.1831）是为地面/机载接收机设计的；LEO PNT 系统与其他航天器在轨道上距离很近，使星载接收机兼容性成为一个此前研究较少的独立问题。
- **方法**：将 ITU-R M.1831-1 中基于环境热噪声与参考/剩余/新增系统干扰项的 C/N0 恶化公式，从地面几何扩展至轨道几何。
- **静态分析**：针对 400-1000 公里高度的接收机，计算 Xona Pulsar X1 信号（邻近 GPS L1/Galileo E1）与 X5 信号（邻近 GPS L5/Galileo E5）导致的最坏情况 C/N0 恶化。
- **动态分析**：以 1 秒为步长，对完整的 258 颗 Pulsar 卫星星座进行 48 小时轨道传播，针对五种用户卫星倾角（0° 至 98°）在每个时间步重新计算瞬时自由空间路径损耗与聚合干扰。
- **主要结果（均来自 48 小时动态仿真）**：对于 1000 公里高度的用户卫星，GPS L1 的 C/N0 恶化从未超过 1 dB；作为最坏情形信号的 GPS L5，超过 3 dB 的概率低于 1%，且通常每次持续不到 20 秒；在所有测试倾角下，第 99 百分位的恶化均低于 3 dB。
- **结论（论文自陈）**：兼容性主要由轨道间隔距离决定，而非仅由发射功率决定；该方法框架可推广至 Pulsar 以外的其他新兴 LEO PNT 系统。

## Why it matters / what's new (EN)

The KB's existing LEO-PNT thread (`2026-08-28` Xona Pulsar entry, `2026-09-11` TrustPoint/EnduroSat C-band entry) has so far covered constellation announcements and manufacturing contracts for GNSS-alternative LEO-PNT systems. This paper instead addresses a specific engineering compatibility question — not whether Pulsar interferes with terrestrial GNSS users (already assessed by Xona in 2025, cited here), but whether it interferes with GNSS receivers flying on *other satellites*, a scenario the authors say has received little prior attention because MEO GNSS constellations are far enough from most spacecraft that the question never came up before. The dynamic 48-hour, multi-inclination propagation analysis is the paper's methodological contribution beyond a simple worst-case snapshot.

## Why it matters / what's new (ZH)

知识库现有的 LEO-PNT 相关条目（2026-08-28 Xona Pulsar 条目、2026-09-11 TrustPoint/EnduroSat C 频段条目）此前主要涵盖 GNSS 替代型 LEO-PNT 系统的星座公告与制造合同。本文则聚焦一个具体的工程兼容性问题——它关注的不是 Pulsar 是否会干扰地面 GNSS 用户（Xona 已于 2025 年自行评估过此问题，本文亦有引用），而是它是否会干扰搭载在*其他卫星*上的 GNSS 接收机；作者指出，由于 MEO GNSS 星座与大多数航天器距离足够远，这一问题此前很少被提出。48 小时、多倾角的动态轨道传播分析，是本文超越简单最坏情况快照分析的方法论贡献。

## Images

None.
