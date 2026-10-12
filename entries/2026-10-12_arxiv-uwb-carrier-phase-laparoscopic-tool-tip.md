---
id: 2026-10-12_arxiv-uwb-carrier-phase-laparoscopic-tool-tip
date_published: 2026-09-30
date_found: 2026-10-12
type: academic-paper
technology: uwb
title_en: "Drape-Compatible Tool-Tip Localization for Hand-Held Laparoscopic Instruments via UWB Carrier-Phase Ranging and Trocar-Constrained Geometry"
title_zh: "基于UWB载波相位测距与套管针约束几何的手持腹腔镜器械末端免遮挡定位"
url: "https://arxiv.org/abs/2609.39129"
source_quality: full
topics: [UWB, carrier-phase-ranging, surgical-robotics, laparoscopy, trocar-geometry, DWM3001CDK]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

On 30 September 2026, Jinseok Lee and co-authors posted "Drape-Compatible Tool-Tip Localization for Hand-Held Laparoscopic Instruments via UWB Carrier-Phase Ranging and Trocar-Constrained Geometry" to arxiv (cs.RO), submitted to IEEE ICRA 2027. The paper addresses a surgical-robotics sensing problem: a surgical-robot policy needs to know where each instrument's working end sits relative to the camera and the other instrument, but a laparoscopic operation leaves only endoscope video, and a sterile drape over each instrument hides every optical path. The authors estimate tool-tip position from inter-antenna distances and an IMU alone, using UWB carrier-phase ranging between three identical nodes — one per hand-held instrument and one on the endoscope, all mounted outside the sterile barrier. Carrier-phase ranging leaves distance ambiguous modulo half the carrier wavelength (lambda/2 = 23.1 mm), and three inter-antenna distances alone are short by three degrees of freedom to recover both instrument tips in the endoscope frame. The paper's key geometric insight is that each instrument pivots through a trocar port whose position is fixed and whose shaft direction the instrument's own IMU measures, collapsing each antenna's unknown position to a single degree of freedom (insertion depth). With two depths as the only remaining unknowns against three measured distances, the system has one spare equation, which it uses to detect (rather than silently absorb) a wrong integer-ambiguity resolution or a wrong mounting offset.

The hardware is three Qorvo DWM3001CDK boards (DW3110 UWB transceiver, nRF52833 MCU, chip antenna), each paired with an external GY-BNO085 IMU providing 100 Hz fused attitude, mounted via 3D-printed clips and operating on UWB channel 5 (center frequency 6489.6 MHz, preamble length 64). In an 11-hole laparoscopic box-trainer phantom with metal instruments, the three antenna-pair ranges held precision of sigma = 0.10-0.33 mm at 35-46 Hz; pressing a sterile drape onto the antennas left round rate and static precision unchanged and first-path SNR within 7% of bare (where an optical approach would be blocked); on a separate caliper rail, blind displacements of 25-53 mm were tracked to 2.8 mm mean absolute error against a 0.01 mm-resolution caliper reference. In synthetic trials on the measured phantom geometry, tool-tip error was a median 0.92 mm with exact attitude and 0.5 mm range noise, rising to 3.6 and 7.4 mm with 1° and 2° of IMU attitude error. The system was also carried into a live rabbit appendectomy under institutional approval, logging 11 surgical episodes totaling 133 seconds of three-pair ranging with the working ends inside the animal, without any modification to the instruments that entered the patient. The authors state that in-vivo tip localization lacks full validation (too few episodes, incomplete IMU data on one instrument) and that absolute tip accuracy against surveyed fiducials was not measured in vivo; other stated limitations include trocar-port shift during manipulation (the abdominal wall is viscoelastic) biasing the solved insertion depth, the need for sterilizable packaging of the development boards before clinical use, and the assumption of a fixed endoscope (a moving endoscope would add a third insertion-depth unknown).

## Summary (ZH)

