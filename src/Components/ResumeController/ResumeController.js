import React, { Component } from 'react';
import Button from '../Button/Button';
import Resume from '../Resume/Resume';

class ResumeController extends Component {
  constructor(props) {
    super(props);

    this.state = {
        active: false
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
        component: <h2 className="text-center"><Button className={'btn-resume'} title="View Resume" action={this.toggleResume} content={'<ViewResume />'}/></h2>
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
        component: <h2 className="text-center"><Button title="View Resume" className={'btn-resume'} action={this.toggleResume} content={'<ViewResume />'}/></h2>
      })
    }
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    })
  }

  render() {

    return (
      <section className="resume-area">
        <div className="container">
          <div className="row">

            {this.state.component}

          </div>
        </div>
      </section>
    )
  }
}

export default ResumeController;
