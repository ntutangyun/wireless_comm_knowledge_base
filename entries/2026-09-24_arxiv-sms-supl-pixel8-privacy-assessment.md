---
id: 2026-09-24_arxiv-sms-supl-pixel8-privacy-assessment
date_published: 2026-09-19
date_found: 2026-09-24
type: academic-paper
technology: cellular
title_en: "SMS-delivered network-initiated SUPL on Pixel 8: a privacy assessment"
title_zh: "Pixel 8 上短信触发的网络发起 SUPL 隐私评估"
url: "https://arxiv.org/abs/2609.22900"
source_quality: full
topics: [SUPL, OMA, GNSS-privacy, SUCI, location-privacy]
topic_primary: cellular-security
novelty_score: 3
---

## Summary (EN)

This paper investigates whether an unsolicited, SMS-delivered SUPL_INIT message can be abused to silently exfiltrate a handset's location and subscriber identity to an attacker-controlled server. SUPL (Secure User Plane Location) is an OMA standard for delivering assisted-GPS positioning data over IP, and SUPL_INIT is the network-initiated trigger that unilaterally starts a location session, instructing the handset to determine its position and report it — together with an identifier such as its IMSI — to a server named in the message. SUPL_INIT can arrive via OMA/WAP Push, SMS, UDP/IP, or SIP Push, and WAP-Push-over-SMS is mandatory for GSM/WCDMA networks. The concern is that SUPL_INIT's default authentication fallback ("Null protection") provides no end-to-end integrity check when no prior key-establishment session exists, in principle letting anyone who can send an SMS impersonate the network.

The author (Douglas Leith) tested a rooted Google Pixel 8 ("shiba") with a Samsung Exynos 5300 modem and a Broadcom BCM4776 GNSS front-end, running Android 14. A minimal test app sent binary/port SMS to port 2948 carrying a standards-conformant, ASN.1-encoded SUPL_INIT (built with Python's asn1tools against the OMA schema) with posMethod set to agpsSETassisted, notificationType set to privacyOverride, and the server address (sLPAddress) pointed at an attacker-controlled IP. The investigation combined static analysis (Ghidra decompilation of Broadcom's proprietary gpsd binary) with dynamic analysis (Frida instrumentation of the running gpsd process) to trace exactly what the handset does when such a message arrives.

The paper concludes there is no privacy issue on this device: the handset never sends location data to an attacker-chosen server as a result of an unsolicited SMS-delivered SUPL_INIT. Three checks and behaviours in gpsd determine the outcome: the message is unconditionally dropped by the permission gate unless the handset is already in an active emergency call (a state the attacker cannot manufacture over SMS); an emergency-APN allowlist check exists in the code but is unconfigured (empty) on this device, so it plays no protective role in practice; and for a non-emergency SUPL_INIT — the only kind an SMS attacker can usefully send — the packet's server address is ignored, with the destination always the device's own configured server (supl.google.com) or a hostname derived from the SIM's own identity; only an emergency-flagged SUPL_INIT during a genuine emergency call can use the address the packet itself supplies.

## Summary (ZH)

本文研究一个未经请求的、经短信投递的 SUPL_INIT 消息是否可能被滥用，从而将手机的位置信息和用户身份秘密泄露给攻击者控制的服务器。SUPL（Secure User Plane Location，安全用户面定位）是 OMA 制定的、通过 IP 传送辅助 GPS 定位数据的标准；SUPL_INIT 是网络发起的触发消息，单方面启动一次定位会话，指示手机确定自身位置并将其（连同 IMSI 等标识符）上报给消息中指定的服务器。SUPL_INIT 可通过 OMA/WAP Push、短信、UDP/IP 或 SIP Push 四种方式送达，其中"WAP-Push-over-SMS"在 GSM/WCDMA 网络中是强制支持的。令人担忧之处在于：当此前不存在密钥协商会话时，SUPL_INIT 默认回退到"Null protection"（无保护），不做任何端到端完整性校验，理论上任何能发送短信的人都可以冒充网络。

作者（Douglas Leith）在一台已 root 的 Google Pixel 8（"shiba"）上进行测试，该机搭载三星 Exynos 5300 基带和博通 BCM4776 GNSS 射频前端，运行 Android 14。作者编写了一个精简测试应用，向端口 2948 发送二进制/端口短信，其中携带按照 OMA ASN.1 规范用 Python asn1tools 构造的、符合标准格式的 SUPL_INIT 消息：posMethod 设为 agpsSETassisted，notificationType 设为 privacyOverride，服务器地址（sLPAddress）指向攻击者控制的 IP。研究结合静态分析（用 Ghidra 反编译博通私有的 gpsd 二进制文件）与动态分析（用 Frida 对运行中的 gpsd 进程进行插桩），完整追踪手机收到此类消息后的实际处理流程。

