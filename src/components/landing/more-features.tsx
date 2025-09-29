'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

const featureImageIds = ['feature-secure', 'feature-local', 'feature-export', 'feature-green'];
const imageSides = ['left', 'right', 'left', 'right'];

export default function MoreFeatures() {
  const { language } = useLanguage();
  const t = translations[language].moreFeatures;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-20">
          {t.featureList.map((feature, index) => {
            const image = PlaceHolderImages.find((img) => img.id === featureImageIds[index]);
            const imageComponent = image && (
              <div className="flex justify-center">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={500}
                  className="rounded-lg object-cover shadow-2xl aspect-[6/5]"
                  data-ai-hint={image.imageHint}
                />
              </div>
            );
            const textComponent = (
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-3xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground text-lg font-body">
                  {feature.description}
                </p>
              </div>
            );

            return (
              <div key={feature.id} className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                <div className={`flex flex-col gap-12 ${imageSides[index] === 'right' ? 'lg:order-last' : ''}`}>
                  {imageComponent}
                </div>
                {textComponent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
