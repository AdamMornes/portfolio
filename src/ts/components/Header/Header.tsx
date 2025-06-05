import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header className="relative h-24 bg-background border-b border-gray-200 px-4 py-4 lg:px-16 dark:border-gray-800">
      <div className="flex justify-between items-center h-full">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
