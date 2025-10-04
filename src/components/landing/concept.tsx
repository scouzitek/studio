'use client';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Concept() {
  const { language } = useLanguage();
  const t = translations[language].features.conceptBox;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl text-foreground">
              {t.title}
            </h2>
            <p className="max-w-3xl text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body text-justify">
              {t.text}
            </p>
        </div>
      </div>
    </section>
  );
}
