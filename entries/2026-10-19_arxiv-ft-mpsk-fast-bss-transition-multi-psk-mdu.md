---
id: 2026-10-19_arxiv-ft-mpsk-fast-bss-transition-multi-psk-mdu
date_published: 2026-10-16
date_found: 2026-10-19
technology: wifi
type: academic-paper
title_en: "FT-mPSK: Fast BSS Transition for Multi-PSK Community Wi-Fi in MDU Networks (Fragmented RADIUS Key Delivery, Server-Derived PMK-R0/PMK-R1 Distribution through a Cloud Management API, and Lease-Driven Key Revocation)"
title_zh: "FT-mPSK：面向 MDU 网络多 PSK 社区 Wi-Fi 的快速 BSS 切换（分片 RADIUS 密钥下发、经云管理 API 的服务器派生 PMK-R0/PMK-R1 分发、租约驱动的密钥撤销）"
url: "https://arxiv.org/abs/2610.23116"
source_quality: full
topics: [802.11r, FT-PSK, multi-PSK, WPA2, RADIUS, PMK-R0, PMK-R1, MDU, key revocation]
topic_primary: roaming-mobility
topics_secondary: [security-privacy]
novelty_score: 3
---

## Summary (EN)

Kolisam Beevi and Reddy (arXiv 2610.23116, submitted 16 October 2026; 30 pages, 8 figures, 20 tables) consider multi-dwelling-unit properties that run one community-wide SSID on which every unit or resident has its own pre-shared key, each key mapped to its own VLAN. The paper uses "multi-PSK (mPSK)" as the generic name for vendor features called ePSK, iPSK, MPSK, DPSK and PPSK. When the keys are held in an external RADIUS server or a cloud controller, the AP cannot tell which key a client used and must ask the key server, which finds the key whose PMK reproduces the MIC of EAPOL-Key message 2. The paper states that enabling 802.11r FT-PSK (AKM 4) on such an SSID breaks this exchange in three ways: the server must identify the key from an FT handshake whose MIC depends on the FT key hierarchy; the messages no longer fit in a RADIUS vendor-specific attribute (the FT M2 grows to 239 to 290 octets and the key material the AP needs to 258 to 354 encrypted octets, against a 247-octet VSA value limit); and the AP a device roams to needs a PMK-R1 for that device, while all key material must disappear when the resident leaves.

The proposed FT-mPSK design has four parts. (1) A two-fragment Key-Bundle VSA format with a 4-octet fragment header carries the FT M2 in the Access-Request and the encrypted key bundle in the Access-Accept; the AP reassembles and authenticates the fragments before decryption. (2) The key server identifies the PSK, derives PMK-R0 and the serving AP's PMK-R1, returns PMK-R1 in the bundle, and delivers PMK-R0 and the resident binding to the primary AP through one POST /key-sync call to the cloud management system, sealed end-to-end to that AP (HPKE). (3) At roam time the target AP obtains PMK-R1 before answering the FT Authentication Request in one of two ways: Approach 1 pulls it from the primary AP found through the R0KH-ID in the request, Approach 2 requests it from the RADIUS server or cloud key service, which re-derives it for that AP. (4) When the property management system reports a move-out or lease end, the key server issues the same API call with a delete operation keyed by the resident's mPSK username, and every AP purges that username's PSK, PMK, PMK-R0 and PMK-R1 and disconnects the resident's devices. The per-PSK VLAN travels with PMK-R1, so micro-segmentation survives roams. Both an external-RADIUS method and a cloud-controller method are specified.

