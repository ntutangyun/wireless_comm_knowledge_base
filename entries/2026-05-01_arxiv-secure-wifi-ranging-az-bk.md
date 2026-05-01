---
id: 2026-05-01_arxiv-secure-wifi-ranging-az-bk
date_found: 2026-05-01
date_published: 2026-03-19
type: academic-paper
title_en: "Secure Wi-Fi Ranging Today: Security and Adoption of IEEE 802.11az/bk"
title_zh: "今日安全的 Wi-Fi 测距：IEEE 802.11az/bk 的安全性与落地分析"
url: "https://arxiv.org/abs/2603.18687"
source_quality: full
topics: [802.11az, security, PHY-layer, MAC-layer]
novelty_score: 4
---

## Summary (EN)

Antonijević, Etzlinger, Singelée, and Preneel (March 2026) examine the security posture of IEEE 802.11az and 802.11bk — the post-2023 amendments that aim to bring Wi-Fi ranging up to ultra-wideband-class accuracy by extending the legacy Fine Timing Measurement (FTM) protocol. The paper is the first systematic security analysis of these standards as deployed today on commercial chipsets, and it concludes that the standards in their current implementations are not ready to support high-stakes applications.

The authors split their analysis across the logical and physical layers. At the logical layer, they show that *common* deployment configurations result in **unauthenticated ranging, downgrade attacks, and trivial denial-of-service**, undermining the security promise of the standard. At the physical layer, they analyse waveform predictability, the security implications of symbol-repetition mechanisms, and how design choices affect spectral-mask compliance under realistic RF conditions — flagging that the secure-ranging signal design itself can leak information.

A practical contribution is concrete deployment guidance for FTM users (configuration choices that genuinely activate the secure mode) and a list of standards-body and vendor-side recommendations for closing the gaps. The paper is bluntly cautionary: secure Wi-Fi ranging is "highly sensitive to configuration choices and non-trivial to implement on existing hardware," and current commercial-device support is limited.

## Summary (ZH)

Antonijević、Etzlinger、Singelée 和 Preneel（2026 年 3 月）首次系统性地评估了 IEEE 802.11az 和 802.11bk 的安全态势 —— 这两个 2023 年后批准的修订案旨在在传统 FTM（精细时序测量）协议基础上把 Wi-Fi 测距精度推向 UWB 级别。论文是第一项以"已落地到商用芯片"为视角的系统性安全分析，结论非常直接：当前实现尚不足以支撑高风险应用。

作者将分析分为逻辑层与物理层。在逻辑层，他们指出*常见的*部署配置会导致**无认证测距、降级攻击和简单的拒绝服务攻击**，从而瓦解标准的安全承诺。在物理层，他们研究了波形可预测性、符号重复机制的安全含义，以及设计选择对实际射频条件下频谱掩模合规性的影响 —— 提示安全测距信号本身就可能存在信息泄露。

一项务实贡献是给 FTM 用户的具体部署建议（哪些配置选择能真正启用安全模式），以及给标准化机构和厂商的整改建议清单。论文措辞坦率且具警示性：安全 Wi-Fi 测距"对配置选择高度敏感、且在现有硬件上很难实现"，目前商用设备支持也有限。

## Key technical points (EN)

- **Standards covered:** IEEE 802.11az (next-gen positioning, finalized 2023) and IEEE 802.11bk (extended bandwidth ranging amendment)
- **Logical-layer findings:** unauthenticated ranging, downgrade attacks, denial-of-service all reachable from common deployments
- **PHY-layer findings:** waveform predictability and symbol-repetition leak information; spectral-mask compliance is non-trivial under realistic conditions
- **Implementation reality check:** secure FTM is "highly sensitive to configuration"; current commercial chipsets have limited support
- **Outputs:** deployment guidance for users + recommendations to standards body and vendors

## Key technical points (ZH)

- **覆盖标准：** IEEE 802.11az（下一代定位，2023 年定稿）与 IEEE 802.11bk（带宽扩展测距修订）
- **逻辑层发现：** 常见部署可触发无认证测距、降级攻击、拒绝服务攻击
- **物理层发现：** 波形可预测、符号重复机制泄露信息；实际射频条件下满足频谱掩模并非易事
- **落地现实检查：** 安全 FTM"对配置选择高度敏感"；商用芯片支持有限
- **产出：** 用户侧部署建议 + 给标准化机构与厂商的整改建议

## Why it matters / what's new (EN)

- **First end-to-end security audit of 802.11az/bk on real silicon.** Earlier work analysed individual components; this paper is the joint logical+PHY view that practitioners need before deploying ranging in security-sensitive contexts (access control, vehicular, payment).
- **Live signal for the standards process.** The recommendations to IEEE-SA and vendors are concrete and actionable — likely to surface as comments in the next 802.11 plenary or maintenance round.
- **Adjacent to 802.11bn:** with TGbn explicitly carrying forward features that depend on accurate location/timing (predictive roaming was named in the WNG Wi-Fi 9 discussions, see `2026-05-01_ieee-january-2026-readout.md`), the security floor for 802.11az/bk is increasingly load-bearing for the next generation too.

## Why it matters / what's new (ZH)

- **首篇针对真实芯片的 802.11az/bk 端到端安全审计。** 此前研究只分析单个组件；本论文给出从业者部署测距用于安全敏感场景（门禁、车联、支付）所需要的逻辑+物理联合视角。
- **对标准化流程的实时信号。** 论文给 IEEE-SA 与厂商的建议具体、可执行 —— 大概率会在下一次 802.11 全会或维护回合中以评论形式出现。
- **与 802.11bn 相关：** TGbn 已明确推进对位置/时序精度有依赖的特性（WNG 在 Wi-Fi 9 讨论中点名预测性漫游，见 `2026-05-01_ieee-january-2026-readout.md`），因此 802.11az/bk 的安全底线对下一代标准的承重也在加重。
