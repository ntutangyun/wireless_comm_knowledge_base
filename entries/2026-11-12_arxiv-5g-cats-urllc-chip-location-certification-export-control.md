---
id: 2026-11-12_arxiv-5g-cats-urllc-chip-location-certification-export-control
date_published: 2026-11-10
date_found: 2026-11-12
type: academic-paper
technology: cellular
title_en: "5G CATS: 5G-Based Cryptographic Authorization Against Trafficking of Semiconductor Devices"
title_zh: "5G CATS：基于 5G 的半导体器件防走私密码学授权"
url: "https://arxiv.org/abs/2611.13437"
source_quality: full
topics: [5G, URLLC, round-trip-time, location-verification, challenge-response, ns-3, 5G-LENA, timing-advance]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Rajaraman, Ladd, Heinrich-Barna, Shakkottai and Rajendran (Texas A&M) address verifying where an AI accelerator operates after deployment, so that export controls can be enforced. Round-trip-time bounds from a trusted landmark are weakened by honest-reply jitter, which forces a loose timeout that lets an attacker relay traffic over fibre. 5G CATS pairs a co-packaged 5G radio, cryptographic engine and hardware interlock on the GPU package with 5G Ultra-Reliable Low-Latency Communication (URLLC) base stations, so the radio link terminates inside the package and bypasses the host software, PCIe fabric and baseboard management controller.

The design maps an authenticated challenge-response protocol onto 5G's slot structure, replaces permanent key erasure with short-lived execution leases, and specifies a cross-check of the chip's reported serving cell against the carrier's attachment records and the base station's timing-advance measurements. In ns-3 / 5G-LENA simulations of an unloaded cell, the URLLC-based profile narrows the 99.9th-percentile round-trip spread to 2.60 ms, more than ten times narrower than default 5G.

## Summary (ZH)

Rajaraman、Ladd、Heinrich-Barna、Shakkottai 与 Rajendran（德州农工大学）研究如何在部署后验证 AI 加速器的运行位置，以便执行出口管制。基于可信地标的往返时延（RTT）约束会受到诚实应答抖动的削弱，迫使超时门限放宽，攻击者便可借此经光纤中继流量。5G CATS 将 GPU 封装内的 5G 射频、密码引擎和硬件互锁，与 5G 超可靠低时延通信（URLLC）基站配对，使无线链路终结在封装内部，绕开宿主软件、PCIe 总线和基板管理控制器。

该设计把带认证的挑战-应答协议映射到 5G 的时隙结构上，以短期执行租约取代永久密钥擦除，并规定了将芯片上报的服务小区与运营商接入记录及基站定时提前量测量相互核对的流程。在对空载小区的 ns-3 / 5G-LENA 仿真中，基于 URLLC 的配置将第 99.9 百分位 RTT 抖动范围缩小到 2.60 ms，比默认 5G 窄十倍以上。

## Key technical points (EN)

- Why default 5G fails: the paper defines default 5G as the eMBB service most public cells run; honest round trips span about 27 to 57 ms because the MAC scheduler, not propagation, sets the delay, and every millisecond of slack hides roughly 100 km of fibre relay.
- Tail-aware timing on URLLC: a percentile threshold and a hideable-relay estimate replace the zero-queue closed-form delay model of the power-line-based PowerCATS scheme. Control-message traces attribute 2.27 ms of a 3.65 ms median to the uplink scheduling-request and grant handshake; the authors note that configured-grant uplink and mini-slots, which the simulator lacks, would remove it and that they have not measured the effect.
- Execution leases: a missed round suspends computation until the next passed round instead of destroying key material, and a sequential test over misses separates honest chips from relayed ones.
- Results: the tracer rejects every round of a fibre relay from 300 km, against 2,000 km for default 5G. Against a 3,000 km attacker, a tracer stays safe up to 1,410 km from the chip, against at most 619 km under PowerCATS's published model, while default 5G is never safe.
- Stated gaps: the carrier-attested landmark binding is specified but not yet simulated, and the evaluation is of an unloaded cell.

## Key technical points (ZH)

- 默认 5G 为何失效：论文将默认 5G 定义为多数公网小区运行的 eMBB 业务；诚实 RTT 约在 27 至 57 ms 之间，因为延迟由 MAC 调度器而非传播决定，而每多 1 ms 的余量就能掩盖约 100 km 的光纤中继。
- URLLC 上的尾部感知计时：以百分位门限和“可隐藏中继”估计取代基于电力线的 PowerCATS 方案所用的零排队闭式时延模型。控制消息轨迹显示，3.65 ms 的中位时延中有 2.27 ms 来自上行调度请求与授权握手；作者指出，配置授权上行和微时隙（仿真器不支持）可消除该握手，但尚未测量其效果。
- 执行租约：漏掉一轮只会暂停计算直至下一轮通过，而不会销毁密钥材料，并通过对漏轮次数的序贯检验区分诚实芯片与被中继的芯片。
- 结果：验证端可拒绝来自 300 km 光纤中继的每一轮，而默认 5G 对应 2,000 km。面对 3,000 km 的攻击者，验证端在距芯片最多 1,410 km 内保持安全，PowerCATS 已发表模型至多为 619 km，默认 5G 则始终不安全。
- 已说明的缺口：运营商认证的地标绑定已有规范但尚未仿真，且评估针对空载小区。

## Why it matters / what's new (EN)

The paper uses the 5G air interface itself, specifically URLLC scheduling and the carrier's own attachment and timing-advance records, as a timed, operator-anchored link for location certification, and quantifies how much tail latency the choice of 5G service profile adds or removes. The results are simulation-only on an unloaded cell, so loaded-cell behaviour and the unsimulated attestation step remain open.

## Why it matters / what's new (ZH)

本文把 5G 空口本身（具体为 URLLC 调度以及运营商自身的接入与定时提前量记录）用作带时间约束、以运营商为锚点的位置认证链路，并量化了所选 5G 业务配置对尾部时延的增减。结果仅来自空载小区的仿真，因此负载小区下的表现以及尚未仿真的认证步骤仍是开放问题。

## Images

None.
