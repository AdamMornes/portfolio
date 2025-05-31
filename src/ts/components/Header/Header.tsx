import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header className="header">
      <div className="flex justify-between items-center h-full">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
