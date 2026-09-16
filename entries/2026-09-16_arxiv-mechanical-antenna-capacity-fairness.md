---
id: 2026-09-16_arxiv-mechanical-antenna-capacity-fairness
date_published: 2026-09-15
date_found: 2026-09-16
technology: wifi
type: academic-paper
title_en: "A Mechanical Antenna for Improving Capacity Fairness in Dynamic Multi-Station Scenarios"
title_zh: "面向动态多站点场景容量公平性的机械天线方案"
url: "https://arxiv.org/abs/2609.16877"
source_quality: full
topics: [antenna-control, Bayesian-optimization, capacity-fairness]
topic_primary: ai-for-wifi
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

This paper (Akihito Taya, Yuuki Nishiyama, Kaoru Sezaki) addresses a gap the authors identify between two existing lines of work: fixed omnidirectional Wi-Fi antennas that cannot adapt to changing device combinations or propagation conditions, and prior movable/phased-array antenna research that targets narrow-beam operation in managed settings. The paper instead asks how to manage the *broad-beam*, unmanaged case — an access point with a small number of mechanically steerable antennas serving an indoor deployment where which stations (STAs) are active changes over time.

The system keeps one Bayesian black-box optimizer per possible combination of active STAs. When a given STA combination becomes active, only its own optimizer runs; the others stay frozen with their internal state preserved, so switching between combinations does not throw away what has already been learned about each one. Each optimizer searches a four-degree-of-freedom antenna configuration (elevation and azimuth for two independent antennas) to maximize a proportional-fairness objective, the sum of the logarithms of each active STA's time-averaged channel capacity. Because raw CSI fluctuates too much to serve as a reliable trigger, the system instead monitors the relative deviation of measured capacity from the best capacity recorded for the current STA combination; a sustained deviation above a 5% threshold for five consecutive iterations is what triggers a reset and re-optimization, which lets the system ignore short transient blockages (e.g., a person briefly walking through the link) while still reacting to real, lasting changes (sustained blockage, a device being moved). A separate background process continuously computes the moving-average capacity from incoming frames, decoupling that from the optimizer's own query cadence, since mechanical antenna repositioning takes on the order of hundreds of milliseconds (the implementation waits a 2 s stabilisation period after each move).

The testbed used two transmitters (an ASUS NUC 13 Rugged and an Intel NUC 12 Pro Kit) and one receiver, with CSI measurement frames injected every 0.1 s via the PicoScenes platform, antenna azimuth swept over 60°-180° and elevation over 0°-90°. In static two-transmitter layouts, Bayesian optimization consistently found high-performing antenna orientations within 50 iterations, while a fixed baseline orientation underperformed and random sampling of 100 configurations occasionally matched the optimized result but with high variance. In the dynamic scenarios, capacity differences of roughly 200 Mbps and 400 Mbps were observed between the worst and best antenna orientations for the two transmitters; the system correctly ignored a 50-second transient line-of-sight blockage without re-optimizing, correctly detected sustained blockage (from 520 s, reset at 530 s) and device relocation (at 790 s, reset at 800 s) within about 10 seconds of each change, with the re-optimization run itself then taking roughly two minutes to complete (e.g. reset at 530 s, optimization complete at 650 s), and switched cleanly between per-combination optimizers as STAs joined or left. The paper also reports RSSI swings of 3-6 dB across orientations but notes explicitly that maximizing raw received power is not the same objective as maximizing capacity or proportional fairness in a multi-STA MIMO setting.

## Summary (ZH)

本文（Akihito Taya、Yuuki Nishiyama、Kaoru Sezaki）指出现有两类工作之间存在的空白：一类是固定的全向 Wi-Fi 天线，无法适应设备组合或传播条件的变化；另一类是此前的可移动 / 相控阵天线研究，其目标场景是受控环境下的窄波束操作。本文转而研究"宽波束、非受控"的情形——接入点配备少量可机械转向的天线，服务于活跃站点（STA）组合会随时间变化的室内部署。

该系统为每一种可能的活跃 STA 组合各维护一个贝叶斯黑盒优化器。当某一 STA 组合变为活跃状态时，只运行该组合对应的优化器，其余优化器保持冻结并保留其内部状态，因此在不同组合之间切换不会丢弃已学到的信息。每个优化器在四自由度天线配置空间（两根独立天线各自的俯仰角与方位角）中搜索，以最大化一个比例公平目标——各活跃 STA 时间平均信道容量对数之和。由于原始 CSI 波动过大、不适合作为可靠触发信号，系统改为监测"实测容量相对于当前 STA 组合已记录最佳容量的相对偏差"；当该偏差连续五次迭代超过 5% 阈值时才触发重置与重新优化，这使系统能够忽略短暂的瞬时遮挡（例如有人短暂穿过链路），同时仍能对真实、持续的变化（持续遮挡、设备被移动）作出反应。另一个后台进程持续根据到达帧计算移动平均容量，使其与优化器自身的查询节奏解耦，因为机械天线重新定位耗时在数百毫秒量级（实现中每次移动后等待 2 秒稳定期）。

