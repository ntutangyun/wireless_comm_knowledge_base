---
id: 2026-09-23_arxiv-rapp-xapp-attestation-oran
date_published: 2026-09-21
date_found: 2026-09-23
type: academic-paper
technology: cellular
title_en: "rApp/xApp Attestation: A New Security Use Case for O-RAN"
title_zh: "rApp/xApp 运行时证明：O-RAN 的一种新安全用例"
url: "https://arxiv.org/abs/2609.24296"
source_quality: full
topics: [O-RAN, rApp, xApp, Near-RT-RIC, FlexRIC, runtime-attestation, SMO]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

Hamed Alimohammadi, Burcu Sahin, Arda Akman, Chuan Heng Foh, Periklis Chatzimisios and Mohammad Shojafar propose runtime attestation of rApps and xApps as a new O-RAN security use case, submitted to IEEE (not yet marked accepted at the time this entry was written). The paper's motivation is that existing O-RAN specifications provide safeguards for application onboarding and authentication but, in the authors' words, acknowledge without implementing any mechanism to verify that an rApp or xApp remains uncompromised once it is running — leaving a gap where a compromised application could manipulate control logic, alter operational data, or disrupt network behaviour after passing onboarding checks. Rather than proposing new cryptography, the paper integrates existing integrity-verification techniques into an attestation architecture in which the Near-RT RIC / SMO acts as verifier, each rApp/xApp is equipped with a lightweight attestation agent, and integrity is checked via cryptographic hashes of the application's executable memory (excluding writable regions that legitimately change at runtime), validated against stored reference images through a seed-based challenge-response protocol that guards against replay.

The authors built a proof-of-concept on a FlexRIC-based Near-RT RIC platform using a representative 10 MB xApp binary, and benchmarked four hash functions (SHA-256, SHA-512, SHA3-256, BLAKE2b-512) over 50 rounds. SHA-256 attestation totalled ≈18.7 ms (4.0 ms xApp hashing + 4.3 ms RIC verification + 10.4 ms overhead); SHA-512 took ≈28.0 ms; BLAKE2b-512 took ≈26.5 ms; SHA3-256 was the slowest of the four at ≈35.4 ms despite an identical output length to SHA-256. All four hash choices completed full challenge-response attestation cycles in under 40 ms, which the authors argue is compatible with the RIC's time-sensitive operations without disrupting them; the authors recommend SHA-256 for frequent attestation and describe BLAKE2b-512 as offering a favourable speed/security balance. The paper frames its contribution as introducing the use case and a standards-aligned workflow mapped to relevant O-RAN working groups, plus the feasibility demonstration, rather than a finished production deployment — it also identifies open deployment challenges (e.g. handling legitimate application updates, scaling attestation across many concurrently running apps) as future work.

## Summary (ZH)

Hamed Alimohammadi、Burcu Sahin、Arda Akman、Chuan Heng Foh、Periklis Chatzimisios 与 Mohammad Shojafar 提出了对 rApp 与 xApp 进行运行时完整性证明，将其作为 O-RAN 的一项新安全用例；论文已投稿至 IEEE，截至本条目撰写时尚未标注为已录用。论文的动机在于：现有 O-RAN 规范虽为应用的接入与认证提供了保障机制，但按作者的说法，规范中仅承认而未实现任何用于验证 rApp/xApp 在运行期间是否仍保持未被篡改状态的机制——这留下了一个缺口：一个在通过接入检查后被攻陷的应用，仍可能篡改控制逻辑、修改运行数据或扰乱网络行为。该论文并未提出新的密码学原语，而是将现有的完整性验证技术整合进一套证明架构：由 Near-RT RIC / SMO 充当验证方，每个 rApp/xApp 配备一个轻量级证明代理，完整性检查通过对应用可执行内存的密码学哈希实现（不含运行期间合法变化的可写区域），并借助基于随机种子的挑战-响应协议与已存储的参考镜像进行比对验证，以防止重放攻击。

