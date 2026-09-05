import type { Metadata } from 'next';
import { Press_Start_2P, Space_Grotesk } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'DJS ACM SIGAI — Special Interest Group on Artificial Intelligence',
  description:
    'DJS ACM SIGAI, the Special Interest Group on Artificial Intelligence at Dwarkadas J. Sanghvi College of Engineering, affiliated with ACM.',
  icons: { icon: '/icon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${pressStart.variable}`}>{children}</body>
    </html>
  );
}
