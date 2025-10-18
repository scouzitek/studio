'use client';

import { useState } from 'react';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import { ContactModal } from '@/components/landing/contact-modal';
import { LegalModal, LegalContentType } from '@/components/landing/legal-modal';
import { translations } from '@/lib/translations';
import { useLanguage } from '@/context/language-context';
import ProductSwitcher from '@/components/landing/product-switcher';
import ProductContent from '@/components/landing/product-content';
import Footer from '@/components/landing/footer';
import Concept from '@/components/landing/concept';

export type ProductType = 'private' | 'action';

export default function Home() {
  const { language } = useLanguage();
  const [activeProduct, setActiveProduct] = useState<ProductType>('private');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; content: string; }>({ title: '', content: '' });

  const t = translations[language];

  const openContactModal = () => setIsContactModalOpen(true);
  
  const openLegalModal = (type: LegalContentType) => {
    let title = '';
    let content = '';
    
    switch (type) {
      case 'privacy':
        title = t.legal.privacyPolicy.title;
        content = t.legal.privacyPolicy.content;
        break;
      case 'terms':
        title = t.legal.termsOfService.title;
        content = t.legal.termsOfService.content;
        break;
      case 'about':
        title = t.about.title;
        content = t.about.content;
        break;
    }
    
    setLegalModalContent({ title, content });
    setIsLegalModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Concept />
        <ProductSwitcher activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
        <ProductContent activeProduct={activeProduct} onContactClick={openContactModal} />
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
