---
id: 2026-11-24_arxiv-continuous-time-set-transformer-asynchronous-wifi-imu-localization
date_published: 2026-11-09
date_found: 2026-11-24
technology: wifi
type: academic-paper
title_en: "Continuous-Time Set-Transformers for Asynchronous WiFi-IMU Indoor Localization"
title_zh: "面向异步 WiFi-IMU 室内定位的连续时间集合 Transformer"
url: "https://arxiv.org/abs/2611.13057"
source_quality: full
topics: [indoor localization, WiFi RSSI fingerprinting, IMU, sensor fusion, transformer]
topic_primary: ftm-ranging
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Mohamed Bachar, Ilyass Abouelaziz and Yuehua Ding (CESI LINEACT, France; arXiv 2611.13057, cs.LG, submitted 9 November 2026) address indoor localization that combines WiFi received signal strength indicator (RSSI) fingerprints with inertial measurements. The paper's starting point is that the two streams are sampled asynchronously at different rates, so observations rarely align in time and may be missing or stale, whereas most existing methods resample onto a shared clock and use a separate branch per modality.

The proposed model represents observations as an unordered set of timestamped tokens. Each token encodes the measurement, its modality and the elapsed time since acquisition relative to the query; a WiFi encoder (WiFi-Net, taking an RSSI vector over the access points) and an IMU CNN feed one shared latent space, and a single self-attention block with a learnable position query fuses the set and outputs an (x, y) estimate, without resampling and with invariance to token order. Training randomly masks entire modalities and individual observations so that the model operates under missing or outdated inputs. The authors evaluate the encoders on their own benchmarks and the fused model on a Webots simulation and on real data, including a cross-session set from unseen days.

Reported numbers: on UJIIndoorLoc the WiFi encoder reaches 8.69 m MAE on validation scans against 15.17 m for the open-source k-NN baseline wlan_localization (a 42.7% reduction). On the real MSILN site1/B1 cross-session test the fused model reaches 10.90 m MAE, against 28.31 m for wlan_localization, 12.49 m for PDR-from-start and 52.69 m for IMUWiFine; on the validation session the margin over PDR-from-start is narrow (16.67 m versus 16.88 m). In the Webots simulation, whose WiFi field is synthesised, the fused model reaches 0.61 m; suppressing IMU gives 0.86 m and suppressing WiFi gives 3.50 m. Aging the WiFi token while IMU stays fresh raises the error gradually (0.61, 1.13, 1.48, 1.84, 2.05 m), reaching the IMU-only level only when the reference is fully stale. The model runs at 4.77 ms per sample at batch size 1 on a Quadro P4000. The authors list limitations: the simulated WiFi environment is synthetic, so its sub-metre accuracy is optimistic; the inertial encoder underperforms a significantly larger reference model on cross-subject trajectories; and one WiFi-dense path of 786 samples, roughly 28% of the test mass, dominates the MSILN test split.

## Summary (ZH)
Mohamed Bachar、Ilyass Abouelaziz 与 Yuehua Ding（法国 CESI LINEACT；arXiv 2611.13057，cs.LG，2026 年 11 月 9 日提交）研究把 WiFi 接收信号强度指示（RSSI）指纹与惯性测量结合的室内定位。论文的出发点是：这两路数据以不同速率异步采样，观测很少在时间上对齐，且可能缺失或过时，而现有方法大多重采样到共同时钟，并为每种模态使用独立分支。

所提模型将观测表示为带时间戳的无序令牌集合。每个令牌编码测量值、模态以及相对查询时刻自采集以来经过的时间；WiFi 编码器（WiFi-Net，输入为各接入点的 RSSI 向量）与 IMU CNN 将数据映射到共享隐空间，单个带可学习位置查询的自注意力块融合整个集合并输出 (x, y) 估计，无需重采样，且对令牌顺序不变。训练时随机遮蔽整个模态和单个观测，使模型能在缺失或过时输入下工作。作者在各自基准上评估编码器，并在 Webots 仿真与真实数据上评估融合模型，其中包括取自未见日期的跨会话数据集。

