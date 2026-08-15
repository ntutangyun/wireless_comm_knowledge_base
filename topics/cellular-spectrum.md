---
id: cellular-spectrum
last_updated: 2026-08-15
---

## Current state (EN)

This bin covers **where cellular gets its spectrum and under what rules**: sub-1 GHz coverage layers, mid-band / C-band capacity bands, mmWave hotspots, the emerging FR3 / upper-mid-band (7–24 GHz) candidates, and the sharing frameworks — CBRS-style tiers, dynamic spectrum access, terrestrial/NTN coexistence — that decide how much of a band a network can actually use. It is the cellular counterpart of the Wi-Fi `spectrum-policy` bin: slow-moving regulatory and coexistence decisions that fix the envelope every later PHY/MAC feature must live inside.

The 2026 storyline is dominated by the **US federal-band 6G pipeline**. NTIA has now cleared study plans for all four candidate bands — 1.6, 2.7, 4.4 (4400–4940 MHz) and 7 GHz — with the 4.4 GHz clearance (`2026-08-15_ntia-4-4ghz-study-cleared-four-band-6g-pipeline`) marking the first time the whole pipeline is under simultaneous study, alongside a 25-government 6G Call to Action. On the licensed side the FCC adopted the **upper C-band auction rules** (`2026-08-05_fcc-upper-cband-auction-rules-adopted`), the next large mid-band tranche. The research thread mirrors the policy one: Northeastern's **AMRA / QGAA framework** (`2026-08-15_arxiv-coordinated-federal-spectrum-coexistence-oran`) treats the crowded 2.7–3.7 GHz federal cluster as a single four-service allocation problem — cellular PRBs, RF sensing, radionavigation (with an explicit positioning-error bound) and radar — solved by an O-RAN Non-RT RIC rApp, and shows 50 MHz shared beating 20 MHz dedicated. Looking upward, the **FR3 terrestrial/NTN sharing** study (`2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing`) frames the 7–24 GHz question as a satellite-coexistence problem from day one.

Watch for: NTIA's Spectrum Reallocation Framework releases for the 1.6 / 2.7 / 4.4 / 7 GHz studies (60-day review after each clearance); the upper C-band auction timetable; WRC-27 agenda-item positions on 6G IMT candidates (especially 7.125–8.4 GHz) and their overlap with the Wi-Fi upper-6 GHz fight; whether federal-incumbent coexistence moves from static CBRS-style tiers toward the fine-grained, coordinator-driven sharing the AMRA/QGAA line proposes; and any 3GPP Rel-20 spectrum-agnostic FR3 numerology decisions.

## Current state (ZH)

本桶覆盖**蜂窝网络从哪里获得频谱、遵循什么规则**：sub-1 GHz 覆盖层、中频 / C-band 容量频段、mmWave 热点、新兴的 FR3 / upper-mid-band（7–24 GHz）候选频段，以及决定一个频段实际可用多少的共享框架——CBRS 式分级、动态频谱接入、地面/NTN 共存。它是 Wi-Fi `spectrum-policy` 桶的蜂窝对应物：缓慢但不可逆的监管与共存决策，划定了之后所有 PHY/MAC 特性必须身处其中的包络。

2026 年的主线是**美国联邦频段 6G 管线**。NTIA 已放行全部四个候选频段——1.6、2.7、4.4（4400–4940 MHz）与 7 GHz——的研究计划，其中 4.4 GHz 的放行（`2026-08-15_ntia-4-4ghz-study-cleared-four-band-6g-pipeline`）标志着整条管线首次同时处于研究状态，同周还有 25 国政府的 6G 联合行动倡议。许可频谱侧，FCC 通过了 **upper C-band 拍卖规则**（`2026-08-05_fcc-upper-cband-auction-rules-adopted`），即下一批大块中频。研究线与政策线互为镜像：东北大学的 **AMRA / QGAA 框架**（`2026-08-15_arxiv-coordinated-federal-spectrum-coexistence-oran`）把拥挤的 2.7–3.7 GHz 联邦频段簇当作单一的四业务分配问题——蜂窝 PRB、射频感知、无线电导航（带显式定位误差界）与雷达——由 O-RAN 非实时 RIC 上的 rApp 求解，并证明 50 MHz 共享优于 20 MHz 专用。向上看，**FR3 地面/NTN 共享**研究（`2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing`）从第一天起就把 7–24 GHz 问题框定为卫星共存问题。

待关注：NTIA 针对 1.6 / 2.7 / 4.4 / 7 GHz 研究的频谱再分配框架发布（每次放行后 60 天审查）；upper C-band 拍卖时间表；WRC-27 议题中 6G IMT 候选频段（尤其 7.125–8.4 GHz）的立场及其与 Wi-Fi upper-6 GHz 之争的重叠；联邦在位业务的共存是否从静态 CBRS 式分级走向 AMRA/QGAA 一线提出的细粒度、协调器驱动的共享；以及 3GPP Rel-20 关于 FR3 频谱无关参数集的任何决定。
