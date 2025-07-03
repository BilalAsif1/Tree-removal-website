import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tree Removal | ArborHero',
  description: 'Safe, reliable, and professional tree removal services in Austin. We handle everything from hazardous trees threatening your property to clearing space for your next project.',
};

export default function TreeRemovalPage() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-16 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-6 text-center">
          Professional Tree Removal
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Whether a tree is dead, diseased, hazardous, or simply in the way of a new project, our expert team provides safe and efficient tree removal services. We prioritize the safety of your property and our crew on every job.
        </p>
        
        <div className="mb-12">
          <Image
            src="https://cdn.pixabay.com/photo/2021/03/07/13/02/chainsaw-6076170_1280.jpg"
            alt="A professional arborist safely removing a large tree"
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
            data-ai-hint="tree removal"
          />
        </div>

        <div className="prose lg:prose-xl max-w-none mx-auto text-foreground/80">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Our Tree Removal Process</h2>
          <p>
            Safety and precision are at the core of our tree removal process. We use state-of-the-art equipment and industry-leading techniques to dismantle trees of any size, in any location, without damage to your home or landscape.
          </p>
          <ul className="space-y-2">
            <li><strong className="font-semibold text-foreground">Free On-Site Assessment:</strong> We begin with a thorough evaluation of the tree and its surroundings to determine the safest and most effective removal strategy.</li>
            <li><strong className="font-semibold text-foreground">Controlled & Safe Removal:</strong> Our certified arborists use specialized rigging to carefully lower sections of the tree, ensuring no damage to your property.</li>
            <li><strong className="font-semibold text-foreground">Complete Debris Cleanup:</strong> Once the tree is down, we chip all brush, haul away the wood, and rake the area clean, leaving your property looking its best.</li>
            <li><strong className="font-semibold text-foreground">Stump Grinding Option:</strong> We also offer stump grinding services to completely remove the stump and restore your lawn.</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold font-headline mt-8 mb-4">When Should a Tree Be Removed?</h2>
          <p>
            It can be hard to decide if a tree needs to be removed. Key signs include dead or hanging branches, significant leaning, cracks in the trunk, or signs of disease or pest infestation. If you're unsure, our ISA Certified Arborists can provide an expert consultation.
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
