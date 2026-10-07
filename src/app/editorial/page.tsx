import type { Metadata } from 'next';
import EditorialArchive from '@/components/EditorialArchive';
import { PageHeader } from '@/components/ui';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Editorial',
  description: 'Editorial writing from the DJS ACM SIGAI community.',
  alternates: { canonical: '/editorial' },
};

export default function EditorialPage() {
  return (
    <div className="page-lead">
      <PageHeader
        eyebrow={PAGES.editorial.eyebrow}
        title={PAGES.editorial.title}
        lede={PAGES.editorial.lede}
      />

      <EditorialArchive />
    </div>
  );
}
