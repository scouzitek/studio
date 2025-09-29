import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featureDetails = [
  {
    id: 'secure',
    title: 'Stockage sécurisé des données',
    description: "Toutes vos conversations et données sont chiffrées et stockées localement sur votre appareil. Nous utilisons la puissance des fonctionnalités de sécurité natives de votre appareil, telles que FaceID ou le code PIN, pour protéger vos informations.",
    imageId: 'feature-secure',
    imageSide: 'left',
  },
  {
    id: 'compliance',
    title: 'Conforme à la loi suisse sur la protection des données',
    description: 'Conçue en Suisse, notre application respecte la nouvelle loi fédérale sur la protection des données (nLPD). Nous nous engageons à respecter les normes les plus élevées en matière de confidentialité et de sécurité des données.',
    imageId: 'feature-local',
    imageSide: 'right',
  },
  {
    id: 'export',
    title: 'Portabilité totale des données',
    description: "Vous avez un contrôle total sur vos données. Exportez facilement tout votre historique de conversation dans un format standard et importez-le sur un nouvel appareil. Vos données vous appartiennent et vous pouvez les emporter avec vous à tout moment.",
    imageId: 'feature-export',
    imageSide: 'left',
  },
  {
    id: 'green-ai',
    title: 'IA Écologique',
    description: "En traitant les données localement, nous réduisons considérablement le besoin de centres de données énergivores. Cette approche améliore non seulement la confidentialité, mais contribue également à une empreinte carbone plus faible par rapport aux services d'IA traditionnels basés sur le cloud.",
    imageId: 'feature-green',
    imageSide: 'right',
  },
];

export default function MoreFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-20">
          {featureDetails.map((feature) => {
            const image = PlaceHolderImages.find((img) => img.id === feature.imageId);
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
                {feature.imageSide === 'left' ? (
                  <>
                    {imageComponent}
                    {textComponent}
                  </>
                ) : (
                  <>
                    {textComponent}
                    {imageComponent}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
