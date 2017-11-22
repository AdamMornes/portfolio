import React, { Component } from 'react';
import Projects from '../../Resources/projects.json';
import ProjectBox from '../ProjectBox/ProjectBox';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Slider from '../Slider/Slider';

class ProjectSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projectsArr: Projects.projects,
      dots: true,
      className: 'projects-slider',
      details: ''
    }
  }

  componentDidMount() {
    const slidesToShow = 3;
    this.setState({
        slidesToShow: this.state.projectsArr.length <= slidesToShow ? this.state.projectsArr.length : slidesToShow
    })
  }

  toggleDetails(i) {
    const project = this.state.projectsArr[i];
    const detailsInit = <ProjectDetails name={project.name}/>;
    this.setState({
      details: detailsInit
    })
  }

  render() {
    var slides = '';
    if (this.state.projectsArr.constructor === Array) {
      slides = this.state.projectsArr.map((project, i) => {
        return (
          <ProjectBox name={project.name} toggle={this.toggleDetails.bind(this, i)} imgPath={project.imgPath[0]} key={i}/>
        )
      })
    }
    return (
      <div className="projects-wrapper">
        <Slider className={this.state.className} slidesToShow={this.state.slidesToShow} dots={this.state.dots} slides={slides} />
        {this.state.details}
      </div>
    )
  }
}

export default ProjectSlider;
