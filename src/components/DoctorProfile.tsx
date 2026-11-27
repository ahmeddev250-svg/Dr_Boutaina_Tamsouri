import { CalendarPlus, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { IMAGES, PRACTICE } from '../data/practice';
import { TranslationContent } from '../data/translations';

interface DoctorProfileProps {
  t: TranslationContent;
  onOpenBooking: (serviceName?: string) => void;
}

export default function DoctorProfile({ t, onOpenBooking }: DoctorProfileProps) {
  return (
    <section id="specialist" className="section-y overflow-x-clip bg-white">
      <div className="container-site grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden border border-border shadow-elevated bg-secondary">
            <img
              src={IMAGES.doctorPortrait}
              alt={t.specialist.title}
              className="w-full h-[420px] sm:h-[500px] object-cover object-top"
            />
          </div>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft text-primary text-xs sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-success" />
            <span>{t.specialist.availabilityBadge}</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.06em] text-primary">
              {t.specialist.eyebrow}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-foreground">
              {t.specialist.title}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-primary">
              {t.specialist.role}
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-[1.7]">
            {t.specialist.bio}
          </p>

          <ul className="space-y-3">
            {t.specialist.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-glow shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-deep text-white font-semibold text-sm sm:text-base shadow-soft transition-colors"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>{t.specialist.ctaBook}</span>
            </button>

            <a
              href={PRACTICE.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary hover:bg-accent border border-border text-foreground font-semibold text-sm sm:text-base transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span dir="ltr">{t.specialist.ctaCall}</span>
            </a>

            <a
              href={PRACTICE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.specialist.ctaWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
