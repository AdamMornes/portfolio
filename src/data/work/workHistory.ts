import xcLogo from '/public/workhistory/xc-logo.webp';
import ariLogo from '/public/workhistory/ari-logo.png';
import { Image } from '../types';

type Job = {
  heading: string;
  highlights: string[];
  endDate: string;
  startDate: string;
  workTitle: string;
  image: Image;
};

type WorkHistory = {
  title: string;
  jobList: Job[];
};

export const workHistory: WorkHistory = {
  title: 'Work History',
  jobList: [
    {
      heading: 'XCentium',
      highlights: [
        'Work with a large range of clients to build and maintain enterprise solutions on an aggressive timeline.',
        'Architect and develop reliable, scalable, and maintainable front-end solutions with a variety of different technologies.',
        'Extensive experience in efficient project ramp-up times; usually involving a diverse range of solutions with varying frontend technologies.',
        'Establish and maintain strong and honest working relationships with clients, colleagues, and stakeholders.',
        'Design, develop, and maintenance of a Node.js Command Line Interface; which is used to allow rapid building and release of front-end architectural solutions from a choice of frameworks.',
      ],
      endDate: 'May 2025',
      startDate: 'March 2018',
      workTitle: 'Senior Frontend Developer',
      image: {
        alt: 'XCentium',
        backgroundColor: 'bg-white',
        src: xcLogo.src,
      },
    },
    {
      heading: 'ARI Network Services',
      highlights: [
        'Implemented internal tool sets using a Node.js build process implementing both Angular and Vue.js.',
        'Was responsible for updating and maintaining sass themes which were used as a starting point for the web development team to quickly and efficiently build industry standard websites.',
        'Founding member of a standards, documentation, and implementation team; which established a consistent standard operating procedure across diverse, cross-functional teams to improve technical implementations, work communication, and efficiency.',
        'Utilizing Agile methodology and strong communication, I became an integral part of the development of ARI&apos;s first responsive platform.',
      ],
      endDate: 'Oct 2017',
      startDate: 'May 2014',
      workTitle: 'Frontend Developer',
      image: {
        alt: 'ARI Network Services',
        backgroundColor: 'bg-white',
        src: ariLogo.src,
      },
    },
  ],
};
