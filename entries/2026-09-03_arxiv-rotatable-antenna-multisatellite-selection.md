---
id: 2026-09-03_arxiv-rotatable-antenna-multisatellite-selection
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: satellite
title_en: "Rotatable Antenna Enabled Multi-Satellite Communications: Joint Satellite Selection and Boresight Trajectory Optimization"
title_zh: "可旋转天线赋能的多卫星通信：卫星选择与指向轨迹的联合优化"
url: "https://arxiv.org/abs/2609.00929"
source_quality: full
topics: [rotatable-antenna, satellite-selection, submodularity, Minorization-Maximization, Riemannian-optimization, two-timescale, MMSE-SIC, Starlink, interference]
topic_primary: leo-constellations
topics_secondary: [starlink]
novelty_score: 2
---

## Summary (EN)
Peng, Wu and Chen (Shanghai Jiao Tong University), with Hu (Innovation Academy for Microsatellites, Chinese Academy of Sciences) and Lin (Shanghai Institute of Satellite Engineering), study a ground station equipped with an array of independently rotatable antenna (RA) elements that receives concurrent data streams from multiple LEO satellites over shared time-frequency resources. The paper poses a **two-timescale joint design problem**: at a slower "control-epoch" timescale the ground station must choose which subset of visible satellites to serve simultaneously (subject to a maximum stream count and mechanical slew-rate limits between epochs) and how to orient each RA element's boresight; at a faster "slot" timescale it performs MMSE-SIC digital reception using instantaneous channel state. The paper's own capacity decomposition (for two satellites) shows sum capacity depends on each satellite's individual channel strength plus a "spatial complementarity" term that vanishes when the two satellites' interference-whitened channels are highly aligned — establishing, as stated by the authors, that selecting the strongest-signal satellites alone can still yield poor multi-satellite capacity if their channels are not spatially separable, and that RA steering can partially restore separability the selection process cannot on its own.

For satellite selection, the authors prove the epoch-level throughput function is monotone and submodular in the served-satellite set, then build a discrete Minorization-Maximization (MM) algorithm around this property: at each iteration it constructs a modular (linear) surrogate function — tight at the current incumbent set and a guaranteed lower bound elsewhere via a greedy marginal-gain ordering — and selects the satellites with the largest surrogate weights, yielding a provably non-decreasing throughput sequence. For antenna orientation, they derive the Riemannian gradient of throughput with respect to each element's unit-sphere boresight direction, solve a linear oracle over the steering-region-and-slew-rate-constrained feasible set at each step, and use an Armijo line search to guarantee improvement; because the inter-epoch slew constraints form a bipartite structure, odd and even epochs can each be updated in parallel, cutting the update from L sequential rounds to two.

Simulated against a Starlink-like Walker-Delta shell (53°, 1584 satellites/72 planes/1 phase, 550 km) with an 18.2 GHz / 100 MHz downlink, a 3×3 rotatable array, up to 6 simultaneous served satellites and 4 external interferers, the paper compares four schemes — RA+MM, RA+Gain-TopK, Fixed UPA+MM and Fixed UPA+Gain-TopK — with the comparison presented graphically. The conclusion the authors draw is regime-dependent: satellite selection matters most in underloaded and actuator-limited regimes, whereas RA boresight shaping becomes the more influential lever near full spatial loading, when multiple streams compete for limited spatial resources. A separate sweep varying satellite off-zenith spacing ψ shows throughput peaking at an intermediate angle rather than at either maximum channel strength (ψ = 0°) or maximum angular separation (ψ = 60°): Fig. 3(b) gives a peak of 5.005 Gbps at ψ = 25°, against 1.297 Gbps at 0° and 3.646 Gbps at 60°. The authors present this as direct confirmation of the strength-separability trade-off their capacity decomposition predicts.

