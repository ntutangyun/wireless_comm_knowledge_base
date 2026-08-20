---
id: 2026-08-20_arxiv-irisig-spoof-satellite-rff-benchmark
date_published: 2026-08-19
date_found: 2026-08-20
type: academic-paper
technology: satellite
title_en: "IriSig-Spoof: a real-world Iridium benchmark for time-robust satellite RF fingerprinting and spoofing detection — 5.17 million ring-alert messages from all 66 satellites over 32 days plus SDR-generated spoofing signals, with temporal, open-set and cross-scenario benchmark tasks"
title_zh: "IriSig-Spoof：面向时间鲁棒卫星射频指纹与欺骗检测的真实铱星基准——32 天采集全部 66 颗卫星的 517 万条环形告警消息，配以 SDR 生成的欺骗信号，并定义时间鲁棒性、开集识别与跨场景检测三项基准任务"
url: "https://arxiv.org/abs/2608.18642"
source_quality: full
topics: [Iridium, RF-fingerprinting, spoofing-detection, physical-layer-security, dataset, benchmark, SDR, USRP, open-set-recognition, LEO-security, MACNN]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Guo, Zhang, Zhao, He, Zhang and Shen (Xidian University group; arxiv cs.CR, submitted 19 Aug 2026) release **IriSig-Spoof**, the first unified real-world dataset and benchmark for satellite radio-frequency fingerprinting (RFF) and spoofing detection. The motivation: LEO satellite Internet is becoming critical infrastructure, its open downlinks are vulnerable to satellite impersonation and signal spoofing, and RFF — identifying a transmitter by hardware imperfections imprinted on its waveform — is a candidate defense, but no existing dataset supports evaluating whether RFF models stay reliable *over time*, against *unknown transmitters*, and across *changing attack scenarios*.

