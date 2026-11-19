---
id: 2026-11-19_calterah-uwb-digital-key-anchors-multistatic-in-cabin-radar
date_published: 2026-09-28
date_found: 2026-11-19
type: industry-news
technology: uwb
title_en: "Calterah proposes reusing UWB digital-key anchors as a synchronized 802.15.4ab multi-static radar for in-cabin sensing"
title_zh: "Calterah 提出将 UWB 数字钥匙锚点复用为基于 802.15.4ab 的同步多静态雷达，用于车内感知"
url: "https://www.eetimes.com/calterah-turns-uwb-digital-keys-into-in-cabin-sensors/"
source_quality: full
topics: [UWB, 802.15.4ab, in-cabin-radar, child-presence-detection, digital-key, Calterah]
topic_primary: uwb-radar
topics_secondary: [uwb-ranging]
novelty_score: 2
---

## Summary (EN)

EE Times (Pablo Valerio, 28 September 2026) reports a presentation by Yaohui Liu of Calterah Semiconductor at InCabin Europe 2026 in Barcelona. Calterah proposes using the UWB digital-key anchors already installed in many cars as a synchronized sensing network for in-cabin monitoring, instead of adding separate single-purpose sensors (cameras, infrared, ultrasonic). The article names Euro NCAP 2026, which rewards child presence detection (CPD) that can sense small movements such as breathing, as the regulatory driver.

According to the article, the speaker argued that cabin monitoring is mainly a geometry problem: a single-anchor radar suffers from internal signal leakage that can mask nearby objects, and uncoordinated transceivers interfere with each other, whereas transceivers placed at the rear-view mirror, overhead console and rear pillars give multiple viewing angles (a third-row child can be seen from the rear pillars if the front sensor is blocked). The coordination is attributed to IEEE 802.15.4ab, which the article describes as defining roles (controller, transmitter, receiver, requester) and a time-slotted MAC organised into blocks, rounds and slots. In a scheduled slot one anchor transmits while nearby anchors listen and measure the channel response; the article says this scheduling lets digital-key ranging and radar sensing run simultaneously on the same hardware, and that frequency stitching across channels (Channels 9 and 10 are cited) increases bandwidth and reduces fading from cabin metal.

On silicon, Calterah's Dubhe platform uses a 2T4R transceiver for anchors, and a simpler 1T4R design targets phones and key fobs. A Calterah sales manager is quoted as saying the 2T4R part enables 3D angle-of-arrival and virtual antennas and can meet CPD and intrusion-detection requirements. The article names CPD, intrusion detection, occupant posture recognition and exterior parking assistance (e.g. curb height) as functions of the same transceivers, alongside secure access under IEEE 802.15.4z-2020 and CCC; Liu cites driver alertness, seat occupancy and seatbelt checks as required monitoring tasks a single sensing network could cover. The information comes from the vendor's presentation and interview; the article gives no quantitative detection accuracy, latency, power, anchor-count or cost-saving figures.

## Summary (ZH)

EE Times（Pablo Valerio，2026 年 9 月 28 日）报道了 Calterah Semiconductor 的 Yaohui Liu 在巴塞罗那 InCabin Europe 2026 上的演讲。Calterah 提出，把许多汽车中已安装的 UWB 数字钥匙锚点作为同步感知网络用于车内监测，而不是再增加摄像头、红外、超声等单一用途传感器。文章指出监管驱动因素是 Euro NCAP 2026：其鼓励能感知呼吸等微小动作的儿童遗留检测（CPD）。

据文章，演讲者认为车内监测主要是几何问题：单锚点雷达存在内部信号泄漏，可能掩盖近处目标，未协调的收发器之间会相互干扰；而将收发器布置在后视镜、顶棚控制台和后立柱，可提供多个观察角度（前排传感器被遮挡时，后立柱单元仍可看到第三排儿童）。协调机制归因于 IEEE 802.15.4ab，文章称其定义了角色（controller、transmitter、receiver、requester）及按 block、round、slot 组织的时隙化 MAC。在被调度的时隙内，一个锚点发射，附近锚点监听并测量信道响应；文章称这种调度使数字钥匙测距与雷达感知可在同一硬件上同时运行，并称跨信道频率拼接（文中提到 Channel 9 和 10）可增加带宽并减轻车内金属造成的衰落。

