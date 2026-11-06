---
id: 2026-11-06_hn-starlink-terminal-80k-hops-per-second-uplink-downlink-channel-pairing
date_published: 2026-11-04
date_found: 2026-11-06
type: community-signal
technology: satellite
title_en: "SDR measurement at 80,000 hops per second finds Starlink terminal pairs uplink and downlink channel numbers"
title_zh: "每秒 8 万次跳频的 SDR 测量发现 Starlink 终端的上行与下行信道编号成对选择"
url: "https://sdr-x.github.io/starlink-ul-dl-pair-80k-hop-ad9361/"
source_quality: full
topics: [Starlink, Ku-band channelization, uplink/downlink channel pairing, TDD/FDD hybrid, SDR measurement, off-axis emission, local-oscillator leakage]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

An independent measurement write-up dated 2026-11-04 (surfaced on Hacker News 2026-11-05; 26 points at capture) reports Starlink terminal uplink and downlink activity scanned at 80,000 channel hops per second. The author replaced an earlier software-controlled AD9361 frequency-hopping setup (10,000 hops per second) with hardware-controlled hopping, switching channel every 12.5 microseconds so that all eight Starlink channels are covered in 100 microseconds. Two SDRs and two satellite-TV LNBs simultaneously captured the terminal's uplink transmissions and its receiver local-oscillator leakage.

The author reports that during normal operation the terminal always selects the same channel number for uplink and downlink: in ten minutes of live observation no instance of differing numbers was seen. The write-up also reports clearly detectable terminal emissions several metres away with the LNB pointed away from the back of the phased array. This is a single-author blog measurement and has not been independently reproduced.

## Summary (ZH)

一篇日期为 2026-11-04 的独立测量文章（2026-11-05 出现在 Hacker News 上；收录时 26 分）报告了以每秒 80,000 次信道跳变扫描 Starlink 终端上行与下行活动的结果。作者用硬件控制的跳频取代了此前软件控制的 AD9361 跳频方案（每秒 10,000 次），每 12.5 微秒切换一次信道，使 8 个 Starlink 信道在 100 微秒内扫描一遍。作者使用两台 SDR 和两个卫星电视 LNB，同时捕获终端的上行发射和接收机本振泄漏。

作者报告称，正常工作时终端上行与下行始终选择相同的信道编号：十分钟的实时观察中未见编号不一致的情况。文章还报告称，即使 LNB 背向相控阵天线背面、距离数米，仍可清晰检测到终端的发射信号。这是单一作者的博客测量，尚未经独立复现。

## Key technical points (EN)

- Measurement method: AD9361 with hardware-controlled frequency hopping, 12.5 microseconds per channel (10 microseconds settling, 2.5 microseconds energy integration); 8 channels scanned in 100 microseconds. The author notes this is shorter than the 20-30 microseconds the AD9361 datasheet specifies for channel-switching settling, and that it measures in-band energy only, not signal quality (EVM, SNR).
- Channel plan as reported: downlink channels 0-7 are eight 500 MHz channels spanning 10.7-12.7 GHz; uplink channels 0-7 are eight 62.5 MHz channels spanning 14.0-14.5 GHz.
- Reported finding: uplink and downlink use the same channel number although their centre frequencies differ (frequency-division duplex between the bands, time-division switching between uplink and downlink in use). Downlink channel use is inferred from the terminal's receiver LO leakage rather than from decoding the satellite signal.
- The author reports the periodic channel switching pattern is visible in a live display and that uplink activity becomes near-continuous during a speed test.
- Reported side observation: detectable transmit and LO-leakage signals several metres away and behind the antenna, which the author attributes possibly to side lobes or spurious emission; no link-budget estimate is given.

## Key technical points (ZH)

- 测量方法：AD9361 硬件控制跳频，每信道 12.5 微秒（10 微秒建立时间，2.5 微秒能量积分）；100 微秒扫描 8 个信道。作者指出这短于 AD9361 数据手册给出的 20-30 微秒信道切换建立时间，并且仅测量带内能量，不评估信号质量（EVM、SNR）。
- 报告的信道划分：下行 0-7 号为 8 个 500 MHz 信道，覆盖 10.7-12.7 GHz；上行 0-7 号为 8 个 62.5 MHz 信道，覆盖 14.0-14.5 GHz。
- 报告的发现：虽然中心频率不同，上行与下行使用相同的信道编号（两个频段之间为频分双工，使用中的上下行之间为时分切换）。下行信道使用情况由终端接收机本振泄漏推断，而非解码卫星信号。
- 作者报告称周期性的信道切换模式可在实时显示中看到，进行测速时上行活动近乎连续。
- 报告的附带观察：在数米外、天线背后仍可检测到发射与本振泄漏信号，作者推测可能来自旁瓣或杂散发射；文章未给出链路预算估算。

## Why it matters / what's new (EN)

The knowledge base covers Starlink at system and policy level and has downlink signal-structure work (2026-10-23_arxiv-starlink-downlink-control-field-quasi-cyclic-code-recovery), but not the terminal's uplink/downlink channel selection as seen from outside. This write-up documents, by independent measurement, a concrete pairing rule between the eight uplink and eight downlink channels and a faster (80,000 hops per second) measurement technique than the author's earlier 10,000-hops-per-second work. Caveats: single author, not peer reviewed, no vendor confirmation, and the pairing is inferred from LO leakage and energy detection. The off-axis emission observation is reported without a power figure, so its significance is unquantified.

## Why it matters / what's new (ZH)

知识库已涵盖系统和政策层面的 Starlink 内容，并有下行信号结构方面的工作（2026-10-23_arxiv-starlink-downlink-control-field-quasi-cyclic-code-recovery），但尚无从外部观察到的终端上下行信道选择行为。这篇文章通过独立测量记录了 8 个上行信道与 8 个下行信道之间的具体配对规则，并给出了比作者此前每秒 10,000 次跳频更快（每秒 80,000 次）的测量技术。需注意：仅单一作者、未经同行评审、无厂商确认，配对关系由本振泄漏和能量检测推断；离轴发射观察未给出功率数值，其意义尚无法量化。

## Images

None.
