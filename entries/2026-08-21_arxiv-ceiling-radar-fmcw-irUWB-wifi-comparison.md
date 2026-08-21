---
id: 2026-08-21_arxiv-ceiling-radar-fmcw-irUWB-wifi-comparison
date_published: 2026-08-20
date_found: 2026-08-21
type: academic-paper
technology: uwb
title_en: "A Comparison Between Ceiling-Mounted FMCW, IR-UWB and Wi-Fi Radar for In-Bedroom Human Activity Monitoring and Sleep Interruption Detection"
title_zh: "吸顶式 FMCW、IR-UWB 与 Wi-Fi 雷达在卧室人体活动监测与睡眠中断检测中的对比研究"
url: "https://arxiv.org/abs/2608.20322"
source_quality: full
topics: [UWB, IR-UWB, FMCW, WiFi-sensing, activity-recognition, sleep-monitoring, contactless-healthcare, benchmark]
topic_primary: uwb-radar
topics_secondary: [uwb-ranging]
novelty_score: 3
---

## Summary (EN)

Anton Lambrecht, Reda El Hail, Xianjun Jiao, Pieter Crombez, Dominique Schreurs, Peter Karsmakers, Adnan Shahid and Eli De Poorter (imec/Ghent University group; arXiv 2608.20322, submitted 20 Aug 2026, cs.LG; under review at IEEE Access) run the first controlled, apples-to-apples comparison of three RF sensing radio technologies — FMCW radar, impulse-radio UWB (IR-UWB), and Wi-Fi radar — for ceiling-mounted, contactless bedroom monitoring. The motivation is squarely privacy: camera-based monitoring for the elderly and in care facilities rates 3.1/5 on acceptability surveys versus 4.0/5 for RF sensing, but prior cross-technology comparisons have always confounded the sensing modality with differences in hardware, dataset, deployment geometry, or evaluation protocol. This paper removes those confounds: the same 20 participants (14 male, 6 female; ages 21–67), the same six room layouts (bed/chair repositioned, radar fixed to the ceiling) in a real residential test environment (HomeLab, Zwijnaarde), and — critically — the *identical* five-block CNN classifier architecture are used across all three technologies, which are represented by genuinely comparable hardware: a Texas Instruments IWR6843AOP (60–64 GHz FMCW, 12 virtual channels via 3 TX/4 RX), a Qorvo QM33120WDK1 DW3000 (6.49 GHz IR-UWB, 500 MHz bandwidth, single TX/RX, pseudo-monostatic with a 30 cm TX-RX offset), and a ZedBoard running the openwifi open-source SDR stack (2.4 GHz, 20 MHz / 53-subcarrier CSI, single TX/RX).

Two tasks are evaluated: fine-grained 10-class activity recognition (walk, sit/stand, get in/out of bed, wave, clap, anxious pacing, etc.) and a coarse 4-class sleep-disruption severity task, each under three generalization protocols of increasing strictness — leave-one-person-out (LOPO, same room), leave-one-scenario-out (LOSO, partial layout shift), and leave-one-bed-position-out (LOBPO, the hardest layout shift). The headline finding is a genuine trade-off, not a single winner: IR-UWB gets the best same-environment fine-grained accuracy (89.0% macro F1 LOPO, driven by its fine Doppler resolution of 0.009 m/s and retained range-Doppler spatial structure) but degrades the most when the room layout changes (−10.5 points under LOBPO, to 78.5%), because its representation implicitly encodes the training geometry. FMCW is the most layout-robust (83.8% LOBPO, essentially flat vs. its own LOPO score) because collapsing to a Time-Doppler representation after range-max selection discards the position cues that make IR-UWB layout-sensitive, at a small cost in raw discriminability. Wi-Fi radar is weakest throughout (65–79% depending on protocol) because its 7.5 m range resolution is coarser than the room itself, giving the network nothing but layout-conflated multipath to learn from — and current commodity Wi-Fi chipsets cannot do monostatic sensing at all, so the comparison itself required specialized SDR hardware. All three technologies exceed 92% macro F1 on the coarser 4-class sleep-disruption task under every protocol, meaning the technology choice matters far less once the granularity requirement is relaxed. The paper also tabulates deployment-relevant trade-offs the KB hasn't seen quantified together before: per-unit cost at 1k volumes (IR-UWB ≈€14, FMCW ≈€20, Wi-Fi monostatic SDR ≈€320 — no COTS Wi-Fi chipset today supports simultaneous same-node TX/RX CSI), power draw (IR-UWB ≈0.2 W lowest, FMCW 1.2–1.75 W, Wi-Fi SDR 3.5–4.0 W highest), native ranging capability (FMCW gives full 3D localization; IR-UWB gives coarser ranging; Wi-Fi gives none at room scale), and native communication integration (IR-UWB and Wi-Fi are IEEE-compliant radios that can carry data alongside sensing; FMCW needs a separate comms link). The dataset is released openly (imec IDLab GitLab).

