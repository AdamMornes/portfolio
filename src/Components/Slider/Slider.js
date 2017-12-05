import React, { Component } from 'react';
import 'slick-carousel';

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    if ($('.' + this.props.className).hasClass('slick-initialized')) {
      $('.' + this.props.className).slick('unslick');
    }
  }

  componentDidMount() {
    const classname = this.props.className;
    if (!$('.' + classname).hasClass('slick-initialized') && this.props.slidesToShow !== undefined) {
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
  }

  render() {
    const classname = this.props.className;
    if (!$('.' + classname).hasClass('slick-initialized') && this.props.slidesToShow !== undefined) {
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
    return (
      <div className={classname}>
          {this.props.slides}
      </div>
    )
  }
}
 export default Slider;
