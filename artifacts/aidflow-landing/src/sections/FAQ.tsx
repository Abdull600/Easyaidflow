import * as Accordion from '@radix-ui/react-accordion';
import { FadeIn } from '../components/FadeIn';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is EasyAidFlow only for NGOs?",
    a: "EasyAidFlow is built primarily for NGOs, humanitarian organizations, foundations, and mission-driven organizations that manage projects and bulk disbursements.",
  },
  {
    q: "Who can we pay using EasyAidFlow?",
    a: "You can make payments to beneficiaries, field enumerators, volunteers, temporary staff, consultants, vendors, facilitators, and other approved project participants.",
  },
  {
    q: "Can we make bulk payments?",
    a: "Yes. EasyAidFlow is designed to simplify secure bulk disbursements while giving you complete visibility into every transaction.",
  },
  {
    q: "Can different people approve payments?",
    a: "Yes. Organizations can create structured approval workflows so payments are reviewed before they are released.",
  },
  {
    q: "Will we be able to generate reports?",
    a: "Yes. EasyAidFlow helps organizations generate operational and financial reports that support internal reviews and donor reporting.",
  },
  {
    q: "When will EasyAidFlow launch?",
    a: "We're currently validating the product with early partners. Join the waitlist to receive launch updates and early access.",
  },
];

export function FAQ() {
  return (
    <section className="py-32 bg-[#F2EFE9]">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono text-center">FAQ</h2>
          <p className="text-3xl md:text-4xl font-serif mb-16 text-center text-foreground">Frequently Asked Questions</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion.Root type="single" collapsible className="w-full border-t border-border">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="border-b border-border">
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="group flex flex-1 items-center justify-between py-6 font-serif text-lg md:text-xl font-medium transition-all hover:text-primary data-[state=open]:text-primary text-left outline-none">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-muted-foreground text-sm md:text-base leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down font-light">
                  <div className="pb-8 pt-0 pr-12">{faq.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeIn>
      </div>
    </section>
  );
}
