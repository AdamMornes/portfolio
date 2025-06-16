import { Fragment } from 'react';
import { workHistory } from '@/data/work/workHistory';
import ContentBlock from '../Common/ContentBlock/ContentBlock';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';
import join from '@/ts/utils/classNameJoin';
import Divider from '../Common/Divider/Divider';
import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';
import Resume from '../Resume/Resume';

export default function WorkHistory(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={workHistory.title}>
      <ContentBlock>
        {workHistory.jobList.map((work, index) => (
          <Fragment key={index}>
            <ContentImageBlock
              className="items-start"
              classNameImageWrapper="flex flex-col"
              image={{
                alt: work.image.alt,
                className: join([
                  'h-auto rounded-md border border-gray-200 rounded-md p-4 dark:border-gray-800',
                  work.image.backgroundColor,
                ]),
                height: 0,
                src: work.image.src,
                width: 200,
              }}
              imageContent={
                <div className="order-1 mt-4">
                  <h3 className="sr-only">{work.heading}</h3>
                  <p className="mb-1">{work.workTitle}</p>
                  <p className="text-sm">
                    {work.startDate} - {work.endDate}
                  </p>
                </div>
              }
            >
              <ul className="list-disc pl-4 lg:pl-8">
                {work.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    dangerouslySetInnerHTML={{ __html: highlight }}
                  />
                ))}
              </ul>
            </ContentImageBlock>

            <Divider className="last:hidden" />
          </Fragment>
        ))}
      </ContentBlock>

      <Resume headingEl="h3" />
    </ContentCodeBlock>
  );
}
