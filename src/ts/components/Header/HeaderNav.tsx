'use client';

import { useRef, useState } from 'react';
import ButtonHamburger from '../Common/Buttons/ButtonHamburger';
import HeaderNavLink from './HeaderNavLink';
import { navigation } from '@/ts/config/navigation';
import { FocusTrap } from 'focus-trap-react';
import useOutsideClick from '@/ts/hooks/useOutsideClick';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useOutsideClick({
    ref: mobileMenuRef,
    handler: () => setMobileMenuOpen(false),
  });

  return (
    <FocusTrap
      active={mobileMenuOpen}
      focusTrapOptions={{
        allowOutsideClick: true,
      }}
    >
      <nav ref={mobileMenuRef}>
        <ButtonHamburger
          aria-expanded={mobileMenuOpen}
          className="lg:hidden"
          closeSrLabel="Close"
          open={mobileMenuOpen}
          openSrLabel="Menu"
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
            <div className="absolute top-full w-full right-0 h-screen z-10  bg-background border-t border-gray-200 z-10 dark:border-gray-800">
              <div className="p-4">
                <ul className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <HeaderNavLink
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </HeaderNavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </FocusTrap>
  );
}
