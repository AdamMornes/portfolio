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
                className="bg-info-light text-gray-950 px-4 py-1 hover:scale-105 transition-all duration-100  "
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
