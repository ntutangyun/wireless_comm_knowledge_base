---
id: 2026-11-26_arxiv-wide-field-pixelated-1550nm-receiver-inter-satellite-laser-link-acquisition
date_published: 2026-11-13
date_found: 2026-11-26
type: academic-paper
technology: satellite
title_en: "HEP-like 1550 nm wide-field pixelated optical receiver for inter-satellite laser links: a simulation-based proof of concept for Earth, lunar and Earth-Moon scenarios"
title_zh: "面向星间激光链路的类高能物理 1550 nm 宽视场像素化光接收机：面向地球、月球与地月场景的基于仿真的概念验证"
url: "https://arxiv.org/abs/2611.28071"
source_quality: full
topics: [inter-satellite-links, optical-ISL, link-acquisition, InGaAs-pixel-array, angle-of-arrival, beacon-detection, radiation-lifetime]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Maurizio De Santis (Telespazio S.p.A.) presents a simulation-based proof of concept for acquiring inter-satellite laser links with a wide-field "dome" receiver at 1550 nm, paired with a narrow-field data channel that closes the link. The detector is an InGaAs hybrid pixel array of about 1 Mpixel with event-driven, time-stamped readout, inspired by pixel detectors used in high-energy physics. A pulsed beacon from the partner terminal is detected by requiring m hits in a sliding block of pixels, and the angle of arrival is estimated by clustering and centroiding.

For a Starlink-like Walker 53:1584/72/1 shell at 550 km, the paper reports beacon detection in 12 microseconds (near), 0.20 ms (median) and 2.0 ms (far) with a 5 mrad, 0.5 W beacon and a 10 mm aperture, and a search phase of 3 to 18 ms that it states is roughly 10^2 to 10^5 times shorter than published scan-based phases, with caveats. No prototype was built, and the paper states that the 1 Mpixel detector does not yet exist.

## Summary (ZH)

Maurizio De Santis（Telespazio S.p.A.）提出一项基于仿真的概念验证：使用 1550 nm 宽视场“穹顶”接收机配合窄视场数据信道来完成星间激光链路捕获。探测器为约 1 Mpixel 的 InGaAs 混合像素阵列，采用事件驱动、带时间戳的读出，设计思路借鉴高能物理中的像素探测器。对端终端发出的脉冲信标通过“滑动像素块内命中 m 次”的符合判决来检测，并通过聚类与质心法估计到达角。

对于 550 km 的类 Starlink Walker 53:1584/72/1 壳层，在 5 mrad、0.5 W 信标与 10 mm 口径条件下，论文报告信标检测时间为 12 微秒（近）、0.20 ms（中位）、2.0 ms（远），搜索阶段为 3 至 18 ms；论文称这比已发表的扫描式搜索阶段短约 10^2 至 10^5 倍，并附有保留条件。未制作原型，论文也说明该 1 Mpixel 探测器目前尚不存在。

## Key technical points (EN)

- Concept: a receiver with a field of view larger than a hemisphere acquires the partner's beacon without pointing the receiving terminal; a narrow-field channel then carries data. The partner's beacon must still be pointed accurately (about 1.25 mrad, 1 sigma per axis, for a 5 mrad beacon).
- Beacon and optics as stated: 0.5 W average power, 20 microjoule maximum pulse energy, 8 ns pulse, 5 mrad divergence in the main case; 10 mm nominal aperture; photon detection efficiency 0.30; optical efficiency 0.5; 25 micrometre pixel pitch (assumed, about 2.92 mrad per pixel); 1 microsecond dead time; dark-count rate 10^4 per second per pixel at 233 K (a design assumption); 2x2 or 3x3 pixel blocks and a 9x9 region of interest for clustering.
- Earth case: Walker 53:1584/72/1 at 550 km, ranges of 1002, 3350 and 4910 km. Whole-frame false-alarm rate below 0.01 per second. Angle-of-arrival error 0.13 to 0.23 mrad with the binary estimator under realistic systematics, 0.10 to 0.65 mrad with time-over-threshold. With a 6 mm aperture the far case reaches up to 116 ms.
- End-to-end time: 0.16 to 1.5 s depending on an assumed common time scale of 0.15 to 1.5 s.
- Radiation: AP9 fluences from SPENVIS for a one-year mission at 550 km and 53 degrees; the dark-count rate is assumed to halve every 8 K. Service life at 233 K (mean fluence) is 4.0, 8.6 and 17 years for 0.25, 1 and 4 g/cm2 of aluminium shielding; the 95th-percentile values are 1.9, 4.3 and 8.8 years.
- Lunar and Earth-Moon cases: for a Walker 65:24/4/1 lunar shell, detection takes 27 microseconds to 0.7 ms at 1000 km altitude; at 5000 km the median and far cases take 0.43 s and 7.3 s. For Earth-Moon distances (356,500 to 406,700 km) a 5 mrad beacon is infeasible with 10 or 30 mm apertures, and narrower beacons (200 to 500 microradians) become feasible with larger apertures or more power.
- Stated limitations: all values simulated with idealised optics; detection times could be up to about 2.3 times longer for a 0.45-pixel spot; at 1% crosstalk the far case rises to 0.78 s and at 10% no configuration meets the false-alarm limit; the 1 nm band-pass filter may drift with angle and temperature (open issue); lifetimes rely on a damage model calibrated on PIN photodiodes rather than SPADs and exclude solar particle events; on the Earth–Moon link, wide-field acquisition is suitable only between high orbits (NRHO, ELFO, MEO, GEO); towards LEO or a low lunar orbit, ephemerides and a narrow channel are needed, with no wide-field acquisition against the Moon or Earth disc.

