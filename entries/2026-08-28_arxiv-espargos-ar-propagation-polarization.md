---
id: 2026-08-28_arxiv-espargos-ar-propagation-polarization
date_published: 2026-08-26
date_found: 2026-08-28
type: academic-paper
technology: wifi
title_en: "Visualizing Wireless Propagation and Polarization in Augmented Reality with ESPARGOS"
title_zh: "用 ESPARGOS 在增强现实中可视化无线传播与极化"
url: "https://arxiv.org/abs/2608.25996"
source_quality: full
topics: [WiFi-sensing, CSI, beamforming, polarization, antenna-array, channel-sounding]
topic_primary: sensing-csi
topics_secondary: [ftm-ranging]
novelty_score: 3
---

## Summary (EN)

Florian Euchner and Stephan ten Brink (submitted 26 Aug 2026, eess.SP) build an augmented-reality instrument that renders the invisible: a live camera overlay showing, on the actual physical scene in front of you, where Wi-Fi energy is arriving from, how delayed each arrival is, and what polarization state each angular component carries. The measurement front end is **ESPARGOS**, their ultra-low-cost phase-coherent multi-antenna Wi-Fi channel sounder. The demonstration configuration tiles four boards into a 4×8 array of 32 antenna elements, each board a 2×4 patch array with dual feeds providing ±45° slant polarization, spaced at half a wavelength, operating in the 2.4 GHz Wi-Fi band. Receivers share a clock and phase-reference network; raw CSI is gain-corrected, phase-calibrated across receivers and temporally aligned before use.

The angular picture comes from a 2-D FFT across the array, averaged over OFDM subcarriers and restricted to samples near the first-arrival tap for efficiency. A plane wave from azimuth φ and elevation ϑ produces phase progressions Ψx = π·cos(ϑ)·sin(φ) and Ψy = π·sin(ϑ) along the two array axes, so beamspace coordinates invert directly to physical angles, which then project into normalised image coordinates through a standard pinhole camera model with fixed angular offsets absorbing the manual antenna-versus-camera alignment error. Relative path delay per beam is estimated from the phase increment between adjacent subcarriers, τ̂ = arg(Σ_k (b_k)ᴴ b_{k+1}) / (2π·Δf), and mapped to colour hue while received power drives brightness — so multipath components separate simultaneously by angle *and* by arrival time in a single frame.

Polarization is the part with the least prior art in a live Wi-Fi tool. The dual R/L feeds are alternated, buffered and globally phase-aligned to compensate carrier frequency offset, then converted to vertical/horizontal field components through an empirically calibrated per-element Jones matrix that folds in feed response and physical antenna orientation. Assuming the relative V/H components are constant across the observed band within a beam, the system estimates a polarization state per beam and animates it as an electric-field phasor trajectory, ℜ{η̂ e^{jωt}}. Linear, circular and elliptical polarizations therefore appear as visually distinct motions — circular polarization renders as rotating dots whose handedness flips after a metallic reflection.

Rendering is split CPU/GPU: the CPU produces low-resolution textures holding discretised beamspace power plus optional delay and polarization metadata, a vertex shader performs the beamspace-to-image coordinate transform, and fragment shaders blend the RF layer onto the camera video and animate the polarization traces. The whole pipeline runs live on a laptop consuming Ethernet-streamed CSI. Five demonstrations are shown: outdoor separation of a direct path from a ground reflection and a building-corner reflection by delay colour; simultaneous resolution of two dipole transmitters with different polarizations and phases; an LHCP signal over line-of-sight rendered as counter-clockwise rotating dots; the same transmitter appearing as RHCP after a metallic wall reflection; and a wire rack acting as a polarization-selective filter attenuating one orientation. The implementation is open-sourced as `pyespargos`; the work is supported by German federal grant SENSATION (16KIS2532).

## Summary (ZH)

Florian Euchner 与 Stephan ten Brink（2026 年 8 月 26 日提交，eess.SP）做了一件把不可见变可见的增强现实仪器：一层实时相机叠加图，直接在你眼前的真实场景上显示 Wi-Fi 能量从哪个方向到达、每一路到达延迟多少、以及每个角度分量携带何种极化状态。测量前端是 **ESPARGOS**——他们研制的超低成本相位相干多天线 Wi-Fi 信道探测器。演示配置把四块板拼成 4×8 共 32 个天线单元的阵列，每块板为 2×4 贴片阵列、双馈提供 ±45° 斜极化、半波长间距，工作在 2.4 GHz Wi-Fi 频段。各接收机共享时钟与相位参考网络；原始 CSI 先做增益校正、跨接收机相位校准与时间对齐后再使用。

