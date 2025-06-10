import { skills } from '@/data/work';

export default function Skills() {
  return (
    <div>
      {skills.skillSections.map((section) => (
        <div key={section.heading} className="mb-8">
          <h3 className="mb-4">{section.heading}</h3>
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
    </div>
  );
}
