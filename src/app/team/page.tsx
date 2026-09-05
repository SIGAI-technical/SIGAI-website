import type { Metadata } from 'next';
import Team from '@/components/Team';
import { PageHeader } from '@/components/ui';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Faculty coordinators and the student core committee of DJS ACM SIGAI, across 2023-24, 2024-25 and 2025-26.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <div className="page-lead">
      <PageHeader eyebrow={PAGES.team.eyebrow} title={PAGES.team.title} lede={PAGES.team.lede} />
      <Team showHeading={false} />
    </div>
  );
}
