import Image from 'next/image';
import ButtonBrand from '../Common/Buttons/ButtonBrand';
import ButtonWhite from '../Common/Buttons/ButtonBackground';
import ButtonBackground from '../Common/Buttons/ButtonBackground';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__fill">
        <Image
          alt="Developer working in their office"
          className="object-cover"
          fill
          priority={true}
          src="/hero-shot.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px"
        />
      </div>

      <div className="hero__fill -overlay" />

      <div className="hero__content">
        <div className="hero__container">
          <div className="hero__background">
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
