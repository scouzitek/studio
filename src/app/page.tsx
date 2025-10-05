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
import { LegalModal, LegalContentType } from '@/components/landing/legal-modal';
import { translations } from '@/lib/translations';


export default function Home() {
  const { language } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; content: string; }>({ title: '', content: '' });

  const t = translations[language];

  const openContactModal = () => setIsContactModalOpen(true);
  
  const openLegalModal = (type: LegalContentType) => {
    if (type === 'privacy') {
      setLegalModalContent({
        title: t.legal.privacyPolicy.title,
        content: t.legal.privacyPolicy.content,
      });
    } else {
      setLegalModalContent({
        title: t.legal.termsOfService.title,
        content: t.legal.termsOfService.content,
      });
    }
    setIsLegalModalOpen(true);
  };

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
      <Footer onContactClick={openContactModal} onLegalClick={openLegalModal} />
      <ContactModal isOpen={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
      <LegalModal 
        isOpen={isLegalModalOpen} 
        onOpenChange={setIsLegalModalOpen}
        title={legalModalContent.title}
        content={legalModalContent.content}
      />
    </div>
  );
}
