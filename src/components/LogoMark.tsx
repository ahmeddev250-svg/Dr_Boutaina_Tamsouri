import { LOGO_CONFIG } from '../data/practice';

interface LogoMarkProps {
  size?: 'md' | 'lg';
}

export default function LogoMark({ size = 'md' }: LogoMarkProps) {
  const sizeClass = size === 'lg' ? 'w-16 h-16' : 'w-14 h-14';

  return (
    <div
      className={`${sizeClass} rounded-full bg-white border border-border/80 shadow-soft flex items-center justify-center overflow-hidden shrink-0 p-0.5`}
    >
      {LOGO_CONFIG.src ? (
        <img
          src={LOGO_CONFIG.src}
          alt={LOGO_CONFIG.alt}
          className="w-full h-full object-cover rounded-full scale-105"
        />
      ) : (
        <span className="font-bold text-primary text-sm">{LOGO_CONFIG.monogram}</span>
      )}
    </div>
  );
}
