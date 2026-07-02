import { FadeIn } from '../components/FadeIn';

export function BuiltFor() {
  const orgs = [
    "International Non-Governmental Organizations",
    "National & Local Humanitarian Agencies",
    "United Nations Programmes & Funds",
    "Multilateral Development Banks",
    "Global Health Initiatives"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <FadeIn>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono">
                Institutional Infrastructure
              </h2>
              <p className="font-serif text-2xl text-foreground leading-snug">
                Engineered for entities operating at the highest levels of global accountability.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="flex flex-col border-t border-border/50">
              {orgs.map((org, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <li className="py-6 border-b border-border/50 flex items-center justify-between group cursor-default">
                    <span className="text-lg md:text-xl font-medium text-foreground">{org}</span>
                    <span className="font-mono text-xs text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all">
                      0{index + 1}
                    </span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}