## Summary (ZH)
上海交通大学的 Peng、Wu、Chen，与中国科学院微小卫星创新研究院的 Hu、上海卫星工程研究所的 Lin 合作，研究一个配备一组独立可旋转天线（RA）单元的地面站，如何在共享时频资源上同时接收多颗 LEO 卫星的数据流。论文提出一个**双时间尺度联合设计问题**：在较慢的"控制历元"时间尺度上，地面站须在最大流数与历元间机械转速限制下，选择同时服务哪一子集的可见卫星，并确定每个 RA 单元的指向；在较快的"时隙"时间尺度上，则利用瞬时信道状态进行 MMSE-SIC 数字接收。论文自身给出的（针对两颗卫星的）容量分解表明，和容量取决于每颗卫星各自的信道强度，加上一个"空间互补性"项，当两颗卫星经干扰白化后的信道高度对齐时该项会趋于消失——作者据此指出，仅选择信号最强的卫星，若其信道在空间上不可分离，仍可能导致多卫星容量表现不佳，而 RA 指向调整可部分恢复选择过程本身无法实现的空间可分离性。

在卫星选择方面，作者证明历元级吞吐量函数关于被服务卫星集合是单调且次模的，并基于该性质构建了一个离散极小化-极大化（MM）算法：每轮迭代构造一个模块化（线性）代理函数——在当前基准集合处取等、在其他处经贪心边际增益排序保证为下界——并选择代理权重最大的卫星集合，从而得到可证明非递减的吞吐量序列。在天线指向方面，作者推导了吞吐量关于每个单元单位球面指向方向的黎曼梯度，在每一步于受指向区域与转速约束限定的可行集上求解线性预言机问题，并用 Armijo 线搜索保证性能提升；由于历元间转速约束呈二部图结构，奇、偶历元可分别并行更新，从而将更新轮次从 L 轮串行降至两轮。

在类星链的 Walker-Delta 壳层（倾角 53°，1584 颗卫星/72 轨道面/1 相位，550 公里）、18.2 GHz / 100 MHz 下行链路、3×3 可旋转阵列、最多同时服务 6 颗卫星与 4 个外部干扰源的仿真设置下，论文对比了四种方案——RA+MM、RA+Gain-TopK、固定 UPA+MM 与固定 UPA+Gain-TopK，对比结果以图形方式呈现。作者给出的结论依工作区间而定：在负载不足与执行机构受限的区间，卫星选择的作用最为关键；而在接近满空间负载、多条数据流争夺有限空间资源时，RA 指向整形成为更具影响力的手段。另一组扫描卫星离天顶角间距 ψ 的实验显示，吞吐量在中间角度达到峰值，而非在最大信道强度对应角度（ψ = 0°）或最大角度间隔（ψ = 60°）处取得峰值：图 3(b) 给出 ψ = 25° 时峰值 5.005 Gbps，而 0° 时为 1.297 Gbps、60° 时为 3.646 Gbps。作者将此作为其容量分解所预测的"强度-可分离性"权衡的直接验证。

## Key technical points (EN)
- **Two-timescale architecture:** control-epoch level (satellite selection + RA boresight reconfiguration, subject to slew-rate limits between epochs) and slot level (MMSE-SIC reception using instantaneous CSI).
- **Capacity decomposition (as stated for the two-satellite case):** sum capacity = individual channel strengths + a spatial-complementarity term that vanishes as the interference-whitened channels of the two satellites become aligned — motivating joint (not sequential) selection-and-steering design.
- **Satellite selection:** epoch-level throughput proven monotone submodular; discrete Minorization-Maximization (MM) algorithm builds a tight modular surrogate via greedy marginal-gain ordering each iteration, guaranteeing a non-decreasing throughput sequence.
- **Antenna trajectory:** Riemannian gradient of throughput w.r.t. each element's unit-sphere boresight; per-step linear oracle over the steering-region/slew-rate-constrained feasible set; Armijo line search for guaranteed ascent; bipartite slew-constraint structure allows two-color (odd/even epoch) parallel updates, reducing update depth from L rounds to 2.
- **Evaluation setup:** Starlink-like Walker-Delta shell (53°:1584/72/1, 550 km), 18.2 GHz/100 MHz downlink, 3x3 half-wavelength UPA, up to 6 served satellites, 4 external interferers, 10 dB reference INR.
- **Headline results:** four schemes compared (RA+MM, RA+Gain-TopK, Fixed UPA+MM, Fixed UPA+Gain-TopK), reported graphically; the authors' conclusion is regime-dependent — satellite selection dominates in underloaded and actuator-limited regimes, RA boresight shaping dominates near full spatial loading when streams compete for limited spatial resources. Throughput peaks at an intermediate satellite off-zenith spacing: Fig. 3(b) gives 5.005 Gbps at ψ = 25°, vs. 1.297 Gbps at 0° (maximum strength) and 3.646 Gbps at 60° (maximum separation), confirming the strength-separability trade-off.

