import React, { Component } from 'react';
import Button from '../Button/Button';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  openPDF() {
    var win = window.open(require('../../Resources/adammornes_resume.pdf'), '_blank');
    if (win) {
      win.focus();
    } else {
      alert('Something blocked this external link!');
    }
  }

  render() {
    return (
      <div className="resume-wrapper">
          <div className="resume-controls">

            <div className="col-xs-3 text-center">
              <Button className="fa fa-file-pdf-o fa-2x" title={'Open Resume as PDF'} className={'btn-pdf'} action={this.openPDF} content={[<span key="0" className="fa fa-file-pdf-o"></span>, <span className="hidden-xs">Download PDF</span>]}/>
            </div>

            <div className="col-xs-3 col-xs-offset-6 text-center">
              <Button className={'btn-resume-close'} title={'Close Resume'} action={this.props.toggle} content={'X'}/>
            </div>

          </div>

          <span className="clearfix"></span>

          <div className="resume-content">

            <h4 className="text-center">Adam D. Mornes</h4>
            <p className="text-center"><span className="line-break">2802 Jadewood Ct, Apt B, Austin, TX 78748 <span className="hidden-xs">|</span></span>
              <span className="line-break">Phone: 218.244.5698 <span className="hidden-xs">|</span></span>
              <span className="line-break"><a href="mailto:adammornes@gmail.com">adammornes@gmail.com</a></span>
              </p>
            <hr />

            <h4 className="text-center">Summary</h4>
            <hr />
            <p>Senior Web Developer with extensive experience with front end development languages/frameworks including Sass, Bootstrap, Javascript, JQuery, Node.JS, Angular, and C#. Influential role in the development, testing, and troubleshooting of a versatile and</p>

            <h4 className="text-center">Qualifications</h4>
            <hr />
            <ul className="text-left">
              <li>Proven leadership and supervisory abilities</li>
              <li>Experience building web apps based off of Node.js
              and using frameworks such as Angular and Vue.js</li>
              <li>Full understanding of website development
              architecture.</li>
              <li>Proficient in widely used, modern website
              development languages.</li>
              <li>Familiarity with version control systems. Specifically
              Git and SVN.</li>
              <li>Hard working and complex problem solver.</li>
              <li>Outstanding attention to detail and quality.</li>
              <li>Time management skills.</li>
              <li>Attention to user side usability and accessibility</li>
            </ul>

            <h4 className="text-center">Experience</h4>
            <hr />
            <div className="col-xs-12 col-sm-9 exp-details place">
              <p><strong>Senior Web Developer<br />
              ARI Network Services, Inc.
              </strong></p>
            </div>

            <div className="text-center visible-xs">-</div>

            <div className="col-xs-12 col-sm-3 exp-details">
              <p><strong>May 2014 - October 2017</strong></p>
            </div>

            <div className="clearfix"></div>

            <ul className="text-left">
              <li>Handle supervisory tasks as needed while the supervisor is out and/or unavailable.</li>
              <li>Implemented toolsets using Node.js and various JS frameworks such as Angular and Vue.js. My team now uses these
              toolsets on a daily basis to quickly and efficiently develop modern looking sites.</li>
              <li>Maintain a high standard of cross-team communication so that ideas and needs are effectively understood for everyone
              involved.</li>
              <li>Part of a standards and documentation implementation team; which establishes a consistent SOP across teams to
              improve spin-up times and efficiency.</li>
              <li>Using the Agile methodology and strong communication, I became an Integral part of the development of ARI's
              responsive platform</li>
              <li>Responsible for updating and maintaining Sass Themes that are used as a starting point for my team to quickly and
              efficiently create modern web sites.</li>
            </ul>

            <div className="col-xs-12 col-sm-9 exp-details place">
              <p><strong>Website Developer Intern<br />
              Arrowhead Chorale
              </strong></p>
            </div>

            <div className="text-center visible-xs">-</div>

            <div className="col-xs-12 col-sm-3 exp-details">
              <p><strong>September 2013 – December 2013</strong></p>
            </div>

            <div className="clearfix"></div>

            <ul className="text-left">
                <li>Update, organize, and translate new information provided by Arrowhead Chorale into a more digital and user friendly format to be displayed on their website.</li>
                <li>Coordinate with director of Arrowhead Chorale to effectively update and improve accessibility of its website.</li>
            </ul>

            <h4 className="text-center">Education</h4>
            <hr />

            <div className="col-xs-12 col-sm-9 exp-details place">
              <strong>Lake Superior College</strong><br />
              Degree: Computer and Web Programming A.A.S<br />
              Awards: Dean’s List for the Spring 2013 and Fall 2013 Semesters.
            </div>

            <div className="text-center visible-xs">-</div>

            <div className="col-xs-12 col-sm-3 exp-details">
              <strong>Spring 2012 – Spring 2014</strong><br />
              Duluth, MN
            </div>

            <div className="text-center visible-xs circle-divider">&bull;</div>
            <br className="clearfix hidden-xs" />

            <div className="col-xs-12 col-sm-9 exp-details place">
              <strong>Itasca Community College</strong><br />
              Degree: Associate of Arts<br />
              Awards: Dean’s List for Spring 2010, Fall 2010, and Spring 2011 Semesters.<br />
            </div>

            <div className="text-center visible-xs">-</div>
            <br className="clearfix hidden-xs" />

            <div className="col-xs-12 col-sm-3 exp-details">
              <strong>Spring 2010 – Fall 2011</strong><br />
              Grand Rapids, MN
            </div>

            <div className="clearfix"></div>

          </div>
      </div>
    )
  }
}
 export default Resume;