测试平台使用两台发射机（ASUS NUC 13 Rugged 和 Intel NUC 12 Pro Kit）与一台接收机，通过 PicoScenes 平台每 0.1 秒注入一次 CSI 测量帧，天线方位角在 60°-180° 范围内、俯仰角在 0°-90° 范围内扫描。在静态双发射机布局中，贝叶斯优化在 50 次迭代内稳定找到高性能天线朝向，固定基线朝向表现较差，而对 100 个配置的随机采样偶尔能匹配优化结果但方差很大。在动态场景中，两台发射机在最差与最佳天线朝向之间观察到约 200 Mbps 与 400 Mbps 的容量差异；系统正确忽略了持续 50 秒的瞬时视距遮挡而未触发重新优化，在变化发生约 10 秒内正确检测到持续性遮挡（520 秒开始，530 秒复位）与设备重新部署（790 秒移动，800 秒复位）并触发复位，而重新优化本身随后还需约两分钟才完成（例如 530 秒复位、650 秒优化完成），并在 STA 加入或离开时在各组合专属优化器之间平滑切换。论文还报告了不同朝向下 3-6 dB 的 RSSI 波动，但明确指出，在多 STA MIMO 场景中，最大化原始接收功率并不等同于最大化容量或比例公平性这一目标。

## Key technical points (EN)

- **Architecture**: one Bayesian black-box optimizer per possible active-STA combination; only the current combination's optimizer runs, others stay frozen with state preserved across switches.
- **Objective**: proportional fairness — sum of log(time-averaged capacity) over active STAs, optimized over a 4-DoF mechanical antenna configuration (2 antennas x elevation + azimuth).
- **Change detection**: relative deviation of measured capacity from the current combination's best-known capacity; a sustained >5% deviation for 5 consecutive iterations triggers reset, filtering out transient blockages while still catching lasting environment changes.
- **Asynchronous design**: a background Capacity Calculator continuously updates a moving-average capacity buffer from incoming frames; the optimizer queries this buffer only when evaluating its objective, decoupling packet-rate timescales from mechanical actuation that takes hundreds of milliseconds (plus a 2 s stabilisation wait).
- **Testbed**: ASUS NUC 13 Rugged + Intel NUC 12 Pro Kit transmitters, PicoScenes CSI injection at 0.1 s intervals, azimuth 60°-180°, elevation 0°-90°.
- **Results**: ~200/400 Mbps capacity spread across orientations per transmitter; sustained blockage/relocation detected and the optimizer reset within ~10 s (the re-optimization run itself then takes ~2 min); a 50 s transient blockage correctly ignored; RSSI varied 3-6 dB across orientations but capacity/fairness, not raw RSSI, is the paper's stated optimization target.

## Key technical points (ZH)

- **架构**：每种可能的活跃 STA 组合各配一个贝叶斯黑盒优化器；仅当前组合的优化器运行，其余在切换后保持冻结并保留状态。
- **目标函数**：比例公平——各活跃 STA 时间平均容量对数之和，在 4 自由度机械天线配置（2 根天线各自的俯仰角与方位角）上优化。
- **变化检测**：以实测容量相对于当前组合已知最佳容量的相对偏差为判据；连续 5 次迭代偏差超过 5% 才触发重置，从而过滤瞬时遮挡，同时仍能捕捉持续性环境变化。
- **异步设计**：后台"容量计算器"持续根据到达帧更新移动平均容量缓冲区；优化器仅在评估目标函数时查询该缓冲区，从而将数据包时间尺度与数百毫秒级的机械动作时间尺度（外加 2 秒稳定等待）解耦。
- **测试平台**：ASUS NUC 13 Rugged 与 Intel NUC 12 Pro Kit 作为发射机，PicoScenes 平台每 0.1 秒注入 CSI 测量帧，方位角 60°-180°，俯仰角 0°-90°。
- **结果**：各发射机在不同朝向间约有 200/400 Mbps 的容量差异；持续遮挡/设备重新部署约 10 秒内被检测并触发优化器复位（重新优化本身另需约 2 分钟）；50 秒的瞬时遮挡被正确忽略；不同朝向下 RSSI 波动 3-6 dB，但论文明确以容量/公平性而非原始 RSSI 作为优化目标。

## Why it matters / what's new (EN)

The KB's existing MAPC / Co-SR / Co-BF coverage (`mapc-cosr`) is about coordinating spatial reuse *between* multiple APs; this paper instead optimizes the physical antenna orientation of a *single* AP's own hardware to keep pace with which stations are currently active, using a per-combination optimizer bank plus a capacity-based (rather than CSI-based) change detector as its two central mechanisms. The paper also notes explicitly that, although orientation moves RSSI by 3-6 dB, "maximizing raw received power does not necessarily maximize the channel capacity or proportional fairness in a multi-STA MIMO environment" - its stated reason for not adopting a simpler RSSI-based control mechanism.

## Why it matters / what's new (ZH)

知识库现有的 MAPC / Co-SR / Co-BF 相关条目（`mapc-cosr`）关注的是多个 AP *之间*的空间复用协调；本文则是优化*单个* AP 自身硬件的物理天线朝向，以跟上当前活跃站点组合的变化，其两个核心机制是"按组合分设的优化器组"与"基于容量而非基于 CSI 的变化检测器"。论文还明确指出，尽管朝向变化会带来 3-6 dB 的 RSSI 波动，但"最大化原始接收功率并不必然最大化多 STA MIMO 环境下的信道容量或比例公平性"——这是其不采用更简单的基于 RSSI 控制机制的自陈理由。

## Images

None.