The paper gives size budgets (an install request of about 1 KB independent of mobility-domain size; update and delete requests of a few hundred octets), per-candidate identification cost (FT-PSK needs R0, R1 and PTK KDFs plus one AES-CMAC per candidate key, against four HMAC-SHA1 operations for plain WPA2-PSK; the R0/R1 steps cannot be pre-computed), a security analysis and an evaluation plan. The testbed is four commercial enterprise APs under a cloud management system in one mobility domain, an external RADIUS server, and a simulated property management system with 1,000 units. The results section records PASS for protocol test cases and an interoperability table (iPhone 17 Pro Max on iOS 26.6.2, Pixel 6 Pro on Android 15, a Windows 11 laptop, a MacBook Pro on macOS 26.4, and a non-FT Ring Video Doorbell 2); the results text says "Measured values to be added" for the system-measurement table (T_hold, T_fetch, T_revoke). The discussion section states the scope limits: WPA2-PSK FT-PSK on 2.4 and 5 GHz only, WPA3-SAE (required on 6 GHz) is outside scope because SAE exposes no MIC a server can test against candidate keys, FT needs a stable client MAC so a device that rotates its MAC performs a new initial association, and neither the fragment header (which maps onto RFC 6929) nor the key-sync API is standardised.

## Summary (ZH)

Kolisam Beevi 与 Reddy（arXiv 2610.23116，2026 年 10 月 16 日提交；30 页，8 幅图，20 张表）研究在整个社区使用同一 SSID、每个单元或住户拥有各自预共享密钥且每个密钥映射到独立 VLAN 的多住户（MDU）物业网络。论文以“多 PSK（mPSK）”泛指厂商称为 ePSK、iPSK、MPSK、DPSK、PPSK 的功能。当密钥保存在外部 RADIUS 服务器或云控制器中时，AP 无法判断客户端用了哪个密钥，必须询问密钥服务器，由其找出 PMK 能复现 EAPOL-Key 消息 2 的 MIC 的那个密钥。论文指出，在这类 SSID 上启用 802.11r FT-PSK（AKM 4）会在三方面破坏这一交互：服务器必须从 MIC 取决于 FT 密钥层级的 FT 握手中识别密钥；消息装不进 RADIUS 厂商特定属性（FT M2 增至 239 至 290 字节，AP 所需密钥材料加密后为 258 至 354 字节，而 VSA 值上限为 247 字节）；漫游目标 AP 需要该设备的 PMK-R1，而住户离开时所有密钥材料都必须消失。

所提出的 FT-mPSK 设计包含四部分。（1）两分片的 Key-Bundle VSA 格式，带 4 字节分片头，在 Access-Request 中承载 FT M2，在 Access-Accept 中承载加密的密钥包；AP 在解密前先重组并认证分片。（2）密钥服务器识别 PSK，派生 PMK-R0 和服务 AP 的 PMK-R1，在密钥包中返回 PMK-R1，并通过对云管理系统的一次 POST /key-sync 调用把 PMK-R0 和住户绑定关系下发给主 AP，端到端（HPKE）封装至该 AP。（3）漫游时目标 AP 在应答 FT 认证请求前以两种方式之一获得 PMK-R1：方式 1 根据请求中的 R0KH-ID 找到主 AP 并拉取；方式 2 向 RADIUS 服务器或云密钥服务请求，由其为该 AP 重新派生。（4）物业管理系统上报迁出或租约结束时，密钥服务器以住户 mPSK 用户名为键，发出同一 API 的删除操作，所有 AP 清除该用户名的 PSK、PMK、PMK-R0 和 PMK-R1 并断开住户设备。每 PSK 的 VLAN 随 PMK-R1 传递，因此微分段在漫游中得以保持。论文同时规定了外部 RADIUS 方法和云控制器方法。

论文给出了尺寸预算（安装请求约 1 KB，与移动域规模无关；更新与删除请求几百字节）、每个候选密钥的识别开销（FT-PSK 对每个候选需要 R0、R1、PTK 的 KDF 加一次 AES-CMAC，而普通 WPA2-PSK 为四次 HMAC-SHA1；R0/R1 步骤无法预计算）、安全分析与评估方案。测试床为一个移动域内由云管理系统管理的 4 台商用企业级 AP、一台外部 RADIUS 服务器，以及模拟 1,000 个单元的物业管理系统。结果部分对协议测试用例记录为 PASS，并给出互操作表（iOS 26.6.2 的 iPhone 17 Pro Max、Android 15 的 Pixel 6 Pro、Windows 11 笔记本、macOS 26.4 的 MacBook Pro，以及不支持 FT 的 Ring Video Doorbell 2）；结果部分就系统测量表（T_hold、T_fetch、T_revoke）注明“Measured values to be added”（实测值待补）。讨论部分说明范围限制：仅涵盖 2.4 与 5 GHz 的 WPA2-PSK FT-PSK；6 GHz 必需的 WPA3-SAE 不在范围内，因为 SAE 不暴露服务器可对候选密钥测试的 MIC；FT 要求客户端 MAC 稳定，轮换 MAC 的设备会重新进行初始关联；分片头（对应 RFC 6929）与 key-sync API 均未标准化。

