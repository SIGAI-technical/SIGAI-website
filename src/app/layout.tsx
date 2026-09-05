import type { Metadata, Viewport } from 'next';
import { Press_Start_2P, Space_Grotesk } from 'next/font/google';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import SiteNav from '@/components/SiteNav';
import { IS_PRODUCTION, SITE_URL } from '@/lib/site';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const pressStart = Press_Start_2P({
  variable: '--font-press-start',
  subsets: ['latin'],
  weight: '400',
});

const TITLE = 'DJS ACM SIGAI — Special Interest Group on Artificial Intelligence';
const DESCRIPTION =
  'DJS ACM SIGAI, the Special Interest Group on Artificial Intelligence at Dwarkadas J. Sanghvi College of Engineering, affiliated with ACM.';

export const metadata: Metadata = {
  // Absolute URLs for OG/canonical are resolved against this.
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s — DJS ACM SIGAI' },
  description: DESCRIPTION,
  applicationName: 'DJS ACM SIGAI',
  keywords: [
    'SIGAI',
    'DJS ACM SIGAI',
    'DJSCE',
    'Dwarkadas J. Sanghvi College of Engineering',
    'ACM',
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'student chapter',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: {
    type: 'website',
    siteName: 'DJS ACM SIGAI',
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    site: '@Sigai23713',
  },
  // Keep preview deployments out of search results.
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  themeColor: '#05060b',
  colorScheme: 'dark',
};

/**
 * Runs before first paint so the curtain is up from the very first frame — no
 * flash of the page underneath. It plays on every full page load; client-side
 * route changes keep this layout mounted, so moving between pages never
 * replays it. Reduced-motion users skip it entirely.
 */
const INTRO_BOOTSTRAP = `(function(){try{
var calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!calm){document.documentElement.dataset.intro='1';}
}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* The bootstrap script below sets `data-intro` before React hydrates, so the
       server and client markup differ on <html> by design. */
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_BOOTSTRAP }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${pressStart.variable}`}>
        {/* Belt-and-braces for browsers without the `scripting` media feature. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>

        {/* Fixed backdrop layers — painted once, never on scroll. */}
        <div className="mesh" aria-hidden />
        <div className="grain" aria-hidden />

        <Intro />

        <a href="#main" className="skip">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
