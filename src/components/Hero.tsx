import { ArrowRight, CalendarPlus, Scan, Star } from 'lucide-react';
import { IMAGES, PRACTICE } from '../data/practice';
import { TranslationContent } from '../data/translations';

interface HeroProps {
  t: TranslationContent;
  onOpenBooking: (serviceName?: string) => void;
}

export default function Hero({ t, onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-x-clip pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 bg-medical-plus"
    >
      <div className="container-site grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-soft text-xs sm:text-sm font-medium text-foreground">
            <span className="w-2 h-2 rounded-full bg-success shrink-0" />
            <span>{t.hero.statusBadge}</span>
          </div>

          <h1 className="font-display font-extrabold text-[36px] sm:text-[52px] lg:text-[62px] leading-[1.08] tracking-[-0.025em] text-foreground whitespace-pre-line">
            {t.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-[1.7] max-w-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-deep text-white font-semibold text-base shadow-glow transition-all"
            >
              <CalendarPlus className="w-5 h-5" />
              <span>{t.hero.ctaPrimary}</span>
            </button>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-accent border border-border text-foreground font-semibold text-base transition-colors"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 text-warm" aria-hidden="true">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-warm text-warm" />
              ))}
            </div>
            <a
              href="#reviews"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {t.hero.ratingSummary}
            </a>
            <span className="text-xs text-muted-foreground">· {PRACTICE.plusCode}</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border/60 bg-white">
            <img
              src={IMAGES.receptionWallLogo}
              alt={PRACTICE.name}
              className="w-full h-[380px] sm:h-[470px] object-cover"
            />
          </div>

          <div className="animate-float absolute bottom-4 start-3 sm:-start-5 bg-white rounded-2xl border border-border shadow-card px-4 py-3 flex items-center gap-3 max-w-[210px]">
            <div className="w-10 h-10 rounded-xl bg-warm-soft flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-warm text-warm" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">
                {t.hero.floatingCard1Label}
              </p>
              <p className="font-display font-bold text-sm sm:text-base text-foreground">
                {t.hero.floatingCard1Value}
              </p>
            </div>
          </div>

          <div className="animate-float absolute top-4 end-3 sm:-end-4 bg-white rounded-2xl border border-border shadow-card px-4 py-3 flex items-center gap-3 max-w-[230px]">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <Scan className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">
                {t.hero.floatingCard2Label}
              </p>
              <p className="font-display font-bold text-sm sm:text-base text-foreground">
                {t.hero.floatingCard2Value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
