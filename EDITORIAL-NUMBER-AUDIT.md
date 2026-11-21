# Editorial number audit — 20 November 2026

This records the quantitative claims in the four current articles and the boundaries that must travel with them. It is a source check, not an independent replication of any study, product measurement, or company report. Article dates are 5, 8, 15, and 22 October 2026; the cited source versions were available by those dates.

## The AI Trust Gap

| Claim | Primary evidence and boundary |
| --- | --- |
| 319 participants | [Klingbeil, Grützner and Schreck (2024)](https://doi.org/10.1016/j.chb.2024.108352): final analysed UK sample, after exclusions. It is one incentivised trust-game experiment, not a representative AI-user survey. |
| Five arms: AI+ 69, AI− 66, Expert+ 58, Expert− 61, control 65 | Same study; counts sum to 319. The signs are the authors' advice-condition labels. The figure shows assignment, not five measured payoff estimates. |
| 22% lower average payoff | Same study: pooled AI-advice conditions compared with no-advice control; a relative payoff difference, not percentage points of accuracy or a general effect for AI products. The reported Wilcoxon test was Z = −2.962, p = 0.0028, r = −0.21. |
| Expert-advice difference p = 0.0548 | Same study; the authors did not find it statistically significant at 0.05. This is not evidence that expert advice never affects payoff. |

The [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) diagram is explicitly an editorial adaptation of Map, Measure, and Manage; it is not a measured result.

## AI’s Physics Problem

| Claim | Primary evidence and boundary |
| --- | --- |
| PhysBench 10,002 entries; 75 VLMs | [PhysBench paper](https://arxiv.org/abs/2501.16411): mixed image, video, and text benchmark. These are dataset and evaluation counts, not robot trials. |
| PHYBench 500 problems; Gemini 2.5 Pro 36.9%; human baseline 61.9% ± 2.1% | [PHYBench paper](https://proceedings.nips.cc/paper_files/paper/2025/hash/01e793f8cf5689aa0ea46a1b01071bea-Abstract-Datasets_and_Benchmarks_Track.html): original 2025 evaluation. The human baseline uses 559 valid answers from 81 physics students assigned small subsets; the uncertainty came from bootstrap sampling. Do not imply every student solved all 500. |
| 56 selected rejections: grader 40, benchmark 13, model 3 | [Expert regrading audit, September 2026 v1](https://arxiv.org/html/2609.13009v1): GPT-5.6-Sol High, up to five attempts, restricted to the 100 PHYBench questions with public worked solutions. The 56 are initially rejected cases selected for audit. The composition is **not** an error rate on all 500 questions and is **not** a revised Gemini 2025 score. |
| RT-2 13 robots, 17 months; Language Table simulation 90% vs 72%, 74%, 77% | [Google DeepMind RT-2 account](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/). The 13 robots and 17 months describe inherited RT-1 demonstration data; the success rates belong to Language Table simulation, not unseen real-world deployment. |
| 0.9^10 ≈ 35% | Explicit illustrative calculation for ten independent steps, each with 90% success. Correlated real failures break the independence assumption. |

## The Map in the Machine

| Claim | Primary evidence and boundary |
| --- | --- |
| 35% smart speaker; 18% smart doorbell; 13% robot vacuum; 11% smart thermostat | [Pew Research Center, 17 June 2026](https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/): shares of **US adults** reporting devices with AI features, surveyed 17–23 February 2026. These are not household shares, iRobot market shares, or evidence that those devices upload maps. |
| Smart Maps are cloud stored and remain after app uninstall | [iRobot Smart Maps guidance](https://homesupport.irobot.com/articles/en_US/Knowledge/17752). Disabling Mapping Features stops spatial uploads and disables mapped app functions; existing maps need separate deletion. The statement is about Imprint Smart Maps, not every robot vacuum. |
| Uncontributed obstacle-review images are automatically deleted after 30 days | [iRobot obstacle image review guidance](https://homesupport.irobot.com/articles/en_US/Knowledge/31163). This is the company's stated server retention for that optional feature. It is not an independent deletion audit or a claim about contributed images. |

The robot-to-cloud-to-app figure depicts the documented Smart Map flow. It is a product-specific schematic, not a packet trace.

## AI’s Energy Ledger

| Claim | Primary evidence and boundary |
| --- | --- |
| 415 TWh in 2024, about 1.5% of world electricity; 945 TWh in 2030 | [IEA Energy and AI (2025)](https://www.iea.org/reports/energy-and-ai/executive-summary): all global data centres; 2024 estimate and 2030 base-case projection. Neither is an AI-only measurement. |
| 485 TWh in 2025; 950 TWh in 2030 | [IEA 2026 update](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary): same-vintage estimate and central projection for all global data centres. The figure’s +465 TWh and approximately +96% are arithmetic from these two values. |
| 2025 growth: +17% all data centres, +50% AI-focused data centres | Same IEA update. These are growth rates of two differently defined categories, not their shares of the 485 TWh total. |
| On-site gas overbuilding 30–70% | Same IEA update: modelled infrastructure needed to supply critical and variable data-centre load reliably, relative to demand. Not an observed operating margin at every site. |
| Google 2025 electricity +37%; operational emissions −2%; supply-chain emissions +25% | [Google 2026 Environmental Report](https://sustainability.google/files/google-2026-environmental-report.pdf): company-wide reported values with different accounting boundaries. Operational emissions are Scope 1 plus market-based Scope 2. Do not label them AI-only. |
| Google 100% annual renewable match; 65% average hourly carbon-free energy at data centres | Same Google report. Annual company-wide procurement and hourly data-centre supply have different denominators; do not compute a 35-point “gap” as if they were one metric. |
| Median Gemini Apps text prompt: 0.24 Wh; 0.26 mL water | [Google serving-method paper](https://arxiv.org/abs/2508.15734). Specific median and system boundary; not a universal AI-query, video, training, or lifecycle value. |
| Google operational water 10.87 billion gallons; data-centre portion 10.52 billion; replenishment about 7.7 billion and 78% | Google report. The 78% uses a **freshwater-consumption** denominator, while the operational totals include other water sources. Do not net replenishment against total operational consumption. |
| Five technology companies’ capex above US$400 billion in 2025; expected +75% in 2026 | IEA 2026 update. This is combined company capex across businesses, not a disclosed AI-only bill. |
| 100 MW IT, PUE 1.2 → 120 MW facility → about 1.05 TWh/year → about US$105 million/year at US$0.10/kWh | Article's illustrative arithmetic: 120 MW × 8,760 hours = 1.0512 TWh; 1.0512 billion kWh × US$0.10 = US$105.12 million. Excludes capital, demand/network charges, water, and labour. |
| 1.4 billion tonnes CO₂ in 2035; Google-enabled ~41 MtCO₂e and avoided >58 MtCO₂e in 2025 | [IEA AI and climate change scenario](https://www.iea.org/reports/energy-and-ai/ai-and-climate-change) and Google report. All are modelled potential or counterfactual estimates, not independently observed net reductions. Google’s two figures use different methods and must not be added together. |

## Review decisions

- Figures keep the primary source in References and carry their own dates, population or workload, and estimate/projection or selection labels.
- No figure compares mixed denominators on a shared axis. The energy visual puts the two growth rates in a separate comparison block; the trust visual separates a payoff result from arm allocation.
- The physics regrading result is deliberately identified as a selected set of 56 apparent failures. It cannot be used to derive a new full-benchmark accuracy or physical-world capability claim.
- Article visuals were inspected in Safari at desktop width in dark mode; the trust experiment was also inspected in settled light mode. Typecheck, lint, and a webpack production build passed. Mobile CSS is present but mobile visual inspection remains to be completed before merging.
