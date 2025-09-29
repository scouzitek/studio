import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, User, Building } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Pour les Particuliers',
    id: 'personal',
    icon: <User className="w-10 h-10 text-destructive" />,
    price: 'Pay-as-you-go',
    description: 'La solution parfaite pour un usage personnel, flexible et sans engagement. Vous ne payez que ce que vous consommez.',
    features: [
      "Accès complet à l'IA sur votre appareil",
      'Confidentialité absolue de vos données',
      'Facturation transparente à la requête',
      "Pas de frais cachés, pas d'abonnement",
    ],
    cta: 'Commencer',
  },
  {
    name: 'Pour les Entreprises',
    id: 'business',
    icon: <Building className="w-10 h-10 text-destructive" />,
    price: 'Volume & Intégration',
    description: 'Une offre sur mesure pour intégrer la puissance de NovixAI dans vos processus métier, en toute sécurité.',
    features: [
      'Déploiement en volume pour vos équipes',
      'Support pour une intégration personnalisée',
      'Tableau de bord de suivi de la consommation',
      'Facturation centralisée et support prioritaire',
    ],
    cta: 'Nous contacter',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">Nos offres</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Une tarification simple et transparente, adaptée à vos besoins.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 mt-12">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className="flex flex-col h-full bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                {tier.icon}
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <CardDescription className="font-body text-muted-foreground px-6">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-6 pb-6">
                <ul className="space-y-3 font-body">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-center text-center p-6 mt-auto">
                <Button variant="destructive" size="lg" className="w-full font-headline">{tier.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
