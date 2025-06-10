import { Fragment } from 'react';
import { workHistory } from '@/data/work';
import ContentBlock from '../Common/ContentImageBlock/ContentBlock';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';
import join from '@/ts/utils/classNameJoin';
import Divider from '../Common/Divider/Divider';

export default function WorkHistory() {
  return (
    <ContentBlock>
      {workHistory.jobList.map((work, index) => (
        <Fragment key={index}>
          <ContentImageBlock
            className="items-start"
            classNameImageWrapper="flex flex-col"
            image={{
              alt: work.image.alt,
              className: join([
                'rounded-md border border-gray-200 rounded-md p-4 dark:border-gray-800',
                work.image.backgroundColor,
              ]),
              height: work.image.height,
              src: work.image.src,
              width: work.image.width,
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
  );
}
