---
id: 2026-08-19_arxiv-argus-csi-statgram-person-id
date_published: 2026-08-02
date_found: 2026-08-19
type: academic-paper
technology: wifi
title_en: "ARGUS: Attention-Guided Transformers for Scalable Person Identification Using Wi-Fi Telemetry"
title_zh: "ARGUS：基于 Wi-Fi CSI 统计图与注意力 Transformer 的大规模无设备人员识别"
url: "https://arxiv.org/abs/2608.14670"
source_quality: full
topics: [WiFi-sensing, CSI, person-identification, biometrics, Transformer, machine-learning, 802.11bf]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi, security-privacy]
novelty_score: 2
---

## Summary (EN)
Bhatia, Kocheta, Li and Obraczka (Katia Obraczka's group at UC Santa Cruz, with co-authors from a second institution) present Argus, a passive, device-free person-identification system that works from commodity Wi-Fi Channel State Information (CSI) without any wearable and without a prescribed motion such as walking. The design premise is that identity-bearing structure in CSI can be captured by *statistics* rather than by the raw time series. Argus converts a short CSI span (about 6 s, 50 packets) into a "statgram": for each channel view available on the capture device (amplitude, calibrated phase and phase-delta on a single-antenna Raspberry Pi 4B running Nexmon; 9 Tx–Rx links × amplitude/phase on the Intel 5300) it computes 20 statistics per grouped subcarrier bin — mean, std, min/max, five percentiles, low/mid/high FFT-band energy, IQR, RMS, zero-crossing rate and autocorrelation terms — giving a 3 × 20 × 64 map for the 80 MHz / 234-subcarrier setup and 18 × 20 × 30 for the Intel 5300 data. A 1.9 M-parameter decoder-only Transformer (d_model 192, 4 blocks, 6 heads) reads coarse patches of the statgram as tokens (8 patches + CLS for the single-antenna data, 15 + CLS for the multi-link data), and segment-level logit aggregation averages evidence across overlapping windows.

The main evaluation is on an in-house 154-subject dataset ("EHealth"): a 3 m × 4 m room, a 5 GHz router on channel 36 at 80 MHz, a laptop client on the opposite side and the Pi sniffer about 1 m from the participant, who performs 17 standardised 60-second positions/activities (14 of them static poses). The split is subject-stratified by physical segment (11 train / 3 val / 3 test segments per person, 462 test segments) so that neighbouring windows from one recording never straddle train and test. Argus reaches 78.88 ± 1.62 % Top-1 on a single 6-second window and 84.85 ± 1.31 % after aggregating 19 overlapping windows over a 60-second segment; Top-3 / Top-5 reach 98.61 % / 99.26 %. Against a raw-CSI Transformer baseline (THAT) at 60 s it gains 7.75 points while using 4.4× fewer FLOPs per window (33.6 vs 149 MFLOPs; median forward latency 1.21 ms per window on Apple silicon). Attention-guided compression — ranking patches by the validation-set accuracy drop when masked — keeps full accuracy with only 4 of 8 patches, and retraining on the top half of statistic rows slightly improves accuracy (79.35 %), whereas dropping subcarrier columns costs more (76.12 %). On the public WiMANS multi-user benchmark (three rooms, 2.4 and 5 GHz, 0–5 of 6 enrolled users per 3-second recording, exact-match metric) Argus averages 95.07 % across nine room/band configurations, within 1.23 points of the strongest per-configuration baseline while using 27× fewer inference FLOPs (0.061 vs 1.650 GFLOPs).

The paper is unusually candid about the limits. Open-set rejection is not solved: with 31 of 154 identities withheld, the retrained 123-class model keeps 78.69 % on enrolled users but detects unknowns with only 0.744–0.754 AUROC (max-confidence / negative-entropy scores), which the authors say is "not strong enough for a stand-alone biometric gate." Cross-room transfer on WiMANS fails zero-shot (14–28 % exact-match); mixing 1 % of target-room data into training lifts this to 31–36 % (+17 points over target-only), the advantage fades to ~10 points at 5 %, and about a quarter of the target data (~376 recordings) is needed to reach 82–93 % — "CSI identity signatures are dominated by room-specific multipath." A further diagnostic shows 61.9 % of single-window errors land on adjacent participant IDs (vs 1.31 % expected at random), pointing at collection-order or latent dataset factors rather than model capacity.

## Summary (ZH)
Bhatia、Kocheta、Li 与 Obraczka（加州大学圣克鲁兹分校 Katia Obraczka 团队及第二机构合作者）提出 Argus——一种无源、无设备的人员识别系统，仅依赖商用 Wi-Fi 信道状态信息（CSI），不需佩戴设备，也不要求步态等规定动作。设计前提是：CSI 中携带身份的结构可由"统计量"而非原始时间序列捕获。Argus 将约 6 s（50 个分组）的 CSI 片段转换为"统计图（statgram）"：对采集设备可用的每个信道视图（单天线树莓派 4B + Nexmon 上的幅度、校准相位与相位差；Intel 5300 上的 9 条收发链路 × 幅度/相位），按分组子载波计算 20 个统计量——均值、标准差、极值、五个分位数、低/中/高 FFT 频带能量、四分位距、RMS、过零率与自相关项——在 80 MHz/234 子载波配置下得到 3×20×64 的图，在 Intel 5300 数据上为 18×20×30。一个 190 万参数的仅解码器 Transformer（d_model 192、4 层、6 头）把粗粒度图块作为 token 读取（单天线数据 8 块 + CLS，多链路数据 15 块 + CLS），并在片段级对重叠窗口的 logit 做聚合。

主要评估在自建的 154 人数据集（"EHealth"）上进行：3 m×4 m 房间，5 GHz 路由器工作于信道 36、80 MHz，笔记本客户端位于对侧，树莓派嗅探器距参与者约 1 m；每人完成 17 个标准化的 60 秒姿势/活动（其中 14 个为静态姿势）。划分按受试者分层、按物理片段切分（每人 11 训练 / 3 验证 / 3 测试片段，共 462 个测试片段），确保同一录制的相邻窗口不会跨越训练与测试。Argus 单个 6 秒窗口 Top-1 达 78.88±1.62%，对 60 秒片段内 19 个重叠窗口聚合后达 84.85±1.31%；Top-3/Top-5 分别为 98.61%/99.26%。相较原始 CSI Transformer 基线（THAT）在 60 s 上高 7.75 个百分点，每窗口 FLOPs 少 4.4 倍（33.6 vs 149 MFLOPs；Apple 芯片上单窗口中位前向时延 1.21 ms）。注意力引导压缩——按遮蔽后验证集精度下降对图块排序——仅保留 8 块中的 4 块即可维持全部精度；仅用排名靠前的一半统计行重训还略有提升（79.35%），而削减子载波列代价更大（76.12%）。在公开多用户基准 WiMANS（三个房间、2.4 与 5 GHz、每 3 秒录制含 0–5 名注册用户、精确匹配指标）上，Argus 在九种房间/频段配置下平均 95.07%，与各配置最强基线平均仅差 1.23 个百分点，而推理 FLOPs 少 27 倍（0.061 vs 1.650 GFLOPs）。

论文对局限的陈述相当坦率。开集拒识尚未解决：保留 154 人中 31 人不参与训练，重训的 123 类模型对注册用户仍有 78.69%，但对未知者的检测 AUROC 仅 0.744–0.754（最大置信度/负熵评分），作者称"不足以作为独立的生物识别门禁"。WiMANS 跨房间迁移零样本失败（精确匹配 14–28%）；在训练中混入 1% 目标房间数据可提升至 31–36%（比仅用目标数据高 17 个百分点），到 5% 时优势缩至约 10 个百分点，需要约四分之一目标数据（约 376 条录制）才能达到 82–93%——"CSI 身份特征由房间特定的多径主导"。进一步诊断显示 61.9% 的单窗口错误落在相邻参与者编号上（随机预期 1.31%），指向采集顺序或数据集潜在因素而非模型容量。

## Key technical points (EN)
- Statgram: per channel view × 20 statistics × grouped subcarrier bins (3×20×64 on a Nexmon Pi 4B at 80 MHz; 18×20×30 on Intel 5300 CSI); built from ~6 s / 50-packet spans with 25-packet stride.
- Model: 1.9 M-parameter decoder-only Transformer, d_model 192, 4 blocks, 6 heads, dropout 0.15; 8+1 or 15+1 patch tokens; segment-level logit aggregation over overlapping windows.
- 154-subject closed-set: 78.88 % Top-1 per 6 s window → 84.85 % after 19-window aggregation; Top-3 98.61 %, Top-5 99.26 %; +7.75 points over raw-CSI THAT at 4.4× fewer FLOPs.
- WiMANS multi-user benchmark: 95.07 % mean exact-match across 9 room/band configs, −1.23 points vs best per-config baseline, 27× fewer FLOPs.
- Attention-guided compression: top 4 of 8 patches keep full accuracy; top-half statistic rows 79.35 %; WiMANS keeps 10 of 15 patches at −0.7 points, collapses below 5.
- Open-set: 31 withheld IDs → unknown-detection AUROC 0.744–0.754; authors judge it insufficient for a stand-alone biometric gate.
- Cross-room: zero-shot 14–28 %; 1 % target data + mixed training 31–36 %; ~25 % target data needed for 82–93 %.
- 61.9 % of single-window errors are adjacent participant IDs (random baseline 1.31 %) — a dataset-collection artefact worth noting for future CSI biometrics datasets.

## Key technical points (ZH)
- 统计图：每信道视图 × 20 个统计量 × 分组子载波（Nexmon 树莓派 4B、80 MHz 下 3×20×64；Intel 5300 CSI 下 18×20×30）；由约 6 s/50 分组片段构建，步长 25 分组。
- 模型：190 万参数仅解码器 Transformer，d_model 192、4 层、6 头、dropout 0.15；8+1 或 15+1 个图块 token；对重叠窗口做片段级 logit 聚合。
- 154 人闭集：单 6 s 窗口 Top-1 78.88% → 19 窗口聚合后 84.85%；Top-3 98.61%、Top-5 99.26%；比原始 CSI THAT 高 7.75 个百分点且 FLOPs 少 4.4 倍。
- WiMANS 多用户基准：9 种房间/频段配置平均精确匹配 95.07%，比各配置最佳基线低 1.23 个百分点，FLOPs 少 27 倍。
- 注意力引导压缩：8 块中保留 4 块即可保持精度；仅用一半统计行 79.35%；WiMANS 保留 15 块中的 10 块仅降 0.7 个百分点，少于 5 块则崩溃。
- 开集：保留 31 个身份 → 未知检测 AUROC 0.744–0.754；作者认为不足以作为独立生物识别门禁。
- 跨房间：零样本 14–28%；1% 目标数据 + 混合训练 31–36%；约需 25% 目标数据才达 82–93%。
- 61.9% 的单窗口错误落在相邻参与者编号（随机基线 1.31%）——未来 CSI 生物识别数据集采集应注意的伪影。

## Why it matters / what's new (EN)
The sensing-csi bin already holds the security-side view of CSI biometrics (2026-08-04_arxiv-sok-wifi-csi-biometrics-security), an adversarial-robustness evaluation of CSI sensing models (2026-08-17_arxiv-csi-sensing-adversarial-robustness) and several HAR / pose works (2026-08-18_arxiv-koala-koopman-csi-motion-forecast, 2026-05-16_arxiv-csi-jepa). Argus adds the largest closed-set identification study seen here — 154 subjects with a physical-segment split, roughly an order of magnitude beyond the 6-user WiMANS-style benchmarks — and a cheap statistical front-end that beats raw-CSI Transformers on both accuracy and compute. Just as useful for the community are its negative results: open-set AUROC of ~0.75 and near-zero zero-shot cross-room transfer quantify how far CSI identity sensing is from a deployable biometric, and the adjacent-ID error analysis is a caution for anyone assembling large CSI datasets. Novelty is moderate (2): the statgram/Transformer recipe is incremental, but the scale, the compute frontier and the honest limits are new data points.

## Why it matters / what's new (ZH)
sensing-csi 分区已收录 CSI 生物识别的安全视角（2026-08-04_arxiv-sok-wifi-csi-biometrics-security）、CSI 感知模型的对抗鲁棒性评估（2026-08-17_arxiv-csi-sensing-adversarial-robustness）以及若干 HAR/姿态工作（2026-08-18_arxiv-koala-koopman-csi-motion-forecast、2026-05-16_arxiv-csi-jepa）。Argus 带来了本库迄今规模最大的闭集识别研究——154 名受试者、按物理片段划分，比 6 用户的 WiMANS 类基准高出约一个数量级——以及一个廉价的统计前端，在精度与算力上同时优于原始 CSI Transformer。对社区同样有价值的是其负面结果：约 0.75 的开集 AUROC 与几乎为零的零样本跨房间迁移，量化了 CSI 身份感知距离可部署生物识别的差距；相邻编号错误分析也提醒构建大规模 CSI 数据集者注意。新颖度中等（2）：统计图/Transformer 配方属渐进式，但规模、算力前沿与坦率的局限是新的数据点。

## Images
![Argus pipeline: CSI spans → statgrams → patch tokens → decoder-only Transformer → segment-level aggregation | Argus 流程：CSI 片段 → 统计图 → 图块 token → 仅解码器 Transformer → 片段级聚合](https://arxiv.org/html/2608.14670v1/argus_pipeline.png)
![Top-k accuracy on the 154-subject set versus number of aggregated windows | 154 人数据集上 Top-k 精度随聚合窗口数的变化](https://arxiv.org/html/2608.14670v1/eh_aggregation.png)
![Open-set threshold trade-off with 31 withheld identities | 保留 31 个身份时的开集阈值权衡](https://arxiv.org/html/2608.14670v1/eh_openset.png)
![Cross-environment adaptation on WiMANS: mixed training vs target-only vs fine-tuning | WiMANS 跨环境自适应：混合训练、仅目标数据与微调对比](https://arxiv.org/html/2608.14670v1/xenv_curves.png)
