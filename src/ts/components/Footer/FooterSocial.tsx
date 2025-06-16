import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { socialLinks } from '@/data/shared/socialLinks';

export default function FooterSocial() {
  return (
    <div>
      <h2 className="sr-only">{socialLinks.title}</h2>
      <ul className="flex items-center gap-4">
        <li>
          <a
            className="text-foreground text-2xl hover:text-[#104C35] focus:text-[#104C35] dark:hover:text-[#5FED83] dark:focus:text-[#5FED83]"
            href={socialLinks.github.href}
            target="_blank"
          >
            <FaGithub />
            <span className="sr-only">{socialLinks.github.label}</span>
          </a>
        </li>
        <li>
          <a
            className="text-foreground text-2xl hover:text-[#004471] focus:text-[#004471] dark:hover:text-[#34B3E4] dark:focus:text-[#34B3E4]"
            href={socialLinks.linkedin.href}
            target="_blank"
          >
            <FaLinkedin />
            <span className="sr-only">{socialLinks.linkedin.label}</span>
          </a>
        </li>
        <li>
          <a
            className="text-foreground text-2xl hover:text-info-foreground focus:text-info-foreground"
            href={socialLinks.email.href}
          >
            <MdEmail />
            <span className="sr-only">{socialLinks.email.label}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
