type SkillSection = {
  title: string;
  skills: string[];
};

type Skills = {
  title: string;
  skillSections: SkillSection[];
};

export const skills: Skills = {
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
      title: 'Miscellaneous',
      skills: ['Git', 'Azure DevOps', 'Atlassian Tools'],
    },
  ],
};
