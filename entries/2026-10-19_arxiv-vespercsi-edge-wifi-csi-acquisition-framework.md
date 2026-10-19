---
id: 2026-10-19_arxiv-vespercsi-edge-wifi-csi-acquisition-framework
date_published: 2026-10-15
date_found: 2026-10-19
technology: wifi
type: academic-paper
title_en: "VesperCSI: A High-Performance and Extensible CSI Acquisition Framework for Edge Wi-Fi Sensing"
title_zh: "VesperCSI：面向边缘 Wi-Fi 感知的高性能、可扩展 CSI 采集框架"
url: "https://arxiv.org/abs/2610.22581"
source_quality: full
topics: [WiFi-sensing, CSI, Intel AX210, FeitCSI, Raspberry Pi, open-source tooling]
topic_primary: sensing-csi
topics_secondary: [wifi-for-ai]
novelty_score: 3
---

## Summary (EN)

VesperCSI (Baydemir, Baghaee, Ulusoy; METU REAL Lab, Ankara; arXiv 2610.22581, submitted 15 October 2026; 25 pages, 13 figures, 9 tables; open-source implementation on GitHub) is a GPL-3.0 redesign of FeitCSI, the CSI acquisition tool for Intel AX200 and AX210 Wi-Fi interfaces. It is a C userspace program for amd64 and aarch64 Linux hosts, including Raspberry Pi-class systems with a PCIe AX200/AX210 card. CSI access comes from a CSI-enabled build of Intel's backport-iwlwifi driver tree rather than the in-kernel driver; no custom firmware is required; the distribution's Intel firmware can be retained. The authors state that the work covers the userspace acquisition engine, configuration lifecycle, storage path and experiment-control workflow above that driver boundary.

The redesign replaces per-record dynamic allocation with fixed-capacity preallocated object pools, separates a capture thread from a consumer thread, rejects malformed or irrelevant records before storage, and applies explicit, bounded overflow behaviour (when the capture pool is exhausted the default overflow policy discards the oldest queued record; base-file output uses writev and short writes are logged, not retried). A loadable plugin interface exposes a versioned SDK: plugins are Linux shared objects loaded at startup, must provide initialization, per-record callback and destruction entry points, and run their callback synchronously on the consumer thread; only one plugin can be active per process. The paper demonstrates the interface with an infrared-controlled activity-labelling workflow. A comparison table of reusable CSI platforms (Linux 802.11n CSI Tool, Atheros CSI Tool, Nexmon CSI, AX-CSI, FeitCSI, PicoScenes, IAX, ESP-CSI, ZTE CSI Tool, openwifi) is presented as a feature and deployment comparison from public documentation and repositories, not a performance ranking.

The evaluation compares VesperCSI and FeitCSI on Raspberry Pi CM4 receivers in a burst-traffic software crossover. At a 600 MHz all-core frequency ceiling and a target rate of 2,500 frames/s, VesperCSI achieves mean sequence retention of 99.017 to 99.087 percent in 10,000-frame bursts, against 43.972 to 46.553 percent for FeitCSI; the ordering persists after exchanging the userspace programs between the two receivers while keeping their respective drivers. The paper states that this compares the tested software-and-driver packages rather than isolating userspace effects. Stated limits: Intel AX200/AX210 only, a CSI-enabled backport-iwlwifi build matched to the host kernel (tested on Linux 6.8 and 6.12, including Debian 13), evaluation on CM4 hosts with VHT 80 MHz traffic and two spatial streams, ten repetitions per condition, and amd64 performance outside the evaluated scope.

## Summary (ZH)

VesperCSI（Baydemir、Baghaee、Ulusoy；安卡拉中东技术大学 REAL Lab；arXiv 2610.22581，2026 年 10 月 15 日提交；25 页，13 幅图，9 张表；开源实现见 GitHub）是对 FeitCSI 的 GPL-3.0 重新设计，FeitCSI 是面向 Intel AX200 和 AX210 Wi-Fi 网卡的 CSI 采集工具。它是运行于 amd64 和 aarch64 Linux 主机的 C 语言用户态程序，包括装有 PCIe AX200/AX210 网卡的树莓派级系统。CSI 访问来自 Intel backport-iwlwifi 驱动树的启用 CSI 的构建，而非内核自带驱动；无需定制固件，可保留发行版自带的 Intel 固件。作者说明，本工作涵盖该驱动边界之上的用户态采集引擎、配置生命周期、存储路径与实验控制流程。

