import profileImage from '/public/profile.jpg';
import { Image } from '../types';

type About = {
  title: string;
  profileImage: Image;
  description: string;
};

export const about: About = {
  title: 'About Me',
  profileImage: {
    alt: 'Adam Mornes Profile',
    src: profileImage.src,
  },
  description: `
    <p>Hello, I'm Adam Mornes. I'm a Web Developer located in Flint, MI.</p>

    <p>I have a passion for creating outstanding responsive web sites - while keeping in mind intelligent, intuitive user interface. 
    To do so, I work to keep up with the best and newest development trends; as well as implementing those them on every project I take on.</p>

    <p>There is no better feeling than creating an easy to use, beautiful website that clients can be proud of.</p>
  `,
};
