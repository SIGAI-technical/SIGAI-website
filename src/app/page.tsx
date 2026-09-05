import GetInvolved from '@/components/GetInvolved';
import Hero from '@/components/Hero';
import QuickNav from '@/components/QuickNav';
import StoryScroller from '@/components/StoryScroller';

/** Navy SIGAI mark, dropped into the cream centre sticker of the cube's front face. */
const LOGO_SRC = '/logo-mark-navy.png';

export default function Home() {
  return (
    <>
      <Hero logoSrc={LOGO_SRC} />
      <QuickNav />
      <StoryScroller />
      <GetInvolved />
    </>
  );
}
