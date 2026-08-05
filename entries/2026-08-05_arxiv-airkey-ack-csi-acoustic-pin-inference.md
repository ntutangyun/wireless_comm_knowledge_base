---
id: 2026-08-05_arxiv-airkey-ack-csi-acoustic-pin-inference
date_published: 2026-08-04
date_found: 2026-08-05
type: academic-paper
title_en: "AirKey: Multimodal Acoustic-Assisted WiFi Sensing for Zero-Training Robust PIN Inference"
title_zh: "AirKey：多模态声学辅助 WiFi 感知的零训练鲁棒 PIN 推断"
url: "https://arxiv.org/abs/2608.03151"
source_quality: full
topics: [WiFi-sensing, CSI, security, side-channel, keystroke-inference, 802.11]
topic_primary: security-privacy
topics_secondary: [sensing-csi]
novelty_score: 3
---

## Summary (EN)

AirKey (Wu et al., USTC / Tianjin University / UEC-Tokyo / A*STAR and others; accepted to ACM Multimedia 2026, submitted 4 Aug 2026) is a contactless keystroke-eavesdropping attack that recovers device-unlock PINs from Wi-Fi Channel State Information (CSI) without any network privileges and without extra transceivers positioned around the victim. It targets the two bottlenecks that have kept prior Wi-Fi keystroke attacks impractical: (1) they needed either control of the victim's AP, membership on the victim's network to inject ping/BFI probe traffic, or conspicuous dedicated transceivers the victim must sit between; and (2) pure Wi-Fi CSI suffers "waveform fusion" ambiguity during rapid, muscle-memory typing, where adjacent keystroke trajectories overlap and become indistinguishable.

The attack's core insight is an exploitation of a mandatory IEEE 802.11 mechanism: by injecting forged null-data frames, an attacker forces any unmodified target device to reply with an ACK at the strict SIFS timing, below higher-layer validation. Prior work treated ACK-elicitation as a DoS/anomaly surface and vendors mitigated it only with response-rate limits — but AirKey observes that even the rate-limited ACK stream (~100-110 packets/s here, induced by 200 null frames/s) yields a CSI stream fully sufficient for fine-grained keystroke sensing. A low-cost ESP32 microcontroller passively harvests CSI from these ACKs, effectively turning the victim's own device into an unwitting sensing transmitter with no network association required.

To resolve the waveform-fusion ambiguity, AirKey adds a cross-modal complementarity mechanism: two lightweight microphones capture acoustic keystroke onsets as precise temporal anchors, and the system intersects CSI-derived spatial similarity with acoustic-guided inter-keystroke timing. This joint spatiotemporal fusion is zero-training — no per-victim or per-device model is learned. Evaluated NLOS across 9 commodity laptops (Lenovo, ASUS, Huawei MateBook, MECHREVO), 10 volunteers, and 720 traces of practiced rapid 6-digit PIN entry in a quiet seminar room and a noisy conference room (40-50 dB, bystander motion, multipath), AirKey reaches top-K accuracy of 19.42% (K=100), 48.93% (K=500), 68.04% (K=1000) and 91.92% (K=2500) from a single observation, and reports over 4x the accuracy of state-of-the-art unimodal zero-training schemes. Cross-modal fusion is what carries robustness: top-2500 accuracy drops only from 92.98% (quiet) to 90.88% (noisy conference room).

## Summary (ZH)

AirKey（Wu 等，中国科学技术大学/天津大学/电气通信大学/新加坡 A*STAR 等；已被 ACM Multimedia 2026 接收，2026 年 8 月 4 日提交）是一种非接触式击键窃听攻击，可在无需任何网络权限、也无需在受害者周围布置额外收发设备的情况下，从 Wi-Fi 信道状态信息（CSI）中恢复设备解锁 PIN。它针对此前 Wi-Fi 击键攻击难以落地的两大瓶颈：（1）以往方法要么需控制受害者的 AP、要么需接入受害者网络以注入 ping/BFI 探测流量、要么需布置显眼的专用收发器并要求受害者恰好位于其间；（2）纯 Wi-Fi CSI 在快速、肌肉记忆式打字时存在"波形融合"歧义，相邻击键轨迹重叠而难以区分。

攻击的核心洞见是对一项强制性 IEEE 802.11 机制的利用：通过注入伪造的空数据帧，攻击者可迫使任意未修改的目标设备在严格的 SIFS 时序内回复 ACK，绕过高层校验。以往工作将 ACK 诱发视为 DoS/异常面，厂商也仅以限制响应速率来缓解——但 AirKey 发现，即便是被限速后的 ACK 流（本文测得约 100-110 包/秒，由 200 空帧/秒诱发）所得的 CSI 也完全足以进行细粒度击键感知。一枚低成本 ESP32 微控制器被动地从这些 ACK 中提取 CSI，实际上把受害者自己的设备变成了一个无需网络关联、毫不知情的感知发射源。

为消解波形融合歧义，AirKey 引入跨模态互补机制：两只轻量麦克风将击键起始声捕获为精确的时间锚点，系统将 CSI 空间相似度与声学引导的击键间时序取交集。该时空联合融合为零训练——不学习任何针对受害者或设备的模型。在 9 台商用笔记本（联想、华硕、华为 MateBook、机械革命）、10 名志愿者、720 条经练习的快速六位 PIN 输入轨迹上，于安静研讨室与嘈杂会议室（40-50 dB、旁人走动、多径）进行非视距评估，AirKey 单次观测的 top-K 准确率为 19.42%（K=100）、48.93%（K=500）、68.04%（K=1000）、91.92%（K=2500），并报告其准确率超过现有最优单模态零训练方案的 4 倍。跨模态融合是鲁棒性的关键：top-2500 准确率从安静环境的 92.98% 仅下降至嘈杂会议室的 90.88%。