重新设计以固定容量的预分配对象池取代逐记录动态分配，将捕获线程与消费线程分离，在存储前剔除格式错误或无关的记录，并采用明确、有界的溢出行为（捕获池耗尽时默认溢出策略丢弃最早排队的记录；基础文件输出使用 writev，短写入会记录日志而不重试）。可加载插件接口提供带版本的 SDK：插件是启动时加载的 Linux 共享对象，必须提供初始化、逐记录回调和销毁入口，回调在消费线程上同步执行；每个进程目前只能激活一个插件。论文以红外遥控的活动标注流程演示该接口。论文还给出可复用 CSI 平台（Linux 802.11n CSI Tool、Atheros CSI Tool、Nexmon CSI、AX-CSI、FeitCSI、PicoScenes、IAX、ESP-CSI、ZTE CSI Tool、openwifi）的对比表，根据公开文档与代码仓库整理，是功能与部署对比，而非性能排名。

评估在树莓派 CM4 接收端上对 VesperCSI 与 FeitCSI 进行突发流量软件交叉对比。在 600 MHz 全核频率上限和 2,500 帧/秒目标速率下，10,000 帧突发中 VesperCSI 的平均序号保留率为 99.017% 至 99.087%，FeitCSI 为 43.972% 至 46.553%；在两台接收端之间互换用户态程序、保留各自驱动后，这一排序依然成立。论文说明，这比较的是被测的软件加驱动组合，而不是单独隔离用户态的影响。论文自述的局限：仅支持 Intel AX200/AX210；需要与主机内核匹配的启用 CSI 的 backport-iwlwifi 构建（在 Linux 6.8 与 6.12，含 Debian 13 上测试）；评估在 CM4 主机上、VHT 80 MHz 流量、两个空间流；每个条件重复十次；amd64 上的性能不在评估范围内。

## Key technical points (EN)

- Target: Intel AX200/AX210 CSI acquisition (up to 160 MHz documented in the paper's comparison table) on amd64 and aarch64 Linux, including Raspberry Pi CM4 with a PCIe card.
- Pipeline: fixed-capacity preallocated pools, separate capture and consumer threads, record validation before storage, bounded overflow policy; writev output.
- Plugin SDK: versioned shared-object plugins loaded at startup (init, per-record callback, destroy); one active plugin per process; callback runs on the consumer thread.
- Result: mean sequence retention 99.017 to 99.087 percent versus 43.972 to 46.553 percent for FeitCSI at 2,500 frames/s, 600 MHz CPU ceiling, 10,000-frame bursts on CM4.
- Scope of the claim: package-level comparison on fixed device/driver combinations; VHT 80 MHz, two spatial streams, ten repetitions per condition.

## Key technical points (ZH)

- 目标：在 amd64 与 aarch64 Linux（含装 PCIe 网卡的树莓派 CM4）上对 Intel AX200/AX210 进行 CSI 采集（论文对比表记载最高 160 MHz）。
- 流水线：固定容量预分配池、独立的捕获与消费线程、存储前记录校验、有界溢出策略；使用 writev 输出。
- 插件 SDK：启动时加载的带版本共享对象插件（初始化、逐记录回调、销毁）；每进程一个激活插件；回调在消费线程上运行。
- 结果：在 CM4、600 MHz CPU 上限、2,500 帧/秒、10,000 帧突发条件下，平均序号保留率 99.017% 至 99.087%，FeitCSI 为 43.972% 至 46.553%。
- 结论范围：在固定设备/驱动组合上的软件包级对比；VHT 80 MHz、两个空间流、每个条件重复十次。

## Why it matters / what's new (EN)

The paper describes itself as a hard fork of FeitCSI and credits FeitCSI as the software foundation; its stated contributions are the bounded-buffer acquisition pipeline, the versioned plugin interface and corrections to implementation bugs inherited from FeitCSI. Its own limitations section says the comparison does not isolate userspace from driver effects and that sequence accounting counts missing identifiers without locating where losses occur. In this KB it adds an acquisition-tooling entry to the sensing-csi bin next to 2026-10-16_arxiv-octosense-open-source-wireless-sensing-platform (an open-source sensing platform) and the ESP32 CSI tracker 2026-10-16_arxiv-ghostline-six-node-esp32-csi-motion-tracker.

## Why it matters / what's new (ZH)

论文自称是 FeitCSI 的硬分叉，并将 FeitCSI 列为软件基础；其自述贡献为有界缓冲的采集流水线、带版本的插件接口，以及修正从 FeitCSI 继承的实现缺陷。其局限部分指出，该对比并未将用户态与驱动的影响分离，序号统计只计量缺失的标识而不定位丢失发生在何处。在本知识库中，它为 sensing-csi 分类补充了一条采集工具类条目，与 2026-10-16_arxiv-octosense-open-source-wireless-sensing-platform（开源感知平台）和 ESP32 CSI 跟踪器 2026-10-16_arxiv-ghostline-six-node-esp32-csi-motion-tracker 并列。
