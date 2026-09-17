---
id: 2026-09-17_arxiv-cross-domain-rssi-csi-localization
date_published: 2026-09-15
date_found: 2026-09-17
technology: wifi
type: academic-paper
title_en: "Cross-Domain Inference for Human Localization: Applying Wi-Fi RSSI Data to CSI-Trained Models"
title_zh: "跨域推断实现人体定位：将 Wi-Fi RSSI 数据应用于基于 CSI 训练的模型"
url: "https://arxiv.org/abs/2609.17204"
source_quality: full
topics: [RSSI, CSI, WiFi-sensing, privacy, human-localization]
topic_primary: sensing-csi
topics_secondary: [security-privacy]
novelty_score: 1
---

## Summary (EN)

This paper (Ariel Duschanek-Myers, Thomas Welsh, Helmut Neukirchen, University of Iceland) opens from a stated privacy concern: "Wi-Fi signal data can be used to compromise the privacy of individuals," and while most existing Wi-Fi sensing work relies on Channel State Information (CSI), the authors note that "collecting this data on typical IoT devices often requires elevated operating system permissions and specialized drivers." They instead investigate whether Received Signal Strength Indicator (RSSI) -- which "is accessible even on devices with limited user permissions" and is therefore readable by a much wider range of ordinary IoT hardware -- can support the same kind of inference. Rather than collecting a new dataset and training an RSSI-specific model, the paper reuses an existing Wi-Fi pose-prediction project that was built and trained on CSI, and tests it in a cross-domain setting: feeding it RSSI data instead of the CSI data it was trained on, to see whether the CSI-trained model still produces usable location predictions.

The evaluation setup replicated the 3.5m x 4m room layout used in the original CSI-based project, but with three ESP32-C3 boards deployed as access points and a Raspberry Pi 4 as the receiving device; RSSI collection was synchronized with video recordings of a person moving through the room to provide ground truth. Before evaluation, the authors captured roughly two minutes of baseline RSSI in the empty room, converted the dBm readings to a linear amplitude via 10^(RSSI/20), subtracted an empty-room baseline (tested both per-AP and as a global mean), then scaled and damped the result against a target-baseline parameter; a further variant applied a noise gate, a sigmoid and an angular-embedding step intended to help the model interpret the lower-resolution RSSI input the way it would interpret CSI phase/angle information. Seven distinct movement events were recorded and timestamped (e.g. raising alternating arms, walking front-to-back, walking between access points, rotating with arms extended or bent, raising and lowering both arms) to check the model's response against specific, identifiable motions rather than only an aggregate occupied/empty comparison.

Across preprocessing variants, adding the angular-embedding step raised the model's maximum confidence score from 0.7189 (without it) to 0.9217, and under global-mean-subtraction normalization the undampened and dampened variants scored 0.7922 and 0.7904 respectively (Table I). With angular embedding, the paper reports roughly 80% average confidence when the room is occupied, against markedly lower scores in the empty-room baseline condition; the standard deviation of predicted keypoint locations also dropped during periods of human presence, while the torso keypoints (6, 8, 10) carried the highest standard deviation throughout -- which the authors attribute to the torso being "where the human body has most of its mass that influences Wi-Fi signals." The authors note two threats to validity: their room's concrete construction differed from the original project's more open floor plan, which they suggest may have introduced an "echo effect" from wall reflections, and they lacked access to an Azure Kinect for precise ground truth, relying on synchronized video instead. Their stated conclusion is that "low-density signal data can still trigger high-certainty predictions with a low degree of deviation," and that these results "imply that a wide range of IoT devices can be used for privacy invasion in Wi-Fi-dense environments," which they argue calls for "secure design that prioritizes privacy."

## Summary (ZH)

本文（Ariel Duschanek-Myers、Thomas Welsh、Helmut Neukirchen，冰岛大学）从一个明确的隐私担忧出发："Wi-Fi 信号数据可被用于侵犯个人隐私"。尽管现有大多数 Wi-Fi 感知工作依赖信道状态信息（CSI），作者指出"在典型 IoT 设备上采集该数据通常需要更高的操作系统权限与专用驱动"。他们转而研究接收信号强度指示（RSSI）——"即便在权限受限的设备上也可获取"，因而可被更广泛的普通 IoT 硬件读取——能否支持同类推断。本文没有采集新数据集并训练一个专门面向 RSSI 的模型，而是复用一个已有的、基于 CSI 构建并训练的 Wi-Fi 姿态预测项目，并在跨域场景下对其进行测试：向其输入 RSSI 数据（而非其训练所用的 CSI 数据），观察该 CSI 训练模型是否仍能给出可用的位置预测。

评估环境复现了原 CSI 项目所用的 3.5 米 × 4 米房间布局，但改用三块 ESP32-C3 开发板作为接入点、一台 Raspberry Pi 4 作为接收设备；RSSI 采集与一人在房间内活动的视频记录同步，以提供真值参照。评估前，作者在空房间中采集了约两分钟的基线 RSSI，通过 10^(RSSI/20) 将 dBm 读数转换为线性幅值，并减去空房间基线（分别测试了逐 AP 基线与全局均值两种方式），随后依据一个目标基线参数进行缩放与阻尼（damping）；另一路变体则施加噪声门限、sigmoid 与一个角度嵌入（angular embedding）步骤，目的是帮助模型以其解读 CSI 相位/角度信息的方式来解读分辨率更低的 RSSI 输入。实验记录并标注了七种不同的动作事件（例如交替举臂、前后行走、在接入点之间行走、伸臂或屈臂旋转、双臂举起与放下），以便针对具体、可识别的动作而非仅仅是"有人/无人"的聚合对比来检验模型响应。

