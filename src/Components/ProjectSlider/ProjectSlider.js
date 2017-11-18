import React, { Component } from 'react';
import Projects from '../../Resources/projects.json';
import ProjectBox from '../ProjectBox/ProjectBox';

class ProjectSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projectsArr: Projects.projects
    }
  }

  componentDidMount() {
    const slidesToShow = 3;
    $('.projects-slider').slick({
      dots: true,
      slidesToShow: this.state.projectsArr.length <= slidesToShow ? this.state.projectsArr.length : slidesToShow,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  render() {
    var slides = '';
    if (this.state.projectsArr.constructor === Array) {
      slides = this.state.projectsArr.map((project, i) => {
        return (
          <ProjectBox name={project.name} imgPath={project.imgPath[0]} key={i}/>
        )
      })
    }
    return (
      <div className="projects-slider">
        {slides}
      </div>
    )
  }
}

export default ProjectSlider;
