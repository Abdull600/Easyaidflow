import { FadeIn } from '../components/FadeIn';

export function TheSolution() {
  const solutions = [
    {
      id: "01",
      title: "Unified Operational Truth",
      description: "A single, immutable ledger for all project activities. From initial needs assessment to final disbursement, every action is tracked, time-stamped, and cryptographically verified."
    },
    {
      id: "02",
      title: "Frictionless Bulk Disbursement",
      description: "Execute thousands of payments across borders simultaneously. Built-in compliance checks ensure funds reach verified beneficiaries, vendors, and staff without intermediary delays."
    },
    {
      id: "03",
      title: "Institutional-Grade Compliance",
      description: "Automated reporting structures designed specifically to meet the rigorous audit requirements of UN agencies, USAID, and major international development funds."
    }
  ];

  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8 border-b border-primary-foreground/20 pb-12">
            <h2 className="text-3xl md:text-5xl font-serif max-w-2xl leading-tight">
              A unified architecture for programmable accountability.
            </h2>
            <div className="font-mono text-xs opacity-60 uppercase tracking-widest mt-2 md:mt-0">
              Platform Overview
            </div>
          </div>
        </FadeIn>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {solutions.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.2}>
              <div className="flex flex-col gap-6">
                <span className="font-mono text-accent text-sm tracking-widest">{item.id}</span>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}