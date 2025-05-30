import ButtonHamburger from '../Common/Buttons/ButtonHamburger';
import HeaderNavLink from './HeaderNavLink';

export default function HeaderNav() {
  return (
    <nav>
      <ButtonHamburger
        className="lg:hidden"
        open={false}
        openSrLabel="Menu"
        closeSrLabel="Close"
      />
      <div className="hidden lg:block">
        <ul className="flex gap-20">
          <li>
            <HeaderNavLink href="/about">About</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink href="/projects">Projects</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink href="/contact">Contact</HeaderNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
