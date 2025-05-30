'use client';

import { useEffect, useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

export default function Header() {
  const [isMinimized, setIsMinimized] = useState(false);
  const onScroll = () => {
    setIsMinimized(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${isMinimized ? '-minimized' : ''}`}>
      <div className="flex justify-between items-center h-full">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