作者在基于 FlexRIC 的 Near-RT RIC 平台上构建了概念验证系统，使用一个代表性的 10MB xApp 二进制文件，并对四种哈希函数（SHA-256、SHA-512、SHA3-256、BLAKE2b-512）进行了 50 轮基准测试。SHA-256 的证明总耗时约为 18.7 毫秒（其中 xApp 端哈希计算 4.0 毫秒、RIC 端验证 4.3 毫秒、其余开销 10.4 毫秒）；SHA-512 约为 28.0 毫秒；BLAKE2b-512 约为 26.5 毫秒；SHA3-256 尽管输出长度与 SHA-256 相同，却是四者中最慢的，约为 35.4 毫秒。四种哈希方案均能在 40 毫秒以内完成完整的挑战-响应证明流程，作者认为这一延迟水平与 RIC 的时间敏感型操作兼容，不会造成干扰；作者认为 SHA-256 最适合高频证明，BLAKE2b-512 在性能与安全间取得较好平衡。论文将自身贡献定位为提出该安全用例、给出与相关 O-RAN 工作组对齐的标准化流程，以及完成可行性验证，而非一套成熟的生产级部署方案——文中也指出了尚待解决的部署难题（例如如何处理合法的应用更新、如何在大量并发运行的应用间实现可扩展的证明），作为未来工作方向。

## Key technical points (EN)

- Motivation: O-RAN onboarding/authentication specs exist, but no standardized runtime-integrity check for rApps/xApps after deployment — a compromised app could alter control logic or operational data post-onboarding.
- Architecture: Near-RT RIC / SMO as verifier; per-app lightweight attestation agent; hash-based integrity check over executable memory (writable regions excluded); seed-based challenge-response prevents replay.
- Prototype: FlexRIC-based Near-RT RIC platform, representative 10 MB xApp binary, 50 rounds per hash function.
- Benchmarked hashes: SHA-256 (~18.7 ms: 4.0 ms xApp hashing + 4.3 ms RIC verification + 10.4 ms overhead), SHA-512 (~28.0 ms), BLAKE2b-512 (~26.5 ms), SHA3-256 (slowest at ~35.4 ms despite matching SHA-256's output length) — all under 40 ms end-to-end; the authors recommend SHA-256 for frequent attestation and describe BLAKE2b-512 as offering a favourable speed/security balance.
- Framed as introducing the use case + a standards-aligned workflow + feasibility demo, not a production-ready system; open challenges (legitimate updates, multi-app scaling) left as future work.
- Status: submitted to IEEE, not yet reported as accepted.

## Key technical points (ZH)

- 动机：O-RAN 已有应用接入/认证规范，但缺乏部署后针对 rApp/xApp 的标准化运行时完整性检查——被攻陷的应用在通过接入检查后仍可篡改控制逻辑或运行数据。
- 架构：由 Near-RT RIC / SMO 充当验证方；每个应用配备轻量级证明代理；基于哈希对可执行内存进行完整性检查（排除可写区域）；基于随机种子的挑战-响应机制防止重放。
- 原型：基于 FlexRIC 的 Near-RT RIC 平台，使用代表性的 10MB xApp 二进制文件，对每种哈希函数进行 50 轮测试。
- 基准哈希方案：SHA-256（约 18.7 毫秒：xApp 哈希 4.0 毫秒 + RIC 验证 4.3 毫秒 + 其余开销 10.4 毫秒）、SHA-512（约 28.0 毫秒）、BLAKE2b-512（约 26.5 毫秒）、SHA3-256（尽管输出长度与 SHA-256 相同却最慢，约 35.4 毫秒）——端到端均低于 40 毫秒；作者认为 SHA-256 最适合高频证明，BLAKE2b-512 在性能与安全间取得较好平衡。
- 论文定位为提出该安全用例、给出标准对齐的工作流程并完成可行性验证，而非成熟的生产系统；合法应用更新处理、多应用并发场景下的可扩展性等问题留作未来工作。
- 状态：已投稿至 IEEE，尚未标注为已录用。

## Why it matters / what's new (EN)

Distinct from the KB's existing O-RAN security threads (fronthaul PTP timing security, above, and the knowledge-graph-based threat cataloguing in `2026-09-09_arxiv-queryable-graph-oran-security-framework`), this is the first entry in this KB to address runtime integrity verification of the RIC's own applications (rApps/xApps) rather than the radio, core, or fronthaul layers — a distinct point in the O-RAN trust chain that the paper argues current specifications leave unaddressed.

## Why it matters / what's new (ZH)

区别于知识库现有的 O-RAN 安全相关内容（如上文的前传 PTP 时钟同步安全条目，以及 `2026-09-09_arxiv-queryable-graph-oran-security-framework` 中基于知识图谱的威胁编目），本条目是本知识库中首次针对 RIC 自身应用（rApp/xApp）的运行时完整性验证展开研究，而非无线侧、核心网或前传层面——论文指出这是当前 O-RAN 规范尚未覆盖的信任链环节。
