import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classname = this.props.className;
    if (!$('.' + classname).hasClass('slick-initialized')) {
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
