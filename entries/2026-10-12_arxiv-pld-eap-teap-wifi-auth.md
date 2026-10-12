---
id: 2026-10-12_arxiv-pld-eap-teap-wifi-auth
date_published: 2026-10-01
date_found: 2026-10-12
technology: wifi
type: academic-paper
title_en: "Protocol Integration of Physical Layer Deception into EAP-TEAP Wi-Fi Authentication"
title_zh: "将物理层欺骗（PLD）集成进 EAP-TEAP Wi-Fi 认证协议"
url: "https://arxiv.org/abs/2610.01580"
source_quality: full
topics: [EAP-TEAP, authentication, PLD, 802.11, security]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

A paper submitted to arXiv on 1 October 2026 (cs.CR / cs.NI) integrates Physical Layer Deception (PLD) into EAP-TEAP Wi-Fi authentication to address a gap in credential-based EAP: it cannot distinguish a legitimate credential holder from an attacker who has obtained valid credentials through other means. PLD complements credential-based authentication by exposing a deceptive "primary object" over the primary transport while a separate "recovery object" travels with differentiated reliability over a secondary channel. The paper states that existing PLD studies remain, to the authors' knowledge, at the physical/link-model level, and that using PLD's activation/deactivation mechanism as an authentication gate creates an authentication-specific design requirement: at least one round must be active, since an all-inactive attempt would exercise no recovery path.

The core PLD mechanism pairs challenges with recovery objects across a sequence of L rounds. In "active" rounds the server sends a masked challenge (m_i = p_i XOR k_i) together with a genuine key-bearing recovery object; in "inactive" rounds it sends the true challenge (m_i = p_i) paired with a non-key-bearing "litter" (dummy) object. A receiver that successfully recovers the key reconstructs the challenge correctly; a receiver that fails to recover falls back to using the transmitted value directly. At least one active round is required, since an all-inactive sequence would expose every true challenge and never exercise the recovery path. Exactly A active positions (A >= 1) are selected uniformly at random without replacement, and no activation flag is transmitted, so an observer cannot tell from the channel alone which rounds were active.

For EAP-TEAP integration, the paper places primary objects inside the TEAP/TLS tunnel (encrypted and opaque to the access point) while recovery objects travel out-of-band: one TEAP Vendor-Specific TLV carries all L masked/true challenge values m_1...m_L from server to device inside the tunnel, while recovery objects exit as RADIUS Type-26 Vendor-Specific Attributes, which the access point forwards to the device as IEEE 802.11 Category-127 Action frames. The device correlates rounds by a transaction ID and round number without assuming any particular arrival order between the tunnel-carried and action-frame-carried paths. The server accepts the exchange only if all L rounds verify against an HMAC-SHA256 response R_i = HMAC-SHA256(p-hat_i, label || TxnID || Round_i || L); any single mismatch across the L rounds causes rejection.

The paper analyzes four attacker strategies: a naive non-deceptive attacker that ignores the available key material; an "Informed Perception" attacker (r_E^A under i.i.d. recovery); an informed random-guess attacker that must simultaneously guess both the unrecovered active positions and their values; and an adaptive retry-seeking attacker that gathers repeated observations of the same recovery object, for which the paper proposes a bounded fresh-session retry policy with backoff. The scheme was implemented using hostapd/wpa_supplicant (hostap 2.12) across server, access point, and device roles, evaluated over the mac80211_hwsim software simulator, with L=3 rounds and A in {1,2,3}, under two modeled recovery regimes (r_B, r_E) = (0.95, 0.50) and (0.90, 0.70). Four evaluation campaigns totaling 1,593 attempts were run: a 273-attempt recovery-model campaign, a 30-attempt naive-attacker campaign, a 90-attempt latency campaign, and a 1,200-attempt security-reliability trade-off campaign.

## Summary (ZH)

