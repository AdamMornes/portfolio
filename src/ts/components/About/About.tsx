import Image from 'next/image';
import { about } from '@/data/about';

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mb-4 lg:flex-row">
      <Image
        className="shrink-0 rounded-full mb-4 lg:mb-0"
        src={about.profileImage.src}
        alt={about.profileImage.alt}
        width={250}
        height={250}
      />
      <div
        className="flex flex-col gap-4 mb-0"
        dangerouslySetInnerHTML={{ __html: about.description }}
      ></div>
    </section>
  );
}
