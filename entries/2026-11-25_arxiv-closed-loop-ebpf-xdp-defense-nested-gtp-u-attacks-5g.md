---
id: 2026-11-25_arxiv-closed-loop-ebpf-xdp-defense-nested-gtp-u-attacks-5g
date_published: 2026-11-22
date_found: 2026-11-25
type: academic-paper
technology: cellular
title_en: "Mitigating Nested GTP Attacks: A Closed-Loop eBPF Defense for 5G and Beyond Networks"
title_zh: "缓解嵌套 GTP 攻击：面向 5G 及后续网络的闭环 eBPF 防御"
url: "https://arxiv.org/abs/2611.29756"
source_quality: full
topics: [GTP-U, nested-GTP, eBPF, XDP, UPF, network-slicing, Free5GC, UERANSIM, Containerlab, closed-loop-defense]
topic_primary: cellular-security
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)

AbdulAziz AbdulGhaffar and Ashraf Matrawy (Carleton University, Ottawa) address nested GTP-U (GTP-in-GTP) payload attacks, which an authenticated UE can mount against the 5G user plane: the UPF validates only the outermost GTP-U header and treats the inner payload as opaque, so a crafted inner GTP-U packet can be routed back into internal user-plane or control-plane interfaces. The paper cites Shaik et al. (ACM CCS 2025) for the attack demonstrations on six 5G cores and notes that the threat is magnified in multi-tenant network-slicing deployments. The proposed defense is a closed loop with three parts: an in-kernel XDP Detection and Drop Module (XDP-DDM) attached to the UPF N3 ingress, a user-space User-Plane Telemetry Agent (UP-TA), and a multi-threaded Control-Plane Mitigation Orchestrator (CP-MO).

The XDP-DDM flags a nested packet when the inner UDP destination port is 2152 (the GTP-U port), drops it, and uses a BPF LRU map as a 10-second per-attacker alert debounce. The UP-TA forwards lightweight JSON alerts to the control plane, where the CP-MO resolves the inner IP to a SUPI and uses 3GPP REST calls to release the PDU session at the SMF, deregister the UE at the AMF and delete the subscriber profile at the UDR. The system is evaluated on a sliced 5G testbed (Free5GC, UERANSIM, Containerlab, VirtualBox VMs) with eMBB and URLLC slices, using a TRex-replayed nested GTP-U flood at 10,000 packets per second from an attacker in one slice against a victim UE in another. The authors state that the source code will be released on publication.

## Summary (ZH)

AbdulAziz AbdulGhaffar 与 Ashraf Matrawy（卡尔顿大学，渥太华）研究嵌套 GTP-U（GTP-in-GTP）载荷攻击：经认证的 UE 可对 5G 用户面发起此类攻击，因为 UPF 仅校验最外层 GTP-U 头，把内层载荷当作不透明字节流，精心构造的内层 GTP-U 包因而可被路由回内部用户面或控制面接口。论文引用 Shaik 等人（ACM CCS 2025）在六个 5G 核心网上的攻击演示，并指出在多租户网络切片部署中该威胁会被放大。所提防御是一个由三部分组成的闭环：挂载在 UPF N3 入口的内核态 XDP 检测与丢弃模块（XDP-DDM）、用户态用户面遥测代理（UP-TA），以及多线程的控制面缓解编排器（CP-MO）。

当内层 UDP 目的端口为 2152（GTP-U 端口）时，XDP-DDM 判定为嵌套包并丢弃，同时用 BPF LRU 映射实现每个攻击者 10 秒的告警去抖。UP-TA 向控制面转发轻量 JSON 告警，CP-MO 将内层 IP 解析为 SUPI，并通过 3GPP REST 调用在 SMF 释放 PDU 会话、在 AMF 注销 UE、在 UDR 删除签约档案。系统在带 eMBB 与 URLLC 切片的 5G 测试床（Free5GC、UERANSIM、Containerlab、VirtualBox 虚拟机）上评估：用 TRex 重放嵌套 GTP-U 包，以 10,000 包/秒从一个切片中的攻击者向另一切片中的受害 UE 发起洪泛。作者表示代码将在论文发表时公开。

## Key technical points (EN)

