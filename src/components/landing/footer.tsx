'use client';

import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  return (
    <footer className="border-t bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Shield className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-body">
            Conçu pour la confidentialité en Suisse.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left font-body">
          &copy; <CurrentYear /> NovixAI. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
