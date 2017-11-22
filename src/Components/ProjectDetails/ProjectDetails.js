import React, { Component } from 'react';
import Slider from '../Slider/Slider';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-details">
        <h4>{this.props.name}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at accumsan ante, id eleifend nulla.</p>
      </div>
    )
  }
}

export default ProjectDetails;