一篇于 2026 年 10 月 1 日提交至 arXiv 的论文（cs.CR / cs.NI 类别）将物理层欺骗（Physical Layer Deception, PLD）集成进 EAP-TEAP Wi-Fi 认证协议，以弥补基于凭据的 EAP 认证的一个缺口：它无法区分合法凭据持有者与通过其他途径获得有效凭据的攻击者。PLD 通过在主传输通道上暴露一个"欺骗性主对象"，同时让一个独立的"恢复对象"以不同的可靠性经由辅助通道传输，来补充基于凭据的认证。论文指出，据作者所知，现有 PLD 研究仍停留在物理层/链路模型层面；而将 PLD 的激活/停用机制用作认证门控会带来一项认证特有的设计要求：至少须有一个激活轮次，因为全部未激活的尝试不会触发任何恢复路径。

PLD 核心机制在一系列 L 轮次中将挑战值与恢复对象配对。在"激活"轮次中，服务器发送被掩码的挑战（m_i = p_i XOR k_i）并附带真实携带密钥的恢复对象；在"未激活"轮次中，服务器发送真实挑战（m_i = p_i）并附带不携带密钥的"干扰"（虚设）对象。成功恢复密钥的接收方可正确重建挑战值；未能恢复的接收方则直接回退使用所传输的值。方案要求至少一个激活轮次，因为全部未激活的序列会暴露所有真实挑战且永远不会触发恢复路径。恰好 A 个激活位置（A ≥ 1）以均匀随机、不重复的方式选取，且不传输任何激活标志位，因此仅凭信道观测无法判断哪些轮次是激活的。

在 EAP-TEAP 集成方面，论文将主对象置于 TEAP/TLS 隧道内（加密且对接入点不透明），而恢复对象则带外传输：一个 TEAP 厂商专用 TLV 在隧道内从服务器向设备携带全部 L 个被掩码/真实挑战值 m_1...m_L，而恢复对象则以 RADIUS Type-26 厂商专用属性形式离开，由接入点转发给设备，封装为 IEEE 802.11 Category-127 动作帧。设备通过事务 ID 与轮次编号关联各轮，而不假设隧道承载路径与动作帧承载路径之间存在特定到达顺序。服务器仅在全部 L 轮均通过基于 HMAC-SHA256 的响应验证 R_i = HMAC-SHA256(p-hat_i, label || TxnID || Round_i || L) 时才接受该交换；L 轮中任意一轮不匹配即导致拒绝。

论文分析了四种攻击策略：忽略可用密钥材料的朴素非欺骗性攻击者；"知情感知"攻击者（独立同分布恢复假设下虚假接受概率为 r_E^A）；必须同时猜测未恢复的激活位置及其取值的知情随机猜测攻击者；以及利用对同一恢复对象的重复观测的自适应重试攻击者——论文为此提出了带退避的有界新会话重试策略。方案使用 hostapd/wpa_supplicant（hostap 2.12）在服务器、接入点与设备三方角色上实现，并在 mac80211_hwsim 软件模拟器上评估，设置 L=3 轮、A ∈ {1,2,3}，并在两种建模恢复情形 (r_B, r_E) = (0.95, 0.50) 与 (0.90, 0.70) 下测试。共运行四组评估，总计 1,593 次尝试：273 次恢复模型评估、30 次朴素攻击者评估、90 次时延评估，以及 1,200 次安全-可靠性权衡评估。

## Key technical points (EN)

- **PLD round structure**: L rounds, each either "active" (masked challenge + real key-bearing recovery object) or "inactive" (true challenge + dummy "litter" object); exactly A active rounds (A>=1) chosen uniformly without replacement, with no activation flag transmitted.
- **Acceptance rule**: server accepts only if all L HMAC-SHA256 responses R_i = HMAC-SHA256(p-hat_i, label||TxnID||Round_i||L) verify; any mismatch rejects.
- **Layering**: primary objects ride inside the TEAP/TLS tunnel (opaque to the AP, one Vendor-Specific TLV carries all L values); recovery objects exit as RADIUS Type-26 VSAs, forwarded by the AP as IEEE 802.11 Category-127 Action frames.
- **Attacker models (four)**: naive non-deceptive; Informed Perception (false-accept probability = r_E^A under i.i.d. recovery); informed random-guess (must guess unrecovered active positions and values); adaptive retry-seeking (repeated observations of the same recovery object; countered with a bounded fresh-session retry policy with backoff).
- **Implementation**: hostap 2.12 (hostapd/wpa_supplicant) across server/AP/device roles, evaluated via mac80211_hwsim.
- **Results (L=3)**: ordinary TEAP 30/30 accepted; full-recovery A=1 and A=3 both 30/30 accepted; degraded recovery (r=0.50, A=3) only 1/30 accepted; naive attacker 0/30 (30/30 rejected).
- **Latency**: ordinary TEAP 231.698 ms vs. proposed scheme 256.558-257.096 ms (about 25 ms added overhead).
- **Protocol overhead at L=3**: TEAP TLVs 73 bytes (request) / 121 bytes (response); RADIUS VSAs 150 bytes total; Category-127 Action frames 147 bytes total.
- **Trade-off campaign**: 1,200 attempts, zero infrastructure failures; every outcome matched the accept/reject decision predicted from the realized active set and recovery-object delivery, and measured proportions tracked the analytical curves (increasing A lowers false-accept and raises false-reject probability) within sampling variation.

