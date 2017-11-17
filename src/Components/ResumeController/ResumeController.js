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
        component: <Button content='<ViewResume />' className='resume-btn' toggle={this.toggleResume}/>
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
        component: <Button content='<ViewResume />' className='resume-btn' toggle={this.toggleResume}/>
      })
    }
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    })
  }

  render() {

    return (
      <div className="resume-area">
        <div className="container">
          <div className="row">

            {this.state.component}

          </div>
        </div>
      </div>
    )
  }
}

export default ResumeController;
