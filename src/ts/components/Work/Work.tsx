import ContentBlock from '../Common/ContentImageBlock/ContentBlock';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';

export default function Work() {
  return (
    <ContentBlock>
      <ContentImageBlock
        className="items-start"
        classNameImageWrapper="flex flex-col"
        image={{
          alt: 'XCentium',
          className:
            'bg-white rounded-md border border-gray-200 rounded-md p-4 dark:border-gray-800',
          height: 35,
          src: '/xc-logo.webp',
          width: 200,
        }}
        imageContent={
          <ContentBlock className="text-sm order-1 mt-4">
            <h2 className="sr-only">XCentium</h2>
            <p>March 2018 - May 2025</p>
          </ContentBlock>
        }
      >
        <ul className="list-disc pl-4 lg:pl-8">
          <li>
            Work with a large range of clients to build and maintain enterprise
            solutions on an aggressive timeline.
          </li>
          <li>
            Architect and develop reliable, scalable, and maintainable front-end
            solutions with a variety of different technologies.
          </li>
          <li>
            Extensive experience in efficient project ramp-up times; usually
            involving a diverse range of solutions with varying frontend
            technologies.
          </li>
          <li>
            Establish and maintain strong and honest working relationships with
            clients, colleagues, and stakeholders.
          </li>
          <li>
            Design, develop, and maintenance of a Node.js Command Line
            Interface; which is used to allow rapid building and release of
            front-end architectural solutions from a choice of frameworks.
          </li>
        </ul>
      </ContentImageBlock>

      <hr className="border-gray-200 dark:border-gray-800 my-8" />

      <ContentImageBlock
        className="items-start"
        classNameImageWrapper="flex flex-col"
        image={{
          alt: 'XCentium',
          className:
            'bg-white rounded-md border border-gray-200 rounded-md p-4 dark:border-gray-800',
          height: 35,
          src: '/ari-logo.png',
          width: 200,
        }}
        imageContent={
          <ContentBlock className="text-sm order-1 mt-4">
            <h2 className="sr-only">XCentium</h2>
            <p>May 2014 - Oct 2017</p>
          </ContentBlock>
        }
      >
        <ul className="list-disc pl-4 lg:pl-8">
          <li>
            Implemented internal tool sets using a Node.js build process
            implementing both Angular and Vue.js.
          </li>
          <li>
            Was responsible for updating and maintaining sass themes which were
            used as a starting point for the web development team to quickly and
            efficiently build industry standard websites.
          </li>
          <li>
            Founding member of a standards, documentation, and implementation
            team; which established a consistent standard operating procedure
            across diverse, cross-functional teams to improve technical
            implementations, work communication, and efficiency.
          </li>
          <li>
            Utilizing Agile methodology and strong communication, I became an
            integral part of the development of ARI&apos;s first responsive
            platform.
          </li>
        </ul>
      </ContentImageBlock>
    </ContentBlock>
  );
}
