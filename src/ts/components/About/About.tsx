import Image from 'next/image';

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mb-4 lg:flex-row">
      <Image
        className="shrink-0 rounded-full mb-4 lg:mb-0"
        src="/profile.jpg"
        alt="Adam Mornes"
        width={250}
        height={250}
      />
      <div className="flex flex-col gap-4 mb-0">
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
      </div>
    </section>
  );
}
