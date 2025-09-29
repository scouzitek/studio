import { Cpu, ShieldCheck, Smile } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Cpu className="w-10 h-10 text-destructive" />,
    title: '100% Local',
    description: "L'intégralité du traitement IA se déroule directement sur votre appareil. Aucune donnée n'est jamais envoyée dans le cloud.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-destructive" />,
    title: 'Confidentialité Absolue',
    description: 'Nous utilisons le chiffrement et la sécurité natifs de votre appareil pour stocker vos conversations.',
  },
  {
    icon: <Smile className="w-10 h-10 text-destructive" />,
    title: "Facilité d'utilisation",
    description: 'Une interface claire et intuitive, conçue pour la productivité et une expérience utilisateur fluide.',
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-body">Piliers Clés</div>
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">Votre vie privée, garantie.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Notre application repose sur trois principes fondamentaux pour garantir la sécurité et la confidentialité de vos données.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                {feature.icon}
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center font-body text-muted-foreground px-6 pb-6">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
