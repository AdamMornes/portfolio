import xcLogo from '/public/workhistory/xc-logo.webp';
import ariLogo from '/public/workhistory/ari-logo.png';
import sp_desktop_top from '/public/projects/splashpage/sp_desktoptop.jpg';
import as_homescreen from '/public/projects/atomicstyles/as_homescreen.jpg';
import si_responsive from '/public/projects/siteinfo/si_responsive.jpg';

export const projects = {
  heading: 'Projects',
  tagsHeading: 'Technologies',
  projectList: [
    {
      id: 1,
      title: 'Splash Page Theme',
      shortDescription:
        'Developed a responsive theme to be easily customized by internal developers.',
      technologies: ['CSS', 'Sass', 'Javascript', 'Bootstrap', 'JQuery'],
      imageUrl: sp_desktop_top.src,
    },
    {
      id: 2,
      title: 'Atomic Style Library',
      shortDescription:
        'Custom built utility CSS library built to be used to quickly and easily customize underlying themes.',
      technologies: ['CSS', 'Sass', 'Javascript', 'JQuery', 'Node.js'],
      imageUrl: as_homescreen.src,
    },
    {
      id: 3,
      title: 'Site Info Booklet',
      shortDescription:
        'Developed an internal tool to allow users to navigate client and site resources.',
      technologies: [
        'HTML',
        'CSS',
        'Sass',
        'Javascript',
        'Vue.js',
        'JQuery',
        'Node.js',
        'Webpack',
      ],
      imageUrl: si_responsive.src,
    },
  ],
};

export const workHistory = {
  heading: 'Work History',
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
        height: 35,
        src: xcLogo.src,
        width: 200,
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
        height: 35,
        src: ariLogo.src,
        width: 200,
      },
    },
  ],
};

export const meta = {
  title: 'Work',
  description:
    'Work history of Adam Mornes, a web developer based in Flint, MI.',
};

export const resume = {
  cta: 'View Resume',
  heading: 'Need more details about my work history?<br />Check out my resume!',
};

export const skills = {
  heading: 'Skills',
  skillSections: [
    {
      heading: 'Frontend',
      skills: [
        'HTML5',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vue.js',
        'JQuery',
        'Webpack',
      ],
    },
    {
      heading: 'Backend',
      skills: ['Node.js', 'ASP.NET', 'Sitecore', 'MVC Architecture'],
    },
    {
      heading: 'Styling',
      skills: ['CSS', 'Tailwind CSS', 'SASS', 'Bootstrap', 'CSS Modules'],
    },
    {
      heading: 'Miscellaneous',
      skills: ['Git', 'Azure DevOps', 'Atlassian Tools'],
    },
  ],
};
