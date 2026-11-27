import { useState } from 'react';
import { BadgeCheck, Star } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface TestimonialsProps {
  t: TranslationContent;
}

export default function Testimonials({ t }: TestimonialsProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleItems =
    activeFilter === 'all'
      ? t.testimonials.items
      : t.testimonials.items.filter((item) => item.tag === activeFilter);

  const displayItems = visibleItems.length > 0 ? visibleItems : t.testimonials.items;

  return (
    <section id="reviews" className="section-y overflow-x-clip bg-white">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.06em] text-primary">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-foreground">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-soft border border-warm/30 text-sm font-semibold text-foreground self-start md:self-auto">
            <Star className="w-4 h-4 fill-warm text-warm" />
            <span>{t.testimonials.summary}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {t.testimonials.filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-colors ${
                  isActive
                    ? 'bg-primary text-white border-primary'
                    : 'bg-secondary/70 text-foreground border-border hover:bg-accent'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {displayItems.map((review, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-secondary/40 border border-border p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1" aria-label="5 étoiles">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warm text-warm" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                    <BadgeCheck className="w-4 h-4" />
                    <span>{review.badge}</span>
                  </span>
                </div>

                <p className="text-sm sm:text-base text-foreground leading-[1.7]">
                  “{review.quote}”
                </p>
              </div>

              <div className="pt-3 border-t border-border/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-sm text-foreground truncate">
                    {review.author}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{review.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
