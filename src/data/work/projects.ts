import sp_desktop_top from '/public/projects/splashpage/sp_desktoptop.jpg';
import asHomescreen from '/public/projects/atomicstyles/as_homescreen.jpg';
import siResponsive from '/public/projects/siteinfo/si_responsive.jpg';
import vjsDropdown from '/public/projects/vanillajs-dropdown/vanillajs-dropdown-repo.jpg';
import imdbSearchDesktop from '/public/projects/imdb-search/imdb-search-desktop.jpg';
import xcSeedProjectCli from '/public/projects/xc-seed-project-cli/xc-seed-project-cli.jpg';

type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  imageUrl: string;
  cta?: {
    text: string;
    href: string;
  };
};

type Projects = {
  title: string;
  tagsTitle: string;
  projectList: Project[];
};

export const projects: Projects = {
  title: 'Projects',
  tagsTitle: 'Technologies',
  projectList: [
    {
      slug: 'imdb-search',
      title: 'IMDB Search',
      shortDescription:
        'Dev challenge to build a site to search for movies and tv shows using the IMDB API.',
      technologies: ['HTML', 'TailwindCSS', 'Javascript', 'React', 'Webpack'],
      imageUrl: imdbSearchDesktop.src,
      cta: {
        text: 'View Project Source',
        href: 'https://github.com/AdamMornes/devchallenge-imdb-search',
      },
    },
    {
      slug: 'xc-seed-project-cli',
      title: 'XC Seed Project Cli',
      shortDescription:
        'Command line interface to quickly and easily instantiate a front-end architecture for a new XCentium project.',
      technologies: ['Javascript', 'Webpack', 'Node.js'],
      imageUrl: xcSeedProjectCli.src,
      cta: {
        text: 'View Project Source',
        href: 'https://www.npmjs.com/package/@xcentium/xc-cli',
      },
    },
    {
      slug: 'vanillajs-dropdown',
      title: 'vanillajs-dropdown',
      shortDescription:
        'Fully accessible dropdown menu plugin using vanilla javascript.',
      technologies: ['Javascript', 'Webpack'],
      imageUrl: vjsDropdown.src,
      cta: {
        text: 'View Project Source',
        href: 'https://github.com/AdamMornes/vanillajs-dropdown',
      },
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
      imageUrl: asHomescreen.src,
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
      imageUrl: siResponsive.src,
    },
  ],
};
