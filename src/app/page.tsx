import About from '@/components/About';
import Affiliation from '@/components/Affiliation';
import Areas from '@/components/Areas';
import Contact from '@/components/Contact';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import GetInvolved from '@/components/GetInvolved';
import Hero from '@/components/Hero';
import SiteNav from '@/components/SiteNav';
import Team from '@/components/Team';
import Vision from '@/components/Vision';

/** Navy SIGAI mark, dropped into the cream centre sticker of the cube's front face. */
const LOGO_SRC = '/logo-mark-navy.png';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero logoSrc={LOGO_SRC} />
        <About />
        <Areas />
        <Vision />
        <Events />
        <Team />
        <Affiliation />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
