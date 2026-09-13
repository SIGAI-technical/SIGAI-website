import * as React from 'react';
import Hero from '@/components/Hero';
import QuickNav from '@/components/QuickNav';
import StoryScroller from '@/components/StoryScroller';

/** Navy SIGAI mark for the center sticker of the cube. */
const LOGO_SRC = '/logo-mark-navy.png';

export default function Home() {
  return (
    <>
      <Hero logoSrc={LOGO_SRC} />
      <QuickNav />
      <StoryScroller />
    </>
  );
}
