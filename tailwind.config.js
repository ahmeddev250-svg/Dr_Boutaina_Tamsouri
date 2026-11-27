/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          deep: 'var(--primary-deep)',
          glow: 'var(--primary-glow)',
          soft: 'var(--primary-soft)',
        },
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        warm: {
          DEFAULT: 'var(--warm)',
          soft: 'var(--warm-soft)',
        },
        foreground: 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        background: 'var(--background)',
        card: 'var(--card)',
        border: 'var(--border)',
        input: 'var(--input)',
        success: 'var(--success)',
        destructive: 'var(--destructive)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Cairo"', 'sans-serif'],
        sans: ['"DM Sans"', '"Cairo"', 'system-ui', 'sans-serif'],
        arabic: ['"Cairo"', '"Tajawal"', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
        glow: 'var(--shadow-glow)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
    },
  },
  plugins: [],
};
