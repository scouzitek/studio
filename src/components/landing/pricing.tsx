'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, User, Building } from 'lucide-react';

const pricingIcons = [
  <User key="1" className="w-10 h-10 text-destructive" />,
  <Building key="2" className="w-10 h-10 text-destructive" />,
];

interface PricingTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  cta: string;
}

interface PricingProps {
  onContactClick?: () => void;
  mainTitle: string;
  mainDescription: string;
  pricingTiers: PricingTier[];
}

export default function Pricing({ onContactClick, mainTitle, mainDescription, pricingTiers }: PricingProps) {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">{mainTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              {mainDescription}
            </p>
          </div>
        </div>
        <div className={`mx-auto grid max-w-5xl items-start gap-8 ${pricingTiers.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'} md:gap-12 mt-12`}>
          {pricingTiers.map((tier, index) => (
            <Card key={tier.id} className={`flex flex-col h-full bg-card hover:shadow-lg transition-shadow duration-300 ${pricingTiers.length === 1 ? 'max-w-md mx-auto' : ''}`}>
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                {tier.id === 'personal' ? pricingIcons[0] : pricingIcons[1]}
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <CardDescription className="font-body text-muted-foreground px-6">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-6 pb-6">
                <ul className="space-y-3 font-body">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-center text-center p-6 mt-auto">
                {tier.id === 'business' ? (
                   <Button variant="destructive" size="lg" className="w-full font-headline" onClick={onContactClick}>{tier.cta}</Button>
                ) : (
                  <Button variant="destructive" size="lg" className="w-full font-headline">{tier.cta}</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

