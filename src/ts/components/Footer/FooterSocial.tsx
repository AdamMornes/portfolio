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
          GitHub
        </a>
      </li>
      <li>
        <a
          className="footer-social__link -linkedin"
          href="https://www.linkedin.com/in/adam-mornes-a3564495/"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a className="footer-social__link" href="mailto:adammornes@gmail.com">
          Email
        </a>
      </li>
    </ul>
  );
}
