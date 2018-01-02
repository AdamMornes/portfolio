import React, { Component } from 'react';
import ProjectController from '../ProjectController/ProjectController';

class WorkController extends Component {
  render() {
    return (
      <section id="Work" className="work-area">
        <div className="container">
          <div className="row">
            <h2 className="text-center section-heading work">
              <span className="main">My Projects</span>
              <span className="diag-bar"></span>
              <span className="fa fa-angle-right"></span>
            </h2>
            <hr className="heading-divider"/>
            <ProjectController />
          </div>
        </div>
      </section>
    )
  }
}

export default WorkController;
