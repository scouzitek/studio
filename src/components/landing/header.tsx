import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-destructive" />
          <span className="font-bold font-headline">NovixAI</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
             <Link href="#features" className="hover:text-primary transition-colors">Fonctionnalités</Link>
             <Link href="#pricing" className="hover:text-primary transition-colors">Nos Offres</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
