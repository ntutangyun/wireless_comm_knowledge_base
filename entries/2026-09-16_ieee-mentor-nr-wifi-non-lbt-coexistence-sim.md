---
id: 2026-09-16_ieee-mentor-nr-wifi-non-lbt-coexistence-sim
date_published: 2026-09-15
date_found: 2026-09-16
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WNG SC contribution: system-level simulation evidence that non-LBT 6G uplink in upper 6 GHz degrades Wi-Fi (Charter Communications, Waikoloa interim)"
title_zh: "IEEE 802.11 WNG SC 贡献：系统级仿真证据显示上 6 GHz 免 LBT 6G 上行会损害 Wi-Fi（Charter Communications 提交，Waikoloa 临时会议）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=1668&is_year=2026"
source_quality: full
topics: [6GHz, AFC, coexistence, WNG-SC, 6G, LBT]
topic_primary: spectrum-policy
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

DCN 11-26-1668r1, "Non-LBT 6G Uplink in Upper 6 GHz: Simulation Evidence of Harm to Wi-Fi" (Mehdi Ganji et al., Charter Communications, uploaded to the WNG SC at the 2026-09-13/18 Waikoloa interim), supplies system-level simulation data for a concern the group had previously raised only qualitatively, in document 11-26/0878 ("Bypassing LBT in US Upper 6 GHz"), which this KB recorded on 2026-05-05 without being able to read its body. With the underlying content now readable, the concern this thread has been raising is the reverse of what the title alone suggested: it is not a request to relax Wi-Fi's own Listen-Before-Talk (LBT) requirement, but a warning about a 3GPP proposal (RP-260414, RP-260881, R2-2601845) to let 6G NR uplink transmit in the unlicensed upper 6 GHz band (the deck labels its 6785 MHz channel U-NII-7; the FCC U-NII rules it cites span 5.925-7.125 GHz) at up to 36 dBm EIRP without any Clear Channel Assessment, by relying on the same FCC Automated Frequency Coordination (AFC) exemption that currently applies to AFC-coordinated Standard-Power Wi-Fi access points and fixed clients (47 CFR 15.407). Because AFC exists to protect licensed fixed-microwave incumbents rather than to arbitrate between unlicensed users, the authors argue it creates an asymmetric access regime if applied to cellular: Wi-Fi (802.11ax/be/bn) must sense the channel idle below a -62 dBm energy-detect threshold before every transmission, while a grant-based non-LBT NR uplink would transmit regardless of channel state.

To move from that qualitative concern to quantified evidence, the authors built a system-level co-simulation coupling a full 5G-Advanced NR PHY/scheduler (per-PRB SINR, MCS-specific BLER, HARQ combining, proportional-fair/round-robin scheduling from real per-UE buffer state, slot-synchronized rather than static-snapshot interference) to a complete Wi-Fi MAC (CSMA/CA with 4-access-category EDCA, binary exponential backoff, A-MPDU aggregation, DL/UL trigger-based OFDMA, energy- and preamble-detect CCA, NAV), rather than reducing Wi-Fi to a binary "is received power above the ED threshold" gate, which the authors note would only show whether Wi-Fi is blocked from starting and not what happens to Wi-Fi frames already in flight. The model exposed two distinct, independently operating harm mechanisms: energy-detect (ED) deferral, where NR energy above the Wi-Fi CCA threshold blocks Wi-Fi from accessing the channel at all, and A-MPDU corruption, where NR raises the interference floor mid-frame and disrupts Wi-Fi frames even in scenarios where deferral never triggers.

