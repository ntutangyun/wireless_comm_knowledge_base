---
id: 2026-08-18_arxiv-koala-koopman-csi-motion-forecast
date_published: 2026-08-16
date_found: 2026-08-18
type: academic-paper
technology: wifi
title_en: "KOALA: Koopman Operator Learning for WiFi-Based Anticipatory Human Motion Prediction"
title_zh: "KOALA：基于 Koopman 算子学习的 Wi-Fi 人体运动预测"
url: "https://arxiv.org/abs/2608.15815"
source_quality: full
topics: [WiFi-sensing, CSI, 802.11bf, human-pose, motion-forecasting, Koopman, machine-learning]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
KOALA (Quang-Anh N. D., Duc Pham Minh, Thao Phuong Pham, Minh Anh Nguyen, Huan X. Nguyen, Tuan Dang; accepted at Transactions on Machine Learning Research 2026) moves Wi-Fi CSI sensing from *recognising* the present pose to *forecasting* future poses. Given a window of observed CSI frames and the skeleton poses estimated from them, the model predicts 3D joint positions 100–2000 ms ahead. The design goal is to avoid the standard autoregressive rollout used by sequence models (LSTM / Transformer variants), which accumulates error at every step and slows down at long horizons.

The pipeline is: a Mamba-based CSI encoder produces per-frame features and global context; an integrated two-stage human-pose module recovers 3D joints via skeleton-biased attention and re-encodes them as kinematic features; the CSI and pose streams are fused by residual addition; the fused state is lifted into a higher-dimensional Koopman latent space in which the (nonlinear) motion dynamics are approximated as linear; and a single learned operator advances the latent state to any horizon by a matrix–vector product. Two details make it train: the operator is parametrised as K_eff = I + B + γ·U(c)·V(c)ᵀ — identity baked in as a residual, with a low-rank CSI-conditioned correction — which removes the "identity attractor" that otherwise stalls learning at initialisation; and a Koopman Anchored Latent (KAL) loss supervises the lifting and the operator jointly in the temporal-encoder feature space, subsuming reconstruction, linearity and stability objectives without contrastive or spectral penalties. Poses are decoded as deltas relative to the last observed pose, which prevents mean-collapse, and the model is trained simultaneously on six horizons so one operator must satisfy all of them.

On WiPose (2D poses) KOALA reports 26.14 mm MPJPE at 100 ms and 27.28 mm at 1000 ms — only 1.14 mm of degradation across the horizon and about 19% better than the strongest baseline (VMRNN, 31.22 mm at 1000 ms). On MM-Fi (3D, 40 subjects, 27 actions, 4 environments) it reaches 52.1 mm at 100 ms and 61.9 mm at 2000 ms under protocol 1, versus 332.6 mm for the next-best SwinLSTM baseline (a 6.4× gap), with PCK@20 of 91.8% at 100 ms and above 85.9% at 1000 ms; cross-subject and cross-environment protocols are also reported. Per-horizon inference cost after the initial lifting is one matrix–vector product. Limitations the authors state: single-person only, deterministic (no motion distribution), abrupt action transitions can violate the time-invariant-dynamics assumption, and cross-site zero-shot transfer is not validated.

## Summary (ZH)
KOALA（Quang-Anh N. D.、Duc Pham Minh、Thao Phuong Pham、Minh Anh Nguyen、Huan X. Nguyen、Tuan Dang；已被 Transactions on Machine Learning Research 2026 接收）把 Wi-Fi CSI 感知从"识别当前姿态"推进到"预测未来姿态"。给定一段观测到的 CSI 帧及由其估计的骨架姿态，模型预测未来 100–2000 ms 的三维关节位置。设计目标是绕开序列模型（LSTM / Transformer 变体）常用的自回归滚动预测——后者每一步都累积误差，且长时程推理变慢。

流水线为：基于 Mamba 的 CSI 编码器产生逐帧特征与全局上下文；集成的两阶段人体姿态模块通过骨架偏置注意力恢复三维关节，并将其重新编码为运动学特征；CSI 流与姿态流以残差相加融合；融合状态被提升到高维 Koopman 潜空间，其中（非线性的）运动动力学近似为线性；一个学习得到的算子通过一次矩阵–向量乘法即可把潜状态推进到任意时程。两个细节使其可训练：算子参数化为 K_eff = I + B + γ·U(c)·V(c)ᵀ——恒等映射作为残差内置，再叠加低秩、以 CSI 为条件的修正——消除了初始化时阻碍学习的"恒等吸引子"；Koopman 锚定潜空间（KAL）损失在时间编码器特征空间中联合监督提升映射与算子，无需对比或谱正则即可涵盖重构、线性与稳定性目标。姿态以相对最后观测姿态的增量解码，避免均值坍缩；模型同时在六个时程上训练，迫使单一算子满足全部时程。

在 WiPose（二维姿态）上，KOALA 报告 100 ms 时 MPJPE 26.14 mm、1000 ms 时 27.28 mm——全程仅退化 1.14 mm，较最强基线（VMRNN，1000 ms 时 31.22 mm）好约 19%。在 MM-Fi（三维，40 名受试者、27 种动作、4 个环境）协议 1 下，100 ms 时 52.1 mm、2000 ms 时 61.9 mm，而次优基线 SwinLSTM 为 332.6 mm（差距 6.4 倍）；PCK@20 在 100 ms 为 91.8%、1000 ms 仍高于 85.9%；同时报告了跨受试者与跨环境协议。初始提升后每个时程的推理开销仅为一次矩阵–向量乘法。作者列出的局限：仅单人、确定性输出（不建模运动分布）、动作骤变可能违反时不变动力学假设、跨场地零样本迁移未验证。

