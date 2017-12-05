import React, { Component } from 'react';
import ReactSlider from 'react-slick';

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var settings = {
        dots: this.props.dots,
        slidesToShow: this.props.slidesToShow,
        responsive: [
          {
            breakpoint: 768,
            slidesToShow: 1,
          }
        ]

    }

    return (
      <div className={this.props.className}>
        <ReactSlider {...settings}>
          {this.props.slides}
        </ReactSlider>
      </div>
    )
  }
}
 export default Slider;
