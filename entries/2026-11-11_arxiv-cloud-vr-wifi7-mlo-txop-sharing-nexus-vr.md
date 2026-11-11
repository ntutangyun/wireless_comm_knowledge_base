---
id: 2026-11-11_arxiv-cloud-vr-wifi7-mlo-txop-sharing-nexus-vr
date_published: 2026-11-09
date_found: 2026-11-11
technology: wifi
type: academic-paper
title_en: "Towards Reliable Cloud VR over Wi-Fi 7: Leveraging MLO and TXOP Sharing"
title_zh: "迈向 Wi-Fi 7 上可靠的云 VR：利用 MLO 与 TXOP 共享"
url: "https://arxiv.org/abs/2611.12231"
source_quality: full
topics: [Wi-Fi 7, MLO, TXOP sharing, Cloud VR, OFDMA, Trigger Frame, OMNeT++, 802.11be]
topic_primary: mlo
topics_secondary: [rtwt-latency, wifi7-deployment]
novelty_score: 3
---

## Summary (EN)

Hugo Sanz, Francesc Wilhelmi and Boris Bellalta (Universitat Pompeu Fabra; arXiv 2611.12231, submitted 9 November 2026, cs.NI) study split-rendering Cloud VR over Wi-Fi 7. Cloud VR forms a closed loop between downlink (DL) video streaming and uplink (UL) tracking updates; the paper argues that although Wi-Fi 7 MLO helps throughput and latency, UL and DL traffic still contend independently, and stale tracking becomes the bottleneck. It proposes an application-aware TXOP sharing (TXS) scheduling policy that serves tracking and video within one shared TXOP, and introduces NeXus-VR, an open-source OMNeT++-based simulator that integrates the full Cloud VR application pipeline (ALVR-based model) with Wi-Fi 7 MAC/PHY.

In the TXS scheduler the AP wins a TXOP through EDCA, sends buffered DL video as an A-MPDU, then issues a Trigger Frame for a UL OFDMA transmission of tracking data from selected STAs and acknowledges with a Multi-STA Block ACK. Each STA gets at least one 20 MHz RU (up to four STAs on an 80 MHz channel); further STAs are served round-robin across TXOPs. The paper states that no change to the 802.11be MAC is required; buffer-aware scheduling and DL OFDMA are deliberately left out. The evaluation uses a 10 x 10 m indoor area with the AP at the centre, 100 Mbps video at 90 FPS, 20 dBm transmit power, 10% PER, a 5.484 ms maximum TXOP, a single 5 GHz 80 MHz link for single-link operation (SLO) and 5 GHz plus 6 GHz at 80 MHz each for STR MLMR MLO, an OBSS model with a fixed per-link busy probability, and random-waypoint mobility (20 runs of 50 s per point). Reference thresholds are average video-frame round-trip time below about 33 ms and frame loss ratio below 1%.

Reported results: under SLO, TXS cuts latency by 18% at two users, and the share of frames sent without fresh tracking falls from 43.09% to 0.54% at four users; capacity stays at four users with or without TXS because frame loss exceeds 1% at five. With MLO, TXS reduces average round-trip time by 15-35% for 2-4 users, and capacity rises from 7 users (conventional MLO) to 9 users (MLO with TXS), which the authors give as 1.28x over the MLO baseline and 2.25x over conventional SLO (9 versus 4). With two users and OBSS probability swept to 40%, SLO latency grows from about 5 ms to nearly 50 ms, while MLO with TXS stays below 10 ms with frame loss under 1%. Under mobility, about 15% (three users) and nearly 40% (four users) of frames use outdated tracking under conventional SLO, while TXS keeps stale-tracking rates close to zero in the evaluated scenarios.

## Summary (ZH)

Hugo Sanz、Francesc Wilhelmi 与 Boris Bellalta（庞培法布拉大学；arXiv 2611.12231，2026 年 11 月 9 日提交，cs.NI）研究 Wi-Fi 7 上的分体渲染云 VR。云 VR 在下行（DL）视频流与上行（UL）跟踪更新之间形成闭环；论文指出，虽然 Wi-Fi 7 的 MLO 有助于吞吐与时延，UL 与 DL 流量仍各自独立竞争，过时的跟踪数据成为瓶颈。论文提出一种面向应用的 TXOP 共享（TXS）调度策略，在同一个共享 TXOP 内同时服务跟踪与视频流量，并发布开源的 OMNeT++ 仿真器 NeXus-VR，将完整的云 VR 应用流水线（基于 ALVR 的模型）与 Wi-Fi 7 MAC/PHY 集成。

