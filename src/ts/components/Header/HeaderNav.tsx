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
    </nav>
  );
}
