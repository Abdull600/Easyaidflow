import { FadeIn } from '../components/FadeIn';

const benefits = [
  "Reduce manual administrative work",
  "Eliminate spreadsheet chaos",
  "Improve financial transparency",
  "Keep every payment traceable",
  "Generate reports in minutes",
  "Deliver aid faster and with greater confidence",
];

export function WhyAidFlow() {
  return (
    <section id="trust" className="py-32 bg-background border-y border-border">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <FadeIn>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono">Why EasyAidFlow</h2>
            <p className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-foreground">
              Spend less time managing payments. More time creating impact.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-5 border-t border-border pt-10">
            {benefits.map((benefit, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.08} className="flex items-start gap-4">
                <span className="mt-1 text-accent text-lg leading-none">✓</span>
                <span className="text-base text-foreground font-light">{benefit}</span>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A18] text-white p-8 md:p-16 relative overflow-hidden min-h-[320px] md:min-h-[500px] flex items-center justify-center">
          <FadeIn delay={0.5} className="w-full">
            <svg viewBox="0 0 300 300" className="w-full h-auto text-white/20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sec-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="300" height="300" fill="url(#sec-grid)" />
              <path d="M0 150 L300 150 M150 0 L150 300" stroke="currentColor" strokeWidth="1" />
              <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
              <path d="M150 50 L150 150 L220 220" stroke="hsl(var(--accent))" strokeWidth="1.5" />
              <path d="M150 150 L60 90" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx="150" cy="50" r="4" fill="hsl(var(--accent))" />
              <circle cx="220" cy="220" r="4" fill="hsl(var(--accent))" />
              <circle cx="60" cy="90" r="3" fill="hsl(var(--secondary))" />
              <rect x="135" y="135" width="30" height="30" fill="hsl(var(--primary))" stroke="hsl(var(--accent))" strokeWidth="1" />
              <circle cx="150" cy="150" r="2" fill="hsl(var(--background))" />
              <text x="140" y="125" fontSize="8" fontFamily="monospace" fill="white" opacity="0.8">VAULT</text>
              <text x="10" y="20" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.8">SYSTEM.INTEGRITY</text>
              <text x="235" y="290" fontSize="9" fontFamily="monospace" fill="hsl(var(--accent))">STATUS:OK</text>
              <path d="M10 30 L10 10 L30 10" stroke="currentColor" strokeWidth="1" />
              <path d="M290 10 L290 30" stroke="currentColor" strokeWidth="1" />
              <path d="M270 10 L290 10" stroke="currentColor" strokeWidth="1" />
              <path d="M10 270 L10 290 L30 290" stroke="currentColor" strokeWidth="1" />
              <path d="M290 270 L290 290 L270 290" stroke="currentColor" strokeWidth="1" />
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
