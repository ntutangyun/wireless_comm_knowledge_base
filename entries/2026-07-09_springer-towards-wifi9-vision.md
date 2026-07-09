---
id: 2026-07-09_springer-towards-wifi9-vision
date_published: 2026-03-12
date_found: 2026-07-09
type: academic-paper
title_en: "Towards Wi-Fi 9: Vision, Requirements, and Candidate Technologies (Karamyshev, Levitsky & Khorov)"
title_zh: "迈向 Wi-Fi 9：愿景、需求与候选技术（Karamyshev、Levitsky 与 Khorov）"
url: "https://link.springer.com/article/10.1134/S0032946025040040"
source_quality: full
topics: [Wi-Fi 9, 802.11bn, WNG-SC, determinism, MAPC, AI]
topic_primary: wifi8-uhr
topics_secondary: [wifi-for-ai, ai-for-wifi, rtwt-latency, mapc-cosr]
novelty_score: 3
---

## Summary (EN)

"Towards Wi-Fi 9: Vision, Requirements, and Candidate Technologies" (A. Karamyshev, I. Levitsky, E. Khorov; Problems of Information Transmission vol. 61, pp. 383-406; open access, published online March 12, 2026) is the first journal-length synthesis of the post-802.11bn discussion. It systematically digests the contributions solicited by the IEEE 802.11 Wireless Next Generation Standing Committee (WNG SC, per Doc. 25/2254r3) and presented at the January 2026 Wireless Interim — the same contribution stream this KB tracked via the WNG SC Mentor digests — into a coherent vision of what the amendment tentatively called "802.11bX" / Wi-Fi 9 will optimize for.

The core thesis: the throughput-driven era is structurally over. Further nominal-rate gains require spectrum that faces regulatory uncertainty or spatial streams that cost silicon, power and sounding overhead, while delivering diminishing real-world benefit. The emerging consensus instead prioritizes *deterministic performance* — consistent latency/reliability across deployment conditions — and *expanded application domains*. Three market forces anchor the requirements analysis: AI workloads that invert the traditional downlink-heavy asymmetry (continuous sensor streaming and model offload make uplink capacity and latency first-class objectives — "Wi-Fi for AI"); industrial robotics demanding sub-millisecond deterministic latency; and immersive XR requiring simultaneous throughput+latency+reliability guarantees. It also flags an underexplored constraint: smartphones increasingly acting as mobile APs, which pushes power-efficiency and thermal limits into AP-side design, and competitive pressure from private 5G/6G on Wi-Fi's indoor turf.

