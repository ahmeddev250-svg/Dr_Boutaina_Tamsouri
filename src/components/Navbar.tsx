import { Dispatch, SetStateAction, useState } from 'react';
import { CalendarPlus, Globe, Menu, Phone, X } from 'lucide-react';
import LogoMark from './LogoMark';
import { Lang, PRACTICE } from '../data/practice';
import { TranslationContent } from '../data/translations';

interface NavbarProps {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  t: TranslationContent;
  onOpenBooking: (serviceName?: string) => void;
}

export default function Navbar({ lang, setLang, t, onOpenBooking }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#cases', label: t.nav.cases },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-3 sm:px-6 pt-4">
      <nav
        aria-label="Main"
        className="container-site rounded-full bg-white/95 shadow-soft border border-border/70 px-3 sm:px-5 py-2 flex items-center justify-between gap-3"
      >
        <a href="#home" className="flex items-center gap-3 min-w-0">
          <LogoMark size="md" />
          <div className="min-w-0">
            <p className="font-display font-bold text-sm sm:text-base text-foreground truncate">
              {PRACTICE.shortName}
            </p>
            <p className="text-[11px] sm:text-xs font-medium text-primary truncate">
              {t.nav.tagline}
            </p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border bg-secondary/70 hover:bg-accent text-xs font-semibold text-foreground transition-colors"
            aria-label="Changer de langue"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span>{t.switchLang}</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-deep text-white text-sm font-semibold shadow-soft transition-colors"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>{t.nav.bookNow}</span>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-1.5 shrink-0">
          <a
            href={PRACTICE.phoneHref}
            className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center"
            aria-label={PRACTICE.phoneDisplay}
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={toggleLang}
            className="px-2.5 h-10 rounded-full border border-border text-xs font-bold text-foreground"
          >
            {lang === 'fr' ? 'AR' : 'FR'}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-md rounded-2xl bg-white border border-border shadow-elevated p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-white text-sm font-semibold"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>{t.nav.bookNow}</span>
          </button>
        </div>
      )}
    </header>
  );
}
