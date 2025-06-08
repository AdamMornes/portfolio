import ImageCredited from '../Common/Images/ImageCredited';
import join from '@/ts/utils/classNameJoin';
import { journey } from '@/data/about';
import isOdd from '@/ts/utils/isOdd';

export default function History() {
  return (
    <div className="flex flex-col gap-4 mb-4 lg:gap-8">
      {journey.sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 lg:flex-row lg:items-center"
        >
          <div className={join(['shrink-0', isOdd(index) ? 'lg:order-1' : ''])}>
            <ImageCredited
              className="rounded-md"
              src={section.image.src}
              alt={section.image.alt}
              width={250}
              height={167}
              sizes="(max-width: 768px) 100vw"
            >
              <span
                dangerouslySetInnerHTML={{ __html: section.image.credit }}
              />
            </ImageCredited>
          </div>
          <div className="flex-1">
            <div
              className="flex flex-col gap-4 mb-4"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
