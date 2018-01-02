import React, { Component } from 'react';

class AboutDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="about-details-wrapper">
        <div className="col-xs-12 intro-wrapper">
          <div className="profile-wrapper">
            <img className="profile img-responsive" src={require('../../Images/profile.jpg')} />
          </div>
          <h4>Introduction</h4>
          <p>Hello, I'm Adam Mornes. I am a Web Developer located in Austin, TX.</p>
          <p>Born and raised in MN, I've spent the last three years honing my skills with web development and fighting off the cold of Duluth, MN. After three years of building and maintaning websites in the frigid north, I decided to make a major change. I moved to 1200 miles south to Austin, TX where I can push my skills and web knowledge even further.</p>
          <p>I have a passion for creating outstanding and responsive web sites - while keeping in mind intelligent, intuitive user interface. To do so, I work to keep up with the best and newest development trends; as well as implementing those them on every project I take on.</p>
          <p>There is no better feeling than creating an easy to use, beautiful website that clients can be proud of.</p>
          <p>When I'm not crunching code, I enjoy playing cards (yes, the nerdy kind - Magic: the Gathering), playing music on my guitar, and trying the newest fancy IPA or Belgian beer I can find.</p>
        </div>

      </div>
    )
  }
}

export default AboutDetails;
