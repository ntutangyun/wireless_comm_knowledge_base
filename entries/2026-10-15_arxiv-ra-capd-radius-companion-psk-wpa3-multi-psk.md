---
id: 2026-10-15_arxiv-ra-capd-radius-companion-psk-wpa3-multi-psk
date_published: 2026-10-10
date_found: 2026-10-15
technology: wifi
type: academic-paper
title_en: "RADIUS-Assisted Companion PSK Discovery: Enabling WPA3-SAE in Externally Authenticated Multi-PSK (ePSK / MPSK / DPSK / iPSK / PPSK) Deployments"
title_zh: "RADIUS 辅助的伴随 PSK 发现：在外部认证的多 PSK（ePSK / MPSK / DPSK / iPSK / PPSK）部署中启用 WPA3-SAE"
url: "https://arxiv.org/abs/2610.14410"
source_quality: full
topics: [WPA3, SAE, multi-PSK, RADIUS, 802.11v, BTM, MDU]
topic_primary: security-privacy
topics_secondary: [roaming-mobility]
novelty_score: 3
---

## Summary (EN)

The paper (Kolisam Beevi, Reddy, Mahapatra; arXiv 2610.14410, first submitted 10 October 2026) addresses multi-dwelling-unit, student-housing and hospitality Wi-Fi where each resident has a unique pre-shared key (PSK) mapped to a VLAN and the keys are held in an external RADIUS server or cloud database rather than on the access point (AP). The authors' earlier scheme, Companion-BSSID-Assisted PSK Discovery (CAPD), learns the client's PSK on a WPA2-only companion BSSID by testing the MIC of EAPOL-Key message 2 against every key, then steers the client with IEEE 802.11v BSS Transition Management (BTM) to a hidden WPA2/WPA3 primary BSSID of the same SSID. The paper states that CAPD assumes the AP itself holds all candidate PSKs, and this paper removes that assumption.

The proposed RADIUS-Assisted CAPD (RA-CAPD) has the AP forward the ANonce, the raw EAPOL-Key message 2 (SNonce, MIC, RSNE), the SSID, the client MAC, the BSSID and the AP MAC to the external server in RADIUS vendor-specific attributes. The server validates the MIC against all provisioned keys and returns the matching PSK encrypted under the RADIUS shared secret (or a per-AP key for cloud databases), together with the unit, room or user identity and the VLAN. The AP binds the client to that PSK and identity, synchronises the binding to every AP in the domain, and moves the client to the configured profile: 802.11v-capable clients by a BTM request, other clients by disconnection and reconnection. On that profile SAE-capable clients run WPA3-SAE and WPA2-only clients run WPA2-PSK, both with the learned key and no further search, so the companion BSSID is used only for onboarding.

The paper compares RA-CAPD with AP-held key lists, MAC-based PSK lookup (which it says fails under MAC randomisation), server-side MIC validation returning only the VLAN (after which the AP cannot run SAE), SAE password identifiers (which it says need client-side configuration that mainstream operating systems do not expose) and WPA3-Enterprise. Its cost analysis puts the server search at up to N PRF/HMAC evaluations per onboarding, with the PBKDF2 PMK table pre-computed per key and SSID, and defines the delay inserted between message 2 and message 3 as RTT plus search plus decryption time. The security analysis covers the returned-PSK confidentiality (it recommends RadSec or RADIUS/DTLS and AES-256-GCM sealing), Blast-RADIUS (Message-Authenticator required in every request and response), key exposure on compromised APs, and the WPA2 onboarding handshake's offline-dictionary exposure.

The laboratory test used four Cambium X7-35X APs, an external RADIUS server extended with the MIC-validation module and a cloud database endpoint, provisioned with 1,000 resident PSKs while the APs held none. The encrypted keys (114 octets) fit in a single VSA. The interoperability table lists PASS for the applicable test cases on iOS, Android, macOS, Windows 11 and a WPA2-only IoT device (Ring Video Doorbell 2); the table's own caption notes that highlighted cells are still to be completed with measured results.

## Summary (ZH)

论文（Kolisam Beevi、Reddy、Mahapatra；arXiv 2610.14410，2026 年 10 月 10 日首次提交）面向多住户公寓、学生公寓和酒店 Wi-Fi：每位住户持有唯一的预共享密钥（PSK）并映射到一个 VLAN，这些密钥存放在外部 RADIUS 服务器或云数据库中，而不在接入点（AP）上。作者此前提出的方案 Companion-BSSID-Assisted PSK Discovery（CAPD）在仅支持 WPA2 的伴随 BSSID 上，用 EAPOL-Key 第 2 条消息的 MIC 逐个测试所有密钥来获知客户端的 PSK，再通过 IEEE 802.11v BSS 转换管理（BTM）把客户端引导到同一 SSID 下隐藏的 WPA2/WPA3 主 BSSID。论文指出 CAPD 假设 AP 自己持有全部候选 PSK，本文取消了这一假设。

所提出的 RADIUS 辅助 CAPD（RA-CAPD）由 AP 把 ANonce、原始 EAPOL-Key 第 2 条消息（SNonce、MIC、RSNE）、SSID、客户端 MAC、BSSID 和 AP MAC 放入 RADIUS 厂商特定属性转发给外部服务器。服务器对所有已配置密钥验证 MIC，把匹配的 PSK 用 RADIUS 共享密钥（云数据库场景为每 AP 独立密钥）加密后返回，同时返回单元、房间或用户身份以及 VLAN。AP 将客户端与该 PSK 和身份绑定，并把绑定同步到域内所有 AP，再把客户端移到已配置的配置文件：支持 802.11v 的客户端通过 BTM 请求，其他客户端通过断开重连。在该配置文件上，支持 SAE 的客户端运行 WPA3-SAE，仅支持 WPA2 的客户端运行 WPA2-PSK，均使用已获知的密钥且无需再次搜索，因此伴随 BSSID 仅用于入网。