TXS 调度器的流程是：AP 通过 EDCA 获得 TXOP，将缓存的 DL 视频以 A-MPDU 发送，随后发出触发帧，由选定 STA 以 UL OFDMA 上传跟踪数据，并以 Multi-STA Block ACK 确认。每个 STA 至少获得一个 20 MHz RU（80 MHz 信道最多四个 STA），其余 STA 在多个 TXOP 间轮询服务。论文称无需修改 802.11be MAC；缓冲感知调度与 DL OFDMA 被有意省略。评估设定为：10 x 10 m 室内，AP 位于中心，100 Mbps 视频、90 FPS，发射功率 20 dBm，PER 10%，最大 TXOP 5.484 ms，单链路运行（SLO）使用一条 5 GHz 80 MHz 链路，MLO 为 STR MLMR，使用 5 GHz 与 6 GHz 各 80 MHz，OBSS 模型为每链路固定的信道忙概率，用户按随机路点移动（每点 20 次、每次 50 s）。参考阈值为视频帧往返时延平均低于约 33 ms、帧丢失率低于 1%。

报告结果：SLO 下，TXS 在两用户时将时延降低 18%，四用户时未使用新鲜跟踪数据的帧占比由 43.09% 降至 0.54%；由于五用户时帧丢失超过 1%，无论有无 TXS，容量均为四用户。启用 MLO 时，TXS 在 2-4 用户下将平均往返时延降低 15-35%，容量由 7 用户（常规 MLO）升至 9 用户（MLO 加 TXS），作者给出相对 MLO 基线为 1.28 倍、相对常规 SLO 为 2.25 倍（9 对 4）。两用户、OBSS 概率扫至 40% 时，SLO 时延由约 5 ms 增至近 50 ms，而 MLO 加 TXS 保持在 10 ms 以下且帧丢失低于 1%。在移动场景下，常规 SLO 中约 15%（三用户）与近 40%（四用户）的帧使用过时跟踪，而在所评估场景中 TXS 将过时跟踪比例保持在接近零。

## Key technical points (EN)

- TXS: one TXOP carries DL video A-MPDU, then a Trigger Frame for UL OFDMA tracking data, then a Multi-STA Block ACK; at least one 20 MHz RU per STA, round-robin for excess STAs; no 802.11be MAC change claimed.
- NeXus-VR: open-source OMNeT++ simulator combining the Cloud VR pipeline (ALVR-based) with Wi-Fi 7 MAC/PHY.
- Setup: 100 Mbps / 90 FPS video, 80 MHz links (5 GHz for SLO; 5 + 6 GHz STR MLMR for MLO), 10% PER, pOBSS 0.1 default, 20 runs x 50 s.
- Capacity: SLO 4 users with or without TXS; MLO 7 users, MLO + TXS 9 users (1.28x vs MLO, 2.25x vs SLO).
- No-fresh-tracking share at 4 users under SLO: 43.09% to 0.54% with TXS.
- OBSS sweep to 40% (two users): MLO + TXS below 10 ms and under 1% frame loss.
- Limitations implied by the setup: single AP, single 80 MHz channel per band, simplified OBSS and fixed PER, simulation only.

## Key technical points (ZH)

- TXS：一个 TXOP 内先发 DL 视频 A-MPDU，再发触发帧由 STA 以 UL OFDMA 回传跟踪数据，最后 Multi-STA Block ACK；每 STA 至少一个 20 MHz RU，超出者轮询；文稿称无需改动 802.11be MAC。
- NeXus-VR：开源 OMNeT++ 仿真器，集成云 VR 流水线（基于 ALVR）与 Wi-Fi 7 MAC/PHY。
- 设定：100 Mbps / 90 FPS 视频，80 MHz 链路（SLO 为 5 GHz；MLO 为 5 + 6 GHz STR MLMR），PER 10%，默认 pOBSS 0.1，每点 20 次 x 50 s。
- 容量：SLO 为 4 用户（有无 TXS 相同）；MLO 7 用户，MLO + TXS 9 用户（相对 MLO 1.28 倍，相对 SLO 2.25 倍）。
- SLO 四用户时无新鲜跟踪数据的帧占比：43.09% 降至 0.54%（TXS）。
- OBSS 扫至 40%（两用户）：MLO + TXS 时延低于 10 ms、帧丢失低于 1%。
- 由设定可见的局限：单 AP、每频段单个 80 MHz 信道、简化的 OBSS 与固定 PER、仅有仿真。

## Why it matters / what's new (EN)

The paper adds an application-aware, cross-layer view for a specific latency-critical application (Cloud VR) and presents MLO and a TXOP-sharing policy as complementary rather than substitutes; its sharing mechanism is Trigger-Frame-based UL/DL service inside one EDCA-won TXOP. Results are from the authors' own simulator with assumptions listed above and have not been validated on hardware in this paper (the authors rely on earlier experimental work for thresholds).

## Why it matters / what's new (ZH)

本文为特定时延敏感应用（云 VR）提供面向应用的跨层视角，并表明 MLO 与 TXOP 共享策略是互补而非替代关系；其共享机制是在一个通过 EDCA 获得的 TXOP 内以触发帧完成 UL/DL 服务。结果来自作者自有仿真器及上述假设，本文未在硬件上验证（阈值依赖作者此前的实验工作）。

## Images

None.
