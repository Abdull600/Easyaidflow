import { FadeIn } from '../components/FadeIn';

export function CoreFeatures() {
  const features = [
    {
      title: "Bulk Payment Processing",
      desc: "Execute and track mass distributions to beneficiaries with automated reconciliation across multiple payment gateways.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <rect x="2" y="5" width="20" height="14" rx="1" />
          <path d="M2 10h20" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
          <circle cx="12" cy="15" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Beneficiary Management",
      desc: "Secure, encrypted database for managing recipient identities, biometrics, and entitlement criteria.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Field Enumerator Coordination",
      desc: "Deploy, track, and compensate local data collectors across remote geographic zones with offline capabilities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      title: "Vendor & Supplier Payments",
      desc: "Manage procurement workflows and international wire transfers with granular approval matrices.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      )
    },
    {
      title: "Compliance & Audit Trail",
      desc: "Export granular financial reports mapped directly to specific donor frameworks automatically.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      )
    },
    {
      title: "Project Milestone Tracking",
      desc: "Link financial disbursements directly to verified programmatic outcomes and field assessments.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <rect x="3" y="4" width="18" height="18" rx="1" ry="1" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono">Core Capabilities</h2>
            <p className="text-3xl md:text-5xl font-serif max-w-3xl text-foreground leading-tight">
              Everything required to run a compliant, large-scale humanitarian response.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group border border-border p-10 h-full hover:border-primary/40 transition-colors bg-white">
                <div className="text-primary mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {f.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}