## Key technical points (EN)

- Association-free CSI acquisition: injected null-data frames elicit mandatory SIFS-timed ACKs from unmodified targets; CSI is passively harvested from the ACKs by a cheap ESP32 — no AP control, no network membership, no transceiver placement.
- Reframes a known DoS/anomaly surface: vendor response-rate limits stop ACK flooding but the residual ~100-110 pkt/s ACK-CSI stream is still enough for fine-grained side-channel sensing.
- Cross-modal fusion resolves "waveform fusion": two microphones provide acoustic inter-keystroke timing anchors; the system intersects CSI spatial similarity with acoustic timing — zero-training, no per-device/per-user model.
- Prototype is all COTS: WiFi adapter (discovery + injection) + ESP32 (CSI) + 2 microphones, USB to a laptop.
- Evaluation: 9 commodity laptops, 10 volunteers, 720 NLOS traces, practiced rapid 6-digit PINs (177-sequence pool), two environments; linear number-row and 3x3 keypad layouts.
- Headline single-trace top-K accuracy: 19.42% (K=100), 48.93% (K=500), 68.04% (K=1000), 91.92% (K=2500); >4x SOTA unimodal zero-training; environmental robustness 92.98% -> 90.88% quiet vs noisy.
- Threat framing: strict account lockout (<10 attempts) constrains single-trace immediacy, but the stealth (victim's own device as the transmitter, blends into ambient traffic, NLOS) is the novel danger.

## Key technical points (ZH)

- 免关联 CSI 获取：注入空数据帧诱发未修改目标按 SIFS 时序强制回复 ACK，由廉价 ESP32 被动提取 ACK 中的 CSI——无需控制 AP、无需入网、无需布置收发器。
- 重新诠释已知的 DoS/异常面：厂商限速可阻止 ACK 洪泛，但残余的约 100-110 包/秒 ACK-CSI 流仍足以进行细粒度侧信道感知。
- 跨模态融合消解"波形融合"：两只麦克风提供声学击键间时序锚点，系统将 CSI 空间相似度与声学时序取交集——零训练，无需针对设备/用户的模型。
- 原型全为商用现成件：WiFi 网卡（发现+注入）+ ESP32（CSI）+ 2 麦克风，经 USB 接笔记本。
- 评估：9 台商用笔记本、10 名志愿者、720 条非视距轨迹、经练习的快速六位 PIN（177 序列池）、两种环境；线性数字行与 3x3 键盘布局。
- 单次观测 top-K 准确率：19.42%（K=100）、48.93%（K=500）、68.04%（K=1000）、91.92%（K=2500）；超单模态零训练最优方案 4 倍以上；环境鲁棒性 92.98%（安静）→ 90.88%（嘈杂）。
- 威胁定位：严格账户锁定（<10 次尝试）限制了单次轨迹的即时威胁，但其隐蔽性（把受害者自身设备变成发射源、混入环境流量、非视距）才是新颖的危险所在。

## Why it matters / what's new (EN)

This is a new attack primitive for the security-privacy bin, distinct from the KB's existing CSI-security entries. 2026-08-04_arxiv-sok-wifi-csi-biometrics-security treats CSI as the authentication factor being attacked (replay/mimicry against biometrics), and 2026-06-26_arxiv-ml-mac-randomization-privacy attacks device-identity privacy via IE/timing fingerprinting; AirKey instead weaponizes CSI as a keystroke side channel and — crucially — removes the network-association precondition that made prior Wi-Fi keystroke attacks (BFI-ping, AP-control) largely theoretical. The ACK-elicitation-for-sensing angle also connects to the recurring theme that mandatory 802.11 control-frame behaviors (SIFS-timed ACKs) leak exploitable physical-layer information even when higher-layer defenses and rate limits are in place. As 802.11bf institutionalizes CSI access, association-free CSI harvesting from ACKs is a countermeasure gap worth watching (rate-limiting alone is shown insufficient). The cross-modal acoustic+CSI zero-training design is also a first for the KB — most CSI attacks in the literature are single-modality and training-heavy.

## Why it matters / what's new (ZH)

这是 security-privacy 主题下的一种新攻击原语，与 KB 现有 CSI 安全条目不同。2026-08-04_arxiv-sok-wifi-csi-biometrics-security 将 CSI 视为被攻击的认证因子（针对生物特征的重放/模仿），2026-06-26_arxiv-ml-mac-randomization-privacy 通过 IE/时序指纹攻击设备身份隐私；而 AirKey 将 CSI 武器化为击键侧信道，并且关键地去除了此前 Wi-Fi 击键攻击（BFI-ping、控制 AP）所需的网络关联前提，使其从理论走向可行。"利用 ACK 诱发进行感知"这一角度也呼应了一个反复出现的主题：强制性的 802.11 控制帧行为（SIFS 时序的 ACK）即便在高层防御与限速到位时仍会泄露可被利用的物理层信息。随着 802.11bf 将 CSI 访问制度化，从 ACK 中免关联地采集 CSI 是一个值得关注的防护缺口（本文表明仅靠限速并不足够）。声学+CSI 的跨模态零训练设计在 KB 中亦属首次——文献中多数 CSI 攻击为单模态且高度依赖训练。
