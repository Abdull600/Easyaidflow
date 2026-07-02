import { FadeIn } from '../components/FadeIn';

const steps = [
  {
    title: "Create a Project",
    desc: "Set up a project, define its funding source, and prepare your payment campaign.",
  },
  {
    title: "Add Recipients",
    desc: "Import or register beneficiaries, field teams, vendors, volunteers, or any other recipients.",
  },
  {
    title: "Approve Payments",
    desc: "Route payment batches through your organization's approval workflow.",
  },
  {
    title: "Disburse & Report",
    desc: "Send payments securely and generate audit-ready reports instantly.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-[#F2EFE9] border-t border-border/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono">How It Works</h2>
            <p className="text-3xl md:text-4xl font-serif text-foreground">Simple enough for every NGO.</p>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-border hidden md:block"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