论文把 RA-CAPD 与 AP 持有密钥列表、基于 MAC 的 PSK 查找（论文称其在 MAC 随机化下失效）、服务器侧 MIC 验证只返回 VLAN（此后 AP 无法运行 SAE）、SAE 密码标识符（论文称其需要主流操作系统并未提供的客户端配置）以及 WPA3-Enterprise 做了比较。成本分析指出每次入网服务器最多进行 N 次 PRF/HMAC 计算，PBKDF2 的 PMK 表按密钥和 SSID 预先计算，并把第 2 与第 3 条消息之间插入的时延定义为 RTT、搜索时间与解密时间之和。安全分析涵盖返回 PSK 的机密性（建议使用 RadSec 或 RADIUS/DTLS 以及 AES-256-GCM 封装）、Blast-RADIUS（每个请求与响应都必须带 Message-Authenticator）、AP 被攻破时的密钥暴露，以及 WPA2 入网握手的离线字典攻击风险。

实验室测试使用 4 台 Cambium X7-35X AP、一台扩展了 MIC 验证模块的外部 RADIUS 服务器和一个云数据库端点，配置了 1,000 个住户 PSK，而 AP 上不存放任何 PSK。加密后的密钥（114 字节）可放入单个 VSA。互操作性表对 iOS、Android、macOS、Windows 11 以及仅支持 WPA2 的物联网设备（Ring Video Doorbell 2），在适用的测试用例上列为 PASS；表注自身说明高亮单元格仍待填入实测结果。

## Key technical points (EN)

- RA-CAPD moves PSK discovery from the AP to the RADIUS server or cloud database; the AP exports ANonce, raw EAPOL-Key message 2, SSID, client MAC, BSSID and AP MAC in vendor-specific attributes.
- The server returns the matched PSK encrypted under the RADIUS shared secret (or a per-AP key), plus unit/room/user identity and VLAN; the AP needs the PSK itself because it must run SAE.
- The AP synchronises the learned binding to all APs in the domain; 802.11v-capable clients are steered by BTM, others are disconnected to reconnect to the configured profile.
- Server cost is up to N PRF-384 and HMAC-SHA1-128 evaluations per onboarding with a pre-computed PBKDF2 PMK table; the paper recommends a 1 s AP RADIUS timeout with one retry.
- Security measures named in the paper: Message-Authenticator on every request and response (Blast-RADIUS), RadSec or RADIUS/DTLS, AES-256-GCM key sealing, CoA/Disconnect revocation; the WPA2 onboarding handshake keeps an offline-dictionary exposure.
- Lab setup: 4 Cambium X7-35X APs, 1,000 provisioned PSKs, no PSKs on the APs; limitations listed include dependence on the server path for first onboarding and linear search cost at very large N.

## Key technical points (ZH)

- RA-CAPD 把 PSK 发现从 AP 移到 RADIUS 服务器或云数据库；AP 通过厂商特定属性导出 ANonce、原始 EAPOL-Key 第 2 条消息、SSID、客户端 MAC、BSSID 和 AP MAC。
- 服务器返回用 RADIUS 共享密钥（或每 AP 密钥）加密的匹配 PSK，以及单元/房间/用户身份和 VLAN；由于必须运行 SAE，AP 自身需要得到 PSK。
- AP 把获知的绑定同步到域内所有 AP；支持 802.11v 的客户端通过 BTM 引导，其他客户端被断开后重连到已配置的配置文件。
- 服务器每次入网最多进行 N 次 PRF-384 和 HMAC-SHA1-128 计算，PBKDF2 的 PMK 表预先计算；论文建议 AP 的 RADIUS 超时为 1 秒并重试一次。
- 论文提到的安全措施：每个请求与响应都带 Message-Authenticator（应对 Blast-RADIUS）、RadSec 或 RADIUS/DTLS、AES-256-GCM 密钥封装、CoA/Disconnect 撤销；WPA2 入网握手仍存在离线字典攻击风险。
- 实验室设置：4 台 Cambium X7-35X AP，配置 1,000 个 PSK，AP 上不存放 PSK；列出的局限包括首次入网依赖服务器路径，以及在超大 N 下搜索成本呈线性。

## Why it matters / what's new (EN)

This entry adds a key-store variant to a multi-PSK WPA3 approach the authors describe as their earlier work (CAPD); neither paper is otherwise in this KB. It is a design paper tested in a single laboratory (the authors thank Cambium Networks for the laboratory facilities); the paper itself notes that parts of its results table remain to be filled in, and the authors name standardisation of the attribute dictionary and extension to Wi-Fi 7 Multi-Link Operation as future work. It sits in the security-privacy bin alongside the KB's other Wi-Fi authentication entries (for example 2026-10-12_arxiv-pld-eap-teap-wifi-auth).

## Why it matters / what's new (ZH)

本条目为作者称之为早期工作（CAPD）的多 PSK WPA3 方案增加了密钥存放位置的变体；这两篇论文此前均未收录于本知识库。这是一篇设计类论文，仅在单一实验室测试（作者致谢 Cambium Networks 提供实验室设施）；论文自身说明结果表的部分内容尚待补全，作者将属性字典的标准化和向 Wi-Fi 7 多链路操作的扩展列为未来工作。它归入安全与隐私主题，与本知识库中其他 Wi-Fi 认证条目（例如 2026-10-12_arxiv-pld-eap-teap-wifi-auth）并列。
