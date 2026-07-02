import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { BuiltFor } from '@/sections/BuiltFor';
import { TheProblem } from '@/sections/TheProblem';
import { TheSolution } from '@/sections/TheSolution';
import { CoreFeatures } from '@/sections/CoreFeatures';
import { HowItWorks } from '@/sections/HowItWorks';
import { WhyAidFlow } from '@/sections/WhyAidFlow';
import { FAQ } from '@/sections/FAQ';
import { JoinWaitlist } from '@/sections/JoinWaitlist';

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      <Nav />
      <main>
        <Hero />
        <BuiltFor />
        <TheProblem />
        <TheSolution />
        <CoreFeatures />
        <HowItWorks />
        <WhyAidFlow />
        <FAQ />
        <JoinWaitlist />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-6">Page Not Found</h1>
        <a href="/" className="text-sm uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;