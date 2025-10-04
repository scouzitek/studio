'use client';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function CallToAction() {
  const { language } = useLanguage();
  const t = translations[language].callToAction;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">{t.mainTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              {t.mainDescription}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 md:grid-cols-2 md:gap-12 mt-12">
          {t.sections.map((section) => {
            const image = PlaceHolderImages.find((img) => img.id === section.id);
            return (
              <Card key={section.id} className="flex flex-col overflow-hidden bg-background hover:shadow-2xl transition-all duration-300">
                {image && (
                  <div className="aspect-video relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="font-body text-base text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" size="lg" className="w-full font-headline">{section.cta}</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
