import { FadeIn } from '../components/FadeIn';

const orgs = [
  {
    name: "NGOs",
    desc: "Coordinate beneficiary payments and project operations with confidence.",
  },
  {
    name: "Foundations",
    desc: "Manage grants, project funding, and financial accountability.",
  },
  {
    name: "Humanitarian Organizations",
    desc: "Deliver emergency cash assistance faster and more transparently.",
  },
  {
    name: "Faith-Based Organizations",
    desc: "Support communities while maintaining complete financial visibility.",
  },
  {
    name: "Development Partners",
    desc: "Monitor funded projects and disbursements across implementing partners.",
  },
];

export function BuiltFor() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-4">
                Built for organizations delivering real impact.
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Whether you're responding to emergencies, implementing long-term development programs, or managing grants, EasyAidFlow gives your team one place to coordinate every payment.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="flex flex-col border-t border-border/50">
              {orgs.map((org, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <li className="py-6 border-b border-border/50 flex items-start justify-between gap-6 group cursor-default">
                    <div>
                      <span className="text-lg md:text-xl font-medium text-foreground block mb-1">{org.name}</span>
                      <span className="text-sm text-muted-foreground font-light">{org.desc}</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all shrink-0 mt-1">
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
