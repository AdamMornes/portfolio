import xcLogo from '/public/workhistory/xc-logo.webp';
import ariLogo from '/public/workhistory/ari-logo.png';
import sp_desktop_top from '/public/projects/splashpage/sp_desktoptop.jpg';
import as_homescreen from '/public/projects/atomicstyles/as_homescreen.jpg';
import si_responsive from '/public/projects/siteinfo/si_responsive.jpg';
import vjs_dropdown from '/public/projects/vanillajs-dropdown/vanillajs-dropdown-repo.jpg';
import imdb_search_desktop from '/public/projects/imdb-search/imdb-search-desktop.jpg';
import xc_seed_project_cli from '/public/projects/xc-seed-project-cli/xc-seed-project-cli.jpg';

export const projects = {
  title: 'Projects',
  tagsHeading: 'Technologies',
  projectList: [
    {
      slug: 'imdb-search',
      title: 'IMDB Search',
      shortDescription:
        'Dev challenge to build a site to search for movies and tv shows using the IMDB API.',
      technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'Webpack'],
      imageUrl: imdb_search_desktop.src,
    },
    {
      slug: 'xc-seed-project-cli',
      title: 'XC Seed Project Cli',
      shortDescription:
        'Command line interface to quickly and easily instantiate a front-end architecture for a new XCentium project.',
      technologies: ['Javascript', 'Webpack', 'Node.js'],
      imageUrl: xc_seed_project_cli.src,
    },
    {
      slug: 'vanillajs-dropdown',
      title: 'vanillajs-dropdown',
      shortDescription:
        'Fully accessible dropdown menu plugin using vanilla javascript.',
      technologies: ['Javascript', 'Webpack'],
      imageUrl: vjs_dropdown.src,
    },
    {
      slug: 'splash-page-theme',
      title: 'Splash Page Theme',
      shortDescription:
        'Responsive theme to be easily customized by internal developers.',
      technologies: ['CSS', 'Sass', 'Javascript', 'Bootstrap', 'JQuery'],
      imageUrl: sp_desktop_top.src,
    },
    {
      slug: 'atomic-style-library',
      title: 'Atomic Style Library',
      shortDescription:
        'Custom built utility CSS library built to be used to quickly and easily customize underlying themes.',
      technologies: ['CSS', 'Sass', 'Javascript', 'JQuery', 'Node.js'],
      imageUrl: as_homescreen.src,
    },
    {
      slug: 'site-info-booklet',
      title: 'Site Info Booklet',
      shortDescription:
        'Internal tool to allow users to navigate client and site resources.',
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
  title: 'Skills',
  skillSections: [
    {
      title: 'Frontend',
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
      title: 'Backend',
      skills: ['Node.js', 'ASP.NET', 'Sitecore', 'MVC Architecture'],
    },
    {
      title: 'Styling',
      skills: ['CSS', 'Tailwind CSS', 'SASS', 'Bootstrap', 'CSS Modules'],
    },
    {
      heading: 'Miscellaneous',
      skills: ['Git', 'Azure DevOps', 'Atlassian Tools'],
    },
  ],
};
