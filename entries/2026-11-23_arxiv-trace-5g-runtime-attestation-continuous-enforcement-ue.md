---
id: 2026-11-23_arxiv-trace-5g-runtime-attestation-continuous-enforcement-ue
date_published: 2026-11-18
date_found: 2026-11-23
type: academic-paper
technology: cellular
title_en: "TRACE-5G: Trust-Aware Runtime Attestation and Continuous Enforcement for 5G User Equipment"
title_zh: "TRACE-5G：面向 5G 用户设备的可信感知运行时证明与持续访问控制"
url: "https://arxiv.org/abs/2611.25272"
source_quality: full
topics: [5G-security, remote-attestation, TPM, IMA, Keylime, zero-trust, srsRAN, Open5GS, UE-integrity]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Emran, Paudyal, Upadhyay, Bhuyan and Wijesekera (George Mason University and Idaho National Laboratory) observe that 5G-AKA authenticates the subscriber credential but does not check the integrity of the user equipment (UE), and that earlier admission-time device-certificate and TPM boot-attestation checks stay point-in-time. TRACE-5G keeps those pre-admission checks and adds continuous runtime verification: an admitted UE is held in restricted connectivity while Linux IMA measurements, accumulated in TPM PCR 10, are repeatedly evaluated by the Keylime remote-attestation framework; a Trusted verdict grants full access on the existing PDU session, an Untrusted verdict withholds or withdraws it and triggers network-requested deregistration. A prototype on srsRAN and Open5GS with a hardware TPM 2.0 UE is reported.

## Summary (ZH)

Emran、Paudyal、Upadhyay、Bhuyan 与 Wijesekera（乔治梅森大学与爱达荷国家实验室）指出：5G-AKA 只认证订阅者凭据，并不检查用户设备（UE）本身的完整性；此前基于设备证书和 TPM 启动证明的准入检查也只是某一时间点的判断。TRACE-5G 保留这些准入前检查，并增加持续的运行时验证：已接入的 UE 先处于受限连接状态，由 Keylime 远程证明框架反复评估 Linux IMA 度量（累积于 TPM 的 PCR 10）；结果为 Trusted 时在现有 PDU 会话上授予完全访问权限，结果为 Untrusted 时拒绝或撤销该权限并触发网络发起的去注册。论文给出了基于 srsRAN 与 Open5GS、使用硬件 TPM 2.0 UE 的原型。

## Key technical points (EN)

