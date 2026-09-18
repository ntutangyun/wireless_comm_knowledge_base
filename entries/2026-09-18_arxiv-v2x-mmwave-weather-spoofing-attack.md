---
id: 2026-09-18_arxiv-v2x-mmwave-weather-spoofing-attack
date_published: 2026-09-17
date_found: 2026-09-18
type: academic-paper
technology: cellular
title_en: "Weather Data Spoofing Attacks on Rain-Adaptive Millimeter-Wave Frequency Selection in V2X Communication Networks"
title_zh: "针对V2X通信网络中雨量自适应毫米波频率选择的天气数据欺骗攻击"
url: "https://arxiv.org/abs/2609.20601"
source_quality: full
topics: [V2X, NR-V2X, mmWave, sidelink, spoofing, physical-layer-security, 3GPP]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 4
---

## Summary (EN)

This paper (Rasheed Bello, Idreez Yusuf, Justice Adjei Owusu, Oluwatobiloba Aiyewunmi, Gurcan Comert, Judith Mwakalonge, Esmail Abuhdima, Abdulmajid Mrebit, Rajab Ataai, Vaidyan Varghese; South Carolina State University, North Carolina A&T State University, ECPI University, Benedict College, Dakota State University) studies connected vehicles that use millimeter-wave (mmWave) sidelinks and select their carrier band based on sensed rainfall, since rain attenuation grows with frequency and heavier rain favors lower bands. The authors show that this weather-awareness mechanism is itself an attack surface: an adversary who spoofs only the rainfall input fed to the band-selection controller can dictate the victim's carrier frequency — and therefore its communication range — without transmitting on the channel at all.

The attack is evaluated in MilliCar, an ns-3 module that runs the selected carrier as the real 3GPP NR V2X sidelink PHY/MAC over a spatial mmWave channel, using the 3GPP urban V2V path-loss model plus ITU-R P.838 frequency-dependent rain attenuation. The band-selection controller picks from {5, 28, 39, 60, 73} GHz, choosing the highest band whose link budget stays within a threshold and falling back to 5 GHz when mmWave bands become unusable. Two spoofing attacks are evaluated: a "force-up" attack that reports artificially low rainfall to push the victim to a higher, shorter-range band, and a "force-down" attack that reports artificially high rainfall to push the victim to the 5 GHz fallback. Forcing the band up to 73 GHz holds an eight-vehicle platoon's reliable communication range at 38 m, versus 82 m for the honest baseline at 50 mm/h rainfall. Forcing the band down to 5 GHz sustains 97% long-range (288 m) packet reception but shrinks the transport block to a third of its size and quadruples long-range latency to 12.5 ms.

The paper then proposes and evaluates a physical-consistency defense implied by the same physics that enables the attack: rain-induced loss grows linearly with distance while path loss grows logarithmically, so a receiver can test the measured SINR against the attenuation predicted by the reported weather. This detector flags a force-up attack with 98% probability within 1.5 seconds at a 1% false-alarm rate, and triggering re-selection after detection restores long-range reception from 60% to 75%. The same test is structurally blind to the force-down attack, because the 5 GHz fallback band is nearly rain-immune and therefore produces no detectable SINR-versus-weather mismatch. A robustness check using an advecting rain cell that swings the local rain rate from 15 to 81 mm/h leaves all reported results unchanged. The paper concludes that weather-aware band selection requires an authenticated meteorological input, since physical cross-checking only covers the force-up half of the threat.

## Summary (ZH)

本文（Rasheed Bello、Idreez Yusuf、Justice Adjei Owusu、Oluwatobiloba Aiyewunmi、Gurcan Comert、Judith Mwakalonge、Esmail Abuhdima、Abdulmajid Mrebit、Rajab Ataai、Vaidyan Varghese；南卡罗来纳州立大学、北卡罗来纳农业技术州立大学、ECPI大学、本尼迪克特学院、达科他州立大学）研究使用毫米波（mmWave）侧行链路的网联车辆，其载波频段依据感知到的降雨量自适应选择——因为雨衰随频率升高而增大，降雨越大越倾向选择较低频段。作者指出，这一"天气感知"机制本身就是一个攻击面：攻击者只需欺骗馈入频段选择控制器的降雨输入数据，无需在信道上发射任何信号，即可决定受害者的载波频率，进而决定其通信距离。

该攻击在 MilliCar（一个 ns-3 模块）中评估，该模块将所选载波作为真实的 3GPP NR V2X 侧行链路物理层/MAC 层运行于空间毫米波信道之上，采用 3GPP 城市 V2V 路径损耗模型叠加 ITU-R P.838 频率相关雨衰模型。频段选择控制器在 {5, 28, 39, 60, 73} GHz 中选择链路预算满足阈值要求的最高频段，当毫米波频段不可用时回退至 5 GHz。论文评估了两类欺骗攻击："上推"攻击谎报降雨量偏低以将受害者推向更高、通信距离更短的频段；"下推"攻击谎报降雨量偏高以将受害者推至 5 GHz 回退频段。在 50 mm/h 降雨条件下，将频段上推至 73 GHz 会使一个八车编队的可靠通信距离锁定在 38 米，而诚实基线下为 82 米；将频段下推至 5 GHz 可维持 97% 的远距离（288 米）包接收率，但会将传输块大小压缩至三分之一，并使远距离时延增加四倍，达到 12.5 毫秒。

