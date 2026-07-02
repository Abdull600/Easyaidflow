import { FadeIn } from '../components/FadeIn';

export function TheProblem() {
  return (
    <section id="problem" className="py-32 bg-[#F2EFE9] border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-16 leading-tight">
              The friction of global aid delivery compromises impact when it matters most.
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            <FadeIn delay={0.2}>
              <p className="mb-6">
                Humanitarian organizations operate in the world's most complex environments. Yet the infrastructure used to manage these operations remains dangerously fragmented. Spreadsheets, disjointed communication tools, and opaque banking networks create systemic bottlenecks.
              </p>
              <p>
                When coordinating hundreds of field enumerators, managing vendor relationships across borders, or executing bulk payments to beneficiaries, traditional financial and project management systems fail. They lack the specialized compliance protocols and audit trails required by institutional donors.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mb-6">
                This fragmentation isn't merely an administrative burden—it is a critical risk factor. Delayed payments to local staff undermine operational integrity. Incomplete audit trails jeopardize future funding and invite regulatory scrutiny.
              </p>
              <p className="text-foreground font-medium">
                The humanitarian sector requires a unified source of truth. A platform where programmatic execution and financial distribution are inextricably linked, verifiable, and secure by design.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}