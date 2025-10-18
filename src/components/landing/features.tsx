'use client';
import { ShieldCheck, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const icons: { [key: string]: JSX.Element } = {
  private: <ShieldCheck key="1" className="w-10 h-10 text-destructive" />,
  action: <Rocket key="2" className="w-10 h-10 text-destructive" />,
};

interface Feature {
    title: string;
    description: string;
    iconId: 'private' | 'action';
}

interface FeaturesProps {
  mainTitle: string;
  mainDescription: string;
  featureList: Feature[];
}

export default function Features({ mainTitle, mainDescription, featureList }: FeaturesProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">{mainTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              {mainDescription}
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 mt-12">
          {featureList.map((feature, index) => (
            <Card key={index} className="flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                {icons[feature.iconId]}
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center font-body text-muted-foreground px-6 pb-6">
                <p className="text-justify">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
