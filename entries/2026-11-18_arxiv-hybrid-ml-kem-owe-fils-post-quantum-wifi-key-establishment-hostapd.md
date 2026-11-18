---
id: 2026-11-18_arxiv-hybrid-ml-kem-owe-fils-post-quantum-wifi-key-establishment-hostapd
date_published: 2026-11-16
date_found: 2026-11-18
technology: wifi
type: academic-paper
title_en: "Post-Quantum Migration of Wi-Fi Key Establishment: A Hybrid ML-KEM Design for OWE and FILS, Validated on OWE with hostapd"
title_zh: "Wi-Fi 密钥建立的后量子迁移：面向 OWE 与 FILS 的 ECDH+ML-KEM 混合设计，并在 hostapd 上对 OWE 进行验证"
url: "https://arxiv.org/abs/2611.21528"
source_quality: full
topics: [WPA3, OWE, FILS, ML-KEM, post-quantum, hybrid key exchange, hostapd, crypto agility]
topic_primary: security-privacy
topics_secondary: [amp-iot]
novelty_score: 4
---

## Summary (EN)
The paper (Abascal, Gómez, Gómez-Pérez; arXiv cs.CR, 8 pages) argues that the Diffie-Hellman exchanges used for Wi-Fi key establishment are exposed to harvest-now-decrypt-later attacks, and that key establishment (rather than symmetric ciphers such as AES-256) is what has to migrate first. It targets Opportunistic Wireless Encryption (OWE, where the exchange rides in the (Re)Association frames) and FILS (where it rides in Authentication sequence 1 and 2). SAE is excluded because it is a password-authenticated exchange, and EAP-TLS is excluded because an RFC already covers it.

The proposal runs classical ECDH alongside ML-KEM (FIPS 203) and derives the master key from both secrets: PRK = HKDF-Extract(salt = ctx, IKM = z_cl || z_pq), then PMK = HKDF-Expand(PRK, "OWE Key Generation"), with ctx = STA and AP public ECDH keys ‖ group ID ‖ ML-KEM ciphertext (AKM and RSNE not included in the prototype). The STA generates an ephemeral ML-KEM key pair; the Association Request carries the STA's ECDH public value plus the ML-KEM encapsulation key, and the Association Response carries the AP's ECDH public value plus the ciphertext, so no extra round trip is added. The authors state that they contribute no new cryptographic construction; the gap they identify is a built and measured protocol-level design.

Validation is on a hostapd 2.10 / patched wpa_supplicant prototype over mac80211_hwsim with OpenSSL 3.5+ native ML-KEM (N = 30 per mode after 3 warm-up connections). Captured association frames grow from 223 B (request) and 206 B (response) for classical OWE to 1419 B and 1306 B with ML-KEM-768, a 2296 B overhead; ML-KEM-512 adds 1588 B and ML-KEM-1024 adds 3168 B. At a 1500-byte fragmentation threshold ML-KEM-512 and -768 fit in one frame each way, while at a 512-byte threshold ML-KEM-768 needs 3 fragments each way. Measured primitive cost (excluding ECDH) is about 140 / 188 / 265 microseconds for ML-KEM-512 / 768 / 1024, against roughly 100 microseconds for one P-256 ECDH per endpoint. Median association-exchange time was 1.17 ms versus 1.41 ms on one host (p = 1.8e-7) and 1.93 versus 2.06 ms on a noisier host (p = 0.28); because the testbed has no real airtime, these deltas are host-side processing only. ML-KEM-768 is recommended as the balance point.

Negotiation is signalled in the prototype by an experimental Extension element (ID 200, one octet naming the ML-KEM variant) carried in Probe Responses only; the fuller design would instead add AKM selectors to the RSNE and FILS algorithm numbers. Downgrade protection is specified but not implemented: an active attacker can strip the capability from Beacons and Probe Responses, and the paper proposes putting the full RSNE into the combiner context and a local `owe_pqc_required` policy (tested 6/6 refusing a classical AP and 6/6 succeeding with a hybrid AP), and relies on the existing WPA2/WPA3 check in which the AP repeats its RSNE in message 3 under the MIC. The PMK is never derived from ML-KEM alone and an ECDH failure aborts the exchange; PQ-OWE still provides no identity authentication or protection against an active man-in-the-middle.

