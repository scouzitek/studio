'use client';

import { useState } from 'react';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Concept from '@/components/landing/concept';
import Features from '@/components/landing/features';
import MoreFeatures from '@/components/landing/more-features';
import Pricing from '@/components/landing/pricing';
import CallToAction from '@/components/landing/call-to-action';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';
import { useLanguage } from '@/context/language-context';
import { ContactModal } from '@/components/landing/contact-modal';

export default function Home() {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => setIsModalOpen(true);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Concept />
        <CallToAction />
        <Features />
        <Pricing onContactClick={openContactModal} />
        <MoreFeatures />
        <Faq />
      </main>
      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
