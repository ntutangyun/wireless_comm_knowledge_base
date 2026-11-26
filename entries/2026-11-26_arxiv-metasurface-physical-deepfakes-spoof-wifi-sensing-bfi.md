---
id: 2026-11-26_arxiv-metasurface-physical-deepfakes-spoof-wifi-sensing-bfi
date_published: 2026-11-24
date_found: 2026-11-26
technology: wifi
type: academic-paper
title_en: "Spoofing Wireless Sensing with Metasurface-based Physical Deepfakes"
title_zh: "利用超表面物理深度伪造欺骗无线感知"
url: "https://arxiv.org/abs/2611.32386"
source_quality: full
topics: [Wi-Fi sensing, 802.11bf, BFI, beamforming feedback, metasurface, RIS, ISAC, spoofing, CSI]
topic_primary: security-privacy
topics_secondary: [sensing-csi]
novelty_score: 4
---

## Summary (EN)
This arXiv paper (cs.CR; Johannes Kortz and Christof Paar, Max Planck Institute for Security and Privacy; Vignesh Natarajkumar, MPI-SP and IIT Madras; Paul Staat, Ruhr University Bochum) attacks wireless sensing, including Wi-Fi sensing, with a programmable metasurface. Instead of manipulating one feature such as variance or Doppler shift (which the authors say requires knowing the victim's sensing pipeline and leaves channels that are implausible and detectable in the raw data), the attacker replays the channel of a pre-recorded genuine event. The authors call the result a "physical deepfake": the measurement at the victim sensor tracks the measurement of the target event, so every feature derived from it is consistent by construction. The attacker has physical access to the victim environment and can eavesdrop on wireless messages, but cannot read or modify the victim's channel estimates and does not know the sensing algorithm.

Method as described: the attacker trains a neural-network "forward surrogate" that maps a metasurface configuration to the channel at the victim receiver (a linear branch mirroring the idealized propagation model plus a convolutional branch for coupling between adjacent elements), then searches configurations by gradient descent through the frozen surrogate with a straight-through binary threshold, refining with single-element and pair flips. The inverse design is done independently for each time step and replayed at the recording's sampling rate. The metasurface used is a 16 x 16-element, 1-bit FR4 PCB following an open-source design, optimized for the 5 GHz Wi-Fi band. Five attacker settings differ in how channel knowledge is obtained: S1 a dishonest partner that controls the transmitter, S2 a passive eavesdropper of unencrypted beamforming feedback information (BFI), S3 a physical replica of the victim setup, S4 a symmetric eavesdropping antenna, and S5 environment cloning with no channel knowledge.

Reported results. In a VNA-based lab study on 4 x 4 MIMO channels (S1), time-domain synthesis of a single degree of freedom (one spatial link at one frequency) for walking, clapping and sitting-down recordings reached an NMSE of -37.3 to -36.3 dB against a -41.1 dB repeatability limit; for one clapping sample, synthesis across the full 160 MHz band on one spatial link reached -34.1 dB and across all 16 spatial links at one frequency -35.2 dB. A comparison figure shows that the RISiren toggling attack reproduces the intended Doppler signature but leaves a rectangular pattern in the raw channel, whereas the deepfake follows the target in both domains. The surrogate needed about 30,000 samples to reach the noise floor from scratch; a surrogate pretrained on 135,720 samples reached the lower bound with fewer than 1,000 samples after a minor physical change. Attack success rose with the victim's system noise and fell with the number of jointly synthesized degrees of freedom. Against three published BFI-based respiration estimators (LeakyBeam, Kanda et al., BFMSense), a ground truth of 10.0 bpm was reproduced with the deepfake within 0.2 bpm (Table II lists deepfake rates of 9.8, 10.0 and 10.2 bpm). With ESP32-C5 devices on channel 112 (20 MHz), a five-activity Doppler classifier reached 92.0% on genuine recordings; deepfakes reached 58.0% with the eavesdropping antenna (S4) and 34.0% with the physical replica (S3), against a 20% chance level (time-shuffled baselines 19.3% and 20.7%). In environment cloning, metasurface clones of three objects reached NMSE of -17.2, -19.1 and -15.1 dB.

## Summary (ZH)
这篇 arXiv 论文（cs.CR；Johannes Kortz 与 Christof Paar，马克斯·普朗克安全与隐私研究所；Vignesh Natarajkumar，MPI-SP 与印度理工学院马德拉斯分校；Paul Staat，波鸿鲁尔大学）用可编程超表面攻击无线感知（包括 Wi-Fi 感知）。与只操纵方差或多普勒频移等单一特征的既有做法不同（作者指出后者需要了解受害者的感知流程，且产生的信道不自然、在原始数据中易被检测），攻击者重放预先录制的真实事件的信道。作者称之为“物理深度伪造”：受害传感器处的测量值贴近目标事件的测量值，因而由其导出的所有特征天然一致。攻击者可物理接触受害环境并监听无线消息，但无法读取或修改受害者的信道估计，也不了解其感知算法。

方法（按论文描述）：攻击者训练一个神经网络“前向代理模型”，把超表面配置映射为受害接收端的信道（一条线性分支对应理想化传播模型，一条卷积分支刻画相邻单元之间的耦合），再通过冻结代理模型、以直通估计器做二值阈值的梯度下降搜索配置，并用单单元与成对翻转细化。逆向设计对每个时间步独立进行，并按录制数据的采样率重放。所用超表面是遵循开源设计的 16 x 16 单元、1 比特 FR4 PCB，面向 5 GHz Wi-Fi 频段。五种攻击者设定的差别在于获取信道知识的方式：S1 控制发射端的不诚实伙伴，S2 被动监听未加密的波束成形反馈信息（BFI），S3 受害环境的物理复制品，S4 对称放置的监听天线，S5 无需信道知识的环境克隆。

报告的结果：在基于 VNA 的 4 x 4 MIMO 实验室研究（S1）中，对走动、拍手、坐下录制数据的单一自由度（单一空间链路、单一频点）时域合成 NMSE 为 -37.3 至 -36.3 dB，而系统重复性极限为 -41.1 dB；对一个拍手样本，在单一空间链路的完整 160 MHz 频带上合成达到 -34.1 dB，在单一频点的全部 16 条空间链路上达到 -35.2 dB。对比图显示 RISiren 的切换攻击虽能复现目标多普勒特征，却在原始信道中留下自然传播中不会出现的矩形图样，而物理深度伪造在两个域中都贴近目标。代理模型从零训练约需 30,000 个样本才达到噪声底；经 135,720 个样本预训练的模型在发生轻微物理变化后，不到 1,000 个样本即达到下界。攻击成功率随受害者系统噪声增大而上升，随联合合成的自由度数增多而下降。针对三个已发表的基于 BFI 的呼吸估计系统（LeakyBeam、Kanda 等、BFMSense），真值 10.0 bpm 下，深度伪造的估计速率在 0.2 bpm 以内（表 II 列出 9.8、10.0、10.2 bpm）。使用 ESP32-C5 设备、信道 112（20 MHz）时，五类活动的多普勒分类器在真实录制上准确率为 92.0%；深度伪造在监听天线设定（S4）下为 58.0%，在物理复制品设定（S3）下为 34.0%，随机水平为 20%（时间打乱基线为 19.3% 与 20.7%）。在环境克隆中，三个物体的超表面克隆 NMSE 分别为 -17.2、-19.1、-15.1 dB。

## Key technical points (EN)
- Attack goal: make the victim infer an event that did not occur by reproducing the target event's channel measurement (amplitude and phase across time, frequency and antennas), defined by the authors as success "at the measurement level"; the paper states this is independent of the victim's processing and inference function.
- Attacker model: physical access, can place a metasurface affecting the transmitter-receiver channel, can eavesdrop on wireless messages but not read encrypted data, has no access to the victim sensor's channel estimates or algorithm; the environment is assumed static between acquiring channel knowledge and attacking.
- Attacker settings S1-S5 (dishonest partner, BFI eavesdropper, physical replica, symmetric proxy antenna, environment cloning), ordered by decreasing channel knowledge.
- Forward surrogate plus gradient-based configuration search on a 256-element, 1-bit metasurface; evaluation metric is NMSE, with success tolerance set at the 99th percentile of the victim's repeated-measurement noise (a 1% false-positive-rate detector).
- Success rate rises with victim system noise and falls with more jointly synthesized degrees of freedom (more spatial links, wider band); the authors note the reported rates are a lower bound on practical success because genuine events never repeat exactly.
- Wi-Fi BFI: the paper states that BFI is transmitted in plaintext, so a passive attacker sees the same feedback as the victim's sensing system, learns the metasurface's effect in the feedback domain, and the legitimate device then reports the deepfake BFI; the three BFI-based respiration systems tested all returned a rate within 0.2 bpm of the 10.0 bpm ground truth.
- Commodity hardware: ESP32-C5 devices and a Netgear Nighthawk RAX50 router on 802.11ac channel 112; CSI-based activity classifier results as listed above.
- Countermeasures discussed by the authors: protect BFI (e.g., encryption or randomized precoding during channel sounding), keep sensor configuration confidential (e.g., randomized beamforming), conceal the physical environment, and make synthesis harder by sensing across more degrees of freedom with cross-link consistency checks, lowering system noise and frequency hopping beyond the metasurface bandwidth. Stated limitations: static-environment assumption, physical access, operation only within the metasurface's frequency bands, and the need for a prior recording of the target event.

## Key technical points (ZH)
- 攻击目标：通过重现目标事件的信道测量（跨时间、频率、天线的幅度与相位）让受害者推断出并未发生的事件；作者将成功定义在“测量层面”，并称这与受害者的处理及推断函数无关。
- 攻击者模型：具备物理接触能力，可放置影响收发信道的超表面，可监听无线消息但无法读取加密数据，无法获得受害传感器的信道估计与算法；假设获取信道知识到实施攻击之间环境保持静态。
- 攻击者设定 S1-S5（不诚实伙伴、BFI 监听者、物理复制品、对称代理天线、环境克隆），按信道知识由多到少排序。
- 前向代理模型加基于梯度的配置搜索，作用于 256 单元、1 比特超表面；评价指标为 NMSE，成功容限取受害者重复测量噪声的第 99 百分位（相当于误报率 1% 的检测器）。
- 成功率随受害者系统噪声上升，随联合合成自由度增多（更多空间链路、更宽频带）而下降；作者指出，真实事件从不会完全重复，因此文中给出的成功率只是实际成功率的下界。
- Wi-Fi BFI：论文指出 BFI 以明文传输，被动攻击者看到的反馈与受害感知系统相同，可在反馈域学习超表面的影响，合法设备随后上报的就是伪造的 BFI；所测三个基于 BFI 的呼吸感知系统均返回与 10.0 bpm 真值相差 0.2 bpm 以内的速率。
- 商用硬件：ESP32-C5 设备与 Netgear Nighthawk RAX50 路由器，802.11ac 信道 112；基于 CSI 的活动分类器结果如上。
- 作者讨论的对策：保护 BFI（如加密或信道探测期间的随机预编码）、保密传感器配置（如随机波束成形）、隐藏物理环境，以及通过在更多自由度上感知并做跨链路一致性检查、降低系统噪声、跳频超出超表面带宽来增加合成难度。文中列出的局限：静态环境假设、需要物理接触、仅在超表面工作频段内有效、需要预先录制目标事件。

## Why it matters / what's new (EN)
For the Wi-Fi sensing bins, this paper puts a security question on the same BFI-based sensing line already in the KB: 2026-11-16_arxiv-beamlens-wifi-beamforming-feedback-human-sensing covers sensing from Wi-Fi beamforming feedback, and the present paper reports, as the authors' result, that the plaintext BFI that such systems consume also lets a passive attacker make a legitimate device report the feedback of an event that never occurred. It is also a counterpart to the adversarial-input entry 2026-09-23_arxiv-graw-zero-knowledge-wifi-har-adversarial-attack. The paper's contribution relative to earlier metasurface attacks (IRShield, RISiren, as cited by the authors) is, per the authors, moving from feature-level manipulation to reproducing the raw channel. Caveats stated in the paper: the attacks were run in a VNA-based lab study and on ESP32-C5 devices, with a static environment and a prior recording of the target; the deepfakes reached 34.0% (S3) and 58.0% (S4) classifier accuracy against 92.0% on genuine recordings; the authors compare these with the accuracy of the attacker's own target recordings (46.7% and 90.7%) and the 20% chance level. The IEEE 802.11bf standard is mentioned in the introduction only as background that standardizes sensing; the paper does not analyze 802.11bf security mechanisms.

## Why it matters / what's new (ZH)
对 Wi-Fi 感知相关主题而言，这篇论文在 KB 已有的基于 BFI 的感知研究线上提出了安全问题：2026-11-16_arxiv-beamlens-wifi-beamforming-feedback-human-sensing 讨论了利用 Wi-Fi 波束成形反馈做感知，而本文报告（作者的结果）此类系统所用的明文 BFI 同样使被动攻击者能让合法设备上报从未发生的事件的反馈。它也与对抗输入类条目 2026-09-23_arxiv-graw-zero-knowledge-wifi-har-adversarial-attack 相呼应。按作者的说法，相对于早先的超表面攻击（作者引用的 IRShield、RISiren），本文的贡献是由特征层面的操纵转向重现原始信道。论文自述的限定：攻击在基于 VNA 的实验室研究和 ESP32-C5 设备上完成，环境静态且需要预先录制目标事件；深度伪造在 S3 与 S4 下的分类准确率分别为 34.0% 与 58.0%，真实录制为 92.0%；作者将其与攻击者自身目标录制的准确率（46.7% 与 90.7%）及 20% 的随机水平对比。IEEE 802.11bf 在引言中仅作为“已标准化感知”的背景被提及，论文并未分析 802.11bf 的安全机制。

## Images
![Raw-channel comparison: physical deepfake of the target event (Fig. 7b) | 原始信道对比：目标事件的物理深度伪造（图 7b）](https://arxiv.org/html/2611.32386v1/figure_07b.png)
![Raw-channel comparison: RISiren feature-level manipulation (Fig. 7c) | 原始信道对比：RISiren 特征层面操纵（图 7c）](https://arxiv.org/html/2611.32386v1/figure_07c.png)