## Summary (ZH)
论文（Abascal、Gómez、Gómez-Pérez，arXiv cs.CR，8 页）指出，Wi-Fi 密钥建立所使用的 Diffie-Hellman 交换易受“先收集、后解密”攻击，需要优先迁移的是密钥建立而不是 AES-256 等对称算法。其目标是 OWE（密钥交换承载于（重）关联帧）和 FILS（承载于认证帧序列 1、2）；SAE 因属口令认证交换而不在范围内，EAP-TLS 因已有 RFC 覆盖而不在范围内。

方案让经典 ECDH 与 ML-KEM（FIPS 203）并行运行，并由两个共享秘密共同导出主密钥：PRK = HKDF-Extract(salt = ctx, IKM = z_cl || z_pq)，PMK = HKDF-Expand(PRK, "OWE Key Generation")，其中 ctx 由 STA 与 AP 的 ECDH 公钥、组标识与 ML-KEM 密文构成（原型中不含 AKM 与 RSNE）。STA 生成临时 ML-KEM 密钥对；关联请求携带 STA 的 ECDH 公钥与 ML-KEM 封装密钥，关联响应携带 AP 的 ECDH 公钥与密文，因此不增加额外往返。作者明确表示不提出新的密码学构造，所填补的空白是“已实现并实测的协议层设计”。

验证基于 hostapd 2.10 与打补丁的 wpa_supplicant，运行于 mac80211_hwsim，使用 OpenSSL 3.5+ 原生 ML-KEM（每种模式 N = 30，另有 3 次预热连接）。抓包显示关联帧由经典 OWE 的 223 B（请求）/206 B（响应）增至 ML-KEM-768 的 1419 B/1306 B，开销 2296 B；ML-KEM-512 增加 1588 B，ML-KEM-1024 增加 3168 B。在 1500 字节分片阈值下 ML-KEM-512 与 -768 双向各占一帧，而在 512 字节阈值下 ML-KEM-768 双向各需 3 个分片。不含 ECDH 的原语开销约为 ML-KEM-512/768/1024 对应 140/188/265 微秒，每端一次 P-256 ECDH 约 100 微秒。关联交换时间中位数在一台主机上为 1.17 ms 对 1.41 ms（p = 1.8e-7），在噪声更大的另一台主机上为 1.93 对 2.06 ms（p = 0.28）；由于测试床没有真实空口时间，这些差值仅反映主机侧处理。作者推荐 ML-KEM-768 作为折中。

协商方面，原型仅在 Probe Response 中携带一个实验性扩展元素（ID 200，1 字节标明 ML-KEM 变体）；完整设计则是在 RSNE 中增加 AKM 选择符并扩展 FILS 算法编号。降级保护已有设计但未实现：主动攻击者可从 Beacon 与 Probe Response 中剥离能力指示，论文提出把完整 RSNE 纳入组合器上下文以及本地 `owe_pqc_required` 策略（对经典 AP 拒绝 6/6，对混合 AP 成功 6/6），并沿用 WPA2/WPA3 已有机制：AP 在 4 次握手第 3 条消息中于 MIC 保护下重复 RSNE。PMK 从不单由 ML-KEM 导出，ECDH 失败即中止；PQ-OWE 仍不提供身份认证，也不防御主动中间人。

## Key technical points (EN)
- Scope: OWE (Association frames) and FILS (Authentication frames); SAE and EAP-TLS excluded. Measurements are on OWE only; FILS carries over the combiner, forward-secrecy preconditions, primitive costs and byte overhead, but its frame budget (larger baseline, certificate chains possible) must be re-measured.
- Hybrid combiner: ECDH (groups 19-21 supported, P-256 measured) plus ML-KEM-768 recommended; the PMK is indistinguishable while either secret holds, argued via the dual-PRF result and the TLS 1.3 hybrid design rather than a new proof.
- ML-KEM sizes (bytes): 512 = ek 800 / ct 768; 768 = ek 1184 / ct 1088; 1024 = ek 1568 / ct 1568. ML-KEM-1024's 1584-byte key element exceeds wpa_supplicant 2.10's 1500-byte buffer, so an unmodified supplicant cannot use it (the buffer was enlarged to 2304 B for that row).
- Frame overhead vs classical OWE: +1588 B (512), +2296 B (768), +3168 B (1024); element fragmentation adds 4 B plus 2 B per fragment. The analytic airtime for the 2336 B payload is about 3.1 ms at 6 Mbps and 18.7 ms at 1 Mbps.
- Downgrade: benign fallback occurred in 1 of 254 attempts when the STA learned the BSS from Beacons alone; the pre-association downgrade window is acknowledged as open. Fault cases were checked by fault injection on a model, not by tampering on the testbed.
- Forward-secrecy preconditions checked: ephemeral per-association keys, opaque key objects, zeroization on every exit path, PMK kept only in the PMKSA cache (12 h default).
- Stated limitations: user-space simulation without real radios, one virtualized platform for the microbenchmark, no constrained-IoT measurements; future work lists FILS measurement, real hardware, X25519, a formal combiner proof and a post-quantum PAKE for SAE.

