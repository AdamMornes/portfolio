import React, { Component } from 'react';
import Button from '../Button/Button';

class ProjectBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="project-wrapper" onClick={this.props.toggle}>
        <h3 className="project-heading text-center">{this.props.name}</h3>

        <div className="preview-wrapper">
          <div className="project-hvr">
            <img alt={this.props.name} title={this.props.name} className="prev" src={this.props.imgPath}/>
            <div className="visible-lg hvr-bg"></div>
            <div className="visible-lg view-project-hvr">View Project</div>
            <div className="visible-lg hvr-diag-bar"></div>
            <div className="visible-lg hvr-arr fa fa-angle-right"></div>
          </div>
        </div>

        <div className="col-xs-12 details-wrapper">
          <div className="row">
            <div className="project-type">
              <p>{this.props.type}</p>
            </div>
            <div className="hidden-lg">
              <Button className="btn btn-view-project" content={['View Project ', <span key={0} className="fa fa-angle-double-right"></span>]}/>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default ProjectBox;