角度图像来自沿阵列的二维 FFT，在 OFDM 子载波上平均，并为提高效率只保留首达抽头附近的样本。来自方位角 φ、俯仰角 ϑ 的平面波在两个阵列轴上产生相位递进 Ψx = π·cos(ϑ)·sin(φ) 与 Ψy = π·sin(ϑ)，因此波束空间坐标可直接反解为物理角度，再经标准针孔相机模型投影到归一化图像坐标，固定角度偏置吸收天线与相机之间的手工对准误差。每个波束的相对路径时延由相邻子载波间的相位增量估计，τ̂ = arg(Σ_k (b_k)ᴴ b_{k+1}) / (2π·Δf)，映射为颜色色相，接收功率则控制亮度——于是多径分量在同一帧里同时按角度*和*到达时间分离。

极化是这套实时 Wi-Fi 工具中最缺乏先例的部分。双 R/L 馈电交替采集、缓存并做全局相位对齐以补偿载波频偏，随后通过逐单元经验标定的 Jones 矩阵（其中已折入馈电响应与天线物理朝向）转换为垂直/水平场分量。在假设波束内相对 V/H 分量在观测带宽上恒定的前提下，系统逐波束估计极化状态，并以电场相量轨迹 ℜ{η̂ e^{jωt}} 动画呈现。因此线极化、圆极化与椭圆极化在视觉上呈现出各自不同的运动形态——圆极化显示为旋转的点，且旋向会在金属反射后翻转。

渲染按 CPU/GPU 分工：CPU 生成含离散化波束空间功率及可选时延、极化元数据的低分辨率纹理，顶点着色器完成波束空间到图像坐标的变换，片元着色器把射频图层与相机视频混合并驱动极化轨迹动画。整条流水线在一台笔记本上实时运行，消费以太网推送的 CSI。文中给出五个演示：室外场景中按时延颜色区分直达径、地面反射与建筑拐角反射；同时分辨两个极化与相位各异的偶极子发射源；视距下的左旋圆极化（LHCP）信号呈现为逆时针旋转的点；同一发射源经金属墙反射后显示为右旋圆极化（RHCP）；以及金属线架充当极化选择性滤波器、只衰减一个取向。实现以 `pyespargos` 开源；工作由德国联邦项目 SENSATION（16KIS2532）资助。

## Key technical points (EN)

- **Array**: 4 boards → 4×8 = 32 elements, each board a 2×4 patch array with dual feeds (±45° slant polarization), λ/2 spacing, 2.4 GHz Wi-Fi band, phase-coherent via a shared clock and phase-reference network.
- **Beamspace**: 2-D FFT over the array, averaged across subcarriers, restricted near the first-arrival tap. Ψx = π·cos(ϑ)·sin(φ), Ψy = π·sin(ϑ) invert to physical azimuth/elevation.
- **AR registration**: pinhole projection of beamspace angles into normalised image coordinates (u,v) ∈ [0,1]², with fixed angular offsets correcting manual antenna/camera alignment.
- **Delay layer**: τ̂(Ψx,Ψy) = arg(Σ_k (b_k)ᴴ b_{k+1}) / (2π·Δf) from adjacent-subcarrier phase increments; hue encodes delay, brightness encodes power.
- **Polarization layer**: alternating R/L dual-feed capture, backlog-buffered and iteratively globally phase-aligned against CFO, then a per-element calibrated Jones matrix maps R/L → V/H; per-beam polarization animated as a phasor trajectory. Handedness inversion on metallic reflection is directly visible.
- **Rendering split**: CPU builds low-resolution beamspace textures; a vertex shader does the angle-to-image transform; fragment shaders composite and animate. Runs live on a laptop from Ethernet-streamed CSI. Exact frame rate and latency are not reported.
- **Demonstrations**: outdoor direct-vs-ground-reflection-vs-corner-reflection separation; two simultaneously resolved dipoles; LHCP over LOS; RHCP after metallic reflection; a wire rack as a polarization filter.
- **Open source**: `github.com/ESPARGOS/pyespargos`.

## Key technical points (ZH)

- **阵列**：4 块板 → 4×8 = 32 单元，每板为 2×4 贴片阵列、双馈（±45° 斜极化）、λ/2 间距、2.4 GHz Wi-Fi 频段，通过共享时钟与相位参考网络保持相位相干。
- **波束空间**：沿阵列的二维 FFT，在子载波上平均，并限制在首达抽头附近。Ψx = π·cos(ϑ)·sin(φ)、Ψy = π·sin(ϑ) 可反解为物理方位角/俯仰角。
- **AR 配准**：将波束空间角度经针孔投影映射到归一化图像坐标 (u,v) ∈ [0,1]²，用固定角度偏置修正天线与相机的手工对准。
- **时延图层**：由相邻子载波相位增量得 τ̂(Ψx,Ψy) = arg(Σ_k (b_k)ᴴ b_{k+1}) / (2π·Δf)；色相编码时延，亮度编码功率。
- **极化图层**：R/L 双馈交替采集，经缓存与迭代全局相位对齐补偿载波频偏，再由逐单元标定的 Jones 矩阵把 R/L 映射为 V/H；逐波束极化以相量轨迹动画呈现。金属反射导致的旋向翻转可直接观察到。
- **渲染分工**：CPU 构建低分辨率波束空间纹理；顶点着色器完成角度到图像的变换；片元着色器负责合成与动画。整条链路在笔记本上实时运行，消费以太网推送的 CSI。文中未给出确切帧率与时延。
- **演示场景**：室外直达径 / 地面反射 / 拐角反射的分离；同时分辨两个偶极子；视距 LHCP；金属反射后的 RHCP；金属线架作为极化滤波器。
- **开源**：`github.com/ESPARGOS/pyespargos`。

