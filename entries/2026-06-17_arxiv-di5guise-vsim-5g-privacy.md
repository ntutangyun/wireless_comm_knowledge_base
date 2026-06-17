---
id: 2026-06-17_arxiv-di5guise-vsim-5g-privacy
date_published: 2026-06-15
date_found: 2026-06-17
type: academic-paper
technology: cellular
title_en: "Di5Guise: Breaking eSIM Device-Profile Linkability with a TEE-Hosted Virtual SIM (vSIM)"
title_zh: "Di5Guise：用 TEE 托管的虚拟 SIM（vSIM）打破 eSIM 设备画像可关联性"
url: "https://arxiv.org/abs/2606.16943"
source_quality: full
topics: [5G-NR, security, privacy, eSIM, vSIM, TEE, 5G-AKA, attestation]
topic_primary: cellular-security
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Ebadi, Moolman, Keller and Lehman (arXiv 2606.16943, submitted 15 June 2026) present **Di5Guise**, a privacy architecture that attacks a structural linkability flaw in today's eSIM: the **device profile** (the eUICC's EID, manufacturer-provisioned secret key, and certificate) is permanently bound to the device at manufacturing time, so all of a user's *subscriber* profiles share one immutable *device* identity. An honest-but-curious (or state-compelled) operator can therefore correlate sessions across rotated subscriber identities and even across TLS-obfuscated traffic, stitching together a pattern of life. Di5Guise breaks this one-EID-to-many-IMSIs mapping by introducing **vSIM** — a software SIM running inside a **Trusted Execution Environment (TEE)** that supports **dynamic device-profile provisioning**, so each subscriber profile can be bound to a *distinct, unlinkable* device profile.

The hard problem is establishing operator trust without the manufacturing-time binding. vSIM solves it with: (1) hardware-isolated execution (ARM TrustZone / Intel SGX / RISC-V Keystone) so even the OS cannot extract secret keys; (2) **Direct Anonymous Attestation (DAA)** group keys, letting a device prove it belongs to a trustworthy class without revealing its individual identity; (3) a remote-attestation + ECDH secure-channel protocol (mutual authentication, forward secrecy, freshness) for provisioning a fresh device profile; and (4) full backward compatibility — the 5G-AKA / Milenage flow and network infrastructure are unchanged, with vSIM retrieving the long-term key K from secure storage to answer RAND/AUTN challenges per 3GPP TS 33.501. A `switchDeviceProfile(EID)` call rotates between stored profiles.

Evaluated against an augmented **SiamHAN** re-identification model on a 600-client network (140 returning clients), traditional eSIM + TLS obfuscation re-identified returning users at **91.4%**; with vSIM + obfuscation this collapses to **49.3% — no better than random guessing**. Even without TLS obfuscation, vSIM alone drops re-identification from 92.9% to 75.0%. The prototype is a Xilinx Genesys2 FPGA running a modified Rocket Chip RISC-V SoC (PUF-fused key, TRNG, PMP isolation, Keystone enclave, libsodium crypto) integrated with srsRAN/srsUE + Open5GS. Authentication costs ~658 ms vs ~7 ms for emulated eSIM, profile-switch-with-reauth ~1.68 s (profile switch alone ~11 ms), with <1% memory overhead and identical post-auth throughput. Limitations: TEEs are more side-channel-exposed than discrete secure elements, co-located profiles can still be correlated by location/time, and deployment needs operator (or MVNO/third-party) provisioning infrastructure.

## Summary (ZH)
Ebadi、Moolman、Keller 与 Lehman（arXiv 2606.16943，2026 年 6 月 15 日提交）提出 **Di5Guise**——一种针对当今 eSIM 结构性可关联缺陷的隐私架构：**设备画像**（eUICC 的 EID、厂商预置的密钥与证书）在出厂时被永久绑定到设备，因此用户的所有*订户*画像共享同一不可变的*设备*身份。诚实但好奇（或受国家强制）的运营商可借此跨轮换的订户身份、甚至跨 TLS 混淆流量关联会话，拼出用户的生活轨迹。Di5Guise 通过引入 **vSIM**——运行于**可信执行环境（TEE）**内、支持**动态设备画像下发**的软件 SIM——打破"一个 EID 对多个 IMSI"的映射，使每个订户画像可绑定到*互不关联*的设备画像。

难点在于在没有出厂绑定的情况下与运营商建立信任。vSIM 的方案：(1) 硬件隔离执行（ARM TrustZone / Intel SGX / RISC-V Keystone），连操作系统都无法提取密钥；(2) **直接匿名证明（DAA）**群密钥，使设备能证明自己属于可信类别而不暴露个体身份；(3) 远程证明 + ECDH 安全信道协议（双向认证、前向保密、新鲜性）以下发新设备画像；(4) 完全向后兼容——5G-AKA / Milenage 流程与网络基础设施保持不变，vSIM 从安全存储取出长期密钥 K 以响应 RAND/AUTN 挑战（符合 3GPP TS 33.501）。`switchDeviceProfile(EID)` 调用在已存画像间轮换。