The candidate-technology survey spans four axes. PHY: continued bandwidth expansion and new spectrum are still proposed (e.g. Doc. 26/0154r1), but WNG interest is shifting to "intelligent" techniques that improve performance without new spectrum or hardware. MAC: scheduled operation (moving beyond EDCA's contention), low-latency mechanisms, mobile-AP support, and power management. Coordination: from refined 802.11bn-style MAPC up to distributed MIMO and network-wide interference management. AI: integration across the stack for prediction, optimization and automation. The paper closes with compatibility analysis and a standardization timeline targeting commercial Wi-Fi 9 deployment in the 2030s.

## Summary (ZH)

《迈向 Wi-Fi 9：愿景、需求与候选技术》（A. Karamyshev、I. Levitsky、E. Khorov；Problems of Information Transmission 第 61 卷 383-406 页；开放获取，2026 年 3 月 12 日在线发表）是关于后 802.11bn 讨论的首篇期刊级综述。它系统消化了 IEEE 802.11 无线下一代常设委员会（WNG SC，见文档 25/2254r3）征集、并在 2026 年 1 月无线中期会议上宣讲的各方贡献——即本 KB 通过 WNG SC Mentor 摘要持续跟踪的同一贡献流——形成了对暂称"802.11bX"/Wi-Fi 9 的连贯愿景。

核心论点：吞吐驱动的时代在结构上已经结束。进一步提升标称速率要么需要面临监管不确定性的新频谱，要么需要付出芯片、功耗与信道探测开销代价的更多空间流，而真实世界收益递减。新共识转向优先保证"确定性性能"——跨部署条件的一致时延/可靠性——并扩展应用领域。需求分析锚定三大市场动力：AI 负载颠倒了传统下行为主的流量不对称（持续的传感器上传与模型卸载使上行容量与时延成为一级设计目标，即"Wi-Fi for AI"）；工业机器人要求亚毫秒级确定性时延；沉浸式 XR 要求同时满足吞吐+时延+可靠性约束。论文还指出一个被低估的约束：手机日益充当移动 AP，把功耗与散热限制引入 AP 侧设计；同时私有 5G/6G 正在挤压 Wi-Fi 的室内优势。

候选技术综述覆盖四个轴线。PHY：仍有继续扩带宽、拓新频谱的提案（如文档 26/0154r1），但 WNG 的兴趣正转向不依赖新频谱或硬件的"智能化"技术。MAC：调度化运行（超越 EDCA 竞争接入）、低时延机制、移动 AP 支持与功耗管理。协调：从改良的 802.11bn 式 MAPC 到更激进的分布式 MIMO 与全网干扰管理。AI：贯穿协议栈的预测、优化与自动化集成。论文最后给出兼容性分析与标准化时间线——Wi-Fi 9 商用部署瞄准 2030 年代。

## Key technical points (EN)

- First peer-reviewed synthesis of the Wi-Fi 9 / "802.11bX" definition phase, built from WNG SC contributions (Doc. 25/2254r3 call; January 2026 Interim submissions).
- Thesis: pivot from peak nominal rates to deterministic performance — consistent latency, reliability, and real-deployment consistency as the primary objectives.
- "Wi-Fi for AI": AI devices invert traffic asymmetry with continuous uplink (sensor streaming, model offload) → uplink efficiency/capacity/latency become primary design objectives.
- "AI for Wi-Fi": predictive scheduling, intelligent interference mitigation, network-wide optimization as a native toolkit across the stack.
- Candidate MAC directions: scheduled (contention-free) operation, low-latency mechanisms beyond R-TWT/P-EDCA, mobile-AP (smartphone-as-AP) support with thermal/power constraints, power management.
- Coordination axis runs from evolutionary MAPC refinement to distributed MIMO / joint interference management across APs.
- Historical framing: traces the arc 802.11a/g (OFDM) → e (EDCA) → n/ac (MIMO/bonding) → ax (OFDMA/SR/TWT) → be (MLO/R-TWT/4096-QAM) → bn (DRU, IMP, UEQM, ELR, P-EDCA, NPCA, DSO, MAPC) to argue each era's driver; Wi-Fi 9's driver is determinism + AI.
- Timeline: Wi-Fi 9 commercial deployment anticipated in the 2030s; 802.11bn D1.0 reached August 2025 with comment resolution ongoing (consistent with the LB291 grind tracked in this KB's Mentor digests).

## Key technical points (ZH)

- 关于 Wi-Fi 9 /"802.11bX" 定义阶段的首篇同行评审综述，基于 WNG SC 贡献（征集文档 25/2254r3；2026 年 1 月中期会议提交）。
- 论点：从峰值标称速率转向确定性性能——一致的时延、可靠性与真实部署下的稳定表现是首要目标。
- "Wi-Fi for AI"：AI 设备以持续上行（传感器流、模型卸载）颠倒流量不对称 → 上行效率/容量/时延成为一级设计目标。
- "AI for Wi-Fi"：预测式调度、智能干扰抑制、全网优化成为贯穿协议栈的原生工具箱。
- 候选 MAC 方向：调度化（免竞争）运行、超越 R-TWT/P-EDCA 的低时延机制、带散热/功耗约束的移动 AP（手机作 AP）支持、功耗管理。
- 协调轴线从渐进式 MAPC 改良延伸到分布式 MIMO / 跨 AP 联合干扰管理。
- 历史脉络：梳理 802.11a/g（OFDM）→ e（EDCA）→ n/ac（MIMO/信道绑定）→ ax（OFDMA/空间复用/TWT）→ be（MLO/R-TWT/4096-QAM）→ bn（DRU、IMP、UEQM、ELR、P-EDCA、NPCA、DSO、MAPC）各代驱动力；Wi-Fi 9 的驱动力是确定性 + AI。
- 时间线：Wi-Fi 9 商用部署预计在 2030 年代；802.11bn D1.0 于 2025 年 8 月达成，评论决议进行中（与本 KB Mentor 摘要跟踪的 LB291 进程一致）。

## Why it matters / what's new (EN)

The KB's picture of Wi-Fi 9 so far comes from primary-source fragments: the January/March 2026 readouts (2026-05-01_ieee-january-2026-readout, 2026-05-01_ieee-march-2026-readout, which noted "Wi-Fi 9 SG forming July 2026") and the WNG SC Mentor digest of directional pitches (2026-05-12_ieee-mentor-wng-sc-antwerp-digest). This entry adds the first *consolidated, citable* account that organizes those fragments into requirements and a technology taxonomy — from the Khorov group (IITP RAS), whose Wi-Fi 8 tutorial is among the field's most-cited. Timely context: the July 2026 Montreal plenary (next week at date_found) is exactly where the Wi-Fi 9 Study Group formation flagged in the March readout is expected to be decided.

## Why it matters / what's new (ZH)

本 KB 此前对 Wi-Fi 9 的认知来自一手碎片：2026 年 1 月/3 月会议纪要条目（2026-05-01_ieee-january-2026-readout、2026-05-01_ieee-march-2026-readout，后者提到"Wi-Fi 9 SG 预计 2026 年 7 月成立"）与 WNG SC 方向性提案的 Mentor 摘要（2026-05-12_ieee-mentor-wng-sc-antwerp-digest）。本条目补上了首个可引用的整合叙述，将这些碎片组织为需求与技术分类——出自 Khorov 团队（IITP RAS），其 Wi-Fi 8 教程是该领域引用最多的文献之一。时机上：7 月蒙特利尔全会（本条目收录时的下一周）正是 3 月纪要中预告的 Wi-Fi 9 研究组成立与否的决断点。
