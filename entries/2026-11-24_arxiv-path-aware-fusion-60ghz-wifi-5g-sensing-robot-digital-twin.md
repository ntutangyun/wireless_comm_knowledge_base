---
id: 2026-11-24_arxiv-path-aware-fusion-60ghz-wifi-5g-sensing-robot-digital-twin
date_published: 2026-11-20
date_found: 2026-11-24
technology: wifi
type: academic-paper
title_en: "Path-Aware Fusion of Infrastructure RF Sensing and Robot Perception in a Live Robotic Digital Twin"
title_zh: "基础设施射频感知与机器人感知在实时机器人数字孪生中的路径感知融合"
url: "https://arxiv.org/abs/2611.27497"
source_quality: full
topics: [Wi-Fi sensing, CSI, 60 GHz, wil6210, ISAC, digital twin, robotics]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)
Alberto Martinez Mendez, Antonio de la Oliva and Carlos J. Bernardos (Universidad Carlos III de Madrid, arXiv 2611.27497, cs.NI, submitted 20 November 2026) present a live robotic digital twin (DT) that treats communication infrastructure as a sensor for a mobile robot. The DT ingests four sensing branches as observations that each carry a source, timestamp and spatial support: a commodity 60-GHz link, joint Wi-Fi/5G sensing (FAWN), a fixed camera and the robot's LiDAR. It then uses the robot's live pose and heading to decide whether the evidence lies on the path the robot is about to sweep. The platform is a Unitree Go2 with an NVIDIA Isaac Sim DT.

The 60-GHz branch uses two MikroTik wAP 60G devices (AP and STA) running a research OpenWrt firmware that exposes CSI through a modified wil6210 driver. CSI reports (32 magnitude and 32 phase values across the phased array) are requested while the link carries saturating iperf3 TCP traffic. The paper summarises each report with two features relative to an empty-room reference, attenuation of the mean magnitude and the coherence of the array phase signature, and classifies presence with an RBF-SVM. The joint Wi-Fi/5G branch uses USRP front ends sending 20-MHz Wi-Fi beacons at 2.412 GHz and 5G synchronization signal blocks, with Wi-Fi CSI from 52 L-LTF subcarriers fused with the 5G SSB grid; the paper states that this branch does not take part in the online runs.

On the 60-GHz link in site A, sessions with one or two persons drop the median phase coherence to 0.09-0.13, against 0.83-0.86 for empty and metal-plate sessions. Leave-one-session-out balanced accuracy is 0.98, and 0.999 when trained on day 1 and tested on day 2 (0.96 in the reverse direction). In a second site with a different link geometry, the site-A model detects 47% of person reports (balanced accuracy 0.73); retrained on site B it reaches 0.95 leave-one-session-out, and 0.98 with the 1-s vote used online. In the online experiments on the robot, every person entering the camera field or the 60-GHz link stopped the robot (20/20); for the camera the median time from physical entry to standstill was 1.83 s, of which detection, DT update and networking take about 0.15 s and the rest is the 0.5-s confirmation and braking. Path-aware gating removed all stops caused by off-path presence (5 stops with always-stop versus 0), stale branches stopped the robot in fail-safe mode (6/6) and were ignored in tolerant mode (0/6), and five unattended laps produced no false stop. The authors state that the system is not a certified safety function.

## Summary (ZH)
Alberto Martinez Mendez、Antonio de la Oliva 与 Carlos J. Bernardos（马德里卡洛斯三世大学；arXiv 2611.27497，cs.NI，2026 年 11 月 20 日提交）提出一个实时机器人数字孪生（DT），把通信基础设施当作移动机器人的传感器。DT 接入四个感知分支，每条观测都带有来源、时间戳和空间支撑：商用 60 GHz 链路、Wi-Fi/5G 联合感知（FAWN）、固定摄像头和机器人的 LiDAR；随后利用机器人的实时位姿与朝向，判断证据是否位于机器人即将扫过的路径上。平台为 Unitree Go2 配合 NVIDIA Isaac Sim 数字孪生。

60 GHz 分支使用两台 MikroTik wAP 60G 设备（AP 与 STA），运行通过修改版 wil6210 驱动导出 CSI 的研究版 OpenWrt 固件。链路承载饱和的 iperf3 TCP 流量时请求 CSI 报告（跨相控阵的 32 个幅度值和 32 个相位值）。论文相对空房间参考，用两个特征概括每份报告——平均幅度的衰减与阵列相位签名的相干性——并用 RBF-SVM 判断是否有人。Wi-Fi/5G 联合分支使用 USRP 前端，在 2.412 GHz 发送 20 MHz Wi-Fi beacon 与 5G 同步信号块，将 52 个 L-LTF 子载波的 Wi-Fi CSI 与 5G SSB 网格融合；论文说明该分支不参与在线实验。

