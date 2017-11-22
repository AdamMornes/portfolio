import React, { Component } from 'react';
import Projects from '../../Resources/projects.json';
import ProjectBox from '../ProjectBox/ProjectBox';
import Slider from '../Slider/Slider';

class ProjectSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projectsArr: Projects.projects,
      dots: true,
      className: 'projects-slider'
    }
  }

  componentDidMount() {
    const slidesToShow = 3;
    this.setState({
        slidesToShow: this.state.projectsArr.length <= slidesToShow ? this.state.projectsArr.length : slidesToShow
    })
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
      <div className="projects-wrapper">
        <Slider dots={this.state.dots} className={this.state.className} slides={slides} />
      </div>
    )
  }
}

export default ProjectSlider;