## Summary (ZH)

Anton Lambrecht、Reda El Hail、Xianjun Jiao、Pieter Crombez、Dominique Schreurs、Peter Karsmakers、Adnan Shahid、Eli De Poorter（imec/根特大学团队；arXiv 2608.20322，2026 年 8 月 20 日提交，cs.LG；投稿 IEEE Access 审稿中）首次在完全受控条件下，对三种射频感知技术——FMCW 雷达、脉冲无线电 UWB（IR-UWB）与 Wi-Fi 雷达——做了严格意义上的"同条件"对比，场景是吸顶式、非接触卧室监测。动机直指隐私：针对老年人及护理机构的监测方案中，摄像头式方案的可接受度评分为 3.1/5，而射频感知为 4.0/5；但既往跨技术对比几乎总是把"感知体制本身"与硬件差异、数据集差异、部署几何差异或评测协议差异混在一起，无法得出干净结论。本文消除了这些混淆变量：同一批 20 名受试者（男 14、女 6，21-67 岁）、同样六种房间布局（床/椅重新摆放，雷达固定于天花板）、在真实居住测试环境（imec HomeLab，Zwijnaarde）中，且——关键之处——三种技术全部使用*完全相同*的五模块 CNN 分类器架构；三者的硬件也具有真正的可比性：德州仪器 IWR6843AOP（60-64 GHz FMCW，3 发 4 收共 12 个虚拟通道）、Qorvo QM33120WDK1 DW3000（6.49 GHz IR-UWB，500 MHz 带宽，单发单收，30 cm 收发间距的准单站配置）、运行开源 openwifi SDR 协议栈的 ZedBoard（2.4 GHz，20 MHz 带宽 / 53 子载波 CSI，单发单收）。

论文评测两项任务：细粒度 10 类活动识别（行走、坐/站、上下床、挥手、拍手、焦虑踱步等）与粗粒度 4 类睡眠中断严重程度分类，并在三种严格程度递增的泛化协议下评估——留一人法（LOPO，同房间）、留一场景法（LOSO，部分布局变化）、留一床位法（LOBPO，最严苛的布局变化）。核心发现是一个真实的权衡关系，而非单一赢家：IR-UWB 在同环境细粒度任务上表现最好（LOPO 宏 F1 达 89.0%，得益于 0.009 m/s 的精细多普勒分辨率与保留的距离-多普勒空间结构），但布局变化时下降最多（LOBPO 降 10.5 个百分点至 78.5%），因为其特征表示隐式编码了训练时的几何布局；FMCW 对布局变化最鲁棒（LOBPO 为 83.8%，相对自身 LOPO 分数几乎不变），因为在按最大距离筛选后坍缩为时间-多普勒表示，舍弃了使 IR-UWB 对布局敏感的位置线索，代价是原始判别力略有下降；Wi-Fi 雷达全程表现最弱（65%-79%，视协议而定），因为其 7.5 米的距离分辨率比房间本身还粗，网络能学到的只有与布局纠缠在一起的多径信息——而且当前商用 Wi-Fi 芯片组根本无法做单站感知，本次对比本身就需要专用 SDR 硬件才能实现。在更粗粒度的 4 类睡眠中断任务上，三种技术在所有协议下宏 F1 均超过 92%，说明一旦放宽粒度要求，技术选择的影响就大大减小。论文还首次系统列出了此前 KB 未曾一并量化的部署相关权衡：千片量产单价（IR-UWB 约 14 欧元，FMCW 约 20 欧元，Wi-Fi 单站 SDR 约 320 欧元——目前没有现成商用 Wi-Fi 芯片支持同节点同时收发 CSI）、功耗（IR-UWB 最低约 0.2 W，FMCW 1.2-1.75 W，Wi-Fi SDR 最高 3.5-4.0 W）、原生测距能力（FMCW 可实现完整三维定位；IR-UWB 测距精度较粗；Wi-Fi 在房间尺度上无测距能力）、以及原生通信集成能力（IR-UWB 与 Wi-Fi 均为符合 IEEE 标准、可在感知同时承载数据的无线电；FMCW 需要独立通信链路）。数据集已开放发布（imec IDLab GitLab）。

## Key technical points (EN)

