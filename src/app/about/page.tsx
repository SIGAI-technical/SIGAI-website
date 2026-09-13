import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
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
      <AboutSection />
    </div>
  );
}