## Key technical points (ZH)
- 范围：OWE（关联帧）与 FILS（认证帧）；不含 SAE 与 EAP-TLS。测量仅针对 OWE；FILS 沿用组合器、前向保密前提、原语开销与字节开销，但其帧预算（基线更大，可能携带证书链）需重新测量。
- 混合组合器：ECDH（原型支持组 19-21，测量用 P-256）加推荐的 ML-KEM-768；只要任一秘密安全，PMK 即不可区分，论证依托 dual-PRF 结果与 TLS 1.3 混合设计，而非新证明。
- ML-KEM 尺寸（字节）：512 = ek 800 / ct 768；768 = ek 1184 / ct 1088；1024 = ek 1568 / ct 1568。ML-KEM-1024 的 1584 字节密钥元素超过 wpa_supplicant 2.10 的 1500 字节缓冲，未修改的 supplicant 无法使用（该行实验将缓冲放大到 2304 B）。
- 相对经典 OWE 的帧开销：+1588 B（512）、+2296 B（768）、+3168 B（1024）；元素分片每片额外 2 B，另有 4 B。2336 B 载荷的解析空口时间在 6 Mbps 下约 3.1 ms，1 Mbps 下约 18.7 ms。
- 降级：STA 仅从 Beacon 获知 BSS 时，254 次尝试中有 1 次发生良性回退；关联前的降级窗口被承认仍然存在。故障场景通过模型上的故障注入检查，而非在测试床上实际篡改。
- 已核验的前向保密前提：每次关联使用临时密钥、不透明密钥对象、所有退出路径清零、PMK 仅保存在 PMKSA 缓存（默认 12 小时）。
- 论文自述局限：用户态仿真、无真实射频，微基准仅在一台虚拟化平台，未测受限 IoT 节点；后续工作包括 FILS 测量、真实硬件、X25519、组合器形式化证明以及面向 SAE 的后量子 PAKE。

## Why it matters / what's new (EN)
Within the security-privacy bin this is a concrete, measured byte and time budget for putting ML-KEM into an existing Wi-Fi key-establishment frame, rather than a position paper: the headline is that ML-KEM-768 pushes OWE association frames to roughly 1.3-1.4 kB, which fits one frame under a conservative 1500-byte reference threshold (management-frame fragmentation is disabled by default) but fragments at lower thresholds. The paper itself cites an IEEE P802.11bt letter ballot (closed September 2026) as the standards context; see the KB's TGbt post-quantum digests for the task group's side of the same question. The measured median increase was 0.23 ms on one host (p = 1.8e-7) and not significant on a noisier host (p = 0.28); with mac80211_hwsim these are host-side processing times only.

## Why it matters / what's new (ZH)
在 security-privacy 主题下，这篇论文给出了把 ML-KEM 放进现有 Wi-Fi 密钥建立帧的具体、实测的字节与时间预算，而不是立场性文章：ML-KEM-768 使 OWE 关联帧达到约 1.3-1.4 kB，在保守的 1500 字节参考阈值下（管理帧默认不分片）可放入单帧，阈值更低时则会分片。论文自身引用了 IEEE P802.11bt 一次已于 2026 年 9 月结束的 letter ballot 作为标准背景；该任务组一侧的同一问题可参见本知识库中的 TGbt 后量子摘要。一台主机上测得中位数增加 0.23 ms（p = 1.8e-7），另一台噪声更大的主机上差异不显著（p = 0.28）；由于使用 mac80211_hwsim，这些仅为主机端处理时间。
