import React, { Component } from 'react';
import ReactSlick from 'react-slick';
import Projects from '../../Resources/projects.json';
import ProjectBox from '../ProjectBox/ProjectBox';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import SliderArrows from '../SliderArrows/SliderArrows';

class ProjectSlider extends Component {

  constructor(props) {
    super(props);

    const projectsArr = Projects.projects;
    const maxSlides = 3;
    var scroll = projectsArr.length <= maxSlides;

    this.state = {
      projectsArr: Projects.projects,
      details: null,
      sliderSettings: {
        adaptiveHeight: false,
        arrows: !scroll,
        className: 'projects-slider',
        nextArrow: <SliderArrows direction={'next'}/>,
        prevArrow: <SliderArrows direction={'prev'}/>,
        centerMode: !scroll,
        centerPadding: 0,
        dots: !scroll,
        draggable: !scroll,
        initialSlide: 0,
        infinite: !scroll,
        slidesToShow: scroll ? projectsArr.length : maxSlides
      },
      responsiveSliderSettings: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            dots: true,
            draggable: true,
            infinite: true,
            slidesToShow: 1
          }
        }
      ]
    }

    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {

    this.setState({
        mounted: true,

    })
  }

  toggleDetails(i) {
    if (this.state.details === null) {
      const project = this.state.projectsArr[i];
      const detailsInit = <ProjectDetails project={project} toggle={this.toggleDetails}/>;
      $('.projects-slider').toggleClass('display-toggle');
      this.setState({
        details: detailsInit
      })
    } else {
      $('.projects-slider').toggleClass('display-toggle');
      setTimeout(() => {
        this.setState({
          details: null
        })
      }, 200);

    }
  }

  handleToggle(i) {

  }

  render() {
    var slides = '';
    if (this.state.projectsArr.constructor === Array) {
      slides = this.state.projectsArr.map((project, i) => {
        return (
          <div key={i}><ProjectBox name={project.name} type={project.type} toggle={this.toggleDetails.bind(this, i)} imgPath={project.imgPath[0]} /></div>
        )
      })
    }
    return (
      <div className="projects-wrapper">
        <div className="projects-track">
          <ReactSlick {...this.state.sliderSettings} responsive={this.state.responsiveSliderSettings}>
            {slides}
          </ReactSlick>
          {this.state.details}
        </div>
      </div>
    )
  }
}

export default ProjectSlider;
