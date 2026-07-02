import { FadeIn } from '../components/FadeIn';

const painPoints = [
  "Multiple spreadsheets for different projects",
  "Manual bulk bank transfers",
  "Long approval chains",
  "Poor visibility into payment status",
  "Difficult reconciliation",
  "Time-consuming financial reporting",
  "Scattered operational data",
];

export function TheProblem() {
  return (
    <section id="problem" className="py-32 bg-[#F2EFE9] border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              Managing NGO payments shouldn't be this difficult.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-16 max-w-2xl">
              Many organizations still depend on spreadsheets, emails, messaging apps, and online banking portals to coordinate payments. This slows down operations, increases errors, and makes reporting more difficult than it should be.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-4">
            <FadeIn delay={0.2}>
              <ul className="flex flex-col gap-4">
                {painPoints.slice(0, 4).map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-foreground font-light">
                    <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="flex flex-col gap-4">
                {painPoints.slice(4).map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-foreground font-light">
                    <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