## Why it matters / what's new (EN)

Almost every entry in the `sensing-csi` bin treats CSI as an opaque feature vector fed to a learned model — `2026-05-01_arxiv-rf-lego-deep-unrolling`, `2026-05-04_arxiv-am-fm-wifi-foundation-model` and `2026-08-17_arxiv-csi-sensing-adversarial-robustness` all differ in architecture but share that framing. This paper goes the other way: no learning at all, just physically interpretable transforms rendered at video rate onto the scene that produced them. That makes it the first genuinely *diagnostic* instrument in the bin rather than another inference pipeline, and the first entry to treat **polarization** as a first-class observable of a Wi-Fi channel.

The polarization layer is the substantive novelty. Commodity Wi-Fi CSI tooling almost universally discards polarization because typical client radios expose a single feed per element; ESPARGOS keeps both slant feeds and reconstructs the Jones vector per angular bin. Being able to watch handedness invert on a metallic reflection, or watch a wire rack selectively kill one orientation, turns textbook propagation effects into something an engineer can point a camera at. For anyone debugging antenna placement, MIMO rank collapse, or unexplained multipath in a real deployment, this is a materially different class of tool from a spectrum analyser or a survey heat map.

It also has second-order relevance to the `ftm-ranging` line. The per-beam delay estimate from adjacent-subcarrier phase increments is the same primitive that underlies angle-plus-time-of-arrival positioning, and being able to see first-arrival versus reflected components separated in a live overlay is directly useful for diagnosing why a positioning system picks the wrong path. The main caveat is that the demonstration is 2.4 GHz and 32 elements — a scale and band that a client device will never have — so this is best read as lab instrumentation and a teaching tool, not a path to a shipping feature.

## Why it matters / what's new (ZH)

`sensing-csi` 分区中的绝大多数条目都把 CSI 当作喂给学习模型的不透明特征向量——`2026-05-01_arxiv-rf-lego-deep-unrolling`、`2026-05-04_arxiv-am-fm-wifi-foundation-model` 与 `2026-08-17_arxiv-csi-sensing-adversarial-robustness` 架构各异，却共享这一框架。本文反其道而行：完全不做学习，只把物理上可解释的变换以视频速率渲染回产生它们的那个场景上。这使它成为该分区中第一件真正意义上的*诊断*仪器，而非又一条推理流水线，也是第一个把**极化**当作 Wi-Fi 信道一等可观测量的条目。

极化图层是实质性的新意。商用 Wi-Fi CSI 工具几乎普遍丢弃极化信息，因为典型客户端射频每个单元只暴露单一馈电；ESPARGOS 保留了两路斜馈，并逐角度栅格重建 Jones 矢量。能亲眼看到旋向在金属反射后翻转、或看到金属线架选择性地抹掉一个取向，把教科书里的传播效应变成了工程师可以用相机对准的东西。对于在真实部署中排查天线布置、MIMO 秩塌陷或无法解释的多径的人来说，这是一类与频谱仪或勘测热力图实质不同的工具。

它对 `ftm-ranging` 一脉也有二阶相关性。由相邻子载波相位增量得到的逐波束时延估计，正是"角度 + 到达时间"定位所依赖的同一原语；能在实时叠加图中看到首达径与反射径被分开，对诊断定位系统为何选错路径非常有用。主要保留意见是：演示为 2.4 GHz、32 单元——这一规模与频段是客户端设备永远不会具备的——因此它更宜读作实验室仪器与教学工具，而非通向量产功能的路径。

## Images
![The ESPARGOS phase-coherent Wi-Fi antenna array | ESPARGOS 相位相干 Wi-Fi 天线阵列](https://arxiv.org/html/2608.25996v1/fig/espargos-array.png)
![Outdoor multipath: direct path, ground reflection and building-corner reflection separated by delay colour | 室外多径：直达径、地面反射与建筑拐角反射按时延颜色分离](https://arxiv.org/html/2608.25996v1/pic/outdoor.jpg)
![Left-hand circular polarization over line-of-sight rendered as rotating phasor dots | 视距下的左旋圆极化以旋转相量点呈现](https://arxiv.org/html/2608.25996v1/pic/lhcp.jpg)
![A wire rack acting as a polarization-selective filter | 金属线架充当极化选择性滤波器](https://arxiv.org/html/2608.25996v1/pic/wire-rack.jpg)
