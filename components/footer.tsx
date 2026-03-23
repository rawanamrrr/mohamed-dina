'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/translations';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslation();
  
  return (
    <footer className="w-full py-8 text-center text-sm text-muted-foreground flex flex-col items-center gap-6">
      <div className="w-full max-w-md px-4">
        <Image 
          src="/harry-potter.png" 
          alt="Harry Potter Theme" 
          width={400} 
          height={200} 
          className="mx-auto h-auto w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      <div className="container mx-auto px-4">
        <p>© {currentYear} {t('copyright')} <a 
          href="https://www.instagram.com/digitiva.co?igsh=MXNteGgyZjIzenQwaQ==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Digitiva
        </a></p>
      </div>
    </footer>
  );
};
