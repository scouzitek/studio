import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

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
          L'IA qui respecte votre vie privée.
          <span className="block text-primary-foreground/80 mt-2">100% sur votre appareil.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg font-body md:text-xl text-primary-foreground/90">
          NovixAI traite toutes les données localement sur votre appareil, garantissant une confidentialité totale. Vos données ne quittent jamais votre contrôle.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="destructive" className="font-headline">Télécharger gratuitement</Button>
          <Button size="lg" variant="destructive" className="font-headline">
            Demander une démo
          </Button>
        </div>
      </div>
    </section>
  );
}
