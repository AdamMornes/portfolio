import React, { Component } from 'react';

class ProjectBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="project-wrapper" onClick={this.props.toggle}>
        <h3 className="project-heading">{this.props.name}</h3>
        <div className="preview-wrapper">
          <img alt={this.props.name} title={this.props.name} className="prev" src={this.props.imgPath}/>
        </div>
      </div>
    )
  }
}

export default ProjectBox;