## Key technical points (EN)

- Problem as stated: FT-PSK on an external-key-store mPSK SSID breaks key identification, exceeds the 247-octet RADIUS VSA limit (FT M2 239 to 290 octets; encrypted key material 258 to 354 octets), leaves the target AP without PMK-R1, and needs prompt key removal at lease end.
- Fragmented Key-Bundle VSA: two fragments with a 4-octet header, reassembled and authenticated by the AP before decryption.
- Server-derived hierarchy: key server derives PMK-R0 and PMK-R1; PMK-R0 reaches the primary AP through POST /key-sync, sealed with HPKE (install request about 1 KB).
- Roam-time PMK-R1: pulled from the primary AP via R0KH-ID (Approach 1) or re-derived by the key service (Approach 2, works with the primary AP offline).
- Lease-driven revocation: delete keyed by mPSK username purges PSK, PMK, PMK-R0 and PMK-R1 on every AP and disconnects the resident's devices.
- Reported status: protocol test cases and the four FT-capable clients show PASS (the non-FT Ring doorbell is N/A for the FT tests); the paper says highlighted cells are still to be completed, and the latency results are marked "Measured values to be added".

## Key technical points (ZH)

- 论文所述问题：在外部密钥库的 mPSK SSID 上启用 FT-PSK 会破坏密钥识别，超出 247 字节的 RADIUS VSA 上限（FT M2 为 239 至 290 字节；加密密钥材料为 258 至 354 字节），使目标 AP 缺少 PMK-R1，并要求租约结束时及时删除密钥。
- 分片 Key-Bundle VSA：两个分片，4 字节分片头，AP 解密前先重组并认证。
- 服务器派生层级：密钥服务器派生 PMK-R0 与 PMK-R1；PMK-R0 经 POST /key-sync 以 HPKE 封装下发给主 AP（安装请求约 1 KB）。
- 漫游时的 PMK-R1：经 R0KH-ID 从主 AP 拉取（方式 1），或由密钥服务重新派生（方式 2，主 AP 离线时也可工作）。
- 租约驱动撤销：以 mPSK 用户名为键的删除操作清除所有 AP 上的 PSK、PMK、PMK-R0、PMK-R1，并断开住户设备。
- 报告的状态：协议测试用例与四类支持 FT 的客户端为 PASS（不支持 FT 的 Ring 门铃在 FT 测试中为 N/A）；论文称高亮单元格仍待补充，时延结果标注“Measured values to be added”（实测值待补）。

## Why it matters / what's new (EN)

This paper is a deployment-side design for 802.11r with per-resident keys on a shared SSID, including the key-distribution and revocation plumbing. It is a design specification with a protocol-level validation: the paper itself marks its latency results as pending, so no roam-time numbers can be quoted, and the WPA3-SAE case it excludes is the one required on 6 GHz. The SAE-side counterpart in this KB is 2026-10-15_arxiv-ra-capd-radius-companion-psk-wpa3-multi-psk (WPA3-SAE in externally authenticated multi-PSK deployments).

## Why it matters / what's new (ZH)

本文是面向部署的设计：在共享 SSID 上为每个住户分配密钥的 802.11r 方案，包括密钥分发与撤销的整套机制。它是附带协议级验证的设计规范：论文自己将时延结果标为待补，因此无法引用漫游时延数字；其排除的 WPA3-SAE 情形正是 6 GHz 所必需的。本知识库中 SAE 侧的对应条目是 2026-10-15_arxiv-ra-capd-radius-companion-psk-wpa3-multi-psk（外部认证多 PSK 部署中的 WPA3-SAE）。
