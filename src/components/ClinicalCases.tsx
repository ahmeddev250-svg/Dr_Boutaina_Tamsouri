import { ArrowRight } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface ClinicalCasesProps {
  t: TranslationContent;
  onOpenBooking: (serviceName?: string) => void;
}

export default function ClinicalCases({ t, onOpenBooking }: ClinicalCasesProps) {
  return (
    <section id="cases" className="section-y overflow-x-clip bg-secondary/60">
      <div className="container-site">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.06em] text-primary">
            {t.cases.eyebrow}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-foreground">
            {t.cases.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-[1.65]">
            {t.cases.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cases.items.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-white border border-border shadow-soft overflow-hidden flex flex-col"
            >
              <div className="relative h-64 bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 start-3 px-3 py-1 rounded-full bg-white/95 text-primary text-xs font-semibold shadow-soft">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.6] mb-4 flex-1">
                  {item.outcome}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenBooking(item.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-deep transition-colors"
                >
                  <span>{t.cases.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
