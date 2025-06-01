import Image from 'next/image';
import Content from '../Common/Content/Content';

export default function About() {
  return (
    <div className="lg:flex items-start gap-4 mb-4">
      <Image
        className="shrink-0 shadow-sm border border-gray-300 p-0.5 mb-4 lg:mb-0 dark:border-gray-700"
        src="/profile.jpg"
        alt="Adam Mornes"
        width={250}
        height={250}
      />
      <Content className="mb-0">
        <p>
          Hello, I&apos;m Adam Mornes. I&apos;m a Web Developer located in
          Flint, MI.
        </p>
        <p>
          I have a passion for creating outstanding responsive web sites - while
          keeping in mind intelligent, intuitive user interface. To do so, I
          work to keep up with the best and newest development trends; as well
          as implementing those them on every project I take on.
        </p>
        <p>
          There is no better feeling than creating an easy to use, beautiful
          website that clients can be proud of.
        </p>
      </Content>
    </div>
  );
}
