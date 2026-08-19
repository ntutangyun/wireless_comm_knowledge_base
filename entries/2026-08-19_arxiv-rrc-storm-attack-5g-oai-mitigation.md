---
id: 2026-08-19_arxiv-rrc-storm-attack-5g-oai-mitigation
date_published: 2026-08-17
date_found: 2026-08-19
type: academic-paper
technology: cellular
title_en: "Experimental Validation and Mitigation of RRC Storm Attacks in 5G Cellular Networks"
title_zh: "5G 蜂窝网络中 RRC 信令风暴攻击的实验验证与缓解"
url: "https://arxiv.org/abs/2608.16441"
source_quality: full
topics: [RRC-signaling-storm, RACH, half-open-connections, OpenAirInterface, gNB, signaling-DoS, Timing-Advance, 5G-security]
topic_primary: cellular-security
topics_secondary: [5g-nr, open-ran]
novelty_score: 3
---

## Summary (EN)
Abdallah Abou Hasna and Ammar El Falou (CEMSE Division, King Abdullah University of Science and Technology — KAUST, Saudi Arabia; arXiv 17 Aug 2026, CC BY 4.0) take the well-known "RRC signaling storm" out of simulation and reproduce it on a real over-the-air 5G testbed, then add a lightweight defense that runs inside the gNB. The attack exploits the fact that during initial access the base station must commit radio resources and a UE context before the device is authenticated. A malicious UE repeatedly drives the Random Access Channel (RACH) procedure through Messages 1–4 but deliberately skips **Msg5 (RRCSetupComplete)**, leaving "half-open" connections that occupy UE-context slots until cleanup timers expire. On their bench a single modified attacker sustains ~25 incomplete connection requests per second and fills all 90 configured UE contexts in ~3.6 seconds, after which a commercial phone can no longer attach.

The implementation runs on modified **OpenAirInterface (OAI)**: the attacker UE has its T302 back-off behavior disabled, with a practical refinement the authors flag as missing from prior emulation-only work — the attacker must wait briefly after the Msg4 HARQ acknowledgement before restarting, or the storm stalls. The defense operates entirely at the gNB RRC layer. It monitors the ratio **R = N_Msg5 / N_Msg4** (completed vs. initiated setups); when R falls below a configurable threshold (0.5 in the experiments) an attack is flagged. Because a UE's exact identity is unavailable pre-authentication, the mitigation groups incomplete connections by **Timing Advance (TA)** value — a coarse distance proxy from the uplink — releases the contexts in the suspicious TA bucket, and imposes a shortened 100 ms completion timer on new attempts from that region so legitimate users can still retry. A containerized web NMS shows live UE state (IMSI, registration), the ratio R, half-open counts, and flagged TA buckets. In evaluation the attack blocks a commercial Nothing Phone (3a); enabling mitigation restores its connectivity, with occasional retries for phones that happen to share the suspect TA bucket. Full implementation (attack, detection, mitigation, NMS) is open-sourced at github.com/5gattacks/5g-rrc-storm.

## Summary (ZH)
Abdallah Abou Hasna 与 Ammar El Falou（沙特阿卜杜拉国王科技大学 KAUST，CEMSE；2026 年 8 月 17 日 arXiv，CC BY 4.0）把众所周知的"RRC 信令风暴"从仿真搬到真实空口 5G 测试床上复现，并加入一个运行在 gNB 内部的轻量防御。攻击利用了初始接入阶段基站必须在设备完成鉴权前就分配无线资源与 UE 上下文这一事实：恶意 UE 反复驱动随机接入（RACH）流程完成 Msg1–Msg4，却故意跳过 **Msg5（RRCSetupComplete）**，留下占用 UE 上下文槽位的"半开"连接，直至清理定时器超时。在其实验台上，单个改造攻击者可持续约每秒 25 次未完成连接请求，约 3.6 秒填满全部 90 个配置的 UE 上下文，之后商用手机无法接入。

实现基于改造的 **OpenAirInterface（OAI）**：攻击 UE 关闭 T302 退避行为，作者指出一个此前纯仿真工作缺失的实用细节——攻击者须在 Msg4 HARQ 确认后短暂等待再重启，否则风暴会停滞。防御完全在 gNB RRC 层运行，监测比值 **R = N_Msg5 / N_Msg4**（完成 vs 发起的建立数）；当 R 低于可配置阈值（实验取 0.5）即判定攻击。由于鉴权前拿不到 UE 精确身份，缓解按 **定时提前量（TA）** 值——一种来自上行的粗距离代理——对未完成连接分桶，释放可疑 TA 桶内的上下文，并对该区域新尝试施加缩短的 100 ms 完成定时器，使合法用户仍可重试。容器化 Web 网管界面实时显示 UE 状态（IMSI、注册态）、比值 R、半开连接计数与可疑 TA 桶。评估中攻击阻断了商用 Nothing Phone (3a)，开启缓解后恢复其连通性，仅同处可疑 TA 桶的手机偶需重试。完整实现（攻击、检测、缓解、网管）开源于 github.com/5gattacks/5g-rrc-storm。

