import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function FooterSocial() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <a
          className="text-foreground text-2xl hover:text-[#104C35] focus:text-[#104C35] dark:hover:text-[#5FED83] dark:focus:text-[#5FED83]"
          href="https://github.com/AdamMornes"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          className="text-foreground text-2xl hover:text-[#004471] focus:text-[#004471] dark:hover:text-[#34B3E4] dark:hover:text-[#34B3E4]"
          href="https://www.linkedin.com/in/adam-mornes-a3564495/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          className="text-foreground text-2xl hover:text-info-foreground focus:text-info-foreground"
          href="mailto:adammornes@gmail.com"
        >
          <MdEmail />
        </a>
      </li>
    </ul>
  );
}
