import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Stump Grinding | ArborHero',
  description: 'Reclaim your yard with our professional stump grinding services in Austin. We eliminate unsightly and hazardous stumps, leaving your landscape smooth and ready for use.',
};

export default function StumpGrindingPage() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-16 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-6 text-center">
          Stump Grinding
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Don't let unsightly tree stumps ruin the look of your yard or pose a tripping hazard. Our professional stump grinding service quickly and effectively removes stumps, allowing you to reclaim your outdoor space.
        </p>
        
        <div className="mb-12">
          <Image
            src="https://cdn.pixabay.com/photo/2021/08/05/17/35/tree-stump-6524505_960_720.jpg"
            alt="A tree stump being ground down in a yard"
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
            data-ai-hint="tree stump"
          />
        </div>

        <div className="prose lg:prose-xl max-w-none mx-auto text-foreground/80">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Our Stump Grinding Process</h2>
          <p>
            We use powerful, specialized equipment to grind stumps down well below the ground level, ensuring they won't grow back. Our process is designed to be efficient with minimal disruption to your surrounding landscape.
          </p>
          <ul className="space-y-2">
            <li><strong className="font-semibold text-foreground">Assessment:</strong> We evaluate the stump's size, location, and any surrounding obstacles to determine the best approach.</li>
            <li><strong className="font-semibold text-foreground">Grinding:</strong> Our stump grinder pulverizes the stump and major roots into small wood chips.</li>
            <li><strong className="font-semibold text-foreground">Cleanup:</strong> We can either leave the resulting mulch for you to use in your garden beds or haul it away, leaving the area clean.</li>
            <li><strong className="font-semibold text-foreground">Restoration:</strong> The area is raked smooth, ready for you to lay sod, plant flowers, or simply enjoy your newly expanded lawn.</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold font-headline mt-8 mb-4">Why Grind a Stump?</h2>
          <p>
            Removing a stump does more than just improve aesthetics. It eliminates a potential hazard for mowing and playing, prevents pests like termites and ants from making a home, and stops the stump from resprouting. Let ArborHero restore the beauty and safety of your yard.
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
