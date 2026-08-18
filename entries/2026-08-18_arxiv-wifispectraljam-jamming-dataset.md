---
id: 2026-08-18_arxiv-wifispectraljam-jamming-dataset
date_published: 2026-08-16
date_found: 2026-08-18
type: academic-paper
technology: wifi
title_en: "WiFiSpectralJam: A Large-Scale Open Wi-Fi Spectral Scan Dataset with Controlled RF Jamming"
title_zh: "WiFiSpectralJam：带受控射频干扰的大规模开放 Wi-Fi 频谱扫描数据集"
url: "https://arxiv.org/abs/2608.15728"
source_quality: full
topics: [WiFi-security, jamming, spectrum-monitoring, ath10k, dataset, machine-learning]
topic_primary: security-privacy
topics_secondary: [ai-for-wifi, spectrum-policy]
novelty_score: 2
---

## Summary (EN)
Herzalla, Singh, Lunardi and Andreoni (Khalifa University / Technology Innovation Institute, Abu Dhabi) release WiFiSpectralJam, a data-descriptor paper and public dataset built to make Wi-Fi jamming detection and spectrum-monitoring research reproducible on commodity hardware. The corpus is 14.52 GB across 96,090 CSV files and 522.8 million ordered spectral observations, captured with a Raspberry Pi Compute Module 4 carrying a Qualcomm Atheros QCA9880 802.11ac NIC and the Linux ath10k spectral-scan debugfs interface — i.e. exactly the kind of low-cost sensor an operator could scatter across a deployment. Each observation carries eight driver-reported fields (centre frequency 2412–5825 MHz, noise floor, max magnitude, total gain, base power, RSSI, relative power, average power); no I/Q or per-bin FFT data is included.

The collection design separates two scan modes and two label classes. Active scans return to an operating channel (5805 MHz) between off-channel visits, mirroring how a serving AP scans; passive scans sweep channels sequentially. Benign captures come from real indoor sites (2–3 locations per mode) plus a no-jammer floor inside a Candela CT840A RF-shielded chamber; malicious captures were generated inside the same chamber with a HackRF One driven by the JamRF framework at 20 cm from the receiver — Gaussian-noise and single-tone jamming at −40/−10/0/+10 dBm on the 5 GHz active target, and Gaussian-noise jamming at +3/+6/+9/+12 dBm across 2.4 GHz (2412, 2457 MHz) and 5 GHz (5180, 5745 MHz) passive targets. Roughly 19.4% of files are malicious. A file-level manifest, 63 canonical spectral-summary features (9 statistics × 7 fields), validation outputs and benchmark notebooks are shipped alongside the raw records on Kaggle, with the spectral-scan utility open-sourced on GitHub.

The benchmark results are the useful part for anyone building a detector: under matched distributions, six off-the-shelf classifiers reach F1 ≈ 0.97–1.00, but held-out conditions expose sharp distribution shift — passive 5 GHz at +3 dBm collapses to F1 0.11–0.31, active −40 dBm to 0.40–0.94, and single-tone jamming to near-zero F1 (despite ROC-AUC > 0.99, i.e. a threshold problem), while cross-scan-mode transfer lands at F1 0.35–0.56. Signal-level shifts are modest in passive mode (+3.15 dBm mean RSSI) versus active (+15 dBm), which is why the passive/low-power cells are hard. Acknowledged limits: single NIC platform, no timestamps, chamber-only jamming, no concurrent legitimate traffic during jamming, no mobile or multi-jammer scenarios.

## Summary (ZH)
Herzalla、Singh、Lunardi 与 Andreoni（阿布扎比哈利法大学 / 技术创新研究院）发布了 WiFiSpectralJam——一篇数据描述论文及配套公开数据集，目标是让 Wi-Fi 干扰检测与频谱监测研究可以在商用硬件上复现。数据集共 14.52 GB、96,090 个 CSV 文件、5.228 亿条有序频谱观测，采集设备为搭载 Qualcomm Atheros QCA9880 802.11ac 网卡的树莓派 Compute Module 4，通过 Linux ath10k 的 spectral-scan debugfs 接口读取——正是运营者可以在部署中大量铺设的低成本传感器。每条观测含 8 个驱动上报字段（中心频率 2412–5825 MHz、噪声底、最大幅度、总增益、基准功率、RSSI、相对功率、平均功率），不含 I/Q 或逐子载波 FFT 数据。

