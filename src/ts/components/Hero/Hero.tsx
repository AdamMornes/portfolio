import Image from 'next/image';
import ButtonBackground from '../Common/Buttons/ButtonBackground';

export default function Hero() {
  return (
    <div className="relative w-full h-full">
      <div className="flex h-full items-center justify-center py-8">
        <div className="w-full max-w-screen-md flex flex-col items-center justify-center mx-auto px-4 lg:flex-row">
          <Image
            alt="Adam Mornes Profile"
            className="rounded-full mb-4 lg:mb-0 lg:mr-8"
            src="/profile.jpg"
            width={200}
            height={200}
            sizes="(max-width: 768px) 150px"
          />
          <div className="text-foreground shrink-0">
            <h1 className="font-raleway text-3xl mb-4">
              Hi,
              <br />
              I&apos;m Adam Mornes.
            </h1>
            <p className="font-raleway text-3xl mb-4">I do web.</p>
            <ButtonBackground isAnchor={true} href="/about">
              Learn more about me
            </ButtonBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
