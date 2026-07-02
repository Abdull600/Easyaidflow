export function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-[#F2EFE9]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border/50 pb-12 mb-8">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-2xl font-bold text-primary">Easyaidflow</span>
            <span className="text-sm text-muted-foreground max-w-sm">
              The operational platform trusted by the world's leading humanitarian organizations.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-foreground uppercase tracking-wider text-xs">Platform</span>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors">Security</a>
              <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors">Request Access</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-foreground uppercase tracking-wider text-xs">Legal</span>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Data Processing</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Easyaidflow. All rights reserved.</span>
          <span className="font-mono opacity-50">SYS-VER 2.4.1</span>
        </div>
      </div>
    </footer>
  );
}