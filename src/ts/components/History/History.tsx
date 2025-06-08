import Image from 'next/image';
import ImageCredited from '../Common/Images/ImageCredited';

export default function History() {
  return (
    <div className="flex flex-col gap-4 mb-4 lg:gap-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="shrink-0 lg:order-1">
          <ImageCredited
            className="rounded-md"
            src="/duluth-lighthouse.jpg"
            alt="Lighthouse in Duluth, MN"
            width={250}
            height={167}
            sizes="(max-width: 768px) 100vw"
          >
            <p>
              Photo by{' '}
              <a href="https://unsplash.com/@ging_dlh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                ginger
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/photos/snow-covered-lighthouse-ydrp-zMoMsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </p>
          </ImageCredited>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 mb-4">
            <p>
              Born and raised in MN, I spent the first three years of my career
              at{' '}
              <a href="https://arinet.com/ " target="_blank">
                ARI Network Services
              </a>{' '}
              honing my skills with HTML, CSS, and CSS theming while fighting
              off the cold of Duluth, MN.
            </p>
            <p>
              While my time at ARI wasn&apos;t the most technically demanding, I
              learned many important lessons about CSS Theming I now consider
              core to my skillset.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="shrink-0">
          <ImageCredited
            className="rounded-md"
            src="/austin-skyline.jpg"
            alt="Lighthouse in Duluth, MN"
            width={300}
            height={200}
            sizes="(max-width: 768px) 100vw"
          >
            Photo by{' '}
            <a href="https://unsplash.com/@mitchkmetz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Mitchell Kmetz
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/man-in-black-jacket-walking-on-bridge-near-body-of-water-during-daytime-ztVcGTSD8xw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </ImageCredited>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <p>
            After all that time in the frigid north, I decided to make a major
            change. I moved to 1200 miles south to Austin, TX.
          </p>
          <p>
            While in Austin, I got my next job at{' '}
            <a href="" target="_blank">
              XCentium
            </a>
            . I spent the next 7 years in the wild west of contract work.
            Working on projects with technology stacks ranging from .NET and
            JQuery to React and Next.js.
          </p>
        </div>
      </div>
    </div>
  );
}
