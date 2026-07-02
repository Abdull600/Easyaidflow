import { FadeIn } from '../components/FadeIn';

const features = [
  {
    title: "Recipient Management",
    desc: "Manage beneficiaries, field enumerators, volunteers, vendors, consultants, temporary staff, and every other project participant from one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Project & Funding Management",
    desc: "Track project budgets, funding sources, and payment activities in real time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="1" ry="1" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
  },
  {
    title: "Bulk Disbursements",
    desc: "Pay hundreds or thousands of recipients securely in just a few clicks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <rect x="2" y="5" width="20" height="14" rx="1" />
        <path d="M2 10h20" />
        <circle cx="16" cy="15" r="1" fill="currentColor" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Approval Workflows",
    desc: "Ensure every payment follows your organization's approval process before funds are released.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Payment Tracking",
    desc: "Monitor payment progress from initiation to successful delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
  {
    title: "AI-Assisted Reporting",
    desc: "Generate financial and operational reports in minutes, not days.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

export function CoreFeatures() {
  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono">Core Capabilities</h2>
            <p className="text-3xl md:text-5xl font-serif max-w-3xl text-foreground leading-tight">
              Everything your team needs to manage NGO disbursements.
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
