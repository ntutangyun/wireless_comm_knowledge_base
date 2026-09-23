---
id: 2026-09-23_arxiv-ble-ml-reidentification-rpa-randomization
date_published: 2026-09-17
date_found: 2026-09-23
technology: bluetooth
type: academic-paper
title_en: "Learning to Link: Automating BLE Device Re-identification Under MAC Address Randomisation"
title_zh: "Learning to Link：在 MAC 地址随机化下自动化重新识别蓝牙 LE 设备"
url: "https://arxiv.org/abs/2609.26079"
source_quality: full
topics: [bt-security, MAC-randomization, RPA, privacy, machine-learning]
topic_primary: bt-security
topics_secondary: [security-privacy]
novelty_score: 3
---

## Summary (EN)

This paper (Reem Abdulrhman Alghamdi, Alberto Verna, Marco Mellia; submitted Sep 17, 2026; accepted at WTMC 2026 per the arxiv Comments field) automates a known class of Bluetooth Low Energy (BLE) tracking attack that defeats the protocol's own privacy defense. BLE uses Resolvable Private Address (RPA) rotation on its advertising channel specifically to stop long-term device tracking, but the authors note that prior work has already shown advertising-layer metadata and structural features can be used to re-identify a device across RPA changes via manually crafted signature rules. This paper's contribution is showing that the manual step can be replaced with a standard supervised-learning pipeline, formulating device linkage as a classification problem: a passive adversary observes a target device's traffic during a training phase (labeled positive samples) plus ambient background traffic (negative samples), then uses a trained classifier to recognize the same device after it rotates to a new RPA.

The evaluation uses real BLE traffic from 14 target devices (earbuds, phones, a smartwatch, a tracker, a laptop, a tablet, and a development board), each traced for at least 30 minutes and covering 3 or more distinct RPA rotations per device, against a background noise bank of 345,283 packets from 3,884 distinct addresses collected in real environments; ground truth device identity across RPA changes was established using a trusted paired device holding the target's Identity Resolution Key (IRK). The classifier is a simple decision tree (grid-searched over max_depth, min_samples_leaf, min_samples_split) trained on protocol metadata (event type, connectable/scannable flags, payload length, RSSI, TX power) plus byte-level 3-gram features extracted from the hex-encoded Advertising Data (AD) payload, trained on only two RPA epochs with 10-50 background devices injected for negative examples. At the packet level the classifier reaches 98.6% recall, 91.4% precision, and a 92.6% F1-score, with a median false-positive rate of 0% (95th percentile under 1.2%); after aggregating packet-level decisions to the device level, the false device-identification rate drops to 0.38%.

The authors are explicit about the approach's limits: it assumes an adversary who can first observe the target device during a training phase (it is not a zero-knowledge attack); classification happens at the packet level while the actual goal is MAC-address-level identity, requiring an aggregation step; and the evaluation covers only 14 devices and 30-plus-minute windows, not the full range of possible device densities, environments, or mobility patterns. The authors frame their contribution against prior manual signature-based work (citing Becker et al. 2019, Celosia & Cunche 2019) and temporal/signal-strength matching approaches (Akiyama et al. 2021, 2023), arguing that because the classifier needs "no specific knowledge of the technology" to build a working attack, it substantially lowers the expertise bar for mounting this class of attack compared to hand-crafted signature rules.

## Summary (ZH)

这篇论文（作者 Reem Abdulrhman Alghamdi、Alberto Verna、Marco Mellia，提交于 2026 年 9 月 17 日；据 arxiv 的 Comments 字段，已被 WTMC 2026 接收）将一类已知的、能够攻破蓝牙 LE（BLE）自身隐私防护机制的追踪攻击实现了自动化。BLE 在广播信道上采用可解析私有地址（Resolvable Private Address，RPA）轮换机制，专门用于阻止对设备的长期追踪；但作者指出，已有研究表明，广播层的元数据与结构特征可以借助人工设计的特征规则，在 RPA 发生变化后重新识别出同一台设备。本文的贡献在于证明这一人工步骤可以被标准的监督学习流程取代：将设备关联问题形式化为一个分类问题——被动攻击者在训练阶段观测目标设备的流量（标记为正样本），同时观测环境背景流量（标记为负样本），随后使用训练好的分类器，在设备轮换到新的 RPA 之后仍能识别出同一台设备。

评估使用了来自 14 台目标设备（耳机、手机、智能手表、追踪器、笔记本电脑、平板电脑及一块开发板）的真实 BLE 流量，每台设备至少追踪 30 分钟，且覆盖至少 3 次不同的 RPA 轮换；背景噪声库包含在真实环境中采集的、来自 3,884 个不同地址的 345,283 个数据包。跨 RPA 变化的设备身份真值，是通过一台持有目标设备身份解析密钥（IRK）的可信配对设备来建立的。分类器采用简单的决策树（对 max_depth、min_samples_leaf、min_samples_split 进行网格搜索），训练特征包括协议元数据（事件类型、可连接/可扫描标志、负载长度、RSSI、发射功率）以及从十六进制编码的广播数据（AD）负载中提取的字节级 3-gram 特征；训练仅使用两个 RPA 轮换周期的数据，并注入 10 至 50 台背景设备作为负样本。在数据包级别，分类器达到 98.6% 的召回率、91.4% 的精确率和 92.6% 的 F1 分数，假阳性率中位数为 0%（95 分位数低于 1.2%）；将数据包级别的判定聚合到设备级别后，错误设备识别率降至 0.38%。

