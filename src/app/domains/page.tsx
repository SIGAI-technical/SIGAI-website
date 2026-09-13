import type { Metadata } from 'next';
import AreasShowcase from '@/components/AreasShowcase';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AI, ML and Deep Learning',
  description:
    'The fields DJS ACM SIGAI explores — Artificial Intelligence, Machine Learning, Deep Learning, neural networks, transformers and backpropagation.',
  alternates: { canonical: '/domains' },
};

export default function DomainsPage() {
  return (
    <div className="page-lead">
      <header className="shell masthead">
        <div className="popup" style={{ ['--popup-angle' as string]: '12deg' }}>
          <span className="eyebrow">{PAGES.domains.eyebrow}</span>
        </div>
        <div
          className="popup"
          style={{
            ['--popup-delay' as string]: '70ms',
            ['--popup-angle' as string]: '16deg',
          }}
        >
          <h1 className="masthead__title" id="ai-title">
            AI, ML and <span className="mark">Deep Learning</span>
          </h1>
        </div>
        <div
          className="popup"
          style={{
            ['--popup-delay' as string]: '120ms',
            ['--popup-angle' as string]: '12deg',
          }}
        >
          <p className="section-lede">
            The strands the chapter&apos;s seminars and workshops are built around. Turn any card over
            for what it means.
          </p>
        </div>
        <div
          className="popup"
          style={{
            ['--popup-delay' as string]: '170ms',
            ['--popup-angle' as string]: '10deg',
          }}
        >
          <div className="rule rule--draw" aria-hidden="true" />
        </div>
      </header>

      <div className="band band--areas">
        <section className="section areas-show">
          <div className="shell">
            <AreasShowcase />
          </div>
        </section>
      </div>
    </div>
  );
}
