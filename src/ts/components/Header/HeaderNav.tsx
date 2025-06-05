'use client';

import { useEffect, useRef, useState } from 'react';
import ButtonHamburger from '../Common/Buttons/ButtonHamburger';
import HeaderNavLink from './HeaderNavLink';
import { navigation } from '@/ts/config/navigation';
import { FocusTrap } from 'focus-trap-react';
import useOutsideClick from '@/ts/hooks/useOutsideClick';
import TransitionFade from '../Common/Transitions/TransitionFade';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useOutsideClick({
    ref: mobileMenuRef,
    handler: () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileMenuOpen]);

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

        <TransitionFade in={mobileMenuOpen}>
          <div className="absolute top-full left-0 right-0 h-[calc(100vh-(--spacing(24)))] bg-black/40 border-t border-gray-200 z-10 dark:border-gray-800">
            <div className="relative h-full flex justify-end">
              <div className="w-5/6 bg-background overflow-y-auto">
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
          </div>
        </TransitionFade>
      </nav>
    </FocusTrap>
  );
}
