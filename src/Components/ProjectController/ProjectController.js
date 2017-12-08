import React, { Component } from 'react';
import ReactSlick from 'react-slick';
import Projects from '../../Resources/projects.json';
import ProjectBox from '../ProjectBox/ProjectBox';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import SliderArrows from '../SliderArrows/SliderArrows';

class ProjectSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projectsArr: Projects.projects,
      dots: true,
      className: 'projects-slider',
      details: null,
      sliderSettings: {},
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
  }

  componentDidMount() {
    const maxSlides = 3;
    var scroll = this.state.projectsArr.length <= maxSlides
    this.setState({
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
          infinite: !scroll,
          initialSlide: 1,
          slidesToShow: scroll ? this.state.projectsArr.length : maxSlides,
          slidesToScroll: 1
        }
    })
  }

  toggleDetails(i) {
    if (this.state.details === null) {
      const project = this.state.projectsArr[i];
      const detailsInit = <ProjectDetails project={project} toggle={this.toggleDetails}/>;
      this.setState({
        details: detailsInit
      })
    } else {
      this.setState({
        details: null
      })
    }

  }

  render() {
    var slides = '';
    if (this.state.projectsArr.constructor === Array) {
      slides = this.state.projectsArr.map((project, i) => {
        return (
          <div key={i}><ProjectBox name={project.name} toggle={this.toggleDetails.bind(this, i)} imgPath={project.imgPath[0]} /></div>
        )
      })
    }
    return (
      <div className="projects-wrapper">
        <ReactSlick {...this.state.sliderSettings} responsive={this.state.responsiveSliderSettings}>
          {slides}
        </ReactSlick>
        {this.state.details}
      </div>
    )
  }
}

export default ProjectSlider;
