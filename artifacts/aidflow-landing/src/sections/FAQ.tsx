import * as Accordion from '@radix-ui/react-accordion';
import { FadeIn } from '../components/FadeIn';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "How does Easyaidflow handle poor connectivity in field locations?",
      a: "Our field enumeration tools are fully offline-capable. Data can be collected on mobile devices without an internet connection and automatically syncs to the central encrypted database the moment connectivity is restored."
    },
    {
      q: "Can the platform integrate with our existing financial systems?",
      a: "Yes. Easyaidflow provides a robust, secure API for seamless integration with standard institutional ERPs (including SAP, Oracle, and Microsoft Dynamics) as well as major mobile money providers in emerging markets."
    },
    {
      q: "What level of training is required for local field staff?",
      a: "The field interface is designed with radical simplicity and multi-language support, requiring less than an hour of training for enumerators. The administrative dashboard is comprehensive but follows standardized operational workflows."
    },
    {
      q: "Is Easyaidflow compliant with GDPR and other data protection laws?",
      a: "Absolutely. We adhere to GDPR, HIPAA (where applicable), and specific regional data protection frameworks. Beneficiary data is encrypted, anonymized where required, and stored in compliant server jurisdictions."
    }
  ];

  return (
    <section className="py-32 bg-[#F2EFE9]">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 font-mono text-center">Inquiries</h2>
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