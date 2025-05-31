import Image from 'next/image';

export default function Hero() {
  return (
    <div className="h-full w-full">
      <div className="hidden md:block">
        <Image
          src="/hero-shot.jpg"
          alt="Developer working on their computer."
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      <div className="md:hidden">
        <Image
          src="/hero-shot-mobile.jpg"
          alt="Developer working on their computer."
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-full flex text-foreground font-raleway py-24 lg:items-center">
        <div className="container flex flex-col lg:items-end">
          <div className="lg:pr-8">
            <h1 className="text-3xl">
              Hi,
              <br />
              I&apos;m Adam Mornes.
            </h1>
            <p className="text-3xl mt-4">I do web.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
