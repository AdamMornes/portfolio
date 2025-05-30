import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import join from '@/ts/utils/classNameJoin';

type FooterSocialProps = {
  className?: string;
};

export default function FooterSocial({ className }: FooterSocialProps) {
  return (
    <ul className={join(['footer-social', className])}>
      <li>
        <a
          className="footer-social__link -github"
          href="https://github.com/AdamMornes"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          className="footer-social__link -linkedin"
          href="https://www.linkedin.com/in/adam-mornes-a3564495/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a className="footer-social__link" href="mailto:adammornes@gmail.com">
          <MdEmail />
        </a>
      </li>
    </ul>
  );
}