- Trust model: network authorization is treated as a continuously re-evaluated function of enrolled device identity, boot integrity and runtime integrity. Scenario is a private/tactical 5G deployment in which the operator controls the gNB, core, Keylime services and enrollment infrastructure; RF denial-of-service, TPM compromise and attacks outside the configured IMA measurement coverage are out of scope.
- Three levels: Level 0 (pre-admission device and boot assurance, reused from the authors' earlier "Battlefield 5G" design: Outer CA certificate check at the gNB, independent Inner CA check at the AMF, TPM PCR 0-7 boot attestation via a core-side proxy); Level 1 (standard 5G-AKA and registration, then a PDU session on a dedicated restricted DNN whose firewall permits only the Keylime attestation traffic); Level 2 (full access, with attestation continuing).
- Runtime evidence: IMA measures executable launches (BPRM_CHECK) and executable memory mappings (FILE_MMAP) with a container-aware template (cgpath field), so host and per-container measurements are compared with separate allow-lists; the Keylime Verifier checks the TPM quote, nonce freshness and consistency of the IMA log with PCR 10.
- Enforcement: promotion to Level 2 is a core-side firewall policy update on the existing session (no DNN change, IP reassignment or PDU session re-establishment). On an Untrusted result the restrictive policy is restored and the AMF initiates standard network-requested deregistration and UE-context release. No new NAS or RRC message types are introduced.
- Prototype: Open5GS core in Docker, srsRAN Project gNB with a USRP B210, srsUE with a USRP B200, a Nuvoton NPCT75x hardware TPM 2.0 and a custom Linux 5.13.19 kernel with the container-aware IMA template. Keylime verifies every 2 s, the proxy polls the Verifier every 3 s and the AMF polls the proxy every 5 s.
- Reported measurements: in a representative trusted trace, Trusted became visible about 6.3 s after runtime monitoring started, then about 3.0 s to full-access activation and about 0.7 s for the AMF to observe it; runtime-trust establishment to Level 2 took about 9-12 s across ten trusted trials. Across ten untrusted trials promotion was consistently withheld; in a representative trace the restrictive policy was applied within 5 ms of the Untrusted decision and UE-context release completed within 1.670 s.
- Caveats from the text: the Level 0 mechanisms were not re-evaluated; the measured intervals do not represent the time from deploying an unauthorized container to its detection; the untrusted case tested was a container allow-list violation already present when runtime trust establishment began; enrollment was completed before the experiments; revocation after Level 2 was exercised only functionally, without reported timings.

## Key technical points (ZH)

- 信任模型：网络授权被视为已登记设备身份、启动完整性和运行时完整性的持续重新评估函数。场景为运营方掌控 gNB、核心网、Keylime 服务和登记基础设施的专网/战术 5G 部署；射频拒绝服务、TPM 被攻破以及超出已配置 IMA 度量覆盖范围的攻击不在范围内。
- 三个等级：Level 0（准入前设备与启动保障，沿用作者此前的 "Battlefield 5G" 设计：gNB 处校验 Outer CA 证书、AMF 处独立校验 Inner CA 证书、经核心侧代理做 TPM PCR 0-7 启动证明）；Level 1（标准 5G-AKA 与注册，随后在专用受限 DNN 上建立 PDU 会话，其防火墙只放行 Keylime 证明流量）；Level 2（完全访问，证明过程持续进行）。
- 运行时证据：IMA 度量可执行文件启动（BPRM_CHECK）和可执行内存映射（FILE_MMAP），并使用带 cgpath 字段的容器感知模板，因而宿主机与各容器的度量分别与不同的允许列表比对；Keylime Verifier 检查 TPM 引用（quote）、随机数新鲜性以及 IMA 日志与 PCR 10 的一致性。
- 执行机制：升级到 Level 2 只是在现有会话上更新核心侧防火墙策略（无需更换 DNN、重新分配 IP 或重建 PDU 会话）。结果为 Untrusted 时恢复限制策略，AMF 发起标准的网络请求去注册并释放 UE 上下文。未引入新的 NAS 或 RRC 消息类型。
- 原型：Docker 中的 Open5GS 核心网，搭配 USRP B210 的 srsRAN Project gNB，搭配 USRP B200 的 srsUE，Nuvoton NPCT75x 硬件 TPM 2.0，以及带容器感知 IMA 模板的定制 Linux 5.13.19 内核。Keylime 每 2 s 验证一次，代理每 3 s 轮询 Verifier，AMF 每 5 s 轮询代理。
- 报告的测量：在一条代表性的可信轨迹中，从启动运行时监控到 Trusted 可见约 6.3 s，随后约 3.0 s 完成完全访问激活，AMF 再用约 0.7 s 观察到该状态；在十次可信试验中，运行时信任建立到 Level 2 约需 9-12 s。十次不可信试验中升级始终被拒绝；在一条代表性轨迹中，限制策略在 Untrusted 判定后 5 ms 内生效，UE 上下文释放在 1.670 s 内完成。
- 文中可见的注意事项：Level 0 机制未重新评估；所测时间间隔并不代表从部署未授权容器到被检测出的延迟；所测试的不可信场景是在运行时信任建立开始时就已存在的容器允许列表违规；登记在实验前已完成；Level 2 之后的撤销仅做了功能验证，未报告时延。

## Why it matters / what's new (EN)

The distinguishing element is tying a live attestation verdict to the network-side session authorization of an already-registered UE, using unchanged 5G NAS/RRC procedures and a core-side policy update rather than a new protocol message. It is a prototype in a controlled, operator-managed setting, so results characterize that testbed and measurement coverage rather than commercial deployments.

## Why it matters / what's new (ZH)

其区别点在于：把实时证明结论与已注册 UE 的网络侧会话授权绑定，沿用不变的 5G NAS/RRC 流程，通过核心侧策略更新而非新增协议消息来实现。这是在受控、由运营方管理环境中的原型，结果反映的是该测试床和度量覆盖范围，而非商用部署。

## Images

None.