- **Controlled cross-technology comparison** — same 20 subjects, same 6 room layouts, same 5-block CNN classifier ([8,16,32,64,64] filters, ELU, batchnorm, max-pool, 2×32-unit dense head) across FMCW, IR-UWB, and Wi-Fi radar. Removes the confounds (different hardware/dataset/geometry) that plagued prior single-technology or cross-paper comparisons.
- **Hardware**: FMCW = TI IWR6843AOP (60–64 GHz, 1180 MHz BW, 3TX/4RX→12 virtual channels, 0.126 m range res, 0.093 m/s Doppler res, 50 ms frames); IR-UWB = Qorvo QM33120WDK1/DW3000 (6.49 GHz, 500 MHz BW, 1TX/1RX pseudo-monostatic, 0.30 m range res, 0.009 m/s Doppler res, 6.67 ms frames); Wi-Fi = ZedBoard + openwifi SDR (2.4 GHz, 20 MHz BW, 53 subcarriers, 1TX/1RX, 7.5 m range res, 2 ms mean frame interval).
- **Tasks & protocols**: 10-class fine-grained activity recognition + 4-class sleep-disruption severity, each under LOPO / LOSO / LOBPO generalization tiers of increasing layout-shift severity.
- **Headline trade-off**: IR-UWB best same-room fine-grained accuracy (89.0% LOPO macro F1) but worst layout-generalization drop (−10.5 pp to 78.5% under LOBPO); FMCW most layout-robust (83.8% LOBPO, ~flat vs LOPO); Wi-Fi weakest overall (65.0–79.0%) and equally poor at generalizing (−10.2 pp under LOBPO).
- **Coarse task ceiling**: all three technologies exceed 92% macro F1 on the 4-class sleep task under every protocol — granularity, not RF technology, is the harder axis.
- **Deployment trade-offs quantified together for the first time**: 1k-unit cost (IR-UWB ≈€14 < FMCW ≈€20 ≪ Wi-Fi monostatic SDR ≈€320), power (IR-UWB ≈0.2 W < FMCW 1.2–1.75 W < Wi-Fi SDR 3.5–4.0 W), native 3D localization (FMCW yes via 12 virtual channels, IR-UWB coarse ranging, Wi-Fi none at room scale), native comms integration (IR-UWB/Wi-Fi yes — IEEE-compliant sensing+comms radios; FMCW needs a separate link).
- **Limitations**: n=20 with demographic imbalance; pseudo-monostatic IR-UWB needs phase-drift correction; voting/median filter adds 5–10 s latency; bidirectional/non-causal evaluation, no real-time claim; Wi-Fi results reflect a specialized SDR, not COTS chipsets (which can't do monostatic CSI sensing today).
- **Open dataset**: synchronized multi-technology recordings released at imec IDLab's GitLab (Activity-recognition-datasets).

## Key technical points (ZH)

- **受控跨技术对比**：FMCW、IR-UWB、Wi-Fi 雷达三者使用相同的 20 名受试者、相同的 6 种房间布局、完全相同的 5 模块 CNN 分类器（[8,16,32,64,64] 滤波器、ELU、批归一化、最大池化、两层 32 单元全连接头），消除了以往单技术或跨论文对比中硬件/数据集/几何差异带来的混淆。
- **硬件配置**：FMCW = TI IWR6843AOP（60-64 GHz，1180 MHz 带宽，3 发 4 收→12 虚拟通道，距离分辨率 0.126 m，多普勒分辨率 0.093 m/s，50 ms 帧周期）；IR-UWB = Qorvo QM33120WDK1/DW3000（6.49 GHz，500 MHz 带宽，单发单收准单站，距离分辨率 0.30 m，多普勒分辨率 0.009 m/s，6.67 ms 帧周期）；Wi-Fi = ZedBoard + openwifi 开源 SDR（2.4 GHz，20 MHz 带宽，53 子载波，单发单收，距离分辨率 7.5 m，平均帧间隔 2 ms）。
- **任务与协议**：10 类细粒度活动识别 + 4 类睡眠中断严重程度分类，均在布局变化程度递增的 LOPO / LOSO / LOBPO 三级泛化协议下评估。
- **核心权衡**：IR-UWB 同房间细粒度精度最高（LOPO 宏 F1 89.0%），但布局泛化下降最多（LOBPO 降 10.5 个百分点至 78.5%）；FMCW 布局鲁棒性最强（LOBPO 83.8%，相对 LOPO 几乎不变）；Wi-Fi 全程最弱（65.0%-79.0%），且泛化下降幅度与 IR-UWB 相当（LOBPO 降 10.2 个百分点）。
- **粗粒度任务上限**：4 类睡眠任务中三种技术在所有协议下宏 F1 均超过 92%——粒度要求而非射频技术本身才是更难的维度。
- **首次一并量化的部署权衡**：千片单价（IR-UWB≈14 欧元 < FMCW≈20 欧元 ≪ Wi-Fi 单站 SDR≈320 欧元）、功耗（IR-UWB≈0.2W < FMCW 1.2-1.75W < Wi-Fi SDR 3.5-4.0W）、原生三维定位（FMCW 可通过 12 虚拟通道实现，IR-UWB 测距较粗，Wi-Fi 在房间尺度无测距能力）、原生通信集成（IR-UWB/Wi-Fi 为符合 IEEE 标准、可感知兼通信的无线电；FMCW 需独立通信链路）。
- **局限**：n=20 且人口统计不均衡；准单站 IR-UWB 需相位漂移校正；投票/中值滤波引入 5-10 秒延迟；双向非因果评测，未做实时性声明；Wi-Fi 结果基于专用 SDR 而非商用芯片（后者目前无法做单站 CSI 感知）。
- **开放数据集**：多技术同步采集数据已在 imec IDLab 的 GitLab 上开放（Activity-recognition-datasets）。

## Why it matters / what's new (EN)

The KB's uwb-radar bin so far holds single-technology IR-UWB sensing papers (phase-based passive radar, Mamba-based orientation-from-CIR, neuromorphic ISAC). This is the first entry that puts IR-UWB head-to-head against FMCW and Wi-Fi radar under genuinely matched conditions — same people, same rooms, same classifier — rather than citing cross-paper benchmark numbers that differ in everything except the headline accuracy figure. The result reframes a question the KB's uwb-radar and (separately) the WiFi knowledge base's sensing-csi bin have each treated in isolation: which RF sensing technology to pick is not a strict accuracy ranking but an explicit discriminability-vs-robustness trade-off, with concrete cost/power/localization/comms-integration numbers attached to each choice. It also documents, in one place, why commodity Wi-Fi sensing keeps needing specialized SDR hardware for monostatic operation — a limitation the WiFi-side KB entries on Wi-Fi sensing/CSI have not quantified against alternative radio technologies. Flagged as cross-relevant: the WiFi research scout may want to be aware of this paper's Wi-Fi-radar findings (weakest of the three, SDR-hardware-gated) even though it is filed here as a UWB entry since IR-UWB is the paper's best-performing and most UWB-specific contribution.

## Why it matters / what's new (ZH)

KB 的 uwb-radar 类目此前收录的都是单一技术的 IR-UWB 感知论文（基于相位的无源雷达、基于 Mamba 的 CIR 朝向估计、神经形态 ISAC）。这是第一条把 IR-UWB 与 FMCW、Wi-Fi 雷达在真正匹配的条件下——同一批人、同一批房间、同一个分类器——正面对比的条目，而非引用来自不同论文、除了头条准确率数字外其余条件完全不可比的基准数据。该结果重新定义了一个此前 KB 的 uwb-radar 类目与（另一个）Wi-Fi 知识库的 sensing-csi 类目各自孤立处理的问题：选择哪种射频感知技术并非简单的精度排名，而是判别力与鲁棒性之间的显式权衡，并且每种选择都附带了具体的成本/功耗/定位能力/通信集成数字。论文还在同一处系统记录了商用 Wi-Fi 感知为何始终需要专用 SDR 硬件才能实现单站运行——这是 WiFi 侧知识库关于 Wi-Fi 感知/CSI 的条目此前未曾与其他射频技术对照量化过的局限。跨领域提示：尽管本条目归档于 UWB 类目（因为 IR-UWB 是论文中表现最好、也最具 UWB 特色的部分），但 WiFi 研究哨兵可能也会关注论文中关于 Wi-Fi 雷达的发现（三者中最弱，且受限于 SDR 专用硬件）。

## Images

![System overview: data acquisition, signal preprocessing (Range-Doppler / Time-Doppler representations), and CNN classification pipeline | 系统总览：数据采集、信号预处理（距离-多普勒/时间-多普勒表示）与 CNN 分类流水线](https://arxiv.org/html/2608.20322v1/images/overview_representations_new_C.png)
![The six room layouts: bed and chair repositioned around the fixed ceiling-mounted radar | 六种房间布局：床与椅子围绕固定吸顶雷达重新摆放](https://arxiv.org/html/2608.20322v1/images/layouts_August.png)
![Confusion matrices comparing fine-grained (10-class) activity classification across technologies, LOPO vs LOBPO | 三种技术在细粒度（10 类）活动分类上的混淆矩阵对比，LOPO 与 LOBPO](https://arxiv.org/html/2608.20322v1/images/comparison_confusion_matrices/comparison_overview_fine_grained_with_hand_movement_after_new_BG.png)