## Key technical points (EN)
- Task: multi-horizon (100–2000 ms) 3D/2D pose forecasting from Wi-Fi CSI + estimated poses, without autoregressive iteration.
- Architecture: Mamba CSI encoder → two-stage pose estimator (skeleton-biased attention) → residual dual-stream fusion → Koopman lifting → single linear operator → anchor-based delta decoding.
- Operator parametrisation K_eff = I + B + γ·U(c)·V(c)ᵀ (identity residual + low-rank CSI-conditioned term) resolves the identity-attractor training failure.
- Koopman Anchored Latent loss: reconstruction term + Σ_h w_h ||f_KAL − f*||² in temporal-encoder feature space; no contrastive/spectral penalties.
- Trained jointly on horizons H = {1,3,5,10,15,20} frames; per-horizon inference is one matrix–vector product.
- WiPose: 26.14 mm @100 ms → 27.28 mm @1000 ms MPJPE (~19% better than VMRNN 31.22 mm).
- MM-Fi protocol 1: 52.1 mm @100 ms, 61.9 mm @2000 ms vs SwinLSTM 332.6 mm; PCK@20 91.8% @100 ms, >85.9% @1000 ms; cross-subject / cross-environment protocols reported.
- Training: single RTX 5090, batch 8, AdamW with gradient clipping; limitations: single person, deterministic, no cross-site zero-shot validation.

## Key technical points (ZH)
- 任务：基于 Wi-Fi CSI + 估计姿态的多时程（100–2000 ms）三维/二维姿态预测，无需自回归迭代。
- 架构：Mamba CSI 编码器 → 两阶段姿态估计（骨架偏置注意力）→ 残差双流融合 → Koopman 提升 → 单一线性算子 → 基于锚点的增量解码。
- 算子参数化 K_eff = I + B + γ·U(c)·V(c)ᵀ（恒等残差 + 低秩 CSI 条件项），解决恒等吸引子导致的训练失败。
- Koopman 锚定潜空间损失：重构项 + Σ_h w_h ||f_KAL − f*||²，在时间编码器特征空间计算；无对比/谱正则。
- 在 H = {1,3,5,10,15,20} 帧六个时程上联合训练；每时程推理仅一次矩阵–向量乘法。
- WiPose：MPJPE 100 ms 26.14 mm → 1000 ms 27.28 mm（较 VMRNN 31.22 mm 好约 19%）。
- MM-Fi 协议 1：100 ms 52.1 mm、2000 ms 61.9 mm，对比 SwinLSTM 332.6 mm；PCK@20 100 ms 91.8%、1000 ms >85.9%；报告跨受试者/跨环境协议。
- 训练：单张 RTX 5090、batch 8、AdamW + 梯度裁剪；局限：单人、确定性、无跨场地零样本验证。

## Why it matters / what's new (EN)
The sensing-csi bin so far tracks CSI sensing as classification or estimation of the present — activity/identity models and their robustness (2026-08-17_arxiv-csi-sensing-adversarial-robustness), collaborative edge sensing (2026-06-01_arxiv-crews-collaborative-edge-wifi-sensing), CSI missingness across stations (2026-05-25_arxiv-multi-station-csi-missingness). KOALA is the first entry framing Wi-Fi sensing as *anticipation*: forecasting where the body will be up to two seconds out, which is what fall-prevention, human–robot collaboration and XR interaction actually need. The mechanism is also new to the KB — a Koopman-operator latent that turns multi-horizon prediction into linear algebra, with a residual/low-rank operator parametrisation and an anchored latent loss that make it trainable — and the reported horizon stability (about 1 mm drift over 1 s on WiPose) is the number to watch in follow-ups. The single-person and deterministic assumptions leave room for the multi-occupant, probabilistic extensions the sensing bin will need before this is deployable in an 802.11bf-style multi-STA setting.

## Why it matters / what's new (ZH)
sensing-csi 分区此前追踪的 CSI 感知都是对"当下"的分类或估计——行为/身份模型及其鲁棒性（2026-08-17_arxiv-csi-sensing-adversarial-robustness）、协作边缘感知（2026-06-01_arxiv-crews-collaborative-edge-wifi-sensing）、多站点 CSI 缺失（2026-05-25_arxiv-multi-station-csi-missingness）。KOALA 是首个把 Wi-Fi 感知定位为"预判"的条目：预测身体在未来最多两秒的位置，这正是防跌倒、人机协作与 XR 交互真正需要的能力。其机制对 KB 也是新的——用 Koopman 算子潜空间把多时程预测化为线性代数，并以残差/低秩算子参数化与锚定潜空间损失使之可训练——报告的时程稳定性（WiPose 上 1 s 内仅漂移约 1 mm）是后续工作值得盯住的数字。单人与确定性假设为多人、概率化扩展留出了空间，而这是感知分区在类 802.11bf 多 STA 场景部署前所必需的。

## Images
![KOALA concept: CSI and observed poses lifted into a Koopman latent where one operator rolls out all horizons | KOALA 概念：CSI 与观测姿态提升到 Koopman 潜空间，单一算子推演所有时程](https://arxiv.org/html/2608.15815v1/Frame2.png)
![KOALA framework: Mamba CSI encoder, pose module, fusion, Koopman lifting and residual operator | KOALA 框架：Mamba CSI 编码器、姿态模块、融合、Koopman 提升与残差算子](https://arxiv.org/html/2608.15815v1/Frame3.png)
![Qualitative predicted vs ground-truth poses across time steps | 不同时间步的预测姿态与真值对比](https://arxiv.org/html/2608.15815v1/ppose.png)
