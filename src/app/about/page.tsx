import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import { PageHeader } from '@/components/ui';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'DJS ACM SIGAI is the official student chapter for Artificial Intelligence and Machine Learning at SVKM\'s Dwarkadas J. Sanghvi College of Engineering.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="page-lead">
      <PageHeader
        eyebrow={PAGES.about.eyebrow}
        title={PAGES.about.title}
        lede={PAGES.about.lede}
      />
      <AboutSection showHeading={false} />
    </div>
  );
}
