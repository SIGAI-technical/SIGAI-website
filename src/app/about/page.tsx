import type { Metadata } from 'next';
import About from '@/components/About';
import Affiliation from '@/components/Affiliation';
import Vision from '@/components/Vision';
import { PageHeader } from '@/components/ui';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'DJS ACM SIGAI is a student chapter founded by Dwarkadas J. Sanghvi College of Engineering students in the AI & ML department, affiliated with the ACM.',
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
      <About showHeading={false} />
      <Vision />
      <Affiliation />
    </div>
  );
}
