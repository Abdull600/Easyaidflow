import { useState } from 'react';
import { Link } from 'wouter';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="EasyAidFlow" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10">
          <a href="#problem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">The Challenge</a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Platform</a>
          <a href="#trust" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Trust &amp; Security</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#waitlist" className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
            Request Access
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 border-b border-border' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1 bg-background">
          <a href="#problem" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/40 transition-colors">The Challenge</a>
          <a href="#features" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/40 transition-colors">Platform</a>
          <a href="#trust" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/40 transition-colors">Trust &amp; Security</a>
          <a href="#waitlist" onClick={() => setOpen(false)} className="mt-4 inline-flex justify-center bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
            Request Access
          </a>
        </nav>
      </div>
    </header>
  );
}