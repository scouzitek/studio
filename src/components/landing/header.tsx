'use client';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <span className="font-bold font-headline">Novix AI</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
             <Link href="#features" className="hover:text-primary transition-colors">{t.header.features}</Link>
             <Link href="#pricing" className="hover:text-primary transition-colors">{t.header.pricing}</Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t.header.changeLanguage}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setLanguage('fr')}>
                Français
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setLanguage('de')}>
                Deutsch
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setLanguage('it')}>
                Italiano
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
