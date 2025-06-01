import Image from 'next/image';

export default function About() {
  return (
    <div className="lg:flex items-start gap-4">
      <Image
        className="shrink-0 shadow-sm border border-gray-300 p-0.5 mb-4 lg:mb-0"
        src="/profile.jpg"
        alt="Adam Mornes"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-4">
        <p>
          Hello, I&apos;m Adam Mornes. I&apos;m a Web Developer located in
          Flint, MI.
        </p>
        <p>
          Born and raised in MN, I spent the first three years of my career
          years honing my skills with web development while fighting off the
          cold of Duluth, MN.
        </p>
        <p>
          I have a passion for creating outstanding and responsive web sites -
          while keeping in mind intelligent, intuitive user interface. To do so,
          I work to keep up with the best and newest development trends; as well
          as implementing those them on every project I take on.
        </p>
        <p>
          There is no better feeling than creating an easy to use, beautiful
          website that clients can be proud of.
        </p>
        <p>
          When I&apos;m not crunching code, I enjoy playing cards (yes, the
          nerdy kind - Magic: the Gathering), playing music on my guitar, and
          trying the newest fancy IPA or Belgian beer I can find.
        </p>
      </div>
    </div>
  );
}
