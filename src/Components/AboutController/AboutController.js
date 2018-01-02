import React, { Component } from 'react';
import Button from '../Button/Button';
import Resume from '../Resume/Resume';
import AboutDetails from '../AboutDetails/AboutDetails';

class ResumeController extends Component {
  constructor(props) {
    super(props);

    this.state = {
        activeResume: false
    }

    this.toggleResume = this.toggleResume.bind(this);
  }

  componentWillMount() {
    if(this.state.active) {
      this.setState({
        component: <Resume toggle={this.toggleResume}/>
      })
    } else {
      this.setState({
        component: <Button className={'btn-resume'} title="View Resume" action={this.toggleResume} content={['View Resume', <span key={0} className="fa fa-angle-double-right"></span>]}/>
      })
    }
  }

  toggleResume() {
    if(!this.state.active) {
      this.setState({
        component: <Resume toggle={this.toggleResume}/>
      })
    } else {
      this.setState({
        component: <Button className={'btn-resume'} title="View Resume" action={this.toggleResume} content={['View Resume ', <span key={0} className="fa fa-angle-double-right"></span>]}/>
      })
    }
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    })
  }

  render() {

    return (
      <section id="About" className="about-area">
        <div className="container">
          <div className="row">

            <h2 className="text-center section-heading about">
              <span className="main">About Me</span>
              <span className="diag-bar"></span>
              <span className="fa fa-angle-right"></span>
            </h2>

            <hr className="heading-divider"/>

            <AboutDetails />

            <div className="clear"></div>
            <hr />

            <div className="col-xs-12 text-center">

              <h4 className="resume-heading">Need more the details about my work history?<br />Check out my resume!</h4>

              {this.state.component}
            </div>


          </div>
        </div>
      </section>
    )
  }
}

export default ResumeController;
