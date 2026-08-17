---
id: 2026-08-17_xiaohong-ai-openharmony-riscv-nearlink-device
date_published: 2026-04-28
date_found: 2026-08-17
type: product
technology: nearlink
title_en: "XiaoHong AI: first fully open-source OpenHarmony × RISC-V × NearLink voice device (HiSilicon WS63, SLE 1.0)"
title_zh: "小鸿 AI：首个全开源 OpenHarmony × RISC-V × 星闪端侧语音设备（海思 WS63，SLE 1.0）"
url: "https://xiaohong.atomgit.com/"
source_quality: full
topics: [NearLink, SLE, OpenHarmony, RISC-V, open-source-hardware, voice-AI]
topic_primary: nearlink-sle
topics_secondary: [nearlink-slb]
novelty_score: 2
---

## Summary (EN)

XiaoHong AI (小鸿 AI, "one call wakes everything"), launched April 28, 2026 in Longgang, Shenzhen, is the first fully open-source end-side AI voice device built on the OpenHarmony × RISC-V × NearLink trinity — open hardware, open software, and domestically-standardised connectivity. Ingested as a deliberate backfill: this KB's NearLink device coverage has so far been exclusively Huawei first-party (phones, tablets, earbuds, car keys), and this is the first community/ecosystem-built NearLink product with verifiable release artifacts.

The device is a 47×47×20 mm desktop AI companion and smart-home voice hub: HiSilicon WS63 main SoC (32-bit RISC-V @ 240 MHz, 606 KB SRAM, 4 MB flash + 16 MB), a Chipintelli CI1302 offline speech-recognition NPU for far-field wake-up, a 1.54" 240×240 TFT, and tri-radio connectivity — Wi-Fi 6, BLE 5.2, and NearLink SLE 1.0. It runs a lightweight RISC-V OpenHarmony 6.0/6.1 distribution (build `ws63-a1.openharmony6.1.r0519`). The entire stack is public on AtomGit across 20+ repositories (xiaohong_samples under MIT, manifest under Apache-2.0, ws63flash flashing tool under GPL-3.0, plus vendor_atomgit / fbb_ws63_openharmony / device_soc_hisilicon board layers), with SLE UART transparent-transmission sample code included. Ecosystem partners listed include HiSilicon, Chipintelli, Rockchip, the NearLink Alliance, the OpenAtom Foundation, RISC-V International, and 11+ universities (Northeastern, Xi'an Jiaotong, Shenzhen Technology University among them); units are sold via Taobao. Note: the April launch predates the July 15 open-sourcing of the NearLink protocol stack — the device's SLE support comes from the HiSilicon WS63 SDK path (fbb_ws63), not from `communication_nearlink_service`.

## Summary (ZH)

小鸿 AI（"一声唤醒，万物响应"）于 2026 年 4 月 28 日在深圳龙岗发布，是首个基于 OpenHarmony × RISC-V × 星闪"自主三件套"（开源硬件 + 开源软件 + 自主标准连接）的全开源端侧 AI 语音设备。本条目为有意补录：本知识库的星闪设备条目此前均为华为第一方产品（手机、平板、耳机、车钥匙），这是第一个具备可验证发布证据的社区/生态共建星闪产品。

设备为 47×47×20 mm 桌面 AI 伴侣兼智能家居语音中枢：海思 WS63 主控（32 位 RISC-V，主频 240 MHz，606 KB SRAM，4 MB Flash + 16 MB），启英泰伦 CI1302 离线语音识别 NPU 负责远场唤醒，1.54 英寸 240×240 TFT 屏，三无线连接——Wi-Fi 6、BLE 5.2 与星闪 SLE 1.0。系统为轻量级 RISC-V OpenHarmony 6.0/6.1 发行版（构建号 `ws63-a1.openharmony6.1.r0519`）。全栈在 AtomGit 以 20+ 代码仓公开（xiaohong_samples 采用 MIT、manifest 采用 Apache-2.0、烧录工具 ws63flash 采用 GPL-3.0，另有 vendor_atomgit / fbb_ws63_openharmony / device_soc_hisilicon 板级仓），并附 SLE UART 透传示例代码。生态伙伴包括海思、启英泰伦、瑞芯微、星闪联盟、开放原子开源基金会、RISC-V International 及 11 所以上高校（东北大学、西安交通大学、深圳技术大学等）；整机在淘宝有售。注意：4 月发布早于 7 月 15 日星闪协议栈开源——设备的 SLE 支持来自海思 WS63 SDK 路径（fbb_ws63），而非 `communication_nearlink_service`。

## Key technical points (EN)

