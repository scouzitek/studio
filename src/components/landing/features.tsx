'use client';
import { Cpu, ShieldCheck, MousePointerClick } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

const featureIcons = [
  <MousePointerClick key="3" className="w-10 h-10 text-destructive" />,
  <ShieldCheck key="2" className="w-10 h-10 text-destructive" />,
  <Cpu key="1" className="w-10 h-10 text-destructive" />,
];

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language].features;

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">{t.mainTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              {t.mainDescription}
            </p>
          </div>
        </div>
        
        {t.conceptBox && (
          <div className="mx-auto max-w-4xl mt-12">
            <Card className="bg-background shadow-lg">
              <CardContent className="p-8 text-center">
                <p className="text-lg font-medium text-foreground font-body">
                  {t.conceptBox.text}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {t.featureList.map((feature, index) => (
            <Card key={index} className="flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                {featureIcons[index]}
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center font-body text-muted-foreground px-6 pb-6">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
