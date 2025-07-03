import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Gallery | ArborHero',
  description: 'Explore our gallery of tree removal, stump grinding, and pruning projects by ArborHero in Austin.',
  keywords: 'tree removal Austin, stump grinding gallery, tree pruning projects, ArborHero gallery',
};

export default function GalleryPage() {
  const galleryItems = [
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Tree removal in a residential yard by ArborHero',
      hint: 'tree removal'
    },
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Stump grinding completed in Austin by ArborHero',
      hint: 'stump grinding'
    },
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Before and after of a hazardous tree removal',
      hint: 'tree before after'
    },
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Emergency tree removal after storm damage by ArborHero',
      hint: 'storm damage'
    },
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Arborist pruning a large oak tree',
      hint: 'tree pruning'
    },
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Land clearing for a new construction project',
      hint: 'land clearing'
    },
  ];

  return (
    <main className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-12 text-center">
          Our Work
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={item.hint}
              />
            </figure>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            asChild
          >
            <Link href="/contact-us">Ready to Start Your Project? Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
