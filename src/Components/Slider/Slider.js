import React, { Component } from 'react';
import ProjectBox from '../ProjectBox/ProjectBox';

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const slidesToShow = 3;
    const classname = this.props.className;
    $('.' + classname).slick({
      dots: this.props.dots,
      slidesToShow: this.props.slidesToShow,
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
    return (
      <div className={this.props.className}>
        {this.props.slides}
      </div>
    )
  }
}
 export default Slider;
