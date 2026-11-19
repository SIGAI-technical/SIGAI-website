import type { Metadata } from 'next';
import EditorialArticle from '@/components/EditorialArticle';
import { EDITORIALS } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

const post = EDITORIALS[0];
const path = post.href;
const image = '/editorial/trust-gap-cover-2026.png';
const sections = [
  { id: 'the-gap', title: 'The gap between trust and evidence' },
  { id: 'calibration', title: 'What calibration means' },
  { id: 'interfaces', title: 'When interfaces shape belief' },
  { id: 'agents', title: 'The agent question' },
  { id: 'evidence', title: 'What evidence should look like' },
  { id: 'responsibility', title: 'Who carries responsibility' },
];
const references = [
  { label: 'Afroogh et al., Trust in AI: progress, challenges, and future directions (2024)', href: 'https://www.nature.com/articles/s41599-024-04044-8' },
  { label: 'NIST, AI Risks and Trustworthiness', href: 'https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/' },
  { label: 'OpenAI, system cards and deployment safety', href: 'https://deploymentsafety.openai.com/' },
  { label: 'Anthropic, system cards', href: 'https://www.anthropic.com/system-cards' },
  { label: 'Google DeepMind, model cards', href: 'https://deepmind.google/models/model-cards/' },
  { label: 'Trust and reliance on AI, behavioural experiment (2024)', href: 'https://doi.org/10.1016/j.chb.2024.108352' },
  { label: 'OpenAI, postmortem on the April 2025 GPT-4o sycophancy rollback', href: 'https://openai.com/index/sycophancy-in-gpt-4o/' },
  { label: 'NIST, AI Risk Management Framework Core', href: 'https://airc.nist.gov/airmf-resources/airmf/5-sec-core/' },
];

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: path },
  authors: [{ name: 'Jeet' }, { name: 'Shloka' }, { name: 'Mitali' }],
  openGraph: {
    type: 'article',
    title: post.title,
    description: post.excerpt,
    url: path,
    siteName: 'DJS ACM SIGAI',
    images: [{ url: image, width: 1672, height: 941, alt: 'Abstract waves of pink, violet, and indigo light' }],
    authors: ['Jeet', 'Shloka', 'Mitali'],
    publishedTime: '2026-10-05T00:00:00+05:30',
  },
  twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [image] },
};