在站点 A 的 60 GHz 链路上，有一人或两人的会话使相位相干性中位数降至 0.09-0.13，而空房间与金属板会话为 0.83-0.86。留一会话交叉验证的平衡准确率为 0.98；第 1 天训练、第 2 天测试为 0.999（反向为 0.96）。在链路几何不同的第二个站点，站点 A 模型只检出 47% 的有人报告（平衡准确率 0.73）；在站点 B 上重训后留一会话为 0.95，采用在线使用的 1 秒投票则为 0.98。机器人在线实验中，每次有人进入摄像头视野或 60 GHz 链路都使机器人停下（20/20）；摄像头情形下，从人体实际进入到机器人静止的中位时间为 1.83 秒，其中检测、DT 更新与网络约 0.15 秒，其余为 0.5 秒确认与制动。路径感知门控消除了所有由路径外人员引起的停车（总是停车策略为 5 次，路径感知为 0 次）；陈旧分支在故障安全模式下使机器人停车（6/6），在宽容模式下被忽略（0/6）；五圈无人值守巡逻没有出现误停。作者说明该系统并非经认证的安全功能。

## Key technical points (EN)
- Each branch publishes an observation with source, timestamp, a monotonically increasing sequence number and the region where its evidence applies; branch liveness is judged from whether the sequence number advances within a timeout, without requiring synchronized sensor clocks.
- Path relevance: evidence triggers an action only if its support reaches a corridor attached to the robot's live pose; the LiDAR branch is kept outside this gating as an onboard last-resort layer. The evaluated implementation tests a configured point rather than intersecting regions, which the paper notes can cause spatial false negatives for extended supports such as a 6.7-m link.
- 60-GHz CSI was obtained at 35.5-36.7 Hz with 99.98% request success in the 18 site-A sessions while iperf3 saturated the link; goodput was 935-962 Mb/s in 14 sessions, bounded by the Gigabit Ethernet port of the wAP 60G (PHY rate 2.31 Gb/s).
- Magnitude alone is not decisive in the paper's data: the metal plate attenuates the link by 0.1-2.5 dB, one person by 1.4-8.4 dB, and the empty link drifts by 1.1-1.3 dB between days. A 32-magnitude SVM reaches 0.99 on four classes within sessions but 0.95 (leave-one-session-out) and 0.91 (day 1 to day 2) for presence, which the paper reads as learning session signatures.
- Pooling both sites does not produce a model that transfers between them (0.77-0.97 balanced accuracy).
- The robot's own front camera was excluded from the decision because it flagged a person in 37% of samples in the empty laboratory.

## Key technical points (ZH)
- 每个分支发布的观测都带有来源、时间戳、单调递增的序列号以及证据适用的区域；分支存活性依据序列号在超时内是否推进来判断，无需传感器时钟同步。
- 路径相关性：只有当证据的支撑区域触及附着于机器人实时位姿的走廊时才触发动作；LiDAR 分支不参与该门控，作为机载的最后一道保护层。所评估的实现检验的是配置的点而非区域相交，论文指出这对 6.7 米链路这类大范围支撑区域可能造成空间漏检。
- 在站点 A 的 18 个会话中，iperf3 使链路饱和时 60 GHz CSI 的获取速率为 35.5-36.7 Hz，请求成功率 99.98%；14 个会话的吞吐为 935-962 Mb/s，受 wAP 60G 千兆以太网口限制（PHY 速率 2.31 Gb/s）。
- 在论文数据中，仅凭幅度并不可靠：金属板使链路衰减 0.1-2.5 dB，一人为 1.4-8.4 dB，空链路在两天之间漂移 1.1-1.3 dB。32 维幅度 SVM 在会话内四分类达 0.99，但针对有人检测的留一会话为 0.95、跨天（第 1 天到第 2 天）为 0.91，论文将其解读为学到了会话签名。
- 合并两个站点训练并不能得到可在站点间迁移的模型（平衡准确率 0.77-0.97）。
- 机器人自带前置摄像头因在空实验室中 37% 的样本里报告有人而被排除在决策之外。

## Why it matters / what's new (EN)
The paper's own framing is that always-stop integration of several sensing branches grows less available with each added branch, and that the DT should relate evidence to what the robot is about to do. For this KB it adds a commodity 60-GHz CSI sensing result under saturating traffic, measured at two sites, next to the existing Wi-Fi sensing entries (for example 2026-11-23_arxiv-wi-har-variational-wifi-csi-evidential-shift-detection), and shows the site-dependence of the learned model. The Wi-Fi/5G branch itself is evaluated offline and is only summarised here from the cited FAWN work.

## Why it matters / what's new (ZH)
论文自身的论述是：多个感知分支采用“任一触发即停”的集成方式，每增加一个分支可用性就更低，因此数字孪生应当把证据与机器人即将执行的动作联系起来。对本知识库而言，它在现有 Wi-Fi 感知条目（例如 2026-11-23_arxiv-wi-har-variational-wifi-csi-evidential-shift-detection）之外，补充了饱和流量下商用 60 GHz CSI 感知在两个站点上的测量结果，并显示了学习模型对站点的依赖。Wi-Fi/5G 分支本身为离线评估，此处仅依据所引用的 FAWN 工作做简要说明。

## Images
![Heterogeneous sensing-to-DT architecture: sensing branches, testbed, fusion and the Isaac Sim digital twin | 异构感知到数字孪生的架构：感知分支、测试平台、融合与 Isaac Sim 数字孪生](https://arxiv.org/html/2611.27497v1/figura_isac_dt.png)