论文随后提出并评估了一种基于同一物理原理的一致性防御机制：雨致损耗随距离线性增长，而路径损耗随距离对数增长，因此接收端可将实测 SINR 与所报告天气所预测的衰减进行比对。该检测器能以 98% 的概率在 1.5 秒内、1% 虚警率下识别出"上推"攻击，触发重新选频后可将远距离接收率从 60% 恢复至 75%。然而该检测方法对"下推"攻击存在结构性盲区，因为 5 GHz 回退频段几乎不受降雨影响，因而不会产生可检测的 SINR 与天气预测之间的失配。使用局地降雨率在 15 至 81 mm/h 之间波动的移动雨团进行的鲁棒性检验显示，所有已报告结果均未发生变化。论文总结认为，天气感知式频段选择需要经过认证的气象输入，因为基于物理一致性的交叉校验仅能覆盖"上推"攻击这一半的威胁。

## Key technical points (EN)

- **Attack surface**: rain-adaptive mmWave band selection for connected-vehicle sidelinks trusts an unauthenticated rainfall input; spoofing only that input (no channel transmission needed) fully controls the victim's carrier band.
- **Evaluation platform**: MilliCar (ns-3) instantiating the real 3GPP NR V2X sidelink PHY/MAC, 3GPP urban V2V path-loss model, ITU-R P.838 rain attenuation, band set {5, 28, 39, 60, 73} GHz.
- **Force-up attack**: reported low rainfall pushes the band to 73 GHz, freezing reliable range at 38 m vs. 82 m honest baseline (50 mm/h rain).
- **Force-down attack**: reported high rainfall pushes the band to 5 GHz, keeping 97% long-range (288 m) reception but cutting transport block size to a third and quadrupling long-range latency to 12.5 ms.
- **Defense**: a physical-consistency check (measured SINR vs. weather-predicted attenuation) detects force-up with 98% probability within 1.5 s at 1% false-alarm rate, restoring long-range reception from 60% to 75% after re-selection.
- **Defense blind spot**: the same check is structurally unable to detect force-down, since the 5 GHz fallback band is nearly rain-immune; an advecting rain cell (15-81 mm/h swing) does not change this result.

## Key technical points (ZH)

- **攻击面**：网联车辆侧行链路的雨量自适应毫米波频段选择依赖未经认证的降雨输入；仅欺骗该输入（无需在信道上发射信号）即可完全控制受害者的载波频段。
- **评估平台**：MilliCar（基于 ns-3），运行真实的 3GPP NR V2X 侧行链路物理层/MAC，采用 3GPP 城市 V2V 路径损耗模型与 ITU-R P.838 雨衰模型，频段集合为 {5, 28, 39, 60, 73} GHz。
- **上推攻击**：谎报低降雨量将频段推至 73 GHz，在 50 mm/h 降雨下将可靠通信距离锁定在 38 米，而诚实基线为 82 米。
- **下推攻击**：谎报高降雨量将频段推至 5 GHz，可维持 97% 的远距离（288 米）接收率，但传输块大小被压缩至三分之一，远距离时延增至 12.5 毫秒（四倍）。
- **防御机制**：基于实测 SINR 与天气预测衰减的物理一致性检测，能以 98% 概率、1% 虚警率在 1.5 秒内识别"上推"攻击，重新选频后可将远距离接收率从 60% 恢复至 75%。
- **防御盲区**：该检测方法对"下推"攻击存在结构性盲区，因为 5 GHz 回退频段几乎不受降雨影响；移动雨团（15-81 mm/h 波动）测试未改变这一结论。

## Why it matters / what's new (EN)

This is the KB's first entry specifically on weather-input spoofing against rain-adaptive mmWave band selection in cellular V2X sidelinks. It differs from generic jamming or GPS-spoofing V2X threats by targeting a control-plane input (a sensor/weather feed) rather than the RF channel itself, and it demonstrates that the same physical mechanism defenders would use to detect the attack (rain-vs-path-loss distance scaling) only closes half of the threat model.

## Why it matters / what's new (ZH)

这是知识库中首条专门针对蜂窝 V2X 侧行链路中雨量自适应毫米波频段选择的天气输入欺骗攻击的条目。与常见的干扰或 GPS 欺骗类 V2X 威胁不同，该攻击针对的是控制平面输入（传感器/天气数据源）而非射频信道本身；论文同时表明，防御方可用于检测该攻击的同一物理机制（雨衰与路径损耗随距离的不同标度关系）仅能覆盖威胁模型的一半。

## Images

![Attack flow: spoofed weather input redirects the rain-adaptive band-selection controller | 攻击流程：欺骗性天气输入误导雨量自适应频段选择控制器](https://arxiv.org/html/2609.20601v1/figures/Spoofflow.png)
![Packet reception ratio heatmap over distance and rainfall rate | 包接收率随距离与降雨率变化的热力图](https://arxiv.org/html/2609.20601v1/figures/reach_prr_distance_rain_heatmap.png)
![Reliable range and long-range packet reception ratio vs. rainfall rate | 可靠通信距离与远距离包接收率随降雨率的变化](https://arxiv.org/html/2609.20601v1/figures/reach_range_and_prr_vs_rain.png)
![Physical-consistency defense: measured SINR residual against reported-weather-predicted attenuation | 物理一致性防御：实测SINR残差与天气预测衰减的比对](https://arxiv.org/html/2609.20601v1/figures/defense_sinr_consistency.png)