- Launch: 2026-04-28, Longgang, Shenzhen; sold via Taobao — a shipping product, not a demo.
- SoC: HiSilicon WS63, 32-bit RISC-V @ 240 MHz, 606 KB SRAM, 4 MB flash + 16 MB; co-processor Chipintelli CI1302 offline-ASR NPU (far-field wake, continuous dialogue).
- Radios: Wi-Fi 6 (802.11ax) + BLE 5.2 + NearLink SLE 1.0; SLE UART transparent-transmission sample code shipped in the open samples repo.
- OS: lightweight RISC-V OpenHarmony 6.0/6.1 distribution, build `ws63-a1.openharmony6.1.r0519`.
- Open source: 20+ AtomGit repos; licences MIT (samples), Apache-2.0 (manifest), GPL-3.0 (ws63flash); full board bring-up layers (device_soc_hisilicon, fbb_ws63_openharmony) public.
- Ecosystem: HiSilicon, Chipintelli, Rockchip, NearLink Alliance, OpenAtom Foundation, RISC-V International + 11+ universities.
- SLE support via the WS63 vendor SDK, not the July-2026 open-sourced `communication_nearlink_service` stack (launch predates it).

## Key technical points (ZH)

- 发布：2026-04-28，深圳龙岗；淘宝有售——是量产商品而非演示样机。
- 主控：海思 WS63，32 位 RISC-V @ 240 MHz，606 KB SRAM，4 MB Flash + 16 MB；协处理器为启英泰伦 CI1302 离线语音识别 NPU（远场唤醒、连续对话）。
- 无线：Wi-Fi 6（802.11ax）+ BLE 5.2 + 星闪 SLE 1.0；开源示例仓内含 SLE UART 透传示例代码。
- 系统：轻量级 RISC-V OpenHarmony 6.0/6.1 发行版，构建号 `ws63-a1.openharmony6.1.r0519`。
- 开源：AtomGit 上 20+ 代码仓；许可证含 MIT（示例）、Apache-2.0（manifest）、GPL-3.0（ws63flash）；完整板级适配层（device_soc_hisilicon、fbb_ws63_openharmony）公开。
- 生态：海思、启英泰伦、瑞芯微、星闪联盟、开放原子开源基金会、RISC-V International 及 11 所以上高校。
- SLE 支持来自 WS63 厂商 SDK，而非 2026 年 7 月开源的 `communication_nearlink_service` 协议栈（发布早于后者）。

## Why it matters / what's new (EN)

Every NearLink device previously recorded in this KB is a Huawei first-party product; the open question tracked since the July protocol-stack open-sourcing has been whether anyone *outside* Huawei would actually build with NearLink. XiaoHong AI is the first verifiable answer: a community/university-ecosystem device with a dated launch, public repos, permissive licences, and retail availability — and it pairs NearLink with the two other pillars of China's indigenous-stack push (OpenHarmony and RISC-V), which is precisely the adoption channel the open-sourcing was meant to unlock. The caveat is equally informative: the device does not consume the newly open-sourced `communication_nearlink_service` stack but the HiSilicon vendor SDK, so the "third-party port of the open stack" milestone remains unfilled — this entry sharpens what that future signal would look like (a non-HiSilicon SoC, or this device family migrating to the open stack). As a WS63-based reference design with full board layers public, it also lowers the barrier for the university/maker channel to produce more NearLink endpoints — the peripheral-led volume path that the April 2026 EE Times Asia analysis identified as NearLink's necessary next phase.

## Why it matters / what's new (ZH)

本知识库此前收录的星闪设备全部为华为第一方产品；自 7 月协议栈开源以来一直跟踪的开放问题是：华为之外是否真的有人用星闪做产品。小鸿 AI 是第一个可验证的答案：一个具有明确发布日期、公开代码仓、宽松许可证并已零售的社区/高校生态设备——而且它把星闪与中国自主技术栈的另外两大支柱（OpenHarmony 与 RISC-V）组合在一起，这正是协议栈开源想要打通的采用通道。其局限同样有信息量：设备并未使用新开源的 `communication_nearlink_service` 协议栈，而是海思厂商 SDK——因此"第三方移植开源协议栈"这一里程碑仍然空缺，本条目反而使该未来信号的判据更清晰（出现非海思 SoC 的移植，或本设备家族迁移到开源栈）。作为板级适配完全公开的 WS63 参考设计，它也降低了高校/创客渠道产出更多星闪终端的门槛——这正是 2026 年 4 月 EE Times Asia 分析所指出的、星闪走向规模化所必需的"外设放量"路径。

## Images

![XiaoHong AI open-source NearLink voice device | 小鸿 AI 全开源星闪语音设备](https://xiaohong.atomgit.com/assets/products/xiaohong-ai.png)
