import { FadeIn } from '../components/FadeIn';

export function WhyAidFlow() {
  return (
    <section id="trust" className="py-32 bg-background border-y border-border">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <FadeIn>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono">Trust & Security</h2>
            <p className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-foreground">
              Designed for the rigors of institutional audit.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-12">
              Trust is not assumed; it is cryptographically verified. Easyaidflow is built on a foundation of absolute data security and unalterable audit trails, meeting the stringent compliance requirements of international law and global financial regulations.
            </p>
          </FadeIn>
          
          <div className="flex flex-col gap-8 border-t border-border pt-10">
            <FadeIn delay={0.2} className="flex gap-6">
              <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
              <div>
                <h4 className="font-serif text-xl text-foreground">End-to-End Encryption</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Beneficiary PII is encrypted at rest and in transit, ensuring maximum protection in volatile regions.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="flex gap-6">
              <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
              <div>
                <h4 className="font-serif text-xl text-foreground">Immutable Audit Logs</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Every financial transaction, data modification, and login event is permanently recorded and uneditable.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="flex gap-6">
              <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
              <div>
                <h4 className="font-serif text-xl text-foreground">Role-Based Access Control</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Granular permissions ensuring field staff, managers, and external auditors only access absolutely necessary data.</p>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <div className="bg-[#1A1A18] text-white p-8 md:p-16 relative overflow-hidden min-h-[320px] md:min-h-[500px] flex items-center justify-center">
          <FadeIn delay={0.5} className="w-full">
            {/* Minimal coordinate-system diagram for security */}
            <svg viewBox="0 0 300 300" className="w-full h-auto text-white/20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sec-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="300" height="300" fill="url(#sec-grid)" />
              <path d="M0 150 L300 150 M150 0 L150 300" stroke="currentColor" strokeWidth="1" />
              
              {/* Concentric rings */}
              <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
              
              {/* Security vectors */}
              <path d="M150 50 L150 150 L220 220" stroke="hsl(var(--accent))" strokeWidth="1.5" />
              <path d="M150 150 L60 90" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="2 2" />
              
              <circle cx="150" cy="50" r="4" fill="hsl(var(--accent))" />
              <circle cx="220" cy="220" r="4" fill="hsl(var(--accent))" />
              <circle cx="60" cy="90" r="3" fill="hsl(var(--secondary))" />
              
              {/* Core vault */}
              <rect x="135" y="135" width="30" height="30" fill="hsl(var(--primary))" stroke="hsl(var(--accent))" strokeWidth="1" />
              <circle cx="150" cy="150" r="2" fill="hsl(var(--background))" />
              
              <text x="140" y="125" fontSize="8" fontFamily="monospace" fill="white" opacity="0.8">VAULT</text>
              
              <text x="10" y="20" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.8">SYSTEM.INTEGRITY</text>
              <text x="235" y="290" fontSize="9" fontFamily="monospace" fill="hsl(var(--accent))">STATUS:OK</text>
              
              {/* Corner brackets */}
              <path d="M10 30 L10 10 L30 10" stroke="currentColor" strokeWidth="1" />
              <path d="M290 10 L290 30" stroke="currentColor" strokeWidth="1" />
              <path d="M270 10 L290 10" stroke="currentColor" strokeWidth="1" />
              <path d="M10 270 L10 290 L30 290" stroke="currentColor" strokeWidth="1" />
              <path d="M290 270 L290 290 L270 290" stroke="currentColor" strokeWidth="1" />
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}