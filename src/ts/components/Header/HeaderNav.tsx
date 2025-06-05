'use client';

import { useState } from 'react';
import ButtonHamburger from '../Common/Buttons/ButtonHamburger';
import HeaderNavLink from './HeaderNavLink';
import { navigation } from '@/ts/config/navigation';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav>
      <ButtonHamburger
        className="lg:hidden"
        open={mobileMenuOpen}
        openSrLabel="Menu"
        closeSrLabel="Close"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <div className="hidden lg:block">
        <ul className="flex gap-20">
          {navigation.map((item) => (
            <li key={item.href}>
              <HeaderNavLink href={item.href}>{item.label}</HeaderNavLink>
            </li>
          ))}
        </ul>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="absolute top-full right-0 h-[calc(100vh-(--spacing(24)))] z-10 w-full bg-background border-t border-gray-200 dark:border-gray-800">
            <div className="p-4">
              <ul className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <HeaderNavLink href={item.href}>{item.label}</HeaderNavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
