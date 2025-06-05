'use client';

import { useEffect, useState } from 'react';
import join from '@/ts/utils/classNameJoin';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

export default function Header() {
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMinimized(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={join([
        'sticky top-0 z-10 bg-background border-b border-gray-200 dark:border-gray-800 transition-all duration-300',
        isMinimized ? 'h-20' : 'h-24',
      ])}
    >
      <div className="relative h-full p-4 lg:px-16">
        <div className="flex justify-between items-center h-full">
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