The dataset was collected from the rooftop of Xidian University (Xi'an, China) with an RST740 active L-band antenna (1616–1626.5 MHz) feeding a USRP B210 at 16 MS/s (8 MHz bandwidth, fixed 60 dB gain), recording ~23 h 50 min of IQ per day for 32 consecutive days (27 Jun – 28 Jul 2025, ~744 GB). It focuses on Iridium Ring Alert (IRA) messages, whose decoded satellite identifier provides ground-truth labels for all 66 operational Iridium satellites — 5.17 million messages in total, each represented as a standardized 2000-sample complex baseband window around the unique word. Spoofing signals are generated with a second USRP B210 running a custom protocol-compliant IRA generator (BCH encoding, interleaving, DQPSK) with randomized fields and a non-existent satellite ID, transmitted in outdoor (25 m / 50 m), office (LoS/NLoS/corridor) and atrium settings. Three benchmark tasks are defined: temporal robustness (train days 1–7, test days 8–32), open-set RFF identification with unknown-signal rejection, and cross-scenario spoofing detection. Baseline experiments with a multi-scale attention CNN (MACNN) show preprocessing (amplitude normalization, CFO and phase-offset correction) is what buys temporal stability (97.75 % average cross-day accuracy vs 90.81 % raw — and augmentation *hurt*, 95.12 %); open-set AUROC reaches 0.9715 but "effective unknown-signal rejection does not necessarily ensure reliable identity assignment"; and detectors trained on too few scenarios learn propagation shortcuts, inverting to AUROC < 0.5 on unseen conditions, while three-scenario training holds AUROC > 0.96 everywhere — yet TPR at 1 % false-positive rate stays only ~0.52–0.59. Dataset and code are to be released.

## Summary (ZH)
Guo、Zhang、Zhao、He、Zhang 与 Shen（西安电子科技大学团队；arxiv cs.CR，2026 年 8 月 19 日提交）发布 **IriSig-Spoof**——首个面向卫星射频指纹（RFF）与欺骗检测的统一真实数据集与基准。动机在于：低轨卫星互联网正成为关键基础设施，其开放下行链路易受卫星冒充与信号欺骗攻击；RFF 借发射机硬件缺陷在波形上留下的印记识别发射方，是候选防御手段，但现有数据集均无法评估 RFF 模型能否在*时间推移*、*未知发射机*与*攻击场景变化*下保持可靠。

数据在西安电子科技大学楼顶采集：RST740 有源 L 频段天线（1616–1626.5 MHz）接 USRP B210，16 MS/s（8 MHz 带宽、固定 60 dB 增益），连续 32 天（2025 年 6 月 27 日–7 月 28 日，约 744 GB）每天记录约 23 小时 50 分钟 IQ 数据。数据集聚焦铱星环形告警（IRA）消息——其解码出的卫星标识符为全部 66 颗在轨铱星提供真值标签——共 517 万条消息，每条表示为唯一字前后 2000 复采样的标准化基带窗口。欺骗信号由第二台 USRP B210 运行自制的协议合规 IRA 生成器（BCH 编码、交织、DQPSK）产生，字段随机化、卫星 ID 设为不存在的编号，在室外（25 m / 50 m）、办公室（视距/非视距/走廊）与中庭场景发射。基准定义三项任务：时间鲁棒性（第 1–7 天训练、第 8–32 天测试）、带未知信号拒识的开集 RFF 识别、跨场景欺骗检测。多尺度注意力 CNN（MACNN）基线实验表明：预处理（幅度归一化、CFO 与相位偏移校正）才是时间稳定性的来源（跨天平均准确率 97.75%，原始 IQ 仅 90.81%，而数据增强反而*有害*，95.12%）；开集 AUROC 达 0.9715，但"有效拒识未知信号并不必然保证可靠的身份判定"；在过少场景上训练的检测器会学到传播捷径，在未见条件下 AUROC 反转至 0.5 以下，三场景训练则处处保持 AUROC > 0.96——然而 1% 误报率下的检出率仅约 0.52–0.59。数据集与代码将开源。

## Key technical points (EN)
- **Scale:** 5.17 M Iridium Ring Alert messages, all 66 operational satellites, 32 consecutive days (27 Jun–28 Jul 2025), ~744 GB IQ; <0.1 % daily quality rejection.
- **Rig:** RST740 active antenna (L-band 1616–1626.5 MHz) + bias tee + USRP B210, 16 MS/s / 8 MHz / 60 dB fixed gain, rooftop with clear sky view; ground truth from the decoded IRA satellite identifier.
- **Sample format:** 2000-sample complex window (500 before / 1500 after unique word) → N×2×2000 real arrays per satellite per day.
- **Spoofer:** USRP B210, protocol-compliant IRA synthesis (BCH + interleave + DQPSK), randomized fields, fixed non-operational SAT=1; outdoor 25/50 m, office LoS/NLoS/corridor, atrium settings; 0.8 % records rejected.
- **Task 1 — temporal robustness:** preprocessing-only MACNN 97.75 % avg cross-day accuracy (σ 0.10 pp); raw 90.81 % (σ 0.55 pp); augmentation+domain-adversarial *lower* at 95.12 % — preprocessing suppresses date-dependent nuisances, augmentation dilutes fingerprints.
- **Task 2 — open-set RFF:** single-prototype score AUROC 0.9715, known-accepted rate 0.9453, unknown-rejection rate 0.8583, accepted-and-correct 0.9339; softmax variant ranks unknowns worse but assigns identities better — rejection and identification are distinct properties.
- **Task 3 — cross-scenario spoofing detection:** open-set detector AUROC ~0.97 across all scenarios but TPR@1 %FPR only 0.52–0.59; supervised detectors trained on 1–2 scenarios invert (AUROC < 0.5) on unseen ones; 3-scenario training keeps AUROC > 0.96.
- **Limitations:** one spoofing SDR, one receiver pipeline, one site, ~1 month — no seasonal drift or attacker-hardware generalization.

## Key technical points (ZH)
- **规模：** 517 万条铱星 IRA 消息、全部 66 颗在轨卫星、连续 32 天（2025-06-27 至 07-28）、约 744 GB IQ；每日质检剔除 <0.1%。
- **设备：** RST740 有源天线（L 频段 1616–1626.5 MHz）+ 偏置器 + USRP B210，16 MS/s / 8 MHz / 固定 60 dB 增益，楼顶开阔天空；真值来自 IRA 解码的卫星标识符。
- **样本格式：** 唯一字前 500 / 后 1500 共 2000 复采样窗口 → 每星每天 N×2×2000 实值数组。
- **欺骗端：** USRP B210 协议合规 IRA 合成（BCH+交织+DQPSK），字段随机化、卫星 ID 固定为不存在的 SAT=1；室外 25/50 m、办公室视距/非视距/走廊、中庭；剔除 0.8% 记录。
- **任务 1——时间鲁棒性：** 仅预处理的 MACNN 跨天平均准确率 97.75%（σ 0.10 个百分点）；原始 IQ 90.81%（σ 0.55）；增强+域对抗反而降至 95.12%——预处理抑制日期相关扰动，增强稀释指纹。
- **任务 2——开集 RFF：** 单原型评分 AUROC 0.9715、已知接受率 0.9453、未知拒识率 0.8583、接受且正确率 0.9339；softmax 变体拒识更差但身份判定更准——拒识与识别是两种性质。
- **任务 3——跨场景欺骗检测：** 开集检测器各场景 AUROC 约 0.97，但 1% 误报率下检出率仅 0.52–0.59；仅在 1–2 个场景训练的有监督检测器在未见场景 AUROC 反转 <0.5；三场景训练保持 >0.96。
- **局限：** 单欺骗 SDR、单接收链、单站点、约一个月——未覆盖季节漂移与攻击方硬件泛化。

## Why it matters / what's new (EN)
The KB's satellite security thread so far covers GNSS spoofing/jamming from the *victim* side (2026-07-28 VLM perception cross-check, 2026-08-12 UAV-swarm rigid spoofing + CORS integrity monitoring, 2026-08-18 Jammertest interference dataset), onboard flight-software trust boundaries (2026-08-17), unwanted emissions (2026-08-18 SNIFFLES) and user-population posture (2026-08-19 exposed Starlink hosts). IriSig-Spoof opens a distinct axis: **physical-layer authentication of the satellite downlink itself** — can a receiver verify that a frame really came from the claimed satellite? It is, to the authors' knowledge, the first satellite RFF dataset with month-scale temporal coverage, full-constellation ground truth (all 66 Iridium satellites), and matched SDR spoofing signals, and its three findings are directly actionable for anyone building satellite-signal authentication: preprocessing beats augmentation for cross-day stability; unknown-rejection and identity-assignment must be evaluated separately; and high AUROC hides weak performance at strict false-positive operating points (TPR@1 %FPR ≈ 0.52–0.59), which is what an operational spoofing alarm would actually run at. Like the Jammertest entry (2026-08-18) it is an open dataset+benchmark rather than a method paper — the satellite-security literature is visibly entering its "shared benchmark" phase. Caveats: single site/receiver/spoofer and Iridium's legacy TDMA/DQPSK downlink; whether the fingerprints and conclusions transfer to Starlink/OneWeb-class OFDM downlinks is untested.

## Why it matters / what's new (ZH)
知识库的卫星安全脉络此前覆盖*受害者侧*的 GNSS 欺骗/干扰（2026-07-28 VLM 感知交叉校验、2026-08-12 无人机集群刚性欺骗 + CORS 完好性监测、2026-08-18 Jammertest 干扰数据集）、星上飞行软件信任边界（2026-08-17）、无用发射（2026-08-18 SNIFFLES）与用户群体安全态势（2026-08-19 暴露的 Starlink 主机）。IriSig-Spoof 开辟了一条不同的轴线：**对卫星下行链路本身的物理层认证**——接收机能否验证一帧确实来自所声称的卫星？据作者所知，这是首个具备月级时间跨度、全星座真值（66 颗铱星）并配套 SDR 欺骗信号的卫星 RFF 数据集；其三项发现对构建卫星信号认证系统者可直接使用：跨天稳定性上预处理胜过数据增强；未知拒识与身份判定须分开评估；高 AUROC 会掩盖严格误报点上的弱性能（1% 误报率下检出率仅约 0.52–0.59），而这恰是实际欺骗告警的工作点。与 Jammertest 条目（2026-08-18）类似，这是开放数据集+基准而非方法论文——卫星安全研究正明显进入"共享基准"阶段。注意：单站点/单接收机/单欺骗器，且铱星为传统 TDMA/DQPSK 下行；指纹与结论能否迁移到 Starlink/OneWeb 级 OFDM 下行尚未验证。
