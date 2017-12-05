import React, { Component } from 'react';
import ProjectSlider from '../ProjectController/ProjectController';

class WorkController extends Component {
  render() {
    return (
      <section className="work-area">
        <div className="container">
          <div className="row">
            <h2 className="text-center">{'<MyProjects />'}</h2>
            <ProjectSlider />
          </div>
        </div>
      </section>
    )
  }
}

export default WorkController;