硅片方面，Calterah 的 Dubhe 平台为锚点采用 2T4R 收发器，较简单的 1T4R 设计面向手机与钥匙扣。文中引述 Calterah 销售经理称，2T4R 可实现 3D 到达角与虚拟天线，并能满足 CPD 与入侵检测要求。文章称同一收发器可实现 CPD、入侵检测、乘员姿态识别与车外泊车辅助（如路缘高度），并保留符合 IEEE 802.15.4z-2020 与 CCC 标准的安全接入；Liu 将驾驶员警觉、座位占用与安全带检查列为法规要求的监测任务，称单一感知网络可覆盖。文章内容来自厂商演讲与采访，未给出检测精度、时延、功耗、锚点数量或成本节省的量化数据。

## Key technical points (EN)

- Source: EE Times, 28 September 2026, reporting an InCabin Europe 2026 (Barcelona) talk by Calterah; vendor-sourced (talk and interview); no independent test data.
- Concept: digital-key UWB anchors operate as a multi-static radar network; anchors take scheduled transmit and listen roles.
- Protocol elements cited from IEEE 802.15.4ab: roles (controller, transmitter, receiver, requester); time-slotted MAC with blocks, rounds and slots.
- Coexistence: scheduling lets key ranging and sensing share the same hardware; frequency stitching over Channels 9 and 10 for bandwidth and fading mitigation.
- Silicon: Dubhe 2T4R (anchors; 3D AoA, virtual antennas) and 1T4R (phones, fobs).
- Functions named for the transceivers: CPD, intrusion detection, posture recognition, exterior parking assistance, secure access (802.15.4z-2020 / CCC); driver alertness, occupancy and seatbelt checks cited as required monitoring tasks.
- Not given: detection accuracy, latency, power, anchor count, cost figures.

## Key technical points (ZH)

- 来源：EE Times，2026 年 9 月 28 日，报道 Calterah 在 InCabin Europe 2026（巴塞罗那）的演讲；信息来自厂商演讲与采访，无独立测试数据。
- 概念：数字钥匙 UWB 锚点作为多静态雷达网络工作，锚点按调度承担发射与监听角色。
- 文中引用的 IEEE 802.15.4ab 要素：角色（controller、transmitter、receiver、requester）；按 block、round、slot 组织的时隙化 MAC。
- 共存：调度使钥匙测距与感知共用同一硬件；Channel 9 与 10 的频率拼接用于增加带宽并缓解衰落。
- 硅片：Dubhe 2T4R（锚点；3D AoA、虚拟天线）与 1T4R（手机、钥匙扣）。
- 收发器可实现的功能：CPD、入侵检测、姿态识别、车外泊车辅助、安全接入（802.15.4z-2020 / CCC）；驾驶员警觉、占用与安全带检查被列为法规要求的监测任务。
- 未给出：检测精度、时延、功耗、锚点数量与成本数据。

## Why it matters / what's new (EN)

The KB already holds Calterah's Dubhe 802.15.4ab SoC launch (2026-06-04_calterah-dubhe-uwb-soc-802154ab), the YFORE UWB radar vehicle-sensing portfolio (2026-09-11_yfore-uwb-radar-vehicle-sensing-portfolio) and the Hyundai/Kia UWB V2X safety entry (2026-08-18_hyundai-kia-vision-pulse-uwb-v2x-safety). This item adds the vendor's own account of how 802.15.4ab scheduling (roles, blocks/rounds/slots) is applied to share anchors between key ranging and cabin radar, and the stated regulatory driver. The article's claims are presentational and carry no measured performance data. The IEEE 802.15 Mentor digests in this KB cover the TG4ab text this scheduling relies on; Calterah's Wenzheng Li chairs the IG FG UWB covered in those digests and submitted most of its documents.

## Why it matters / what's new (ZH)

KB 已收录 Calterah Dubhe 802.15.4ab SoC 发布（2026-06-04_calterah-dubhe-uwb-soc-802154ab）、YFORE UWB 雷达车载感知产品组合（2026-09-11_yfore-uwb-radar-vehicle-sensing-portfolio）以及现代/起亚 UWB V2X 安全条目（2026-08-18_hyundai-kia-vision-pulse-uwb-v2x-safety）。本条补充了厂商自述的内容：如何用 802.15.4ab 的调度机制（角色、block/round/slot）让锚点在钥匙测距与车内雷达之间共享，以及其所述的监管驱动。文章内容属于演讲陈述，不含实测性能数据。KB 中的 IEEE 802.15 Mentor 摘要覆盖了该调度所依赖的 TG4ab 文本；Calterah 的 Wenzheng Li 担任这些摘要所涉 IG FG UWB 的主席，并提交了其中大部分文档。

## Images

No images were available for this item. | 本条目无可用图片。