## Key technical points (ZH)

- 概念：视场大于半球的接收机无需指向即可捕获对端信标，随后由窄视场信道承载数据。对端信标仍须精确指向（5 mrad 信标约需每轴 1.25 mrad、1 sigma）。
- 信标与光学参数（论文所述）：平均功率 0.5 W，最大脉冲能量 20 微焦，脉宽 8 ns，主算例发散角 5 mrad；标称口径 10 mm；光子探测效率 0.30；光学效率 0.5；像素间距 25 微米（假设值，约 2.92 mrad/像素）；死时间 1 微秒；暗计数率在 233 K 下为 10^4 次/秒/像素（设计假设）；2x2 或 3x3 像素块，聚类使用 9x9 感兴趣区域。
- 地球场景：550 km 的 Walker 53:1584/72/1，距离 1002、3350、4910 km。整帧虚警率低于 0.01 次/秒。在现实系统误差下，二值估计器的到达角误差为 0.13 至 0.23 mrad，时间超阈值法为 0.10 至 0.65 mrad。口径 6 mm 时远距离情形最长达 116 ms。
- 端到端时间：0.16 至 1.5 s，取决于假设的公共时间尺度 0.15 至 1.5 s。
- 辐射：使用 SPENVIS 的 AP9 注量，一年任务、550 km、53 度；假设暗计数率每升高 8 K 减半。233 K 下（平均注量）铝屏蔽 0.25、1、4 g/cm2 对应寿命 4.0、8.6、17 年；95 分位值为 1.9、4.3、8.8 年。
- 月球与地月场景：对 Walker 65:24/4/1 月球壳层，1000 km 高度检测时间为 27 微秒至 0.7 ms；5000 km 时中位与远距离情形分别为 0.43 s 与 7.3 s。地月距离（356,500 至 406,700 km）下，5 mrad 信标在 10 或 30 mm 口径时不可行，需要更窄信标（200 至 500 微弧度）配合更大口径或更高功率。
- 声明的局限：所有数值均为理想化光学下的仿真；0.45 像素光斑下检测时间可能延长至约 2.3 倍；串扰 1% 时远距离情形升至 0.78 s，串扰 10% 时没有配置能满足虚警限制；1 nm 带通滤光片可能随角度和温度漂移（未解决）；寿命依赖基于 PIN 光电二极管而非 SPAD 标定的损伤模型，且不含太阳粒子事件；在地月链路上，宽视场捕获仅适用于高轨之间（NRHO、ELFO、MEO、GEO）；面向 LEO 或低月球轨道时需依赖星历与窄视场信道，无法在月球或地球圆盘背景上进行宽视场捕获。

## Why it matters / what's new (EN)

The paper targets the acquisition phase of optical inter-satellite links, which scan-based approaches handle slowly, by trading a pointed receive terminal for a wide-field pixel detector. The comparison with scan-based phases is the author's own and carries stated caveats; the work is simulation only and depends on a detector the paper says does not yet exist.

## Why it matters / what's new (ZH)

该论文针对光学星间链路的捕获阶段（扫描式方案耗时较长），以宽视场像素探测器取代需要指向的接收终端。与扫描式搜索阶段的对比为作者自述并带有保留条件；工作仅为仿真，并依赖论文自述尚不存在的探测器。

## Images

None.
