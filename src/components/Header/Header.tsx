import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header + ' ' + styles.minimized}>
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
