---
id: 2026-05-05_arxiv-wifi6-ce-preamble-signature
date_published: 2025-01-02
date_found: 2026-05-05
type: academic-paper
title_en: "Securing Wi-Fi 6 Connection Establishment Against Relay and Spoofing Threats"
title_zh: "针对中继与伪装攻击的 Wi-Fi 6 连接建立阶段安全加固"
url: "https://arxiv.org/abs/2501.01517"
source_quality: full
topics: [802.11ax, security, MAC-layer, PHY-layer]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

Hoque & Rahbari (Rochester Institute of Technology) propose a backward-compatible scheme that hardens the Wi-Fi 6 (802.11ax) **connection-establishment (CE) phase** against three threat classes that all bypass traditional cryptographic-only defences: man-in-the-middle on Beacon / Probe-Response / association frames, **PHY-layer preamble spoofing** that mimics a legitimate AP's RF fingerprint, and **frame relaying** that retransmits unmodified CE frames from a real AP from a different physical location. The attacker model is realised in the paper with a USRP X310 + GNU Radio testbed alongside a commercial Aruba AP and MacBook Air client, demonstrating end-to-end relay attacks with sub-millisecond timing.

The defensive mechanism interleaves a **digital signature into the PHY preambles of pre-authentication CE frames** using an *extensible preamble modulation (eP-Mod)* technique that loads up to ~20 bits per 20 MHz channel into spare capacity in the training signal. The AP signs the message *m = ID_AP || t* (MAC + UTC timestamp), channel-codes the signature, and slices it across N = 13–15 successive CE frames; the final slice is XORed with `Hash(operating_channel, sequence_number)` keyed by the PTK. The receiver then performs three concurrent checks: (a) PHY-layer frame identification via PCA on the SIG field (rate / length / duration), (b) inter-frame-arrival timing constraints that detect propagation anomalies introduced by a relay, and (c) a BLS verification of the reconstructed signature against the AP's public key.

Reported results: **96–100 % true-positive rate** for relay detection across three station locations, **100 % accuracy** in distinguishing CE vs non-CE frames and the AP they originated from (5 APs evaluated), and a CE-time overhead of only ~2.19 % (5.63 ms BLS verify + ~0.26–0.30 ms / frame slice extraction). The scheme adds **no new MAC headers, no new Information Elements, and no frame-size increase** — legacy stations simply ignore the preamble bits and parse the frame normally.

## Summary (ZH)

来自 Rochester Institute of Technology 的 Hoque 和 Rahbari 提出了一种向后兼容的方案，用于加固 Wi-Fi 6（802.11ax）**连接建立（CE）阶段**对三类攻击的防御：传统密码学方案无法识别的 Beacon / Probe-Response / Association 帧中间人攻击、**PHY 层前导码伪装**（伪造合法 AP 的射频指纹），以及**帧中继**（在异地原样转发真实 AP 的 CE 帧）。论文使用 USRP X310 + GNU Radio 与商用 Aruba AP 和 MacBook Air 客户端搭建实验平台，复现了亚毫秒级中继攻击。

防御机制将**数字签名嵌入预认证 CE 帧的 PHY 前导码**中，采用 *可扩展前导码调制（eP-Mod）* 技术，每 20 MHz 信道前导码可承载约 20 bit 的额外容量。AP 对消息 *m = ID_AP || t*（MAC + UTC 时间戳）签名，经信道编码后切分到 N = 13–15 个连续 CE 帧，最末一片再用 PTK 与 `Hash(operating_channel, sequence_number)` 异或。接收端并行执行三项校验：(a) 用 PCA 分析 SIG 字段（速率 / 长度 / 持续时间）做 PHY 层帧识别；(b) 通过帧间到达时间约束检测中继引入的传播异常；(c) 重组签名片并通过 AP 公钥进行 BLS 验证。

实验结果：三个站位的中继检测**真阳率 96–100 %**，5 个 AP 之间的 CE 帧识别准确率 **100 %**，CE 阶段额外开销仅 **~2.19 %**（5.63 ms BLS 验证 + 每帧 ~0.26–0.30 ms 片段提取）。方案**不新增 MAC 头部、不引入新 IE、不增加帧长**——旧站点直接忽略前导码额外比特即可正常解析。

## Key technical points (EN)