2026年9月30日，Jinseok Lee 及其合作者在 arxiv（cs.RO 分类）发布论文《基于UWB载波相位测距与套管针约束几何的手持腹腔镜器械末端免遮挡定位》，该论文已投稿至 IEEE ICRA 2027。论文针对一个手术机器人感知问题：手术机器人策略需要知道每件器械末端相对于摄像头及另一器械的位置，但腹腔镜手术仅提供内镜视频，且覆盖在每件器械上的无菌手术单会遮挡所有光学路径。作者仅凭天线间距离与IMU来估计器械末端位置，方法是在三个完全相同的节点之间进行UWB载波相位测距——每个手持器械一个节点、内镜一个节点，均安装在无菌屏障之外。载波相位测距的距离测量存在半个载波波长（λ/2=23.1毫米）的模糊度，而仅凭三个天线间距离，要在内镜坐标系中恢复两个器械末端的位置，自由度还差三个。论文的核心几何洞见在于：每件器械都通过一个位置固定的套管针（trocar）port进行转动，其轴向方向由器械自身的IMU测量，这将每个天线的未知位置坐标压缩为单一自由度（插入深度）。这样一来，仅剩两个插入深度作为未知量，却有三个测得的距离，系统便多出一个方程，可用来暴露（而非默默吸收）错误的整数模糊度解或错误的安装偏移。

硬件方面使用了三块Qorvo DWM3001CDK开发板（DW3110 UWB收发器、nRF52833微控制器、芯片天线），每块均外接一个提供100Hz融合姿态数据的GY-BNO085 IMU，通过3D打印夹具安装，工作于UWB channel 5（中心频率6489.6 MHz，前导码长度64）。在一个带11孔套管针板、使用金属器械的腹腔镜模拟训练箱（phantom）中，三组天线对测距精度稳定在σ=0.10-0.33毫米、测距速率35-46 Hz；将无菌手术单压在天线上后，测距轮次速率与静态精度不变，首径信噪比与无遮盖时相差不超过7%（而光学方案在此情形下会被遮挡）；在独立的卡尺导轨上，25-53毫米的盲位移测试平均绝对误差为2.8毫米（相对0.01毫米分辨率卡尺基准）。在基于实测模拟箱几何的仿真试验中，姿态精确且测距噪声为0.5毫米时器械末端误差中位数为0.92毫米，IMU姿态误差为1°和2°时分别升至3.6和7.4毫米。该系统还在机构审批下被带入一次活体兔子阑尾切除手术，记录了11段手术片段，共计133秒的三组测距数据（器械工作端已进入动物体内），且进入患者体内的器械未做任何改动。作者指出，体内器械末端定位尚未得到充分验证（片段数量过少，其中一件器械的IMU数据不完整），体内绝对末端精度也未与经测量的基准点进行比对；其他已说明的局限包括：操作过程中套管针port可能发生位移（腹壁具有粘弹性）从而使求解出的插入深度产生偏差；开发板在临床使用前需要可消毒封装；以及系统假设内镜固定不动（若内镜移动，则需增加第三个插入深度未知量）。

## Key technical points (EN)

- Problem: optical trackers need line of sight (which a drape blocks) and electromagnetic trackers degrade near metal instruments — this paper proposes a radio-based (UWB carrier-phase) alternative.
- Hardware: 3x Qorvo DWM3001CDK (DW3110 UWB transceiver + nRF52833), each with a GY-BNO085 IMU (100 Hz fused attitude), 3D-printed mounts, UWB channel 5 (fc = 6489.6 MHz, preamble 64).
- Geometric method: trocar-constrained geometry reduces each instrument antenna's unknown position to a single insertion-depth degree of freedom (using the IMU-measured shaft direction), turning an underdetermined 3-distance/6-coordinate problem into an overdetermined 3-distance/2-depth problem with one spare equation for error detection.
- Carrier-phase ambiguity: distances are known modulo lambda/2 = 23.1 mm; the spare equation helps flag wrong integer resolutions or mounting-offset errors.
- Phantom results (11-hole box trainer, metal instruments): static ranging precision sigma = 0.10-0.33 mm at 35-46 Hz; drape-on-antenna test showed no change in round rate or static precision, with first-path SNR within 7% of bare; on a separate caliper rail, blind displacement (25-53 mm) mean absolute error 2.8 mm vs a 0.01 mm-resolution caliper.
- Tool-tip localization error (synthetic, on measured phantom geometry): median 0.92 mm with exact attitude and 0.5 mm range noise; rises to 3.6 and 7.4 mm with 1° and 2° of IMU attitude error.
- In-vivo test: live rabbit appendectomy, institutional approval, 11 surgical episodes / 133 s total of three-pair ranging with working ends inside the animal; no instrument modification for entry into the patient.
- Stated limitations: in-vivo tip accuracy not measured against surveyed fiducials; insufficient episodes/incomplete IMU data for full in-vivo validation; trocar-port shift (viscoelastic abdominal wall) can bias solved depth; development boards need sterilizable packaging before clinical deployment; method assumes a fixed endoscope.