采集设计区分两种扫描模式与两类标签。主动扫描在离信道访问之间返回工作信道（5805 MHz），模拟服务 AP 的扫描行为；被动扫描则顺序遍历信道。良性数据来自真实室内场地（每种模式 2–3 个位置）以及 Candela CT840A 屏蔽暗室内的无干扰基线；恶意数据在同一暗室内由 JamRF 框架驱动的 HackRF One 于距接收机 20 cm 处生成——5 GHz 主动目标上以 −40/−10/0/+10 dBm 施加高斯噪声与单音干扰，2.4 GHz（2412、2457 MHz）与 5 GHz（5180、5745 MHz）被动目标上以 +3/+6/+9/+12 dBm 施加高斯噪声干扰。约 19.4% 的文件为恶意。原始记录之外，还随 Kaggle 发布了文件级清单、63 个规范频谱汇总特征（9 种统计量 × 7 个字段）、校验输出与基准复现 notebook，频谱扫描工具在 GitHub 开源。

对检测器开发者最有用的是基准结果：在同分布下六种现成分类器 F1 ≈ 0.97–1.00，但留出条件暴露出剧烈的分布漂移——被动 5 GHz +3 dBm 降至 F1 0.11–0.31，主动 −40 dBm 为 0.40–0.94，单音干扰接近零 F1（尽管 ROC-AUC > 0.99，属阈值问题），跨扫描模式迁移仅 F1 0.35–0.56。被动模式下信号级偏移很小（RSSI 均值 +3.15 dBm），主动模式为 +15 dBm，这正是被动/低功率单元难以检测的原因。作者承认的局限：单一网卡平台、无时间戳、干扰仅在暗室采集、干扰期间无并发合法流量、无移动或多干扰源场景。

## Key technical points (EN)
- Sensor: Raspberry Pi CM4 + QCA9880 (ath10k spectral-scan debugfs); 8 driver fields per observation, no I/Q or per-bin FFT; observation order preserved but not uniformly timestamped.
- Scale: 14.52 GB, 96,090 files, 522,771,130 observations; active 4,358 files (~30k obs/file), passive 91,732 files (3.6k–4.7k obs/file); 80.6% benign / 19.4% malicious.
- Jammer: HackRF One + JamRF, 3 dBi dual-band antenna, 20 cm LOS in a Candela CT840A chamber; active 5 GHz: Gaussian and single-tone at −40/−10/0/+10 dBm targeting 5805 MHz; passive: Gaussian at +3/+6/+9/+12 dBm on 2412/2457/5180/5745 MHz.
- Release artefacts: rf_jamming/ raw CSVs, manifest.csv (scan_mode, label, subtype, location, waveform, power, channel, band, environment), 63-feature and 54-feature (noise-excluded) derived sets, validation and benchmark notebooks; hosted on Kaggle, scan utility on GitHub.
- Matched-distribution F1: 1.000 active 5 GHz; 0.999–1.000 passive 2.4 GHz; 0.965–1.000 passive 5 GHz across LR / RF / HGB / XGBoost / LightGBM / MLP.
- Held-out shifts: passive 5 GHz +3 dBm F1 0.105–0.311; active −40 dBm 0.404–0.939; single-tone F1 ≈ 0 with ROC-AUC > 0.99; active→passive transfer 0.35–0.44, passive→active 0.00–0.56 (LightGBM 0.564).
- Signal-level shift malicious−benign: active RSSI +15.0 dBm, max magnitude +61.4; passive RSSI +3.15 dBm (band-dependent).
- Intended uses: jamming/interference detection, spectral anomaly detection, distribution-shift robustness, one-class / semi-supervised learning from benign-only baselines.

