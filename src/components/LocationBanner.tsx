import { ArrowRight, MapPin } from 'lucide-react';
import { IMAGES, PRACTICE } from '../data/practice';
import { TranslationContent } from '../data/translations';

interface LocationBannerProps {
  t: TranslationContent;
  onOpenBooking: (serviceName?: string) => void;
}

export default function LocationBanner({ t, onOpenBooking }: LocationBannerProps) {
  return (
    <section id="contact" className="section-y overflow-x-clip bg-white">
      <div className="container-site">
        <div className="relative rounded-[28px] overflow-x-clip shadow-elevated min-h-[470px] flex items-center">
          <img
            src={IMAGES.plateauTechnique}
            alt={PRACTICE.name}
            className="absolute inset-0 w-full h-full object-cover rounded-[28px]"
          />
          <div
            className="absolute inset-0 rounded-[28px]"
            style={{ background: 'var(--gradient-banner)' }}
          />

          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-medium text-white">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{t.banner.pill}</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-[1.15] text-white">
                {t.banner.title}
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-[1.7]">
                {t.banner.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-warm hover:bg-amber-500 text-foreground font-bold text-sm sm:text-base shadow-soft transition-colors"
                >
                  <span>{t.banner.ctaBook}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>

                <a
                  href={PRACTICE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm sm:text-base transition-colors"
                >
                  <span>{t.banner.ctaDirections}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex lg:justify-end">
              <div className="w-full max-w-[460px] bg-white text-foreground rounded-[24px] p-3.5 sm:p-4 shadow-elevated">
                <iframe
                  title={PRACTICE.name}
                  src={PRACTICE.mapEmbedUrl}
                  className="w-full h-[330px] sm:h-[370px] rounded-[18px] overflow-hidden border border-border bg-secondary"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
