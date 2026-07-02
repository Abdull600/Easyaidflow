import { FadeIn } from '../components/FadeIn';

export function JoinWaitlist() {
  return (
    <section id="waitlist" className="py-32 md:py-48 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Ready to simplify NGO disbursements?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Join the waitlist today and be among the first organizations to experience a better way to manage projects, approvals, and payments.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your organization email"
              className="flex-1 bg-white/5 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors rounded-none font-light"
              required
            />
            <button
              type="submit"
              className="bg-accent text-white px-10 py-4 font-medium hover:bg-accent/90 transition-colors rounded-none whitespace-nowrap tracking-wide text-sm"
            >
              Join the Waitlist
            </button>
          </form>
          <p className="text-xs text-primary-foreground/40 mt-6 font-light">
            No spam. No commitments. Just early access, product updates, and the opportunity to shape EasyAidFlow before launch.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
