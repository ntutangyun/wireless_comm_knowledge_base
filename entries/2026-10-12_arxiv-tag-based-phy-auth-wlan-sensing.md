---
id: 2026-10-12_arxiv-tag-based-phy-auth-wlan-sensing
date_published: 2026-09-27
date_found: 2026-10-12
technology: wifi
type: academic-paper
title_en: "Backward-Compatible Tag-Based PHY Authentication for Secure WLAN Sensing"
title_zh: "面向安全 WLAN 感知的向后兼容标签式物理层认证"
url: "https://arxiv.org/abs/2609.33539"
source_quality: full
topics: [802.11bf, WLAN sensing, spoofing, physical-layer authentication, NDP]
topic_primary: security-privacy
topics_secondary: [sensing-csi]
novelty_score: 3
---

## Summary (EN)

A paper submitted to arXiv on 27 September 2026 (eess.SP) addresses a spoofing vulnerability in Wi-Fi sensing that arises from the standard Null Data Packet (NDP) channel-sounding procedure: because a station announces an upcoming NDP via a mandatory NDP Announcement (NDPA) frame before the actual sounding signal, an adversary (termed Eve in the paper) can detect this announcement and transmit a forged NDP constructed as s'[n] = g[n] * s[n], where g[n] is an artificially designed channel meant to mislead the legitimate receiver's (Bob's) channel estimation -- letting Eve plant fake targets at false range-velocity coordinates, or conceal real targets, in a bistatic ISAC (integrated sensing and communication) scenario. A third party, Carol, represents a legacy receiver unaware of any defense, used to evaluate backward compatibility.

The proposed defense, which the paper calls a lightweight tag-embedding physical-layer authentication (PLA) scheme, generates a per-frame tag from a cryptographic hash of a shared secret key and a synchronized frame counter drawn from 802.11bf control fields (t_i = CHF(K||i)), preventing replay attacks. The first L_t bits of the tag are modulated into M_t-ary symbols (4-QAM in the evaluation); the next bits seed a maximum-length LFSR that produces a pilot-index sequence randomizing which subcarriers carry the tag, which the paper states minimizes and spreads channel-estimation error across the spectrum. The tag is embedded exclusively on the Very High Throughput Long Training Field (VHT-LTF) portion of the NDP, combining the reference signal and a scaled tag as X_i[k] = S_i[k] + sigma_t * T_i[k]. At the legitimate receiver, the channel is estimated only at untagged subcarriers and interpolated across tagged indices; a residual is extracted and passed through a matched filter producing a test statistic gamma_i, compared against a threshold to decide authenticity, with both hypotheses (tag present / absent) modeled as Gaussian so the false-alarm probability reduces to a closed-form Q-function.

For backward compatibility, a legacy receiver (Carol) that is unaware of the tag and uses ordinary channel estimation incurs an additional, bounded channel-estimation error; the paper derives a closed-form normalized mean-square error (NMSE = sigma_t^2*(N_t/N_s) + sigma_w^2) and a parameter constraint that keeps this error under a chosen tolerance. The paper reports that setting L_t = 64 and sigma_t^2 = 0.1 is sufficient to obtain an authentication probability exceeding 86.6% at the legitimate receiver while incurring only an additional 0.52 dB of channel-estimation error at the legacy receiver -- illustrating graceful degradation rather than incompatibility. Computational overhead is stated as O(N_t) operations (roughly 3*N_t additions, 4*N_t multiplications, and N_t interpolations) per frame.

Evaluation uses a simulated 5 GHz IEEE 802.11ac WLAN at 80 MHz (N=256 OFDM subcarriers, N_s=242 active pilots), a 128-bit secret key with SHA-256, 4-QAM tagging, the standard 14-tap WLAN Channel Model C, and reference parameters L_t=64, sigma_t^2=0.1, target false-alarm rate 0.05, SNR=10 dB. The abstract reports a 95% correct-authentication rate at 10 dB SNR. In the paper's ROC comparison at a common operating point (tag power allocation rho_t^2 = 0.01, 5% false-alarm rate), the scheme exceeds 96% authentication probability, versus 55.7% for existing tag-based methods and under 26% for passive (CFO-/CSI-based) schemes; target-detection rate at the legitimate receiver is 91.5% at 10 dB SNR, with only a 1.31% detection-rate floor gap at the legacy receiver under conservative parameters. The scheme is also evaluated for robustness to timing and frequency synchronization errors (normalized residual offsets delta = 4 and eta = 0.02, respectively), reporting negligible impact on authentication performance, and the paper argues Eve's probability of guessing the randomized pilot sequence for a single frame is bounded by 1/N_s with no predictive advantage from past observations.

## Summary (ZH)

一篇于 2026 年 9 月 27 日提交至 arXiv 的论文（eess.SP 类别）针对标准空数据包（NDP）信道探测流程中存在的一个欺骗漏洞展开研究：由于站点在实际探测信号之前会先通过强制性的 NDP 通告（NDPA）帧宣告即将进行的 NDP 探测，攻击者（论文中称为 Eve）可侦测到该通告并发射构造为 s'[n] = g[n] * s[n] 的伪造 NDP（其中 g[n] 是人为设计用以误导合法接收方"Bob"信道估计的信道），使 Eve 在双站 ISAC（通信感知一体化）场景中于虚假的距离-速度坐标处植入假目标，或隐藏真实目标。论文还引入第三方"Carol"，代表未部署任何防御的传统接收机，用于评估向后兼容性。

论文提出的防御方案被称为轻量级标签嵌入式物理层认证（PLA）方案：依据共享密钥与来自 802.11bf 控制字段的同步帧计数器的密码学哈希生成逐帧标签（t_i = CHF(K||i)），从而防止重放攻击。标签的前 L_t 位被调制为 M_t 进制符号（评估中采用 4-QAM）；随后的若干位用作最大长度 LFSR 的种子，生成一个随机化导频索引序列以确定由哪些子载波承载标签，论文指出这将信道估计误差最小化并分散至整个频谱。标签被专门嵌入 NDP 中的超高吞吐量长训练字段（VHT-LTF）部分，将参考信号与经缩放的标签相结合：X_i[k] = S_i[k] + sigma_t * T_i[k]。在合法接收方处，仅在未加标签的子载波上估计信道，并在加标签的索引处进行插值；提取残差后经匹配滤波得到检验统计量 gamma_i，与阈值比较以判定真伪，标签存在/不存在两种假设均建模为高斯分布，从而使虚警概率简化为封闭形式的 Q 函数。

在向后兼容性方面，不知晓标签存在、采用常规信道估计的传统接收机（Carol）将产生额外但有界的信道估计误差；论文给出了归一化均方误差的闭式表达（NMSE = sigma_t^2*(N_t/N_s) + sigma_w^2）以及将该误差控制在所选容限内的参数约束。论文报告，设置 L_t = 64、sigma_t^2 = 0.1 即可在合法接收方获得超过 86.6% 的认证概率，同时仅使传统接收机产生额外 0.52 dB 的信道估计误差——体现了平稳退化而非不兼容。计算开销为每帧 O(N_t) 次运算（约 3*N_t 次加法、4*N_t 次乘法及 N_t 次插值）。

评估基于仿真的 5 GHz IEEE 802.11ac WLAN（80 MHz 带宽，N=256 个 OFDM 子载波，N_s=242 个活跃导频）、采用 SHA-256 的 128 位共享密钥、4-QAM 标签调制、标准 14 径 WLAN 信道模型 C，以及参考参数 L_t=64、sigma_t^2=0.1、目标虚警率 0.05、SNR=10 dB。摘要报告在 10 dB SNR 下正确认证率为 95%；在论文 ROC 对比的共同工作点（标签功率分配 rho_t^2 = 0.01、虚警率 5%）下，该方案认证概率超过 96%，而现有标签式方法为 55.7%，被动式（基于 CFO/CSI）方案不足 26%；合法接收方在 10 dB SNR 下的目标检测率为 91.5%，在保守参数设置下传统接收方检测率的下降幅度仅为 1.31%。该方案还评估了对时间与频率同步误差（归一化残余偏移分别为 δ = 4 与 η = 0.02）的鲁棒性，报告其对认证性能影响可忽略；论文还论证 Eve 在单帧内猜中随机化导频序列的概率上界为 1/N_s，且过往观测不提供任何预测优势。

## Key technical points (EN)

- **Threat model**: NDPA frame leaks sounding timing; Eve forges s'[n] = g[n]*s[n] to spoof fake targets or hide real ones in a bistatic ISAC setup; Carol models a legacy, defense-unaware receiver.
- **Tag generation**: t_i = CHF(K || i) from shared key + synchronized 802.11bf frame counter; first L_t bits -> M_t-ary symbols (4-QAM); further bits seed a max-length LFSR for randomized pilot-index placement.
- **Embedding point**: tag embedded only on the VHT-LTF portion of the NDP: X_i[k] = S_i[k] + sigma_t*T_i[k].
- **Detection**: channel estimated at untagged subcarriers, interpolated at tagged ones; residual -> matched filter -> test statistic gamma_i vs. threshold; closed-form Gaussian-based false-alarm probability.
- **Backward compatibility**: closed-form NMSE = sigma_t^2*(N_t/N_s) + sigma_w^2 for legacy receivers; L_t=64, sigma_t^2=0.1 gives >86.6% authentication at Bob with only +0.52 dB estimation error at Carol.
- **Overhead**: O(N_t) ops/frame (~3N_t additions, 4N_t multiplications, N_t interpolations).
- **Evaluation**: simulated 5 GHz 802.11ac, 80 MHz, N=256/N_s=242, 128-bit key/SHA-256, Channel Model C, SNR=10 dB.
- **Headline numbers**: abstract reports 95% authentication at 10 dB SNR; at the ROC's common operating point (rho_t^2=0.01, 5% false-alarm) the scheme exceeds 96% (vs. 55.7% existing tag-based methods, <26% passive CFO-/CSI-based baselines); 91.5% target-detection rate at Bob; 1.31% detection floor gap at Carol; robust to timing/frequency sync errors (normalized residual offsets delta=4, eta=0.02); Eve's per-frame guess probability bounded by 1/N_s.

## Key technical points (ZH)

- **威胁模型**：NDPA 帧泄露探测时机；Eve 伪造 s'[n] = g[n]*s[n] 在双站 ISAC 场景中植入假目标或隐藏真实目标；Carol 代表未部署防御的传统接收机。
- **标签生成**：t_i = CHF(K || i)，由共享密钥与来自 802.11bf 控制字段的同步帧计数器生成；前 L_t 位调制为 M_t 进制符号（4-QAM）；后续位作为最大长度 LFSR 种子，生成随机化导频索引放置方案。
- **嵌入位置**：标签仅嵌入 NDP 中的 VHT-LTF 部分：X_i[k] = S_i[k] + sigma_t*T_i[k]。
- **检测**：在未加标签子载波处估计信道，在加标签索引处插值；提取残差后经匹配滤波得到检验统计量 gamma_i，与阈值比较；基于高斯假设的闭式虚警概率。
- **向后兼容性**：传统接收机的闭式 NMSE = sigma_t^2*(N_t/N_s) + sigma_w^2；设置 L_t=64、sigma_t^2=0.1 可在 Bob 处获得超过 86.6% 的认证率，同时在 Carol 处仅增加 0.52 dB 估计误差。
- **开销**：每帧 O(N_t) 次运算（约 3N_t 次加法、4N_t 次乘法、N_t 次插值）。
- **评估设置**：仿真 5 GHz 802.11ac，80 MHz，N=256/N_s=242，128 位密钥/SHA-256，信道模型 C，SNR=10 dB。
- **核心数据**：摘要报告 10 dB SNR 下认证率 95%；在 ROC 共同工作点（rho_t^2=0.01、虚警率 5%）下方案认证概率超过 96%（对比现有标签式方法的 55.7% 与被动式 CFO/CSI 基线的不足 26%）；Bob 处目标检测率 91.5%；Carol 处检测率下降仅 1.31%；对时间/频率同步误差具有鲁棒性（归一化残余偏移 δ=4、η=0.02）；Eve 单帧猜测概率上界为 1/N_s。

## Why it matters / what's new (EN)

The KB's security-privacy and sensing-csi bins have separately covered WPA2/3 authentication weaknesses and 802.11bf sensing mechanisms, but this is the KB's first entry addressing a spoofing attack specific to the NDP channel-sounding procedure that 802.11bf sensing depends on, and the first to propose a physical-layer, tag-embedding authentication defense for it with a quantified backward-compatibility bound (+0.52 dB at a legacy receiver) rather than requiring a protocol change that would break existing devices.

## Why it matters / what's new (ZH)

知识库的安全与隐私、以及 Wi-Fi 感知与 CSI 两个分类此前分别涵盖了 WPA2/3 认证弱点与 802.11bf 感知机制，但这是知识库首条针对 802.11bf 感知所依赖的 NDP 信道探测流程本身存在的欺骗攻击的条目，也是首条为此提出物理层标签嵌入式认证防御、并给出量化向后兼容性界限（传统接收机处 +0.52 dB）而非需要破坏现有设备的协议变更方案的条目。

## Images

None.
