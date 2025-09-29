'use client';

import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import MoreFeatures from '@/components/landing/more-features';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { language } = useLanguage();
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <MoreFeatures />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
