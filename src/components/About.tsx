import { ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/practice';
import { TranslationContent } from '../data/translations';
import NumberCounter from './NumberCounter';

interface AboutProps {
  t: TranslationContent;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="section-y overflow-x-clip bg-white">
      <div className="container-site grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.06em] text-primary">
              {t.about.eyebrow}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-foreground">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-[1.7]">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.about.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-secondary border border-border/80 p-5 space-y-1"
              >
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-primary tabular-nums">
                  <NumberCounter
                    target={metric.target}
                    decimals={metric.decimals}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    fallback={metric.fallback}
                  />
                </p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <ul className="space-y-3 pt-1">
            {t.about.standards.map((std, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground">{std}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-2xl overflow-hidden border border-border shadow-card h-60 sm:h-72">
            <img
              src={IMAGES.salleSoins}
              alt="Salle de soins dentaires"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft h-44 sm:h-52">
            <img
              src={IMAGES.salleAttente}
              alt="Salle d'attente du cabinet"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft h-44 sm:h-52">
            <img
              src={IMAGES.bureauConsultation}
              alt="Bureau de consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
