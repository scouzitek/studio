'use client';

import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';


function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    return <span className="inline-block w-10 h-4 bg-muted rounded-sm animate-pulse" />;
  }
  
  return <>{year}</>;
}

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="border-t bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Shield className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-body">
            {t.designedIn}
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left font-body">
          &copy; <CurrentYear /> Novix AI. {t.rightsReserved}.
        </p>
      </div>
    </footer>
  );
}
