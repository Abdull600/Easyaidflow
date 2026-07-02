import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function JoinWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

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
          {status === 'success' ? (
            <div className="max-w-xl mx-auto py-8 px-6 border border-white/20 bg-white/5">
              <p className="text-lg font-serif text-white mb-1">You're on the list.</p>
              <p className="text-sm text-primary-foreground/60 font-light">
                We'll be in touch with launch updates and early access details.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Your organization email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-1 bg-white/5 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors rounded-none font-light disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-accent text-white px-10 py-4 font-medium hover:bg-accent/90 transition-colors rounded-none whitespace-nowrap tracking-wide text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Submitting…' : 'Join the Waitlist'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-300 mt-4 font-light">{errorMsg}</p>
          )}

          {status !== 'success' && (
            <p className="text-xs text-primary-foreground/40 mt-6 font-light">
              No spam. No commitments. Just early access, product updates, and the opportunity to shape EasyAidFlow before launch.
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
