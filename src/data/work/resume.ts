import { siteName } from '../shared/siteName';

type Resume = {
  title: string;
  pdf: {
    path: string;
    title: string;
  };
  downloadCta: string;
  viewCta: string;
};

export const resume: Resume = {
  downloadCta: 'Download Resume',
  viewCta: 'View Resume',
  pdf: {
    path: '/resume-adam-mornes.pdf',
    title: `${siteName} Resume`,
  },
  title: 'Need more details about my work history?<br />Check out my resume!',
};
