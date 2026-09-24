---
id: 2026-09-24_arxiv-gnomon-leo-link-state-forecasting
date_published: 2026-09-22
date_found: 2026-09-24
technology: satellite
type: academic-paper
title_en: "Reading the Sky to Forecast the Ground: Physics-Informed Link-State Forecasting for LEO Networks at Any Location"
title_zh: "读天测地：面向任意位置的 LEO 网络物理知情链路状态预测"
url: "https://arxiv.org/abs/2609.26696"
source_quality: full
topics: [LEO, link-forecasting, Starlink, physics-informed-ML, foundation-model, DASH-ABR]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 4
---

## Summary (EN)

Chi, An, Shangguan, and Jamieson (Princeton University, University of Georgia, University of Pittsburgh) submitted this paper on 2026-09-22. It presents Gnomon, a system that forecasts a LEO user terminal's downlink throughput, uplink throughput, and round-trip time (RTT) — as full quantile distributions, not point estimates — at any location, including sites with no measurement history at all. A physics layer reconstructs the serving satellite's geometry and the four-leg bent-pipe attenuation path from public weather products (HRRR, MRMS, SWPC), orbital ephemerides, and FCC licensing filings, modeling gaseous absorption, cloud/fog scattering, rain attenuation, frozen-hydrometeor extinction, and ionospheric scintillation via ITU-R P-series recommendations along ray-traced slant paths. These physics-derived covariates feed a learning layer that operates in three interchangeable modes without retraining: Mode 1 fine-tunes the Chronos-2 time-series foundation model on the query terminal's own recent history; Mode 2 has no on-site hardware but discovers publicly exposed Starlink dishes via port scanning, geolocates them, and probes them with bounded ICMP/packet-train measurements to build a neighbor-link context feeding the same time-series model; Mode 3 falls back to gradient-boosted regression trees over physics covariates and population density alone when no trace of any kind is available.

The authors validated the physics layer with a custom Ku-band receiver (horn antenna, LNB, USRP X310 SDR at 240 Msps) capturing the full 11.575 GHz Starlink user-downlink channel at five U.S. East Coast sites over three days, then evaluated the learning layer on a commercial Starlink terminal deployed at nine sites across five U.S. states over 16 days (8,260 measurement-minutes at 1 Hz, using iperf3 for bidirectional throughput and ping for RTT), training on three sites and testing on six entirely unseen sites with distinct serving beams. Against prior LEO forecasters (StarNet, T3P, BG-CFQS for history-based modes; Horizon for the covariate-only mode), Gnomon's Mode 1 cuts downlink-throughput MAE by 17% and RTT MAE by 11% versus StarNet while producing what the authors describe as the first LEO uplink-throughput forecaster; the zero-history Mode 3 cuts downlink error by 24.6% and RTT error by 78.8% versus Horizon. Swapping StarNet's raw weather features for Gnomon's ray-traced attenuation estimates alone reduced its downstream error from 18.4±2.5 to 15.1±0.6 Mbps, showing the physics covariates transfer to other forecasters. A downstream DASH adaptive-bitrate streaming test found Mode 1's forecasts yield higher video QoE (1.77) than StarNet (1.74) and RobustMPC (1.67) with less rebuffering.

## Summary (ZH)

Chi、An、Shangguan 与 Jamieson（普林斯顿大学、佐治亚大学、匹兹堡大学）于 2026 年 9 月 22 日提交本文，提出 Gnomon 系统，用于在任意位置——包括完全没有历史测量数据的站点——预测 LEO 用户终端的下行吞吐量、上行吞吐量与往返时延（RTT），且输出为完整的分位数分布而非单点估计。其物理层基于公开气象产品（HRRR、MRMS、SWPC）、轨道星历与 FCC 频谱许可数据，重建服务卫星的几何关系与四段式"弯管"衰减路径，并沿射线追踪的斜路径按 ITU-R P 系列建议对气体吸收、云雾散射、降雨衰减、冻结水凝物消光及电离层闪烁进行建模。这些物理协变量输入到学习层，学习层以三种无需重新训练即可互换的模式运行：模式一在查询终端自身近期历史数据上微调 Chronos-2 时间序列基础模型；模式二无需现场硬件，通过端口扫描发现公开暴露的 Starlink 天线设备，对其进行地理定位，并以受限的 ICMP/包序列探测构建邻近链路上下文，输入同一时间序列模型；模式三在完全没有任何轨迹数据时，退化为仅基于物理协变量与人口密度的梯度提升回归树。

