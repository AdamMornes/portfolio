import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';
import Image from 'next/image';
import { projects } from '@/data/work';

export default function Projects(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={projects.heading}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {projects.projectList.map((project) => (
          <article
            key={project.id}
            className="bg-background rounded-lg border border-gray-200 shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800"
          >
            {project.imageUrl && (
              <div className="relative w-full aspect-video overflow-hidden">
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

              <p
                className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.shortDescription }}
              />

              <h4 className="sr-only">{projects.tagsHeading}</h4>

              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </ContentCodeBlock>
  );
}
