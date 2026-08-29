---
id: 2026-08-29_arxiv-open-source-satellite-software-landscape
date_published: 2026-08-26
date_found: 2026-08-29
type: academic-paper
technology: satellite
title_en: "Characterizing the landscape of open-source satellite software (ASE 2026, BUPT + UCL) — 22,286 GitHub projects, a 43-category goal taxonomy and 66 languages show the ecosystem is 72.7% tooling and only ~2% communication/network systems"
title_zh: "开源卫星软件生态全景刻画（ASE 2026，北邮 + UCL）——22,286 个 GitHub 项目、43 类目标分类体系与 66 种编程语言显示：生态中 72.7% 是工具类，通信/网络系统仅约 2%"
url: "https://arxiv.org/abs/2608.26211"
source_quality: full
topics: [open-source, satellite-software, ground-segment, software-engineering, taxonomy, GNU-Radio, CubeSat, telemetry, Doppler-compensation, empirical-study]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 2
---

## Summary (EN)
Wen, Liang, Sun, Sarro, Zhou, Liu and Wang (BUPT with UCL; arxiv cs.SE, 26 Aug 2026; accepted to ASE 2026) run the first large-scale empirical characterization of **open-source satellite software**. They mine 22,286 GitHub repositories via keyword search, filtered to accessible projects with English README documentation, then manually classify a statistically representative sample of 646 projects (99% confidence, +/-5% margin) by open coding, reaching a 0.857 Cohen's Kappa between raters. Three questions drive the study: how the ecosystem's popularity has evolved, what the software is actually *for*, and how it is built.

Growth is steep: newly created satellite projects rise from 1 in 2008 to 4,997 in 2025 (a 42.24% year-over-year increase), with 9,018 active developers in 2025, 37,246 cumulative contributors and 136,248 commits in 2025 alone. The goal taxonomy has **43 categories across six domains**, and its shape is the paper's most quotable result: **Tools account for 72.74%** of projects — dominated by data utilities at 53.71% (largely imagery and non-imagery processing), then visualization 8.23%, spatial analysis 4.35%, orbit computation 3.55% and communication management 2.90% — followed by System Implementation 14.03%, Simulation 7.42%, Datasets 3.39%, Testing 1.94% and Conceptual Design 0.48%.

For a communications reader the interesting slice is small and specific. Inside System Implementation, **Communication and Network Systems make up just 1.94%** of the sample, splitting into signal processing 1.13% (radio reception, decoding, physical-/link-layer data extraction, antenna control fusing sensor data with TLE orbital elements), communication transmission 0.65% (inter-device communication, time synchronization, Doppler compensation, beam-allocation optimization) and network routing 0.16% (congestion monitoring, traffic classification, differentiated rerouting). **Satellite-ground systems** add 4.19%, of which satellite-generated data management is 3.23% and roughly 70% of that is visualization — telemetry, positioning and remote-sensing imagery displays. Implementation practice matches the mission profile: 66 languages overall with Python 32.91% and Jupyter 28.06% leading, but System Implementation shifts toward Python 29.22% / C++ 14.95% / C 9.38%, and simulation toward Python 42.07% / MATLAB 21.81%. Hardware-facing projects lean on Arduino/STM32 microcontrollers, Raspberry Pi, PCB designs, GNU Radio pipelines and CubeSat-level integration, while mission logic mixes classical methods (SGP4 propagation, PD attitude controllers) with reinforcement learning. The authors flag three gaps: thermal-environment simulation is almost absent (0.32% vs 3.06% for orbit simulation), in-orbit data-processing tools lag improving onboard compute, and there is no end-to-end open satellite platform.

## Summary (ZH)
Wen、Liang、Sun、Sarro、Zhou、Liu 与 Wang（北京邮电大学与伦敦大学学院；arxiv cs.SE，2026 年 8 月 26 日；已被 ASE 2026 录用）完成了首个大规模**开源卫星软件**实证刻画。作者通过关键词检索挖掘 22,286 个 GitHub 仓库，筛选出可访问且具备英文 README 的项目，再以开放编码方式人工分类一个具统计代表性的 646 项目样本（99% 置信度、±5% 误差），标注者间 Cohen's Kappa 达 0.857。研究围绕三个问题：该生态的关注度如何演进、这些软件究竟*为何而写*、以及它们如何被构建。

增长极为陡峭：新建卫星项目从 2008 年的 1 个升至 2025 年的 4,997 个（同比增长 42.24%），2025 年活跃开发者 9,018 人，累计贡献者 37,246 人，仅 2025 年就有 136,248 次提交。目标分类体系包含**六大领域下的 43 个类别**，其构成是全文最值得引用的结果：**工具类占 72.74%**——其中数据实用工具 53.71%（以影像与非影像数据处理为主）、可视化 8.23%、空间分析 4.35%、轨道计算 3.55%、通信管理 2.90%；其后依次为系统实现 14.03%、仿真 7.42%、数据集 3.39%、测试 1.94%、概念设计 0.48%。