Four deployment geometries were simulated with an 802.11be (Wi-Fi 7) baseline (80 MHz on channel 167 at 6785 MHz, one AP serving four STAs at 10 m, no NR present): Scenario A (outdoor macro NR + indoor Wi-Fi, 25 m TRP height), B (rooftop CPE at 5 m + indoor Wi-Fi), C (indoor co-located CPE + indoor Wi-Fi, same room, no wall), and D (rooftop CPE + outdoor strand-mount Wi-Fi, worst case). Relative to the no-NR baseline (59.2 Mbps aggregate goodput, 82.1/18.9 ms mean DL/UL latency, 11.8% MPDU retry rate), total goodput fell 38% (A) to 71% (D), DL latency rose 1.9x to 5.1x, UL latency rose 2.2x to 3.7x, and MPDU retry rate roughly doubled to tripled. The two mechanisms separate cleanly across scenarios: in Scenario A, per-AP energy-detect count stayed at zero (wall and macro-to-indoor path loss keep NR power below the -62 dBm ED threshold at every AP) yet the retry rate still rose 2.2x, isolating A-MPDU corruption as a harm mechanism that operates independently of channel-access denial; in Scenario D, LBT pass rate collapsed to 0.20 with roughly 651,000 ED deferrals per AP, making energy-detect deferral the dominant mechanism, with corruption adding further degradation on top. A second baseline/scenario set using an "ideal scheduler" 802.11ax (Wi-Fi 6E) configuration showed the same monotonic A-through-D degradation pattern (17-42% DL goodput loss, up to 14x the retry rate), with the dominant mechanism shifting from corruption-only in Scenario A to a corruption-plus-ED mix in Scenarios B through D. The authors' stated conclusion is that mandatory Listen-Before-Talk for any technology sharing the 6 GHz band remains, in their view, the only complete regulatory answer, and that a next-generation 802.11 amendment's PAR and CSD ought to reflect robustness to this kind of non-incumbent inter-system aggressor from the outset.

## Summary (ZH)

DCN 11-26-1668r1《上 6 GHz 免 LBT 6G 上行：损害 Wi-Fi 的仿真证据》（Mehdi Ganji 等，Charter Communications，于 2026-09-13 至 18 日 Waikoloa 临时会议提交至 WNG SC）为该团队此前仅以定性方式在文档 11-26/0878《在美国上 6 GHz 绕开 LBT》中提出的担忧提供了系统级仿真数据；本知识库曾于 2026-05-05 记录该文档但当时无法读取其正文。如今正文可读后可以看到，该系列文档所提出的担忧与仅凭标题所推测的方向恰恰相反：这并非要求放宽 Wi-Fi 自身的空闲信道侦听（LBT）要求，而是对 3GPP 一项提案（RP-260414、RP-260881、R2-2601845）的警示——该提案希望让 6G NR 上行在免许可的上 6 GHz 频段（文稿将其 6785 MHz 信道标为 U-NII-7；其引用的 FCC U-NII 规则覆盖 5.925-7.125 GHz）以最高 36 dBm EIRP、且无需任何空闲信道评估（CCA）的方式传输，其依据是借用目前适用于经 AFC 协调的标准功率 Wi-Fi 接入点与固定客户端的同一项 FCC 自动频率协调（AFC）豁免（47 CFR 15.407）。由于 AFC 的设立初衷是保护持牌固定微波链路的既有使用者，而非在免许可用户之间进行仲裁，作者认为若将其套用于蜂窝业务，将造成一种非对称的接入机制：Wi-Fi（802.11ax/be/bn）必须在每次传输前侦测信道是否低于 -62 dBm 的能量检测门限，而基于授权调度、免 LBT 的 NR 上行则无论信道状态如何都会传输。

为将这一定性担忧转化为量化证据，作者构建了一个系统级联合仿真，将完整的 5G-Advanced NR PHY/调度器（逐 PRB SINR、按 MCS 划分的 BLER、HARQ 合并、基于真实逐 UE 缓冲状态的比例公平/轮询调度，且干扰与时隙同步而非采用静态蒙特卡洛快照）与完整的 Wi-Fi MAC（带 4 类接入类别 EDCA 的 CSMA/CA、二进制指数退避、A-MPDU 聚合、基于触发的 DL/UL OFDMA、能量检测与前导码检测 CCA、NAV）耦合在一起，而不是将 Wi-Fi 简化为"接收功率是否高于 ED 门限"的二元门控——作者指出后者只能显示 Wi-Fi 是否被阻止发起传输，而无法显示已在传输中的 Wi-Fi 帧会发生什么。该模型揭示出两种独立运作的损害机制：能量检测（ED）延迟——高于 Wi-Fi CCA 门限的 NR 能量使 Wi-Fi 完全无法接入信道；以及 A-MPDU 损坏——NR 在帧传输过程中抬高干扰噪底，即便延迟机制从未触发，也会破坏 Wi-Fi 帧。