作者用定制 Ku 波段接收机（喇叭天线、LNB、USRP X310 SDR，采样率 240 Msps）在美国东海岸五个站点历时三天完整捕获 11.575 GHz 的 Starlink 用户下行信道，验证了物理层；随后在美国五个州的九个站点部署商用 Starlink 终端，历时 16 天（以 1 Hz 采样频率累计 8260 个测量分钟，使用 iperf3 测双向吞吐量、ping 测 RTT），在三个站点上训练、在六个完全未见过且服务波束不同的站点上测试，评估了学习层。与既有 LEO 预测方法相比（历史类模式对比 StarNet、T3P、BG-CFQS，纯协变量模式对比 Horizon），Gnomon 模式一相较 StarNet 将下行吞吐量 MAE 降低 17%、RTT MAE 降低 11%，作者称其为首个 LEO 上行吞吐量预测器；零历史数据的模式三相较 Horizon 将下行误差降低 24.6%、RTT 误差降低 78.8%。仅将 StarNet 的原始气象特征替换为 Gnomon 的射线追踪衰减估计值，就能把其下游误差从 18.4±2.5 降至 15.1±0.6 Mbps，说明该物理协变量可迁移至其他预测器。下游 DASH 自适应码率流媒体测试表明，模式一的预测结果带来的视频体验质量（1.77）高于 StarNet（1.74）与 RobustMPC（1.67），且卡顿更少。

## Key technical points (EN)

- **Three interchangeable modes, no retraining**: Mode 1 (own terminal history, fine-tuned Chronos-2 foundation model, GPU), Mode 2 (neighbor-trace via port-scan-discovered public Starlink dishes + bounded ICMP/packet-train probing, same time-series model), Mode 3 (covariates-only, gradient-boosted trees, CPU) — a single system spans instrumented to zero-history deployment sites.
- **Physics layer**: reconstructs serving-satellite geometry and four-leg bent-pipe attenuation from HRRR/MRMS/SWPC weather, orbital ephemerides, and FCC licensing data; models gaseous absorption, cloud/fog scattering, rain attenuation, frozen-hydrometeor extinction, and ionospheric scintillation via ITU-R P-series along ray-traced slant paths; validated with a custom Ku-band SDR receiver capturing the real 11.575 GHz Starlink downlink channel.
- **Measurement campaign**: 9 sites across 5 U.S. states, 16 days, 8,260 measurement-minutes at 1 Hz, iperf3 (20 parallel streams) + ping; train/test split uses 6 entirely unseen sites with distinct serving beams, no session overlap.
- **Headline numbers**: Mode 1 vs. StarNet — 17% lower downlink-throughput MAE (12.68 vs. 15.2 Mbps), 11% lower RTT MAE (5.69 vs. 6.4 ms); Mode 3 (zero-history) vs. Horizon — 24.6% lower downlink error, 78.8% lower RTT error (6.48 vs. 30.7 ms); which the authors describe as the first LEO uplink forecaster (7.68 Mbps MAE).
- **Feature transferability**: substituting Gnomon's physics-derived attenuation covariates into StarNet's own pipeline (replacing raw weather features) cut StarNet's error from 18.4±2.5 to 15.1±0.6 Mbps (~18% gain), showing the physics layer is portable across forecasting architectures.
- **Downstream application**: feeding Gnomon's Mode 1 forecasts into a DASH adaptive-bitrate controller improved video QoE to 1.77 vs. 1.74 (StarNet) and 1.67 (RobustMPC baseline), with reduced rebuffering on a 60-second-buffer VOD scenario.

## Key technical points (ZH)

