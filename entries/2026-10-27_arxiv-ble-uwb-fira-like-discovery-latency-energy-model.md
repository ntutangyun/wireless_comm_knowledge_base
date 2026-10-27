---
id: 2026-10-27_arxiv-ble-uwb-fira-like-discovery-latency-energy-model
date_published: 2026-10-24
date_found: 2026-10-27
type: academic-paper
technology: bluetooth
title_en: "Analytical Modeling of Latency and Energy Trade-offs in FiRa-Like BLE-UWB Ranging and Localization Systems"
title_zh: "类 FiRa 的 BLE-UWB 测距与定位系统时延与能耗权衡的解析建模"
url: "https://arxiv.org/abs/2610.33423"
source_quality: full
topics: [BLE, UWB, FiRa, neighbor-discovery, advertising, scanning, energy-model, TWR, TDoA]
topic_primary: bt-le
topics_secondary: [bt-location]
novelty_score: 3
---

## Summary (EN)

This arXiv preprint (Adelina Giurea, Jorg Wieme, Ben Van Herbruggen, Jeroen Hoebeke, Eli De Poorter; IDLab, Ghent University-imec; cs.NI, submitted Oct 24, 2026, noted as submitted to IEEE Transactions on Mobile Computing) builds a closed-form model of the latency and energy of a "FiRa-like" session, in which BLE discovers the peer and sets up the session before UWB ranging starts. The paper is organised as an introduction, related work (BLE neighbor discovery, UWB ranging/localization energy, hybrid out-of-band systems, standardization trends), the analytical model, a discussion of results, an extension from ranging to infrastructure localization, limitations, and a conclusion.

The model has three phases. (1) BLE discovery builds on a published three-channel timing formulation: an advertiser sends ADV_IND on channels 37/38/39 each advertising event (interval plus the mean 5 ms of the 0-10 ms random delay); the scanner cycles channels with a scan interval and window, and the effective window excludes the time needed to receive the preamble and access address. Two modes are distinguished: scannable (SCAN_REQ/SCAN_RSP carries a basic UWB configuration, no connection) and connectable (CONNECT_IND, then a BLE connection). (2) Negotiation follows an Android-style three-message flow (capability request, response, configuration; payloads of 2, 11 and 19-43 bytes) over the encrypted connection. (3) UWB startup and double-sided two-way ranging (DS-TWR) use DW3000 timing and power figures; the BLE state energies are for an nRF54L15 at 1 Mbps, 0 dBm, 3 V. The model is then extended to anchor groups with TWR, uplink TDoA (UL-TDoA) and downlink TDoA (DL-TDoA).

Three BLE configurations are evaluated (advertising interval / scan interval / scan window of 100/100/100 ms, 250/500/200 ms and 1000/5000/500 ms, i.e. roughly 100%, 40% and 10% scan duty cycle). The scanner uses about 28x, 54x and 57x the advertiser's energy per discovery; scanner discovery energy rises from about 1.6 mJ to 38.2 mJ as duty cycle drops. Mean scanner discovery latency is 153 ms, 1.19 s and 35.8 s, with 99th-percentile values of 302 ms, 4.01 s and 110 s (2x to 3.4x the mean). The BLE negotiation costs about 11.2 microjoules against about 1.6 mJ for discovery in the low-latency case. The BLE setup energy equals the cumulative UWB ranging energy after about 24, 80 and 562 DS-TWR rounds for the three configurations. For localization, discovering any one of several advertising anchors gets faster as more are visible (for the low-latency configuration from 154 ms to 77 ms with three visible anchors); tag-side UWB energy stays independent of anchor count for UL-TDoA but grows with anchors for TWR and DL-TDoA. The authors state that the model covers a single advertiser-scanner pair on an idle medium, assumes the radio can sleep between windows, and uses the mean-delay approximation of the random advertising delay; the code is to be released on acceptance.

## Summary (ZH)

这篇 arXiv 预印本（Adelina Giurea、Jorg Wieme、Ben Van Herbruggen、Jeroen Hoebeke、Eli De Poorter；根特大学-imec IDLab；cs.NI，2026 年 10 月 24 日提交，注明已投稿 IEEE Transactions on Mobile Computing）为"类 FiRa"会话建立了时延与能耗的闭式模型：先由 BLE 发现对端并建立会话，再开始 UWB 测距。论文结构为引言、相关工作（BLE 邻居发现、UWB 测距/定位能耗、混合带外系统、标准化趋势）、解析模型、结果讨论、从测距扩展到基础设施定位、局限与结论。

模型分三个阶段。（1）BLE 发现基于已发表的三信道时序公式：广播端每个广播事件在 37/38/39 信道发送 ADV_IND（广播间隔加上 0-10 ms 随机延迟的均值 5 ms）；扫描端按扫描间隔和窗口循环切换信道，有效窗口需扣除接收前导码和接入地址所需的时间。区分两种模式：可扫描模式（SCAN_REQ/SCAN_RSP 携带基本 UWB 配置，不建立连接）和可连接模式（CONNECT_IND，随后建立 BLE 连接）。（2）协商沿用 Android 风格的三消息流程（能力请求、响应、配置；负载分别为 2、11 和 19-43 字节），经加密连接传输。（3）UWB 启动与双边双向测距（DS-TWR）采用 DW3000 的时序与功耗数据；BLE 各状态能耗取自 nRF54L15（1 Mbps、0 dBm、3 V）。模型随后扩展到锚点组，涵盖 TWR、上行 TDoA（UL-TDoA）和下行 TDoA（DL-TDoA）。