仿真覆盖四种部署几何构型，均以 802.11be（Wi-Fi 7）基线为参照（80 MHz，信道 167，6785 MHz，1 个 AP 在 10 米范围内服务 4 个 STA，无 NR 存在）：场景 A（室外宏基站 NR + 室内 Wi-Fi，TRP 高度 25 米）、场景 B（屋顶 CPE，高度 5 米 + 室内 Wi-Fi）、场景 C（室内同址 CPE + 室内 Wi-Fi，同一房间，无隔墙）、场景 D（屋顶 CPE + 室外挂杆式 Wi-Fi，最坏情况）。相对于无 NR 基线（聚合吞吐量 59.2 Mbps，DL/UL 平均时延 82.1/18.9 毫秒，MPDU 重传率 11.8%），总吞吐量下降 38%（A）至 71%（D），DL 时延升至 1.9 倍至 5.1 倍，UL 时延升至 2.2 倍至 3.7 倍，MPDU 重传率大致升至 2 至 3 倍。两种机制在各场景中清晰可分：在场景 A 中，每 AP 的能量检测计数始终为零（隔墙及宏基站到室内的路径损耗使 NR 功率在每个 AP 处均低于 -62 dBm 的 ED 门限），但重传率仍升高 2.2 倍，这将 A-MPDU 损坏单独识别为一种独立于信道接入拒绝而运作的损害机制；在场景 D 中，LBT 通过率降至 0.20，每 AP 约有 65.1 万次 ED 延迟，能量检测延迟成为主导机制，损坏效应在此基础上进一步叠加。另一组采用"理想调度器"802.11ax（Wi-Fi 6E）配置的基线/场景集显示出相同的 A 到 D 单调劣化模式（DL 吞吐量损失 17%-42%，重传率最高升至 14 倍），主导机制从场景 A 中的"仅损坏"转变为场景 B 至 D 中的"损坏叠加 ED"混合。作者自陈的结论是：在他们看来，对任何共享 6 GHz 频段的技术强制要求 Listen-Before-Talk，仍是唯一完整的监管解决方案；下一代 802.11 修订案的 PAR 与 CSD 应当从一开始就纳入对此类非既有系统间侵扰者的鲁棒性考量。

## Key technical points (EN)

- **Regulatory mechanism**: US 6 GHz rules (47 CFR 15.407) require LBT/CCA for U-NII Low-Power Indoor devices, but AFC-coordinated Standard-Power APs/fixed clients are exempt; 3GPP proposals ([1][2][3] in the document) interpret this AFC exemption as covering a non-LBT, grant-scheduled 6G NR uplink at up to 36 dBm EIRP.
- **Method**: system-level co-simulation of 5G-Advanced NR (per-PRB SINR -> MCS -> BLER -> HARQ, PF/RR scheduling, slot-synchronized interference) coupled to a full 802.11 MAC (4-AC EDCA, binary exponential backoff, A-MPDU/Block-Ack, DL/UL OFDMA, ED/PD CCA, NAV) at 0.5 ms slot granularity.
- **Two harm mechanisms identified**: (a) CCA-ED denial — dominant when NR PSD exceeds -62 dBm at the AP; (b) A-MPDU corruption — NR raises the interference floor mid-frame, elevating retries/lowering MCS even when ED never triggers (isolated in Scenario A, where ED count = 0 but retry rate still doubles).
- **Wi-Fi 7 (802.11be) results, baseline vs A/B/C/D**: total goodput -38%/-45%/-68%/-71%; DL latency x1.9/x2.6/x4.8/x5.1; UL latency x2.2/x2.5/x3.2/x3.7; MPDU retry x2.2/x2.2/x2.8/x1.8; LBT pass rate 1.000/0.897/0.316/0.201; ED deferrals per AP 0/~62k/~489k/~651k.
- **Wi-Fi 6E (802.11ax, "ideal scheduler") results, baseline vs A/B/C/D**: DL goodput -17%/-24%/-36%/-42%; MPDU retry rate up to x14 (44.7% at D vs 3.2% baseline); dominant mechanism shifts from corruption-only (A) to corruption+ED (B-D).
- **Author recommendation**: mandatory LBT for any technology sharing 6 GHz is described as the only complete regulatory answer; next-generation 802.11 PAR/CSD scope should account for non-incumbent inter-system aggressors (e.g. EDCA enhancements) from the start.

## Key technical points (ZH)

