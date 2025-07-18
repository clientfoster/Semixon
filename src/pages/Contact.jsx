import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import PageLayout from '@/components/PageLayout';
import ContactMethods from '@/components/contact/ContactMethods';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import FaqSection from '@/components/contact/FaqSection';

const Contact = () => {
    const handleClick = () => {
        toast({
            title: "🚧 Feature Coming Soon!",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
    };
  
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Ready to start your next project? Get in touch with our team of experts and let's discuss how we can help bring your vision to life."
    >
      <ContactMethods />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <FaqSection />
    </PageLayout>
  );
};

export default Contact;