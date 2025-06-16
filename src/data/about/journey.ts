import duluthLighthouse from '/public/history/duluth-lighthouse.jpg';
import austinSkyline from '/public/history/austin-skyline.jpg';
import flintGraffiti from '/public/history/flint-graffiti.jpg';
import { Image } from '../types';

type JourneySection = {
  image: Image;
  description: string;
};

type Journey = {
  title: string;
  sections: JourneySection[];
};

export const journey: Journey = {
  title: 'My Journey',
  sections: [
    {
      image: {
        alt: 'Lighthouse in Duluth, MN',
        credit: `
          Photo by
          <a href="https://unsplash.com/@ging_dlh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            ginger
          </a>
          on
          <a href="https://unsplash.com/photos/snow-covered-lighthouse-ydrp-zMoMsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        `,
        src: duluthLighthouse.src,
      },
      description: `
        <p>
          Born and raised in MN, I spent the first three years of my career at 
          <a href="https://arinet.com/ " target="_blank">ARI Network Services</a> 
          honing my skills with HTML, CSS, and CSS theming while fighting off the cold of Duluth, MN.
        </p>
        <p>
          While my time at ARI wasn&apos;t the most technically demanding, I
          learned many important lessons about CSS Theming I now consider
          core to my skillset.
        </p>
      `,
    },
    {
      image: {
        alt: 'Austin, TX Skyline',
        credit: `
          Photo by
          <a href="https://unsplash.com/@mitchkmetz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Mitchell Kmetz
          </a>
          on
          <a href="https://unsplash.com/photos/man-in-black-jacket-walking-on-bridge-near-body-of-water-during-daytime-ztVcGTSD8xw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        `,
        src: austinSkyline.src,
      },
      description: `
        <p>
          After all that time in the frigid north, I decided to make a major
          change. I moved to 1200 miles south to Austin, TX.
        </p>
        <p>
          While in Austin, I got my next job at <a href="https://www.xcentium.com/" target="_blank">XCentium</a>. 
          I spent the next 7 years in the wild west of contract work;
          working on projects with technology stacks ranging from .NET and
          JQuery to React and Next.js.
        </p>
      `,
    },
    {
      image: {
        alt: 'Graffiti in Flint, MI',
        credit: `
          Photo by 
          <a href="https://unsplash.com/@kazaks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Krišjānis Kazaks
          </a> 
          on 
          <a href="https://unsplash.com/photos/colorful-graffiti-on-the-side-of-a-building-slXpdVgW2pQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        `,
        src: flintGraffiti.src,
      },
      description: `
        <p>
          After 4 years in Austin, while still working at XCentium, I moved back to the midwest.
          My wife and I moved to Flint, MI to be closer to family and to be back in a climate that I grew up with.
        </p>
        <p>
          Here I continued to work at XCentium for 5 more years on various projects, bolstering my skills with Vue.js, React, and Next.js. 
          In May of 2025, I finally departed from XCentium and I'm excited for the next step in my career.
        </p>
      `,
    },
  ],
};