- **监管机制**：美国 6 GHz 规则（47 CFR 15.407）要求 U-NII 低功率室内设备执行 LBT/CCA，但经 AFC 协调的标准功率 AP/固定客户端可获豁免；3GPP 相关提案（文档中引用的 [1][2][3]）将这一 AFC 豁免解读为可覆盖免 LBT、基于授权调度、最高 36 dBm EIRP 的 6G NR 上行。
- **方法**：将完整的 5G-Advanced NR（逐 PRB SINR → MCS → BLER → HARQ，比例公平/轮询调度，时隙同步干扰）与完整的 802.11 MAC（4 类接入类别 EDCA、二进制指数退避、A-MPDU/Block-Ack、DL/UL OFDMA、ED/PD CCA、NAV）以 0.5 毫秒时隙粒度耦合的系统级联合仿真。
- **识别出两种损害机制**：(a) CCA-ED 拒绝接入——当 AP 处 NR 功率谱密度超过 -62 dBm 时占主导；(b) A-MPDU 损坏——NR 在帧传输中抬高干扰噪底，即便 ED 从未触发，也会提高重传率/降低 MCS（在场景 A 中被单独识别，该场景 ED 计数为 0 但重传率仍翻倍）。
- **Wi-Fi 7（802.11be）结果，基线对比 A/B/C/D**：总吞吐量 -38%/-45%/-68%/-71%；DL 时延 ×1.9/×2.6/×4.8/×5.1；UL 时延 ×2.2/×2.5/×3.2/×3.7；MPDU 重传率 ×2.2/×2.2/×2.8/×1.8；LBT 通过率 1.000/0.897/0.316/0.201；每 AP ED 延迟次数 0/约 6.2 万/约 48.9 万/约 65.1 万。
- **Wi-Fi 6E（802.11ax，"理想调度器"）结果，基线对比 A/B/C/D**：DL 吞吐量 -17%/-24%/-36%/-42%；MPDU 重传率最高升至 ×14（场景 D 为 44.7%，基线为 3.2%）；主导机制从场景 A 的"仅损坏"转变为场景 B-D 的"损坏叠加 ED"。
- **作者建议**：认为对任何共享 6 GHz 频段的技术强制要求 LBT 是唯一完整的监管解决方案；下一代 802.11 的 PAR/CSD 范围应从一开始就考虑对非既有系统间侵扰者的应对（例如 EDCA 增强）。

## Why it matters / what's new (EN)

This entry supersedes the framing of the KB's 2026-05-05 entry on the same document thread (`2026-05-05_ieee-wng-charter-bypass-lbt-upper-6ghz`), which — written when the document body was access-gated — speculated that Charter's contribution might be asking WNG to relax Wi-Fi's own LBT requirement for Wi-Fi's benefit. With the follow-up document now readable, the actual concern is the opposite: Charter is warning that a 3GPP proposal would let non-LBT 6G cellular uplink use the AFC exemption in upper 6 GHz, to Wi-Fi's detriment, and this contribution supplies the quantified simulation evidence (two named, separable harm mechanisms; up to 71% goodput loss) that the group had asked for after the qualitative version. It also links directly to the WIN SG's Wi-Fi 9 PAR-drafting activity recorded in this KB's companion 2026-09-16 digest entry: the authors explicitly recommend that the next amendment's PAR/CSD build in robustness to this class of coexistence threat from the start.

## Why it matters / what's new (ZH)

本条目更新了本知识库 2026-05-05 条目（`2026-05-05_ieee-wng-charter-bypass-lbt-upper-6ghz`）对同一文档线索的框架判断——该条目写作时文档正文尚处于访问受限状态，曾推测 Charter 的贡献或许是在要求 WNG 为 Wi-Fi 自身利益放宽其 LBT 要求。如今随着后续文档可读，实际的担忧方向恰恰相反：Charter 是在警示一项 3GPP 提案会让免 LBT 的 6G 蜂窝上行借用上 6 GHz 的 AFC 豁免，从而损害 Wi-Fi，而本文档正是该团队在提出定性版本后被要求补充的量化仿真证据（两种可分离、被明确命名的损害机制；吞吐量损失最高达 71%）。本文档也与本知识库同日（2026-09-16）另一条摘要条目所记录的 WIN SG Wi-Fi 9 PAR 起草工作直接相关：作者明确建议下一代修订案的 PAR/CSD 应从一开始就纳入对此类共存威胁的鲁棒性考量。

## Images

![Scenario C deployment geometry: co-located indoor NR CPE and Wi-Fi AP with no wall between them | 场景 C 部署几何：室内同址 NR CPE 与 Wi-Fi AP，两者之间无隔墙](assets/2026-09-16_ieee-mentor-nr-wifi-non-lbt-coexistence-sim/scenario-c-deployment-geometry.png)
![Scenario C per-AP channel-time breakdown, showing NR energy-detect (ED) time consuming a large share of each AP's channel time | 场景 C 各 AP 信道时间占用分解，显示 NR 能量检测（ED）占用了各 AP 相当大比例的信道时间](assets/2026-09-16_ieee-mentor-nr-wifi-non-lbt-coexistence-sim/scenario-c-channel-time-breakdown.png)