## Key technical points (ZH)
- 传感器：树莓派 CM4 + QCA9880（ath10k spectral-scan debugfs）；每条观测 8 个驱动字段，无 I/Q 或逐子载波 FFT；保留观测顺序但无均匀时间戳。
- 规模：14.52 GB、96,090 个文件、522,771,130 条观测；主动 4,358 个文件（约 3 万条/文件），被动 91,732 个文件（3.6k–4.7k 条/文件）；良性 80.6% / 恶意 19.4%。
- 干扰源：HackRF One + JamRF、3 dBi 双频天线、Candela CT840A 暗室内 20 cm 视距；5 GHz 主动：高斯与单音 −40/−10/0/+10 dBm 针对 5805 MHz；被动：高斯 +3/+6/+9/+12 dBm 针对 2412/2457/5180/5745 MHz。
- 发布物：rf_jamming/ 原始 CSV、manifest.csv（扫描模式、标签、子类、位置、波形、功率、信道、频段、环境）、63 特征与 54 特征（剔除噪声）派生集、校验与基准 notebook；托管于 Kaggle，扫描工具在 GitHub。
- 同分布 F1：主动 5 GHz 1.000；被动 2.4 GHz 0.999–1.000；被动 5 GHz 0.965–1.000（LR / RF / HGB / XGBoost / LightGBM / MLP）。
- 留出条件：被动 5 GHz +3 dBm F1 0.105–0.311；主动 −40 dBm 0.404–0.939；单音 F1 ≈ 0 但 ROC-AUC > 0.99；主动→被动迁移 0.35–0.44，被动→主动 0.00–0.56（LightGBM 0.564）。
- 信号级偏移（恶意−良性）：主动 RSSI +15.0 dBm、最大幅度 +61.4；被动 RSSI +3.15 dBm（随频段变化）。
- 预期用途：干扰检测、频谱异常检测、分布漂移鲁棒性评测、仅用良性基线的单类/半监督学习。

## Why it matters / what's new (EN)
The KB's security-privacy bin has covered jamming and overlapping-signal identification from the waveform side — WhiteNet's cross-channel identification of overlapping 802.11 signals (2026-08-12_arxiv-whitenet-overlapping-80211-signal-id) and the open-set RF fingerprinting line (2026-08-06_arxiv-horffi-open-set-rf-fingerprint) both assume I/Q access. WiFiSpectralJam is the first entry to publish a large, labelled corpus at the level a commodity AP or client NIC actually exposes (ath10k spectral-scan summaries), which is the realistic input for fleet-scale interference monitoring on existing infrastructure. Its held-out results also give a sober calibration point: near-perfect matched-distribution accuracy versus F1 collapse under lower jammer power, single-tone waveforms and scan-mode transfer, so it doubles as a distribution-shift benchmark rather than a solved-problem showcase. The known gaps (no concurrent traffic, chamber-only jamming, one NIC) mark out where a follow-on dataset would add the most value.

## Why it matters / what's new (ZH)
KB 的 security-privacy 分区此前从波形侧覆盖了干扰与重叠信号识别——WhiteNet 的跨信道重叠 802.11 信号识别（2026-08-12_arxiv-whitenet-overlapping-80211-signal-id）与开放集射频指纹（2026-08-06_arxiv-horffi-open-set-rf-fingerprint）都假设可获取 I/Q。WiFiSpectralJam 是首个在商用 AP 或客户端网卡真实暴露层级（ath10k 频谱扫描汇总）上发布大规模标注语料的条目，这才是利用现有基础设施做规模化干扰监测的现实输入。其留出结果也给出了清醒的校准点：同分布近乎完美，但在更低干扰功率、单音波形与扫描模式迁移下 F1 崩塌，因此它同时是一个分布漂移基准而非"问题已解决"的展示。已知缺口（无并发流量、仅暗室干扰、单一网卡）标明了后续数据集最能增值的方向。

## Images
![Collection testbed inside the RF-shielded chamber: CM4 spectral sensor and HackRF One jammer | 屏蔽暗室内的采集平台：CM4 频谱传感器与 HackRF One 干扰源](https://arxiv.org/html/2608.15728v1/figs/IMG_15742.jpg)
![Active-scan RSSI heatmap by centre frequency, benign vs jammed | 主动扫描各中心频率 RSSI 热力图（良性 vs 受干扰）](https://arxiv.org/html/2608.15728v1/fig_active_frequency_heatmap_rssi.png)
![Passive 2.4 GHz RSSI heatmap by centre frequency | 被动 2.4 GHz 各中心频率 RSSI 热力图](https://arxiv.org/html/2608.15728v1/fig_passive_2p4ghz_frequency_heatmap_rssi.png)
