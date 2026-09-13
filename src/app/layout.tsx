import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, Press_Start_2P, Space_Grotesk } from 'next/font/google';
import Backdrop from '@/components/Backdrop';
import Footer from '@/components/Footer';
import MotionEffects from '@/components/MotionEffects';
import SiteNav from '@/components/SiteNav';
import { IS_PRODUCTION, SITE_URL } from '@/lib/site';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const pressStart = Press_Start_2P({
  variable: '--font-press-start',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const TITLE = 'DJS ACM SIGAI — Special Interest Group on Artificial Intelligence';
const DESCRIPTION =
  'DJS ACM SIGAI, the Special Interest Group on Artificial Intelligence at Dwarkadas J. Sanghvi College of Engineering, affiliated with ACM.';

export const metadata: Metadata = {
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
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  themeColor: '#f7f4ee',
  colorScheme: 'light dark',
};

const EARLY_BOOTSTRAP = `(function(){try{
  var saved = null;
  try { saved = localStorage.getItem('sigai-theme'); } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.setAttribute('data-theme', saved);
  }
}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: EARLY_BOOTSTRAP }} />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} ${pressStart.variable}`}
      >
        <noscript>
          <style>{`.popup{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <Backdrop />
        <MotionEffects />

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
