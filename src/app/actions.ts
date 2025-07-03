'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().optional(),
  service: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, phone, email, service } = parsed.data;

  try {
    // In a real application, you would save this to Firestore.
    // For example:
    // import { firestore } from '@/lib/firebase';
    // await firestore.collection('leads').add({
    //   name,
    //   phone,
    //   email,
    //   service,
    //   timestamp: new Date(),
    // });

    console.log('Form data submitted:', { name, phone, email, service });

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Failed to submit form.' };
  }
}
