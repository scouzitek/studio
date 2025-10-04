'use client';

import { Shield } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-gray-900 text-gray-400 font-body">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-headline font-semibold text-white tracking-wider uppercase">{t.product.title}</h3>
            <ul className="mt-4 space-y-3">
              {t.product.links.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-white tracking-wider uppercase">{t.company.title}</h3>
            <ul className="mt-4 space-y-3">
               {t.company.links.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-white tracking-wider uppercase">{t.legal.title}</h3>
            <ul className="mt-4 space-y-3">
              {t.legal.links.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-destructive" />
              <span className="font-bold text-white text-lg font-headline">Novix</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Novix. {t.rightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
