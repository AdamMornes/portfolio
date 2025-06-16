'use client';

import { useEffect, useRef, useState } from 'react';
import ButtonHamburger from '../Common/Buttons/ButtonHamburger';
import HeaderNavLink from './HeaderNavLink';
import { FocusTrap } from 'focus-trap-react';
import useOutsideClick from '@/ts/hooks/useOutsideClick';
import TransitionFade from '../Common/Transitions/TransitionFade';
import TransitionRightSlideIn from '../Common/Transitions/TransitionRightSlideIn';
import join from '@/ts/utils/classNameJoin';
import { navigation } from '@/data/shared/navigation';

type HeaderNavProps = {
  isMinimized: boolean;
};

export default function HeaderNav({ isMinimized }: HeaderNavProps) {
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
            className={join([
              'absolute top-[calc(100%+1px)] left-0 right-0 bg-black/40 z-10',
              isMinimized
                ? 'h-[calc(100vh-(--spacing(20)))]'
                : 'h-[calc(100vh-(--spacing(24)))]',
            ])}
            onClick={closeMenu}
          />
        </TransitionFade>

        <div className="absolute top-[calc(100%+1px)] right-0 w-5/6 overflow-hidden z-10">
          <TransitionRightSlideIn visible={mobileMenuOpen}>
            <div
              className={join([
                'bg-background overflow-y-auto p-8',
                isMinimized
                  ? 'h-[calc(100vh-(--spacing(20)))]'
                  : 'h-[calc(100vh-(--spacing(24)))]',
              ])}
            >
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
          </TransitionRightSlideIn>
        </div>
      </nav>
    </FocusTrap>
  );
}
