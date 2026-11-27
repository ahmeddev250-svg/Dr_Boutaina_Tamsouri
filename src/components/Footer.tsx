import {
  ArrowUp,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Star,
} from 'lucide-react';
import LogoMark from './LogoMark';
import { Lang, PRACTICE } from '../data/practice';
import { TranslationContent } from '../data/translations';

interface FooterProps {
  t: TranslationContent;
  lang: Lang;
}

export default function Footer({ t, lang }: FooterProps) {
  const year = new Date().getFullYear();
  const address = lang === 'ar' ? PRACTICE.addressAr : PRACTICE.addressFr;

  return (
    <footer id="footer-contact" className="bg-slate-950 text-white pt-12 pb-8 overflow-x-clip">
      <div className="container-site space-y-10">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-display font-bold text-lg text-white">{PRACTICE.name}</p>
            <p className="text-xs sm:text-sm text-slate-300">{address}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-warm text-warm" />
              <span>
                {PRACTICE.rating} ({PRACTICE.reviewCount})
              </span>
            </span>
            <a
              href={PRACTICE.phoneHref}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary hover:bg-primary-deep text-xs font-semibold text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span dir="ltr">{PRACTICE.phoneDisplay}</span>
            </a>
            <a
              href={PRACTICE.emailHref}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PRACTICE.email}</span>
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark size="lg" />
              <div>
                <p className="font-display font-bold text-base text-white">
                  {PRACTICE.shortName}
                </p>
                <p className="text-xs text-primary-glow">{t.nav.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-[1.65]">{t.footer.mission}</p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PRACTICE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PRACTICE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-display font-semibold text-base text-white">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-primary-glow transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#specialist" className="hover:text-primary-glow transition-colors">
                  {t.nav.specialist}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-glow transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-primary-glow transition-colors">
                  {t.nav.cases}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary-glow transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-display font-semibold text-base text-white">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {t.services.items.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-primary-glow transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-display font-semibold text-base text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-glow shrink-0 mt-1" />
                <div>
                  <p>{address}</p>
                  <a
                    href={PRACTICE.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary-glow hover:underline mt-1"
                  >
                    <span>{t.footer.openMaps}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-glow shrink-0" />
                <a href={PRACTICE.phoneHref} dir="ltr" className="hover:text-white">
                  {PRACTICE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary-glow shrink-0 mt-1" />
                <div className="text-xs sm:text-sm space-y-0.5">
                  <p>{t.footer.hoursLine1}</p>
                  <p>{t.footer.hoursLine2}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {year} {PRACTICE.name}. {t.footer.rights}
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