- **三种可互换模式，无需重新训练**：模式一（终端自身历史数据，微调 Chronos-2 基础模型，GPU 运行）、模式二（通过端口扫描发现的公开 Starlink 天线构建邻近链路轨迹 + 受限 ICMP/包序列探测，复用同一时间序列模型）、模式三（仅用协变量，梯度提升树，CPU 运行）——单一系统可覆盖从已部署测量设备到零历史数据站点的全谱系。
- **物理层**：基于 HRRR/MRMS/SWPC 气象数据、轨道星历与 FCC 频谱许可数据重建服务卫星几何关系与四段式弯管衰减路径；沿射线追踪斜路径依据 ITU-R P 系列建议对气体吸收、云雾散射、降雨衰减、冻结水凝物消光及电离层闪烁建模；并用定制 Ku 波段 SDR 接收机实测 11.575 GHz 真实 Starlink 下行信道进行验证。
- **测量活动**：美国 5 个州 9 个站点，历时 16 天，1 Hz 采样累计 8260 测量分钟，使用 iperf3（20 条并行流）与 ping；训练/测试划分使用 6 个完全未见过且服务波束不同的站点，测量会话无重叠。
- **核心数据**：模式一相较 StarNet——下行吞吐量 MAE 降低 17%（12.68 对 15.2 Mbps）、RTT MAE 降低 11%（5.69 对 6.4 毫秒）；零历史数据的模式三相较 Horizon——下行误差降低 24.6%，RTT 误差降低 78.8%（6.48 对 30.7 毫秒）；论文称其为首个已报道的 LEO 上行吞吐量预测器（MAE 7.68 Mbps）。
- **特征可迁移性**：仅将 Gnomon 的物理衍生衰减协变量替换进 StarNet 自身流水线（取代原始气象特征），即可将 StarNet 误差从 18.4±2.5 降至 15.1±0.6 Mbps（约 18% 提升），说明该物理层可迁移至其他预测架构。
- **下游应用**：将 Gnomon 模式一的预测结果输入 DASH 自适应码率控制器，视频体验质量提升至 1.77（对比 StarNet 的 1.74 与 RobustMPC 基线的 1.67），且在 60 秒缓冲区的点播场景下卡顿更少。

## Why it matters / what's new (EN)

This KB's leo-constellations coverage has so far focused mainly on constellation architecture, routing, and physical-layer link technology; Starlink throughput prediction has appeared before for adaptive-bitrate streaming (2026-05-26_arxiv-safesabr-starlink-abr-streaming, SafeSABR), but not this kind of general link-quality forecasting. Gnomon is the first entry in this bin to tackle predicting a Starlink terminal's future throughput/RTT at arbitrary, potentially uninstrumented locations, and its Mode 2 — discovering neighboring public Starlink terminals via port scanning to build measurement context without any on-site hardware — is a data-acquisition route not previously seen in this KB. The physics-layer transferability result (dropping Gnomon's attenuation covariates into a competing forecaster's pipeline to cut its error by ~18%) also suggests the ray-traced four-leg attenuation model itself, not just the full system, is a reusable building block for future LEO link-quality work.

## Why it matters / what's new (ZH)

知识库此前关于 leo-constellations 的条目主要集中在星座架构、路由与物理层链路技术；Starlink 吞吐量预测此前已出现过，用于自适应码率流媒体场景（2026-05-26_arxiv-safesabr-starlink-abr-streaming，SafeSABR），但并非这种通用的链路质量预测。Gnomon 是该主题下首个尝试在任意（可能完全没有部署测量设备的）位置预测 Starlink 终端未来吞吐量/RTT 的工作，其模式二——通过端口扫描发现公开的邻近 Starlink 终端以构建测量上下文、且无需任何现场硬件——是知识库此前记录内容中未出现过的一种数据获取路径。物理层的可迁移性结果（将 Gnomon 的衰减协变量直接接入竞品预测器的流水线，使其误差降低约 18%）也表明，射线追踪四段衰减模型本身（而不仅是完整系统）可作为未来 LEO 链路质量研究可复用的基础模块。

## Images

None.
