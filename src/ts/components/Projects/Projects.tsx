import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';
import Image from 'next/image';
import { projects } from '@/data/work';
import ButtonBackground from '@/ts/components/Common/Buttons/ButtonBackground';

export default function Projects(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={projects.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {projects.projectList.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col bg-background rounded-lg border border-gray-200 shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800"
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
            <div className="flex flex-col items-start flex-1 p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.shortDescription}
              </p>

              <h4 className="sr-only">{projects.tagsTitle}</h4>

              <ul className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.cta && (
                <ButtonBackground
                  className="w-full mt-4"
                  href={project.cta.href}
                  isAnchor
                  target="_blank"
                >
                  {project.cta.text}
                </ButtonBackground>
              )}
            </div>
          </article>
        ))}
      </div>
    </ContentCodeBlock>
  );
}
