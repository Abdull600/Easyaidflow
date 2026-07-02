import { FadeIn } from '../components/FadeIn';

export function Hero() {
  return (
    <section className="pt-24 pb-0 md:pt-36 overflow-hidden border-b border-border">
      <div className="container mx-auto px-6">
        {/* Text block */}
        <div className="max-w-4xl pb-16">
          <FadeIn>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground border border-border px-4 py-2 mb-8">
              Built for NGOs, Foundations &amp; Humanitarian Organizations
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight text-foreground mb-8">
              Manage every NGO payment from one platform.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-10">
              From beneficiary cash assistance to field enumerator stipends, volunteer allowances, consultant fees, and vendor payments, EasyAidFlow helps organizations manage bulk disbursements, approvals, projects, and reporting from one secure platform.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#waitlist" className="inline-flex justify-center items-center bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors">
                Join the Waitlist
              </a>
              <a href="#demo" className="inline-flex justify-center items-center border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-border/30 transition-colors">
                Book a Demo
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.45}>
            <p className="text-xs text-muted-foreground font-light italic pb-16">
              Designed for organizations that value transparency, accountability, and operational excellence.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Full-width hero image */}
      <FadeIn delay={0.5}>
        <div className="relative w-full h-[420px] md:h-[560px] overflow-hidden">
          <img
            src="/hero.webp"
            alt="A beneficiary receiving a mobile cash transfer"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark overlay at bottom to blend into next section */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
}
