import { skills } from '@/data/work';
import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';

export default function Skills(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={skills.title}>
      {skills.skillSections.map((section) => (
        <div key={section.title} className="mb-8">
          <h3 className="mb-4">{section.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {section.skills.map((skill) => (
              <li
                className="border border-gray-200 px-4 py-1 transition-transform duration-200 dark:border-gray-800 hover:scale-105"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ContentCodeBlock>
  );
}
