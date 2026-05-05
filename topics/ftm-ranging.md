---
id: ftm-ranging
last_updated: 2026-05-05
---

## Current state (EN)

This bin tracks **Fine Timing Measurement (FTM)** — the protocol family enabling sub-meter Wi-Fi ranging — across its three amendment generations: 802.11mc (the original FTM, 2016), 802.11az (next-generation positioning with security extensions, ratified 2022/23), and 802.11bk (further-ranging and increased-bandwidth modes). The standards are mature; current research is about real-world accuracy, security, and integration with non-Wi-Fi positioning sources.

KB coverage today: a comprehensive 802.11mc/az/bk survey (`2026-05-01_arxiv-ftm-survey-2025`), a head-to-head 802.11mc-vs-az measurement study showing meter-level accuracy in LOS at 80/160 MHz and ~5 m in NLOS (`2026-05-01_arxiv-mc-az-performance-comparison`), a security-and-adoption study of 802.11az/bk (`2026-05-01_arxiv-secure-wifi-ranging-az-bk`) — which spawned the patent candidate `secure-ftm-anti-downgrade-ie` — and a cross-technology ranging paper bridging indoor / outdoor for robot navigation (`2026-05-03_arxiv-cross-tech-ranging-robot-nav`).

Watch for: anti-downgrade FTM IE proposals in TGbn (the unstaked surface from the Antonijević et al. work); commercial indoor-positioning deployments citing 802.11az; the gap between secure-FTM specification and *deployed* secure-FTM (the security paper made clear that production stacks routinely downgrade); 802.11bk-specific bandwidth-mode research.

## Current state (ZH)

本桶追踪 **精细时间测量（FTM）**——支持 Wi-Fi 亚米级测距的协议家族——的三代修订：802.11mc（最初的 FTM，2016）、802.11az（下一代定位，含安全扩展，2022/23 通过）、802.11bk（更远距离和增宽带模式）。标准已较成熟；当前研究聚焦真实精度、安全性以及与非 Wi-Fi 定位源的整合。

当前 KB 覆盖：一份 802.11mc/az/bk 全面综述（`2026-05-01_arxiv-ftm-survey-2025`）；一项 mc 与 az 的对照测量研究——80/160 MHz LOS 下达米级精度、NLOS 下约 5 m（`2026-05-01_arxiv-mc-az-performance-comparison`）；一份 802.11az/bk 安全与采纳研究（`2026-05-01_arxiv-secure-wifi-ranging-az-bk`），由其衍生出专利候选 `secure-ftm-anti-downgrade-ie`；以及一项面向机器人导航、连接室内 / 室外定位的跨技术测距论文（`2026-05-03_arxiv-cross-tech-ranging-robot-nav`）。

待关注：TGbn 中的抗降级 FTM IE 提案（来自 Antonijević 等人工作的未占领面）；引用 802.11az 的商用室内定位部署；安全 FTM 规范与*实装*安全 FTM 之间的落差（安全论文已表明生产协议栈普遍降级）；针对 802.11bk 带宽模式的专门研究。
