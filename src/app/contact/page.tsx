import type { Metadata } from 'next';
import ContactStrip from '@/components/ContactStrip';
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
      <header className="shell masthead">
        <div className="popup" style={{ ['--popup-angle' as string]: '12deg' }}>
          <span className="eyebrow">{PAGES.contact.eyebrow}</span>
        </div>
        <div
          className="popup"
          style={{
            ['--popup-delay' as string]: '70ms',
            ['--popup-angle' as string]: '16deg',
          }}
        >
          <h1 className="masthead__title" id="contact-title">
            Get in touch with <span className="mark">DJS ACM SIGAI</span>
          </h1>
        </div>
        <div
          className="popup"
          style={{
            ['--popup-delay' as string]: '120ms',
            ['--popup-angle' as string]: '12deg',
          }}
        >
          <p className="section-lede">{PAGES.contact.lede}</p>
        </div>
        <div
          className="popup"
          style={{
            ['--popup-delay' as string]: '170ms',
            ['--popup-angle' as string]: '10deg',
          }}
        >
          <div className="rule rule--draw" aria-hidden="true" />
        </div>
      </header>

      <ContactStrip />

      <div className="band band--areas">
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="popup">
              <span className="eyebrow">Find us</span>
              <h2 className="section-title">
                On campus at <span className="mark">DJSCE</span>
              </h2>
              <p className="section-lede">
                SVKM&apos;s Dwarkadas J. Sanghvi College of Engineering, Vile Parle West, Mumbai.
              </p>
              <div className="map-slot" style={{ marginTop: 24 }}>
                <iframe
                  title="DJSCE Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0125866162137!2d72.83546747514652!3d19.107647882104576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67fd%3A0xe0b9538d623ac5d2!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  style={{ border: 0, borderRadius: 6 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
