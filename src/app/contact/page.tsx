import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import GetInvolved from '@/components/GetInvolved';
import { PageHeader } from '@/components/ui';
import { PAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach DJS ACM SIGAI at Dwarkadas J. Sanghvi College of Engineering — email, phone and social channels.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="page-lead">
      <PageHeader
        eyebrow={PAGES.contact.eyebrow}
        title={PAGES.contact.title}
        lede={PAGES.contact.lede}
      />
      <Contact showHeading={false} />
      <GetInvolved />
    </div>
  );
}
