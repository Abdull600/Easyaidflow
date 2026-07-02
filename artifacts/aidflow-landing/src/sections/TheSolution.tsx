import { FadeIn } from '../components/FadeIn';

const workflow = [
  "Funding",
  "Project",
  "Recipients",
  "Approvals",
  "Bulk Payments",
  "Reports",
];

export function TheSolution() {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8 border-b border-primary-foreground/20 pb-12">
            <h2 className="text-3xl md:text-5xl font-serif max-w-2xl leading-tight">
              One platform. Every payment. Complete accountability.
            </h2>
            <div className="font-mono text-xs opacity-60 uppercase tracking-widest mt-2 md:mt-0">
              Platform Overview
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.1}>
            <p className="text-primary-foreground/70 leading-relaxed font-light text-lg mb-12">
              EasyAidFlow centralizes projects, recipients, approvals, disbursements, and reporting into one secure workspace—helping organizations spend less time on administration and more time delivering impact.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-start gap-0 border-l border-primary-foreground/20 pl-8">
              {workflow.map((step, i) => (
                <div key={i} className="flex items-center gap-4 py-3">
                  <span className="font-mono text-xs text-accent opacity-70">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-lg font-serif text-primary-foreground">{step}</span>
                  {i < workflow.length - 1 && (
                    <span className="sr-only">↓</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
