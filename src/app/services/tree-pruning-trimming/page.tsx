import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tree Pruning & Trimming | ArborHero',
  description: 'Promote the health, safety, and beauty of your trees with our expert pruning and trimming services in Austin. Our certified arborists know how to care for your trees.',
};

export default function TreePruningPage() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-16 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-6 text-center">
          Tree Pruning & Trimming
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Proper pruning is vital for the health, safety, and aesthetics of your trees. Our certified arborists provide expert tree pruning and trimming services to enhance their natural beauty and encourage strong, healthy growth.
        </p>
        
        <div className="mb-12">
          <Image
            src="https://placehold.co/800x500.png"
            alt="An arborist carefully pruning the branches of a large tree"
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
            data-ai-hint="tree pruning"
          />
        </div>

        <div className="prose lg:prose-xl max-w-none mx-auto text-foreground/80">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Our Pruning Philosophy</h2>
          <p>
            We believe in pruning with a purpose. Every cut is made to benefit the tree, whether it's removing deadwood, improving structure, or providing clearance for buildings and walkways. We follow ISA (International Society of Arboriculture) guidelines to ensure the long-term health of your trees.
          </p>
          <ul className="space-y-2">
            <li><strong className="font-semibold text-foreground">Crown Cleaning:</strong> Removal of dead, dying, diseased, or weak branches from a tree's crown.</li>
            <li><strong className="font-semibold text-foreground">Crown Thinning:</strong> Selective removal of branches to increase light penetration and air movement.</li>
            <li><strong className="font-semibold text-foreground">Crown Raising:</strong> Removal of lower branches to provide clearance for buildings, vehicles, and pedestrians.</li>
            <li><strong className="font-semibold text-foreground">Structural Pruning:</strong> Pruning of young trees to promote good structure and reduce the likelihood of future problems.</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold font-headline mt-8 mb-4">Benefits of Professional Pruning</h2>
          <p>
            Regular, professional pruning not only makes your trees look better but also improves their health by removing problematic branches and stimulating new growth. It enhances safety by eliminating the risk of falling limbs and increases the value of your property.
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