- Mechanism is at PHY+MAC boundary: signature lives in preamble training-signal capacity, not in any 802.11 frame field.
- eP-Mod loads ~20 bits per 20 MHz channel into preamble; signature is sliced across 13–15 successive CE frames so cumulative bandwidth is sufficient for BLS-size signatures.
- Three-layer verification: PCA-based PHY frame ID + timing constraint + BLS signature — designed so that any one defeat (e.g. signature replay) is caught by another check.
- Final-slice XOR with `Hash(operating_channel, sequence_number)` keyed by PTK binds the signature to a specific channel/session, blocking replay across BSSes or sessions.
- Implementation extended `gr-ieee802-11` from 802.11a (64-pt FFT) to 802.11ax (256-pt FFT), preserving the preamble post-frame-detection so the bits can be extracted.
- Verified backward compatibility: legacy stations parse PCA-classified SIG normally and treat the preamble bits as benign noise.

## Key technical points (ZH)

- 机制位于 PHY 与 MAC 交界处：签名承载于前导码训练信号的空闲容量中，不占用任何 802.11 帧字段。
- eP-Mod 在 20 MHz 信道前导码中嵌入约 20 bit；签名被切分到 13–15 个连续 CE 帧上，累计带宽可容纳 BLS 长度的签名。
- 三层校验：基于 PCA 的 PHY 帧识别 + 帧间时序约束 + BLS 签名验证——任一单层被绕过都会被其他校验捕获。
- 末片与 `Hash(operating_channel, sequence_number)`（PTK 加密）异或，将签名与具体信道/会话绑定，阻止跨 BSS 或跨会话重放。
- 实现方面将 `gr-ieee802-11` 从 802.11a（64 点 FFT）扩展到 802.11ax（256 点 FFT），并在帧检测后保留前导码以提取额外比特。
- 验证向后兼容：旧站点正常解析 PCA 分类的 SIG 字段，把前导码额外比特当作噪声忽略即可。

## Why it matters / what's new (EN)

This is the first scheme this KB has indexed that combines (i) PHY-preamble signature embedding without frame-size increase, (ii) explicit relay-detection via inter-frame timing, and (iii) backward-compat OTA validation on Wi-Fi 6. Existing entries in this KB cover **secure FTM ranging** (`2026-05-01_arxiv-secure-wifi-ranging-az-bk`) and **VoWiFi attack tooling** (`2026-05-01_arxiv-vwattacker-vowifi-security`) but neither addresses CE-phase relay/spoofing on standard 802.11ax management frames. The eP-Mod technique is the load-bearing primitive; the rest of the construction (slicing, PTK-keyed XOR, three-check verifier) is the protocol composition around it. Receivers implementing this scheme will emit a distinguishable preamble pattern across CE frames, which means an external observer can identify "secured-CE-capable" deployments from a packet capture alone — making the on-the-wire signature observable for both interoperability testing and defensive monitoring.

## Why it matters / what's new (ZH)

这是本 KB 中首篇综合具备以下三点的论文：(i) PHY 前导码签名嵌入且不增加帧长；(ii) 通过帧间时序进行显式中继检测；(iii) 在 Wi-Fi 6 上完成 OTA 实测的向后兼容方案。已有条目涵盖了**安全 FTM 测距**（`2026-05-01_arxiv-secure-wifi-ranging-az-bk`）和 **VoWiFi 攻击工具链**（`2026-05-01_arxiv-vwattacker-vowifi-security`），但都未覆盖 802.11ax 标准管理帧 CE 阶段的中继/伪装。eP-Mod 是承重原语，其余构造（切片、PTK 异或、三层校验）是围绕它的协议组合。实现该方案的接收端会在 CE 帧序列上发出可区分的前导码模式，外部观察者只需从包捕获即可识别"具备 CE 安全能力"的部署——意味着该机制的"上线特征"对互操作测试和防御性监控都是可见的。

## Images

![Figure 1: eP-Mod preamble bit-loading scheme on Wi-Fi 6 PPDU | 图 1：Wi-Fi 6 PPDU 上的 eP-Mod 前导码比特装载示意](https://arxiv.org/html/2501.01517v1/x1.png)
![Figure 2: signature slicing across N consecutive CE frames | 图 2：签名在 N 个连续 CE 帧上的切分](https://arxiv.org/html/2501.01517v1/x2.png)
![Figure 3: USRP X310 + Aruba AP + MacBook Air relay-attack testbed layout | 图 3：USRP X310 + Aruba AP + MacBook Air 中继攻击实验平台布局](https://arxiv.org/html/2501.01517v1/x3.png)
