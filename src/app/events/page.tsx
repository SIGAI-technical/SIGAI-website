import type { Metadata } from 'next';
import Events from '@/components/Events';

import { PageHeader } from '@/components/ui';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'The DJS ACM SIGAI event archive — Clockout, Genesis, Synergy, seminars and hackathons across four academic years.',
  alternates: { canonical: '/events' },
};

export default function EventsPage() {
  return (
    <div className="page-lead">
      <PageHeader
        eyebrow={PAGES.events.eyebrow}
        title={PAGES.events.title}
        lede={PAGES.events.lede}
      />

      

      <Events showHeading={false} />
    </div>
  );
}