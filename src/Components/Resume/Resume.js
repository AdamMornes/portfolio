import React, { Component } from 'react';
import Button from '../Button/Button';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button content='Close Resume' className='resume-btn-close' toggle={this.props.toggle} /> 
        Derp derp derp! I am a Resume.

      </div>
    )
  }
}
 export default Resume;
