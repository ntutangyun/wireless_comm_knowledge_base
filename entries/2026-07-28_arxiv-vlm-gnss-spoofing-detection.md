---
id: 2026-07-28_arxiv-vlm-gnss-spoofing-detection
date_published: 2026-07-27
date_found: 2026-07-28
type: academic-paper
technology: satellite
title_en: "Vision-Language Model-based GNSS Spoofing Detection for Autonomous Vehicle Navigation — camera + IMU semantics catch what signal-integrity checks miss"
title_zh: "基于视觉-语言模型的 GNSS 欺骗检测用于自动驾驶导航——摄像头与 IMU 语义捕捉信号完整性校验遗漏的攻击"
url: "https://arxiv.org/abs/2607.23962"
source_quality: abstract_only
topics: [GNSS, spoofing, security, autonomous-vehicles, VLM]
topic_primary: sat-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Aldeen, Irfan, Dasgupta, Cheng, Rahman and Chowdhury (arXiv 2607.23962, submitted Jul-27-2026; found via the cs.CR listing) present what they describe as the first application of a Vision-Language Model (VLM) to GNSS spoofing detection for autonomous vehicles. The threat model: spoofed GNSS signals covertly redirect an AV or induce unsafe maneuvers. Rather than analysing the RF signal itself, the framework fuses front-camera imagery with onboard sensor streams (speed, acceleration, yaw rate) and asks whether the maneuver implied by GNSS is *semantically consistent* with what the camera and IMU say the vehicle is actually doing.

The VLM is adapted through a three-stage fine-tuning process that first grounds visual cues, then calibrates the sensor data into a shared semantic space with them. Evaluation uses real-world drives in Tuscaloosa, Alabama with synchronized GNSS, IMU and camera logs, against three attack classes: trajectory mirroring (wrong turns), position freezing (overshoots), and drift generation (stops). The fine-tuned model reaches F1 94–95% versus 23–32% for zero-shot VLM baselines — with 100% accuracy on wrong-turn and stop attacks and 88–93% on overshoots — while an adaptive-inference scheme cuts compute load by roughly 86%.

## Summary (ZH)

Aldeen、Irfan、Dasgupta、Cheng、Rahman 与 Chowdhury（arXiv 2607.23962，2026-07-27 提交；经 cs.CR 列表发现）提出了他们称之为首个将视觉-语言模型（VLM）应用于自动驾驶 GNSS 欺骗检测的工作。威胁模型：伪造的 GNSS 信号隐蔽地改变自动驾驶车辆的路线或诱发不安全驾驶行为。该框架不分析射频信号本身，而是融合前视摄像头图像与车载传感器流（速度、加速度、偏航角速率），判断 GNSS 所隐含的机动动作与摄像头和 IMU 所反映的实际车辆行为在*语义上*是否一致。

VLM 经三阶段微调适配：先对视觉线索做落地（grounding），再将传感器数据校准到与之共享的语义空间。评估基于阿拉巴马州塔斯卡卢萨的真实道路数据（同步 GNSS、IMU 与摄像头日志），覆盖三类攻击：轨迹镜像（错误转弯）、位置冻结（冲出路口）与漂移生成（异常停车）。微调模型 F1 达 94–95%，而零样本 VLM 基线仅 23–32%——错误转弯与停车攻击检测准确率 100%，冲出类 88–93%——自适应推理方案同时将计算负载削减约 86%。

## Key technical points (EN)

- Cross-modal consistency check: GNSS-derived maneuver vs. camera + IMU (speed, acceleration, yaw rate) semantics — a defense layer orthogonal to RF signal-integrity checks.
- Three-stage fine-tuning: visual grounding first, then sensor calibration into a shared semantic space.
- Real-world dataset (Tuscaloosa, AL): synchronized GNSS/IMU/camera; attacks = trajectory mirroring, position freezing, drift generation.
- F1 94–95% fine-tuned vs 23–32% zero-shot; 100% on wrong-turn/stop attacks; adaptive inference −86% compute.
- Claimed first VLM application to GNSS spoofing detection.

## Key technical points (ZH)

- 跨模态一致性校验：GNSS 推得的机动动作对照摄像头 + IMU（速度、加速度、偏航角速率）语义——与射频信号完整性校验正交的防御层。
- 三阶段微调：先视觉落地，再将传感器数据校准入共享语义空间。
- 真实数据集（阿拉巴马州塔斯卡卢萨）：同步 GNSS/IMU/摄像头；攻击类型 = 轨迹镜像、位置冻结、漂移生成。
- 微调 F1 94–95% 对零样本 23–32%；错误转弯/停车攻击 100%；自适应推理节省 86% 计算。
- 声称为 VLM 应用于 GNSS 欺骗检测的首例。

## Why it matters / what's new (EN)

The KB's only prior GNSS-security entry (2026-07-14_arxiv-gnss-spoofing-detection-tdd-3gpp) works at the network/standards layer — TDD timing checks in 3GPP networks. This entry opens a second, perception-layer defense axis: semantic cross-checking of position against what the vehicle *sees and feels*, requiring no receiver or network modification. It is also the first satellite-domain entry sourced through the cs.CR security listing rather than cs.NI — wireless-security work publishes there, and the top security venues post preprints months before the conferences.

## Why it matters / what's new (ZH)

KB 此前唯一的 GNSS 安全条目（2026-07-14_arxiv-gnss-spoofing-detection-tdd-3gpp）工作在网络/标准层——3GPP 网络中的 TDD 时序校验。本条目开辟了第二条感知层防御轴线：将位置与车辆*所见所感*做语义交叉校验，无需修改接收机或网络。它也是首个经 cs.CR 安全列表（而非 cs.NI）发现的卫星域条目——无线安全研究多发表于此，且顶级安全会议的预印本比会期早数月上线。
