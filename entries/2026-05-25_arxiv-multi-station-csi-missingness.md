---
id: 2026-05-25_arxiv-multi-station-csi-missingness
date_published: 2026-03-12
date_found: 2026-05-25
type: academic-paper
technology: wifi
title_en: "Multi-Station WiFi CSI Sensing Framework Robust to Station-wise Feature Missingness and Limited Labeled Data"
title_zh: "对站点级特征缺失与少标注数据鲁棒的多站点 WiFi CSI 感知框架"
url: "https://arxiv.org/abs/2603.11858"
source_quality: full
topics: [sensing-csi, multi-station, self-supervised, CroSSL, data-augmentation, ESP32, 802.11n, position-estimation]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Practical multi-station Wi-Fi CSI sensing has two chronic problems that the literature has mostly treated separately: stations drop out for long stretches (a monitoring node loses power, gets occluded, or is simply offline — "station-wise feature missingness"), and labelled training data is scarce because ground-truth collection is expensive. This paper argues the two must be solved together, and proposes a framework pairing **missingness-invariant pre-training** with **station-wise masking augmentation (SMA)**. The pre-training adapts cross-modal self-supervised learning (CroSSL) to learn representations from unlabelled CSI that are intrinsically tolerant of absent stations; SMA then injects realistic, structured station-unavailability patterns during the scarce-label downstream training so the model is exposed to the missingness it will face at deployment.

Evaluation is on a concrete sensing task — one-dimensional human position estimation in an office, using 8 ESP32 stations around the room perimeter transmitting to a central AP at 802.11n / 2.4 GHz, 20 Hz CSI, with 20 minutes of synchronized CSI + RGB-video ground truth. The headline finding is an ablation result rather than a single accuracy number: with all 8 stations the combined method reaches RMSE ≈ 0.0077 (on normalized 0.166–0.854 coordinates spanning 0–3.4 m), and as stations are removed down to 4 and then 1, the combined method degrades gracefully while the single-technique baselines (pre-training alone, or SMA alone) fail substantially. The authors' explicit conclusion is that "neither missingness-invariant pre-training nor station-wise augmentation alone is sufficient; their combination is essential."

## Summary (ZH)

实际的多站点 Wi-Fi CSI 感知有两个长期问题，文献多半分别处理：站点会长时间掉线（监测节点断电、被遮挡或干脆离线——「站点级特征缺失」），以及标注训练数据稀缺（真值采集成本高）。本文主张二者必须协同解决，提出将 **缺失不变预训练** 与 **站点级掩码增强（SMA）** 配对的框架。预训练改造跨模态自监督学习（CroSSL），从无标注 CSI 中学习对缺失站点本质上容忍的表征；SMA 则在少标注的下游训练中注入真实、结构化的站点不可用模式，使模型提前接触其部署时将面对的缺失。

评估基于一个具体感知任务——办公室内的一维人体位置估计，使用环绕房间四周的 8 个 ESP32 站点向中央 AP 发送（802.11n / 2.4 GHz、20 Hz CSI），并有 20 分钟同步的 CSI + RGB 视频真值。核心结论是消融结果而非单一精度数字：全部 8 站点时，组合方法达 RMSE ≈ 0.0077（归一化坐标 0.166–0.854，对应 0–3.4 m）；当站点减至 4 个、再减至 1 个时，组合方法平稳退化，而单技术基线（仅预训练，或仅 SMA）显著失效。作者明确结论：「缺失不变预训练与站点级增强单用其一均不足；二者结合才是关键。」

## Key technical points (EN)

- Targets **two coupled problems**: long-term structured station-wise missingness + limited labels — solved jointly, not separately.
- **Missingness-invariant pre-training:** adapts CroSSL (cross-modal self-supervised learning) on unlabelled CSI to learn station-gap-tolerant representations.
- **Station-wise Masking Augmentation (SMA):** injects realistic unavailability patterns during scarce-label downstream training.
- **Testbed:** 8 ESP32 stations + central AP, 802.11n 2.4 GHz, 20 Hz CSI, 20 min synchronized CSI+RGB ground truth; task = 1-D human position estimation.
- **Result:** combined method RMSE ≈ 0.0077 (8 stations); degrades gracefully to 4 and 1 stations where baselines collapse.
- **Ablation thesis:** pre-training alone or SMA alone is insufficient; the combination is essential.

## Key technical points (ZH)

- 针对 **两个耦合问题**：长期结构化的站点级缺失 + 少标注——协同求解而非分别处理。
- **缺失不变预训练：** 在无标注 CSI 上改造 CroSSL（跨模态自监督学习），学习容忍站点缺失的表征。
- **站点级掩码增强（SMA）：** 在少标注的下游训练中注入真实不可用模式。
- **测试床：** 8 个 ESP32 站点 + 中央 AP，802.11n 2.4 GHz，20 Hz CSI，20 分钟同步 CSI+RGB 真值；任务为一维人体位置估计。
- **结果：** 组合方法 RMSE ≈ 0.0077（8 站点）；减至 4、1 站点时平稳退化，而基线崩溃。
- **消融论点：** 仅预训练或仅 SMA 均不足；二者结合才关键。

## Why it matters / what's new (EN)

The KB's sensing-CSI entries lean toward single-link models, foundation encoders (CSI-JEPA), and cross-modal bridges (WirelessSense-LLM). This one addresses the *deployment-reliability* gap that those rarely confront: real multi-station installs lose nodes and lack labels at the same time. Framing missingness-invariance and label-scarcity as one joint problem — and showing empirically that the two mitigations are only useful together — is a useful, practical counterpoint for anyone building multi-AP / multi-station sensing meshes, where graceful degradation as sensors drop is the difference between a demo and a product.

## Why it matters / what's new (ZH)

KB 的 sensing-CSI 条目偏向单链路模型、基础编码器（CSI-JEPA）与跨模态桥接（WirelessSense-LLM）。本文针对那些工作很少正面应对的 *部署可靠性* 缺口：真实多站点部署会同时掉节点且缺标注。把缺失不变性与标注稀缺当作一个联合问题，并经验性地证明两种缓解手段只有合用才有效——这对构建多 AP / 多站点感知网格者是有用而务实的对照，因为传感器掉线时能否平稳退化，正是 demo 与产品之别。
