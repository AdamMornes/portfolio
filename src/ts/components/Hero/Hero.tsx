import ButtonBackground from '../Common/Buttons/ButtonBackground';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__container">
          <Image
            alt="Adam Mornes Profile"
            className="border border-gray-300 p-0.5 rounded-full mr-4 lg:mr-8 dark:border-gray-700"
            src="/profile.jpg"
            width={200}
            height={200}
            sizes="(max-width: 768px) 150px"
          />
          <div className="text-foreground shrink-0">
            <h1 className="font-raleway text-3xl">
              Hi,
              <br />
              I&apos;m Adam Mornes.
            </h1>
            <p className="font-raleway text-3xl mt-4">I do web.</p>
            <ButtonBackground className="mt-6" isAnchor={true} href="/about">
              Learn more about me
            </ButtonBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
