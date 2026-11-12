---
id: 2026-11-12_ieee-mentor-tgbp-wiliot-amp-inventory-privacy-psk-keyid-dcn-2237
date_published: 2026-11-10
date_found: 2026-11-12
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbp: Inventory Privacy and Security Considerations — PSK, Key ID and AES-CMAC PTK for AMP active Tx STA inventory (DCN 11-26-2237r1, Wiliot)"
title_zh: "IEEE 802.11 TGbp：盘点（inventory）的隐私与安全考量——面向 AMP 有源发射 STA 盘点的 PSK、Key ID 与 AES-CMAC PTK（DCN 11-26-2237r1，Wiliot）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2237&is_year=2026"
source_quality: full
topics: [802.11bp, AMP, ambient IoT, inventory, privacy, PSK, AES-CMAC]
topic_primary: amp-iot
topics_secondary: [security-privacy]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2237r1, "Inventory privacy and security considerations" (Solomon Trainin, Wiliot; TGbp; 22 slides; r1 uploaded 10 November 2026, title-slide date 2026-11-4), proposes a mechanism to protect the confidentiality of the AMP inventory procedure. It first defines three identifiers (ID, MAC address, UII) and states how a persistent address could let a nearby Wi-Fi observer track a device over time, infer movement, associate it with a person and build behavioural profiles. Its requirements are: when communicating with an AMP active Tx non-AP STA, do not reveal persistent addresses; if a frame contains one and secure communication is supported, encrypt that part; and prevent the generation of persistent templates.

The deck then describes the inventory option it considers suitable (random access by an AMP AP that may have no prior knowledge of the STAs, unencrypted trigger, response protected as above) and lists device constraints it takes as given: limited RAM and NVM because of ambient-RF energy and small form factor, limited computational complexity and state, and simultaneous commissioning of multiple devices without human intervention. On that basis it discusses concerns with WPA2-enterprise (state storage, public-key computation, credential provisioning), prefers a PSK basis with multiple PSKs per STA, and notes that a four-way-handshake-style state-based solution needs storing much state; it proposes AES-CMAC instead of HMAC-SHA to generate the PTK, stating that reusing AES avoids device size increases.

The proposed three-step exchange is: (1) the AMP Trigger (RA broadcast, random-access UAP, Requested Protection Type set, ANonce); the STA generates an SNonce and a random number (for example RN16) used as a short ID, derives the PTK from the PSK, ANonce, SNonce, short ID and AMP AP ID, encrypts the confidential information and computes a MIC; (2) the AMP Response (TA = short ID, plaintext Key ID and SNonce, encrypted confidential information, MIC, CRC); the AP, if the Key ID is in its database, derives the PTK, decrypts, and checks the MIC, otherwise its SME asks higher layers for the key; (3) an AMP Ack (RA = short ID). One PSK may be shared by many STAs, so the number of keys stored at the AP does not scale with the number of tags, and privacy is kept because the Key ID (24-bit range) is not the STA ID. A slide on a unified CRC and MIC states that it would make the AP compute for every errored packet and recommends a separate CRC field protecting the MIC. The deck ends with five straw polls: SP1, sent frames do not reveal persistent addresses if secure communication is enabled; SP2, PSK is used as the shared secret key to create the PTK; SP3, the same secret key may be used by multiple AMP non-AP STAs; SP4, a Key ID identifies the secret key(s) assigned to an AMP non-AP STA; SP5, the UL AMP frame contains a separate CRC field that protects the MIC if present. The AES-CMAC point appears on the recommended-changes slide but not as a straw poll.

## Summary (ZH)

DCN 11-26-2237r1《Inventory privacy and security considerations》（Solomon Trainin，Wiliot；TGbp；共 22 页；r1 于 2026 年 11 月 10 日上传，标题页日期 2026-11-4）提出一种保护 AMP 盘点（inventory）流程保密性的机制。文稿首先界定三类标识（ID、MAC 地址、UII），并说明持久地址如何使附近的 Wi-Fi 监听者得以长期跟踪设备、推断移动轨迹、将设备与个人关联并建立行为画像。其要求是：与 AMP 有源发射非 AP STA 通信时不暴露持久地址；若帧中含持久地址且支持安全通信，则加密该部分；并防止生成持久模板。

文稿随后描述其认为合适的盘点方式（AMP AP 对可能事先并不知道的 STA 进行随机接入，触发帧不加密，响应按上述要求保护），并列出其视为前提的设备约束：因环境射频供能与小型化而 RAM 与 NVM 有限，计算复杂度与状态存储能力有限，以及需要在无人工干预下同时调试多个设备。据此，文稿讨论了 WPA2-企业版的问题（状态存储、公钥计算、凭据配置），倾向以 PSK 为基础并让单个 STA 支持多个 PSK，指出四次握手式的有状态方案需要存储大量状态；提议用 AES-CMAC 代替 HMAC-SHA 生成 PTK，称复用 AES 可避免增加器件面积。

