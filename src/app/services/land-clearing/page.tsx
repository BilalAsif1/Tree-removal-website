import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Land Clearing | ArborHero',
  description: 'Professional land clearing services in Austin for construction, development, or landscaping projects. We handle projects of all sizes, from single lots to large tracts.',
};

export default function LandClearingPage() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-16 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-6 text-center">
          Land Clearing Services
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Whether you're preparing for a new construction project, creating a pasture, or enhancing your property’s landscape, our land clearing services provide a clean slate. We efficiently clear trees, brush, and overgrowth to meet your project's specifications.
        </p>
        
        <div className="mb-12">
          <Image
            src="https://placehold.co/800x500.png"
            alt="A cleared plot of land ready for a new project"
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
            data-ai-hint="land clearing"
          />
        </div>

        <div className="prose lg:prose-xl max-w-none mx-auto text-foreground/80">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Our Land Clearing Approach</h2>
          <p>
            We approach every land clearing project with a focus on efficiency, safety, and environmental responsibility. Our team works with you to understand your goals and develop a clearing plan that preserves valuable trees while removing unwanted vegetation.
          </p>
          <ul className="space-y-2">
            <li><strong className="font-semibold text-foreground">Initial Consultation:</strong> We walk the property with you to identify the scope of work, mark trees to be kept or removed, and provide a detailed quote.</li>
            <li><strong className="font-semibold text-foreground">Selective or Full Clearing:</strong> We use heavy-duty equipment to perform either selective thinning or complete clearing of trees and brush.</li>
            <li><strong className="font-semibold text-foreground">Debris Management:</strong> All cleared vegetation is either mulched on-site, hauled away, or processed according to your preference and local regulations.</li>
            <li><strong className="font-semibold text-foreground">Site Preparation:</strong> We leave your land graded and ready for the next phase of your project, whether it's construction, seeding, or landscaping.</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold font-headline mt-8 mb-4">Ready for Any Project</h2>
          <p>
            ArborHero has the equipment and expertise to handle land clearing projects of any scale. We are committed to completing your job on time and on budget, ensuring your property is perfectly prepared for its new purpose.
          </p>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            asChild
          >
            <Link href="/contact-us">Get a Free Estimate</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
