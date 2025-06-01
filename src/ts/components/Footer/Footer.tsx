import FooterSocial from './FooterSocial';
import SectionHeader from '../Common/SectionHeader/SectionHeader';
import FooterCopyright from './FooterCopyright';
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <SectionHeader>Contact</SectionHeader>
        <div className="flex flex-col justify-between items-center gap-4 mb-4 md:flex-row">
          <FooterSocial />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
