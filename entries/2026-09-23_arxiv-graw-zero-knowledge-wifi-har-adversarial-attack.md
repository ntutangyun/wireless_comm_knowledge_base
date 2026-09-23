---
id: 2026-09-23_arxiv-graw-zero-knowledge-wifi-har-adversarial-attack
date_published: 2026-09-21
date_found: 2026-09-23
technology: wifi
type: academic-paper
title_en: "Zero-Knowledge Remote Adversarial Attack against Wi-Fi-based Human Activity Recognition for Privacy Protection"
title_zh: "面向隐私保护的零知识远程 Wi-Fi 人体活动识别对抗攻击"
url: "https://arxiv.org/abs/2609.24173"
source_quality: full
topics: [WiFi-sensing, CSI, adversarial-attack, privacy, GAIL, LTF, MIMO]
topic_primary: security-privacy
topics_secondary: [sensing-csi]
novelty_score: 4
---

## Summary (EN)

This paper (Byungjun Kim, Amogh Panchagatti, Peter Gerstoft, Xinyu Zhang, Minsung Kim; Rutgers University and UC San Diego) proposes GRAW, a privacy-defending adversary that sits at a Wi-Fi router and degrades an unauthorized human activity recognition (HAR) system running on a "malicious" user device -- one that infers a resident's activities from the Wi-Fi channel state information (CSI) it estimates, without consent. GRAW's target is the Long Training Field (LTF) preamble: because a Wi-Fi router's downlink LTF is what the receiving device uses to estimate CSI, an adversary controlling the router can add a small perturbation signal to the LTF so that the CSI a HAR device estimates is intentionally misleading, without touching the data payload of ordinary Wi-Fi traffic. The paper frames this as a "remote attack" (manipulating the sender's preamble) as opposed to a "digital attack" (directly manipulating a HAR device's already-captured CSI input), and argues remote attacks are the practical threat model since an outside defender generally cannot reach into a HAR device's software.

The paper's stated contribution is solving two problems that, it argues, no prior remote-attack scheme solves simultaneously: operating with genuinely zero knowledge of the target HAR system (no known model architecture, classifier type, input-window length, or sampling rate), and remaining compatible with multi-antenna (SIMO/MIMO) Wi-Fi links, where a single LTF's manipulation affects CSI estimation at every receive antenna simultaneously and so constrains the achievable distortion. GRAW addresses zero-knowledge operation by first training a local surrogate classifier (a Bi-LSTM, a common architecture for Wi-Fi HAR classifiers) on the adversary's own recorded CSI, computing reference adversarial perturbations against that surrogate via the Fast Gradient Method (FGM), and then training a Generative Adversarial Imitation Learning (GAIL) policy to imitate the mapping from a short window of recent CSI to that reference perturbation. At inference time, this GAIL policy generates the live perturbation online from only the most recent CSI samples, removing the need to know the HAR device's actual input-window timing in advance -- the paper reports this is the first Wi-Fi HAR adversarial system to use GAIL for this purpose, and argues GAIL generalizes better to unseen environments than the alternative of directly training a behavioral-cloning network. For the multi-antenna constraint, GRAW projects the independently-computed per-antenna perturbations onto a single shared LTF signal that is transmitted once per antenna, using a least-squares projection so the resulting CSI distortion at each receive antenna best approximates the intended per-antenna perturbation; it also continuously scales the perturbation's amplitude relative to the LTF using a running average, to limit degradation of ordinary Wi-Fi communication.

GRAW was evaluated against seven Wi-Fi HAR classifier architectures (Bi-LSTM, LSTM+attention, CNN+LSTM, and others, taking raw CSI, statistical features, or STFT spectrograms as input) spanning three datasets -- two public (TAR at 5 GHz, JAR at 2.4 GHz) and one the authors collected themselves with software-defined radios in a 2x2 MIMO setting (RUAR, at 2.4 GHz) -- across five physical environments. Against comparison schemes including C&W (a prior remote-attack method), black-box FGM, Universal FGM, and behavioral cloning, the paper reports GRAW is the only method that degrades every tested HAR classifier down to a random-guessing level, and achieves up to 76.7% higher attack success ratio (ASR) than the comparison methods at the same perturbation-to-signal ratio (PSR). The authors also built a real-time, over-the-air hardware demonstration using USRP X310 software-defined radios running a 2x2 MIMO GNU Radio pipeline in C++, in which GRAW achieved over 50% ASR at a PSR of -4 dB while maintaining a 99.7% packet success rate on regular Wi-Fi data communication under spatial multiplexing -- offered as evidence the attack can substantially disrupt an unauthorized HAR system while leaving normal Wi-Fi connectivity largely intact.

## Summary (ZH)

本文（Byungjun Kim、Amogh Panchagatti、Peter Gerstoft、Xinyu Zhang、Minsung Kim；罗格斯大学与加州大学圣地亚哥分校）提出了 GRAW，一种部署在 Wi-Fi 路由器端、充当"隐私防御者"角色的对抗系统，用于削弱运行在未经授权的"恶意"用户设备上的人体活动识别（HAR）系统——该类系统在未经居住者同意的情况下，利用其估计得到的 Wi-Fi 信道状态信息（CSI）推断居住者的活动。GRAW 的攻击对象是长训练场（LTF）前导码：由于接收设备正是依靠路由器下行发送的 LTF 来估计 CSI，掌控路由器的攻击方可在 LTF 中添加一个微小的扰动信号，从而故意误导 HAR 设备估计出的 CSI，而不影响常规 Wi-Fi 流量的数据载荷本身。论文将此类做法定义为"远程攻击"（操纵发送端前导码），并将其与"数字攻击"（直接篡改 HAR 设备已捕获的 CSI 输入）相区分，认为远程攻击才是更具现实意义的威胁模型，因为外部防御方通常无法侵入 HAR 设备内部软件。

论文所声称的贡献，是同时解决了此前远程攻击方案未能一并解决的两个问题：其一，真正的零知识运行——无需知晓目标 HAR 系统的模型架构、分类器类型、输入窗口长度或采样率；其二，与多天线（SIMO/MIMO）Wi-Fi 链路兼容——由于对单个 LTF 的操纵会同时影响所有接收天线上的 CSI 估计，这限制了可实现的失真模式。为实现零知识运行，GRAW 首先在攻击方自行录制的 CSI 上训练一个本地代理分类器（Bi-LSTM，Wi-Fi HAR 分类器中常见的架构），利用快速梯度法（FGM）针对该代理模型计算参考对抗扰动，再训练一个生成对抗模仿学习（GAIL）策略，使其学会从近期一小段 CSI 窗口到该参考扰动之间的映射关系。在推理阶段，该 GAIL 策略仅依据最近的 CSI 样本在线生成实时扰动，从而无需预先知晓 HAR 设备实际输入窗口的时序——论文称这是首个将 GAIL 用于此目的的 Wi-Fi HAR 对抗系统，并认为相较于直接训练行为克隆网络的替代方案，GAIL 在未见过的环境中泛化能力更强。针对多天线约束，GRAW 将各接收天线独立计算得到的扰动投影到每根发射天线仅发送一次的共享 LTF 信号上，采用最小二乘投影使各接收天线处产生的 CSI 失真尽可能逼近预期的逐天线扰动；同时通过滑动平均持续调节扰动幅度相对 LTF 的比例，以限制对常规 Wi-Fi 通信的影响。

GRAW 在七种 Wi-Fi HAR 分类器架构（Bi-LSTM、LSTM+注意力机制、CNN+LSTM 等，输入分别为原始 CSI、统计特征或 STFT 频谱图）、三个数据集（两个公开数据集 TAR（5 GHz）与 JAR（2.4 GHz），以及作者利用软件定义无线电自行采集的 2×2 MIMO 数据集 RUAR（2.4 GHz））、五种物理环境下进行了评测。与 C&W（此前的远程攻击方法）、黑盒 FGM、通用 FGM 及行为克隆等对比方案相比，论文报告称 GRAW 是唯一能将所有被测 HAR 分类器降至随机猜测水平的方法，在相同扰动信号比（PSR）下，其攻击成功率（ASR）比对比方法高出多达 76.7%。作者还搭建了基于 USRP X310 软件定义无线电、以 C++ 实现 2×2 MIMO GNU Radio 流水线的实时空口硬件演示系统：在 PSR 为 -4 dB 时，GRAW 实现了超过 50% 的攻击成功率，同时在空间复用条件下，常规 Wi-Fi 数据通信仍保持 99.7% 的分组成功率——以此作为证据，说明该攻击可在基本不影响正常 Wi-Fi 连接的前提下，大幅削弱未经授权的 HAR 系统。

## Key technical points (EN)

- **Attack surface**: the downlink LTF preamble at the Wi-Fi router, not the HAR device's captured CSI input -- exploits Wi-Fi's TDD channel reciprocity (the CSI the router estimates from an uplink packet equals what the HAR device will see).
- **Zero-knowledge pipeline**: local Bi-LSTM surrogate classifier -> FGM-generated reference perturbations against the surrogate -> GAIL policy trained to imitate the mapping from recent CSI to those reference perturbations, enabling online generation without knowledge of the target's architecture, input-window length, or sampling rate.
- **First use of GAIL** for this class of Wi-Fi HAR adversarial system, chosen over behavioral cloning for better generalization to unseen environments (per the paper's own comparison).
- **Multi-antenna (SIMO/MIMO) compatibility**: least-squares projection of per-antenna perturbations onto a single shared LTF signal, addressing a constraint the paper says prior single-antenna-oriented remote-attack systems (C&W, WiAdv, IS-WARS) do not handle.
- **Communication-preserving design**: running-average amplitude control keeps the perturbation-to-LTF ratio under a target threshold.
- **Evaluation**: 7 HAR classifier architectures, 3 datasets (TAR 5 GHz, JAR 2.4 GHz, self-collected SDR-based RUAR 2.4 GHz 2x2 MIMO), 5 environments; degrades every tested model to random-guessing level; up to 76.7% higher ASR than comparison methods at matched perturbation level.
- **Hardware validation**: real-time over-the-air demo on USRP X310 SDRs (2x2 MIMO, GNU Radio/C++) -- over 50% ASR at PSR -4 dB while maintaining 99.7% regular-Wi-Fi packet success rate under spatial multiplexing.
- **Source code publicly released** by the authors (GitHub link in the paper).

## Key technical points (ZH)

- **攻击面**：Wi-Fi 路由器下行的 LTF 前导码，而非 HAR 设备已捕获的 CSI 输入——利用 Wi-Fi 的 TDD 信道互易性（路由器从上行分组估计的 CSI 等同于 HAR 设备将观测到的 CSI）。
- **零知识流程**：本地 Bi-LSTM 代理分类器 → 对该代理使用 FGM 生成参考扰动 → 训练 GAIL 策略以学习"近期 CSI → 参考扰动"的映射，从而在线生成扰动，无需知晓目标的模型架构、输入窗口长度或采样率。
- **首次将 GAIL 用于此类** Wi-Fi HAR 对抗系统，相较行为克隆方案，论文自身对比表明其在未见环境中的泛化能力更优。
- **多天线（SIMO/MIMO）兼容性**：将各天线独立计算的扰动通过最小二乘投影映射到单一共享 LTF 信号上，解决了论文所称此前面向单天线场景设计的远程攻击系统（C&W、WiAdv、IS-WARS）未能处理的约束。
- **通信保持设计**：通过滑动平均控制扰动幅度，使扰动与 LTF 的比例维持在目标阈值以下。
- **评测规模**：7 种 HAR 分类器架构、3 个数据集（TAR 5 GHz、JAR 2.4 GHz、作者自采的 SDR 2×2 MIMO 数据集 RUAR 2.4 GHz）、5 种环境；将所有被测模型均降至随机猜测水平；在相同扰动水平下，ASR 比对比方法高出多达 76.7%。
- **硬件验证**：基于 USRP X310 软件定义无线电（2×2 MIMO，GNU Radio/C++）的实时空口演示——PSR 为 -4 dB 时 ASR 超过 50%，空间复用下常规 Wi-Fi 数据通信分组成功率仍保持 99.7%。
- **作者公开了源代码**（论文中附有 GitHub 链接）。

## Why it matters / what's new (EN)

The KB's existing Wi-Fi CSI-privacy coverage has mostly looked at *offensive* uses of CSI/BFI (e.g. 2026-05-25_arxiv-bfi-attack-wifi-phy-security, 2026-08-19_hn-bfid-beamforming-feedback-person-identification). The authors contrast GRAW with PhyCloak, a full-duplex-relay defence that requires co-located dedicated hardware and is limited to single-antenna/SISO settings. GRAW is the first entry in this KB to combine a router-side, zero-knowledge, MIMO-compatible remote attack explicitly framed as a *privacy defense* against unauthorized HAR -- with a real over-the-air SDR demonstration rather than simulation alone. The reported communication-preservation numbers (99% / 99.7% packet success rate) are also a concrete data point for anyone assessing whether such preamble-perturbation defenses are practical to deploy on production Wi-Fi links without materially degrading throughput.

## Why it matters / what's new (ZH)

知识库现有关于 Wi-Fi CSI 隐私的条目此前多聚焦于利用 CSI/BFI 进行*攻击*的一面（如 2026-05-25_arxiv-bfi-attack-wifi-phy-security、2026-08-19_hn-bfid-beamforming-feedback-person-identification）。作者将 GRAW 与 PhyCloak 进行了对比——PhyCloak 是一种基于全双工中继的防御方案，需要与目标共址部署专用硬件，且仅适用于单天线/SISO 场景。GRAW 是本知识库中首条将"路由器端、零知识、兼容 MIMO 的远程攻击"明确定位为*针对未经授权 HAR 的隐私防御手段*的条目，并配有真实空口 SDR 演示而非仅有仿真结果。论文给出的通信保持数据（99%／99.7% 分组成功率）也为评估此类前导码扰动防御方案能否在不明显影响吞吐量的前提下部署于生产环境 Wi-Fi 链路，提供了具体的参考数值。
