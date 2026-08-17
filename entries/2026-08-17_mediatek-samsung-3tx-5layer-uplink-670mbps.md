---
id: 2026-08-17_mediatek-samsung-3tx-5layer-uplink-670mbps
date_published: 2026-06-03
date_found: 2026-08-17
type: industry-news
technology: cellular
title_en: "MediaTek and Samsung Demonstrate Industry-First 3Tx 5-Layer 5G Uplink at 670 Mbps"
title_zh: "联发科与三星演示业界首个 3Tx 五层 5G 上行，峰值 670 Mbps"
url: "https://www.mediatek.com/press-room/mediatek-and-samsung-achieve-3tx-5-layer-uplink-breakthrough-setting-new-benchmark-for-5g-uplink-speed"
source_quality: full
topics: [uplink-MIMO, 3Tx, carrier-aggregation, M90-modem, vRAN, massive-MIMO, uplink-throughput]
topic_primary: 5g-nr
topics_secondary: [cellular-massive-mimo]
novelty_score: 2
---

## Summary (EN)
MediaTek and Samsung announced (June 3, 2026) the industry's first successful test of a **3-transmit-antenna (3Tx), 5-layer uplink** configuration, reaching a combined uplink peak of **670 Mbps**. The device side ran MediaTek's **M90 5G modem** platform; the network side used Samsung's **virtualized RAN (vRAN)** with Massive-MIMO radio units (MMU) and macro radios. The spectrum recipe aggregates a low-mid anchor with wide TDD capacity: **band n66 (1.7 GHz, 30 MHz)** carrying part of the uplink, plus **two n77 (3.7 GHz) carriers totalling 200 MHz** carrying the multi-layer UL-MIMO payload — five spatial layers across three transmit chains in aggregate.

The significance is directional: 5G capacity engineering has overwhelmingly targeted downlink, while uplink has become the binding constraint for the traffic mix now growing fastest — user-generated video, cloud gaming, XR pose/video upstream, industrial camera backhaul and AI applications that ship sensor data up for inference. Commercial handsets today typically ship 2Tx; moving the device to 3Tx and the link to 5 aggregate layers is a step change in uplink spectral efficiency rather than a bandwidth grab. Dr. HC Hwang (MediaTek) called the validation "a transformative milestone for the MediaTek 5G platform." The release names no 3GPP release explicitly and gives no commercialization date; the natural vehicles are 5G-Advanced UL-MIMO enhancements and follow-on flagship modem cycles. (Ingested 2026-08-17 as a deliberate catch-up: the June announcement predates this scan but the KB's 5g-nr bin had no uplink-MIMO milestone coverage.)

## Summary (ZH)
联发科与三星宣布（2026 年 6 月 3 日）业界首次成功测试**三发射天线（3Tx）五层上行**配置，上行合计峰值达 **670 Mbps**。终端侧采用联发科 **M90 5G 调制解调器**平台；网络侧为三星**虚拟化 RAN（vRAN）**配合 Massive-MIMO 射频单元（MMU）与宏站射频。频谱组合为低中频锚点加宽幅 TDD 容量：**n66（1.7 GHz，30 MHz）**承载部分上行，加上**两个 n77（3.7 GHz）载波共 200 MHz** 承载多层 UL-MIMO 载荷——合计三条发射链上五个空间层。

其意义在于方向性：5G 容量工程长期压倒性地面向下行，而上行正成为增长最快业务组合的紧约束——用户生成视频、云游戏、XR 姿态/视频上行、工业相机回传，以及把传感器数据送上云推理的 AI 应用。当前商用手机普遍为 2Tx；把终端提升到 3Tx、链路提升到五个聚合层，是上行频谱效率的台阶式跃升，而非单纯堆带宽。联发科 HC Hwang 博士称该验证是"联发科 5G 平台的变革性里程碑"。新闻稿未明确点名 3GPP 版本，也未给出商用时间表；自然的落地载体是 5G-Advanced 上行 MIMO 增强与后续旗舰调制解调器周期。（2026-08-17 有意补录：该 6 月公告早于本次扫描，但知识库 5g-nr 分区此前没有任何上行 MIMO 里程碑条目。）

## Key technical points (EN)
- Configuration: 3Tx / 5-layer aggregate uplink — first industry test of this combination; commercial baseline today is 2Tx devices.
- Spectrum: n66 (1.7 GHz) 30 MHz + dual n77 (3.7 GHz) carriers, 200 MHz combined — uplink carrier aggregation across FDD anchor + TDD capacity bands.
- Peak: 670 Mbps total uplink throughput.
- Device: MediaTek M90 modem platform (its flagship modem generation, also the platform in the June Samsung network pairing).
- Network: Samsung vRAN + Massive-MIMO radios (MMU) + macro radios — a fully virtualized RAN stack on the infrastructure side.
- Not stated: specific 3GPP release features (e.g. Rel-18 UL multi-layer enhancements), commercialization timeline.

## Key technical points (ZH)
- 配置：3Tx / 合计五层上行——业界首次测试该组合；当前商用基线为 2Tx 终端。
- 频谱：n66（1.7 GHz）30 MHz + 双 n77（3.7 GHz）载波共 200 MHz——跨 FDD 锚点与 TDD 容量频段的上行载波聚合。
- 峰值：上行总吞吐 670 Mbps。
- 终端：联发科 M90 调制解调器平台（其旗舰调制解调器世代，也是 6 月与三星网络配对的平台）。
- 网络：三星 vRAN + Massive-MIMO 射频（MMU）+ 宏站射频——基础设施侧为全虚拟化 RAN 栈。
- 未说明：具体 3GPP 版本特性（如 Rel-18 上行多层增强）、商用时间表。

## Why it matters / what's new (EN)
This is the KB's first uplink-MIMO milestone entry, and it lands on the axis the cellular bins have been circling from the research side: the SIGCOMM'26 digest lists a dual-loop 5G uplink congestion-control paper, the O-RAN ISAC entries repurpose uplink SRS, and the AI-application thread keeps assuming fat upstream pipes. A 3Tx/5-layer device-to-vRAN validation at 670 Mbps says the vendor ecosystem is now engineering uplink spectral efficiency (more layers per Hz), not just uplink CA (more Hz) — the natural reading is 5G-Advanced UL enhancements moving from spec to silicon. It also extends the MediaTek–Samsung interop line (M90 + vRAN) as a counterweight to the Qualcomm–Ericsson axis the KB already tracks. Watch for: commercial modem/handset announcements citing 3Tx, operator trials on n66+n77 layouts (a common North-American holding), and whether the layer count survives outside lab conditions.

## Why it matters / what's new (ZH)
这是知识库第一条上行 MIMO 里程碑条目，恰好落在各蜂窝分区从研究侧不断逼近的轴线上：SIGCOMM'26 文摘中有双环 5G 上行拥塞控制论文，O-RAN ISAC 条目复用上行 SRS，AI 应用线索则一直默认上行管道足够粗。670 Mbps 的 3Tx/五层终端到 vRAN 验证说明厂商生态已开始工程化上行频谱效率（每 Hz 更多层），而不只是上行载波聚合（更多 Hz）——自然的解读是 5G-Advanced 上行增强正从规范走向芯片。它同时延伸了联发科-三星互操作阵线（M90 + vRAN），与知识库已跟踪的高通-爱立信轴形成对照。后续关注：引用 3Tx 的商用调制解调器/手机发布、运营商在 n66+n77 布局（北美常见持有组合）上的试验，以及层数在实验室之外能否保持。
