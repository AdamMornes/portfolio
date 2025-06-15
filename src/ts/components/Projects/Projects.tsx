import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';
import Image from 'next/image';

import sp_desktop_top from '/public/projects/splashpage/sp_desktoptop.jpg';
import as_homescreen from '/public/projects/atomicstyles/as_homescreen.jpg';
import si_responsive from '/public/projects/siteinfo/si_responsive.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Splash Page Theme',
    description: 'A brief description of project 1 and its key features.',
    technologies: ['CSS', 'Sass', 'Sass Theming'],
    imageUrl: sp_desktop_top.src,
  },
  {
    id: 2,
    title: 'Atomic Style Library',
    description: 'A brief description of project 2 and its key features.',
    technologies: ['CSS', 'CSS Architecture', 'Style Guide Development'],
    imageUrl: as_homescreen.src,
  },
  {
    id: 3,
    title: 'Site Info Booklet',
    description: 'A brief description of project 3 and its key features.',
    technologies: ['Vue.js', 'Webpack'],
    imageUrl: si_responsive.src,
  },
];

export default function Projects(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {project.imageUrl && (
              <div className="w-full h-42 overflow-hidden relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentCodeBlock>
  );
}