## Key technical points (ZH)
- **双时间尺度架构：** 控制历元层（卫星选择 + RA 指向重配置，受历元间转速限制）与时隙层（利用瞬时 CSI 的 MMSE-SIC 接收）。
- **容量分解（针对双卫星情形所述）：** 和容量 = 各卫星信道强度之和 + 一个空间互补性项，当两卫星经干扰白化的信道趋于对齐时该项趋于消失——这正是采用联合（而非先后顺序）选择-指向设计的动机。
- **卫星选择：** 证明历元级吞吐量关于卫星集合单调且次模；离散 MM 算法每轮迭代通过贪心边际增益排序构造紧致的模块化代理函数，保证吞吐量序列非递减。
- **天线轨迹：** 推导吞吐量关于每个单元单位球面指向方向的黎曼梯度；每一步在受指向区域/转速约束限定的可行集上求解线性预言机问题；用 Armijo 线搜索保证性能提升；转速约束的二部图结构支持奇偶历元的双色并行更新，将更新轮次从 L 轮降至 2 轮。
- **评估设置：** 类星链 Walker-Delta 壳层（53°:1584/72/1，550 公里），18.2 GHz/100 MHz 下行，3×3 半波长均匀平面阵，最多服务 6 颗卫星，4 个外部干扰源，10 dB 参考 INR。
- **主要结果：** 对比四种方案（RA+MM、RA+Gain-TopK、固定 UPA+MM、固定 UPA+Gain-TopK），结果以图形呈现；作者的结论依工作区间而定——负载不足与执行机构受限时以卫星选择为主导，接近满空间负载、多流争夺有限空间资源时则以 RA 指向整形为主导。吞吐量在卫星离天顶角间距取中间值时达到峰值：图 3(b) 给出 ψ = 25° 时 5.005 Gbps，而 0°（最大强度）时为 1.297 Gbps、60°（最大间隔）时为 3.646 Gbps，验证了强度-可分离性权衡。

## Why it matters / what's new (EN)
This knowledge base's LEO-constellation coverage already carries several ground-segment / receive-side optimization entries (2026-06-13 ground-station placement, 2026-08-20 ground-to-space GNSS reference coordination, 2026-08-25 STAR-GS ground-station-as-a-service scheduling), but those treat the ground station's receive hardware as fixed. This is the first entry in this knowledge base's satellite coverage to make the ground-station *antenna orientation itself* a joint optimization variable alongside multi-satellite selection, and the first entry in this knowledge base to bring a submodular-selection-plus-Riemannian-manifold-optimization combination to the multi-satellite reception problem, distinct from the RIS-based ground/vehicle terminal work already covered under satellite direct-to-device (2026-08-19, 2026-09-01).

## Why it matters / what's new (ZH)
本知识库的 LEO 星座板块已有若干地面段/接收侧优化相关条目（2026-06-13 地面站选址、2026-08-20 天地一体 GNSS 参考网协调、2026-08-25 STAR-GS 地面站即服务调度），但这些条目均将地面站接收硬件视为固定不变。本条目是本知识库卫星板块中首个把地面站*天线指向本身*与多卫星选择一并作为联合优化变量的条目，也是本知识库中首个将次模选择与黎曼流形优化相结合应用于多卫星接收问题的条目，有别于卫星直连终端板块中已有的基于 RIS 的地面/车载终端相关工作（2026-08-19、2026-09-01）。

## Images

None.