报告的数字：在 UJIIndoorLoc 上，WiFi 编码器在验证扫描上的 MAE 为 8.69 m，开源 k-NN 基线 wlan_localization 为 15.17 m（降低 42.7%）。在真实的 MSILN site1/B1 跨会话测试上，融合模型 MAE 为 10.90 m，对比 wlan_localization 28.31 m、PDR-from-start 12.49 m、IMUWiFine 52.69 m；在验证会话上相对 PDR-from-start 的优势很小（16.67 m 对 16.88 m）。在 WiFi 场为合成的 Webots 仿真中，融合模型达到 0.61 m；去掉 IMU 为 0.86 m，去掉 WiFi 为 3.50 m。在 IMU 保持新鲜的情况下让 WiFi 令牌逐步变旧，误差逐渐上升（0.61、1.13、1.48、1.84、2.05 m），仅当参考完全过时时才降到仅 IMU 的水平。模型在 Quadro P4000 上批大小为 1 时每样本耗时 4.77 ms。作者列出的局限包括：仿真的 WiFi 环境是合成的，因此其亚米级精度偏乐观；惯性编码器在跨受试者轨迹上不及一个大得多的参考模型；以及一条含 786 个样本、约占测试量 28% 的 WiFi 密集路径主导了 MSILN 测试划分。

## Key technical points (EN)
- Each observation is a tuple of raw sample, modality, acquisition time and availability flag; the learned time encoding is a sinusoidal encoding of the signed elapsed time, and a slot with availability 0 contributes no token.
- The paper scores related methods against three properties it names: continuous-time tokens without resampling or an ODE solver, one permutation-invariant set transformer for cross-modal and cross-time fusion, and learned robustness to missing or stale sensors validated across sessions.
- On the IMUWiFine floor-4 split the model reaches 6.37 m test MAE against a validation MAE of 2.31 m; the authors read the LSTM reference as strong within its own distribution but not across sessions.
- On RoNIN the lighter inertial encoder trails ResNet1D (the paper reports a +89.2% gap that narrows to +48.2% under Umeyama alignment, 7.62 m versus 5.14 m).

## Key technical points (ZH)
- 每个观测是由原始样本、模态、采集时间和可用标志组成的元组；学习到的时间编码是对带符号经过时间的正弦编码，可用标志为 0 的槽位不产生令牌。
- 论文按其命名的三项属性对相关方法打分：无需重采样或 ODE 求解器的连续时间令牌；用一个置换不变的集合 Transformer 完成跨模态与跨时间融合；以及经跨会话验证的、对缺失或过时传感器的学习式鲁棒性。
- 在 IMUWiFine floor-4 划分上，模型测试 MAE 为 6.37 m，验证 MAE 为 2.31 m；作者认为其中 LSTM 参考方法在自身分布内较强，但跨会话时则不然。
- 在 RoNIN 上，更轻量的惯性编码器落后于 ResNet1D（论文报告差距为 +89.2%，在 Umeyama 对齐下收窄至 +48.2%，即 7.62 m 对 5.14 m）。

## Why it matters / what's new (EN)
WiFi's role here is the RSSI fingerprint vector from scans; the paper does not use CSI, FTM or any 802.11 amendment feature. It is filed under the indoor-positioning bin, and its stated claim is robustness of a single fusion block to missing and stale inputs across sessions rather than a new WiFi measurement.

## Why it matters / what's new (ZH)
WiFi 在此只提供扫描得到的 RSSI 指纹向量；论文未使用 CSI、FTM 或任何 802.11 修订的功能。本条目归入室内定位主题；论文声称的贡献是单一融合模块在跨会话下对缺失与过时输入的鲁棒性，而非新的 WiFi 测量方法。