## Key technical points (ZH)

- **PLD 轮次结构**：共 L 轮，每轮为"激活"（掩码挑战 + 真实携密恢复对象）或"未激活"（真实挑战 + 虚设"干扰"对象）；恰好 A 个激活轮（A≥1）以均匀不重复方式选取，不传输激活标志位。
- **接受规则**：服务器仅在全部 L 个 HMAC-SHA256 响应 R_i = HMAC-SHA256(p-hat_i, label||TxnID||Round_i||L) 均验证通过时接受；任一不匹配即拒绝。
- **分层方式**：主对象置于 TEAP/TLS 隧道内（对接入点不透明，一个厂商专用 TLV 携带全部 L 个值）；恢复对象以 RADIUS Type-26 厂商专用属性形式离开，由接入点转发为 IEEE 802.11 Category-127 动作帧。
- **攻击者模型（四种）**：朴素非欺骗性；知情感知（独立同分布恢复假设下虚假接受概率 = r_E^A）；知情随机猜测（须猜测未恢复的激活位置及其取值）；自适应重试（重复观测同一恢复对象；以带退避的有界新会话重试策略应对）。
- **实现**：hostap 2.12（hostapd/wpa_supplicant）覆盖服务器/接入点/设备三方角色，基于 mac80211_hwsim 评估。
- **结果（L=3）**：常规 TEAP 30/30 通过；完全恢复 A=1 与 A=3 均 30/30 通过；恢复能力下降（r=0.50, A=3）仅 1/30 通过；朴素攻击者 0/30（30/30 被拒绝）。
- **时延**：常规 TEAP 231.698 毫秒，所提方案 256.558-257.096 毫秒（约增加 25 毫秒开销）。
- **协议开销（L=3）**：TEAP TLV 73 字节（请求）/ 121 字节（响应）；RADIUS VSA 共 150 字节；Category-127 动作帧共 147 字节。
- **权衡评估**：1,200 次尝试，零基础设施失败；每次结果均与根据实际激活集合与恢复对象投递情况预测的接受/拒绝判定一致，实测比例在抽样波动范围内与解析曲线吻合（增大 A 降低虚假接受概率、提高虚假拒绝概率）。

## Why it matters / what's new (EN)

This is the KB's first entry combining EAP-TEAP with a physical-layer deception mechanism; the KB's existing security-privacy entries on WPA2/3 weaknesses and PHY-preamble defenses have not previously covered EAP-layer credential-compromise scenarios. The paper's stated contribution is methodological: using PLD's activation/deactivation pattern itself as an authentication gate, rather than as a physical/link-model-level mechanism only, which the authors present as new relative to prior PLD work that stayed at the physical/link-model level.

## Why it matters / what's new (ZH)

这是知识库中首条将 EAP-TEAP 与物理层欺骗机制相结合的条目；知识库现有关于 WPA2/3 弱点与 PHY 前导码防御的安全与隐私类条目此前未涉及 EAP 层凭据泄露场景。论文所述的贡献是方法论层面的：将 PLD 的激活/停用模式本身用作认证门控，而不仅限于物理层/链路模型层面——作者将其呈现为相对此前停留在物理层/链路模型层面的 PLD 工作的新贡献。

## Images

None.
