import FooterSocial from './FooterSocial';
import SectionHeader from '../Common/SectionHeader/SectionHeader';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="mb-4">
          <SectionHeader>Adam Mornes</SectionHeader>
        </div>
        <div className="mb-4">
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}
