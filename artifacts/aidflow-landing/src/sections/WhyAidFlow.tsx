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

        <FadeIn delay={0.3} className="relative overflow-hidden min-h-[320px] md:min-h-[500px]">
          <img
            src="/hero.webp"
            alt="Field beneficiary receiving cash assistance"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </FadeIn>
      </div>
    </section>
  );
}