作者也明确说明了该方法的局限：其威胁模型假设攻击者能先在训练阶段观测到目标设备（并非零知识攻击）；分类是在数据包层面进行的，而攻击者真正的目标是 MAC 地址层面的身份识别，因此需要额外的聚合步骤；评估范围仅覆盖 14 台设备、30 分钟以上的观测窗口，并未穷尽所有可能的设备密度、环境或移动模式。作者将本文贡献与此前基于人工特征规则的方法（引用 Becker 等 2019 年、Celosia & Cunche 2019 年的工作）以及基于时序/信号强度匹配的方法（Akiyama 等 2021、2023 年的工作）进行了对比，指出由于该分类器构建可用攻击"无需该技术领域的专门知识"，相比人工设计特征规则，显著降低了发起此类攻击所需的专业门槛。

## Key technical points (EN)

- **Threat model**: passive adversary with a training phase — observes labeled target-device traffic plus background traffic, then classifies post-rotation advertising packets as belonging to the target or not; not a zero-knowledge / cold-start attack.
- **Dataset**: 14 real target devices (earbuds, phones, smartwatch, tracker, laptop, tablet, dev board), each traced ≥30 minutes across ≥3 RPA rotations; 345,283-packet, 3,884-address background noise bank from real environments; ground truth via a trusted device's Identity Resolution Key (IRK).
- **Features**: protocol metadata (event type, connectable/scannable flags, payload length, RSSI, TX power) plus byte-level 3-grams of the hex-encoded Advertising Data payload; a decision tree classifier (grid-searched hyperparameters), trained on just 2 RPA epochs.
- **Packet-level results**: 98.6% recall, 91.4% precision, 92.6% F1, median FPR 0% (95th percentile <1.2%).
- **Device-level result after aggregation**: 0.38% false device-identification rate.
- **Stated limits**: requires a prior training-phase observation of the target; classifies at packet level (needs aggregation for MAC-level identity); evaluated on 14 devices / 30+ minute windows only, not exhaustive across device density, environment, or mobility.

## Key technical points (ZH)

- **威胁模型**：具有训练阶段的被动攻击者——先观测已标注的目标设备流量与背景流量，随后对轮换后的广播数据包判断其是否属于目标设备；并非零知识/冷启动攻击。
- **数据集**：14 台真实目标设备（耳机、手机、智能手表、追踪器、笔记本电脑、平板电脑、开发板），每台追踪 30 分钟以上、覆盖至少 3 次 RPA 轮换；背景噪声库为真实环境中采集的 345,283 个数据包、来自 3,884 个不同地址；跨 RPA 的设备身份真值通过可信设备的身份解析密钥（IRK）建立。
- **特征**：协议元数据（事件类型、可连接/可扫描标志、负载长度、RSSI、发射功率）加上十六进制编码广播数据负载的字节级 3-gram 特征；决策树分类器（超参数网格搜索），仅用 2 个 RPA 轮换周期的数据训练。
- **数据包级结果**：召回率 98.6%，精确率 91.4%，F1 分数 92.6%，假阳性率中位数 0%（95 分位数低于 1.2%）。
- **聚合后设备级结果**：错误设备识别率 0.38%。
- **作者说明的局限**：需要事先在训练阶段观测目标设备；分类在数据包层面进行（需聚合才能得到 MAC 层面身份）；评估仅覆盖 14 台设备、30 分钟以上观测窗口，未覆盖全部设备密度、环境或移动模式。

## Why it matters / what's new (EN)

The KB already has several entries on BLE/Wi-Fi MAC-randomization and cross-protocol tracking attacks (e.g. the 2026-06-26 Wi-Fi ML-randomization study, the 2026-08-13 association-privacy formal analysis, and the 2026-09-10 CrossLink cross-protocol linking paper). This paper's specific contribution is narrower but concrete: it takes a re-identification technique that previously required a human analyst to hand-craft signature rules from advertising-layer metadata, and shows a generic decision-tree pipeline achieves 98.6% recall and 0.38% false device identifications without hand-crafted rules, with no protocol-specific expertise built into the model. That is a quantified data point on how automatable this attack class has become, distinct from the cross-protocol composition angle CrossLink raised and from the pure formal-modeling angle of the association-privacy paper.

## Why it matters / what's new (ZH)

知识库中已有多篇关于 BLE/Wi-Fi MAC 随机化及跨协议追踪攻击的条目（例如 2026-06-26 收录的 Wi-Fi 机器学习破解随机化研究、2026-08-13 收录的关联隐私形式化分析，以及 2026-09-10 收录的 CrossLink 跨协议关联论文）。本文的贡献相对更聚焦但很具体：此前需要人工分析师根据广播层元数据手工设计特征规则才能完成的重新识别技术，本文证明一个通用的决策树流程无需人工设计规则即可达到 98.6% 的召回率、0.38% 的错误设备识别率（聚合后），且模型中不含任何协议专门知识。这为"这类攻击已经能被自动化到何种程度"提供了一个量化数据点，与 CrossLink 提出的跨协议组合失效角度、以及关联隐私论文的纯形式化建模角度均有所不同。