提议的三步交互为：(1) AMP Trigger（RA 为广播、随机接入 UAP、设置 Requested Protection Type、携带 ANonce）；STA 生成 SNonce 与用作短 ID 的随机数（例如 RN16），用 PSK、ANonce、SNonce、短 ID 与 AMP AP ID 推导 PTK，加密机密信息并计算 MIC；(2) AMP Response（TA = 短 ID，明文 Key ID 与 SNonce，加密的机密信息，MIC，CRC）；若 Key ID 在 AP 的数据库中，AP 推导 PTK、解密并校验 MIC，否则由其 SME 向上层索取密钥；(3) AMP Ack（RA = 短 ID）。同一 PSK 可由多个 STA 共用，因此 AP 侧存储的密钥数量不随标签数量增长；Key ID（24 位范围）不等于 STA ID，因此隐私得以保持。关于统一 CRC 与 MIC 的一页指出，统一会使 AP 对每个出错分组都要做计算，并建议使用单独的 CRC 字段保护 MIC。文稿末尾为五个 straw poll：SP1，启用安全通信时所发送的帧不暴露持久地址；SP2，以 PSK 作为生成 PTK 的共享密钥；SP3，同一密钥可由多个 AMP 非 AP STA 使用；SP4，由 Key ID 标识分配给 AMP 非 AP STA 的密钥；SP5，UL AMP 帧含单独的 CRC 字段，用于保护 MIC（若存在）。AES-CMAC 一点出现在“推荐修改”页，但不属于 straw poll。

## Key technical points (EN)

- Stated requirements: no persistent address (ID, MAC address, UII) revealed to an AMP active Tx non-AP STA exchange; encrypt address-bearing frame portions when secure communication is supported; no persistent templates.
- Inventory option considered: random access from an AMP AP without prior knowledge of STAs; trigger unencrypted; successful response judged by CRC.
- Device constraints taken as given: small RAM and NVM, limited computation and state, multi-device commissioning without human intervention.
- Key material: PSK basis with multiple PSKs per STA identified by a Key ID (24-bit range); AES-CMAC (not HMAC-SHA) to generate the PTK; one PSK shareable by many STAs.
- Exchange: AMP Trigger (ANonce) then AMP Response (short ID as TA, Key ID and SNonce in clear, encrypted content, MIC, CRC), then AMP Ack; optional unicast follow-on exchange if energy allows.
- Separate CRC protecting the MIC recommended over a unified CRC/MIC.
- Five straw polls (SP1-SP5) at the end: no persistent addresses, PSK as shared secret, key sharing across STAs, Key ID, separate CRC protecting the MIC.

## Key technical points (ZH)

- 所述要求：AMP 有源发射非 AP STA 的交互中不暴露持久地址（ID、MAC 地址、UII）；支持安全通信时加密含地址的帧部分；不产生持久模板。
- 所考虑的盘点方式：AMP AP 在事先不知道 STA 的情况下随机接入；触发帧不加密；以 CRC 判定响应成功。
- 视为前提的设备约束：RAM 与 NVM 小、计算与状态存储受限、无人工干预的多设备调试。
- 密钥材料：以 PSK 为基础，单个 STA 可有多个 PSK，由 Key ID（24 位范围）标识；用 AES-CMAC（而非 HMAC-SHA）生成 PTK；一个 PSK 可由多个 STA 共用。
- 交互：AMP Trigger（ANonce）、AMP Response（TA 为短 ID，明文 Key ID 与 SNonce，加密内容，MIC，CRC）、AMP Ack；能量允许时可继续单播交互。
- 建议使用单独的 CRC 保护 MIC，而不是 CRC/MIC 合一。
- 文末五个 straw poll（SP1-SP5）：不暴露持久地址、PSK 作共享密钥、密钥可跨 STA 共用、Key ID、单独 CRC 保护 MIC。

## Why it matters / what's new (EN)

The KB's TGbp/AMP coverage (for example 2026-08-21_ieee-mentor-tgbp-amp-security-digest) has recorded TGbp inventory and security inputs only at digest level. This deck gives a worked key-handling design for inventory confidentiality under the energy and memory limits it states, and ends in straw polls rather than draft text. It does not report measurements; the claim that AES-CMAC and HMAC-SHA use about the same energy is the author's statement on slide 10.

## Why it matters / what's new (ZH)

KB 对 TGbp/AMP 的覆盖（例如 2026-08-21_ieee-mentor-tgbp-amp-security-digest）此前只在摘要层面记录过 TGbp 的盘点与安全输入。本文稿在其所述的能耗与存储限制下给出了面向盘点保密性的具体密钥处理设计，并以 straw poll 而非草案文本收尾。文稿未给出测量结果；关于 AES-CMAC 与 HMAC-SHA 能耗相近的说法是作者在第 10 页的陈述。

## Images

None.
