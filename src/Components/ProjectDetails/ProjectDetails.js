import React, { Component } from 'react';
import ReactSlick from 'react-slick';
import Button from '../Button/Button';
import SliderArrows from '../SliderArrows/SliderArrows';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    const maxSlides = 3;
    const scroll = this.props.project.imgPath.length >= maxSlides;

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
        draggable: false,
        infinite: scroll,
        initialSlide: scroll ? this.props.project.imgPath.length : 0,
        slidesToShow: scroll ? 3 : this.props.project.imgPath.length,
        slidesToScroll: 1
      },
      responsiveSliderSettings: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            className: 'project-slider',
            dots: true,
            draggable: true,
            infinite: true,
            slidesToShow: 1
          }
        }
      ]
    }

    this.toggle = this.toggle.bind(this);
    this.viewDemo = this.viewDemo.bind(this);
    this.init = this.init.bind(this);
    this.getScrollBarWidth = this.getScrollBarWidth.bind(this);
  }

  componentWillUnmount() {
    $('body').toggleClass('modal-open');
    $('body').css('padding-right','0px');
  }

  componentDidMount() {
     $('body').toggleClass('modal-open');
     $('body').css('padding-right', this.getScrollBarWidth() + 'px');
     const toggle = this.props.toggle;
     $('.project-details').bind('keydown', function(e) {
       if (e.which === 27) {
          toggle();
       }
     })
     setTimeout(() => {

     }, 2000);
     $('.project-details').focus();
   }

  toggle(e) {
    if (e.target.className === 'project-details') {
      this.props.toggle();
    }
  }

  viewDemo() {
    if (!this.props.project.demo.inline) {
      var win = window.open(this.props.project.demo.resource, '_blank');
      if (win) {
        win.focus();
      } else {
        alert('Something blocked this external link!');
      }
    }
  }

  getScrollBarWidth() {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
  }

  init() {
    var tabindex = $(window).width() < 768 ? '' : 1;
    var slides = '';
    if (this.props.project.imgPath !== undefined) {
      slides = this.props.project.imgPath.map((image, i) => {
        return (
          <div key={i}>
            <div className="sample-wrapper">
            <img className="sample" src={image}/>
            </div>
          </div>
        )
      })
    }
    var button = '';
    if (this.props.project.demo !== undefined) {
      if (this.props.project.demo.available) {
        button = <Button className="btn-view-demo" action={this.viewDemo} content={['View Project Demo ', <span key={0} className="fa fa-angle-double-right"></span>]}/>
      } else {
        button = <Button className="btn-view-demo disabled" disabled={true} content={['View Project Demo ', <span key={0} className="fa fa-angle-double-right"></span>]}/>
      }
    }
    var markup = '';
    if (this.props.project.markup !== undefined) {
      markup = this.props.project.markup.map((markup, i) => {
        return (
          <li key={i}>
            - {markup} -
          </li>
        )
      })
    }
    var framework = '';
    if (this.props.project.framework !== undefined) {
      framework = this.props.project.framework.map((framework, i) => {
        return (
          <li key={i}>
            - {framework} -
          </li>
        )
      })
    }
    var methodology = '';
    if (this.props.project.methodology !== undefined) {
      methodology = this.props.project.methodology.map((methodology, i) => {
        return (
          <li key={i}>
            - {methodology} -
          </li>
        )
      })
    }

    var info = {
      tabindex: tabindex,
      slides: slides,
      button: button,
      markup: markup,
      framework: framework,
      methodology: methodology
    }

    return info;
  }

  render() {
    const info = this.init()
    return (
      <div className="project-details" onClick={this.toggle} tabIndex={info.tabindex}>
        <div className="container project-details-wrapper">
          <div className="row">
            <div className="hidden-xs abs-btn">
              <Button className="btn-back" action={this.props.toggle} content={'X'}/>
            </div>
            <div className="visible-xs col-xs-12 text-center">
              <Button className="btn-back" action={this.props.toggle} content={[<span key={0} className="fa fa-angle-double-left"></span> , 'Back to Projects']}/>
            </div>
            <div className="col-xs-12 text-center">
              <hr className="visible-xs"/>
              <h4 className="project-heading">{this.props.project.name}</h4>
              <hr className="heading-bottom"/>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-9 text-center">
              <div className="row">

                  <div className="col-xs-12">
                    <div className="project-slider-wrapper">
                      <ReactSlick ref={c => this.slider = c} {...this.state.sliderSettings} responsive={this.state.responsiveSliderSettings}>
                        {info.slides}
                      </ReactSlick>
                    </div>
                  </div>

                  <div className="col-xs-12">
                    <hr/>
                    <h5 className="project-info-heading">Description</h5>
                    <hr/>
                    <p className="project-description">{this.props.project.description}</p>
                  </div>

              </div>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-3 text-center">
              <div className="row">
                <div className="col-xs-12">
                  {info.button}
                </div>

                <div className="col-xs-12">
                  <hr/>
                  <h5 className="project-info-heading">Markup Languages</h5>
                  <hr/>
                  <ul className="list-inline info-list">
                    {info.markup}
                  </ul>
                </div>

                <div className="col-xs-12">
                  <hr/>
                  <h5 className="project-info-heading">Frameworks / Packages</h5>
                  <hr/>
                  <ul className="list-inline info-list">
                    {info.framework}
                    </ul>
                </div>

                <div className="col-xs-12">
                  <hr/>
                  <h5 className="project-info-heading">Methodology</h5>
                  <hr/>
                  <ul className="list-inline info-list">
                    {info.methodology}
                    </ul>
                </div>

              </div>
            </div>
            <div className="col-xs-12 text-center">
              <hr/>
              <Button className="btn-back" action={this.props.toggle} content={[<span key={0} className="fa fa-angle-double-left"></span> , 'Back to Projects']}/>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetails;