export default function TrustGapArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${image}`,
    datePublished: '2026-10-05',
    author: ['Jeet', 'Shloka', 'Mitali'].map((name) => ({ '@type': 'Person', name })),
    publisher: { '@type': 'Organization', name: 'DJS ACM SIGAI' },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <EditorialArticle
        post={post}
        dateTime="2026-10-05"
        deck="Better models can do more. The harder question is whether we can tell when to rely on them."
        summary="Trust becomes useful when it tracks evidence for a specific task. Strong benchmark results, polished interfaces, and model cards can inform that judgement, but they cannot replace testing in the setting where a system will be used."
        imageAlt="Abstract waves of pink, violet, and indigo light"
        sections={sections}
        references={references}
        acknowledgement="The cited review, behavioural study, NIST framework, and published AI lab documentation informed this synthesis. No independent model evaluation was conducted."
      >
            <p className="reading-opening">A model can solve a difficult benchmark, produce polished code, and still fail at the moment someone needs it most. That distance between demonstrated skill and justified reliance is the AI trust gap.</p>
            <p>A 2024 systematic review examined how people form trust in AI and how trustworthiness can be assessed. It points to a question that matters more as systems become capable and autonomous. What evidence would justify handing a particular task to a particular system, in a particular setting?</p>

            <section id="the-gap">
              <h2>The gap between trust and evidence</h2>
              <p>Trust describes a person’s willingness to rely on a system. Trustworthiness concerns the system and the organisation around it: whether it is reliable, safe, secure, fair, and accountable for the use at hand. The two can move independently.</p>
              <p>A clinician may distrust a useful diagnostic aid because its limits are unclear. A developer may accept generated code because it looks complete. Neither response tells us whether the system actually performs well under the conditions that matter. A benchmark score is evidence of performance on a benchmark. It cannot, by itself, establish safety in a hospital, a codebase, or a workplace.</p>
              <p>The distinction becomes clearer if the unit of evaluation is one decision rather than one model. A coding assistant may be reliable at completing a familiar function and weak at understanding the permissions of a production service. A research assistant may retrieve a useful paper and still misstate its conclusion. The appropriate response is not one global verdict of “trustworthy” or “untrustworthy.” It is a boundary: which work has been tested, what can go wrong, and how a person would notice before harm follows.</p>
            </section>

            <section id="calibration">
              <h2>What calibration means</h2>
              <p>The goal is proportional reliance. Use the system where its performance has been demonstrated, add checks where uncertainty is meaningful, and retain a clear route to challenge or override its output.</p>
              <p>Overreliance makes a fluent answer feel like a verified one. Underreliance leaves useful tools idle even when testing supports their use. Both are costly. The right level of trust can change with the task, the available evidence, and the consequences of an error.</p>
              <p>A system deserves confidence only to the extent that its performance has been verified for the job in front of it.</p>
              <p>A 2024 behavioural experiment gives the abstraction a concrete cost. Its final sample was 319 UK participants in an incentivised trust game. Participants received advice labelled as AI, advice labelled as an expert, or no advice. In the AI advice conditions, average payoffs were 22% lower than in the control condition, and participants sometimes followed recommendations that conflicted with available context. The advice was deliberately unreliable in this experiment. The result is evidence about reliance under that design, not a forecast for every AI product or population.</p>
              <p>The study also measured expressed trust and actual reliance separately. A person can say a system is fallible yet still click “accept” under time pressure. That is why a product team needs behavioural measures: how often suggestions are checked, how often errors survive review, and whether a warning changes the final decision. A satisfaction survey alone can miss the failure that matters.</p>
            </section>

            <section id="interfaces">
              <h2>When interfaces shape belief</h2>
              <p>People do not inspect model weights before using an AI product. They encounter a name, a voice, a chat window, a confidence cue, and an answer. These cues can make a system feel more competent or more human than the evidence warrants. A smooth interaction is valuable, but it can also make uncertainty easy to miss.</p>
              <p>OpenAI’s April 2025 rollback of a GPT-4o update is a useful product case. The company said the update made the assistant overly flattering and agreeable. This was a behaviour problem, not a proof that its factual ability had collapsed. It still changed the kind of answer users received: an assistant too eager to affirm a claim can make poor judgement feel supported. The incident shows that model behaviour, interface experience, and user trust are coupled even when a benchmark score is unchanged.</p>
              <p>This matters across today’s AI labs. OpenAI, Anthropic, and Google DeepMind publish model or system documentation that describes evaluations and limitations. Those documents are useful starting points. A product team still has to translate them into the actual workflow, including what the model may do, when a person must review it, and how failures are recorded. A friendly interface should help a user see those boundaries.</p>
              <p>A useful interface can ask for evidence at the moment it matters. For a medical summary, it can keep each claim tied to the relevant record and make unsupported statements visible. For generated code, it can show the diff, tests, permissions, and unresolved warnings before a merge. For a financial estimate, it can expose assumptions and the date of the input data. None of these features makes the underlying model infallible. They make a mistake easier to detect and a decision easier to audit.</p>
            </section>

            <section id="agents">
              <h2>The agent question</h2>
              <p>The trust problem grows when an AI system can call tools, read external material, or pass work to another agent. A retrieved page may contain instructions that the agent was never meant to follow. A tool result may be stale or manipulated. One unverified step can shape every step after it.</p>
              <p>The practical response is to define permissions narrowly, validate tool inputs and outputs, separate untrusted content from instructions, and require approval for consequential actions. These are system design choices. A stronger model alone cannot replace them.</p>
              <p>Consider an assistant asked to prepare a purchase order. Reading a catalogue is lower risk than changing a supplier account or sending a payment. The system can be allowed to gather options and draft a comparison while a human confirms the vendor, amount, and account details. The boundary should be enforced by the application’s permissions and transaction flow, not by a sentence asking the model to be careful. Logs should connect the final action to the source data and the approval that authorised it.</p>
            </section>

            <section id="evidence">
              <h2>What evidence should look like</h2>
              <p>The NIST AI Risk Management Framework treats trustworthiness as a combination of validity, reliability, safety, security, transparency, privacy, and fairness, judged in context. For an actual deployment, this means reporting more than a headline accuracy figure.</p>
              <ul>
                <li><strong>Scope.</strong> State which tasks, populations, and conditions were tested.</li>
                <li><strong>Failure modes.</strong> Show where performance degrades and how often.</li>
                <li><strong>Uncertainty.</strong> Communicate limits in terms a user can act on, rather than decorating an answer with a confidence number.</li>
                <li><strong>Oversight.</strong> Specify when a human reviews, overrides, or stops the system.</li>
                <li><strong>Change.</strong> Reassess the system when models, data, tools, or the operating environment change.</li>
              </ul>
              <p>Public model cards and system cards can inform this work, but deployment evidence must come from the setting where people will actually rely on the system.</p>
              <p>A convincing evaluation reports the denominator as carefully as the score. State how many tasks were attempted, how they were sampled, which failures were excluded, and whether the test material appeared in training or product development. Compare with the existing human or software workflow on the same task. Measure not just answer quality but completion time, review cost, harmful errors, and the rate at which the system correctly declines to act. A small improvement in average speed can be a poor trade if rare errors become expensive to catch.</p>
              <p>After launch, the evidence must stay current. New model versions, changed prompts, different users, external tools, and updated data sources can move performance. Monitoring should capture real incidents without exposing unnecessary private information. A deployment that cannot identify which version produced an answer or reverse a consequential action has made its own trust claims hard to test.</p>
            </section>

            <section id="responsibility">
              <h2>Who carries responsibility</h2>
              <p>Transparency is useful when it enables a meaningful decision. An organisation need not publish every proprietary detail to say what a system was tested for, what it should not be used for, and who responds when it fails. Explanation also has limits. A plausible account of an output does not prove that the output is correct.</p>
              <p>Responsibility has a financial dimension. A team deciding whether to automate a workflow should price the work of checking outputs, maintaining evaluations, handling appeals, and compensating for failures. If those costs are ignored, a pilot can look cheaper than the service it replaces while shifting risk to users. NIST’s framework connects evaluation with governance for this reason: a metric has little value unless someone can act when it deteriorates.</p>
              <p>As AI moves from answering questions to taking actions, accountability has to stay with the people and institutions that design, deploy, and govern it. Better models can expand what is possible. Calibrated trust determines which of those possibilities we can responsibly use.</p>
            </section>

      </EditorialArticle>
    </>
  );
}