在 600 客户端网络（140 个回访客户端）上对增强版 **SiamHAN** 重识别模型评估：传统 eSIM + TLS 混淆的回访用户重识别率为 **91.4%**；启用 vSIM + 混淆后骤降至 **49.3%——与随机猜测无异**。即便不做 TLS 混淆，仅 vSIM 也将重识别率从 92.9% 降至 75.0%。原型为 Xilinx Genesys2 FPGA 运行改造的 Rocket Chip RISC-V SoC（PUF 固化密钥、TRNG、PMP 隔离、Keystone enclave、libsodium 加密），与 srsRAN/srsUE + Open5GS 集成。认证耗时约 658 ms（仿真 eSIM 约 7 ms），含重认证的画像切换约 1.68 s（纯画像切换约 11 ms），内存开销 <1%，认证后吞吐与基线一致。局限：TEE 比独立安全元件更易受侧信道攻击；同时同地出现的多个设备标识仍可能按位置/时间被关联；部署需运营商（或 MVNO/第三方）下发基础设施。

## Key technical points (EN)
- **Flaw attacked**: eSIM permanently binds the device profile (EID + secret key + cert) at manufacturing — one device identity shared by all subscriber profiles → operator-level cross-session linkability even under identity rotation/TLS obfuscation.
- **vSIM**: software SIM in a TEE (TrustZone/SGX/Keystone) enabling dynamic device-profile provisioning → each subscriber profile bound to a distinct, unlinkable device profile.
- **Trust without factory binding**: DAA group keys (anonymous class membership) + remote attestation + ECDH secure channel (mutual auth, forward secrecy, freshness).
- **Backward compatible**: 5G-AKA / Milenage unchanged; vSIM answers RAND/AUTN with long-term K per 3GPP TS 33.501; zero core-network modification.
- **Re-identification**: 91.4% → 49.3% (with TLS obfuscation, augmented SiamHAN on 600-client net); 92.9% → 75.0% (vSIM alone).
- **Prototype**: Genesys2 FPGA + Rocket Chip RISC-V (PUF key, TRNG, PMP, Keystone, libsodium) + srsRAN/srsUE + Open5GS + emulated SM-DP+/RA authority.
- **Overhead**: auth ~658 ms (vs ~7 ms emulated eSIM), reauth-switch ~1.68 s, profile-switch ~11 ms, <1% memory, throughput parity post-auth.
- **Limits**: TEE side-channel exposure; location/time co-location correlation; needs operator/MVNO provisioning; ZeroMQ radio sim (no SDR RF yet); de-register required before switch.

## Key technical points (ZH)
- **被攻击的缺陷**：eSIM 出厂时永久绑定设备画像（EID+密钥+证书）——所有订户画像共享同一设备身份 → 即便轮换身份/TLS 混淆，运营商仍可跨会话关联。
- **vSIM**：TEE 内（TrustZone/SGX/Keystone）的软件 SIM，支持动态设备画像下发 → 每个订户画像绑定到互不关联的设备画像。
- **无出厂绑定的信任**：DAA 群密钥（匿名类成员证明）+ 远程证明 + ECDH 安全信道（双向认证、前向保密、新鲜性）。
- **向后兼容**：5G-AKA / Milenage 不变；vSIM 以长期密钥 K 响应 RAND/AUTN（符合 3GPP TS 33.501）；核心网零改动。
- **重识别**：91.4% → 49.3%（含 TLS 混淆，600 客户端上增强 SiamHAN）；92.9% → 75.0%（仅 vSIM）。
- **原型**：Genesys2 FPGA + Rocket Chip RISC-V（PUF 密钥、TRNG、PMP、Keystone、libsodium）+ srsRAN/srsUE + Open5GS + 仿真 SM-DP+/RA 机构。
- **开销**：认证约 658 ms（仿真 eSIM 约 7 ms），重认证切换约 1.68 s，画像切换约 11 ms，内存 <1%，认证后吞吐一致。
- **局限**：TEE 侧信道暴露；同地同时共现的位置/时间关联；需运营商/MVNO 下发；ZeroMQ 射频仿真（暂无 SDR 实射频）；切换前需先注销。

## Why it matters / what's new (EN)
The `cellular-security` bin tracks 5G/6G attack-surface and privacy research. Most subscriber-privacy work targets the SUPI/IMSI catcher problem or traffic obfuscation; Di5Guise instead names a quieter, structural leak — the immutable *device* profile that survives subscriber-identity rotation — and shows that virtualizing the SIM into a TEE with attested dynamic provisioning halves an operator's ability to re-identify a returning user (91.4% → 49.3%), all while keeping the 5G-AKA flow and core network untouched. The honest-but-curious-operator threat model and the working FPGA + srsRAN + Open5GS prototype (with concrete latency/overhead numbers) make this a concrete, reproducible counterpoint to the surveillance-by-binding assumption baked into eSIM, and a useful design reference for anyone proposing privacy-by-design subscriber identity for 6G.

## Why it matters / what's new (ZH)
`cellular-security` 分箱跟踪 5G/6G 攻击面与隐私研究。多数订户隐私工作针对 SUPI/IMSI 捕获器问题或流量混淆；Di5Guise 则指出一处更隐蔽的结构性泄露——在订户身份轮换后依然不变的*设备*画像——并证明将 SIM 虚拟化进 TEE 并以证明支撑动态下发，可把运营商重识别回访用户的能力减半（91.4% → 49.3%），同时保持 5G-AKA 流程与核心网不变。诚实但好奇的运营商威胁模型，以及可运行的 FPGA + srsRAN + Open5GS 原型（附具体时延/开销数据），使其成为对 eSIM "以绑定实现监视"假设的具体、可复现的反例，也是为 6G 提出"隐私设计优先"订户身份的有用设计参考。