论文得出结论：在该设备上不存在隐私问题——未经请求的、经短信投递的 SUPL_INIT 不会导致手机把位置数据发送给攻击者指定的服务器。gpsd 中的三项检查与行为决定了结果：除非手机已处于真实的紧急呼叫状态（攻击者无法通过短信伪造这一状态），否则权限门会无条件丢弃该消息；代码中虽存在紧急 APN 白名单检查，但该设备上此白名单为空（未配置），因而在实践中不起防护作用；而对于非紧急 SUPL_INIT——这是短信攻击者唯一能够有效发送的类型——报文中的服务器地址会被忽略，连接目的地始终是设备自身配置的服务器（supl.google.com）或由 SIM 卡自身身份派生出的主机名；只有在真实紧急呼叫期间、带有紧急标志的 SUPL_INIT，才能够使用报文自带的地址。

## Key technical points (EN)

- SUPL_INIT weak default authentication ("Null protection") is a specification-level property, not unique to this device — the protections found here are implementation-level (Android/vendor gpsd), not a change to the SUPL standard itself.
- Permission gate `HasPermissionSuplNi` depends only on `isInEmergencyState` and a config flag (`SuplIgnoreNfwLocPolicy`, false on this device), not on anything in the SUPL_INIT packet itself.
- Test packet was confirmed to reach the vendor GNSS daemon as an unsolicited RIL message (`RILC_UNSOL_GPS_SUPL_NI_MESSAGE`, msgId 4011), proving delivery worked — the block happens downstream, not at the SMS layer.
- Even with the permission gate bypassed, `autoConfigSlp` resolves the connection target to the handset's own configured `supl.google.com:7275`, never the attacker's `sLPAddress`.
- The handset independently issues its own background assisted-GPS requests to `supl.google.com`, unrelated to any network-initiated trigger.
- Method combined Ghidra static decompilation with Frida dynamic instrumentation on a rooted device — a reusable methodology for auditing other handset/modem/GNSS-chip combinations, which the author notes have not all been tested.

## Key technical points (ZH)

- SUPL_INIT 默认弱认证（"Null protection"）是协议规范层面的特性，并非该设备独有——本文发现的防护措施是实现层面（Android/厂商 gpsd）的，而非对 SUPL 标准本身的修改。
- 权限门 `HasPermissionSuplNi` 的判定只依赖 `isInEmergencyState` 和一个配置标志（`SuplIgnoreNfwLocPolicy`，该设备上为 false），而与 SUPL_INIT 报文自身携带的任何内容无关。
- 测试报文被确认以未经请求的 RIL 消息形式（`RILC_UNSOL_GPS_SUPL_NI_MESSAGE`，msgId 4011）到达厂商 GNSS 守护进程，证明短信投递环节本身是成功的——拦截发生在下游，而非短信层。
- 即便强行绕过权限门，`autoConfigSlp` 解析出的连接目标仍是手机自身配置的 `supl.google.com:7275`，而非攻击者提供的 `sLPAddress`。
- 手机会独立地向 `supl.google.com` 发起自己的后台辅助 GPS 请求，与任何网络发起的触发消息无关。
- 该方法将 Ghidra 静态反编译与 Frida 动态插桩相结合，在已 root 设备上形成了一套可复用的审计方法论——作者也指出尚未覆盖其他终端/基带/GNSS 芯片组合。

## Why it matters / what's new (EN)

This is the first entry in this KB to examine the SMS-delivered SUPL_INIT attack surface directly (the KB's existing eSIM/RSP-provisioning entries, e.g. ZK-eSIM 2026-09-15, address a different pre-AKA provisioning protocol, not OMA SUPL positioning). The result is a negative finding — reported here transparently rather than omitted — but a well-evidenced one: it traces the exact code paths (permission gate, APN allowlist, destination resolution) that neutralize the theoretical weakness in the SUPL_INIT authentication model on this specific device/chipset combination, rather than asserting safety from the specification text alone. The paper is explicit that its conclusion is scoped to the one tested device (Pixel 8, Exynos 5300 modem, Broadcom GNSS); it does not claim the same protections exist on other modem/GNSS vendor combinations.

## Why it matters / what's new (ZH)

这是本知识库首篇直接考察"短信投递 SUPL_INIT"这一攻击面的条目（库中已有的 eSIM/RSP 配置相关条目，如 2026-09-15 的 ZK-eSIM，针对的是不同的、AKA 之前的配置协议，而非 OMA SUPL 定位协议）。本文得出的是一个"阴性"结论——作者选择透明地报告而非略去——但论证扎实：它完整追踪了权限门、APN 白名单、目的地解析等具体代码路径，说明在这一特定设备/芯片组合上，SUPL_INIT 认证模型的理论弱点是如何被实现层面的防护所化解的，而非仅凭规范文本就断言安全。论文也明确指出其结论仅限于所测试的这一台设备（Pixel 8、Exynos 5300 基带、博通 GNSS），并未声称其他基带/GNSS 厂商组合具备同样的防护。
