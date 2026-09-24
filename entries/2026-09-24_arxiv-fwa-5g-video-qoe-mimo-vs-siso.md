---
id: 2026-09-24_arxiv-fwa-5g-video-qoe-mimo-vs-siso
date_published: 2026-09-21
date_found: 2026-09-24
type: academic-paper
technology: cellular
title_en: "Objective Video Quality Assessment in FWA-Based Over-the-Top Content Delivery Across Open Source 5G Networks"
title_zh: "开源 5G 网络固定无线接入（FWA）下 OTT 视频内容分发的客观视频质量评估"
url: "https://arxiv.org/abs/2609.25423"
source_quality: full
topics: [FWA, MIMO, "256-QAM", QoE, MPEG-DASH, srsRAN, Open5GS]
topic_primary: 5g-nr
novelty_score: 2
---

## Summary (EN)

This paper measures the effect of MIMO versus SISO transmission and modulation order on streaming video quality delivered over a 5G Fixed Wireless Access (FWA) link, using a real open-source 5G stack rather than a simulation. The testbed (built at the LANCE center, UFRN) combines an srsRAN-based gNB, an Open5GS core, and a USRP Ettus B210 RF front-end; a Motorola G50 5G smartphone acted as the FWA CPE, bridging the 5G link to Wi-Fi 5 for client laptops. An "extreme-edge" node hosted the full 5G system while a separate "core-cloud" server hosted an MPEG-DASH video server (Nginx in Docker); clients streamed a 3-minute, 60fps Big Buck Bunny sequence across five representation levels (4K down to low-res) using the BOLA adaptive-bitrate algorithm with 2-second segments.

The authors compared MIMO and SISO transmission at both 64-QAM and 256-QAM under increasing numbers of concurrent users (1, 3, 5), scoring delivered video with PSNR, SSIM, and VMAF full-reference metrics computed frame-by-frame rather than relying on theoretical throughput predictions. MIMO with 256-QAM held VMAF scores above the visually-lossless threshold even with five concurrent users, while SISO configurations degraded sharply as load increased — VMAF fell to visibly poor levels and the PSNR gap between MIMO and SISO widened from roughly 3.5 dB at one user to nearly 8 dB at five users.

## Summary (ZH)

本文在真实的开源 5G 协议栈（而非仿真环境）上，测量 MIMO 与 SISO 传输方式以及调制阶数对通过 5G 固定无线接入（FWA）链路分发的流媒体视频质量的影响。该测试床（搭建于巴西 UFRN 大学的 LANCE 中心）结合了基于 srsRAN 的 gNB、Open5GS 核心网，以及 USRP Ettus B210 射频前端；一台摩托罗拉 G50 5G 手机充当 FWA 用户端设备（CPE），将 5G 链路桥接为 Wi-Fi 5 供客户端笔记本电脑使用。一台"极边缘"节点承载完整的 5G 系统，另一台独立的"核心云"服务器则以 Docker 容器中的 Nginx 承载 MPEG-DASH 视频服务器；客户端使用 BOLA 自适应码率算法、以 2 秒为分段单位，播放一段时长 3 分钟、帧率 60fps 的 Big Buck Bunny 视频，共设置从 4K 到低分辨率的五档码率。

作者在并发用户数分别为 1、3、5 的条件下，比较了 MIMO 与 SISO 在 64-QAM 与 256-QAM 两种调制阶数下的表现，并采用 PSNR、SSIM、VMAF 三种全参考质量指标逐帧打分，而非依赖理论吞吐量预测。使用 256-QAM 的 MIMO 配置即便在五个并发用户的情况下，VMAF 分数仍维持在"视觉无损"阈值以上；而 SISO 配置则随负载增加急剧劣化——VMAF 降至肉眼可辨的较差水平，MIMO 与 SISO 之间的 PSNR 差距也从单用户时约 3.5 dB 扩大到五用户时接近 8 dB。

## Key technical points (EN)

