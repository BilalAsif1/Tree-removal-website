import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Phone,
  ShieldCheck,
  Award,
  Clock,
  Axe,
  Eraser,
  Scissors,
  Zap,
  LandPlot,
  Quote,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Faq } from '@/components/faq';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section id="hero" className="relative w-full h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2016/03/14/14/38/felled-tree-trunks-1255543_960_720.jpg"
          alt="A lush green forest, representing professional tree services"
          fill
          className="object-cover z-0"
          priority
          data-ai-hint="tree service"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6 animate-in fade-in-0 duration-1000">
            <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight shadow-sm">
              Harmony & Son's 
            </h1>
           <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight shadow-sm">
              Tree Service
            </h1>
            <p className="font-body text-lg md:text-2xl max-w-2xl text-gray-200 animate-in fade-in-0 delay-200 duration-1000">
              Your Trusted Partner for Safe & Professional Tree Care
            </p>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-10 delay-300 duration-500"
              aria-label="Request a free tree removal quote"
              asChild
            >
          
            </Button>
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-lg animate-in fade-in-0 delay-500 duration-1000">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:underline transition-colors">
                <Phone size={20} />
                <span>Call Us: (123) 456-7890</span>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-colors">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full px-4 animate-in fade-in-0 delay-700 duration-1000 z-20">
            <div className="mx-auto mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-base text-gray-300 backdrop-blur-sm bg-black/20 p-4 rounded-lg max-w-max">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>ISA Certified Arborist</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Local Business</span>
              </div>
            </div>
          </div>
      </section>
<section id="about-us" className="w-full py-20 md:py-28 bg-secondary">
  <div className="container mx-auto px-6 max-w-7xl">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-headline text-gray-900 dark:text-white">
      About Us
    </h2>

    <div className="grid md:grid-cols-5 gap-14 items-center mb-20">
      <div className="md:col-span-3">
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed md:leading-loose max-w-prose mx-auto md:mx-0">
          ArborHero has proudly served Austin for over 10 years, delivering safe and reliable tree care. Our team of certified arborists is dedicated to protecting your property with expert tree removal, pruning, and more. As a locally owned business, we understand Austin’s unique needs and are committed to exceptional service and community care.
        </p>
      </div>

      <div className="md:col-span-2 flex justify-center md:justify-end">
        <Image
          src="https://cdn.pixabay.com/photo/2013/10/23/10/59/lumberjack-199692_960_720.jpg"
          alt="ArborHero team removing a tree in Austin"
          width={600}
          height={400}
          className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          data-ai-hint="tree service team"
          priority
        />
      </div>
    </div>

    <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-12 font-headline text-gray-900 dark:text-white">
      Why Choose Us?
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      <Card className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="flex flex-col items-center mb-4">
          <ShieldCheck className="w-14 h-14 mb-4 text-primary" />
          <CardTitle className="font-headline text-2xl">Safety First</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Our trained team uses state-of-the-art equipment to ensure safe tree removal and pruning, prioritizing your property's integrity.
          </p>
        </CardContent>
      </Card>

      <Card className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="flex flex-col items-center mb-4">
          <Award className="w-14 h-14 mb-4 text-primary" />
          <CardTitle className="font-headline text-2xl">Fully Insured</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            We are fully licensed and insured, including general liability and worker’s compensation, for your complete peace of mind.
          </p>
        </CardContent>
      </Card>

      <Card className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="flex flex-col items-center mb-4">
          <Clock className="w-14 h-14 mb-4 text-primary" />
          <CardTitle className="font-headline text-2xl">Fast Response</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            We offer 24/7 emergency tree services to handle storm damage or any urgent needs quickly and efficiently.
          </p>
        </CardContent>
      </Card>
    </div>

    <p className="text-center mt-16 text-sm text-muted-foreground font-semibold tracking-wide uppercase">
      ISA Certified Arborist &nbsp;|&nbsp; TCIA Member &nbsp;|&nbsp; Proudly serving Austin since 2014
    </p>
  </div>
</section>



      <section id="services" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/tree-removal">
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all">
                <CardHeader className="items-center text-center">
                  <Axe className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline text-xl">Tree Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Safe and efficient removal of hazardous or unwanted trees, including full cleanup to leave your property pristine.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/stump-grinding">
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all">
                <CardHeader className="items-center text-center">
                  <Eraser className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline text-xl">Stump Grinding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Professional stump removal to eliminate unsightly stumps and restore your yard’s appearance.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/tree-pruning-trimming">
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all">
                <CardHeader className="items-center text-center">
                  <Scissors className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline text-xl">Tree Pruning & Trimming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Expert pruning to promote tree health, improve aesthetics, and ensure safety.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/emergency-tree-service">
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all">
                <CardHeader className="items-center text-center">
                  <Zap className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline text-xl">Emergency Tree Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    24/7 rapid response for storm-damaged or fallen trees to protect your property.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/land-clearing">
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all">
                <CardHeader className="items-center text-center">
                  <LandPlot className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="font-headline text-xl">Land Clearing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Clear trees and brush for construction, landscaping, or property development projects.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              aria-label="Request a free quote for tree services"
              asChild
            >
              <a href="#contact">Request a Free Quote</a>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="items-center text-center">
                <Quote className="w-12 h-12 mb-4 text-primary" />
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-foreground/80 italic text-lg mb-4">
                  "ArborHero removed a dangerous tree from my yard quickly and safely. Their team was professional, and the price was fair!"
                </blockquote>
                <cite className="font-bold not-italic">– Jane D., Austin</cite>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center text-center">
                <Quote className="w-12 h-12 mb-4 text-primary" />
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-foreground/80 italic text-lg mb-4">
                  "Fantastic service! They handled our emergency tree situation with speed and care. Highly recommend!"
                </blockquote>
                <cite className="font-bold not-italic">– Mark S., Austin</cite>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center text-center">
                <Quote className="w-12 h-12 mb-4 text-primary" />
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-foreground/80 italic text-lg mb-4">
                  "The stump grinding was done perfectly, and my yard looks great. ArborHero is the best in Austin!"
                </blockquote>
                <cite className="font-bold not-italic">– Sarah T., Austin</cite>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-12 text-sm text-muted-foreground">
            Rated 4.9/5 based on 50+ reviews </p>
        </div>
      </section>

      <ContactForm id="contact" />
      <Faq />
    </>
  );
}
