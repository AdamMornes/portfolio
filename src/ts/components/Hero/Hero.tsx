import Image from 'next/image';
import ButtonBrand from '../Common/Buttons/ButtonBrand';

export default function Hero() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <Image
          alt="Developer working in their office"
          className="object-cover"
          fill
          priority={true}
          src="/hero-shot.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px"
        />
      </div>

      <div className="flex h-full text-foreground py-16 md:items-center">
        <div className="max-w-screen-md flex items-center justify-center md:justify-end">
          <div className="">
            <h1 className="font-raleway text-3xl">
              Hi,
              <br />
              I&apos;m Adam Mornes.
            </h1>
            <p className="font-raleway text-3xl mt-4">I do web.</p>
            <ButtonBrand className="mt-4" isAnchor={true} href="/about">
              Learn more about me
            </ButtonBrand>
          </div>
        </div>
      </div>
    </div>
  );
}