对通信读者而言，值得关注的切片既小又具体。在系统实现之内，**通信与网络系统仅占样本的 1.94%**，可细分为信号处理 1.13%（无线电接收、解码、物理层/链路层数据提取，以及融合传感数据与 TLE 轨道根数的天线控制）、通信传输 0.65%（设备间通信、时间同步、多普勒补偿、波束分配优化）与网络路由 0.16%（拥塞监测、流量分类、差异化重路由）。**星地系统**另占 4.19%，其中卫星数据管理 3.23%，而该部分约 70% 又是可视化——遥测、卫星定位与遥感影像展示。实现实践与任务画像相匹配：整体使用 66 种语言，Python 32.91%、Jupyter 28.06% 居前；但系统实现类转向 Python 29.22% / C++ 14.95% / C 9.38%，仿真类转向 Python 42.07% / MATLAB 21.81%。面向硬件的项目大量依赖 Arduino/STM32 微控制器、树莓派、PCB 设计、GNU Radio 处理链与立方星级集成；任务逻辑则把经典方法（SGP4 轨道递推、PD 姿态控制）与强化学习混用。作者指出三处缺口：热环境仿真几近缺席（0.32%，而轨道仿真为 3.06%）、在轨数据处理工具落后于不断增强的星上算力、以及缺少端到端的开源卫星平台。

## Key technical points (EN)
- **Method:** 22,286 GitHub satellite-software repositories mined by keyword search and filtered for accessibility + English README; 646-project representative sample (99% confidence, +/-5%) manually open-coded; inter-rater Cohen's Kappa 0.857.
- **Growth:** new projects 1 (2008) -> 4,997 (2025), +42.24% YoY; 9,018 active developers in 2025; 37,246 cumulative contributors; 136,248 commits in 2025.
- **Taxonomy shape:** Tools 72.74% (data utility 53.71%, visualization 8.23%, spatial analysis 4.35%, orbit computation 3.55%, communication management 2.90%); System Implementation 14.03%; Simulation 7.42%; Datasets 3.39%; Testing 1.94%; Conceptual Design 0.48%.
- **Communication/network systems = 1.94%:** signal processing 1.13% (RF reception, decoding, PHY/link extraction, TLE-driven antenna control), communication transmission 0.65% (inter-device comms, time sync, Doppler compensation, beam allocation), network routing 0.16% (congestion monitoring, traffic classification, differentiated rerouting).
- **Satellite-ground systems = 4.19%:** mission management 0.97%, satellite-data management 3.23% (~70% of it visualization: telemetry, positioning, remote-sensing imagery).
- **Datasets domain 3.39%** includes communication/network data at 0.81%, observation data 1.61%, mission data 0.65%, positioning/GNSS 0.32%.
- **Languages:** 66 total; overall Python 32.91% / Jupyter 28.06% / JavaScript 7.40% / C++ 4.40% / MATLAB 4.06%; System Implementation Python 29.22% / C++ 14.95% / C 9.38%; Simulation Python 42.07% / MATLAB 21.81%; Testing Python 38.60% / Jupyter 25.61%.
- **Practice:** hardware-facing work uses Arduino/STM32, Raspberry Pi, PCBs, GNU Radio pipelines and CubeSat integration; mission logic mixes SGP4 and PD control with reinforcement learning.
- **Gaps named by the authors:** thermal-environment simulation 0.32% vs orbit simulation 3.06%; few in-orbit data-processing tools despite growing onboard compute; no end-to-end open satellite platform; recommendations include community dataset curation, configurable mission-ground coordination architectures, software-aware thermal simulation.