- Threat model: the attacker is a legitimate, authenticated UE with an IP address and slice attachment; the serving gNB is trusted and assigns the TEID; control-plane NFs are assumed isolated, so the attack surface is confined to the data plane. The attacks listed include TEID/SEID enumeration, UE-to-UE injection, PFCP-in-GTP control-plane boundary bridging, amplified reflection with billing fraud, and cross-slice injection.
- Data-plane detection: the XDP program parses the outer IP/UDP/GTP-U headers and the inner headers, passes normal traffic (inner UDP destination port other than 2152) with XDP_PASS, and drops nested traffic with XDP_DROP. It runs before the packet reaches the UPF application, so the paper describes it as independent of the UPF implementation on Linux-based UPFs.
- Cross-plane telemetry: the kernel module writes IP, TEID and detection time via trace_pipe; the UP-TA converts this to JSON and sends it out of band over the N4 interface so that JSON work stays out of the kernel path.
- Control-plane revocation (CP-MO): resolves attacker IP to SUPI and SM context, then POSTs a session release to the SMF, POSTs a deregistration to the AMF and DELETEs the profile at the UDR (Algorithm 3).
- Under the flood, the baseline UPF victim's RTT stayed above 100 ms and peaked above 500 ms and its TCP throughput fell to 0 Mbps; with the defense, RTT and throughput stayed consistent with pre-attack levels and the attack volume in the victim's tunnel was zero. The paper notes that although 10,000 PPS was injected, 500-1,200 PPS reached the victim's tunnel because the gtp5g kernel module saturated.
- Overhead on legitimate traffic (100 clean samples, 95% CI): baseline RTT 16.8 ms (eMBB) and 19.1 ms (URLLC) versus about 18.3 ms and 20.5 ms with the defense, which the authors attribute to virtualized network variance, user-space context switching and the evaluation's ICMP telemetry logging rather than data-plane queuing; TCP throughput stayed at about 24.5-25 Mbps (eMBB) and 27.5-28 Mbps (URLLC) in both cases.
- Closed-loop delays (100 samples): XDP detection under 0.4 us per packet (0.313-0.377 us across packet sizes in Fig. 9), UP-TA reporting delay averaging 0.988 ms, and CP-MO mitigation delay averaging 132.6 ms; the latter is dominated by the REST calls and runs asynchronously.
- Stated limitations: testbed is virtualized with UERANSIM bounding throughput to about 25-35 Mbps, and no bare-metal stress or multi-UE flooding was run; the signature (inner UDP port 2152) can false-positive on benign traffic to that port; only untagged, unfragmented IPv4 is handled; XDP needs cleartext GTP-U so N3 IPsec must terminate before the UPF; per-IP debounce and revocation assume source-IP validation upstream, and spoofed inner IPs could evade lookup or revoke an innocent UE.

## Key technical points (ZH)

- 威胁模型：攻击者为合法、已认证的 UE，拥有 IP 地址并接入切片；服务 gNB 可信并分配 TEID；控制面网元假定被隔离，因此攻击面限定在数据面。文中列出的攻击包括 TEID/SEID 枚举、UE 间注入、PFCP-in-GTP 控制面边界桥接、带计费欺诈的放大反射以及跨切片注入。
- 数据面检测：XDP 程序解析外层 IP/UDP/GTP-U 头与内层头，对正常流量（内层 UDP 目的端口不是 2152）执行 XDP_PASS，对嵌套流量执行 XDP_DROP。它在包到达 UPF 应用之前运行，论文因此称其与基于 Linux 的 UPF 实现无关。
- 跨平面遥测：内核模块经 trace_pipe 输出 IP、TEID 与检测时间；UP-TA 将其转为 JSON 并通过 N4 接口带外发送，使 JSON 处理不进入内核路径。
- 控制面撤销（CP-MO）：将攻击者 IP 解析为 SUPI 与 SM 上下文，然后向 SMF POST 会话释放、向 AMF POST 注销，并向 UDR 发 DELETE 删除档案（算法 3）。
- 洪泛下，基线 UPF 的受害者 RTT 持续高于 100 ms、峰值超过 500 ms，TCP 吞吐降至 0 Mbps；启用防御后 RTT 与吞吐保持在攻击前水平，受害者隧道中的攻击流量为零。论文指出，尽管注入速率为 10,000 PPS，进入受害者隧道的仅 500-1,200 PPS，原因是 gtp5g 内核模块已饱和。
- 对正常流量的开销（100 个干净样本，95% 置信区间）：基线 RTT 为 16.8 ms（eMBB）与 19.1 ms（URLLC），启用防御后约为 18.3 ms 与 20.5 ms，作者将差异归因于虚拟化网络波动、用户态上下文切换及评估用的 ICMP 遥测日志，而非数据面排队；两种情形下 TCP 吞吐均约为 24.5-25 Mbps（eMBB）与 27.5-28 Mbps（URLLC）。
- 闭环时延（100 个样本）：XDP 检测每包低于 0.4 us（图 9 中各包长为 0.313-0.377 us），UP-TA 上报时延平均 0.988 ms，CP-MO 缓解时延平均 132.6 ms；后者主要来自 REST 调用，且异步执行。
- 文中声明的局限：测试床为虚拟化环境，UERANSIM 将吞吐限制在约 25-35 Mbps，未做裸机压力和多 UE 洪泛测试；检测特征（内层 UDP 端口 2152）可能对访问该端口的正常流量误报；仅处理无 VLAN 标签、未分片的 IPv4；XDP 需要明文 GTP-U，因此 N3 IPsec 必须在 UPF 之前终结；按 IP 去抖与撤销假定上游（如 gNB）已做源 IP 校验，否则伪造内层 IP 可能绕过查找或误撤销无辜 UE。

## Why it matters / what's new (EN)

The paper pairs a driver-level drop with automatic control-plane teardown of the offending UE, and reports a measured comparison against an undefended UPF on a sliced testbed. The authors' own related-work table positions it against prior eBPF/XDP UPF work that handles only benign forwarding or QoS, and against slice-isolation approaches based on offline optimization (including the same authors' Slice Isolation-as-a-Service entry, 2026-11-23_arxiv-slice-isolation-as-a-service-cross-slice-gtp-in-gtp-defense). All evidence comes from a virtualized lab with a single attacker; the detection rule and the source-IP assumptions are limitations the paper states itself.

## Why it matters / what's new (ZH)

该论文将驱动层丢弃与对违规 UE 的控制面自动拆除结合，并在带切片的测试床上给出了与无防御 UPF 的实测对比。作者自己的相关工作表将其与仅处理正常转发或 QoS 的 eBPF/XDP UPF 工作，以及基于离线优化的切片隔离方法（包括同一作者的 Slice Isolation-as-a-Service 条目）作对照。所有证据来自单一攻击者的虚拟化实验室环境；检测规则与源 IP 假设是论文自己指出的局限。

## Images

None.
