import React, { Component } from 'react';
import ReactSlick from 'react-slick';
import Button from '../Button/Button';
import SliderArrows from '../SliderArrows/SliderArrows';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    const scroll = this.props.project.imgPath.length >= 3 ? true : false;
    this.state = {
      sliderSettings: {
        adaptiveHeight: false,
        arrows: scroll,
        className: scroll ? 'project-slider slider-effects': 'project-slider',
        nextArrow: <SliderArrows direction={'next'}/>,
        prevArrow: <SliderArrows direction={'prev'}/>,
        centerMode: scroll,
        centerPadding: 0,
        dots: false,
        draggable: scroll,
        infinite: scroll,
        initialSlide: scroll ? this.props.project.imgPath.length : 0,
        slidesToShow: scroll ? 3 : this.props.project.imgPath.length,
        slidesToScroll: 1
      }
    }

    this.toggle = this.toggle.bind(this);
  }

   componentDidMount() {
     const toggle = this.props.toggle;
     $('.project-details').bind('keydown', function(e) {
       if (e.which === 27) {
          toggle();
       }
     })
     $('.project-details').focus();
   }

  toggle(e) {
    if (e.target.className === 'project-details') {
      this.props.toggle();
    }
  }

  render() {
    var slides = '';
    slides = this.props.project.imgPath.map((image, i) => {
      return (
        <div key={i}>
          <div className="sample-wrapper">
          <img className="sample" src={image}/>
          </div>
        </div>
      )
    })
    return (
      <div className="project-details" onClick={this.toggle} tabIndex="1">
        <div className="container">
          <div className="row">

            <div className="project-details-wrapper">
              <div className="col-xs-10">
                <h4>{this.props.project.name}</h4>
              </div>
              <div className="col-xs-2">
                <Button title={'Close Resume'} className={'btn-details-close'} action={this.props.toggle} content={'X'}/>
              </div>
              <div className="col-xs-8">
                <div className="project-slider-wrapper">
                  <ReactSlick {...this.state.sliderSettings}>
                    {slides}
                  </ReactSlick>
                </div>
              </div>
              <div className="col-xs-12">
                <p>{this.props.project.description}</p>
              </div>
              <div className="clear"></div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetails;
