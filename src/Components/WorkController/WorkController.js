import React, { Component } from 'react';
import ProjectController from '../ProjectController/ProjectController';

class WorkController extends Component {
  render() {
    return (
      <section className="work-area">
        <div className="container">
          <div className="row">
            <h2 className="text-center section-heading work">My Projects
                <span className="diag-bar"></span>
                <span className="fa fa-angle-right"></span>
            </h2>
            <ProjectController />
          </div>
        </div>
      </section>
    )
  }
}

export default WorkController;
