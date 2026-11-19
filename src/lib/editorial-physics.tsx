import type { FeatureArticle } from './editorial-features';

export const PHYSICS_ARTICLE: FeatureArticle = {
  slug: 'ais-physics-problem',
  authors: ['Mitali'],
  title: 'AI’s Physics Problem',
  deck: 'A system can solve an equation, generate a convincing video, and still make the wrong prediction about a real object. Those are different capabilities, and each needs a different test.',
  summary: 'AI performs very differently on written physics problems, generated video, and physical control. Benchmark scores can miss both real model failures and flawed grading. The useful test is whether a system predicts and recovers under controlled changes in a real task.',
  acknowledgement: 'The PhysBench and PHYBench teams, the expert regrading researchers, and the RT-2 team published the work examined here. Their studies are listed in References. This article is an editorial synthesis and reports no independent model or robot trial.',
  excerpt: 'From benchmark grading errors to robot trials, a close look at what physical reasoning means and how an engineer can actually test it.',
  category: 'AI',
  topics: ['Artificial intelligence', 'Physical reasoning', 'Robotics', 'Benchmarking', 'Simulation', 'Model evaluation'],
  date: '8 Oct 2026',
  dateTime: '2026-10-08',
  readingTime: '9 min read',
  image: '/editorial/physics-cover-2026.png',
  imageWidth: 1672,
  imageHeight: 941,
  imageAlt: 'Abstract orange and cream waves against deep red and aubergine shadows.',
  searchTerms: 'physics physical reasoning world models simulation conservation causality benchmark robotics Sora RT-2 PhysBench PHYBench',
  opening: <>
    <p className="reading-opening">A robot arm reaches for a mug near the edge of a table. A few centimetres of error could spill the drink. The task sounds simple until the mug is partly hidden, the surface is slick, and the camera sees only one side of the handle. A fluent description of the scene cannot tell the controller whether the next movement is safe.</p>
    <p>The same gap appears in less dramatic places. A video generator can create a plausible collision while silently changing an object’s shape. A language model can derive the right formula after a prompt supplies every variable, then miss that a real experiment lacks the friction coefficient. Calling all three tasks “physics reasoning” conceals the engineering problem. The relevant question is what the system must observe, predict, and correct before an action is taken.</p>
  </>,
  sections: [
    { id: 'three-tests', title: 'Three tests hiding under one label', content: <>
      <p>Written physics problems often describe a clean world: rigid objects, a known mass, constant gravity, and no air resistance. Solving them demands symbolic reasoning and arithmetic. An image question adds perception: identifying contacts, geometry, and material cues. A robot adds control. It must estimate state from imperfect sensors, act, observe the result, and recover when the world does something unexpected.</p>
      <p>Success on one of these tasks does not imply success on the others. A model that predicts the next video frame may learn strong visual regularities without identifying a causal mechanism. A model that solves equations may need an engineer to decide which equation applies. A robot that succeeds in a familiar kitchen may fail when a new cup, lighting condition, or surface changes the contact dynamics.</p>
      <p>A useful evaluation therefore starts with the decision being made. For a safety critical grasp, the metric might be spill rate across unseen containers, not the elegance of a written explanation. For a video model, the metric might be whether an object retains its identity and mass after a collision. For a research assistant, the metric might be whether a proposed relationship predicts held out measurements with uncertainty stated in advance.</p>
    </> },
    { id: 'evidence', title: 'What benchmark numbers can and cannot say', content: <>
      <p>PhysBench assembled 10,002 mixed image, video, and text entries and evaluated 75 vision language models across object properties, relationships, scene understanding, and dynamics. Its authors reported stronger performance on common sense questions than on physical understanding tasks. PHYBench collected 500 original physics problems. On that set, the top model in its 2025 evaluation scored 36.9% while human experts scored 61.9%. These numbers describe that benchmark at that time, not the limits of every future model.</p>
      <figure className="reading-figure" aria-label="PHYBench accuracy: Gemini 2.5 Pro 36.9 percent, human expert baseline 61.9 percent">
        <p className="reading-figure__title">PHYBench accuracy, 2025 evaluation</p>
        <div className="reading-figure__bars">
          <div className="reading-figure__bar"><span>Gemini 2.5 Pro</span><span className="reading-figure__track"><span className="reading-figure__fill" style={{ '--figure-width': '36.9%' } as React.CSSProperties} /></span><strong>36.9%</strong></div>
          <div className="reading-figure__bar"><span>Human expert baseline</span><span className="reading-figure__track"><span className="reading-figure__fill" style={{ '--figure-width': '61.9%' } as React.CSSProperties} /></span><strong>61.9%</strong></div>
        </div>
        <div className="reading-figure__scale" aria-hidden="true"><span>0%</span><span>100%</span></div>
        <figcaption>Accuracy reported by the PHYBench authors for their original physics problem set. The comparison describes this evaluation, not physical control or later models. Source: PHYBench, listed in References.</figcaption>
      </figure>
      <p>Benchmark design can also make a capable system look worse than it is. A September 2026 expert audit of six physics benchmarks found that many responses marked incorrect were affected by grading mistakes, wrong reference answers, or ambiguous questions. The audit focused on text problems with checkable final answers, so it should not be extended to robot control or video simulation. It does change the interpretation of a low headline score: before claiming a model lacks physics, inspect the question, the reference solution, and the grader.</p>
      <p>The reverse error is just as serious. School problems circulate widely online, so a correct answer may reflect familiar training patterns. A benchmark can reward the final number while missing a broken derivation. It can also supply all the facts that a real system would have to measure. Strong evaluation uses new setups, independently checked ground truth, and separate scores for perception, prediction, calculation, and action. Results should include failure distributions, not only an average.</p>
    </> },
    { id: 'video', title: 'A beautiful video is not a simulator', content: <>
      <p>OpenAI’s account of Sora described impressive visual coherence alongside errors in basic physical interactions, including glass breaking and persistent changes after a bite. The distinction matters because a generated sequence is judged by visual plausibility, while an engineering simulator is judged by predictive validity. A physically impossible event can remain hard to notice in a short, attractive clip.</p>
      <p>Consider a glass falling from a table. A useful simulator needs initial position and velocity, the table height, gravity, collision geometry, material properties, and a model for fracture. Several of those quantities may be unknown from the video alone. A reliable system should expose uncertainty or request another observation. A generative model can instead fill the missing information with a likely looking scene. That is appropriate for storytelling and potentially dangerous for planning.</p>
      <p>The test is intervention. Keep the scene fixed, change only the table height, and ask whether the time to impact changes consistently. Change the floor material and inspect the bounce. Place the glass behind an occluder and check whether it remains the same object when it reappears. Repeated trials under controlled changes reveal far more than a single showcase video. Visual quality should be reported separately from consistency with physical constraints.</p>
    </> },
    { id: 'robot', title: 'The robot case: useful progress with narrow evidence', content: <>
      <p>Google DeepMind’s RT-2 demonstrates why the field is promising. It connected web trained vision and language representations to robot actions and used robot demonstrations collected over 17 months with 13 robots. In its published Language Table simulation evaluation, RT-2 reached 90% success, compared with 72%, 74%, and 77% for three reported baselines. That result is evidence of performance on that simulation suite. It is not a 90% success guarantee for an unfamiliar home, factory, or hospital.</p>
      <p>The business value of this line of work is clear. A robot that can interpret a new instruction or recognise a new object may need fewer task specific demonstrations. The remaining cost sits in data collection, sensor calibration, grippers, maintenance, safety cases, and recovery from failure. Each of those can dominate a deployment even when the model improves. An evaluation intended for purchasing or operations must count the full task, including human resets and unsuccessful attempts.</p>
      <p>Closed loop control is the practical dividing line. A system should observe the effect of an action before issuing the next one, keep a state estimate, and stop when uncertainty becomes too high. A polished plan generated once at the start of a task cannot substitute for feedback. That is why robotics evidence belongs alongside language and video evidence, with clear boundaries between the three.</p>
    </> },
    { id: 'discovery', title: 'Can an AI system discover a law?', content: <>
      <p>Finding a compact equation in a dataset is an interesting beginning. Discovery requires more. The candidate must predict measurements it did not see during search, survive uncertainty in the instruments, and compete against simpler explanations. If an equation works only because the experimental setup was fixed, its apparent generality disappears when the setup changes.</p>
      <p>A credible workflow records the hypothesis before the next experiment, specifies the expected result and tolerance, then tests it independently. A model can help propose variables, derive consequences, and search alternative forms. An experiment or validated simulation determines whether the proposal survives. Without that chain, a generated law is a suggestion, not a finding.</p>
      <p>For an engineering student, this is an opportunity to use AI productively. Ask for assumptions and failure cases before asking for an answer. Check conservation constraints, units, and boundary conditions. Design a counterexample. Then measure. The value of the model is the speed with which ideas can be explored; the standard for accepting an idea remains evidence.</p>
    </> },
    { id: 'data', title: 'The data problem behind the demonstration', content: <>
      <p>Physical intelligence is constrained by the data used to teach and assess it. Internet videos provide enormous visual variety, but usually lack measured forces, material properties, camera calibration, and the outcome of an intervention that was never performed. Robot demonstrations contain actions and observations, but collecting them requires hardware, operators, resets, and careful labelling. A simulation can generate controlled trials cheaply, yet its contact and friction models may differ from the real world. None of these sources is a complete substitute for the others.</p>
      <p>That is why a strong dataset is designed around failure, not just successful motion. It should record the starting state, action, sensor stream, outcome, and intervention by a human operator. A failed grasp should stay in the dataset. So should the moment a robot decided to stop. Otherwise a model can learn the appearance of success while evaluation quietly excludes the expensive cases a customer will encounter.</p>
      <p>Leakage is another concern. If nearly identical objects and scenes appear in training and testing, a high score can measure recognition of familiar arrangements. A harder split holds out object shapes, materials, room layouts, or combinations of them. Measurements need calibration and units. Without those details, even a large dataset can be unsuitable for deciding whether an action is physically safe.</p>
    </> },
    { id: 'economics', title: 'The economics of a reliable action', content: <>
      <p>A single action score can conceal the cost of a full task. Consider an illustrative ten step workflow in which every step succeeds with probability 0.9 and failures are independent. The chance that every step succeeds is 0.9 to the tenth power, about 35%. Real failures are often correlated, so this is a teaching calculation rather than a deployment forecast. Its lesson is that an impressive step level metric may still leave many jobs unfinished.</p>
      <p>For a warehouse or household product, the useful denominator is completed tasks without a human rescue. Count minutes of operator time, damaged objects, recovery attempts, and the cost of collecting new demonstrations after a change in the environment. A more capable model may reduce one cost while increasing another through larger compute needs or more complex maintenance. The buyer needs a cost per successful job and a measured error rate under the actual conditions of use.</p>
      <p>This also changes how progress should be communicated. Report the percentage of attempts completed end to end, the distribution of completion times, and the conditions under which the system asked for help. An engineering team can improve a product by making failures easy to detect and cheap to recover, even before it solves the hardest open question in physical reasoning.</p>
    </> },
    { id: 'standard', title: 'The standard that would change the story', content: <>
      <p>A serious physical reasoning report would state the task, sensing conditions, unknown variables, comparison baseline, and cost of an error. It would hold out genuinely new objects and environments, test counterfactual changes, and distinguish simulation from real trials. It would show both median and worst case outcomes, including how often a system abstained or requested help.</p>
      <p>That standard may produce less dramatic headlines. It also makes progress legible. A model that solves well posed equations, a video system that preserves object state, and a robot that recovers from a failed grasp are all useful achievements. Their limits differ. The next advance in physical AI will matter most when those limits are measured as carefully as the demonstrations are filmed.</p>
    </> },
  ],
  sources: [
    { label: 'PhysBench, benchmark design and 75-model evaluation (2025)', href: 'https://arxiv.org/abs/2501.16411' },
    { label: 'PHYBench, 500 physical reasoning problems (2025)', href: 'https://arxiv.org/abs/2504.16074' },
    { label: 'Expert audit of physics benchmark grading, version 1 (September 2026)', href: 'https://arxiv.org/abs/2609.13009v1' },
    { label: 'OpenAI, video generation models as world simulators (2024)', href: 'https://openai.com/index/video-generation-models-as-world-simulators/' },
    { label: 'Google DeepMind, RT-2 methods and evaluation (2023)', href: 'https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/' },
  ],
};
