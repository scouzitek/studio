import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featureDetails = [
  {
    id: 'secure',
    title: 'Secure Data Storage',
    description: "All your conversations and data are encrypted and stored locally on your device. We utilize the power of your device's native security features, such as FaceID or PIN, to protect your information from unauthorized access.",
    imageId: 'feature-secure',
    imageSide: 'left',
  },
  {
    id: 'compliance',
    title: 'Swiss Privacy Law Compliant',
    description: 'Designed in Switzerland, our app adheres to the strict new Federal Act on Data Protection (nLPD/FADP). We are committed to upholding the highest standards of data privacy and security, giving you peace of mind.',
    imageId: 'feature-local',
    imageSide: 'right',
  },
  {
    id: 'export',
    title: 'Full Data Portability',
    description: 'You have complete control over your data. Easily export your entire conversation history in a standard format and import it on a new device. Your data belongs to you, and you can take it with you anytime.',
    imageId: 'feature-export',
    imageSide: 'left',
  },
  {
    id: 'green-ai',
    title: 'Green AI',
    description: 'By processing data locally, we drastically reduce the need for energy-hungry data centers. This approach not only enhances privacy but also contributes to a smaller carbon footprint compared to traditional cloud-based AI services.',
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
