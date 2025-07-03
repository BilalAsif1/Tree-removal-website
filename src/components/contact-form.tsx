'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { Card } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, { message: 'Please select a service.' }),
  message: z.string().max(1000).optional(),
});

export function ContactForm({ id }: { id?: string }) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Form Submitted!',
          description: "Thank you! We'll contact you within 24 hours.",
        });
        setIsSubmitted(true);
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 flex items-center justify-center min-h-[50vh]">
          <div className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-lg shadow-lg max-w-lg">
            <h3 className="text-2xl font-bold mb-4 font-headline text-primary">Thank You!</h3>
            <p className="text-muted-foreground">Your request has been sent. We'll be in touch with you shortly.</p>
            <Button onClick={() => setIsSubmitted(false)} className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          Let's Get Connected !
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <Card className="p-6 md:p-8 shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address (Optional)</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Service */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Tree Removal">Tree Removal</SelectItem>
                            <SelectItem value="Stump Grinding">Stump Grinding</SelectItem>
                            <SelectItem value="Tree Pruning & Trimming">Tree Pruning & Trimming</SelectItem>
                            <SelectItem value="Emergency Tree Service">Emergency Tree Service</SelectItem>
                            <SelectItem value="Land Clearing">Land Clearing</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Describe your request or ask a question..."
                            rows={5}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request a Free Estimate'}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8 mt-4 md:mt-0">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Contact Directly</h3>
              <div className="space-y-4 text-lg">
                <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone size={24} />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <WhatsAppIcon className="w-6 h-6 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Our Promise</h3>
              <p className="text-lg text-muted-foreground">
                Free, no-obligation estimates. We respond to all inquiries within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Service Area</h3>
              <div className="flex items-start gap-3 text-lg text-muted-foreground">
                <MapPin size={24} className="mt-1 shrink-0 text-primary" />
                <p>Proudly serving Austin, Texas and the surrounding communities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220590.2974263001!2d-97.8860106263435!3d30.307982399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1672702484976!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map for Austin, TX"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
