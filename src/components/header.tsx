'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, TreeDeciduous } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#hero', label: 'Home' },
    { href: '/#about-us', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#testimonials', label: 'Testimonials' },
     { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-md transition-all">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold font-headline text-primary z-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <TreeDeciduous className="w-6 h-6 sm:w-7 sm:h-7" />
          <span>Harmony & Son's</span>
        </Link>

        {/* Centered Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 transform gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
          >
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden bg-background/95 backdrop-blur-sm',
          isMenuOpen ? 'block border-t' : 'hidden'
        )}
      >
        <div className="px-4 pt-2 pb-4">
          <nav className="flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2 font-medium text-lg rounded-md px-3 w-full text-center hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
            >
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
