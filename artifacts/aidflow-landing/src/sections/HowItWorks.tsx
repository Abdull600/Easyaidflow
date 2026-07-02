import { FadeIn } from '../components/FadeIn';

export function HowItWorks() {
  const steps = [
    { title: "Define Protocol", desc: "Establish the project framework, budget allocations, and compliance rules within the system." },
    { title: "Register Entities", desc: "Onboard beneficiaries, enumerators, and vendors through secure offline-capable mobile tools." },
    { title: "Execute Distributions", desc: "Trigger bulk transfers directly to mobile money wallets, bank accounts, or digital vouchers." },
    { title: "Generate Reports", desc: "Produce real-time reconciliation reports for institutional donors with a single click." }
  ];

  return (
    <section className="py-32 bg-[#F2EFE9] border-t border-border/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono">Operational Flow</h2>
            <p className="text-3xl md:text-4xl font-serif text-foreground">Standardized execution from headquarters to the field.</p>
          </div>
        </FadeIn>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-border hidden md:block"></div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-background border border-border rounded-full flex items-center justify-center text-xl font-serif text-primary mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:border-accent">
                  <span className="opacity-80">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-serif text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}