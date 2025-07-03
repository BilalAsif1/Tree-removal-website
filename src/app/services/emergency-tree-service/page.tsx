import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Emergency Tree Service | ArborHero',
  description: 'Available 24/7 for emergency tree services in Austin. We provide rapid response for storm-damaged, fallen, or hazardous trees to ensure your property is safe.',
};

export default function EmergencyTreeServicePage() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-16 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-6 text-center">
          Emergency Tree Service
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Storms and unforeseen events can cause significant damage to your trees, creating dangerous situations. Our 24/7 emergency tree service provides a rapid response to safely handle fallen trees, hazardous limbs, and storm-damaged canopies.
        </p>
        
        <div className="mb-12">
          <Image
            src="https://placehold.co/800x500.png"
            alt="A tree damaged by a storm, requiring emergency service"
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
            data-ai-hint="storm damaged tree"
          />
        </div>

        <div className="prose lg:prose-xl max-w-none mx-auto text-foreground/80">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Our Emergency Response Process</h2>
          <p>
            When disaster strikes, you need a team that can act quickly and safely. Our emergency process is designed to mitigate risk and restore safety to your property as fast as possible.
          </p>
          <ul className="space-y-2">
            <li><strong className="font-semibold text-foreground">Immediate Dispatch:</strong> Our team is on standby 24/7. When you call, we dispatch a crew to your location immediately.</li>
            <li><strong className="font-semibold text-foreground">Risk Assessment:</strong> Upon arrival, our certified arborists assess the situation to identify immediate hazards and formulate the safest plan of action.</li>
            <li><strong className="font-semibold text-foreground">Safe Removal & Cleanup:</strong> We use specialized equipment to safely remove fallen trees and dangerous branches, minimizing further damage to your property. We also provide thorough cleanup services.</li>
            <li><strong className="font-semibold text-foreground">Insurance Assistance:</strong> We can provide documentation and work with your insurance company to help streamline your claim process.</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold font-headline mt-8 mb-4">Why Trust ArborHero in an Emergency?</h2>
          <p>
            In a stressful situation, you need a reliable partner. ArborHero is fully insured, and our arborists are trained to handle high-risk scenarios with precision and care. Our priority is to secure your property and give you peace of mind.
          </p>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg py-7 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            asChild
          >
            <a href="tel:+1234567890">Call for Immediate Help</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
