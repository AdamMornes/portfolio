'use client';

import { useEffect, useRef, useState } from 'react';
import ButtonHamburger from '../Common/Buttons/ButtonHamburger';
import HeaderNavLink from './HeaderNavLink';
import { navigation } from '@/ts/config/navigation';
import { FocusTrap } from 'focus-trap-react';
import useOutsideClick from '@/ts/hooks/useOutsideClick';
import TransitionFade from '../Common/Transitions/TransitionFade';
import TransitionSlideIn from '../Common/Transitions/TransitionSlideIn';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);

  const closeMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useOutsideClick({
    ref: mobileMenuRef,
    handler: closeMenu,
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

        <TransitionFade visible={mobileMenuOpen}>
          <div
            className="absolute top-full left-0 right-0 h-[calc(100vh-(--spacing(20)))] bg-black/40 z-10"
            onClick={closeMenu}
          />
        </TransitionFade>

        <div className="absolute top-full right-0 w-5/6 border-t border-gray-200 overflow-hidden z-10 dark:border-gray-800">
          <TransitionSlideIn visible={mobileMenuOpen}>
            <div className="h-screen bg-background overflow-y-auto p-8">
              <ul className="flex flex-col gap-8">
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
          </TransitionSlideIn>
        </div>
      </nav>
    </FocusTrap>
  );
}