在不同预处理方案中，加入角度嵌入步骤将模型的最高置信度分数从未加入时的 0.7189 提升至 0.9217；在全局均值减除归一化下，未加阻尼与加阻尼两种方案得分分别为 0.7922 与 0.7904（表 I）。在加入角度嵌入后，论文报告房间内有人时的平均置信度约为 80%，明显高于空房间基线条件下的分数；预测关键点位置的标准差也在有人活动期间下降，而躯干关键点（6、8、10）在整个预测过程中标准差最高——作者将此归因于躯干"是人体质量最集中、对 Wi-Fi 信号影响最大的部位"。作者指出两项效度威胁：其房间为混凝土结构，与原项目更为开阔的场地布局不同，可能因墙面反射引入"回声效应"；此外他们未能获得 Azure Kinect 以获取精确真值，转而依赖同步视频。其自陈结论是："低密度信号数据仍可触发偏差较小的高置信度预测"，这些结果"意味着在 Wi-Fi 密集环境中，广泛种类的 IoT 设备均可被用于侵犯隐私"，因而需要"以隐私优先的安全设计"。

## Key technical points (EN)

- **Approach**: cross-domain inference -- feed RSSI data into an existing, unmodified Wi-Fi pose-prediction model originally trained on CSI, rather than collecting data and training a new RSSI-specific model.
- **Motivation (author-stated)**: CSI collection on typical IoT devices needs elevated OS permissions and specialized drivers; RSSI is accessible on devices with limited permissions, widening the pool of hardware that could be used this way.
- **Testbed**: replica of a prior project's 3.5m x 4m room; three ESP32-C3 boards as APs, one Raspberry Pi 4 as receiver; RSSI synchronized with video ground truth; ~2-minute empty-room baseline capture.
- **Preprocessing pipeline**: dBm-to-linear conversion (10^(RSSI/20)) -> empty-room baseline subtraction (per-AP or global mean) -> scaling/damping against a target-baseline parameter; a separate variant adds a noise gate, a sigmoid and an angular embedding.
- **Ablation results (max confidence score)**: global mean subtraction, noisy 0.7922 / dampened 0.7904; without angular embedding 0.7189; with angular embedding 0.9217.
- **Headline result**: ~80% average confidence (with angular embedding) when the room is occupied, versus markedly lower confidence in the empty-room condition; the torso keypoints (6, 8, 10) carry the highest standard deviation throughout the predictions.
- **Acknowledged limitations**: concrete-room construction (vs. the original open floor plan) may introduce multipath/"echo" effects; ground truth came from synchronized video rather than an Azure Kinect depth sensor.

## Key technical points (ZH)

- **方法**：跨域推断——将 RSSI 数据输入一个未经修改、原本基于 CSI 训练的既有 Wi-Fi 姿态预测模型，而非采集数据并训练新的专用 RSSI 模型。
- **动机（作者自述）**：在典型 IoT 设备上采集 CSI 需要更高的操作系统权限与专用驱动；RSSI 在权限受限设备上也可获取，从而扩大了可被用于此类用途的硬件范围。
- **测试平台**：复现此前项目 3.5 米 × 4 米的房间；三块 ESP32-C3 开发板作为 AP，一台 Raspberry Pi 4 作为接收端；RSSI 与视频真值同步采集；约 2 分钟的空房间基线采集。
- **预处理流程**：dBm 转线性幅值（10^(RSSI/20)）→ 减去空房间基线（逐 AP 或全局均值）→ 依目标基线参数缩放/阻尼；另一路变体增加噪声门限、sigmoid 与角度嵌入。
- **消融结果（最高置信度分数）**：全局均值减除，未加阻尼 0.7922 / 加阻尼 0.7904；不加角度嵌入 0.7189；加角度嵌入 0.9217。
- **主要结果**：加入角度嵌入后，房间有人时的平均置信度约 80%，明显高于空房间条件下的置信度；躯干关键点（6、8、10）在整个预测过程中标准差最高。
- **作者承认的局限**：房间为混凝土结构（相对于原项目更开阔的场地），可能引入多径/"回声"效应；真值来自同步视频而非 Azure Kinect 深度传感器。

## Why it matters / what's new (EN)

The KB's existing `sensing-csi` coverage is built almost entirely on CSI-based systems (the one earlier RSSI-only entry, `2026-05-03_arxiv-wirssi-rssi-only-wifi-sensing`, reported metric localization error rather than model confidence); this paper instead asks whether a model trained on CSI generalizes, unmodified, to the coarser RSSI signal that ordinary low-permission IoT hardware can already read -- and reports that it does, at roughly 80% confidence during human movement. The paper frames this explicitly as a privacy finding rather than a sensing-accuracy improvement: its own stated conclusion is that these results "imply that a wide range of IoT devices can be used for privacy invasion in Wi-Fi-dense environments," which is why this entry is filed with `security-privacy` as a secondary topic alongside its `sensing-csi` primary.

## Why it matters / what's new (ZH)

知识库现有的 `sensing-csi`（Wi-Fi 感知/CSI）条目几乎全部基于 CSI 系统（此前唯一的纯 RSSI 条目 `2026-05-03_arxiv-wirssi-rssi-only-wifi-sensing` 报告的是定位误差而非模型置信度）；本文则探究一个基于 CSI 训练的模型能否在未经修改的情况下，泛化到普通低权限 IoT 硬件本就可读取的、分辨率更粗的 RSSI 信号——结果表明确实可以，在有人活动时置信度约达 80%。论文明确将这一发现定位为隐私发现而非感知精度提升：其自陈结论是这些结果"意味着在 Wi-Fi 密集环境中，广泛种类的 IoT 设备均可被用于侵犯隐私"，这也是本条目将 `security-privacy` 列为次要主题、`sensing-csi` 列为主要主题的原因。

## Images

None.
