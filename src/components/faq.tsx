import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export function Faq() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Are you licensed and insured?</AccordionTrigger>
              <AccordionContent>
                Yes, ArborHero is fully licensed (License #12345) and insured, ensuring your property and our team are protected. Our certifications meet industry standards, and we follow strict safety protocols for every job, giving you peace of mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer emergency services?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We provide 24/7 emergency tree services for storm-damaged or hazardous trees. Our team responds quickly to protect your property. Call (123) 456-7890 anytime for immediate assistance in Austin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How much does tree removal cost?</AccordionTrigger>
              <AccordionContent>
                Tree removal costs vary based on size, location, and complexity. On average, prices range from $300 to $1,500. We offer free, no-obligation estimates tailored to your needs. Contact us to schedule an assessment in Austin!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
              asChild
            >
              <a href="#contact">Still Have Questions? Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
