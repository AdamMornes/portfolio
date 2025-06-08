import Image from 'next/image';
import ButtonBackground from '../Common/Buttons/ButtonBackground';
import { hero } from '@/data/home';

export default function Hero() {
  return (
    <div className="relative w-full h-full">
      <div className="flex h-full items-center justify-center py-8">
        <div className="w-full max-w-screen-md flex flex-col items-center justify-center mx-auto px-4 lg:flex-row">
          <Image
            alt={hero.profileImage.alt}
            className="rounded-full mb-4 lg:mb-0 lg:mr-8"
            src={hero.profileImage.src}
            width={200}
            height={200}
            priority={true}
          />
          <div className="text-foreground shrink-0">
            <h1
              className="font-raleway text-3xl mb-4"
              dangerouslySetInnerHTML={{ __html: hero.heading }}
            />
            <p
              className="font-raleway text-3xl mb-4"
              dangerouslySetInnerHTML={{ __html: hero.subheading }}
            />
            <ButtonBackground isAnchor={true} href="/about">
              {hero.cta}
            </ButtonBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
