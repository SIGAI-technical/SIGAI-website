import type { Metadata } from 'next';
import Areas from '@/components/Areas';
import { PageHeader } from '@/components/ui';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AI at SIGAI',
  description:
    'The fields DJS ACM SIGAI explores — Artificial Intelligence, Machine Learning, Deep Learning, neural networks, transformers and backpropagation.',
  alternates: { canonical: '/domains' },
};

export default function DomainsPage() {
  return (
    <div className="page-lead">
      <PageHeader
        eyebrow={PAGES.domains.eyebrow}
        title={PAGES.domains.title}
        lede={PAGES.domains.lede}
      />
      <Areas showHeading={false} />
    </div>
  );
}
