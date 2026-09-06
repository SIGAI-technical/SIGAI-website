import Reveal from './Reveal';
import { Placeholder, SectionHeading } from './ui';
import { ABOUT, ORG } from '@/lib/content';

/** Facts drawn straight from the source site's About copy. */
const FACTS = [
  { k: 'Institution', v: ORG.college },
  { k: 'Department', v: ORG.department },
  { k: 'Affiliation', v: ORG.parentBody },
  { k: 'Chapter', v: ORG.chapterLine },
];

export default function About({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="about" className="section">
      <div className="shell">
        {showHeading ? (
          <SectionHeading
            eyebrow="Founded by DJSCE students"
            title={
              <>
                A STUDENT CHAPTER
                <br />
                BUILT AROUND <span className="mark">AI</span>
              </>
            }
          />
        ) : null}

        {/* The opening line carries the weight; the rest supports it. */}
        <Reveal>
          <p className="about__lead">{ABOUT.lead}</p>
        </Reveal>

        <div className="about__body">
          <Reveal delay={90}>
            <p className="about__rest">{ABOUT.rest}</p>
          </Reveal>

          <Reveal delay={140}>
            <figure className="about__figure">
              <Placeholder label="Chapter photo — image to be added" ratio="5 / 4" radius={6} />
              <figcaption className="about__caption">{ORG.collegeFull}</figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Spec strip: the chapter's coordinates, at a glance. */}
        <Reveal delay={120}>
          <dl className="about__facts">
            {FACTS.map(({ k, v }) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