## Key technical points (ZH)
- **方法：** 以关键词检索挖掘 22,286 个 GitHub 卫星软件仓库，按可访问性与英文 README 过滤；对 646 个项目的代表性样本（99% 置信度、±5%）做人工开放编码；标注者间 Cohen's Kappa 为 0.857。
- **增长：** 新建项目由 2008 年 1 个增至 2025 年 4,997 个，同比 +42.24%；2025 年活跃开发者 9,018 人；累计贡献者 37,246 人；2025 年提交 136,248 次。
- **分类构成：** 工具 72.74%（数据实用工具 53.71%、可视化 8.23%、空间分析 4.35%、轨道计算 3.55%、通信管理 2.90%）；系统实现 14.03%；仿真 7.42%；数据集 3.39%；测试 1.94%；概念设计 0.48%。
- **通信/网络系统占 1.94%：** 信号处理 1.13%（射频接收、解码、物理层/链路层提取、由 TLE 驱动的天线控制）、通信传输 0.65%（设备间通信、时间同步、多普勒补偿、波束分配）、网络路由 0.16%（拥塞监测、流量分类、差异化重路由）。
- **星地系统占 4.19%：** 任务管理 0.97%、卫星数据管理 3.23%（其中约 70% 为可视化：遥测、定位、遥感影像）。
- **数据集领域 3.39%：** 其中通信/网络数据 0.81%、观测数据 1.61%、任务数据 0.65%、定位/GNSS 数据 0.32%。
- **编程语言：** 共 66 种；整体 Python 32.91% / Jupyter 28.06% / JavaScript 7.40% / C++ 4.40% / MATLAB 4.06%；系统实现类 Python 29.22% / C++ 14.95% / C 9.38%；仿真类 Python 42.07% / MATLAB 21.81%；测试类 Python 38.60% / Jupyter 25.61%。
- **工程实践：** 面向硬件的工作使用 Arduino/STM32、树莓派、PCB、GNU Radio 处理链与立方星集成；任务逻辑将 SGP4 与 PD 控制同强化学习混合使用。
- **作者指出的缺口：** 热环境仿真仅 0.32%，而轨道仿真为 3.06%；星上算力增强但在轨数据处理工具稀缺；缺少端到端开源卫星平台；建议包括社区化数据集策管、可配置的星地协同架构、软件感知的热仿真。

## Why it matters / what's new (EN)
The KB has been accumulating a space-software thread from three directions — architectural trust boundaries in NASA cFS / F Prime / KubOS flight software (08-17), the temporal-risk assessment methodology from SpaceSec 2026 (08-24), and the BUPT group's own in-orbit AI infrastructure measurements on BUPT-1/BUPT-2 (08-24) — but always from inside a single system. This entry supplies the population-level denominator those entries lacked: what the open satellite-software commons actually contains, at what scale, in which languages, and with what missing.

Two findings are directly load-bearing for a wireless-communications KB. First, the communications share of that commons is tiny — communication and network systems are 1.94% of projects and network routing specifically is 0.16%, against 53.71% for data utilities. The open ecosystem around satellites is overwhelmingly an Earth-observation *data-processing* commons, not a networking one; the protocol stacks, schedulers and routing engines that dominate the research literature in this KB have essentially no open-source counterpart, which is a plausible partial explanation for why so many entries here evaluate on bespoke simulators (STK visibility windows, Walker-Delta scripts, custom queueing models) rather than shared implementations. Second, the thermal-simulation gap the authors name (0.32%) is precisely the constraint the 08-24 in-orbit measurements found to be binding on onboard AI — the tooling to reason about it before launch barely exists in the open.

Novelty is scored 2: this is a well-executed but methodologically conventional mining-plus-open-coding study, its keyword-based project discovery will miss non-English and non-GitHub work (Chinese-language platforms and ESA/CNES-hosted repositories among them), and the 646-project manual sample carries the usual coding subjectivity even at Kappa 0.857. The value is as a reference denominator rather than as a mechanism — when a future entry claims some satellite-networking capability is "widely available in open source", this is the entry to check it against.

## Why it matters / what's new (ZH)
知识库此前已从三个方向积累空间软件相关线索——NASA cFS / F Prime / KubOS 飞行软件的架构信任边界分析（08-17）、SpaceSec 2026 的时序风险评估方法（08-24）、以及北邮团队在 BUPT-1/BUPT-2 上的在轨 AI 基础设施实测（08-24）——但视角始终在单一系统内部。本条目补上了这些条目缺失的总体分母：开源卫星软件公地究竟包含什么、规模多大、用什么语言写成、又缺了什么。

其中两项发现对一个无线通信知识库具有直接支撑意义。其一，该公地中通信相关的份额极小——通信与网络系统占项目的 1.94%，其中网络路由仅 0.16%，而数据实用工具高达 53.71%。围绕卫星的开源生态压倒性地是一个对地观测的*数据处理*公地，而非网络公地；本知识库研究文献中占主导地位的协议栈、调度器与路由引擎，在开源侧几乎没有对应实现——这也为"本库大量条目在自建仿真器（STK 可见性窗口、Walker-Delta 脚本、自定义排队模型）而非共享实现上做评估"提供了一个合理的部分解释。其二，作者点名的热仿真缺口（0.32%）恰恰对应 08-24 在轨实测发现的星上 AI 真实约束——而在发射前对其进行推演的开源工具链几乎不存在。

新颖度评 2：这是一项执行扎实但方法上较为常规的"仓库挖掘 + 开放编码"研究；其基于关键词的项目发现会漏掉非英语与非 GitHub 的工作（包括中文平台以及 ESA/CNES 托管的仓库），646 个项目的人工样本即便 Kappa 达 0.857 也仍带有编码主观性。其价值在于作为参考分母而非机制贡献——今后若有条目宣称某项卫星组网能力"在开源中已广泛可得"，本条目就是核对它的依据。
