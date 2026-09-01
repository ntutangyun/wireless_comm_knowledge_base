---
id: 2026-09-01_nvidia-jetson-orin-nano-2-edge-robotics
date_published: 2026-08-25
date_found: 2026-09-01
type: product
technology: edge-ai
title_en: "Jetson Orin Nano 2: NVIDIA's entry-level edge module doubles inference at 40% less power"
title_zh: "Jetson Orin Nano 2：英伟达入门级边缘模组推理性能翻倍、功耗降低 40%"
url: "https://nvidianews.nvidia.com/news/nvidia-announces-jetson-orin-nano-2-robotics-computer-to-redefine-entry-level-edge-ai"
source_quality: full
topics: [Jetson, embedded-module, robotics-compute, NPU-generation-refresh, entry-level-edge-AI]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

NVIDIA announced Jetson Orin Nano 2, a refresh of its entry-level embedded robotics/edge-AI compute module, on 2026-08-25. The pitch is straightforward generational improvement rather than a new architecture: same form factor as its predecessor (Jetson Orin Nano Super), 78 TOPS of AI compute, 8 GB memory, an 8-core Arm CPU, roughly 2x the inference performance of the predecessor via improved Tensor Cores and higher memory bandwidth, and 40% lower power draw in 15-watt mode at matched performance. Availability is stated as first half of 2027, so this is a forward-looking product announcement rather than a shipping-today part.

This is the knowledge base's first NVIDIA Jetson product entry despite Jetson hardware already serving as the measurement substrate for two prior academic entries in this domain (a three-generation Jetson workload-characterization paper and a Jetson vision-node energy study), which made this an explicit gap to close.

## Summary (ZH)

英伟达于 2026 年 8 月 25 日发布了 Jetson Orin Nano 2，是其入门级嵌入式机器人/边缘 AI 计算模组的一次代际更新。其定位是直白的代际提升，而非全新架构：与前代（Jetson Orin Nano Super）保持相同外形尺寸，AI 算力 78 TOPS，8GB 内存，8 核 Arm CPU，凭借改进的 Tensor Core 与更高的内存带宽，推理性能约为前代的 2 倍，同等性能下 15 瓦模式的功耗降低 40%。上市时间标注为 2027 年上半年，因此这是一次面向未来的产品发布，而非即刻可购买的在售型号。

这是本知识库收录的首条英伟达 Jetson 产品条目——尽管 Jetson 硬件此前已作为本领域两篇学术条目的测量基底（一篇跨三代 Jetson 的负载画像论文，以及一篇 Jetson 视觉节点能耗研究），这使其成为一个明确需要补上的空白。

## Key technical points (EN)

- **Announcement date**: 2026-08-25, NVIDIA Newsroom press release.
- **Specs**: 78 TOPS AI compute; 8 GB memory; 8-core Arm CPU; same physical form factor as Jetson Orin Nano Super.
- **Performance claim**: ~2x inference performance vs. Jetson Orin Nano Super, attributed to improved Tensor Cores and higher memory bandwidth — a first-party comparative claim, not independently benchmarked.
- **Power claim**: 40% lower power consumption in 15-watt operating mode at matched performance vs. predecessor.
- **Availability**: stated as "expected in the first half of 2027" — a forward announcement, not a current shipping date.
- **Not disclosed in the press release**: pricing, wireless connectivity, and any third-party or MLPerf-style benchmark validation of the TOPS or "2x" figures. Per this domain's novelty rubric, first-party performance multipliers should be treated as marketing claims until independently checked (e.g., a future MLPerf Client/Inference Edge round).

## Key technical points (ZH)

- **发布日期**：2026 年 8 月 25 日，英伟达新闻室新闻稿。
- **规格**：78 TOPS AI 算力；8GB 内存；8 核 Arm CPU；与 Jetson Orin Nano Super 相同的物理外形尺寸。
- **性能声称**：相较 Jetson Orin Nano Super 推理性能约提升 2 倍，归因于改进的 Tensor Core 与更高的内存带宽——这是厂商第一方的对比声称，未经独立测试验证。
- **功耗声称**：在同等性能下，15 瓦运行模式的功耗相较前代降低 40%。
- **上市时间**：标注为"预计 2027 年上半年"——属于前瞻性发布，而非当前即可发货的日期。
- **新闻稿未披露内容**：价格、无线连接方式，以及对 TOPS 或"2 倍"数字的任何第三方或 MLPerf 式基准验证。按本领域的新颖度评分标准，厂商第一方的性能倍数声称在获得独立核实（例如未来的 MLPerf Client/Inference Edge 结果轮次）之前，应视为营销性说法。

## Why it matters / what's new (EN)

The finding here is modest by design — this is a generational refresh, not a new paradigm, and is scored novelty 3 accordingly (a significant platform/product launch with concrete specs, not an order-of-magnitude or first-of-kind result). Its value to this knowledge base is structural rather than technical: the Jetson product line has been an implicit presence in this domain for weeks — two academic entries already benchmark on Jetson hardware — without the line itself ever being covered, which is exactly the kind of gap the arm-nvidia-edge source was added to close and had gone uncontacted across three prior runs. Filing this entry also gives future Jetson-hardware academic papers a product anchor to link back to, and sets a specific, checkable baseline (78 TOPS, 8 GB, 40% power reduction) against which the eventual independent benchmarks — MLPerf or otherwise — can be measured.

The forward-dated availability (H1 2027) is worth flagging plainly: this is an announcement, and per this domain's landing-confirmation discipline it should not be treated as a shipping product until a retail or partner-board listing confirms it.

## Why it matters / what's new (ZH)

这里的发现按设计是克制的——这是一次代际更新，而非新范式，因此被评为新颖度 3（具体规格明确的重要平台/产品发布，而非数量级跃升或首创性结果）。它对本知识库的价值更多是结构性的，而非技术性的：Jetson 产品线在本领域已隐性存在数周——已有两篇学术条目以 Jetson 硬件为基准测试平台——却始终未被产品线本身覆盖，这正是设立 arm-nvidia-edge 信源要弥补的空白，而该信源此前三次运行均未被联系过。收录本条目也为未来以 Jetson 硬件为基础的学术论文提供了一个可回链的产品锚点，并设定了一个具体、可核实的基线（78 TOPS、8GB、功耗降低 40%），供日后（MLPerf 或其他方式的）独立基准测试对照衡量。

前瞻性的上市时间（2027 年上半年）值得明确指出：这是一次发布，按本领域的"落地确认"纪律，在有零售或合作板卡上市信息确认之前，不应将其当作已在售产品对待。

## Images

*(No redistributable images for this entry — see the NVIDIA Newsroom press release for official product imagery.)*
