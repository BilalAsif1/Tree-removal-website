import Link from 'next/link';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

export function Footer() {
  return (
    <footer id="footer" className="bg-foreground text-primary-foreground w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 hover:underline">
                  <Phone size={16} />
                  <span>(123) 456-7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@arborhero.com" className="inline-flex items-center gap-2 hover:underline">
                  <Mail size={16} />
                  <span>info@arborhero.com</span>
                </a>
              </li>
                <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 2: Follow Us */}
          <div className="md:text-center">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-center space-x-4">
                <Link href="#" aria-label="Facebook page">
                    <Facebook className="h-6 w-6 hover:opacity-80 transition-opacity" />
                </Link>
                <Link href="#" aria-label="Instagram page">
                    <Instagram className="h-6 w-6 hover:opacity-80 transition-opacity" />
                </Link>
            </div>
          </div>

          {/* Column 3: Business Hours */}
          <div className="md:text-right">
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-1 text-sm">
              <li>Mon-Fri: 8 AM - 5 PM</li>
              <li>Sat: 9 AM - 2 PM</li>
              <li>Sun: Closed</li>
            </ul>
            <p className="text-xs mt-4">Fully Licensed & Insured | License #12345</p>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} ArborHero. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
