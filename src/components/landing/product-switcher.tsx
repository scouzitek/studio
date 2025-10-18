'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ProductType } from '@/app/page';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

interface ProductSwitcherProps {
  activeProduct: ProductType;
  setActiveProduct: (product: ProductType) => void;
}

export default function ProductSwitcher({ activeProduct, setActiveProduct }: ProductSwitcherProps) {
  const { language } = useLanguage();
  const t = translations[language].productSwitcher;

  return (
    <section className="w-full py-8 md:py-12 bg-background">
      <div className="container flex justify-center items-center gap-4">
        <Button
          variant={activeProduct === 'private' ? 'destructive' : 'outline'}
          size="lg"
          onClick={() => setActiveProduct('private')}
          className={cn(
            "font-headline text-lg px-8 py-6 transition-all duration-300",
            activeProduct === 'private' ? 'shadow-lg scale-105' : 'text-muted-foreground'
          )}
        >
          {t.private}
        </Button>
        <Button
          variant={activeProduct === 'action' ? 'destructive' : 'outline'}
          size="lg"
          onClick={() => setActiveProduct('action')}
          className={cn(
            "font-headline text-lg px-8 py-6 transition-all duration-300",
            activeProduct === 'action' ? 'shadow-lg scale-105' : 'text-muted-foreground'
          )}
        >
          {t.action}
        </Button>
      </div>
    </section>
  );
}
