import Image from 'next/image';
import ButtonBackground from '../Common/Buttons/ButtonBackground';
import homeData from '@/data/home.json';

export default function Hero() {
  return (
    <div className="relative w-full h-full">
      <div className="flex h-full items-center justify-center py-8">
        <div className="w-full max-w-screen-md flex flex-col items-center justify-center mx-auto px-4 lg:flex-row">
          <Image
            alt={homeData.hero.profileImage.alt}
            className="rounded-full mb-4 lg:mb-0 lg:mr-8"
            src={homeData.hero.profileImage.src}
            width={200}
            height={200}
            priority={true}
          />
          <div className="text-foreground shrink-0">
            <h1
              className="font-raleway text-3xl mb-4"
              dangerouslySetInnerHTML={{ __html: homeData.hero.heading }}
            />
            <p
              className="font-raleway text-3xl mb-4"
              dangerouslySetInnerHTML={{ __html: homeData.hero.subheading }}
            />
            <ButtonBackground isAnchor={true} href="/about">
              {homeData.hero.cta}
            </ButtonBackground>
          </div>
        </div>
      </div>
    </div>
  );
}
