---
id: 2026-11-05_arxiv-software-pufs-deployable-hardware-root-of-trust-edge-ai-survey
date_published: 2026-11-02
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "Toward Deployable Hardware Roots of Trust for Edge AI: A Survey of Software PUFs and Their Trade-offs"
title_zh: "迈向可部署的边缘 AI 硬件信任根：软件 PUF 及其权衡综述"
url: "https://arxiv.org/abs/2611.03194"
source_quality: full
topics: [software-PUF, hardware-root-of-trust, on-device-model-protection, SRAM-PUF, DRAM-PUF, key-derivation, edge-AI-security]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon]
novelty_score: 2
---

## Summary (EN)

The paper starts from the observation that on-device AI requires model parameters to be stored locally, and that secret keys held in non-volatile memory are vulnerable when an attacker has physical access. Physical unclonable functions (PUFs) derive keys from per-device manufacturing variation, but conventional PUFs need design-stage hardware changes and so cannot be added to devices already built. Software PUFs instead obtain device-unique responses through software-only interfaces to existing components, with no post-fabrication change. The authors survey 37 software PUF works and compare them against the requirements of on-device model protection: boot-time versus runtime key derivation, and response latency. The paper was accepted at AsianHOST 2026.

The survey is organised by entropy source: SRAM PUFs, DRAM PUFs, circuit-intrinsic PUFs (processor-intrinsic and others), and flash and sensor PUFs. It closes with a cross-category comparison, four open challenges for edge AI deployment, and three research directions.

## Summary (ZH)

论文的出发点是：端侧 AI 需要在本地存放模型参数，而存放在非易失存储器中的密钥在攻击者能够物理接触设备时是脆弱的。物理不可克隆函数（PUF）利用每台设备的制造差异派生密钥，但传统 PUF 需要在设计阶段改动硬件，无法用于已制造的设备。软件 PUF 则通过软件接口读取现有部件的特性来获得设备唯一的响应，无需出厂后改动。作者综述了 37 项软件 PUF 工作，并按端侧模型保护的需求进行比较：启动时与运行时密钥派生，以及响应延迟。论文已被 AsianHOST 2026 接收。

综述按熵源组织：SRAM PUF、DRAM PUF、电路内在 PUF（处理器内在及其他）以及闪存与传感器 PUF，最后给出跨类别比较、边缘 AI 部署的四项开放挑战和三个研究方向。

## Key technical points (EN)

- **Boot versus runtime**: start-up SRAM PUFs suit key reconstruction at boot but normally cannot be queried at runtime. Latency-based DRAM PUFs respond within milliseconds and look most practical for runtime use, but depend on the platform allowing control of DRAM timing. Retention and rowhammer PUFs can take minutes and suit one-time provisioning.
- **Flash, sensor, circuit-intrinsic**: program-disturb flash PUFs can be queried without reboot but need repeated writes (latency and wear); sensor PUFs have limited challenge diversity and depend on physical motion, so the authors judge them unsuitable for model protection; circuit-intrinsic PUFs can have very low latency but none has been demonstrated on unmodified commercial processors.
- **Four open challenges**: exposing analog characteristics through software APIs only (edge SoCs often ship closed firmware); preserving enough entropy during response extraction (few works quantify residual entropy after error correction or helper-data leakage); runtime accessibility (resets and overclocking disrupt normal execution); and defining adversary models.
- **Three directions**: automated parameter calibration on commodity platforms across devices, conditions and aging; evaluation against modeling, reliability-based and side-channel attacks; complete prototypes with enrolment, response generation and key reconstruction on unmodified devices, reporting latency, service interruption and workload effects.
- **Nature of the evidence**: a literature survey; it reports no new measurements of its own.

## Key technical points (ZH)

- **启动时与运行时**：启动期 SRAM PUF 适合启动时重建密钥，但通常无法在运行时查询。基于延迟的 DRAM PUF 在毫秒内响应，看起来最适合运行时使用，但依赖平台是否允许控制 DRAM 时序。保持（retention）与 rowhammer PUF 可能需要数分钟，适合一次性配置。
- **闪存、传感器、电路内在**：编程干扰型闪存 PUF 无需重启即可查询，但需反复写入（延迟与磨损）；传感器 PUF 的挑战多样性有限且依赖物理运动，作者认为不适合模型保护；电路内在 PUF 延迟可以很低，但尚无在未改动的商用处理器上实现的演示。
- **四项开放挑战**：仅通过软件 API 暴露模拟特性（边缘 SoC 常带封闭固件）；响应提取中保留足够熵（很少工作量化纠错后的剩余熵或辅助数据泄露）；运行时可访问性（复位和超频会干扰正常执行）；以及攻击者模型的定义。
- **三个方向**：在通用平台上自动化参数校准，并跨设备、条件与老化阶段评估；针对建模攻击、基于可靠性的攻击和侧信道进行评估；在未改动设备上实现含注册、响应生成与密钥重建的完整原型，并报告延迟、服务中断和对工作负载的影响。
- **证据性质**：文献综述；未报告作者自己的新测量。

## Why it matters / what's new (EN)

For edge AI the entry records a security-side question that sits beside the efficiency work in this KB: how to bind a stored model to a specific device on hardware that is already deployed and cannot be redesigned. The survey's contribution is a latency and runtime-accessibility comparison across software PUF families, framed for model protection. Its own conclusion is that no surveyed approach is yet a complete, demonstrated solution on unmodified commodity devices. It is a v1 preprint and a survey, so novelty is modest.

## Why it matters / what's new (ZH)

对边缘 AI 而言，本条目记录了与本知识库中效率类工作并列的安全问题：在已部署且无法重新设计的硬件上，如何把存储的模型绑定到特定设备。综述的贡献是以模型保护为视角，对各类软件 PUF 的延迟和运行时可访问性做比较。其自身结论是：所综述的方法尚无一种在未改动的商用设备上得到完整演示。这是 v1 预印本且为综述，故新颖度有限。

## Images

None.
