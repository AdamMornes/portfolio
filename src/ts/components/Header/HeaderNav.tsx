'use client';

import { useState } from 'react';
import ButtonHamburger from '../Common/Buttons/ButtonHamburger';
import HeaderNavLink from './HeaderNavLink';

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
          <li>
            <HeaderNavLink href="/about">About</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink href="/work">Work</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink href="/contact">Contact</HeaderNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
