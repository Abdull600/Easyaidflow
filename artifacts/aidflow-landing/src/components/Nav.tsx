import { Link } from 'wouter';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-tight text-primary">AidFlow</span>
        </Link>
        <nav className="hidden md:flex gap-10">
          <a href="#problem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">The Challenge</a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Platform</a>
          <a href="#trust" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Trust & Security</a>
        </nav>
        <div>
          <a href="#waitlist" className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
            Request Access
          </a>
        </div>
      </div>
    </header>
  );
}