## Key technical points (EN)
- Attack: repeated RACH Msg1–Msg4 with Msg5 (RRCSetupComplete) withheld → half-open UE contexts; ~25 incomplete req/s from one modified OAI UE fills 90 contexts in ~3.6 s.
- Attacker refinement: T302 disabled; a mandatory short wait after Msg4 HARQ-ACK before restarting (absent in prior emulation-only studies).
- Detection metric: R = N_Msg5 / N_Msg4; attack flagged when R < 0.5 (configurable).
- Mitigation: pre-auth identity unavailable, so group incomplete connections by Timing Advance (TA) bucket; release suspicious-bucket contexts; apply 100 ms shortened completion timer to that region.
- Testbed: Dell Precision 3660 (Ubuntu 24.04), two USRP B210 SDRs, OAI 5G stack, up to 90 configured UEs; legitimate user = Nothing Phone (3a).
- Result: attack blocks the commercial phone; mitigation restores attachment, with occasional retries for phones sharing the suspect TA bucket.
- Containerized web NMS visualizes UE state, ratio R, half-open counts, TA buckets; full attack+defense+NMS open-sourced (github.com/5gattacks/5g-rrc-storm).

## Key technical points (ZH)
- 攻击：反复 RACH Msg1–Msg4 且不发 Msg5（RRCSetupComplete）→ 半开 UE 上下文；单个改造 OAI UE 约每秒 25 次未完成请求，约 3.6 秒填满 90 个上下文。
- 攻击细化：关闭 T302；Msg4 HARQ-ACK 后须强制短暂等待再重启（此前纯仿真研究缺失）。
- 检测指标：R = N_Msg5 / N_Msg4；R < 0.5（可配置）时判定攻击。
- 缓解：鉴权前无身份，故按定时提前量（TA）分桶未完成连接；释放可疑桶上下文；对该区域施加 100 ms 缩短完成定时器。
- 测试床：Dell Precision 3660（Ubuntu 24.04）、两台 USRP B210、OAI 5G 协议栈、最多 90 个 UE；合法用户为 Nothing Phone (3a)。
- 结果：攻击阻断商用手机；缓解恢复接入，仅同处可疑 TA 桶手机偶需重试。
- 容器化 Web 网管可视化 UE 状态、比值 R、半开计数、TA 桶；攻击+防御+网管全部开源（github.com/5gattacks/5g-rrc-storm）。

## Why it matters / what's new (EN)
The KB's cellular-security bin holds analyses of pre-authentication and signaling-plane weaknesses (e.g. 2026-08-11_arxiv-battlefield-5g attacks, 2026-08-13 association-privacy work) but this is the first entry that reproduces an RRC signaling storm on a real OAI over-the-air testbed rather than in an emulator, and quantifies the exhaustion (90 contexts in 3.6 s from one UE). Two things make it a useful reference: the honest engineering detail that emulation misses (the Msg4-HARQ wait that makes the storm actually run), and a defense that is deployable today inside the gNB without any change to the pre-authentication protocol — a simple completed/initiated ratio plus TA-bucket grouping, the only pre-auth handle available. The TA-bucket approach is coarse (co-located legitimate users share the penalty), which the authors acknowledge, but the whole attack + detection + NMS stack is open-sourced, giving the community a reproducible baseline for RACH-layer DoS research.

## Why it matters / what's new (ZH)
知识库 cellular-security 主题已有对鉴权前与信令面弱点的分析（如 2026-08-11 战场 5G 攻击、2026-08-13 关联隐私工作），但这是首个在真实 OAI 空口测试床上（而非仿真器中）复现 RRC 信令风暴并量化耗尽过程（单 UE 3.6 秒填满 90 个上下文）的条目。两点使其有参考价值：仿真会漏掉的诚实工程细节（使风暴真正运行的 Msg4-HARQ 等待），以及一个今天即可部署、无需改动鉴权前协议的 gNB 内防御——一个简单的完成/发起比值加 TA 分桶（鉴权前唯一可用的抓手）。TA 分桶较粗（同址合法用户同受惩罚），作者已承认，但整套攻击+检测+网管开源，为 RACH 层 DoS 研究提供了可复现基线。