- Real open-source 5G testbed, not simulation: srsRAN gNB + Open5GS core + USRP B210 RF front-end, with a commercial 5G smartphone (Motorola G50) acting as the FWA CPE bridging to client devices over Wi-Fi 5.
- MPEG-DASH delivery with BOLA adaptive bitrate, 2-second segments, five representation tiers (4K 14-18 Mbps down to ~1.8-2.5 Mbps), tested on a 3-minute 60fps reference sequence.
- Objective, frame-level quality scoring (PSNR, SSIM, VMAF) rather than throughput proxies — VMAF above ~93 for MIMO+256-QAM at 5 users (visually lossless), while SISO VMAF dips below 55 and hovers near or below 80 under load.
- PSNR gain of MIMO over SISO widens with load: ~3.5-3.8 dB at 1 user, ~5.9-6.3 dB at 3 users, ~7.5-7.9 dB at 5 users, showing MIMO's benefit compounds precisely when the cell is contended.
- SSIM stayed pinned near 0.99 for MIMO across all tested loads, while SISO SSIM dropped below 0.80 in degradation episodes.

## Key technical points (ZH)

- 真实的开源 5G 测试床而非仿真：srsRAN gNB + Open5GS 核心网 + USRP B210 射频前端，并使用一台商用 5G 手机（摩托罗拉 G50）作为 FWA 用户端设备，通过 Wi-Fi 5 桥接给客户端设备。
- 采用 MPEG-DASH 分发配合 BOLA 自适应码率算法，分段长度 2 秒，设置从 4K（14-18 Mbps）到约 1.8-2.5 Mbps 的五档码率，测试内容为时长 3 分钟、60fps 的参考视频序列。
- 采用客观的逐帧质量评分（PSNR、SSIM、VMAF），而非仅用吞吐量作为代理指标——五用户负载下，MIMO+256-QAM 的 VMAF 分数在 93 以上（视觉无损），而 SISO 的 VMAF 分数在负载下会跌破 55，并在 80 左右或以下徘徊。
- MIMO 相对 SISO 的 PSNR 增益随负载增大而扩大：单用户时约 3.5-3.8 dB，三用户时约 5.9-6.3 dB，五用户时约 7.5-7.9 dB，说明 MIMO 的优势恰恰在小区竞争加剧时被放大。
- 在所有测试负载下，MIMO 的 SSIM 始终稳定在约 0.99 附近，而 SISO 的 SSIM 在劣化时段会跌破 0.80。

## Why it matters / what's new (EN)

Most of the KB's existing FWA-adjacent coverage discusses FWA as a deployment/use-case category (e.g. spectrum or coverage discussions) rather than measured end-user video QoE on an operating open-source 5G stack. This entry contributes a concrete, testbed-measured MIMO-vs-SISO video-quality delta under realistic multi-user contention — a data point useful for anyone evaluating whether an FWA deployment needs MIMO capability to sustain OTT video quality as subscriber density grows on a cell.

## Why it matters / what's new (ZH)

本知识库现有与 FWA 相关的条目大多将 FWA 作为一种部署/应用场景类别来讨论（例如涉及频谱或覆盖方面的内容），而非在真实运行的开源 5G 协议栈上对终端用户视频体验质量（QoE）进行实测。本条目贡献了一组在真实测试床上、多用户竞争条件下实测得到的 MIMO 与 SISO 视频质量差异的具体数据——这对评估某个 FWA 部署是否需要 MIMO 能力以在小区用户密度增长时维持 OTT 视频质量的人来说，是一个有价值的参考数据点。

## Images

![Conceptual FWA deployment model (paper Fig. 1; AI-assisted illustration) | FWA 部署概念模型（论文图 1，AI 辅助绘制）](https://arxiv.org/html/2609.25423v1/figs/fwa_model.jpg)
![256-QAM video quality distribution, MIMO configuration | 256-QAM 调制下 MIMO 配置的视频质量分布](https://arxiv.org/html/2609.25423v1/figs/quality_256qam_mimo.jpg)
