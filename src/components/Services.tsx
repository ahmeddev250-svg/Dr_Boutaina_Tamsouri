import { ArrowRight, Check } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface ServicesProps {
  t: TranslationContent;
  onOpenBooking: (serviceName?: string) => void;
}

export default function Services({ t, onOpenBooking }: ServicesProps) {
  return (
    <section id="services" className="section-y overflow-x-clip bg-secondary/60">
      <div className="container-site">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.06em] text-primary">
            {t.services.eyebrow}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-foreground">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-[1.65]">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl bg-white border border-border shadow-soft hover:shadow-card transition-all flex flex-col overflow-hidden"
            >
              <div className="h-80 sm:h-96 w-full overflow-hidden bg-secondary">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-[1.6] mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary-glow shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onOpenBooking(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep transition-colors mt-auto"
                >
                  <span>{t.services.actionLabel}</span>
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
