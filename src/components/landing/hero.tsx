'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { Download } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl px-4 text-white">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline md:text-6xl lg:text-7xl">
          {t.hero.title}
          <span className="block text-primary-foreground/80 mt-2">{t.hero.subtitle}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg font-body md:text-xl text-primary-foreground/90">
          {t.hero.description.split('\n').map((line, index) => (
            <span key={index} className="block">{line}</span>
          ))}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button variant="destructive" size="default" className="font-headline">
            <Download className="mr-2 h-5 w-5" />
            {t.hero.ctaDownloadApp}
          </Button>
          <Button variant="outline" size="default" className="font-headline text-black bg-white hover:bg-white/90">
            {t.hero.ctaTryFree}
          </Button>
        </div>
      </div>
    </section>
  );
}
