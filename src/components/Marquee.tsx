import { Sparkles } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface MarqueeProps {
  t: TranslationContent;
}

export default function Marquee({ t }: MarqueeProps) {
  const repeated = [...t.marquee.items, ...t.marquee.items];

  return (
    <section
      aria-label="Highlights"
      dir="ltr"
      className="marquee-wrap relative py-14 overflow-x-clip pointer-events-none select-none"
    >
      {/* Back Ribbon */}
      <div className="bg-primary-soft text-primary py-6 rotate-[2.4deg] scale-[1.03] border-y border-primary/15">
        <div className="animate-marquee-reverse items-center gap-10">
          {repeated.map((item, i) => (
            <span
              key={`back-${i}`}
              className="inline-flex items-center gap-3.5 text-lg sm:text-xl font-bold whitespace-nowrap px-5"
            >
              <Sparkles className="w-5 h-5 text-primary-glow shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Front Ribbon */}
      <div className="bg-primary-deep text-white py-6 -rotate-[2.4deg] -mt-14 scale-[1.03] shadow-card">
        <div className="animate-marquee-forward items-center gap-10">
          {repeated.map((item, i) => (
            <span
              key={`front-${i}`}
              className="inline-flex items-center gap-3.5 text-lg sm:text-xl font-bold whitespace-nowrap px-5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary-glow shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
