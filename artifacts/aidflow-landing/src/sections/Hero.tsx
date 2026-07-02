import { FadeIn } from '../components/FadeIn';

export function Hero() {
  return (
    <section className="pt-24 pb-24 md:pt-36 md:pb-32 overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight text-foreground">
              Accountability at the speed of need.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              The operational backbone trusted by the world's leading humanitarian organizations to securely manage projects, distribute bulk payments, and ensure total compliance across borders.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#waitlist" className="inline-flex justify-center items-center bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors">
                Request Access
              </a>
              <a href="#problem" className="inline-flex justify-center items-center border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-border/30 transition-colors">
                Explore the Protocol
              </a>
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-5 relative">
          <FadeIn delay={0.6} className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* SVG Composition representing coordination networks */}
            <svg viewBox="0 0 400 400" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="400" fill="hsl(var(--background))" />
              {/* Grid background */}
              <defs>
                <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#hero-grid)" />
              
              {/* Central Node */}
              <circle cx="200" cy="200" r="40" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1"/>
              <circle cx="200" cy="200" r="12" fill="currentColor" />
              <circle cx="200" cy="200" r="2" fill="hsl(var(--background))" />
              
              {/* Connections */}
              <path d="M 200 200 L 90 110" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 200 200 L 310 130" stroke="currentColor" strokeWidth="1" />
              <path d="M 200 200 L 290 290" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M 200 200 L 110 270" stroke="currentColor" strokeWidth="1" />
              
              {/* Outer Nodes */}
              <g transform="translate(90, 110)">
                <rect x="-10" y="-10" width="20" height="20" fill="hsl(var(--background))" stroke="currentColor" strokeWidth="1"/>
                <circle cx="0" cy="0" r="3" fill="hsl(var(--accent))" />
              </g>
              
              <g transform="translate(310, 130)">
                <circle cx="0" cy="0" r="12" fill="hsl(var(--background))" stroke="currentColor" strokeWidth="1"/>
                <rect x="-3" y="-3" width="6" height="6" fill="hsl(var(--secondary))" />
              </g>
              
              <g transform="translate(290, 290)">
                <rect x="-14" y="-14" width="28" height="28" fill="hsl(var(--background))" stroke="currentColor" strokeWidth="1"/>
                <path d="M -6 -6 L 6 6 M -6 6 L 6 -6" stroke="currentColor" strokeWidth="1" />
              </g>
              
              <g transform="translate(110, 270)">
                <circle cx="0" cy="0" r="8" fill="hsl(var(--accent))" />
                <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
              </g>
              
              {/* Data stream dots */}
              <circle cx="150" cy="155" r="2" fill="hsl(var(--accent))" />
              <circle cx="260" cy="160" r="2" fill="hsl(var(--secondary))" />
              <circle cx="140" cy="240" r="2" fill="currentColor" />
              <circle cx="250" cy="250" r="2" fill="currentColor" />
              
              {/* Coordinates / Data Labels */}
              <text x="70" y="90" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6">ND-01.X</text>
              <text x="330" y="125" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6">PX-44.A</text>
              <text x="310" y="315" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6">TR-99.B</text>
              <text x="75" y="300" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6">DT-02.Y</text>
              <text x="215" y="180" fontSize="9" fontFamily="monospace" fill="currentColor" fontWeight="bold">CORE.SYS</text>
              
              {/* Frame borders */}
              <rect x="20" y="20" width="360" height="360" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
              <path d="M 15 20 L 25 20 M 20 15 L 20 25" stroke="currentColor" strokeWidth="1" />
              <path d="M 375 20 L 385 20 M 380 15 L 380 25" stroke="currentColor" strokeWidth="1" />
              <path d="M 15 380 L 25 380 M 20 375 L 20 385" stroke="currentColor" strokeWidth="1" />
              <path d="M 375 380 L 385 380 M 380 375 L 380 385" stroke="currentColor" strokeWidth="1" />
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}