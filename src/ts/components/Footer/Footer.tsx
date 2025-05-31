import FooterSocial from './FooterSocial';
import SectionHeader from '../Common/SectionHeader/SectionHeader';
import FooterCopyright from './FooterCopyright';
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="mb-4">
          <SectionHeader>Adam Mornes</SectionHeader>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 mb-4 md:flex-row">
          <FooterSocial />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
