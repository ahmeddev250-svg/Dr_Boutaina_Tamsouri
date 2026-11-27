import { useEffect, useState } from 'react';
import { Lang } from './data/practice';
import { TRANSLATIONS } from './data/translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import DoctorProfile from './components/DoctorProfile';
import Services from './components/Services';
import About from './components/About';
import ClinicalCases from './components/ClinicalCases';
import Testimonials from './components/Testimonials';
import LocationBanner from './components/LocationBanner';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [lang, setLang] = useState<Lang>('fr');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar lang={lang} setLang={setLang} t={t} onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <Hero t={t} onOpenBooking={handleOpenBooking} />
        <Marquee t={t} />
        <DoctorProfile t={t} onOpenBooking={handleOpenBooking} />
        <Services t={t} onOpenBooking={handleOpenBooking} />
        <About t={t} />
        <ClinicalCases t={t} onOpenBooking={handleOpenBooking} />
        <Testimonials t={t} />
        <LocationBanner t={t} onOpenBooking={handleOpenBooking} />
      </main>

      <Footer t={t} lang={lang} />

      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={selectedService}
        t={t}
        lang={lang}
      />
    </div>
  );
}