评估了三种 BLE 配置（广播间隔/扫描间隔/扫描窗口为 100/100/100 ms、250/500/200 ms 和 1000/5000/500 ms，扫描占空比约 100%、40%、10%）。每次发现中，扫描端能耗约为广播端的 28 倍、54 倍和 57 倍；随着占空比降低，扫描端发现能耗从约 1.6 mJ 升至 38.2 mJ。扫描端平均发现时延分别为 153 ms、1.19 s 和 35.8 s，99 分位值为 302 ms、4.01 s 和 110 s（为均值的 2 至 3.4 倍）。低时延配置下 BLE 协商约耗 11.2 微焦，而发现约耗 1.6 mJ。对三种配置，BLE 建立开销分别在约 24、80 和 562 个 DS-TWR 轮次后被累计 UWB 测距能耗追平。定位方面，可见广播锚点越多，发现任一锚点越快（低时延配置下 3 个可见锚点将时延从 154 ms 降至 77 ms）；标签侧 UWB 能耗在 UL-TDoA 下与锚点数无关，而在 TWR 和 DL-TDoA 下随锚点数增长。作者说明模型仅覆盖空闲介质上的单个广播-扫描对，假设射频可在窗口间休眠，并对随机广播延迟采用均值近似；代码将在论文录用后发布。

## Key technical points (EN)

- **Scope**: end-to-end session model = BLE discovery + BLE negotiation (optional) + UWB startup + DS-TWR/TDoA ranging, closed-form for latency and per-role (scanner/central/controller vs advertiser/peripheral/controlee) energy.
- **Discovery modes**: scannable (config delivered in SCAN_RSP, no connection) vs connectable (CONNECT_IND, then 3-message negotiation, 2/11/19-43 B payloads, about 0.89-1.08 ms airtime).
- **Configurations (TAI/TSI/TSW)**: 100/100/100, 250/500/200, 1000/5000/500 ms; scanner-to-advertiser energy ratio 28x / 54x / 57x.
- **Latency**: mean 153 ms / 1.19 s / 35.8 s; p99 302 ms / 4.01 s / 110 s.
- **Energy**: scanner discovery about 1.6 mJ (low-latency) to 38.2 mJ (low-power); negotiation about 11.2 microjoules.
- **Amortisation**: BLE setup energy matched by UWB ranging energy after 24 / about 80 / 562 DS-TWR rounds.
- **Anchor groups**: discovery completes at the earliest of the visible anchors; 20 visible anchors cut mean discovery latency 10-13x. UL-TDoA tag latency constant at 1.2 ms; DS-TWR adds about 1.26 ms per anchor; DL-TDoA about 0.56 ms per anchor.
- **Platform figures**: nRF54L15 (BLE) and DW3000 (UWB) datasheet-derived parameters; analytical, not a hardware measurement.
- **Stated limits**: single pair on an idle medium, mean-delay approximation of the random advertising delay, no collisions or density effects, sleep between windows assumed.

## Key technical points (ZH)

- **范围**：端到端会话模型 = BLE 发现 + BLE 协商（可选）+ UWB 启动 + DS-TWR/TDoA 测距，给出时延和分角色（扫描端/central/controller 与广播端/peripheral/controlee）能耗的闭式表达。
- **发现模式**：可扫描（配置放在 SCAN_RSP，不建连）与可连接（CONNECT_IND，随后三消息协商，负载 2/11/19-43 字节，空口约 0.89-1.08 ms）。
- **配置（TAI/TSI/TSW）**：100/100/100、250/500/200、1000/5000/500 ms；扫描端与广播端能耗比为 28 倍 / 54 倍 / 57 倍。
- **时延**：均值 153 ms / 1.19 s / 35.8 s；p99 为 302 ms / 4.01 s / 110 s。
- **能耗**：扫描端发现约 1.6 mJ（低时延）至 38.2 mJ（低功耗）；协商约 11.2 微焦。
- **摊销**：UWB 测距能耗在 24 / 约 80 / 562 个 DS-TWR 轮次后追平 BLE 建立能耗。
- **锚点组**：发现在可见锚点中最早者处完成；20 个可见锚点使平均发现时延降低 10-13 倍。UL-TDoA 标签时延恒为 1.2 ms；DS-TWR 每增加一个锚点约增 1.26 ms；DL-TDoA 约增 0.56 ms。
- **平台参数**：BLE 取自 nRF54L15，UWB 取自 DW3000 的数据手册参数；为解析模型，非硬件实测。
- **作者声明的局限**：仅单个广播-扫描对且介质空闲，随机广播延迟用均值近似，未考虑碰撞与密度影响，假设窗口间可休眠。

## Why it matters / what's new (EN)

The paper combines BLE discovery, BLE negotiation and UWB ranging in one cost model of a complete BLE-assisted UWB session, the pattern it describes for Android/iOS, CCC Digital Key and Aliro. Its practical message is that scan duty cycle and discovery mode, not only the ranging scheme, set the latency and energy of short interactions, and that the mean alone does not capture discovery performance, since the 99th-percentile latency reaches 2 to 3.4 times the mean (up to 110 s at 10% duty cycle). It is an analytical model on datasheet figures and a mean-delay approximation, with code not yet released, so treat the numbers as design-space estimates rather than field measurements.

## Why it matters / what's new (ZH)

论文将 BLE 发现、BLE 协商与 UWB 测距纳入同一个完整 BLE 辅助 UWB 会话的成本模型，论文指出 Android/iOS、CCC Digital Key 和 Aliro 均采用这一模式。其实用结论是：扫描占空比和发现模式（而不只是测距方案）决定短交互的时延与能耗，且仅看均值不足以刻画发现性能：99 分位时延为均值的 2 至 3.4 倍（10% 占空比下可达 110 s）。这是基于数据手册参数和均值延迟近似的解析模型，代码尚未发布，数值应视为设计空间估计而非现场测量。
