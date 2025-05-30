import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background font-raleway py-7 px-16 z-10">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