## Key technical points (ZH)

- 问题背景：光学跟踪需要视线（会被手术单遮挡），电磁跟踪在金属器械附近性能下降——本文提出一种基于无线电（UWB载波相位）的替代方案。
- 硬件：3块Qorvo DWM3001CDK（DW3110 UWB收发器+nRF52833），各配一个GY-BNO085 IMU（100Hz融合姿态数据），3D打印夹具，工作于UWB channel 5（中心频率6489.6 MHz，前导码长度64）。
- 几何方法：套管针约束几何借助IMU测得的器械轴向方向，将每个器械天线的未知位置压缩为单一插入深度自由度，把原本欠定的"3距离/6坐标"问题转化为超定的"3距离/2深度"问题，并多出一个方程用于错误检测。
- 载波相位模糊度：距离测量存在λ/2=23.1毫米的模糊度；多出的方程有助于标记错误的整数解或安装偏移误差。
- 模拟训练箱结果（11孔训练箱，金属器械）：静态测距精度σ=0.10-0.33毫米，测距速率35-46 Hz；手术单覆盖天线测试显示测距轮次速率与静态精度均无变化，首径信噪比与无遮盖时相差不超过7%；在独立的卡尺导轨上，盲位移测试（25-53毫米）相对0.01毫米分辨率卡尺基准的平均绝对误差为2.8毫米。
- 器械末端定位误差（仿真，基于实测模拟箱几何）：姿态精确、测距噪声0.5毫米时中位数为0.92毫米；IMU姿态误差1°和2°时分别升至3.6和7.4毫米。
- 体内测试：在机构审批下进行活体兔子阑尾切除手术，记录11段手术片段，共133秒的三组测距数据（器械工作端已进入动物体内）；进入患者体内的器械未做任何改动。
- 已说明的局限：体内末端精度未与经测量的基准点比对；片段数量不足、部分IMU数据不完整，体内验证尚不充分；套管针port位移（腹壁粘弹性）可能使求解深度产生偏差；临床部署前开发板需可消毒封装；方法假设内镜固定不动。

## Why it matters / what's new (EN)

This KB's UWB bin has tracked carrier-phase and secure-ranging academic work mostly in the context of robot swarms, vehicles, or security attacks. This paper is the first entry here applying UWB carrier-phase ranging to a surgical-instrumentation tracking problem, and the first entry in this bin to combine it with a mechanical constraint (trocar pivot geometry) derived from the deployment environment itself rather than from additional radio infrastructure — the trocar geometry is what converts an underdetermined ranging problem into an overdetermined, self-checking one. The live-animal deployment (11 episodes, 133 s during a rabbit appendectomy) is the first intra-operative UWB deployment in this KB's UWB bin. The paper itself notes that in-vivo tip localization is not yet validated.

## Why it matters / what's new (ZH)

本知识库UWB板块此前收录的载波相位测距与安全测距学术工作，主要集中在机器人集群、车辆或安全攻击场景。本条目是本板块首次将UWB载波相位测距应用于手术器械跟踪问题，也是本板块首个将其与一种并非来自额外无线基础设施、而是源自部署环境本身的机械约束（套管针转动几何）相结合的条目——正是套管针几何将一个欠定的测距问题转化为超定且可自检的问题。该活体动物部署（兔子阑尾切除术中 11 段、共 133 秒）是本知识库 UWB 板块首个术中 UWB 部署；论文本身指出体内末端定位尚未验证。

## Images

![Trocar-constrained geometry: antenna positions on pivot lines through the trocar ports | 套管针约束几何示意图：天线位置沿套管针port的转动轴线分布](https://arxiv.org/html/2609.39129v1/fig2_labeled.png)
![In-vivo deployment during a live rabbit appendectomy, with endoscope view inset | 活体兔子阑尾切除手术中的系统部署，附内镜视图](https://arxiv.org/html/2609.39129v1/fig_invivo_labeled.png)
